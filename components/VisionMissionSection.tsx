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
  visionText = 'At Mugashra Artistry, we envision a world where every bride feels radiantly confident, embodying timeless elegance on one of the most cherished days of her life. Our vision is to be the premier destination for bridal styling services, where each stroke of our artistry enhances natural beauty and creates lasting memories.',
  missionTitle = 'MISSION',
  missionText = "Our mission at Mugashra Artistry is to curate unparalleled bridal experiences through the art of makeup. We are dedicated to providing exceptional, personalized services that capture the essence of each bride's individual style and personality. With a commitment to creativity, precision, and a touch of magic, we strive to make every bride feel authentically herself as she walks down the aisle.",
}: VisionMissionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 sm:px-12 max-w-[1300px] mx-auto overflow-hidden"
    >
      {/* Background Animated Rotating Diamond Line-Art Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.045] -z-10">
        <svg
          className="w-[850px] h-[850px] text-[#222222] animate-watermark-spin transition-opacity duration-1000"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        >
          <polygon points="50,5 95,35 75,90 25,90 5,35" />
          <polygon points="50,5 25,35 50,90 75,35" />
          <line x1="5" y1="35" x2="95" y2="35" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: { VISION } */}
        <div
          className={`group space-y-6 text-left relative pl-6 sm:pl-8 border-l-2 border-[#B58A69]/30 hover:border-[#B58A69] transition-all duration-700 hover:translate-y-[-6px] hover:shadow-[0_10px_30px_rgba(181,138,105,0.08)] bg-transparent p-4 rounded-r-lg ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl sm:text-6xl text-[#B58A69] font-light inline-block group-hover:scale-125 group-hover:-translate-x-2 transition-all duration-500 animate-bracket-pulse">
              {`{`}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.2em] uppercase text-[#B58A69] font-normal group-hover:text-[#9B7050] transition-colors duration-300">
              {visionTitle}
            </h2>
            <span className="font-serif text-4xl sm:text-6xl text-[#B58A69] font-light inline-block group-hover:scale-125 group-hover:translate-x-2 transition-all duration-500 animate-bracket-pulse">
              {`}`}
            </span>
          </div>

          <p className="font-serif text-sm sm:text-base text-[#222222]/85 leading-[1.85] font-light group-hover:text-[#222222] transition-colors duration-300">
            {visionText}
          </p>

          <div className="w-0 group-hover:w-20 h-[1.5px] bg-[#B58A69] transition-all duration-500" />
        </div>

        {/* Right: { MISSION } */}
        <div
          className={`group space-y-6 text-left relative pl-6 sm:pl-8 border-l-2 border-[#B58A69]/30 hover:border-[#B58A69] transition-all duration-700 hover:translate-y-[-6px] hover:shadow-[0_10px_30px_rgba(181,138,105,0.08)] bg-transparent p-4 rounded-r-lg ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl sm:text-6xl text-[#B58A69] font-light inline-block group-hover:scale-125 group-hover:-translate-x-2 transition-all duration-500 animate-bracket-pulse">
              {`{`}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.2em] uppercase text-[#B58A69] font-normal group-hover:text-[#9B7050] transition-colors duration-300">
              {missionTitle}
            </h2>
            <span className="font-serif text-4xl sm:text-6xl text-[#B58A69] font-light inline-block group-hover:scale-125 group-hover:translate-x-2 transition-all duration-500 animate-bracket-pulse">
              {`}`}
            </span>
          </div>

          <p className="font-serif text-sm sm:text-base text-[#222222]/85 leading-[1.85] font-light group-hover:text-[#222222] transition-colors duration-300">
            {missionText}
          </p>

          <div className="w-0 group-hover:w-20 h-[1.5px] bg-[#B58A69] transition-all duration-500" />
        </div>
      </div>
    </section>
  )
}
