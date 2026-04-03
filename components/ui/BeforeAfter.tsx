'use client'

import { useState, useRef, useCallback } from 'react'
import type { BREImage } from '@/lib/media-types'

interface BeforeAfterProps {
  before: BREImage
  after: BREImage
  label?: string
  className?: string
}

export default function BeforeAfter({ before, after, label, className = '' }: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(95, Math.max(5, pct)))
  }, [])

  return (
    <div className={`relative overflow-hidden rounded-xl select-none ${className}`} style={{ aspectRatio: '4/3' }}>
      {label && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 font-mono text-[9px] tracking-[2px] uppercase bg-void/70 text-cream/70 px-2 py-1 rounded">
          {label} · Drag to compare
        </div>
      )}

      {/* After image (background — full width) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after.url} alt={after.alt} title={after.title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute bottom-3 right-3 z-10 font-mono text-[9px] tracking-[2px] uppercase bg-void/70 text-green-300 px-2 py-1 rounded">After</div>

      {/* Before image (clipped to left of slider) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before.url} alt={before.alt} title={before.title} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000/pos}%`, maxWidth: 'none' }} />
        <div className="absolute bottom-3 left-3 z-10 font-mono text-[9px] tracking-[2px] uppercase bg-void/70 text-red-300 px-2 py-1 rounded">Before</div>
      </div>

      {/* Slider handle */}
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-col-resize z-10"
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX) }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX) }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX) }}
        onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX) }}
        onTouchEnd={() => { dragging.current = false }}
      >
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/80" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <span className="text-void text-xs font-bold">⟷</span>
          </div>
        </div>
      </div>
    </div>
  )
}
