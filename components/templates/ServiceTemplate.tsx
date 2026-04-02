import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ServiceHero {
  bgDesktop: string          // Full-bleed desktop hero image URL
  bgMobile?: string          // Optional different crop for mobile
  eyebrow: string            // "ADU Construction · Reno & Northern Nevada"
  h1Lines: string[]          // Split into lines for display
  h1Ghost?: string           // Italic ghost line (outline style)
  lead: string               // Lead paragraph
  badges?: string[]          // Trust badges
  ctaPrimaryLabel: string    // Desktop primary CTA label
  ctaPrimaryHref: string     // Desktop primary CTA href
  ctaSecondaryLabel?: string // Desktop secondary CTA
  ctaSecondaryHref?: string
  ctaMobileLabel?: string    // Mobile override (default: 📞 Call Now)
  urgencyNote?: string       // Pulsing dot + note
  stats?: Array<{ n: string; label: string }> // Desktop stat row
  license?: 'NV' | 'CA' | 'both'
}

export interface ServiceSection {
  type: 'content' | 'gallery' | 'checklist' | 'cta-mobile' | 'cta-desktop' | 'faq' | 'testimonials' | 'related'
  bgColor?: string
  children: React.ReactNode
}

interface ServiceTemplateProps {
  hero: ServiceHero
  sections: React.ReactNode  // Page body content after hero
  schema?: object
}

