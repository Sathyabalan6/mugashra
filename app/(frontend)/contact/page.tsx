import React from 'react'
import type { Metadata } from 'next'
import { EnquiryForm } from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact Us | Mugashra Bridal Artistry',
  description: 'Feel free to contact us for your wedding date availability.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8] text-[#222222]">
      {/* ── Main Contact Section (Exact Reference Layout) ── */}
      <section className="py-24 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Studio Details */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.1em] uppercase text-[#B58A69] font-normal leading-[1.05]">
              CONTACT US
            </h1>

            {/* Opening Hours */}
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[2px] text-[#B58A69] font-medium block">
                Opening Hours
              </span>
              <div className="font-serif text-sm sm:text-base text-[#222222]/85 space-y-1 leading-relaxed">
                <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p className="caption-text">Sunday: By Bridal Appointment Only</p>
              </div>
            </div>

            {/* Studio Address */}
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[2px] text-[#B58A69] font-medium block">
                Studio Atelier
              </span>
              <div className="font-serif text-sm sm:text-base text-[#222222]/85 leading-relaxed">
                <p>Atelier Studio</p>
                <p>Chennai, Tamil Nadu 600028, India</p>
              </div>
            </div>

            {/* Telephone */}
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-[2px] text-[#B58A69] font-medium block">
                Enquiries Desk
              </span>
              <p className="font-serif text-sm sm:text-base text-[#222222]/85">
                Dates confirmed upon form enquiry
              </p>
            </div>
          </div>

          {/* Right Column: Form & Intro */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <p className="font-serif text-lg sm:text-xl text-[#222222]/90 leading-relaxed font-light">
              Feel free to contact us and we&apos;ll get back to you as soon as we can.
            </p>

            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ── Visual Map Strip (Atmospheric) ── */}
      <section className="w-full h-72 sm:h-96 relative bg-[#1E293B] overflow-hidden flex items-center justify-center border-t border-b border-[#222222]/10">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 text-center space-y-3 px-6">
          <span className="font-sans text-[11px] uppercase tracking-[3px] text-[#B58A69] font-medium block">
            CHENNAI ATELIER • DESTINATION TRAVEL WORLDWIDE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Serving South India & Global Weddings
          </h3>
          <p className="caption-text text-xs text-white/60">
            Available across Chennai, Coimbatore, Bangalore, Hyderabad, Sri Lanka, Singapore & Worldwide
          </p>
        </div>
      </section>
    </div>
  )
}
