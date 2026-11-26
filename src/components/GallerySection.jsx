import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  Briefcase,
  Camera,
  ChevronLeft,
  ChevronRight,
  Sun,
  Wrench,
} from 'lucide-react'
import { GALLERY_ITEMS } from '../data/instituteData'

const GALLERY_FILTERS = ['All', 'Events', 'Workshops', 'Placements', 'Campus']

const CATEGORY_ICONS = {
  Events: Award,
  Workshops: Wrench,
  Placements: Briefcase,
  Campus: Sun,
}

export default function GallerySection({ onSelectGalleryItem }) {
  const [filter, setFilter] = useState('All')
  const [slideIndex, setSlideIndex] = useState(0)
  const [paused, setPaused] = useState(false)
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

  const items =
    filter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter)

  const maxIndex = Math.max(0, items.length - visibleCount)

  useEffect(() => {
    setSlideIndex(0)
  }, [filter])

  useEffect(() => {
    if (paused || maxIndex === 0) return
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3600)
    return () => clearInterval(timer)
  }, [paused, maxIndex])

  const prevSlide = () => setSlideIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  const nextSlide = () => setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))

  return (
    <section id="gallery" className="section courses-white-section">
      {/* Subtle watermark camera icons */}
      <div className="courses-gear-decor left" aria-hidden="true">
        <Camera size={160} strokeWidth={1.2} />
      </div>
      <div className="courses-gear-decor right" aria-hidden="true">
        <Camera size={140} strokeWidth={1.2} />
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
            <span>Campus</span> <strong>Gallery</strong>
          </h2>
          <span className="heading-line" />
        </div>
        <p className="courses-subtitle-center">
          Moments from our Technical Model Exhibitions, Campus Drives, Convocations &amp; Workshops
        </p>

        <div
          className="filter-tabs"
          style={{ justifyContent: 'center', marginBottom: '26px' }}
          role="tablist"
          aria-label="Filter gallery"
        >
          {GALLERY_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`filter-tab ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="courses-carousel-shell"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="courses-arrow prev"
            aria-label="Previous gallery item"
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
              {items.map((item) => (
                <article key={item.id} className="sector-course-card">
                  <div className="sector-card-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="sector-card-img"
                    />
                  </div>
                  <div className="sector-card-body">
                    <h3>{item.title}</h3>
                    <p className="sector-duration-row">
                      <span>{item.category}</span>
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary sector-pill-btn"
                      onClick={() => onSelectGalleryItem(item)}
                    >
                      View Photo
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
            aria-label="Next gallery item"
            onClick={nextSlide}
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
    </section>
  )
}
