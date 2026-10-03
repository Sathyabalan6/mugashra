import React from 'react'
import type { Metadata } from 'next'
import { PageTransition } from '@/components/PageTransition'
import { PortfolioScrollGallery } from '@/components/PortfolioScrollGallery'
import { LivePortfolioHeader } from '@/components/live-headers/LivePortfolioHeader'
import { DesktopPortfolioBanner } from '@/components/live-headers/DesktopPortfolioBanner'

export const metadata: Metadata = {
  title: 'Bridal Portfolio | Mugaashra Bridal Studio — South Indian Bridal Looks',
  description: 'Explore signature Tamil Muhurtham, airbrush bridal, reception glam, and bespoke saree draping looks by Lead Master Artist Shwetha Mohan in Madurai.',
  alternates: { canonical: 'https://mugaashra.com/portfolio' },
}

const slides = [
  // ── BRIDE SUITE I: Sacred Crimson Muhurtham ──
  {
    url: '/images/portfolio/client/bride_look_01.webp',
    title: 'Crimson Muhurtham Suite — Look I',
    desc: 'Deep crimson Kanjeevaram silk, antique gold temple jewellery, and fresh Madurai Malli poola jada.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_02.webp',
    title: 'Crimson Muhurtham Suite — Look II',
    desc: 'Sculpted HD complexion, soft terracotta lip, and kohl-rimmed eyes.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_03.webp',
    title: 'Crimson Muhurtham Suite — Look III',
    desc: '16-hour waterproof Muhurtham base with natural skin realism.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_04.webp',
    title: 'Crimson Muhurtham Suite — Look IV',
    desc: 'Detailed close-up — eye architecture and traditional bindi placement.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_05.webp',
    title: 'Crimson Muhurtham Suite — Look V',
    desc: 'Full bridal drape reveal under warm ceremonial lighting.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_06.webp',
    title: 'Crimson Muhurtham Suite — Look VI',
    desc: 'Side profile detailing floral hair weave and waist belt alignment.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_07.webp',
    title: 'Crimson Muhurtham Suite — Look VII',
    desc: 'Soft dewy finish crafted for high-definition wedding photography.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_08.webp',
    title: 'Crimson Muhurtham Suite — Look VIII',
    desc: 'Final ceremony readiness reveal.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },

  // ── BRIDE SUITE II: Glass-Skin Airbrush & Reception Glam ──
  {
    url: '/images/portfolio/client/bride_look_09.webp',
    title: 'Glass-Skin Reception Suite — Look I',
    desc: 'High-definition Temptu airbrush finish with champagne shimmer lids.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_10.webp',
    title: 'Glass-Skin Reception Suite — Look II',
    desc: '3D luxury lashes, nude velvet pout, and hollywood wave styling.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_11.webp',
    title: 'Glass-Skin Reception Suite — Look III',
    desc: 'Sculpted cheekbone contouring with soft rose glow.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_12.webp',
    title: 'Glass-Skin Reception Suite — Look IV',
    desc: 'Evening reception sparkle with lightweight transfer-proof base.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_13.webp',
    title: 'Glass-Skin Reception Suite — Look V',
    desc: 'Editorial portrait highlight captured under stage spotlights.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_14.webp',
    title: 'Glass-Skin Reception Suite — Look VI',
    desc: 'Statement lip and sleek hair architecture for evening elegance.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_15.webp',
    title: 'Glass-Skin Reception Suite — Look VII',
    desc: 'Close-up texture check — seamless airbrush skin realism.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_16.webp',
    title: 'Glass-Skin Reception Suite — Look VIII',
    desc: 'Sophisticated reception drape and jewelry integration.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },

  // ── BRIDE SUITE III: Pastel Organza & Soft Glam Engagement ──
  {
    url: '/images/portfolio/client/bride_look_17.webp',
    title: 'Pastel Engagement Suite — Look I',
    desc: 'Pastel organza saree, soft peach cheek wash, and feathered brow artistry.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_18.webp',
    title: 'Pastel Engagement Suite — Look II',
    desc: 'Romantic floral updo with individual lash clusters for natural eyes.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_19.webp',
    title: 'Pastel Engagement Suite — Look III',
    desc: 'Nichayathartham soft glam — ethereal, light-reflecting finish.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_20.webp',
    title: 'Pastel Engagement Suite — Look IV',
    desc: 'Monochromatic blush tones paired with delicate pearl choker.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_21.webp',
    title: 'Pastel Engagement Suite — Look V',
    desc: 'Minimalist skin enhancement for daytime engagement rituals.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_22.webp',
    title: 'Pastel Engagement Suite — Look VI',
    desc: 'Fresh floral hair setting with soft wave framing.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_23.webp',
    title: 'Pastel Engagement Suite — Look VII',
    desc: 'Featherlight base designed for outdoor daytime lighting.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_24.webp',
    title: 'Pastel Engagement Suite — Look VIII',
    desc: 'Complete engagement drape reveal.',
    category: 'Engagement & Pastel',
    focalPosition: 'center center',
  },

  // ── BRIDE SUITE IV: Kanjeevaram Gold & Royal Muhurtham ──
  {
    url: '/images/portfolio/client/bride_look_25.webp',
    title: 'Golden Royal Muhurtham Suite — Look I',
    desc: 'Golden brocade Kanjeevaram silk, earthy eye palette, and antique gold ornaments.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_26.webp',
    title: 'Golden Royal Muhurtham Suite — Look II',
    desc: 'Traditional Tamil bride profile featuring fresh rose and jasmine poola jada.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_27.webp',
    title: 'Golden Royal Muhurtham Suite — Look III',
    desc: 'Sweat-resistant, long-wear base formulated for morning mandap rituals.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_28.webp',
    title: 'Golden Royal Muhurtham Suite — Look IV',
    desc: 'Detailed view of eye makeup and intricate tilakam.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_29.webp',
    title: 'Golden Royal Muhurtham Suite — Look V',
    desc: 'Heritage South Indian bridal elegance in rich gold tones.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_30.webp',
    title: 'Golden Royal Muhurtham Suite — Look VI',
    desc: 'Natural skin texture under morning sunlight.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_31.webp',
    title: 'Golden Royal Muhurtham Suite — Look VII',
    desc: 'Sculpted cheek structure with warm bronzed highlight.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_32.webp',
    title: 'Golden Royal Muhurtham Suite — Look VIII',
    desc: 'Mandap-ready bridal portrait.',
    category: 'Muhurtham & Silk',
    focalPosition: 'center center',
  },

  // ── BRIDE SUITE V: Contemporary Glamour & Night Reception ──
  {
    url: '/images/portfolio/client/bride_look_33.webp',
    title: 'Contemporary Glamour Suite — Look I',
    desc: 'Modern evening glam — bold crimson lip, metallic lid wash, and structured hair.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_34.webp',
    title: 'Contemporary Glamour Suite — Look II',
    desc: 'Glass-skin reflection with defined liner and fluttery lashes.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_35.webp',
    title: 'Contemporary Glamour Suite — Look III',
    desc: 'High-fashion bridal pose highlighting jewelry and saree pleating.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_36.webp',
    title: 'Contemporary Glamour Suite — Look IV',
    desc: 'Radiant complexion with subtle champagne highlights.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_37.webp',
    title: 'Contemporary Glamour Suite — Look V',
    desc: 'Soft-focus camera finish for stage photography.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_38.webp',
    title: 'Contemporary Glamour Suite — Look VI',
    desc: 'Intricate hair styling with crystal hairpins.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_39.webp',
    title: 'Contemporary Glamour Suite — Look VII',
    desc: 'Polished evening transformation.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_40.webp',
    title: 'Contemporary Glamour Suite — Look VIII',
    desc: 'Full-length reception gown & drape pairing.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_41.webp',
    title: 'Contemporary Glamour Suite — Look IX',
    desc: 'Close-up look detailing skin glow and lip contour.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/client/bride_look_42.webp',
    title: 'Contemporary Glamour Suite — Look X',
    desc: 'Final atelier portrait.',
    category: 'Reception & Glam',
    focalPosition: 'center center',
  },

  // ── BRIDE SUITE VI: Live Atelier Transformation Reels (Video Reels) ──
  {
    url: '/images/portfolio/reels/reel_01.mp4',
    title: 'Reel I — Live Airbrush Skin Transformation',
    desc: 'Real-time transformation reel showing airbrush complexion application and saree draping.',
    category: 'Bridal Stories',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/reels/reel_02.mp4',
    title: 'Reel II — 4AM Marriage Preparation',
    desc: 'Behind the scenes at the atelier — morning poola jada weaving and traditional bridal reveal.',
    category: 'Bridal Stories',
    focalPosition: 'center center',
  },
  {
    url: '/images/portfolio/reels/reel_03.mp4',
    title: 'Reel III — Reception Glamour & Hair Architecture',
    desc: 'Step-by-step evening reception styling — Hollywood waves and glass-skin glow.',
    category: 'Bridal Stories',
    focalPosition: 'center center',
  },
]

export default function PortfolioPage() {
  return (
    <PageTransition className="flex flex-col min-h-screen bg-[#181514] text-[var(--color-text)]">
      {/* ── Hero Banner (Live Mobile on <768px, Cinematic Cover on >=768px) ── */}
      {/* Mobile Live Animated Header */}
      <section className="block md:hidden w-full pt-20 pb-4 px-3 bg-[#181514]">
        <LivePortfolioHeader>
          <div className="flex flex-col items-center justify-center text-center space-y-4 pt-12 pb-8 h-full">
            <span className="font-sans text-[11px] min-[390px]:text-xs uppercase tracking-[3.5px] text-[var(--color-accent)] font-bold block drop-shadow-sm">
              Traditional Marriage &amp; Artistry
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
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[3.5px] text-[var(--color-accent)] font-bold block drop-shadow-sm">
          Traditional Marriage &amp; Artistry
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
