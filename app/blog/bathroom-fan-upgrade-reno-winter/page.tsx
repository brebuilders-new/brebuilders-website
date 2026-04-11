import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Upgrade Bathroom Fan Before Winter Reno NV | BRE Builders',
  description: 'Bathroom fans that vent into attics trap moisture and cause mold damage over winter in Reno. BRE Builders explains how to check yours, the signs it needs replacement, and what the fix involves. NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Why+You+Should+Upgrade+Your+Bathroom+Fan+Before+Wi&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Home+Prep`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Upgrade Bathroom Fan Before Winter Reno NV | BRE Builders', }] },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Upgrade Bathroom Fan Before Winter Reno NV | BRE Builders',
    description: 'Bathroom fans that vent into attics trap moisture and cause mold damage over winter in Reno. BRE Builders explains how to check yours, the signs it needs r',
    images: [{ url: `${SITE_URL}/api/og?title=Why+You+Should+Upgrade+Your+Bathroom+Fan+Before+Wi&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Home+Prep`, alt: 'Blue Reef Builders — Upgrade Bathroom Fan Before Winter Reno NV | BRE Builders' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/bathroom-fan-upgrade-reno-winter/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Why You Should Upgrade Your Bathroom Fan Before Winter in Reno',
      description: 'Bathroom fans that vent into attics trap moisture and cause mold damage over winter in Reno. BRE Builders explains how to check yours, the signs it needs replacement, and what the fix involves. NV #0085999.',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com', logo: { '@type': 'ImageObject', url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp' } },
      datePublished: '2025-10-01',
      dateModified: '2025-11-01',
      image: IMGS.blog_hvac,
      url: `${SITE_URL}/blog/bathroom-fan-upgrade-reno-winter/`,
      keywords: 'bathroom fan upgrade reno nv, bathroom fan vent attic mold, reno home ventilation winter, bre builders bathroom ventilation repair',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.article-lede', 'article h2'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I know if my bathroom fan vents into the attic instead of outside?', acceptedAnswer: { '@type': 'Answer', text: 'On a cold day, run your bathroom fan and go outside. You should feel or see warm air exhaust from a vent cap on your roof or exterior wall. If you cannot find a discharge point, or if the accessible vent cap is blocked, your fan is likely venting into the attic. You can also access the attic and look for the fan duct — if it terminates without a sealed exterior connection, it is venting into the attic space.' } },
        { '@type': 'Question', name: 'How much damage can a bathroom fan cause if it vents into an attic?', acceptedAnswer: { '@type': 'Answer', text: 'One winter season of a bathroom fan venting into an attic can produce enough mold on roof sheathing and insulation to require full attic remediation. At Reno temperatures, shower moisture deposited into the attic condenses on cold surfaces and creates optimal mold growth conditions. The mold remediation cost far exceeds the cost of properly ducting the fan to the exterior.' } },
        { '@type': 'Question', name: 'What are the signs my bathroom fan needs replacement?', acceptedAnswer: { '@type': 'Answer', text: 'Replace your bathroom fan if: it is louder than 3 sones (noticeably buzzy or rattling), mirrors and walls stay wet long after running, the fan is more than 15 years old, or if you discover the existing duct does not properly terminate at the exterior.' } },
        { '@type': 'Question', name: 'Can I reroute a bathroom fan duct myself?', acceptedAnswer: { '@type': 'Answer', text: 'A motivated DIYer can reroute a short duct run to the soffit or exterior wall. Longer runs through the attic to the roof, or in finished ceiling spaces, typically require professional work to ensure the duct is properly sealed, insulated (to prevent condensation inside the duct), and properly terminated with a back-draft damper. BRE Builders handles bathroom ventilation corrections as part of structural moisture work. NV #0085999.' } },
      ],
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
      heroAlt="Bathroom fan ventilation upgrade Reno home — preventing attic mold winter moisture BRE Builders NV #0085999"
      excerpt="Many Reno homeowners seal their homes tight for winter without realizing their bathroom fan vents into the attic, not outside. One winter of this can cause extensive attic mold. Here is how to check yours."
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
          <p>Bathroom fans are one of the most overlooked contributors to winter moisture damage in Reno homes. When a home is sealed tight for winter, a fan that does not properly vent to the exterior pushes moist shower air directly into the attic space — causing mold on roof sheathing, wet insulation, and structural degradation over the course of a single winter season. The fix is straightforward. The damage from ignoring it is not.</p>

          <h2>The Most Common Problem: Venting Into the Attic</h2>

          <BlogImage
            src={IMGS.blog_hvac}
            alt="HVAC and ventilation system Reno home — bathroom fan properly ducted vs improperly ducted into attic"
            caption="Bathroom fan ventilation matters most in winter when Reno homes are sealed tight — improper ducting sends moisture directly into the attic"
          />

          <p>In many Reno homes built in the 1980s and 1990s, bathroom exhaust fans were installed to vent into the attic rather than through the roof or exterior wall. The fan does remove moisture from the bathroom — but deposits it directly into the attic space. At winter temperatures, this moisture condenses on cold rafters and roof sheathing. Over a single heating season, this produces significant mold growth that typically requires professional remediation costing several thousand dollars.</p>

          <h2>How to Check Your Fan in 5 Minutes</h2>
          <p>Run your bathroom fan on a cold day. Go outside and look for a vent cap — typically on the roof ridge, soffit, or exterior wall near the bathroom. You should feel or see warm air discharging from it. If you cannot find a discharge point, or if the cap is blocked, your fan is not properly venting to the exterior.</p>
          <p>If you have attic access, you can also look from inside. Find the fan housing in the attic ceiling and follow the duct. If it terminates loosely in the attic space — or connects to a flex duct that ends without a sealed exterior penetration — it is venting into the attic.</p>

          <BlogPullQuote>
            One winter of a bathroom fan venting into an attic can require $5,000-$15,000 in mold remediation. Properly ducting the fan to the exterior costs a fraction of that — and is a permanent fix.
          </BlogPullQuote>

          <h2>Signs Your Fan Needs Replacement</h2>

          <BlogImage
            src={IMGS.repairs_rot}
            alt="Attic mold from bathroom fan venting — roof sheathing damage Reno NV BRE Builders attic repair"
            caption="Attic mold on roof sheathing — this is what a single winter of a bathroom fan venting into an attic produces in a Reno home"
          />

          <p><strong>Noise over 3 sones.</strong> Excessive noise indicates bearing wear and reduced airflow. A noisy fan is an inefficient fan — it runs loudly but moves less air.</p>
          <p><strong>Moisture persisting after showers.</strong> If mirrors and walls stay wet long after the fan runs, the fan is undersized for the room or the duct is restricted. Modern fans sized correctly for the bathroom eliminate shower moisture within 15 minutes.</p>
          <p><strong>Age over 15 years.</strong> Original fans in homes built in the early 2000s are past their design life. Modern Energy Star fans move more air, operate more quietly, and at lower energy cost.</p>

          <h2>Frequently Asked Questions</h2>

          <h3>Does the fan duct need to be insulated?</h3>
          <p>Yes — in attic runs, the duct must be insulated to prevent condensation forming inside the duct in cold weather. Uninsulated flex duct through an attic collects moisture internally and can drip back into the bathroom or introduce moisture into the attic space even when properly terminated. BRE Builders ensures all bathroom ventilation corrections include properly insulated duct runs. NV #0085999.</p>

          <h3>Can this be done as part of other BRE Builders work?</h3>
          <p>Yes. We address bathroom ventilation corrections as part of attic inspections, moisture evaluations, and general structural work. If we identify an improperly vented fan during an inspection, we include the correction in the scope and cost estimate.</p>
        </div>
      }
    />
  )
}
