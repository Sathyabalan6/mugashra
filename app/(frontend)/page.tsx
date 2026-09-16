import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VisionMissionSection } from '@/components/VisionMissionSection'
import { FeedbackSection } from '@/components/FeedbackSection'
import { PageTransition } from '@/components/PageTransition'
import { CLIENT_REVIEWS } from '@/data/seedData'

const DEFAULT_HERO = {
  eyebrow: 'Editorial Bridal Atelier • Madurai',
  title: 'MUGAASHRA BRIDAL STUDIO',
  subtitle: 'WHERE A DECADE OF EXCELLENCE MEETS THE ARTISTRY OF YOUR DREAMS.',
  desktopImage: '/images/hero-bride.png',
  mobileImage: '/images/hero-bride-mobile.png',
}

export const revalidate = 3600

export default async function HomePage() {
  const testimonials = CLIENT_REVIEWS
  const heroEyebrow = DEFAULT_HERO.eyebrow
  const heroTitle = DEFAULT_HERO.title
  const heroSubtitle = DEFAULT_HERO.subtitle
  const heroDesktopImage = DEFAULT_HERO.desktopImage
  const heroMobileImage = DEFAULT_HERO.mobileImage

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Full-Bleed Cinematic Hero Section ── */}
      <section className="relative min-h-[100svh] sm:min-h-screen w-full flex items-start sm:items-center justify-start px-6 sm:px-12 lg:px-16 pt-24 sm:pt-24 pb-12 sm:pb-16 bg-[#181514]">
        {/* Background Visual (Responsive) */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Dedicated Portrait */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src={heroMobileImage}
              alt="Mugashra South Indian Bride"
              fill
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 1px"
              className="object-cover object-[center_78%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent" />
          </div>

          {/* Desktop Wide Cinematic Cover */}
          <div className="hidden md:block absolute inset-0">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={heroDesktopImage}
                alt="Mugashra Bridal Artistry Visual"
                fill
                priority
                sizes="(min-width: 769px) 100vw, 1px"
                className="object-cover object-[right_center]"
              />
              <Image
                src="/images/bells-overlay.png"
                aria-hidden="true"
                alt=""
                width={300}
                height={300}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '14vw',
                  height: 'auto',
                  transformOrigin: '50% 6%',
                  animationName: 'bell-swing',
                  animationDuration: '3.2s',
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite',
                }}
              />
            </div>
            {/* Scrim gradient: dark left for text contrast, fading out to transparent over the bride on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto flex items-center pt-2 sm:pt-0">
          <div className="max-w-2xl space-y-4 sm:space-y-8 text-left">
            <div className="space-y-1">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-medium block animate-hero-eyebrow">
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

            <p className="font-sans text-[9.5px] sm:text-[12px] uppercase tracking-[2px] sm:tracking-[2.5px] text-white/90 font-light max-w-sm sm:max-w-lg leading-relaxed animate-hero-subtitle">
              {heroSubtitle}
            </p>

            <div className="pt-1 sm:pt-4 flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-start animate-hero-actions">
              <Link
                href="/contact"
                transitionTypes={['nav-forward']}
                className="group relative px-4 sm:px-8 py-2 sm:py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-[9.5px] sm:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] font-semibold transition-all duration-300 shadow-lg min-h-[38px] sm:min-h-[44px] flex items-center justify-start overflow-hidden active:scale-[0.98] w-fit sm:w-auto shrink-0"
              >
                <span>Book Consultation</span>
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
              </Link>
              <Link
                href="/services"
                className="px-4 sm:px-8 py-2 sm:py-3.5 bg-transparent hover:bg-white/10 border border-white/40 hover:border-white text-white font-sans text-[9.5px] sm:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] font-medium transition-all duration-300 backdrop-blur-xs min-h-[38px] sm:min-h-[44px] flex items-center justify-start active:scale-[0.98] w-fit sm:w-auto shrink-0"
              >
                View Price List
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                sizes="(max-width: 768px) 100vw, 33vw"
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
                  className="font-sans text-[11px] uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold inline-flex items-center gap-1 group-hover:underline"
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
                sizes="(max-width: 768px) 100vw, 33vw"
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
                  className="font-sans text-[11px] uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold inline-flex items-center gap-1 group-hover:underline"
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
                sizes="(max-width: 768px) 100vw, 33vw"
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
                  className="font-sans text-[11px] uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold inline-flex items-center gap-1 group-hover:underline"
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
