import React from 'react'
import type { Metadata } from 'next'
import { PricingSection } from '@/components/PricingSection'

export const metadata: Metadata = {
  title: 'Pricing & Packages | Mugashra Bridal Artistry',
  description: 'High Definition, Airbrush, Reception, Outstation & Bridal Suite Packages.',
}

export const revalidate = 60

export default function ServicesPage() {
  return (
    <div className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto space-y-20">
      {/* ── Pricing Packages ── */}
      <PricingSection />
    </div>
  )
}
