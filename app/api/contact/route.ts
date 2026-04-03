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

    const isDev = process.env.NODE_ENV !== 'production'
    const toEmail = isDev ? 'ifyougetlockedout@protonmail.com' : 'brebuilders@gmail.com'
    const ccEmails = isDev ? [] : ['steve@brebuilders.com', 'chris@brebuilders.com', 'sean@brebuilders.com']

    const serviceLabel = SERVICE_LABELS[service as string] || service
    const location = [body.city, body.state].filter(Boolean).join(', ') || 'Location TBD'
    const leadScore = calcLeadScore(body)
    const subject = `${leadScore.badge} ${serviceLabel} — ${firstName} ${lastName} (${location})`

    await transporter.sendMail({
      from: `BRE Builders Leads <${gmailUser}>`,
      to: toEmail,
      ...(ccEmails.length > 0 && { cc: ccEmails }),
      replyTo: email,
      subject: isDev ? `[DEV] ${subject}` : subject,
      html: buildTeamEmail(body, isDev, leadScore),
    })

    if (!isDev) {
      await transporter.sendMail({
        from: `BRE Builders <${gmailUser}>`,
        to: email,
        subject: `We received your ${serviceLabel} request — BRE Builders`,
        html: buildClientEmail(body),
      })
    }

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
    <td style="padding:9px 16px;border-bottom:1px solid #1a2d3f;color:#6b8a9e;font-size:11px;font-family:monospace;letter-spacing:0.5px;width:150px;white-space:nowrap">${label}</td>
    <td style="padding:9px 16px;border-bottom:1px solid #1a2d3f;color:#e2ddd5;font-size:13px;font-family:Arial,sans-serif">${val}</td>
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
    <p style="margin:0 0 8px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#c8a96e;font-family:monospace">${label} Details</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1827;border-radius:8px;overflow:hidden;margin-bottom:20px">
      ${filtered.join('')}
    </table>`
}

// ─── TEAM notification email ───────────────────────────────────────────────────

function buildTeamEmail(data: Record<string, unknown>, isDev: boolean, lead: LeadScore): string {
  const serviceLabel = SERVICE_LABELS[data.service as string] || String(data.service)
  const location = [data.addressLine1, data.city, data.state, data.zip].filter(Boolean).join(', ')
  const scoreColor  = lead.score >= 70 ? '#22c55e' : lead.score >= 45 ? '#f59e0b' : '#3b82f6'
  const scoreBg     = lead.score >= 70 ? '#052010' : lead.score >= 45 ? '#1c1004' : '#040e1c'
  const ts = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'medium', timeStyle: 'short' })

  const signalRows = lead.signals.map(s =>
    `<tr><td style="padding:4px 0;font-size:12px;color:#86efac;font-family:Arial,sans-serif">&#10003;&nbsp;&nbsp;${s}</td></tr>`
  ).join('')
  const flagRows = lead.flags.map(f =>
    `<tr><td style="padding:4px 0;font-size:12px;color:#fca5a5;font-family:Arial,sans-serif">&#9888;&nbsp;&nbsp;${f}</td></tr>`
  ).join('')

  const devBanner = isDev ? `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:0">
    <tr><td style="background:#7f1d1d;padding:10px 32px;font-family:monospace;font-size:11px;color:#fecaca;letter-spacing:1px">
      &#9888;&nbsp; DEV MODE — sent to protonmail only, not live team
    </td></tr>
  </table>` : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>New Lead — BRE Builders</title>
