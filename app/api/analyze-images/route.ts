import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import OpenAI from 'openai'

const ANALYSIS_PROMPT = `You are a licensed general contractor with 35+ years of experience in residential and commercial construction in Nevada and California.

Analyze this construction/property photo and respond with ONLY valid JSON (no markdown, no commentary):

{
  "summary": "2-3 sentence plain-English description of what you see",
  "damage_type": "specific type of issue/condition (e.g. 'Diagonal foundation crack', 'Dry rot at rim joist', 'Active water intrusion at base wall')",
  "severity": "minor|moderate|severe|critical",
  "urgency": "immediate|within-1-week|within-2-weeks|within-month|non-urgent|informational",
  "affected_area": "specific location in the photo (e.g. 'NE corner foundation wall', 'Kitchen soffit above window')",
  "materials_visible": ["list", "of", "visible", "materials"],
  "contractor_notes": "What an experienced contractor would notice that a homeowner might miss. Be specific and technical.",
  "scope_estimate": "Rough scope description of what work this likely requires (e.g. '2-4 helical piers + crack injection + waterproofing membrane'). Do NOT give dollar amounts.",
  "similar_portfolio": "Which BRE project does this most resemble: quaking-aspen-repair, lake-tahoe-deck, rio-tinto-renovation, ripon-estate, car-wash-reno, or none",
  "questions_to_ask": ["2-3 questions a contractor would ask the homeowner about this specific issue"],
  "red_flags": ["any safety or code concerns that stand out immediately"],
  "photo_quality": "clear|acceptable|too-dark|too-close|too-far|obstructed",
  "needs_more_photos": true/false,
  "more_photos_note": "If needs_more_photos is true, what angle or area they should photograph next"
}`

export async function POST(req: NextRequest) {
  try {
    const { leadId, images } = await req.json()

    if (!leadId || !images?.length) {
      return NextResponse.json({ error: 'Missing leadId or images' }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI not configured' }, { status: 500 })
    }

    const openai = new OpenAI({ apiKey })
    const results: unknown[] = []

    for (const img of images as { url: string; service: string; imageId: string }[]) {
      try {
        const response = await openai.chat.completions.create({
          model: 'gpt-4o',
          max_tokens: 800,
          messages: [
            {
              role: 'user',
              content: [
                { type: 'image_url', image_url: { url: img.url, detail: 'high' } },
                { type: 'text', text: ANALYSIS_PROMPT },
              ],
            },
          ],
        })

        const raw = response.choices[0]?.message?.content || '{}'
        let analysis: Record<string, unknown>

        try {
          // Strip any markdown code fences if model adds them
          const clean = raw.replace(/^```json?\n?/,'').replace(/\n?```$/,'').trim()
          analysis = JSON.parse(clean)
        } catch {
          analysis = { summary: raw, parse_error: true }
        }

        // Save analysis to Supabase
        const { error: updateError } = await supabaseAdmin
          .from('lead_images')
          .update({
            ai_analyzed:    true,
            ai_analysis:    analysis,
            analysis_model: 'gpt-4o',
            analysis_tokens: response.usage?.total_tokens || 0,
          })
          .eq('id', img.imageId)

        if (updateError) console.error('Image update error:', updateError)

        results.push({ imageId: img.imageId, analysis })

        // Brief pause between calls
        await new Promise(r => setTimeout(r, 300))
      } catch (imgError) {
        console.error(`Analysis failed for image ${img.imageId}:`, imgError)
        results.push({ imageId: img.imageId, error: 'Analysis failed' })
      }
    }

    // Log activity
    await supabaseAdmin.from('activity_log').insert({
      lead_id:  leadId,
      actor:    'system',
      action:   'images.analyzed',
      metadata: { count: images.length, model: 'gpt-4o' },
    })

    // If any severity is 'critical' or 'severe', bump lead score +10
    const hasSevere = results.some((r) => {
      const res = r as Record<string, unknown>
      const analysis = res.analysis as Record<string, unknown> | undefined
      return analysis?.severity === 'critical' || analysis?.severity === 'severe'
    })

    if (hasSevere) {
      // Update ai_summary with severity flag
      await supabaseAdmin
        .from('leads')
        .update({ ai_summary: `⚠ Severe/critical condition detected in ${images.length} photo(s)` })
        .eq('id', leadId)
    }

    return NextResponse.json({ success: true, analyzed: results.length })
  } catch (err) {
    console.error('Image analysis error:', err)
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 })
  }
}
