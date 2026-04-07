import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SectionLabel,
  SectionHeading,
  SpeakableBlock,
  PageSection,
  RelatedServices,
  ServiceFAQSection,
  ServiceHeroSection,
} from '@/components/templates/ServiceTemplate'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Safe Rooms & Panic Rooms Reno NV | Licensed Contractor | BRE Builders',
  description: 'Safe rooms and panic rooms built by a licensed GC in Reno, Lake Tahoe, and Northern California. Reinforced concrete and framing. Permits handled. NV #0085999 · CA #1093798. Free consultation.',
  openGraph: {
    title: 'Safe Rooms & Panic Rooms Reno NV | BRE Builders',
    images: [{ url: `${SITE_URL}/api/og?title=Safe+Rooms+%26+Panic+Rooms&sub=Licensed+GC+%C2%B7+Reno+NV+%26+Northern+CA+%C2%B7+NV+%230085999`, width: 1200, height: 630 }],
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
      alternateName: ['Panic Room Builder Reno NV', 'Safe Room Contractor Lake Tahoe', 'Safe Room New Construction Nevada', 'Licensed Safe Room Contractor Northern California'],
      description: 'Safe rooms and panic rooms built by a licensed general contractor in Reno, Lake Tahoe, and Northern California. Reinforced concrete and framing, permits handled. NV #0085999 · CA #1093798.',
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
        { '@type': 'Question', name: 'Do I need a permit to build a safe room in Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Any structural modification to a home requires a building permit in Nevada and California. BRE Builders handles all permitting as part of the project scope.' } },
        { '@type': 'Question', name: 'Can a safe room be added to an existing home?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Safe rooms can be retrofitted into existing homes using a reinforced closet, interior room, or garage space. BRE Builders assesses the existing structure and recommends the best location.' } },
        { '@type': 'Question', name: 'What is the best time to add a safe room?', acceptedAnswer: { '@type': 'Answer', text: 'The most cost-effective time is during new construction or a major remodel — when walls are open and structural work is already underway.' } },
        { '@type': 'Question', name: 'Will a safe room look different from the rest of my home?', acceptedAnswer: { '@type': 'Answer', text: 'No. Safe rooms are finished to blend completely — standard drywall, concealed door hardware, and interior finishes that match your home.' } },
        { '@type': 'Question', name: 'Does BRE Builders build safe rooms in California?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders holds California Contractor License #1093798 and serves Truckee, Tahoe Basin, and Northern California. All California permit requirements handled by our team.' } },
        { '@type': 'Question', name: 'Can BRE Builders build below-grade or underground rooms?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders has excavation and below-grade concrete experience. Underground rooms are assessed project-by-project based on soil conditions, site access, and structural requirements.' } },
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
  { q: 'Do I need a permit to build a safe room in Nevada?', a: 'Yes. Any structural modification — including a reinforced safe room — requires a building permit in Nevada and California. BRE Builders handles all permitting as part of the project scope.' },
  { q: 'Can a safe room be added to an existing home?', a: 'Yes. Safe rooms can be retrofitted into an existing home using a reinforced closet, interior room, or garage space. BRE Builders assesses your structure and recommends the best location.' },
  { q: 'What is the best time to add a safe room?', a: 'During new construction or a major remodel — when walls are open and structural work is already underway. Standalone retrofits are also possible but typically involve more disruption and cost.' },
  { q: 'Will it look different from the rest of my home?', a: 'No. Safe rooms are finished to blend completely — standard drywall, concealed door hardware, and interior finishes that match your existing space.' },
  { q: 'Does BRE Builders build safe rooms in California?', a: 'Yes. We hold California Contractor License #1093798 and serve Truckee, the Tahoe Basin, and Northern California. All permit requirements handled by our team.' },
  { q: 'Can BRE build below-grade or underground rooms?', a: 'Yes. BRE Builders has excavation and below-grade concrete capability. Underground rooms are evaluated project-by-project based on soil conditions, site access, and structural requirements.' },
]

