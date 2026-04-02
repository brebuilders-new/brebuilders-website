'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE, SERVICES, PROJECTS, TESTIMONIALS, FAQS } from '@/lib/site-data'

// ─── All real project image URLs ──────────────────────────────────────────────
const HERO_BG = 'https://brebuilders.com/wp-content/uploads/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp'
const HERO_IMGS = [
  { src: 'https://brebuilders.com/wp-content/uploads/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp', alt: 'Lake Tahoe full home renovation exterior – BRE Builders' },
  { src: 'https://brebuilders.com/wp-content/uploads/e228c329-e139-4d18-869f-29659b27e05d.jpg', alt: 'Luxury custom home Ripon CA classical entryway – Blue Reef Builders' },
  { src: 'https://brebuilders.com/wp-content/uploads/2025/12/08-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-8-of-16-1024x684.webp', alt: 'Bathroom renovation Lake Tahoe – BRE Builders' },
  { src: 'https://brebuilders.com/wp-content/uploads/Arun-Deck-Repair-%E2%80%93-Reinforced-Support-Beams-and-Elevated-Framing-600x403.jpg', alt: 'Hillside deck repair Lake Tahoe – BRE Builders' },
]

const SERVICE_IMGS: Record<string, string> = {
  adu: 'https://brebuilders.com/wp-content/uploads/adu-homepage-600x403.jpg',
  repairs: 'https://brebuilders.com/wp-content/uploads/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg',
  additions: 'https://brebuilders.com/wp-content/uploads/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp',
  'kitchen-bath': 'https://brebuilders.com/wp-content/uploads/2025/12/08-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-8-of-16-1024x684.webp',
  'new-home': 'https://brebuilders.com/wp-content/uploads/e228c329-e139-4d18-869f-29659b27e05d-600x403.jpg',
  decks: 'https://brebuilders.com/wp-content/uploads/Arun-Deck-Repair-%E2%80%93-Reinforced-Support-Beams-and-Elevated-Framing-600x403.jpg',
  concrete: 'https://brebuilders.com/wp-content/uploads/Commercial-Concrete-Slab-Pour-with-Utility-Access-%E2%80%93-Reno-NV-600x403.jpg',
  commercial: 'https://brebuilders.com/wp-content/uploads/Image_fx-9-600x403.jpg',
  hauling: 'https://brebuilders.com/wp-content/uploads/image-26-600x403.jpg',
  'lofts-condos': 'https://brebuilders.com/wp-content/uploads/loft-condo-remodel-600x403.jpg',
}

