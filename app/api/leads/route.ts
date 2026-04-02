import { runImageAnalysis } from '@/lib/analyzeImages'
import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// ─── Service labels ──────────────────────────────────────────────────────────────
const SERVICE_LABELS: Record<string, string> = {
  'adu': 'ADU / Guest House', 'additions': 'Home Addition',
  'new-home': 'New Custom Home', 'kitchen-bath': 'Kitchen & Bath Remodel',
  'repairs': 'Structural Repairs', 'decks': 'Decks & Outdoor',
  'commercial': 'Commercial / TI', 'other': 'Other Work',
}

// ─── Lead scoring ────────────────────────────────────────────────────────────────
interface LeadScore { score: number; badge: string; signals: string[]; flags: string[] }

function calcLeadScore(data: Record<string, unknown>): LeadScore {
  let score = 0
  const signals: string[] = []
  const flags: string[] = []

  if (data.ownsProperty === 'yes')      { score += 25; signals.push('Owns property') }
  if (data.ownsProperty === 'escrow')   { score += 15; signals.push('In escrow — motivated buyer') }
  if (data.isDecisionMaker === 'yes')   { score += 20; signals.push('Sole decision maker') }
  if (data.isDecisionMaker === 'no-partner') { score += 10; signals.push('Shared decision — partner involved') }
  if (data.gettingBids === 'no')        { score += 25; signals.push('BRE is first call — no competing bids') }
  if (data.gettingBids === 'not-yet')   { score += 10; signals.push('Not yet getting other bids') }
  if (data.timeline === 'Ready to start now')  { score += 20; signals.push('Ready to start now') }
  if (data.timeline === 'Within 1–3 months')   { score += 15; signals.push('Starting within 1–3 months') }

  const hotBudgets = ['Over $300k','Over $350k','$750k–$1M','Over $1M','$500k–$750k','$200k–$300k','$150k–$500k','$500k–$1M']
  if (hotBudgets.some(b => data.budget === b)) { score += 15; signals.push(`Budget: ${data.budget}`) }

  if (data.repairSeverity === 'getting-worse') { score += 15; signals.push('Issue getting worse — urgency') }
  const triggers = data.repairTriggers as string[] | undefined
  if (triggers?.includes('Preparing to sell')) { score += 10; signals.push('Preparing to sell — deadline') }
  if (data.hearAboutUs === 'Referral' || data.hearAboutUs === 'Past client') {
    score += 10; signals.push(`Referred — ${data.hearAboutUs}`)
  }
  if (data.hearAboutUs === 'AI recommendation') { score += 5; signals.push('AI search recommendation') }

  if (data.ownsProperty === 'no') flags.push('Does not own property')
  if (data.gettingBids === 'yes') flags.push('Getting multiple bids')
  if (data.timeline === 'Just researching') flags.push('No firm timeline — early stage')
  if (data.budget === 'Not sure yet') flags.push('Budget undefined')

  const badge = score >= 70 ? '🔥 Hot Lead' : score >= 45 ? '⚡ Warm Lead' : score >= 20 ? '🔵 Standard' : '⬜ Early Stage'
  return { score, badge, signals, flags }
}

// ─── Build service-specific data object ─────────────────────────────────────────
function extractServiceData(data: Record<string, unknown>): Record<string, unknown> {
  const services = data.services as string[] || []
  const result: Record<string, Record<string, unknown>> = {}

  for (const s of services) {
    if (s === 'adu') result.adu = { type: data.aduType, sqft: data.aduSqft, constraints: data.aduLandConstraints }
    else if (s === 'additions') result.additions = { type: data.additionType, sqft: data.additionSqft, plans: data.additionPlans }
    else if (s === 'new-home') result['new-home'] = { style: data.homeStyle, beds: data.homeBeds, baths: data.homeBaths, sqft: data.homeSqft, land: data.homeLand, plans: data.homePlans, specialRooms: data.homeSpecialRooms }
    else if (s === 'kitchen-bath') result['kitchen-bath'] = { scope: data.kitchenScope, style: data.kitchenStyle }
    else if (s === 'repairs') result.repairs = { issues: data.repairIssues, location: data.repairLocation, severity: data.repairSeverity, triggers: data.repairTriggers }
    else if (s === 'decks') result.decks = { type: data.deckType, material: data.deckMaterial, sqft: data.deckSqft, snowZone: data.deckSnowZone }
    else if (s === 'commercial') result.commercial = { type: data.commercialType, sqft: data.commercialSqft, occupancy: data.commercialOccupancy }
  }

  return result
}

