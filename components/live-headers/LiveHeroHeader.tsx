'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface LiveHeroHeaderProps {
  children?: React.ReactNode
}

export function LiveHeroHeader({ children }: LiveHeroHeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const header = headerRef.current
    const canvas = canvasRef.current
    if (!header || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let animId: number | null = null
    let isVisible = true
    let width = 0
    let height = 0

    // 1. Retina-aware Canvas Resizing
    function resizeCanvas() {
      if (!header || !canvas || !ctx) return
      const rect = header.getBoundingClientRect()
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

    // 2. Authentic Madurai Malli (Jasmine) & Velvet Rose Petal System
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
    const TOTAL_FLORA = 22

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
        x: Math.random() * (width || 380),
        y: randomY ? Math.random() * (height || 680) : -30 - Math.random() * 50,
        size: isPollen
          ? 1.2 + Math.random() * 1.5
          : isJasmine
          ? 5.5 + Math.random() * 4.5
          : 7.5 + Math.random() * 7.0,
        vx: 0.2 + Math.random() * 0.5,
        vy: isPollen ? 0.3 + Math.random() * 0.4 : 0.6 + Math.random() * 0.8,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.03,
        rotSpeedY: (Math.random() - 0.5) * 0.025,
        rotSpeedZ: (Math.random() - 0.5) * 0.02,
        osc: Math.random() * Math.PI * 2,
        oscSpeed: 0.015 + Math.random() * 0.02,
        alpha: isPollen ? 0.3 + Math.random() * 0.4 : 0.65 + Math.random() * 0.35,
        color,
      }
    }

    for (let i = 0; i < TOTAL_FLORA; i++) {
      particles.push(createFlora(true))
    }

    // 3. Render Loop: Classical Organic Drift
    let windTime = 0
    function renderDrift() {
      if (!ctx || !isVisible) return
      ctx.clearRect(0, 0, width, height)

      windTime += 0.008
      const ambientBreeze = Math.sin(windTime) * 0.45

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.osc += p.oscSpeed
        p.x += p.vx + ambientBreeze + Math.sin(p.osc) * 0.5
        p.y += p.vy
        p.rotX += p.rotSpeedX
        p.rotY += p.rotSpeedY
        p.rotZ += p.rotSpeedZ

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotZ)

        if (p.type === 'jasmine') {
          // Madurai Malli (Creamy-white bud with tiny green sepal)
          const scaleX = Math.cos(p.rotX)
          const scaleY = Math.sin(p.rotY)
          ctx.scale(Math.max(0.2, Math.abs(scaleX)), Math.max(0.3, Math.abs(scaleY)))

          // Soft ambient drop shadow
          ctx.shadowColor = 'rgba(0, 0, 0, 0.25)'
          ctx.shadowBlur = 4
          ctx.shadowOffsetY = 2

          // Bud body (Ivory / Pristine white)
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

          ctx.shadowColor = 'rgba(0, 0, 0, 0.2)'
          ctx.shadowBlur = 5
          ctx.shadowOffsetY = 2

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
          ctx.shadowBlur = 4
          ctx.fill()
        }

        ctx.restore()

        // Wrap around viewport edges
        if (p.y > height + 35 || p.x > width + 40) {
          particles[i] = createFlora(false)
        }
      }

      animId = requestAnimationFrame(renderDrift)
    }

    // 4. Battery-saving IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true
              animId = requestAnimationFrame(renderDrift)
            }
          } else {
            isVisible = false
            if (animId) cancelAnimationFrame(animId)
          }
        })
      },
      { threshold: 0.05 }
    )

    observer.observe(header)
    const startDelayId = setTimeout(() => {
      animId = requestAnimationFrame(renderDrift)
    }, 150)

    // 5. Gentle Breeze on Pointer Drag (Natural atmospheric air displacement)
    const handlePointerMove = (e: PointerEvent) => {
      const rect = header.getBoundingClientRect()
      const touchX = e.clientX - rect.left
      const touchY = e.clientY - rect.top

      // Gently stir nearby petals with realistic air momentum
      for (let j = 0; j < particles.length; j++) {
        const p = particles[j]
        const dx = p.x - touchX
        const dy = p.y - touchY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 75) {
          const safeDist = Math.max(dist, 0.001)
          p.vx += (dx / safeDist) * 0.6
          p.vy -= 0.4
          p.rotSpeedX += (Math.random() - 0.5) * 0.03
        }
      }
    }

    header.addEventListener('pointermove', handlePointerMove)

    return () => {
      clearTimeout(startDelayId)
      window.removeEventListener('resize', resizeCanvas)
      header.removeEventListener('pointermove', handlePointerMove)
      observer.disconnect()
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="relative w-full max-w-[480px] mx-auto overflow-hidden rounded-xs border border-white/10 shadow-2xl bg-[#3b4d53] aspect-[768/1366]">
      <header
        ref={headerRef}
        id="live-hero-header"
        className="relative w-full h-full select-none overflow-hidden touch-pan-y"
      >
        <style jsx>{`
          .bride-bg {
            will-change: transform;
            animation: brideBreathe 12s ease-in-out infinite alternate;
          }
          @keyframes brideBreathe {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.025) translateY(-3px);
            }
          }
        `}</style>

        {/* 1. Pristine Full-Resolution Portrait with Gentle Breathe */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Image
            src="/images/hero-bride-mobile.webp"
            alt="Mugaashra Bridal Artistry Master Portrait"
            fill
            priority
            loading="eager"
            sizes="(max-width: 480px) 100vw, 480px"
            className="bride-bg object-cover object-center"
          />
        </div>

        {/* 2. Authentic Madurai Malli (Jasmine) & Rose Petal Drift Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
        />

        {/* 3. Smooth Feathered Vignette: Zero hard lines. Soft radial fade behind top-left title & buttons so the portrait remains 100% vibrant */}
        <div
          className="absolute inset-0 pointer-events-none z-[8]"
          style={{
            background:
              'radial-gradient(ellipse 125% 80% at 0% 0%, rgba(18, 14, 13, 0.82) 0%, rgba(18, 14, 13, 0.42) 50%, transparent 92%)',
          }}
        />

        {/* 4. Content Slot (Top-Left Anchored Title with Buttons directly below) */}
        <div className="absolute inset-0 z-[10] flex flex-col justify-start p-4 min-[390px]:p-6 pt-5 min-[390px]:pt-7 pb-5 min-[390px]:pb-7 pointer-events-auto">
          {children}
        </div>
      </header>
    </div>
  )
}
