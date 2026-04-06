import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SectionLabel,
  SectionHeading,
  SpeakableBlock,
  PageSection,
  ServiceHeroSection,
  ServiceFAQSection,
  RelatedServices,
} from '@/components/templates/ServiceTemplate'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Safe Rooms & Panic Rooms Reno NV | Licensed Contractor | BRE Builders',
  description:
    'Safe rooms and panic rooms built by a licensed GC in Reno, Lake Tahoe, and Northern California. Reinforced concrete and framing. Permits handled. NV #0085999 · CA #1093798. Free consultation.',
  openGraph: {
    title: 'Safe Rooms & Panic Rooms Reno NV | BRE Builders',
    images: [{
      url: `${SITE_URL}/api/og?title=Safe+Rooms+%26+Panic+Rooms&sub=Licensed+GC+%C2%B7+Reno+NV+%26+Northern+CA+%C2%B7+NV+%230085999`,
      width: 1200, height: 630,
    }],
  },
  alternates: { canonical: `${SITE_URL}/services/safe-rooms/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/services/safe-rooms/#service',
      name: 'Safe Rooms & Panic Rooms Reno NV',
      alternateName: [
        'Panic Room Builder Reno NV',
        'Safe Room Contractor Lake Tahoe',
        'Safe Room New Construction Nevada',
        'Licensed Safe Room Contractor Northern California',
      ],
      description:
        'Safe rooms and panic rooms built by a licensed general contractor in Reno, Lake Tahoe, and Northern California. Reinforced concrete and framing, permits handled. NV #0085999 · CA #1093798.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Lake Tahoe, NV' },
        { '@type': 'City', name: 'Carson City', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Truckee', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'Place', name: 'Northern California' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need a permit to build a safe room in Nevada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Any structural modification to a home — including a reinforced safe room — requires a building permit in Nevada and California. BRE Builders handles all permitting as part of the project scope.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a safe room be added to an existing home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Safe rooms can be retrofitted into existing homes using a reinforced closet, interior room, or garage space. BRE Builders assesses the existing structure and recommends the best location based on your home layout and goals.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time to add a safe room?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most cost-effective time to add a safe room is during new construction or a major remodel — when walls are open and structural work is already underway. Standalone retrofits are also possible but typically cost more.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will a safe room look different from the rest of my home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Safe rooms can be designed to blend completely with the surrounding space — finished drywall, standard doors with concealed hardware, and interior finishes that match your home.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does BRE Builders build safe rooms in California?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. BRE Builders holds California Contractor License #1093798 and serves Truckee, Tahoe Basin, and Northern California. All California permit requirements are handled by our team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can BRE Builders build below-grade or underground rooms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. BRE Builders has excavation and below-grade concrete experience. Underground or partially below-grade rooms are assessed on a project-by-project basis depending on soil conditions, site access, and structural requirements. Contact us for a consultation.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
        { '@type': 'ListItem', position: 3, name: 'Safe Rooms & Panic Rooms', item: 'https://brebuilders.com/services/safe-rooms/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

const FAQS = [
  {
    q: 'Do I need a permit to build a safe room in Nevada?',
    a: 'Yes. Any structural modification — including a reinforced safe room — requires a building permit in Nevada and California. BRE Builders handles all permitting as part of the project scope. No permit shortcuts.',
  },
  {
    q: 'Can a safe room be added to an existing home?',
    a: 'Yes. Safe rooms can be retrofitted into an existing home using a reinforced closet, interior room, or garage space. BRE Builders assesses your structure and recommends the best location based on your layout and goals.',
  },
  {
    q: 'What is the best time to add a safe room?',
    a: 'During new construction or a major remodel — when walls are open and structural work is already underway. Standalone retrofits are also possible but typically involve more disruption and cost.',
  },
  {
    q: 'Will it look different from the rest of my home?',
    a: 'No. Safe rooms can be finished to blend completely — standard drywall, concealed door hardware, and interior finishes that match your existing space. From the outside, it looks like any other room.',
  },
  {
    q: 'Does BRE Builders build safe rooms in California?',
    a: 'Yes. We hold California Contractor License #1093798 and serve Truckee, the Tahoe Basin, and Northern California. All California permit requirements handled by our team.',
  },
  {
    q: 'Can BRE build below-grade or underground rooms?',
    a: 'Yes. BRE Builders has excavation and below-grade concrete capability. Underground or partially below-grade rooms are evaluated project-by-project based on soil conditions, site access, and structural requirements. Contact us to discuss.',
  },
]

const BUILD_TYPES = [
  {
    icon: '🏗️',
    title: 'Integrated — New Construction',
    desc: 'The most cost-effective approach. Safe room is designed into the floor plan from the start — reinforced concrete walls poured as part of the foundation phase, specialty door framed in during rough-in. No disruption after move-in.',
    best: 'Best for clients building a custom home',
  },
  {
    icon: '🔨',
    title: 'Retrofit — Existing Home',
    desc: 'Identifying the right existing space — a closet, interior room, or garage corner — then reinforcing walls and ceiling with concrete or steel framing and installing a rated security door. Finished to match surrounding rooms.',
    best: 'Best for existing Reno, Tahoe & CA homeowners',
  },
  {
    icon: '🏠',
    title: 'Remodel Integration',
    desc: 'Adding a safe room as part of a larger remodel, addition, or renovation project. When walls are already open, the marginal cost of adding reinforced framing is significantly lower than a standalone build.',
    best: 'Best during kitchen, addition, or structural remodel',
  },
  {
    icon: '⬇️',
    title: 'Below-Grade Room',
    desc: 'Partially or fully below-grade rooms with excavation, reinforced concrete walls and ceiling, waterproofing, ventilation, and utility rough-in. Requires site assessment for soil conditions and access.',
    best: 'Best for properties with suitable soil and access',
  },
]

const WHY_LICENSED_GC = [
  {
    point: 'Permits — handled start to finish',
    detail: 'A reinforced room is a structural modification. It requires a permit in both Nevada and California. BRE Builders submits, tracks, and manages all permit applications — including Tahoe Basin TRPA requirements.',
  },
  {
    point: 'Structural integrity — not guesswork',
    detail: 'Reinforced concrete framing, proper load transfer to the foundation, and code-compliant connections require a licensed contractor with structural experience. BRE Builders has been doing this work since 1989.',
  },
  {
    point: 'Integrated with your existing build',
    detail: 'Prefab companies drop a steel box and leave. A licensed GC integrates the safe room with your home\'s electrical, HVAC, and finishes — so it functions as part of the house, not a foreign object inside it.',
  },
  {
    point: 'Local knowledge — NV and CA jurisdictions',
    detail: 'Permit requirements, inspection processes, and code interpretation vary by county and jurisdiction. BRE Builders operates daily in Washoe County, Carson City, Placer County, and the Tahoe Basin.',
  },
]

const RENO_TAHOE_CONTEXT = [
  {
    stat: 'Wildfire',
    detail: 'The Tahoe Basin and Eastern Sierra have experienced repeated evacuation orders in recent years. A below-grade or reinforced room provides a last-resort shelter when roads are compromised.',
  },
  {
    stat: 'Isolation',
    detail: 'Many Tahoe and Truckee properties are accessed by a single road. Power outages and road closures can last days. A secure, self-contained room changes the calculus on staying vs. evacuating.',
  },
  {
    stat: 'Property Value',
    detail: 'In high-value markets, a professionally built safe room is a verifiable improvement — not a liability. It is documented, permitted, and inspected, making it a legitimate addition to the home\'s record.',
  },
]

export default function SafeRoomsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main data-theme="luxury">

        {/* ── HERO ── */}
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.svc_custom_home,
          bgMobile:  IMGS.svc_repair,
          eyebrow:   'Safe Rooms & Panic Rooms · Reno, Lake Tahoe & Northern California',
          h1Lines:   ['Safe Rooms &', 'Panic Rooms'],
          h1Ghost:   'Built in. Built right.',
          lead:      'Reinforced rooms integrated into new builds and existing homes by a licensed general contractor. Permits handled. Structural work done to code. NV & CA licensed.',
          badges:    ['NV Lic #0085999', 'CA Lic #1093798', '35+ Years', 'Free Consultation'],
          ctaPrimaryLabel:   'Request a Free Consultation',
          ctaPrimaryHref:    '/contact?service=safe-rooms',
          ctaSecondaryLabel: 'View Our Structural Work',
          ctaSecondaryHref:  '/projects/quaking-aspen/',
          ctaMobileLabel:    '📞 Discuss Your Project',
          stats: [
            { n: '35+', label: 'Years Licensed' },
            { n: 'Free', label: 'Consultation' },
            { n: 'NV·CA', label: 'Licensed' },
          ],
          license: 'both',
        }} />

        {/* ── SPEAKABLE INTRO ── */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Safe Rooms & Panic Rooms — Reno NV & Northern California" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading line1="Built Into Your Home." line2italic="Ready When You Need It." size="lg" className="mb-8" />
              <SpeakableBlock className="speakable-summary">
                <p>
                  BRE Builders constructs safe rooms and panic rooms in Reno, Sparks, Lake Tahoe, Carson City,
                  Truckee, and Northern California. We are a licensed general contractor — not a prefab supplier.
                  That means structural engineering coordination, full permit handling, and construction that is
                  inspected and integrated with your home.
                </p>
                <p>
                  We hold Nevada Contractor License #0085999 and California Contractor License #1093798.
                  Steve Rosenthal has been building in Northern Nevada and California since 1989 — with
                  experience in concrete, excavation, structural framing, and custom home construction.
                  The skills that go into a safe room are the same skills that go into every project we build.
                </p>
                <p>
                  Safe rooms can be integrated into new builds during the framing phase, added to an existing
                  home as a retrofit, or built below-grade where site conditions allow. Contact us for a free
                  consultation — no commitment, no pressure.
                </p>
              </SpeakableBlock>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact?service=safe-rooms" className="btn-primary">
                  Request a Free Consultation →
                </Link>
                <Link href="/services/new-home-builds" className="btn-ghost">
                  Add to a New Build →
                </Link>
              </div>
            </div>

            {/* Trust block */}
            <div className="space-y-4">
              {WHY_LICENSED_GC.map(item => (
                <div key={item.point} className="p-5 bg-panel rounded-xl border border-white/[0.06] hover:border-teal/20 transition-colors">
                  <h3 className="font-display text-[16px] text-cream mb-2">{item.point}</h3>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        {/* ── WHY RENO & TAHOE ── */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="Why This Matters in Northern Nevada & Tahoe" />
          <SectionHeading line1="The Region Has" line2italic="Real Considerations." size="lg" className="mb-10" />
          <p className="text-[14px] text-cream/50 leading-relaxed max-w-2xl mb-10">
            This is not about fear — it is about facts specific to this geography. Homeowners in Reno, Tahoe,
            and Northern California face conditions that make a secure room a practical consideration,
            not an extreme one.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {RENO_TAHOE_CONTEXT.map(item => (
              <div key={item.stat} className="p-6 bg-deep rounded-xl border border-white/[0.06] hover:border-teal/20 transition-colors">
                <div className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-3">{item.stat}</div>
                <p className="text-[13px] text-cream/55 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* ── WHAT WE BUILD ── */}
        <PageSection bg="bg-void">
          <SectionLabel text="What BRE Builders Constructs" />
          <SectionHeading line1="Four Ways to" line2italic="Add a Safe Room." size="lg" className="mb-12" />

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {BUILD_TYPES.map(item => (
              <div key={item.title} className="p-6 bg-panel rounded-xl border border-white/[0.06] hover:border-teal/25 transition-colors">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-display text-[19px] text-cream mb-3 leading-snug">{item.title}</h3>
                <p className="text-[13px] text-cream/55 leading-relaxed mb-4">{item.desc}</p>
                <div className="font-mono text-[10px] tracking-wider text-teal/70 border-t border-white/[0.06] pt-3">
                  {item.best}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile list */}
          <div className="md:hidden space-y-4">
            {BUILD_TYPES.map(item => (
              <div key={item.title} className="flex gap-4 p-4 bg-panel rounded-xl border border-white/[0.06]">
                <div className="text-2xl flex-shrink-0 pt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-display text-[16px] text-cream mb-1 leading-snug">{item.title}</h3>
                  <p className="font-mono text-[9px] tracking-wider text-teal/60 mb-2">{item.best}</p>
                  <p className="text-[12px] text-cream/45 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mt-2">
              📞 Discuss Your Project
            </a>
          </div>
        </PageSection>

        {/* ── PROCESS ── */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="The Process" />
          <SectionHeading line1="How It Works." line2italic="Start to Finish." size="lg" className="mb-12" />

          <div className="hidden md:grid grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Free Consultation', detail: 'We review your property, discuss your goals, and assess the best approach — new build integration, retrofit, or below-grade. No commitment required.' },
              { n: '02', title: 'Scope & Quote', detail: 'Written scope of work with line-item pricing. We do not provide vague estimates. If something changes during construction, we tell you in writing before proceeding.' },
              { n: '03', title: 'Permits & Engineering', detail: 'BRE Builders submits all permit applications, coordinates structural engineering sign-off where required, and manages agency responses through approval.' },
              { n: '04', title: 'Construction & Inspection', detail: 'Licensed crew, permitted work, required inspections. Final walkthrough before handover. One-year workmanship warranty on all completed work.' },
            ].map(s => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="font-mono text-[11px] text-teal/60 tracking-widest">{s.n}</div>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                <h3 className="font-display text-[17px] text-cream mb-2 leading-snug">{s.title}</h3>
                <p className="text-[12px] text-cream/45 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {[
              { n: '01', title: 'Free Consultation', detail: 'We review your property, discuss your goals, and assess the best approach.' },
              { n: '02', title: 'Scope & Quote', detail: 'Written scope with line-item pricing. No vague estimates.' },
              { n: '03', title: 'Permits & Engineering', detail: 'We handle all permit submissions, engineering coordination, and agency responses.' },
              { n: '04', title: 'Construction & Inspection', detail: 'Licensed crew, permitted work, inspections, final walkthrough, one-year warranty.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-deep rounded-xl border border-white/[0.055]">
                <div className="font-mono text-[28px] text-teal/15 font-bold leading-none flex-shrink-0 pt-1">{s.n}</div>
                <div>
                  <div className="font-display text-[15px] text-cream leading-snug mb-1">{s.title}</div>
                  <p className="text-[12px] text-cream/40 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mt-2">
              📞 Start with a Free Consultation
            </a>
          </div>
        </PageSection>

        {/* ── PRICING NOTE ── */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Pricing" />
          <SectionHeading line1="What Affects" line2italic="The Cost." size="lg" className="mb-10" />

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: '📐', factor: 'Size & Configuration', detail: 'A reinforced closet conversion is significantly less than a full below-grade room. Size, ceiling height, and door spec are the primary cost drivers.' },
              { icon: '🏗️', factor: 'Timing — New Build vs. Retrofit', detail: 'Adding a safe room during new construction when walls are already open costs substantially less than retrofitting into a finished home.' },
              { icon: '⚙️', factor: 'Structural Requirements', detail: 'Below-grade rooms require excavation, waterproofing, and more extensive structural work. Above-grade reinforced rooms are simpler and faster to build.' },
              { icon: '🚪', factor: 'Door & Hardware Specification', detail: 'Security door selection significantly impacts cost. BRE Builders sources rated doors and can advise on specification based on your goals and budget.' },
            ].map(item => (
              <div key={item.factor} className="flex gap-4 p-5 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/20 transition-colors">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-display text-[16px] text-cream mb-2">{item.factor}</h3>
                  <p className="text-[12px] text-cream/50 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-panel border border-white/[0.07] rounded-2xl px-6 py-6 text-center">
            <p className="text-[14px] text-cream/60 mb-3">
              BRE Builders provides free consultations for safe room projects.
              Pricing is provided as a detailed written estimate after a site visit — not a vague ballpark.
            </p>
            <p className="font-mono text-[11px] text-teal">NV #0085999 · CA #1093798 · Free consultation available</p>
            <div className="flex justify-center mt-5">
              <Link href="/contact?service=safe-rooms" className="btn-primary">
                Request a Free Consultation →
              </Link>
            </div>
          </div>
        </PageSection>

        {/* ── CREDENTIALS ── */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="BRE Builders Credentials" />
          <SectionHeading line1="The Skills That" line2italic="Build a Safe Room." size="lg" className="mb-10" />
          <p className="text-[14px] text-cream/50 leading-relaxed max-w-2xl mb-10">
            BRE Builders does not claim safe rooms as a primary specialty. What we claim is 35+ years of
            concrete, structural framing, excavation, and custom home construction experience — the exact
            skill set required to build one correctly. Every element of a safe room is work we do on every
            project we take.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Reinforced Concrete', proof: 'Car wash slab, custom home foundations, commercial site prep' },
              { label: 'Structural Framing', proof: 'Custom homes, additions, structural repair — all permitted and inspected' },
              { label: 'Excavation', proof: 'Site prep, below-grade work, utility integration on commercial and residential projects' },
              { label: 'Permit Handling — NV & CA', proof: 'Including Tahoe Basin TRPA requirements — among the most complex jurisdictions in the region' },
            ].map(item => (
              <div key={item.label} className="p-4 bg-deep rounded-xl border border-white/[0.06] hover:border-teal/20 transition-colors">
                <h3 className="font-display text-[14px] text-cream mb-2 leading-snug">{item.label}</h3>
                <p className="text-[11px] text-cream/35 leading-relaxed">{item.proof}</p>
              </div>
            ))}
          </div>

          {/* Licensing strip */}
          <div className="mt-8 p-4 bg-deep border border-teal/15 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-[11px] text-cream/50 tracking-wide">
              <span className="text-teal font-medium">Nevada License #0085999</span> · <span className="text-teal/70">California License #1093798</span> · Licensed, bonded, and insured · 1-year workmanship warranty
            </p>
            <a href={SITE.phoneHref} className="font-mono text-[12px] text-teal hover:text-white transition-colors tracking-wide flex-shrink-0">
              {SITE.phone}
            </a>
          </div>
        </PageSection>

        {/* ── FAQ ── */}
        <ServiceFAQSection faqs={FAQS} />

        {/* ── FINAL CTA ── */}
        <PageSection bg="bg-void">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel text="Ready to Discuss Your Project" className="justify-center" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.1] tracking-tight mb-5">
              If You Are Planning a Build<br />
              <span className="italic text-teal">This Is the Right Time.</span>
            </h2>
            <p className="text-[14px] text-cream/55 leading-relaxed mb-8">
              The most cost-effective time to add a safe room is during a new build or active remodel —
              when the structural work is already underway. BRE Builders offers free consultations
              with no commitment. We will assess your project, recommend an approach, and provide a
              written estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact?service=safe-rooms" className="btn-primary px-8 py-4">
                Request a Free Consultation →
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost px-8 py-4 font-mono">
                {SITE.phone}
              </a>
            </div>
          </div>
        </PageSection>

        {/* ── RELATED ── */}
        <RelatedServices items={[
          { label: 'New Home Builds', href: '/services/new-home-builds', desc: 'Integrate a safe room from the ground up' },
          { label: 'Home Additions', href: '/services/additions', desc: 'Add square footage — and security' },
          { label: 'Structural Repairs', href: '/services/repairs', desc: 'Foundation, framing, concrete — Page 1 Reno' },
          { label: 'Concrete Work', href: '/services/concrete', desc: 'Foundations, slabs, below-grade work' },
        ]} />

      </main>
      <Footer />
    </>
  )
}
