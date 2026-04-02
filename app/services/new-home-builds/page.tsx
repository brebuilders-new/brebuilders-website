import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SectionLabel,
  SectionHeading,
  SpeakableBlock,
  PageSection,
  MobileCTABox,
  DesktopCTASection,
  RelatedServices,
  ServiceFAQSection,
  ServiceHeroSection,
} from '@/components/templates/ServiceTemplate'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { GalleryGrid } from '@/components/gallery/GalleryLightbox'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'New Home Builds Reno NV | Ground-Up Construction | Blue Reef Builders',
  description:
    'New home construction in Reno, NV and Northern California. Licensed builder with 35+ years experience. Full design-build, all permits handled. NV #0085999 · CA #1093798. Free estimate.',
  openGraph: {
    title: 'New Home Builds Reno NV | Blue Reef Builders',
    images: [{
      url: `${SITE_URL}/api/og?title=New+Home+Builds+Reno+NV&sub=Ground-Up+Construction+%C2%B7+35%2B+Years+%C2%B7+NV+%230085999&badge=New+Construction`,
      width: 1200, height: 630,
    }],
  },
  alternates: { canonical: 'https://brebuilders.com/services/new-home-builds/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/services/new-home-builds/#service',
      name: 'New Home Builds Reno NV',
      alternateName: ['New Home Construction Reno', 'Ground-Up Home Builder Reno NV', 'New Construction Builder Northern Nevada'],
      description: 'BRE Builders constructs new homes in Reno, NV and Northern California. Ground-up design-build with full permit handling. Licensed NV #0085999 · CA #1093798.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Lake Tahoe, NV' },
        { '@type': 'City', name: 'Carson City', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Truckee', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'Place', name: 'Northern California' },
      ],
      offers: { '@type': 'AggregateOffer', lowPrice: '350000', highPrice: '2000000', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a new home build cost in Reno NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'New home construction in Reno typically ranges from $200–$350 per square foot depending on finishes, complexity, and site conditions. A 2,000 sq ft home runs $400,000–$700,000 for mid-range finishes. Custom luxury builds with premium finishes start at $500 per square foot.' },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a new home in Reno Nevada?',
          acceptedAnswer: { '@type': 'Answer', text: 'New home construction in Reno typically takes 10–18 months from contract to occupancy. Permitting with Washoe County or the City of Reno takes 6–12 weeks. Framing through finishes takes another 6–12 months depending on size and complexity.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need my own land to build a new home with BRE Builders?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, you need to own the lot before construction begins. BRE Builders can advise on site suitability, utility access, and any geotechnical considerations during the planning phase.' },
        },
        {
          '@type': 'Question',
          name: 'What is included in a design-build contract with BRE Builders?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our design-build contracts include architectural concept development, structural engineering coordination, all permit applications and fees management, full construction from foundation through finishes, and final inspection support.' },
        },
        {
          '@type': 'Question',
          name: 'Does BRE Builders build new homes in California?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders holds California Contractor License #1093798 and has completed projects in Northern California including the Ripon Estate. We serve Truckee, Grass Valley, Auburn, and the greater Sacramento region.' },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
        { '@type': 'ListItem', position: 3, name: 'New Home Builds', item: 'https://brebuilders.com/services/new-home-builds/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

const FAQS = [
  { q: 'How much does a new home build cost in Reno NV?', a: 'New home construction in Reno ranges from $200–$350 per square foot for mid-range finishes. A 2,000 sq ft home runs $400,000–$700,000. Custom luxury builds with premium finishes, high-end cabinetry, and complex site work start at $500+ per square foot. BRE Builders provides detailed line-item estimates after an initial site consultation.' },
  { q: 'How long does a new home build take in Reno?', a: 'Plan for 10–18 months total. Washoe County and City of Reno permitting typically takes 6–12 weeks. Framing through move-in takes another 6–12 months depending on size, finishes, and weather. BRE Builders provides a milestone schedule at project kickoff.' },
  { q: 'Do I need my own land to build?', a: 'Yes. You need to own the lot before construction begins. BRE Builders will assess your lot for soil conditions, slope, utility access, setback requirements, and HOA restrictions during the consultation phase — before you commit to anything.' },
  { q: 'What does design-build mean with BRE?', a: 'One company handles concept through keys. BRE Builders coordinates architectural plans, structural engineering, all permit applications, and full construction under a single contract. You work with one team, one point of contact, and one warranty.' },
  { q: 'Does BRE Builders build in California?', a: 'Yes. We hold California Contractor License #1093798 and have built in Northern California including Ripon, Truckee, and the Sacramento foothills. We handle all California permit processes.' },
]

const BUILD_STAGES = [
  { n: '01', title: 'Site Assessment & Consultation', time: 'Week 1–2', desc: 'We review your lot, discuss your vision and budget range, assess soil and utility conditions, and provide a preliminary scope. No commitment.' },
  { n: '02', title: 'Design & Engineering', time: 'Weeks 3–8', desc: 'Architectural concept development, structural engineering coordination, material specifications, and value engineering to meet your budget.' },
  { n: '03', title: 'Permits & Approvals', time: 'Weeks 6–16', desc: 'Full permit applications with Washoe County, City of Reno, or California jurisdictions. We handle all agency submissions and respond to corrections.' },
  { n: '04', title: 'Foundation & Framing', time: 'Months 4–7', desc: 'Site prep, footings, foundation pour, framing, roofing, and rough-in for mechanical, electrical, and plumbing by our licensed in-house team.' },
  { n: '05', title: 'Finishes & Inspections', time: 'Months 7–12', desc: 'Insulation, drywall, cabinetry, flooring, tile, fixtures, exterior finishes, landscaping prep, and all required inspections through Certificate of Occupancy.' },
  { n: '06', title: 'Walkthrough & Keys', time: 'Month 12–18', desc: 'Final punch-list walkthrough, CO inspection, and handover. Your home is move-in ready with a complete warranty package.' },
]

export default function NewHomeBuildsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main data-theme="luxury">

        {/* Hero */}
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.ripon[3],
          bgMobile:  IMGS.svc_newbuild,
          eyebrow:   'New Home Builds · Reno, NV & Northern California',
          h1Lines:   ['New Home Builds'],
          h1Ghost:   'Built to Last.',
          lead:      'Ground-up new home construction by a licensed builder with 35 years in Northern Nevada and California. One team from design to keys.',
          badges:    ['NV Lic #0085999', 'CA Lic #1093798', '35+ Years', 'Design-Build'],
          ctaPrimaryLabel:   'Get a Free Estimate',
          ctaPrimaryHref:    '/contact?service=new-home',
          ctaSecondaryLabel: 'View Completed Homes',
          ctaSecondaryHref:  '/projects/ripon-estate/',
          ctaMobileLabel:    '📞 Discuss Your Build',
          stats: [
            { n: '35+', label: 'Years Building' },
            { n: '$350K+', label: 'Starting Cost' },
            { n: '10–18', label: 'Months to Keys' },
          ],
          license: 'both',
        }} />

        {/* Speakable intro */}
        <PageSection bg="bg-deep">
          <SectionLabel text="New Home Construction — Reno NV" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading line1="One Builder." line2italic="Start to Keys." size="lg" className="mb-8" />
              <SpeakableBlock className="speakable-summary">
                <p>
                  BRE Builders constructs new homes in Reno, Sparks, Lake Tahoe, Carson City, and Northern California.
                  We are a licensed design-build contractor — meaning one company manages architectural coordination,
                  permits, and all construction under a single contract.
                </p>
                <p>
                  We hold Nevada Contractor License #0085999 and California Contractor License #1093798.
                  Steve Rosenthal has been building in Northern Nevada and California since 1989.
                  Our team handles everything from site assessment through final walkthrough.
                </p>
                <p>
                  New home builds in Reno typically range from $200–$350 per square foot depending on finishes,
                  site complexity, and current material costs. We provide detailed line-item estimates after a
                  consultation — no vague ballparks.
                </p>
              </SpeakableBlock>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact?service=new-home" className="btn-primary">Get a Free Estimate →</Link>
                <Link href="/projects/ripon-estate/" className="btn-ghost">View Ripon Estate →</Link>
              </div>
            </div>

            {/* Gallery */}
            <GalleryGrid
              mode="grid"
              images={[
                { src: IMGS.ripon[3], alt: 'Mediterranean Custom Home Front Elevation Ripon California BRE Builders',  title: 'Mediterranean Estate', caption: 'Ripon, CA — ground-up custom build' },
                { src: IMGS.ripon[2], alt: 'Grand Foyer Iron Staircase Marble Floors Custom Home BRE Builders',        title: 'Grand Foyer',         caption: 'Iron staircase, marble tile entry' },
                { src: IMGS.ripon[1], alt: "Chef's Kitchen Custom Cabinetry Marble Backsplash New Home BRE Builders",  title: "Chef's Kitchen",      caption: 'Custom cabinetry, marble backsplash' },
              ]}
              aspectClass="h-52"
            />
          </div>
        </PageSection>

        {/* Build process */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="The Build Process" />
          <SectionHeading line1="What to Expect" line2italic="Start to Finish." size="lg" className="mb-12" />

          {/* Desktop timeline */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {BUILD_STAGES.map(s => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="font-mono text-[11px] text-teal/60 tracking-widest">{s.n}</div>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                <h3 className="font-display text-[18px] text-cream mb-1 leading-snug">{s.title}</h3>
                <p className="font-mono text-[10px] text-teal/60 tracking-wider mb-3">{s.time}</p>
                <p className="text-[13px] text-cream/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-4">
            {BUILD_STAGES.map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-deep rounded-xl border border-white/[0.055]">
                <div className="font-mono text-[28px] text-teal/15 font-bold leading-none flex-shrink-0 pt-1">{s.n}</div>
                <div>
                  <div className="font-display text-[16px] text-cream leading-snug mb-0.5">{s.title}</div>
                  <div className="font-mono text-[10px] text-teal/60 tracking-wider mb-2">{s.time}</div>
                  <p className="text-[13px] text-cream/45 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mt-2">
              📞 Discuss Your Timeline
            </a>
          </div>
        </PageSection>

        {/* Cost breakdown */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Pricing & What Affects Cost" />
          <SectionHeading line1="What Drives the" line2italic="Cost of Your Build." size="lg" className="mb-10" />

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                factor: 'Square Footage',
                detail: 'Reno new builds typically run $200–$350/sq ft for standard finishes. A 2,000 sq ft home: $400K–$700K. A 3,500 sq ft home: $700K–$1.2M.',
                icon: '📐',
              },
              {
                factor: 'Site Conditions',
                detail: 'Flat lots in established neighborhoods cost less to build on. Hillside lots, expansive clay soils, and rocky ground require additional foundation work.',
                icon: '🏔',
              },
              {
                factor: 'Finish Level',
                detail: 'Builder-grade finishes are included in base pricing. Semi-custom and full custom upgrades (cabinetry, tile, counters, fixtures) add $30–$150/sq ft.',
                icon: '✨',
              },
              {
                factor: 'Utility Access',
                detail: 'Lots with existing utility connections (water, sewer, gas, electric) cost less to build on. Remote lots or those requiring new connections add cost.',
                icon: '⚡',
              },
            ].map(item => (
              <div key={item.factor} className="flex gap-4 p-5 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/20 transition-colors">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-display text-[17px] text-cream mb-2">{item.factor}</h3>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cost summary */}
          <div className="hidden md:block bg-panel border border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.06]">
              <p className="font-mono text-[11px] tracking-[2px] text-cream/40 uppercase">Typical Cost Ranges — Reno/Northern Nevada</p>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {[
                { size: '1,500 sq ft', type: 'Starter / ranch style', range: '$300K – $525K' },
                { size: '2,000 sq ft', type: 'Standard 3BR/2BA',      range: '$400K – $700K' },
                { size: '2,500 sq ft', type: 'Mid-range 4BR',         range: '$500K – $875K' },
                { size: '3,500 sq ft', type: 'Upscale custom',        range: '$700K – $1.2M' },
                { size: '5,000+ sq ft', type: 'Luxury estate',        range: '$1.2M+' },
              ].map(row => (
                <div key={row.size} className="grid grid-cols-3 px-6 py-4">
                  <span className="font-mono text-[13px] text-cream/70">{row.size}</span>
                  <span className="text-[13px] text-cream/45">{row.type}</span>
                  <span className="font-mono text-[13px] text-gold text-right">{row.range}</span>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-white/[0.05]">
              <p className="text-[11px] text-cream/25 font-mono">Based on 2024–2025 Northern Nevada construction costs. Ranges vary with finishes and site conditions. Free on-site estimate available.</p>
            </div>
          </div>
        </PageSection>

        {/* Why BRE */}
        <PageSection bg="bg-void" border>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Why BRE Builders" />
              <SectionHeading line1="35 Years of" line2italic="Building in Nevada." size="lg" className="mb-8" />
              <SpeakableBlock>
                <p>
                  Steve Rosenthal founded Blue Reef Builders in 1989. In 35+ years of building in Northern Nevada,
                  he has seen every soil condition, permit regime, and construction challenge the region can produce.
                </p>
                <p>
                  We are a licensed general contractor — not a broker or a coordinator. Our team includes licensed
                  carpenters, concrete workers, and finish specialists who work on your project every day.
                  We do not subcontract the core work.
                </p>
              </SpeakableBlock>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'NV License',  value: '#0085999' },
                  { label: 'CA License',  value: '#1093798' },
                  { label: 'Founded',     value: '1989' },
                  { label: 'Response',    value: '24 Hours' },
                ].map(item => (
                  <div key={item.label} className="p-4 bg-panel rounded-xl border border-white/[0.06]">
                    <p className="font-mono text-[10px] text-cream/35 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-display text-[20px] text-teal">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed project callout */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.07]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMGS.ripon[0]}
                alt="Ripon Estate Completed Custom Home BRE Builders California"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-[10px] text-teal/70 tracking-widest uppercase mb-2">Completed Project</p>
                <p className="font-display text-[22px] text-cream leading-snug mb-3">Ripon Estate, California</p>
                <p className="text-[13px] text-cream/55 mb-4">Custom Mediterranean estate — ground up. Full design-build.</p>
                <Link href="/projects/ripon-estate/" className="btn-primary text-[12px] py-2.5 px-5">
                  View Full Project →
                </Link>
              </div>
            </div>
          </div>
        </PageSection>

        {/* Mobile CTA */}
        <MobileCTABox
          headline="Ready to Build Your New Home?"
          subtext="Free on-site estimate in Reno, Sparks, Lake Tahoe, Carson City, or Northern California."
          ctaLabel="Request a Free Estimate"
          ctaHref="/contact?service=new-home"
        />

        {/* FAQ */}
        <ServiceFAQSection
          faqs={FAQS}
          label="New Home Build Questions"
          aeoContent={
            <div>
              <SectionLabel text="New Home Construction — Northern Nevada" />
              <SectionHeading line1="Building New in" line2italic="Reno Requires Experience." size="md" className="mb-6" />
              <SpeakableBlock className="speakable-faq mb-8">
                <p>
                  New home construction in the Reno-Sparks metro requires navigating Washoe County and City of Reno
                  permitting, expansive clay soil conditions, high-altitude building requirements near Lake Tahoe,
                  and Nevada energy code compliance. BRE Builders has managed all of these consistently since 1989.
                </p>
                <p>
                  We build in Reno, Sparks, Carson City, Lake Tahoe, Truckee, and Northern California under a
                  single licensed team. Whether you have a finished lot, architectural plans, or just a vision,
                  we can take your project from the first meeting to move-in day.
                </p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/services/new-home/" className="btn-ghost text-[12px] py-2 px-4">Custom Home Builder →</Link>
                <Link href="/services/adu/" className="btn-ghost text-[12px] py-2 px-4">ADU Builders Reno →</Link>
                <Link href="/services/additions/" className="btn-ghost text-[12px] py-2 px-4">Home Additions →</Link>
                <Link href="/projects/ripon-estate/" className="btn-ghost text-[12px] py-2 px-4">Ripon Estate Project →</Link>
              </div>
            </div>
          }
        />

        {/* Desktop CTA */}
        <DesktopCTASection
          bgImage={IMGS.ripon[3]}
          bgAlt="New Home Build Reno NV BRE Builders"
          headline="Start Your New Home Build"
          headlineItalic="in Reno or California."
          subtext="Free on-site estimate. 24-hour response. Licensed in Nevada and California since 1989."
          ctaLabel="Get Your Free Estimate"
          ctaHref="/contact?service=new-home"
        />

        {/* Related */}
        <RelatedServices
          items={[
            { href: '/services/additions/', label: 'Home Additions', desc: 'Expand your existing home with permitted room, story, or garage additions.' },
            { href: '/services/adu/', label: 'ADU Construction', desc: 'Add a detached or attached ADU for rental income or family housing.' },
            { href: '/services/kitchen-bath/', label: 'Kitchen & Bath', desc: 'Full remodels for existing homes — new builds or gut renovations.' },
            { href: '/services/new-home/', label: 'Custom Homes', desc: 'Ground-up custom home construction with full design-build service.' },
          ]}
        />

      </main>
      <Footer />
    </>
  )
}
