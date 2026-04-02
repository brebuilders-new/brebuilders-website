import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "20-Year-Old Home Repairs in Reno — What to Inspect Now | BRE Builders",
  description: "At 20 years old, Reno homes face cumulative damage from clay soils, freeze-thaw cycles, and UV exposure. BRE Builders identifies the 8 issues that matter most in homes built in the early 2000s.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=20-Year-Old+Reno+Home+Repairs&sub=What+to+Inspect+%26+When+to+Act&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/reno-home-repairs-20-year-old-house/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "20-Year-Old Home Repairs in Reno — What to Inspect Now",
  author: { '@type': 'Organization', name: 'BRE Builders' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  datePublished: '2025-06-01',
  url: 'https://brebuilders.com/reno-home-repairs-20-year-old-house/',
}

export default function Repairs20YearPage() {
  return (
    <BlogTemplate
      title="20-Year-Old Home Repairs in Reno"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Foundation and structural issues 20-year-old Reno home BRE Builders"
      excerpt="At 20 years old, Reno homes often face hidden wear that homeowners only notice after damage is done. If your home was built in the early 2000s, these are the issues that matter most."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: '10-Year Reno Home Oversights', href: '/blog/reno-home-10-year-maintenance', img: IMGS.svc_repair, alt: '10 year home maintenance Reno', category: 'Structural Repairs' },
        { title: '30-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-30-year', img: IMGS.repairs_rot, alt: '30 year home repairs Reno', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>At 20 years old, Reno homes built in the early 2000s have accumulated a specific set of problems caused by aging materials, original construction shortcuts common to that era, and two decades of Reno&apos;s demanding climate. Most homeowners only notice these issues after they&apos;ve advanced to the expensive-to-repair stage. Here&apos;s what BRE Builders inspects in 20-year-old Reno homes.</p>

          <h2>1. Soil-Related Foundation Cracking (Advanced Stage)</h2>
          <p>The expansive clay soils in Spanish Springs, South Meadows, and South Reno have been working on the foundation for two full decades. What were hairline cracks at year 10 are now wider, more numerous, and have begun to affect door and window operation. Diagonal crack patterns at opening corners are the most common sign. Any crack wider than ⅛ inch warrants structural assessment — not patching.</p>

          <h2>2. Sun Damage on Siding — Surface Failure</h2>
          <p>Reno&apos;s UV exposure fades and degrades west-facing siding faster than any other exposure. At 20 years, original vinyl siding installed in the early 2000s is approaching the end of its functional life on the sun-exposed faces. Look for brittleness (panels crack when pushed), significant fading, and lifting at seams. Original paint on wood or fiber-cement is likely failed — the underlying material is now absorbing moisture directly.</p>

          <h2>3. Attic Mold Growth</h2>
          <p>Attic plywood in homes built before 2005 was frequently installed with inadequate ventilation — a code and practice issue of that era. Warm air from living spaces rises into an under-ventilated attic, condenses on cold roof sheathing, and mold follows. By year 20, homes with this problem have significant mold colonies visible on the sheathing. This must be addressed before any attic insulation work or the mold returns immediately.</p>

          <h2>4. Window Frame Separation</h2>
          <p>Original vinyl or aluminum window frames from the early 2000s have now gone through 20 years of thermal cycling — daily expansion and contraction from Reno&apos;s temperature swings. The sealant between the frame and rough opening has long since failed. Look for daylight at frame edges, drafts, and visible gaps where the frame pulls away from the surrounding drywall or trim. This is both an energy issue and a water intrusion pathway.</p>

          <h2>5. Deck Structural Deterioration</h2>
          <p>Pressure-treated lumber from the early 2000s used a formulation (CCA — chromated copper arsenate) that was banned for residential use in 2004. CCA lumber is more durable than the ACQ (alkaline copper quaternary) that replaced it in many applications, but by year 20 the critical connections — ledger board attachments, post bases, joist hangers — are showing metal corrosion and wood deterioration at contact points. Any 20-year-old deck warrants a structural inspection before the next outdoor season.</p>

          <h2>6. HVAC System Age</h2>
          <p>Standard residential HVAC systems have a 15–20 year service life. A home built in 2004 has an HVAC system that is at or past the end of its designed life. Failing systems don&apos;t just cost more to run — they create moisture problems. Poorly functioning air handlers and duct systems allow humidity imbalances that contribute to attic and crawlspace condensation. An HVAC system at end-of-life that&apos;s still running often signals moisture problems developing elsewhere in the structure.</p>

          <h2>7. Foundation Drainage</h2>
          <p>Original downspout extensions and grade conditions installed at construction have often degraded or been buried by 20 years of landscaping. Downspouts discharging at the foundation, grade that has settled toward the house, and irrigation systems that wet the foundation zone are all contributors to the soil movement and moisture problems that dominate 20-year repair lists in Reno.</p>

          <h2>8. Overloaded Breaker Panels</h2>
          <p>Homes built in the early 2000s were sized for the electrical load of that era — before the proliferation of EV chargers, home offices, and high-draw appliances. If breakers trip regularly or if the panel is fully loaded with no open slots, the electrical system needs assessment. Aluminum wiring used in some homes of this era requires specific handling at connections.</p>

          <h2>BRE Builders — 20-Year Reno Home Specialists</h2>
          <p>BRE Builders has been repairing homes across Reno since 1989. We&apos;ve repaired thousands of early-2000s Reno homes and know exactly what fails in this specific construction vintage in this specific climate. Free estimates on all structural repairs. Licensed NV #0085999 · CA #1093798.</p>
        </div>
      }
    />
  )
}
