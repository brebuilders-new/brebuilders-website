import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'What Home Inspectors Miss in Reno | BRE Builders',
  description: 'Standard home inspections miss hidden structural issues, moisture damage, and local code compliance problems. BRE Builders explains what they find — and how. Licensed NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=What+Home+Inspectors+Miss+in+Reno&sub=BRE+Builders+Structural+Evaluation+%C2%B7+NV+%230085999&badge=Inspections`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/bre-builders-finds-what-inspectors-miss/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How BRE Builders Finds What Home Inspectors in Reno Often Miss',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/bre-builders-finds-what-inspectors-miss/`,
    },
  ],
}

export default function Blog_BreBuildersFindsWhatInspectorsMiss() {
  return (
    <BlogTemplate
      title="How BRE Builders Finds What Home Inspectors in Reno Often Miss"
      category="Structural Repairs"
      publishDate="December 2025"
      heroImage={IMGS.blog_contractor}
      heroAlt="BRE Builders structural inspection Reno Nevada finds what home inspectors miss NV #0085999"
      excerpt="Home inspectors provide a general overview. BRE Builders provides a structural evaluation. Here is what standard inspections commonly miss in Reno homes — and what that costs homeowners."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: 'What to Do If Your Inspection Missed Water Damage', href: '/blog/home-inspection-missed-water-damage-reno', img: IMGS.repairs_water, alt: 'Home inspection missed water damage', category: 'Structural Repairs' },
        { title: 'Spot Hidden Water Damage Before Buying', href: '/blog/spot-hidden-water-damage-buying-home-reno', img: IMGS.blog_basement_water, alt: 'Spot hidden water damage Reno', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Home inspectors serve an important function in the buying process. But their scope is limited by time, access, and training. In Reno, where homes face specific structural challenges from soil conditions, temperature extremes, and seismic activity, what inspectors miss matters. Here is what BRE Builders finds — regularly — after inspections have cleared a property.</p>

          <BlogPullQuote>The issues that cost the most are rarely visible from the surface. They are in crawlspaces, behind finishes, inside wall cavities, and under slabs — areas that standard inspections do not reach.</BlogPullQuote>

          <h2>What Standard Inspections Cover and Why It Is Not Enough</h2>
          <p>Home inspectors are generalists working on tight time constraints — typically 2-3 hours for a 2,000 sq ft home. They visually assess accessible systems: plumbing fixtures, electrical panels, roof from the ground or edge, and foundation walls where visible. They document what they see. They do not open walls, probe suspect areas, or perform invasive testing.</p>

          <h2>What BRE Builders Commonly Finds</h2>
          <p><strong>Crawlspace conditions.</strong> Inspectors note "crawlspace was accessed" — but rarely spend meaningful time inside. BRE Builders finds: subfloor rot, failed vapor barriers, active mold on joists, compromised post bases, and pest damage that was present but undocumented at inspection.</p>
          <p><strong>Moisture behind fresh finishes.</strong> New paint in isolated areas is a red flag. BRE Builders uses moisture meters and probing to identify elevated moisture readings behind walls that passed visual inspection. This is one of the most common pre-purchase concealment issues we encounter.</p>
          <p><strong>Foundation issues beyond visible cracks.</strong> Inspectors document cracks they see. They do not assess soil conditions, drainage patterns around the foundation, or the significance of crack patterns relative to Reno's clay soils and seismic context. BRE Builders evaluates structural significance — not just presence.</p>
          <p><strong>Attic conditions.</strong> Bathroom fans venting into attics, inadequate insulation, mold on sheathing, and blocked soffit vents are consistently found in Reno attics that inspectors noted as "adequate" on their reports.</p>

          <h2>Why Local Knowledge Matters</h2>
          <p>Reno has specific building conditions that out-of-region inspectors and generalist inspectors may not know: clay soil expansion patterns by neighborhood, common defects in specific development-era builds, and local drainage and snowmelt patterns. BRE Builders has operated in Northern Nevada since 1989. NV License #0085999. Free evaluations available.</p>
        </div>
      }
    />
  )
}
