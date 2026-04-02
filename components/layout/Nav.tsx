'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/site-data'

const RESIDENTIAL = [
  { label: 'ADU Construction', href: '/services/adu', badge: '#1 Reno', badgeColor: 'bg-teal text-void', desc: 'From $75,000 · Studio to 2-bed', icon: '🏠' },
  { label: 'Structural Repairs', href: '/services/repairs', badge: 'Page 1', badgeColor: 'bg-teal/20 text-teal', desc: 'Foundation · Dry rot · Water intrusion', icon: '🔧' },
  { label: 'Home Additions', href: '/services/additions', badge: null, badgeColor: '', desc: 'Bedroom suites · Garages · 2nd stories', icon: '📐' },
  { label: 'Kitchen & Bath', href: '/services/kitchen-bath', badge: null, badgeColor: '', desc: 'Custom cabinetry · Tile · Full remodels', icon: '🪵' },
  { label: 'Custom Home Builds', href: '/services/new-home', badge: null, badgeColor: '', desc: 'Design-build · NV & CA licensed', icon: '🏗️' },
  { label: 'Decks', href: '/services/decks', badge: null, badgeColor: '', desc: 'New builds · Structural repair · Tahoe', icon: '🌲' },
  { label: 'Lofts & Condos', href: '/services/lofts-condos', badge: null, badgeColor: '', desc: 'Interior renovation · HOA compliant', icon: '🏙️' },
]

const COMMERCIAL = [
  { label: 'Commercial Construction', href: '/services/commercial', desc: 'Tenant improvements · Full builds', icon: '🏢' },
  { label: 'Retail Build-Out', href: '/services/retail', desc: 'Storefront · Fixtures · Permits', icon: '🛒' },
  { label: 'Office Construction', href: '/services/office', desc: 'Open plans · Private suites', icon: '💼' },
  { label: 'Warehouse & Metal', href: '/services/warehouse', desc: 'Industrial · Storage · Commercial', icon: '🏭' },
  { label: 'Concrete Work', href: '/services/concrete', desc: 'Slabs · Foundations · Commercial pads', icon: '🧱' },
  { label: 'Hauling & Removal', href: '/services/hauling', desc: 'Same-day available · Full demo', icon: '🚛' },
]

const SERVICE_AREAS = [
  { label: 'Reno, NV', href: '/service-areas/reno', note: 'Primary area' },
  { label: 'Lake Tahoe, NV', href: '/service-areas/lake-tahoe', note: 'Completed projects' },
  { label: 'Sparks, NV', href: '/service-areas/sparks', note: 'NV #0085999' },
  { label: 'Carson City, NV', href: '/service-areas/carson-city', note: 'NV #0085999' },
  { label: 'Truckee, CA', href: '/service-areas/truckee', note: 'CA #1009219' },
  { label: 'Northern California', href: '/service-areas/northern-california', note: 'CA #1009219' },
]

