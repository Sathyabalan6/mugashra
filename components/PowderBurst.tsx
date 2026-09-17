'use client'

/**
 * PowderBurst (Authentic Balanced Cosmetic Powder Blast — 45% Edition)
 * ------------------------------------------------------------------
 * Calibrated precisely to 45% density of the studio powder explosion:
 *
 * Balance:
 * - 85–110 atomized micro-powder specks (visible, crisp, yet airy).
 * - 6–8 directional plume wisps with a soft central core puff.
 * - 10–16 delicate crumbled powder flecks tumbling in the plume wake.
 * - Rich matte cosmetic palette: translucent setting powder, ivory veil,
 *   warm sand, terracotta bronzer, and cinnamon contour.
 * - Natural air drag and ~0.75s graceful dissipation.
 *
 * Performance:
 * - pointer-events: none ensures zero interruption of UI clicks/taps.
 * - requestAnimationFrame sleeps immediately when particles settle (0% CPU idle).
 * - Accessible: respects prefers-reduced-motion.
 */

import { useEffect, useRef } from 'react'

interface PlumePuff {
  x: number
  y: number
  vx: number
  vy: number
  drag: number
  radius: number
  maxRadius: number
  expansionSpeed: number
  alpha: number
  decay: number
  color: string
}

interface DustGrain {
  x: number
  y: number
  vx: number
  vy: number
  drag: number
  gravity: number
  size: number
  alpha: number
  decay: number
  color: string
}

interface CrumbFlake {
  x: number
  y: number
  vx: number
  vy: number
  drag: number
  gravity: number
  size: number
  angle: number
  angularSpeed: number
  alpha: number
  decay: number
  color: string
}

// Authentic Matte Cosmetic Face Powder Palette
const POWDER_PALETTE = {
  translucent: '242,228,212', // Ultra-fine translucent setting powder
  ivory: '234,212,190',       // Soft ivory foundation veil
  sand: '220,188,155',        // Warm golden sand powder
  terracotta: '188,125,72',   // Warm terracotta bronzer dust
  cinnamon: '158,102,62',     // Soft cinnamon contour tone
}

const ALL_POWDER_COLORS = [
  POWDER_PALETTE.translucent,
  POWDER_PALETTE.ivory,
  POWDER_PALETTE.sand,
  POWDER_PALETTE.terracotta,
  POWDER_PALETTE.cinnamon,
]

const MAX_PUFFS = 65
const MAX_GRAINS = 380
const MAX_CRUMBS = 60

