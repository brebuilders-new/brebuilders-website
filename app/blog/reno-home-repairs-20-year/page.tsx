import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "20-Year-Old Home Repairs in Reno — What to Inspect Now | BRE Builders",
  description: "At 20 years old, Reno homes face cumulative damage from clay soils, freeze-thaw cycles, and UV exposure. BRE Builders identifies the 8 issues that matter most in homes built in the early 2000s.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=20-Year-Old+Reno+Home+Repairs&sub=What+to+Inspect+%26+When+to+Act&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/reno-home-repairs-20-year-old-house/` },
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
          <p>A 20-year-old Reno home has reached a critical threshold. Major building systems — roof, HVAC, water heater, windows, and often the original appliances — are at or past their design life. The foundation has cycled through two full decades of Reno&apos;s expansive clay soil movement. And any deferred maintenance from the first decade has had time to compound. BRE Builders assesses hundreds of Reno homes in this age range every year. Here is what we find.</p>

          <BlogImage
            src={IMGS.repairs_rot}
            alt="Dry rot structural damage 20-year-old Reno home BRE Builders repair"
            caption="Dry rot exposure at 20 years — deferred maintenance from the first decade has compounded"
            priority
          />

          <h2>Roof: At or Past Life Expectancy</h2>
          <p>Standard 3-tab asphalt shingles installed in Reno circa 2005 have a rated life of 20–25 years — but Reno&apos;s UV exposure typically puts the actual service life at the low end of that range. At 20 years, the question is not if replacement is coming but when. Have the roof assessed by a licensed roofing contractor. Key indicators: granule loss in gutters, visible shingle surface texture loss, any cracked or missing shingles, and the condition of all flashing. If the roof was replaced at year 10, it is now at its own midpoint inspection.</p>

          <h2>Foundation: 20 Cycles of Clay Movement</h2>
          <p>Reno&apos;s clay soils have now moved through 20 wet-dry cycles. Any differential settlement that was minor at year 5 or 10 may now be visible as sticking doors, stair-step cracks in exterior stucco or brick, or interior drywall cracks at door and window corners. A structural assessment at year 20 is not optional — it is the point where many issues cross from cosmetic to structural. BRE Builders provides free structural assessments for homeowners throughout the Reno metro.</p>

          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Foundation crack repair 20-year-old home Reno NV BRE Builders assessment"
            caption="Foundation crack assessment — 20-year-old homes in Reno often show the full effects of clay soil cycling"
          />

          <h2>HVAC: Replacement Planning</h2>
          <p>Original HVAC equipment from 2005 is well past its rated life. Furnaces last 15–20 years; central air conditioners last 15–20 years. If the original system is still running, it is operating at significantly reduced efficiency — likely 20–30% below its original SEER rating. Replacement now, on a planned basis, costs considerably less than emergency replacement when the system fails in a heat wave. Modern high-efficiency systems typically pay back the incremental cost in energy savings within 5–7 years in Reno&apos;s climate.</p>

          <h2>Windows: Seal Failure</h2>
          <p>Dual-pane windows installed in 2005 often show seal failure at 20 years — visible as fogging or condensation between the panes. Failed seals eliminate the insulating value of the double-pane assembly. In Reno&apos;s climate, failed window seals increase heating and cooling costs meaningfully. Individual insulated glass units (IGUs) can be replaced without replacing the full window frame if the frames themselves are still structurally sound.</p>

          <BlogPullQuote>
            At year 20, deferred maintenance is no longer deferred — it is active damage. Every year of continued deferral adds to the eventual cost.
          </BlogPullQuote>

          <h2>Exterior: Paint, Caulk, and Water Management</h2>
          <p>A 20-year-old exterior paint job is past life — even if touch-ups have been done. Full repainting at 20 years should include complete caulk replacement at all joints (window perimeters, door frames, trim-to-siding transitions), inspection and repair of any damaged or deteriorated siding, and an assessment of roof-to-wall transitions and all penetration flashings.</p>

          <h2>Plumbing: Proactive Assessment</h2>
          <p>At 20 years, original supply line valves (at toilets, sinks, and appliances) often fail when operated — they have not been turned in decades and the seats have corroded. Replace the easy ones preventively before they fail at an inconvenient moment. Have the water heater inspected — if it is original, plan for replacement. Check under every sink and in the crawlspace for any sign of slow leaks or corrosion.</p>

          <h2>BRE Builders — 20-Year Home Assessments in Reno</h2>
          <p>BRE Builders provides comprehensive structural and repair assessments for 20-year-old homes throughout the Reno-Sparks metro, Carson City, Lake Tahoe, and Northern California. Licensed NV #0085999 · CA #1093798. Contact us for a free consultation.</p>
        </div>
      }
    />
  )
}
