'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function PricingSection() {
  return (
    <div className="space-y-24">
      {/* ── Atelier Consultation & Pricing Policy Banner ── */}
      <div className="border border-[var(--color-accent)]/40 bg-[var(--color-bg-white)] p-6 sm:p-8 rounded-xs text-center space-y-3 shadow-xs">
        <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent-text)] font-semibold block">
          Bespoke Atelier Policy
        </span>
        <h2 className="font-serif text-xl sm:text-2xl text-[var(--color-text)] font-normal uppercase tracking-wide">
          Bespoke Bridal Inclusions • Pricing on Consultation
        </h2>
        <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
          Every celebration is an individual artistic commission. With our strict single-bride-per-date policy, quotes are tailored directly to your wedding date, auspicious muhurtham schedule, and venue logistics. Our atelier pricing is fixed, transparent, and strictly non-negotiable.
        </p>
      </div>

      {/* ── 1. Card 1: SIGNATURE AIRBRUSH ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-5 sm:p-10 lg:p-16 rounded-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual on top on mobile, right on desktop */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/5] w-full bg-[#EAE1D5] overflow-hidden shadow-sm rounded-xs">
            <Image
              src="/images/portfolio/bridal_story_1.webp"
              alt="Signature Airbrush Bridal Makeup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Details below on mobile, left on desktop */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Founder Signature Package</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                SIGNATURE AIRBRUSH
              </h2>
              <p className="font-sans text-xs sm:text-sm tracking-[1.5px] uppercase text-[var(--color-accent-text)]">
                Artistry by Lead Master Artist Shwetha Mohan
              </p>
            </div>

            <p className="font-serif text-[15px] sm:text-base text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto lg:mx-0">
              Our Signature Airbrush package delivers a lush, weightless, skin-like finish that leaves your complexion luminous, photo-ready, and completely transfer-proof for all sacred rituals. Includes custom skin prep, eye enhancement lenses, premium lashes, hair styling, couture saree draping, and personal styling.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 text-center">
              <div className="flex flex-col items-center gap-1.5 p-3 border border-[var(--color-border)] bg-[var(--color-bg-alt)]/20">
                <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[1px] text-[var(--color-text)] font-semibold">
                  Airbrush
                </span>
                <span className="font-sans text-[11.5px] sm:text-xs text-[var(--color-muted)]">Skin-Like HD</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-3 border border-[var(--color-border)] bg-[var(--color-bg-alt)]/20">
                <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[1px] text-[var(--color-text)] font-semibold">
                  Lenses &amp; Lashes
                </span>
                <span className="font-sans text-[11.5px] sm:text-xs text-[var(--color-muted)]">Premium Silk</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-3 border border-[var(--color-border)] bg-[var(--color-bg-alt)]/20">
                <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[1px] text-[var(--color-text)] font-semibold">
                  Hairstyling
                </span>
                <span className="font-sans text-[11.5px] sm:text-xs text-[var(--color-muted)]">Floral Design</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-3 border border-[var(--color-border)] bg-[var(--color-bg-alt)]/20">
                <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[1px] text-[var(--color-text)] font-semibold">
                  Saree Draping
                </span>
                <span className="font-sans text-[11.5px] sm:text-xs text-[var(--color-muted)]">Personal Styling</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="font-serif text-xl sm:text-2xl text-[var(--color-accent-text)] font-normal block">
                  Pricing on Consultation
                </span>
                <p className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-muted)]">
                  Strictly Non-Negotiable • Single-Bride Exclusivity
                </p>
              </div>
              <Link
                href="/contact?package=Signature%20Airbrush"
                className="w-full sm:w-auto px-7 py-3 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs sm:text-[13px] uppercase tracking-[2px] transition-colors text-center min-h-[44px] flex items-center justify-center font-semibold"
              >
                Enquire Package ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Card 2: MUHURTHAM + RECEPTION ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-5 sm:p-10 lg:p-16 rounded-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual on top on mobile */}
          <div className="lg:col-span-6 order-1 lg:order-1 relative aspect-[3/4] w-full bg-[#EAE1D5] overflow-hidden shadow-sm rounded-xs">
            <Image
              src="/images/portfolio/couple_photo_red_and_sandal_1.jpg"
              alt="Muhurtham and Reception Bridal Styling"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_top]"
            />
          </div>

          {/* Right Details below on mobile */}
          <div className="lg:col-span-6 order-2 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Dual Event Suite</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                MUHURTHAM + RECEPTION
              </h2>
              <p className="font-sans text-xs sm:text-sm tracking-[1.5px] uppercase text-[var(--color-accent-text)]">
                End-to-End Luxury Ceremonial Experience
              </p>
            </div>

            <p className="font-serif text-[15px] sm:text-base text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto lg:mx-0">
              For our brides with a multi-event celebration spanning the traditional morning Muhurtham ceremony and evening Reception, we create tailored distinct looks ensuring you look fresh, transcendent, and camera-ready at every sacred moment.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-text)]">
                  <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <span className="font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-muted)]">
                  Dual Looks
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-text)]">
                  <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  </svg>
                </div>
                <span className="font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-muted)]">
                  Floral Architecture
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="font-serif text-xl sm:text-2xl text-[var(--color-accent-text)] font-normal block">
                  Pricing on Consultation
                </span>
                <p className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-muted)]">
                  Dual-Ceremony Suite • Strictly Non-Negotiable
                </p>
              </div>
              <Link
                href="/contact?package=Muhurtham%20%2B%20Reception"
                className="w-full sm:w-auto px-7 py-3 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs sm:text-[13px] uppercase tracking-[2px] transition-colors text-center min-h-[44px] flex items-center justify-center font-semibold"
              >
                Enquire Package ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Card 3: OUTSTATION & DESTINATION WEDDINGS ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-5 sm:p-10 lg:p-16 rounded-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual on top on mobile, right on desktop */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/5] w-full bg-[#EAE1D5] overflow-hidden shadow-sm rounded-xs">
            <Image
              src="/images/portfolio/bridal_story_4.webp"
              alt="Destination Wedding Bridal Artistry"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Details below on mobile, left on desktop */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Worldwide Travel</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                OUTSTATION
              </h2>
              <p className="font-sans text-xs sm:text-sm tracking-[1.5px] uppercase text-[var(--color-accent-text)]">
                Dedicated Artist Travel Across India & Worldwide
              </p>
            </div>

            <p className="font-serif text-[15px] sm:text-base text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto lg:mx-0">
              For outstation weddings, we dedicate our team solely to your event, ensuring undivided personal attention and the highest level of luxury service. Travel and hotel accommodations are billed at actuals.
            </p>

            <div className="pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="font-serif text-xl sm:text-2xl text-[var(--color-accent-text)] font-normal block">
                  Pricing on Consultation
                </span>
                <p className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-muted)]">
                  Worldwide &amp; Destination • Single-Date Reservation
                </p>
              </div>
              <Link
                href="/contact?package=Outstation%20Wedding"
                className="w-full sm:w-auto px-7 py-3 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs sm:text-[13px] uppercase tracking-[2px] transition-colors text-center min-h-[44px] flex items-center justify-center font-semibold"
              >
                Enquire Package ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. A LA CARTE ADD-ONS & EXTRA SERVICES STRIP ── */}
      <div className="py-12 border-t border-b border-[var(--color-border)] text-center space-y-6">
        <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
          A LA CARTE ADD-ONS &amp; EXTRA SERVICES
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14 font-serif text-[15px] sm:text-base text-[var(--color-text-body)]">
          <p className="flex items-center gap-2">
            <span>Party &amp; Event Makeup</span>
            <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">(Upon Request)</span>
          </p>
          <p className="flex items-center gap-2">
            <span>Groom Luxury Styling</span>
            <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">(Upon Request)</span>
          </p>
          <p className="flex items-center gap-2">
            <span>Saree Pre-Pleating &amp; Box Draping</span>
            <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">(Upon Request)</span>
          </p>
        </div>
        <p className="caption-text text-sm">Available alongside bridal bookings • Non-negotiable fixed rates confirmed on date consultation</p>
      </div>

      {/* ── 5. THE GROOM COVERED & WEDDING CREW (Split Frame) ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-5 sm:p-10 lg:p-12 rounded-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
          {/* Left: The Groom Covered */}
          <div className="space-y-6 text-center pb-8 md:pb-0">
            <span className="caption-text text-sm text-[var(--color-muted)]">Groom Styling Suite</span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
              THE GROOM COVERED
            </h3>

            <div className="space-y-3 font-serif text-[15px] sm:text-base text-[var(--color-text-body)] max-w-xs mx-auto">
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Groom HD Makeup &amp; Prep</span>
                <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">Upon Request</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Hairstyling &amp; Beard Setting</span>
                <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">Upon Request</span>
              </div>
            </div>
            <p className="caption-text text-xs sm:text-sm">Bespoke groom grooming • Scheduled alongside bridal timing</p>
          </div>

          {/* Right: Wedding Crew */}
          <div className="space-y-6 text-center pt-8 md:pt-0 md:pl-12">
            <span className="caption-text text-sm text-[var(--color-muted)]">Bridesmaids, Parents &amp; Sisters</span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
              WEDDING CREW
            </h3>

            <div className="space-y-3 font-serif text-[15px] sm:text-base text-[var(--color-text-body)] max-w-xs mx-auto">
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Party Makeup</span>
                <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">Upon Request</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Hairstyling</span>
                <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">Upon Request</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Saree Pre-Pleating &amp; Draping</span>
                <span className="font-sans text-xs uppercase tracking-[1px] text-[var(--color-accent-text)] font-semibold">Upon Request</span>
              </div>
            </div>
            <p className="caption-text text-xs sm:text-sm">Senior atelier team services • Quotation provided upon consultation</p>
          </div>
        </div>
      </div>

      {/* ── 6. TERMS & CONDITIONS ── */}
      <div className="space-y-8 text-left max-w-3xl mx-auto pt-8">
        <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] text-center font-normal">
          TERMS &amp; CONDITIONS
        </h3>

        <ul className="space-y-3 text-sm sm:text-base font-serif text-[var(--color-text-body)] leading-relaxed list-disc pl-6">
          <li>The client is responsible for covering conveyance expenses to and from the bridal venue.</li>
          <li>Adherence to time slots mentioned during the time of booking is paramount.</li>
          <li>We require 2.5–3 hours to get our brides ready to ensure uncompromised quality of artistry.</li>
          <li>Bookings are confirmed on a 50% advance basis. This is a non-refundable, non-transferable amount.</li>
          <li>All quoted rates are fixed, transparent, and strictly non-negotiable to maintain our master artistry standards.</li>
          <li>Hair &amp; makeup consultation can be done at our studio or opted over a video call.</li>
          <li>Payment of the final amount is mandatory 7 days prior to the wedding date.</li>
          <li>Any fresh flowers for hairstyling and hair jewellery required needs to be arranged by the client.</li>
          <li>A professional work environment with adequate mirror lighting and power points is required.</li>
        </ul>
      </div>
    </div>
  )
}
