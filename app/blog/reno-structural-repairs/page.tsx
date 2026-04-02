import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
export const metadata: Metadata = {
  title: 'Why More Reno Homeowners Trust BRE Builders for Structural Repairs',
  description: 'What sets BRE Builders apart for structural repair in Northern Nevada. 35+ years licensed in Reno. NV #0085999 · CA #1093798.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Why+Reno+Trusts+BRE+Builders&sub=Structural+Repairs+%C2%B7+35%2B+Years+%C2%B7+Licensed+NV+%26+CA&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/why-more-reno-homeowners-trust-bre-builders-for-structural-repairs/' },
}
export default function RenoStructuralRepairsPage() {
  return (
    <BlogTemplate
      title="Why More Reno Homeowners Trust BRE Builders for Structural Repairs"
      category="Structural Repairs"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Structural Repairs Reno NV Foundation Repair BRE Builders Licensed Contractor"
      excerpt="What makes BRE Builders the go-to structural repair contractor in Reno, NV. Licensed, local, and working in Northern Nevada since 1989."
      relatedServices={[{ label: 'Structural Repairs', href: '/services/repairs' }, { label: 'Foundation Repair', href: '/services/repairs/foundation' }, { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' }]}
      relatedPosts={[
        { title: 'Top 10 Structural Repair Warning Signs', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair signs', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_foundation, alt: '20 year homes', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>BRE Builders is a licensed, locally owned contractor serving Reno, Sparks, Carson City, and the Lake Tahoe region. We specialize in structural repairs, custom remodeling, ADUs, deck restoration, waterproofing, and more. Licensed NV #0085999 · CA #1093798.</p>
          <h2>Local Knowledge of Reno&apos;s Structural Risks</h2>
          <p>Reno&apos;s expansive clay soils, freeze-thaw cycles, and high-desert UV exposure create structural failure patterns that repeat across the city. BRE Builders has been working in these conditions since 1989 — we recognize Reno&apos;s specific structural risks before they become emergencies.</p>
          <h2>We Handle the Full Scope — No Subcontracting the Hard Parts</h2>
          <p>Many contractors identify a problem then subcontract the structural work. BRE Builders holds its own Nevada general contractor license (#0085999) and handles structural repairs, framing, concrete, waterproofing, and finish work in-house.</p>
          <h2>Permit-Compliant Structural Work</h2>
          <p>Structural repairs done without permits create problems at resale and may not meet code. BRE Builders manages the entire permitting process and ensures all repairs meet local Nevada and California building codes.</p>
          <h2>Verified Track Record</h2>
          <p>Completed structural repair projects include foundation repair at Reno residential properties, dry rot remediation at Quaking Aspen, steel bracket reinforcement at Lake Tahoe, and hillside structural repair at multiple Lake Tahoe properties. Free estimates on all structural repair work.</p>
          <h2>What Our Clients Say</h2>
          <p>"Steve and Chris and the whole team at BRE Builders have been a joy to work with. I can always count on them to get the job done and the results have been fabulous!" — Bill, Sparks, NV</p>
          <p>"The team at Blue Reef Builders exceeds my expectations every time I have used them. I have had their team work on several of my projects and they have always met their stated deadlines and come in at bid." — Stephanie, Reno, NV</p>
        </div>
      }
    />
  )
}
