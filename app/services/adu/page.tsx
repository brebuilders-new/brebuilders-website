import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

// ─── SEO metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'ADU Builders Reno NV | $75K–$300K Complete Builds',
  description:
    'Licensed ADU contractors in Reno, NV. Complete builds from $75,000. Permit-ready plans, full design-build, 35+ years experience. NV License #0085999. Free quote in 24 hours.',
  openGraph: {
    title: 'ADU Builders Reno NV | $75K–$300K | Blue Reef Builders',
    description:
      'Build an ADU in Reno from $75,000. Studio, 1-bed, 2-bed. Permit-ready plans. Licensed NV #0085999. Free quote.',
    images: [
      {
        url: IMGS.adu_main,
        width: 600,
        height: 403,
        alt: 'ADU Construction Reno NV – BRE Builders',
      },
    ],
  },
  alternates: { canonical: 'https://brebuilders.com/adus/' },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/adus/#service',
      name: 'ADU Construction Reno NV',
      alternateName: 'Accessory Dwelling Unit Builder Reno Nevada',
      description:
        'BRE Builders designs and constructs accessory dwelling units (ADUs) in Reno, NV. Studio to 2-bedroom builds from $75,000. Complete permit handling, design, and construction.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Lake Tahoe, NV' },
      ],
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '75000',
        highPrice: '300000',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does an ADU cost in Reno NV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ADU costs in Reno range from $75,000 to $300,000 for complete builds. Studio ADUs (400–600 sq ft) start at $75,000. One-bedroom units average $95,000–$115,000. Two-bedroom ADUs range from $115,000–$300,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I legally build an ADU in Reno Nevada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Nevada and Washoe County allow ADUs on most residential lots. Zoning, lot size, and owner-occupancy rules apply. BRE Builders handles all permits and compliance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build an ADU in Reno?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Permits take 4–6 weeks. Construction takes 8–14 weeks. Total timeline is typically 3–5 months for a complete ADU in Reno, NV.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much rental income can I earn from an ADU in Reno?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ADUs in Reno typically earn $1,200–$2,000/month in rental income. Nevada requires a 30-day minimum rental period and the property owner must occupy the main unit.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'ADU Construction',
          item: 'https://brebuilders.com/adus/',
        },
      ],
    },
    // Speakable schema — tells Google AI which content to read aloud / cite
    {
      '@type': 'SpeakableSpecification',
      '@id': 'https://brebuilders.com/adus/#speakable',
      cssSelector: ['.speakable-summary', '.speakable-pricing', '.speakable-faq'],
    },
  ],
}

// ─── Static data ──────────────────────────────────────────────────────────────
const ADU_TYPES = [
  {
    type: 'Studio ADU',
    sqft: '400–600 sq ft',
    price: 'Starting at $75,000',
    use: 'Guest house · Short-term rental · Home office',
    img: IMGS.adu_pool,
    alt: 'Pool House Studio ADU Build Blue Reef Builders Reno NV',
  },
  {
    type: '1-Bedroom ADU',
    sqft: '600–800 sq ft',
    price: '$95,000–$115,000',
    use: 'In-law suite · Long-term rental · Young adult',
    img: IMGS.adu_inlaw,
    alt: 'In-Law Suite One Bedroom ADU BRE Builders Northern Nevada',
  },
  {
    type: '2-Bedroom ADU',
    sqft: '800–1,200 sq ft',
    price: '$115,000–$300,000',
    use: 'Family housing · Investment rental · Full guest suite',
    img: IMGS.adu_garage,
    alt: 'Two Bedroom ADU Garage Conversion Reno NV BRE Builders',
  },
]

