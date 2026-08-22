'use client'

import React from 'react'

interface Testimonial {
  clientName: string
  quote: string
}

export function FeedbackSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 bg-[var(--color-bg-white)] border-t border-[var(--color-border)] overflow-hidden">
      <div className="max-w-[1300px] mx-auto space-y-16">
        {/* Centered Title */}
        <div className="text-center space-y-3">
          <span className="font-eyebrow block">Client Praise</span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
            FEEDBACK
          </h2>
          <p className="caption-text text-xs tracking-wider uppercase font-sans">
            Unfiltered words of love &amp; praise from our South Indian brides
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Column 1 */}
          <div className="space-y-10">
            {testimonials.slice(0, 3).map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="relative bg-[#F4F3EF] p-8 sm:p-10 border border-[var(--color-border-subtle)] shadow-xs text-left">
                  <span className="text-3xl font-serif text-[var(--color-accent-text)] block mb-2 leading-none">
                    “
                  </span>
                  <p className="font-serif text-sm sm:text-[15px] text-[var(--color-text-body)] leading-[1.8] font-light">
                    {item.quote}
                  </p>
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[2.5px] text-[var(--color-text)] font-semibold text-right pr-2">
                  — {item.clientName}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-10 md:pt-8">
            {testimonials.slice(3, 6).map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="relative bg-[#F4F3EF] p-8 sm:p-10 border border-[var(--color-border-subtle)] shadow-xs text-left">
                  <span className="text-3xl font-serif text-[var(--color-accent-text)] block mb-2 leading-none">
                    “
                  </span>
                  <p className="font-serif text-sm sm:text-[15px] text-[var(--color-text-body)] leading-[1.8] font-light">
                    {item.quote}
                  </p>
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[2.5px] text-[var(--color-text)] font-semibold text-right pr-2">
                  — {item.clientName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