const BUILD_TYPES = [
  { icon: '🏗️', title: 'New Construction', sub: 'Most cost-effective', desc: 'Designed into the floor plan. Reinforced concrete poured during foundation phase, specialty door framed during rough-in.', img: IMGS.svc_newbuild, alt: 'New home construction with integrated safe room BRE Builders Reno NV' },
  { icon: '🔨', title: 'Home Retrofit', sub: 'Into your existing home', desc: 'Reinforced walls and ceiling in an existing closet, interior room, or garage corner. Finished to match surrounding rooms.', img: IMGS.svc_repair, alt: 'Safe room retrofit existing home BRE Builders Reno NV' },
  { icon: '🏠', title: 'Remodel Integration', sub: 'Walls already open', desc: 'Adding a safe room during a kitchen, addition, or structural remodel. Marginal cost is significantly lower when work is already underway.', img: IMGS.svc_kitchen, alt: 'Safe room added during remodel BRE Builders Northern Nevada' },
  { icon: '⬇️', title: 'Below-Grade Room', sub: 'Underground where site allows', desc: 'Fully or partially below-grade with excavation, reinforced concrete, waterproofing, ventilation, and utility rough-in.', img: IMGS.concrete_slab, alt: 'Below-grade safe room excavation concrete BRE Builders Reno NV' },
]

