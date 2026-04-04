import type { Metadata } from 'next'
import BlogTemplate, { BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Upgrade Bathroom Fan Before Winter Reno NV | BRE Builders',
  description: 'Bathroom fans that vent improperly trap moisture, cause mold, and damage structure. BRE Builders explains why upgrading before Reno winters matters. Licensed NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Upgrade+Bathroom+Fan+Before+Winter+Reno&sub=Ventilation+Fix+%C2%B7+BRE+Builders+NV+%230085999&badge=Home+Prep`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/bathroom-fan-upgrade-reno-winter/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Why You Should Upgrade Your Bathroom Fan Before Winter in Reno',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-10-01',
      url: `${SITE_URL}/blog/bathroom-fan-upgrade-reno-winter/`,
    },
  ],
}

export default function Blog_BathroomFanUpgradeRenoWinter() {
  return (
    <BlogTemplate
      title="Why You Should Upgrade Your Bathroom Fan Before Winter in Reno"
      category="Structural Repairs"
      publishDate="October 2025"
      heroImage={IMGS.blog_hvac}
      heroAlt="Bathroom fan ventilation upgrade Reno home winter — BRE Builders NV #0085999"
      excerpt="Many Reno homeowners seal their homes tight for winter without realizing their bathroom fan is venting into the attic — not outside. Here is why that matters and what to do before it gets cold."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: 'Attic Ventilation and Mold Signs Reno', href: '/blog/attic-ventilation-mold-reno', img: IMGS.repairs_rot, alt: 'Attic ventilation mold Reno', category: 'Structural Repairs' },
        { title: 'Why Is My House Humid in Reno?', href: '/blog/house-humid-reno-no-leak', img: IMGS.repairs_water, alt: 'House humidity Reno Nevada', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Bathroom fans are one of the most overlooked contributors to winter moisture damage in Reno homes. When a home is sealed tight for winter, a bathroom fan that does not properly vent to the exterior can push moist air directly into the attic — causing mold growth on sheathing and insulation over the course of a single winter season.</p>

          <h2>The Most Common Problem: Venting Into the Attic</h2>
          <p>In many Reno homes — particularly those built in the 1980s and 1990s — bathroom exhaust fans were installed to vent into the attic rather than through the roof or soffit to the exterior. This was common practice and, while it does reduce bathroom humidity immediately, it deposits that moisture directly into the attic space. Over a winter, this accumulates as condensation, mold, and degraded insulation.</p>

          <h2>How to Check Your Fan</h2>
          <p>On a cold day, run your bathroom fan and go outside. You should be able to feel or see air exhaust from a vent cap on your roof or exterior wall. If you cannot find the discharge point, or if the cap is blocked, your fan is not properly venting to the exterior. Have it inspected.</p>

          <BlogPullQuote>One winter season of a bathroom fan venting into an attic can produce enough mold to require full attic remediation. It is a small fix with large consequences if ignored.</BlogPullQuote>

          <h2>Signs Your Fan Needs Replacement</h2>
          <p><strong>Loud operation.</strong> Excessive noise indicates bearing wear and reduced motor efficiency. An inefficient motor provides less airflow even if the duct path is correct.</p>
          <p><strong>Condensation persisting after showers.</strong> If mirrors and walls stay wet long after the fan runs, the fan is undersized for the room or the duct is restricted.</p>
          <p><strong>Age over 15 years.</strong> Older fans lack the efficiency of modern models. Current Energy Star models move more air more quietly at lower operating cost.</p>

          <h2>What BRE Builders Does</h2>
          <p>BRE Builders inspects bathroom ventilation systems, identifies improper duct paths, and corrects them — including running new duct to proper exterior terminations and replacing undersized or failed fans. If attic mold is already present from years of improper venting, we assess and remediate that too. NV License #0085999.</p>
        </div>
      }
    />
  )
}
