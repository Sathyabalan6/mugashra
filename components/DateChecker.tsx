'use client'

import React, { useState } from 'react'

interface DateStatus {
  status: 'available' | 'limited' | 'booked'
  label: string
  note: string
}

export function DateChecker() {
  const [checkedDate, setCheckedDate] = useState<string>('')
  const [result, setResult] = useState<DateStatus | null>(null)
  const [showCalendarView, setShowCalendarView] = useState<boolean>(false)

  // Popular upcoming auspicious Muhurtham dates for quick selection
  const upcomingAuspiciousDates = [
    { date: '2026-09-06', label: 'Sep 6 (Sun)', status: 'limited' },
    { date: '2026-09-12', label: 'Sep 12 (Sat)', status: 'available' },
    { date: '2026-09-18', label: 'Sep 18 (Fri)', status: 'limited' },
    { date: '2026-10-22', label: 'Oct 22 (Thu)', status: 'available' },
    { date: '2026-11-15', label: 'Nov 15 (Sun)', status: 'booked' },
    { date: '2026-11-29', label: 'Nov 29 (Sun)', status: 'limited' },
  ]

  const evaluateDate = (dateString: string) => {
    const dateObj = new Date(dateString)
    const day = dateObj.getDate()

    if ([5, 6, 12, 18, 22, 29].includes(day)) {
      return {
        status: 'limited' as const,
        label: 'Limited Atelier Slots (1 Slot Remaining)',
        note: 'This date falls in prime Tamil wedding season. Priority booking is advised.',
      }
    } else if ([1, 15, 27].includes(day)) {
      return {
        status: 'booked' as const,
        label: 'Fully Booked for Lead Artist Tier',
        note: 'Lead Master Artist is booked. Inquire for Senior Atelier Bridal Specialists.',
      }
    } else {
      return {
        status: 'available' as const,
        label: 'Dates Currently Open for Booking',
        note: 'Our Lead Master Artist and Atelier team are available for this date.',
      }
    }
  }

  const checkAvailability = (e: React.FormEvent) => {
    e.preventDefault()
    if (!checkedDate) return
    setResult(evaluateDate(checkedDate))
  }

  const handleQuickSelect = (dateStr: string) => {
    setCheckedDate(dateStr)
    setResult(evaluateDate(dateStr))
  }

  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-bg-white)] p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <span className="font-eyebrow block">Interactive Date Tool</span>
          <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-text)] font-normal">
            Check Muhurtham Date Availability
          </h3>
          <p className="caption-text text-xs">
            Instant check for South Indian Muhurtham, Sangeet &amp; Reception dates.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowCalendarView(!showCalendarView)}
          className="text-xs font-sans uppercase tracking-[1.5px] text-[var(--color-accent-text)] hover:underline self-start sm:self-auto py-1"
        >
          {showCalendarView ? 'Hide Prime Dates' : 'View Prime Muhurtham Dates ↗'}
        </button>
      </div>

      {/* Prime Muhurtham Quick Select Strip */}
      {showCalendarView && (
        <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)] space-y-3 animate-in fade-in duration-300">
          <span className="font-sans text-[11px] uppercase tracking-[1.5px] text-[var(--color-muted)] font-semibold block">
            Popular Upcoming Tamil Muhurtham Dates (Tap to Check)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {upcomingAuspiciousDates.map((item) => (
              <button
                key={item.date}
                type="button"
                onClick={() => handleQuickSelect(item.date)}
                className={`px-3 py-2 text-xs font-sans text-left border flex items-center justify-between transition-all ${
                  checkedDate === item.date
                    ? 'border-[var(--color-accent-text)] bg-white shadow-xs font-medium'
                    : 'border-[var(--color-border)] bg-[var(--color-bg-white)] hover:border-[var(--color-accent)]'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.status === 'available'
                      ? 'bg-emerald-500'
                      : item.status === 'limited'
                      ? 'bg-amber-500'
                      : 'bg-rose-500'
                  }`}
                  title={item.status}
                />
              </button>
            ))}
          </div>
        </div>
      )}

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
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent-text)] transition-colors rounded-none text-[var(--color-text)] min-h-[44px]"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs uppercase tracking-[2px] transition-all duration-300 active:scale-[0.98] font-medium min-h-[44px] shrink-0"
        >
          Check Date ↗
        </button>
      </form>

      {result && (
        <div
          className={`p-4 border text-left space-y-1 transition-all duration-500 ease-out transform animate-in fade-in slide-in-from-top-2 ${
            result.status === 'available'
              ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900'
              : result.status === 'limited'
              ? 'bg-amber-50/80 border-amber-300 text-amber-900'
              : 'bg-stone-100 border-stone-300 text-stone-900'
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[1.5px]">
            <span className="inline-block animate-pulse">{result.status === 'available' ? '●' : result.status === 'limited' ? '▲' : '■'}</span>
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
