import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  GraduationCap,
  Play,
  Settings,
  Wrench,
  Zap,
} from 'lucide-react'
import { INSTITUTE_INFO, TRADES } from '../data/instituteData'

const TRADE_ICONS = {
  electrician: Zap,
  'mechanic-diesel': Settings,
  'electronics-mechanics': Cpu,
  'mechanic-motor-vehicle': Car,
  'craftsmen-training-scheme': Wrench,
}

export default function TradesSection({ onApplyTrade }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 768) setVisibleCount(1)
      else if (window.innerWidth <= 1080) setVisibleCount(2)
      else setVisibleCount(3)
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  const maxIndex = Math.max(0, TRADES.length - visibleCount)

  useEffect(() => {
    if (paused || maxIndex === 0) return
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3500)
    return () => clearInterval(timer)
  }, [paused, maxIndex])

  const prevSlide = () => setSlideIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  const nextSlide = () => setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))

  return (
    <section id="courses" className="section courses-white-section">
      {/* Subtle watermark gears */}
      <div className="courses-gear-decor left" aria-hidden="true">
        <Settings size={180} strokeWidth={1.2} />
      </div>
      <div className="courses-gear-decor right" aria-hidden="true">
        <Settings size={150} strokeWidth={1.2} />
      </div>

      {/* Bottom black & orange curved wave */}
      <svg
        className="courses-bottom-wave"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,160 C420,150 960,120 1440,0 L1440,160 Z"
          fill="#f97316"
        />
        <path
          d="M360,160 C760,152 1120,125 1440,35 L1440,160 Z"
          fill="#0b0b0b"
        />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="courses-heading-row" style={{ marginBottom: '10px' }}>
          <span className="heading-line" />
          <h2 className="courses-split-title">
            <span>Popular</span> <strong>Courses</strong>
          </h2>
          <span className="heading-line" />
        </div>
        <p className="courses-subtitle-center">
          Choose from our industry-relevant training programmes
        </p>

        <div
          className="courses-carousel-shell"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="courses-arrow prev"
            aria-label="Previous course"
            onClick={prevSlide}
          >
            <ChevronLeft size={19} />
          </button>

          <div className="courses-slider-viewport">
            <div
              className="courses-slider-track"
              style={{
                transform: `translateX(-${slideIndex * (100 / visibleCount)}%)`,
              }}
            >
              {TRADES.map((trade) => (
                <article key={trade.id} className="sector-course-card">
                  <div className="sector-card-img-wrap">
                    <img
                      src={trade.homeImage}
                      alt={trade.name}
                      className="sector-card-img"
                    />
                  </div>
                  <div className="sector-card-body">
                    <h3>{trade.name}</h3>
                    <p className="sector-duration-row">
                      <Clock size={14} color="#f97316" />
                      <span>{trade.duration}</span>
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary sector-pill-btn"
                      onClick={() => onApplyTrade(trade.name)}
                    >
                      Apply Now
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="courses-arrow next"
            aria-label="Next course"
            onClick={nextSlide}
          >
            <ChevronRight size={19} />
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            type="button"
            className="courses-view-more-btn"
            onClick={() => setShowVideo((prev) => !prev)}
          >
            <GraduationCap size={18} color="#f97316" />
            <span>
              {showVideo ? 'Hide Admission Video' : 'Admission Open 2026 – 2027 Video'}
            </span>
            <Play size={13} fill="#ffffff" />
          </button>
        </div>

        {showVideo && (
          <div className="courses-video-drawer">
            <video
              style={{
                width: '100%',
                maxHeight: '420px',
                borderRadius: '14px',
                background: '#000',
              }}
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src={INSTITUTE_INFO.videoUrl} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </section>
  )
}
