'use client'

import React from 'react'

interface VisionMissionProps {
  visionTitle?: string
  visionText?: string
  missionTitle?: string
  missionText?: string
}

export function VisionMissionSection({
  visionTitle = 'VISION',
  visionText = 'At Mugashra Artistry, we envision a world where every bride feels radiantly confident, embodying timeless elegance on one of the most cherished days of her life. Our vision is to be the premier destination for bridal styling services, where each stroke of our artistry enhances natural beauty and creates lasting memories.',
  missionTitle = 'MISSION',
  missionText = "Our mission at Mugashra Artistry is to curate unparalleled bridal experiences through the art of makeup. We are dedicated to providing exceptional, personalized services that capture the essence of each bride's individual style and personality. With a commitment to creativity, precision, and a touch of magic, we strive to make every bride feel authentically herself as she walks down the aisle.",
}: VisionMissionProps) {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-12 max-w-[1300px] mx-auto border-t border-[var(--color-border)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Vision */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="font-eyebrow block">Our Vision</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
              {visionTitle}
            </h2>
          </div>

          <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)] leading-[1.85] font-light">
            {visionText}
          </p>

          <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
        </div>

        {/* Right: Mission */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="font-eyebrow block">Our Mission</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-[var(--color-text)] font-normal">
              {missionTitle}
            </h2>
          </div>

          <p className="font-serif text-sm sm:text-base text-[var(--color-text-body)] leading-[1.85] font-light">
            {missionText}
          </p>

          <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
        </div>
      </div>
    </section>
  )
}
