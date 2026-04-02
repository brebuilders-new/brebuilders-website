import Anthropic from '@anthropic-ai/sdk'
import { supabaseAdmin } from '@/lib/supabase'

const ANALYSIS_PROMPT = `You are a licensed general contractor with 35+ years of experience in residential and commercial construction in Nevada and California.

Analyze this construction/property photo and respond with ONLY valid JSON (no markdown, no commentary):

{
  "summary": "2-3 sentence plain-English description of what you see",
  "damage_type": "specific type of issue/condition",
  "severity": "minor|moderate|severe|critical",
  "urgency": "immediate|within-1-week|within-2-weeks|within-month|non-urgent|informational",
  "affected_area": "specific location in the photo",
  "materials_visible": ["list", "of", "visible", "materials"],
  "contractor_notes": "What an experienced contractor would notice that a homeowner might miss. Be specific and technical.",
  "scope_estimate": "Rough scope of work required. Do NOT give dollar amounts.",
  "similar_portfolio": "Which BRE project does this most resemble: quaking-aspen-repair, lake-tahoe-deck, rio-tinto-renovation, ripon-estate, car-wash-reno, or none",
  "questions_to_ask": ["2-3 questions a contractor would ask the homeowner"],
  "red_flags": ["any safety or code concerns"],
  "photo_quality": "clear|acceptable|too-dark|too-close|too-far|obstructed",
  "needs_more_photos": false,
  "more_photos_note": "what angle or area to photograph next if needed"
}`

export async function runImageAnalysis(
  leadId: string,
  images: Array<{ imageId: string; url: string; service: string }>
): Promise<{ analyzed: number; errors: number }> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not set — skipping image analysis')
    return { analyzed: 0, errors: images.length }
  }

  const client = new Anthropic({ apiKey })
  let analyzed = 0
  let errors = 0

  for (const img of images) {
    try {
      // Fetch image from Supabase Storage
      const imgResp = await fetch(img.url)
      if (!imgResp.ok) throw new Error(`Failed to fetch image: ${imgResp.status}`)
      const imgBuffer = await imgResp.arrayBuffer()
      const base64Data = Buffer.from(imgBuffer).toString('base64')
      const rawType = imgResp.headers.get('content-type') || 'image/jpeg'
      const mediaType = (
        ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(rawType)
          ? rawType : 'image/jpeg'
      ) as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp'

      const message = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64Data } },
            { type: 'text', text: ANALYSIS_PROMPT },
          ],
        }],
      })

      const raw = message.content[0].type === 'text' ? message.content[0].text : '{}'
      let analysis: Record<string, unknown>
      try {
        analysis = JSON.parse(raw.replace(/^```json?\n?/, '').replace(/\n?```$/, '').trim())
      } catch {
        analysis = { summary: raw, parse_error: true }
      }

      await supabaseAdmin.from('lead_images').update({
        ai_analyzed: true,
        ai_analysis: analysis,
        analysis_model: 'claude-haiku-4-5-20251001',
        analysis_tokens: message.usage.input_tokens + message.usage.output_tokens,
      }).eq('id', img.imageId)

      analyzed++
      await new Promise(r => setTimeout(r, 300))

    } catch (err) {
      console.error(`Analysis failed for image ${img.imageId}:`, err)
      errors++
    }
  }

  // Log activity
  await supabaseAdmin.from('activity_log').insert({
    lead_id: leadId,
    actor: 'system',
    action: 'images.analyzed',
    metadata: { count: images.length, analyzed, errors, model: 'claude-haiku-4-5-20251001' },
  })

  // Flag lead if severe damage detected
  if (analyzed > 0) {
    const { data: imgRecords } = await supabaseAdmin
      .from('lead_images')
      .select('ai_analysis')
      .eq('lead_id', leadId)
      .eq('ai_analyzed', true)

    const hasSevere = imgRecords?.some(r => {
      const a = r.ai_analysis as Record<string, unknown> | null
      return a?.severity === 'critical' || a?.severity === 'severe'
    })

    if (hasSevere) {
      await supabaseAdmin.from('leads')
        .update({ ai_summary: `⚠ Severe/critical condition detected in ${images.length} photo(s) — review immediately` })
        .eq('id', leadId)
    }
  }

  return { analyzed, errors }
}
