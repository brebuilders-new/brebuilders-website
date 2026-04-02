import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, service } = body

    if (!firstName || !lastName || !email || !phone || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      console.error('RESEND_API_KEY not set')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const isDev = process.env.NODE_ENV !== 'production'
    const toEmail = isDev ? 'ifyougetlockedout@protonmail.com' : 'brebuilders@gmail.com'
    const ccEmails = isDev ? [] : ['steve@brebuilders.com', 'chris@brebuilders.com', 'sean@brebuilders.com']

    const serviceLabel = SERVICE_LABELS[service as string] || service
    const location = [body.city, body.state].filter(Boolean).join(', ') || 'Location TBD'
    const leadScore = calcLeadScore(body)
    const subject = `${leadScore.badge} ${serviceLabel} — ${firstName} ${lastName} (${location})`

    const teamRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'BRE Builders Leads <no-reply@brebuilders.com>',
        to: [toEmail],
        ...(ccEmails.length > 0 && { cc: ccEmails }),
        reply_to: email,
        subject: isDev ? `[DEV] ${subject}` : subject,
        html: buildTeamEmail(body, isDev, leadScore),
      }),
    })

    if (!teamRes.ok) {
      console.error('Resend team email error:', await teamRes.text())
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
    }

    if (!isDev) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'BRE Builders <no-reply@brebuilders.com>',
          to: [email],
          subject: `We received your ${serviceLabel} request — BRE Builders`,
          html: buildClientEmail(body),
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
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
  if (data.timeline === 'Ready to start now')   { score += 20; signals.push('Ready to start now') }
  if (data.timeline === 'Within 1–3 months')    { score += 15; signals.push('Starting within 1–3 months') }

  const hotBudgets = ['Over $300k','Over $350k','$750k–$1M','Over $1M','$500k–$750k','$200k–$300k','$150k–$500k','$500k–$1M']
  if (hotBudgets.some(b => data.budget === b)) { score += 15; signals.push(`Budget: ${data.budget}`) }

  if (data.repairSeverity === 'getting-worse') { score += 15; signals.push('Issue getting worse — urgency') }
  if (Array.isArray(data.repairTriggers) && (data.repairTriggers as string[]).includes('Preparing to sell')) {
    score += 10; signals.push('Preparing to sell — deadline')
  }
  if (data.hearAboutUs === 'Referral' || data.hearAboutUs === 'Past client') {
    score += 10; signals.push(`Referred — ${data.hearAboutUs}`)
  }

  if (data.ownsProperty === 'no') flags.push('⚠ Does not own property')
  if (data.gettingBids === 'yes') flags.push('Getting multiple bids')
  if (data.timeline === 'Just researching' || data.timeline === 'Flexible') flags.push('No firm timeline')
  if (data.budget === 'Not sure yet') flags.push('Budget undefined')

  let badge = '🔵 Standard'
  if (score >= 70) badge = '🔥 Hot Lead'
  else if (score >= 45) badge = '⚡ Warm Lead'
  else if (score < 20) badge = '⬜ Early Stage'

  return { score, badge, signals, flags }
}

const SERVICE_LABELS: Record<string, string> = {
  'adu': 'ADU / Guest House', 'additions': 'Home Addition',
  'new-home': 'New Custom Home', 'kitchen-bath': 'Kitchen & Bath Remodel',
  'repairs': 'Structural Repairs', 'decks': 'Decks & Outdoor',
  'commercial': 'Commercial / TI', 'other': 'Other Work',
}

function row(label: string, value: unknown): string {
  if (!value || (Array.isArray(value) && (value as unknown[]).length === 0)) return ''
  const val = Array.isArray(value) ? (value as string[]).join(', ') : String(value)
  return `<tr>
    <td style="padding:7px 14px;border-bottom:1px solid #1a2d3f;color:#6b8a9e;font-size:12px;font-family:monospace;width:170px">${label}</td>
    <td style="padding:7px 14px;border-bottom:1px solid #1a2d3f;color:#e8e4dc;font-size:13px">${val}</td>
  </tr>`
}

