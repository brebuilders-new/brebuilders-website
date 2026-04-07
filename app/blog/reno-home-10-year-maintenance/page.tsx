import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'What Reno Homeowners Overlook in 10-Year-Old Homes | BRE Builders',
  description: 'A 10-year-old Reno home may look modern, but early stress is already showing — soil cracking, UV siding damage, leaky attic ducts, deck splintering, stucco cracks. BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=10-Year-Old+Reno+Home+Repairs&sub=What+Homeowners+Miss+Early&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/reno-home-10-year-maintenance/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What Reno Homeowners Overlook in 10-Year-Old Homes',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-06-01',
      image: IMGS.svc_repair,
      url: `${SITE_URL}/blog/reno-home-10-year-maintenance/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What do Reno homeowners overlook in 10-year-old homes?', acceptedAnswer: { '@type': 'Answer', text: 'Ten-year-old Reno homes commonly have overlooked issues including soil-related drywall cracking (clay soil in Spanish Springs and South Reno), UV damage to west-facing siding, leaky attic ducts, driveway erosion from freeze-thaw cycles, deck splintering from UV, sprinkler line leaks, stucco hairline cracks, and blocked attic vents.' } },
        { '@type': 'Question', name: 'Why do new Reno homes get drywall cracks so quickly?', acceptedAnswer: { '@type': 'Answer', text: 'Expansive clay soil in Spanish Springs and South Reno causes early foundation settling that produces drywall cracks within the first 5-10 years. This is a soil condition unique to specific Reno neighborhoods, not a construction defect.' } },
        { '@type': 'Question', name: 'How does Reno climate damage 10-year-old homes?', acceptedAnswer: { '@type': 'Answer', text: "Reno's high desert climate combines intense UV, extreme temperature swings, and freeze-thaw cycles. UV fades west-facing siding within 8-10 years. Freeze-thaw erodes unsealed driveways. Hot summers dry and crack wood decking faster than in coastal climates." } },
        { '@type': 'Question', name: 'What are stucco hairline cracks a sign of in Sparks NV?', acceptedAnswer: { '@type': 'Answer', text: 'Stucco cracking in Sparks and Cold Springs can indicate internal moisture issues or improper expansion joints. BRE Builders recommends an assessment if cracks are widening, appearing at corners, or accompanied by interior moisture.' } },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function Repairs10YearPage() {
  return (
    <BlogTemplate
      title="What Reno Homeowners Overlook in 10-Year-Old Homes"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.svc_repair}
      heroAlt="10-year-old Reno home early structural issues — BRE Builders licensed contractor NV #0085999"
      excerpt="A 10-year-old home in Reno may still look modern, but early structural and environmental stress is already showing. These are the issues most homeowners miss until they become expensive repairs."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Deck Construction & Repair', href: '/services/decks' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.blog_20yr_hero, alt: '20 year home repairs Reno NV', category: 'Structural Repairs' },
        { title: '30-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-30-year', img: IMGS.blog_30yr_hero, alt: '30 year home repairs Reno NV', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs Reno NV', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>A 10-year-old home in Reno may still look modern, but early structural and environmental stress is already showing. Reno&apos;s high desert climate — intense UV, extreme temperature swings, and expansive clay soils — puts unique pressure on homes that most homeowners don&apos;t recognize until it&apos;s a more expensive problem.</p>

          <BlogPullQuote>
            The issues in a 10-year-old Reno home are driven by two things: the specific soil conditions of each neighborhood, and the climate. Spanish Springs, South Reno, Sparks, and Cold Springs each have distinct patterns.
          </BlogPullQuote>

          <h2>Soil-Related Cracking</h2>
          <p>Expansive clay soil causes drywall cracks in Spanish Springs and South Reno as early foundation settling begins.</p>

          <h2>Sun Damage on Siding</h2>
          <p>Reno&apos;s sun fades siding and paint faster on west walls, drying materials and causing early surface brittleness.</p>

          <h2>Leaky Attic Ducts</h2>
          <p>Attic ducts in newer Reno homes leak cold air and overwork AC units, raising utility costs during dry summers.</p>

          <h2>Driveway Erosion</h2>
          <p>Freeze-thaw erosion wears down unsealed driveways in high desert zones, leading to scaling and cracking early.</p>

          <h2>Deck Splintering</h2>
          <p>Decks fade fast in Reno&apos;s UV-heavy climate; untreated boards splinter from heat and dry air within 8–10 years.</p>
          <BlogImage
            src={IMGS.svc_deck}
            alt="Deck splintering UV damage 10-year-old Reno home — untreated wood repair BRE Builders NV #0085999"
            caption="Deck Splintering — UV and heat damage to untreated wood in Reno&apos;s high desert climate"
          />

          <h2>Sprinkler Line Leaks</h2>
          <p>Irrigation lines not winterized correctly leak into crawlspaces or foundations after freeze-thaw soil movement.</p>

          <h2>Stucco Hairline Cracks</h2>
          <p>Stucco cracking in Sparks and Cold Springs can indicate internal moisture issues or improper expansion joints.</p>

          <h2>Free 10-Year Home Assessment in Reno</h2>
          <p>BRE Builders provides repair assessments for 10-year-old homes across Reno, Sparks, Carson City, and Northern Nevada. Licensed NV #0085999 · CA #1093798. Free consultation. Response within 24 hours. Call (775) 391-4517.</p>
        </div>
      }
    />
  )
}
