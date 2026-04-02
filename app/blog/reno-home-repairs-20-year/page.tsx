import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
export const metadata: Metadata = {
  title: '20-Year-Old Home Repairs in Reno | BRE Builders Repair Guide',
  description: 'At 20 years old, Reno homes face hidden wear from aging materials and original construction shortcuts. What to inspect in homes built in the early 2000s.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=20-Year-Old+Reno+Home+Repairs&sub=What+to+Inspect+%26+When+to+Act&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/reno-home-repairs-20-year-old-house/' },
}
export default function Repairs20YearPage() {
  return (
    <BlogTemplate
      title="20-Year-Old Home Repairs in Reno — Time to Act"
      category="Structural Repairs"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Foundation and Structural Issues 20 Year Old Reno Home BRE Builders"
      excerpt="At 20 years old, Reno homes often face hidden wear that homeowners only notice after damage is done. If your home was built in the early 2000s, pay close attention to these issues."
      relatedServices={[{ label: 'Structural Repairs', href: '/services/repairs' }, { label: 'Foundation Repair', href: '/services/repairs/foundation' }, { label: 'Water Intrusion', href: '/services/repairs/water-intrusion' }]}
      relatedPosts={[
        { title: '30-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-30-year', img: IMGS.repairs_rot, alt: '30 year homes', category: 'Structural Repairs' },
        { title: '10-Year Home Oversights', href: '/blog/reno-home-10-year-maintenance', img: IMGS.svc_repair, alt: '10 year homes', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>At 20 years old, Reno homes often face hidden wear that homeowners only notice after damage is done. From outdated HVAC systems to sagging decks and cracked tile showers, issues are often caused by aging materials and original construction shortcuts. If your home was built in the early 2000s, pay close attention to the following:</p>
          <h2>Attic Mold Growth</h2>
          <p>Attic plywood molds from warm air trapped by poor ventilation — a common issue in homes built before 2005 in South Reno. Mold in the attic indicates an HVAC or ventilation problem that needs correction before it spreads to structural elements.</p>
          <h2>Window Frame Separation</h2>
          <p>Vinyl or aluminum window frames detach from sills as shifting slabs and UV exposure weaken anchors over time. This creates both an energy efficiency problem and a water intrusion pathway.</p>
          <h2>Deck Structural Deterioration</h2>
          <p>Decks built 20 years ago with pressure-treated lumber of that era are now at or past their service life for the most vulnerable connections — ledger boards, post bases, and joist hangers. A structural deck inspection is warranted for any 20-year-old Reno home with a deck.</p>
          <h2>HVAC System Age</h2>
          <p>HVAC systems in 20-year-old Reno homes are reaching the end of their typical 15–20 year service life. Failing systems increase energy costs and can create moisture issues that contribute to structural damage.</p>
          <h2>Foundation Monitoring</h2>
          <p>Reno&apos;s expansive clay soils create ongoing foundation movement. 20 years of freeze-thaw cycles and soil expansion/contraction create cumulative stress. Any cracks that have appeared in the last 5 years should be evaluated.</p>
          <h2>BRE Builders — Reno Structural Repairs Since 1989</h2>
          <p>BRE Builders inspects and repairs structural issues in Reno homes of all ages. Free estimates. Licensed NV #0085999 · CA #1093798.</p>
        </div>
      }
    />
  )
}
