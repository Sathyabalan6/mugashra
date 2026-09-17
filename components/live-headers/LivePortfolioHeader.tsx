'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface LivePortfolioHeaderProps {
  children?: React.ReactNode
}

export function LivePortfolioHeader({ children }: LivePortfolioHeaderProps) {
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

    // 2. Temple Courtyard Floral Breeze: Marigold, Jasmine & Golden Sunbeam Pollen
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
    const PARTICLE_COUNT = 24

    const marigoldColors = [
      { r: 255, g: 155, b: 15 },  // Royal Orange Marigold
      { r: 255, g: 195, b: 25 },  // Golden Yellow Marigold
      { r: 235, g: 90, b: 20 },   // Deep Saffron
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
        x: Math.random() * (width || 380),
        y: randomY ? Math.random() * (height || 820) : -25 - Math.random() * 45,
        size:
          type === 'pollen'
            ? 1.4 + Math.random() * 1.6
            : type === 'jasmine'
            ? 4.5 + Math.random() * 3.5
            : 6.5 + Math.random() * 6.5,
        vx: 0.15 + Math.random() * 0.45,
        vy: type === 'pollen' ? 0.35 + Math.random() * 0.4 : 0.6 + Math.random() * 0.8,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.03,
        osc: Math.random() * Math.PI * 2,
        oscSpeed: 0.015 + Math.random() * 0.02,
        color,
        alpha: type === 'pollen' ? 0.3 + Math.random() * 0.4 : 0.7 + Math.random() * 0.3,
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true))
    }

    // 3. Render Loop: Courtyard Wind Drift
    let windTime = 0
    function renderParticles() {
      if (!ctx || !isVisible) return
      ctx.clearRect(0, 0, width, height)

      windTime += 0.007
      const courtyardBreeze = Math.sin(windTime) * 0.4

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.osc += p.oscSpeed
        p.x += p.vx + courtyardBreeze + Math.sin(p.osc) * 0.45
        p.y += p.vy
        p.angle += p.angularSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)

        if (p.type === 'marigold') {
          // Curled Marigold Petal
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size * 0.52, p.size, 0, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`
          ctx.shadowColor = 'rgba(0, 0, 0, 0.2)'
          ctx.shadowBlur = 4
          ctx.fill()
        } else if (p.type === 'jasmine') {
          // Madurai Malli Bud
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size * 0.48, p.size, 0, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 252, 242, ${p.alpha})`
          ctx.shadowColor = 'rgba(0, 0, 0, 0.22)'
          ctx.shadowBlur = 4
          ctx.fill()

          // Tiny green sepal
          ctx.beginPath()
          ctx.moveTo(-p.size * 0.25, p.size * 0.7)
          ctx.lineTo(0, p.size * 1.1)
          ctx.lineTo(p.size * 0.25, p.size * 0.7)
          ctx.closePath()
          ctx.fillStyle = `rgba(135, 160, 95, ${p.alpha * 0.9})`
          ctx.fill()
        } else if (p.type === 'saffron') {
          // Saffron Thread / Petal
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size * 0.3, p.size * 1.1, 0.3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(235, 80, 20, ${p.alpha})`
          ctx.fill()
        } else {
          // Golden Morning Sunbeam Pollen
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 220, 110, ${p.alpha})`
          ctx.shadowColor = 'rgba(255, 200, 50, 0.6)'
          ctx.shadowBlur = 4
          ctx.fill()
        }

        ctx.restore()

        if (p.y > height + 25 || p.x > width + 30) {
          particles[i] = createParticle(false)
        }
      }

      animId = requestAnimationFrame(renderParticles)
    }

    // 4. Battery-saving IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true
              animId = requestAnimationFrame(renderParticles)
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
    animId = requestAnimationFrame(renderParticles)

    // 5. Atmospheric Air Currents on Pointer Move
    const handlePointerMove = (e: PointerEvent) => {
      const rect = header.getBoundingClientRect()
      const touchX = e.clientX - rect.left
      const touchY = e.clientY - rect.top

      for (let j = 0; j < particles.length; j++) {
        const p = particles[j]
        const dx = p.x - touchX
        const dy = p.y - touchY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 80) {
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
    <div className="relative w-full max-w-[480px] mx-auto overflow-hidden rounded-xs border border-white/10 shadow-2xl bg-[#f7e6c4] aspect-[853/1844]">
      <header
        ref={headerRef}
        id="live-portfolio-header"
        className="relative w-full h-full select-none overflow-hidden touch-pan-y"
      >
        <style jsx>{`
          .mandap-bg {
            will-change: transform;
            animation: mandapBreeze 12s ease-in-out infinite alternate;
          }
          @keyframes mandapBreeze {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.02) translateY(-2px);
            }
          }

          .sunbeam-sweep {
            position: absolute;
            inset: -20%;
            width: 140%;
            height: 140%;
            background: radial-gradient(
              ellipse at 78% 18%,
              rgba(255, 235, 170, 0.22) 0%,
              rgba(255, 210, 120, 0.07) 45%,
              transparent 70%
            );
            pointer-events: none;
            z-index: 2;
            animation: sunbeamBreathe 8s ease-in-out infinite alternate;
          }

          @keyframes sunbeamBreathe {
            0% {
              opacity: 0.5;
              transform: scale(0.96);
            }
            100% {
              opacity: 0.95;
              transform: scale(1.05);
            }
          }

          .lamp-glow-aura {
            position: absolute;
            right: 2%;
            bottom: 6%;
            width: 28%;
            height: 24%;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 175, 40, 0.44) 0%, rgba(255, 130, 10, 0.18) 45%, transparent 75%);
            filter: blur(14px);
            pointer-events: none;
            z-index: 3;
            animation: lampAuraBreathe 2.8s ease-in-out infinite alternate;
          }

          @keyframes lampAuraBreathe {
            0% {
              opacity: 0.65;
              transform: scale(0.92);
            }
            100% {
              opacity: 1;
              transform: scale(1.08);
            }
          }

          .diya-flame {
            position: absolute;
            width: 8px;
            height: 15px;
            pointer-events: none;
            z-index: 6;
            transform-origin: 50% 90%;
            animation: flameFlicker 0.6s infinite alternate ease-in-out;
          }
          .diya-flame::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 14px;
            border-radius: 50% 50% 35% 35% / 60% 60% 40% 40%;
            background: radial-gradient(
              circle at 50% 80%,
              #ffffff 15%,
              #ffe853 35%,
              #ff7700 75%,
              rgba(255, 60, 0, 0) 100%
            );
            box-shadow:
              0 0 8px #ff9d00,
              0 0 16px #ff6600,
              0 0 24px rgba(255, 160, 0, 0.5);
          }

          .flame-top { left: 88.8%; top: 76.2%; animation-duration: 0.52s; }
          .flame-t2-l { left: 83.5%; top: 80.2%; animation-duration: 0.64s; animation-delay: -0.2s; }
          .flame-t2-r { left: 94%; top: 80%; animation-duration: 0.48s; animation-delay: -0.4s; }
          .flame-t3-l { left: 84.5%; top: 84.8%; animation-duration: 0.58s; animation-delay: -0.15s; }
          .flame-t3-r { left: 93.5%; top: 84.6%; animation-duration: 0.61s; animation-delay: -0.35s; }
          .flame-t4-l { left: 81%; top: 91.2%; animation-duration: 0.55s; animation-delay: -0.25s; }
          .flame-t4-r { left: 93%; top: 91%; animation-duration: 0.67s; animation-delay: -0.1s; }

          @keyframes flameFlicker {
            0% {
              transform: scale(0.92, 0.94) rotate(-3deg);
              opacity: 0.88;
            }
            25% {
              transform: scale(1.05, 1.08) rotate(1deg);
              opacity: 0.98;
            }
            50% {
              transform: scale(0.88, 0.96) rotate(-2deg);
              opacity: 0.85;
            }
            75% {
              transform: scale(1.08, 1.04) rotate(2deg);
              opacity: 1;
            }
            100% {
              transform: scale(0.96, 1.02) rotate(-1deg);
              opacity: 0.92;
            }
          }
        `}</style>

        {/* 1. High-Resolution Mandap Artwork with Subtle Breeze Breath */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Image
            src="/images/portfolio-mobile-header.webp"
            alt="Traditional South Indian Wedding Mandap Header"
            fill
            priority
            sizes="480px"
            className="mandap-bg object-cover object-center"
          />
        </div>

        {/* 2. Ambient Sunbeam Light Sweep */}
        <div className="sunbeam-sweep" />

        {/* 3. Kuthu Vilakku Brass Lamp Glow Aura */}
        <div className="lamp-glow-aura" />

        {/* 4. 7 Realistic Flickering Diya Oil Flames on the Wicks */}
        <div className="diya-flame flame-top" />
        <div className="diya-flame flame-t2-l" />
        <div className="diya-flame flame-t2-r" />
        <div className="diya-flame flame-t3-l" />
        <div className="diya-flame flame-t3-r" />
        <div className="diya-flame flame-t4-l" />
        <div className="diya-flame flame-t4-r" />

        {/* 5. Falling Marigold & Jasmine Petals Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
        />

        {/* 6. Subtle Scrim for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/75 pointer-events-none z-[8]" />

        {/* 7. Content Slot */}
        <div className="absolute inset-0 z-[10] flex flex-col justify-between p-6 pb-8 pointer-events-auto">
          {children}
        </div>
      </header>
    </div>
  )
}
