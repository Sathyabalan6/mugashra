import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founder & Atelier Team | Mugashra Bridal Artistry',
  description: 'Meet our Lead Master Artist and senior bridal specialists.',
}

export const revalidate = 60

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8] text-[#222222]">
      {/* ── 1. Editorial Hero Banner ── */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] flex items-center justify-start px-8 sm:px-16 pt-24 bg-[#181514] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=85"
            alt="Lead Master Artist at Work"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 max-w-xl text-left space-y-4">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[3px] text-[#B58A69] font-medium block">
            THE ATELIER STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-[0.05em] uppercase text-white font-normal">
            THE ARTIST &<br />
            PHILOSOPHY
          </h1>
          <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed pt-2">
            A sanctuary of bridal beauty nestled in Chennai, dedicated to curating transcendent South Indian wedding looks.
          </p>
        </div>
      </section>

      {/* ── 2. Philosophy & Craft (Animated Bracket Split) ── */}
      <section className="py-28 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: { PHILOSOPHY } */}
          <div className="group space-y-6 text-left relative pl-6 sm:pl-8 border-l-2 border-[#B58A69]/30 hover:border-[#B58A69] transition-all duration-500 hover:translate-y-[-4px]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl sm:text-5xl text-[#B58A69] font-light inline-block group-hover:scale-110 group-hover:-translate-x-1 transition-transform duration-500">
                {`{`}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] uppercase text-[#B58A69] font-normal">
                PHILOSOPHY
              </h2>
              <span className="font-serif text-3xl sm:text-5xl text-[#B58A69] font-light inline-block group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-500">
                {`}`}
              </span>
            </div>
            <p className="font-serif text-sm sm:text-base text-[#222222]/85 leading-[1.85] font-light">
              Bridal makeup should never mask the bride. Our signature technique is built on skin realism — sculpting luminous, waterproof complexions that look breathtaking up-close during sacred 4:00 AM rituals, while standing up effortlessly to high-definition 4K cinematography.
            </p>
          </div>

          {/* Right: { THE CRAFT } */}
          <div className="group space-y-6 text-left relative pl-6 sm:pl-8 border-l-2 border-[#B58A69]/30 hover:border-[#B58A69] transition-all duration-500 hover:translate-y-[-4px]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl sm:text-5xl text-[#B58A69] font-light inline-block group-hover:scale-110 group-hover:-translate-x-1 transition-transform duration-500">
                {`{`}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] uppercase text-[#B58A69] font-normal">
                THE CRAFT
              </h2>
              <span className="font-serif text-3xl sm:text-5xl text-[#B58A69] font-light inline-block group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-500">
                {`}`}
              </span>
            </div>
            <p className="font-serif text-sm sm:text-base text-[#222222]/85 leading-[1.85] font-light">
              From hand-steaming and 48-hour pre-pleating heirloom Kanjeevaram silks, to custom floral hair architecture with fresh Madurai Malli and rose petals, every single detail is executed with quiet perfection.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. The Atelier Team (Framed Star Cards) ── */}
      <section id="team" className="py-24 md:py-36 px-6 sm:px-12 bg-[#FFFFFF] border-t border-[#222222]/10">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl tracking-[0.2em] uppercase text-[#B58A69] font-normal">
              THE ATELIER TEAM
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#222222]/80 max-w-xl mx-auto leading-relaxed">
              Every specialist in our studio is personally trained in our signature techniques to ensure flawless consistency across your bridal party.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Team Member 1 */}
            <div className="relative border border-[#222222]/20 bg-[#FAFAF8] p-8 sm:p-12 space-y-6">
              <span className="absolute top-4 left-4 text-[#B58A69] text-xs">✦</span>
              <span className="absolute top-4 right-4 text-[#B58A69] text-xs">✦</span>
              <span className="absolute bottom-4 left-4 text-[#B58A69] text-xs">✦</span>
              <span className="absolute bottom-4 right-4 text-[#B58A69] text-xs">✦</span>

              <div className="relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80"
                  alt="Senior Bridal Hair Specialist"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-left">
                <span className="font-sans text-[11px] uppercase tracking-[2px] text-[#B58A69] block">
                  Senior Specialist
                </span>
                <h3 className="font-serif text-2xl text-[#222222]">
                  Senior Hair & Floral Architect
                </h3>
                <p className="font-serif text-sm text-[#222222]/80 leading-relaxed">
                  Specializing in intricate South Indian bridal braids, poola jada floral settings, and voluminous Hollywood waves that remain immaculate through high-energy sangeets.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="relative border border-[#222222]/20 bg-[#FAFAF8] p-8 sm:p-12 space-y-6">
              <span className="absolute top-4 left-4 text-[#B58A69] text-xs">✦</span>
              <span className="absolute top-4 right-4 text-[#B58A69] text-xs">✦</span>
              <span className="absolute bottom-4 left-4 text-[#B58A69] text-xs">✦</span>
              <span className="absolute bottom-4 right-4 text-[#B58A69] text-xs">✦</span>

              <div className="relative aspect-[4/3] w-full bg-[#EAE1D5] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Senior Saree Draping Specialist"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-left">
                <span className="font-sans text-[11px] uppercase tracking-[2px] text-[#B58A69] block">
                  Senior Specialist
                </span>
                <h3 className="font-serif text-2xl text-[#222222]">
                  Senior Saree & Silhouette Stylist
                </h3>
                <p className="font-serif text-sm text-[#222222]/80 leading-relaxed">
                  Expert in razor-sharp Kanjeevaram box pleating, weight distribution pinning for heavy silk sarees, and contemporary lehenga draping.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[#B58A69] hover:bg-[#9B7050] text-[#181514] font-sans text-xs uppercase tracking-[2px] font-semibold transition-colors shadow-sm"
            >
              Enquire About Team Availability ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