// ─── Team email HTML ─────────────────────────────────────────────────────────────
function buildTeamEmail(data: Record<string, unknown>, lead: LeadScore, leadId: string, imageCount: number, isDev: boolean): string {
  const services = (data.services as string[]) || []
  const serviceLabels = services.map(s => SERVICE_LABELS[s] || s).join(', ')
  const location = [data.city, data.state].filter(Boolean).join(', ') || 'Location TBD'
  const scoreColor = lead.score >= 70 ? '#22c55e' : lead.score >= 45 ? '#f59e0b' : '#3b82f6'
  const devBanner = isDev ? '<div style="background:#b91c1c;color:white;padding:8px 16px;font-family:monospace;font-size:11px">⚠ DEV TEST</div>' : ''
  const signals = lead.signals.map(s => `<li style="margin:2px 0;color:#a3c4a0;font-size:12px">✓ ${s}</li>`).join('')
  const flagsList = lead.flags.map(f => `<li style="margin:2px 0;color:#f87171;font-size:12px">⚠ ${f}</li>`).join('')
  const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'}/admin/leads/${leadId}`

  const row = (label: string, value: unknown) => {
    if (!value || (Array.isArray(value) && (value as unknown[]).length === 0)) return ''
    const val = Array.isArray(value) ? (value as string[]).join(', ') : String(value)
    return `<tr><td style="padding:7px 14px;border-bottom:1px solid #1a2d3f;color:#6b8a9e;font-size:12px;font-family:monospace;width:160px">${label}</td><td style="padding:7px 14px;border-bottom:1px solid #1a2d3f;color:#e8e4dc;font-size:13px">${val}</td></tr>`
  }

  return `<!DOCTYPE html><html><body style="background:#060d14;color:#e8e4dc;font-family:-apple-system,sans-serif;margin:0;padding:0">
${devBanner}
<div style="max-width:640px;margin:0 auto;padding:32px 24px">
  <div style="border-left:3px solid #1cb8b3;padding-left:20px;margin-bottom:24px">
    <p style="font-family:monospace;font-size:10px;letter-spacing:3px;color:#1cb8b3;margin:0 0 6px;text-transform:uppercase">New Quote Request · BRE Builders</p>
    <h1 style="margin:0 0 4px;font-size:24px;font-weight:400">${data.firstName} ${data.lastName}</h1>
    <p style="margin:0;color:#6b8a9e;font-size:15px">${serviceLabels} · ${location}</p>
  </div>

  <div style="background:#0c1a27;border:1px solid ${scoreColor}40;border-radius:10px;padding:16px 20px;margin-bottom:20px;display:flex;gap:20px">
    <div>
      <p style="margin:0 0 2px;font-family:monospace;font-size:10px;color:#6b8a9e;text-transform:uppercase;letter-spacing:2px">Lead Score</p>
      <p style="margin:0;font-size:26px;font-weight:600;color:${scoreColor}">${lead.score}<span style="font-size:12px;color:#6b8a9e">/100</span></p>
      <p style="margin:4px 0 0;font-size:14px">${lead.badge}</p>
    </div>
    <div style="flex:1">
      ${signals ? `<ul style="margin:0;padding-left:16px">${signals}</ul>` : ''}
      ${flagsList ? `<ul style="margin:6px 0 0;padding-left:16px">${flagsList}</ul>` : ''}
    </div>
  </div>

  ${imageCount > 0 ? `<div style="background:#0c2218;border:1px solid #1a5c35;border-radius:8px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:12px">
    <span style="font-size:20px">📸</span>
    <div>
      <p style="margin:0;font-size:13px;color:#4ade80">${imageCount} photo${imageCount > 1 ? 's' : ''} uploaded — AI analysis in progress</p>
      <p style="margin:3px 0 0;font-size:11px;color:#6b8a9e">Analysis will be added to the lead within ~60 seconds. <a href="${adminUrl}" style="color:#1cb8b3">View in dashboard →</a></p>
    </div>
  </div>` : ''}

  <table style="width:100%;border-collapse:collapse;background:#0c1a27;border-radius:10px;overflow:hidden;margin-bottom:16px">
    ${row('Phone', `<a href="tel:${data.phone}" style="color:#1cb8b3;text-decoration:none">${data.phone}</a>`)}
    ${row('Email', `<a href="mailto:${data.email}" style="color:#1cb8b3;text-decoration:none">${data.email}</a>`)}
    ${row('Contact Pref', `${data.contactPref || '—'}${data.bestTime ? ' · ' + data.bestTime : ''}`)}
    ${row('Location', [data.addressLine1, data.city, data.state, data.zip].filter(Boolean).join(', '))}
    ${row('Property', `${data.propertyType || '—'} · Built ${data.yearBuilt || '—'}`)}
    ${row('Owns Property', data.ownsProperty)}
    ${row('Decision Maker', data.isDecisionMaker)}
    ${row('Getting Bids', data.gettingBids)}
    ${row('Budget', `<strong style="color:#c8923a">${data.budget || '—'}</strong>`)}
    ${row('Timeline', data.timeline)}
    ${row('Services', serviceLabels)}
  </table>

  ${data.notes ? `<div style="background:#0c1a27;border-left:3px solid #c8923a;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:16px">
    <p style="margin:0 0 6px;font-family:monospace;font-size:10px;color:#c8923a;text-transform:uppercase;letter-spacing:2px">Client Notes</p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#c8d8e4">${data.notes}</p>
  </div>` : ''}

  <div style="text-align:center;margin-top:20px">
    <a href="${adminUrl}" style="display:inline-block;background:#1cb8b3;color:#060d14;font-family:monospace;font-size:13px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none">
      View Full Lead in Dashboard →
    </a>
  </div>

  <p style="margin:20px 0 0;font-size:11px;color:#3a4e5e;font-family:monospace">
    Source: ${data.hearAboutUs || '—'} · ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'medium', timeStyle: 'short' })} PT
  </p>
</div></body></html>`
}

