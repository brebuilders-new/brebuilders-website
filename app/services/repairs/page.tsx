import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ServiceHeroSection,
  SectionLabel,
  SectionHeading,
  SpeakableBlock,
  PageSection,
  MobileCTABox,
  DesktopCTASection,
  RelatedServices,
  ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'
import { GalleryGrid } from '@/components/gallery/GalleryLightbox'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Structural Repairs Reno NV | Foundation & Home Repairs',
  description: 'Licensed structural repair contractors in Reno NV and Northern California. Foundation, dry rot, water intrusion, framing. NV #0085999. Free inspection.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Structural+Repairs+Reno+NV&sub=Foundation+%26+Dry+Rot+%C2%B7+Free+Inspection+%C2%B7+NV+%230085999&badge=Structural+Repairs`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/repairs/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/repairs/#service',
      name: 'Structural Repairs Reno NV',
      description: 'BRE Builders provides structural repair services in Reno, NV — foundation repair, dry rot, water intrusion, framing, and home stabilization.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What are signs of structural damage in a Reno home?', acceptedAnswer: { '@type': 'Answer', text: 'Key warning signs: stair-step cracks in brick or block, wide or growing foundation cracks, uneven or sloping floors, bowing walls, and suddenly misaligned doors or windows. These require professional inspection.' } },
        { '@type': 'Question', name: 'How quickly does BRE Builders respond to structural repair requests?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders responds within 24 hours. Emergency evaluations can often be scheduled within 48 hours.' } },
        { '@type': 'Question', name: 'What causes foundation problems in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'Reno\'s expansive clay soils are the primary cause. Clay expands when wet and shrinks when dry, creating pressure against foundations. Freeze-thaw cycles in Northern Nevada compound this movement.' } },
        { '@type': 'Question', name: 'How much do structural repairs cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides free structural inspections and written scope before any estimate. Repair costs vary based on scope and severity. Contact us for a free evaluation.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Structural Repairs', item: 'https://brebuilders.com/repairs/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

const REPAIRS = [
  { title: 'Foundation Repair', href: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/', img: IMGS.repairs_foundation, alt: 'Foundation Repair Reno NV BRE Builders', badge: 'Page 1', desc: 'Cracks, settling, bowing walls. Reno clay soil specialists.' },
  { title: 'Water Intrusion', href: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv/', img: IMGS.repairs_water, alt: 'Water Intrusion Repair Reno NV BRE Builders', badge: null, desc: 'Moisture damage, mold risk, leaks. Free urgency eval.' },
  { title: 'Dry Rot & Wood Damage', href: '/repairs/', img: IMGS.repairs_rot, alt: 'Dry Rot Wood Damage Repair Reno NV BRE Builders', badge: null, desc: 'Siding, framing, structural wood. Complete removal and replacement.' },
  { title: 'Deck Structural Repair', href: '/repairs/', img: IMGS.repairs_arun, alt: 'Deck Structural Repair Lake Tahoe BRE Builders', badge: null, desc: 'Failed joists, ledger rot, post damage. Lake Tahoe specialists.' },
]

const WARNING_SIGNS = [
  { n: '1', sign: 'Stair-step cracks in brick or block walls', severity: 'urgent' },
  { n: '2', sign: 'Wide or actively growing foundation cracks', severity: 'urgent' },
  { n: '3', sign: 'Floors that slope, bounce, or feel soft', severity: 'soon' },
  { n: '4', sign: 'Walls bowing inward or separating at corners', severity: 'urgent' },
  { n: '5', sign: 'Doors or windows suddenly stuck or misaligned', severity: 'soon' },
  { n: '6', sign: 'Visible dry rot, soft wood, or discoloration', severity: 'soon' },
  { n: '7', sign: 'Water stains or moisture inside walls/floors', severity: 'soon' },
  { n: '8', sign: 'Gaps between wall and ceiling or floor', severity: 'watch' },
]

const FAQS = [
  { q: 'What are signs of structural damage in a Reno home?', a: 'Key warning signs: stair-step cracks in brick or block, wide or growing foundation cracks, uneven or sloping floors, bowing walls, and suddenly misaligned doors or windows. These require professional inspection.' },
  { q: 'How quickly does BRE Builders respond to structural repair requests?', a: 'BRE Builders responds within 24 hours. Emergency evaluations can often be scheduled within 48 hours in Reno and Sparks.' },
  { q: 'What causes foundation problems in Reno NV?', a: "Reno's expansive clay soils are the primary cause. Clay expands when wet and shrinks when dry, creating constant pressure against foundations. Freeze-thaw cycles in Northern Nevada compound this movement over time." },
  { q: 'How much do structural repairs cost in Reno NV?', a: 'BRE Builders provides free structural inspections and written scope before any estimate. Repair costs vary based on scope and severity. Contact us for a free on-site evaluation.' },
  { q: 'Does BRE Builders handle insurance claims for structural damage?', a: 'BRE Builders can provide documentation for insurance purposes. We work directly with homeowners and can coordinate with adjusters when needed.' },
]

const URGENCY_COLORS: Record<string, string> = {
  urgent: 'text-red-400 border-red-900/40',
  soon: 'text-gold border-gold/30',
  watch: 'text-cream/40 border-white/10',
}

export default function RepairsPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main data-theme="repairs">

        {/* HERO — urgency psychology */}
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.repairs_rot,
          bgMobile: IMGS.repairs_arun,
          eyebrow: 'Structural Repairs · Reno NV & Northern Nevada',
          h1Lines: ['If Your Home Is', 'Showing Signs —'],
          h1Ghost: "Don't Wait.",
          lead: 'Licensed structural repair contractors in Reno, NV. Foundation repair, dry rot, water intrusion, and framing. Early action prevents exponential costs. NV License #0085999.',
          badges: ['Free Inspection Request', '24h Response', 'Emergency Evaluation Available', 'Licensed NV #0085999'],
          ctaPrimaryLabel: 'Request a Free Inspection →',
          ctaPrimaryHref: '/contact?service=structural-repair',
          ctaSecondaryLabel: 'Foundation Repair →',
          ctaSecondaryHref: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/',
          urgencyNote: 'Structural issues worsen over time — same-week inspections available',
          stats: [{ n: '24h', label: 'Response Time' }, { n: '35+', label: 'Years Exp.' }, { n: 'Free', label: 'Inspection' }],
          license: 'NV',
        }} />

        {/* Mobile urgency strip */}
        <section className="md:hidden bg-red-950/20 border-b border-red-900/30 py-4">
          <div className="container">
            <p className="font-display text-[17px] text-cream/90 leading-snug">
              Structural problems <span className="text-red-400 italic">don&apos;t fix themselves.</span>
            </p>
            <p className="font-mono text-[11px] text-cream/40 mt-1.5">Small cracks become major failures. Early inspection saves thousands.</p>
          </div>
        </section>

        {/* Desktop cost consequence strip */}
        <section className="hidden md:block bg-panel border-y border-white/[0.06]">
          <div className="container py-5">
            <div className="grid grid-cols-4 gap-8">
              {[
                { label: 'Ignored Crack', val: 'Grows', sub: 'Clay soil pressure is constant' },
                { label: 'Early Repair Cost', val: 'Act Early', sub: 'Lower cost, less damage' },
                { label: 'Delayed Repair', val: 'Much More', sub: 'Waiting always costs more' },
                { label: 'Our Response', val: '24 Hours', sub: 'Inspection within one week' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[26px] text-teal font-light leading-none">{s.val}</div>
                  <div className="font-mono text-[11px] text-cream/65 mt-1">{s.label}</div>
                  <div className="font-mono text-[10px] text-cream/30 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair types */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Repair Services" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <SectionHeading line1="Structural Repair Services" line2italic="Reno &amp; Northern Nevada." size="lg" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REPAIRS.map((r) => (
              <Link key={r.title} href={r.href} className="group card overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel/90 via-panel/20 to-transparent" />
                  {r.badge && (
                    <div className="absolute top-2 right-2 font-mono text-[9px] tracking-wider uppercase bg-teal text-void px-2 py-0.5 rounded">{r.badge}</div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-[17px] text-cream mb-1 group-hover:text-teal transition-colors">{r.title}</h3>
                  <p className="text-[12px] text-cream/40 leading-relaxed">{r.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </PageSection>

        {/* Warning signs checklist — device-split */}
        {/* Desktop: two columns with severity indicators */}
        {/* Mobile: tappable urgency list */}
        <PageSection bg="bg-void">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel text="Warning Signs" />
              <SectionHeading line1="8 Warning Signs Your Reno Home" line2italic="Needs Structural Inspection." size="md" className="mb-6" />
              <SpeakableBlock>
                <p>Reno homes face unique structural stresses from expansive clay soils and freeze-thaw cycles. These 8 warning signs indicate that professional evaluation is needed — the sooner, the less expensive the repair.</p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3 mt-8">
                <Link href="/contact?service=structural-repair&urgency=emergency" className="btn-primary">Request Free Inspection →</Link>
                <Link href="/repairs/foundation-repair-and-foundation-issues-in-reno-nv/" className="btn-ghost">Foundation Repair →</Link>
              </div>
            </div>
            <div className="space-y-2">
              {WARNING_SIGNS.map((w) => (
                <div key={w.n} className={`flex items-start gap-4 p-3.5 rounded-xl border ${URGENCY_COLORS[w.severity]} bg-panel/50`}>
                  <span className={`font-mono text-[11px] flex-shrink-0 mt-0.5 ${w.severity === 'urgent' ? 'text-red-400' : w.severity === 'soon' ? 'text-gold/80' : 'text-cream/30'}`}>
                    {w.severity === 'urgent' ? '⚠' : w.severity === 'soon' ? '•' : '—'}
                  </span>
                  <span className="text-[13px] text-cream/65">{w.sign}</span>
                  <span className={`font-mono text-[9px] tracking-wider uppercase ml-auto flex-shrink-0 mt-0.5 ${w.severity === 'urgent' ? 'text-red-400/70' : w.severity === 'soon' ? 'text-gold/50' : 'text-cream/20'}`}>
                    {w.severity}
                  </span>
                </div>
              ))}
              <div className="md:hidden pt-2">
                <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4">📞 Call for Emergency Inspection</a>
              </div>
            </div>
          </div>
        </PageSection>

        {/* Real project photos */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Completed Repairs" />
          <SectionHeading line1="How Structural Repairs Work" line2italic="Free Inspection to Fix." size="lg" className="mb-10" />
          {/* Mobile carousel */}
          <GalleryGrid
            mode="grid"
            images={[
              { src: IMGS.repairs_deck_lt,    alt: 'Lake Tahoe Deck Steel Bracket Reinforcement BRE Builders',         title: 'Steel Bracket System',     caption: 'Lake Tahoe — deck-to-wall structural reinforcement' },
              { src: IMGS.repairs_rot,        alt: 'Dry Rot Exposure Wall Panel Structural Damage Reno NV',             title: 'Dry Rot Removal',          caption: 'Full wall panel rot — remediation + reframe' },
              { src: IMGS.repairs_foundation, alt: 'Foundation Repair Reno NV Clay Soil BRE Builders',                  title: 'Foundation Repair',        caption: 'Reno, NV — clay soil settlement repair' },
              { src: IMGS.repairs_arun,       alt: 'Hillside Deck Reinforced Support Beams Lake Tahoe BRE Builders',    title: 'Hillside Deck Repair',     caption: 'Elevated framing on challenging slope — Lake Tahoe' },
            ]}
            aspectClass="h-52"
          />
        </PageSection>

        {/* AEO + FAQ */}
        <ServiceFAQSection
          faqs={FAQS}
          label="Common Repair Questions"
          aeoContent={
            <div>
              <SectionLabel text="Structural Repairs in Reno NV" />
              <SectionHeading line1="Why Reno Homes Need" line2italic="Structural Inspections." size="md" className="mb-6" />
              <SpeakableBlock className="mb-8">
                <p>Reno, Nevada sits on expansive clay soils that swell when wet and shrink when dry. This constant soil movement is the leading cause of foundation cracks, settling, and structural damage in Northern Nevada homes. Freeze-thaw cycles in the Reno climate compound this problem, making annual inspection important for older properties.</p>
                <p>BRE Builders has provided structural repair services in Reno since 1989. We hold Nevada Contractor License #0085999 and offer free inspection requests with 24-hour response. Our licensed team diagnoses the root cause before recommending repairs — never upselling work that isn&apos;t needed.</p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/repairs/foundation-repair-and-foundation-issues-in-reno-nv/" className="btn-ghost text-[12px] py-2 px-4">Foundation Repair →</Link>
                <Link href="/repairs/water-intrusion-and-moisture-issues-in-reno-nv/" className="btn-ghost text-[12px] py-2 px-4">Water Intrusion →</Link>
                <Link href="/service-areas/reno/" className="btn-ghost text-[12px] py-2 px-4">Reno Service Area →</Link>
              </div>
            </div>
          }
        />

        
        {/* ── BLOG + AREA CROSS-LINKS ── */}
        <section className="py-14 bg-void border-t border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Blog cross-links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Seeing warning signs in your Reno home?</span>
                </div>
                <div className="space-y-0">
                                    <Link href="/blog/structural-repair-warning-signs" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">Top 10 Structural Warning Signs</span>
                      <span className="text-[11px] text-cream/35 block">Diagnose exactly what you're seeing</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-home-repairs-20-year" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">20-Year-Old Reno Home Repairs</span>
                      <span className="text-[11px] text-cream/35 block">Common issues in 2000s-era Reno homes</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-structural-repairs" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">Why Reno Homeowners Trust BRE for Repairs</span>
                      <span className="text-[11px] text-cream/35 block">Northern Nevada soil conditions explained</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Service area links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Service Areas</span>
                </div>
                <div className="space-y-0 mb-4">
                                    <Link href="/service-areas/nevada/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Structural Repairs Reno, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/sparks/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Structural Repairs Sparks, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/carson-city/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Structural Repairs Carson City</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                                    <Link href="/testimonials" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">Testimonials →</Link>
                  <Link href="/faq" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">FAQ →</Link>
                  <Link href="/about" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">About BRE →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RelatedServices items={[
          { label: 'Foundation Repair', href: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/', desc: 'Cracks, settling, clay soil' },
          { label: 'Water Intrusion', href: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv/', desc: 'Moisture & mold prevention' },
          { label: 'ADU Construction', href: '/adus/', desc: 'Add value while you repair' },
          { label: 'Deck Build & Repair', href: '/decks/', desc: 'Structural deck work' },
        ]} />

        <MobileCTABox
          headline="Structural problems only get more expensive."
          subtext="Request a free inspection today. 24-hour response, same-week availability."
          ctaLabel="Request a Free Inspection"
          ctaHref="/contact?service=structural-repair"
          variant="urgent"
        />
        <DesktopCTASection
          bgImage={IMGS.repairs_deck_lt}
          bgAlt="BRE Builders structural deck repair Lake Tahoe"
          headline="Catch It Now."
          headlineItalic="Before It Gets Worse."
          subtext="Free inspections. 24-hour response. Licensed NV #0085999."
          ctaLabel="Request a Free Inspection →"
          ctaHref="/contact?service=structural-repair"
        />
      </main>
      <Footer />
    </>
  )
}
