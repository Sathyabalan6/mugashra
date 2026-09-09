import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found · Mugashra Bridal Artistry',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-[#181514] px-6 py-20 overflow-hidden selection:bg-[#B58A69] selection:text-[#181514]">

      {/* ── Ambient decorative layer ── */}
      {/* Top-center warm gold radial glow — very faint, no images */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(181,138,105,0.10) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 50% 100%, rgba(181,138,105,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Thin horizontal rule — top accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #B58A69 30%, #B58A69 70%, transparent 100%)',
          opacity: 0.35,
        }}
      />

      {/* ── Content Stage ── */}
      <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">

        {/* Eyebrow label */}
        <span
          className="animate-hero-eyebrow font-sans text-[10px] sm:text-[11px] uppercase tracking-[3.5px] text-[#B58A69] font-semibold mb-5 block"
        >
          Bridal Atelier · Missing Page
        </span>

        {/* Giant serif 404 numeral — gradient gold */}
        <div
          aria-hidden="true"
          className="animate-hero-eyebrow font-serif leading-none select-none"
          style={{
            fontSize: 'clamp(7rem, 4rem + 16vw, 15rem)',
            letterSpacing: '0.04em',
            background:
              'linear-gradient(180deg, #F5E6D8 0%, #B58A69 45%, #7A5032 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 8px 32px rgba(181,138,105,0.20))',
          }}
        >
          404
        </div>

        {/* Gold hairline below numeral */}
        <div
          aria-hidden="true"
          className="mt-1 mb-6 h-[1px] w-20"
          style={{
            background:
              'linear-gradient(90deg, transparent, #B58A69, transparent)',
            opacity: 0.6,
          }}
        />

        {/* Primary heading */}
        <h1
          className="animate-hero-title font-serif text-3xl sm:text-5xl lg:text-[3.25rem] tracking-[0.07em] uppercase text-[#FAFAF8] font-normal leading-tight"
        >
          This look isn&apos;t in the lookbook.
        </h1>

        {/* Body copy */}
        <p
          className="animate-hero-subtitle mt-5 font-serif text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-md"
        >
          The page you&apos;re looking for doesn&apos;t exist — it may have moved, been
          renamed, or is resting in our private atelier archives.
        </p>

        {/* CTA buttons */}
        <div className="animate-hero-actions mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-1.5 px-8 py-3.5 bg-[#B58A69] hover:bg-[#9B7050] text-[#181514] font-sans text-[10px] uppercase tracking-[2.5px] font-semibold transition-all duration-300 min-h-[48px] w-full sm:w-auto active:scale-[0.98]"
          >
            Return Home
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
          </Link>
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-1.5 px-8 py-3.5 bg-transparent border border-white/20 hover:border-[#B58A69] text-white/80 hover:text-[#B58A69] font-sans text-[10px] uppercase tracking-[2.5px] font-medium transition-all duration-300 min-h-[48px] w-full sm:w-auto active:scale-[0.98]"
          >
            View Portfolio
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
          </Link>
        </div>

        {/* ── Divider ── */}
        <div
          aria-hidden="true"
          className="my-10 h-[1px] w-full max-w-[520px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
          }}
        />

        {/* ── Navigation Portal Cards ── */}
        <div className="animate-hero-actions grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">

          <Link
            href="/portfolio"
            className="group flex flex-col gap-2 p-5 border border-white/[0.08] hover:border-[#B58A69]/50 bg-[#1E1A18] hover:bg-[#231F1C] transition-all duration-300"
          >
            <span className="font-sans text-[9px] uppercase tracking-[2.5px] text-[#B58A69] font-semibold">
              01 · Gallery
            </span>
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-[15px] text-white/90 group-hover:text-[#B58A69] transition-colors duration-200 font-normal">
                Bridal Portfolio
              </h2>
              <span className="text-[11px] text-white/40 group-hover:text-[#B58A69] transition-all duration-200 group-hover:translate-x-0.5">
                ↗
              </span>
            </div>
            <p className="font-sans text-[11px] text-white/45 leading-relaxed tracking-wide">
              Tamil Muhurtham &amp; Airbrush looks.
            </p>
          </Link>

          <Link
            href="/services"
            className="group flex flex-col gap-2 p-5 border border-white/[0.08] hover:border-[#B58A69]/50 bg-[#1E1A18] hover:bg-[#231F1C] transition-all duration-300"
          >
            <span className="font-sans text-[9px] uppercase tracking-[2.5px] text-[#B58A69] font-semibold">
              02 · Pricing
            </span>
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-[15px] text-white/90 group-hover:text-[#B58A69] transition-colors duration-200 font-normal">
                Packages &amp; Rates
              </h2>
              <span className="text-[11px] text-white/40 group-hover:text-[#B58A69] transition-all duration-200 group-hover:translate-x-0.5">
                ↗
              </span>
            </div>
            <p className="font-sans text-[11px] text-white/45 leading-relaxed tracking-wide">
              Master Artist &amp; Atelier packages.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group flex flex-col gap-2 p-5 border border-white/[0.08] hover:border-[#B58A69]/50 bg-[#1E1A18] hover:bg-[#231F1C] transition-all duration-300"
          >
            <span className="font-sans text-[9px] uppercase tracking-[2.5px] text-[#B58A69] font-semibold">
              03 · Direct
            </span>
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-[15px] text-white/90 group-hover:text-[#B58A69] transition-colors duration-200 font-normal">
                Atelier Contact
              </h2>
              <span className="text-[11px] text-white/40 group-hover:text-[#B58A69] transition-all duration-200 group-hover:translate-x-0.5">
                ↗
              </span>
            </div>
            <p className="font-sans text-[11px] text-white/45 leading-relaxed tracking-wide">
              WhatsApp chat &amp; booking desk.
            </p>
          </Link>

        </div>

        {/* Inline fallback contact */}
        <p className="mt-7 font-sans text-[11px] text-white/40 tracking-wide">
          Still lost?{' '}
          <Link
            href="/contact"
            className="text-[#B58A69] hover:text-[#D4A77F] underline underline-offset-2 transition-colors duration-200"
          >
            Reach our desk ↗
          </Link>
        </p>

      </div>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #B58A69 30%, #B58A69 70%, transparent 100%)',
          opacity: 0.18,
        }}
      />

    </main>
  )
}
