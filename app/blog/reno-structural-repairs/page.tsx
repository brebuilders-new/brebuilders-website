import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
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
          <p>Structural repair is one of the most technically demanding services in residential construction — and one of the most consequential. A botched repair can mask an active problem while it continues to worsen. BRE Builders has provided structural repair services in Reno, Sparks, Lake Tahoe, and Northern Nevada since 1989. Here is what sets our approach apart.</p>

          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Foundation repair Reno NV BRE Builders licensed structural contractor"
            caption="Foundation assessment and repair — BRE Builders, Reno NV, licensed since 1989"
            priority
          />

          <h2>We Diagnose Before We Recommend</h2>
          <p>The most common problem in the structural repair industry is over-recommendation — contractors who sell the most expensive solution rather than the right one. BRE Builders has a 35-year track record of recommending the repair that actually fixes the problem, not the repair with the highest margin. We will tell you when a crack is cosmetic and when it is structural. We will tell you when a problem needs immediate intervention and when it can be monitored. That transparency is what keeps our clients coming back across decades.</p>

          <BlogPullQuote>
            BRE Builders has been diagnosing structural problems in Reno homes since 1989 — before many of the properties we inspect today were even built.
          </BlogPullQuote>

          <h2>Reno-Specific Structural Challenges</h2>
          <p>Reno sits on expansive clay soils — soils that swell significantly when wet and shrink when dry. This seasonal movement puts cyclic stress on foundations that accumulates over decades. Combined with Reno&apos;s freeze-thaw cycling, high UV exposure, and irrigation-season saturation, Northern Nevada homes experience structural loads that many contractors from other regions underestimate. Our team has assessed thousands of homes in this specific environment and understands the failure patterns it produces.</p>

          <BlogImage
            src={IMGS.repairs_rot}
            alt="Dry rot structural damage exposed wall panel BRE Builders Reno NV"
            caption="Extensive dry rot exposure — this wall panel required full framing replacement"
          />

          <h2>Self-Performed Work</h2>
          <p>BRE Builders self-performs structural repair work — we do not broker it to unlicensed subcontractors. Our field crews are experienced carpenters and concrete workers with direct experience in foundation repair, framing repair, dry rot remediation, and waterproofing. When you hire BRE Builders, the people who show up are our employees, not day laborers sourced from a staffing agency.</p>

          <h2>Foundation Repair Capabilities</h2>
          <p>Our foundation repair services include crack injection (epoxy and polyurethane), helical pier installation, carbon fiber strap installation for bowing walls, drainage correction, and crawlspace encapsulation. We work with licensed structural engineers when the project scope requires stamped plans — which is required for any permitted structural repair in Washoe County and the City of Reno.</p>

          <BlogImage
            src={IMGS.repairs_deck_lt}
            alt="Structural reinforcement steel bracket system Lake Tahoe deck BRE Builders"
            caption="Steel bracket reinforcement system — BRE Builders Lake Tahoe structural repair"
          />

          <h2>Response Time</h2>
          <p>Structural concerns are not something to schedule for next month. BRE Builders responds to structural repair inquiries within 24 hours and can typically schedule a site visit within 48–72 hours. We provide free structural assessments for homeowners throughout the Reno-Sparks metro, Carson City, Lake Tahoe, and Truckee areas.</p>

          <h2>Free Structural Assessment — Reno, NV</h2>
          <p>If you have noticed cracks, settling, soft floors, sticking doors, or any of the other warning signs of structural damage, contact BRE Builders for a free assessment. We are licensed in Nevada (#0085999) and California (#1093798) and have been serving Northern Nevada homeowners since 1989.</p>
        </div>
      }
    />
  )
}
