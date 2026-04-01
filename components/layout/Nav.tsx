'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/site-data'

const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'ADU Construction', href: '/services/adu', badge: '#1 Reno' },
      { label: 'Structural Repairs', href: '/services/repairs' },
      { label: 'Kitchen & Bath', href: '/services/kitchen-bath' },
      { label: 'Custom Home', href: '/services/new-home' },
      { label: 'Decks', href: '/services/decks' },
      { label: 'Additions', href: '/services/additions' },
      { label: 'Commercial', href: '/services/commercial' },
      { label: 'Concrete', href: '/services/concrete' },
      { label: 'Hauling & Removal', href: '/services/hauling' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-void/95 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Real BRE logo from live site */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://brebuilders.com/wp-content/uploads/2026/01/brelogo.webp"
              alt="BRE Builders – Blue Reef Enterprises Reno NV General Contractor"
              className="h-9 w-auto object-contain"
              loading="eager"
            />
            <div className="hidden sm:block">
              <div className="font-display text-[17px] text-cream leading-none group-hover:text-teal transition-colors">Blue Reef Builders</div>
              <div className="font-mono text-[9px] tracking-[2.5px] text-teal uppercase mt-[3px]">Est. 1989 · NV & CA</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-[12px] tracking-[1.5px] uppercase text-cream/50 hover:text-cream transition-colors duration-200 flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56">
                    <div className="bg-panel border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between px-4 py-3 text-[13px] text-cream/60 hover:text-cream hover:bg-white/[0.04] transition-all border-b border-white/[0.04] last:border-0"
                        >
                          {child.label}
                          {'badge' in child && child.badge && (
                            <span className="text-[9px] font-mono tracking-wider text-teal border border-teal/30 bg-teal/10 px-1.5 py-0.5 rounded">
                              {child.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="text-[12px] tracking-wider text-teal font-mono hover:text-cream transition-colors"
            >
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="text-[12px] tracking-[1px] uppercase bg-transparent border border-teal text-teal px-5 py-2.5 rounded hover:bg-teal hover:text-void transition-all duration-200 font-mono"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 bg-teal/10 border border-teal/30 text-teal rounded-lg px-3 py-2 text-[12px] font-mono"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-[1.5px] bg-cream transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`w-5 h-[1.5px] bg-cream transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-[1.5px] bg-cream transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/[0.06] bg-void/98 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[13px] uppercase tracking-[1px] text-cream/60 hover:text-cream border-b border-white/[0.04]"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 py-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-[12px] text-cream/40 hover:text-teal transition-colors"
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2 flex gap-3">
                <a href={SITE.phoneHref} className="flex-1 text-center py-3 bg-teal text-void text-[13px] font-semibold rounded-lg">
                  Call (775) 391-4517
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-3 border border-teal/50 text-teal text-[13px] rounded-lg"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-deep/95 backdrop-blur-xl border-t border-white/[0.08] safe-area-pb">
        <div className="flex">
          <a
            href={SITE.phoneHref}
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-teal active:bg-teal/10"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="text-[10px] tracking-wider font-mono">CALL</span>
          </a>
          <a
            href={`sms:${SITE.phone.replace(/\D/g, '')}`}
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-cream/50 active:bg-white/5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            <span className="text-[10px] tracking-wider font-mono">TEXT</span>
          </a>
          <Link
            href="/contact"
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-teal text-void active:bg-teal/80"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <span className="text-[10px] tracking-wider font-mono font-bold">QUOTE</span>
          </Link>
        </div>
      </div>
    </>
  )
}
