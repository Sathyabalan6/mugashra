'use client'

import React from 'react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <Link
      href="/contact"
      style={{ viewTransitionName: 'floating-cta' }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 min-h-[44px] bg-[var(--color-text)] text-[#FAFAF8] border border-[var(--color-text)] shadow-xl hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-300 group"
      aria-label="Enquire for Wedding Date Availability"
    >
      <span className="font-sans text-[11px] uppercase tracking-[2px] font-medium group-hover:text-white transition-colors">
        Check Date Availability
      </span>
      <span className="text-[var(--color-accent)] group-hover:text-white transition-colors text-xs">↗</span>
    </Link>
  )
}
