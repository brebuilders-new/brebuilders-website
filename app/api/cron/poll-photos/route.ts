/**
 * Photo Inbox Poller — Cron Job
 * Runs every 5 minutes via Vercel Cron
 *
 * Polls brebuilders@gmail.com inbox for emails sent to brebuilders+photos@gmail.com
 * from the allowed crew (steve@, chris@, sean@ @brebuilders.com)
 * Downloads attachments → uploads to Vercel Blob → Claude Vision analysis → Supabase pending
 *
 * Crew workflow: email photos to brebuilders+photos@gmail.com with subject = project name
 */

import { NextRequest, NextResponse } from 'next/server'
import { ImapFlow } from 'imapflow'
import { put } from '@vercel/blob'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

// ── Config ────────────────────────────────────────────────────────────────────

const PHOTO_TO_ADDRESS = 'brebuilders+photos@gmail.com'

const ALLOWED_SENDERS = new Set([
  'steve@brebuilders.com',
  'chris@brebuilders.com',
  'sean@brebuilders.com',
])

// ── Helpers ───────────────────────────────────────────────────────────────────

function normalizeSender(from: string): string {
  const match = from.match(/<([^>]+)>/)
  return (match ? match[1] : from).toLowerCase().trim()
}

function slugFromSubject(subject: string): string | null {
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

// ── Claude Vision (graceful fallback) ─────────────────────────────────────────

async function analyzePhoto(
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
    const imgRes = await fetch(blobUrl)
    if (!imgRes.ok) return fallback

    const base64 = Buffer.from(await imgRes.arrayBuffer()).toString('base64')
    const mediaType = (imgRes.headers.get('content-type') || 'image/jpeg') as
      | 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp'

    const response = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
          {
            type: 'text',
            text: `Analyze this construction photo for BRE Builders (licensed GC, Reno NV).
Respond ONLY with JSON:
{
  "title": "Short title 5-8 words",
  "description": "One sentence description",
  "construction_phase": "one of: demo, framing, rough-in, insulation, drywall, flooring, tile, cabinetry, fixtures, painting, finish, exterior, roofing, foundation, structural, landscaping, general",
  "location_description": "where in the structure e.g. kitchen, master bath, exterior west wall"
}`,
          },
        ],
      }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const parsed = JSON.parse(text.replace(/```json|```/g, '').trim())
    return {
      title: parsed.title || fallback.title,
      description: parsed.description || fallback.description,
      construction_phase: parsed.construction_phase || fallback.construction_phase,
      location_description: parsed.location_description || fallback.location_description,
    }
  } catch {
    return fallback
  }
}

