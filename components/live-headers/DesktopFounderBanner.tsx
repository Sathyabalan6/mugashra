'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface DesktopFounderBannerProps {
  heroImage: string
  children: React.ReactNode
}

export function DesktopFounderBanner({ heroImage, children }: DesktopFounderBannerProps) {
  const containerRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

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

    // 2. Atelier Fragrance Mist & Soft Rose Petal System
    interface AtelierParticle {
      isMist: boolean
      x: number
      y: number
      size: number
      vx: number
      vy: number
      rotX: number
      rotY: number
      rotZ: number
      rotSpeedX: number
      rotSpeedY: number
      rotSpeedZ: number
      osc: number
      oscSpeed: number
      color: { r: number; g: number; b: number }
      alpha: number
    }

    const particles: AtelierParticle[] = []
    const TOTAL_PARTICLES = 32

    const petalPalettes = [
      { r: 247, g: 143, b: 167 }, // Rose Pink
      { r: 251, g: 191, b: 206 }, // Soft Blush
      { r: 232, g: 90, b: 125 },  // Vibrant Cherry
      { r: 255, g: 230, b: 235 }, // White Rose Tint
      { r: 243, g: 172, b: 140 }, // Warm Peach
    ]

    function createParticle(randomY = false): AtelierParticle {
      const isMist = Math.random() > 0.45
      const color = isMist
        ? { r: 255, g: 220, b: 230 }
        : petalPalettes[Math.floor(Math.random() * petalPalettes.length)]

      return {
        isMist,
        x: Math.random() * (width || 1400),
        y: randomY ? Math.random() * (height || 800) : -30 - Math.random() * 50,
        size: isMist ? 12 + Math.random() * 22 : 7 + Math.random() * 8,
        vx: 0.2 + Math.random() * 0.45,
        vy: isMist ? 0.25 + Math.random() * 0.4 : 0.5 + Math.random() * 0.7,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.018,
        rotSpeedZ: (Math.random() - 0.5) * 0.015,
        osc: Math.random() * Math.PI * 2,
        oscSpeed: 0.01 + Math.random() * 0.018,
        color,
        alpha: isMist ? 0.06 + Math.random() * 0.12 : 0.65 + Math.random() * 0.35,
      }
    }

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      particles.push(createParticle(true))
    }

    // 3. Render Loop
    let time = 0
    function renderFlow() {
      if (!ctx || !isVisible) return
      ctx.clearRect(0, 0, width, height)

      time += 0.006
      const ambientSway = Math.sin(time) * 0.4

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.osc += p.oscSpeed
        p.x += p.vx + ambientSway + Math.sin(p.osc) * 0.45
        p.y += p.vy
        p.rotX += p.rotSpeedX
        p.rotY += p.rotSpeedY
        p.rotZ += p.rotSpeedZ

        ctx.save()
        ctx.translate(p.x, p.y)

        if (p.isMist) {
          // Translucent Fragrance Mist
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2.5)
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 1.2})`)
          grad.addColorStop(0.5, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.5})`)
          grad.addColorStop(1, 'transparent')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(0, 0, p.size * 2.5, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Soft Watercolor Petal
          ctx.rotate(p.rotZ)
          const scaleX = Math.cos(p.rotX)
          const scaleY = Math.sin(p.rotY)
          ctx.scale(Math.max(0.18, Math.abs(scaleX)), Math.max(0.25, Math.abs(scaleY)))

          ctx.beginPath()
          ctx.moveTo(0, -p.size)
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.4, p.size * 0.7, p.size * 0.6, 0, p.size)
          ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.6, -p.size * 0.8, -p.size * 0.4, 0, -p.size)

          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size)
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.9})`)
          grad.addColorStop(1, `rgba(255, 240, 245, ${p.alpha * 0.6})`)
          ctx.fillStyle = grad
          ctx.shadowColor = 'rgba(0, 0, 0, 0.18)'
          ctx.shadowBlur = 5
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
      {/* 1. Cinematic Background Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroImage}
          alt="Lead Master Artist at Work"
          fill
          priority
          loading="eager"
          sizes="(min-width: 769px) 100vw, 1px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/85 pointer-events-none" />
      </div>

      {/* 2. Panoramic Fragrance Mist & Watercolor Petal Canvas */}
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
