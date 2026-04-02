import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Lake Tahoe Contractor — What to Know Before You Build in 2026',
  description: 'Everything you need to know about hiring a contractor at Lake Tahoe — TRPA permits, snow-load requirements, costs, and licensed contractors for NV and CA. BRE Builders NV #0085999 CA #1093798.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Lake+Tahoe+Contractor&sub=TRPA+Permits+%C2%B7+Snow+Load+%C2%B7+2026+Guide&badge=Lake+Tahoe`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/blog/lake-tahoe-contractor-guide/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Lake Tahoe Contractor — What to Know Before You Build in 2026',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2026-04-01',
      image: IMGS.lt(1),
      url: `${SITE_URL}/blog/lake-tahoe-contractor-guide/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What license does a contractor need to work at Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Lake Tahoe straddles the Nevada-California border. Contractors working on the Nevada side need a Nevada contractor license. The California side requires a California contractor license. BRE Builders holds both — NV #0085999 and CA #1093798 — and is licensed to work on both sides of the lake.' } },
        { '@type': 'Question', name: 'What is TRPA and why does it matter for construction at Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'TRPA stands for Tahoe Regional Planning Agency — a bi-state agency that governs land use and environmental standards throughout the Lake Tahoe Basin. TRPA has jurisdiction over projects on both the Nevada and California sides. Most construction projects at Lake Tahoe require TRPA review in addition to county permits. TRPA review adds 2–6 months to project timelines.' } },
        { '@type': 'Question', name: 'Why is construction more expensive at Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Lake Tahoe construction costs 20–35% more than comparable projects in Reno due to TRPA environmental review requirements, stricter structural standards (snow load, seismic), limited qualified contractor availability in the basin, and higher material transportation costs.' } },
        { '@type': 'Question', name: 'What snow load must Lake Tahoe structures be designed for?', acceptedAnswer: { '@type': 'Answer', text: 'Snow loads at Lake Tahoe can reach 200 lbs per square foot or higher at elevation. All decks, roofs, and structural additions at Lake Tahoe must be designed to meet current snow load requirements for the specific elevation and jurisdiction.' } },
        { '@type': 'Question', name: 'Does BRE Builders work at Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders has completed full home renovations, deck repairs, structural work, and ADU construction at Lake Tahoe on both the Nevada and California sides. NV License #0085999 covers the Nevada side. CA License #1093798 covers the California side including Truckee and South Lake Tahoe.' } },
      ],
    },
  ],
}

export default function LakeTahoeContractorGuidePage() {
  return (
    <BlogTemplate
      title="Lake Tahoe Contractor — What to Know Before You Build in 2026"
      category="Lake Tahoe"
      heroImage={IMGS.lt(1)}
      heroAlt="Lake Tahoe full home renovation — BRE Builders licensed contractor NV #0085999 CA #1093798"
      excerpt="Hiring a contractor at Lake Tahoe is different from anywhere else in Northern Nevada or California. TRPA permits, dual-state licensing, snow-load structural requirements, and why costs run 20–35% higher than Reno."
      schema={schema}
      relatedServices={[
        { label: 'Lake Tahoe Service Area', href: '/service-areas/lake-tahoe' },
        { label: 'Deck Construction & Repair', href: '/services/decks' },
        { label: 'Structural Repairs', href: '/services/repairs' },
      ]}
      relatedPosts={[
        { title: 'Deck Builder Reno NV — Cost, Permits & What to Expect', href: '/blog/deck-builder-reno-nv', img: IMGS.svc_deck, alt: 'Deck builder Reno NV', category: 'Decks' },
        { title: 'Deck Safety Warning Signs — Reno & Lake Tahoe', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_arun, alt: 'Deck safety warning signs', category: 'Decks' },
      ]}
      content={
        <div>
          <p>Building at Lake Tahoe is unlike construction anywhere else in Northern Nevada or California. The combination of TRPA environmental oversight, dual-state licensing requirements, extreme structural loads, and a limited local contractor pool makes Lake Tahoe projects more complex and more expensive than comparable work in Reno or Sacramento. This guide covers what you need to know before hiring a contractor at Lake Tahoe — based on BRE Builders&apos; direct experience completing projects on both sides of the lake since 1989.</p>

          <BlogImage
            src={IMGS.lt(1)}
            alt="Lake Tahoe full home renovation exterior — 695 Lakeview Blvd Zephyr Cove NV by BRE Builders NV #0085999"
            caption="Lake Tahoe Full Home Renovation — 695 Lakeview Blvd, Zephyr Cove NV · BRE Builders"
            priority
          />

          <h2>Licensing Requirements at Lake Tahoe</h2>
          <p>Lake Tahoe sits on the Nevada-California state line, and licensing requirements follow state boundaries. The Nevada side — including Incline Village, Zephyr Cove, Crystal Bay, and Glenbrook — requires a Nevada contractor license. The California side — including South Lake Tahoe, Tahoe City, Kings Beach, and Truckee — requires a California contractor license.</p>
          <p>BRE Builders holds both licenses: Nevada License #0085999 (active since 1989) and California License #1093798. We work on both sides of the lake without subcontracting to out-of-state contractors or carrying unlicensed workers — a common problem in the Tahoe contractor market.</p>
          <p>Before hiring any contractor for a Lake Tahoe project, verify their license for the correct state at nvcontractorsboard.com (Nevada) or cslb.ca.gov (California). An unlicensed contractor at Lake Tahoe creates liability for the homeowner and voids most homeowner&apos;s insurance policies for the project.</p>

          <h2>TRPA — The Tahoe Regional Planning Agency</h2>
          <p>TRPA is a bi-state compact agency that governs land use, environmental standards, and construction activity throughout the Lake Tahoe Basin on both the Nevada and California sides. Most construction projects at Lake Tahoe require TRPA review in addition to county building permits. TRPA jurisdiction covers:</p>
          <p>Coverage calculations — TRPA limits impervious surface (structures, paving, compacted gravel) on each parcel. Adding square footage to a home, building a new deck, or expanding a driveway can trigger TRPA coverage review. Many Lake Tahoe properties are at or near their coverage limits, which can restrict what can be built without removing existing impervious surface.</p>
          <p>Best Management Practices (BMPs) — TRPA requires erosion and sediment control measures on all construction sites. BMP compliance is inspected and must be maintained throughout construction. Non-compliance can result in stop-work orders.</p>
          <p>TRPA review adds 2–6 months to project timelines beyond county permit review. BRE Builders prepares TRPA applications and manages the review process for our Lake Tahoe clients.</p>

          <BlogPullQuote>
            The most common mistake Lake Tahoe homeowners make is hiring a contractor who understands Nevada or California permitting but has never pulled a TRPA permit. TRPA adds 2–6 months and specific design requirements that many contractors are not familiar with.
          </BlogPullQuote>

          <h2>Structural Requirements at Lake Tahoe</h2>
          <p>Lake Tahoe&apos;s elevation and snowfall create structural requirements that far exceed what is required in Reno or most California communities.</p>

          <h3>Snow Load</h3>
          <p>Ground snow loads at Lake Tahoe range from 150 to 250+ lbs per square foot depending on elevation and exposure. Decks, roofs, and additions must be structurally designed to support these loads. A deck designed for Reno&apos;s ground snow load of 30 lbs per square foot will fail catastrophically under Lake Tahoe conditions — this is the root cause of the majority of deck collapses BRE Builders has repaired at the lake.</p>

          <h3>Seismic Design</h3>
          <p>The Lake Tahoe region sits in a seismically active zone. Structural additions, foundation work, and major renovations require seismic design in compliance with the current International Building Code and state-specific amendments. BRE Builders works with licensed structural engineers on all Lake Tahoe projects involving structural modifications.</p>

          <BlogImage
            src={IMGS.repairs_deck_lt}
            alt="Lake Tahoe deck structural repair — steel angle bracket system by BRE Builders NV #0085999"
            caption="Deck Structural Repair — Lake Tahoe NV · Steel Bracket Reinforcement System"
          />

          <h2>Why Lake Tahoe Construction Costs More</h2>
          <p>Construction at Lake Tahoe runs 20–35% higher than comparable projects in Reno. The reasons are specific and verifiable:</p>
          <p>TRPA permitting adds cost through additional application preparation, longer timelines, and BMP compliance requirements throughout construction. County permit fees at both Washoe County (Nevada) and El Dorado, Placer, and Douglas counties (California) are higher than Reno/Sparks for comparable scopes.</p>
          <p>Structural requirements for snow load and seismic design mean heavier structural members, more fasteners, and more complex connection details — all of which cost more than the equivalent Reno-code structure.</p>
          <p>Labor availability is constrained in the Tahoe basin. Qualified tradespeople — especially electricians, plumbers, and structural framers — are scarce year-round and extremely scarce during peak summer construction season. Contractors without established trade relationships at the lake pay premium rates or accept longer lead times.</p>
          <p>Material transportation to lakeside properties, particularly in Glenbrook, Crystal Bay, and the Nevada side where road access can be limited, adds cost for delivery and staging.</p>

          <h2>Best Times to Build at Lake Tahoe</h2>
          <p>The optimal construction window at Lake Tahoe is May through October. Winter construction is possible but adds cost — snow removal, heated enclosures for concrete pours, and reduced worker productivity in cold weather. Deck and exterior work is essentially impossible during heavy snow months. Interior renovation work proceeds year-round with reasonable efficiency.</p>
          <p>BRE Builders plans Lake Tahoe projects to start permit applications in January–February for a May construction start — the timing that maximizes the productive construction window and avoids the peak summer labor crunch.</p>

          <h2>BRE Builders at Lake Tahoe — Completed Projects</h2>
          <p>BRE Builders has completed full home renovations at 695 Lakeview Blvd (Zephyr Cove) and 619 Lakeview Dr (Glenbrook), structural deck repairs throughout the Nevada side, and ADU work at South Lake Tahoe. View the complete portfolio at brebuilders.com/projects.</p>

          <h2>Get a Free Lake Tahoe Contractor Consultation</h2>
          <p>BRE Builders provides free consultations for Lake Tahoe homeowners considering renovation, addition, deck, or structural repair work. We are licensed on both sides of the lake — NV #0085999 and CA #1093798 — and have been working in the Tahoe basin since 1989. Call (775) 391-4517 or submit a project form. Response within 24 hours.</p>
        </div>
      }
    />
  )
}
