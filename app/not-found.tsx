import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#181514] text-[#FAFAF8] overflow-hidden">
      {/* ── Ambient Background Image with Dark Vignette ── */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/images/portfolio/bridal_story_1.webp"
          alt="Mugashra Atelier Studio Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181514] via-[#181514]/70 to-[#181514]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181514] via-transparent to-[#181514]" />
      </div>

      {/* ── Top Header Brand Strip ── */}
      <header className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-8 flex items-center justify-between border-b border-white/10">
        <Link
          href="/"
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-white font-medium hover:text-[var(--color-accent)] transition-colors"
        >
          MUGASHRA ARTISTRY
        </Link>
        <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-3 py-1">
          404 Error
        </span>
      </header>

      {/* ── Center Editorial Statement ── */}
      <main className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-12 py-16 sm:py-24 text-center space-y-8 my-auto">
        <div className="space-y-3">
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-medium block">
            Bridal Atelier • Page Not Found
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-[0.08em] uppercase text-[#FAFAF8] font-normal leading-tight">
            THIS LOOK IS STILL IN THE ATELIER
          </h1>
        </div>

        <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-xl mx-auto">
          The requested page has been moved, renamed, or resides in our private bridal portfolio archives. Allow us to guide you back to our core collections.
        </p>

        {/* ── 3-Column Luxury Navigation Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-3xl mx-auto text-left">
          <Link
            href="/portfolio"
            className="group p-6 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[var(--color-accent)] transition-all duration-300 space-y-2 block"
          >
            <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] font-medium block">
              01 • Portfolio
            </span>
            <h2 className="font-serif text-lg text-white font-normal group-hover:text-[var(--color-accent)] transition-colors">
              Bridal Gallery ↗
            </h2>
            <p className="caption-text text-xs text-white/60">
              Explore Tamil Muhurtham &amp; Airbrush looks.
            </p>
          </Link>

          <Link
            href="/services"
            className="group p-6 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[var(--color-accent)] transition-all duration-300 space-y-2 block"
          >
            <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] font-medium block">
              02 • Offerings
            </span>
            <h2 className="font-serif text-lg text-white font-normal group-hover:text-[var(--color-accent)] transition-colors">
              Pricing Packages ↗
            </h2>
            <p className="caption-text text-xs text-white/60">
              View Master Artist &amp; Atelier rates.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group p-6 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[var(--color-accent)] transition-all duration-300 space-y-2 block"
          >
            <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] font-medium block">
              03 • Consultation
            </span>
            <h2 className="font-serif text-lg text-white font-normal group-hover:text-[var(--color-accent)] transition-colors">
              Contact Desk ↗
            </h2>
            <p className="caption-text text-xs text-white/60">
              Direct WhatsApp chat &amp; booking form.
            </p>
          </Link>
        </div>

        {/* ── Main Return Action ── */}
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-all duration-300 shadow-xl active:scale-[0.98] min-h-[44px]"
          >
            <span>Return to Homepage</span>
            <span>↗</span>
          </Link>
        </div>
      </main>

      {/* ── Bottom Atelier Footer ── */}
      <footer className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans tracking-[1px] gap-2">
        <span>Mugashra Artistry • Editorial Bridal Atelier</span>
        <span>Chennai • Destination Weddings Worldwide</span>
      </footer>
    </div>
  )
}
