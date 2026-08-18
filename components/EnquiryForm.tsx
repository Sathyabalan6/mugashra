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
      <div className="bg-[#FFFFFF] p-8 sm:p-12 border border-[#B58A69] text-center space-y-4 shadow-sm">
        <h3 className="font-serif text-2xl text-[#222222]">
          Thank You for Reaching Out
        </h3>
        <p className="font-serif text-sm text-[#222222]/80 leading-relaxed max-w-md mx-auto">
          {result.message}
        </p>
        <button
          onClick={() => setResult(null)}
          className="mt-4 px-6 py-2.5 bg-[#B58A69] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
        >
          Send Another Message ↗
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      {result && !result.success && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs">
          {result.message}
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="sr-only">Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full py-3 bg-transparent border-b border-[#222222]/30 text-sm focus:outline-none focus:border-[#B58A69] transition-colors rounded-none placeholder:text-[#222222]/40"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full py-3 bg-transparent border-b border-[#222222]/30 text-sm focus:outline-none focus:border-[#B58A69] transition-colors rounded-none placeholder:text-[#222222]/40"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="sr-only">Number</label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          required
          placeholder="Number"
          className="w-full py-3 bg-transparent border-b border-[#222222]/30 text-sm focus:outline-none focus:border-[#B58A69] transition-colors rounded-none placeholder:text-[#222222]/40"
        />
      </div>

      <div>
        <label htmlFor="contact-about" className="sr-only">Contacting about</label>
        <select
          id="contact-about"
          name="serviceTier"
          defaultValue="Bridal Makeup & Hair"
          className="w-full py-3 bg-transparent border-b border-[#222222]/30 text-sm focus:outline-none focus:border-[#B58A69] transition-colors rounded-none text-[#222222]/80 cursor-pointer"
        >
          <option value="Bridal Makeup & Hair">Contacting about: Bridal Makeup & Hair</option>
          <option value="Muhurtham & Reception Suite">Contacting about: Muhurtham & Reception Suite</option>
          <option value="Destination / Outstation Wedding">Contacting about: Destination / Outstation Wedding</option>
          <option value="Bridal Party & Saree Draping">Contacting about: Bridal Party & Saree Draping</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">Anything else you&apos;d like to add</label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          placeholder="Anything else you'd like to add (Date, Venue, Outfits)..."
          className="w-full py-3 bg-transparent border-b border-[#222222]/30 text-sm focus:outline-none focus:border-[#B58A69] transition-colors rounded-none placeholder:text-[#222222]/40"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3.5 bg-[#B58A69] hover:bg-[#9B7050] text-[#FFFFFF] font-sans text-[12px] uppercase tracking-[2.5px] font-medium transition-colors duration-300 rounded-sm shadow-sm disabled:opacity-50"
        >
          {isPending ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
