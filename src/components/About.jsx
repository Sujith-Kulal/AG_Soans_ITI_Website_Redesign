import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { ABOUT_PARAGRAPHS, INSTITUTE_INFO } from '../data/instituteData'

export default function About() {
  return (
    <section id="about" className="section about-showcase-section">
      {/* Subtle watermark background */}
      <div
        className="about-watermark"
        style={{ backgroundImage: 'url(/assets/site/slider/college_new.jpg)' }}
        aria-hidden="true"
      />

      {/* Decorative bottom-left dots */}
      <div className="about-dots-decor" aria-hidden="true" />

      {/* Decorative bottom-right black & orange wave */}
      <svg
        className="about-bottom-wave"
        viewBox="0 0 700 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,220 C240,185 440,115 700,0 L700,220 Z"
          fill="#f97316"
        />
        <path
          d="M110,220 C330,190 500,135 700,45 L700,220 Z"
          fill="#0b0b0b"
        />
      </svg>

      <div className="container about-showcase-inner">
        <div className="about-grid">
          <div>
            <div className="about-eyebrow-bar">
              <span className="about-eyebrow-pipe" />
              <span>EST. 1985 • HERITAGE &amp; MISSION</span>
            </div>

            <h2 className="about-split-heading">
              <span>About</span> <strong>Us</strong>
            </h2>

            <div className="about-prose">
              {ABOUT_PARAGRAPHS.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="about-actions-row">
              <a href="#courses" className="btn btn-primary about-pill-btn">
                Explore Courses
                <ArrowRight size={16} />
              </a>

              <a href="#achievements" className="about-secondary-link">
                <span className="about-play-ring">
                  <Play size={13} fill="#f97316" color="#f97316" />
                </span>
                <span>Know More About Us</span>
              </a>
            </div>
          </div>

          <div className="principal-frame-wrap">
            <div className="principal-card-modern">
              <img
                src={INSTITUTE_INFO.principal.image}
                alt={`${INSTITUTE_INFO.principal.name}, ${INSTITUTE_INFO.principal.title}`}
                className="principal-img-modern"
              />
              <div className="principal-info-modern">
                <div className="principal-stripe" aria-hidden="true" />
                <h3>{INSTITUTE_INFO.principal.name}</h3>
                <span>{INSTITUTE_INFO.principal.title}, A.G. Soans ITI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
