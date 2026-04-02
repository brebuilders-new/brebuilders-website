'use client'

import { useEffect } from 'react'

interface Props {
  theme?: string
  urgencyDelaySeconds?: number
}

export default function ScrollPsychology({ theme, urgencyDelaySeconds = 45 }: Props) {
  useEffect(() => {
    // 1. Scroll-triggered color warm shift on CTA elements
    const warmElements = document.querySelectorAll('.color-warm-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('is-warm')
        })
      },
      { threshold: 0.4 }
    )
    warmElements.forEach(el => observer.observe(el))

    // 2. Before/after image reveal on repair pages
    if (theme === 'repairs') {
      const revealEls = document.querySelectorAll('.before-after-reveal')
      const revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              setTimeout(() => e.target.classList.add('revealed'), 200)
            }
          })
        },
        { threshold: 0.5 }
      )
      revealEls.forEach(el => revealObs.observe(el))
    }

    // 3. Urgency overlay after X seconds without scroll interaction
    let urgencyTimer: ReturnType<typeof setTimeout>
    let hasScrolled = false

    const overlay = document.createElement('div')
    overlay.className = 'urgency-overlay'
    document.body.appendChild(overlay)

    const onScroll = () => { hasScrolled = true }
    window.addEventListener('scroll', onScroll, { passive: true })

    urgencyTimer = setTimeout(() => {
      if (!hasScrolled) {
        overlay.classList.add('is-active')
      }
    }, urgencyDelaySeconds * 1000)

    // 4. Scroll depth tracking — fires gtag events at 25/50/75/100%
    let depths = new Set<number>()
    const trackDepth = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const pct = Math.round((scrollTop / docHeight) * 100)

      for (const milestone of [25, 50, 75, 100]) {
        if (pct >= milestone && !depths.has(milestone)) {
          depths.add(milestone)
          if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) {
            ;((window as unknown as Record<string, unknown>).gtag as (...args: unknown[]) => void)(
              'event', 'scroll_depth',
              { depth: milestone, page_theme: theme || 'default', non_interaction: true }
            )
          }
        }
      }
    }
    window.addEventListener('scroll', trackDepth, { passive: true })

    return () => {
      observer.disconnect()
      clearTimeout(urgencyTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', trackDepth)
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay)
    }
  }, [theme, urgencyDelaySeconds])

  return null
}