</head>
<body style="margin:0;padding:0;background:#0d1117;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:28px 0">
<tr><td align="center">
<table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%">

  ${devBanner}

  <!-- ── HEADER ── -->
  <tr><td style="background:#060d14;border-radius:${isDev ? '0' : '12px 12px'} 0 0">
    <!-- Gold bar -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background:linear-gradient(90deg,#c8a96e,#e2c98a);height:3px;border-radius:${isDev ? '0' : '12px 12px'} 0 0;font-size:0">&nbsp;</td></tr>
    </table>
    <!-- Header content -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:26px 32px 22px">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:top">
                <p style="margin:0 0 6px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a96e;font-family:monospace">New Quote Request &nbsp;·&nbsp; BRE Builders</p>
                <p style="margin:0 0 3px;font-size:24px;font-weight:300;color:#ffffff;letter-spacing:-0.3px">${data.firstName} ${data.lastName}</p>
                <p style="margin:0;font-size:13px;color:#4a6680">${serviceLabel} &nbsp;&nbsp;·&nbsp;&nbsp; ${location || 'Location not provided'}</p>
              </td>
              <td align="right" style="vertical-align:top;white-space:nowrap;padding-left:20px">
                <p style="margin:0;font-size:11px;color:#1cb8b3;font-family:monospace">${ts} PT</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- ── LEAD SCORE ── -->
  <tr><td style="background:#060d14;padding:0 32px 24px">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:${scoreBg};border:1px solid ${scoreColor}55;border-radius:10px">
      <tr>
        <!-- Score number -->
        <td style="padding:18px 22px;vertical-align:top;border-right:1px solid ${scoreColor}25;width:110px">
          <p style="margin:0 0 3px;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#6b8a9e;font-family:monospace">Lead Score</p>
          <p style="margin:0;font-size:40px;font-weight:700;color:${scoreColor};line-height:1;font-family:Arial,sans-serif">${lead.score}</p>
          <p style="margin:1px 0 0;font-size:10px;color:#6b8a9e;font-family:monospace">/100</p>
          <p style="margin:10px 0 0;font-size:15px;color:#e2ddd5">${lead.badge}</p>
        </td>
        <!-- Signals / flags -->
        <td style="padding:18px 22px;vertical-align:top">
          ${signalRows ? `<table cellpadding="0" cellspacing="0">${signalRows}</table>` : ''}
          ${flagRows   ? `<table cellpadding="0" cellspacing="0" style="margin-top:10px">${flagRows}</table>` : ''}
          ${!signalRows && !flagRows ? `<p style="margin:0;font-size:12px;color:#4a6680;font-family:Arial,sans-serif">No qualifying signals detected.</p>` : ''}
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- ── CONTACT DETAILS ── -->
  <tr><td style="background:#060d14;padding:0 32px 20px">
    <p style="margin:0 0 8px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#c8a96e;font-family:monospace">Contact Details</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1827;border-radius:8px;overflow:hidden">
      ${row('Phone',        `<a href="tel:${data.phone}" style="color:#1cb8b3;text-decoration:none;font-family:Arial,sans-serif">${data.phone}</a>`)}
      ${row('Email',        `<a href="mailto:${data.email}" style="color:#1cb8b3;text-decoration:none;font-family:Arial,sans-serif">${data.email}</a>`)}
      ${row('Contact Pref', `${data.contactPref || '—'}${data.bestTime ? '&nbsp;·&nbsp;' + data.bestTime : ''}`)}
      ${row('Location',     location || '—')}
      ${row('Property',     `${data.propertyType || '—'}&nbsp;·&nbsp;Built ${data.yearBuilt || '—'}`)}
      ${row('Owns Property',  data.ownsProperty)}
      ${row('Decision Maker', data.isDecisionMaker)}
      ${row('Getting Bids',   data.gettingBids)}
      ${row('Budget',         `<strong style="color:#c8a96e;font-family:Arial,sans-serif">${data.budget || '—'}</strong>`)}
      ${row('Timeline',       data.timeline)}
      ${row('Source',         data.hearAboutUs)}
    </table>
  </td></tr>

  <!-- ── SERVICE DETAILS ── -->
  <tr><td style="background:#060d14;padding:0 32px 20px">
    ${buildServiceBlock(data)}
  </td></tr>

  <!-- ── NOTES ── -->
  ${data.notes ? `
  <tr><td style="background:#060d14;padding:0 32px 20px">
    <p style="margin:0 0 8px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#c8a96e;font-family:monospace">Client Notes</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:#0a1827;border-left:3px solid #c8a96e;padding:14px 18px;border-radius:0 8px 8px 0;font-size:13px;line-height:1.7;color:#c8d8e4;font-family:Arial,sans-serif">
          ${data.notes}
        </td>
      </tr>
    </table>
  </td></tr>` : ''}

  <!-- ── FOOTER ── -->
  <tr><td style="background:#030810;border-radius:0 0 12px 12px;padding:18px 32px">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="vertical-align:middle">
          <p style="margin:0;font-size:13px;font-weight:700;color:#c8a96e;font-family:Arial,sans-serif;letter-spacing:0.3px">Blue Reef Builders</p>
          <p style="margin:2px 0 0;font-size:10px;color:#2a3e52;font-family:monospace">NV Lic #0085999 &nbsp;·&nbsp; CA Lic #1093798</p>
        </td>
        <td align="right" style="vertical-align:middle">
          <a href="tel:7753914517" style="font-size:12px;color:#1cb8b3;text-decoration:none;font-family:monospace">(775) 391-4517</a>
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

// ─── CLIENT confirmation email ─────────────────────────────────────────────────

function buildClientEmail(data: Record<string, unknown>): string {
  const serviceLabel = SERVICE_LABELS[data.service as string] || String(data.service)
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>We received your request — BRE Builders</title>
</head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:32px 0">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">

  <!-- ── HEADER ── -->
  <tr><td style="background:#060d14;border-radius:12px 12px 0 0">
    <!-- Gold bar -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background:linear-gradient(90deg,#c8a96e,#e2c98a);height:3px;border-radius:12px 12px 0 0;font-size:0">&nbsp;</td></tr>
    </table>
    <!-- Wordmark + greeting -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:30px 36px 26px">
        <p style="margin:0 0 18px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#c8a96e;font-family:monospace">Blue Reef Builders &nbsp;·&nbsp; Est. 1989</p>
        <p style="margin:0;font-size:28px;font-weight:300;color:#ffffff;letter-spacing:-0.5px;line-height:1.15">Hi ${data.firstName},<br><span style="color:#e2ddd5;font-size:18px">we got your request.</span></p>
      </td></tr>
    </table>
  </td></tr>

  <!-- ── BODY ── -->
  <tr><td style="background:#0a1520;padding:30px 36px">

    <p style="margin:0 0 22px;font-size:15px;line-height:1.8;color:#7a92a8;font-family:Arial,sans-serif">
      Your <strong style="color:#e2ddd5">${serviceLabel}</strong> request has been received. Steve or his team will reach out within <strong style="color:#1cb8b3">24 hours</strong> to confirm details and schedule your free on-site estimate.
    </p>

    <!-- What happens next -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#060d14;border-radius:10px;overflow:hidden;margin-bottom:22px">
      <tr><td style="padding:18px 22px 8px">
        <p style="margin:0 0 14px;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#c8a96e;font-family:monospace">What happens next</p>
      </td></tr>
      <tr><td style="padding:0 22px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #1a2d3f;vertical-align:top;width:36px">
              <span style="font-size:11px;color:#1cb8b3;font-family:monospace;font-weight:700">01</span>
            </td>
            <td style="padding:10px 0 10px 12px;border-bottom:1px solid #1a2d3f;font-size:13px;color:#7a92a8;font-family:Arial,sans-serif">
              Steve or his team reviews your request
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #1a2d3f;vertical-align:top;width:36px">
              <span style="font-size:11px;color:#1cb8b3;font-family:monospace;font-weight:700">02</span>
            </td>
            <td style="padding:10px 0 10px 12px;border-bottom:1px solid #1a2d3f;font-size:13px;color:#7a92a8;font-family:Arial,sans-serif">
              We call to confirm details and schedule your site visit
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;vertical-align:top;width:36px">
              <span style="font-size:11px;color:#1cb8b3;font-family:monospace;font-weight:700">03</span>
            </td>
            <td style="padding:10px 0 10px 12px;font-size:13px;color:#7a92a8;font-family:Arial,sans-serif">
              Free on-site estimate — no obligation, no pressure
            </td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:8px 22px 18px">
        <p style="margin:0;font-size:11px;color:#2a3e52;font-family:monospace">Response within 24 hours &nbsp;·&nbsp; Free estimates &nbsp;·&nbsp; NV #0085999</p>
      </td></tr>
    </table>

    <!-- Direct contact -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-left:3px solid #1cb8b3;background:#060d14;border-radius:0 10px 10px 0;margin-bottom:22px">
      <tr><td style="padding:18px 22px">
        <p style="margin:0 0 12px;font-size:11px;letter-spacing:1px;color:#4a6680;font-family:monospace">REACH US DIRECTLY</p>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:4px 0;font-size:14px;color:#e2ddd5;font-family:Arial,sans-serif">
              &#128222;&nbsp;&nbsp;<a href="tel:7753914517" style="color:#1cb8b3;text-decoration:none">(775) 391-4517</a>
            </td>
          </tr>
          <tr>
            <td style="padding:4px 0;font-size:14px;color:#e2ddd5;font-family:Arial,sans-serif">
              &#9993;&nbsp;&nbsp;<a href="mailto:brebuilders@gmail.com" style="color:#1cb8b3;text-decoration:none">brebuilders@gmail.com</a>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>

  </td></tr>

  <!-- ── FOOTER ── -->
  <tr><td style="background:#030810;border-radius:0 0 12px 12px;padding:18px 36px">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="vertical-align:middle">
          <p style="margin:0;font-size:13px;font-weight:700;color:#c8a96e;font-family:Arial,sans-serif">Blue Reef Builders</p>
          <p style="margin:3px 0 0;font-size:10px;color:#2a3e52;line-height:1.7;font-family:monospace">
            NV Lic #0085999 &nbsp;·&nbsp; CA Lic #1093798<br>
            2600 Mill St #400, Reno, NV 89502
          </p>
        </td>
        <td align="right" style="vertical-align:middle">
          <a href="https://brebuilders.com" style="font-size:10px;color:#2a3e52;text-decoration:none;font-family:monospace">brebuilders.com</a>
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
