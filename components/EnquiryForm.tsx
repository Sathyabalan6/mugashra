'use client'

import React, { useState, useTransition } from 'react'
import { submitEnquiry } from '@/app/actions/submitEnquiry'

export function EnquiryForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [selectedTier, setSelectedTier] = useState('founder')
  const [defaultMessage] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const lookParam = params.get('look')
      const pkgParam = params.get('package')
      if (lookParam) return `Enquiring for bridal look: ${lookParam}`
      if (pkgParam) return `Enquiring for package: ${pkgParam}`
    }
    return ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      const res = await submitEnquiry(formData)
      setResult(res)
      if (res.success) {
        form.reset()
      }
    })
  }

  if (result?.success) {
    return (
      <div
        className="bg-[var(--color-bg-white)] p-8 sm:p-12 border border-[var(--color-accent)] text-center space-y-4 shadow-xs"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-serif text-2xl text-[var(--color-text)]">
          Thank You for Reaching Out
        </h3>
        <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto">
          {result.message}
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-4 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-sans text-xs uppercase tracking-[2px] transition-colors min-h-[44px]"
        >
          Send Another Message ↗
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      {result && !result.success && (
        <div
          className="p-3 bg-rose-50 border border-rose-200 text-rose-900 text-xs"
          role="alert"
          aria-live="assertive"
        >
          {result.message}
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
          Bride / Client Name *
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="e.g. Priyadarshini"
          className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
        />
      </div>

      {/* WhatsApp & Email (2-column on tablet/desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            WhatsApp Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="bride@example.com"
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
          />
        </div>
      </div>

      {/* Wedding Date & Venue (2-column on tablet/desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-date" className="block text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Wedding / Event Date *
          </label>
          <input
            id="contact-date"
            type="date"
            name="eventDate"
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none text-[var(--color-text)] min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="contact-venue" className="block text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Wedding City &amp; Venue *
          </label>
          <input
            id="contact-venue"
            type="text"
            name="venueLocation"
            required
            placeholder="e.g. Chennai - MRC Nagar / ECR"
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
          />
        </div>
      </div>

      {/* Service Tier */}
      <div>
        <label htmlFor="contact-tier" className="block text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
          Artist Preference / Service Tier
        </label>
        <select
          id="contact-tier"
          name="serviceTier"
          value={selectedTier}
          onChange={(e) => setSelectedTier(e.target.value)}
          className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none text-[var(--color-text)] cursor-pointer min-h-[44px]"
        >
          <option value="founder">Signature Master Artist (Founder Tier)</option>
          <option value="team">Senior Studio Atelier Team</option>
          <option value="consultation">Open / Need Bridal Consultation</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
          Ceremonies &amp; Outfits
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          defaultValue={defaultMessage}
          placeholder="e.g. Muhurtham (Kanjeevaram Saree) & Reception (Lehenga)..."
          className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)]"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-sans text-[12px] uppercase tracking-[2.5px] font-medium transition-colors duration-300 rounded-xs shadow-xs disabled:opacity-50 min-h-[44px]"
        >
          {isPending ? 'Sending…' : 'Submit Bridal Enquiry ↗'}
        </button>
      </div>
    </form>
  )
}
