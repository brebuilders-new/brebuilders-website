import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Top Home Repairs for 20-Year-Old Reno Houses 2025 | BRE Builders',
  description: 'Reno homes built in the early 2000s are hitting their 20-year mark. Plumbing, electrical, roof, and structural issues are common at this age. BRE Builders NV #0085999. Free estimates.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Home+Repairs+20-Year-Old+Reno+Houses+2025&sub=What+to+Check+%C2%B7+BRE+Builders+NV+%230085999&badge=Home+Maintenance`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/reno-home-repairs-needed-2025/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Top Home Repairs for 20-Year-Old Reno Houses in 2025',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/reno-home-repairs-needed-2025/`,
    },
  ],
}

export default function Blog_RenoHomeRepairsNeeded2025() {
  return (
    <BlogTemplate
      title="Top Home Repairs for 20-Year-Old Reno Houses in 2025"
      category="Structural Repairs"
      publishDate="January 2025"
      heroImage={IMGS.blog_20yr_hero}
      heroAlt="Home repairs 20-year-old Reno house 2025 — BRE Builders licensed contractor NV #0085999"
      excerpt="Reno homes built in 2004-2006 are at the 20-year mark where plumbing, roofing, electrical, and structural issues commonly emerge. Here is what to check and prioritize."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
      ]}
      relatedPosts={[
        { title: '20-Year-Old Reno Homes', href: '/blog/reno-home-repairs-20-year', img: IMGS.blog_20yr_hero, alt: '20 year old Reno home repairs', category: 'Structural Repairs' },
        { title: '30-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-30-year', img: IMGS.blog_30yr_hero, alt: '30 year home repairs Reno', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Homes built in Reno between 2003 and 2006 — many of which were part of the South Reno, Damonte Ranch, and Spanish Springs expansions — are now hitting the 20-year mark. At this age, specific systems commonly begin to fail or require significant attention. Here is what to prioritize.</p>

          <h2>Plumbing</h2>
          <p>Homes built in this era commonly used PVC supply lines and older fixture connections that are now showing wear. Water heaters from original construction are well past their 12-15 year service life. If yours is original, have it inspected — failures are not gradual, they are immediate and cause significant water damage.</p>

          <h2>Roofing</h2>
          <p>30-year architectural shingles installed in 2003-2006 are entering their final service decade. Reno's UV exposure and summer heat accelerate shingle degradation. Have your roof professionally inspected if it has not been evaluated in the last three years. Missing granules, curling edges, and exposed underlayment are signs that replacement is approaching.</p>

          <h2>Electrical</h2>
          <p>Homes built in the early 2000s were not designed for today's electrical loads — EV chargers, multiple high-draw appliances, home offices. If your panel is consistently tripping breakers or you are adding significant load, have an electrician evaluate capacity. AFCI and GFCI requirements have also changed — older homes may not be compliant.</p>

          <h2>Foundation and Structural</h2>
          <p>Twenty years of Reno's clay soil expansion and contraction cycles create cumulative foundation stress. Small cracks that were dormant at year 10 have had another decade to widen. Doors or windows that stick seasonally, visible wall cracks near corners and openings, and sloping floors are all signs worth professional evaluation.</p>

          <BlogPullQuote>At 20 years, most issues are still in the early stage — catchable before they become catastrophic. The homeowners who wait another 5 years face much larger bills.</BlogPullQuote>

          <h2>Energy Systems</h2>
          <p>Original windows, insulation, and HVAC from 2003-2006 builds do not meet 2025 efficiency standards. Upgrading insulation in the attic and crawlspace provides the highest ROI of any energy improvement — particularly given Reno's temperature extremes. BRE Builders provides free estimates on structural repairs and energy upgrades. NV License #0085999.</p>
        </div>
      }
    />
  )
}
