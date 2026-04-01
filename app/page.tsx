'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE, SERVICES, PROJECTS, TESTIMONIALS, FAQS } from '@/lib/site-data'

// ─── Animated word cycling ──────────────────────────────────────────────────
const WORDS = ['Precision', 'Integrity', 'Strength', 'Craftsmanship', 'Vision', 'Innovation', 'Detail', 'Trust', 'Excellence']

function AnimatedWord() {
  const [idx, setIdx] = useState(0)
  const [vis, setVis] = useState(true)
  useEffect(() => {
    const t = setInterval(() => {
      setVis(false)
      setTimeout(() => { setIdx(i => (i + 1) % WORDS.length); setVis(true) }, 280)
    }, 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="text-teal italic inline-block" style={{ transition: 'opacity .28s,transform .28s', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(8px)' }}>
      {WORDS[idx]}
    </span>
  )
}

// ─── Fade-in on scroll ──────────────────────────────────────────────────────
function Fade({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const r = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = r.current; if (!el) return
    el.style.cssText = `opacity:0;transform:translateY(28px);transition:opacity .7s ease ${delay}ms,transform .7s ease ${delay}ms`
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect() }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={r} className={className}>{children}</div>
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

// ─── Home Page ───────────────────────────────────────────────────────────────
export default function HomePage() {
  // Cursor
  useEffect(() => {
    const c = document.getElementById('cursor'), r = document.getElementById('cursor-ring')
    if (!c || !r) return
    let rx = 0, ry = 0, id = 0
    const mv = (e: MouseEvent) => { c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px' }
    const loop = () => {
      const cx = parseFloat(c.style.left) || 0, cy = parseFloat(c.style.top) || 0
      rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12
      r.style.left = rx + 'px'; r.style.top = ry + 'px'
      id = requestAnimationFrame(loop)
    }
    document.addEventListener('mousemove', mv)
    id = requestAnimationFrame(loop)
    return () => { document.removeEventListener('mousemove', mv); cancelAnimationFrame(id) }
  }, [])

  return (
    <>
      <Nav />
      <main>

        {/* ═══════════════════════════════ HERO ══════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col justify-end pb-16 lg:pb-28 pt-28 overflow-hidden">
          {/* Bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-void via-[#0a1520] to-void" />
          <div className="absolute inset-0 opacity-[0.032]" style={{ backgroundImage: 'linear-gradient(rgba(30,207,201,1) 1px,transparent 1px),linear-gradient(90deg,rgba(30,207,201,1) 1px,transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse 100% 80% at 50% 0%,black 30%,transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal/[0.04] blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[110px] pointer-events-none" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            {/* Badge */}
            <Fade delay={0}>
              <div className="inline-flex items-center gap-2.5 border border-white/10 rounded-full px-4 py-2 bg-white/[0.025] mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Now Accepting New Projects · Northern Nevada & California</span>
              </div>
            </Fade>

            <Fade delay={80}>
              <h1 className="font-display font-light text-[clamp(44px,8.5vw,116px)] leading-[0.93] tracking-[-2px] text-cream mb-10">
                Built to Last.<br />
                Built by{' '}
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(240,236,228,0.28)' }}>Blue Reef.</span>
              </h1>
            </Fade>

            <Fade delay={180}>
              <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
                <div className="max-w-[520px]">
                  <p className="text-[15px] lg:text-[16px] leading-[1.75] text-cream/50 mb-5">
                    Licensed Nevada and California general contractor providing residential remodeling, commercial improvements, additions, and custom home building across Reno, Sparks, Lake Tahoe, Truckee, Carson City, Graeagle, and Northern California.
                  </p>
                  <p className="font-display text-[19px] text-cream/35">
                    We build with <AnimatedWord />.
                  </p>
                </div>
                <div className="flex flex-col gap-7">
                  <div className="flex gap-10 lg:gap-14">
                    {[{ num: '35+', lbl: 'Years' }, { num: 'NV·CA', lbl: 'Licensed' }, { num: 'Free', lbl: 'Estimates' }].map(s => (
                      <div key={s.lbl}>
                        <div className="font-display text-[clamp(26px,3.5vw,42px)] font-light text-cream leading-none">{s.num}</div>
                        <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-cream/28 mt-1">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Link href="/contact" className="px-6 py-3 bg-teal text-void text-[13px] font-semibold rounded-lg hover:bg-teal/90 transition-colors">
                      Get a Free Quote →
                    </Link>
                    <Link href="/projects" className="px-6 py-3 border border-white/12 text-cream/50 text-[13px] rounded-lg hover:border-white/25 hover:text-cream transition-all">
                      View Projects
                    </Link>
                    <a href={SITE.phoneHref} className="px-6 py-3 border border-teal/30 text-teal text-[13px] rounded-lg hover:bg-teal/10 transition-all font-mono">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 right-14 hidden lg:flex flex-col items-center gap-3">
            <div className="w-px h-14 bg-gradient-to-b from-teal/60 to-transparent" />
            <span className="font-mono text-[9px] tracking-[3px] text-cream/18 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          </div>
        </section>

        {/* ═══════════════════════════ TRUST BAR ═════════════════════════════ */}
        <div className="border-y border-white/[0.05] bg-panel/40 overflow-x-auto">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3.5 flex items-center gap-8 min-w-max">
            {['NV License #0085999', 'CA License #1009219', 'Since 1989 — 35+ Years', 'Free Estimates', '1-Year Warranty', 'Full Permit Handling', 'Bonded & Insured'].map(t => (
              <div key={t} className="flex items-center gap-2 flex-shrink-0">
                <span className="text-teal text-[11px]">✓</span>
                <span className="font-mono text-[11px] tracking-wide text-cream/35 whitespace-nowrap">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════ SERVICES ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-deep">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Fade>
              <SectionLabel text="What We Build" />
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
                <h2 className="font-display text-[clamp(32px,5vw,66px)] font-light leading-[1.04] tracking-tight">
                  Every Project.<br /><span className="italic text-teal">Every Scale.</span>
                </h2>
                <Link href="/services" className="text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors">All Services →</Link>
              </div>
            </Fade>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SERVICES.slice(0, 8).map((s, i) => (
                <Fade key={s.slug} delay={i * 55}>
                  <Link href={`/services/${s.slug}`} className="group block bg-panel border border-white/[0.055] rounded-xl p-5 lg:p-6 hover:border-teal/30 hover:bg-surface transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-teal/0 via-teal/50 to-teal/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="text-xl lg:text-2xl mb-3 lg:mb-4">
                      {({ adu: '🏡', 'kitchen-bath': '🍳', 'new-home': '🏠', additions: '➕', decks: '🪵', repairs: '🔧', commercial: '🏢', concrete: '🏗️', hauling: '🚛' } as Record<string,string>)[s.slug] ?? '🏗️'}
                    </div>
                    <h3 className="font-display text-[16px] lg:text-[18px] text-cream mb-1.5 leading-snug">{s.shortName}</h3>
                    <p className="text-[12px] text-cream/40 leading-relaxed line-clamp-2 hidden sm:block">{s.description}</p>
                    {'priceRange' in s && s.priceRange && (
                      <p className="mt-2.5 font-mono text-[10px] text-teal/65">{s.priceRange}</p>
                    )}
                    <div className="mt-3 lg:mt-4 text-[10px] font-mono tracking-wider uppercase text-teal/50 group-hover:text-teal transition-colors flex items-center gap-1">
                      Learn more <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                    </div>
                  </Link>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ ABOUT ═════════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-void border-y border-white/[0.04]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <Fade>
                <SectionLabel text="About Blue Reef Builders" />
                <h2 className="font-display text-[clamp(28px,4vw,54px)] font-light leading-[1.1] tracking-tight mb-6">
                  A Trusted General<br /><span className="italic text-teal">Contractor Since 1989</span>
                </h2>
                <p className="text-[15px] leading-relaxed text-cream/50 mb-4">
                  Blue Reef Enterprises, LLC is a licensed general contractor providing residential remodeling, commercial improvements, custom home building, and addition work across Northern Nevada and Northern California.
                </p>
                <p className="text-[15px] leading-relaxed text-cream/50 mb-8">
                  Our projects are managed with precision, clean execution, and strict code compliance to ensure long-term reliability. We focus on clear communication, responsible planning, and results that stay aligned with client expectations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/about" className="px-5 py-2.5 border border-white/12 text-cream/55 text-[13px] rounded-lg hover:border-teal/35 hover:text-teal transition-all">Our Story →</Link>
                  <Link href="/our-approach" className="px-5 py-2.5 border border-white/12 text-cream/55 text-[13px] rounded-lg hover:border-teal/35 hover:text-teal transition-all">Our Approach →</Link>
                </div>
              </Fade>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { t: 'Exceptional Service', b: 'Prompt support, expert guidance, and a seamless experience from start to finish.' },
                  { t: 'Quality Focused', b: 'Premium tools, best practices, and attention to detail on every build.' },
                  { t: 'Competitive Pricing', b: 'Honest value — no hidden fees. Tiered options to fit your budget.' },
                  { t: 'Fair Warranty', b: '1-year workmanship warranty on all projects, plus manufacturer warranties.' },
                ].map((v, i) => (
                  <Fade key={v.t} delay={i * 75}>
                    <div className="bg-panel border border-white/[0.055] rounded-xl p-5 hover:border-teal/20 transition-colors h-full">
                      <h4 className="font-display text-[15px] text-cream mb-2">{v.t}</h4>
                      <p className="text-[12px] text-cream/38 leading-relaxed">{v.b}</p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ PROJECTS ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-deep">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Fade>
              <SectionLabel text="Our Work" />
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
                <h2 className="font-display text-[clamp(32px,5vw,66px)] font-light leading-[1.04] tracking-tight">
                  Projects That<br /><span className="italic text-teal">Speak.</span>
                </h2>
                <Link href="/projects" className="text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors">View All Projects →</Link>
              </div>
            </Fade>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROJECTS.slice(0, 6).map((p, i) => (
                <Fade key={p.slug} delay={i * 70} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
                  <Link href={`/projects/${p.slug}`} className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/20 transition-all duration-500 bg-panel">
                    <div className={`relative overflow-hidden ${i === 0 ? 'h-64 md:h-80' : 'h-52'}`}>
                      <Image src={p.thumbnail} alt={p.thumbnailAlt} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                      <div className="font-mono text-[10px] tracking-[2px] uppercase text-teal/65 mb-1.5">{p.type}</div>
                      <h3 className="font-display text-[16px] text-cream mb-1 group-hover:text-teal/80 transition-colors leading-snug">{p.title}</h3>
                      <p className="text-[12px] text-cream/35">📍 {p.location}</p>
                    </div>
                  </Link>
                </Fade>
              ))}
            </div>
            <Fade delay={200}>
              <div className="mt-10 text-center">
                <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-3 border border-white/12 text-cream/45 text-[12px] rounded-lg hover:border-teal/35 hover:text-teal transition-all font-mono tracking-wider uppercase">
                  View All 9+ Projects →
                </Link>
              </div>
            </Fade>
          </div>
        </section>

        {/* ════════════════════════ TESTIMONIALS ═════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-panel border-y border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Fade>
              <SectionLabel text="What Clients Say" />
              <h2 className="font-display text-[clamp(32px,5vw,66px)] font-light leading-[1.04] tracking-tight mb-14">
                Trusted Across<br /><span className="italic text-teal">Nevada & California.</span>
              </h2>
            </Fade>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <Fade key={t.name} delay={i * 65}>
                  <div className="bg-deep border border-white/[0.055] rounded-xl p-7 hover:border-teal/15 transition-colors relative h-full">
                    <div className="font-display text-[52px] leading-none text-teal/18 absolute top-4 left-5 select-none">&ldquo;</div>
                    <p className="font-display text-[15px] italic text-cream/62 leading-relaxed pt-8 mb-5">{t.text}</p>
                    <div>
                      <div className="font-semibold text-[13px] text-cream">{t.name}</div>
                      <div className="font-mono text-[10px] text-cream/28 tracking-wider mt-0.5">{t.location}</div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ SERVICE AREAS ══════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-void">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <Fade>
                <SectionLabel text="Where We Build" />
                <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-light leading-[1.1] tracking-tight mb-6">
                  Reno to Northern<br /><span className="italic text-teal">California.</span>
                </h2>
                <p className="text-[15px] text-cream/48 leading-relaxed mb-8">
                  Licensed and active in Nevada and California. BRE Builders serves homeowners, investors, and businesses across the full Northern Nevada and Northern California region.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {['Reno, NV', 'Sparks, NV', 'Lake Tahoe, NV', 'Carson City, NV', 'Truckee, CA', 'Graeagle, CA', 'Northern California', 'Carson Valley, NV'].map(a => (
                    <div key={a} className="flex items-center gap-2.5 border border-white/[0.055] rounded-lg px-3 py-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      <span className="text-[13px] text-cream/55">{a}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-deep border border-l-[3px] border-l-gold border-white/[0.06] rounded-xl p-5">
                  <p className="text-[13px] text-cream/50 leading-[1.8]">
                    <strong className="text-gold">Nevada License #0085999</strong><br />
                    <strong className="text-gold/75">California License #1009219</strong><br />
                    Blue Reef Enterprises, LLC holds active licenses in both states for residential and commercial construction.
                  </p>
                </div>
              </Fade>
              <div className="space-y-3">
                {[
                  { area: 'Reno & Sparks', slug: '/service-areas/reno', svcs: 'ADUs · Repairs · Kitchen & Bath · Commercial · Decks · Concrete', lic: 'NV #0085999' },
                  { area: 'Lake Tahoe', slug: '/service-areas/lake-tahoe', svcs: 'Deck Repair · Structural · Full Home Renovation · ADUs', lic: 'NV #0085999' },
                  { area: 'Carson City & Valley', slug: '/service-areas/carson-city', svcs: 'Residential · Commercial · ADUs · Additions', lic: 'NV #0085999' },
                  { area: 'Truckee & Graeagle', slug: '/service-areas/truckee', svcs: 'Custom Homes · Decks · Remodeling', lic: 'CA #1009219' },
                  { area: 'Northern California', slug: '/service-areas/northern-california', svcs: 'Custom Homes · Commercial · Repairs · Remodeling', lic: 'CA #1009219' },
                ].map((a, i) => (
                  <Fade key={a.area} delay={i * 55}>
                    <Link href={a.slug} className="flex items-start justify-between gap-4 p-5 bg-panel border border-white/[0.055] rounded-xl hover:border-teal/22 transition-all group">
                      <div>
                        <div className="font-display text-[16px] text-cream mb-1 group-hover:text-teal transition-colors">{a.area}</div>
                        <div className="text-[12px] text-cream/32">{a.svcs}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="font-mono text-[9px] tracking-wider text-teal/55">{a.lic}</span>
                        <svg className="w-4 h-4 text-cream/18 group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/></svg>
                      </div>
                    </Link>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ FAQ ═══════════════════════════════════ */}
        <section className="py-24 lg:py-32 bg-deep">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16">
              <Fade>
                <SectionLabel text="Frequently Asked" />
                <h2 className="font-display text-[clamp(28px,4vw,50px)] font-light leading-[1.1] tracking-tight mb-4">
                  Common<br /><span className="italic text-teal">Questions.</span>
                </h2>
                <p className="text-[14px] text-cream/42 leading-relaxed mb-6">Everything you need to know about working with BRE Builders.</p>
                <Link href="/faq" className="text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors">All FAQs →</Link>
              </Fade>
              <div>
                {FAQS.slice(0, 7).map((f, i) => <FAQItem key={i} q={f.q} a={f.a} idx={i} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ FINAL CTA ═════════════════════════════ */}
        <section className="py-24 lg:py-36 bg-void relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.035] to-gold/[0.025]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal/[0.04] rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <Fade>
              <div className="inline-flex items-center gap-2 border border-teal/18 rounded-full px-4 py-2 bg-teal/[0.04] mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Now Accepting New Projects</span>
              </div>
              <h2 className="font-display text-[clamp(36px,6.5vw,84px)] font-light leading-[0.98] tracking-tight text-cream mb-6">
                Let&apos;s Build Something<br />
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(30,207,201,0.35)' }}>Exceptional Together.</span>
              </h2>
              <p className="text-[15px] text-cream/42 max-w-lg mx-auto leading-relaxed mb-10">
                Free estimates · Response within 24 hours · Licensed in Nevada and California since 1989.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-teal text-void text-[14px] font-semibold rounded-lg hover:bg-teal/90 transition-colors">
                  Request a Free Quote →
                </Link>
                <a href={SITE.phoneHref} className="w-full sm:w-auto px-8 py-4 border border-white/12 text-cream/55 text-[14px] rounded-lg hover:border-teal/35 hover:text-teal transition-all font-mono">
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

// FAQ accordion (separate component to avoid hooks-in-loop)
function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)
  return (
    <Fade delay={idx * 35}>
      <div className="border-b border-white/[0.055]">
        <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
          <span className="text-[15px] text-cream/75 group-hover:text-cream transition-colors font-display">{q}</span>
          <span className={`flex-shrink-0 w-5 h-5 border border-white/18 rounded flex items-center justify-center text-cream/35 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
          </span>
        </button>
        {open && <p className="pb-5 text-[14px] text-cream/45 leading-relaxed">{a}</p>}
      </div>
    </Fade>
  )
}
