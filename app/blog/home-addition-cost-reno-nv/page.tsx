import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Home Addition Cost Reno NV — 2026 Pricing Guide',
  description: 'How much does a home addition cost in Reno NV? Real 2026 data — room additions start at $80,000. BRE Builders licensed home addition contractor NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Home+Addition+Cost+Reno+NV&sub=2026+Pricing+%C2%B7+From+%2480K&badge=Home+Additions`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/blog/home-addition-cost-reno-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Home Addition Cost Reno NV — 2026 Pricing Guide',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2026-04-01',
      image: IMGS.svc_addition,
      url: `${SITE_URL}/blog/home-addition-cost-reno-nv/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: "How much does a home addition cost in Reno NV?", acceptedAnswer: { '@type': 'Answer', text: "Home additions in Reno NV start at $80,000 for a basic room addition and range to $300,000+ for large multi-room additions or second stories. Most single-room additions in Reno run $95,000-$150,000 depending on size and finish level." } },
        { '@type': 'Question', name: "How long does a home addition take in Reno?", acceptedAnswer: { '@type': 'Answer', text: "A single-room addition takes 3-5 months from permit to completion in Reno NV. Larger additions or second-story additions take 5-8 months. Design and permitting add 2-4 months before construction begins." } },
        { '@type': 'Question', name: "Do I need a permit for a home addition in Reno NV?", acceptedAnswer: { '@type': 'Answer', text: "Yes. All home additions in Reno and Washoe County require a building permit. BRE Builders prepares and submits all permit documentation." } },
        { '@type': 'Question', name: "Is it cheaper to add on or move?", acceptedAnswer: { '@type': 'Answer', text: "In Reno's current market, adding on is typically less expensive than moving when you factor in real estate transaction costs, moving costs, and the premium on larger homes. A $120,000 addition adds square footage at roughly $150-$200 per sq ft - well below current Reno resale prices per sq ft." } },
        { '@type': 'Question', name: "Can BRE Builders add a second story to my home?", acceptedAnswer: { '@type': 'Answer', text: "Yes. BRE Builders builds second-story additions in Reno, Sparks, Carson City, and Lake Tahoe. Second-story additions require a structural engineering assessment to verify the existing foundation and wall framing can support the additional load." } },
      ],
    },
  ],
}

export default function HomeAdditionCostRenoPage() {
  return (
    <BlogTemplate
      title="Home Addition Cost Reno NV — 2026 Pricing Guide"
      category="Home Additions"
      heroImage={IMGS.svc_addition}
      heroAlt="Home addition construction Reno NV — BRE Builders licensed contractor NV #0085999"
      excerpt="Real 2026 pricing for home additions in Reno NV. Room additions, second stories, garage expansions — what they cost, how long they take, and what to expect from permits."
      schema={schema}
      relatedServices={[
        { label: 'Home Additions', href: '/services/additions' },
        { label: 'ADU Construction', href: '/services/adu' },
        { label: 'Custom Home Building', href: '/services/new-home' },
      ]}
      relatedPosts={[
        { title: 'How to Add an ADU in Nevada Without Breaking the Bank', href: '/blog/how-to-add-an-adu-in-nevada', img: IMGS.adu_main, alt: 'ADU construction Reno NV', category: 'ADU' },
        { title: 'Custom Home Builder Reno NV — What It Actually Costs', href: '/blog/custom-home-builder-reno-nv', img: IMGS.svc_custom_home, alt: 'Custom home builder Reno NV', category: 'Custom Homes' },
      ]}
      content={
        <div>
          <p>Reno&apos;s housing market has pushed many homeowners to expand rather than move. Adding square footage to your existing home avoids the transaction costs of selling, the competition of buying, and the disruption of relocating. This guide covers what home additions actually cost in Reno NV in 2026 — with verified pricing from BRE Builders&apos; completed projects across Washoe County, Sparks, and Carson City.</p>

          <BlogImage
            src={IMGS.svc_addition}
            alt="Home addition construction Reno NV — room addition by BRE Builders licensed general contractor NV #0085999"
            caption="Home Addition Construction — BRE Builders, Reno NV · Licensed NV #0085999"
            priority
          />

          <h2>Home Addition Costs in Reno NV — 2026</h2>

          <h3>Single Room Addition: $80,000–$150,000</h3>
          <p>A single-room addition — bedroom, office, family room, or sunroom — typically runs $80,000–$150,000 in Reno depending on size, foundation type, and finish level. This includes foundation work, framing, roofing, exterior siding, windows, insulation, drywall, flooring, electrical, and HVAC extension. A 400 sq ft bedroom addition at mid-range finishes runs approximately $95,000–$115,000 in today&apos;s Reno market.</p>

          <h3>Master Suite Addition: $120,000–$200,000</h3>
          <p>A master suite addition includes a bedroom, walk-in closet, and full bathroom. The bathroom adds significant cost — plumbing rough-in, tile work, vanity, and fixtures add $20,000–$40,000 over a basic room addition. Master suite additions are the most common addition type BRE Builders completes in Reno and Sparks.</p>

          <h3>Second Story Addition: $180,000–$350,000</h3>
          <p>Second-story additions are the most complex home addition type. They require a structural engineering assessment of the existing foundation and first-floor framing, temporary living disruption during construction (the roof comes off), and full permitting for both structural and mechanical systems. A full second story above an existing single-story home runs $200–$280 per square foot in Reno — significantly more than a ground-level addition due to the structural complexity.</p>

          <h3>Garage Addition or Expansion: $50,000–$120,000</h3>
          <p>Adding a detached or attached garage runs $50,000–$80,000 for a basic two-car structure. Adding livable space above the garage adds $40,000–$70,000 — this is often a cost-effective way to add a home office, guest suite, or bonus room. Garage additions with livable space above qualify as ADUs under certain configurations — BRE Builders can advise on the most efficient approach for your lot.</p>

          <BlogPullQuote>
            In Reno&apos;s current market, adding on costs roughly $150–$200 per square foot. Buying an existing larger home costs $280–$400 per square foot. The math consistently favors adding on for homeowners who love their location.
          </BlogPullQuote>

          <h2>What Drives Home Addition Cost in Reno</h2>

          <h3>Foundation Type</h3>
          <p>Reno&apos;s soil conditions vary significantly by neighborhood. Most areas support a standard continuous perimeter foundation. Some areas — particularly in older Reno neighborhoods and parts of Sparks — have expansive soils that require engineered foundation solutions. A geotechnical report ($1,500–$2,500) is standard for any addition in Reno and tells you exactly what you&apos;re working with before design begins.</p>

          <h3>Roof Tie-In Complexity</h3>
          <p>How the new roof connects to the existing structure is often the most challenging part of an addition. Simple shed roofs and gable extensions are straightforward. Matching a complex existing roofline with dormers, hips, or multiple pitches adds cost. BRE Builders designs additions to minimize roof complexity — which reduces both cost and future maintenance.</p>

          <h3>HVAC and Electrical Extension</h3>
          <p>Extending your existing HVAC system to cover a new addition requires an assessment of your current system&apos;s capacity. Many Reno homes built in the 1980s and 1990s have HVAC systems running at or near capacity — adding square footage may require an equipment upgrade ($4,000–$9,000) in addition to the ductwork extension ($2,000–$5,000).</p>

          <h2>Permits for Home Additions in Reno NV</h2>
          <p>All home additions in Reno and Washoe County require a building permit. The permit process includes plan submission, structural review (for anything involving load-bearing work), energy compliance documentation, and inspections at foundation, framing, rough mechanical, and final stages. BRE Builders prepares and submits all permit documentation. Permit fees for home additions in Reno typically run $2,000–$5,000 depending on the addition&apos;s value and scope. Plan review takes 4–8 weeks.</p>

          <h2>Add On vs. Move — The Reno Math in 2026</h2>
          <p>The median home price in Reno is approximately $520,000 as of early 2026. Transaction costs for selling and buying (agent commissions, closing costs, moving) run 8–10% of the combined transaction — roughly $80,000–$100,000 for the average Reno homeowner. A $120,000 room addition adds usable space at a significantly lower total cost than moving to a larger home, and you keep the neighborhood, schools, and community you already know.</p>

          <h2>Get a Free Home Addition Estimate in Reno</h2>
          <p>BRE Builders provides free home addition estimates for homeowners across Reno, Sparks, Carson City, and Northern Nevada. We visit your property, assess the existing structure, review your goals, and give you a detailed written estimate. No vague ranges. No surprise fees. Call (775) 391-4517 or submit a project form. Licensed NV #0085999 · CA #1093798. Response within 24 hours.</p>
        </div>
      }
    />
  )
}
