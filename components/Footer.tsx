'use client'

import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-white)] text-[var(--color-text)] border-t border-[var(--color-border)] pt-20 pb-16">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left: Brand tagline + Instagram */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-lg text-[var(--color-text)] font-normal leading-relaxed">
              Luxury South Indian bridal artistry, by appointment only.
            </h3>
            <a
              href="https://www.instagram.com/mugaashra_makeover"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-[2px] text-[var(--color-accent-text)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="Follow Mugashra Artistry on Instagram (opens in new window)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram ↗
            </a>
          </div>

          {/* Center: Brand Name & Studio Information */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <h2 className="font-serif text-sm sm:text-base tracking-[0.24em] uppercase text-[var(--color-text)] font-medium whitespace-nowrap">
              MUGASHRA ARTISTRY
            </h2>
            <p className="font-sans text-xs uppercase tracking-[2px] text-[var(--color-muted)] leading-relaxed">
              ATELIER STUDIO • FOUNDED BY SHWETHA MOHAN<br />
              CHENNAI, TAMIL NADU, INDIA
            </p>
            <p className="font-serif text-xs text-[var(--color-text-body)] leading-relaxed pt-2">
              Founded by Lead Master Artist Shwetha Mohan, Mugashra Artistry is a pioneer in luxury South Indian bridal styling, known for championing radiant, skin-realism looks and personalized bridal experiences with a master product kit.
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
                  href="https://www.instagram.com/mugaashra_makeover"
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
                Book Consultation ↗
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

