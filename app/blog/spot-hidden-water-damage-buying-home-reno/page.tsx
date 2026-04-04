import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Spot Hidden Water Damage Before Buying a Reno Home | BRE Builders',
  description: 'Hidden water damage is the most expensive surprise in home buying. BRE Builders explains what to look for in Reno homes — signs, tools, and what to do if you find damage. NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Spot+Hidden+Water+Damage+Reno+Home&sub=Before+You+Buy+%C2%B7+BRE+Builders+NV+%230085999&badge=Home+Buying`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/spot-hidden-water-damage-buying-home-reno/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Spot Hidden Water Damage Before Buying a Home in Reno',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/spot-hidden-water-damage-buying-home-reno/`,
    },
  ],
}

export default function Blog_SpotHiddenWaterDamageBuyingHomeReno() {
  return (
    <BlogTemplate
      title="How to Spot Hidden Water Damage Before Buying a Home in Reno"
      category="Structural Repairs"
      publishDate="November 2025"
      heroImage={IMGS.blog_basement_water}
      heroAlt="Hidden water damage home buying Reno Nevada — BRE Builders inspection NV #0085999"
      excerpt="Hidden water damage is the most expensive discovery after closing. In Reno's climate, moisture damage is common and easy to conceal. Here is how to spot it before you sign."
      schema={schema}
      relatedServices={[
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
      ]}
      relatedPosts={[
        { title: 'What to Do If Your Inspection Missed Water Damage', href: '/blog/home-inspection-missed-water-damage-reno', img: IMGS.repairs_water, alt: 'Home inspection water damage Reno', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Water damage is the most common — and most expensive — hidden problem in Reno home purchases. Fresh paint, new flooring, and staging can all conceal damage that costs tens of thousands of dollars to remediate. Here is how to identify it before you close.</p>

          <BlogPullQuote>In Reno's climate, water damage from snowmelt, soil movement, and freeze-thaw cycles is common. Sellers are not always aware of the damage — and inspectors do not always find it. The buyer pays.</BlogPullQuote>

          <h2>What to Look for During Home Visits</h2>
          <p><strong>Wall and ceiling discoloration.</strong> Brown or yellow staining — even faint — indicates past or active water intrusion. Look especially at ceiling corners, around windows, and at the junction of exterior walls and floors.</p>
          <p><strong>Warped or buckled flooring.</strong> Floors that have bubbled, cupped, or feel soft underfoot have had sustained moisture exposure. Check bathrooms, kitchens, and any rooms adjacent to exterior walls carefully.</p>
          <p><strong>Musty odor.</strong> The smell of mold or mildew is one of the most reliable indicators of hidden moisture damage. Trust your nose — if a room smells damp on a dry day, moisture is present somewhere.</p>
          <p><strong>Peeling caulk or paint around windows and plumbing.</strong> Adhesion failure near water sources signals repeated moisture exposure. Check under sinks, around toilet bases, and at window sills carefully.</p>
          <p><strong>Fresh paint in isolated areas.</strong> A single wall or section that has been recently painted — particularly in a basement or bathroom — may be concealing staining. Compare texture and sheen with surrounding surfaces.</p>

          <h2>Tools That Help</h2>
          <p>A moisture meter is the most useful tool for detecting hidden moisture in walls and floors. Infrared cameras can identify temperature differentials caused by moisture in wall cavities. Both are standard equipment for professional inspection.</p>

          <h2>What to Do If You Find Water Damage</h2>
          <p>Document findings with photos. Have a licensed contractor — not just a home inspector — assess the extent and provide a written scope and cost estimate. Use this to negotiate price reduction or repairs prior to closing. If the seller declines, factor the repair cost into your offer or walk away. BRE Builders provides pre-purchase evaluations for buyers throughout Reno, Sparks, and Lake Tahoe. NV License #0085999.</p>
        </div>
      }
    />
  )
}
