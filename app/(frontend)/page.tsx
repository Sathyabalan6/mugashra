import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPayloadClient } from '@/lib/payload'
import { VisionMissionSection } from '@/components/VisionMissionSection'
import { FeedbackSection } from '@/components/FeedbackSection'
import { PageTransition } from '@/components/PageTransition'

export const revalidate = 3600

interface TestimonialItem {
  clientName: string
  quote: string
}

interface HomePageData {
  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDesktopImage?: string
  heroMobileImage?: string
  visionTitle?: string
  visionText?: string
  missionTitle?: string
  missionText?: string
}

export default async function HomePage() {
  let testimonials: TestimonialItem[] = []
  let homePageData: HomePageData | null = null

  try {
    const payload = await getPayloadClient()
    // Fast non-blocking query with 800ms timeout to prevent SQLite lock hangs on Windows dev
    const dbPromise = Promise.all([
      payload.find({ collection: 'testimonials', sort: 'order', limit: 10 }),
      payload.findGlobal({ slug: 'home-page' }).catch(() => null),
    ])
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 800))
    const [testRes, homeRes] = (await Promise.race([dbPromise, timeoutPromise])) as [
      { docs?: TestimonialItem[] },
      HomePageData | null,
    ]

    if (testRes?.docs?.length) {
      testimonials = testRes.docs
    }
    homePageData = homeRes
  } catch {
    // Instant fallback if database is locked or slow
  }

  // Fallback defaults
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

  const heroEyebrow = homePageData?.heroEyebrow || 'Editorial Bridal Atelier • Chennai'
  const heroTitle = homePageData?.heroTitle || 'MUGASHRA ARTISTRY'
  const heroSubtitle = homePageData?.heroSubtitle || 'WHERE A DECADE OF EXCELLENCE MEETS THE ARTISTRY OF YOUR DREAMS.'
  const heroDesktopImage = homePageData?.heroDesktopImage || '/images/hero-bride.png'
  const heroMobileImage = homePageData?.heroMobileImage || '/images/hero-bride-mobile.png'

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Full-Bleed Cinematic Hero Section ── */}
      <section className="relative min-h-[100svh] sm:min-h-screen w-full flex items-start sm:items-center justify-start px-6 sm:px-12 lg:px-16 pt-24 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#181514]">
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
              sizes="100vw"
              className="object-cover object-[center_78%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Desktop Wide Cinematic Cover */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src={heroDesktopImage}
              alt="Mugashra Bridal Artistry Visual"
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-black/75" />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto flex items-center pt-2 sm:pt-0">
          <div className="max-w-2xl space-y-4 sm:space-y-8 text-left">
            <div className="space-y-1">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-medium block">
                {heroEyebrow}
              </span>
              <h1 className="font-serif text-3xl sm:text-7xl lg:text-[92px] leading-[1.04] tracking-[0.04em] uppercase text-[var(--color-accent)] font-normal drop-shadow-md whitespace-pre-line">
                {heroTitle.includes(' ') ? (
                  <>
                    {heroTitle.split(' ')[0]}<br />
                    {heroTitle.split(' ').slice(1).join(' ')}
                  </>
                ) : heroTitle}
              </h1>
            </div>

            <p className="font-sans text-[9.5px] sm:text-[12px] uppercase tracking-[2px] sm:tracking-[2.5px] text-white/90 font-light max-w-sm sm:max-w-lg leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="pt-1 sm:pt-4 flex flex-wrap gap-2.5 sm:gap-4 items-center justify-start">
              <Link
                href="/contact"
                transitionTypes={['nav-forward']}
                className="px-5 sm:px-8 py-2.5 sm:py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-[10px] sm:text-[12px] uppercase tracking-[2px] font-semibold transition-colors duration-300 shadow-lg min-h-[44px] flex items-center"
              >
                Reserve Your Date ↗
              </Link>
              <Link
                href="/services"
                className="px-5 sm:px-8 py-2.5 sm:py-3.5 bg-transparent hover:bg-white/10 border border-white/40 text-white font-sans text-[10px] sm:text-[12px] uppercase tracking-[2px] font-medium transition-colors duration-300 backdrop-blur-xs min-h-[44px] flex items-center"
              >
                View Price List
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Vision & Mission Section ── */}
      <VisionMissionSection
        visionTitle={homePageData?.visionTitle}
        visionText={homePageData?.visionText}
        missionTitle={homePageData?.missionTitle}
        missionText={homePageData?.missionText}
      />

      {/* ── 3. Feedback Section ── */}
      <FeedbackSection testimonials={testimonials} />
    </PageTransition>
  )
}
