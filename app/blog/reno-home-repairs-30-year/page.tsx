import type { Metadata } from 'next'
import BlogTemplate, { BlogImage } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "30-Year-Old Home Repairs in Reno — Critical Issues to Inspect | BRE Builders",
  description: "30-year-old Reno homes from the 1990s face compounding structural issues — galvanized pipe corrosion, aluminum wiring, unsafe deck framing, foundation movement. BRE Builders repair guide.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=30-Year-Old+Reno+Home+Repairs&sub=Critical+Issues+in+1990s+Reno+Homes&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/reno-home-repairs-30-year-old-house/' },
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
          <p>Reno homes from the 1990s are now 30 years old — and entering the repair window where problems that were manageable at 20 years become structural liabilities at 30. The construction practices of the 1990s had specific shortcomings that BRE Builders sees repeatedly in homes of this vintage. Here&apos;s what matters most.</p>

          <h2>1. Galvanized Pipe Corrosion</h2>
          <BlogImage
            src="https://brebuilders.com/wp-content/uploads/Galvanized-Pipe-Corrosion.jpg"
            alt="Galvanized pipe corrosion 30-year Reno home plumbing failure"
            caption="Galvanized pipe corrosion — common in Reno homes built before 1995."
          />
          <p>Homes built before the mid-1990s often used galvanized steel supply pipes. Galvanized pipe has a 40–50 year service life in ideal conditions — but Reno&apos;s mineral-heavy water accelerates interior corrosion significantly. At 30 years, galvanized pipes in Reno homes are commonly corroded to 30–50% of their original interior diameter, reducing water pressure, discoloring water, and approaching failure at elbows and connections. Whole-house repiping with PEX or copper is the correct solution — not spot repairs on failing galvanized.</p>

          <h2>2. Foundation Movement — Cumulative</h2>
          <p>Three decades of Reno&apos;s expansive clay soil movement, freeze-thaw cycles, and seasonal saturation have created cumulative foundation stress that is now measurable in structure performance. Doors and windows that no longer operate smoothly, visible sag in floor systems, and persistent drywall cracking that keeps returning after repair are all signs that the foundation has moved beyond the cosmetic-repair threshold. Structural assessment and pier installation may be warranted.</p>

          <h2>3. Unsafe Deck Framing</h2>
          <BlogImage
            src="https://brebuilders.com/wp-content/uploads/Unsafe-Deck-Framing.jpg"
            alt="Unsafe deck framing 30-year-old Reno home structural issue"
            caption="30-year-old deck framing — ledger rot, corroded hardware, failing post bases."
          />
          <p>1990s deck construction in Reno frequently used undersized hardware, inadequate ledger attachments, and wood species that have now degraded at connections. The ledger-to-house connection is the single most critical point — decks collapse at the ledger, not in the middle. At 30 years, joist hanger nailing may have corroded, ledger lag bolts may have withdrawn, and the rim joist behind the ledger may have rotted. BRE Builders has condemned and replaced decks that looked visually acceptable but had zero structural capacity remaining at the ledger.</p>

          <h2>4. Roof Age</h2>
          <BlogImage
            src="https://brebuilders.com/wp-content/uploads/Rusty-Furnace-Damage.jpg"
            alt="Aging roof and HVAC failure 30-year Reno home"
            caption="30-year-old mechanical systems — roof and HVAC replacement often go hand-in-hand."
          />
          <p>Standard 3-tab asphalt shingles have a 20–25 year life in Reno&apos;s UV and temperature-swing environment. A 30-year-old roof on a Reno home is past its design life regardless of visible condition. Granule loss, brittle tabs, and failed flashing create leak pathways that are often missed until water intrusion is visible inside. A new roof is not optional at 30 years — it&apos;s deferred maintenance with compounding risk.</p>

          <h2>5. Aluminum Wiring Risk</h2>
          <p>Some Reno homes built in the late 1980s and early 1990s have aluminum branch circuit wiring — used briefly when copper prices spiked. Aluminum wiring expands and contracts more than copper under load, loosening connections at outlets and switches over time. Loose aluminum wiring connections are a fire risk. If your home has aluminum branch wiring, all connections must be treated with anti-oxidant compound and terminated with CO/ALR-rated devices or copper pigtails. BRE Builders can assess and remediate aluminum wiring connections.</p>

          <h2>6. Compacted Attic Insulation</h2>
          <p>Original blown-in fiberglass or cellulose insulation from the 1990s has compressed over 30 years from gravity and foot traffic during any attic work. What started as R-30 may now be performing at R-15 or less. Reno&apos;s temperature extremes — 105°F summers and sub-20°F winter nights — mean attic insulation performance directly impacts heating and cooling costs. Assessment and top-up or replacement of attic insulation is a high-ROI improvement in 30-year Reno homes.</p>

          <h2>7. Ceiling Texture Failure</h2>
          <p>Knockdown and popcorn ceiling textures applied in the 1990s delaminate over time, especially in areas with moisture history or HVAC diffuser discharge directly onto the ceiling. Delaminating texture is a cosmetic issue — unless the source is an active moisture problem above, in which case it&apos;s a diagnostic signal. Popcorn texture applied before 1980 may contain asbestos; 1990s applications are typically asbestos-free but should be tested if disturbing.</p>

          <h2>8. Rodent Entry Points</h2>
          <p>After 30 years, gaps have developed at every penetration in the building envelope — pipe entries, conduit penetrations, soffit vents, foundation vents. These are entry points for Reno&apos;s significant rodent population (mice and roof rats are common). Rodent activity in walls and attics creates insulation damage, electrical hazard from chewed wires, and moisture issues from urine. A 30-year home needs a full envelope inspection and sealing as part of any major repair project.</p>

          <h2>BRE Builders — Reno Structural Repairs Since 1989</h2>
          <p>BRE Builders has been repairing 1990s-era Reno homes for over 35 years. We know this construction vintage — the shortcuts, the material failures, and the specific climate-driven damage patterns. Free structural estimates. Licensed NV #0085999 · CA #1093798.</p>
        </div>
      }
    />
  )
}
