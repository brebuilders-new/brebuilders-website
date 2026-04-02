import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
export const metadata: Metadata = {
  title: '30-Year-Old Reno Homes — What to Expect and Repair',
  description: 'Reno homes from the 1990s face foundation concerns, aging systems, and deferred maintenance. What to inspect and when to call a licensed contractor.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=30-Year-Old+Reno+Home+Repairs&sub=1990s+Homes+%E2%80%94+What+to+Inspect&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/reno-home-repairs-30-year-old-house/' },
}
export default function Repairs30YearPage() {
  return (
    <BlogTemplate
      title="30-Year-Old Reno Homes — What to Expect and Repair"
      category="Structural Repairs"
      heroImage={IMGS.repairs_rot}
      heroAlt="Structural Damage Dry Rot 30 Year Old Reno Home BRE Builders"
      excerpt="Reno homes from the 1990s face compounding structural risks. Three decades of freeze-thaw cycles, aging systems, and deferred maintenance create predictable failure patterns."
      relatedServices={[{ label: 'Structural Repairs', href: '/services/repairs' }, { label: 'Foundation Repair', href: '/services/repairs/foundation' }, { label: 'Water Intrusion', href: '/services/repairs/water-intrusion' }]}
      relatedPosts={[
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_foundation, alt: '20 year homes', category: 'Structural Repairs' },
        { title: 'Structural Repair Warning Signs', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair signs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Reno homes from the 1990s have experienced 30 years of freeze-thaw cycles, UV exposure, and the cumulative effects of Reno&apos;s expansive clay soils. By this age, several structural and systems issues have become predictable.</p>
          <h2>Foundation Settlement — Most Critical</h2>
          <p>Thirty years of soil movement in Reno&apos;s clay-heavy ground creates measurable foundation displacement. Stair-step cracks in block, wide cracks at corners, and sloping floors are common at this age. Any home this age that hasn&apos;t had a structural inspection in 5+ years should have one.</p>
          <h2>Dry Rot at Siding and Trim</h2>
          <p>Original wood siding, trim, and fascia from 1990s construction is typically at the end of its sealed life. Dry rot spreads invisibly — often not discovered until siding is removed for other repairs. Probe suspected areas before assuming they&apos;re sound.</p>
          <h2>Plumbing — Galvanized and Polybutylene</h2>
          <p>Some 1990s Reno homes used polybutylene piping, which was later recalled for failure rates. Check what type of plumbing your home has if it hasn&apos;t already been replaced.</p>
          <h2>Original Decks — Structural Risk</h2>
          <p>Any original deck from the 1990s that hasn&apos;t been rebuilt is a structural liability. Ledger boards, post bases, and joist-to-beam connections should be professionally evaluated. Deck failure is among the most preventable serious injuries in residential construction.</p>
          <h2>Water Intrusion — Compounded</h2>
          <p>Thirty years of minor water intrusion creates major structural damage. Check crawl spaces, basement perimeters, and window wells for evidence of ongoing moisture.</p>
          <h2>BRE Builders — Structural Inspection and Repair</h2>
          <p>Free structural inspections and estimates. Licensed NV #0085999 · CA #1093798. Serving Reno since 1989.</p>
        </div>
      }
    />
  )
}
