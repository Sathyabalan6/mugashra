'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface DesktopPortfolioBannerProps {
  heroImage: string
  children: React.ReactNode
}

export function DesktopPortfolioBanner({ heroImage, children }: DesktopPortfolioBannerProps) {
  const containerRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number | null = null
    let isVisible = true
    let width = 0
    let height = 0

    // 1. Retina Canvas Resizing
    function resizeCanvas() {
      if (!container || !canvas || !ctx) return
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 2. Temple Courtyard Floral Breeze (Marigold, Jasmine & Golden Pollen)
    interface TempleParticle {
      type: 'marigold' | 'jasmine' | 'saffron' | 'pollen'
      x: number
      y: number
      size: number
      vx: number
      vy: number
      angle: number
      angularSpeed: number
      osc: number
      oscSpeed: number
      color: { r: number; g: number; b: number }
      alpha: number
    }

    const particles: TempleParticle[] = []
    const TOTAL_PARTICLES = 30

    const marigoldColors = [
      { r: 255, g: 155, b: 15 },
      { r: 255, g: 195, b: 25 },
      { r: 235, g: 90, b: 20 },
    ]

    function createParticle(randomY = false): TempleParticle {
      const rand = Math.random()
      let type: 'marigold' | 'jasmine' | 'saffron' | 'pollen' = 'marigold'
      if (rand < 0.42) type = 'marigold'
      else if (rand < 0.72) type = 'jasmine'
      else if (rand < 0.88) type = 'saffron'
      else type = 'pollen'

      const color =
        type === 'jasmine'
          ? { r: 255, g: 252, b: 242 }
          : type === 'pollen'
          ? { r: 255, g: 225, b: 120 }
          : marigoldColors[Math.floor(Math.random() * marigoldColors.length)]

      return {
        type,
        x: Math.random() * (width || 1400),
        y: randomY ? Math.random() * (height || 800) : -30 - Math.random() * 50,
        size:
          type === 'pollen'
            ? 1.5 + Math.random() * 1.8
            : type === 'jasmine'
            ? 5.5 + Math.random() * 4.5
            : 7.5 + Math.random() * 7.5,
        vx: 0.25 + Math.random() * 0.5,
        vy: type === 'pollen' ? 0.35 + Math.random() * 0.4 : 0.6 + Math.random() * 0.75,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.025,
        osc: Math.random() * Math.PI * 2,
        oscSpeed: 0.012 + Math.random() * 0.018,
        color,
        alpha: type === 'pollen' ? 0.25 + Math.random() * 0.4 : 0.7 + Math.random() * 0.3,
      }
    }

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      particles.push(createParticle(true))
    }

    // 3. Render Loop
    let windTime = 0
    function renderFlow() {
      if (!ctx || !isVisible) return
      ctx.clearRect(0, 0, width, height)

      windTime += 0.006
      const ambientBreeze = Math.sin(windTime) * 0.45

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.osc += p.oscSpeed
        p.x += p.vx + ambientBreeze + Math.sin(p.osc) * 0.5
        p.y += p.vy
        p.angle += p.angularSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)

        if (p.type === 'marigold') {
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size * 0.52, p.size, 0, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`
          ctx.shadowColor = 'rgba(0, 0, 0, 0.22)'
          ctx.shadowBlur = 5
          ctx.fill()
        } else if (p.type === 'jasmine') {
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size * 0.48, p.size, 0, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 252, 242, ${p.alpha})`
          ctx.shadowColor = 'rgba(0, 0, 0, 0.25)'
          ctx.shadowBlur = 5
          ctx.fill()

          ctx.beginPath()
          ctx.moveTo(-p.size * 0.25, p.size * 0.7)
          ctx.lineTo(0, p.size * 1.1)
          ctx.lineTo(p.size * 0.25, p.size * 0.7)
          ctx.closePath()
          ctx.fillStyle = `rgba(135, 160, 95, ${p.alpha * 0.9})`
          ctx.fill()
        } else if (p.type === 'saffron') {
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size * 0.3, p.size * 1.1, 0.3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(235, 80, 20, ${p.alpha})`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 220, 110, ${p.alpha})`
          ctx.shadowColor = 'rgba(255, 200, 50, 0.6)'
          ctx.shadowBlur = 4
          ctx.fill()
        }

        ctx.restore()

        if (p.y > height + 35 || p.x > width + 40) {
          particles[i] = createParticle(false)
        }
      }

      animId = requestAnimationFrame(renderFlow)
    }

    // 4. IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true
              animId = requestAnimationFrame(renderFlow)
            }
          } else {
            isVisible = false
            if (animId) cancelAnimationFrame(animId)
          }
        })
      },
      { threshold: 0.05 }
    )

    observer.observe(container)
    const startDelayId = setTimeout(() => {
      animId = requestAnimationFrame(renderFlow)
    }, 150)

    return () => {
      clearTimeout(startDelayId)
      window.removeEventListener('resize', resizeCanvas)
      observer.disconnect()
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="hidden md:flex relative w-full min-h-[60vh] sm:min-h-[75vh] items-center justify-center px-8 sm:px-16 pt-24 bg-[#181514] overflow-hidden"
    >
      <style jsx>{`
        .mandap-widescreen {
          will-change: transform;
          animation: mandapBreathe 12s ease-in-out infinite alternate;
        }
        @keyframes mandapBreathe {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.02) translateY(-3px);
          }
        }
      `}</style>

      {/* 1. Cinematic Background Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroImage}
          alt="South Indian Bridal Mandap Artistry"
          fill
          sizes="(min-width: 769px) 100vw, 1px"
          className="mandap-widescreen object-cover object-center"
        />
        {/* Soft Golden Sunlight Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/75 pointer-events-none" />
      </div>

      {/* 2. Panoramic Marigold & Jasmine Drift Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
      />

      {/* 3. Typography Slot */}
      <div className="relative z-10 max-w-xl text-center space-y-4 pointer-events-auto">
        {children}
      </div>
    </section>
  )
}
