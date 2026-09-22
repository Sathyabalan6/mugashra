import React from 'react'
import type { Metadata } from 'next'
import { PageTransition } from '@/components/PageTransition'
import { PortfolioScrollGallery } from '@/components/PortfolioScrollGallery'
import { LivePortfolioHeader } from '@/components/live-headers/LivePortfolioHeader'
import { DesktopPortfolioBanner } from '@/components/live-headers/DesktopPortfolioBanner'

export const metadata: Metadata = {
  title: 'Bridal Portfolio | Mugaashra Bridal Studio — South Indian Bridal Looks',
  description: 'Browse editorial Tamil Muhurtham, airbrush bridal, and reception looks by Lead Master Artist Shwetha Mohan. Crimson silk, blue organza, and gold Kanjeevaram styles.',
  alternates: { canonical: 'https://mugaashra.com/portfolio' },
}

const slides = [
  { url: '/images/portfolio/red.jpg',    title: 'Crimson Silk Bridal',    desc: 'HD complexion, antique gold temple jewellery, fresh Madurai Malli poola jada.',          category: 'Muhurtham & Silk',   focalPosition: 'center center' },
  { url: '/images/portfolio/red2.jpg',   title: 'Crimson Bridal II',      desc: 'Sculpted airbrush base, deep red lip, voluminous bridal waves.',                          category: 'Muhurtham & Silk',   focalPosition: 'center center' },
  { url: '/images/portfolio/red3.jpg',   title: 'Crimson Bridal III',     desc: 'Waterproof muhurtham look, transferproof 16-hour formula.',                               category: 'Muhurtham & Silk',   focalPosition: 'center center' },
  { url: '/images/portfolio/red4.jpg',   title: 'Crimson Bridal IV',      desc: 'Classic South Indian bridal — kohl-rimmed eyes, gold accents.',                          category: 'Muhurtham & Silk',   focalPosition: 'center center' },
  { url: '/images/portfolio/red5.jpg',   title: 'Glass-Skin Glamour',     desc: 'Dewy glass-skin finish with bold red lip and floral hair architecture.',                  category: 'Reception & Glam',   focalPosition: 'center center' },
  { url: '/images/portfolio/red6.jpg',   title: 'Reception Radiance',     desc: 'Evening reception look — champagne shimmer lids, sculpted contour.',                     category: 'Reception & Glam',   focalPosition: 'center center' },
  { url: '/images/portfolio/blue.jpg',   title: 'Blue Silk Bridal',       desc: 'Blue silk saree — soft smoky eye, pearl jewellery, jasmine hair.',                       category: 'Engagement & Pastel', focalPosition: 'center center' },
  { url: '/images/portfolio/blue2.jpg',  title: 'Contemporary Blue',      desc: 'Contemporary glass-skin with blue-toned eye artistry.',                                  category: 'Reception & Glam',   focalPosition: 'center center' },
  { url: '/images/portfolio/blue3.jpg',  title: 'Pastel Organza',         desc: 'Pastel blue organza — feathered brows, romantic floral updo.',                           category: 'Engagement & Pastel', focalPosition: 'center center' },
  { url: '/images/portfolio/blue4.jpg',  title: 'Nichayathartham Look',   desc: 'Nichayathartham look — soft peach blush, individual lash clusters.',                     category: 'Engagement & Pastel', focalPosition: 'center center' },
  { url: '/images/portfolio/brown.jpg',  title: 'Warm Brown Silk',        desc: 'Warm brown silk — earthy tones, antique gold, signature poola jada.',                    category: 'Muhurtham & Silk',   focalPosition: 'center center' },
  { url: '/images/portfolio/brown2.jpg', title: 'Kanjeevaram Earthy Tone',desc: 'Kanjeevaram brown — sculpted cheekbones, nude velvet pout.',                            category: 'Muhurtham & Silk',   focalPosition: 'center center' },
  { url: '/images/portfolio/brown3.jpg', title: 'Heirloom Heritage Silk', desc: 'Heirloom silk look — natural skin realism, temple jewellery.',                           category: 'Muhurtham & Silk',   focalPosition: 'center center' },
  { url: '/images/portfolio/bridal_story_1.webp', title: 'Bridal Story I',   desc: 'Behind the scenes — the making of a Mugaashra bride.',                                category: 'Bridal Stories',     focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_2.webp', title: 'Bridal Story II',  desc: 'Sacred morning rituals — 4AM muhurtham preparation.',                                category: 'Bridal Stories',     focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_3.webp', title: 'Bridal Story III', desc: 'Floral hair architecture — fresh Madurai Malli setting.',                            category: 'Bridal Stories',     focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_4.webp', title: 'Bridal Story IV',  desc: 'Airbrush complexion under high-definition lighting.',                                category: 'Bridal Stories',     focalPosition: 'center 10%' },
  { url: '/images/portfolio/bridal_story_5.webp', title: 'Bridal Story V',   desc: 'The final reveal — bride ready for her sacred ceremony.',                            category: 'Bridal Stories',     focalPosition: 'center 10%' },
  { url: '/images/portfolio/couple_photo_red_and_sandal_1.jpg', title: 'Red & Sandal Couple I',  desc: 'Couple portrait — red silk bride, sandal groom, perfect harmony.',          category: 'Couple Portraits',   focalPosition: 'center center' },
  { url: '/images/portfolio/couple_photo_red_and_sandal_2.jpg', title: 'Red & Sandal Couple II', desc: 'Reception couple look — coordinated colour palette, editorial finish.',      category: 'Couple Portraits',   focalPosition: 'center center' },
]

export default function PortfolioPage() {
  return (
    <PageTransition className="flex flex-col min-h-screen bg-[#181514] text-[var(--color-text)]">
      {/* ── Hero Banner (Live Mobile on <768px, Cinematic Cover on >=768px) ── */}
      {/* Mobile Live Animated Header */}
      <section className="block md:hidden w-full pt-20 pb-4 px-3 bg-[#181514]">
        <LivePortfolioHeader>
          <div className="flex flex-col items-center justify-center text-center space-y-4 pt-12 pb-8 h-full">
            <span className="font-sans text-[11px] min-[390px]:text-xs uppercase tracking-[3.5px] text-[#8B0000] font-bold block drop-shadow-sm">
              Sacred Muhurtham &amp; Artistry
            </span>
            <h1 className="font-serif text-[40px] min-[390px]:text-[48px] min-[430px]:text-[54px] leading-[0.96] tracking-[0.03em] uppercase text-white font-normal drop-shadow-lg">
              A GLIMPSE<br />
              OF WHAT<br />
              I LOVE<br />
              TO DO
            </h1>
            <p className="font-serif text-xs min-[390px]:text-[13px] text-white/95 max-w-[260px] leading-relaxed drop-shadow-xs font-light">
              Explore our signature Tamil Muhurtham, Airbrush, and Reception bride transformations.
            </p>
          </div>
        </LivePortfolioHeader>
      </section>

      {/* Desktop Hero with Flowing Marigold & Jasmine Courtyard Breeze (>= 768px) */}
      <DesktopPortfolioBanner heroImage="/images/portfolio-hero.webp">
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[3.5px] text-[#8B0000] font-bold block drop-shadow-sm">
          Sacred Muhurtham &amp; Artistry
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.96] tracking-[0.03em] uppercase text-white font-normal drop-shadow-lg">
          A GLIMPSE<br />
          OF WHAT<br />
          I LOVE<br />
          TO DO
        </h1>
      </DesktopPortfolioBanner>

      {/* ── Scroll Gallery ── */}
      <PortfolioScrollGallery slides={slides} />
    </PageTransition>
  )
}
