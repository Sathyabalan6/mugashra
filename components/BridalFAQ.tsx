'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    question: 'How far in advance should we reserve our wedding date?',
    answer:
      'Because Master Artist Shwetha Mohan enforces a strict single-bride-per-date policy, prime muhurtham dates—especially during Tamil wedding seasons (Thai, Chithirai, Aavani, Karthigai)—typically book 6 to 12 months in advance. We recommend checking availability as soon as your auspicious muhurtham timing is fixed.',
  },
  {
    question: 'Do you travel for outstation and destination weddings?',
    answer:
      'Yes, absolutely. While our primary atelier is located in Madurai, Shwetha Mohan and our atelier team regularly travel across Chennai, Coimbatore, Bangalore, Hyderabad, Kerala, and international destination weddings (such as Sri Lanka and Singapore). Travel and accommodation arrangements are coordinated during the consultation.',
  },
  {
    question: 'What makes Signature Airbrush superior for South Indian Muhurthams?',
    answer:
      'Signature Airbrush uses the Temptu Pro micro-mist compressor system to mist microscopic silicone pigments onto the skin without heavy rubbing or brush friction. It forms an ultra-thin, breathable mesh that resists sweat, tears, humidity, and heat from sacred homam ritual fires for over 16 hours, while appearing completely natural and skin-like in 4K cinematography.',
  },
  {
    question: 'Does the package include Saree Pre-Pleating and fresh Madurai Malli styling?',
    answer:
      'Yes. Every bridal package includes couture saree draping and personalized hair architecture. We offer 48-hour advance saree pre-pleating and box-pleating so morning draping takes under 8 minutes. We also coordinate with your choice of fresh Madurai Malli (jasmine), floral venis, or traditional antique gold poola jada.',
  },
  {
    question: 'Can the mother of the bride, bridesmaids, and the groom also be styled?',
    answer:
      'Yes. Our Senior Studio Atelier Team can cater to family members and bridesmaids with Party Makeup and Saree Pre-Pleating. We also offer Groom Styling for subtle matte complexion prep and neat grooming, scheduled seamlessly alongside the bride. Rates for family and groom styling are tailored and provided upon private bridal consultation.',
  },
  {
    question: 'What luxury makeup and skincare brands are in your master bridal kit?',
    answer:
      'We exclusively work with globally celebrated luxury houses including Temptu Pro Airbrush, Charlotte Tilbury, Dior Backstage, NARS, Huda Beauty, MAC, and Laura Mercier. Every sponge, brush, and airbrush nozzle undergoes hospital-grade UV sanitation prior to every single appointment.',
  },
]

export function BridalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="border-t border-[var(--color-border)] pt-20 pb-16">
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
        <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent-text)] font-semibold block">
          Client Inquiries
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.1em] uppercase text-[var(--color-text)] font-normal">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="font-serif text-[15px] sm:text-base text-[var(--color-muted)] leading-relaxed">
          Everything you need to know about our atelier bookings, airbrush technology, and on-location services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={faq.question}
              className={`border transition-colors duration-200 rounded-xs bg-[var(--color-bg-white)] ${
                isOpen ? 'border-[var(--color-accent)] shadow-xs' : 'border-[var(--color-border)] hover:border-[var(--color-border)]/80'
              }`}
            >
              <button
                type="button"
                id={`faq-btn-${index}`}
                aria-controls={`faq-panel-${index}`}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
              >
                <span className="font-serif text-[17px] sm:text-xl text-[var(--color-text)] font-medium leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white rotate-45'
                      : 'border-[var(--color-border)] text-[var(--color-muted)]'
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className="px-6 pb-6 pt-1 text-left border-t border-[var(--color-border)]/40 animate-in fade-in duration-200"
                >
                  <p className="font-serif text-[15px] sm:text-base text-[var(--color-text-body)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="mt-12 p-8 max-w-2xl mx-auto bg-[var(--color-bg-alt)]/50 border border-[var(--color-border)] text-center space-y-4 rounded-xs">
        <h4 className="font-serif text-xl sm:text-2xl text-[var(--color-text)]">Have a Specific Wedding Query?</h4>
        <p className="font-serif text-sm sm:text-base text-[var(--color-muted)] max-w-md mx-auto">
          Every wedding is unique. Speak directly with our bridal coordinator for custom multi-day schedules or outstation travel itineraries.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs sm:text-[13px] uppercase tracking-[2px] font-semibold transition-colors rounded-xs w-full sm:w-auto text-center"
          >
            Submit Enquiry ↗
          </Link>
          <a
            href="https://wa.me/918610597490?text=Hello%20Shwetha%2C%20I%20have%20a%20question%20regarding%20bridal%20services%20at%20Mugaashra."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] font-sans text-xs sm:text-[13px] uppercase tracking-[2px] transition-colors rounded-xs w-full sm:w-auto text-center"
          >
            WhatsApp Coordinator ↗
          </a>
        </div>
      </div>
    </section>
  )
}
