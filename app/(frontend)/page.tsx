import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VisionMissionSection } from '@/components/VisionMissionSection'
import { FeedbackSection } from '@/components/FeedbackSection'
import { PageTransition } from '@/components/PageTransition'
import { LiveHeroHeader } from '@/components/live-headers/LiveHeroHeader'
import { DesktopHeroBanner } from '@/components/live-headers/DesktopHeroBanner'
import { CLIENT_REVIEWS } from '@/data/seedData'

const DEFAULT_HERO = {
  eyebrow: 'Editorial Bridal Atelier • Madurai',
  title: 'MUGAASHRA BRIDAL STUDIO',
  subtitle: 'WHERE A DECADE OF EXCELLENCE MEETS THE ARTISTRY OF YOUR DREAMS.',
  desktopImage: '/images/hero-bride.webp',
  mobileImage: '/images/hero-bride-mobile.webp',
}

export const revalidate = 3600

export default async function HomePage() {
  const testimonials = CLIENT_REVIEWS
  const heroEyebrow = DEFAULT_HERO.eyebrow
  const heroTitle = DEFAULT_HERO.title
  const heroSubtitle = DEFAULT_HERO.subtitle
  const heroDesktopImage = DEFAULT_HERO.desktopImage

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Hero Section (Live Mobile Header on <768px, Cinematic Cover on >=768px) ── */}
      {/* Mobile Live Animated Header */}
      <section className="block md:hidden w-full pt-20 pb-4 px-3 bg-[#181514]">
        <LiveHeroHeader>
          {/* Top-Left Title Block with Buttons directly below the title end */}
          <div className="space-y-3.5 text-left max-w-[380px]">
            <div className="space-y-1.5">
              <span className="font-sans text-[12.5px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold block animate-hero-eyebrow drop-shadow-sm">
                {heroEyebrow}
              </span>
              <h1 className="font-serif text-[48px] min-[360px]:text-[56px] min-[390px]:text-[64px] min-[430px]:text-[70px] font-normal tracking-[0.02em] uppercase text-white leading-[0.88] drop-shadow-xl animate-hero-title">
                MUGAASHRA
                <span className="block text-[13.5px] min-[360px]:text-[15px] min-[390px]:text-[16.5px] font-sans tracking-[0.22em] min-[360px]:tracking-[0.25em] text-[#F3ECE4] font-semibold mt-2 uppercase drop-shadow-md">
                  BRIDAL MAKEUP ATELIER
                </span>
              </h1>
            </div>

            <p className="font-serif text-[14px] text-white/95 font-light leading-snug drop-shadow-xs max-w-[340px]">
              {heroSubtitle}
            </p>
          </div>
        </LiveHeroHeader>
      </section>

      {/* Desktop Cinematic Hero with Flowing Jasmine & Rose Petal Drift (>= 768px) */}
      <DesktopHeroBanner heroImage={heroDesktopImage}>
        <div className="max-w-2xl space-y-8 text-left">
          <div className="space-y-1">
            <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-medium block animate-hero-eyebrow">
              {heroEyebrow}
            </span>
            <h1 className="display-heading text-[var(--color-accent)] drop-shadow-md whitespace-pre-line animate-hero-title">
              {heroTitle.includes(' ') ? (
                <>
                  {heroTitle.split(' ')[0]}<br />
                  {heroTitle.split(' ').slice(1).join(' ')}
                </>
              ) : heroTitle}
            </h1>
          </div>

          <p className="font-sans text-[12px] uppercase tracking-[2.5px] text-white/90 font-light max-w-lg leading-relaxed animate-hero-subtitle">
            {heroSubtitle}
          </p>
        </div>
      </DesktopHeroBanner>

      {/* ── 2. Curated Editorial Looks Showcase ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <span className="font-eyebrow block">Signature Transformations</span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-[0.1em] uppercase text-[var(--color-text)] font-normal">
              CURATED BRIDAL LOOKS
            </h2>
            <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)] leading-relaxed font-light">
              A bespoke aesthetic designed for each ceremonial event — synchronized with your heirloom jewellery, silk weave, and stage lighting.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="font-sans text-xs uppercase tracking-[2px] text-[var(--color-accent-text)] hover:text-[var(--color-text)] border-b border-[var(--color-accent)] pb-1 transition-colors w-fit shrink-0 font-semibold"
          >
            Explore Complete Portfolio (20+ Looks) ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1: Muhurtham */}
          <div className="group relative flex flex-col bg-[var(--color-bg-white)] border border-[var(--color-border)] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE1D5]">
              <Image
                src="/images/portfolio/red.jpg"
                alt="Sacred Muhurtham Bridal Styling"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#181514]/85 backdrop-blur-xs text-[var(--color-accent)] font-sans text-[10px] uppercase tracking-[2px] font-semibold">
                Sacred Muhurtham
              </div>
            </div>
            <div className="p-6 space-y-2 text-left">
              <h3 className="font-serif text-xl text-[var(--color-text)] font-normal">
                The Royal Crimson Muhurtham
              </h3>
              <p className="font-serif text-xs text-[var(--color-text-body)] leading-relaxed">
                Sweat-resistant 4:00 AM HD complexion, antique gold temple jewellery, and fresh Madurai Malli architectural braid.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?look=The%20Royal%20Crimson%20Muhurtham"
                  className="font-sans text-[11px] uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold inline-flex items-center gap-1 group-hover:underline min-h-[44px] py-1"
                >
                  Enquire This Look ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Reception */}
          <div className="group relative flex flex-col bg-[var(--color-bg-white)] border border-[var(--color-border)] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE1D5]">
              <Image
                src="/images/portfolio/couple_photo_red_and_sandal_1.jpg"
                alt="Glass-Skin Reception Bridal Artistry"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#181514]/85 backdrop-blur-xs text-[var(--color-accent)] font-sans text-[10px] uppercase tracking-[2px] font-semibold">
                Evening Reception
              </div>
            </div>
            <div className="p-6 space-y-2 text-left">
              <h3 className="font-serif text-xl text-[var(--color-text)] font-normal">
                Glass-Skin Airbrush Glamour
              </h3>
              <p className="font-serif text-xs text-[var(--color-text-body)] leading-relaxed">
                Stage-lighting sculpted base, champagne shimmer lids, 3D luxury lashes, and contemporary Hollywood waves.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?look=Glass-Skin%20Airbrush%20Glamour"
                  className="font-sans text-[11px] uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold inline-flex items-center gap-1 group-hover:underline min-h-[44px] py-1"
                >
                  Enquire This Look ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Engagement */}
          <div className="group relative flex flex-col bg-[var(--color-bg-white)] border border-[var(--color-border)] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE1D5]">
              <Image
                src="/images/portfolio/blue.jpg"
                alt="Nichayathartham Pastel Elegance"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#181514]/85 backdrop-blur-xs text-[var(--color-accent)] font-sans text-[10px] uppercase tracking-[2px] font-semibold">
                Nichayathartham
              </div>
            </div>
            <div className="p-6 space-y-2 text-left">
              <h3 className="font-serif text-xl text-[var(--color-text)] font-normal">
                Pastel Organza &amp; Soft Glam
              </h3>
              <p className="font-serif text-xs text-[var(--color-text-body)] leading-relaxed">
                Featherlight dewy skin, soft monochromatic peach blush, lash clusters, and romantic floral half-updo.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?look=Pastel%20Organza%20Soft%20Glam"
                  className="font-sans text-[11px] uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold inline-flex items-center gap-1 group-hover:underline min-h-[44px] py-1"
                >
                  Enquire This Look ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Vision & Mission Section ── */}
      <VisionMissionSection />

      {/* ── 6. Feedback Section ── */}
      <FeedbackSection testimonials={testimonials} />
    </PageTransition>
  )
}
