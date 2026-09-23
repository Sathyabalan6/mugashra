'use client'

import React, { useState, useTransition } from 'react'
import { submitEnquiry, type EnquirySubmissionResult } from '@/app/actions/submitEnquiry'

const BRIDAL_CEREMONIES = [
  { id: 'muhurtham', label: 'Sacred Muhurtham', tag: 'Traditional Silk' },
  { id: 'reception', label: 'Evening Reception', tag: 'High-Glam' },
  { id: 'engagement', label: 'Engagement / Ring', tag: 'Soft Pastel' },
  { id: 'haldi_mehendi', label: 'Haldi & Mehendi', tag: 'Sun-kissed' },
  { id: 'sangeet', label: 'Sangeet & Cocktail', tag: 'Evening Radiance' },
]

const ENTOURAGE_OPTIONS = [
  { id: 'family', label: 'Bridal Party / Family', tag: 'Saree & Hair' },
  { id: 'groom', label: 'Groom Styling', tag: 'Matte & Natural' },
]

export function EnquiryForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<EnquirySubmissionResult | null>(null)
  const [selectedTier, setSelectedTier] = useState('founder')
  const [selectedEvents, setSelectedEvents] = useState<string[]>(['muhurtham'])
  const [budgetRange, setBudgetRange] = useState<string>('')
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

  const toggleEvent = (eventId: string) => {
    setSelectedEvents((prev) => {
      if (prev.includes(eventId)) {
        if (prev.length === 1) return prev
        return prev.filter((id) => id !== eventId)
      } else {
        return [...prev, eventId]
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    formData.delete('eventTypes')
    selectedEvents.forEach((type) => {
      formData.append('eventTypes', type)
    })

    if (budgetRange) {
      formData.set('budgetRange', budgetRange)
    }

    startTransition(async () => {
      const res = await submitEnquiry(formData)
      setResult(res)
      if (res.success) {
        form.reset()
        setSelectedEvents(['muhurtham'])
        setBudgetRange('')
        setSelectedTier('founder')
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
        <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent-text)] text-xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl text-[var(--color-text)]">
          Thank You for Reaching Out
        </h3>
        <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed max-w-md mx-auto">
          {result.message}
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          {result.whatsappUrl && (
            <a
              href={result.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>Connect on WhatsApp ↗</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => setResult(null)}
            className="w-full sm:w-auto px-6 py-3 border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text)] font-sans text-xs uppercase tracking-[2px] transition-colors min-h-[44px]"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8 text-left">
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

      {/* Ceremony Selection Chips */}
      <div className="space-y-4">
        <label className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)]">
          Select Planned Ceremonies * <span className="text-xs normal-case tracking-normal opacity-70">(Tap all that apply)</span>
        </label>

        {/* Primary Ceremonies */}
        <div className="space-y-2">
          <span className="block font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold">
            Bridal Ceremonies (Primary)
          </span>
          <div className="flex flex-wrap gap-2.5">
            {BRIDAL_CEREMONIES.map((ceremony) => {
              const isSelected = selectedEvents.includes(ceremony.id)
              return (
                <button
                  key={ceremony.id}
                  type="button"
                  onClick={() => toggleEvent(ceremony.id)}
                  className={`group text-left px-3.5 py-2.5 border transition-all duration-200 rounded-xs flex items-center gap-2.5 ${
                    isSelected
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent-text)] font-medium shadow-xs'
                      : 'border-[var(--color-border)] bg-transparent text-[var(--color-text-body)] hover:border-[var(--color-accent)]/60'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] transition-colors ${
                      isSelected
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                        : 'border-[var(--color-border)] text-transparent group-hover:border-[var(--color-accent)]'
                    }`}
                  >
                    ✓
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans text-xs sm:text-[13px] tracking-wide">{ceremony.label}</span>
                    <span className="font-serif text-xs text-[var(--color-muted)] leading-tight">{ceremony.tag}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Entourage Services */}
        <div className="space-y-2 pt-2">
          <span className="block font-sans text-xs uppercase tracking-[1.5px] text-[var(--color-accent-text)] font-semibold">
            Entourage &amp; Family Services
          </span>
          <div className="flex flex-wrap gap-2.5">
            {ENTOURAGE_OPTIONS.map((ceremony) => {
              const isSelected = selectedEvents.includes(ceremony.id)
              return (
                <button
                  key={ceremony.id}
                  type="button"
                  onClick={() => toggleEvent(ceremony.id)}
                  className={`group text-left px-3.5 py-2 border transition-all duration-200 rounded-xs flex items-center gap-2 ${
                    isSelected
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent-text)] font-medium shadow-xs'
                      : 'border-[var(--color-border)] bg-transparent text-[var(--color-text-body)] hover:border-[var(--color-accent)]/60'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] transition-colors ${
                      isSelected
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                        : 'border-[var(--color-border)] text-transparent group-hover:border-[var(--color-accent)]'
                    }`}
                  >
                    ✓
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans text-xs sm:text-[13px] tracking-wide">{ceremony.label}</span>
                    <span className="font-serif text-xs text-[var(--color-muted)] leading-tight">{ceremony.tag}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
          Bride / Client Name *
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="e.g. Priyadarshini"
          className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
        />
      </div>

      {/* WhatsApp & Email (2-column on tablet/desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-phone" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            WhatsApp Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="bride@example.com"
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
          />
        </div>
      </div>

      {/* Wedding Date & Venue (2-column on tablet/desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-date" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Wedding / Event Date *
          </label>
          <input
            id="contact-date"
            type="date"
            name="eventDate"
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none text-[var(--color-text)] min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="contact-venue" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Wedding City &amp; Venue *
          </label>
          <input
            id="contact-venue"
            type="text"
            name="venueLocation"
            required
            placeholder="e.g. Madurai / Chennai / Destination"
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] min-h-[44px]"
          />
        </div>
      </div>

      {/* Service Tier & Budget Range (2-column) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-tier" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Artist Preference / Service Tier
          </label>
          <select
            id="contact-tier"
            name="serviceTier"
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none text-[var(--color-text)] cursor-pointer min-h-[44px] [&>option]:bg-[#FAFAF8] [&>option]:text-[#181514]"
          >
            <option value="founder">Signature Master Artist (Shwetha Mohan)</option>
            <option value="team">Senior Studio Atelier Team</option>
            <option value="consultation">Open / Need Bridal Consultation</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-budget" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
            Estimated Budget Range (Optional)
          </label>
          <select
            id="contact-budget"
            name="budgetRange"
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none text-[var(--color-text)] cursor-pointer min-h-[44px] [&>option]:bg-[#FAFAF8] [&>option]:text-[#181514]"
          >
            <option value="">Flexible / To Be Discussed</option>
            <option value="35k-60k">₹35,000 – ₹60,000 (Single Ceremony / Airbrush)</option>
            <option value="60k-100k">₹60,000 – ₹1,00,000 (Muhurtham + Reception Duo)</option>
            <option value="100k+">₹1,00,000+ (Multi-Day Destination / Full Bridal Suite)</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs sm:text-[13px] font-sans uppercase tracking-[1.5px] text-[var(--color-muted)] mb-1">
          Special Requests &amp; Notes
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          defaultValue={defaultMessage}
          placeholder="e.g. Saree pre-pleating required, travel accommodations, timing schedule..."
          className="w-full py-2.5 bg-transparent border-b border-[var(--color-border)] text-base sm:text-[15px] focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none placeholder:text-[var(--color-muted)]/60 text-[var(--color-text)] resize-y"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs sm:text-[13px] uppercase tracking-[2px] font-semibold transition-all duration-300 rounded-xs shadow-md disabled:opacity-50 min-h-[48px] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#181514]" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Submitting Bridal Enquiry…</span>
            </>
          ) : (
            'Submit Bridal Enquiry ↗'
          )}
        </button>
      </div>
    </form>
  )
}
