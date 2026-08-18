'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Testimonial {
  clientName: string
  quote: string
}

export function FeedbackSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 px-6 sm:px-10 bg-[#FFFFFF] border-t border-[#222222]/10 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto space-y-20">
        {/* Centered Grand Gold Serif Title with Shimmer and Tracking Expansion */}
        <div className="text-center space-y-3 group cursor-default">
          <div className="inline-block relative">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-[0.25em] group-hover:tracking-[0.32em] uppercase text-[#B58A69] font-normal transition-all duration-700 select-none">
              F E E D B A C K
            </h2>
            <div className="w-12 group-hover:w-full h-[1.5px] bg-[#B58A69]/40 mx-auto mt-2 transition-all duration-700" />
          </div>
          <p className="caption-text text-xs text-[#222222]/50 tracking-widest uppercase font-sans">
            Unfiltered words of love & praise from our South Indian brides
          </p>
        </div>

        {/* Staggered Speech Bubbles Grid with Scroll Reveals & Floating Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Column 1 */}
          <div className="space-y-12">
            {testimonials.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className={`group space-y-3 cursor-default transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${idx * 180}ms` }}
              >
                <div className="relative bg-[#ECEBE7] group-hover:bg-[#E5E3DD] p-8 sm:p-10 rounded-2xl rounded-bl-none shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2.5 text-left border border-transparent group-hover:border-[#B58A69]/40">
                  <span className="text-3xl font-serif text-[#B58A69] opacity-35 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 block mb-2 leading-none">
                    “
                  </span>
                  <p className="font-serif text-sm sm:text-[15px] text-[#222222]/90 leading-[1.8] font-light">
                    {item.quote}
                  </p>
                  {/* Tail indicator */}
                  <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#ECEBE7] group-hover:border-t-[#E5E3DD] border-r-[12px] border-r-transparent transition-colors duration-500" />
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[2.5px] text-[#222222] group-hover:text-[#B58A69] font-semibold text-right pt-2 pr-2 transition-colors duration-300">
                  {item.clientName}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-12 md:pt-12">
            {testimonials.slice(3, 6).map((item, idx) => (
              <div
                key={idx}
                className={`group space-y-3 cursor-default transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${(idx + 3) * 180}ms` }}
              >
                <div className="relative bg-[#ECEBE7] group-hover:bg-[#E5E3DD] p-8 sm:p-10 rounded-2xl rounded-br-none shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2.5 text-left border border-transparent group-hover:border-[#B58A69]/40">
                  <span className="text-3xl font-serif text-[#B58A69] opacity-35 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 block mb-2 leading-none">
                    “
                  </span>
                  <p className="font-serif text-sm sm:text-[15px] text-[#222222]/90 leading-[1.8] font-light">
                    {item.quote}
                  </p>
                  {/* Tail indicator */}
                  <div className="absolute -bottom-3 right-6 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#ECEBE7] group-hover:border-t-[#E5E3DD] border-r-[12px] border-r-transparent transition-colors duration-500" />
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[2.5px] text-[#222222] group-hover:text-[#B58A69] font-semibold text-left pt-2 pl-2 transition-colors duration-300">
                  {item.clientName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
