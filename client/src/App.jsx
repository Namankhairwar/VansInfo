import { useState } from 'react'
import axios from 'axios'
import logo from './assets/logo.png'

const REASONS = [
  { value: '', label: 'Select a reason…', disabled: true },
  { value: 'Appointment Inquiry', label: 'Appointment inquiry' },
  { value: 'Medical Records', label: 'Medical records' },
  { value: 'Insurance & Billing', label: 'Insurance & billing' },
  { value: 'Partnership', label: 'Partnership opportunity' },
  { value: 'General Support', label: 'General support' },
  { value: 'Other', label: 'Other' },
]

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async () => {
    setStatus(null)
    if (!form.name || !form.email || !form.reason || !form.phone) {
  setStatus({ type: 'error', msg: 'Please fill in all required fields.' })
  return
}
if (form.phone.length !== 10) {
  setStatus({ type: 'error', msg: 'Please enter a valid 10-digit phone number.' })
  return
}
    setLoading(true)
    try {
      await axios.post('https://vansinfo-production.up.railway.app/api/contact', form)
      setStatus({ type: 'success', msg: `Thanks ${form.name.split(' ')[0]}! Your message has been sent successfully. We'll get back to you soon.` })
     setForm({ name: '', email: '', phone: '', reason: '', message: '' })
    } catch (err) {
      const msg = err.response?.data?.error || 'Something went wrong. Please try again.'
      setStatus({ type: 'error', msg })
    }
    setLoading(false)
  }

  return (
    <div className="page">
      <div className="brand">
        <img src={logo} alt="Vans and Co. logo" />
        <h1>Vans & Co.</h1>
        <p>Healthcare Services</p>
      </div>

      <div className="card">
        <h2>Get in touch</h2>
        <p className="sub">Our healthcare team typically responds within one business day.</p>

        <div className="row">
          <div className="field">
            <label>Full name</label>
            <input name="name" value={form.name} onChange={handle} placeholder="Renew Bhagwat" />
          </div>
          <div className="field">
            <label>Email address</label>
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="renew@example.com" />
          </div>
        </div>

          <div className="field">
          <label>Phone number</label>
          <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="98765 43210" maxLength={10} />
        </div>

        <div className="field">
          <label>Reason to connect</label>
          <select name="reason" value={form.reason} onChange={handle}>
            {REASONS.map(r => (
              <option key={r.value} value={r.value} disabled={r.disabled}>{r.label}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>Message <span style={{ fontWeight: 400, color: '#9ca3af' }}>(optional)</span></label>
          <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us more about what you need…" />
        </div>

        <button className="submit-btn" onClick={submit} disabled={loading}>
          {loading ? 'Sending…' : '✉ Send message'}
        </button>

        {status && (
          <div className={`toast ${status.type}`}>
            {status.type === 'success' ? '✓' : '!'} {status.msg}
          </div>
        )}
      </div>

      <p className="footer">© {new Date().getFullYear()} Vans & Co. Healthcare · All rights reserved</p>
    </div>
  )
}
