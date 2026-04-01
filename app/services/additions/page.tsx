import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

// THIS IS THE MOST CRITICAL CTR FIX PAGE
// 19,319 impressions · 0.11% CTR · pos 43 — biggest waste on the whole site
// Keyword cluster: home additions reno nv (pos 3.5), addition contractors reno (pos 4.6)
export const metadata: Metadata = {
  title: 'Home Additions Reno NV | Room & Garage Additions',
  description:
    'Home additions in Reno, NV — room additions, second stories, garage expansions. Add space without moving. Licensed GC since 1989. Free estimates. NV #0085999.',
  alternates: { canonical: 'https://brebuilders.com/additions/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/additions/#service',
      name: 'Home Additions Reno NV',
      alternateName: 'Room Additions Reno Nevada',
      description: 'BRE Builders builds home additions in Reno, NV — room additions, second stories, garage expansions, and bump-outs. Licensed general contractor NV #0085999.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is adding a home addition cheaper than moving in Reno NV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In most cases, yes. A home addition in Reno costs significantly less than buying a larger home, paying realtor fees, and moving. You stay in your neighborhood and keep your mortgage rate. BRE Builders provides free estimates so you can compare the real numbers.",
          },
        },
        {
          '@type': 'Question',
          name: 'What types of home additions does BRE Builders build in Reno?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BRE Builders builds room additions, second-story additions, garage expansions, bump-out additions, sunrooms, and in-law suites. All work is permitted through Washoe County and City of Reno.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Home Additions', item: 'https://brebuilders.com/additions/' },
      ],
    },
  ],
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

const FAQS = [
  {
    q: 'Is adding a home addition cheaper than moving in Reno?',
    a: "In most cases, yes. A home addition costs significantly less than buying a larger home, paying realtor fees (typically 5–6%), and moving expenses. You keep your neighborhood, your mortgage rate, and your investment. BRE Builders provides free estimates to compare the real numbers.",
  },
  {
    q: 'What types of home additions does BRE Builders build?',
    a: 'Room additions, second-story additions, garage expansions, bump-out additions, sunrooms, in-law suites, and attached ADUs. All work is permitted through Washoe County and City of Reno.',
  },
  {
    q: 'Do I need permits for a home addition in Reno NV?',
    a: 'Yes. Any addition that increases livable square footage requires permits in Reno and Washoe County. BRE Builders handles all permit applications as part of every project.',
  },
  {
    q: 'How long does a room addition take?',
    a: 'A single room addition typically takes 4–8 weeks including permits. A second-story addition or major expansion takes 8–16 weeks. Permit approval adds 3–6 weeks before construction begins.',
  },
  {
    q: 'Does a home addition increase property value in Reno?',
    a: 'Generally yes — adding square footage typically returns 50–80% of construction cost in increased home value, depending on the market and addition type. Reno\'s strong housing market supports this return well.',
  },
]

