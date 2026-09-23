'use client'

import React from 'react'
import Link from 'next/link'

const JOURNEY_STEPS = [
  {
    step: '01',
    phase: 'Reservation & Discovery',
    title: 'Exclusive Date Reservation',
    description:
      'We strictly maintain a single-bride-per-date policy for Master Artist Shwetha Mohan. We review your auspicious timings, venue logistics, and reserve your date with complete exclusivity.',
    badge: 'Single Bride Exclusivity',
    highlight: 'WhatsApp consultation within 4 hours',
  },
  {
    step: '02',
    phase: '3–6 Weeks Prior',
    title: 'Couture Skin Prep Advisory',
    description:
      'Luminous airbrush makeup begins with balanced skin. You receive a personalized pre-bridal skincare protocol tailored to South Indian climate conditions, ensuring pore-refining adhesion.',
    badge: 'Skin-First Realism',
    highlight: 'Hydration & routine checklist',
  },
  {
    step: '03',
    phase: '48 Hours Prior',
    title: 'Saree Pre-Pleating & Jewellery Sync',
    description:
      'Your heirloom Kanjeevarams and Muhurtham silks are precision hand-steamed and box-pleated. On wedding morning, draping takes under 8 minutes with razor-sharp pleats that never shift.',
    badge: 'Heirloom Care',
    highlight: 'Zero-wrinkle box pleating',
  },
  {
    step: '04',
    phase: 'The Auspicious D-Day',
    title: 'The Wedding Day Atelier',
    description:
      'On-location arrival 3 hours before muhurtham. Using Temptu Pro silicone-based airbrush, fresh Madurai Malli floral hair architecture, and transferproof setting, you walk down the aisle radiantly serene.',
    badge: '16-Hour Waterproof',
    highlight: 'Calm, punctual styling',
  },
]

export function BridalJourney() {
  return (
    <section className="border-t border-[var(--color-border)] pt-20 pb-16">
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
        <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent-text)] font-semibold block">
          The Atelier Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.1em] uppercase text-[var(--color-text)] font-normal">
          THE BRIDAL JOURNEY
        </h2>
        <p className="font-serif text-[15px] sm:text-base text-[var(--color-muted)] leading-relaxed">
          From your initial consultation to your sacred wedding moments, our four-step couture roadmap ensures absolute serenity, precision, and timeless radiance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {JOURNEY_STEPS.map((item) => (
          <div
            key={item.step}
            className="group relative bg-[var(--color-bg-white)] border border-[var(--color-border)] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-md rounded-xs"
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]/70">
                <span className="font-serif text-4xl text-[var(--color-accent)] font-light select-none">
                  {item.step}
                </span>
                <span className="font-sans text-xs uppercase tracking-[2px] text-[var(--color-muted)] font-medium">
                  {item.phase}
                </span>
              </div>

              {/* Title & Description */}
              <div className="pt-6 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-text)] font-normal leading-snug group-hover:text-[var(--color-accent-text)] transition-colors">
                  {item.title}
                </h3>
                <p className="font-serif text-sm sm:text-[15px] text-[var(--color-text-body)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="pt-6 mt-6 border-t border-[var(--color-border)]/50 flex flex-col gap-1">
              <span className="font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold">
                ✓ {item.badge}
              </span>
              <span className="font-serif text-xs text-[var(--color-muted)]">
                {item.highlight}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Strip */}
      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs sm:text-[13px] uppercase tracking-[2px] font-semibold transition-all duration-300 rounded-xs shadow-md min-h-[44px] w-full sm:w-auto active:scale-[0.98]"
        >
          <span>Reserve Your Auspicious Date ↗</span>
        </Link>
      </div>
    </section>
  )
}
