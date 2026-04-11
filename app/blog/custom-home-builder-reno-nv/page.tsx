import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Custom Home Builder Reno NV — What It Actually Costs in 2026',
  description: 'Real costs, timelines, and permit requirements for custom home construction in Reno, NV. BRE Builders — licensed custom home builder since 1989. NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Custom+Home+Builder+Reno+NV&sub=Real+Costs+%C2%B7+Timelines+%C2%B7+2026+Guide&badge=Custom+Homes`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Custom Home Builder Reno NV — What It Actually Costs in 2026', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Home Builder Reno NV — What It Actually Costs in 2026',
    description: 'Real costs, timelines, and permit requirements for custom home construction in Reno, NV. BRE Builders — licensed custom home builder since 1989. NV #008599',
    images: [{ url: `${SITE_URL}/api/og?title=Custom+Home+Builder+Reno+NV&sub=Real+Costs+%C2%B7+Timelines+%C2%B7+2026+Guide&badge=Custom+Homes`, alt: 'Blue Reef Builders — Custom Home Builder Reno NV — What It Actually Costs in 2026' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/custom-home-builder-reno-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Custom Home Builder Reno NV — What It Actually Costs in 2026',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2026-04-01',
      image: IMGS.svc_custom_home,
      url: `${SITE_URL}/blog/custom-home-builder-reno-nv/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a custom home cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: "Custom homes in Reno NV typically start at $350,000 for a basic design-build and range to $1M+ for luxury finishes. Most BRE Builders custom home clients budget $500,000–$800,000 for a 2,000–3,500 sq ft home including lot preparation." } },
        { '@type': 'Question', name: 'How long does it take to build a custom home in Reno?', acceptedAnswer: { '@type': 'Answer', text: "From permit application to move-in, custom home construction in Reno NV typically takes 12–18 months. Design and permitting takes 3–5 months. Construction takes 8–14 months depending on size and complexity." } },
        { '@type': 'Question', name: 'Do I need a licensed contractor to build a custom home in Nevada?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Nevada law requires a licensed general contractor for any construction project over $1,000. BRE Builders holds Nevada License #0085999 and California License #1093798." } },
        { '@type': 'Question', name: 'What is a design-build contractor?', acceptedAnswer: { '@type': 'Answer', text: "A design-build contractor handles both the architectural design and construction under one contract. BRE Builders offers in-house design-build for custom homes in Reno, Sparks, Carson City, and Lake Tahoe." } },
        { '@type': 'Question', name: 'Can BRE Builders build a custom home in California?', acceptedAnswer: { '@type': 'Answer', text: "Yes. BRE Builders holds California License #1093798 and builds custom homes in Truckee, Graeagle, and Northern California." } },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function CustomHomeBuilderRenoPage() {
  return (
    <BlogTemplate
      title="Custom Home Builder Reno NV — What It Actually Costs in 2026"
      category="Custom Homes"
      heroImage={IMGS.svc_custom_home}
      heroAlt="Custom Home Construction Reno NV — BRE Builders Licensed General Contractor Since 1989"
      excerpt="Real costs, timelines, and what to expect from the custom home building process in Reno, NV and Northern Nevada. Verified data from 35+ years of licensed construction."
      schema={schema}
      relatedServices={[
        { label: 'Custom Home Building', href: '/services/new-home-builds' },
        { label: 'Home Additions', href: '/services/additions' },
        { label: 'ADU Construction', href: '/services/adu' },
      ]}
      relatedPosts={[
        { title: 'How to Add an ADU in Nevada Without Breaking the Bank', href: '/blog/how-to-add-an-adu-in-nevada', img: IMGS.adu_main, alt: 'ADU construction Reno NV', category: 'ADU' },
        { title: 'Home Addition Cost in Reno NV — 2026 Guide', href: '/blog/home-addition-cost-reno-nv', img: IMGS.svc_addition, alt: 'Home addition Reno NV', category: 'Additions' },
      ]}
      content={
        <div>
          <p>Building a custom home in Reno, NV is one of the largest financial decisions a family will make. The Northern Nevada market has changed significantly since 2020 — land costs have increased, labor costs have risen, and permit timelines have shifted. This guide gives you accurate, verified information about what custom home construction actually costs in Reno in 2026, based on BRE Builders&apos; direct experience building across Washoe County, Carson City, and Lake Tahoe.</p>

          <BlogImage
            src={IMGS.svc_custom_home}
            alt="Custom home construction Reno NV — ground-up design-build by BRE Builders licensed contractor NV #0085999"
            caption="Custom Home Construction — BRE Builders, Reno NV · Licensed Since 1989"
            priority
          />

          <h2>Custom Home Costs in Reno NV — 2026 Data</h2>
          <p>Custom home construction costs in Reno NV currently run $175–$350 per square foot for the building itself, depending on design complexity, site conditions, and finish level. A 2,500 sq ft custom home at mid-range finishes — granite counters, engineered hardwood, standard cabinetry — runs $450,000–$650,000 in today&apos;s market. High-end finishes with custom millwork, imported tile, and premium fixtures push costs to $250–$350 per square foot.</p>
          <p>These figures cover foundation, framing, roofing, windows, exterior siding, all mechanical systems (HVAC, plumbing, electrical), insulation, drywall, flooring, cabinetry, appliances, and interior finishes. They do not include land, lot clearing, utility connections, landscaping, or driveway work — all of which add $30,000–$150,000 depending on the site.</p>

          <BlogPullQuote>
            Most BRE Builders custom home clients in Northern Nevada budget $500,000–$800,000 for a 2,000–3,500 sq ft home — including design, permits, and construction, excluding land.
          </BlogPullQuote>

          <h2>The Custom Home Process in Reno — Step by Step</h2>
          <p>Understanding the sequence of a custom home build prevents surprises. Here is the actual process BRE Builders follows for every ground-up custom home in Nevada and California.</p>

          <h3>Phase 1: Design (2–4 months)</h3>
          <p>Every custom home starts with a design phase. BRE Builders offers in-house design-build — meaning our team handles architectural design and construction under one contract. You work directly with our design team to develop floor plans, elevations, and specifications. This phase produces permit-ready architectural drawings. Clients who come to us with existing architect-drawn plans can skip directly to permit submission.</p>

          <h3>Phase 2: Permitting (1–3 months)</h3>
          <p>Permit timelines in Washoe County and the City of Reno have improved significantly since 2022. Most custom home permits in Reno are approved within 6–10 weeks of a complete application submission. Carson City runs slightly faster. Lake Tahoe — under the Tahoe Regional Planning Agency — has additional environmental review requirements that add 2–4 months to the permitting timeline. BRE Builders prepares and submits all permit documentation and manages plan check corrections.</p>

          <h3>Phase 3: Construction (8–14 months)</h3>
          <p>Construction begins after permit issuance. The sequence: site preparation and foundation, framing, roofing and waterproofing, rough mechanical (HVAC, plumbing, electrical), insulation and drywall, finish mechanical, flooring and tile, cabinetry and millwork, painting, trim, fixtures and appliances, final inspections. BRE Builders provides a detailed construction schedule at contract signing — clients receive milestone updates throughout.</p>

          <h2>What Makes a Good Custom Home Builder in Reno</h2>
          <p>Reno has no shortage of contractors who will take a custom home contract. The difference in outcomes comes down to three things: license verification, local permit experience, and subcontractor relationships.</p>
          <p>Nevada requires a valid contractor&apos;s license for all construction over $1,000. Verify any contractor at the Nevada State Contractors Board (nvcontractorsboard.com) before signing anything. BRE Builders holds Nevada License #0085999 — active since 1989. California License #1093798 covers our Northern California projects.</p>
          <p>Local permit experience matters. A contractor who has pulled 50 permits in Washoe County knows exactly what the plan checkers look for, which saves weeks on revisions. BRE Builders has been pulling permits in Reno and Washoe County for over 35 years.</p>
          <p>Subcontractor relationships determine schedule reliability. In a tight labor market — which Reno has been since 2021 — contractors with established relationships with electricians, plumbers, and framers get priority scheduling. Those without them get whoever is available, which drives delays.</p>

          <BlogImage
            src={IMGS.ripon[0]}
            alt="Luxury custom home classical architecture — BRE Builders licensed general contractor CA #1093798"
            caption="Luxury Custom Home — Classical Architecture, Ripon CA · BRE Builders"
          />

          <h2>Custom Home vs Production Home in Reno</h2>
          <p>Production homes — built by volume builders like Lennar, KB Home, or DR Horton in Reno&apos;s master-planned communities — typically sell for $450,000–$700,000 for 1,800–3,000 sq ft. Custom homes cost more per square foot but give you complete control over design, site selection, materials, and layout. The break-even point is typically around 2,500 sq ft — above that size, a custom home often competes favorably with production home pricing while delivering a substantially better product.</p>

          <h2>Reno vs Lake Tahoe Custom Home Costs</h2>
          <p>Lake Tahoe custom home construction runs 20–35% higher than Reno due to TRPA environmental review, stricter building standards, higher material transportation costs, and limited qualified subcontractor availability in the basin. A home that costs $600,000 to build in Reno would typically cost $720,000–$810,000 at Lake Tahoe. BRE Builders builds in both markets — NV #0085999 covers Nevada, CA #1093798 covers the California side of the lake.</p>

          <h2>Get a Free Custom Home Consultation</h2>
          <p>BRE Builders offers free custom home consultations for property owners in Reno, Sparks, Carson City, Lake Tahoe, Truckee, and Northern California. We review your lot, discuss design options, and give you a realistic budget range before you commit to anything. Steve Rosenthal — owner and founder — has been building custom homes in Northern Nevada since 1989. Call (775) 391-4517 or submit a project form. Response within 24 hours.</p>
        </div>
      }
    />
  )
}
