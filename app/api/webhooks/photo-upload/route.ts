/**
 * Photo Upload Webhook
 * Receives inbound email from Vercel Email (photos@brebuilders.ai)
 *
 * Flow:
 *   Crew emails photos@brebuilders.ai with photo attachments
 *   → Vercel Email routes to this endpoint as multipart/form-data
 *   → Security check: sender must be in allowlist
 *   → Upload each attachment to Vercel Blob Storage
 *   → Analyze with Claude Vision (if ANTHROPIC_API_KEY has credits — graceful fallback)
 *   → Match project from email subject
 *   → Store in bre_photos with approval_status = 'pending'
 *   → Return success
 */

import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

// ── Allowlist ─────────────────────────────────────────────────────────────────

const ALLOWED_SENDERS = new Set([
  'steve@brebuilders.com',
  'chris@brebuilders.com',
  'sean@brebuilders.com',
])

// ── Helpers ───────────────────────────────────────────────────────────────────

function normalizeSender(from: string): string {
  // "Steve Rosenthal <steve@brebuilders.com>" → "steve@brebuilders.com"
  const match = from.match(/<([^>]+)>/)
  return (match ? match[1] : from).toLowerCase().trim()
}

function slugFromSubject(subject: string): string | null {
  // "Kitchen Remodel - photo" → "kitchen-remodel"
  // "Glenbrook Lake Tahoe update" → "glenbrook-lake-tahoe"
  if (!subject) return null
  return subject
    .toLowerCase()
    .replace(/[–—-]\s*(photo|photos|update|pic|pics).*$/i, '')
    .replace(/\s*(photo|photos|update|pic|pics)\s*/gi, ' ')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || null
}

function crewNameFromEmail(email: string): string {
  const local = email.split('@')[0]
  return local.charAt(0).toUpperCase() + local.slice(1)
}

const isVideo = (mime: string) => mime.startsWith('video/')

// ── Claude Vision analysis (graceful degradation if no credits) ───────────────

async function analyzePhotoWithClaude(
  blobUrl: string,
  filename: string
): Promise<{ title: string; description: string; construction_phase: string; location_description: string }> {
  const fallback = {
    title: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
    description: 'Construction photo — pending AI analysis.',
    construction_phase: 'general',
    location_description: 'construction site',
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return fallback

  try {
    const client = new Anthropic({ apiKey })

    // Fetch image bytes for Claude Vision
    const imgResponse = await fetch(blobUrl)
    if (!imgResponse.ok) return fallback

    const arrayBuffer = await imgResponse.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')
    const mediaType = (imgResponse.headers.get('content-type') || 'image/jpeg') as
      | 'image/jpeg'
      | 'image/png'
      | 'image/gif'
      | 'image/webp'

    const response = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mediaType, data: base64 },
            },
            {
              type: 'text',
              text: `You are analyzing a construction photo for BRE Builders, a licensed general contractor in Reno NV.

Respond with ONLY a JSON object — no other text:
{
  "title": "Short descriptive title (5-8 words, e.g. 'Kitchen Tile Installation Progress')",
  "description": "One sentence describing what is shown in the photo",
  "construction_phase": "One of: demo, framing, rough-in, insulation, drywall, flooring, tile, cabinetry, fixtures, painting, finish, exterior, roofing, foundation, structural, landscaping, general",
  "location_description": "Where in the structure (e.g. 'kitchen', 'master bathroom', 'exterior west wall', 'foundation')"
}`,
            },
          ],
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const parsed = JSON.parse(text.replace(/```json|```/g, '').trim())
    return {
      title: parsed.title || fallback.title,
      description: parsed.description || fallback.description,
      construction_phase: parsed.construction_phase || fallback.construction_phase,
      location_description: parsed.location_description || fallback.location_description,
    }
  } catch (err) {
    // Credits exhausted, rate limited, or parse error — use filename-based fallback
    console.warn('[PHOTO-UPLOAD] Claude Vision unavailable, using fallback:', err instanceof Error ? err.message : String(err))
    return fallback
  }
}

