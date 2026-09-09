import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found · Mugashra Bridal Artistry',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#181514] text-[#FAFAF8] overflow-hidden selection:bg-[var(--color-accent)] selection:text-[#181514]">
      {/* ── 1. Ambient Luxury Radial Atmosphere & Subtle Grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Golden Glow in Top Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-accent)]/20 via-[var(--color-accent)]/5 to-transparent blur-3xl" />
        
        {/* Subtle Geometry Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#B58A69_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        
        {/* Bottom Ambient Vignette */}
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#181514] via-[#181514]/80 to-transparent" />
      </div>

      {/* ── 2. Top Header Brand Strip ── */}
      <header className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-8 flex items-center justify-between border-b border-white/10">
        <Link
          href="/"
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-white font-medium hover:text-[var(--color-accent)] transition-colors min-h-[44px] flex items-center"
          aria-label="Mugashra Atelier Home"
        >
          <span>MUGASHRA ARTISTRY</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] border border-[var(--color-accent)]/40 px-3 py-1 font-semibold">
            Status 404 • Lookbook
          </span>
        </div>
      </header>

      {/* ── 3. Main Center Stage ── */}
      <main
        id="main-content"
        className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-12 py-12 sm:py-20 text-center space-y-8 my-auto"
      >
        {/* Giant Metallic Fluid 404 Numeral */}
        <div className="relative inline-block">
          <div
            aria-hidden="true"
            className="font-serif leading-none bg-gradient-to-b from-[#F5E6D8] via-[#B58A69] to-[#7A5032] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(181,138,105,0.2)] select-none animate-hero-eyebrow"
            style={{
              fontSize: 'clamp(6rem, 4rem + 15vw, 15rem)',
              letterSpacing: '0.04em',
            }}
          >
            404
          </div>
          {/* Subtle Decorative Golden Hairline Below Numeral */}
          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
          />
        </div>

        {/* Editorial Heading */}
        <div className="space-y-3 pt-2">
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-semibold block animate-hero-eyebrow">
            Bridal Atelier • Missing Page
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.06em] uppercase text-[#FAFAF8] font-normal leading-tight animate-hero-title">
            This look isn&apos;t in the lookbook.
          </h1>
        </div>

        {/* Separator Accent */}
        <div
          aria-hidden="true"
          className="mx-auto my-4 h-[1px] w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Body Text */}
        <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-md mx-auto animate-hero-subtitle">
          The page you&apos;re looking for doesn&apos;t exist — it may have moved, been renamed, or rests in our private atelier archives.
        </p>

        {/* ── Primary Action Buttons ── */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-actions">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2.5px] font-semibold transition-all duration-300 shadow-xl min-h-[48px] flex items-center justify-center w-full sm:w-auto active:scale-[0.98] overflow-hidden"
          >
            <span>RETURN HOME</span>
            <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </Link>
          <Link
            href="/portfolio"
            className="group px-8 py-4 bg-transparent hover:bg-white/[0.08] border border-white/20 hover:border-[var(--color-accent)] text-white hover:text-[var(--color-accent)] font-sans text-xs uppercase tracking-[2.5px] font-medium transition-all duration-300 min-h-[48px] flex items-center justify-center w-full sm:w-auto active:scale-[0.98]"
          >
            <span>VIEW PORTFOLIO</span>
            <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </Link>
        </div>

        {/* ── 3 Luxury Portal Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 text-left border-t border-white/10">
          <Link
            href="/portfolio"
            className="group p-5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[var(--color-accent)]/60 transition-all duration-300 space-y-1.5 rounded-none"
          >
            <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] font-semibold block">
              01 • Gallery
            </span>
            <h2 className="font-serif text-base text-white font-normal group-hover:text-[var(--color-accent)] transition-colors flex items-center justify-between">
              <span>Bridal Portfolio</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
            </h2>
            <p className="caption-text text-xs text-white/50">
              Tamil Muhurtham &amp; Airbrush looks.
            </p>
          </Link>

          <Link
            href="/services"
            className="group p-5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[var(--color-accent)]/60 transition-all duration-300 space-y-1.5 rounded-none"
          >
            <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] font-semibold block">
              02 • Pricing
            </span>
            <h2 className="font-serif text-base text-white font-normal group-hover:text-[var(--color-accent)] transition-colors flex items-center justify-between">
              <span>Packages &amp; Rates</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
            </h2>
            <p className="caption-text text-xs text-white/50">
              Master Artist &amp; Atelier packages.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group p-5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[var(--color-accent)]/60 transition-all duration-300 space-y-1.5 rounded-none"
          >
            <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent)] font-semibold block">
              03 • Direct
            </span>
            <h2 className="font-serif text-base text-white font-normal group-hover:text-[var(--color-accent)] transition-colors flex items-center justify-between">
              <span>Atelier Contact</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
            </h2>
            <p className="caption-text text-xs text-white/50">
              WhatsApp chat &amp; booking desk.
            </p>
          </Link>
        </div>

        {/* Inline Contact Prompt */}
        <p className="caption-text text-xs text-white/60 pt-4">
          Still lost?{' '}
          <Link href="/contact" className="text-[var(--color-accent)] hover:underline font-medium">
            Get in touch with our desk ↗
          </Link>
        </p>
      </main>

      {/* ── 4. Bottom Footer Strip ── */}
      <footer className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-12 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans tracking-[1.5px] gap-2">
        <span>MUGASHRA ARTISTRY • EDITORIAL BRIDAL ATELIER</span>
        <span>CHENNAI • DESTINATION WEDDINGS WORLDWIDE</span>
      </footer>
    </div>
  )
}