export default function AdditionsPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        {/* ── HERO: "Add space. Don't move." ─────────────────────────────── */}
        {/* Psychology: moving is expensive and stressful. Adding is smarter.
            Mobile: the cost comparison hook first
            Desktop: the visual of a beautiful expanded space */}
        <section className="relative min-h-[70vh] lg:min-h-[78vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.lt(4)}
            alt="Interior Living Space Room Addition Lake Tahoe Home Renovation BRE Builders"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[600px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">
                  Home Additions · Reno & Northern Nevada
                </span>
              </div>

              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-tight text-white mb-4">
                Home Additions
                <br />
                Reno, NV
                <br />
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.35)' }}>
                  Add Space. Don&apos;t Move.
                </span>
              </h1>

              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[480px]">
                Room additions, second stories, garage expansions, and bump-outs. BRE Builders adds square
                footage to your existing home — no realtor fees, no moving costs, no new mortgage. Licensed
                NV #0085999 since 1989.
              </p>

              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['Room Additions', 'Second Stories', 'Garage Expansions', 'Full Permit Handling'].map((b) => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="animate-fade-up-4">
                <div className="md:hidden flex gap-3 mb-5">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Call Now</a>
                  <Link href="/contact?service=additions" className="btn-ghost flex-1 justify-center">Get Quote</Link>
                </div>
                <div className="hidden md:flex gap-3 mb-5">
                  <Link href="/contact?service=additions" className="btn-primary">Get a Free Estimate →</Link>
                  <Link href="/services/adu/" className="btn-ghost">Consider an ADU Instead?</Link>
                </div>
                <p className="font-mono text-[11px] text-white/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                  No realtor fees · Stay in your neighborhood · Keep your mortgage rate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MOVING vs ADDING comparison ──────────────────────────────── */}
        {/* This is the core psychology of this page — why add vs move */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Add Space vs. Moving" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-4">
              The Numbers Favor Adding.
            </h2>
            <p className="text-[15px] text-cream/55 max-w-[560px] mb-12">
              Before you list your home, compare the real cost of moving vs. the cost of adding space.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {/* Cost of moving */}
              <div className="bg-panel rounded-xl p-6 border border-red-900/30">
                <div className="font-mono text-[11px] tracking-wider uppercase text-red-400/70 mb-4">
                  Cost of Moving to a Bigger Home
                </div>
                <ul className="space-y-3">
                  {[
                    'Realtor commissions: 5–6% of sale price',
                    'Closing costs: 2–5% on new purchase',
                    'Moving company: $2,000–$8,000',
                    'Higher mortgage rate (likely)',
                    'Disruption of school, routine, neighborhood',
                    'Loss of established community & relationships',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13px] text-cream/50">
                      <span className="text-red-400/50 mt-0.5 flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost of adding */}
              <div className="bg-panel rounded-xl p-6 border border-teal/20">
                <div className="font-mono text-[11px] tracking-wider uppercase text-teal/70 mb-4">
                  Cost of a Home Addition in Reno
                </div>
                <ul className="space-y-3">
                  {[
                    'No realtor fees',
                    'No closing costs',
                    'Keep your existing mortgage rate',
                    'Stay in your neighborhood and school district',
                    'Increase your home\'s value',
                    'Get exactly the space you need',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13px] text-cream/50">
                      <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?service=additions" className="mt-5 btn-primary inline-flex text-[13px] py-3">
                  Get a Free Estimate →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ADDITION TYPES ────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="Types of Additions" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              What We Build.
            </h2>

            {/* Mobile: stacked cards | Desktop: grid */}
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: 'Room Addition', desc: 'Master bedroom, bedroom, living room, or family room expansion. Typically 200–600 sq ft. Fully integrated with existing home structure.', img: IMGS.lt(4), alt: 'Room Addition Interior Living Space Reno NV BRE Builders' },
                { title: 'Second Story', desc: 'Add an entire level to your existing single-story home. Maximizes lot footprint. Requires structural engineering.', img: IMGS.svc_addition, alt: 'Second Story Home Addition Reno NV BRE Builders' },
                { title: 'Garage Expansion', desc: 'Convert, expand, or add a garage. Can include living space above. Common addition in Reno for workshop or in-law suite.', img: IMGS.adu_garage, alt: 'Garage Expansion Addition Reno NV BRE Builders' },
                { title: 'Bump-Out', desc: 'Small targeted expansion — 2–10 ft — to enlarge a kitchen, bathroom, or bedroom without a full addition.', img: IMGS.lt(9), alt: 'Home Bump-Out Addition Interior Room Reno NV' },
                { title: 'Sunroom / Porch', desc: 'Enclosed porch or sunroom that extends your living space outdoors. Can be three-season or fully conditioned.', img: IMGS.lt(13), alt: 'Sunroom Addition Natural Light Reno NV BRE Builders' },
                { title: 'In-Law Suite', desc: 'Attached accessory suite for aging parents or adult children. Separate entrance, bathroom, kitchenette.', img: IMGS.adu_inlaw, alt: 'In-Law Suite Addition Reno NV BRE Builders' },
              ].map((t, i) => (
                <div key={t.title} className="card group overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt={t.alt} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600" loading={i < 3 ? 'eager' : 'lazy'} />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[19px] text-cream mb-2">{t.title}</h3>
                    <p className="text-[13px] text-cream/45 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[14px]">📞 Discuss Your Addition</a>
            </div>
          </div>
        </section>

        {/* ── FAQ + AEO ─────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Home Additions in Reno" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  Licensed Contractor.
                  <br /><span className="italic text-teal">Real Craftsmanship.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    BRE Builders builds home additions throughout Reno, Sparks, and Northern Nevada. We handle
                    every step — design consultation, structural plans, permit applications, and construction —
                    under one roof. Licensed NV #0085999 since 1989.
                  </p>
                  <p>
                    A well-built home addition increases your home's value while adding the space you need.
                    Reno's strong real estate market makes additions a sound financial decision for homeowners
                    who want more space without the disruption of moving.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/services/adu/" className="btn-ghost text-[12px] py-2 px-4">Compare: ADU vs Addition →</Link>
                  <Link href="/services/new-home/" className="btn-ghost text-[12px] py-2 px-4">Custom Home Builds →</Link>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <FAQAccordion items={FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">Add space. Don&apos;t move.</p>
              <p className="text-[14px] text-cream/50 mb-6">Free estimate. Licensed NV #0085999. Response within 24 hours.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[15px] mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?service=additions" className="btn-ghost w-full justify-center py-3 text-[13px]">Request a Free Estimate Online</Link>
            </div>
          </div>
        </section>

        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.lt(12)} alt="Upper Level Renovation Addition Lake Tahoe BRE Builders" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              More Space.
              <br /><span className="italic text-teal">Without Moving.</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">Free estimates · NV #0085999 · Response within 24 hours</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=additions" className="btn-primary px-10 py-4 text-[14px]">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
