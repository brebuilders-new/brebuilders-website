import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, city, service } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'brebuilders@gmail.com'
    const ccEmails = process.env.CONTACT_CC_EMAILS?.split(',').filter(Boolean) || []
    const resendKey = process.env.RESEND_API_KEY

    if (!resendKey) {
      console.error('RESEND_API_KEY not set')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    // Build team notification email
    const teamHtml = buildTeamEmail(body)
    const clientHtml = buildClientEmail(body)

    const serviceName = service.charAt(0).toUpperCase() + service.slice(1).replace('-', ' ')
    const subject = `New ${serviceName} Quote Request – ${firstName} ${lastName} – ${city || 'Location not specified'}`

    // Send team notification
    const teamRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BRE Builders <no-reply@brebuilders.com>',
        to: [toEmail],
        cc: ccEmails.length > 0 ? ccEmails : undefined,
        reply_to: email,
        subject,
        html: teamHtml,
      }),
    })

    if (!teamRes.ok) {
      const err = await teamRes.text()
      console.error('Resend team email error:', err)
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
    }

    // Send client auto-reply
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BRE Builders <no-reply@brebuilders.com>',
        to: [email],
        subject: 'We received your quote request – BRE Builders',
        html: clientHtml,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

function buildTeamEmail(data: Record<string, unknown>): string {
  const rows = Object.entries(data)
    .filter(([k]) => !['firstName', 'lastName'].includes(k))
    .map(([k, v]) => {
      const label = k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())
      const val = Array.isArray(v) ? v.join(', ') : String(v || '—')
      return `<tr><td style="padding:8px 12px;border-bottom:1px solid #1b2d3e;color:#8a95a3;font-size:13px;width:180px;font-family:monospace">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #1b2d3e;color:#f0ece4;font-size:13px">${val}</td></tr>`
    })
    .join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#050a0f;color:#f0ece4;font-family:Syne,sans-serif;margin:0;padding:32px">
  <div style="max-width:600px;margin:0 auto">
    <div style="border-left:3px solid #1ecfc9;padding-left:20px;margin-bottom:28px">
      <p style="font-family:monospace;font-size:10px;letter-spacing:3px;color:#1ecfc9;margin:0 0 6px">NEW QUOTE REQUEST</p>
      <h2 style="margin:0;font-size:22px;font-weight:400">${data.firstName} ${data.lastName}</h2>
      <p style="color:#8a95a3;margin:4px 0 0;font-size:14px">${data.service} · ${data.city || 'Location not provided'}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;background:#0f1e2d;border-radius:12px;overflow:hidden">
      ${rows}
    </table>
    <div style="margin-top:24px;padding:16px;background:#0f1e2d;border-radius:8px;border:1px solid rgba(255,255,255,0.07)">
      <p style="margin:0;font-size:12px;color:#8a95a3">
        Reply directly to this email to respond to ${data.firstName}.<br>
        Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT
      </p>
    </div>
  </div>
</body>
</html>`
}

function buildClientEmail(data: Record<string, unknown>): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#050a0f;color:#f0ece4;font-family:sans-serif;margin:0;padding:32px">
  <div style="max-width:560px;margin:0 auto">
    <div style="margin-bottom:28px">
      <h1 style="font-size:24px;font-weight:400;margin:0 0 4px">Hi ${data.firstName},</h1>
      <p style="color:#8a95a3;margin:0">Blue Reef Builders</p>
    </div>
    <p style="font-size:15px;line-height:1.7;color:rgba(240,236,228,0.8)">
      Thank you for reaching out. We've received your <strong style="color:#f0ece4">${data.service}</strong> project request and will be in touch within <strong style="color:#1ecfc9">24 hours</strong> to schedule your free site visit and estimate.
    </p>
    <div style="margin:28px 0;padding:20px;background:#0f1e2d;border-left:3px solid #1ecfc9;border-radius:0 8px 8px 0">
      <p style="margin:0 0 8px;font-size:14px">In the meantime, reach us directly:</p>
      <p style="margin:0;font-size:15px">📞 <a href="tel:7753914517" style="color:#1ecfc9;text-decoration:none">(775) 391-4517</a></p>
      <p style="margin:4px 0 0;font-size:15px">✉️ <a href="mailto:brebuilders@gmail.com" style="color:#1ecfc9;text-decoration:none">brebuilders@gmail.com</a></p>
    </div>
    <p style="font-size:13px;color:#5a6472">
      Blue Reef Builders — Licensed in Nevada (#0085999)<br>
      2600 Mill St #400, Reno, NV 89502
    </p>
  </div>
</body>
</html>`
}
