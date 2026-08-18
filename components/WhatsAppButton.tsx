'use client'

import React from 'react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-[#222222] text-[#FAFAF8] border border-[#222222] shadow-xl hover:bg-[#B58A69] hover:border-[#B58A69] transition-all duration-300 group"
      aria-label="Enquire for Wedding Date"
    >
      <span className="font-sans text-[11px] uppercase tracking-[2px] font-normal group-hover:text-white transition-colors">
        Check Date Availability
      </span>
      <span className="text-[#B58A69] group-hover:text-white transition-colors text-xs">↗</span>
    </Link>
  )
}
