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
  title: 'ADU Builders Reno NV | $75K–$300K Complete Builds',
  description:
    'Licensed ADU contractors in Reno, NV. Complete builds from $75,000. Permit-ready plans, full design-build, 35+ years experience. NV License #0085999. Free quote in 24 hours.',
  openGraph: {
    title: 'ADU Builders Reno NV | $75K–$300K | Blue Reef Builders',
    images: [{
      url: `${SITE_URL}/api/og?title=ADU+Builders+Reno%2C+NV&sub=%2475K%E2%80%93%24300K+Complete+Builds+%C2%B7+NV+%230085999&badge=ADU+Construction`,
      width: 1200, height: 630,
    }],
  },
  alternates: { canonical: 'https://brebuilders.com/adus/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/adus/#service',
      name: 'ADU Construction Reno NV',
      alternateName: 'Accessory Dwelling Unit Builder Reno Nevada',
      description: 'BRE Builders designs and constructs ADUs in Reno, NV. Studio to 2-bedroom builds from $75,000.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Lake Tahoe, NV' },
      ],
      offers: { '@type': 'AggregateOffer', lowPrice: '75000', highPrice: '300000', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does an ADU cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'ADU costs in Reno range from $75,000 to $300,000. Studio ADUs start at $75,000. One-bedroom units average $95,000–$115,000. Two-bedroom ADUs range from $115,000–$300,000.' } },
        { '@type': 'Question', name: 'Can I legally build an ADU in Reno Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nevada and Washoe County allow ADUs on most residential lots. BRE Builders handles all permits and compliance.' } },
        { '@type': 'Question', name: 'How long does it take to build an ADU in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Permits take 4–6 weeks. Construction takes 8–14 weeks. Total timeline is typically 3–5 months.' } },
        { '@type': 'Question', name: 'How much rental income can I earn from an ADU in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'ADUs in Reno typically earn $1,200–$2,000/month. Nevada requires a 30-day minimum rental period.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'ADU Construction', item: 'https://brebuilders.com/adus/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-pricing', '.speakable-faq'] },
  ],
}

const ADU_TYPES = [
  { type: 'Studio ADU', sqft: '400–600 sq ft', price: 'From $75,000', use: 'Guest house · Short-term rental · Office', img: IMGS.adu_pool, alt: 'Pool House Studio ADU BRE Builders Reno NV' },
  { type: '1-Bedroom ADU', sqft: '600–800 sq ft', price: '$95K–$115K', use: 'In-law suite · Long-term rental', img: IMGS.adu_inlaw, alt: 'In-Law Suite ADU BRE Builders Northern Nevada' },
  { type: '2-Bedroom ADU', sqft: '800–1,200 sq ft', price: '$115K–$300K', use: 'Family housing · Investment rental', img: IMGS.adu_garage, alt: 'Two Bedroom ADU BRE Builders Reno NV' },
]

const FAQS = [
  { q: 'How much does an ADU cost in Reno NV?', a: 'ADU costs in Reno range from $75,000 to $300,000. Studio ADUs (400–600 sq ft) start at $75,000. One-bedroom units average $95,000–$115,000. Two-bedroom ADUs range from $115,000–$300,000.' },
  { q: 'Can I legally build an ADU in Reno Nevada?', a: 'Yes. Nevada and Washoe County allow ADUs on most residential lots. BRE Builders handles all permit applications and compliance.' },
  { q: 'How long does it take to build an ADU in Reno?', a: 'Permits take 4–6 weeks. Construction runs 8–14 weeks. Total from contract to move-in is typically 3–5 months.' },
  { q: 'How much rental income can my ADU earn?', a: 'ADUs in Reno typically earn $1,200–$2,000/month. Nevada requires 30-day minimum rental and owner must occupy the main unit.' },
  { q: 'Does BRE Builders handle the ADU permit?', a: 'Yes. We manage the entire permitting process from Washoe County and the City of Reno. Permit costs typically run $3,000–$5,000.' },
  { q: 'What types of ADUs can I build in Reno?', a: 'Detached backyard homes, garage conversions, pool houses, in-law suites, and junior ADUs (JADUs). We advise which works best for your property.' },
]

