import React from 'react'
import type { Metadata } from 'next'
import { PricingSection } from '@/components/PricingSection'
import { TransformationShowcase } from '@/components/TransformationShowcase'
import { BridalJourney } from '@/components/BridalJourney'
import { BridalFAQ } from '@/components/BridalFAQ'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Pricing & Packages | Mugaashra Bridal Studio',
  description: 'Signature Airbrush, Muhurtham & Reception packages. South Indian bridal makeup starting from ₹35,000 by Lead Master Artist Shwetha Mohan, Madurai.',
  alternates: { canonical: 'https://mugashra.com/services' },
}

export const revalidate = 60

export default function ServicesPage() {
  return (
    <PageTransition className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto space-y-20">
      <h1 className="sr-only">Bridal Makeup Packages &amp; Pricing — Mugaashra Bridal Studio</h1>
      
      {/* ── Pricing Packages ── */}
      <PricingSection />

      {/* ── Artistry Spotlight / Skin Realism ── */}
      <TransformationShowcase />

      {/* ── 4-Step Bridal Journey ── */}
      <BridalJourney />

      {/* ── Client FAQ Accordion ── */}
      <BridalFAQ />
    </PageTransition>
  )
}
