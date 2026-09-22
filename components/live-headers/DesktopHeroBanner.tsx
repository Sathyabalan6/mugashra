'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface DesktopHeroBannerProps {
  heroImage: string
  children: React.ReactNode
}

export function DesktopHeroBanner({ heroImage, children }: DesktopHeroBannerProps) {
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

    // 1. Full-width Retina Canvas Resizing
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

    // 2. Widescreen Madurai Malli (Jasmine) & Velvet Rose Petal Flow
    interface FloraParticle {
      type: 'jasmine' | 'rose' | 'pollen'
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
      alpha: number
      color: { r: number; g: number; b: number }
    }

    const particles: FloraParticle[] = []
    const TOTAL_FLORA = 32

    const roseColors = [
      { r: 185, g: 35, b: 55 },   // Royal Crimson Rose
      { r: 215, g: 70, b: 95 },   // Deep Blush
      { r: 245, g: 145, b: 165 }, // Soft Pink Velvet
      { r: 160, g: 25, b: 45 },   // Rich Maroon Velvet
    ]

    function createFlora(randomY = false): FloraParticle {
      const rand = Math.random()
      let type: 'jasmine' | 'rose' | 'pollen' = 'rose'
      if (rand < 0.48) type = 'jasmine'
      else if (rand > 0.88) type = 'pollen'

      const isJasmine = type === 'jasmine'
      const isPollen = type === 'pollen'
      const color = isJasmine
        ? { r: 255, g: 252, b: 242 }
        : isPollen
        ? { r: 245, g: 215, b: 140 }
        : roseColors[Math.floor(Math.random() * roseColors.length)]

      return {
        type,
        x: Math.random() * (width || 1400),
        y: randomY ? Math.random() * (height || 900) : -30 - Math.random() * 60,
        size: isPollen
          ? 1.5 + Math.random() * 1.8
          : isJasmine
          ? 6 + Math.random() * 5.5
          : 8.5 + Math.random() * 8.5,
        vx: 0.35 + Math.random() * 0.6,
        vy: isPollen ? 0.3 + Math.random() * 0.4 : 0.55 + Math.random() * 0.75,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.025,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        rotSpeedZ: (Math.random() - 0.5) * 0.018,
        osc: Math.random() * Math.PI * 2,
        oscSpeed: 0.012 + Math.random() * 0.018,
        alpha: isPollen ? 0.25 + Math.random() * 0.4 : 0.65 + Math.random() * 0.35,
        color,
      }
    }

    for (let i = 0; i < TOTAL_FLORA; i++) {
      particles.push(createFlora(true))
    }

    // 3. Classical Widescreen Render Loop
    let windTime = 0
    function renderFlow() {
      if (!ctx || !isVisible) return
      ctx.clearRect(0, 0, width, height)

      windTime += 0.006
      const ambientBreeze = Math.sin(windTime) * 0.5

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.osc += p.oscSpeed
        p.x += p.vx + ambientBreeze + Math.sin(p.osc) * 0.6
        p.y += p.vy
        p.rotX += p.rotSpeedX
        p.rotY += p.rotSpeedY
        p.rotZ += p.rotSpeedZ

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotZ)

        if (p.type === 'jasmine') {
          // Authentic Madurai Malli Bud
          const scaleX = Math.cos(p.rotX)
          const scaleY = Math.sin(p.rotY)
          ctx.scale(Math.max(0.2, Math.abs(scaleX)), Math.max(0.3, Math.abs(scaleY)))

          ctx.shadowColor = 'rgba(0, 0, 0, 0.28)'
          ctx.shadowBlur = 6
          ctx.shadowOffsetY = 3

          ctx.beginPath()
          ctx.ellipse(0, 0, p.size * 0.48, p.size, 0, 0, Math.PI * 2)
          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size)
          grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`)
          grad.addColorStop(0.65, `rgba(252, 248, 235, ${p.alpha * 0.95})`)
          grad.addColorStop(1, `rgba(235, 225, 195, ${p.alpha * 0.85})`)
          ctx.fillStyle = grad
          ctx.fill()

          // Green calyx/sepal at bud base
          ctx.beginPath()
          ctx.moveTo(-p.size * 0.25, p.size * 0.7)
          ctx.lineTo(0, p.size * 1.15)
          ctx.lineTo(p.size * 0.25, p.size * 0.7)
          ctx.closePath()
          ctx.fillStyle = `rgba(135, 160, 95, ${p.alpha * 0.9})`
          ctx.fill()
        } else if (p.type === 'rose') {
          // Velvet Rose Petal
          const scaleX = Math.cos(p.rotX)
          const scaleY = Math.sin(p.rotY)
          ctx.scale(Math.max(0.15, Math.abs(scaleX)), Math.max(0.25, Math.abs(scaleY)))

          ctx.shadowColor = 'rgba(0, 0, 0, 0.22)'
          ctx.shadowBlur = 6
          ctx.shadowOffsetY = 3

          ctx.beginPath()
          ctx.moveTo(0, -p.size)
          ctx.bezierCurveTo(p.size * 0.85, -p.size * 0.4, p.size * 0.75, p.size * 0.7, 0, p.size)
          ctx.bezierCurveTo(-p.size * 0.75, p.size * 0.7, -p.size * 0.85, -p.size * 0.4, 0, -p.size)

          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size)
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.95})`)
          grad.addColorStop(1, `rgba(${Math.min(255, p.color.r + 50)}, ${Math.min(255, p.color.g + 40)}, ${Math.min(255, p.color.b + 40)}, ${p.alpha * 0.65})`)
          ctx.fillStyle = grad
          ctx.fill()
        } else {
          // Ambient Golden Pollen dust
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`
          ctx.shadowColor = `rgba(255, 215, 120, ${p.alpha * 0.7})`
          ctx.shadowBlur = 5
          ctx.fill()
        }

        ctx.restore()

        if (p.y > height + 40 || p.x > width + 50) {
          particles[i] = createFlora(false)
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

    // 5. Natural Air Currents on Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      for (let j = 0; j < particles.length; j++) {
        const p = particles[j]
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          p.vx += (dx / dist) * 0.75
          p.vy -= 0.5
          p.rotSpeedX += (Math.random() - 0.5) * 0.025
        }
      }
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearTimeout(startDelayId)
      window.removeEventListener('resize', resizeCanvas)
      container.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="hidden md:flex relative min-h-screen w-full items-center justify-start px-12 lg:px-16 pt-24 pb-16 bg-[#181514] overflow-hidden"
    >
      <style jsx>{`
        .desktop-bride {
          will-change: transform;
          animation: desktopBreathe 14s ease-in-out infinite alternate;
        }
        @keyframes desktopBreathe {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.02) translateY(-4px);
          }
        }
      `}</style>

      {/* 1. Cinematic Background Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={heroImage}
            alt="Mugaashra Bridal Studio Visual"
            fill
            priority
            loading="eager"
            sizes="(min-width: 769px) 100vw, 1px"
            className="desktop-bride object-cover object-[right_center]"
          />
          {/* Swinging Brass Temple Bells */}
          <div
            className="absolute top-0 right-0 w-[14vw] aspect-[270/260] pointer-events-none"
            style={{
              transformOrigin: '50% 6%',
              animationName: 'bell-swing',
              animationDuration: '3.2s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          >
            <Image
              src="/images/bells-overlay.png"
              aria-hidden="true"
              alt=""
              fill
              priority
              loading="eager"
              sizes="14vw"
              className="object-contain"
            />
          </div>
        </div>
        {/* Scrim Gradient for Text Legibility on the Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* 2. Panoramic Madurai Malli & Rose Petal Drift Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
      />

      {/* 3. Typography & CTA Content Slot */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex items-center pointer-events-auto">
        {children}
      </div>
    </section>
  )
}
