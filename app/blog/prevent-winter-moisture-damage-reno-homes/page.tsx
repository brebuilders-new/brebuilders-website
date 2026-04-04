import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Prevent Winter Moisture Damage in Older Reno Homes | BRE Builders',
  description: 'Older Reno homes lack modern vapor barriers and insulation, making them vulnerable to winter moisture damage. BRE Builders explains what to check and how to protect your home. NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Prevent+Winter+Moisture+Damage+Reno&sub=Older+Home+Guide+%C2%B7+BRE+Builders+NV+%230085999&badge=Winter+Prep`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/prevent-winter-moisture-damage-reno-homes/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Prevent Winter Moisture Damage in Older Reno Homes',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/prevent-winter-moisture-damage-reno-homes/`,
    },
  ],
}

export default function Blog_PreventWinterMoistureDamageRenoHomes() {
  return (
    <BlogTemplate
      title="How to Prevent Winter Moisture Damage in Older Reno Homes"
      category="Structural Repairs"
      publishDate="October 2025"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Winter moisture damage older Reno home — BRE Builders structural repair NV #0085999"
      excerpt="Older Reno homes were built before modern vapor barriers and insulation standards. Winter moisture seeps in through aging materials, gaps, and unprotected crawlspaces. Here is how to protect your home."
      schema={schema}
      relatedServices={[
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
        { label: 'Structural Repairs', href: '/services/repairs' },
      ]}
      relatedPosts={[
        { title: 'Why Is My House Humid in Reno?', href: '/blog/house-humid-reno-no-leak', img: IMGS.repairs_water, alt: 'House humidity Reno Nevada', category: 'Structural Repairs' },
        { title: '30-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-30-year', img: IMGS.blog_30yr_hero, alt: '30 year home repairs Reno', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Older Reno homes have character and value — but they were built before modern vapor barriers, insulation standards, and building envelope requirements. As winter arrives and temperatures drop, moisture finds its way in through aging materials, gaps around windows and doors, and unprotected crawlspaces. Here is what to check before the cold season starts.</p>

          <h2>Why Older Homes Are More Vulnerable</h2>
          <p>Homes built before the 1990s typically lack the continuous vapor barriers, foam-sealed rim joists, and high-R insulation that modern construction requires. Aging wood, plaster, and original windows absorb and retain moisture differently than modern materials. When temperatures drop, thermal bridging creates cold surfaces where condensation forms — silently, inside walls and in crawlspaces.</p>

          <BlogPullQuote>The damage from winter moisture rarely shows up in winter. It shows up in spring — as mold, as soft flooring, as staining on ceilings — after months of slow infiltration.</BlogPullQuote>

          <h2>Key Signs to Check Before Winter</h2>
          <p><strong>Peeling paint or bubbling wallpaper.</strong> Moisture is infiltrating the wall assembly from outside or from condensation within. This will worsen significantly over a cold, wet winter if not addressed.</p>
          <p><strong>Staining on ceilings or exterior walls.</strong> Water stains that appeared after last winter and have dried may indicate roof flashing issues, chimney leaks, or wall penetrations that need to be sealed before the next freeze-thaw cycle.</p>
          <p><strong>Gaps around windows and doors.</strong> Older homes often have deteriorated weatherstripping and failed caulk around frames. These gaps allow cold air and moisture in — seal them before temperatures drop below freezing consistently.</p>
          <p><strong>Uninsulated or unencapsulated crawlspace.</strong> Ground moisture rises through unprotected crawlspaces and into the floor system above. In older Reno homes with vented crawlspaces, this is a primary source of winter moisture damage to subfloors and joists.</p>

          <h2>What to Do</h2>
          <p>Seal windows and doors with new weatherstripping and caulk. Inspect and repair roof flashing, gutters, and downspouts. Have your crawlspace evaluated if you have not in the last five years. BRE Builders provides free on-site evaluations for older Reno homes — we identify moisture vulnerabilities and provide written scope before any work begins. NV License #0085999.</p>
        </div>
      }
    />
  )
}