export default function ADUPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.adu_main,
          bgMobile: IMGS.adu_pool,
          eyebrow: 'ADU Construction · Reno & Northern Nevada',
          h1Lines: ['ADU Builders', 'Reno, Nevada'],
          h1Ghost: '$175/sq ft and up',
          lead: 'Licensed ADU contractors serving Reno, Sparks, and Lake Tahoe. Complete builds from $75,000. Permit-ready plans, expert design-build, 35+ years experience. NV License #0085999.',
          badges: ['Permit-Ready Plans', 'Expert Design & Build', 'Built to Code', 'Free Quote in 24h'],
          ctaPrimaryLabel: 'Get a Free ADU Quote →',
          ctaPrimaryHref: '/contact?service=adu',
          ctaSecondaryLabel: 'View ADU Portfolio',
          ctaSecondaryHref: '/portfolio/adus/',
          urgencyNote: 'Now accepting 2026 ADU projects — response within 24 hours',
          stats: [{ n: '$75K', label: 'Starts At' }, { n: '35+', label: 'Years Exp.' }, { n: '3–5 mo', label: 'Avg Timeline' }],
          license: 'NV',
        }} />

        {/* Mobile: income hook */}
        <section className="md:hidden bg-teal/[0.06] border-b border-teal/20 py-5">
          <div className="container">
            <p className="font-display text-[19px] text-cream leading-snug">
              Your neighbor&apos;s ADU is earning <span className="text-teal font-semibold">$1,800/month.</span><br />Yours could too.
            </p>
            <p className="font-mono text-[11px] text-cream/40 mt-2">Reno ADUs earn $1,200–$2,000/month · 30-day min rental required</p>
          </div>
        </section>

        {/* Desktop: ROI strip */}
        <section className="hidden md:block bg-panel border-y border-white/[0.06]">
          <div className="container py-6">
            <div className="grid grid-cols-4 gap-8">
              {[
                { label: 'ADU Build Cost', val: '$75K–$300K', sub: 'Complete build + permits' },
                { label: 'Monthly Rental', val: '$1,200–$2,000', sub: 'Reno market average' },
                { label: 'Annual Income', val: '$14.4K–$24K', sub: 'Before expenses' },
                { label: 'Payback Period', val: '6–15 years', sub: 'On a $75K–$150K ADU' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[28px] text-teal font-light leading-none">{s.val}</div>
                  <div className="font-mono text-[11px] text-cream/65 mt-1">{s.label}</div>
                  <div className="font-mono text-[10px] text-cream/30 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADU Types */}
        <PageSection bg="bg-deep">
          <SectionLabel text="ADU Types & Pricing" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
            <SectionHeading line1="Choose Your ADU." line2italic="We Handle Everything Else." size="lg" />
            <Link href="/contact?service=adu" className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0">Get Custom Quote →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {ADU_TYPES.map((t) => (
              <div key={t.type} className="card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-[20px] text-cream">{t.type}</h3>
                      <p className="font-mono text-[11px] text-cream/40 mt-0.5">{t.sqft}</p>
                    </div>
                    <span className="font-mono text-[10px] text-teal bg-teal/10 border border-teal/25 px-2 py-1.5 rounded-lg">{t.price}</span>
                  </div>
                  <p className="text-[13px] text-cream/45 leading-relaxed mb-4">{t.use}</p>
                  <Link href={`/contact?service=adu&type=${encodeURIComponent(t.type)}`} className="text-[11px] font-mono tracking-wider uppercase text-teal/55 hover:text-teal transition-colors">Quote this type →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden mt-8">
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[14px]">📞 Call to Discuss Your ADU</a>
          </div>
        </PageSection>

        {/* Gallery */}
        <PageSection bg="bg-void">
          <SectionLabel text="ADU Portfolio" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <SectionHeading line1="ADUs We've Built" line2italic="in Northern Nevada." size="lg" />
            <Link href="/portfolio/adus/" className="hidden md:inline-flex items-center gap-2 text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0">Full ADU Portfolio →</Link>
          </div>
          {/* Mobile carousel */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-3 scrollbar-none mb-2" style={{ scrollSnapType: 'x mandatory' }}>
            {[
              { src: IMGS.adu_pool, alt: 'Pool House ADU BRE Builders Reno NV', cap: 'Pool House ADU' },
              { src: IMGS.adu_inlaw, alt: 'In-Law Suite ADU BRE Builders Northern Nevada', cap: 'In-Law Suite' },
              { src: IMGS.adu_garage, alt: 'Garage ADU Conversion BRE Builders Reno', cap: 'Garage Conversion' },
              { src: IMGS.adu_main, alt: 'ADU Backyard Home BRE Builders Reno NV', cap: 'Backyard ADU' },
            ].map((img, i) => (
              <div key={i} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '75vw' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-xl" loading={i < 2 ? 'eager' : 'lazy'} />
                <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.cap}</p>
              </div>
            ))}
          </div>
          <p className="md:hidden font-mono text-[10px] text-cream/25 tracking-wider mb-4">← Swipe · 4 photos</p>
          {/* Desktop 2×2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { src: IMGS.adu_pool, alt: 'Pool House ADU Build Blue Reef Builders Reno NV', cap: 'Pool House ADU' },
              { src: IMGS.adu_inlaw, alt: 'In-Law Suite ADU Private Entrance BRE Builders', cap: 'In-Law Suite ADU' },
              { src: IMGS.adu_garage, alt: 'Garage ADU Conversion Custom Storage BRE Builders', cap: 'Garage ADU Conversion' },
              { src: IMGS.adu_main, alt: 'ADU Backyard Home Builder Reno NV BRE Builders', cap: 'Backyard ADU' },
            ].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-600" loading={i < 2 ? 'eager' : 'lazy'} />
                <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.cap}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Process */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="The Process" />
          <SectionHeading line1="From Concept to" line2italic="Keys in Hand." size="lg" className="mb-12" />
          <div className="hidden md:grid grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Free Consultation', time: 'Day 1', body: 'We review your property, discuss options, and provide a ballpark estimate. No commitment.' },
              { n: '02', title: 'Design & Permits', time: '4–6 Weeks', body: 'BRE handles all permit applications with Washoe County and City of Reno.' },
              { n: '03', title: 'Construction', time: '8–14 Weeks', body: 'Foundation through finishes by our licensed in-house team with milestone updates.' },
              { n: '04', title: 'Move-In Ready', time: 'Week 16+', body: 'Final inspection, CO, and keys. Your ADU is ready for occupancy or rental.' },
            ].map((s) => (
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
              { n: '01', title: 'Free Consultation', time: 'Day 1', body: 'Call or request a quote. We review your property and give a ballpark at no charge.' },
              { n: '02', title: 'Permits', time: '4–6 Weeks', body: 'All Washoe County + City of Reno permits handled by us. Permit cost: $3,000–$5,000.' },
              { n: '03', title: 'Construction', time: '8–14 Weeks', body: 'Licensed in-house team. Foundation through finishes. Regular milestone updates.' },
              { n: '04', title: 'Move-In Ready', time: 'Week 16+', body: 'CO inspection, walkthrough, keys. Ready for tenant or family the same week.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 p-4 bg-deep rounded-xl border border-white/[0.055]">
                <div className="font-mono text-[28px] text-teal/20 font-bold leading-none flex-shrink-0">{s.n}</div>
                <div>
                  <div className="font-display text-[17px] text-cream">{s.title}</div>
                  <div className="font-mono text-[10px] text-teal/60 tracking-wider mb-2">{s.time}</div>
                  <p className="text-[13px] text-cream/45 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mt-2 text-[14px]">📞 Start Your ADU Today</a>
          </div>
        </PageSection>

        {/* AEO + FAQ */}
        <ServiceFAQSection
          faqs={FAQS}
          label="Common ADU Questions"
          aeoContent={
            <div>
              <SectionLabel text="Why Build an ADU in Reno?" />
              <SectionHeading line1="Reno's Fastest-Growing" line2italic="Housing Solution." size="md" className="mb-6" />
              <SpeakableBlock className="mb-6">
                <p>Nevada law allows ADUs on most single-family residential lots in Reno and Washoe County. With rising rents across the Reno metro, homeowners are adding ADUs to offset mortgage costs, house aging parents, or create passive rental income.</p>
                <p>ADU costs in Reno start at $75,000 for a studio unit and range up to $300,000 for a fully-appointed two-bedroom. At $175/sqft and up, BRE Builders builds ADUs that are code-compliant, energy-efficient, and rental-ready.</p>
                <p>BRE Builders holds Nevada License #0085999. We handle everything from zoning review through final Certificate of Occupancy.</p>
              </SpeakableBlock>
              <div className="speakable-pricing bg-panel border border-teal/15 rounded-xl p-5 mb-6">
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-3">Verified ADU Pricing — Reno NV</p>
                <div className="space-y-2">
                  {[
                    { l: 'Studio ADU (400–600 sq ft)', p: 'From $75,000' },
                    { l: '1-Bedroom ADU (600–800 sq ft)', p: '$95,000–$115,000' },
                    { l: '2-Bedroom ADU (800–1,200 sq ft)', p: '$115,000–$300,000' },
                    { l: 'Permit costs (Washoe County)', p: '$3,000–$5,000' },
                    { l: 'Rental income potential', p: '$1,200–$2,000/month' },
                  ].map((r) => (
                    <div key={r.l} className="flex items-center justify-between gap-4">
                      <span className="text-[13px] text-cream/50">{r.l}</span>
                      <span className="font-mono text-[12px] text-teal flex-shrink-0">{r.p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/faq" className="btn-ghost text-[12px] py-2 px-4">ADU FAQs →</Link>
                <Link href="/service-areas/lake-tahoe/" className="btn-ghost text-[12px] py-2 px-4">Lake Tahoe ADUs →</Link>
                <Link href="/how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide/" className="btn-ghost text-[12px] py-2 px-4">2025 ADU Guide →</Link>
              </div>
            </div>
          }
        />

        {/* Testimonials */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="Client Reviews" />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Reggie', loc: 'Modesto, CA', text: "Steve and his team at Blue Reef are jacks of all trades and licensed in both Nevada and California which has been great for me as I have several investment properties in both states." },
              { name: 'Stephanie', loc: 'Reno, NV', text: "The team at Blue Reef Builders exceeds my expectations every time I have used them. They have always met their stated deadlines and come in at bid." },
              { name: 'Austin', loc: 'Reno, NV', text: "I am so glad that I found these guys — concrete, new deck, kitchen remodel, electrical and even landscaping. What a relief it was to find one company that could handle all of my needs." },
            ].map((t) => (
              <div key={t.name} className="bg-deep rounded-xl p-6 border border-white/[0.055] relative">
                <div className="font-display text-[48px] leading-none text-teal/15 absolute top-3 left-4 select-none">&ldquo;</div>
                <p className="font-display text-[15px] italic text-cream/62 leading-relaxed pt-6 mb-4">{t.text}</p>
                <div className="font-semibold text-[13px] text-cream">{t.name}</div>
                <div className="font-mono text-[10px] text-cream/30 tracking-wider mt-0.5">{t.loc}</div>
              </div>
            ))}
          </div>
        </PageSection>

        <RelatedServices items={[
          { label: 'Custom Home Building', href: '/new-home/', desc: 'Ground-up custom builds' },
          { label: 'Home Additions', href: '/additions/', desc: 'Add space without moving' },
          { label: 'Structural Repairs', href: '/repairs/', desc: 'Foundation & structural' },
          { label: 'Concrete Work', href: '/concrete/', desc: 'Slabs, foundations, pads' },
        ]} />

        <MobileCTABox
          headline="Ready to start earning from your property?"
          subtext="ADUs in Reno earn $1,200–$2,000/month. Call for a free site evaluation today."
          ctaLabel="Submit a Project Request"
          ctaHref="/contact?service=adu"
          variant="income"
        />
        <DesktopCTASection
          bgImage={IMGS.lt(1)}
          bgAlt="BRE Builders completed Lake Tahoe project"
          headline="Your ADU Starts With"
          headlineItalic="One Conversation."
          subtext="Free estimates. Site visit included. Licensed NV #0085999. Response within 24 hours."
          ctaLabel="Request a Free ADU Quote →"
          ctaHref="/contact?service=adu"
        />
      </main>
      <Footer />
    </>
  )
}
