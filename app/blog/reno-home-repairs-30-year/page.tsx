import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "30-Year-Old Home Repairs in Reno — Critical Issues to Inspect | BRE Builders",
  description: "30-year-old Reno homes from the 1990s face compounding structural issues — galvanized pipe corrosion, aluminum wiring, unsafe deck framing, foundation movement. BRE Builders repair guide.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=30-Year-Old+Reno+Home+Repairs&sub=Critical+Issues+in+1990s+Reno+Homes&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/reno-home-repairs-30-year-old-house/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "30-Year-Old Home Repairs in Reno — Critical Issues to Inspect",
  author: { '@type': 'Organization', name: 'BRE Builders' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  datePublished: '2025-06-01',
  url: 'https://brebuilders.com/reno-home-repairs-30-year-old-house/',
}

export default function Repairs30YearPage() {
  return (
    <BlogTemplate
      title="30-Year-Old Home Repairs in Reno"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.repairs_rot}
      heroAlt="Dry rot and structural damage 30-year-old Reno home BRE Builders"
      excerpt="Reno homes built in the 1990s are now entering the critical repair window — galvanized pipes corroding, decks failing structurally, foundation movement compounding. Here's what to inspect."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Deck Construction & Repair', href: '/services/decks' },
      ]}
      relatedPosts={[
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_foundation, alt: '20 year home repairs', category: 'Structural Repairs' },
        { title: '10-Year Reno Home Oversights', href: '/blog/reno-home-10-year-maintenance', img: IMGS.svc_repair, alt: '10 year home maintenance', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>A 30-year-old Reno home built in the mid-1990s was constructed to codes that have since been significantly updated — in seismic requirements, energy efficiency standards, electrical safety, and structural engineering. The original major building systems have cycled through at least one full replacement. And three decades of Reno&apos;s climate have tested every component of the structure. Here is what BRE Builders finds in 30-year-old Reno homes — and what to prioritize.</p>

          <BlogImage
            src={IMGS.repairs_mine}
            alt="Structural wall assessment 30-year-old home BRE Builders Reno NV"
            caption="Structural wall assessment — 30-year-old homes require comprehensive review of all framing systems"
            priority
          />

          <h2>Electrical: Panel and Wiring Assessment</h2>
          <p>Homes built in the mid-1990s typically have 100–150 amp electrical service. Modern households with EV charging, heat pumps, and high-demand appliances often require 200 amp service. Have the panel assessed by a licensed electrician. Look for: aluminum wiring (common in some 1990s construction — requires special connectors and periodic inspection), AFCI protection requirements on updated circuits, and any Federal Pacific Stab-Lok or Zinsco panels (both have documented safety issues and should be replaced).</p>

          <h2>Structural: Code Evolution Since 1995</h2>
          <p>Seismic requirements in Northern Nevada have been updated since the mid-1990s. If your home was built before current IRC shear wall requirements were adopted locally, it may have structural deficiencies that would not have been permitted under today&apos;s code. This does not require immediate remediation in all cases, but it is worth knowing — particularly if you are in a liquefaction-risk zone or if the home sits on a hillside.</p>

          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Foundation repair 30-year-old home Reno NV BRE Builders licensed structural contractor"
            caption="Foundation repair on a 30-year-old Reno home — three decades of clay soil movement accumulates"
          />

          <h2>Plumbing: Supply Line Materials</h2>
          <p>1990s Reno homes used a variety of supply line materials — copper (excellent, but may have pinhole leaks now in areas with aggressive water chemistry), galvanized steel (should be replaced), polybutylene (recall material — should be replaced if still present), and early CPVC. Have a licensed plumber assess your supply piping. Reno&apos;s water chemistry is moderately aggressive to copper and accelerates pinhole formation at fittings.</p>

          <BlogPullQuote>
            Thirty years is the point where a home&apos;s original construction decisions — good and bad — have fully revealed themselves. What was deferred in the first two decades is now visible damage.
          </BlogPullQuote>

          <h2>HVAC: Second or Third Generation Equipment</h2>
          <p>A 30-year-old home is on its second or third HVAC system. This is the time to consider a full mechanical system update — moving from gas forced-air to a high-efficiency heat pump system, adding zoning controls, and improving duct sealing. Reno&apos;s natural gas prices and the availability of NV Energy rebates for heat pump installation make this transition economically favorable for many homeowners.</p>

          <h2>Windows and Doors: Major Energy Loss</h2>
          <p>Original windows from 1994–1996 are single-pane in many cases, or early dual-pane units that are now well past their seal life. Window replacement in a 30-year-old Reno home typically reduces heating and cooling costs by 15–25% — a meaningful return in Reno&apos;s climate. Modern vinyl or fiberglass frames require essentially no maintenance and carry 20–30 year warranties.</p>

          <h2>The Remodel vs. Repair Decision</h2>
          <p>At 30 years, many homeowners face the question of whether to repair and update incrementally or to undertake a more comprehensive renovation. BRE Builders works with homeowners on both paths. We can provide a comprehensive assessment of your home&apos;s current condition, an honest evaluation of what targeted repairs will achieve, and — when it makes sense — a scope for renovation work that addresses multiple systems at once and produces better outcomes than piecemeal repair.</p>

          <h2>BRE Builders — 30-Year Home Assessment in Reno</h2>
          <p>BRE Builders provides structural and repair assessments for 30-year-old homes throughout the Reno-Sparks metro, Carson City, Lake Tahoe, and Northern California. Licensed NV #0085999 · CA #1093798. Free consultation, 24-hour response.</p>
        </div>
      }
    />
  )
}
