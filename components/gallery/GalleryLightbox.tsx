'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// ─── Types ─────────────────────────────────────────────────────────────────────
export interface LightboxImage {
  src: string
  alt: string
  title?: string
  caption?: string
}

// ─── Hook: expose open fn to parent ────────────────────────────────────────────
export function useGalleryLightbox() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState<LightboxImage[]>([])

  const openAt = useCallback((imgs: LightboxImage[], i: number) => {
    setImages(imgs)
    setIndex(i)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return { open, index, images, openAt, close, setIndex }
}

// ─── Lightbox component ─────────────────────────────────────────────────────────
interface GalleryLightboxProps {
  open: boolean
  images: LightboxImage[]
  index: number
  onClose: () => void
  onIndexChange: (i: number) => void
}

export function GalleryLightbox({
  open,
  images,
  index,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const total = images.length
  const current = images[index]

  const prev = useCallback(() => {
    onIndexChange((index - 1 + total) % total)
  }, [index, total, onIndexChange])

  const next = useCallback(() => {
    onIndexChange((index + 1) % total)
  }, [index, total, onIndexChange])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, prev, next, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current

    // Only register horizontal swipes (dx dominant, > 40px)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next()
      else prev()
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  if (!open || !current) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ willChange: 'opacity' }}
    >
      {/* ── BACKDROP ── */}
      <div
        className="absolute inset-0 bg-void/97 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── TOOLBAR ── */}
      <div className="relative z-10 flex items-center justify-between px-4 lg:px-8 py-4 flex-shrink-0">
        {/* Counter */}
        <div className="font-mono text-[11px] tracking-[2px] text-cream/40">
          {String(index + 1).padStart(2, '0')}
          <span className="text-cream/20 mx-1.5">/</span>
          {String(total).padStart(2, '0')}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.1] text-cream/50 hover:text-cream hover:border-white/20 transition-all"
          aria-label="Close lightbox"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* ── MAIN AREA ── */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center px-12 lg:px-20 min-h-0"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Prev button — desktop */}
        <button
          onClick={prev}
          className="hidden lg:flex absolute left-4 w-10 h-10 items-center justify-center rounded-full border border-white/[0.08] text-cream/40 hover:text-cream hover:border-white/20 hover:bg-white/[0.04] transition-all z-20"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center max-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-xl select-none"
            draggable={false}
            style={{ transition: 'opacity 0.2s ease' }}
          />
        </div>

        {/* Next button — desktop */}
        <button
          onClick={next}
          className="hidden lg:flex absolute right-4 w-10 h-10 items-center justify-center rounded-full border border-white/[0.08] text-cream/40 hover:text-cream hover:border-white/20 hover:bg-white/[0.04] transition-all z-20"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── CAPTION PANEL ── */}
      <div className="relative z-10 flex-shrink-0 px-4 lg:px-8 pt-5 pb-6 border-t border-white/[0.08]" style={{ background: '#0c0a08' }}>
        <div className="max-w-[720px] mx-auto">
          {/* Title */}
          {current.title && (
            <p className="font-display text-[18px] lg:text-[22px] text-white font-light leading-snug mb-2">
              {current.title}
            </p>
          )}
          {/* Description / caption */}
          {current.caption && (
            <p className="font-mono text-[11px] lg:text-[12px] leading-relaxed" style={{ color: 'rgba(242,237,230,0.65)' }}>
              {current.caption}
            </p>
          )}
          {/* Mobile swipe hint — only on first open */}
          {total > 1 && (
            <div className="flex items-center gap-3 mt-4">
              {/* Dot indicators */}
              <div className="flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onIndexChange(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === index ? '20px' : '6px',
                      height: '6px',
                      background: i === index ? '#1ecfc9' : 'rgba(240,236,228,0.2)',
                    }}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
              {/* Mobile nav arrows */}
              <div className="flex gap-2 lg:hidden ml-auto">
                <button
                  onClick={prev}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.1] text-cream/50 active:bg-white/[0.05]"
                  aria-label="Previous"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.1] text-cream/50 active:bg-white/[0.05]"
                  aria-label="Next"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Gallery grid with lightbox trigger ─────────────────────────────────────────
// Drop-in replacement for any gallery — handles both mobile carousel and desktop grid

interface GalleryGridProps {
  images: LightboxImage[]
  mode?: 'carousel' | 'masonry' | 'grid' | 'alternating'
  /** Force carousel on all screen sizes */
  forceCarousel?: boolean
  aspectClass?: string
  className?: string
}

