import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Deck Builder Reno NV — Cost, Permits & What to Expect in 2026',
  description: 'Deck construction and repair costs in Reno NV and Lake Tahoe. New decks start at $18,000. BRE Builders — licensed deck builder NV #0085999 since 1989.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Deck+Builder+Reno+NV&sub=Cost%2C+Permits+%26+Timeline+%C2%B7+2026&badge=Decks`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Deck Builder Reno NV — Cost, Permits & What to Expect in 2026', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Deck Builder Reno NV — Cost, Permits & What to Expect in 2026',
    description: 'Deck construction and repair costs in Reno NV and Lake Tahoe. New decks start at $18,000. BRE Builders — licensed deck builder NV #0085999 since 1989.',
    images: [{ url: `${SITE_URL}/api/og?title=Deck+Builder+Reno+NV&sub=Cost%2C+Permits+%26+Timeline+%C2%B7+2026&badge=Decks`, alt: 'Blue Reef Builders — Deck Builder Reno NV — Cost, Permits & What to Expect in 2026' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/deck-builder-reno-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Deck Builder Reno NV — Cost, Permits & What to Expect in 2026',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2026-04-01',
      image: IMGS.svc_deck,
      url: `${SITE_URL}/blog/deck-builder-reno-nv/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: "How much does a deck cost in Reno NV?", acceptedAnswer: { '@type': 'Answer', text: "New deck construction in Reno NV starts at $18,000 for a basic ground-level pressure-treated deck and ranges to $65,000+ for large elevated composite decks. Most Reno deck projects run $25,000-$45,000." } },
        { '@type': 'Question', name: "Do I need a permit to build a deck in Reno NV?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Decks over 30 inches above grade require a permit in Reno and Washoe County. All decks attached to the house require a permit regardless of height. BRE Builders handles all permit submissions." } },
        { '@type': 'Question', name: "How long does deck construction take in Reno?", acceptedAnswer: { '@type': 'Answer', text: "A standard deck takes 1-3 weeks to build once permits are issued. Permitting adds 3-6 weeks. Complex elevated or hillside decks take longer." } },
        { '@type': 'Question', name: "What is the best deck material for Reno's climate?", acceptedAnswer: { '@type': 'Answer', text: "For Reno's high desert climate with hot summers, cold winters, and UV intensity, composite decking (Trex, TimberTech) consistently outperforms pressure-treated wood. Composite requires less maintenance, does not split or splinter, and holds up better through freeze-thaw cycles." } },
        { '@type': 'Question', name: "Does BRE Builders build decks at Lake Tahoe?", acceptedAnswer: { '@type': 'Answer', text: "Yes. BRE Builders builds and repairs decks throughout Lake Tahoe - Nevada and California sides. Lake Tahoe decks require snow-load rated structural design. NV #0085999 and CA #1093798." } },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function DeckBuilderRenoPage() {
  return (
    <BlogTemplate
      title="Deck Builder Reno NV — Cost, Permits & What to Expect in 2026"
      category="Decks"
      heroImage={IMGS.svc_deck}
      heroAlt="Deck construction Reno NV — BRE Builders licensed deck builder NV #0085999"
      excerpt="Real 2026 pricing for deck construction in Reno NV and Lake Tahoe. What decks cost, what permits are required, and how to choose the right material for Northern Nevada&apos;s climate."
      schema={schema}
      relatedServices={[
        { label: 'Deck Construction & Repair', href: '/services/decks' },
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Home Additions', href: '/services/additions' },
      ]}
      relatedPosts={[
        { title: 'Deck Safety Warning Signs — Reno & Lake Tahoe', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_arun, alt: 'Deck safety warning signs', category: 'Decks' },
        { title: 'Structural Repair Warning Signs', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Reno&apos;s climate is demanding for outdoor structures. Summers push 100°F with intense UV. Winters drop below freezing. Spring brings freeze-thaw cycles that destroy poorly built decks within 5 years. This guide covers what deck construction actually costs in Reno NV and Lake Tahoe in 2026 — and what separates a deck that lasts 30 years from one that needs replacement in 10.</p>

          <BlogImage
            src={IMGS.svc_deck}
            alt="Deck construction Reno NV — BRE Builders licensed deck builder NV #0085999"
            caption="Deck Construction — BRE Builders, Reno NV · Built for Northern Nevada&apos;s Climate"
            priority
          />

          <h2>Deck Construction Costs in Reno NV — 2026</h2>

          <h3>Ground-Level Deck: $18,000–$28,000</h3>
          <p>A basic ground-level deck (under 30 inches above grade) in pressure-treated lumber, 200–300 sq ft, with a simple rail system runs $18,000–$28,000 in Reno in 2026. Upgrading to composite decking adds $4,000–$8,000 to this range. Ground-level decks under 30 inches above grade still require a permit in most Reno jurisdictions if attached to the home.</p>

          <h3>Elevated or Second-Story Deck: $30,000–$55,000</h3>
          <p>Elevated decks require deeper footings, larger structural members, and more complex railing systems. A 300 sq ft elevated deck with composite decking and cable railing runs $38,000–$52,000 in Reno. Hillside decks — common in the foothills west of Reno and throughout Lake Tahoe — add structural complexity and cost due to the longer post runs and engineering requirements.</p>

          <h3>Large Custom Deck: $55,000–$100,000+</h3>
          <p>Large decks (500+ sq ft) with multiple levels, built-in seating, pergolas, outdoor kitchen rough-in, or complex site conditions run $55,000–$100,000+. These projects typically involve a structural engineer for the footing and framing design and take 3–5 weeks to build after permits are issued.</p>

          <BlogPullQuote>
            The cheapest deck BRE Builders has ever replaced was one built without a permit and without pressure-treated footings. It lasted 6 years. The replacement cost more than a properly built deck would have cost originally.
          </BlogPullQuote>

          <h2>Best Decking Materials for Reno&apos;s Climate</h2>

          <h3>Composite Decking (Recommended)</h3>
          <p>Trex, TimberTech, and Fiberon composite decking products are the right choice for Reno&apos;s high desert climate. They do not split, splinter, or check under UV exposure. They do not absorb moisture through freeze-thaw cycles. They require no annual sealing or staining. The upfront cost is 30–50% more than pressure-treated lumber — the 25-year lifespan versus 10–15 years for wood makes composite the better value in nearly every case.</p>

          <h3>Pressure-Treated Lumber</h3>
          <p>Pressure-treated lumber is appropriate for deck framing and structural members — BRE Builders uses it for all structural components regardless of what decking material is selected. As a surface decking material in Reno&apos;s climate, pressure-treated wood requires annual sealing, splits within 3–5 years in most cases, and develops a weathered gray appearance without consistent maintenance. It is appropriate for lower-budget projects with realistic expectations about maintenance requirements.</p>

          <h3>Redwood and Cedar</h3>
          <p>Naturally rot-resistant wood species perform better than pressure-treated pine in Reno&apos;s climate but cost 40–70% more. Old-growth redwood is largely unavailable — most &quot;redwood&quot; decking today is plantation-grown with less natural rot resistance than the old-growth material. Cedar performs well with proper sealing and is a legitimate option for clients who prefer natural wood aesthetics.</p>

          <h2>Deck Permits in Reno and Washoe County</h2>
          <p>The City of Reno, City of Sparks, Washoe County, and Carson City all require permits for decks attached to the home or elevated more than 30 inches above grade. The permit process includes a site plan, framing plan, footing design, and specifications for guardrail and connection hardware. BRE Builders prepares all permit documentation. Plan review typically takes 3–6 weeks. Permit fees for a standard residential deck in Reno run $400–$1,200.</p>

          <h2>Lake Tahoe Deck Requirements</h2>
          <p>Decks at Lake Tahoe — on both the Nevada and California sides — face additional requirements beyond standard Reno permitting. Snow loads at Lake Tahoe can reach 200 lbs per square foot. Structural members must be sized for this load — decks built to Reno standards will fail under Tahoe snow loads. BRE Builders designs all Lake Tahoe decks to current TRPA and county structural requirements. NV #0085999 covers the Nevada side · CA #1093798 covers the California side.</p>

          <BlogImage
            src={IMGS.repairs_arun}
            alt="Hillside deck structural repair Lake Tahoe NV — reinforced support beams by BRE Builders NV #0085999"
            caption="Hillside Deck Structural Repair — Lake Tahoe NV · Snow-Load Rated"
          />

          <h2>Deck Repair vs. Replacement in Reno</h2>
          <p>BRE Builders assesses every deck repair request with one question: is the structural framing sound? Surface boards, railings, and stairs can be replaced at reasonable cost. If the ledger board, posts, beams, or joists are rotted, insect-damaged, or undersized, the cost of proper repair often approaches or exceeds replacement cost. We give homeowners an honest assessment — if repair makes sense, we repair it. If replacement is the better value, we say so.</p>

          <h2>Get a Free Deck Estimate in Reno or Lake Tahoe</h2>
          <p>BRE Builders provides free deck estimates for homeowners across Reno, Sparks, Carson City, Lake Tahoe, and Truckee. We visit your property, assess your site and existing structure, discuss material options, and give you a detailed written estimate. Call (775) 391-4517 or submit a project form. Licensed NV #0085999 · CA #1093798. Response within 24 hours.</p>
        </div>
      }
    />
  )
}