// ─── Animated cycling word ─────────────────────────────────────────────────────
const WORDS = ['Precision', 'Integrity', 'Strength', 'Craftsmanship', 'Innovation', 'Excellence']
function AnimatedWord() {
  const [idx, setIdx] = useState(0)
  const [vis, setVis] = useState(true)
  useEffect(() => {
    const t = setInterval(() => {
      setVis(false)
      setTimeout(() => { setIdx(i => (i + 1) % WORDS.length); setVis(true) }, 300)
    }, 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <span
      className="text-teal italic"
      style={{ display: 'inline-block', transition: 'opacity .3s, transform .3s', opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(8px)' }}
    >
      {WORDS[idx]}
    </span>
  )
}

// ─── Hero image slider ────────────────────────────────────────────────────────
function HeroSlider() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % HERO_IMGS.length), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="absolute inset-0 overflow-hidden">
      {HERO_IMGS.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover scale-[1.03]"
            style={{ transition: 'transform 6s ease', transform: i === active ? 'scale(1)' : 'scale(1.03)' }}
          />
        </div>
      ))}
      {/* Dark overlay — preserves readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/30 to-void/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/60 to-transparent" />
    </div>
  )
}

// ─── Scroll fade (JS-driven, always correct) ───────────────────────────────────
function Fade({ children, className = '', delay = 0, once = true, style }: { children: React.ReactNode; className?: string; delay?: number; once?: boolean; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    // Start visible if already in viewport (avoids invisible content on load)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 40) {
      el.style.opacity = '1'; el.style.transform = 'none'; return
    }
    el.style.cssText = `opacity:0;transform:translateY(24px);transition:opacity .7s ease ${delay}ms,transform .7s ease ${delay}ms`
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1'; el.style.transform = 'translateY(0)'
        if (once) { fired.current = true; obs.disconnect() }
      }
    }, { threshold: 0.06 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, once])
  return <div ref={ref} className={className} style={style}>{children}</div>
}

// ─── Section label ──────────────────────────────────────────────────────────────
function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

// ─── HOME PAGE ─────────────────────────────────────────────────────────────────
export default function HomePage() {


  return (
    <>
      <Nav />
      <main data-theme="home">

        {/* ═══════════════════════════════════ HERO ════════════════════════════ */}
        {/* MOBILE (hidden md+): Full-screen, call-first, minimal copy */}
        <section className="relative md:hidden overflow-hidden" style={{ minHeight: '100svh' }}>
          <HeroSlider />
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(30,207,201,1) 1px,transparent 1px),linear-gradient(90deg,rgba(30,207,201,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 flex flex-col justify-end px-5 pb-8 pt-28" style={{ minHeight: '100svh' }}>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 border border-teal/60 rounded-full px-3 py-1.5 bg-teal/[0.18] backdrop-blur-sm mb-5 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[9px] tracking-[2px] uppercase text-cream font-medium">Now Accepting Projects · NV & CA</span>
            </div>

            {/* H1 — mobile-sized, punchy, 3 short lines */}
            <h1 className="font-display font-light text-[clamp(40px,11vw,58px)] leading-[0.93] tracking-tight text-white mb-4" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.6)' }}>
              Built to Last.<br />
              Built Right.<br />
              <span className="italic text-teal">Since&nbsp;1989.</span>
            </h1>

            {/* Short mobile sub — 1 sentence max */}
            <p className="text-[14px] leading-[1.65] text-white/85 mb-5 max-w-[320px]">
              Licensed contractor serving Reno, Lake Tahoe, and Northern California.
              <span className="block mt-1 font-display text-[17px] text-white/75">We build with <AnimatedWord />.</span>
            </p>

            {/* Mobile stats — compact row */}
            <div className="flex gap-6 mb-6">
              {[{ n: '35+', l: 'Years' }, { n: 'NV·CA', l: 'Licensed' }, { n: 'Free', l: 'Estimates' }].map(s => (
                <div key={s.l}>
                  <div className="font-display text-[22px] text-white leading-none">{s.n}</div>
                  <div className="font-mono text-[9px] uppercase text-white/65 mt-0.5 tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Mobile CTAs — stacked, call first */}
            <div className="flex flex-col gap-2.5 mb-4">
              <a
                href={SITE.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-4 bg-teal text-void text-[15px] font-bold rounded-xl"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call for a Free Quote
              </a>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/contact" className="flex items-center justify-center py-3.5 border border-white/20 text-white text-[13px] font-mono rounded-xl bg-white/[0.04]">
                  Request Quote
                </Link>
                <Link href="/projects" className="flex items-center justify-center py-3.5 border border-white/20 text-white text-[13px] font-mono rounded-xl bg-white/[0.04]">
                  View Projects
                </Link>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {HERO_IMGS.map((_, i) => (
                <button key={i} aria-label={`Show image ${i + 1}`} className="h-[3px] w-3 rounded-full bg-white/25 transition-all duration-500" />
              ))}
            </div>
          </div>
        </section>

        {/* DESKTOP (hidden below md): Full-bleed, research mode, stats row */}
        <section className="relative hidden md:flex flex-col justify-end pb-20 lg:pb-32 overflow-hidden min-h-screen">
          <HeroSlider />
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(30,207,201,1) 1px,transparent 1px),linear-gradient(90deg,rgba(30,207,201,1) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-36">
            {/* Badge */}
            <div className="animate-fade-up-1 inline-flex items-center gap-2.5 border border-teal/60 rounded-full px-4 py-2 bg-teal/[0.15] backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream font-medium">Now Accepting New Projects · NV Lic #0085999 · CA Lic #1093798</span>
            </div>

            {/* H1 */}
            <div className="animate-fade-up-2">
              <h1 className="font-display font-light text-[clamp(56px,9vw,124px)] leading-[0.92] tracking-[-2px] text-white mb-3" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}>
                Built to Last.<br />
                Built Right.<br />
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.45)' }}>Built Since&nbsp;1989.</span>
              </h1>
            </div>

            {/* Desktop layout: lead left, stats+CTAs right */}
            <div className="animate-fade-up-3 mt-10 flex flex-col lg:flex-row items-start lg:items-end gap-10 lg:gap-20">
              <div className="max-w-[520px]">
                <p className="text-[15px] lg:text-[17px] leading-[1.75] text-white/90 mb-4" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.9), 0 1px 8px rgba(0,0,0,0.8)' }}>
                  Licensed Nevada and California general contractor. Residential remodeling, ADUs, structural repairs, custom homes, and commercial construction across Reno, Sparks, Lake Tahoe, Truckee, Carson City, Graeagle, and Northern California.
                </p>
                <p className="font-display text-[20px] text-white/75">
                  We build with <AnimatedWord />.
                </p>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex gap-10 lg:gap-16">
                  {[{ n: '35+', l: 'Years' }, { n: 'NV · CA', l: 'Licensed' }, { n: 'Free', l: 'Estimates' }].map(s => (
                    <div key={s.l}>
                      <div className="font-display text-[clamp(30px,4vw,50px)] font-light text-white leading-none" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>{s.n}</div>
                      <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-white/65 mt-1.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href="/contact" className="px-7 py-3.5 bg-teal text-void text-[13px] font-bold rounded-lg hover:bg-teal/90 transition-colors shadow-lg">
                    Get a Free Quote →
                  </Link>
                  <a href={SITE.phoneHref} className="px-7 py-3.5 bg-teal/20 border-2 border-teal text-white text-[14px] rounded-lg hover:bg-teal/30 transition-all font-mono font-bold tracking-wide">
                    📞 {SITE.phone}
                  </a>
                  <Link href="/projects" className="px-7 py-3.5 border border-white/20 text-white/70 text-[13px] rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                    View Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Image dots */}
            <div className="mt-10 flex gap-2">
              {HERO_IMGS.map((_, i) => (
                <button key={i} aria-label={`Show image ${i + 1}`} className="h-[3px] rounded-full transition-all duration-500 w-3 bg-white/30" />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-3 z-10">
            <div className="w-px h-12 bg-gradient-to-b from-teal/80 to-transparent" />
            <span className="font-mono text-[9px] tracking-[3px] text-white/55 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          </div>
        </section>

        {/* ═══════════════════════════ TRUST BAR ════════════════════════════ */}
        <div className="border-y border-white/[0.06] bg-panel overflow-x-auto">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center gap-8 min-w-max">
            {['NV License #0085999', 'CA License #1093798', 'Since 1989 — 35+ Years', 'Free Estimates', '1-Year Warranty', 'Full Permit Handling', 'Bonded & Insured'].map(t => (
              <div key={t} className="flex items-center gap-2 flex-shrink-0">
                <span className="text-teal text-[12px]">✓</span>
                <span className="font-mono text-[11px] tracking-wide text-cream/70 whitespace-nowrap">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════ SERVICES ══════════════════════════════ */}
        {/* Cinematic service chapters — alternating panels desktop, stacked cards mobile */}
        <section className="bg-void">
          {/* Section label */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-6 flex items-center justify-between">
            <SL text="What We Build" />
            <Link href="/services" className="text-[11px] font-mono tracking-[2px] uppercase text-teal/50 hover:text-teal transition-colors">All Services →</Link>
          </div>

          {[
            {
              slug: 'adu',
              index: '01',
              headline: <>Built for<br/>Life & Income</>,
              tagline: '400–1,200 sq ft accessory dwelling units. Full permit handling, design coordination, and 35+ years of licensed execution in Reno, Sparks, and Northern Nevada.',
              price: '$75K–$300K',
              priceNote: '$175/sqft and up',
              cta: 'Explore ADUs',
              img: SERVICE_IMGS['adu'],
            },
            {
              slug: 'new-home',
              index: '02',
              headline: <>Concept<br/>to Keys</>,
              tagline: 'Ground-up custom builds with in-house design. Every detail personalized from foundation to finish across Nevada and California.',
              price: '$500K+',
              priceNote: 'Full design-build',
              cta: 'Explore Custom Homes',
              img: SERVICE_IMGS['new-home'],
            },
            {
              slug: 'repairs',
              index: '03',
              headline: <>Fix It Right.<br/>Fix It Once.</>,
              tagline: 'Foundation repair, dry rot, water intrusion, structural framing. The structural specialists of Northern Nevada since 1989.',
              price: 'Free Inspection',
              priceNote: 'Quote in 24 hours',
              cta: 'Request Inspection',
              img: SERVICE_IMGS['repairs'],
            },
            {
              slug: 'kitchen-bath',
              index: '04',
              headline: <>Spaces You<br/>Live In Daily</>,
              tagline: 'High-quality finishes, modern functionality. Licensed remodeling contractors serving all of Northern Nevada.',
              price: '$30K–$150K',
              priceNote: 'Free estimate',
              cta: 'Explore Kitchen & Bath',
              img: SERVICE_IMGS['kitchen-bath'],
            },
            {
              slug: 'additions',
              index: '05',
              headline: <>More Space.<br/>Same Home.</>,
              tagline: 'Room additions, second stories, garage expansions. Add square footage without the cost of moving.',
              price: '$80K–$300K',
              priceNote: 'Free estimate',
              cta: 'Explore Additions',
              img: SERVICE_IMGS['additions'],
            },
            {
              slug: 'commercial',
              index: '06',
              headline: <>Built for<br/>Business</>,
              tagline: 'Tenant improvements, retail buildouts, offices, warehouses. Licensed in Nevada and California. Permits handled end to end.',
              price: 'Free Estimate',
              priceNote: 'NV & CA Licensed',
              cta: 'Explore Commercial',
              img: SERVICE_IMGS['commercial'],
            },
          ].map((svc, i) => (
            <div key={svc.slug}>
              {/* Divider between panels */}
              {i > 0 && <div className="h-px bg-gradient-to-r from-transparent via-teal/15 to-transparent" />}

              {/* DESKTOP panel — alternating left/right */}
              <Link
                href={`/services/${svc.slug}`}
                className={`hidden md:flex group relative overflow-hidden ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
                style={{ minHeight: '420px' }}
              >
                {/* Photo side */}
                <div className="relative w-[52%] flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.img}
                    alt={`${svc.cta} – BRE Builders`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    style={{ minHeight: '420px' }}
                  />
                  {/* Gradient fade into bg */}
                  <div className={`absolute inset-0 ${i % 2 === 1 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-void via-void/20 to-transparent`} />
                </div>

                {/* Accent line */}
                <div className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal/25 to-transparent z-10 ${i % 2 === 1 ? 'left-[52%]' : 'right-[52%]'}`} />

                {/* Content side */}
                <div className="flex-1 flex flex-col justify-center px-12 xl:px-16 py-12 relative z-10">
                  <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal/50 mb-4">{svc.index} / {SERVICES.find(s => s.slug === svc.slug)?.name}</p>
                  <h2 className="font-display font-light text-[clamp(36px,4vw,58px)] leading-[1.02] tracking-[-1px] text-cream mb-4">{svc.headline}</h2>
                  <p className="text-[15px] text-cream/80 leading-[1.7] mb-6 max-w-[380px]">{svc.tagline}</p>
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-[20px] font-semibold text-teal">{svc.price}</span>
                    <span className="font-mono text-[11px] text-cream/30 tracking-wider">· {svc.priceNote}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-void text-[13px] font-bold rounded-lg self-start group-hover:bg-gold transition-colors">
                    {svc.cta} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </div>
              </Link>

              {/* MOBILE card — full bleed photo, text pinned bottom */}
              <Link
                href={`/services/${svc.slug}`}
                className="md:hidden relative block overflow-hidden"
                style={{ minHeight: '420px' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.img}
                  alt={`${svc.cta} – BRE Builders`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/20" />
                <div className="relative z-10 flex flex-col justify-end h-full px-5 pb-7 pt-28">
                  <p className="font-mono text-[9px] tracking-[3px] uppercase text-teal/60 mb-2">{svc.index} · {SERVICES.find(s => s.slug === svc.slug)?.shortName}</p>
                  <h2 className="font-display font-light text-[34px] leading-[1.05] text-white mb-2">{svc.headline}</h2>
                  <p className="text-[13px] text-white/88 leading-[1.6] mb-5 max-w-[300px]">{svc.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] font-semibold text-teal">{svc.price}</span>
                    <span className="px-4 py-2.5 bg-teal text-void text-[13px] font-bold rounded-lg">Explore →</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>

        {/* ═══════════════ FEATURED PROJECT STRIP ══════════════════════════════ */}
        <section className="bg-void overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <Fade>
              <SL text="Signature Project" />
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
                <h2 className="font-display text-[clamp(32px,5vw,66px)] font-light leading-[1.0] tracking-tight">
                  Lake Tahoe<br /><span className="italic text-teal">Full Home Renovation</span>
                </h2>
                <Link href="/projects/lake-tahoe-interior-renovation" className="text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0">View Full Project →</Link>
              </div>
            </Fade>

            {/* 16-photo horizontal scroll gallery */}
            <div className="relative">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
                {Array.from({ length: 16 }, (_, i) => {
                  const n = String(i + 1).padStart(2, '0')
                  const suffix = i === 15 ? '-1' : ''
                  const captions = ['Exterior', 'Deck & Structure', 'Deck Railing', 'Interior Living', 'Finish Work', 'Loft Level', 'Custom Stairs', 'Bathroom', 'Interior Room', 'Bath Install', 'Staircase', 'Upper Level', 'Loft Natural Light', 'Deck Renovation', 'Walkway Detail', 'Completed']
                  return (
                    <Fade key={i} delay={i * 30} className="flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                      <div className="w-64 md:w-80 group cursor-pointer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://brebuilders.com/wp-content/uploads/2025/12/${n}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${i + 1}-of-16${suffix}-1024x684.webp`}
                          alt={`${captions[i]} – Lake Tahoe Full Home Renovation BRE Builders`}
                          className="w-full h-48 md:h-56 object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                          loading={i < 4 ? 'eager' : 'lazy'}
                        />
                        <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/70 uppercase px-1">{captions[i]}</p>
                      </div>
                    </Fade>
                  )
                })}
              </div>
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-void to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-void to-transparent pointer-events-none" />
            </div>

            <Fade delay={200} className="mt-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] text-cream/70 tracking-wider">695 Lakeview Blvd · Zephyr Cove, NV · 16 Photos · Full Home Renovation</p>
                {SITE.youtubeProject && (
                  <a href={SITE.youtubeProject} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal/60 hover:text-teal transition-colors font-mono text-[11px] tracking-wider">
                    ▶ Watch Project Video
                  </a>
                )}
              </div>
            </Fade>
          </div>
        </section>

        {/* ═══════════════════════════ ALL PROJECTS ═════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-deep">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Fade>
              <SL text="Our Work" />
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
                <h2 className="font-display text-[clamp(32px,5vw,66px)] font-light leading-[1.0] tracking-tight">
                  Projects That<br /><span className="italic text-teal">Speak.</span>
                </h2>
                <Link href="/projects" className="text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0">View All →</Link>
              </div>
            </Fade>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROJECTS.slice(0, 6).map((p, i) => (
                <Fade key={p.slug} delay={i * 65} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
                  <Link href={`/projects/${p.slug}`} className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/25 transition-all duration-500 bg-panel">
                    <div className={`relative overflow-hidden ${i === 0 ? 'h-64 md:h-72 lg:h-60' : 'h-52'}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.thumbnail}
                        alt={p.thumbnailAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                        loading={i < 3 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="font-mono text-[10px] tracking-[2px] uppercase text-teal/80 mb-1">{p.type}</div>
                        <h3 className="font-display text-[16px] text-white leading-snug">{p.title}</h3>
                        <p className="text-[12px] text-white/80 mt-1">📍 {p.location}</p>
                      </div>
                    </div>
                  </Link>
                </Fade>
              ))}
            </div>

            <Fade delay={300} className="mt-10 text-center">
              <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/12 text-cream/45 text-[12px] rounded-lg hover:border-teal/35 hover:text-teal transition-all font-mono tracking-wider uppercase">
                View All 9+ Projects →
              </Link>
            </Fade>
          </div>
        </section>

        {/* ═══════════════════════ RIPON ESTATE SPOTLIGHT ════════════════════════ */}
        <section className="bg-void py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Photo collage */}
              <Fade>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: 'https://brebuilders.com/wp-content/uploads/03368773-da7c-4798-8693-4b3cfefd3615.jpg', alt: 'Mediterranean front elevation Ripon CA luxury estate', cls: 'col-span-2 h-56' },
                    { src: 'https://brebuilders.com/wp-content/uploads/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg', alt: "Chef's kitchen custom cabinetry marble backsplash Ripon CA", cls: 'h-44' },
                    { src: 'https://brebuilders.com/wp-content/uploads/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg', alt: 'Grand foyer custom iron staircase Ripon CA luxury home', cls: 'h-44' },
                  ].map((img, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={i} src={img.src} alt={img.alt} className={`${img.cls} w-full object-cover rounded-xl`} loading="lazy" />
                  ))}
                </div>
              </Fade>

              {/* Copy */}
              <Fade delay={150}>
                <SL text="Signature Build — Ripon, CA" />
                <h2 className="font-display text-[clamp(30px,4vw,56px)] font-light leading-[1.05] tracking-tight mb-5">
                  Luxury Estate.<br /><span className="italic text-teal">Concept to Key.</span>
                </h2>
                <p className="text-[15px] text-cream/80 leading-relaxed mb-4">
                  A ground-up luxury estate in Ripon, California — blending classical European architecture with modern amenities. Every column, arch, and interior element was designed, engineered, and built by our licensed in-house team.
                </p>
                <p className="text-[15px] text-cream/80 leading-relaxed mb-8">
                  NV Lic #0085999 · CA Lic #1093798
                </p>
                <Link href="/projects/ripon-estate" className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-void text-[13px] font-semibold rounded-lg hover:bg-teal/90 transition-colors">
                  View Full Project →
                </Link>
              </Fade>
            </div>
          </div>
        </section>

        {/* ════════════════════════ ABOUT ══════════════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-panel border-y border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <Fade>
                <SL text="About Blue Reef Builders" />
                <h2 className="font-display text-[clamp(28px,4vw,56px)] font-light leading-[1.1] tracking-tight mb-6">
                  A Trusted General<br /><span className="italic text-teal">Contractor Since 1989</span>
                </h2>
                <p className="text-[15px] leading-relaxed text-cream/80 mb-4">
                  Blue Reef Enterprises, LLC is a licensed general contractor providing residential remodeling, commercial improvements, custom home building, and addition work across Northern Nevada and Northern California. Our projects are managed with precision, clean execution, and strict code compliance.
                </p>
                <p className="text-[15px] leading-relaxed text-cream/80 mb-8">
                  We focus on clear communication, responsible planning, and results that stay aligned with client expectations. Every build — small or large — is completed with attention to detail and a commitment to lasting quality.
                </p>
                {/* Named owner — E-E-A-T signal */}
                <div className="flex items-center gap-4 p-4 bg-deep border border-white/[0.06] rounded-xl mb-5">
                  <div className="w-12 h-12 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-[18px] text-teal font-light">SR</span>
                  </div>
                  <div>
                    <div className="font-display text-[15px] text-cream">Steve Rosenthal</div>
                    <div className="font-mono text-[10px] text-cream/45 tracking-wider mt-0.5">Owner & Founder · BRE Builders · Since 1989</div>
                    <div className="font-mono text-[9px] text-teal/60 tracking-wider mt-1">NV #0085999 · CA #1093798</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/about" className="px-5 py-2.5 border border-white/12 text-cream/55 text-[13px] rounded-lg hover:border-teal/40 hover:text-teal transition-all">Our Story →</Link>
                  <Link href="/our-approach" className="px-5 py-2.5 border border-white/12 text-cream/55 text-[13px] rounded-lg hover:border-teal/40 hover:text-teal transition-all">Our Approach →</Link>
                </div>
              </Fade>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { t: 'Exceptional Service', b: 'Prompt support, expert guidance, seamless experience from start to finish.' },
                  { t: 'Quality Focused', b: 'Premium tools, best practices, attention to detail on every single build.' },
                  { t: 'Competitive Pricing', b: 'No hidden fees. Tiered options to fit your budget without compromising quality.' },
                  { t: 'Fair Warranty', b: '1-year workmanship warranty on all projects, plus manufacturer warranties.' },
                ].map((v, i) => (
                  <Fade key={v.t} delay={i * 80}>
                    <div className="bg-deep border border-white/[0.06] rounded-xl p-5 hover:border-teal/20 transition-colors h-full">
                      <h4 className="font-display text-[15px] text-cream mb-2">{v.t}</h4>
                      <p className="text-[12px] text-cream/70 leading-relaxed">{v.b}</p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ TESTIMONIALS ═══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-deep">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Fade>
              <SL text="What Clients Say" />
              <h2 className="font-display text-[clamp(32px,5vw,66px)] font-light leading-[1.0] tracking-tight mb-14">
                Trusted Across<br /><span className="italic text-teal">Nevada & California.</span>
              </h2>
            </Fade>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <Fade key={t.name} delay={i * 60}>
                  <div className="bg-panel border border-white/[0.055] rounded-xl p-7 hover:border-teal/15 transition-colors relative h-full">
                    <div className="font-display text-[56px] leading-none text-teal/35 absolute top-4 left-5 select-none">&ldquo;</div>
                    <div className="flex gap-0.5 mb-3 pt-8">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-gold text-[14px]">★</span>)}
                    </div>
                    <p className="font-display text-[15px] italic text-cream/85 leading-relaxed mb-5">{t.text}</p>
                    <div className="font-semibold text-[13px] text-cream">{t.name}</div>
                    <div className="font-mono text-[10px] text-cream/60 tracking-wider mt-0.5">{t.location}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════ SERVICE AREAS ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-void">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <Fade>
                <SL text="Where We Build" />
                <h2 className="font-display text-[clamp(32px,4.5vw,60px)] font-light leading-[1.1] tracking-tight mb-6">
                  Reno to Northern<br /><span className="italic text-teal">California.</span>
                </h2>
                <p className="text-[15px] text-cream/48 leading-relaxed mb-8">
                  Licensed and active in Nevada and California. BRE Builders serves homeowners, investors, and businesses across the full Northern Nevada and Northern California region.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {['Reno, NV', 'Sparks, NV', 'Lake Tahoe, NV', 'Carson City, NV', 'Truckee, CA', 'Graeagle, CA', 'Northern California', 'Carson Valley, NV'].map(a => (
                    <div key={a} className="flex items-center gap-2.5 border border-white/[0.055] rounded-lg px-3 py-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      <span className="text-[13px] text-cream/80">{a}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-panel border border-l-[3px] border-l-gold border-white/[0.06] rounded-xl p-5">
                  <p className="text-[13px] text-cream/80 leading-[1.8]">
                    <strong className="text-gold">Nevada License #0085999</strong><br />
                    <strong className="text-gold/75">California License #1093798</strong><br />
                    Blue Reef Enterprises, LLC holds active licenses in both states for residential and commercial construction.
                  </p>
                </div>
              </Fade>
              <div className="space-y-3">
                {[
                  { area: 'Reno & Sparks', slug: '/service-areas/reno', svcs: 'ADUs · Repairs · Kitchen & Bath · Commercial · Decks', lic: 'NV #0085999' },
                  { area: 'Lake Tahoe', slug: '/service-areas/lake-tahoe', svcs: 'Deck Repair · Structural · Full Home Renovation · ADUs', lic: 'NV #0085999' },
                  { area: 'Carson City & Valley', slug: '/service-areas/carson-city', svcs: 'Residential · Commercial · ADUs · Additions', lic: 'NV #0085999' },
                  { area: 'Truckee & Graeagle', slug: '/service-areas/truckee', svcs: 'Custom Homes · Decks · Remodeling', lic: 'CA #1093798' },
                  { area: 'Northern California', slug: '/service-areas/northern-california', svcs: 'Custom Homes · Commercial · Repairs · Remodeling', lic: 'CA #1093798' },
                ].map((a, i) => (
                  <Fade key={a.area} delay={i * 55}>
                    <Link href={a.slug} className="flex items-start justify-between gap-4 p-5 bg-panel border border-white/[0.055] rounded-xl hover:border-teal/25 transition-all group">
                      <div>
                        <div className="font-display text-[16px] text-cream mb-1 group-hover:text-teal transition-colors">{a.area}</div>
                        <div className="text-[12px] text-cream/65">{a.svcs}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="font-mono text-[9px] tracking-wider text-teal/85">{a.lic}</span>
                        <svg className="w-4 h-4 text-cream/18 group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </Link>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ HOW IT WORKS ════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-void">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <SL text="How It Works" />
              <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight">
                Simple Process.<br /><span className="italic text-teal">No Surprises.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { step: '01', title: 'Call or Submit', desc: 'Reach out by phone or form. We respond within 24 hours — no sales pitch, just a conversation about your project.' },
                { step: '02', title: 'Free Site Visit', desc: 'Steve or a senior team member visits your property. We assess the full scope before quoting anything.' },
                { step: '03', title: 'Written Quote', desc: 'You receive a detailed written estimate — line by line. No vague numbers, no hidden fees. Ever.' },
                { step: '04', title: 'We Build', desc: 'Licensed crew, permitted work, clean execution. You get updates throughout. We match the quote or we tell you why.' },
              ].map((s, i) => (
                <div key={s.step} className="relative p-6 bg-panel border border-white/[0.06] rounded-xl hover:border-teal/20 transition-colors">
                  <div className="font-mono text-[40px] font-light text-teal/12 leading-none mb-3 select-none">{s.step}</div>
                  <div className="w-6 h-px bg-teal mb-4" />
                  <h3 className="font-display text-[17px] text-cream mb-2">{s.title}</h3>
                  <p className="text-[13px] text-cream/65 leading-relaxed">{s.desc}</p>
                  {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-teal/20" />}
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-panel border border-teal/15 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-mono text-[12px] text-cream/60 tracking-wide">
                <span className="text-teal font-medium">Guarantee:</span> We match the written quote on every project — or we explain why in writing before proceeding.
              </p>
              <Link href="/contact" className="px-6 py-2.5 bg-teal text-void text-[13px] font-bold rounded-lg hover:bg-gold transition-colors flex-shrink-0">
                Get Your Free Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════ FAQ ══════════════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-panel border-y border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16">
              <Fade>
                <SL text="Frequently Asked" />
                <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.1] tracking-tight mb-4">
                  Common<br /><span className="italic text-teal">Questions.</span>
                </h2>
                <p className="text-[14px] text-cream/75 leading-relaxed mb-6">Everything you need to know about working with BRE Builders.</p>
                <Link href="/faq" className="text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors">All FAQs →</Link>
              </Fade>
              <div>
                {FAQS.slice(0, 7).map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} idx={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ FINAL CTA ════════════════════════════════ */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          {/* Full bleed bg image */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://brebuilders.com/wp-content/uploads/2025/12/14-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-14-of-16-1024x684.webp"
              alt="Blue Reef Builders completed project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-void/88" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.05] to-gold/[0.03]" />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <Fade>
              <div className="inline-flex items-center gap-2 border border-teal/25 rounded-full px-4 py-2 bg-teal/[0.06] mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream font-medium">Now Accepting New Projects</span>
              </div>
              <h2 className="font-display text-[clamp(40px,7vw,88px)] font-light leading-[0.96] tracking-tight text-white mb-6">
                Let&apos;s Build Something<br />
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(30,207,201,0.4)' }}>Exceptional Together.</span>
              </h2>
              <p className="text-[16px] text-white/80 max-w-lg mx-auto leading-relaxed mb-10">
                Free estimates · Response within 24 hours · Licensed in Nevada and California since 1989.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="w-full sm:w-auto px-9 py-4 bg-teal text-void text-[14px] font-bold rounded-lg hover:bg-teal/90 transition-colors shadow-xl">
                  Request a Free Quote →
                </Link>
                <a href={SITE.phoneHref} className="w-full sm:w-auto px-9 py-4 border border-white/20 text-white text-[14px] rounded-lg hover:bg-white/10 transition-all font-mono backdrop-blur-sm">
                  {SITE.phone}
                </a>
              </div>
            </Fade>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

// ─── FAQ accordion ─────────────────────────────────────────────────────────────
function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)
  return (
    <Fade delay={idx * 35}>
      <div className="border-b border-white/[0.055]">
        <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
          <span className="text-[15px] text-cream/75 group-hover:text-cream transition-colors font-display">{q}</span>
          <span className={`flex-shrink-0 w-5 h-5 border border-white/18 rounded flex items-center justify-center text-cream/35 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        {open && <p className="pb-5 text-[14px] text-cream/78 leading-relaxed">{a}</p>}
      </div>
    </Fade>
  )
}
