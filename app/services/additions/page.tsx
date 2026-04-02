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
  title: 'Home Additions Reno NV | Add Space Without Moving',
  description: 'Licensed home addition contractors in Reno, NV. Master bedroom suites, garage additions, second stories, in-law suites. NV License #0085999. Free estimates.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Home+Additions+Reno+NV&sub=Add+Space.+Don%E2%80%99t+Move.+%C2%B7+Free+Estimates+%C2%B7+NV+%230085999&badge=Home+Additions`, width: 1200, height: 630 }],
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
        { '@type': 'Question', name: 'How much does a home addition cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'Home additions in Reno typically cost $175–$350 per square foot. A 400 sq ft bedroom suite runs $70,000–$140,000. Garage additions run $40,000–$85,000. Second-story additions start at $120,000.' } },
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
  { title: 'Master Bedroom Suite', desc: 'Walk-in closet, ensuite bath, private retreat. Most popular addition in Reno.', img: IMGS.lt(4), alt: 'Master Bedroom Suite Addition Reno NV BRE Builders', sqft: '300–500 sq ft', range: '$52K–$175K' },
  { title: 'Garage Addition', desc: '1, 2, or 3-car. Attached or detached. Often includes storage loft.', img: IMGS.svc_addition, alt: 'Garage Addition Reno NV BRE Builders', sqft: '400–800 sq ft', range: '$40K–$85K' },
  { title: 'In-Law Suite', desc: 'Private entrance, kitchenette, accessible layout. Often doubles as rental.', img: IMGS.adu_inlaw, alt: 'In-Law Suite Addition Northern Nevada BRE Builders', sqft: '400–700 sq ft', range: '$70K–$140K' },
  { title: 'Second Story', desc: 'Double your square footage without losing yard. Full structural engineering.', img: IMGS.lt(6), alt: 'Second Story Addition Reno NV BRE Builders', sqft: '800–1,500 sq ft', range: 'From $120K' },
  { title: 'Great Room Expansion', desc: 'Open up the main living area. Structural wall removal + new square footage.', img: IMGS.lt(5), alt: 'Great Room Expansion Reno NV Home Addition BRE Builders', sqft: '200–400 sq ft', range: '$35K–$75K' },
  { title: 'Sunroom / Patio Cover', desc: 'Year-round usable outdoor space. Reno climate-engineered.', img: IMGS.deck_charolette, alt: 'Sunroom Patio Cover Addition Reno NV BRE Builders', sqft: '150–300 sq ft', range: '$20K–$55K' },
]

