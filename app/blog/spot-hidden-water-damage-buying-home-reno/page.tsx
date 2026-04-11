import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Spot Hidden Water Damage Before Buying a Reno Home | BRE Builders',
  description: 'Hidden water damage is the most expensive surprise in Reno home purchases. Here are the visual signs, tools, and professional evaluation steps that protect buyers. BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=How+to+Spot+Hidden+Water+Damage+Before+Buying+a+Ho&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Home+Buying`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Spot Hidden Water Damage Before Buying a Reno Home | BRE Builders', }] },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Spot Hidden Water Damage Before Buying a Reno Home | BRE Builders',
    description: 'Hidden water damage is the most expensive surprise in Reno home purchases. Here are the visual signs, tools, and professional evaluation steps that protect',
    images: [{ url: `${SITE_URL}/api/og?title=How+to+Spot+Hidden+Water+Damage+Before+Buying+a+Ho&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Home+Buying`, alt: 'Blue Reef Builders — Spot Hidden Water Damage Before Buying a Reno Home | BRE Builders' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/spot-hidden-water-damage-buying-home-reno/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Spot Hidden Water Damage Before Buying a Home in Reno',
      description: 'Hidden water damage is the most expensive surprise in Reno home purchases. Here are the visual signs, tools, and professional evaluation steps that protect buyers. BRE Builders NV #0085999.',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com', logo: { '@type': 'ImageObject', url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp' } },
      datePublished: '2025-11-01',
      dateModified: '2025-11-01',
      image: IMGS.blog_basement_water,
      url: `${SITE_URL}/blog/spot-hidden-water-damage-buying-home-reno/`,
      keywords: 'spot hidden water damage reno, home buying water damage inspection nevada, pre-purchase structural evaluation reno, bre builders buyer evaluation',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.article-lede', 'article h2'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What are the signs of hidden water damage when buying a home in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Key signs to look for during home visits: brown or yellow staining on ceilings or at the base of walls, warped or buckled flooring that feels soft or sounds hollow underfoot, musty odor in any room particularly on warm days, peeling caulk around windows or plumbing fixtures, freshly painted walls in isolated areas (often concealing staining), and soft spots or discoloration in subfloor areas under sinks and around toilets.' } },
        { '@type': 'Question', name: 'Should I get a separate structural inspection before buying a home in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — particularly for homes over 15 years old or in areas with known soil movement issues (South Reno, Spanish Springs, Damonte Ranch). A general home inspector provides a broad visual assessment. A licensed contractor like BRE Builders provides a structural evaluation — different scope, different depth. For significant purchases, both are warranted.' } },
        { '@type': 'Question', name: 'Can fresh paint hide water damage from a home inspection?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fresh paint over staining and new flooring over soft subfloor are among the most common ways water damage is concealed — sometimes intentionally, sometimes by sellers who genuinely did not know the cause. A moisture meter detects elevated moisture behind painted surfaces even when the visual appears normal.' } },
        { '@type': 'Question', name: 'How do I negotiate if I find water damage in a Reno home?', acceptedAnswer: { '@type': 'Answer', text: 'Document all findings with photos and contractor estimates. You have three options: request the seller remediate before closing, negotiate a price reduction reflecting the repair cost, or walk away. A licensed contractor evaluation with written scope and cost estimate gives you the documentation needed for any of these approaches.' } },
      ],
    },
  ],
}

