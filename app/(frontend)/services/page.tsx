import React from 'react'
import type { Metadata } from 'next'
import { PricingSection } from '@/components/PricingSection'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Pricing & Packages | Mugashra Bridal Artistry',
  description: 'High Definition, Airbrush, Reception, Outstation & Bridal Suite packages. South Indian bridal makeup starting from ₹65,000 by Lead Master Artist Shwetha Mohan, Chennai.',
  alternates: { canonical: 'https://mugashra.com/services' },
}

export const revalidate = 60

export default function ServicesPage() {
  return (
    <PageTransition className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto space-y-20">
      <h1 className="sr-only">Bridal Makeup Packages & Pricing — Mugashra Artistry</h1>
      {/* ── Pricing Packages ── */}
      <PricingSection />
    </PageTransition>
  )
}
