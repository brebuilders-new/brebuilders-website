'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export default function RouteChangeTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')

    // Fire GA4 pageview on route change
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-WHEY4X04ZG', { page_path: url })
    }

    // Fire GTM dataLayer push
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams])

  return null
}