const FAQS = [
  { q: 'How much does a home addition cost in Reno NV?', a: 'Home additions in Reno typically cost $175–$350 per square foot. A 400 sq ft bedroom suite runs $70,000–$140,000. Garage additions run $40,000–$85,000. Second-story additions start at $120,000.' },
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
          stats: [{ n: '$175', label: 'Per Sq Ft' }, { n: '35+', label: 'Years Exp.' }, { n: '4–7 mo', label: 'Avg Timeline' }],
          license: 'NV',
        }} />

        {/* Move vs Add — biggest CTR fix for this page (19K impressions) */}
        <section id="compare" className="bg-panel border-y border-white/[0.06]">
          <div className="container py-10 lg:py-16">
            <SectionLabel text="Move vs. Add On — The Real Math" />
            <div className="grid md:grid-cols-2 gap-8 max-w-[900px]">
              <div className="bg-deep rounded-2xl p-6 border border-white/[0.06]">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-red-400/70 mb-3">Moving to a Bigger Home</div>
                <div className="space-y-3">
                  {[
                    { item: 'Agent commission (5–6%)', cost: '$25K–$40K' },
                    { item: 'Closing costs on new home (2–3%)', cost: '$14K–$22K' },
                    { item: 'Moving expenses', cost: '$3K–$8K' },
                    { item: 'Higher mortgage rate (2026 rates)', cost: '$500–$1,200+/mo' },
                    { item: 'New neighborhood, schools, commute', cost: 'Priceless disruption' },
                  ].map((r) => (
                    <div key={r.item} className="flex justify-between gap-4">
                      <span className="text-[13px] text-cream/45">{r.item}</span>
                      <span className="font-mono text-[12px] text-red-400/70 flex-shrink-0">{r.cost}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/[0.06]">
                    <div className="flex justify-between">
                      <span className="font-mono text-[11px] text-cream/40">Estimated total cost</span>
                      <span className="font-mono text-[12px] text-red-400 font-semibold">$42K–$70K+ to move</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-deep rounded-2xl p-6 border border-teal/15">
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-teal/70 mb-3">Adding On With BRE Builders</div>
                <div className="space-y-3">
                  {[
                    { item: 'Bedroom suite (400 sq ft)', cost: '$70K–$140K' },
                    { item: 'Garage addition (500 sq ft)', cost: '$40K–$85K' },
                    { item: 'Great room expansion (300 sq ft)', cost: '$35K–$75K' },
                    { item: 'Keep current mortgage rate', cost: '$0 extra/mo' },
                    { item: 'Stay in your neighborhood', cost: 'Zero disruption' },
                  ].map((r) => (
                    <div key={r.item} className="flex justify-between gap-4">
                      <span className="text-[13px] text-cream/45">{r.item}</span>
                      <span className="font-mono text-[12px] text-teal/70 flex-shrink-0">{r.cost}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-teal/10">
                    <div className="flex justify-between">
                      <span className="font-mono text-[11px] text-cream/40">Get what you need</span>
                      <span className="font-mono text-[12px] text-teal font-semibold">Without leaving</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Link href="/contact?service=addition" className="btn-primary">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost hidden md:flex font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>

        {/* Addition types */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Addition Types" />
          <SectionHeading line1="What We Add." line2italic="What You Keep." size="lg" className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADDITION_TYPES.map((a) => (
              <div key={a.title} className="card group overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel/90 via-panel/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[18px] text-cream mb-1">{a.title}</h3>
                  <p className="text-[12px] text-cream/40 leading-relaxed mb-3">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-cream/30">{a.sqft}</span>
                    <span className="font-mono text-[11px] text-teal">{a.range}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden mt-8">
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4">📞 Discuss Your Addition</a>
          </div>
        </PageSection>

        {/* AEO + FAQ */}
        <ServiceFAQSection
          faqs={FAQS}
          label="Addition Questions"
          aeoContent={
            <div>
              <SectionLabel text="Home Additions in Reno NV" />
              <SectionHeading line1="The Smarter Way to" line2italic="Get More Space." size="md" className="mb-6" />
              <SpeakableBlock className="mb-6">
                <p>In Reno&apos;s 2024–2026 housing market, selling your current home and buying larger is an expensive proposition. Rising interest rates mean a bigger mortgage on a bigger home can cost hundreds more per month — before you even count agent fees and moving costs.</p>
                <p>A home addition with BRE Builders lets you get the space you need — a master suite, an extra bedroom, a garage, or a dedicated home office — while keeping your current mortgage, your neighborhood, and your community.</p>
                <p>BRE Builders holds Nevada License #0085999 and has been building home additions in Reno since 1989. We handle design, permitting, and construction with one in-house team. Free estimates and site visits included.</p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/adus/" className="btn-ghost text-[12px] py-2 px-4">ADU Construction →</Link>
                <Link href="/services/new-home/" className="btn-ghost text-[12px] py-2 px-4">Custom Home Builds →</Link>
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
              {/* Service area links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Service Areas</span>
                </div>
                <div className="space-y-0 mb-4">
                                    <Link href="/service-areas/nevada/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
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
        <RelatedServices items={[
          { label: 'ADU Construction', href: '/adus/', desc: 'Separate living unit' },
          { label: 'Kitchen & Bath', href: '/kitchen/', desc: 'Interior upgrade' },
          { label: 'Custom Homes', href: '/new-home/', desc: 'Ground-up builds' },
          { label: 'Structural Repairs', href: '/repairs/', desc: 'Fix before you add' },
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
