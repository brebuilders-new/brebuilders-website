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
export function ServiceHeroSection({ hero }: { hero: ServiceHero }) {
  const licenseStr =
    hero.license === 'CA'
      ? 'CA Lic #1009219'
      : hero.license === 'both'
      ? 'NV #0085999 · CA #1009219'
      : 'NV Lic #0085999'

  return (
    <section className="relative min-h-[70vh] lg:min-h-[78vh] flex flex-col justify-end pb-14 lg:pb-24 pt-28 overflow-hidden">
      {/* Desktop background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hero.bgDesktop}
        alt={hero.h1Lines.join(' ') + ' BRE Builders'}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        fetchPriority="high"
      />
      {/* Mobile background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hero.bgMobile || hero.bgDesktop}
        alt={hero.h1Lines.join(' ') + ' BRE Builders'}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        fetchPriority="high"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-void/93 via-void/55 to-void/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

      <div className="relative z-10 container">
        <div className="max-w-[620px]">
          {/* Eyebrow */}
          <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-teal" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{hero.eyebrow}</span>
          </div>

          {/* H1 */}
          <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,80px)] leading-[0.93] tracking-tight text-white mb-4">
            {hero.h1Lines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
            {hero.h1Ghost && (
              <>
                <br />
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.35)' }}>
                  {hero.h1Ghost}
                </span>
              </>
            )}
          </h1>

          {/* Lead */}
          <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[490px]">
            {hero.lead}
          </p>

          {/* Badges */}
          {hero.badges && hero.badges.length > 0 && (
            <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
              {hero.badges.map((b) => (
                <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">
                  ✓ {b}
                </span>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="animate-fade-up-4">
            {/* Desktop CTAs */}
            <div className="hidden md:flex gap-3 flex-wrap mb-5">
              <Link href={hero.ctaPrimaryHref} className="btn-primary">
                {hero.ctaPrimaryLabel}
              </Link>
              {hero.ctaSecondaryLabel && hero.ctaSecondaryHref && (
                <Link href={hero.ctaSecondaryHref} className="btn-ghost">
                  {hero.ctaSecondaryLabel}
                </Link>
              )}
            </div>

            {/* Mobile CTAs */}
            <div className="md:hidden flex gap-3 mb-5">
              <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">
                📞 {hero.ctaMobileLabel || 'Call Now'}
              </a>
              <Link href={hero.ctaPrimaryHref} className="btn-ghost flex-1 justify-center">
                Get Quote
              </Link>
            </div>

            {/* Urgency note */}
            {hero.urgencyNote && (
              <p className="font-mono text-[11px] text-white/35 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                {hero.urgencyNote}
              </p>
            )}
          </div>
        </div>

        {/* Desktop stats row */}
        {hero.stats && hero.stats.length > 0 && (
          <div className="hidden md:flex gap-12 mt-10 pt-8 border-t border-white/10">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[clamp(22px,3vw,38px)] font-light text-white leading-none">{s.n}</div>
                <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">{s.label}</div>
              </div>
            ))}
            <div>
              <div className="font-mono text-[12px] text-teal leading-none">{licenseStr}</div>
              <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">Licensed</div>
            </div>
          </div>
        )}
      </div>
    </section>
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
