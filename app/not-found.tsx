import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181514] text-[#FAFAF8] px-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-medium block">
          404 • Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl tracking-[0.1em] uppercase font-normal text-[var(--color-accent)]">
          PAGE UNLEAVENED
        </h1>
        <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed font-light">
          The bridal editorial page or resource you are looking for has been moved or does not exist.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/"
            className="px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-colors shadow-lg min-h-[44px] flex items-center justify-center w-full sm:w-auto"
          >
            Return to Homepage ↗
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-transparent hover:bg-white/10 border border-white/40 hover:border-white text-white font-sans text-xs uppercase tracking-[2px] font-medium transition-colors min-h-[44px] flex items-center justify-center w-full sm:w-auto"
          >
            Contact Atelier
          </Link>
        </div>
      </div>
    </div>
  )
}
