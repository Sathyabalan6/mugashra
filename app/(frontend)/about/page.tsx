import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Founder | Mugashra Bridal Artistry',
  description: 'Meet our Lead Master Artist and senior bridal specialists in Chennai.',
}

export const revalidate = 60

export default function AboutPage() {
  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Editorial Hero Banner ── */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] flex items-center justify-center px-8 sm:px-16 pt-24 bg-[#181514] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Mobile Dedicated Header */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/founder_header_mobile.png"
              alt="Lead Master Artist at Work"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/75" />
          </div>

          {/* Desktop Hero */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/founder-hero.png"
              alt="Lead Master Artist at Work"
              fill
              priority
              sizes="(min-width: 769px) 100vw, 1px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/85" />
          </div>
        </div>

        <div className="relative z-10 max-w-xl text-center space-y-4">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[3px] text-[#E2C4A8] font-semibold block">
            THE ATELIER STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-[0.05em] uppercase text-white font-normal drop-shadow-md">
            THE ARTIST &<br />
            PHILOSOPHY
          </h1>
          <p className="font-serif text-sm sm:text-base text-[#F0E8E1] leading-relaxed pt-2 font-light drop-shadow-xs">
            Founded by Lead Master Artist <span className="text-white font-semibold underline underline-offset-4 decoration-[#E2C4A8]">Shwetha Mohan</span>, Mugashra Artistry is a sanctuary of bridal beauty nestled in Madurai, dedicated to curating transcendent South Indian wedding looks.
          </p>
        </div>
      </section>

      {/* ── 2. Philosophy & Craft ── */}
      <section className="py-24 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Philosophy */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[2.5px] text-[#9E6D47] font-semibold block">Our Approach</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[#181514] font-normal">
                PHILOSOPHY
              </h2>
            </div>
            <p className="font-serif text-sm sm:text-base text-[#332E2C] leading-[1.85] font-normal">
              Bridal makeup should never mask the bride. Our signature technique is built on skin realism — sculpting luminous, waterproof complexions that look breathtaking up-close during sacred 4:00 AM rituals, while standing up effortlessly to high-definition 4K cinematography.
            </p>
            <div className="w-12 h-[1px] bg-[#9E6D47]" />
          </div>

          {/* Right: The Craft */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[2.5px] text-[#9E6D47] font-semibold block">Atelier Technique</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[#181514] font-normal">
                THE CRAFT
              </h2>
            </div>
            <p className="font-serif text-sm sm:text-base text-[#332E2C] leading-[1.85] font-normal">
              From hand-steaming and 48-hour pre-pleating heirloom Kanjeevaram silks, to custom floral hair architecture with fresh Madurai Malli and rose petals, every single detail is executed with quiet perfection.
            </p>
            <div className="w-12 h-[1px] bg-[#9E6D47]" />
          </div>
        </div>
      </section>

      {/* ── 3. The Master Product Kit & Standards ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-[#181514] !text-white border-t border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[3px] !text-[#E2C4A8] font-semibold block">
              Pure Luxury Formulations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase !text-white font-normal drop-shadow-sm">
              THE MASTER PRODUCT KIT
            </h2>
            <p className="font-serif text-sm sm:text-base !text-[#E5DCD5] leading-relaxed font-light">
              We exclusively deploy globally celebrated skincare and makeup houses, vetted for high-humidity resistance and 4K cinema resolution.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2.5 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-lg sm:text-xl !text-[#F5E6D8] font-medium block">Temptu Pro HD</span>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[1.5px] !text-[#D8CBC0] font-medium">Airbrush Complexion</p>
            </div>
            <div className="p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2.5 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-lg sm:text-xl !text-[#F5E6D8] font-medium block">Charlotte Tilbury</span>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[1.5px] !text-[#D8CBC0] font-medium">Pillow Talk &amp; Flawless Filter</p>
            </div>
            <div className="p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2.5 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-lg sm:text-xl !text-[#F5E6D8] font-medium block">Dior Backstage</span>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[1.5px] !text-[#D8CBC0] font-medium">Radiant Glow Primers</p>
            </div>
            <div className="p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2.5 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-lg sm:text-xl !text-[#F5E6D8] font-medium block">NARS &amp; Huda</span>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[1.5px] !text-[#D8CBC0] font-medium">16-Hour Transferproof</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Founder Card ── */}
      <section className="py-24 md:py-36 px-6 sm:px-12 border-t border-[var(--color-border)]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-sm">
              <Image
                src="/images/shwetha-mohan.jpg"
                alt="Shwetha Mohan - Founder & Master Bridal Artist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-5">
              <span className="font-sans text-xs uppercase tracking-[2.5px] text-[#9E6D47] font-semibold block">Founder & Lead Master Artist</span>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.1em] uppercase text-[#181514] font-normal">
                Shwetha Mohan
              </h2>
              <div className="w-10 h-[1px] bg-[#9E6D47]" />
              <p className="font-serif text-sm sm:text-base text-[#332E2C] leading-[1.85] font-normal">
                With over 9 years of luxury bridal artistry across South India, Shwetha Mohan founded Mugashra to bring a new standard of skin realism and editorial elegance to South Indian brides.
              </p>
              <p className="font-serif text-sm sm:text-base text-[#332E2C] leading-[1.85] font-normal">
                Trained in Temptu Pro HD airbrush techniques and specializing in transferproof 16-hour muhurtham looks, she personally oversees every bridal booking at the atelier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
