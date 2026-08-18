'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-[#FFFFFF] text-[#222222] border-t border-[#222222]/10 pt-20 pb-16">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left: Newsletter Subscription Box */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-serif text-lg text-[#222222] font-normal">
              Subscribe to our Newsletter and we&apos;ll keep you updated on anything Mugashra Artistry.
            </h4>

            {subscribed ? (
              <p className="caption-text text-sm text-[#B58A69]">
                ✓ Thank you for subscribing to our bridal journal.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-4 max-w-sm">
                <div>
                  <label htmlFor="newsletter-name" className="sr-only">Name</label>
                  <input
                    id="newsletter-name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full py-2 bg-transparent border-b border-[#222222]/30 text-sm focus:outline-none focus:border-[#B58A69] transition-colors rounded-none placeholder:text-[#222222]/40"
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">Email</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full py-2 bg-transparent border-b border-[#222222]/30 text-sm focus:outline-none focus:border-[#B58A69] transition-colors rounded-none placeholder:text-[#222222]/40"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#B58A69] hover:bg-[#9B7050] text-[#FFFFFF] font-sans text-[12px] uppercase tracking-[2px] font-medium transition-colors duration-300 rounded-sm shadow-sm"
                >
                  Count me in!
                </button>
              </form>
            )}
          </div>

          {/* Center: Brand Name & Studio Information */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <h3 className="font-serif text-sm tracking-[0.3em] uppercase text-[#222222] font-medium">
              M U G A S H R A &nbsp;&nbsp; A R T I S T R Y
            </h3>
            <p className="font-sans text-xs uppercase tracking-[2px] text-[#222222]/70 leading-relaxed">
              ATELIER STUDIO<br />
              CHENNAI, TAMIL NADU, INDIA
            </p>
            <p className="font-serif text-xs text-[#222222]/80 leading-relaxed pt-2">
              A pioneer in luxury South Indian bridal styling, known for championing radiant, skin-realism looks. Dedicated to providing an unmatched bridal experience with a master product kit.
            </p>
            <p className="caption-text text-xs pt-1">
              Exalted for signature high-definition glow, heritage Kanjeevaram draping, and architectural hair design.
            </p>
          </div>

          {/* Right: Navigation & Contact Links */}
          <div className="lg:col-span-3 space-y-6 flex flex-col justify-between text-left lg:text-right">
            <div className="space-y-2 text-sm text-[#222222]/80">
              <p>
                <Link href="/portfolio" className="hover:text-[#B58A69] transition-colors">
                  Instagram
                </Link>
              </p>
              <p>
                <Link href="/services" className="hover:text-[#B58A69] transition-colors">
                  Facebook
                </Link>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-sans text-xs text-[#222222]/60 uppercase tracking-[1.5px]">
                Enquiries & Bookings
              </p>
              <Link href="/contact" className="font-serif text-sm hover:text-[#B58A69] transition-colors block">
                Dates by Appointment ↗
              </Link>
            </div>

            <div className="pt-4">
              <p className="caption-text text-xs text-[#222222]/50">
                Mugashra Artistry © 2026/27
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
