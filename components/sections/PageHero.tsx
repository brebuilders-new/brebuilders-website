'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface PageHeroProps {
  // Background images - desktop shows full bleed, mobile may differ
  bgImage: string
  bgImageMobile?: string  // If provided, shown on mobile instead
  // Content
  eyebrow?: string        // e.g. "ADU Construction"
  h1: string
  subh1?: string          // italic ghost line below H1
  lead: string
  // CTAs - different by device
  ctaPrimary: { label: string; href: string }
  ctaSecondaryDesktop?: { label: string; href: string }
  ctaMobile?: { label: string; href: string; tel?: boolean } // Mobile = call CTA
  // Trust signals
  badges?: string[]
  // Stats (optional, desktop)
  stats?: Array<{ n: string; label: string }>
  // Urgency/Psychology signal
  urgencyNote?: string
  // License (NV or CA page)
  license?: 'NV' | 'CA' | 'both'
}

export default function PageHero({
  bgImage,
  bgImageMobile,
  eyebrow,
  h1,
  subh1,
  lead,
  ctaPrimary,
  ctaSecondaryDesktop,
  ctaMobile,
  badges = [],
  stats = [],
  urgencyNote,
  license = 'NV',
}: PageHeroProps) {
  const vidRef = useRef<HTMLDivElement>(null)

  const licenseStr =
    license === 'NV' ? 'NV Lic #0085999' :
    license === 'CA' ? 'CA Lic #1093798' :
    'NV #0085999 · CA #1093798'

  return (
    <section className="page-hero">
      {/* ── BACKGROUND (desktop) ── */}
      <div
        className="page-hero-bg hidden md:block"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* ── BACKGROUND (mobile) ── */}
      <div
        className="page-hero-bg md:hidden"
        style={{ backgroundImage: `url(${bgImageMobile || bgImage})` }}
      />

      {/* Overlays */}
      <div className="page-hero-overlay" />
      <div className="page-hero-overlay-side hidden md:block" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-[0.025] pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 container w-full">
        <div className="max-w-[660px]">

          {/* Eyebrow */}
          {eyebrow && (
            <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-teal flex-shrink-0" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{eyebrow}</span>
            </div>
          )}

          {/* H1 */}
          <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,78px)] leading-[0.95] tracking-tight text-white mb-4"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}>
            {h1}
            {subh1 && (
              <><br />
              <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,.35)' }}>
                {subh1}
              </span></>
            )}
          </h1>

          {/* Lead */}
          <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-6 max-w-[500px]"
            style={{ textShadow: '0 1px 15px rgba(0,0,0,0.5)' }}>
            {lead}
          </p>

          {/* Badges */}
          {badges.length > 0 && (
            <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
              {badges.map(b => (
                <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">
                  ✓ {b}
                </span>
              ))}
            </div>
          )}

          {/* CTAs — DIFFERENT DESKTOP / MOBILE */}
          <div className="animate-fade-up-4">
            {/* Desktop CTAs */}
            <div className="hidden md:flex gap-3 flex-wrap mb-6">
              <Link href={ctaPrimary.href} className="btn-primary">
                {ctaPrimary.label}
              </Link>
              {ctaSecondaryDesktop && (
                <Link href={ctaSecondaryDesktop.href} className="btn-ghost">
                  {ctaSecondaryDesktop.label}
                </Link>
              )}
            </div>

            {/* Mobile CTAs — always phone-first */}
            <div className="md:hidden flex gap-3 mb-6">
              <a href="tel:7753914517" className="btn-primary flex-1 justify-center">
                📞 Call Now
              </a>
              {ctaMobile ? (
                <Link href={ctaMobile.href} className="btn-teal-outline flex-1 justify-center">
                  {ctaMobile.label}
                </Link>
              ) : (
                <Link href={ctaPrimary.href} className="btn-ghost flex-1 justify-center">
                  Get Quote
                </Link>
              )}
            </div>
          </div>

          {/* Urgency note */}
          {urgencyNote && (
            <p className="animate-fade-up-4 font-mono text-[11px] text-cream/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
              {urgencyNote}
            </p>
          )}
        </div>

        {/* Stats row — desktop only */}
        {stats.length > 0 && (
          <div className="animate-fade-up-4 hidden md:flex gap-12 mt-10 pt-10 border-t border-white/10">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-display text-[clamp(24px,3vw,40px)] font-light text-white leading-none">{s.n}</div>
                <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">{s.label}</div>
              </div>
            ))}
            <div>
              <div className="font-mono text-[11px] text-teal leading-none">{licenseStr}</div>
              <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">Licensed</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