const TOP_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openMega = useCallback(() => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
    setMegaOpen(true)
  }, [])

  const closeMega = useCallback(() => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 120)
  }, [])

  const cancelClose = useCallback(() => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
  }, [])

  return (
    <>
      {/* ── TOPBAR ── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen ? 'bg-void/97 backdrop-blur-xl border-b border-white/[0.07]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" onClick={() => setMobileOpen(false)} aria-label="BRE Builders — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://brebuilders.com/wp-content/uploads/2026/01/brelogo.webp"
              alt="BRE Builders – Blue Reef Enterprises Reno NV General Contractor"
              className="h-9 w-auto object-contain"
              width={120} height={36} loading="eager"
            />
            <div className="hidden sm:block">
              <div className="font-display text-[17px] text-cream leading-none group-hover:text-teal transition-colors duration-200">Blue Reef Builders</div>
              <div className="font-mono text-[9px] tracking-[2.5px] text-teal/80 uppercase mt-[3px]">Est. 1989 · NV &amp; CA Licensed</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services mega menu */}
            <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <button
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] tracking-[1.5px] uppercase transition-all duration-200 ${
                  megaOpen ? 'text-cream bg-white/[0.06]' : 'text-cream/55 hover:text-cream hover:bg-white/[0.04]'
                }`}
              >
                Services
                <svg className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* MEGA MENU — opacity+translateY only (compositor layer, zero paint) */}
              <div
                onMouseEnter={cancelClose}
                onMouseLeave={closeMega}
                role="menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[740px] transition-all duration-200 origin-top"
                style={{
                  opacity: megaOpen ? 1 : 0,
                  transform: `translateX(-50%) translateY(${megaOpen ? '0' : '-8px'})`,
                  pointerEvents: megaOpen ? 'auto' : 'none',
                  willChange: 'opacity, transform',
                }}
              >
                <div className="bg-panel border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/70">
                  {/* Stats bar */}
                  <div className="flex items-center gap-5 px-6 py-3 bg-deep border-b border-white/[0.05]">
                    {[['#1', 'ADU Reno'], ['Page 1', 'Foundation Repair'], ['35+ yrs', 'Experience'], ['NV + CA', 'Licensed'], ['Free', 'Estimates']].map(([v, l]) => (
                      <div key={l} className="flex items-center gap-1.5">
                        <span className="font-mono text-[11px] text-teal font-semibold">{v}</span>
                        <span className="font-mono text-[10px] text-cream/30 tracking-wide">{l}</span>
                      </div>
                    ))}
                    <Link href="/services" className="ml-auto font-mono text-[10px] tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0" onClick={() => setMegaOpen(false)}>
                      All Services →
                    </Link>
                  </div>

                  {/* 3-column grid */}
                  <div className="grid grid-cols-[1fr_1fr_200px] divide-x divide-white/[0.05]">
                    {/* Residential */}
                    <div className="p-5">
                      <p className="font-mono text-[9px] tracking-[3px] uppercase text-cream/30 mb-3 px-1">Residential</p>
                      <div className="space-y-0.5">
                        {RESIDENTIAL.map(s => (
                          <Link key={s.href} href={s.href} role="menuitem" onClick={() => setMegaOpen(false)}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-all group">
                            <span className="text-[15px] mt-0.5 flex-shrink-0" aria-hidden="true">{s.icon}</span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[13px] text-cream/80 group-hover:text-cream transition-colors font-medium leading-none">{s.label}</span>
                                {s.badge && <span className={`font-mono text-[8px] tracking-wider px-1.5 py-0.5 rounded ${s.badgeColor}`}>{s.badge}</span>}
                              </div>
                              <p className="font-mono text-[10px] text-cream/30 mt-0.5 leading-none">{s.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Commercial */}
                    <div className="p-5">
                      <p className="font-mono text-[9px] tracking-[3px] uppercase text-cream/30 mb-3 px-1">Commercial</p>
                      <div className="space-y-0.5">
                        {COMMERCIAL.map(s => (
                          <Link key={s.href} href={s.href} role="menuitem" onClick={() => setMegaOpen(false)}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-all group">
                            <span className="text-[15px] mt-0.5 flex-shrink-0" aria-hidden="true">{s.icon}</span>
                            <div className="min-w-0">
                              <span className="text-[13px] text-cream/80 group-hover:text-cream transition-colors font-medium leading-none block">{s.label}</span>
                              <p className="font-mono text-[10px] text-cream/30 mt-0.5 leading-none">{s.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Areas + CTA */}
                    <div className="p-5 flex flex-col">
                      <p className="font-mono text-[9px] tracking-[3px] uppercase text-cream/30 mb-3 px-1">Service Areas</p>
                      <div className="space-y-1 flex-1">
                        {SERVICE_AREAS.map(a => (
                          <Link key={a.href} href={a.href} role="menuitem" onClick={() => setMegaOpen(false)}
                            className="block px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all group">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal/40 group-hover:bg-teal transition-colors flex-shrink-0" />
                              <span className="text-[12px] text-cream/70 group-hover:text-cream transition-colors">{a.label}</span>
                            </div>
                            <p className="font-mono text-[9px] text-cream/25 pl-3.5 mt-0.5">{a.note}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/[0.05]">
                        <Link href="/contact" onClick={() => setMegaOpen(false)}
                          className="w-full flex items-center justify-center gap-2 py-2.5 bg-teal text-void text-[11px] font-mono font-bold tracking-[1px] uppercase rounded-lg hover:bg-teal/90 transition-colors">
                          Free Estimate →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-6 py-3 bg-deep/60 border-t border-white/[0.05]">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-cream/25">NV Lic #0085999</span>
                      <span className="font-mono text-[10px] text-cream/25">·</span>
                      <span className="font-mono text-[10px] text-cream/25">CA Lic #1009219</span>
                    </div>
                    <a href={SITE.phoneHref} className="font-mono text-[11px] text-teal/70 hover:text-teal transition-colors tracking-wide">{SITE.phone}</a>
                  </div>
                </div>
              </div>
            </div>

            {TOP_LINKS.map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 rounded-lg text-[12px] tracking-[1.5px] uppercase text-cream/55 hover:text-cream hover:bg-white/[0.04] transition-all duration-200">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href={SITE.phoneHref} className="font-mono text-[12px] text-teal/80 hover:text-teal transition-colors tracking-wide">{SITE.phone}</a>
            <Link href="/contact" className="font-mono text-[11px] tracking-[1px] uppercase border border-teal text-teal px-5 py-2.5 rounded-lg hover:bg-teal hover:text-void transition-all duration-200">
              Get Quote
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-2.5 flex-shrink-0">
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 bg-teal/10 border border-teal/30 text-teal rounded-lg px-3 py-2 text-[12px] font-mono" aria-label={`Call ${SITE.phone}`}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call
            </a>
            <button onClick={() => setMobileOpen(v => !v)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
              <span className="w-5 h-[1.5px] bg-cream transition-all duration-250 origin-center" style={{ transform: mobileOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
              <span className="w-5 h-[1.5px] bg-cream transition-all duration-250" style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span className="w-5 h-[1.5px] bg-cream transition-all duration-250 origin-center" style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE BACKDROP ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none', willChange: 'opacity' }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── MOBILE DRAWER — translateX compositor layer ── */}
      <div
        role="dialog" aria-label="Navigation menu" aria-modal="true"
        className="fixed top-0 right-0 bottom-0 z-50 lg:hidden bg-void border-l border-white/[0.07] overflow-y-auto transition-transform duration-300 ease-out"
        style={{
          width: 'min(320px, 88vw)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          willChange: 'transform',
          paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-void/98 border-b border-white/[0.06] px-5 py-4 flex items-center justify-between z-10">
          <div>
            <div className="font-display text-[15px] text-cream">Blue Reef Builders</div>
            <div className="font-mono text-[9px] tracking-[2px] uppercase text-teal/70 mt-0.5">Est. 1989 · NV &amp; CA Licensed</div>
          </div>
          <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-cream/50 hover:text-cream transition-colors" aria-label="Close menu">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 pt-5">
          {/* CTA strip */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <a href={SITE.phoneHref} onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 bg-teal text-void text-[12px] font-mono font-bold rounded-xl">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Now
            </a>
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 border border-teal/50 text-teal text-[12px] font-mono rounded-xl">
              Free Quote
            </Link>
          </div>

          {/* Residential — 2-column */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[3px] uppercase text-cream/35">Residential</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {RESIDENTIAL.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  className="group flex flex-col gap-1 p-3 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 active:bg-teal/5 transition-all min-h-[68px]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px]" aria-hidden="true">{s.icon}</span>
                    {s.badge && <span className={`font-mono text-[7px] tracking-wider px-1 py-0.5 rounded ${s.badgeColor}`}>{s.badge}</span>}
                  </div>
                  <span className="font-display text-[13px] text-cream/85 group-hover:text-cream leading-tight">{s.label}</span>
                  <span className="font-mono text-[9px] text-cream/30 leading-tight">{s.desc.split(' · ')[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Commercial — 2-column */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[3px] uppercase text-cream/35">Commercial</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {COMMERCIAL.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  className="group flex flex-col gap-1 p-3 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 active:bg-teal/5 transition-all min-h-[68px]">
                  <span className="text-[14px]" aria-hidden="true">{s.icon}</span>
                  <span className="font-display text-[13px] text-cream/85 group-hover:text-cream leading-tight">{s.label}</span>
                  <span className="font-mono text-[9px] text-cream/30 leading-tight">{s.desc.split(' · ')[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas — 2-column */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[3px] uppercase text-cream/35">Service Areas</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {SERVICE_AREAS.map(a => (
                <Link key={a.href} href={a.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 p-3 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 active:bg-teal/5 transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/50 flex-shrink-0" />
                  <div>
                    <div className="font-display text-[12px] text-cream/80">{a.label}</div>
                    <div className="font-mono text-[9px] text-cream/30">{a.note}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[3px] uppercase text-cream/35">Company</span>
            </div>
            <div className="space-y-0">
              {[
                { label: 'Projects & Portfolio', href: '/projects' },
                { label: 'Blog', href: '/blog' },
                { label: 'About BRE Builders', href: '/about' },
                { label: 'Our Approach', href: '/our-approach' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Careers', href: '/careers' },
              ].map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-2 text-[13px] text-cream/55 hover:text-cream active:text-teal transition-all border-b border-white/[0.05] last:border-0">
                  {l.label}
                  <svg className="w-3 h-3 text-cream/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* License block */}
          <div className="bg-panel rounded-xl p-4 border border-white/[0.055] mb-4">
            <div className="font-mono text-[9px] tracking-[2px] uppercase text-cream/30 mb-2">Licensed &amp; Bonded</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="font-mono text-[11px] text-teal">NV #0085999</div>
                <div className="font-mono text-[9px] text-cream/30 mt-0.5">Nevada License</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-teal">CA #1009219</div>
                <div className="font-mono text-[9px] text-cream/30 mt-0.5">California License</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE STICKY BOTTOM BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="bg-deep/97 backdrop-blur-xl border-t border-white/[0.08] flex">
          <a href={SITE.phoneHref} className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-teal active:bg-teal/10 transition-colors" aria-label={`Call ${SITE.phone}`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="font-mono text-[10px] tracking-wider">CALL</span>
          </a>
          <a href="sms:7753914517" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-cream/45 active:bg-white/5 transition-colors border-x border-white/[0.06]" aria-label="Text us">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
            <span className="font-mono text-[10px] tracking-wider">TEXT</span>
          </a>
          <Link href="/contact" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-teal text-void active:bg-teal/80 transition-colors" aria-label="Get a free quote">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
            <span className="font-mono text-[10px] tracking-wider font-bold">QUOTE</span>
          </Link>
        </div>
      </div>
    </>
  )
}
