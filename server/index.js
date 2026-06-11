const express = require('express')
const cors = require('cors')
require('dotenv').config()

const supabase = require('./supabase')
const { sendAutoReply } = require('./mailer')

const app = express()
app.use(cors())
app.use(express.json())

//for testing mailer functionality without submitting the form

// app.get('/test-email', async (req, res) => {
//   try {
//     await sendAutoReply('renewextrawork@gmail.com', 'Test User', 'General Support')
//     res.json({ success: true, message: 'Email sent! Check your inbox.' })
//   } catch (err) {
//     res.json({ error: err.message })
//   }
// })

app.post('/api/contact', async (req, res) => {
  const { name, email, reason, message } = req.body

  if (!name || !email || !reason) {
    return res.status(400).json({ error: 'Name, email, and reason are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const { error: dbError } = await supabase
    .from('contacts')
    .insert([{ name, email, reason, message, submitted_at: new Date().toISOString() }])

  if (dbError) {
    console.error('Supabase error:', dbError.message)
    return res.status(500).json({ error: 'Failed to save. Please try again.' })
  }

  try {
    await sendAutoReply(email, name, reason)
  } catch (mailErr) {
    console.error('Email error:', mailErr.message)
  }

  res.json({ success: true, message: 'Submitted successfully.' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))