const ADU_FAQS = [
  {
    q: 'How much does an ADU cost in Reno NV?',
    a: 'ADU costs in Reno range from $75,000 to $300,000 for complete builds, including permits and utilities. Studio ADUs (400–600 sq ft) start at $75,000. One-bedroom units average $95,000–$115,000. Two-bedroom ADUs range from $115,000–$300,000.',
  },
  {
    q: 'Can I legally build an ADU in Reno Nevada?',
    a: 'Yes — Nevada and Washoe County allow ADUs on most residential lots. There are zoning, lot-size, and owner-occupancy requirements. BRE Builders handles all permit applications and compliance checks.',
  },
  {
    q: 'How long does it take to build an ADU in Reno?',
    a: 'Permits take 4–6 weeks. Construction runs 8–14 weeks. Total from contract to move-in is typically 3–5 months.',
  },
  {
    q: 'How much rental income can my ADU earn?',
    a: 'ADUs in Reno typically earn $1,200–$2,000/month in rental income. Nevada requires 30-day minimum rental and owner must occupy the main unit.',
  },
  {
    q: 'Does BRE Builders handle the ADU permit?',
    a: 'Yes. We manage the entire permitting process from Washoe County and the City of Reno. Permit costs typically run $3,000–$5,000.',
  },
  {
    q: 'What types of ADUs can I build in Reno?',
    a: 'Detached backyard homes, garage conversions, pool houses, in-law suites, and junior ADUs (JADUs). We build all types and advise which works best for your property.',
  },
]

