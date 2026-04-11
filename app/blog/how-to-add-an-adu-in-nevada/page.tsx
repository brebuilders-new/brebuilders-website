import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'How to Add an ADU in Nevada Without Breaking the Bank — 2025 Guide',
  description: 'Nevada ADU laws, permit costs, construction timelines, and real cost data for Reno homeowners. ADUs start at $75,000. Licensed NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=How+to+Add+an+ADU+in+Nevada&sub=2025+Guide+%C2%B7+Costs%2C+Permits%2C+Timeline+%C2%B7+Reno+NV&badge=ADU+Guide`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — How to Add an ADU in Nevada Without Breaking the Bank — 2025 Guide', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Add an ADU in Nevada Without Breaking the Bank — 2025 Guide',
    description: 'Nevada ADU laws, permit costs, construction timelines, and real cost data for Reno homeowners. ADUs start at $75,000. Licensed NV #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=How+to+Add+an+ADU+in+Nevada&sub=2025+Guide+%C2%B7+Costs%2C+Permits%2C+Timeline+%C2%B7+Reno+NV&badge=ADU+Guide`, alt: 'Blue Reef Builders — How to Add an ADU in Nevada Without Breaking the Bank — 2025 Guide' }],
  },
  alternates: { canonical: `${SITE_URL}/how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Add an ADU in Nevada Without Breaking the Bank',
      author: { '@type': 'Organization', name: 'BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is it legal to build an ADU in Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nevada law allows ADUs on most single-family residential lots in Reno and Washoe County. Local zoning determines setbacks, maximum size, and occupancy rules. BRE Builders navigates all ADU permit requirements in Nevada. NV License #0085999.' } },
        { '@type': 'Question', name: 'How much does an ADU cost in Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'ADU costs in Nevada start at $75,000 for a studio unit and range up to $300,000 for a fully-appointed two-bedroom. BRE Builders provides free ADU consultations with detailed written estimates.' } },
        { '@type': 'Question', name: 'How long does it take to build an ADU in Reno Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Plan for 3-5 months total. Washoe County permitting typically takes 4-8 weeks. Construction runs 8-14 weeks depending on size and complexity. BRE Builders manages the full timeline from permit through Certificate of Occupancy.' } },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary'] },
  ],
}

export default function ADUGuidePage() {
  return (
    <BlogTemplate
      title="How to Add an ADU in Nevada Without Breaking the Bank — 2025 Guide"
      category="ADU"
      heroImage={IMGS.adu_main}
      heroAlt="ADU Backyard Home Construction Reno NV BRE Builders"
      excerpt="Nevada ADU laws, permit costs, construction timelines, and real cost data for Reno homeowners considering an accessory dwelling unit in 2025."
      schema={schema}
      relatedServices={[
        { label: 'ADU Construction', href: '/services/adu' },
        { label: 'Custom Home Builds', href: '/services/new-home-builds' },
        { label: 'Home Additions', href: '/services/additions' },
      ]}
      relatedPosts={[
        { title: 'Structural Repair Warning Signs — Don\'t Ignore #3', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
        { title: 'Deck Safety Warning Signs for Reno & Lake Tahoe', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_arun, alt: 'Deck safety warning signs', category: 'Decks' },
      ]}
      content={
        <div>
          <p>Nevada is one of the most ADU-friendly states in the country. Reno and Washoe County have actively simplified their ADU approval process since 2021, and the result is that most residential lots in the metro area now qualify for at least one ADU. Here is a complete, accurate guide to adding an ADU in Reno, Nevada — based on current code and BRE Builders&apos; direct experience with the permit process.</p>

          <BlogImage
            src={IMGS.adu_pool}
            alt="Pool house ADU built by BRE Builders Reno NV"
            caption="Detached pool house ADU — BRE Builders, Reno NV · From $75,000"
            priority
          />

          <h2>Step 1: Confirm Your Lot Qualifies</h2>
          <p>Most single-family residential lots in Reno and Washoe County qualify for an ADU. Key requirements: the lot must have an existing primary dwelling, the primary dwelling must be owner-occupied (for attached ADUs), and the lot must meet minimum size requirements for the zoning district. Multi-family lots have different rules. BRE Builders performs a free pre-application lot assessment to confirm eligibility before any design work begins.</p>

          <BlogPullQuote>
            Most Reno residential lots now qualify for at least one ADU under current Washoe County and City of Reno code — and the permitting process is faster than it was three years ago.
          </BlogPullQuote>

          <h2>Step 2: Choose Your ADU Type</h2>
          <p>Nevada recognizes three primary ADU types: detached ADUs (separate structure on the same lot), attached ADUs (addition to the primary home), and junior ADUs (JADUs — conversion of existing interior space). Each has different size limits, setback requirements, and design standards. Detached ADUs offer the most flexibility and are BRE Builders&apos; most common project type. Garage conversions are classified as attached or detached depending on the garage type.</p>

          <BlogImage
            src={IMGS.adu_garage}
            alt="Garage ADU conversion BRE Builders Reno NV"
            caption="Garage-to-ADU conversion — fully permitted, kitchen and bath included"
          />

          <h2>Step 3: Design and Plans</h2>
          <p>Washoe County and the City of Reno require architectural drawings for all ADU permits. BRE Builders coordinates architectural design as part of our design-build process — you do not need to hire a separate architect. Our in-house design process produces permit-ready drawings that meet current energy code, accessibility requirements, and the specific standards of your jurisdiction. Plan review takes 4–8 weeks depending on the jurisdiction and project complexity.</p>

          <h2>Step 4: Permits</h2>
          <p>The permit application includes architectural drawings, a site plan, energy compliance documentation, and coordination with any required planning review. BRE Builders prepares and submits all permit documentation and responds to plan check corrections. Permit fees for ADUs in Reno and Washoe County typically run $3,000–$6,000 depending on size and location.</p>

          <h2>Step 5: Construction</h2>
          <p>Construction timelines for ADUs run 8–14 weeks for most standard projects. This assumes an approved permit and no significant site complications (unusual soil conditions, utility conflicts, or major grade changes). BRE Builders provides milestone-based progress updates throughout construction. Inspections are coordinated with the jurisdiction — we handle all inspection scheduling and coordination.</p>

          <BlogImage
            src={IMGS.adu_inlaw}
            alt="In-law suite ADU private entrance BRE Builders Northern Nevada"
            caption="In-law suite ADU with private entrance — complete kitchen, bath, and bedroom"
          />

          <h2>ADU Costs in Reno, NV</h2>
          <p>Studio ADUs (400–600 sq ft) start at $75,000. One-bedroom ADUs (600–800 sq ft) run $95,000–$115,000. Two-bedroom ADUs (800–1,200 sq ft) range from $115,000–$300,000 depending on finishes. These figures include all permit fees, foundation, framing, mechanical, electrical, plumbing, insulation, drywall, flooring, cabinets, and appliances. Site work and utility connections are quoted separately based on your specific lot conditions.</p>

          <h2>Rental Income Potential</h2>
          <p>ADUs in Reno typically generate $1,200–$2,000 per month in rental income depending on size, location, and condition. Nevada law requires a minimum 30-day rental period — short-term rental of ADUs requires a separate license and is subject to local regulations that vary by municipality. Long-term rental ADUs typically achieve payback within 5–8 years at current Reno rental rates.</p>

          <h2>Start with a Free Lot Assessment</h2>
          <p>BRE Builders provides free ADU feasibility assessments for Reno and Northern Nevada property owners. We will review your lot, confirm zoning eligibility, discuss design options, and give you a realistic cost range — before you commit to anything. Licensed NV #0085999 · CA #1093798. Response within 24 hours.</p>
        </div>
      }
    />
  )
}