export function GalleryGrid({
  images,
  mode = 'grid',
  forceCarousel = false,
  aspectClass = 'h-52',
  className = '',
}: GalleryGridProps) {
  const { open, index, openAt, close, setIndex } = useGalleryLightbox()

  return (
    <>
      {/* Mobile: always carousel */}
      <div className={`${forceCarousel ? 'block' : 'md:hidden'} ${className}`}>
        <div
          className="flex gap-3 overflow-x-auto pb-3 scrollbar-none"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {images.map((img, i) => (
            <button
              key={i}
              className="flex-shrink-0 text-left group focus:outline-none"
              style={{ scrollSnapAlign: 'start', width: '78vw' }}
              onClick={() => openAt(images, i)}
              aria-label={`Open ${img.title || img.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full ${aspectClass} object-cover rounded-xl group-hover:brightness-90 group-active:brightness-75 transition-all`}
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              {/* Title + caption below carousel card */}
              {(img.title || img.caption) && (
                <div className="mt-2 px-0.5">
                  {img.title && (
                    <p className="font-display text-[13px] text-cream/80 leading-snug">{img.title}</p>
                  )}
                  {img.caption && (
                    <p className="font-mono text-[10px] text-cream/35 mt-0.5 leading-snug">{img.caption}</p>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
        <p className="font-mono text-[10px] text-cream/25 tracking-wider mt-1">
          ← Swipe · tap to expand · {images.length} photos
        </p>
      </div>

      {/* Desktop: grid / masonry / alternating */}
      {!forceCarousel && (
        <>
          {/* Standard grid — 3 columns, fixed aspect ratio */}
          {mode === 'grid' && (
            <div className={`hidden md:grid grid-cols-3 gap-[3px] rounded-2xl overflow-hidden ${className}`}>
              {images.map((img, i) => (
                <button
                  key={i}
                  className="group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal/60 bg-void"
                  style={{ aspectRatio: '4/3' }}
                  onClick={() => openAt(images, i)}
                  aria-label={`View ${img.title || img.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-void/10 pointer-events-none" />
                  <div className="absolute inset-0 bg-void/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" style={{ boxShadow: '0 0 12px rgba(200,146,58,0.5)' }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-10 h-10 rounded-full border border-gold/40 bg-void/40 flex items-center justify-center" style={{ backdropFilter: 'blur(4px)' }}>
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {img.title && <p className="font-display text-[14px] text-white leading-snug mb-0.5">{img.title}</p>}
                    {img.caption && <p className="font-mono text-[10px] text-cream/45 leading-snug">{img.caption}</p>}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Masonry — cinematic 3-column grid, fixed aspect ratio, gold reveal */}
          {mode === 'masonry' && (
            <div className="hidden md:grid grid-cols-3 gap-[3px] rounded-2xl overflow-hidden">
              {images.map((img, realIdx) => (
                <button
                  key={realIdx}
                  className="group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal/60 bg-void"
                  style={{ aspectRatio: '4/3' }}
                  onClick={() => openAt(images, realIdx)}
                  aria-label={`View ${img.title || img.alt}`}
                >
                  {/* Image — fills cell exactly */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    loading={realIdx < 3 ? 'eager' : 'lazy'}
                  />

                  {/* Permanent subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-void/10 pointer-events-none" />

                  {/* Hover reveal overlay — slides up from bottom */}
                  <div className="absolute inset-0 bg-void/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Gold accent bar — slides in from left on hover */}
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                    style={{ boxShadow: '0 0 12px rgba(200,146,58,0.5)' }}
                  />

                  {/* Index badge top-right */}
                  <div className="absolute top-3 right-3 font-mono text-[10px] text-cream/0 group-hover:text-cream/40 transition-colors duration-300 tracking-widest">
                    {String(realIdx + 1).padStart(2, '0')}
                  </div>

                  {/* Label — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {img.title && (
                      <p className="font-display text-[14px] text-white leading-snug mb-0.5">{img.title}</p>
                    )}
                    {img.caption && (
                      <p className="font-mono text-[10px] text-cream/45 leading-snug">{img.caption}</p>
                    )}
                  </div>

                  {/* Expand icon center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div
                      className="w-10 h-10 rounded-full border border-gold/40 bg-void/40 flex items-center justify-center"
                      style={{ backdropFilter: 'blur(4px)' }}
                    >
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Alternating — image + text side by side */}
          {mode === 'alternating' && (
            <div className="hidden md:block space-y-16">
              {images.map((img, i) => (
                <div key={i} className={`grid grid-cols-2 gap-12 items-center`}>
                  <button
                    className={`overflow-hidden rounded-2xl group focus:outline-none focus-visible:ring-1 focus-visible:ring-teal/50 relative ${i % 2 === 1 ? 'order-2' : ''}`}
                    onClick={() => openAt(images, i)}
                    aria-label={`Open ${img.title || img.alt}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                    {/* Expand hint */}
                    <div className="absolute inset-0 flex items-center justify-center bg-void/0 group-hover:bg-void/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full border border-white/0 group-hover:border-white/25 bg-white/0 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                        <svg className="w-5 h-5 text-white/0 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div className={i % 2 === 1 ? 'order-1' : ''}>
                    <div className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-3">
                      Photo {String(i + 1).padStart(2, '0')} of {String(images.length).padStart(2, '0')}
                    </div>
                    {img.title && (
                      <h3 className="font-display text-[26px] font-light text-cream mb-3 leading-snug">{img.title}</h3>
                    )}
                    {img.caption && (
                      <p className="text-[14px] text-cream/50 leading-relaxed">{img.caption}</p>
                    )}
                    <button
                      onClick={() => openAt(images, i)}
                      className="mt-4 font-mono text-[11px] tracking-wider text-teal/50 hover:text-teal transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      Expand image
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── LIGHTBOX ── */}
      <GalleryLightbox
        open={open}
        images={images}
        index={index}
        onClose={close}
        onIndexChange={setIndex}
      />
    </>
  )
}