// ── Main handler ──────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Parse multipart form data from Vercel Email
    const formData = await request.formData()

    const from = (formData.get('from') as string) || ''
    const subject = (formData.get('subject') as string) || ''

    console.log(`[PHOTO-UPLOAD] Received from="${from}" subject="${subject}"`)

    // Security: allowlist check
    const senderEmail = normalizeSender(from)
    if (!ALLOWED_SENDERS.has(senderEmail)) {
      console.warn(`[PHOTO-UPLOAD] BLOCKED: ${senderEmail} not in allowlist`)
      return NextResponse.json({ success: false, reason: 'unauthorized' }, { status: 403 })
    }

    // Collect image/video attachments
    const attachments: File[] = []
    const entries = Array.from(formData.entries())
    for (const [, value] of entries) {
      if (value instanceof File && value.size > 0) {
        const mime = value.type.toLowerCase()
        if (mime.startsWith('image/') || mime.startsWith('video/')) {
          attachments.push(value)
        }
      }
    }

    if (attachments.length === 0) {
      return NextResponse.json({ success: false, reason: 'No image or video attachments' }, { status: 400 })
    }

    // Match project from subject line
    const subjectSlug = slugFromSubject(subject)
    let projectId: string | null = null

    if (subjectSlug) {
      const { data: project } = await supabase
        .from('bre_projects')
        .select('id')
        .ilike('project_slug', `%${subjectSlug}%`)
        .eq('status', 'active')
        .limit(1)
        .single()
      if (project) {
        projectId = project.id
        console.log(`[PHOTO-UPLOAD] Project match: "${subjectSlug}" → ${projectId}`)
      }
    }

    const crewName = crewNameFromEmail(senderEmail)
    const today = new Date().toISOString().split('T')[0]

    const results: Array<{ filename: string; status: string; photoId?: string; title?: string }> = []

    for (const file of attachments) {
      try {
        const filename = file.name || `upload-${Date.now()}.jpg`
        const mime = file.type || 'image/jpeg'

        // Upload to Vercel Blob
        const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_')
        const blobPath = `bre-photos/${Date.now()}-${safeName}`
        const { url: blobUrl } = await put(blobPath, file, {
          access: 'public',
          contentType: mime,
        })

        if (isVideo(mime)) {
          const videoId = crypto.randomUUID()
          await supabase.from('bre_videos').insert({
            id: videoId,
            project_id: projectId,
            blob_url_original: blobUrl,
            filename,
            crew_member: crewName,
            compression_status: 'pending',
            published_to_website: false,
          })
          results.push({ filename, status: 'pending_compression', photoId: videoId })
          continue
        }

        // Analyze with Claude Vision (falls back gracefully if no credits)
        const analysis = await analyzePhotoWithClaude(blobUrl, filename)

        const photoId = crypto.randomUUID()
        await supabase.from('bre_photos').insert({
          id: photoId,
          project_id: projectId,
          blob_url: blobUrl,
          blob_size: file.size,
          filename,
          title: analysis.title,
          description: analysis.description,
          ai_description: analysis.description,
          construction_phase: analysis.construction_phase,
          location_description: analysis.location_description,
          crew_member: crewName,
          crew_email: senderEmail,
          date_taken: today,
          approval_status: 'pending',
          published_to_gallery: false,
          published_to_website: false,
        })

        console.log(`[PHOTO-UPLOAD] Stored ${photoId} — "${analysis.title}"`)
        results.push({ filename, status: 'pending_approval', photoId, title: analysis.title })
      } catch (err) {
        console.error('[PHOTO-UPLOAD] Attachment error:', err)
        results.push({ filename: 'unknown', status: 'error' })
      }
    }

    const successCount = results.filter(r => r.status !== 'error').length
    return NextResponse.json({
      success: true,
      message: `${successCount} file(s) received — pending Steve's approval`,
      sender: senderEmail,
      project_matched: projectId !== null,
      results,
    })
  } catch (error) {
    console.error('[PHOTO-UPLOAD] Fatal:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

// GET — health check and Vercel Email domain verification
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: 'BRE Builders photo upload webhook',
    allowed_senders: Array.from(ALLOWED_SENDERS),
  })
}
