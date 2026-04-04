import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'How to Tell If Your Deck Is Dangerous — 8 Red Flags | BRE Builders',
  description: 'Soft wood, loose railings, popping fasteners, missing flashing. 8 signs your Reno or Lake Tahoe deck is structurally unsafe. Free deck inspection from BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Is+Your+Deck+Safe%3F+8+Red+Flags&sub=Free+Inspection+%C2%B7+BRE+Builders+NV+%230085999&badge=Deck+Safety`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/how-to-tell-if-deck-is-dangerous/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Tell If Your Deck Is Dangerous — 8 Red Flags',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/how-to-tell-if-deck-is-dangerous/`,
    },
  ],
}

export default function Blog_HowToTellIfDeckIsDangerous() {
  return (
    <BlogTemplate
      title="How to Tell If Your Deck Is Dangerous — 8 Red Flags"
      category="Deck Repair"
      publishDate="August 2025"
      heroImage={IMGS.blog_unsafe_deck}
      heroAlt="Unsafe deck framing Reno NV — BRE Builders licensed deck contractors NV #0085999"
      excerpt="Soft wood underfoot, wobbly railings, fasteners backing out. These are not cosmetic issues — they are signs your deck may be structurally unsafe. 8 red flags every Reno homeowner should check."
      schema={schema}
      relatedServices={[
        { label: 'Deck Contractors Reno NV', href: '/services/decks' },
        { label: 'Structural Repairs', href: '/services/repairs' },
      ]}
      relatedPosts={[
        { title: '8 Signs Your Deck Is No Longer Safe', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_deck_lt, alt: 'Deck safety Lake Tahoe', category: 'Deck Repair' },
        { title: 'Structural Repair Warning Signs', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair signs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Deck collapses happen without warning. The signs were usually there — soft boards, tilting posts, rusted fasteners — but nobody checked. In Reno and Lake Tahoe, where decks face heavy snow loads, freeze-thaw cycles, and intense summer UV, structural degradation happens faster than in most climates. Here are 8 red flags that mean your deck needs immediate inspection.</p>

          <BlogPullQuote>The most dangerous failures happen in the structure — ledger boards, posts, and joist connections — not the decking boards you walk on.</BlogPullQuote>

          <h2>1. Posts That Shift or Lean</h2>
          <p>Support posts should be perfectly plumb. If any post is tilting, sinking, or pulling away from its base, your entire deck structure is compromised. Caused by soil erosion, post base failure, or inadequate footings — all serious structural issues requiring immediate evaluation.</p>

          <h2>2. Gaps in the Ledger Connection</h2>
          <p>The ledger board connects your deck to your house. Even a small gap can lead to catastrophic failure under load. Water infiltrates, rots the rim joist, and the deck can pull away from the house. This is the single most common cause of deck collapses.</p>

          <h2>3. Fasteners Popping or Backing Out</h2>
          <p>Nails or screws lifting out of wood signal that the wood is losing structural integrity — rot, swelling, or shrinkage is at work. Random patched fasteners are also a sign of previous DIY repairs that may have masked deeper issues.</p>

          <h2>4. Missing or Damaged Flashing</h2>
          <p>Flashing between the ledger and house prevents water intrusion. If it is loose, rusted, absent, or improperly installed, water is silently destroying your rim joist and framing. Most homeowners never check this until it is too late.</p>

          <h2>5. Soft or Discolored Wood Around Joists</h2>
          <p>Dark stains, mushy texture, or spongy feel around joist connections are early indicators of rot. Joists are the structural backbone of your deck. Rot here means the frame is compromised and the deck should not be loaded until professionally assessed.</p>

          <h2>6. Mismatched or DIY Repairs</h2>
          <p>Random screws, patchy boards, non-uniform materials. Bad repairs often cover problems without solving them. If previous owners made visible repairs, a professional needs to inspect what lies underneath.</p>

          <h2>7. Pest Damage or Hollow-Sounding Wood</h2>
          <p>Carpenter ants, termites, and boring beetles eat through decks without visible signs until the structure is nearly gone. Tap boards with a hammer — a hollow sound means the wood fiber is compromised inside. Most common in ground-level decks and shaded areas that stay damp.</p>

          <h2>8. Water Pooling Near Support Zones</h2>
          <p>Standing water around posts or under the deck leads to soil erosion, post base corrosion, and accelerated wood decay. If water pools consistently after rain or snowmelt, drainage needs to be corrected before any repair work begins.</p>

          <BlogPullQuote>BRE Builders provides free deck safety inspections across Reno, Sparks, Carson City, and Lake Tahoe. Licensed NV #0085999. Call before the season starts — not after something fails.</BlogPullQuote>
        </div>
      }
    />
  )
}
