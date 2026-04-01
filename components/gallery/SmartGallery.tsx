'use client'

import { useRef } from 'react'

// ─── Types ─────────────────────────────────────────────────────────────────────
interface GalleryImage {
  src: string
  alt: string
  caption?: string
  title?: string
}

// ─── MobileCarousel — always used on mobile ────────────────────────────────────
export function MobileCarousel({
  images,
  aspectClass = 'h-64',
}: {
  images: GalleryImage[]
  aspectClass?: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative md:hidden">
      <div
        ref={trackRef}
        className="carousel-track pb-3"
      >
        {images.map((img, i) => (
          <div key={i} className="carousel-item w-[78vw]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              title={img.title || img.alt}
              className={`${aspectClass} w-full object-cover rounded-xl`}
              loading={i < 2 ? 'eager' : 'lazy'}
            />
            {img.caption && (
              <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase px-1">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
      {/* Fade edge right */}
      <div className="absolute right-0 top-0 bottom-3 w-12 bg-gradient-to-l from-current to-transparent pointer-events-none" style={{ color: 'inherit' }} />
      {/* Count indicator */}
      <p className="font-mono text-[10px] text-cream/25 tracking-wider mt-1">
        ← Swipe · {images.length} photos
      </p>
    </div>
  )
}

// ─── DesktopMasonry — 3-col irregular grid ─────────────────────────────────────
export function DesktopMasonry({
  images,
}: {
  images: GalleryImage[]
}) {
  if (images.length === 0) return null

  // Split into 3 columns
  const col1 = images.filter((_, i) => i % 3 === 0)
  const col2 = images.filter((_, i) => i % 3 === 1)
  const col3 = images.filter((_, i) => i % 3 === 2)

  const renderCol = (imgs: GalleryImage[]) => (
    <div className="flex flex-col gap-4">
      {imgs.map((img, i) => (
        <div key={i} className="group overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            title={img.title || img.alt}
            className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
          {img.caption && (
            <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.caption}</p>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className="hidden md:grid md:grid-cols-3 gap-4">
      {renderCol(col1)}
      {renderCol(col2)}
      {renderCol(col3)}
    </div>
  )
}

// ─── DesktopHorizontalStrip — for project galleries ─────────────────────────────
export function DesktopHorizontalStrip({ images }: { images: GalleryImage[] }) {
  return (
    <div className="hidden md:block relative">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none" style={{ scrollSnapType: 'x mandatory' }}>
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 group" style={{ scrollSnapAlign: 'start', width: '320px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              title={img.title || img.alt}
              className="w-full h-56 object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
              loading={i < 3 ? 'eager' : 'lazy'}
            />
            {img.caption && (
              <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-deep to-transparent pointer-events-none" />
    </div>
  )
}

// ─── DesktopGrid — even grid for 4-6 images ────────────────────────────────────
export function DesktopGrid({
  images,
  cols = 3,
}: {
  images: GalleryImage[]
  cols?: 2 | 3 | 4
}) {
  const colClass = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }[cols]

  return (
    <div className={`hidden md:grid ${colClass} gap-4`}>
      {images.map((img, i) => (
        <div key={i} className="group overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            title={img.title || img.alt}
            className="w-full h-52 object-cover group-hover:scale-[1.04] transition-transform duration-600"
            loading={i < 4 ? 'eager' : 'lazy'}
          />
          {img.caption && (
            <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.caption}</p>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── SmartGallery — auto picks display mode, always carousel on mobile ─────────
export function SmartGallery({
  images,
  desktopMode = 'masonry',
  bgColor = 'var(--deep)',
}: {
  images: GalleryImage[]
  desktopMode?: 'masonry' | 'grid' | 'strip'
  bgColor?: string
}) {
  return (
    <>
      {/* Mobile: always carousel */}
      <MobileCarousel images={images} />

      {/* Desktop: chosen layout */}
      {desktopMode === 'masonry' && <DesktopMasonry images={images} />}
      {desktopMode === 'grid'    && <DesktopGrid images={images} />}
      {desktopMode === 'strip'   && <DesktopHorizontalStrip images={images} />}
    </>
  )
}
