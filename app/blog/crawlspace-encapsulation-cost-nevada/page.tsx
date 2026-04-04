import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Crawlspace Encapsulation Cost Nevada | BRE Builders Reno',
  description: 'Crawlspace encapsulation costs in Nevada vary by size and condition. BRE Builders explains what affects pricing, what the process involves, and when to call for a free evaluation. NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Crawlspace+Encapsulation+Cost+Nevada&sub=Free+Evaluation+%C2%B7+BRE+Builders+NV+%230085999&badge=Crawlspace`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/crawlspace-encapsulation-cost-nevada/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How Much Does Crawlspace Encapsulation Cost in Nevada?',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/crawlspace-encapsulation-cost-nevada/`,
    },
  ],
}

export default function Blog_CrawlspaceEncapsulationCostNevada() {
  return (
    <BlogTemplate
      title="How Much Does Crawlspace Encapsulation Cost in Nevada?"
      category="Structural Repairs"
      publishDate="September 2025"
      heroImage={IMGS.blog_basement_water}
      heroAlt="Crawlspace moisture issues Northern Nevada — BRE Builders structural repair Reno NV #0085999"
      excerpt="Crawlspace encapsulation prevents moisture, mold, and structural damage. In Nevada, costs vary based on size, existing conditions, and drainage needs. Here is what affects the price — and when to call."
      schema={schema}
      relatedServices={[
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
        { label: 'Structural Repairs', href: '/services/repairs' },
      ]}
      relatedPosts={[
        { title: 'Do I Need a Vapor Barrier in My Crawlspace?', href: '/blog/vapor-barrier-crawlspace-northern-nevada', img: IMGS.repairs_foundation, alt: 'Vapor barrier Northern Nevada crawlspace', category: 'Structural Repairs' },
        { title: 'Why Is My House Humid in Reno?', href: '/blog/house-humid-reno-no-leak', img: IMGS.repairs_water, alt: 'House humidity Reno Nevada', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Crawlspace encapsulation seals the space beneath your home against moisture, pests, and mold. In Nevada, where temperatures swing dramatically and soil conditions vary by neighborhood, encapsulation can prevent structural damage, improve air quality, and reduce energy costs. Here is what affects the price — and how to know if you need it.</p>

          <h2>What Crawlspace Encapsulation Involves</h2>
          <p>A full encapsulation typically includes: installation of a heavy-mil vapor barrier on the ground and walls, sealing of vents, insulation of ducts and rim joists, and addressing any existing moisture or drainage issues. The goal is to create a controlled environment that prevents moisture from entering the living space above.</p>

          <h2>Factors That Affect Cost in Nevada</h2>
          <p><strong>Size of the crawlspace.</strong> Larger spaces require more materials and labor. Height and accessibility also matter — tight or difficult-to-reach crawlspaces require additional time and may require specialized equipment.</p>
          <p><strong>Existing conditions.</strong> If mold, pests, or structural damage are already present, remediation is required before encapsulation can begin. This adds to total cost but is non-negotiable — encapsulating a damaged crawlspace traps problems rather than solving them.</p>
          <p><strong>Drainage needs.</strong> Properties with drainage issues or high water tables may require sump pumps or drainage corrections in addition to the vapor barrier installation. In Reno neighborhoods near Damonte Ranch or South Meadows, this is common in spring.</p>
          <p><strong>Insulation requirements.</strong> Nevada's temperature extremes mean proper insulation of rim joists and ducts is important. Higher-quality insulation materials add to upfront cost but reduce energy bills over time.</p>

          <h2>When to Call for a Crawlspace Evaluation</h2>
          <p>Schedule an evaluation if you notice: musty odors in your home, visible mold on crawlspace surfaces, wood rot on joists or beams, evidence of pests, or cold floors in winter. BRE Builders provides free on-site evaluations — we assess existing conditions, identify any drainage or structural issues, and provide written scope before any work begins. NV License #0085999.</p>

          <BlogPullQuote>Encapsulation cost varies too much by property to quote without seeing the space. Any contractor who quotes over the phone without an inspection is guessing. A proper evaluation takes 30 minutes and costs nothing.</BlogPullQuote>
        </div>
      }
    />
  )
}
