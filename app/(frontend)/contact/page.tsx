import React from 'react'
import type { Metadata } from 'next'
import { EnquiryForm } from '@/components/EnquiryForm'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Contact & Bridal Enquiries | Mugashra Bridal Artistry',
  description: 'Get in touch for bridal makeup consultation, availability, and bookings in Chennai and worldwide.',
}

export default function ContactPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840000000'
  const defaultMessage = encodeURIComponent("Hi Mugashra Artistry, I'd like to enquire about bridal makeup availability.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── Main Contact Section ── */}
      <section className="py-24 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Studio Details */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Bridal Atelier • Chennai</span>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.1em] uppercase text-[var(--color-accent-text)] font-normal leading-[1.05]">
                CONTACT US
              </h1>
            </div>

            {/* Opening Hours */}
            <div className="space-y-2">
              <span className="font-eyebrow block">
                Opening Hours
              </span>
              <div className="font-serif text-sm sm:text-base text-[var(--color-text-body)] space-y-1 leading-relaxed">
                <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p className="caption-text">Sunday: By Bridal Appointment Only</p>
              </div>
            </div>

            {/* Studio Address */}
            <div className="space-y-2">
              <span className="font-eyebrow block">
                Studio Atelier
              </span>
              <div className="font-serif text-sm sm:text-base text-[var(--color-text-body)] leading-relaxed">
                <p>Atelier Studio</p>
                <p>Chennai, Tamil Nadu 600028, India</p>
              </div>
            </div>

            {/* Telephone */}
            <div className="space-y-2">
              <span className="font-eyebrow block">
                Enquiries Desk
              </span>
              <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)]">
                Dates confirmed upon form enquiry or WhatsApp
              </p>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Card + Form */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 sm:p-8 bg-[#181514] text-white space-y-4 border border-white/10 shadow-lg">
              <span className="font-sans text-[10px] uppercase tracking-[2.5px] text-[var(--color-accent)] font-semibold block">
                Instant Bridal Support
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAFAF8]">
                Prefer Quick WhatsApp Chat?
              </h2>
              <p className="font-serif text-xs sm:text-sm text-white/80 leading-relaxed">
                Connect directly with our atelier booking coordinator for instant date availability, custom package quotes, and lookbook details.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-all duration-300 rounded-xs shadow-md min-h-[44px]"
              >
                <svg className="w-4 h-4 fill-current text-[#181514]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.105 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Chat Directly on WhatsApp ↗</span>
              </a>
            </div>

            <div className="space-y-6 pt-4 border-t border-[var(--color-border)]">
              <p className="font-serif text-lg sm:text-xl text-[var(--color-text-body)] leading-relaxed font-light">
                Or send us your details below and we&apos;ll get back to you as soon as we can.
              </p>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual Map Strip ── */}
      <section className="w-full h-72 sm:h-96 relative bg-[#181514] overflow-hidden flex items-center justify-center border-t border-b border-[var(--color-border)]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 text-center space-y-3 px-6">
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-[var(--color-accent)] font-medium block">
            CHENNAI ATELIER • DESTINATION TRAVEL WORLDWIDE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Serving South India &amp; Global Weddings
          </h2>
          <p className="caption-text text-xs text-white/70">
            Available across Chennai, Coimbatore, Bangalore, Hyderabad, Sri Lanka, Singapore &amp; Worldwide
          </p>
        </div>
      </section>
    </PageTransition>
  )
}
