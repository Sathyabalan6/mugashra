'use client'

import React, { useEffect, useRef, useState } from 'react'

interface VisionMissionProps {
  visionTitle?: string
  visionText?: string
  missionTitle?: string
  missionText?: string
}

export function VisionMissionSection({
  visionTitle = 'VISION',
  visionText = 'At Mugaashra Bridal Studio, we honor the sacred heritage of South Indian wedding traditions while setting the benchmark for high-definition airbrush artistry. Our vision is to ensure every bride steps onto her mandap or reception stage with luminous skin realism, effortless confidence, and heirloom elegance that endures for generations.',
  missionTitle = 'MISSION',
  missionText = "Led by Master Artist Shwetha Mohan, our mission is to curate bespoke, single-bride ceremonial experiences. Through precision skin preparation, heat-resistant formulations, and architectural saree & floral draping, we celebrate each bride's individuality with uncompromised artistry and personal devotion.",
}: VisionMissionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto border-t border-[var(--color-border)] overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* Left: Vision */}
        <div
          className={`flex flex-col justify-between h-full space-y-6 text-left transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="font-eyebrow block">Our Vision</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                {visionTitle}
              </h2>
            </div>

            <p className="font-serif text-base sm:text-lg lg:text-xl text-[var(--color-text-body)] leading-[1.85] font-light">
              {visionText}
            </p>
          </div>

          <div className="pt-2">
            <div className="w-12 h-[1.5px] bg-[var(--color-accent)]" />
          </div>
        </div>

        {/* Right: Mission */}
        <div
          className={`flex flex-col justify-between h-full space-y-6 text-left transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="font-eyebrow block">Our Mission</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
                {missionTitle}
              </h2>
            </div>

            <p className="font-serif text-base sm:text-lg lg:text-xl text-[var(--color-text-body)] leading-[1.85] font-light">
              {missionText}
            </p>
          </div>

          <div className="pt-2">
            <div className="w-12 h-[1.5px] bg-[var(--color-accent)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
