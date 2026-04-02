import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "8 Signs Your Deck Is No Longer Safe — Reno & Lake Tahoe | BRE Builders",
  description: "Deck collapses injure hundreds every year. BRE Builders identifies the 8 warning signs that a Reno or Tahoe deck needs immediate inspection or replacement. Licensed NV #0085999.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=8+Signs+Your+Deck+Is+Unsafe&sub=Reno+%26+Lake+Tahoe+Deck+Safety+Guide&badge=Decks`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/deck-safety-warning-signs-reno-lake-tahoe/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "8 Signs Your Deck Is No Longer Safe — Reno & Lake Tahoe",
  author: { '@type': 'Organization', name: 'BRE Builders' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  datePublished: '2025-06-01',
  url: 'https://brebuilders.com/deck-safety-warning-signs-reno-lake-tahoe/',
}

export default function DeckSafetyPage() {
  return (
    <BlogTemplate
      title="8 Signs Your Deck Is No Longer Safe"
      category="Decks"
      publishDate="June 2025"
      heroImage={IMGS.repairs_deck_lt}
      heroAlt="Deck structural repair Lake Tahoe Reno NV BRE Builders reinforcement"
      excerpt="Deck collapses injure hundreds of people every year — and most happen on decks that looked visually acceptable. The structural failures are invisible from above. BRE Builders identifies the 8 warning signs that a Reno or Lake Tahoe deck needs immediate attention."
      schema={schema}
      relatedServices={[
        { label: 'Deck Construction & Repair', href: '/services/decks' },
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Lake Tahoe Contractor', href: '/service-areas/lake-tahoe' },
      ]}
      relatedPosts={[
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_foundation, alt: '20 year home repairs', category: 'Structural Repairs' },
        { title: 'Why More Reno Homeowners Trust BRE Builders', href: '/blog/reno-structural-repairs', img: IMGS.repairs_foundation, alt: 'BRE Builders structural repairs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <BlogImage
            src="https://brebuilders.com/wp-content/uploads/Framing-and-Bench-Layout-Stage.jpg"
            alt="Deck framing structural inspection BRE Builders Reno NV Lake Tahoe"
            caption="Deck framing — the structure beneath the surface is where failure begins."
            priority
          />
          <p>A deck failure can happen without warning — and in Reno and Lake Tahoe, where snow loads, freeze-thaw cycles, and UV exposure are extreme, decks deteriorate faster than in milder climates. BRE Builders has repaired and reinforced hundreds of decks across Northern Nevada. Here are the 8 signs that mean yours needs professional attention now.</p>

          <BlogImage
            src={IMGS.repairs_deck_lt}
            alt="Lake Tahoe deck reinforcement steel angle bracket system BRE Builders"
            caption="Steel angle bracket reinforcement system — Lake Tahoe deck repair by BRE Builders"
            priority
          />

          <h2>1. Soft or Spongy Decking Boards</h2>
          <p>Press your foot firmly on each deck board. Any give, sponginess, or flex beyond normal indicates rot has started in that board. In Reno and Tahoe, this typically starts at board ends and any area where water pools. Soft boards mean the rot has consumed enough of the wood fiber to lose structural integrity — they can fail underfoot. Replace affected boards immediately and inspect the joists beneath them.</p>

          <h2>2. Visible Rot at the Ledger Board</h2>
          <p>The ledger board is the board bolted to your house where the deck attaches. It is the single most critical connection on the entire structure. If water has been getting behind it — which happens when flashing fails or is absent — rot in the ledger can cause catastrophic deck collapse with no warning. Pull back any siding or trim and probe the ledger with a screwdriver. If it sinks in easily, the wood has lost its integrity.</p>

          <BlogPullQuote>
            The ledger-to-house connection is where most deck collapses originate. A failed ledger gives zero warning before failure.
          </BlogPullQuote>

          <h2>3. Corroded or Missing Fasteners</h2>
          <p>Galvanized fasteners in Reno&apos;s alkaline soil and freeze-thaw conditions have a lifespan of 15–25 years. Stainless steel lasts longer but still requires inspection. Look for rust staining on the decking surface (indicates corroding fasteners below), loose or missing joist hangers, and any connection hardware that is cracked or bent. In Tahoe snow-load zones, hardware that is undersized for the load is a code and safety issue regardless of corrosion.</p>

          <h2>4. Posts That Rock or Lean</h2>
          <p>Deck posts should be perfectly plumb and completely rigid. Any movement, lean, or rocking means the post-to-beam connection, the post base connection, or the concrete footing below has failed. Posts that sit in or near soil (rather than on concrete piers elevated above grade) are almost always rotting at the base — even if they look fine from above. Push each post by hand. It should not move at all.</p>

          <BlogImage
            src={IMGS.repairs_arun}
            alt="Deck repair reinforced support beams elevated framing hillside Lake Tahoe BRE Builders"
            caption="Hillside deck repair — reinforced support beams and elevated framing by BRE Builders"
          />

          <h2>5. Deck Moves or Shakes When Walking</h2>
          <p>A structurally sound deck should feel completely solid. If you feel the deck move, sway, or vibrate when walking — particularly when others are also on it — the structural framing has failed somewhere. This is often a diagonal bracing issue (most residential decks lack adequate lateral bracing), a ledger connection failure, or post-to-beam connection failure. Do not use the deck until it has been inspected.</p>

          <h2>6. Boards Have Separated, Warped, or Lifted</h2>
          <p>Reno&apos;s temperature range — routinely from 10°F to 105°F — causes wood to expand and contract significantly across seasons. Over time this creates cupping (boards curving upward at the edges), checking (surface cracks along the grain), and splitting. These are not cosmetic issues: cupped boards collect water and accelerate rot. Checked boards have weakened significantly. Any board that is tripping-hazard lifted at one end needs replacement.</p>

          <h2>7. Structural Hardware Is Undersized for Snow Load</h2>
          <p>If your deck is in a Tahoe or mountain area snow zone, it must be engineered for the local ground snow load — which can be 200+ lbs per square foot in parts of the Sierra. Many decks — especially those built before current codes or by unlicensed contractors — use standard residential hardware that is insufficient for mountain snow loading. This is a life-safety issue. Have the structural hardware reviewed if your deck is in a snow zone.</p>

          <BlogImage
            src={IMGS.deck_charolette}
            alt="Charlotte deck finished smooth sealed surface BRE Builders Reno NV"
            caption="Completed deck replacement by BRE Builders — sealed, safe, and built to local code"
          />

          <h2>8. It Is More Than 20 Years Old and Has Never Been Inspected</h2>
          <p>The average wood deck has a design life of 20–30 years with regular maintenance, and 10–15 years without it. If your deck is older than 20 years and has never had a professional structural inspection, it should be assessed — regardless of how it looks from above. Many serious structural deficiencies are not visible without getting underneath the deck and probing the framing members. BRE Builders provides free deck assessments throughout the Reno, Sparks, Lake Tahoe, and Carson City areas.</p>

          <h2>BRE Builders — Free Deck Inspections</h2>
          <p>BRE Builders provides free structural assessments for decks throughout Northern Nevada and California. If your deck shows any of these signs, call us before it becomes an emergency. Licensed NV #0085999 · CA #1093798. We respond within 24 hours.</p>
        </div>
      }
    />
  )
}
