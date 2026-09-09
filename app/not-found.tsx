import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#181514] text-[#FAFAF8]">
      {/* ── Top Header Brand Strip ── */}
      <header className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-8 flex items-center justify-between border-b border-white/10">
        <Link
          href="/"
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-white font-medium hover:text-[var(--color-accent)] transition-colors"
        >
          MUGASHRA ARTISTRY
        </Link>
        <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-3 py-1">
          Error 404
        </span>
      </header>

      {/* ── Center Minimalist Statement ── */}
      <main className="max-w-[800px] mx-auto px-6 sm:px-12 py-16 sm:py-24 text-center space-y-8 my-auto">
        <div className="space-y-4">
          <span className="font-serif text-7xl sm:text-9xl tracking-[0.05em] text-[var(--color-accent)] font-light block leading-none">
            404
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl tracking-[0.08em] uppercase text-[#FAFAF8] font-normal">
            PAGE NOT FOUND
          </h1>
        </div>

        <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* ── Navigation Links ── */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/"
            className="px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-all duration-300 shadow-xl active:scale-[0.98] min-h-[44px] flex items-center justify-center w-full sm:w-auto"
          >
            Back to Home ↗
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white text-white font-sans text-xs uppercase tracking-[2px] font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center w-full sm:w-auto"
          >
            View Pricing &amp; Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white text-white font-sans text-xs uppercase tracking-[2px] font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center w-full sm:w-auto"
          >
            Contact Desk
          </Link>
        </div>
      </main>

      {/* ── Bottom Footer ── */}
      <footer className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans tracking-[1px] gap-2">
        <span>Mugashra Artistry • Editorial Bridal Atelier</span>
        <span>Chennai, Tamil Nadu</span>
      </footer>
    </div>
  )
}
