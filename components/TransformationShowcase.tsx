'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TransformationLook {
  id: string
  label: string
  title: string
  subtitle: string
  image: string
  ceremony: string
  finish: string
  features: { label: string; desc: string }[]
  quote: string
}

const TRANSFORMATION_LOOKS: TransformationLook[] = [
  {
    id: 'muhurtham',
    label: 'Sacred Muhurtham',
    title: 'Crimson Heritage & Skin Realism',
    subtitle: 'High-Definition Tamil Muhurtham Artistry',
    image: '/images/portfolio/red.jpg',
    ceremony: 'Early Morning Sacred Rituals & Homam',
    finish: 'Luminous Matte • Transferproof • 16-Hour Lock',
    features: [
      {
        label: 'Temptu Pro Silicone Mist',
        desc: 'Micronized airbrush particles bond to skin without heavy cream foundation layers.',
      },
      {
        label: 'Homam Heat & Humidity Shield',
        desc: 'Impervious to sacred fire heat, tears of emotion, and warm temple humidity.',
      },
      {
        label: 'Architectural Saree Pleating',
        desc: 'Kanjeevaram silk hand-steamed 48 hours prior for razor-sharp, movement-proof drape.',
      },
      {
        label: 'Madurai Malli Garland Sync',
        desc: 'Fresh jasmine flower venis woven into antique gold temple hair ornaments.',
      },
    ],
    quote:
      '“I sat through a 4-hour morning muhurtham with fire and humidity, and my makeup looked as fresh and skin-like at 1:00 PM as it did at 4:30 AM.” — Gayathri R., Madurai Bride',
  },
  {
    id: 'reception',
    label: 'Evening Reception',
    title: 'Red Carpet Radiance & Soft Smokey Glam',
    subtitle: 'Cinema-Ready Glamour under Stage Lighting',
    image: '/images/portfolio/red6.jpg',
    ceremony: 'Evening Reception & Cocktail Soiree',
    finish: 'Glass-Skin Glow • Velvet Lip • Shimmer Lids',
    features: [
      {
        label: 'Champagne Shimmer Eye Artistry',
        desc: 'Dimension-sculpted lids with individual silk cluster lashes for natural lift.',
      },
      {
        label: 'Zero Flashback Guarantee',
        desc: 'Formulated strictly without titanium dioxide flash glare under heavy stage strobe lights.',
      },
      {
        label: 'Contoured Glow Architecture',
        desc: 'Subtle cheekbone sculpting that catches moving light without visible harsh lines.',
      },
      {
        label: 'Velvet Lip Retention',
        desc: 'Transfer-resistant lip color engineered to endure toasts, dinner, and 1,000+ guest greetings.',
      },
    ],
    quote:
      '“The photos under intense hall lights look like a Vogue editorial. Shwetha understood my skin tone perfectly.” — Divya S., Chennai Bride',
  },
  {
    id: 'engagement',
    label: 'Pastel Engagement',
    title: 'Soft Romance & Monochromatic Pastel',
    subtitle: 'Daytime Nichayathartham & Ring Ceremony',
    image: '/images/portfolio/blue3.jpg',
    ceremony: 'Morning Nichayathartham / Ring Ceremony',
    finish: 'Feathered Brows • Peach Dew • Weightless Tint',
    features: [
      {
        label: 'Feather-Soft Brow Styling',
        desc: 'Natural hair-stroke brow definition framing the eyes with soft, understated elegance.',
      },
      {
        label: 'Monochromatic Pastel Tones',
        desc: 'Synchronized cheeks, lids, and lips complementary to soft silk and organza sarees.',
      },
      {
        label: 'Minimalist Floral Accent',
        desc: 'Romantic textured bun accented with soft baby’s breath and pastel florals.',
      },
      {
        label: 'Second-Skin Breathability',
        desc: 'Feels like bare skin throughout intimate family blessings and daytime photography.',
      },
    ],
    quote:
      '“I felt entirely like myself, just the most elevated, radiant version. Soft, effortless, and stunning.” — Ananya K., Coimbatore Bride',
  },
]

export function TransformationShowcase() {
  const [activeLookId, setActiveLookId] = useState<string>('muhurtham')
  const current = TRANSFORMATION_LOOKS.find((l) => l.id === activeLookId) || TRANSFORMATION_LOOKS[0]

  return (
    <section className="border-t border-[var(--color-border)] pt-20 pb-16">
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
        <span className="font-sans text-[11px] uppercase tracking-[3px] text-[var(--color-accent-text)] font-semibold block">
          Skin-First Philosophy
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.1em] uppercase text-[var(--color-text)] font-normal">
          ARTISTRY SPOTLIGHT
        </h2>
        <p className="font-serif text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
          Explore how our signature airbrush technique and heirloom styling adapt seamlessly across every ceremony of your wedding celebration.
        </p>
      </div>

      {/* Look Selector Tabs (scrolls smoothly from start on mobile without cutoff) */}
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 px-4 sm:px-0">
        {TRANSFORMATION_LOOKS.map((look) => (
          <button
            key={look.id}
            type="button"
            onClick={() => setActiveLookId(look.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-[1.5px] sm:tracking-[2px] transition-all cursor-pointer whitespace-nowrap min-h-[44px] shrink-0 ${
              activeLookId === look.id
                ? 'bg-[var(--color-accent)] text-[#181514] font-semibold shadow-md'
                : 'bg-transparent text-[var(--color-text-body)] border border-[var(--color-border)] hover:border-[var(--color-accent)]'
            }`}
          >
            {look.label}
          </button>
        ))}
      </div>

      {/* Main Spotlight Card */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-4 sm:p-8 lg:p-12 rounded-xs shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-xs overflow-hidden shadow-md bg-[#181514]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white font-sans text-[10px] uppercase tracking-[2px] rounded-full border border-white/20">
                  {current.ceremony}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Breakdown */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-1.5">
              <span className="font-sans text-[11px] uppercase tracking-[2.5px] text-[var(--color-accent-text)] font-semibold block">
                {current.finish}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[var(--color-text)] font-normal leading-snug">
                {current.title}
              </h3>
              <p className="font-serif text-xs sm:text-sm text-[var(--color-muted)]">
                {current.subtitle}
              </p>
            </div>

            {/* 4 Key Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              {current.features.map((feat) => (
                <div
                  key={feat.label}
                  className="p-3.5 sm:p-4 border border-[var(--color-border)] bg-[var(--color-bg-alt)]/30 rounded-xs space-y-1"
                >
                  <h4 className="font-sans text-xs font-semibold text-[var(--color-text)] tracking-wide uppercase">
                    ✓ {feat.label}
                  </h4>
                  <p className="font-serif text-xs text-[var(--color-text-body)] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="p-4 border-l-2 border-[var(--color-accent)] bg-[var(--color-bg-alt)]/40 italic font-serif text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              {current.quote}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                href={`/contact?look=${encodeURIComponent(current.title)}`}
                className="px-6 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-colors rounded-xs text-center min-h-[44px] flex items-center justify-center"
              >
                Inquire for this Look ↗
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3.5 border border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] font-sans text-xs uppercase tracking-[2px] transition-colors rounded-xs text-center min-h-[44px] flex items-center justify-center"
              >
                View Full Gallery ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
