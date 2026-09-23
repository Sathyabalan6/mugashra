'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const PerspectiveCarousel = dynamic(
  () => import('@/components/ui/perspective-carousel').then((mod) => mod.PerspectiveCarousel),
  { ssr: false }
)

interface SlideItem {
  url: string
  title: string
  desc: string
  category: string
  focalPosition?: string
}

interface Props {
  slides: SlideItem[]
}

const CATEGORIES = [
  'All Looks',
  'Muhurtham & Silk',
  'Reception & Glam',
  'Engagement & Pastel',
  'Bridal Stories',
  'Couple Portraits',
]

export function PortfolioScrollGallery({ slides }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('All Looks')
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const displaySlides = selectedCategory === 'All Looks'
    ? slides
    : slides.filter((s) => s.category === selectedCategory)

  const [revealed, setRevealed] = useState<boolean[]>(() => slides.map(() => false))
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const obs = new IntersectionObserver(
      (entries) => {
        let bestIndex = -1
        let maxRatio = 0
        const toReveal: number[] = []

        entries.forEach((entry) => {
          const indexStr = entry.target.getAttribute('data-index')
          if (indexStr === null) return
          const i = parseInt(indexStr, 10)

          if (entry.isIntersecting) {
            toReveal.push(i)
            if (entry.intersectionRatio > maxRatio && entry.intersectionRatio >= 0.5) {
              maxRatio = entry.intersectionRatio
              bestIndex = i
            }
          }
        })

        if (toReveal.length > 0) {
          setRevealed((prev) => {
            let changed = false
            const next = [...prev]
            for (const idx of toReveal) {
              if (!next[idx]) {
                next[idx] = true
                changed = true
              }
            }
            return changed ? next : prev
          })
        }

        if (bestIndex !== -1) {
          setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex))
        }
      },
      { threshold: [0.15, 0.55] }
    )

    slideRefs.current.forEach((el) => {
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [displaySlides.length, selectedCategory])

  // Keyboard navigation & body scroll locking for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displaySlides.length : null))
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + displaySlides.length) % displaySlides.length : null))
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxIndex, displaySlides.length])

  const scrollTo = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const active = displaySlides[activeIndex] || displaySlides[0]
  const total = String(displaySlides.length).padStart(2, '0')

  return (
    <div className="w-full flex flex-col bg-[#181514]">
      {/* ── Category Filter Bar ── */}
      <div
        role="tablist"
        aria-label="Portfolio Look Categories"
        className="w-full bg-[#181514] border-b border-white/10 px-4 sm:px-10 py-3.5 flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar sticky top-20 z-30 backdrop-blur-md bg-[#181514]/90"
      >
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => {
                setSelectedCategory(cat)
                setActiveIndex(0)
                setRevealed(slides.filter((s) => cat === 'All Looks' || s.category === cat).map(() => false))
              }}
              className={`px-4 py-2 rounded-full font-sans text-xs sm:text-[13px] uppercase tracking-[1.5px] transition-all whitespace-nowrap min-h-[44px] cursor-pointer ${
                isSelected
                  ? 'bg-[var(--color-accent)] text-[#181514] font-semibold shadow-md'
                  : 'text-white/70 hover:text-white border border-white/15 hover:border-white/40 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="relative flex flex-col md:flex-row w-full bg-[#181514]">
        {/* ── Image column ── */}
        <div className="w-full md:w-[62%]">
          {displaySlides.map((slide, i) => (
            <div
              key={slide.url}
              ref={(el) => { slideRefs.current[i] = el }}
              data-index={i}
              className="relative w-full h-[78svh] md:h-[100svh] overflow-hidden group"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`look-image absolute inset-0 p-4 sm:p-8 flex items-center justify-center cursor-zoom-in w-full h-full border-none bg-transparent focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] ${revealed[i] ? 'is-revealed' : ''}`}
                aria-label={`Open high-resolution inspection for ${slide.title}`}
              >
                <Image
                  src={slide.url}
                  alt={`${slide.title} — ${slide.desc}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 55vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  style={{ objectPosition: slide.focalPosition ?? 'center center' }}
                  priority={i < 2}
                />
              </button>

              {/* Desktop Hover Inspect Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Inspect high-res details of ${slide.title}`}
                className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/70 hover:bg-[var(--color-accent)] text-white hover:text-[#181514] font-sans text-xs uppercase tracking-[2px] backdrop-blur-md border border-white/20 transition-all duration-300 shadow-md cursor-pointer opacity-70 group-hover:opacity-100"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                <span>Inspect HD ⛶</span>
              </button>

              {/* Mobile overlay copy */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="md:hidden absolute bottom-0 left-0 right-0 px-6 pb-8 space-y-1.5 z-10">
                <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent)] block font-semibold">
                  {slide.category}
                </span>
                <h2 className="font-serif text-2xl text-white font-normal leading-snug">{slide.title}</h2>
                <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed max-w-md line-clamp-2">{slide.desc}</p>
                <div className="flex items-center gap-4 pt-1">
                  <Link
                    href={`/contact?look=${encodeURIComponent(slide.title)}`}
                    className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-[13px] uppercase tracking-[2px] text-white border-b border-white/40 pb-0.5 min-h-[44px]"
                  >
                    Enquire for this Look ↗
                  </Link>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="font-sans text-xs sm:text-[13px] uppercase tracking-[2px] text-[var(--color-accent)] border-b border-[var(--color-accent)]/40 pb-0.5 min-h-[44px] flex items-center cursor-pointer"
                  >
                    View HD ⛶
                  </button>
                </div>
              </div>

              {/* Slide counter */}
              <div className="absolute top-8 right-6 md:right-10 z-10">
                <span className="font-sans text-xs uppercase tracking-[2px] text-white/60">
                  {String(i + 1).padStart(2, '0')} / {total}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Sticky editorial panel — desktop only ── */}
        <div className="hidden md:flex md:w-[38%] sticky top-0 h-screen md:h-[100svh] flex-col justify-between bg-[var(--color-bg)] border-l border-[var(--color-border)] px-12 lg:px-14 py-16">
          <div className="flex-1 flex flex-col justify-center">
            {/* Ghost numeral */}
            <span
              key={`num-${activeIndex}`}
              className="look-copy-fade font-serif select-none block leading-none mb-6"
              style={{
                fontSize: 'clamp(4.5rem, 1.07rem + 7.14vw, 7.5rem)',
                WebkitTextStroke: '1px var(--color-accent)',
                color: 'transparent',
              }}
              aria-hidden="true"
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </span>

            <span
              key={`cat-${activeIndex}`}
              className="look-copy-fade font-sans text-xs sm:text-[13px] uppercase tracking-[3px] text-[var(--color-accent-text)] font-medium block mb-3"
            >
              {active.category}
            </span>
            <h2
              key={`title-${activeIndex}`}
              className="look-copy-fade font-serif text-[var(--fluid-h3)] text-[var(--color-text)] font-normal leading-snug mb-4 max-w-sm"
            >
              {active.title}
            </h2>
            <p
              key={`desc-${activeIndex}`}
              className="look-copy-fade font-serif text-[15px] sm:text-base text-[var(--color-muted)] leading-relaxed max-w-sm mb-6"
            >
              {active.desc}
            </p>

            <div className="flex items-center gap-5 pt-1">
              <Link
                key={`cta-${activeIndex}`}
                href={`/contact?look=${encodeURIComponent(active.title)}`}
                className="look-copy-fade inline-flex items-center gap-2 font-sans text-xs sm:text-[13px] uppercase tracking-[2px] text-[var(--color-text)] border-b border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)] transition-colors pb-0.5 w-fit"
              >
                Enquire for this Look ↗
              </Link>
              <button
                type="button"
                onClick={() => setLightboxIndex(activeIndex)}
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-[13px] uppercase tracking-[2px] text-[var(--color-accent-text)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
              >
                <span>Inspect HD</span>
                <span aria-hidden="true">⛶</span>
              </button>
            </div>
          </div>

          {/* Thumbnail carousel */}
          <div className="h-40 w-full shrink-0">
            <PerspectiveCarousel
              items={displaySlides.map((s) => ({ src: s.url, title: s.title }))}
              activeIndex={activeIndex}
              onActiveIndexChange={scrollTo}
              loop
              slideWidth={100}
              rotationStep={55}
              inactiveScale={0.8}
              showDots={false}
              imageClassName="rounded-none"
              labelClassName="hidden"
              controlsClassName="border-[var(--color-border)] bg-[var(--color-bg)]/80 text-[var(--color-text)] backdrop-blur-sm"
            />
          </div>

          {/* Progress rail */}
          <div className="flex items-center gap-3 pt-8 border-t border-[var(--color-border-subtle)]">
            <span className="font-sans text-xs tracking-[1.5px] text-[var(--color-muted)]">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 flex items-center gap-1.5">
              {displaySlides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to ${slide.title}`}
                  aria-current={activeIndex === i}
                  className="group relative flex-1 h-[3px] rounded-full bg-[var(--color-border)] overflow-hidden"
                >
                  <span
                    className={`absolute inset-y-0 left-0 bg-[var(--color-accent)] transition-all duration-500 ${
                      activeIndex === i ? 'w-full' : activeIndex > i ? 'w-full opacity-40' : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="font-sans text-xs tracking-[1.5px] text-[var(--color-muted)]">{total}</span>
          </div>
        </div>
      </div>

      {/* ── High-Definition Lightbox Modal ── */}
      {lightboxIndex !== null && displaySlides[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${displaySlides[lightboxIndex].title} — High Resolution View`}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none animate-in fade-in duration-200 overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null)
          }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const diff = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 45) {
              if (diff > 0) {
                // Swipe left -> next slide
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displaySlides.length : null))
              } else {
                // Swipe right -> prev slide
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + displaySlides.length) % displaySlides.length : null))
              }
            }
            touchStartX.current = null
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs uppercase tracking-[3px] text-[var(--color-accent)] font-semibold px-3 py-1 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10">
                {displaySlides[lightboxIndex].category}
              </span>
              <span className="font-sans text-xs tracking-[2px] text-white/60">
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(displaySlides.length).padStart(2, '0')}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close high-resolution lightbox"
              className="w-11 h-11 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white flex items-center justify-center transition-colors bg-white/5 cursor-pointer text-lg active:scale-95"
            >
              ✕
            </button>
          </div>

          {/* Center Image Area with Nav Controls */}
          <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-3 sm:my-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + displaySlides.length) % displaySlides.length : null))
              }}
              aria-label="Previous bridal look"
              className="absolute left-1 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[var(--color-accent)] text-white hover:text-[#181514] border border-white/20 flex items-center justify-center transition-all cursor-pointer text-xl sm:text-2xl shadow-lg active:scale-95"
            >
              ‹
            </button>

            <div className="relative w-full h-[46svh] sm:h-[65svh]">
              <Image
                src={displaySlides[lightboxIndex].url}
                alt={displaySlides[lightboxIndex].title}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displaySlides.length : null))
              }}
              aria-label="Next bridal look"
              className="absolute right-1 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[var(--color-accent)] text-white hover:text-[#181514] border border-white/20 flex items-center justify-center transition-all cursor-pointer text-xl sm:text-2xl shadow-lg active:scale-95"
            >
              ›
            </button>
          </div>

          {/* Bottom Bar: Title, Description & Action Buttons */}
          <div className="w-full max-w-5xl mx-auto bg-black/80 border border-white/15 rounded-xs p-4 sm:p-6 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
            <div className="space-y-1 text-left">
              <h3 className="font-serif text-lg sm:text-2xl text-white font-normal">
                {displaySlides[lightboxIndex].title}
              </h3>
              <p className="font-serif text-xs sm:text-sm text-white/70 max-w-xl line-clamp-2 sm:line-clamp-none">
                {displaySlides[lightboxIndex].desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href={`/contact?look=${encodeURIComponent(displaySlides[lightboxIndex].title)}`}
                onClick={() => setLightboxIndex(null)}
                className="w-full sm:w-auto px-5 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-colors rounded-xs text-center min-h-[44px] flex items-center justify-center"
              >
                Enquire for this Look ↗
              </Link>
              <a
                href={`https://wa.me/918610597490?text=${encodeURIComponent(
                  `Hello Shwetha, I am viewing the ${displaySlides[lightboxIndex].title} in your portfolio. Is this look available for my wedding date?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 border border-white/25 hover:border-white text-white font-sans text-xs uppercase tracking-[2px] transition-colors rounded-xs text-center min-h-[44px] flex items-center justify-center"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
