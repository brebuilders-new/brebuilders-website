import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Is Your Kitchen Ruining Your Property Value? Fix These 5 Things First',
  description: 'An outdated kitchen can quietly drain your Reno home\'s value. BRE Builders identifies the 5 kitchen problems that most hurt resale — and how to fix them.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Is+Your+Kitchen+Hurting+Your+Home+Value%3F&sub=5+Things+to+Fix+First+%C2%B7+Reno+NV&badge=Kitchen`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/is-your-kitchen-ruining-your-property-value/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is Your Kitchen Ruining Your Property Value? Fix These 5 Things First',
  author: { '@type': 'Organization', name: 'BRE Builders' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  datePublished: '2025-06-01',
  image: IMGS.svc_kitchen,
  url: 'https://brebuilders.com/is-your-kitchen-ruining-your-property-value/',
}

export default function KitchenPropertyValuePage() {
  return (
    <BlogTemplate
      title="Is Your Kitchen Ruining Your Property Value?"
      category="Kitchen Remodeling"
      heroImage={IMGS.svc_kitchen}
      heroAlt="Outdated kitchen in Reno NV home — BRE Builders kitchen remodeling"
      excerpt="An outdated kitchen doesn't just look bad — it actively pulls down your property value. Reno buyers notice kitchens immediately. Here are the 5 problems that cost you the most at resale."
      schema={schema}
      relatedPosts={[
        { title: '5 Signs It\'s Time to Remodel Your Kitchen', href: '/blog/5-signs-its-time-to-remodel-your-kitchen', img: IMGS.svc_kitchen, alt: '5 Signs Kitchen Remodel BRE Builders', category: 'Kitchen' },
        { title: 'Reno Kitchen Remodeling Trends & Investment Tips for 2025', href: '/blog/reno-kitchen-remodeling-trends', img: IMGS.svc_kitchen, alt: 'Reno Kitchen Remodeling Trends BRE Builders', category: 'Kitchen' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.svc_repair, alt: 'Structural Repair Signs BRE Builders', category: 'Repairs' },
      ]}
      relatedServices={[
        { label: 'Kitchen & Bath Remodeling', href: '/services/kitchen-bath' },
        { label: 'Home Additions', href: '/services/additions' },
        { label: 'ADU Construction', href: '/services/adu' },
      ]}
      content={
        <div>
          <p>In the Reno-Sparks residential market, the kitchen is the single room most likely to determine whether a house sells quickly at asking price or sits for months with price reductions. Buyers form an immediate, emotional response to kitchens — and an outdated kitchen activates a calculation about remodel cost that buyers subtract directly from what they are willing to offer. BRE Builders has remodeled kitchens across Northern Nevada and California. Here is what we know about kitchen impact on property value.</p>

          <BlogImage
            src={IMGS.ripon[1]}
            alt="Updated modern kitchen custom cabinetry marble countertop property value BRE Builders"
            caption="Updated chef&apos;s kitchen — Ripon, CA · The kitchen buyers remember and pay for"
            priority
          />

          <h2>What &quot;Outdated&quot; Actually Costs You</h2>
          <p>Real estate agents in the Reno-Sparks market consistently report that buyers discount outdated kitchens by 1.5x to 2x the actual remodel cost. A kitchen that would cost $35,000 to update leads buyers to mentally subtract $50,000–$70,000 from their offer. This is a market irrationality — but it is consistent and well-documented. Sellers who update their kitchen before listing typically recover more than the cost of the update in higher offers and faster sale times.</p>

          <h2>The Countertop Test</h2>
          <p>Walk into your kitchen and look at the countertops. If they are original laminate from the 1990s, original tile with grout lines, or cultured marble — they are signaling &quot;this kitchen has not been updated&quot; to every buyer who walks through. Countertop replacement is the highest-visible, highest-return single change in a kitchen remodel. Quartz countertops in a white or light grey tone cost $50–$80 per square foot installed and signal contemporary design to buyers immediately.</p>

          <BlogImage
            src={IMGS.svc_kitchen}
            alt="Kitchen remodel before after property value Reno NV BRE Builders"
            caption="Kitchen remodel by BRE Builders — new countertops, cabinetry, and tile add measurable property value"
          />

          <h2>Cabinet Condition vs. Layout</h2>
          <p>Buyers distinguish between cabinet condition and cabinet layout. Cabinets that are structurally sound but cosmetically dated can often be addressed with door and drawer front replacement plus new hardware — a fraction of full replacement cost. But if the cabinet layout itself is dysfunctional — poor storage design, awkward work triangle, insufficient space — a more comprehensive update is required to move the buyer perception needle.</p>

          <BlogPullQuote>
            Buyers do not see what a kitchen remodel costs — they see what it would cost them. And their estimate is almost always higher than the actual number.
          </BlogPullQuote>

          <h2>Appliances: Mismatched Is Worse Than Old</h2>
          <p>A kitchen with all-original appliances from 2005 reads consistently to buyers. A kitchen with a 2005 refrigerator, a 2012 dishwasher, a 2018 range, and a 2022 microwave reads as chaos — it signals that things have been failing and being replaced piecemeal, which raises questions about what else is failing. If you are updating appliances before a sale, update them all at once to a consistent finish (typically stainless or panel-ready) for maximum visual impact.</p>

          <h2>The Backsplash Signal</h2>
          <p>The kitchen backsplash is the detail buyers notice most after countertops. An original tile backsplash with dated grout is a negative signal. A fresh subway tile, hexagon, or contemporary pattern backsplash costs $800–$2,500 installed for a typical kitchen and signals that the space has been updated. It is a high-visibility, relatively low-cost change that changes buyer perception disproportionately.</p>

          <h2>What BRE Builders Can Do for You</h2>
          <p>BRE Builders works with homeowners throughout the Reno-Sparks market on pre-sale kitchen updates designed to maximize return. We can advise on which changes will move the needle most for your specific property, your price point, and your neighborhood. Licensed NV #0085999 · CA #1093798. Free consultation, 24-hour response.</p>
        </div>
      }
    />
  )
}
