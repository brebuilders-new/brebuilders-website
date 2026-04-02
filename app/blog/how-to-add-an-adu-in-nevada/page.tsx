import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'How to Add an ADU in Nevada Without Breaking the Bank — 2025 Guide',
  description: 'Nevada ADU laws, permit costs, construction timelines, and real cost data for Reno homeowners. ADUs start at $75,000. Licensed NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=How+to+Add+an+ADU+in+Nevada&sub=2025+Guide+%C2%B7+Costs%2C+Permits%2C+Timeline+%C2%B7+Reno+NV&badge=ADU+Guide`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Add an ADU in Nevada Without Breaking the Bank — 2025 Guide',
  author: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders' },
  url: 'https://brebuilders.com/how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide/',
  image: IMGS.adu_main,
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
        { label: 'Custom Home Builds', href: '/services/new-home' },
        { label: 'Home Additions', href: '/services/additions' },
      ]}
      relatedPosts={[
        { title: 'Structural Repair Warning Signs — Don\'t Ignore #3', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
        { title: 'Deck Safety Warning Signs for Reno & Lake Tahoe', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_arun, alt: 'Deck safety warning signs', category: 'Decks' },
      ]}
      content={
        <div>
          <h2>Can I Build an ADU on My Reno Property?</h2>
          <p>Yes. Nevada law allows ADUs on most single-family residential lots in Reno and Washoe County. Zoning, lot size, and owner-occupancy rules apply. BRE Builders holds Nevada License #0085999 and manages the full permit process from application through Certificate of Occupancy.</p>

          <h2>What Does an ADU Cost in Reno?</h2>
          <p>ADU costs in Reno range from $75,000 to $300,000 for complete builds, including permits and utilities.</p>
          <ul>
            <li><strong>Studio ADU (400–600 sq ft):</strong> From $75,000</li>
            <li><strong>1-Bedroom ADU (600–800 sq ft):</strong> $95,000–$115,000</li>
            <li><strong>2-Bedroom ADU (800–1,200 sq ft):</strong> $115,000–$300,000</li>
            <li><strong>Permit costs (Washoe County):</strong> $3,000–$5,000</li>
          </ul>
          <p>BRE Builders builds at $175/sq ft and up. The final cost depends on size, finishes, site conditions, and utility connections.</p>

          <h2>ADU Timeline in Reno</h2>
          <p>A complete ADU build in Reno takes 3–5 months from contract to move-in:</p>
          <ul>
            <li>Permits &amp; Design: 4–6 weeks</li>
            <li>Foundation &amp; Framing: 3–4 weeks</li>
            <li>MEP &amp; Insulation: 2–3 weeks</li>
            <li>Finishes &amp; Inspection: 3–4 weeks</li>
          </ul>

          <h2>Rental Income From a Reno ADU</h2>
          <p>ADUs in Reno typically earn $1,200–$2,000/month in rental income. Nevada requires a minimum 30-day rental period and the property owner must occupy the main residence.</p>

          <h2>ADU Types in Reno</h2>
          <p>BRE Builders builds detached backyard homes, garage conversions, pool houses, in-law suites, and junior ADUs (JADUs). We evaluate your property and recommend what works best for your zoning, lot size, and goals.</p>

          <h2>How BRE Builders Manages Your ADU</h2>
          <p>BRE Builders is a licensed Nevada contractor (#0085999) that handles the complete ADU build in-house — design coordination, permit applications through Washoe County and the City of Reno, construction, and final inspection. Free estimates with site visit.</p>
        </div>
      }
    />
  )
}