function buildServiceBlock(data: Record<string, unknown>): string {
  const s = data.service as string
  let rows: string[] = []
  if (s === 'adu') rows = [row('ADU Type', data.aduType), row('Size Needed', data.aduSqft), row('Site Constraints', data.aduLandConstraints)]
  else if (s === 'additions') rows = [row('Addition Type', data.additionType), row('Sq Ft', data.additionSqft), row('Plans', data.additionPlans)]
  else if (s === 'new-home') rows = [row('Style', data.homeStyle), row('Beds', data.homeBeds), row('Baths', data.homeBaths), row('Sq Ft', data.homeSqft), row('Land', data.homeLand), row('Plans', data.homePlans), row('Special Rooms', data.homeSpecialRooms)]
  else if (s === 'kitchen-bath') rows = [row('Scope', data.kitchenScope), row('Style', data.kitchenStyle)]
  else if (s === 'repairs') rows = [row('Issues', data.repairIssues), row('Location', data.repairLocation), row('Getting Worse', data.repairSeverity), row('Triggers', data.repairTriggers)]
  else if (s === 'decks') rows = [row('Type', data.deckType), row('Material', data.deckMaterial), row('Size', data.deckSqft), row('Snow/Fire Zone', data.deckSnowZone === 'yes' ? 'YES — mountain rated required' : 'No')]
  else if (s === 'commercial') rows = [row('Space Type', data.commercialType), row('Sq Ft', data.commercialSqft), row('Occupancy', data.commercialOccupancy)]
  const filtered = rows.filter(Boolean)
  if (!filtered.length) return ''
  return `<table style="width:100%;border-collapse:collapse;background:#0c1a27;border-radius:8px;overflow:hidden;margin-bottom:16px">${filtered.join('')}</table>`
}

function buildTeamEmail(data: Record<string, unknown>, isDev: boolean, lead: LeadScore): string {
  const serviceLabel = SERVICE_LABELS[data.service as string] || String(data.service)
  const location = [data.addressLine1, data.city, data.state, data.zip].filter(Boolean).join(', ')
  const scoreColor = lead.score >= 70 ? '#22c55e' : lead.score >= 45 ? '#f59e0b' : '#3b82f6'
  const devBanner = isDev ? '<div style="background:#b91c1c;color:white;padding:8px 16px;font-family:monospace;font-size:11px">⚠ DEV TEST — protonmail only</div>' : ''
  const signals = lead.signals.map(s => `<li style="margin-bottom:3px;color:#a3c4a0;font-size:12px">✓ ${s}</li>`).join('')
  const flags = lead.flags.map(f => `<li style="margin-bottom:3px;color:#f87171;font-size:12px">${f}</li>`).join('')

  return `<!DOCTYPE html><html><body style="background:#060d14;color:#e8e4dc;font-family:-apple-system,sans-serif;margin:0;padding:0">
${devBanner}
<div style="max-width:640px;margin:0 auto;padding:32px 24px">
  <div style="border-left:3px solid #1cb8b3;padding-left:20px;margin-bottom:24px">
    <p style="font-family:monospace;font-size:10px;letter-spacing:3px;color:#1cb8b3;margin:0 0 6px;text-transform:uppercase">New Quote Request · BRE Builders</p>
    <h1 style="margin:0 0 4px;font-size:24px;font-weight:400">${data.firstName} ${data.lastName}</h1>
    <p style="margin:0;color:#6b8a9e;font-size:15px">${serviceLabel} · ${location || 'Location not provided'}</p>
  </div>
  <div style="background:#0c1a27;border:1px solid ${scoreColor}40;border-radius:10px;padding:16px 20px;margin-bottom:20px;display:flex;align-items:flex-start;gap:20px">
    <div style="min-width:80px">
      <p style="margin:0 0 2px;font-family:monospace;font-size:10px;color:#6b8a9e;text-transform:uppercase;letter-spacing:2px">Lead Score</p>
      <p style="margin:0;font-size:28px;font-weight:600;color:${scoreColor}">${lead.score}<span style="font-size:13px;color:#6b8a9e">/100</span></p>
      <p style="margin:4px 0 0;font-size:14px">${lead.badge}</p>
    </div>
    <div style="flex:1">
      ${signals ? `<ul style="margin:0;padding-left:16px">${signals}</ul>` : ''}
      ${flags ? `<ul style="margin:8px 0 0;padding-left:16px">${flags}</ul>` : ''}
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;background:#0c1a27;border-radius:10px;overflow:hidden;margin-bottom:16px">
    ${row('Phone', `<a href="tel:${data.phone}" style="color:#1cb8b3;text-decoration:none">${data.phone}</a>`)}
    ${row('Email', `<a href="mailto:${data.email}" style="color:#1cb8b3;text-decoration:none">${data.email}</a>`)}
    ${row('Contact Pref', `${data.contactPref || '—'}${data.bestTime ? ' · ' + data.bestTime : ''}`)}
    ${row('Location', location || '—')}
    ${row('Property Type', `${data.propertyType || '—'} · Built ${data.yearBuilt || '—'}`)}
    ${row('Owns Property', data.ownsProperty)}
    ${row('Decision Maker', data.isDecisionMaker)}
    ${row('Getting Bids', data.gettingBids)}
    ${row('Budget', `<strong style="color:#c8923a">${data.budget || '—'}</strong>`)}
    ${row('Timeline', data.timeline)}
  </table>
  ${buildServiceBlock(data)}
  ${data.notes ? `<div style="background:#0c1a27;border-left:3px solid #c8923a;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:16px"><p style="margin:0 0 6px;font-family:monospace;font-size:10px;color:#c8923a;text-transform:uppercase;letter-spacing:2px">Notes</p><p style="margin:0;font-size:14px;line-height:1.6;color:#c8d8e4">${data.notes}</p></div>` : ''}
  <p style="margin:0;font-size:11px;color:#3a4e5e;font-family:monospace">Source: ${data.hearAboutUs || '—'} · ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'medium', timeStyle: 'short' })} PT</p>
</div></body></html>`
}

