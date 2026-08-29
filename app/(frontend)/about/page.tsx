import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Founder & Atelier Team | Mugashra Bridal Artistry',
  description: 'Meet our Lead Master Artist and senior bridal specialists in Chennai.',
}

export const revalidate = 60

export default function AboutPage() {
  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Editorial Hero Banner ── */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] flex items-center justify-start px-8 sm:px-16 pt-24 bg-[#181514] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=85"
            alt="Lead Master Artist at Work"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 max-w-xl text-left space-y-4">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[3px] text-[#B58A69] font-medium block">
            THE ATELIER STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-[0.05em] uppercase text-white font-normal">
            THE ARTIST &<br />
            PHILOSOPHY
          </h1>
          <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed pt-2">
            Founded by Lead Master Artist <span className="text-white font-medium">Shwetha Mohan</span>, Mugashra Artistry is a sanctuary of bridal beauty nestled in Chennai, dedicated to curating transcendent South Indian wedding looks.
          </p>
        </div>
      </section>

      {/* ── 2. Philosophy & Craft ── */}
      <section className="py-24 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Philosophy */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Our Approach</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                PHILOSOPHY
              </h2>
            </div>
            <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)] leading-[1.85] font-light">
              Bridal makeup should never mask the bride. Our signature technique is built on skin realism — sculpting luminous, waterproof complexions that look breathtaking up-close during sacred 4:00 AM rituals, while standing up effortlessly to high-definition 4K cinematography.
            </p>
            <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
          </div>

          {/* Right: The Craft */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Atelier Technique</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                THE CRAFT
              </h2>
            </div>
            <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)] leading-[1.85] font-light">
              From hand-steaming and 48-hour pre-pleating heirloom Kanjeevaram silks, to custom floral hair architecture with fresh Madurai Malli and rose petals, every single detail is executed with quiet perfection.
            </p>
            <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
          </div>
        </div>
      </section>

      {/* ── 3. The Atelier Team ── */}
      <section id="team" className="py-24 md:py-36 px-6 sm:px-12 bg-[var(--color-bg-white)] border-t border-[var(--color-border)]">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="font-eyebrow block">Atelier Specialists</span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
              THE ATELIER TEAM
            </h2>
            <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)] max-w-xl mx-auto leading-relaxed">
              Led by Founder &amp; Master Artist Shwetha Mohan, every specialist in our studio is personally trained in our signature techniques to ensure flawless consistency across your bridal party.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder Card */}
            <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-8 space-y-6">
              <div className="relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Shwetha Mohan - Founder & Master Bridal Artist"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center grayscale contrast-110"
                />
              </div>

              <div className="space-y-2 text-left">
                <span className="font-eyebrow block">Founder &amp; Lead Master Artist</span>
                <h3 className="font-serif text-2xl text-[var(--color-text)] font-normal">
                  Shwetha Mohan
                </h3>
                <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed">
                  Over 9 years of luxury bridal styling across South India, specialized in high-definition skin realism, Temptu airbrush artistry, and bespoke Muhurtham elegance.
                </p>
              </div>
            </div>

            {/* Team Member 1 */}
            <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-8 space-y-6">
              <div className="relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80"
                  alt="Senior Bridal Hair Specialist"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-left">
                <span className="font-eyebrow block">Senior Specialist</span>
                <h3 className="font-serif text-2xl text-[var(--color-text)] font-normal">
                  Senior Hair & Floral Architect
                </h3>
                <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed">
                  Specializing in intricate South Indian bridal braids, poola jada floral settings, and voluminous Hollywood waves that remain immaculate through high-energy sangeets.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-8 space-y-6">
              <div className="relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Senior Saree Draping Specialist"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-left">
                <span className="font-eyebrow block">Senior Specialist</span>
                <h3 className="font-serif text-2xl text-[var(--color-text)] font-normal">
                  Senior Saree & Silhouette Stylist
                </h3>
                <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed">
                  Expert in razor-sharp Kanjeevaram box pleating, weight distribution pinning for heavy silk sarees, and contemporary lehenga draping.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/contact"
              transitionTypes={['nav-forward']}
              className="inline-block px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-sans text-xs uppercase tracking-[2px] font-semibold transition-colors shadow-sm"
            >
              Enquire About Team Availability ↗
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
