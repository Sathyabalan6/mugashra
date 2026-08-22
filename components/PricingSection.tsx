'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function PricingSection({ packages = [] }: { packages?: any[] } = {}) {
  return (
    <div className="space-y-24">
      {/* ── 1. Card 1: HIGH DEFINITION / AIRBRUSH ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Details */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Signature Package</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                HIGH DEFINITION
              </h2>
              <p className="font-sans text-xs tracking-[1.5px] uppercase text-[var(--color-accent-text)]">
                Master Kit: Marc Jacobs • Giorgio Armani • Chanel • Dior
              </p>
            </div>

            <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto lg:mx-0">
              Our High Definition and Airbrush package delivers a lush, weightless finish that leaves your skin feeling like it has a &lsquo;faux filter&rsquo; effect. Flawless on camera and water-resistant for all sacred rituals.
            </p>

            {/* Feature Highlights */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-text)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[var(--color-muted)]">
                  Makeup + Hair
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-text)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[var(--color-muted)]">
                  Saree Draping
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-[var(--color-accent-text)] font-normal">
                INR 65,000/- <span className="text-xs text-[var(--color-muted)] font-sans">+ 5% GST</span>
              </span>
              <Link
                href="/contact?package=High%20Definition"
                className="px-6 py-2.5 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
              >
                Book Package ↗
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
              alt="High Definition Bridal Makeup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── 2. Card 2: BRIDAL CEREMONY & RECEPTION ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
              alt="Bridal Reception Styling"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Dual Event Suite</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                BRIDAL CEREMONY
              </h2>
              <p className="font-sans text-xs tracking-[1.5px] uppercase text-[var(--color-accent-text)]">
                HD Products + Temptu Airbrush Architecture
              </p>
            </div>

            <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto lg:mx-0">
              For our brides with a multi-event celebration spanning the traditional morning ceremony and evening reception, we create tailored looks to ensure you look fresh and camera-ready at every moment.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-text)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[var(--color-muted)]">
                  Airbrush Artistry
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-text)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  </svg>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[var(--color-muted)]">
                  Floral Architecture
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-[var(--color-accent-text)] font-normal">
                INR 70,000/- <span className="text-xs text-[var(--color-muted)] font-sans">+ 5% GST</span>
              </span>
              <Link
                href="/contact?package=Bridal%20Ceremony"
                className="px-6 py-2.5 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
              >
                Book Package ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Card 3: OUTSTATION & DESTINATION WEDDINGS ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
              alt="Destination Wedding Bridal Artistry"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-eyebrow block">Worldwide Travel</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                OUTSTATION
              </h2>
              <p className="font-sans text-xs tracking-[1.5px] uppercase text-[var(--color-accent-text)]">
                Dedicated Artist Travel Across India & Worldwide
              </p>
            </div>

            <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto lg:mx-0">
              For outstation weddings, we dedicate our team solely to your event, ensuring undivided personal attention and the highest level of luxury service. Travel and hotel accommodations are billed at actuals.
            </p>

            <div className="pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-[var(--color-accent-text)] font-normal">
                INR 1,00,000/- <span className="text-xs text-[var(--color-muted)] font-sans">+ 5% GST</span>
              </span>
              <Link
                href="/contact?package=Outstation%20Wedding"
                className="px-6 py-2.5 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
              >
                Check Dates ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. ADDITIONAL CHARGES STRIP ── */}
      <div className="py-12 border-t border-b border-[var(--color-border)] text-center space-y-6">
        <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
          ADDITIONAL CHARGES
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 font-serif text-sm text-[var(--color-text-body)]">
          <p>
            Extra Bridal Saree Drape &nbsp;
            <span className="font-sans text-xs text-[var(--color-accent-text)] font-semibold">INR 3,000/-</span>
          </p>
          <p>
            Extra Bridal Lehenga Drape &nbsp;
            <span className="font-sans text-xs text-[var(--color-accent-text)] font-semibold">INR 1,000/-</span>
          </p>
        </div>
        <p className="caption-text text-xs">additional 5% GST apply</p>
      </div>

      {/* ── 5. THE GROOM COVERED & WEDDING CREW (Split Frame) ── */}
      <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-8 sm:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
          {/* Left: The Groom Covered */}
          <div className="space-y-6 text-center pb-8 md:pb-0">
            <span className="caption-text text-xs text-[var(--color-muted)]">Groom Styling Suite</span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
              THE GROOM COVERED
            </h3>

            <div className="space-y-3 font-serif text-sm text-[var(--color-text-body)] max-w-xs mx-auto">
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Makeup</span>
                <span className="font-sans text-xs text-[var(--color-accent-text)] font-semibold">INR 10,000/-</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Hairstyling</span>
                <span className="font-sans text-xs text-[var(--color-accent-text)] font-semibold">INR 5,000/-</span>
              </div>
            </div>
            <p className="caption-text text-[11px]">additional 5% GST apply</p>
          </div>

          {/* Right: Wedding Crew */}
          <div className="space-y-6 text-center pt-8 md:pt-0 md:pl-12">
            <span className="caption-text text-xs text-[var(--color-muted)]">Bridesmaids, Parents &amp; Sisters</span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
              WEDDING CREW
            </h3>

            <div className="space-y-3 font-serif text-sm text-[var(--color-text-body)] max-w-xs mx-auto">
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Makeup</span>
                <span className="font-sans text-xs text-[var(--color-accent-text)] font-semibold">INR 7,500/-</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Hairstyling</span>
                <span className="font-sans text-xs text-[var(--color-accent-text)] font-semibold">INR 3,500/-</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-1">
                <span>Saree / Lehenga Draping</span>
                <span className="font-sans text-xs text-[var(--color-accent-text)] font-semibold">INR 1,000/-</span>
              </div>
            </div>
            <p className="caption-text text-[11px]">rates per person • additional 5% GST apply</p>
          </div>
        </div>
      </div>

      {/* ── 6. TERMS & CONDITIONS ── */}
      <div className="space-y-8 text-left max-w-3xl mx-auto pt-8">
        <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[var(--color-text)] text-center font-normal">
          TERMS &amp; CONDITIONS
        </h3>

        <ul className="space-y-3 text-xs sm:text-sm font-serif text-[var(--color-text-body)] leading-relaxed list-disc pl-6">
          <li>The client is responsible for covering conveyance expenses to and from the bridal venue.</li>
          <li>Adherence to time slots mentioned during the time of booking is paramount.</li>
          <li>We require 2.5–3 hours to get our brides ready to ensure uncompromised quality of artistry.</li>
          <li>Bookings are confirmed on a 50% advance basis. This is a non-refundable, non-transferable amount.</li>
          <li>Hair &amp; makeup consultation can be done at our studio or opted over a video call.</li>
          <li>Payment of the final amount is mandatory 7 days prior to the wedding date.</li>
          <li>Any fresh flowers for hairstyling and hair jewellery required needs to be arranged by the client.</li>
          <li>A professional work environment with adequate mirror lighting and power points is required.</li>
        </ul>
      </div>
    </div>
  )
}
