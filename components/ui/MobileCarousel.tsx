'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

/**
 * MobileCarousel — swipe carousel on mobile, grid on desktop
 * 
 * Usage:
 *   <MobileCarousel items={array} renderItem={(item, i) => <Card item={item} />} />
 * 
 * On mobile: horizontal swipe with dot indicators
 * On desktop: renders children in a grid (controlled by className)
 */

interface MobileCarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  desktopClassName?: string  // e.g. "md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5"
  itemWidth?: string         // mobile card width, default '85vw'
  showDots?: boolean
  className?: string
}

export default function MobileCarousel<T>({
  items,
  renderItem,
  desktopClassName = 'md:grid md:grid-cols-3 md:gap-5',
  itemWidth = '85vw',
  showDots = true,
  className = '',
}: MobileCarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Update dot indicator on scroll
  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardW = el.scrollWidth / items.length
    const idx = Math.round(el.scrollLeft / cardW)
    setActiveIndex(Math.max(0, Math.min(items.length - 1, idx)))
  }, [items.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const scrollTo = useCallback((i: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardW = el.scrollWidth / items.length
    el.scrollTo({ left: cardW * i, behavior: 'smooth' })
    setActiveIndex(i)
  }, [items.length])

  return (
    <div className={className}>
      {/* ── MOBILE: horizontal swipe carousel ── */}
      <div className={`${desktopClassName ? 'md:hidden' : ''}`}>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-none pb-2"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: itemWidth, scrollSnapAlign: 'start' }}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        {showDots && items.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activeIndex ? 20 : 6,
                  height: 6,
                  background: i === activeIndex
                    ? 'rgb(30,207,201)'
                    : 'rgba(242,236,228,0.2)',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── DESKTOP: normal grid ── */}
      {desktopClassName && (
        <div className={`hidden ${desktopClassName}`}>
          {items.map((item, i) => (
            <div key={i}>{renderItem(item, i)}</div>
          ))}
        </div>
      )}
    </div>
  )
}