export function PowderBurst() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const puffsRef = useRef<PlumePuff[]>([])
  const grainsRef = useRef<DustGrain[]>([])
  const crumbsRef = useRef<CrumbFlake[]>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 1. Retina-aware Canvas Resizing
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // 2. Balanced 45% Cosmetic Powder Blast Generator
    const spawnBlast = (x: number, y: number) => {
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      // A. Directional Plume Wisps (6–8 rays with soft cascading puffs)
      const numPlumes = 6 + Math.floor(Math.random() * 3)
      for (let p = 0; p < numPlumes; p++) {
        const baseAngle = (p / numPlumes) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
        const plumeSpeed = 3.5 + Math.random() * 5.0
        const plumeColor = ALL_POWDER_COLORS[Math.floor(Math.random() * ALL_POWDER_COLORS.length)]

        const puffCount = 1 + Math.floor(Math.random() * 2)
        for (let j = 0; j < puffCount; j++) {
          if (puffsRef.current.length >= MAX_PUFFS) break
          const subSpeed = plumeSpeed * (0.65 + j * 0.3)
          const offsetAngle = baseAngle + (Math.random() - 0.5) * 0.25

          puffsRef.current.push({
            x: x + Math.cos(offsetAngle) * (j * 4),
            y: y + Math.sin(offsetAngle) * (j * 4),
            vx: Math.cos(offsetAngle) * subSpeed,
            vy: Math.sin(offsetAngle) * subSpeed - 0.6, // Natural upward loft
            drag: 0.89,                                 // Air resistance
            radius: 4 + Math.random() * 4,
            maxRadius: 26 + Math.random() * 24 + j * 8,
            expansionSpeed: 0.15,
            alpha: 0.46 - j * 0.08,                     // Balanced visible sheer
            decay: 0.89,                                // Smooth dissipation
            color: plumeColor,
          })
        }
      }

      // Central Core Flash Puff
      puffsRef.current.push({
        x,
        y,
        vx: 0,
        vy: -0.25,
        drag: 0.9,
        radius: 6,
        maxRadius: 32 + Math.random() * 14,
        expansionSpeed: 0.17,
        alpha: 0.54,
        decay: 0.88,
        color: POWDER_PALETTE.sand,
      })

      // B. Atomized Micro-Dust Grains (85–110 fine specks = 45% of original 210)
      const numGrains = 85 + Math.floor(Math.random() * 25)
      for (let i = 0; i < numGrains; i++) {
        if (grainsRef.current.length >= MAX_GRAINS) break
        const angle = Math.random() * Math.PI * 2
        const speed = 2.2 + Math.random() * 9.5
        const isOuter = Math.random() > 0.4

        grainsRef.current.push({
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.9,
          drag: isOuter ? 0.895 : 0.925,
          gravity: 0.035,
          size: 0.7 + Math.random() * 1.3,
          alpha: 0.68 + Math.random() * 0.25,
          decay: 0.016 + Math.random() * 0.018, // ~0.75s lifespan
          color: ALL_POWDER_COLORS[Math.floor(Math.random() * ALL_POWDER_COLORS.length)],
        })
      }

      // C. Soft Crumbled Powder Flecks (10–16 delicate tumbling grains)
      const numCrumbs = 10 + Math.floor(Math.random() * 7)
      for (let k = 0; k < numCrumbs; k++) {
        if (crumbsRef.current.length >= MAX_CRUMBS) break
        const angle = Math.random() * Math.PI * 2
        const speed = 1.8 + Math.random() * 5.2

        crumbsRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          drag: 0.94,
          gravity: 0.05,
          size: 1.4 + Math.random() * 1.4,
          angle: Math.random() * Math.PI * 2,
          angularSpeed: (Math.random() - 0.5) * 0.12,
          alpha: 0.75,
          decay: 0.014 + Math.random() * 0.012,
          color: [POWDER_PALETTE.terracotta, POWDER_PALETTE.cinnamon, POWDER_PALETTE.sand][Math.floor(Math.random() * 3)],
        })
      }

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    // 3. Animation Tick Loop
    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // A. Render Volumetric Billowing Plume Clouds
      puffsRef.current = puffsRef.current.filter((p) => p.alpha > 0.015 && p.radius < p.maxRadius * 0.98)
      for (const p of puffsRef.current) {
        p.vx *= p.drag
        p.vy *= p.drag
        p.x += p.vx
        p.y += p.vy
        p.radius += (p.maxRadius - p.radius) * p.expansionSpeed
        p.alpha *= p.decay

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        grad.addColorStop(0, `rgba(${p.color},${p.alpha})`)
        grad.addColorStop(0.38, `rgba(${p.color},${p.alpha * 0.55})`)
        grad.addColorStop(0.75, `rgba(${p.color},${p.alpha * 0.2})`)
        grad.addColorStop(1, `rgba(${p.color},0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // B. Render Atomized Micro-Dust
      grainsRef.current = grainsRef.current.filter((g) => g.alpha > 0.02)
      for (const g of grainsRef.current) {
        g.vx *= g.drag
        g.vy *= g.drag
        g.vy += g.gravity
        g.x += g.vx
        g.y += g.vy
        g.alpha -= g.decay

        ctx.fillStyle = `rgba(${g.color},${Math.max(0, g.alpha)})`
        ctx.beginPath()
        ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // C. Render Soft Crumbled Flecks
      crumbsRef.current = crumbsRef.current.filter((c) => c.alpha > 0.02)
      for (const c of crumbsRef.current) {
        c.vx *= c.drag
        c.vy *= c.drag
        c.vy += c.gravity
        c.x += c.vx
        c.y += c.vy
        c.angle += c.angularSpeed
        c.alpha -= c.decay

        ctx.save()
        ctx.translate(c.x, c.y)
        ctx.rotate(c.angle)
        ctx.fillStyle = `rgba(${c.color},${Math.max(0, c.alpha)})`
        ctx.beginPath()
        ctx.ellipse(0, 0, c.size, c.size * 0.72, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // Loop management
      if (puffsRef.current.length > 0 || grainsRef.current.length > 0 || crumbsRef.current.length > 0) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        rafRef.current = null
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      spawnBlast(e.clientX, e.clientY)
    }

    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointerdown', handlePointerDown)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  )
}
