const express = require('express')
const cors = require('cors')
require('dotenv').config()

const supabase = require('./supabase')

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, reason, message } = req.body

  if (!name || !email || !reason) {
    return res.status(400).json({ error: 'Name, email, and reason are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const { error: dbError } = await supabase
    .from('contacts')
    .insert([{ name, email, phone, reason, message, submitted_at: new Date().toISOString() }])

  if (dbError) {
    console.error('Supabase error:', dbError.message)
    return res.status(500).json({ error: 'Failed to save. Please try again.' })
  }

  res.json({ success: true, message: 'Submitted successfully.' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))