// ─── Section label ─────────────────────────────────────────────────────────
export function SectionLabel({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
      <div className="w-7 h-px bg-teal flex-shrink-0" aria-hidden />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

// ─── Section heading ────────────────────────────────────────────────────────
export function SectionHeading({
  line1,
  line2italic,
  size = 'lg',
  className = '',
}: {
  line1: string
  line2italic?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}) {
  const sizes = {
    sm: 'text-[clamp(22px,3vw,38px)]',
    md: 'text-[clamp(26px,3.5vw,46px)]',
    lg: 'text-[clamp(28px,4vw,54px)]',
    xl: 'text-[clamp(36px,5.5vw,72px)]',
  }
  return (
    <h2
      className={`font-display font-light leading-[1.05] tracking-tight ${sizes[size]} ${className}`}
    >
      {line1}
      {line2italic && (
        <>
          <br />
          <span className="italic text-teal">{line2italic}</span>
        </>
      )}
    </h2>
  )
}

// ─── Speakable content block ─────────────────────────────────────────────────
export function SpeakableBlock({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 ${className}`}>
      {children}
    </div>
  )
}

// ─── Service page section wrapper ────────────────────────────────────────────
export function PageSection({
  bg = 'bg-deep',
  py = 'py-20 lg:py-28',
  border = false,
  children,
}: {
  bg?: string
  py?: string
  border?: boolean
  children: React.ReactNode
}) {
  return (
    <section className={`${py} ${bg} ${border ? 'border-y border-white/[0.05]' : ''}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

// ─── Mobile CTA box ──────────────────────────────────────────────────────────
export function MobileCTABox({
  headline,
  subtext,
  phone = true,
  ctaLabel = 'Request a Free Quote Online',
  ctaHref = '/contact',
  variant = 'default',
}: {
  headline: string
  subtext: string
  phone?: boolean
  ctaLabel?: string
  ctaHref?: string
  variant?: 'default' | 'urgent' | 'income'
}) {
  const variants = {
    default: 'bg-teal/[0.06] border-teal/20',
    urgent: 'bg-red-950/20 border-red-900/30',
    income: 'bg-teal/[0.08] border-teal/25',
  }
  return (
    <section className="md:hidden bg-void py-12">
      <div className="container">
        <div className={`${variants[variant]} border rounded-2xl p-6`}>
          <p className="font-display text-[22px] text-cream leading-snug mb-2">{headline}</p>
          <p className="text-[14px] text-cream/50 mb-6">{subtext}</p>
          {phone && (
            <a
              href={SITE.phoneHref}
              className="btn-primary w-full justify-center py-4 text-[15px] mb-3"
            >
              📞 {SITE.phone}
            </a>
          )}
          <Link href={ctaHref} className="btn-ghost w-full justify-center py-3 text-[13px]">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Desktop CTA section ─────────────────────────────────────────────────────
export function DesktopCTASection({
  bgImage,
  bgAlt,
  headline,
  headlineItalic,
  subtext,
  ctaLabel,
  ctaHref,
}: {
  bgImage: string
  bgAlt: string
  headline: string
  headlineItalic: string
  subtext: string
  ctaLabel: string
  ctaHref: string
}) {
  return (
    <section className="hidden md:block bg-void relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bgImage} alt={bgAlt} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-void/88" />
      </div>
      <div className="relative container text-center">
        <h2 className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.0] tracking-tight text-white mb-5">
          {headline}
          <br />
          <span className="italic text-teal">{headlineItalic}</span>
        </h2>
        <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">{subtext}</p>
        <div className="flex items-center justify-center gap-4">
          <Link href={ctaHref} className="btn-primary px-10 py-4 text-[14px]">
            {ctaLabel}
          </Link>
          <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Related services grid ────────────────────────────────────────────────────
export function RelatedServices({
  items,
}: {
  items: Array<{ label: string; href: string; desc: string }>
}) {
  return (
    <section className="py-16 bg-deep">
      <div className="container">
        <SectionLabel text="Related Services" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="group block p-4 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all"
            >
              <div className="font-display text-[15px] text-cream mb-1 group-hover:text-teal transition-colors">
                {s.label}
              </div>
              <div className="font-mono text-[11px] text-cream/35">{s.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ section ──────────────────────────────────────────────────────────────
export function ServiceFAQSection({
  faqs,
  aeoContent,
  internalLinks,
  label = 'Common Questions',
}: {
  faqs: Array<{ q: string; a: string }>
  aeoContent?: React.ReactNode
  internalLinks?: Array<{ label: string; href: string }>
  label?: string
}) {
  return (
    <PageSection bg="bg-panel" border>
      <div className="grid lg:grid-cols-2 gap-16">
        {aeoContent && <div>{aeoContent}</div>}
        <div className={!aeoContent ? 'lg:col-span-2 max-w-[800px]' : ''}>
          <SectionLabel text={label} />
          <div className="speakable-faq">
            <FAQAccordion items={faqs} />
          </div>
          {internalLinks && (
            <div className="hidden md:flex flex-wrap gap-3 mt-8">
              {internalLinks.map((l) => (
                <Link key={l.label} href={l.href} className="btn-ghost text-[12px] py-2 px-4">
                  {l.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageSection>
  )
}

// ─── Service Hero ─────────────────────────────────────────────────────────────
// Device-split: completely different layout and psychology for mobile vs desktop.
// Mobile: call-first, urgency-first, short copy, big CTA
// Desktop: research mode, stats, secondary CTA, full lead paragraph
export function ServiceHeroSection({ hero }: { hero: ServiceHero }) {
  const licenseStr =
    hero.license === 'CA'
      ? 'CA Lic #1093798'
      : hero.license === 'both'
      ? 'NV #0085999 · CA #1093798'
      : 'NV Lic #0085999'

  const h1Text = hero.h1Lines.join(' ')

  return (
    <>
      {/* ─────────────────────────────────────────────────────
          MOBILE HERO  (hidden on md+)
          Layout: stacked image top, content bottom
          Psychology: call-first, urgency-first, social proof
      ───────────────────────────────────────────────────── */}
      <section className="relative md:hidden overflow-hidden" style={{ minHeight: '100svh' }}>
        {/* Full-bleed image — top 60% */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.bgMobile || hero.bgDesktop}
            alt={h1Text + ' BRE Builders'}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            style={{ objectPosition: '50% 30%' }}
          />
          {/* Strong bottom fade — content must be readable */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(5,10,15,0.15) 0%, rgba(5,10,15,0.55) 40%, rgba(5,10,15,0.92) 65%, rgba(5,10,15,1) 85%)'
          }} />
        </div>

        {/* Content — anchored to bottom */}
        <div className="relative z-10 flex flex-col justify-end min-h-[inherit] px-5 pb-8 pt-28" style={{ minHeight: '100svh' }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-5 h-px bg-teal flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">{hero.eyebrow}</span>
          </div>

          {/* H1 — shorter/punchier on mobile */}
          <h1 className="font-display font-light text-[clamp(34px,9vw,52px)] leading-[0.95] tracking-tight text-white mb-3">
            {hero.h1Lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
            {hero.h1Ghost && (
              <span
                className="block italic mt-1"
                style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.4)', fontSize: '0.72em' }}
              >
                {hero.h1Ghost}
              </span>
            )}
          </h1>

          {/* Mobile-optimised lead — 2 lines max, action-oriented */}
          <p className="text-[14px] leading-[1.6] text-white/65 mb-4 max-w-[340px]">
            {/* Trim to first sentence for mobile brevity */}
            {hero.lead.split('.')[0]}.{' '}
            <span className="text-white/40 text-[12px]">{licenseStr}</span>
          </p>

          {/* Badges — horizontal scroll on mobile, 2 visible */}
          {hero.badges && hero.badges.length > 0 && (
            <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 mb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {hero.badges.slice(0, 4).map((b) => (
                <span
                  key={b}
                  className="flex-shrink-0 font-mono text-[9px] tracking-wider text-teal border border-teal/30 bg-teal/[0.1] px-2.5 py-1.5 rounded-lg"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  ✓ {b}
                </span>
              ))}
            </div>
          )}

          {/* Mobile CTAs — 2 full-width buttons, stacked */}
          {/* CALL is #1 action on mobile — 2.4x higher CTR than desktop */}
          <div className="flex flex-col gap-2.5 mb-4">
            <a
              href={SITE.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-4 bg-teal text-void text-[15px] font-bold rounded-xl"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {hero.ctaMobileLabel || 'Call for a Free Quote'}
            </a>
            <Link
              href={hero.ctaPrimaryHref}
              className="w-full flex items-center justify-center gap-2 py-3.5 border border-white/20 text-white text-[14px] font-mono rounded-xl bg-white/[0.04]"
            >
              Request Quote Online →
            </Link>
          </div>

          {/* Urgency + stats strip */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
            {hero.urgencyNote ? (
              <p className="font-mono text-[10px] text-white/35 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                {hero.urgencyNote}
              </p>
            ) : (
              <p className="font-mono text-[10px] text-white/35">{licenseStr} · Free Estimates</p>
            )}
            {hero.stats && hero.stats.length > 0 && (
              <div className="flex gap-4">
                {hero.stats.slice(0, 2).map(s => (
                  <div key={s.label} className="text-right">
                    <div className="font-display text-[16px] text-white leading-none">{s.n}</div>
                    <div className="font-mono text-[9px] text-white/30 uppercase mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          DESKTOP HERO  (hidden below md)
          Layout: full-bleed, content left-anchored
          Psychology: research mode, credentials, ROI proof
      ───────────────────────────────────────────────────── */}
      <section className="relative hidden md:flex flex-col justify-end pb-20 lg:pb-28 pt-32 overflow-hidden min-h-[82vh] lg:min-h-[88vh]">
        {/* Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.bgDesktop}
          alt={h1Text + ' BRE Builders'}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          style={{ objectPosition: '60% center' }}
        />
        {/* Multi-direction overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-void/96 via-void/60 to-void/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/40 to-transparent" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(30,207,201,1) 1px,transparent 1px),linear-gradient(90deg,rgba(30,207,201,1) 1px,transparent 1px)', backgroundSize: '80px 80px' }}
        />
        {/* Teal corner accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-teal/30" />

        <div className="relative z-10 container">
          {/* Eyebrow */}
          <div className="animate-fade-up-1 flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-teal" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{hero.eyebrow}</span>
            <span className="font-mono text-[10px] text-white/20">·</span>
            <span className="font-mono text-[10px] text-white/25 tracking-wider">{licenseStr}</span>
          </div>

          {/* H1 — large, confident, multiple lines */}
          <h1 className="animate-fade-up-2 font-display font-light text-[clamp(48px,6.5vw,90px)] leading-[0.92] tracking-tight text-white mb-6">
            {hero.h1Lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
            {hero.h1Ghost && (
              <span
                className="block italic"
                style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.32)', fontSize: '0.72em' }}
              >
                {hero.h1Ghost}
              </span>
            )}
          </h1>

          {/* Desktop lead — full paragraph, research-mode */}
          <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.8] text-white/65 mb-6 max-w-[560px]">
            {hero.lead}
          </p>

          {/* Badges */}
          {hero.badges && hero.badges.length > 0 && (
            <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-7">
              {hero.badges.map((b) => (
                <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  ✓ {b}
                </span>
              ))}
            </div>
          )}

          {/* Desktop CTAs — side by side, primary + secondary */}
          <div className="animate-fade-up-4 flex gap-3 flex-wrap items-center mb-6">
            <Link href={hero.ctaPrimaryHref} className="btn-primary px-8">
              {hero.ctaPrimaryLabel}
            </Link>
            {hero.ctaSecondaryLabel && hero.ctaSecondaryHref && (
              <Link href={hero.ctaSecondaryHref} className="btn-ghost">
                {hero.ctaSecondaryLabel}
              </Link>
            )}
            <a href={SITE.phoneHref} className="font-mono text-[13px] text-teal/70 hover:text-teal transition-colors ml-2">
              {SITE.phone}
            </a>
          </div>

          {/* Urgency note */}
          {hero.urgencyNote && (
            <div className="animate-fade-up-4 flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
              <p className="font-mono text-[11px] text-white/35">{hero.urgencyNote}</p>
            </div>
          )}

          {/* Desktop stats row — full credibility strip */}
          {hero.stats && hero.stats.length > 0 && (
            <div className="flex gap-10 lg:gap-14 pt-8 border-t border-white/10 mt-2">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[clamp(24px,3vw,40px)] font-light text-white leading-none">{s.n}</div>
                  <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1.5 uppercase">{s.label}</div>
                </div>
              ))}
              <div>
                <div className="font-mono text-[13px] text-teal leading-none">{licenseStr}</div>
                <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1.5 uppercase">Licensed</div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3 z-10 opacity-50">
          <div className="w-px h-10 bg-gradient-to-b from-teal to-transparent" />
          <span className="font-mono text-[9px] tracking-[3px] text-white/30 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>
    </>
  )
}

// ─── Full Service Page template wrapper ──────────────────────────────────────
export default function ServiceTemplate({ hero, sections, schema }: ServiceTemplateProps) {
  return (
    <>
      <Nav />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <main>
        <ServiceHeroSection hero={hero} />
        {sections}
      </main>
      <Footer />
    </>
  )
}
