import React, { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { INSTITUTE_INFO, TRADES } from '../data/instituteData'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    trade: TRADES[0].name,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Join Course • Contact Us</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Reach out to A.G. Soans Industrial Training Institute, Kodangallu Post,
            Moodbidri for course admissions and enquiries.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.94rem' }}>
                    {INSTITUTE_INFO.principal.name} ({INSTITUTE_INFO.principal.title})
                  </strong>
                  <span style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>
                    {INSTITUTE_INFO.address}
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.94rem' }}>Phone</strong>
                  <span style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>
                    {INSTITUTE_INFO.phones.join(' / ')}
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.94rem' }}>Email</strong>
                  <a
                    href={`mailto:${INSTITUTE_INFO.email}`}
                    style={{ color: '#fb923c', fontSize: '0.88rem' }}
                  >
                    {INSTITUTE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <iframe
              title="A.G. Soans ITI Moodbidri Location Map"
              src={INSTITUTE_INFO.mapEmbedUrl}
              className="map-frame"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="form-card">
            <h3 style={{ fontSize: '1.35rem', color: '#0b192c', marginBottom: '18px' }}>
              Send a Message
            </h3>

            {submitted ? (
              <div className="alert-success">
                <CheckCircle2 size={22} style={{ flexShrink: 0 }} />
                <div>
                  <strong>Message Received!</strong>
                  <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                    Thank you, {form.name}. Your enquiry regarding{' '}
                    <strong>{form.trade}</strong> has been noted. You can also reach us at{' '}
                    {INSTITUTE_INFO.phones[0]} or {INSTITUTE_INFO.email}.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    style={{ marginTop: '12px', padding: '8px 14px', fontSize: '0.84rem' }}
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        trade: TRADES[0].name,
                        message: '',
                      })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">E-mail *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="form-control"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone">Contact No. *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    className="form-control"
                    placeholder="Contact No."
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-trade">Course</label>
                  <select
                    id="contact-trade"
                    name="trade"
                    className="form-control"
                    value={form.trade}
                    onChange={handleChange}
                  >
                    {TRADES.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="form-control"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
