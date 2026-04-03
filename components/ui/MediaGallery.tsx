'use client'

import { useState, useCallback } from 'react'
import type { BREImage } from '@/lib/media-types'

interface MediaGalleryProps {
  images: BREImage[]
  columns?: 2 | 3 | 4
  showCaptions?: boolean
  showPhaseFilter?: boolean
  lightbox?: boolean
  className?: string
}

type Phase = 'all' | 'before' | 'during' | 'after' | 'completed' | 'detail'

function GalleryImage({
  img,
  index,
  onOpen,
}: {
  img: BREImage
  index: number
  onOpen: (i: number) => void
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl cursor-pointer bg-panel"
      onClick={() => onOpen(index)}
    >
      {/* Phase badge */}
      {img.phase && img.phase !== 'completed' && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`
            font-mono text-[9px] tracking-[2px] uppercase px-2 py-1 rounded
            ${img.phase === 'before' ? 'bg-red-900/80 text-red-200' : ''}
            ${img.phase === 'during' ? 'bg-amber-900/80 text-amber-200' : ''}
            ${img.phase === 'after' ? 'bg-green-900/80 text-green-200' : ''}
            ${img.phase === 'detail' ? 'bg-void/70 text-teal' : ''}
          `}>
            {img.phase}
          </span>
        </div>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.url}
        alt={img.alt}
        title={img.title}
        width={img.width || 800}
        height={img.height || 600}
        className="w-full h-full object-cover aspect-[4/3] group-hover:scale-[1.04] transition-transform duration-500"
        loading="lazy"
        decoding="async"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-void/0 group-hover:bg-void/30 transition-colors duration-300 flex items-end">
        <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-mono text-[11px] text-cream/90 leading-tight">{img.caption}</p>
        </div>
      </div>
    </div>
  )
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: BREImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const img = images[index]
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(8,6,4,0.97)' }}
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full mx-4" onClick={e => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.url}
          alt={img.alt}
          title={img.title}
          className="w-full max-h-[80vh] object-contain rounded-xl"
          loading="eager"
        />
        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-[15px] text-cream">{img.caption}</p>
            {img.phase && (
              <p className="font-mono text-[10px] text-teal/70 tracking-wider mt-0.5 uppercase">{img.phase}</p>
            )}
          </div>
          <p className="font-mono text-[11px] text-cream/40 flex-shrink-0">{index + 1} / {images.length}</p>
        </div>
      </div>

      {/* Nav arrows */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-white/40 transition-colors text-xl"
        >←</button>
      )}
      {index < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-white/40 transition-colors text-xl"
        >→</button>
      )}

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
      >✕</button>
    </div>
  )
}

export default function MediaGallery({
  images,
  columns = 3,
  showCaptions = false,
  showPhaseFilter = false,
  lightbox = true,
  className = '',
}: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [phase, setPhase] = useState<Phase>('all')

  const phases = ['all', ...Array.from(new Set(images.map(i => i.phase).filter(Boolean)))] as Phase[]

  const filtered = phase === 'all' ? images : images.filter(i => i.phase === phase)

  const handleOpen = useCallback((i: number) => {
    if (lightbox) setActiveIndex(i)
  }, [lightbox])

  const gridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  }[columns]

  return (
    <>
      {/* Phase filter */}
      {showPhaseFilter && phases.length > 2 && (
        <div className="flex gap-2 mb-5 flex-wrap">
          {phases.map(p => (
            <button
              key={p}
              onClick={() => setPhase(p)}
              className={`font-mono text-[10px] tracking-[2px] uppercase px-3 py-1.5 rounded border transition-colors ${
                phase === p
                  ? 'border-teal bg-teal/10 text-teal'
                  : 'border-white/15 text-cream/50 hover:border-white/30 hover:text-cream/70'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className={`grid ${gridClass} gap-3 ${className}`}>
        {filtered.map((img, i) => (
          <GalleryImage key={img.url} img={img} index={i} onOpen={handleOpen} />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && activeIndex !== null && (
        <Lightbox
          images={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex(i => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setActiveIndex(i => Math.min(filtered.length - 1, (i ?? 0) + 1))}
        />
      )}
    </>
  )
}
