'use client';

import React, { useEffect, useRef } from 'react';

export interface VoxelTopographyGridProps {
  tileSize?: number;
  maxHeight?: number;
  primaryColor?: string; // Hex color (e.g. #B58A69)
  wireColor?: string;
  speed?: number;
  className?: string;
}

export function VoxelTopographyGrid({
  tileSize = 30,
  maxHeight = 65,
  primaryColor = '#B58A69',
  wireColor = 'rgba(181, 138, 105, 0.35)',
  speed = 0.012,
  className = '',
}: VoxelTopographyGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Smooth target coordinates for cursor tracking
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    // Fast Hex to RGB conversion
    const hexToRgb = (hex: string) => {
      const cleanHex = hex.replace('#', '');
      const bigint = parseInt(
        cleanHex.length === 3
          ? cleanHex.split('').map((c) => c + c).join('')
          : cleanHex,
        16
      );
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const baseRgb = hexToRgb(primaryColor);

    // Pre-computed constant side face colors (0 allocations per frame)
    const leftFaceColor = `rgba(${Math.floor(baseRgb.r * 0.4)}, ${Math.floor(baseRgb.g * 0.4)}, ${Math.floor(baseRgb.b * 0.4)}, 0.85)`;
    const rightFaceColor = `rgba(${Math.floor(baseRgb.r * 0.6)}, ${Math.floor(baseRgb.g * 0.6)}, ${Math.floor(baseRgb.b * 0.6)}, 0.85)`;

    // Pre-computed Lookup Table (LUT) for Top Face elevation lighting
    const topColorLUT: string[] = new Array(101);
    for (let i = 0; i <= 100; i++) {
      const ratio = i / 100;
      const r = Math.floor(baseRgb.r * (0.55 + ratio * 0.45));
      const g = Math.floor(baseRgb.g * (0.55 + ratio * 0.45));
      const b = Math.floor(baseRgb.b * (0.55 + ratio * 0.45));
      topColorLUT[i] = `rgb(${r},${g},${b})`;
    }

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    handleResize();

    const updatePointerPos = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = clientX - rect.left;
      mouseRef.current.targetY = clientY - rect.top;
    };

    const handlePointerMove = (e: PointerEvent) => {
      updatePointerPos(e.clientX, e.clientY);
    };

    const handlePointerLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    // Constants for grid iteration
    const tileW = tileSize * 0.866025; // cos(30 deg)
    const tileH = tileSize * 0.5;      // sin(30 deg)
    const maxRadiusSq = 220 * 220;
    const invMaxHeight = 1 / (maxHeight + 55);

    const draw = () => {
      time += speed;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.32;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.32;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Dark background matching website theme
      ctx.fillStyle = '#181514';
      ctx.fillRect(0, 0, width, height);

      const gridCols = Math.ceil(width / tileW) + 4;
      const gridRows = Math.ceil(height / tileH) + 8;

      const originX = width * 0.5;
      const originY = height / 3.2;

      const startR = -Math.floor(gridRows / 2);
      const endR = Math.ceil(gridRows / 2);
      const startC = -Math.floor(gridCols / 2);
      const endC = Math.ceil(gridCols / 2);

      // Render loop with Back-to-Front Painter's Algorithm
      for (let r = startR; r < endR; r++) {
        for (let c = startC; c < endC; c++) {
          const isoX = originX + (c - r) * tileW;
          const isoY = originY + (c + r) * tileH;

          const dx = isoX - mx;
          const dy = isoY - my;
          const distSq = dx * dx + dy * dy;

          const wave1 = Math.sin(time * 2 + c * 0.25 + r * 0.25);
          const wave2 = Math.cos(time * 1.5 + c * 0.15 - r * 0.3);
          let h = (wave1 + wave2 + 2) * 0.25 * maxHeight;

          if (distSq < maxRadiusSq) {
            const dist = Math.sqrt(distSq);
            const influence = 1 - dist / 220;
            h += influence * influence * 55;
          }

          const py = isoY - h;

          if (
            isoX + tileW < 0 ||
            isoX - tileW > width ||
            py + h + 15 < 0 ||
            py - tileH > height
          ) {
            continue;
          }

          const topP1Y = py - tileH;
          const topP2X = isoX + tileW;
          const topP3Y = py + tileH;
          const topP4X = isoX - tileW;

          const sideBottomShift = h + 15;

          // Left Side Face
          ctx.beginPath();
          ctx.moveTo(topP4X, py);
          ctx.lineTo(isoX, topP3Y);
          ctx.lineTo(isoX, topP3Y + sideBottomShift);
          ctx.lineTo(topP4X, py + sideBottomShift);
          ctx.closePath();
          ctx.fillStyle = leftFaceColor;
          ctx.fill();

          // Right Side Face
          ctx.beginPath();
          ctx.moveTo(isoX, topP3Y);
          ctx.lineTo(topP2X, py);
          ctx.lineTo(topP2X, py + sideBottomShift);
          ctx.lineTo(isoX, topP3Y + sideBottomShift);
          ctx.closePath();
          ctx.fillStyle = rightFaceColor;
          ctx.fill();

          // Top Face
          ctx.beginPath();
          ctx.moveTo(isoX, topP1Y);
          ctx.lineTo(topP2X, py);
          ctx.lineTo(isoX, topP3Y);
          ctx.lineTo(topP4X, py);
          ctx.closePath();

          const rawLight = h * invMaxHeight;
          const lightRatio = rawLight > 1 ? 1 : rawLight < 0.1 ? 0.1 : rawLight;
          const lutIdx = (lightRatio * 100) | 0;

          ctx.fillStyle = topColorLUT[lutIdx];
          ctx.fill();

          // Wireframe Overlay
          ctx.strokeStyle = wireColor;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [tileSize, maxHeight, primaryColor, wireColor, speed]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden touch-none ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export default VoxelTopographyGrid;
