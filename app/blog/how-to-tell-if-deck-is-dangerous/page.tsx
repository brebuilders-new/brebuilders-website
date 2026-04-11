import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogVideo, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'How to Tell If Your Deck Is Dangerous — 8 Red Flags | BRE Builders',
  description: 'Soft wood, loose railings, popping fasteners, missing flashing. 8 signs your Reno or Lake Tahoe deck is structurally unsafe. Free deck inspection. BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Is+Your+Deck+Safe%3F+8+Red+Flags&sub=Free+Inspection+%C2%B7+BRE+Builders+NV+%230085999&badge=Deck+Safety`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — How to Tell If Your Deck Is Dangerous — 8 Red Flags | BRE Builders', }] },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Tell If Your Deck Is Dangerous — 8 Red Flags | BRE Builders',
    description: 'Soft wood, loose railings, popping fasteners, missing flashing. 8 signs your Reno or Lake Tahoe deck is structurally unsafe. Free deck inspection. BRE Buil',
    images: [{ url: `${SITE_URL}/api/og?title=Is+Your+Deck+Safe%3F+8+Red+Flags&sub=Free+Inspection+%C2%B7+BRE+Builders+NV+%230085999&badge=Deck+Safety`, alt: 'Blue Reef Builders — How to Tell If Your Deck Is Dangerous — 8 Red Flags | BRE Builders' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/how-to-tell-if-deck-is-dangerous/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Tell If Your Deck Is Dangerous — 8 Red Flags',
      description: 'Eight structural warning signs that indicate a deck is unsafe, specific to Reno and Lake Tahoe conditions — snow loads, freeze-thaw cycles, and UV exposure.',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com', logo: { '@type': 'ImageObject', url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp' } },
      datePublished: '2025-08-01',
      dateModified: '2025-10-01',
      image: IMGS.blog_unsafe_deck,
      url: `${SITE_URL}/blog/how-to-tell-if-deck-is-dangerous/`,
      keywords: 'deck safety reno nv, dangerous deck signs, deck inspection lake tahoe, deck structural repair reno, bre builders deck contractors',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.article-lede', 'article h2'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the signs of a structurally dangerous deck?',
          acceptedAnswer: { '@type': 'Answer', text: 'The 8 key warning signs are: posts that tilt or lean, gaps in the ledger board connection, fasteners popping out of wood, missing or damaged flashing, soft or discolored wood around joists, mismatched DIY repairs, pest damage with hollow-sounding wood, and water pooling near support posts. Any one of these warrants immediate professional inspection.' },
        },
        {
          '@type': 'Question',
          name: 'How often should a deck be inspected in Reno or Lake Tahoe?',
          acceptedAnswer: { '@type': 'Answer', text: 'Annually — and more often for decks in Lake Tahoe or higher elevations where snow loads exceed 100 lbs per sq ft. Heavy snow, freeze-thaw cycles, and intense summer UV accelerate structural degradation significantly faster than lower-elevation climates.' },
        },
        {
          '@type': 'Question',
          name: 'Is a wobbly deck railing dangerous?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. A railing that moves with hand pressure is a fall hazard and indicates corroded fasteners, rotted wood anchors, or failed post connections. This is a code violation on decks over 30 inches above grade and should be repaired immediately — not monitored.' },
        },
        {
          '@type': 'Question',
          name: 'What causes deck posts to sink or lean in Nevada?',
          acceptedAnswer: { '@type': 'Answer', text: 'In Northern Nevada, clay soils expand and contract with seasonal moisture — this creates lateral pressure on post footings over time. Footings that were undersized at installation or set in shallow soil are especially vulnerable. Once a post starts moving, the load path of the entire deck structure is compromised.' },
        },
        {
          '@type': 'Question',
          name: 'How much does a deck inspection cost in Reno?',
          acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides free deck safety inspections throughout Reno, Sparks, Carson City, and Lake Tahoe. Licensed NV #0085999. Call (775) 391-4517 to schedule.' },
        },
      ],
    },
  ],
}

