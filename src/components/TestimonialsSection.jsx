import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/instituteData'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length)

  return (
    <section
      className="section testimonials-section"
      style={{ backgroundImage: 'url(./assets/site/image/aa.png)' }}
    >
      <div className="testimonials-overlay" />
      <div className="container testimonials-content">
        <div className="section-header center">
          <span
            className="eyebrow"
            style={{ background: 'rgba(249, 115, 22, 0.2)', color: '#fb923c' }}
          >
            Alumni Voices
          </span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            What Our Students Say
          </h2>
        </div>

        <div className="testimonial-slider-viewport">
          <div
            className="testimonial-slider-track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {TESTIMONIALS.map((item) => (
              <div key={item.name} className="testimonial-slide">
                <div className="testimonial-card">
                  <Quote size={36} color="#f97316" style={{ margin: '0 auto 14px' }} />
                  <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                  <h4 style={{ fontSize: '1.1rem', color: '#fb923c' }}>{item.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '2px' }}>
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginTop: '24px',
          }}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.14)',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Testimonial ${idx + 1}`}
                className={`slider-dot ${idx === active ? 'active' : ''}`}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.14)',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
