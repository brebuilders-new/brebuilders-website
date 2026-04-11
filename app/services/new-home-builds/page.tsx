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
  title: 'Custom Home Builder Reno NV | New Home Builds | BRE Builders',
  description:
    'Licensed custom home builder in Reno NV. Ground-up new home construction in Reno, Sparks, Lake Tahoe & Northern California. Design-build, permits handled. NV #0085999 · CA #1093798. Free estimate.',
  openGraph: {
    title: 'Custom Home Builder Reno NV | New Home Construction | BRE Builders',
    images: [{
      url: `${SITE_URL}/api/og?title=Custom+Home+Builder+Reno+NV&sub=Ground-Up+Builds+%C2%B7+35%2B+Years+%C2%B7+NV+%230085999&badge=New+Construction`,
      width: 1200, height: 630,
      alt: 'Blue Reef Builders — Custom Home Builder Reno NV | New Home Builds | BRE Builders',
    }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Home Builder Reno NV | New Home Builds | BRE Builders',
    description: 'Licensed custom home builder in Reno NV. Ground-up new home construction in Reno, Sparks, Lake Tahoe & Northern California. Design-build, permits handled. ',
    images: [{ url: `${SITE_URL}/api/og?title=Custom+Home+Builder+Reno+NV&sub=Ground-Up+Builds+%C2%B7+35%2B+Years+%C2%B7+NV+%230085999&badge=New+Construction`, alt: 'Blue Reef Builders — Custom Home Builder Reno NV | New Home Builds | BRE Builders' }],
  },
  alternates: { canonical: `${SITE_URL}/services/new-home-builds/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/services/new-home-builds/#service',
      name: 'Custom Home Builder Reno NV',
      alternateName: [
        'New Home Construction Reno NV',
        'New Home Builds Reno Nevada',
        'Ground-Up Home Builder Reno NV',
        'Custom Home Builder Northern Nevada',
        'New Construction Homes Reno NV',
        'Home Builder Reno Nevada',
        'Custom Home Builder Lake Tahoe',
        'New Home Builder Sparks NV',
        'Home Builder Carson City NV',
      ],
      description: 'Licensed custom home builder in Reno NV and Northern California. Ground-up new home construction with design-build service. All permits handled. NV #0085999 · CA #1093798.',
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
        { '@type': 'Question', name: 'How much does a new home build cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides free consultations for new home builds in Reno. Pricing depends on size, site conditions, finish level, and current material costs. We provide detailed line-item estimates after a site consultation. NV License #0085999.' } },
        { '@type': 'Question', name: 'How long does a new home build take in Reno Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Plan for 10-18 months total. Washoe County and City of Reno permitting typically takes 6-12 weeks. Framing through move-in takes another 6-12 months depending on size, finishes, and weather. BRE Builders provides a milestone schedule at kickoff.' } },
        { '@type': 'Question', name: 'Do I need my own land to build a custom home with BRE Builders?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You need to own the lot before construction begins. BRE Builders assesses your lot for soil conditions, slope, utility access, setback requirements, and HOA restrictions during the consultation phase.' } },
        { '@type': 'Question', name: 'What does design-build mean with BRE Builders?', acceptedAnswer: { '@type': 'Answer', text: 'One company handles concept through keys. BRE Builders coordinates architectural plans, structural engineering, all permit applications, and full construction under a single contract. One team, one point of contact, one warranty.' } },
        { '@type': 'Question', name: 'Does BRE Builders build custom homes in Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders builds custom homes in Lake Tahoe including TRPA permit compliance and snow-load engineering. We have completed renovation and construction projects at Zephyr Cove and Glenbrook. NV License #0085999.' } },
        { '@type': 'Question', name: 'Does BRE Builders build new homes in California?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders holds California Contractor License #1093798 and has built in Northern California including the Ripon Estate. We serve Truckee, Grass Valley, Auburn, and the greater Sacramento region.' } },
        { '@type': 'Question', name: 'What is the difference between a custom home builder and a production builder?', acceptedAnswer: { '@type': 'Answer', text: 'Production builders use fixed floor plans on developer lots. Custom home builders like BRE Builders build to your specifications on your land — your floor plan, your finishes, your timeline. Every BRE Builders home is unique.' } },
        { '@type': 'Question', name: 'Does BRE Builders build homes in Carson City Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders is licensed in Nevada (#0085999) and serves Reno, Sparks, Carson City, Minden, Gardnerville, Fernley, and the greater Northern Nevada region.' } },
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
  { q: 'How much does a new home build cost in Reno NV?', a: 'BRE Builders provides free consultations for new home builds in Reno. Pricing depends on size, site conditions, finish level, and current material costs. We provide detailed line-item estimates after a site consultation — no vague ballparks. NV License #0085999.' },
  { q: 'How long does a new home build take in Reno?', a: 'Plan for 10–18 months total. Washoe County and City of Reno permitting typically takes 6–12 weeks. Framing through move-in takes another 6–12 months depending on size, finishes, and weather. BRE Builders provides a milestone schedule at project kickoff.' },
  { q: 'Do I need my own land to build a custom home with BRE Builders?', a: 'Yes. You need to own the lot before construction begins. BRE Builders will assess your lot for soil conditions, slope, utility access, setback requirements, and HOA restrictions during the consultation phase — before you commit to anything.' },
  { q: 'What does design-build mean with BRE Builders?', a: 'One company handles concept through keys. BRE Builders coordinates architectural plans, structural engineering, all permit applications, and full construction under a single contract. You work with one team, one point of contact, and one warranty.' },
  { q: 'Does BRE Builders build custom homes in Lake Tahoe?', a: 'Yes. BRE Builders builds custom homes in Lake Tahoe and the Tahoe Basin, including TRPA permit compliance and snow-load engineering requirements. We have completed renovation and construction projects at Zephyr Cove and Glenbrook. NV License #0085999.' },
  { q: 'Does BRE Builders build new homes in California?', a: 'Yes. We hold California Contractor License #1093798 and have built in Northern California including the Ripon Estate — a ground-up Mediterranean custom home. We serve Truckee, Grass Valley, Auburn, and the greater Sacramento region.' },
  { q: 'What is the difference between a custom home builder and a production builder?', a: 'Production builders build from a fixed set of floor plans on developer-owned lots with limited customization. Custom home builders like BRE Builders build to your specifications on your land — your floor plan, your finishes, your timeline. Every BRE Builders home is one-of-a-kind.' },
  { q: 'Can BRE Builders build in Carson City and Northern Nevada?', a: 'Yes. BRE Builders is licensed in Nevada (#0085999) and serves Reno, Sparks, Carson City, Minden, Gardnerville, Fernley, and the greater Northern Nevada region. We handle all applicable city and county permit requirements.' },
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
          eyebrow:   'Custom Home Builder · Reno, NV · Sparks · Lake Tahoe · Northern California',
          h1Lines:   ['Custom Home', 'Builds Reno NV'],
          h1Ghost:   'Built to Last.',
          lead:      'Licensed custom home builder with 35 years in Northern Nevada and California. Ground-up new construction — one team from design to keys.',
          badges:    ['NV Lic #0085999', 'CA Lic #1093798', '35+ Years', 'Design-Build'],
          ctaPrimaryLabel:   'Get a Free Estimate',
          ctaPrimaryHref:    '/contact?service=new-home',
          ctaSecondaryLabel: 'View Completed Homes',
          ctaSecondaryHref:  '/projects/ripon-estate/',
          ctaMobileLabel:    '📞 Discuss Your Build',
          stats: [
            { n: '35+', label: 'Years Building' },
            { n: 'Free', label: 'Consultation' },
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
                  New home builds in Reno are priced based on size, site conditions, and finish level.
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
                detail: 'BRE Builders provides free consultations for new home builds. Pricing depends on size, site conditions, and finish level.',
                icon: '📐',
              },
              {
                factor: 'Site Conditions',
                detail: 'Flat lots in established neighborhoods cost less to build on. Hillside lots, expansive clay soils, and rocky ground require additional foundation work.',
                icon: '🏔',
              },
              {
                factor: 'Finish Level',
                detail: 'Base pricing includes standard finishes. Custom upgrades available — contact BRE Builders for a detailed estimate.',
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
            <div className="px-6 py-6 text-center">
              <p className="text-[14px] text-cream/60 mb-4">Pricing for new home builds depends on size, site conditions, and finish level.</p>
              <p className="text-[13px] text-cream/40 mb-2">BRE Builders provides a free detailed estimate after an initial consultation.</p>
              <p className="font-mono text-[11px] text-teal">NV #0085999 · CA #1093798 · Free consultations available</p>
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
                <h3 className="font-display text-[17px] text-teal mb-2">What does a custom home builder in Reno NV do?</h3>
                <p>
                  A custom home builder manages every phase of new home construction on your lot — site assessment,
                  architectural coordination, engineering, permit applications, foundation, framing, MEP rough-in,
                  finishes, and final inspection. BRE Builders handles all of this under one licensed contract in
                  Reno, Sparks, Carson City, Lake Tahoe, and Northern California.
                </p>
                <h3 className="font-display text-[17px] text-teal mb-2 mt-4">How do I find a licensed home builder in Reno Nevada?</h3>
                <p>
                  Verify Nevada contractor license status at the Nevada State Contractors Board (nvcontractorsboard.com).
                  BRE Builders holds Nevada License #0085999 — active since 1989, with a BuildZoom score of 108
                  ranking in the top 5% of 21,879 Nevada licensed contractors.
                </p>
                <h3 className="font-display text-[17px] text-teal mb-2 mt-4">Does BRE Builders build new homes in Reno, Sparks, and Carson City?</h3>
                <p>
                  Yes. BRE Builders serves the full Northern Nevada region including Reno, Sparks, Carson City,
                  Minden, Gardnerville, Fernley, and Lake Tahoe. We hold Nevada License #0085999 and
                  California License #1093798 for projects across the Nevada-California border.
                </p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/services/new-home-builds" className="btn-ghost text-[12px] py-2 px-4">Custom Home Builder →</Link>
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