export default function SafeRoomsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main data-theme="luxury">

        {/* HERO */}
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.ripon[3],
          bgMobile:  IMGS.svc_custom_home,
          eyebrow:   'Safe Rooms & Panic Rooms · Reno, Lake Tahoe & Northern California',
          h1Lines:   ['Safe Rooms &', 'Panic Rooms'],
          h1Ghost:   'Built in. Built right.',
          lead:      'Reinforced rooms integrated into new builds and existing homes. Permits handled. Structural work done to code.',
          badges:    ['NV Lic #0085999', 'CA Lic #1093798', '35+ Years', 'Free Consultation'],
          ctaPrimaryLabel:   'Request a Free Consultation',
          ctaPrimaryHref:    '/contact?service=safe-rooms',
          ctaSecondaryLabel: 'View Our Structural Work',
          ctaSecondaryHref:  '/projects/quaking-aspen/',
          ctaMobileLabel:    '📞 Discuss Your Project',
          stats: [{ n: '35+', label: 'Years Licensed' }, { n: 'Free', label: 'Consultation' }, { n: 'NV·CA', label: 'Licensed' }],
          license: 'both',
        }} />

        {/* MOBILE hook */}
        <section className="md:hidden bg-teal/[0.06] border-b border-teal/20 py-5">
          <div className="container">
            <p className="font-display text-[19px] text-cream leading-snug">
              The best time to add a safe room<br />
              <span className="text-teal font-semibold">is during your build or remodel.</span>
            </p>
            <p className="font-mono text-[11px] text-cream/40 mt-2">Walls already open · Structural work underway · No added disruption</p>
          </div>
        </section>

        {/* DESKTOP stat strip */}
        <section className="hidden md:block bg-panel border-y border-white/[0.06]">
          <div className="container py-6">
            <div className="grid grid-cols-4 gap-8">
              {[
                { val: 'Above-Grade', label: 'Simplest build type', sub: 'No excavation required' },
                { val: 'Below-Grade', label: 'Maximum protection', sub: 'Excavation + concrete' },
                { val: 'Permitted', label: 'All permit work handled', sub: 'NV & CA jurisdictions' },
                { val: 'Concealed', label: 'No visible difference', sub: 'Blends with your home' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display text-[26px] text-teal font-light leading-none">{s.val}</div>
                  <div className="font-mono text-[11px] text-cream/65 mt-1">{s.label}</div>
                  <div className="font-mono text-[10px] text-cream/30 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO — image + text */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Safe Rooms & Panic Rooms — Reno NV & Northern California" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading line1="Built Into Your Home." line2italic="Ready When You Need It." size="lg" className="mb-6" />
              <SpeakableBlock className="speakable-summary">
                <p className="text-[15px] text-cream/70 leading-relaxed mb-4">
                  BRE Builders constructs safe rooms and panic rooms in Reno, Sparks, Lake Tahoe, and Northern California —
                  as a licensed general contractor, not a prefab supplier. Structural engineering coordination,
                  full permit handling, construction inspected and integrated with your home.
                </p>
                <p className="text-[15px] text-cream/70 leading-relaxed">
                  Steve Rosenthal has been building in Northern Nevada and California since 1989 with experience
                  in concrete, excavation, structural framing, and custom home construction.
                  The skills that go into a safe room are the same skills on every project we build.
                </p>
              </SpeakableBlock>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact?service=safe-rooms" className="btn-primary">Request a Free Consultation →</Link>
                <Link href="/services/new-home-builds" className="btn-ghost">Add to a New Build →</Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-80 lg:h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.ripon[0]} alt="Custom home structural construction by BRE Builders Reno NV" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-1">Licensed · Structural · Permitted</p>
                <p className="font-display text-[17px] text-white leading-snug">35 years of concrete, framing, and structural work in NV & CA</p>
              </div>
            </div>
          </div>
        </PageSection>

        {/* BUILD TYPES — image cards */}
        <PageSection bg="bg-void">
          <SectionLabel text="What BRE Builders Constructs" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <SectionHeading line1="Four Ways to" line2italic="Add a Safe Room." size="lg" />
            <Link href="/contact?service=safe-rooms" className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0">Get a Free Consultation →</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUILD_TYPES.map(t => (
              <div key={t.title} className="group overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/25 transition-all bg-panel">
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
                  <div className="absolute top-3 left-3 text-xl">{t.icon}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-[18px] text-cream mb-0.5">{t.title}</h3>
                  <p className="font-mono text-[10px] text-teal/60 tracking-wider mb-3">{t.sub}</p>
                  <p className="text-[12px] text-cream/45 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden mt-6">
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4">📞 Discuss Your Project</a>
          </div>
        </PageSection>

        {/* WHY RENO & TAHOE — full-bleed */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp" alt="Lake Tahoe Northern Nevada BRE Builders service area" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/85" />
          </div>
          <div className="relative container py-20 lg:py-28">
            <SectionLabel text="Why This Region Specifically" />
            <SectionHeading line1="Reno & Tahoe Have" line2italic="Real Considerations." size="lg" className="mb-4 max-w-lg" />
            <p className="text-[14px] text-cream/50 leading-relaxed max-w-xl mb-12">Not fear. Facts specific to this geography.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: 'Wildfire', detail: 'Tahoe Basin and Eastern Sierra have seen repeated evacuation orders. A reinforced room provides a last-resort shelter when roads are compromised.' },
                { stat: 'Isolation', detail: 'Many Tahoe and Truckee properties are accessed by a single road. Power outages and road closures can last days.' },
                { stat: 'Property Value', detail: 'A professionally built, permitted safe room is a documented improvement — not a liability. It adds to the home\'s record and verified value.' },
              ].map(item => (
                <div key={item.stat} className="p-6 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.08] hover:border-teal/20 transition-colors">
                  <div className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-3">{item.stat}</div>
                  <p className="text-[13px] text-cream/65 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY LICENSED GC */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="Why a Licensed GC — Not a Prefab Company" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading line1="One Builder." line2italic="Start to Finish." size="lg" className="mb-6" />
              <div className="space-y-5">
                {[
                  { label: 'Permits — handled start to finish', detail: 'Reinforced rooms require permits in NV and CA. BRE submits, tracks, and manages all applications including Tahoe Basin TRPA requirements.' },
                  { label: 'Structural integrity — not guesswork', detail: 'Reinforced concrete framing, proper load transfer to the foundation. Licensed contractor with 35+ years of structural experience.' },
                  { label: 'Integrated — not dropped in', detail: 'Prefab companies leave a steel box. BRE integrates the room with your electrical, HVAC, and finishes so it functions as part of the house.' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-display text-[15px] text-cream mb-1">{item.label}</div>
                      <p className="text-[13px] text-cream/45 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact?service=safe-rooms" className="btn-primary">Request a Free Consultation →</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Reinforced Concrete', proof: 'Car wash slab, custom home foundations, commercial site prep' },
                { label: 'Structural Framing', proof: 'Custom homes, additions, structural repairs — all permitted' },
                { label: 'Excavation', proof: 'Site prep, below-grade work, utility integration' },
                { label: 'NV & CA Permits', proof: 'Including TRPA Tahoe Basin — among the most complex jurisdictions' },
              ].map(item => (
                <div key={item.label} className="p-4 bg-deep rounded-xl border border-white/[0.06] hover:border-teal/20 transition-colors">
                  <div className="font-display text-[14px] text-cream mb-1 leading-snug">{item.label}</div>
                  <p className="text-[11px] text-cream/35 leading-relaxed">{item.proof}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        {/* PROCESS */}
        <PageSection bg="bg-deep">
          <SectionLabel text="The Process" />
          <SectionHeading line1="How It Works." line2italic="No Surprises." size="lg" className="mb-12" />
          <div className="hidden md:grid grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Free Consultation', time: 'No commitment', body: 'Site review, goals discussion, approach recommendation — above or below-grade, new build or retrofit.' },
              { n: '02', title: 'Written Quote', time: 'Line-item pricing', body: 'Detailed written estimate. Changes communicated in writing before proceeding.' },
              { n: '03', title: 'Permits & Engineering', time: 'We handle it', body: 'All permit applications submitted and tracked. Structural engineering coordination where required.' },
              { n: '04', title: 'Build & Inspect', time: '1-year warranty', body: 'Licensed crew, permitted work, required inspections. Final walkthrough before handover.' },
            ].map(s => (
              <div key={s.n}>
                <div className="font-mono text-[11px] text-teal/60 mb-3">{s.n}</div>
                <h3 className="font-display text-[20px] text-cream mb-1">{s.title}</h3>
                <p className="font-mono text-[10px] text-teal/70 mb-3 tracking-wider">{s.time}</p>
                <p className="text-[13px] text-cream/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden space-y-4">
            {[
              { n: '01', title: 'Free Consultation', body: 'Site review, goals, approach recommendation. No commitment.' },
              { n: '02', title: 'Written Quote', body: 'Line-item pricing. Changes communicated in writing.' },
              { n: '03', title: 'Permits & Engineering', body: 'All permits submitted and tracked. Engineering coordination included.' },
              { n: '04', title: 'Build & Inspect', body: 'Licensed crew, permitted work, final walkthrough. 1-year warranty.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-panel rounded-xl border border-white/[0.055]">
                <div className="font-mono text-[28px] text-teal/15 font-bold leading-none flex-shrink-0">{s.n}</div>
                <div>
                  <div className="font-display text-[16px] text-cream mb-1">{s.title}</div>
                  <p className="text-[12px] text-cream/40 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mt-2">📞 Start with a Free Consultation</a>
          </div>
        </PageSection>

        {/* FAQ */}
        <ServiceFAQSection
          faqs={FAQS}
          label="Safe Room Questions"
          aeoContent={
            <div>
              <SectionLabel text="Safe Rooms & Panic Rooms — Reno NV" />
              <SectionHeading line1="What Homeowners Ask" line2italic="Before They Build." size="md" className="mb-6" />
              <div className="speakable-faq space-y-4 text-[14px] text-cream/60 leading-relaxed">
                <div>
                  <h3 className="font-display text-[15px] text-teal mb-2">What is the best time to add a safe room to a home in Reno?</h3>
                  <p>The most cost-effective time is during new construction or a major remodel — when walls are already open and structural work is already underway. Adding a reinforced room during framing costs significantly less than retrofitting into a finished home. BRE Builders integrates safe rooms during new builds and remodels throughout Reno, Tahoe, and Northern California.</p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] text-teal mb-2">Do I need a permit to build a safe room in Nevada?</h3>
                  <p>Yes. Any structural modification to a home — including a reinforced safe room or panic room — requires a building permit in Nevada and California. BRE Builders holds Nevada License #0085999 and California License #1093798, and handles all permit applications, engineering coordination, and inspections as part of the project scope.</p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] text-teal mb-2">Can a safe room be added to an existing home in Reno or Lake Tahoe?</h3>
                  <p>Yes. Safe rooms can be retrofitted into existing homes using a reinforced closet, interior room, or garage space. BRE Builders assesses the existing structure, recommends the best location based on your layout and goals, and finishes the room to blend with your home — no visible difference from outside the room.</p>
                </div>
              </div>
            </div>
          }
          internalLinks={[
            { label: 'New Home Builds', href: '/services/new-home-builds/' },
            { label: 'Home Additions', href: '/services/additions/' },
            { label: 'Structural Repairs', href: '/services/repairs/' },
          ]}
        />

        {/* FINAL CTA */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.ripon[3]} alt="BRE Builders custom home construction" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <div className="inline-flex items-center gap-2 border border-teal/25 rounded-full px-4 py-2 bg-teal/[0.06] mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream">Now Accepting New Projects</span>
            </div>
            <h2 className="font-display text-[clamp(36px,6vw,72px)] font-light leading-[0.96] tracking-tight text-white mb-6">
              Planning a Build or Remodel?<br />
              <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(30,207,201,0.5)' }}>
                This Is the Right Time.
              </span>
            </h2>
            <p className="text-[15px] text-white/70 max-w-lg mx-auto leading-relaxed mb-10">
              The most cost-effective window is when structural work is already underway.
              Free consultation, written estimate, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact?service=safe-rooms" className="btn-primary px-9 py-4">Request a Free Consultation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-9 py-4 font-mono border-white/20 text-white hover:bg-white/10">{SITE.phone}</a>
            </div>
          </div>
        </section>

        {/* RELATED */}
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
