import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, service } = body

    if (!firstName || !lastName || !email || !phone || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD
    if (!gmailUser || !gmailPass) {
      console.error('Gmail credentials not set')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    })

    const serviceLabel = SERVICE_LABELS[service as string] || service
    const location = [body.city, body.state].filter(Boolean).join(', ') || 'Location TBD'
    const leadScore = calcLeadScore(body)
    const subject = `${leadScore.badge} ${serviceLabel} — ${firstName} ${lastName} (${location})`

    // ─── Internal team notification ────────────────────────────────────────────
    // Production: primary to brebuilders@gmail.com, CC full team
    // Always BCC dev monitor so leads can be verified from any environment
    await transporter.sendMail({
      from: `BRE Builders Leads <${gmailUser}>`,
      to: 'brebuilders@gmail.com',
      cc: ['steve@brebuilders.com', 'chris@brebuilders.com', 'sean@brebuilders.com'],
      bcc: 'ifyougetlockedout@protonmail.com',
      replyTo: email,
      subject,
      html: buildTeamEmail(body, false, leadScore),
    })

    // ─── Client confirmation ───────────────────────────────────────────────────
    await transporter.sendMail({
      from: `BRE Builders <${gmailUser}>`,
      to: email,
      subject: `We received your ${serviceLabel} request — BRE Builders`,
      html: buildClientEmail(body),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// ─── Lead scoring ─────────────────────────────────────────────────────────────

interface LeadScore { score: number; badge: string; signals: string[]; flags: string[] }

function calcLeadScore(data: Record<string, unknown>): LeadScore {
  let score = 0
  const signals: string[] = []
  const flags: string[] = []

  if (data.ownsProperty === 'yes')           { score += 25; signals.push('Owns property') }
  if (data.ownsProperty === 'escrow')        { score += 15; signals.push('In escrow — motivated buyer') }
  if (data.isDecisionMaker === 'yes')        { score += 20; signals.push('Sole decision maker') }
  if (data.isDecisionMaker === 'no-partner') { score += 10; signals.push('Shared decision — partner involved') }
  if (data.gettingBids === 'no')             { score += 25; signals.push('BRE is first call — no competing bids') }
  if (data.gettingBids === 'not-yet')        { score += 10; signals.push('Not yet getting other bids') }
  if (data.timeline === 'Ready to start now')  { score += 20; signals.push('Ready to start now') }
  if (data.timeline === 'Within 1–3 months')   { score += 15; signals.push('Starting within 1–3 months') }

  const hotBudgets = ['Over $300k','Over $350k','$750k–$1M','Over $1M','$500k–$750k','$200k–$300k','$150k–$500k','$500k–$1M']
  if (hotBudgets.some(b => data.budget === b)) { score += 15; signals.push(`Budget: ${data.budget}`) }

  if (data.repairSeverity === 'getting-worse') { score += 15; signals.push('Issue getting worse — urgency') }
  if (Array.isArray(data.repairTriggers) && (data.repairTriggers as string[]).includes('Preparing to sell')) {
    score += 10; signals.push('Preparing to sell — deadline')
  }
  if (data.hearAboutUs === 'Referral' || data.hearAboutUs === 'Past client') {
    score += 10; signals.push(`Referred — ${data.hearAboutUs}`)
  }

  if (data.ownsProperty === 'no') flags.push('Does not own property')
  if (data.gettingBids === 'yes') flags.push('Getting multiple bids')
  if (data.timeline === 'Just researching' || data.timeline === 'Flexible') flags.push('No firm timeline')
  if (data.budget === 'Not sure yet') flags.push('Budget undefined')

  let badge = '🔵 Standard'
  if (score >= 70)      badge = '🔥 Hot Lead'
  else if (score >= 45) badge = '⚡ Warm Lead'
  else if (score < 20)  badge = '⬜ Early Stage'

  return { score, badge, signals, flags }
}

const SERVICE_LABELS: Record<string, string> = {
  'adu':          'ADU / Guest House',
  'additions':    'Home Addition',
  'new-home':     'New Custom Home',
  'kitchen-bath': 'Kitchen & Bath Remodel',
  'repairs':      'Structural Repairs',
  'decks':        'Decks & Outdoor',
  'commercial':   'Commercial / TI',
  'other':        'Other Work',
}

// ─── Shared table row helper ───────────────────────────────────────────────────

function row(label: string, value: unknown): string {
  if (!value || (Array.isArray(value) && (value as unknown[]).length === 0)) return ''
  const val = Array.isArray(value) ? (value as string[]).join(', ') : String(value)
  return `<tr>
    <td style="padding:9px 16px;border-bottom:1px solid #1a2d3f;color:#9ca3af;font-size:11px;font-family:monospace;letter-spacing:0.5px;width:150px;white-space:nowrap">${label}</td>
    <td style="padding:9px 16px;border-bottom:1px solid #f3f4f6;color:#374151;font-size:13px;font-family:Arial,sans-serif">${val}</td>
  </tr>`
}

// ─── Service-specific details block ───────────────────────────────────────────

function buildServiceBlock(data: Record<string, unknown>): string {
  const s = data.service as string
  let rows: string[] = []
  if      (s === 'adu')          rows = [row('ADU Type', data.aduType), row('Size', data.aduSqft), row('Site Constraints', data.aduLandConstraints)]
  else if (s === 'additions')    rows = [row('Addition Type', data.additionType), row('Sq Ft', data.additionSqft), row('Plans', data.additionPlans)]
  else if (s === 'new-home')     rows = [row('Style', data.homeStyle), row('Beds', data.homeBeds), row('Baths', data.homeBaths), row('Sq Ft', data.homeSqft), row('Land', data.homeLand), row('Plans', data.homePlans), row('Special Rooms', data.homeSpecialRooms)]
  else if (s === 'kitchen-bath') rows = [row('Scope', data.kitchenScope), row('Style', data.kitchenStyle)]
  else if (s === 'repairs')      rows = [row('Issues', data.repairIssues), row('Location', data.repairLocation), row('Getting Worse', data.repairSeverity), row('Triggers', data.repairTriggers)]
  else if (s === 'decks')        rows = [row('Type', data.deckType), row('Material', data.deckMaterial), row('Size', data.deckSqft), row('Snow/Fire Zone', data.deckSnowZone === 'yes' ? 'YES — mountain rated required' : 'No')]
  else if (s === 'commercial')   rows = [row('Space Type', data.commercialType), row('Sq Ft', data.commercialSqft), row('Occupancy', data.commercialOccupancy)]
  const filtered = rows.filter(Boolean)
  if (!filtered.length) return ''
  const label = SERVICE_LABELS[s] || s
  return `
    <p style="margin:0 0 8px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#92400e;font-family:monospace">${label} Details</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;margin-bottom:20px">
      ${filtered.join('')}
    </table>`
}

// ─── TEAM notification email ───────────────────────────────────────────────────

function buildTeamEmail(data: Record<string, unknown>, isDev: boolean, lead: LeadScore): string {
  const serviceLabel = SERVICE_LABELS[data.service as string] || String(data.service)
  const location = [data.addressLine1, data.city, data.state, data.zip].filter(Boolean).join(', ')
  const scoreColor  = lead.score >= 70 ? '#15803d' : lead.score >= 45 ? '#b45309' : '#1d4ed8'
  const scoreBg     = lead.score >= 70 ? '#f0fdf4' : lead.score >= 45 ? '#fffbeb' : '#eff6ff'
  const scoreBorder = lead.score >= 70 ? '#bbf7d0' : lead.score >= 45 ? '#fde68a' : '#bfdbfe'
  const ts = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'medium', timeStyle: 'short' })
  const signalRows = lead.signals.map(s =>
    `<tr><td style="padding:3px 0;font-size:12px;color:#15803d;font-family:Arial,sans-serif">&#10003;&nbsp;&nbsp;${s}</td></tr>`
  ).join('')
  const flagRows = lead.flags.map(f =>
    `<tr><td style="padding:3px 0;font-size:12px;color:#b91c1c;font-family:Arial,sans-serif">&#9888;&nbsp;&nbsp;${f}</td></tr>`
  ).join('')
  const devBanner = isDev ? `<tr><td bgcolor="#7f1d1d" style="background:#7f1d1d;padding:10px 24px;font-family:monospace;font-size:11px;color:#fecaca">&#9888; DEV MODE</td></tr>` : ''

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;" bgcolor="#f3f4f6">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f3f4f6" style="background:#f3f4f6;padding:24px 0">
<tr><td align="center" style="padding:24px 16px">
<table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%">

  ${devBanner}

  <tr><td bgcolor="#c8a96e" style="background:#c8a96e;height:4px;font-size:0;line-height:0">&nbsp;</td></tr>

  <tr><td bgcolor="#111827" style="background:#111827;padding:24px 32px 20px">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="vertical-align:middle">
          <img src="https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp" alt="BRE Builders" width="110" style="display:block;margin-bottom:12px" />
          <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a96e;font-family:monospace">New Quote Request</p>
          <p style="margin:0 0 3px;font-size:22px;font-weight:700;color:#ffffff;font-family:Arial,sans-serif">${data.firstName} ${data.lastName}</p>
          <p style="margin:0;font-size:13px;color:#9ca3af;font-family:Arial,sans-serif">${serviceLabel}&nbsp;&nbsp;·&nbsp;&nbsp;${location || 'Location not provided'}</p>
        </td>
        <td align="right" style="vertical-align:top;padding-left:16px">
          <p style="margin:0;font-size:11px;color:#6b7280;font-family:monospace">${ts} PT</p>
        </td>
      </tr>
    </table>
  </td></tr>

  <tr><td bgcolor="#ffffff" style="background:#ffffff;padding:24px 32px 0">
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">
      <tr>
        <td bgcolor="${scoreBg}" style="background:${scoreBg};border:1px solid ${scoreBorder};border-radius:8px;padding:16px 20px;vertical-align:top;width:120px">
          <p style="margin:0 0 2px;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-family:monospace">Lead Score</p>
          <p style="margin:0;font-size:38px;font-weight:700;color:${scoreColor};line-height:1;font-family:Arial,sans-serif">${lead.score}</p>
          <p style="margin:2px 0 0;font-size:10px;color:#9ca3af;font-family:monospace">/100</p>
          <p style="margin:10px 0 0;font-size:14px;color:#374151;font-family:Arial,sans-serif">${lead.badge}</p>
        </td>
        <td style="padding-left:16px;vertical-align:top">
          ${signalRows ? `<table cellpadding="0" cellspacing="2">${signalRows}</table>` : ''}
          ${flagRows ? `<table cellpadding="0" cellspacing="2" style="margin-top:8px">${flagRows}</table>` : ''}
        </td>
      </tr>
    </table>
    <p style="margin:0 0 8px;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#92400e;font-family:monospace">Contact Details</p>
    <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f9fafb" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:20px">
      ${row('Phone', `<a href="tel:${data.phone}" style="color:#0284c7;text-decoration:none;font-family:Arial,sans-serif">${data.phone}</a>`)}
      ${row('Email', `<a href="mailto:${data.email}" style="color:#0284c7;text-decoration:none;font-family:Arial,sans-serif">${data.email}</a>`)}
      ${row('Contact Pref', `${data.contactPref || '—'}${data.bestTime ? '&nbsp;·&nbsp;' + data.bestTime : ''}`)}
      ${row('Location', location || '—')}
      ${row('Property', `${data.propertyType || '—'}&nbsp;·&nbsp;Built ${data.yearBuilt || '—'}`)}
      ${row('Owns Property', data.ownsProperty)}
      ${row('Decision Maker', data.isDecisionMaker)}
      ${row('Getting Bids', data.gettingBids)}
      ${row('Budget', `<strong style="color:#92400e;font-family:Arial,sans-serif">${data.budget || '—'}</strong>`)}
      ${row('Timeline', data.timeline)}
      ${row('Source', data.hearAboutUs)}
    </table>
    ${buildServiceBlock(data)}
    ${data.notes ? `
    <p style="margin:0 0 8px;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#92400e;font-family:monospace">Client Notes</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">
      <tr><td bgcolor="#fffbeb" style="background:#fffbeb;border-left:4px solid #d97706;padding:14px 18px;font-size:13px;line-height:1.7;color:#374151;font-family:Arial,sans-serif">${data.notes}</td></tr>
    </table>` : ''}
  </td></tr>

  <tr><td bgcolor="#f9fafb" style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 32px">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td><p style="margin:0;font-size:13px;font-weight:700;color:#c8a96e;font-family:Arial,sans-serif">Blue Reef Builders</p><p style="margin:2px 0 0;font-size:10px;color:#9ca3af;font-family:monospace">NV Lic #0085999 &nbsp;·&nbsp; CA Lic #1093798</p></td>
        <td align="right"><a href="tel:7753914517" style="font-size:12px;color:#0284c7;text-decoration:none;font-family:monospace">(775) 391-4517</a></td>
      </tr>
    </table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

function buildClientEmail(data: Record<string, unknown>): string {
  const serviceLabel = SERVICE_LABELS[data.service as string] || String(data.service)
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>We received your request — BRE Builders</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">

  <!-- ── HEADER ── -->
  <tr><td style="background:#ffffff;border-radius:12px 12px 0 0;border:1px solid #e5e7eb">
    <!-- Gold bar -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background:#c8a96e;height:4px;font-size:0">&nbsp;</td></tr>
    </table>
    <!-- Wordmark + greeting -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:30px 36px 26px">
        <img src="https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp" alt="BRE Builders" width="110" height="auto" style="display:block;margin-bottom:14px;height:auto" />
        <p style="margin:0 0 14px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#92400e;font-family:monospace">Blue Reef Builders &nbsp;·&nbsp; Est. 1989</p>
        <p style="margin:0;font-size:28px;font-weight:600;color:#111827;letter-spacing:-0.5px;line-height:1.15">Hi ${data.firstName},<br><span style="color:#6b7280;font-size:18px">we got your request.</span></p>
      </td></tr>
    </table>
  </td></tr>

  <!-- ── BODY ── -->
  <tr><td style="background:#ffffff;padding:30px 36px">

    <p style="margin:0 0 22px;font-size:15px;line-height:1.8;color:#374151;font-family:Arial,sans-serif">
      Your <strong style="color:#111827">${serviceLabel}</strong> request has been received. Steve or his team will reach out within <strong style="color:#0284c7">24 hours</strong> to confirm details and schedule your free on-site estimate.
    </p>

    <!-- What happens next -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:10px;overflow:hidden;margin-bottom:22px;border:1px solid #e5e7eb">
      <tr><td style="padding:18px 22px 8px">
        <p style="margin:0 0 14px;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#92400e;font-family:monospace">What happens next</p>
      </td></tr>
      <tr><td style="padding:0 22px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;vertical-align:top;width:36px">
              <span style="font-size:11px;color:#9ca3af;font-family:monospace;font-weight:700">01</span>
            </td>
            <td style="padding:10px 0 10px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151;font-family:Arial,sans-serif">
              Steve or his team reviews your request
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;vertical-align:top;width:36px">
              <span style="font-size:11px;color:#9ca3af;font-family:monospace;font-weight:700">02</span>
            </td>
            <td style="padding:10px 0 10px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151;font-family:Arial,sans-serif">
              We call to confirm details and schedule your site visit
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;vertical-align:top;width:36px">
              <span style="font-size:11px;color:#9ca3af;font-family:monospace;font-weight:700">03</span>
            </td>
            <td style="padding:10px 0 10px 12px;font-size:13px;color:#374151;font-family:Arial,sans-serif">
              Free on-site estimate — no obligation, no pressure
            </td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:8px 22px 18px">
        <p style="margin:0;font-size:11px;color:#9ca3af;font-family:monospace">Response within 24 hours &nbsp;·&nbsp; Free estimates &nbsp;·&nbsp; NV #0085999</p>
      </td></tr>
    </table>

    <!-- Direct contact -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-left:3px solid #0284c7;background:#f0f9ff;border-radius:0 10px 10px 0;margin-bottom:22px">
      <tr><td style="padding:18px 22px">
        <p style="margin:0 0 12px;font-size:11px;letter-spacing:1px;color:#6b7280;font-family:monospace">REACH US DIRECTLY</p>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:4px 0;font-size:14px;color:#374151;font-family:Arial,sans-serif">
              &#128222;&nbsp;&nbsp;<a href="tel:7753914517" style="color:#0284c7;text-decoration:none">(775) 391-4517</a>
            </td>
          </tr>
          <tr>
            <td style="padding:4px 0;font-size:14px;color:#374151;font-family:Arial,sans-serif">
              &#9993;&nbsp;&nbsp;<a href="mailto:brebuilders@gmail.com" style="color:#0284c7;text-decoration:none">brebuilders@gmail.com</a>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>

  </td></tr>

  <!-- ── FOOTER ── -->
  <tr><td style="background:#f9fafb;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none;padding:18px 36px">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="vertical-align:middle">
          <p style="margin:0;font-size:13px;font-weight:700;color:#92400e;font-family:Arial,sans-serif">Blue Reef Builders</p>
          <p style="margin:3px 0 0;font-size:10px;color:#9ca3af;line-height:1.7;font-family:monospace">
            NV Lic #0085999 &nbsp;·&nbsp; CA Lic #1093798<br>
            2600 Mill St #400, Reno, NV 89502
          </p>
        </td>
        <td align="right" style="vertical-align:middle">
          <a href="https://brebuilders.com" style="font-size:10px;color:#9ca3af;text-decoration:none;font-family:monospace">brebuilders.com</a>
        </td>
      </tr>
    </table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}