export default function Blog_SpotHiddenWaterDamageBuyingHomeReno() {
  return (
    <BlogTemplate
      title="How to Spot Hidden Water Damage Before Buying a Home in Reno"
      category="Structural Repairs"
      publishDate="November 2025"
      heroImage={IMGS.blog_basement_water}
      heroAlt="Hidden water damage home purchase Reno Nevada — pre-purchase inspection BRE Builders NV #0085999"
      excerpt="Hidden water damage is the most expensive discovery after closing on a Reno home. Sellers conceal it with fresh paint and new flooring. Here is how to spot it before you sign."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs Reno NV', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.blog_20yr_hero, alt: '20 year old Reno home repairs', category: 'Structural Repairs' },
        { title: 'Why Trust BRE Builders for Structural Repairs', href: '/blog/reno-structural-repairs', img: IMGS.blog_contractor, alt: 'BRE Builders structural repairs Reno NV', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Water damage is the most common — and most expensive — hidden problem in Reno home purchases. Fresh paint, new flooring, and staging can conceal damage that costs tens of thousands of dollars to remediate. In Reno, where climate, soil conditions, and construction practices create specific moisture vulnerabilities, buyers who know what to look for protect themselves from the most common post-closing shock.</p>

          <h2>What to Look for During Home Visits</h2>

          <BlogImage
            src={IMGS.blog_basement_water}
            alt="Water intrusion evidence basement wall Reno home — pre-purchase inspection water damage detection"
            caption="Active moisture infiltration near the foundation — this was present at listing but not disclosed. Know what to look for."
          />

          <h3>Ceiling and wall discoloration</h3>
          <p>Brown or yellow staining — even faint, even painted over — indicates past or active water intrusion. Look especially at ceiling corners, around window frames, at the junction of exterior walls and floors, and in any room adjacent to plumbing or located below a bathroom. Fresh paint in a single isolated area on a wall or ceiling is a significant red flag.</p>

          <h3>Flooring anomalies</h3>
          <p>Floors that have bubbled, cupped, or feel soft underfoot have had sustained moisture exposure. Walk slowly through kitchens, bathrooms, laundry areas, and any first-floor rooms adjacent to exterior walls. Soft spots or hollow sound underfoot indicate subfloor damage. Under new flooring, this is often concealed but not resolved.</p>

          <BlogImage
            src={IMGS.repairs_water}
            alt="Water damage pooling foundation Reno home — what to look for when buying a house in northern nevada"
            caption="Water pooling at the foundation edge — check outside the home too. Active drainage problems always eventually become interior problems."
          />

          <h3>Musty odor</h3>
          <p>Trust your nose. A musty or damp smell on a dry day means active moisture or existing mold is present. Sellers often open windows or use air fresheners before showings. Visit again without notice if possible, or ask to keep windows closed for an hour before your walk-through.</p>

          <h3>Exterior drainage</h3>
          <p>Check outside. Water that pools near the foundation, downspouts that discharge against the foundation, and negative grading that slopes toward the house all indicate active moisture pressure on foundation walls and crawlspaces. These exterior conditions always eventually become interior problems.</p>

          <BlogPullQuote>
            The most expensive water damage discoveries happen after closing — when the leverage is gone. A $500 structural evaluation before purchase can prevent a $30,000 remediation after it.
          </BlogPullQuote>

          <h2>Steps to Take If You Find Water Damage</h2>
          <p>Document all findings immediately with photos. Have a licensed contractor provide a written scope and cost estimate — this documentation is essential for price negotiation or walking away. BRE Builders provides pre-purchase evaluations for buyers throughout Reno, Sparks, and Lake Tahoe. We assess structural impact, identify moisture sources, and provide written cost estimates. NV License #0085999.</p>

          <h2>Frequently Asked Questions</h2>

          <h3>Can fresh paint hide water damage from a home inspection?</h3>
          <p>Yes. This is one of the most common concealment methods — sometimes intentional, sometimes by sellers who genuinely addressed the visible surface without understanding the cause. A moisture meter detects elevated moisture behind painted surfaces even when the visual appears normal. Licensed contractors carry them. Standard home inspectors often do not.</p>

          <h3>How do I negotiate if I find water damage?</h3>
          <p>Get a written scope and cost estimate from a licensed contractor. Then you have three options: request the seller remediate before closing, negotiate a price reduction reflecting the repair cost, or walk away. Written documentation from a licensed contractor is essential for any of these approaches to be credible.</p>
        </div>
      }
    />
  )
}
