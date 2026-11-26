import React from 'react'
import { Facebook, Linkedin, Youtube } from 'lucide-react'
import { INSTITUTE_INFO } from '../data/instituteData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave-wrap" aria-hidden="true">
        <svg
          className="footer-wave-svg"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
        >
          {/* Orange wave ribbon */}
          <path
            d="M0,36 C280,58 580,52 920,26 C1160,8 1320,16 1440,30 L1440,70 L0,70 Z"
            fill="#f97316"
          />
          {/* Black foreground wave */}
          <path
            d="M0,26 C260,54 580,58 960,44 C1180,36 1340,42 1440,52 L1440,70 L0,70 Z"
            fill="#0b0b0b"
          />
        </svg>
      </div>

      <div className="footer-black-bar">
        <div className="container footer-bar-inner">
          <a href="#top" className="footer-brand">
            <img
              src={INSTITUTE_INFO.footerLogo}
              alt="A.G. Soans ITI Logo"
              className="footer-crest"
            />
            <div>
              <strong>A.G. SOANS</strong>
              <span>INDUSTRIAL TRAINING INSTITUTE</span>
            </div>
          </a>

          <nav className="footer-inline-links" aria-label="Footer navigation">
            <a href="#top">Home</a>
            <span>|</span>
            <a href="#about">About Us</a>
            <span>|</span>
            <a href="#courses">Courses</a>
            <span>|</span>
            <a href="#gallery">Gallery</a>
            <span>|</span>
            <a href="#achievements">Achievements</a>
            <span>|</span>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-right">
            <div className="footer-socials">
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
            <span className="footer-divider">|</span>
            <span className="footer-copy">
              © {new Date().getFullYear()} A.G. Soans ITI. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
