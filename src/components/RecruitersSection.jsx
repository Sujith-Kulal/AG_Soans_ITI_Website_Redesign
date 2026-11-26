import React from 'react'
import { RECRUITER_LOGOS } from '../data/instituteData'

export default function RecruitersSection() {
  const repeatedLogos = [...RECRUITER_LOGOS, ...RECRUITER_LOGOS]

  return (
    <section id="recruiters" className="section section-alt">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Placements &amp; Industry Partners</span>
          <h2 className="section-title">Our Recruiters</h2>
          <p className="section-subtitle">
            Leading industrial, automotive, and engineering employers recruiting trainees
            from A.G. Soans ITI.
          </p>
        </div>

        <div className="recruiters-marquee">
          <div className="recruiters-track">
            {repeatedLogos.map((logo, idx) => (
              <div key={`${logo}-${idx}`} className="recruiter-logo-card">
                <img
                  src={logo}
                  alt={`Recruiter Partner ${(idx % RECRUITER_LOGOS.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
