import { ModeToggle } from '@/components/mode-toggle'
import ContactUs1 from '@/components/mvpblocks/contact-us-1'
import Feature1 from '@/components/mvpblocks/feature-1'
import GradientHero from '@/components/mvpblocks/gradient-hero'
import NotebookHero from '@/components/mvpblocks/notebook'
import PricingSection from '@/components/mvpblocks/pricing-5'
import TestimonialsCarousel from '@/components/mvpblocks/testimonials-carousel'
import WaitlistPage from '@/components/mvpblocks/waitlist'
import React from 'react'

const Home = () => {
  return (
    <div>
      <ModeToggle />
      <GradientHero />
      <Feature1 />
      <ContactUs1 />
      <PricingSection />
      <TestimonialsCarousel />
      <WaitlistPage />
    </div>
  )
}

export default Home