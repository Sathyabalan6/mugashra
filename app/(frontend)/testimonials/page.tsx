import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FeedbackSection } from '@/components/FeedbackSection'
import { PageTransition } from '@/components/PageTransition'
import { CLIENT_REVIEWS } from '@/data/seedData'

export const metadata: Metadata = {
  title: 'Client Feedback & Reviews | Mugashra Bridal Artistry',
  description: 'Real testimonials and reviews from our cherished brides. See why South Indian brides trust Mugashra Artistry for their sacred Muhurtham and reception looks.',
  alternates: { canonical: 'https://mugashra.com/testimonials' },
}

export const revalidate = 60

export default function TestimonialsPage() {
  const testimonials = CLIENT_REVIEWS

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-12">
      <h1 className="sr-only">Client Reviews & Feedback — Mugashra Bridal Artistry</h1>
      <FeedbackSection testimonials={testimonials} />

      <div className="text-center pb-24">
        <Link
          href="/contact"
          transitionTypes={['nav-forward']}
          className="inline-block px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-colors shadow-xs min-h-[44px]"
        >
          Book Bridal Consultation ↗
        </Link>
      </div>
    </PageTransition>
  )
}
