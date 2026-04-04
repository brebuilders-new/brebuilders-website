import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Vapor Barrier Crawlspace Northern Nevada | BRE Builders Reno',
  description: 'Northern Nevada crawlspaces face seasonal moisture, pests, and soil expansion. BRE Builders explains when a vapor barrier is needed and what to expect. Free evaluation NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Vapor+Barrier+Crawlspace+Northern+Nevada&sub=Free+Evaluation+%C2%B7+BRE+Builders+NV+%230085999&badge=Crawlspace`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/vapor-barrier-crawlspace-northern-nevada/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Do I Need a Vapor Barrier in My Crawlspace in Northern Nevada?',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/vapor-barrier-crawlspace-northern-nevada/`,
    },
  ],
}

export default function Blog_VaporBarrierCrawlspaceNorthernNevada() {
  return (
    <BlogTemplate
      title="Do I Need a Vapor Barrier in My Crawlspace in Northern Nevada?"
      category="Structural Repairs"
      publishDate="November 2025"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Crawlspace vapor barrier Northern Nevada — BRE Builders structural repair Reno NV #0085999"
      excerpt="In Northern Nevada's variable climate, a crawlspace without a vapor barrier is an open door for moisture, mold, and pests. Here is when you need one — and what to look for first."
      schema={schema}
      relatedServices={[
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
        { label: 'Structural Repairs', href: '/services/repairs' },
      ]}
      relatedPosts={[
        { title: 'Crawlspace Encapsulation Cost Nevada', href: '/blog/crawlspace-encapsulation-cost-nevada', img: IMGS.blog_basement_water, alt: 'Crawlspace encapsulation Nevada', category: 'Structural Repairs' },
        { title: 'Why Is My House Humid in Reno?', href: '/blog/house-humid-reno-no-leak', img: IMGS.repairs_water, alt: 'House humidity no leak Reno', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>In Northern Nevada, crawlspace moisture is a seasonal problem. Spring snowmelt saturates soil. Temperature swings drive condensation. Without a vapor barrier, ground moisture evaporates upward into your floor system — causing subfloor rot, mold on joists, and humidity throughout the home. Here is what you need to know.</p>

          <h2>What a Vapor Barrier Does</h2>
          <p>A vapor barrier is a heavy polyethylene sheet installed across the crawlspace floor — typically 6 mil to 20 mil thickness. It blocks ground moisture from evaporating into the crawlspace air. Combined with proper ventilation or full encapsulation, it prevents the moisture accumulation that causes most crawlspace problems in Nevada.</p>

          <h2>Signs You Need One</h2>
          <p><strong>Musty odors in the home.</strong> Ground moisture evaporating through an uncovered crawlspace carries organic odors that permeate flooring and rise into living spaces.</p>
          <p><strong>Cold or soft floors.</strong> Cold floors in winter often indicate uninsulated and moisture-affected subfloors. Soft spots indicate subfloor rot — which means the moisture problem has been active long enough to cause structural damage.</p>
          <p><strong>Visible moisture or condensation in the crawlspace.</strong> Wet soil, condensation on pipes, or rust on metal components are direct indicators of a moisture problem that a vapor barrier would address.</p>
          <p><strong>Pest activity.</strong> Damp crawlspaces attract rodents and insects. If you have recurring pest issues, moisture control should be part of the solution.</p>

          <h2>Northern Nevada Considerations</h2>
          <p>Reno's clay-heavy soils expand and contract with moisture — this creates seasonal pressure changes in crawlspaces, particularly in South Reno, Spanish Springs, and older neighborhoods in Sparks. In these areas, a vapor barrier is not optional — it is a baseline requirement for maintaining subfloor integrity over time.</p>

          <h2>What to Do Next</h2>
          <p>Have your crawlspace evaluated before installing a vapor barrier. If mold, pest damage, or structural issues are already present, they need to be addressed first — encapsulating a damaged crawlspace seals in problems rather than solving them. BRE Builders provides free crawlspace evaluations throughout Reno, Sparks, Carson City, and the Lake Tahoe region. NV License #0085999.</p>

          <BlogPullQuote>A vapor barrier is a relatively simple installation — but only after the existing conditions are assessed. We always inspect before we recommend. If there are existing issues, the barrier goes in after they are resolved.</BlogPullQuote>
        </div>
      }
    />
  )
}
