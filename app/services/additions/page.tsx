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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Home Additions Reno NV | Rooms, Garages & 2nd Stories',
  description: 'Home addition contractors in Reno NV. Master suites, garages, second stories, in-law suites. Licensed GC since 1989. NV #0085999. Free on-site estimate.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Home+Additions+Reno+NV&sub=Add+Space.+Don%E2%80%99t+Move.+%C2%B7+Free+Estimates+%C2%B7+NV+%230085999&badge=Home+Additions`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Home Additions Reno NV | Rooms, Garages & 2nd Stories', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Additions Reno NV | Rooms, Garages & 2nd Stories',
    description: 'Home addition contractors in Reno NV. Master suites, garages, second stories, in-law suites. Licensed GC since 1989. NV #0085999. Free on-site estimate.',
    images: [{ url: `${SITE_URL}/api/og?title=Home+Additions+Reno+NV&sub=Add+Space.+Don%E2%80%99t+Move.+%C2%B7+Free+Estimates+%C2%B7+NV+%230085999&badge=Home+Additions`, alt: 'Blue Reef Builders — Home Additions Reno NV | Rooms, Garages & 2nd Stories' }],
  },
  alternates: { canonical: `${SITE_URL}/additions/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/additions/#service',
      name: 'Home Additions Reno NV',
      description: 'BRE Builders designs and builds home additions in Reno, NV. Bedroom suites, garages, second stories, in-law suites, and sunrooms.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a home addition cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides free on-site estimates for home additions. Pricing depends on scope, size, and structural requirements. Contact us for a project-specific quote.' } },
        { '@type': 'Question', name: 'Is it cheaper to add on or move to a bigger house in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, adding on is significantly cheaper than moving. Moving costs in Reno include agent commissions (5–6%), closing costs (2–3%), and moving expenses — typically 8–10% of home value. A well-designed addition costs far less and keeps your neighborhood and mortgage.' } },
        { '@type': 'Question', name: 'Do I need a permit for a home addition in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All structural home additions in Reno require permits from Washoe County or the City of Reno. BRE Builders handles all permitting as part of the project.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Home Additions', item: 'https://brebuilders.com/additions/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

const ADDITION_TYPES = [
  { title: 'Master Bedroom Suite', desc: 'Walk-in closet, ensuite bath, private retreat. Most popular addition in Reno.', img: IMGS.lt(4), alt: 'Master Bedroom Suite Addition Reno NV BRE Builders', sqft: '300–500 sq ft' },
  { title: 'Garage Addition', desc: '1, 2, or 3-car. Attached or detached. Often includes storage loft.', img: IMGS.svc_addition, alt: 'Garage Addition Reno NV BRE Builders', sqft: '400–800 sq ft' },
  { title: 'In-Law Suite', desc: 'Private entrance, kitchenette, accessible layout. Often doubles as rental.', img: IMGS.adu_inlaw, alt: 'In-Law Suite Addition Northern Nevada BRE Builders', sqft: '400–700 sq ft' },
  { title: 'Second Story', desc: 'Double your square footage without losing yard. Full structural engineering.', img: IMGS.lt(6), alt: 'Second Story Addition Reno NV BRE Builders', sqft: '800–1,500 sq ft' },
  { title: 'Great Room Expansion', desc: 'Open up the main living area. Structural wall removal + new square footage.', img: IMGS.lt(5), alt: 'Great Room Expansion Reno NV Home Addition BRE Builders', sqft: '200–400 sq ft' },
  { title: 'Sunroom / Patio Cover', desc: 'Year-round usable outdoor space. Reno climate-engineered.', img: IMGS.deck_charolette, alt: 'Sunroom Patio Cover Addition Reno NV BRE Builders', sqft: '150–300 sq ft' },
]

const FAQS = [
  { q: 'How much does a home addition cost in Reno NV?', a: 'BRE Builders provides free on-site estimates for home additions. Pricing depends on scope, size, and structural requirements. Contact us for a project-specific quote.' },
  { q: 'Is it cheaper to add on or move to a bigger house in Reno?', a: 'In most cases, adding on is significantly cheaper than moving. Moving costs in Reno include agent commissions (5–6%), closing costs (2–3%), and moving expenses — typically 8–10% of home value. A well-designed addition costs far less.' },
  { q: 'Do I need a permit for a home addition in Reno NV?', a: 'Yes. All structural home additions require permits from Washoe County or the City of Reno. BRE Builders handles all permitting as part of the project.' },
  { q: 'How long does a home addition take in Reno?', a: 'Permitting takes 4–8 weeks. Construction runs 8–20 weeks depending on size and complexity. Total timeline is typically 4–7 months from contract to completion.' },
  { q: 'Does BRE Builders design the addition as well?', a: 'Yes. Our in-house team handles design, engineering coordination, permitting, and construction. You work with one team from concept to keys.' },
]

export default function AdditionsPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main data-theme="growth">

        <ServiceHeroSection hero={{
          bgDesktop: IMGS.lt(1),
          bgMobile: IMGS.svc_addition,
          eyebrow: 'Home Additions · Reno NV & Northern Nevada',
          h1Lines: ['Add Space.', "Don't Move."],
          h1Ghost: 'Stay in the home you love.',
          lead: 'Licensed home addition contractors in Reno, NV. Master suites, garages, second stories, in-law suites. From concept to keys — one licensed team. NV License #0085999.',
          badges: ['Design + Build', 'Permit Handling', 'One Team Start to Finish', 'Free Estimates'],
          ctaPrimaryLabel: 'Get a Free Addition Estimate →',
          ctaPrimaryHref: '/contact?service=addition',
          ctaSecondaryLabel: 'Compare Move vs. Add On',
          ctaSecondaryHref: '#compare',
          urgencyNote: 'Free site evaluation included with every estimate',
          stats: [{ n: 'Free', label: 'Estimate' }, { n: '35+', label: 'Years Exp.' }, { n: '4–7 mo', label: 'Avg Timeline' }],
          license: 'NV',
        }} />

        {/* ── CROSS-LINKS ── */}
        <section className="py-14 bg-void border-t border-white/[0.05]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Adding space to your Reno home?</span>
                </div>
                <div className="space-y-0">
                  <Link href="/blog/how-to-add-an-adu-in-nevada" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">ADU vs. Home Addition — When Each Makes Sense</span>
                      <span className="text-[11px] text-cream/35 block">Understand the difference before committing</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-redevelopment" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">Reno's Construction Boom — What It Means for You</span>
                      <span className="text-[11px] text-cream/35 block">Contractor availability and timing context</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-home-10-year-maintenance" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">What Reno Homeowners Miss in 10-Year Homes</span>
                      <span className="text-[11px] text-cream/35 block">Issues to address before adding square footage</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Service Areas</span>
                </div>
                <div className="space-y-0 mb-4">
                  <Link href="/service-areas/reno/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Home Additions Reno, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/sparks/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Home Additions Sparks, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/carson-city/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Home Additions Carson City</span>
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
        <ServiceFAQSection
          faqs={FAQS}
          label="Home Addition Questions"
          aeoContent={
            <div>
              <SectionLabel text="Home Additions in Reno NV" />
              <SectionHeading line1="What Reno Homeowners" line2italic="Ask Before Adding." size="md" className="mb-6" />
              <SpeakableBlock className="speakable-faq space-y-4 text-[14px] text-cream/60 leading-relaxed">
                <div>
                  <h3 className="font-display text-[16px] text-teal mb-2">Is it cheaper to add on or move in Reno?</h3>
                  <p>In most cases, adding on costs significantly less than moving. Between agent commissions, closing costs, and moving expenses, relocating in Reno typically costs 8–10% of home value before you even start. A well-designed addition keeps your mortgage, your neighborhood, and your equity working for you.</p>
                </div>
                <div>
                  <h3 className="font-display text-[16px] text-teal mb-2">How long does a home addition take in Reno?</h3>
                  <p>Permitting with Washoe County or the City of Reno takes 4–8 weeks. Construction runs 8–20 weeks depending on size and complexity. Total timeline is typically 4–7 months from contract to completion. BRE Builders provides a milestone schedule at project kickoff.</p>
                </div>
                <div>
                  <h3 className="font-display text-[16px] text-teal mb-2">Do I need a permit for a home addition in Reno NV?</h3>
                  <p>Yes. All structural additions require permits from Washoe County or the City of Reno. BRE Builders handles all permitting, inspections, and final sign-off as part of the project scope — holding Nevada License #0085999.</p>
                </div>
              </SpeakableBlock>
            </div>
          }
          internalLinks={[
            { label: 'ADU Construction', href: '/services/adu/' },
            { label: 'Custom Home Builds', href: '/services/new-home-builds/' },
            { label: 'Structural Repairs', href: '/services/repairs/' },
          ]}
        />
        <RelatedServices items={[
          { label: 'ADU Construction', href: '/services/adu/', desc: 'Separate living unit' },
          { label: 'Kitchen & Bath', href: '/services/kitchen-bath/', desc: 'Interior upgrade' },
          { label: 'Custom Homes', href: '/services/new-home-builds', desc: 'Ground-up builds' },
          { label: 'Structural Repairs', href: '/services/repairs/', desc: 'Fix before you add' },
        ]} />

        <MobileCTABox
          headline="Why move when you can add?"
          subtext="Free estimate + site visit. NV #0085999. 35+ years in Reno."
          ctaLabel="Get a Free Estimate"
          ctaHref="/contact?service=addition"
        />
        <DesktopCTASection
          bgImage={IMGS.lt(1)}
          bgAlt="BRE Builders completed home project Lake Tahoe"
          headline="Add Space."
          headlineItalic="Without Leaving."
          subtext="Free estimates · NV #0085999 · 35+ years in Reno"
          ctaLabel="Request a Free Estimate →"
          ctaHref="/contact?service=addition"
        />
      </main>
      <Footer />
    </>
  )
}