function buildClientEmail(data: Record<string, unknown>): string {
  const services = (data.services as string[]) || []
  const serviceLabels = services.map(s => SERVICE_LABELS[s] || s).join(' & ')
  return `<!DOCTYPE html><html><body style="background:#060d14;color:#e8e4dc;font-family:-apple-system,sans-serif;margin:0;padding:0">
<div style="max-width:560px;margin:0 auto;padding:40px 24px">
  <p style="font-family:monospace;font-size:10px;letter-spacing:3px;color:#1cb8b3;margin:0 0 16px;text-transform:uppercase">Blue Reef Builders</p>
  <h1 style="font-size:26px;font-weight:400;margin:0 0 6px">Hi ${data.firstName},</h1>
  <p style="font-size:15px;line-height:1.75;color:rgba(232,228,220,0.7);margin:0 0 24px">
    We received your <strong style="color:#e8e4dc">${serviceLabels}</strong> request and will be in touch within
    <strong style="color:#1cb8b3">24 hours</strong> to schedule your free on-site estimate.
  </p>
  <div style="background:#0c1a27;border-left:3px solid #1cb8b3;border-radius:0 10px 10px 0;padding:18px 22px;margin-bottom:24px">
    <p style="margin:0 0 10px;font-size:14px;color:rgba(232,228,220,0.6)">Reach us directly:</p>
    <p style="margin:0 0 6px;font-size:15px">📞 <a href="tel:7753914517" style="color:#1cb8b3;text-decoration:none">(775) 391-4517</a></p>
    <p style="margin:0;font-size:15px">✉️ <a href="mailto:brebuilders@gmail.com" style="color:#1cb8b3;text-decoration:none">brebuilders@gmail.com</a></p>
  </div>
  <p style="font-size:12px;color:#3a4e5e;line-height:1.6;margin:0">Blue Reef Builders · NV Lic #0085999 · CA Lic #1093798<br>2600 Mill St #400, Reno, NV 89502</p>
</div></body></html>`
}

