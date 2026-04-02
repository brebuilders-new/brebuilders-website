'use client'

import { useEffect } from 'react'

export default function CursorTracker() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const c = document.getElementById('cursor')
    const r = document.getElementById('cursor-ring')
    if (!c || !r) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let raf: number

    const mv = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      c.style.left = `${mx}px`
      c.style.top  = `${my}px`
      r.style.left = `${rx}px`
      r.style.top  = `${ry}px`
      raf = requestAnimationFrame(loop)
    }

    const onEnterLink = () => {
      c.style.width  = '16px'
      c.style.height = '16px'
      r.style.width  = '48px'
      r.style.height = '48px'
      r.style.borderColor = 'rgba(30,207,201,0.6)'
    }
    const onLeaveLink = () => {
      c.style.width  = '8px'
      c.style.height = '8px'
      r.style.width  = '32px'
      r.style.height = '32px'
      r.style.borderColor = 'rgba(30,207,201,0.3)'
    }

    document.addEventListener('mousemove', mv)
    raf = requestAnimationFrame(loop)

    // Apply hover effect on all interactive elements
    const applyHover = () => {
      document.querySelectorAll<HTMLElement>('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }
    applyHover()

    // Re-apply on DOM mutations (dynamic content)
    const observer = new MutationObserver(applyHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', mv)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return null
}
