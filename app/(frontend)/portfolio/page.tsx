'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>('bridal')
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; desc: string } | null>(null)

  const categories = [
    {
      id: 'bridal',
      title: 'B R I D A L',
      bgClass: 'bg-[#DFD5CD]',
      textClass: 'text-[#8E6E53]',
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
      textClass: 'text-[#A07A5E]',
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
      textClass: 'text-[#B58A69]',
      items: [
        {
          title: 'Luxury Jewellery Campaign',
          desc: 'High-contrast definition, camera-perfect skin setting under intense studio lighting.',
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8] text-[#222222]">
      {/* ── 1. Editorial Master Banner (Exact Reference Layout) ── */}
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
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-[0.05em] uppercase text-[#222222] font-normal">
            A GLIMPSE<br />
            OF WHAT<br />
            I LOVE<br />
            TO DO
          </h1>
        </div>
      </section>

      {/* ── 2. Full-Width Stacked Category Strips (Exact Reference Layout) ── */}
      <section className="w-full flex flex-col">
        {categories.map((cat) => {
          const isOpen = activeCategory === cat.id
          return (
            <div key={cat.id} className="w-full border-b border-white/30">
              {/* Category Strip Button */}
              <button
                onClick={() => setActiveCategory(isOpen ? null : cat.id)}
                className={`w-full py-10 sm:py-14 px-8 sm:px-16 flex items-center justify-between transition-all duration-300 ${cat.bgClass} hover:brightness-95`}
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
                <div className="bg-[#FFFFFF] p-8 sm:p-16 animate-fade-in">
                  <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {cat.items.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightboxImage({ url: item.url, title: item.title, desc: item.desc })}
                        className="group cursor-pointer space-y-4"
                      >
                        <div className="relative aspect-[3/4] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
                          <Image
                            src={item.url}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-103 transition-transform duration-700"
                          />
                        </div>
                        <div className="space-y-1 text-left">
                          <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#B58A69] transition-colors">
                            {item.title}
                          </h3>
                          <p className="caption-text text-xs line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#222222]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAFAF8] p-8 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center text-xs"
            >
              ✕
            </button>
            <div className="relative aspect-[3/4] w-full md:w-1/2 min-h-[300px] overflow-hidden bg-[#222222]">
              <Image
                src={lightboxImage.url}
                alt={lightboxImage.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 text-left">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#222222]">
                  {lightboxImage.title}
                </h3>
                <p className="font-serif text-sm text-[#222222]/80 leading-relaxed">
                  {lightboxImage.desc}
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center py-3 bg-[#222222] hover:bg-[#B58A69] text-white font-sans text-xs uppercase tracking-[2px] transition-colors"
              >
                Enquire for Date ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
