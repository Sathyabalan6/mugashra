'use client'

import React, { useState, useTransition } from 'react'
import { submitEnquiry } from '@/app/actions/submitEnquiry'

export function EnquiryForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

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

      <div>
        <label htmlFor="contact-name" className="sr-only">Your Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full py-3 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none placeholder:text-[var(--color-muted)]"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">Email Address</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full py-3 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none placeholder:text-[var(--color-muted)]"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          className="w-full py-3 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none placeholder:text-[var(--color-muted)]"
        />
      </div>

      <div>
        <label htmlFor="contact-about" className="sr-only">Service Tier</label>
        <select
          id="contact-about"
          name="serviceTier"
          defaultValue="Bridal Makeup & Hair"
          className="w-full py-3 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none text-[var(--color-text-body)] cursor-pointer"
        >
          <option value="Bridal Makeup & Hair">Contacting about: Bridal Makeup & Hair</option>
          <option value="Muhurtham & Reception Suite">Contacting about: Muhurtham & Reception Suite</option>
          <option value="Destination / Outstation Wedding">Contacting about: Destination / Outstation Wedding</option>
          <option value="Bridal Party & Saree Draping">Contacting about: Bridal Party & Saree Draping</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">Event Details and Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          placeholder="Event Details (Date, Venue, Outfits)..."
          className="w-full py-3 bg-transparent border-b border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none placeholder:text-[var(--color-muted)]"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-sans text-[12px] uppercase tracking-[2.5px] font-medium transition-colors duration-300 rounded-xs shadow-xs disabled:opacity-50 min-h-[44px]"
        >
          {isPending ? 'Sending…' : 'Submit Enquiry'}
        </button>
      </div>
    </form>
  )
}
