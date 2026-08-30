'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PerspectiveCarousel } from '@/components/ui/perspective-carousel'

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

export function PortfolioScrollGallery({ slides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealed, setRevealed] = useState<boolean[]>(() => slides.map(() => false))
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    slideRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setRevealed((prev) => (prev[i] ? prev : prev.map((v, idx) => (idx === i ? true : v))))
              if (entry.intersectionRatio >= 0.6) setActiveIndex(i)
            }
          })
        },
        { threshold: [0.1, 0.6] }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [slides.length])

  const scrollTo = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const active = slides[activeIndex]
  const total = String(slides.length).padStart(2, '0')

  return (
    <div className="relative flex flex-col md:flex-row w-full bg-[#181514]">
      {/* ── Image column ── */}
      <div className="w-full md:w-[62%]">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => { slideRefs.current[i] = el }}
            className="relative w-full h-[78vh] md:h-screen overflow-hidden"
          >
            <div className={`look-image absolute inset-0 ${revealed[i] ? 'is-revealed' : ''}`}>
              <Image
                src={slide.url}
                alt={slide.title}
                fill
                sizes="(min-width: 768px) 62vw, 100vw"
                className={slide.category === 'Bridal Story' ? 'object-contain' : 'object-cover'}
                style={{ objectPosition: slide.focalPosition ?? 'center 10%' }}
                priority={i < 2}
              />
            </div>

            {/* Mobile overlay copy */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="md:hidden absolute bottom-0 left-0 right-0 px-6 pb-10 space-y-2">
              <span className="font-sans text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] block">
                {slide.category}
              </span>
              <h2 className="font-serif text-2xl text-white font-normal leading-snug">{slide.title}</h2>
              <p className="font-serif text-sm text-white/70 leading-relaxed max-w-md">{slide.desc}</p>
              <Link
                href={`/contact?look=${encodeURIComponent(slide.title)}`}
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[2px] text-white border-b border-white/40 pb-0.5"
              >
                Enquire for this Look ↗
              </Link>
            </div>

            {/* Slide counter */}
            <div className="absolute top-8 right-6 md:right-10">
              <span className="font-sans text-[11px] uppercase tracking-[2px] text-white/50">
                {String(i + 1).padStart(2, '0')} / {total}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Sticky editorial panel — desktop only ── */}
      <div className="hidden md:flex md:w-[38%] sticky top-0 h-screen flex-col justify-between bg-[var(--color-bg)] border-l border-[var(--color-border)] px-12 lg:px-14 py-16">
        <div className="flex-1 flex flex-col justify-center">
          {/* Ghost numeral */}
          <span
            key={`num-${activeIndex}`}
            className="look-copy-fade font-serif select-none block leading-none mb-6"
            style={{
              fontSize: 'clamp(4.5rem, 7vw, 7.5rem)',
              WebkitTextStroke: '1px var(--color-accent)',
              color: 'transparent',
            }}
            aria-hidden="true"
          >
            {String(activeIndex + 1).padStart(2, '0')}
          </span>

          <span
            key={`cat-${activeIndex}`}
            className="look-copy-fade font-sans text-[10px] uppercase tracking-[3px] text-[var(--color-accent-text)] font-medium block mb-3"
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
            className="look-copy-fade font-serif text-sm text-[var(--color-muted)] leading-relaxed max-w-sm mb-8"
          >
            {active.desc}
          </p>

          <Link
            key={`cta-${activeIndex}`}
            href={`/contact?look=${encodeURIComponent(active.title)}`}
            className="look-copy-fade inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[2px] text-[var(--color-text)] border-b border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)] transition-colors pb-0.5 w-fit"
          >
            Enquire for this Look ↗
          </Link>

        </div>

        {/* Thumbnail carousel */}
        <div className="h-40 w-full shrink-0">
          <PerspectiveCarousel
            items={slides.map((s) => ({ src: s.url, title: s.title }))}
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
          <span className="font-sans text-[10px] tracking-[1.5px] text-[var(--color-muted)]">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 flex items-center gap-1.5">
            {slides.map((slide, i) => (
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
          <span className="font-sans text-[10px] tracking-[1.5px] text-[var(--color-muted)]">{total}</span>
        </div>
      </div>
    </div>
  )
}
