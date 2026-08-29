import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'
import { FeedbackSection } from '@/components/FeedbackSection'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Client Feedback & Reviews | Mugashra Bridal Artistry',
  description: 'Real testimonials and reviews from our cherished brides.',
}

export const revalidate = 60

interface TestimonialItem {
  clientName: string
  quote: string
}

export default async function TestimonialsPage() {
  let testimonials: TestimonialItem[] = []

  try {
    const payload = await getPayloadClient()
    const res = await payload.find({ collection: 'testimonials', sort: 'order' })
    if (res?.docs?.length) {
      testimonials = res.docs as TestimonialItem[]
    }
  } catch {
    // Fallback
  }

  if (!testimonials.length) {
    testimonials = [
      {
        clientName: 'PREETHA LAWRENCE',
        quote: "I've been following her work for a long time and I wanted her to do my makeup on my big day. What can I say... Class is the only word we need to say. Not too much, not too less, just Perfect! Her makeup was flawless and long lasting, it stood for more than 8 hours. Her calm and caring personality keeps all her brides cool.",
      },
      {
        clientName: 'SWEATHA BALA',
        quote: "Absolutely recommended for bridal makeup! The team exactly delivered what I wanted on my big day! From a person who wears no more than a kajal to someone who wore professional makeup for the first time, I don’t think I have felt so confident about myself. The best part: you look extremely natural post makeup!",
      },
      {
        clientName: 'SUZANNE',
        quote: "I cannot say enough about Mugashra and her very talented atelier team! Everything she did was FLAWLESS. She worked quickly but efficiently. I had booked her AIRBRUSH package and it was worth EVERY penny. Everything stayed pristine on camera and under the sacred morning lights.",
      },
      {
        clientName: 'DAMINI CHATRANI',
        quote: "She works with the client's preference and really makes the client comfortable and at ease. She's a perfectionist when it comes to her work. Her makeup did not budge and is very creative. I really loved getting dolled up by her!",
      },
      {
        clientName: 'PRIYA & SANGEETHA',
        quote: "We never regretted choosing the atelier for my sister's wedding. They were on time to the venue, very professional and friendly. The bride looked like a model with the hair & makeup in her reception look. Everyone in the family appreciated the looks!",
      },
      {
        clientName: 'PRIYANKA SURESH',
        quote: "I'm a person who wears no makeup at all and I was overwhelmed with the idea of bridal makeup. On my wedding day, I mentioned all my concerns to the artist. She did her magic. I was so happy with the fact that I looked like myself. She kept it so natural and minimal.",
      },
    ]
  }

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-12">
      <FeedbackSection testimonials={testimonials} />

      <div className="text-center pb-24">
        <Link
          href="/contact"
          transitionTypes={['nav-forward']}
          className="inline-block px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-colors shadow-xs min-h-[44px]"
        >
          Reserve Your Wedding Date ↗
        </Link>
      </div>
    </PageTransition>
  )
}
