import React, { useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { INSTITUTE_INFO, TRADES } from '../data/instituteData'

export function AdmissionModal({ isOpen, initialTrade, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [trade, setTrade] = useState(initialTrade || TRADES[0].name)
  const [done, setDone] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setDone(true)
  }

  const handleResetAndClose = () => {
    setDone(false)
    setName('')
    setPhone('')
    onClose()
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={handleResetAndClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: '6px' }}>
              Admission Open for 2026-2027
            </span>
            <h3 style={{ fontSize: '1.45rem', color: '#0b192c' }}>
              Apply to A.G. Soans ITI
            </h3>
          </div>
          <button
            type="button"
            className="modal-close"
            aria-label="Close modal"
            onClick={handleResetAndClose}
          >
            <X size={18} />
          </button>
        </div>

        {done ? (
          <div className="alert-success">
            <CheckCircle2 size={22} style={{ flexShrink: 0 }} />
            <div>
              <strong>Application Request Submitted</strong>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                Thank you, {name}. Our admissions desk will contact you at{' '}
                <strong>{phone}</strong> for <strong>{trade}</strong>. You may also call{' '}
                {INSTITUTE_INFO.phones[0]} or {INSTITUTE_INFO.phones[1]}.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: '14px' }}
                onClick={handleResetAndClose}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="modal-name">Applicant Name *</label>
              <input
                id="modal-name"
                type="text"
                required
                className="form-control"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-phone">Contact No. *</label>
              <input
                id="modal-phone"
                type="tel"
                required
                className="form-control"
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-trade">Course</label>
              <select
                id="modal-trade"
                className="form-control"
                value={trade}
                onChange={(e) => setTrade(e.target.value)}
              >
                {TRADES.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name} — {t.duration}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Admission Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export function GalleryModal({ item, onClose }) {
  if (!item) return null

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: '6px' }}>
              {item.category}
            </span>
            <h3 style={{ fontSize: '1.35rem', color: '#0b192c' }}>{item.title}</h3>
          </div>
          <button
            type="button"
            className="modal-close"
            aria-label="Close preview"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            maxHeight: '440px',
            objectFit: 'contain',
            borderRadius: '12px',
            background: '#0f172a',
          }}
        />
      </div>
    </div>
  )
}