export default function DeckDangerPage() {
  return (
    <BlogTemplate
      title="How to Tell If Your Deck Is Dangerous — 8 Red Flags"
      category="Deck Repair"
      publishDate="August 2025"
      heroImage={IMGS.blog_unsafe_deck}
      heroAlt="Unsafe deck framing structural failure Reno NV — BRE Builders licensed deck contractors NV #0085999"
      excerpt="Soft wood underfoot, wobbly railings, fasteners backing out. These are not cosmetic issues. They are signs your deck may be structurally unsafe. 8 red flags every Reno homeowner should check before the season starts."
      schema={schema}
      relatedServices={[
        { label: 'Deck Contractors Reno NV', href: '/services/decks' },
        { label: 'Structural Repairs', href: '/services/repairs' },
      ]}
      relatedPosts={[
        { title: '8 Signs Your Deck Is No Longer Safe', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_deck_lt, alt: 'Deck safety warning signs Lake Tahoe', category: 'Deck Repair' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs', category: 'Structural Repairs' },
        { title: 'Why More Reno Homeowners Trust BRE Builders for Structural Repairs', href: '/blog/reno-structural-repairs', img: IMGS.blog_contractor, alt: 'BRE Builders structural repairs Reno', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Deck collapses happen without warning. The signs were usually there — soft boards, tilting posts, rusted fasteners — but nobody checked. In Reno and Lake Tahoe, where decks face heavy snow loads, freeze-thaw cycles, and intense summer UV, structural degradation happens faster than in most climates. Here are 8 red flags that mean your deck needs immediate inspection.</p>

          <BlogPullQuote>
            The most dangerous failures happen in the structure — ledger boards, posts, and joist connections — not the decking boards you walk on. Surface boards can look fine while the frame underneath is rotting.
          </BlogPullQuote>

          <h2>1. Posts That Shift or Lean</h2>
          <p>Support posts should be perfectly plumb. If any post is tilting, sinking, or pulling away from its base, your entire deck structure is compromised. In Northern Nevada, clay soils expand and contract with seasonal moisture — this creates lateral and vertical pressure on post footings over years. Footings that were undersized at installation are especially vulnerable.</p>

          <BlogImage
            src={IMGS.repairs_arun}
            alt="Deck support post reinforcement and elevated framing repair — BRE Builders Lake Tahoe NV structural deck repair"
            caption="Reinforced support beams and elevated framing — what proper deck structural repair looks like"
          />

          <h2>2. Gaps in the Ledger Connection</h2>
          <p>The ledger board connects your deck to your house. Even a small gap can lead to catastrophic failure under load. Water infiltrates the gap, rots the rim joist, and the deck can pull away from the house entirely. This is the single most common cause of deck collapses in residential construction. A ledger connection should be lag-bolted to solid framing, properly flashed, and sealed — not caulked as an afterthought.</p>

          <h2>3. Fasteners Popping or Backing Out</h2>
          <p>Nails or screws lifting out of wood signal that the wood is losing structural integrity — rot, swelling, or shrinkage is at work underneath. Random patched fasteners in non-uniform patterns are also a sign that previous owners attempted DIY repairs, which typically mask deeper structural issues rather than solving them.</p>

          <BlogImage
            src={IMGS.repairs_deck_lt}
            alt="Steel angle bracket deck reinforcement system — Lake Tahoe deck structural repair BRE Builders"
            caption="Steel bracket reinforcement system used at a Lake Tahoe deck — the right way to address failing connections"
          />

          <h2>4. Missing or Damaged Flashing</h2>
          <p>Flashing between the ledger board and your house prevents water intrusion into the wall assembly. If it is loose, rusted, absent, or improperly installed, water is silently destroying your rim joist and framing — from the inside — over years. Most homeowners never check flashing until the damage is extensive. This is the single most overlooked element in deck maintenance.</p>

          <h2>5. Soft or Discolored Wood Around Joists</h2>
          <p>Dark staining, mushy texture, or spongy feel around joist connections are early indicators of rot. Joists are the structural backbone of your deck — they carry every load placed on the surface. Rot in joists means the frame is compromised and the deck should not be used until professionally assessed.</p>

          <h2>6. Mismatched or DIY Repairs</h2>
          <p>Random screws, patchy boards, non-uniform materials, inconsistent board spacing. Bad repairs often cover structural problems without solving them. If previous owners made visible surface repairs, a professional inspection of the underlying structure is essential before you continue using the deck.</p>

          <h2>7. Pest Damage or Hollow-Sounding Wood</h2>
          <p>Carpenter ants, termites, and boring beetles consume wood fiber without visible external signs until the structure is nearly gone. Tap boards with a hammer — a dull, hollow sound means the wood is compromised inside. This is most common in ground-level decks and shaded areas that stay damp. Pest damage and rot often occur together.</p>

          <h2>8. Water Pooling Near Support Zones</h2>
          <p>Standing water around posts or under the deck causes soil erosion around footings, accelerates post base corrosion, and creates the damp conditions where rot and pests thrive. If water pools consistently after rain or snowmelt, drainage needs to be corrected as part of any repair — not as an afterthought.</p>

          <BlogImage
            src={IMGS.blog_deck_framing}
            alt="Deck framing construction BRE Builders Reno NV — proper structural framing and layout"
            caption="Proper deck framing — every connection point needs to be inspected if any warning signs are present"
          />

          <BlogPullQuote>
            BRE Builders provides free deck safety inspections across Reno, Sparks, Carson City, and Lake Tahoe. If you see any of these signs, call before the season starts — not after something fails. Licensed NV #0085999.
          </BlogPullQuote>

          <h2>Frequently Asked Questions About Deck Safety</h2>

          <h3>Is a wobbly railing dangerous?</h3>
          <p>Yes. A railing that moves with hand pressure is a fall hazard and a code violation on decks over 30 inches above grade. It indicates corroded fasteners, rotted wood anchors, or failed post connections. This should be repaired immediately — not monitored.</p>

          <h3>What causes deck posts to sink or lean in Nevada?</h3>
          <p>Northern Nevada clay soils expand and contract with seasonal moisture, creating cumulative pressure on post footings over years. Footings that were undersized at installation are especially vulnerable. Once a post starts moving, the load path of the entire structure is compromised.</p>

          <h3>How much does a deck inspection cost in Reno?</h3>
          <p>BRE Builders provides free deck safety inspections. If structural repairs are needed, we provide written scope and cost estimate before any work begins. Call <strong>(775) 391-4517</strong> to schedule.</p>
        </div>
      }
    />
  )
}
