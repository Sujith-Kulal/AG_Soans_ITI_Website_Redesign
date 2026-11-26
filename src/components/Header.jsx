import React, { useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Youtube,
} from 'lucide-react'
import { INSTITUTE_INFO } from '../data/instituteData'

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Courses', href: '#courses', hasDropdown: true },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ onOpenAdmission }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#top')

  return (
    <header className="site-header">
      <div className="header-desktop-shell">
        <svg
          className="header-wave-svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Right-side rising orange wave accent */}
          <path
            d="M1260,40 C1340,40 1390,34 1440,24 L1440,120 L1320,120 C1340,94 1335,62 1260,48 Z"
            fill="#fb923c"
            opacity="0.92"
          />
          {/* Main orange ribbon hugging the black S-curve */}
          <path
            d="M0,104 L380,104 C470,104 530,40 650,40 L1440,40 L1440,48 L650,48 C538,48 478,118 380,118 L0,118 Z"
            fill="#f97316"
          />
          {/* Black top bar + flat-bottom left brand swoop */}
          <path
            d="M0,0 L1440,0 L1440,40 L650,40 C530,40 470,104 380,104 L0,104 Z"
            fill="#0b0b0b"
          />
        </svg>

        <div className="header-grid">
          {/* Left: Brand inside black curved swoop */}
          <a href="#top" className="header-brand-curve">
            <img
              src={INSTITUTE_INFO.footerLogo}
              alt="A.G. Soans ITI Crest"
              className="header-crest"
            />
            <div className="header-brand-text">
              <strong>A.G. SOANS</strong>
              <span>INDUSTRIAL TRAINING INSTITUTE</span>
              <small>Skill • Training • Better Tomorrow</small>
            </div>
          </a>

          {/* Right: 2-row aligned content (Top Black Contact Row + Bottom White Nav Row) */}
          <div className="header-right-rows">
            <div className="header-top-content">
              <div className="header-top-contacts">
                <a href="tel:08258236775" className="header-top-item">
                  <Phone size={13} color="#f97316" />
                  <span>08258-236775 / 7259874775</span>
                </a>
                <a href={`mailto:${INSTITUTE_INFO.email}`} className="header-top-item">
                  <Mail size={13} color="#f97316" />
                  <span>{INSTITUTE_INFO.email}</span>
                </a>
                <span className="header-top-item">
                  <MapPin size={13} color="#f97316" />
                  <span>Kodangallu, Moodbidri – 574197</span>
                </span>
              </div>

              <div className="header-top-socials">
                <a href="#contact" aria-label="Facebook" className="social-circle">
                  <Facebook size={12} />
                </a>
                <a href="#contact" aria-label="YouTube" className="social-circle">
                  <Youtube size={12} />
                </a>
                <a href="#contact" aria-label="LinkedIn" className="social-circle">
                  <Linkedin size={12} />
                </a>
              </div>
            </div>

            <div className="header-nav-row">
              <nav className="nav-links" aria-label="Main navigation">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${activeHref === link.href ? 'nav-pill-active' : ''}`}
                    onClick={() => setActiveHref(link.href)}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <ChevronDown size={14} />}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                className="btn btn-primary header-cta-pill"
                onClick={() => onOpenAdmission()}
              >
                Admission Enquiry
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setMenuOpen(false)
            onOpenAdmission()
          }}
        >
          Admission Enquiry
          <ArrowRight size={15} />
        </button>
      </div>
    </header>
  )
}
