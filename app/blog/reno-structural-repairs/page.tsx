import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "Why More Reno Homeowners Trust BRE Builders for Structural Repairs | BRE Builders",
  description: "BRE Builders is Reno's structural repair expert — foundation cracks, sagging floors, damaged joists, load-bearing beam reinforcement. Northern Nevada's harsh conditions require experience. NV #0085999.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Reno+Structural+Repair+Experts&sub=Foundation+%C2%B7+Framing+%C2%B7+Dry+Rot+%C2%B7+NV+%230085999&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/why-more-reno-homeowners-trust-bre-builders-for-structural-repairs/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Why More Reno Homeowners Trust BRE Builders for Structural Repairs",
  author: { '@type': 'Organization', name: 'BRE Builders' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  datePublished: '2025-06-04',
  url: 'https://brebuilders.com/why-more-reno-homeowners-trust-bre-builders-for-structural-repairs/',
}

export default function StructuralRepairsTrustPage() {
  return (
    <BlogTemplate
      title="Why More Reno Homeowners Trust BRE Builders for Structural Repairs"
      category="Structural Repairs"
      publishDate="June 4, 2025"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Foundation repair and structural issues in Reno NV BRE Builders"
      excerpt="What makes BRE Builders the structural repair experts in Reno? Northern Nevada's harsh soil and weather conditions require contractors who understand the specific failure modes in this region — not just general construction experience."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_foundation, alt: '20 year home repairs', category: 'Structural Repairs' },
        { title: '8 Signs Your Deck Is No Longer Safe', href: '/blog/deck-safety-warning-signs', img: IMGS.svc_deck, alt: 'Deck safety warning signs', category: 'Decks' },
      ]}
      content={
        <div>
          <p>BRE Builders, a division of Blue Reef Enterprises, is known for structural repairs that last — especially in Northern Nevada&apos;s harsh soil and weather conditions. We repair the core of your home with Reno-specific experience that generic contractors simply don&apos;t have.</p>

          <h2>What Makes Northern Nevada Structural Repair Different</h2>
          <p>Reno&apos;s geology and climate create structural failure modes that are specific to this region. Expansive clay soils in Spanish Springs, South Meadows, and South Reno expand when wet and contract when dry — creating ongoing foundation movement that compounds year over year. The freeze-thaw cycle at 4,500 feet adds additional stress to concrete, wood connections, and buried elements. UV exposure at high altitude degrades exterior wood faster than at lower elevations. A contractor without direct experience in these conditions will misdiagnose the cause of structural problems — and fix symptoms instead of root causes.</p>

          <h2>Common Structural Problems BRE Builders Fixes in Reno</h2>
          <ul>
            <li><strong>Foundation cracks and bowing walls</strong> — diagonal cracks at window and door corners, step cracking in brick veneer, horizontal cracks in basement or crawlspace walls</li>
            <li><strong>Sagging floors and uneven support beams</strong> — floor bounce, visible sag between joists, doors and windows that stick or won&apos;t latch</li>
            <li><strong>Damaged joists or subflooring from water or mold</strong> — soft spots, spongy floors, visible rot in crawlspace framing</li>
            <li><strong>Load-bearing beam reinforcement</strong> — inadequate original beam sizing, notched or drilled beams compromised by plumbing or electrical</li>
            <li><strong>Settling piers and failing crawlspaces</strong> — post bases corroding, settlement under posts, inadequate vapor barrier allowing moisture damage</li>
          </ul>

          <h2>Top Warning Signs Your Reno Home May Need Structural Repair</h2>
          <p>These are the signs BRE Builders sees most frequently on Reno structural assessment calls:</p>

          <h3>Cracks in Ceilings or Drywall Near Corners</h3>
          <p>Diagonal cracks running from the corners of windows and doors are a classic sign of foundation movement in Reno homes. This pattern is caused by differential settlement — one part of the foundation moving more than another. It&apos;s not just a cosmetic issue. Left unaddressed, the cracks grow and the door and window openings become out of square.</p>

          <h3>Sloping or Bouncy Floors</h3>
          <p>Place a marble on the floor. If it rolls, the floor is sloping — and the cause is almost always a structural issue, not a finish issue. Bouncy floors (spring underfoot when you walk) indicate failed or undersized joist framing that needs reinforcement.</p>

          <h3>Sticking Doors and Windows</h3>
          <p>When a door or window that used to operate smoothly starts sticking or won&apos;t latch, the frame has racked — meaning the rough opening is no longer square. This follows from foundation movement or framing settlement and won&apos;t self-correct.</p>

          <h3>Visible Rot in Crawlspace or Basement</h3>
          <p>Reno&apos;s temperature swings create condensation in crawlspaces even in a dry climate. Poorly vented or unencapsulated crawlspaces accumulate moisture that rots the bottom chord of floor joists and the sill plates. This is invisible from above but critical to catch early.</p>

          <h3>Gaps at the Top of Interior Walls</h3>
          <p>Gaps between the top of interior partition walls and the ceiling indicate the floor above is deflecting under load. This is a framing problem that requires structural assessment, not just patching.</p>

          <h2>BRE Builders Structural Repair Process</h2>
          <p>BRE Builders starts every structural repair with a thorough site assessment — we diagnose the actual cause of the problem before proposing a fix. We won&apos;t sell you a pier if the real problem is a compromised beam. We won&apos;t patch drywall when the issue is foundation movement that will crack the same wall again next season.</p>
          <p>Free structural repair estimates. Licensed NV #0085999 · CA #1093798. Response within 24 hours.</p>
        </div>
      }
    />
  )
}
