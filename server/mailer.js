const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

async function sendAutoReply(toEmail, toName, reason) {
  await transporter.sendMail({
    from: `"Vans & Co. Healthcare" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'We received your message — Vans & Co.',
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;border:1px solid #e2e8f0;border-radius:10px">
        <img src="cid:vanslogo" width="80" style="display:block;margin:0 auto 20px" alt="Vans logo"/>
        <h2 style="color:#1a56db;text-align:center;margin-bottom:4px">Thanks, ${toName}!</h2>
        <p style="color:#444;text-align:center;margin-bottom:24px">We've received your message and will get back to you shortly.</p>
        <div style="background:#f0f7ff;border-radius:8px;padding:16px;margin-bottom:24px">
          <p style="margin:0;font-size:13px;color:#555"><strong>Reason:</strong> ${reason}</p>
        </div>
        <p style="font-size:13px;color:#888;text-align:center">Vans & Co. Healthcare · Respond within 1 business day</p>
      </div>
    `,
    attachments: [{
      filename: 'Vans_and_co_logo.png',
      path: require('path').join(__dirname, 'Vans and co logo.png'),
      cid: 'vanslogo'
    }]
  })
}

module.exports = { sendAutoReply }