// ── Main handler ──────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET(request: NextRequest) {
  // Verify this is a legitimate Vercel Cron call
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const gmailUser = process.env.GMAIL_USER
  const gmailPass = process.env.GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: 'Gmail credentials not configured' }, { status: 500 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const client = new ImapFlow({
    host: 'imap.gmail.com',
    port: 993,
    secure: true,
    auth: { user: gmailUser, pass: gmailPass },
    logger: false,
  })

  let processed = 0
  let skipped = 0
  const results: Array<{ uid: number; filename: string; status: string; title?: string }> = []

  try {
    await client.connect()
    await client.mailboxOpen('INBOX')

    const searchResult = await client.search({
      seen: false,
      to: PHOTO_TO_ADDRESS,
    })
    const messages = Array.isArray(searchResult) ? searchResult : []

    console.log(`[POLL-PHOTOS] Found ${messages.length} unread messages to ${PHOTO_TO_ADDRESS}`)

    for (const uid of messages) {
      try {
        const msg = await client.fetchOne(String(uid), {
          envelope: true,
          bodyStructure: true,
          source: true,
        })

        if (!msg) continue

        // Check sender
        const fromAddr = msg.envelope?.from?.[0]
        const rawFrom = fromAddr
          ? `${fromAddr.name || ''} <${(fromAddr as unknown as { mailbox: string; host: string }).mailbox}@${(fromAddr as unknown as { mailbox: string; host: string }).host}>`
          : ''
        const senderEmail = normalizeSender(rawFrom)

        if (!ALLOWED_SENDERS.has(senderEmail)) {
          console.log(`[POLL-PHOTOS] Skipping — sender not allowed: ${senderEmail}`)
          // Mark as seen so we don't reprocess
          await client.messageFlagsAdd(String(uid), ['\\Seen'], { uid: true })
          skipped++
          continue
        }

        const subject = msg.envelope?.subject || ''
        const subjectSlug = slugFromSubject(subject)
        const crewName = crewNameFromEmail(senderEmail)
        const today = new Date().toISOString().split('T')[0]

        // Match project from subject
        let projectId: string | null = null
        if (subjectSlug) {
          const { data: project } = await supabase
            .from('bre_projects')
            .select('id')
            .ilike('project_slug', `%${subjectSlug}%`)
            .eq('status', 'active')
            .limit(1)
            .single()
          if (project) projectId = project.id
        }

        // Parse raw source for attachments
        const raw = msg.source
        if (!raw) {
          await client.messageFlagsAdd(String(uid), ['\\Seen'], { uid: true })
          continue
        }

        // Use nodemailer/mailparser-style boundary parsing
        // Extract base64 attachments from raw MIME
        const rawStr = raw.toString()
        const attachmentRegex = /Content-Disposition:\s*attachment[^]*?Content-Transfer-Encoding:\s*base64[^]*?\r\n\r\n([\s\S]*?)(?=--|\z)/gi
        const contentTypeRegex = /Content-Type:\s*(image\/\w+|video\/\w+)(?:;\s*name="([^"]+)")?/i
        const filenameRegex = /filename(?:\*\d+)?\*?="?([^"\r\n;]+)"?/i

        // Split by MIME boundary
        const boundaryMatch = rawStr.match(/boundary="?([^"\r\n]+)"?/i)
        if (!boundaryMatch) {
          await client.messageFlagsAdd(String(uid), ['\\Seen'], { uid: true })
          continue
        }

        const boundary = boundaryMatch[1]
        const parts = rawStr.split(`--${boundary}`)

        for (const part of parts) {
          const ctMatch = part.match(contentTypeRegex)
          if (!ctMatch) continue

          const mimeType = ctMatch[1].toLowerCase()
          if (!mimeType.startsWith('image/') && !mimeType.startsWith('video/')) continue

          // Extract filename
          const fnMatch = part.match(filenameRegex) || part.match(/name="([^"]+)"/i)
          const filename = fnMatch ? fnMatch[1].trim() : `upload-${Date.now()}.${mimeType.split('/')[1]}`

          // Extract base64 data
          const b64Match = part.match(/Content-Transfer-Encoding:\s*base64\r?\n\r?\n([\s\S]+)/i)
          if (!b64Match) continue

          const b64 = b64Match[1].replace(/\s/g, '')
          const buffer = Buffer.from(b64, 'base64')

          // Upload to Vercel Blob
          const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_')
          const blobPath = `bre-photos/${Date.now()}-${safeName}`
          const { url: blobUrl } = await put(blobPath, buffer, {
            access: 'public',
            contentType: mimeType,
          })

          if (mimeType.startsWith('video/')) {
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
            results.push({ uid, filename, status: 'pending_compression' })
            processed++
            continue
          }

          // Claude Vision analysis
          const analysis = await analyzePhoto(blobUrl, filename)

          const photoId = crypto.randomUUID()
          await supabase.from('bre_photos').insert({
            id: photoId,
            project_id: projectId,
            blob_url: blobUrl,
            blob_size: buffer.length,
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

          console.log(`[POLL-PHOTOS] Stored ${photoId} — "${analysis.title}"`)
          results.push({ uid, filename, status: 'pending_approval', title: analysis.title })
          processed++
        }

        // Mark email as seen so we don't reprocess it
        await client.messageFlagsAdd(String(uid), ['\\Seen'], { uid: true })
      } catch (msgErr) {
        console.error(`[POLL-PHOTOS] Error processing uid ${uid}:`, msgErr)
      }
    }

    await client.logout()

    return NextResponse.json({
      success: true,
      processed,
      skipped,
      results,
    })
  } catch (error) {
    console.error('[POLL-PHOTOS] Fatal:', error)
    try { await client.logout() } catch {}
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
