import React from 'react'
import type { Metadata } from 'next'
import { EnquiryForm } from '@/components/EnquiryForm'
import { DateChecker } from '@/components/DateChecker'

export const metadata: Metadata = {
  title: 'Contact & Date Availability | Mugashra Bridal Artistry',
  description: 'Check Muhurtham wedding date availability and contact our Chennai bridal atelier.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
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
                Dates confirmed upon form enquiry
              </p>
            </div>
          </div>

          {/* Right Column: Date Checker + Form */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Interactive Availability Tool */}
            <DateChecker />

            <div className="space-y-6 pt-4 border-t border-[var(--color-border)]">
              <p className="font-serif text-lg sm:text-xl text-[var(--color-text-body)] leading-relaxed font-light">
                Feel free to contact us and we&apos;ll get back to you as soon as we can.
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
    </div>
  )
}
