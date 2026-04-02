import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
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
          <p>Your kitchen is the first room buyers mentally price when they walk through your Reno home. Real estate agents say it consistently — an outdated kitchen stops a sale or kills the offer price, even when everything else looks great.</p>

          <p>BRE Builders has remodeled kitchens across Reno, Sparks, and Northern Nevada since 1989. Here are the five kitchen problems we see most often that hurt property values — and what the fix actually involves.</p>

          <h2>1. Dark or Yellow-Toned Cabinets From the 1990s</h2>
          <p>Honey oak, dark cherry, and yellowed white cabinets immediately signal to a buyer that the kitchen hasn&apos;t been touched in 20+ years. They don&apos;t just look dated — they make the whole kitchen feel smaller and darker, which amplifies every other problem in the space.</p>
          <p><strong>What buyers see:</strong> A kitchen that will cost them $30,000–$60,000 to update — so they subtract that from their offer.</p>
          <p><strong>The fix:</strong> Cabinet refacing (replacing doors and hardware while keeping existing box structure) runs $8,000–$18,000 and is the highest-ROI kitchen upgrade in Reno. Full cabinet replacement runs $15,000–$35,000 depending on materials and layout. Both dramatically modernize the space.</p>

          <h2>2. Tile Countertops or Laminate in Poor Condition</h2>
          <p>Grout lines in tile countertops stain and hold bacteria. Laminate chips, lifts at seams, and shows burns. Both materials signal low-budget construction — regardless of how nice the rest of the kitchen is.</p>
          <p><strong>What buyers see:</strong> They have to replace the counters immediately. Granite, quartz, or butcher block is the expected standard in the current Reno market.</p>
          <p><strong>The fix:</strong> Quartz countertops for a standard Reno kitchen run $3,000–$8,000 installed. This is one of the single highest-impact per-dollar upgrades in resale terms. Buyers react visibly when they see stone counters — it resets their whole impression of the kitchen.</p>

          <h2>3. No Island or Peninsula — Closed-Off Layout</h2>
          <p>The Reno market has fully moved to open-concept kitchens. A kitchen that is boxed in, walled off from the living space, or that has no central gathering surface is considered functionally deficient by today&apos;s buyer.</p>
          <p><strong>What buyers see:</strong> A kitchen that doesn&apos;t work for how people actually live — they factor in the cost of structural changes to open it up.</p>
          <p><strong>The fix:</strong> Removing a non-load-bearing wall between kitchen and dining room runs $3,000–$8,000. Adding a kitchen island runs $2,000–$6,000 depending on whether plumbing or electrical is involved. Together, these two changes transform the feel of the entire main floor.</p>

          <h2>4. Outdated Appliances — Especially Mismatched or Black</h2>
          <p>Mismatched appliances — one stainless, one white, one black — tell a story of deferred maintenance and piecemeal replacements. Black appliances from the early 2000s are particularly dated. Almond and biscuit appliances are even more damaging to perceived value.</p>
          <p><strong>What buyers see:</strong> More things that need immediate replacement. Appliance upgrades also affect the functional impression of the whole kitchen.</p>
          <p><strong>The fix:</strong> A matched stainless appliance suite (refrigerator, range, dishwasher, microhood) from a mid-tier brand like Samsung or LG runs $3,000–$6,000. This is usually the seller&apos;s best standalone investment before listing.</p>

          <h2>5. Poor Lighting — One Ceiling Fixture, No Task Lighting</h2>
          <p>A single overhead fixture creates shadows on countertops and makes the kitchen feel institutional. Under-cabinet lighting, pendant lights over an island, and recessed LED lighting are expected in the current Reno market — especially in the $400K+ range.</p>
          <p><strong>What buyers see:</strong> A dark, uninviting kitchen that feels cramped even if the square footage is adequate.</p>
          <p><strong>The fix:</strong> A full kitchen lighting upgrade — new recessed fixtures, under-cabinet LED strip lights, and pendant installation — runs $1,500–$4,000 depending on how many circuits need to be added. For the visual impact it creates, this is one of the most underrated investments in kitchen resale prep.</p>

          <h2>The Bottom Line for Reno Sellers</h2>
          <p>You don&apos;t need a full kitchen gut-and-remodel to protect your property value. Strategic upgrades — new cabinet doors, stone counters, a matched appliance suite, and updated lighting — can modernize a kitchen for $15,000–$25,000 and protect or increase the sale price by far more.</p>
          <p>BRE Builders provides free estimates on kitchen remodeling in Reno, Sparks, and surrounding areas. Licensed NV #0085999 · CA #1093798.</p>
        </div>
      }
    />
  )
}
