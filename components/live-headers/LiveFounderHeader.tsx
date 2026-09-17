'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface LiveFounderHeaderProps {
  children?: React.ReactNode
}

export function LiveFounderHeader({ children }: LiveFounderHeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const header = headerRef.current
    const canvas = canvasRef.current
    if (!header || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

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

    // 2. Atelier Fragrance Mist & Watercolor Petal Particles
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
    const TOTAL_PARTICLES = 24

    const petalPalettes = [
      { r: 247, g: 143, b: 167 }, // Rose Pink
      { r: 251, g: 191, b: 206 }, // Soft Blush
      { r: 232, g: 90, b: 125 },  // Vibrant Cherry
      { r: 255, g: 230, b: 235 }, // White Rose Tint
      { r: 243, g: 172, b: 140 }, // Warm Peach
    ]

    function createParticle(randomY = false): AtelierParticle {
      const isMist = Math.random() > 0.5
      const color = isMist
        ? { r: 255, g: 220, b: 230 }
        : petalPalettes[Math.floor(Math.random() * petalPalettes.length)]

      return {
        isMist,
        x: Math.random() * (width || 380),
        y: randomY ? Math.random() * (height || 820) : -25 - Math.random() * 40,
        size: isMist ? 8 + Math.random() * 16 : 6 + Math.random() * 7,
        vx: 0.15 + Math.random() * 0.4,
        vy: isMist ? 0.25 + Math.random() * 0.45 : 0.5 + Math.random() * 0.75,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.025,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        rotSpeedZ: (Math.random() - 0.5) * 0.015,
        osc: Math.random() * Math.PI * 2,
        oscSpeed: 0.012 + Math.random() * 0.02,
        color,
        alpha: isMist ? 0.08 + Math.random() * 0.14 : 0.65 + Math.random() * 0.35,
      }
    }

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      particles.push(createParticle(true))
    }

    // 3. Render Loop: Soft Fragrance Mist Diffusion
    let time = 0
    function renderMist() {
      if (!ctx || !isVisible) return
      ctx.clearRect(0, 0, width, height)

      time += 0.007
      const ambientSway = Math.sin(time) * 0.35

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.osc += p.oscSpeed
        p.x += p.vx + ambientSway + Math.sin(p.osc) * 0.4
        p.y += p.vy
        p.rotX += p.rotSpeedX
        p.rotY += p.rotSpeedY
        p.rotZ += p.rotSpeedZ

        ctx.save()
        ctx.translate(p.x, p.y)

        if (p.isMist) {
          // Translucent Fragrance Mist Puff
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2.2)
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 1.2})`)
          grad.addColorStop(0.5, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.5})`)
          grad.addColorStop(1, 'transparent')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(0, 0, p.size * 2.2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Watercolor Rose Petal
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
          ctx.shadowColor = 'rgba(0, 0, 0, 0.15)'
          ctx.shadowBlur = 4
          ctx.fill()
        }

        ctx.restore()

        if (p.y > height + 35 || p.x > width + 40) {
          particles[i] = createParticle(false)
        }
      }

      animId = requestAnimationFrame(renderMist)
    }

    // 4. Battery-saving IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true
              animId = requestAnimationFrame(renderMist)
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
    animId = requestAnimationFrame(renderMist)

    // 5. Fragrance Air Currents on Pointer Movement
    const handlePointerMove = (e: PointerEvent) => {
      const rect = header.getBoundingClientRect()
      const touchX = e.clientX - rect.left
      const touchY = e.clientY - rect.top

      for (let j = 0; j < particles.length; j++) {
        const p = particles[j]
        const dx = p.x - touchX
        const dy = p.y - touchY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 75) {
          p.vx += (dx / dist) * 0.5
          p.vy -= 0.3
        }
      }
    }

    header.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      header.removeEventListener('pointermove', handlePointerMove)
      observer.disconnect()
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="relative w-full max-w-[480px] mx-auto overflow-hidden rounded-xs border border-white/10 shadow-2xl bg-[#faf7f5] aspect-[887/1774]">
      <header
        ref={headerRef}
        id="live-founder-header"
        className="relative w-full h-full select-none overflow-hidden touch-pan-y"
      >
        <style jsx>{`
          .floating-pearl {
            position: absolute;
            z-index: 5;
            pointer-events: none;
            will-change: transform, opacity;
            filter: drop-shadow(0 4px 8px rgba(230, 140, 160, 0.35));
          }

          .pearl-1 {
            top: 17.5%;
            left: 19.5%;
            width: 26px;
            animation: pearlBob1 4.2s ease-in-out infinite alternate;
          }
          .pearl-2 {
            top: 28.5%;
            left: 7%;
            width: 20px;
            animation: pearlBob2 3.6s ease-in-out infinite alternate;
            animation-delay: -1.2s;
          }
          .pearl-3 {
            top: 73%;
            left: 31%;
            width: 24px;
            animation: pearlBob3 4.8s ease-in-out infinite alternate;
            animation-delay: -2s;
          }
          .pearl-4 {
            top: 67.2%;
            left: 23.5%;
            width: 18px;
            animation: pearlBob1 3.9s ease-in-out infinite alternate;
            animation-delay: -0.7s;
          }
          .pearl-5 {
            top: 77%;
            left: 38%;
            width: 20px;
            animation: pearlBob2 4.4s ease-in-out infinite alternate;
            animation-delay: -1.8s;
          }

          @keyframes pearlBob1 {
            0% {
              transform: translateY(0px) scale(0.96);
              opacity: 0.85;
            }
            100% {
              transform: translateY(-14px) scale(1.05);
              opacity: 1;
            }
          }
          @keyframes pearlBob2 {
            0% {
              transform: translateY(-10px) scale(1.04) rotate(6deg);
              opacity: 0.9;
            }
            100% {
              transform: translateY(8px) scale(0.95) rotate(-6deg);
              opacity: 0.75;
            }
          }
          @keyframes pearlBob3 {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            50% {
              transform: translate(5px, -12px) scale(1.07);
            }
            100% {
              transform: translate(-3px, -7px) scale(0.98);
            }
          }
        `}</style>

        {/* 1. High-Resolution Watercolor Artwork */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Image
            src="/images/founder_header_mobile.webp"
            alt="Cosmetics & Floral Watercolor Artistry Header"
            fill
            priority
            sizes="480px"
            className="object-cover object-center"
          />
        </div>

        {/* 2. Floating Translucent Pearl Beads */}
        <div className="floating-pearl pearl-1">
          <Image src="/images/founder_pearl.png" alt="Floating Pearl" width={26} height={26} />
        </div>
        <div className="floating-pearl pearl-2">
          <Image src="/images/founder_pearl.png" alt="Floating Pearl" width={20} height={20} />
        </div>
        <div className="floating-pearl pearl-3">
          <Image src="/images/founder_pearl.png" alt="Floating Pearl" width={24} height={24} />
        </div>
        <div className="floating-pearl pearl-4">
          <Image src="/images/founder_pearl.png" alt="Floating Pearl" width={18} height={18} />
        </div>
        <div className="floating-pearl pearl-5">
          <Image src="/images/founder_pearl.png" alt="Floating Pearl" width={20} height={20} />
        </div>

        {/* 3. Fragrance Mist & Drifting Watercolor Petals Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
        />

        {/* 4. Delicate Scrim for Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/80 pointer-events-none z-[8]" />

        {/* 5. Content Slot */}
        <div className="absolute inset-0 z-[10] flex flex-col justify-center items-center text-center p-6 pointer-events-auto">
          {children}
        </div>
      </header>
    </div>
  )
}
