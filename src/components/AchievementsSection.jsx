import React from 'react'
import { Trophy } from 'lucide-react'
import { ACHIEVEMENTS } from '../data/instituteData'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Excellence &amp; Recognition</span>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Honors earned by our trainees in technical model exhibitions, inter-ITI
            athletics, and regional sports competitions.
          </p>
        </div>

        <div className="achievements-list">
          {ACHIEVEMENTS.map((item) => (
            <article key={item.id} className="achievement-card">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#f97316', fontWeight: 700, fontSize: '0.84rem', marginBottom: '8px' }}>
                  <Trophy size={16} />
                  Campus Achievement
                </div>
                <h3 style={{ fontSize: '1.45rem', color: '#111111', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.96rem' }}>{item.description}</p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="achievement-img"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
