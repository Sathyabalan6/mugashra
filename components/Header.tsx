'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Founder', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/services' },
    { label: 'Team', href: '/about#team' },
    { label: 'Contact', href: '/contact' },
  ]

  const headerBg = isHome && !isScrolled
    ? 'bg-transparent border-b border-white/10 text-white'
    : 'bg-[#181514]/95 backdrop-blur-md border-b border-white/10 text-[#FAFAF8] shadow-[0_4px_20px_rgba(0,0,0,0.15)]'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Wordmark (Left) */}
        <Link
          href="/"
          className="group flex flex-col items-start py-2 tracking-[0.25em] uppercase font-sans text-xs sm:text-sm font-medium text-white hover:text-[var(--color-accent)] transition-colors min-h-[44px] justify-center"
          aria-label="Mugashra Atelier Home"
        >
          <span>MUGASHRA ARTISTRY</span>
        </Link>

        {/* Desktop Navigation (Right Aligned Minimalist Links) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-[12px] uppercase tracking-[2.5px] transition-colors relative py-2 min-h-[44px] flex items-center ${
                  isActive
                    ? 'text-[var(--color-accent)] font-semibold'
                    : 'text-[#E0D8D0] hover:text-white font-normal'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[var(--color-accent)]" />
                )}
              </Link>
            )
          })}

          {/* Social Icon */}
          <a
            href="https://www.instagram.com/mugashra_artistry/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:text-white transition-colors w-11 h-11 flex items-center justify-center"
            aria-label="Visit Mugashra Artistry on Instagram (opens in new window)"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-white hover:text-[var(--color-accent)] transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-[#181514]/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation drawer"
        >
          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#181514] p-8 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-white/10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-sans text-sm font-medium tracking-[0.2em] text-white uppercase">
                  MUGASHRA ARTISTRY
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center text-white hover:text-[var(--color-accent)] transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-[13px] uppercase tracking-[2.5px] text-[var(--color-accent)] hover:text-white transition-colors py-2 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-[12px] uppercase tracking-[2px] font-semibold transition-colors"
              >
                Reserve Wedding Date ↗
              </Link>
              <p className="caption-text text-center text-xs text-white/70">
                Bridal Atelier • Dates by Appointment
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
