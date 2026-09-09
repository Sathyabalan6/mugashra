'use client'

import React from 'react'

export function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840000000'
  const defaultMessage = encodeURIComponent("Hi Mugashra Artistry, I'd like to enquire about bridal makeup availability.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ viewTransitionName: 'floating-cta' }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 min-h-[44px] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] shadow-2xl border border-[var(--color-accent)] transition-all duration-300 rounded-full group font-sans text-xs font-semibold uppercase tracking-[1.5px] active:scale-[0.98]"
      aria-label="Direct WhatsApp Consultation with Mugashra Artistry (opens in new window)"
    >
      <svg className="w-5 h-5 fill-current text-[#181514]" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.105 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
      <span>Chat on WhatsApp</span>
    </a>
  )
}

