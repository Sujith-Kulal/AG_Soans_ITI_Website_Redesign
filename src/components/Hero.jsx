import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Play,
} from 'lucide-react'
import { HERO_SLIDES } from '../data/instituteData'

export default function Hero({ onOpenAdmission }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)

  return (
    <section id="top">
      <div className="hero-slider-wrap">
        <div
          className="hero-slides-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {HERO_SLIDES.map((slide) => (
            <div key={slide.src} className="hero-slide-item">
              <img src={slide.src} alt={slide.caption} className="hero-slide-img" />
            </div>
          ))}
        </div>

        <div className="hero-overlay">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-pill-badge">
                <span className="hero-pill-icon">
                  <GraduationCap size={16} color="#ffffff" />
                </span>
                <span>Admission Open 2026-2027</span>
              </div>

              <h1 className="hero-title-split">
                A.G. Soans <br />
                <span>Industrial Training</span> <br />
                Institute
              </h1>

              <p>
                Empowering students in Moodbidri since 1985 with NCVT-affiliated,
                hands-on technical and vocational education.
              </p>

              <div className="hero-cta">
                <button
                  type="button"
                  className="btn btn-primary hero-btn-lg"
                  onClick={() => onOpenAdmission()}
                >
                  <span>Apply for Admission</span>
                  <ArrowRight size={17} />
                </button>

                <a href="#courses" className="btn hero-btn-outline-pill">
                  <span>View Courses</span>
                  <span className="hero-play-dot">
                    <Play size={10} fill="#0b0b0b" color="#0b0b0b" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="slider-arrow prev"
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          className="slider-arrow next"
          aria-label="Next slide"
          onClick={nextSlide}
        >
          <ChevronRight size={20} />
        </button>

        {/* Bottom Curved Orange & Black Wave */}
        <svg
          className="hero-bottom-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,45 C320,105 680,105 1040,55 C1220,30 1340,10 1440,0 L1440,120 L0,120 Z"
            fill="#f97316"
          />
          <path
            d="M0,95 C260,115 540,70 840,86 C1100,100 1290,70 1440,38 L1440,120 L0,120 Z"
            fill="#0b0b0b"
          />
          <path
            d="M0,108 C320,120 720,90 1120,108 C1280,115 1370,112 1440,104 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>

        <a
          href="#about"
          className="hero-scroll-down-btn"
          aria-label="Scroll down to About Us"
        >
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}
