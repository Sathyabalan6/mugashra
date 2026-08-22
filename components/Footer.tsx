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
    <footer className="bg-[var(--color-bg-white)] text-[var(--color-text)] border-t border-[var(--color-border)] pt-20 pb-16">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left: Newsletter Subscription Box */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-lg text-[var(--color-text)] font-normal">
              Subscribe to our Journal for bridal style guides and atelier updates.
            </h3>

            {subscribed ? (
              <p className="caption-text text-sm text-[var(--color-accent-text)]" role="status" aria-live="polite">
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
                    className="w-full py-2 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none placeholder:text-[var(--color-muted)]"
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">Email</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full py-2 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none placeholder:text-[var(--color-muted)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-sans text-[12px] uppercase tracking-[2px] font-medium transition-colors duration-300 rounded-xs shadow-xs min-h-[44px]"
                >
                  Join the Journal
                </button>
              </form>
            )}
          </div>

          {/* Center: Brand Name & Studio Information */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-[var(--color-text)] font-medium">
              M U G A S H R A &nbsp;&nbsp; A R T I S T R Y
            </h2>
            <p className="font-sans text-xs uppercase tracking-[2px] text-[var(--color-muted)] leading-relaxed">
              ATELIER STUDIO<br />
              CHENNAI, TAMIL NADU, INDIA
            </p>
            <p className="font-serif text-xs text-[var(--color-text-body)] leading-relaxed pt-2">
              A pioneer in luxury South Indian bridal styling, known for championing radiant, skin-realism looks. Dedicated to providing an unmatched bridal experience with a master product kit.
            </p>
            <p className="caption-text text-xs pt-1">
              Exalted for signature high-definition glow, heritage Kanjeevaram draping, and architectural hair design.
            </p>
          </div>

          {/* Right: Navigation & Contact Links */}
          <div className="lg:col-span-3 space-y-6 flex flex-col justify-between text-left lg:text-right">
            <div className="space-y-2 text-sm text-[var(--color-text-body)]">
              <p>
                <a
                  href="https://www.instagram.com/mugashra_artistry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-text)] transition-colors inline-block py-1"
                >
                  Instagram ↗
                </a>
              </p>
              <p>
                <Link href="/portfolio" className="hover:text-[var(--color-accent-text)] transition-colors inline-block py-1">
                  Bridal Portfolio
                </Link>
              </p>
              <p>
                <Link href="/services" className="hover:text-[var(--color-accent-text)] transition-colors inline-block py-1">
                  Packages &amp; Pricing
                </Link>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-sans text-xs text-[var(--color-muted)] uppercase tracking-[1.5px]">
                Enquiries &amp; Bookings
              </p>
              <Link href="/contact" className="font-serif text-sm hover:text-[var(--color-accent-text)] transition-colors block py-1">
                Dates by Appointment ↗
              </Link>
            </div>

            <div className="pt-4">
              <p className="caption-text text-xs text-[var(--color-muted)]">
                Mugashra Artistry © 2026/27
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
