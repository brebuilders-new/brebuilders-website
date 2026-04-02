import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
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
          <p>Deck collapses injure hundreds of people every year in the United States — and the most dangerous decks often look structurally sound from above. The wood surface may be in good condition. The railings might feel solid. But the structural failure points are in the connections, framing, and ledger attachment — places you can&apos;t see from the deck surface. BRE Builders performs deck safety inspections across Reno and Lake Tahoe. Here are the 8 signs that require immediate attention.</p>

          <h2>1. Ledger Board Separation</h2>
          <p>The ledger is the board attached to the house that carries half the deck&apos;s load. It is the single most critical structural element on any deck — and the point where most deck collapses originate. Pull back any debris or decking at the house-to-deck connection and look for gaps between the ledger and the house framing, rust staining from corroding hardware, or soft wood that yields under pressure. Any gap, any soft wood, or any visible corrosion at the ledger is an immediate structural concern.</p>

          <h2>2. Soft or Spongy Spots Underfoot</h2>
          <p>Walk the entire deck surface and pay attention to any spots that feel soft or spongy. A soft deck board is a surface problem. A spongy spot that involves flex in the structure below — where the whole area depresses when you step on it — indicates rot in the framing beneath. Push a screwdriver firmly into any soft area. If it penetrates more than ¼ inch, the wood is structurally compromised.</p>

          <h2>3. Visible Rot at Post Bases</h2>
          <p>Post bases sit at ground level or are embedded in concrete — the two worst environments for wood longevity. Reno&apos;s irrigation water, spring snowmelt, and freeze-thaw cycling attack post bases relentlessly. Look for soft wood at the base of every post, any post that rocks when pushed laterally, and rust or corrosion on post base hardware. A structurally failed post transfers no load — the deck is effectively unsupported at that point.</p>

          <h2>4. Corroded Joist Hangers and Hardware</h2>
          <p>Joist hangers, post caps, and ledger lag bolts are the mechanical connections that hold deck framing together. Corrosion of these metal connectors is invisible from the deck surface but can reduce their load capacity to near zero. In Lake Tahoe decks, snow load and seasonal moisture cycling accelerate hardware corrosion dramatically compared to lower-elevation Reno decks. Any visible orange-brown corrosion on deck hardware warrants close inspection.</p>

          <h2>5. Deck Movement When Loaded</h2>
          <p>Stand at one corner of the deck and apply your body weight while watching the opposite corner. A properly built deck should show no perceptible movement or sway. Lateral movement — the deck shifting side-to-side when you push against a post — indicates missing or failed diagonal bracing. Vertical deflection under load indicates undersized joists or failed connections. Any visible movement under load is a structural deficiency.</p>

          <h2>6. Railing Failures</h2>
          <p>Building code requires deck railings to withstand 200 lbs of lateral force applied at the top rail. Test yours: push firmly against the top rail. It should not move perceptibly. Railings that wobble, posts that rock at their base connections, and balusters with gaps larger than 4 inches are code violations — and the wobble or gap is usually the visible indicator of a structural connection failure that has already compromised the system.</p>

          <h2>7. Stair Stringer Rot or Separation</h2>
          <p>Deck stairs carry concentrated loads at the stringer-to-deck connection — where the stringer sits against the deck framing. This joint is a water trap that holds moisture against end grain, which absorbs water faster than face grain. At Lake Tahoe, where snow sits against deck stairs for months, stringer rot at the top connection is nearly universal in decks older than 15 years. Test by pushing firmly at the top of the stringer where it meets the deck — any movement indicates a failed connection.</p>

          <h2>8. Age — Especially Lake Tahoe Decks Over 15 Years</h2>
          <p>A Reno deck built to code with proper materials has a structural service life of 25–30 years with maintenance. A Lake Tahoe deck faces 200+ inches of annual snowfall, UV radiation, freeze-thaw cycling, and seasonal moisture that dramatically reduces that lifespan. BRE Builders recommends structural inspection of any Lake Tahoe deck older than 15 years, regardless of visual appearance — and any Reno deck older than 20 years. The cost of an inspection is trivial compared to the cost of a collapse, legally and medically.</p>

          <h2>Free Deck Safety Inspections — BRE Builders</h2>
          <p>BRE Builders performs deck safety inspections throughout Reno, Sparks, Carson City, Lake Tahoe, and Truckee. We check all 8 failure points and provide a written assessment of any concerns. Free with any project estimate. If your deck is safe, we&apos;ll tell you — and we&apos;ll tell you what to watch for going forward. Licensed NV #0085999 · CA #1093798.</p>
        </div>
      }
    />
  )
}
