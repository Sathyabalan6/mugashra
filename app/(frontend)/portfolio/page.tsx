import React from 'react'
import Image from 'next/image'
import { PageTransition } from '@/components/PageTransition'
import { PortfolioScrollGallery } from '@/components/PortfolioScrollGallery'

const slides = [
  { url: '/images/portfolio/red.jpg',    title: 'Crimson Silk Bridal',    desc: 'HD complexion, antique gold temple jewellery, fresh Madurai Malli poola jada.',          category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/red2.jpg',   title: 'Crimson Bridal II',      desc: 'Sculpted airbrush base, deep red lip, voluminous bridal waves.',                          category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/red3.jpg',   title: 'Crimson Bridal III',     desc: 'Waterproof muhurtham look, transferproof 16-hour formula.',                               category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/red4.jpg',   title: 'Crimson Bridal IV',      desc: 'Classic South Indian bridal — kohl-rimmed eyes, gold accents.',                          category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/red5.jpg',   title: 'Crimson Bridal V',       desc: 'Dewy glass-skin finish with bold red lip and floral hair.',                               category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/red6.jpg',   title: 'Crimson Bridal VI',      desc: 'Reception look — champagne shimmer lids, sculpted contour.',                             category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/blue.jpg',   title: 'Blue Silk Bridal',       desc: 'Blue silk saree — soft smoky eye, pearl jewellery, jasmine hair.',                       category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/blue2.jpg',  title: 'Blue Bridal II',         desc: 'Contemporary glass-skin with blue-toned eye artistry.',                                  category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/blue3.jpg',  title: 'Blue Bridal III',        desc: 'Pastel blue organza — feathered brows, romantic floral updo.',                           category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/blue4.jpg',  title: 'Blue Bridal IV',         desc: 'Nichayathartham look — soft peach blush, lash clusters.',                                category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/brown.jpg',  title: 'Brown & Gold Bridal',    desc: 'Warm brown silk — earthy tones, antique gold, poola jada.',                              category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/brown2.jpg', title: 'Brown Bridal II',        desc: 'Kanjeevaram brown — sculpted cheekbones, nude pout.',                                    category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/brown3.jpg', title: 'Brown Bridal III',       desc: 'Heirloom silk look — natural skin realism, temple jewellery.',                           category: 'Bridal',       focalPosition: 'center 5%' },
  { url: '/images/portfolio/bridal_story_1.webp', title: 'Bridal Story I',   desc: 'Behind the scenes — the making of a Mugashra bride.',                                category: 'Bridal Story', focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_2.webp', title: 'Bridal Story II',  desc: 'Sacred morning rituals — 4AM muhurtham preparation.',                                category: 'Bridal Story', focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_3.webp', title: 'Bridal Story III', desc: 'Floral hair architecture — fresh Madurai Malli setting.',                            category: 'Bridal Story', focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_4.webp', title: 'Bridal Story IV',  desc: 'Airbrush complexion under high-definition lighting.',                                category: 'Bridal Story', focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_5.webp', title: 'Bridal Story V',   desc: 'The final reveal — bride ready for her sacred ceremony.',                            category: 'Bridal Story', focalPosition: 'center 10%' },
  { url: '/images/portfolio/couple_photo_red _and _sandal_1.jpg', title: 'Red & Sandal Couple I',  desc: 'Couple portrait — red silk bride, sandal groom, perfect harmony.',          category: 'Couple',       focalPosition: 'center 15%' },
  { url: '/images/portfolio/couple_photo_red _and _sandal_2.jpg', title: 'Red & Sandal Couple II', desc: 'Reception couple look — coordinated colour palette, editorial finish.',      category: 'Couple',       focalPosition: 'center 15%' },
]

export default function PortfolioPage() {
  return (
    <PageTransition className="flex flex-col min-h-screen bg-[#181514] text-[var(--color-text)]">
      {/* ── Hero Banner ── */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] flex items-center justify-center px-8 sm:px-16 pt-24 bg-[#181514] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Mobile Dedicated Header */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/profolio_mobile_header.png"
              alt="A glimpse of what I love to do"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
          </div>

          {/* Desktop Hero */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/portfolio-hero.jpg"
              alt="A glimpse of what I love to do"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>
        </div>
        <div className="relative z-10 max-w-xl text-center space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-[0.05em] uppercase text-white font-normal">
            A GLIMPSE<br />
            OF WHAT<br />
            I LOVE<br />
            TO DO
          </h1>
        </div>
      </section>

      {/* ── Scroll Gallery ── */}
      <PortfolioScrollGallery slides={slides} />
    </PageTransition>
  )
}
