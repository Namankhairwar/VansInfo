const { Resend } = require('resend')
require('dotenv').config()

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendAutoReply(toEmail, toName, reason) {
  await resend.emails.send({
    from: 'Vans & Co. Healthcare <onboarding@resend.dev>',
    to: toEmail,
    subject: 'We received your message — Vans & Co.',
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;border:1px solid #e2e8f0;border-radius:10px">
        <h2 style="color:#1a56db;text-align:center;margin-bottom:4px">Thanks, ${toName}!</h2>
        <p style="color:#444;text-align:center;margin-bottom:24px">We've received your message and will get back to you shortly.</p>
        <div style="background:#f0f7ff;border-radius:8px;padding:16px;margin-bottom:24px">
          <p style="margin:0;font-size:13px;color:#555"><strong>Reason:</strong> ${reason}</p>
        </div>
        <p style="font-size:13px;color:#888;text-align:center">Vans & Co. Healthcare · Respond within 1 business day</p>
      </div>
    `
  })
}

module.exports = { sendAutoReply }