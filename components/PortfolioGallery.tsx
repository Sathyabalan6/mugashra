'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem } from '@/data/seedData'

interface PortfolioGalleryProps {
  items: PortfolioItem[]
}

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Manage focus and Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null)
    }
    if (lightboxItem) {
      window.addEventListener('keydown', handleKeyDown)
      closeButtonRef.current?.focus()
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxItem])

  const categories = [
    { id: 'all', label: 'All Looks' },
    { id: 'muhurtham', label: 'The Sacred Muhurtham' },
    { id: 'reception', label: 'Reception & Sangeet' },
    { id: 'engagement', label: 'Nichayathartham' },
    { id: 'haldi', label: 'Haldi' },
    { id: 'editorial', label: 'Editorial' },
  ]

  const filteredItems = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  )

  return (
    <div className="space-y-16">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-6 border-b border-[var(--color-border)] pb-6" role="tablist">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-sans text-[12px] uppercase tracking-[2px] pb-2 transition-colors relative min-h-[44px] flex items-center ${
                isActive
                  ? 'text-[var(--color-text)] font-semibold'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {cat.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]" />
              )}
            </button>
          )
        })}
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxItem(item)}
            className="group cursor-pointer space-y-4 text-left w-full focus-visible:outline-2 focus-visible:outline-[var(--color-accent-text)] focus-visible:outline-offset-4"
            aria-label={`View look: ${item.title}`}
          >
            <div className="relative aspect-[3/4] w-full bg-[#EAE1D5] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent-text)]">
                <span>{item.category}</span>
                <span className="text-[var(--color-muted)]">{item.location}</span>
              </div>
              <h3 className="text-xl font-normal text-[var(--color-text)] group-hover:text-[var(--color-accent-text)] transition-colors">
                {item.title}
              </h3>
              <p className="caption-text line-clamp-2 pt-0.5">
                {item.artistryDetails}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#181514]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div
            className="relative max-w-4xl w-full bg-[var(--color-bg)] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto border border-[var(--color-border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] flex items-center justify-center text-sm transition-colors"
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="relative aspect-[3/4] w-full md:w-1/2 min-h-[360px] overflow-hidden bg-[#222222]">
              <Image
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent-text)] block">
                  {lightboxItem.category} • {lightboxItem.location}
                </span>
                <h2 id="lightbox-title" className="section-heading text-3xl font-normal">
                  {lightboxItem.title}
                </h2>
                <div className="border-t border-[var(--color-border)] pt-4 space-y-2">
                  <h4 className="font-sans text-[11px] uppercase tracking-[2px] font-medium text-[var(--color-text)]">
                    Artistry Breakdown:
                  </h4>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                    {lightboxItem.artistryDetails}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)] space-y-3">
                <Link
                  href={`/contact?look=${encodeURIComponent(lightboxItem.title)}`}
                  className="block w-full text-center py-4 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-[12px] uppercase tracking-[2px] font-medium transition-colors"
                >
                  Enquire for this Look ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
