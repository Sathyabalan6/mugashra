'use client'

import React, { useState, useEffect, useRef, ViewTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageTransition } from '@/components/PageTransition'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>('bridal')
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; desc: string } | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const categories = [
    {
      id: 'bridal',
      title: 'B R I D A L',
      bgClass: 'bg-[#DFD5CD]',
      textClass: 'text-[#6F4E37]',
      items: [
        {
          title: 'The Sacred Muhurtham in Crimson Silk',
          desc: 'Waterproof HD complexion, antique gold temple jewellery, fresh Madurai Malli poola jada.',
          url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
        },
        {
          title: 'Contemporary Glass-Skin Reception',
          desc: 'Sculpted airbrush base, champagne shimmer lids, voluminous Hollywood waves.',
          url: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85',
        },
        {
          title: 'Pastel Organza Nichayathartham',
          desc: 'Soft peach monochromatic blush, fluttery lash clusters, romantic floral hair.',
          url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
        },
      ],
    },
    {
      id: 'fashion',
      title: 'F A S H I O N',
      bgClass: 'bg-[#E5DCD6]',
      textClass: 'text-[#6F4E37]',
      items: [
        {
          title: 'Couture Editorial in Emerald Velvet',
          desc: 'Sculpted cheekbones, high-gloss nude pout, modern architectural low bun.',
          url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85',
        },
        {
          title: 'Minimalist Monochromatic Silk Campaign',
          desc: 'Feathered natural brows, glass skin glaze, subtle earth tones.',
          url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85',
        },
      ],
    },
    {
      id: 'commercials',
      title: 'C O M M E R C I A L S',
      bgClass: 'bg-[#EAE4DF]',
      textClass: 'text-[#6F4E37]',
      items: [
        {
          title: 'Luxury Jewellery Campaign',
          desc: 'High-contrast definition, camera-perfect skin setting under intense studio lighting.',
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
        },
      ],
    },
  ]

  const allItems = categories.flatMap((cat) => cat.items)
  const currentCategoryItems = categories.find((c) => c.id === activeCategory)?.items || allItems
  const currentIndex = currentCategoryItems.findIndex((item) => item.url === lightboxImage?.url)

  const handlePrev = () => {
    if (currentIndex <= 0) {
      setLightboxImage(currentCategoryItems[currentCategoryItems.length - 1])
    } else {
      setLightboxImage(currentCategoryItems[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex >= currentCategoryItems.length - 1 || currentIndex === -1) {
      setLightboxImage(currentCategoryItems[0])
    } else {
      setLightboxImage(currentCategoryItems[currentIndex + 1])
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown)
      closeBtnRef.current?.focus()
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage, activeCategory, currentIndex])

  return (
    <PageTransition className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ── 1. Editorial Master Banner ── */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] flex items-center justify-start px-8 sm:px-16 pt-24 bg-[#E0D8D0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=85"
            alt="A glimpse of what I love to do"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>

        <div className="relative z-10 max-w-xl text-left space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-[0.05em] uppercase text-[var(--color-text)] font-normal">
            A GLIMPSE<br />
            OF WHAT<br />
            I LOVE<br />
            TO DO
          </h1>
        </div>
      </section>

      {/* ── 2. Full-Width Stacked Category Strips ── */}
      <section className="w-full flex flex-col">
        {categories.map((cat) => {
          const isOpen = activeCategory === cat.id
          return (
            <div key={cat.id} className="w-full border-b border-white/30">
              {/* Category Strip Button */}
              <button
                onClick={() => setActiveCategory(isOpen ? null : cat.id)}
                className={`w-full py-10 sm:py-14 px-8 sm:px-16 flex items-center justify-between transition-all duration-300 ${cat.bgClass} hover:brightness-95`}
                aria-expanded={isOpen}
              >
                <span className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.2em] uppercase font-normal ${cat.textClass}`}>
                  {cat.title}
                </span>
                <span className={`font-serif text-3xl sm:text-5xl transition-transform duration-300 ${cat.textClass} ${isOpen ? 'rotate-90' : ''}`}>
                  ↗
                </span>
              </button>

              {/* Expandable Looks Grid */}
              {isOpen && (
                <ViewTransition enter="slide-up" default="none">
                  <div className="bg-[var(--color-bg-white)] p-8 sm:p-16">
                    <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                      {cat.items.map((item, idx) => (
                        <ViewTransition key={idx}>
                          <button
                            type="button"
                            onClick={() => setLightboxImage({ url: item.url, title: item.title, desc: item.desc })}
                            className="group cursor-pointer space-y-4 text-left w-full focus-visible:outline-2 focus-visible:outline-[var(--color-accent-text)]"
                            aria-label={`Inspect look: ${item.title}`}
                          >
                            <div className="relative aspect-[3/4] w-full bg-[#EAE1D5] overflow-hidden shadow-xs">
                              <Image
                                src={item.url}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-102 transition-transform duration-500"
                              />
                            </div>
                            <div className="space-y-1 text-left">
                              <h3 className="font-serif text-lg text-[var(--color-text)] group-hover:text-[var(--color-accent-text)] transition-colors">
                                {item.title}
                              </h3>
                              <p className="caption-text text-xs line-clamp-2">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        </ViewTransition>
                      ))}
                    </div>
                  </div>
                </ViewTransition>
              )}
            </div>
          )
        })}
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <ViewTransition enter="fade-in" exit="fade-out">
          <div
            className="fixed inset-0 z-50 bg-[#181514]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
          >
            <ViewTransition enter="scale-in" exit="scale-out">
              <div
                className="relative max-w-3xl w-full bg-[var(--color-bg)] p-8 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto border border-[var(--color-border)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Navigation Buttons */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] flex items-center justify-center text-sm transition-colors"
                    aria-label="Previous look (Left arrow key)"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] flex items-center justify-center text-sm transition-colors"
                    aria-label="Next look (Right arrow key)"
                  >
                    →
                  </button>
                  <button
                    ref={closeBtnRef}
                    onClick={() => setLightboxImage(null)}
                    className="w-9 h-9 rounded-full bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] flex items-center justify-center text-xs transition-colors"
                    aria-label="Close dialog (Escape key)"
                  >
                    ✕
                  </button>
                </div>

                <div className="relative aspect-[3/4] w-full md:w-1/2 min-h-[300px] overflow-hidden bg-[#222222]">
                  <Image
                    src={lightboxImage.url}
                    alt={lightboxImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 text-left pt-6 md:pt-0">
                  <div className="space-y-2">
                    <span className="font-sans text-[10px] uppercase tracking-[2px] text-[var(--color-accent-text)]">
                      Look {currentIndex + 1} of {currentCategoryItems.length}
                    </span>
                    <h3 id="portfolio-modal-title" className="font-serif text-2xl text-[var(--color-text)]">
                      {lightboxImage.title}
                    </h3>
                    <p className="font-serif text-sm text-[var(--color-text-body)] leading-relaxed">
                      {lightboxImage.desc}
                    </p>
                  </div>
                  <Link
                    href={`/contact?look=${encodeURIComponent(lightboxImage.title)}`}
                    transitionTypes={['nav-forward']}
                    className="block w-full text-center py-3.5 bg-[var(--color-text)] hover:bg-[var(--color-accent)] text-white font-sans text-xs uppercase tracking-[2px] transition-colors font-medium"
                  >
                    Enquire for this Look ↗
                  </Link>
                </div>
              </div>
            </ViewTransition>
          </div>
        </ViewTransition>
      )}
    </PageTransition>
  )
}
