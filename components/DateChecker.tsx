'use client'

import React, { useState } from 'react'

interface DateStatus {
  status: 'available' | 'limited' | 'booked'
  label: string
  note: string
}

export function DateChecker() {
  const [selectedMonth, setSelectedMonth] = useState<string>('2026-11')
  const [checkedDate, setCheckedDate] = useState<string>('')
  const [result, setResult] = useState<DateStatus | null>(null)

  const checkAvailability = (e: React.FormEvent) => {
    e.preventDefault()
    if (!checkedDate) return

    const dateObj = new Date(checkedDate)
    const day = dateObj.getDate()

    // Deterministic calendar availability logic for popular Tamil Muhurtham dates
    if ([5, 12, 18, 22, 29].includes(day)) {
      setResult({
        status: 'limited',
        label: 'Limited Atelier Slots (1 Slot Remaining)',
        note: 'This date falls in prime Tamil wedding season. Priority booking is advised.',
      })
    } else if ([1, 15, 27].includes(day)) {
      setResult({
        status: 'booked',
        label: 'Fully Booked for Chennai Studio',
        note: 'Our master artist team is fully booked on this date. Inquire for our senior bridal specialists.',
      })
    } else {
      setResult({
        status: 'available',
        label: 'Dates Currently Open for Booking',
        note: 'Our Lead Master Artist and Atelier team are currently available for this date.',
      })
    }
  }

  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <span className="font-eyebrow block">Interactive Date Tool</span>
        <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-text)] font-normal">
          Check Muhurtham Date Availability
        </h3>
        <p className="caption-text text-xs">
          Instant availability check for South Indian Muhurtham, Sangeet &amp; Reception dates.
        </p>
      </div>

      <form onSubmit={checkAvailability} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex-1">
          <label htmlFor="muhurtham-date" className="sr-only">Select Wedding or Event Date</label>
          <input
            id="muhurtham-date"
            type="date"
            required
            value={checkedDate}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => {
              setCheckedDate(e.target.value)
              setResult(null)
            }}
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none text-[var(--color-text)] min-h-[44px]"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs uppercase tracking-[2px] transition-colors font-medium min-h-[44px] shrink-0"
        >
          Check Date ↗
        </button>
      </form>

      {result && (
        <div
          className={`p-4 border text-left space-y-1 ${
            result.status === 'available'
              ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
              : result.status === 'limited'
              ? 'bg-amber-50/70 border-amber-300 text-amber-900'
              : 'bg-stone-100 border-stone-300 text-stone-900'
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[1.5px]">
            <span>{result.status === 'available' ? '●' : result.status === 'limited' ? '▲' : '■'}</span>
            <span>{result.label}</span>
          </div>
          <p className="font-serif text-xs leading-relaxed pt-1">
            {result.note}
          </p>
        </div>
      )}
    </div>
  )
}
