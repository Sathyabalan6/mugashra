import React from 'react'
import type { Metadata } from 'next'
import { PricingSection } from '@/components/PricingSection'
import { TransformationShowcase } from '@/components/TransformationShowcase'
import { BridalJourney } from '@/components/BridalJourney'
import { BridalFAQ } from '@/components/BridalFAQ'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Bridal Packages | Mugaashra Bridal Studio',
  description: 'Signature Airbrush, Sacred Muhurtham, and Reception bridal packages by Lead Master Artist Shwetha Mohan, Madurai. Pricing strictly upon consultation.',
  alternates: { canonical: 'https://mugashra.com/services' },
}

export const revalidate = 60

export default function ServicesPage() {
  return (
    <PageTransition className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto space-y-20">
      <h1 className="sr-only">Bespoke Bridal Packages — Mugaashra Bridal Studio</h1>
      
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
