import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { EnquiryForm } from '@/components/EnquiryForm'
import { PageTransition } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Reserve Your Date | Contact Mugaashra Bridal Studio Madurai',
  description: 'Book your bridal makeup consultation with Lead Master Artist Shwetha Mohan. Single-bride exclusivity for Tamil Muhurtham, Airbrush Reception, and worldwide destination weddings.',
  alternates: { canonical: 'https://mugaashra.com/contact' },
}

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/dir//MUGAASHRA+Bridal+Studio+-+Wedding+makeup+artist,+Bridal+makeup+artist+madurai,+2nd+Floor,+Anna+1st,+No.5,+Jeyaseelan+Cross+St,+Bethaniapuram,+Madurai,+Tamil+Nadu+625016/@11.1077453,79.6614369,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00cf03a9ce8369:0x1dd85da260b1e612!2m2!1d78.0965057!2d9.9359998?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D'

export default function ContactPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918610597490'
  const defaultMessage = encodeURIComponent("Hi Mugaashra Bridal Studio, I'd like to enquire about bridal makeup availability.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Page Header ── */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-6 sm:px-12 max-w-[1360px] mx-auto w-full text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="font-eyebrow block">
            Atelier Consultation • Madurai &amp; Worldwide Travel
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-[0.06em] uppercase text-[var(--color-text)] font-normal leading-[1.05]">
            RESERVE YOUR DATE
          </h1>
          <div className="w-12 h-[1px] bg-[var(--color-accent)] mx-auto opacity-60" />
          <p className="font-serif text-sm sm:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            Because Lead Master Artist Shwetha Mohan strictly enforces a single-bride-per-date exclusivity policy, dates are reserved on a first-confirmed basis. Connect directly with our studio coordinator or submit your bridal itinerary below.
          </p>
        </div>
      </section>

      {/* ── 2. Main Split: Studio Cards (Left) & Enquiry Suite (Right) ── */}
      <section className="pb-24 sm:pb-32 px-6 sm:px-12 max-w-[1360px] mx-auto w-full scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── Left Column: Cleanly Segmented Atelier Cards ── */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Zone 1: Master Artist & Exclusivity Standards */}
            <div className="bg-[var(--color-bg-white)] border border-[var(--color-border)] p-6 sm:p-7 rounded-xs shadow-xs space-y-5">
              {/* Artist Profile Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-[var(--color-border)]/60">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 rounded-full overflow-hidden border border-[var(--color-accent)]/50 shadow-sm bg-[#181514]">
                  <Image
                    src="/images/shwetha-mohan.jpg"
                    alt="Master Artist Shwetha Mohan"
                    fill
                    sizes="72px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="font-sans text-[10.5px] uppercase tracking-[2px] text-[var(--color-accent-text)] font-semibold block">
                    Lead Master Artist &amp; Founder
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl text-[var(--color-text)] font-normal leading-snug">
                    Shwetha Mohan
                  </h2>
                  <p className="font-serif text-xs sm:text-[13px] text-[var(--color-muted)]">
                    10 Years South Indian Bridal Artistry
                  </p>
                </div>
              </div>

              {/* 3 Dedicated Luxury Trust Badges with Bespoke SVG Line Icons */}
              <div className="grid grid-cols-3 gap-2.5">
                {/* 1 Bride */}
                <div className="p-3 bg-[var(--color-bg)]/80 border border-[var(--color-border)]/70 rounded-xs text-center flex flex-col items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="6 3 18 3 22 9 12 22 2 9" />
                    <line x1="2" y1="9" x2="22" y2="9" />
                    <line x1="12" y1="22" x2="8" y2="9" />
                    <line x1="12" y1="22" x2="16" y2="9" />
                  </svg>
                  <span className="block font-sans text-xs uppercase tracking-[1px] font-semibold text-[var(--color-text)] mt-0.5">
                    1 Bride
                  </span>
                  <span className="block font-serif text-[11.5px] text-[var(--color-muted)] leading-tight">
                    Per Date
                  </span>
                </div>

                {/* 16-Hour */}
                <div className="p-3 bg-[var(--color-bg)]/80 border border-[var(--color-border)]/70 rounded-xs text-center flex flex-col items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="block font-sans text-xs uppercase tracking-[1px] font-semibold text-[var(--color-text)] mt-0.5">
                    16-Hour
                  </span>
                  <span className="block font-serif text-[11.5px] text-[var(--color-muted)] leading-tight">
                    Sweatproof
                  </span>
                </div>

                {/* Hospital UV */}
                <div className="p-3 bg-[var(--color-bg)]/80 border border-[var(--color-border)]/70 rounded-xs text-center flex flex-col items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span className="block font-sans text-xs uppercase tracking-[1px] font-semibold text-[var(--color-text)] mt-0.5">
                    Hospital UV
                  </span>
                  <span className="block font-serif text-[11.5px] text-[var(--color-muted)] leading-tight">
                    Sanitized Kit
                  </span>
                </div>
              </div>
            </div>

            {/* Zone 2: Atelier Studio Address, Hours & Direct Concierge Desk */}
            <div className="bg-[var(--color-bg-white)] border border-[var(--color-border)] p-6 sm:p-7 rounded-xs shadow-xs space-y-5">
              <div className="space-y-1">
                <span className="font-sans text-[10.5px] uppercase tracking-[2px] text-[var(--color-accent-text)] font-semibold block">
                  Visit Atelier &amp; Concierge
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[var(--color-text)] font-normal">
                  Madurai Studio
                </h3>
              </div>

              {/* Physical Address */}
              <div className="space-y-2 pt-1 font-serif text-[15px] sm:text-base text-[var(--color-text-body)] leading-relaxed">
                <p className="font-medium text-[var(--color-text)]">Mugaashra Bridal Studio</p>
                <p>2nd Floor, Anna 1st, No. 5, Jeyaseelan Cross St,</p>
                <p>Bethaniapuram, Madurai - 625016, Tamil Nadu</p>
              </div>

              {/* Transit Distance Badges with SVG Line Icons */}
              <div className="flex flex-wrap gap-2 text-xs font-sans text-[var(--color-muted)]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-bg)] border border-[var(--color-border)]/70 rounded-full">
                  <svg className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="3" width="16" height="16" rx="2" />
                    <path d="M4 11h16" />
                    <path d="M12 3v8" />
                    <path d="m8 19-2 3" />
                    <path d="m16 19 2 3" />
                  </svg>
                  <span>15 mins from Madurai Junction</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-bg)] border border-[var(--color-border)]/70 rounded-full">
                  <svg className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                  <span>35 mins from Madurai Airport (IXM)</span>
                </span>
              </div>

              {/* Directions Button */}
              <div className="pt-1">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs sm:text-[13px] uppercase tracking-[1.5px] font-semibold text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] border-b border-[var(--color-accent)] pb-0.5 transition-colors"
                >
                  <span>Get Directions on Google Maps</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Consultation Hours */}
              <div className="space-y-1 pt-4 border-t border-[var(--color-border)]/60">
                <div className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold">
                  <svg className="w-3.5 h-3.5 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Private Consultation Hours</span>
                </div>
                <p className="font-serif text-[15px] sm:text-base text-[var(--color-text-body)]">
                  Monday – Sunday: 11:00 AM – 8:00 PM
                </p>
                <p className="caption-text text-xs text-[var(--color-muted)] italic">
                  By Private Bridal Appointment Only
                </p>
              </div>

              {/* Direct Booking Desk Links */}
              <div className="space-y-2 pt-4 border-t border-[var(--color-border)]/60">
                <div className="font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold">
                  Direct Booking Desk
                </div>
                <div className="space-y-1.5 font-serif text-[15px] sm:text-base">
                  <p className="flex items-center gap-2">
                    <span className="text-[var(--color-muted)]">WhatsApp / Call:</span>
                    <a
                      href="https://wa.me/918610597490"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] font-medium transition-colors"
                    >
                      +91 8610597490 ↗
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[var(--color-muted)]">Direct Email:</span>
                    <a
                      href="mailto:Mugaashra@gmail.com"
                      className="text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] font-medium transition-colors"
                    >
                      Mugaashra@gmail.com ↗
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Zone 3: Tamil Muhurtham Scarcity & Urgency Advisory Closer */}
            <div className="mt-8 bg-[#181514] text-white p-6 sm:p-7 rounded-xs border border-[var(--color-accent)]/30 space-y-3 shadow-md">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-sans text-[11px] uppercase tracking-[2.5px] text-[var(--color-accent)] font-semibold block">
                  Tamil Muhurtham Calendar Advisory
                </span>
              </div>
              <p className="font-serif text-sm text-white/90 leading-relaxed font-light">
                High-demand auspicious muhurtham dates during <span className="text-[var(--color-accent)] font-normal">Thai, Chithirai, Aavani, and Karthigai</span> seasons typically lock out 6–12 months in advance. We recommend checking availability as soon as your muhurtham timing is fixed.
              </p>
            </div>
          </div>

          {/* ── Right Column: Elevated Atelier Enquiry Suite ── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-[var(--color-bg-white)] border border-[var(--color-border)] p-6 sm:p-10 rounded-xs shadow-xs space-y-8">
              
              {/* Quick WhatsApp Concierge Bar */}
              <div className="p-5 sm:p-6 bg-[#181514] text-white rounded-xs border border-[var(--color-accent)]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div className="space-y-1">
                  <span className="font-sans text-xs uppercase tracking-[2.5px] text-[var(--color-accent)] font-semibold block">
                    Fast Track Consultation
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                    Need an immediate date check?
                  </h3>
                  <p className="font-serif text-sm text-white/80 leading-relaxed">
                    Chat directly with our atelier coordinator for 4-hour availability confirmation.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs sm:text-[13px] uppercase tracking-[1.5px] font-semibold transition-all rounded-xs shadow-sm whitespace-nowrap shrink-0 min-h-[44px] active:scale-95"
                >
                  <span>Chat on WhatsApp ↗</span>
                </a>
              </div>

              {/* Form Intro Header with scroll margin */}
              <div className="space-y-2 pt-2 border-t border-[var(--color-border)]/60 scroll-mt-28">
                <span className="font-sans text-xs uppercase tracking-[2px] text-[var(--color-accent-text)] font-semibold block">
                  Bespoke Consultation Itinerary
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-text)] font-normal">
                  Tell Us About Your Wedding
                </h2>
                <p className="font-serif text-sm sm:text-[15px] text-[var(--color-muted)] leading-relaxed">
                  Fill in your ceremony schedule, venue, and styling requirements. We will prepare your tailored bridal service proposal within 4 business hours.
                </p>
              </div>

              {/* The Interactive Form Component */}
              <EnquiryForm />
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. High-Contrast Destination Travel & Logistics Section ── */}
      <section className="w-full bg-[#181514] text-white py-20 px-6 sm:px-12 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto space-y-12">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-semibold block">
              On-Location Artistry • Pan-India &amp; Global
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-[0.05em] uppercase">
              Serving South India &amp; Global Weddings
            </h2>
            <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed font-light">
              From historic temple mandapams across Tamil Nadu to luxury destination wedding resorts worldwide, our atelier travel protocol ensures immaculate on-location timing and airbrush perfection.
            </p>
          </div>

          {/* 3 Regional & Global Travel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1: Tamil Nadu */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-7 rounded-xs space-y-3 hover:border-[var(--color-accent)]/50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[2px] text-[var(--color-accent)] font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 10h1" />
                    <path d="M9 14h1" />
                    <path d="M14 10h1" />
                    <path d="M14 14h1" />
                  </svg>
                  <span>Tamil Nadu Heritage Circuit</span>
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                  Madurai Atelier &amp; Statewide
                </h3>
                <p className="font-serif text-sm text-white/75 leading-relaxed">
                  Full mobile team deployment across Chennai, Coimbatore, Trichy, Tirunelveli, Thanjavur, Salem, and Kodaikanal. Punctual on-site arrival 3 hours prior to early-morning muhurtham.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-accent)] hover:text-white font-medium transition-colors"
                >
                  <span>Atelier Directions</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Card 2: Pan-India */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-7 rounded-xs space-y-3 hover:border-[var(--color-accent)]/50 transition-colors">
              <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[2px] text-[var(--color-accent)] font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg>
                <span>Pan-India Destination</span>
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                Metros &amp; Palace Venues
              </h3>
              <p className="font-serif text-sm text-white/75 leading-relaxed">
                Seamless bookings across Bengaluru, Hyderabad, Kochi, Mumbai, Goa, and Jaipur. Dedicated luggage-safe airbrush compressor kits and climate-adapted formulations.
              </p>
            </div>

            {/* Card 3: International */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-7 rounded-xs space-y-3 hover:border-[var(--color-accent)]/50 transition-colors">
              <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[2px] text-[var(--color-accent)] font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>International Overseas</span>
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                Global Tamil Diaspora
              </h3>
              <p className="font-serif text-sm text-white/75 leading-relaxed">
                Dedicated bridal travel to Sri Lanka, Singapore, Malaysia, Dubai &amp; the UAE. Complete coordination for multi-day weddings with saree box-pleating and groom styling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
