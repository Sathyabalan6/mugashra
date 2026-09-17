import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { PageTransition } from '@/components/PageTransition'
import { LiveFounderHeader } from '@/components/live-headers/LiveFounderHeader'
import { DesktopFounderBanner } from '@/components/live-headers/DesktopFounderBanner'

export const metadata: Metadata = {
  title: 'Founder & Artist | Mugaashra Bridal Studio',
  description: 'Meet Lead Master Artist Shwetha Mohan and explore our airbrush & HD bridal styling in Madurai.',
}

export const revalidate = 60

export default function AboutPage() {
  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Editorial Hero Banner (Live Mobile on <768px, Cinematic Cover on >=768px) ── */}
      {/* Mobile Live Animated Header */}
      <section className="block md:hidden w-full pt-20 pb-4 px-3 bg-[#181514]">
        <LiveFounderHeader>
          <div className="flex flex-col items-center justify-center text-center space-y-4 pt-12 pb-8 h-full">
            <span className="font-sans text-[11px] min-[390px]:text-xs uppercase tracking-[3.5px] text-[#8B0000] font-bold block drop-shadow-sm">
              THE ATELIER STORY
            </span>
            <h1 className="font-serif text-[42px] min-[390px]:text-[50px] min-[430px]:text-[56px] leading-[0.96] tracking-[0.03em] uppercase text-white font-normal drop-shadow-lg">
              THE ARTIST &amp;<br />
              PHILOSOPHY
            </h1>
            <p className="font-serif text-xs min-[390px]:text-[13px] text-white/95 max-w-[280px] leading-relaxed drop-shadow-xs font-light">
              Founded by Lead Master Artist <span className="text-white font-semibold underline underline-offset-4 decoration-[var(--color-accent)]">Shwetha Mohan</span>, Mugaashra Bridal Studio is a sanctuary of South Indian bridal artistry.
            </p>
          </div>
        </LiveFounderHeader>
      </section>

      {/* Desktop Hero with Fragrance Mist & Drifting Rose Petals (>= 768px) */}
      <DesktopFounderBanner heroImage="/images/founder-hero.webp">
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[3.5px] text-[#8B0000] font-bold block drop-shadow-sm">
          THE ATELIER STORY
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[0.03em] uppercase text-white font-normal drop-shadow-lg">
          THE ARTIST &amp;<br />
          PHILOSOPHY
        </h1>
        <p className="font-serif text-sm sm:text-base text-[#F0E8E1] leading-relaxed pt-2 font-light drop-shadow-xs">
          Founded by Lead Master Artist <span className="text-white font-semibold underline underline-offset-4 decoration-[#E2C4A8]">Shwetha Mohan</span>, Mugaashra Bridal Studio is a sanctuary of bridal beauty nestled in Madurai, dedicated to curating transcendent South Indian wedding looks.
        </p>
      </DesktopFounderBanner>

      {/* ── 2. Philosophy & Craft ── */}
      <section className="py-24 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Philosophy */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[2.5px] text-[#9E6D47] font-semibold block">Our Approach</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.12em] uppercase text-[#181514] font-normal leading-tight">
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
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.12em] uppercase text-[#181514] font-normal leading-tight">
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
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[0.12em] uppercase !text-white font-normal drop-shadow-sm leading-tight">
              THE MASTER PRODUCT KIT
            </h2>
            <p className="font-serif text-sm sm:text-base !text-[#E5DCD5] leading-relaxed font-light">
              We exclusively deploy globally celebrated skincare and makeup houses, vetted for high-humidity resistance and 4K cinema resolution.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-4 sm:p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-base sm:text-xl !text-[#F5E6D8] font-medium block">Temptu Pro HD</span>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[1px] sm:tracking-[1.5px] !text-[#D8CBC0] font-medium">Airbrush Complexion</p>
            </div>
            <div className="p-4 sm:p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-base sm:text-xl !text-[#F5E6D8] font-medium block">Charlotte Tilbury</span>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[1px] sm:tracking-[1.5px] !text-[#D8CBC0] font-medium">Pillow Talk &amp; Filter</p>
            </div>
            <div className="p-4 sm:p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-base sm:text-xl !text-[#F5E6D8] font-medium block">Dior Backstage</span>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[1px] sm:tracking-[1.5px] !text-[#D8CBC0] font-medium">Radiant Glow Primers</p>
            </div>
            <div className="p-4 sm:p-6 border border-[#443B37] bg-[#24201E] rounded-sm space-y-2 transition-colors hover:border-[#E2C4A8] hover:bg-[#2C2725]">
              <span className="font-serif text-base sm:text-xl !text-[#F5E6D8] font-medium block">NARS &amp; Huda</span>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[1px] sm:tracking-[1.5px] !text-[#D8CBC0] font-medium">16-Hour Transferproof</p>
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
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[0.08em] uppercase text-[#181514] font-normal leading-tight">
                Shwetha Mohan
              </h2>
              <div className="w-10 h-[1px] bg-[#9E6D47]" />
              <p className="font-serif text-sm sm:text-base text-[#332E2C] leading-[1.85] font-normal">
                With over 10 years of luxury bridal artistry across South India, Shwetha Mohan founded Mugaashra Bridal Studio to bring a new standard of skin realism and editorial elegance to South Indian and North Indian brides.
              </p>
              <p className="font-serif text-sm sm:text-base text-[#332E2C] leading-[1.85] font-normal">
                Specializing in flawless airbrush makeup, HD &amp; HD ultra complexions, skin-like transfer-proof finishes, soft-glam looks, and full-glam makeovers, she personally oversees every bridal booking at the atelier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