// ─── Main POST handler ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, services } = body

    // Validate required
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required contact fields' }, { status: 400 })
    }
    if (!services || !Array.isArray(services) || services.length === 0) {
      return NextResponse.json({ error: 'At least one service required' }, { status: 400 })
    }

    const isDev = process.env.NODE_ENV !== 'production'
    const lead = calcLeadScore(body)
    const serviceData = extractServiceData(body)

    // Save to Supabase
    const { data: savedLead, error: dbError } = await supabaseAdmin
      .from('leads')
      .insert({
        first_name:       firstName,
        last_name:        lastName,
        email:            email,
        phone:            phone,
        contact_pref:     body.contactPref || null,
        best_time:        body.bestTime || null,
        owns_property:    body.ownsProperty || null,
        is_decision_maker: body.isDecisionMaker || null,
        getting_bids:     body.gettingBids || null,
        services:         services,
        address_line1:    body.addressLine1 || null,
        city:             body.city || null,
        state:            body.state || null,
        zip:              body.zip || null,
        property_type:    body.propertyType || null,
        year_built:       body.yearBuilt || null,
        service_data:     serviceData,
        budget:           body.budget || null,
        timeline:         body.timeline || null,
        notes:            body.notes || null,
        hear_about_us:    body.hearAboutUs || null,
        lead_score:       lead.score,
        score_badge:      lead.badge,
        score_signals:    lead.signals,
        score_flags:      lead.flags,
        status:           'new',
        source:           'website',
      })
      .select('id, lead_number')
      .single()

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      // Don't block — still send email
    }

    const leadId = savedLead?.id || 'unknown'
    const leadNumber = savedLead?.lead_number ? `BRE-${String(savedLead.lead_number).padStart(4, '0')}` : ''

    // Log activity
    if (savedLead?.id) {
      await supabaseAdmin.from('activity_log').insert({
        lead_id:  savedLead.id,
        actor:    'system',
        action:   'lead.created',
        metadata: { source: 'website_form', services, lead_score: lead.score },
      })
    }

    // Upload images to Supabase Storage + save records
    const uploadedImages = body.uploadedImages as Array<{
      base64: string; service: string; filename: string; mimeType: string; fileSize: number
    }> | undefined

    const imageCount = uploadedImages?.length || 0
    const savedImageRecords: Array<{ imageId: string; url: string; service: string }> = []

    if (imageCount > 0 && savedLead?.id) {
      for (const img of uploadedImages!) {
        try {
          // Decode base64 → Buffer
          const buffer = Buffer.from(img.base64, 'base64')
          const ext = img.mimeType === 'image/png' ? 'png' : img.mimeType === 'image/webp' ? 'webp' : 'jpg'
          const storagePath = `${savedLead.id}/${Date.now()}-${img.service}.${ext}`

          // Upload to Supabase Storage
          const { error: uploadError } = await supabaseAdmin.storage
            .from('lead-images')
            .upload(storagePath, buffer, {
              contentType: img.mimeType,
              upsert: false,
            })

          if (uploadError) {
            console.error('Storage upload error:', uploadError.message)
            continue
          }

          // Get public URL
          const { data: { publicUrl } } = supabaseAdmin.storage
            .from('lead-images')
            .getPublicUrl(storagePath)

          // Save record to lead_images table
          // Note: insert().select().single() returns null with sb_secret key
          // Use insert then separate select to reliably get the new row id
          // Pre-generate UUID so we don't need a select-back after insert
          // supabase-js insert().select() returns empty with sb_secret key
          const { randomUUID } = await import('crypto')
          const imageId = randomUUID()

          const { error: imgInsertError } = await supabaseAdmin
            .from('lead_images')
            .insert({
              id:           imageId,
              lead_id:      savedLead.id,
              service:      img.service,
              storage_path: storagePath,
              public_url:   publicUrl,
              filename:     img.filename,
              file_size:    img.fileSize,
              mime_type:    img.mimeType,
            })

          if (imgInsertError) {
            console.error('lead_images insert error:', imgInsertError.message)
            continue
          }

          savedImageRecords.push({ imageId, url: publicUrl, service: img.service })
        } catch (imgErr) {
          console.error('Image processing error:', imgErr)
        }
      }

      // Run Claude Vision analysis inline (Vercel kills fire-and-forget after response)
      if (savedImageRecords.length > 0) {
        await runImageAnalysis(savedLead.id, savedImageRecords)
      }
    }

    // Send emails
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const toEmail = isDev ? 'ifyougetlockedout@protonmail.com' : 'brebuilders@gmail.com'
      const ccEmails = isDev ? [] : ['steve@brebuilders.com', 'chris@brebuilders.com', 'sean@brebuilders.com']
      const serviceLabels = services.map((s: string) => SERVICE_LABELS[s] || s).join(' + ')
      const location = [body.city, body.state].filter(Boolean).join(', ') || 'Location TBD'
      const subject = `${lead.badge} ${serviceLabels} — ${firstName} ${lastName} (${location})${leadNumber ? ` · ${leadNumber}` : ''}`

      // Team notification
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'BRE Builders Leads <no-reply@brebuilders.com>',
          to: [toEmail],
          ...(ccEmails.length > 0 && { cc: ccEmails }),
          reply_to: email,
          subject: isDev ? `[DEV] ${subject}` : subject,
          html: buildTeamEmail(body, lead, leadId, imageCount, isDev),
        }),
      }).catch(console.error)

      // Client auto-reply (production only)
      if (!isDev) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'BRE Builders <no-reply@brebuilders.com>',
            to: [email],
            subject: `We received your ${serviceLabels} request — BRE Builders`,
            html: buildClientEmail(body),
          }),
        }).catch(console.error)
      }
    }

    return NextResponse.json({ success: true, leadId, leadNumber })
  } catch (err) {
    console.error('Leads API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