function buildClientEmail(data: Record<string, unknown>): string {
  const serviceLabel = SERVICE_LABELS[data.service as string] || String(data.service)
  return `<!DOCTYPE html><html><body style="background:#060d14;color:#e8e4dc;font-family:-apple-system,sans-serif;margin:0;padding:0">
<div style="max-width:560px;margin:0 auto;padding:40px 24px">
  <p style="font-family:monospace;font-size:10px;letter-spacing:3px;color:#1cb8b3;margin:0 0 16px;text-transform:uppercase">Blue Reef Builders</p>
  <h1 style="font-size:26px;font-weight:400;margin:0 0 6px">Hi ${data.firstName},</h1>
  <p style="font-size:15px;line-height:1.75;color:rgba(232,228,220,0.7);margin:0 0 24px">
    We received your <strong style="color:#e8e4dc">${serviceLabel}</strong> request and will be in touch within
    <strong style="color:#1cb8b3">24 hours</strong> to schedule your free site visit and estimate.
  </p>
  <div style="background:#0c1a27;border-left:3px solid #1cb8b3;border-radius:0 10px 10px 0;padding:18px 22px;margin-bottom:24px">
    <p style="margin:0 0 10px;font-size:14px;color:rgba(232,228,220,0.6)">Reach us directly:</p>
    <p style="margin:0 0 6px;font-size:15px">📞 <a href="tel:7753914517" style="color:#1cb8b3;text-decoration:none">(775) 391-4517</a></p>
    <p style="margin:0;font-size:15px">✉️ <a href="mailto:brebuilders@gmail.com" style="color:#1cb8b3;text-decoration:none">brebuilders@gmail.com</a></p>
  </div>
  <p style="font-size:12px;color:#3a4e5e;line-height:1.6;margin:0">Blue Reef Builders — NV Lic #0085999 · CA Lic #1093798<br>2600 Mill St #400, Reno, NV 89502</p>
</div></body></html>`
}
