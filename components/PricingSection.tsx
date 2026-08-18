'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function PricingSection({ packages = [] }: { packages?: any[] } = {}) {
  return (
    <div className="space-y-24">
      {/* ── 1. Card 1: HIGH DEFINITION / AIRBRUSH ── */}
      <div className="relative border border-[#222222]/20 bg-[#FFFFFF] p-8 sm:p-12 lg:p-16">
        {/* Star Accents in Corners */}
        <span className="absolute top-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute top-4 right-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 right-4 text-[#B58A69] text-sm">✦</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Details */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[#222222] font-normal">
                HIGH DEFINITION
              </h2>
              <p className="font-sans text-xs tracking-[1.5px] uppercase text-[#B58A69]">
                Product Used: Marc Jacobs • Giorgio Armani • Chanel • Dior
              </p>
            </div>

            <p className="font-serif text-sm text-[#222222]/80 leading-relaxed max-w-md mx-auto lg:mx-0">
              Our High Definition and Airbrush package delivers a lush, weightless finish that leaves your skin feeling like it has a &lsquo;faux filter&rsquo; effect. Flawless on camera and water-resistant for all sacred rituals.
            </p>

            {/* Circular Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full border border-[#222222]/30 flex items-center justify-center text-xs">
                  💄
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#222222]/70">
                  Makeup + Hairstyling
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full border border-[#222222]/30 flex items-center justify-center text-xs">
                  🥻
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#222222]/70">
                  Lehenga / Saree Draping
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#222222]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-[#B58A69] font-normal">
                INR 65,000/- <span className="text-xs text-[#222222]/60 font-sans">+ 5% GST</span>
              </span>
              <Link
                href="/contact?package=High%20Definition"
                className="px-6 py-2.5 bg-[#222222] hover:bg-[#B58A69] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
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
      <div className="relative border border-[#222222]/20 bg-[#FFFFFF] p-8 sm:p-12 lg:p-16">
        <span className="absolute top-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute top-4 right-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 right-4 text-[#B58A69] text-sm">✦</span>

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
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[#222222] font-normal">
                BRIDAL CEREMONY
              </h2>
              <p className="font-sans text-xs tracking-[1.5px] uppercase text-[#B58A69]">
                Product Used: HD Products + Temptu Airbrush
              </p>
            </div>

            <p className="font-serif text-sm text-[#222222]/80 leading-relaxed max-w-md mx-auto lg:mx-0">
              For our brides with a multi-event celebration spanning the traditional morning ceremony and evening reception, we create tailored looks to ensure you look fresh and camera-ready at every moment.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full border border-[#222222]/30 flex items-center justify-center text-xs">
                  ✨
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#222222]/70">
                  Airbrush Artistry
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full border border-[#222222]/30 flex items-center justify-center text-xs">
                  🌸
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#222222]/70">
                  Floral Hair Architecture
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#222222]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-[#B58A69] font-normal">
                INR 70,000/- <span className="text-xs text-[#222222]/60 font-sans">+ 5% GST</span>
              </span>
              <Link
                href="/contact?package=Bridal%20Ceremony"
                className="px-6 py-2.5 bg-[#222222] hover:bg-[#B58A69] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
              >
                Book Package ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Card 3: OUTSTATION & DESTINATION WEDDINGS ── */}
      <div className="relative border border-[#222222]/20 bg-[#FFFFFF] p-8 sm:p-12 lg:p-16">
        <span className="absolute top-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute top-4 right-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 right-4 text-[#B58A69] text-sm">✦</span>

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
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-[#222222] font-normal">
                OUTSTATION
              </h2>
              <p className="font-sans text-xs tracking-[1.5px] uppercase text-[#B58A69]">
                Dedicated Artist Travel Across India & Worldwide
              </p>
            </div>

            <p className="font-serif text-sm text-[#222222]/80 leading-relaxed max-w-md mx-auto lg:mx-0">
              For outstation weddings, we dedicate our team solely to your event, ensuring undivided personal attention and the highest level of luxury service. Travel and hotel accommodations are billed at actuals.
            </p>

            <div className="pt-4 border-t border-[#222222]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-[#B58A69] font-normal">
                INR 1,00,000/- <span className="text-xs text-[#222222]/60 font-sans">+ 5% GST</span>
              </span>
              <Link
                href="/contact?package=Outstation%20Wedding"
                className="px-6 py-2.5 bg-[#222222] hover:bg-[#B58A69] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
              >
                Check Dates ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. ADDITIONAL CHARGES STRIP ── */}
      <div className="py-12 border-t border-b border-[#222222]/10 text-center space-y-6">
        <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] uppercase text-[#B58A69] font-normal">
          ADDITIONAL CHARGES
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 font-serif text-sm text-[#222222]/85">
          <p>
            Extra Bridal Saree Drape &nbsp;
            <span className="font-sans text-xs text-[#B58A69] font-medium">INR 3,000/-</span>
          </p>
          <p>
            Extra Bridal Lehenga Drape &nbsp;
            <span className="font-sans text-xs text-[#B58A69] font-medium">INR 1,000/-</span>
          </p>
        </div>
        <p className="caption-text text-xs">additional 5% GST apply</p>
      </div>

      {/* ── 5. THE GROOM COVERED & WEDDING CREW (Split Frame) ── */}
      <div className="relative border border-[#222222]/20 bg-[#FFFFFF] p-8 sm:p-12">
        <span className="absolute top-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute top-4 right-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 left-4 text-[#B58A69] text-sm">✦</span>
        <span className="absolute bottom-4 right-4 text-[#B58A69] text-sm">✦</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#222222]/15">
          {/* Left: The Groom Covered */}
          <div className="space-y-6 text-center pb-8 md:pb-0">
            <span className="caption-text text-xs text-[#222222]/60">..King fit for His Queen..</span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[#222222] font-normal">
              THE GROOM COVERED
            </h3>

            <div className="space-y-3 font-serif text-sm text-[#222222]/85 max-w-xs mx-auto">
              <div className="flex justify-between border-b border-[#222222]/10 pb-1">
                <span>Makeup</span>
                <span className="font-sans text-xs text-[#B58A69] font-medium">INR 10,000/-</span>
              </div>
              <div className="flex justify-between border-b border-[#222222]/10 pb-1">
                <span>Hairstyling</span>
                <span className="font-sans text-xs text-[#B58A69] font-medium">INR 5,000/-</span>
              </div>
            </div>
            <p className="caption-text text-[11px]">additional 5% GST apply</p>
          </div>

          {/* Right: Wedding Crew */}
          <div className="space-y-6 text-center pt-8 md:pt-0 md:pl-12">
            <span className="caption-text text-xs text-[#222222]/60">..Bridesmaids, Parents, Sisters..</span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[#222222] font-normal">
              WEDDING CREW
            </h3>

            <div className="space-y-3 font-serif text-sm text-[#222222]/85 max-w-xs mx-auto">
              <div className="flex justify-between border-b border-[#222222]/10 pb-1">
                <span>Makeup</span>
                <span className="font-sans text-xs text-[#B58A69] font-medium">INR 7,500/-</span>
              </div>
              <div className="flex justify-between border-b border-[#222222]/10 pb-1">
                <span>Hairstyling</span>
                <span className="font-sans text-xs text-[#B58A69] font-medium">INR 3,500/-</span>
              </div>
              <div className="flex justify-between border-b border-[#222222]/10 pb-1">
                <span>Saree / Lehenga Draping</span>
                <span className="font-sans text-xs text-[#B58A69] font-medium">INR 1,000/-</span>
              </div>
            </div>
            <p className="caption-text text-[11px]">rates per person • additional 5% GST apply</p>
          </div>
        </div>
      </div>

      {/* ── 6. TERMS & CONDITIONS ── */}
      <div className="space-y-8 text-left max-w-3xl mx-auto pt-8">
        <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] uppercase text-[#B58A69] text-center font-normal">
          TERMS & CONDITIONS
        </h3>

        <ul className="space-y-3 text-xs sm:text-sm font-serif text-[#222222]/80 leading-relaxed list-disc pl-6">
          <li>The client is responsible for covering conveyance expenses to and from the bridal venue.</li>
          <li>Adherence to time slots mentioned during the time of booking is paramount.</li>
          <li>We require 2.5–3 hours to get our brides ready to ensure uncompromised quality of artistry.</li>
          <li>Bookings are confirmed on a 50% advance basis. This is a non-refundable, non-transferable amount.</li>
          <li>Hair & makeup consultation can be done at our studio or opted over a video call.</li>
          <li>Payment of the final amount is mandatory 7 days prior to the wedding date.</li>
          <li>Any fresh flowers for hairstyling and hair jewellery required needs to be arranged by the client.</li>
          <li>A professional work environment with adequate mirror lighting and power points is required.</li>
        </ul>
      </div>
    </div>
  )
}
