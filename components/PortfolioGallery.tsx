'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem } from '@/data/seedData'

interface PortfolioGalleryProps {
  items: PortfolioItem[]
}

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
      <div className="flex flex-wrap items-center justify-center gap-6 border-b border-[#222222]/10 pb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`font-sans text-[12px] uppercase tracking-[2px] pb-2 transition-all relative ${
              activeCategory === cat.id
                ? 'text-[#222222] font-semibold'
                : 'text-[#222222]/50 hover:text-[#222222]'
            }`}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B58A69]" />
            )}
          </button>
        ))}
      </div>

      {/* Editorial Grid (Spacious, Large Format) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxItem(item)}
            className="group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[3/4] w-full bg-[#EAE1D5] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#222222]/0 group-hover:bg-[#222222]/10 transition-colors duration-500" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[2px] text-[#B58A69]">
                <span>{item.category}</span>
                <span className="text-[#222222]/50">{item.location}</span>
              </div>
              <h3 className="text-xl font-normal text-[#222222] group-hover:text-[#B58A69] transition-colors">
                {item.title}
              </h3>
              <p className="caption-text line-clamp-2 pt-0.5">
                {item.artistryDetails}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#222222]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAFAF8] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#222222] text-[#FAFAF8] hover:bg-[#B58A69] flex items-center justify-center text-xs transition-colors"
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
                <span className="font-sans text-[10px] uppercase tracking-[2px] text-[#B58A69] block">
                  {lightboxItem.category} • {lightboxItem.location}
                </span>
                <h2 className="section-heading text-3xl font-normal">
                  {lightboxItem.title}
                </h2>
                <div className="border-t border-[#222222]/10 pt-4 space-y-2">
                  <h4 className="font-sans text-[11px] uppercase tracking-[2px] font-medium text-[#222222]">
                    Artistry Breakdown:
                  </h4>
                  <p className="text-sm text-[#222222]/85 leading-relaxed">
                    {lightboxItem.artistryDetails}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#222222]/10 space-y-3">
                <Link
                  href={`/contact?look=${encodeURIComponent(lightboxItem.title)}`}
                  className="block w-full text-center py-4 bg-[#222222] hover:bg-[#B58A69] text-[#FAFAF8] font-sans text-[12px] uppercase tracking-[2px] font-medium transition-colors"
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
