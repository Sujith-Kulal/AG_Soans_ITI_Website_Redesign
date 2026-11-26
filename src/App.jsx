import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TradesSection from './components/TradesSection'
import About from './components/About'
import TestimonialsSection from './components/TestimonialsSection'
import AchievementsSection from './components/AchievementsSection'
import RecruitersSection from './components/RecruitersSection'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { AdmissionModal, GalleryModal } from './components/Modals'

export default function App() {
  const [admissionState, setAdmissionState] = useState({ open: false, trade: '' })
  const [galleryItem, setGalleryItem] = useState(null)

  const openAdmission = (tradeName = '') => {
    setAdmissionState({ open: true, trade: tradeName })
  }

  return (
    <div className="app-shell">
      <Header onOpenAdmission={openAdmission} />
      <main>
        <Hero onOpenAdmission={openAdmission} />
        <About />
        <TradesSection onApplyTrade={(tradeName) => openAdmission(tradeName)} />
        <AchievementsSection />
        <TestimonialsSection />
        <RecruitersSection />
        <GallerySection onSelectGalleryItem={(item) => setGalleryItem(item)} />
        <ContactSection />
      </main>
      <Footer />

      <AdmissionModal
        key={admissionState.trade + String(admissionState.open)}
        isOpen={admissionState.open}
        initialTrade={admissionState.trade}
        onClose={() => setAdmissionState({ open: false, trade: '' })}
      />

      <GalleryModal item={galleryItem} onClose={() => setGalleryItem(null)} />
    </div>
  )
}