// ─── Section label helper ─────────────────────────────────────────────────────
function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ADUPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* ══════════════════════════════ HERO ══════════════════════════════ */}
        {/* Hero is device-split:
            Desktop: full-bleed project photo + ROI angle ("$1,800/month")
            Mobile: call-first layout, urgency + license trust signal */}
        <section className="relative min-h-[75vh] lg:min-h-[80vh] flex flex-col justify-end pb-14 lg:pb-24 pt-28 overflow-hidden">
          {/* Background — desktop: adu_main landscape, mobile: pool house portrait crop */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.adu_main}
            alt="ADU Backyard Home Builder Reno NV Complete Builds BRE Builders"
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            fetchPriority="high"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.adu_pool}
            alt="Pool House ADU Build Blue Reef Builders Reno NV"
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            fetchPriority="high"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/50 to-void/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />
          <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

          <div className="relative z-10 container">
            <div className="max-w-[620px]">
              {/* Eyebrow */}
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">
                  ADU Construction · Reno & Northern Nevada
                </span>
              </div>

              {/* H1 */}
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(40px,6.5vw,82px)] leading-[0.94] tracking-tight text-white mb-4">
                ADU Builders
                <br />
                Reno, Nevada
                <br />
                <span
                  className="italic"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(30,207,201,0.5)' }}
                >
                  $175/sq ft and up
                </span>
              </h1>

              {/* Lead */}
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[490px]">
                Licensed ADU contractors serving Reno, Sparks, and Lake Tahoe. Complete builds from{' '}
                <strong className="text-white/90">$75,000</strong>. Permit-ready plans, expert
                design-build, 35+ years experience. NV License #0085999.
              </p>

              {/* Trust badges */}
              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['Permit-Ready Plans', 'Expert Design & Build', 'Built to Code', 'Free Quote in 24h'].map((b) => (
                  <span
                    key={b}
                    className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              {/* CTAs — DESKTOP: quote-first | MOBILE: call-first */}
              <div className="animate-fade-up-4">
                {/* Desktop CTAs */}
                <div className="hidden md:flex gap-3 flex-wrap mb-5">
                  <Link
                    href="/contact?service=adu"
                    className="btn-primary"
                  >
                    Get a Free ADU Quote →
                  </Link>
                  <Link href="/projects/adus" className="btn-ghost">
                    View ADU Portfolio
                  </Link>
                  <a href={SITE.phoneHref} className="btn-teal-outline">
                    {SITE.phone}
                  </a>
                </div>

                {/* Mobile CTAs */}
                <div className="md:hidden flex gap-3 mb-5">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">
                    📞 Call Now
                  </a>
                  <Link href="/contact?service=adu" className="btn-ghost flex-1 justify-center">
                    Get Quote
                  </Link>
                </div>

                {/* Urgency note */}
                <p className="font-mono text-[11px] text-white/35 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                  Now accepting 2026 ADU projects — response within 24 hours
                </p>
              </div>
            </div>

            {/* Desktop stats row */}
            <div className="hidden md:flex gap-12 mt-10 pt-8 border-t border-white/10">
              {[
                { n: '$75K', label: 'Starting Price' },
                { n: '35+', label: 'Years Experience' },
                { n: '3–5 mo', label: 'Avg Timeline' },
                { n: 'Free', label: 'Estimates' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[clamp(22px,3vw,38px)] font-light text-white leading-none">
                    {s.n}
                  </div>
                  <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
              <div>
                <div className="font-mono text-[12px] text-teal leading-none">NV Lic #0085999</div>
                <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">
                  Licensed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ INCOME HOOK — device-split psychology ══════════════ */}
        {/* Mobile: emotional anchor — "Your neighbor is making $1,800/month" */}
        <section className="md:hidden bg-teal/[0.06] border-b border-teal/20 py-5">
          <div className="container">
            <p className="font-display text-[20px] text-cream leading-snug">
              Your neighbor&apos;s ADU is earning{' '}
              <span className="text-teal font-semibold">$1,800/month.</span>
              <br />
              Yours could too.
            </p>
            <p className="font-mono text-[11px] text-cream/40 mt-2 tracking-wide">
              Reno ADUs earn $1,200–$2,000/month · 30-day min rental required
            </p>
          </div>
        </section>

        {/* Desktop: ROI calculator strip — research mode */}
        <section className="hidden md:block bg-panel border-y border-white/[0.06]">
          <div className="container py-6">
            <div className="grid grid-cols-4 gap-8">
              {[
                { label: 'ADU Build Cost', val: '$75K–$300K', sub: 'Complete build + permits' },
                { label: 'Monthly Rental Income', val: '$1,200–$2,000', sub: 'Reno market average' },
                { label: 'Annual Income', val: '$14.4K–$24K', sub: 'Before expenses' },
                { label: 'Payback Period', val: '6–15 years', sub: 'On a $75K–$150K ADU' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[28px] text-teal font-light leading-none">
                    {s.val}
                  </div>
                  <div className="font-mono text-[11px] text-cream/65 mt-1">{s.label}</div>
                  <div className="font-mono text-[10px] text-cream/30 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ADU TYPES + PRICING ═══════════════════════ */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="ADU Types & Pricing" />
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-[clamp(28px,4.5vw,58px)] font-light leading-[1.05] tracking-tight">
                Choose Your ADU.
                <br />
                <span className="italic text-teal">We Handle Everything Else.</span>
              </h2>
              <Link
                href="/contact?service=adu"
                className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0"
              >
                Get Custom Quote →
              </Link>
            </div>

            {/* Desktop: 3-col cards | Mobile: vertical stack */}
            <div className="grid md:grid-cols-3 gap-5">
              {ADU_TYPES.map((t) => (
                <div key={t.type} className="card group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.img}
                      alt={t.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-[20px] text-cream">{t.type}</h3>
                        <p className="font-mono text-[11px] text-cream/40 mt-0.5">{t.sqft}</p>
                      </div>
                      <span className="font-mono text-[10px] text-teal bg-teal/10 border border-teal/25 px-2 py-1.5 rounded-lg text-right leading-snug">
                        {t.price}
                      </span>
                    </div>
                    <p className="text-[13px] text-cream/45 leading-relaxed mb-4">{t.use}</p>
                    <Link
                      href={`/contact?service=adu&type=${encodeURIComponent(t.type)}`}
                      className="text-[11px] font-mono tracking-wider uppercase text-teal/55 hover:text-teal transition-colors flex items-center gap-1"
                    >
                      Quote this type →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: call CTA after pricing */}
            <div className="md:hidden mt-8">
              <a
                href={SITE.phoneHref}
                className="btn-primary w-full justify-center py-4 text-[14px]"
              >
                📞 Call to Discuss Your ADU
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ GALLERY ═══════════════════════════════ */}
        {/* Mobile: carousel (scroll) | Desktop: 2×2 grid */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="ADU Portfolio" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight">
                ADUs We&apos;ve Built
                <br />
                <span className="italic text-teal">in Northern Nevada.</span>
              </h2>
              <Link
                href="/portfolio/adus/"
                className="hidden md:inline-flex items-center gap-2 text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0"
              >
                Full ADU Portfolio →
              </Link>
            </div>

            {/* MOBILE: horizontal scroll carousel */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none" style={{ scrollSnapType: 'x mandatory' }}>
                {[
                  { src: IMGS.adu_pool, alt: 'Pool House ADU Build Blue Reef Builders Reno NV', cap: 'Pool House ADU' },
                  { src: IMGS.adu_inlaw, alt: 'In-Law Suite ADU Private Entrance BRE Builders', cap: 'In-Law Suite' },
                  { src: IMGS.adu_garage, alt: 'Garage ADU Conversion Custom Storage BRE Builders', cap: 'Garage Conversion' },
                  { src: IMGS.adu_main, alt: 'ADU Backyard Home Builder Reno NV BRE Builders', cap: 'Backyard ADU' },
                ].map((img, i) => (
                  <div key={i} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '75vw' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-52 object-cover rounded-xl"
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                    <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.cap}</p>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-cream/25 tracking-wider mt-2">← Swipe · 4 photos</p>
            </div>

            {/* DESKTOP: 2×2 grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { src: IMGS.adu_pool, alt: 'Pool House ADU Build Blue Reef Builders Reno NV', cap: 'Pool House ADU' },
                { src: IMGS.adu_inlaw, alt: 'In-Law Suite ADU Private Entrance BRE Builders Northern Nevada', cap: 'In-Law Suite ADU' },
                { src: IMGS.adu_garage, alt: 'Garage ADU Conversion Custom Storage Blue Reef Builders Reno', cap: 'Garage ADU Conversion' },
                { src: IMGS.adu_main, alt: 'ADU Backyard Home Builder Reno NV Complete Builds BRE Builders', cap: 'Backyard ADU' },
              ].map((img, i) => (
                <div key={i} className="group overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-600"
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.cap}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ HOW IT WORKS ══════════════════════════════ */}
        {/* Desktop: horizontal timeline | Mobile: stacked numbered steps */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <SL text="The Process" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              From Concept to
              <br />
              <span className="italic text-teal">Keys in Hand.</span>
            </h2>

            {/* Desktop: 4-column horizontal */}
            <div className="hidden md:grid grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Free Consultation',
                  time: 'Day 1',
                  body: 'We review your property, discuss ADU options, and provide a ballpark cost estimate. No commitment required.',
                },
                {
                  step: '02',
                  title: 'Design & Permits',
                  time: '4–6 Weeks',
                  body: 'BRE handles all permit applications with Washoe County and the City of Reno. We manage the entire approval process.',
                },
                {
                  step: '03',
                  title: 'Construction',
                  time: '8–14 Weeks',
                  body: 'Foundation, framing, MEP, insulation, and finishes — all by our licensed in-house team with regular milestone updates.',
                },
                {
                  step: '04',
                  title: 'Move-In Ready',
                  time: 'Week 16+',
                  body: 'Final inspection, Certificate of Occupancy, and keys. Your ADU is ready for occupancy or rental immediately.',
                },
              ].map((s) => (
                <div key={s.step}>
                  <div className="font-mono text-[11px] text-teal/60 mb-3">{s.step}</div>
                  <h3 className="font-display text-[20px] text-cream mb-1">{s.title}</h3>
                  <p className="font-mono text-[10px] text-teal/70 mb-3 tracking-wider">{s.time}</p>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Mobile: stacked steps */}
            <div className="md:hidden space-y-4">
              {[
                {
                  step: '01',
                  title: 'Free Consultation',
                  time: 'Day 1',
                  body: 'Call or submit a request. We review your property and give you a ballpark estimate at no charge.',
                },
                {
                  step: '02',
                  title: 'Permits',
                  time: '4–6 Weeks',
                  body: 'We handle all Washoe County and City of Reno permits. Typical permit cost: $3,000–$5,000.',
                },
                {
                  step: '03',
                  title: 'Construction',
                  time: '8–14 Weeks',
                  body: 'Licensed in-house team. Foundation through finishes. You get milestone updates throughout.',
                },
                {
                  step: '04',
                  title: 'Move-In Ready',
                  time: 'Week 16+',
                  body: 'CO inspection, walkthrough, keys. Ready for tenant or family the same week.',
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex gap-4 p-4 bg-deep rounded-xl border border-white/[0.055]"
                >
                  <div className="font-mono text-[28px] text-teal/20 font-bold leading-none flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-display text-[17px] text-cream">{s.title}</div>
                    <div className="font-mono text-[10px] text-teal/60 tracking-wider mb-2">
                      {s.time}
                    </div>
                    <p className="text-[13px] text-cream/45 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
              <a
                href={SITE.phoneHref}
                className="btn-primary w-full justify-center py-4 mt-2 text-[14px]"
              >
                📞 Start Your ADU Today
              </a>
            </div>
          </div>
        </section>

        {/* ════════════ WHY BUILD AN ADU — AEO / Speakable content ════════════ */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: speakable facts block */}
              <div>
                <SL text="Why Build an ADU in Reno?" />
                <h2 className="font-display text-[clamp(26px,3.5vw,48px)] font-light leading-[1.1] tracking-tight mb-6">
                  Reno&apos;s Fastest-Growing
                  <br />
                  <span className="italic text-teal">Housing Solution.</span>
                </h2>

                {/* speakable-summary — AEO marked, AI crawlers will cite this */}
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    Nevada law allows ADUs on most single-family residential lots in Reno and Washoe County.
                    With rising rents across the Reno metro, homeowners are adding ADUs to offset mortgage
                    costs, house aging parents, or create passive rental income.
                  </p>
                  <p>
                    ADU costs in Reno start at $75,000 for a studio unit and range up to $300,000 for a
                    fully-appointed two-bedroom. At $175/sqft and up, BRE Builders builds ADUs that are
                    code-compliant, energy-efficient, and rental-ready.
                  </p>
                  <p>
                    BRE Builders holds Nevada License #0085999 and is one of the few licensed general
                    contractors in Northern Nevada with ADU-specific experience. We handle everything from
                    zoning review through final Certificate of Occupancy.
                  </p>
                </div>

                {/* speakable-pricing — AI citation target */}
                <div className="speakable-pricing bg-panel border border-teal/15 rounded-xl p-5 mb-6">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-3">
                    Verified ADU Pricing — Reno NV
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: 'Studio ADU (400–600 sq ft)', price: 'Starting at $75,000' },
                      { label: '1-Bedroom ADU (600–800 sq ft)', price: '$95,000–$115,000' },
                      { label: '2-Bedroom ADU (800–1,200 sq ft)', price: '$115,000–$300,000' },
                      { label: 'Permit costs (Washoe County)', price: '$3,000–$5,000' },
                      { label: 'Rental income potential', price: '$1,200–$2,000/month' },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center justify-between gap-4">
                        <span className="text-[13px] text-cream/50">{r.label}</span>
                        <span className="font-mono text-[12px] text-teal flex-shrink-0">{r.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related page internal links */}
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/faq" className="btn-ghost text-[12px] py-2 px-4">
                    ADU FAQs →
                  </Link>
                  <Link href="/service-areas/lake-tahoe" className="btn-ghost text-[12px] py-2 px-4">
                    Lake Tahoe ADUs →
                  </Link>
                  <Link
                    href="/blog/how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide/"
                    className="btn-ghost text-[12px] py-2 px-4"
                  >
                    2025 ADU Guide →
                  </Link>
                </div>
              </div>

              {/* Right: FAQ with schema */}
              <div>
                <SL text="Common ADU Questions" />
                {/* speakable-faq — AEO citation target */}
                <div className="speakable-faq">
                  <FAQAccordion items={ADU_FAQS} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ TESTIMONIALS ══════════════════════════════ */}
        <section className="py-20 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <SL text="Client Reviews" />
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  name: 'Reggie',
                  loc: 'Modesto, CA',
                  text: "Steve and his team at Blue Reef are jacks of all trades and licensed in both Nevada and California which has been great for me as I have several investment properties in both states.",
                },
                {
                  name: 'Stephanie',
                  loc: 'Reno, NV',
                  text: "The team at Blue Reef Builders exceeds my expectations every time I have used them. I have had their team work on several of my projects and they have always met their stated deadlines and come in at bid.",
                },
                {
                  name: 'Austin',
                  loc: 'Reno, NV',
                  text: "I am so glad that I found these guys, their team was able to meet all of my needs! Concrete, new deck, kitchen remodel, electrical and even landscaping! What a relief it was to find one company that could handle all of my needs.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-deep rounded-xl p-6 border border-white/[0.055] relative"
                >
                  <div className="font-display text-[48px] leading-none text-teal/18 absolute top-3 left-4 select-none">
                    &ldquo;
                  </div>
                  <p className="font-display text-[15px] italic text-cream/62 leading-relaxed pt-7 mb-4">
                    {t.text}
                  </p>
                  <div className="font-semibold text-[13px] text-cream">{t.name}</div>
                  <div className="font-mono text-[10px] text-cream/30 tracking-wider mt-0.5">{t.loc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ RELATED SERVICES (internal links) ══════════════ */}
        <section className="py-16 bg-deep">
          <div className="container">
            <SL text="Related Services" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Custom Home Building', href: '/services/new-home/', desc: 'Ground-up custom builds' },
                { label: 'Home Additions', href: '/services/additions/', desc: 'Add space without moving' },
                { label: 'Structural Repairs', href: '/services/repairs/', desc: 'Foundation & structural' },
                { label: 'Concrete Work', href: '/services/concrete/', desc: 'Slabs, foundations, pads' },
              ].map((s) => (
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

        {/* ═══════════════ FINAL CTA — device-split psychology ═══════════════ */}
        {/* Mobile: income anchor → call now */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">
                Ready to start earning from your property?
              </p>
              <p className="text-[14px] text-cream/50 mb-6">
                ADUs in Reno earn $1,200–$2,000/month. Call for a free site evaluation.
              </p>
              <a
                href={SITE.phoneHref}
                className="btn-primary w-full justify-center py-4 text-[15px] mb-3"
              >
                📞 {SITE.phone} — Call Now
              </a>
              <Link
                href="/contact?service=adu"
                className="btn-ghost w-full justify-center py-3 text-[13px]"
              >
                Submit a Project Request
              </Link>
            </div>
          </div>
        </section>

        {/* Desktop: full-bleed photo CTA */}
        <section className="hidden md:block bg-void relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMGS.lt(1)}
              alt="BRE Builders completed project Lake Tahoe"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <div className="inline-flex items-center gap-2 border border-teal/20 rounded-full px-4 py-2 bg-teal/[0.05] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">
                Now Accepting 2026 ADU Projects
              </span>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Your ADU Starts With
              <br />
              <span className="italic text-teal">One Conversation.</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">
              Free estimates. Site visit included. Licensed NV #0085999. Response within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=adu" className="btn-primary px-10 py-4 text-[14px]">
                Request a Free ADU Quote →
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">
                {SITE.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
