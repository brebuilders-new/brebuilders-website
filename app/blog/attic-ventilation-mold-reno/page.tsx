import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Attic Ventilation and Mold Signs Reno NV | BRE Builders',
  description: 'Poor attic ventilation causes mold, structural damage, and health problems in Reno homes. BRE Builders explains the signs, health risks, and solutions. Licensed NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Is+Your+Attic+Making+You+Sick%3F+Signs+of+Poor+Ven&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Attic+Health`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/attic-ventilation-mold-reno/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Is Your Attic Making You Sick? Signs of Poor Ventilation and Mold',
      description: 'Poor attic ventilation causes mold, structural damage, and health problems in Reno homes. BRE Builders explains the signs, health risks, and solutions. Licensed NV #0085999.',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com', logo: { '@type': 'ImageObject', url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp' } },
      datePublished: '2025-10-15',
      dateModified: '2025-11-01',
      image: IMGS.repairs_rot,
      url: `${SITE_URL}/blog/attic-ventilation-mold-reno/`,
      keywords: 'attic mold reno nv, poor attic ventilation reno, attic mold health risks, bre builders attic inspection reno, attic moisture northern nevada',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.article-lede', 'article h2'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I know if my attic has mold?', acceptedAnswer: { '@type': 'Answer', text: 'Common signs of attic mold in Reno homes: musty smell in upper floors or closets that access attic, unexplained respiratory symptoms among household members, visible dark staining on rafters or roof sheathing when the attic is accessed, condensation or frost on rafters during cold months, and pest activity (particularly rodents) which prefer damp attic environments.' } },
        { '@type': 'Question', name: 'What causes attic mold in Reno homes?', acceptedAnswer: { '@type': 'Answer', text: 'The two most common causes in Reno are: bathroom exhaust fans that vent into the attic instead of to the exterior (depositing shower moisture directly into the attic space), and insufficient soffit-to-ridge ventilation that traps humid air rather than expelling it. Many Reno homes built before 2005 have both problems simultaneously.' } },
        { '@type': 'Question', name: 'Is attic mold dangerous to health?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mold spores enter living spaces through ceiling light fixtures, HVAC returns, and ceiling penetrations. Symptoms include persistent coughing, nasal congestion, headaches, and fatigue. People with asthma, allergies, or compromised immune systems are at significantly elevated risk. Mycotoxin-producing mold species can cause neurological symptoms with prolonged exposure.' } },
        { '@type': 'Question', name: 'How much does attic mold remediation cost in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Cost depends on the extent of growth, whether roof sheathing requires replacement, and whether the underlying ventilation cause is corrected. BRE Builders evaluates attic conditions, identifies the source, and provides written scope and cost estimate before any work begins. We never remediate without correcting the cause. NV #0085999.' } },
      ],
    },
  ],
}

export default function Blog_AtticVentilationMoldReno() {
  return (
    <BlogTemplate
      title="Is Your Attic Making You Sick? Signs of Poor Ventilation and Mold"
      category="Structural Repairs"
      publishDate="October 2025"
      heroImage={IMGS.repairs_rot}
      heroAlt="Attic mold ventilation problem Reno home — mold on roof sheathing BRE Builders structural repair NV #0085999"
      excerpt="Poor attic ventilation is a silent problem. It causes mold on roof sheathing, structural deterioration, and health issues — often without visible signs from inside the home until damage is extensive."
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
          <p>The attic is the most neglected space in most Reno homes — and one of the most consequential when something goes wrong. Poor ventilation traps heat and moisture, creating exactly the conditions mold needs to thrive. The mold grows on roof sheathing, insulation, and rafters — then enters the living space below through ceiling gaps and HVAC systems. Here is how to identify the problem before it reaches that stage.</p>

          <h2>Why Attic Ventilation Matters in Reno</h2>

          <BlogImage
            src={IMGS.repairs_rot}
            alt="Dry rot and mold on wall framing — structural damage from moisture and poor ventilation Reno NV BRE Builders"
            caption="Extensive rot and structural damage from prolonged moisture exposure — attic mold starts this way when ventilation fails"
          />

          <p>A properly ventilated attic uses intake vents (soffits) and exhaust vents (ridge or gable) to create continuous airflow. This keeps summer attic temperatures from exceeding safe limits for shingles and sheathing, prevents ice damming in winter, and removes moisture that enters from the living space below. In Reno, summer attic temperatures in poorly ventilated spaces regularly exceed 140°F — accelerating shingle degradation and causing structural fatigue in framing.</p>

          <h2>The Most Common Cause: Bathroom Fans Venting Into the Attic</h2>

          <BlogImage
            src={IMGS.blog_hvac}
            alt="HVAC and ventilation system failure Reno home — bathroom fan attic moisture problem"
            caption="Many Reno homes built before 2005 have bathroom fans ducted into the attic — one winter of this can produce extensive mold on sheathing"
          />

          <p>In many Reno homes built in the 1980s and 1990s, bathroom exhaust fans were installed to vent into the attic space rather than through the roof or soffit to the exterior. The fan reduces bathroom humidity immediately — but deposits that moisture directly into the attic. Over a single winter, with the home sealed tight and fans running daily, this accumulates as condensation on cold rafters and sheathing, producing significant mold growth. This is one of the most common and most preventable causes of attic mold in Northern Nevada.</p>

          <BlogPullQuote>
            One winter season of a bathroom fan venting into an attic can produce enough mold on roof sheathing to require full attic remediation. A $200 fix — rerouting the duct — prevents a $5,000-$15,000 remediation.
          </BlogPullQuote>

          <h2>Signs of Poor Ventilation and Attic Mold</h2>
          <p><strong>Excessive heat in upper floors during summer.</strong> If the second floor or rooms adjacent to the roof feel significantly hotter than other areas, heat is not being expelled from the attic.</p>
          <p><strong>Condensation on rafters in cold weather.</strong> Frost or moisture droplets on roof rafters during winter indicate warm, humid air from below is meeting cold surfaces — a direct indicator of inadequate exhaust.</p>
          <p><strong>Visible dark staining on sheathing or insulation.</strong> This is mold. In Reno homes built before 2005, this is most common on the underside of roof sheathing near the eaves, where ventilation is most restricted.</p>

          <h2>Health Risks of Attic Mold</h2>

          <BlogImage
            src={IMGS.blog_wall_gaps}
            alt="Structural gaps and moisture pathways in Reno home — mold spores enter living space through ceiling penetrations"
            caption="Gaps in the building envelope — how mold spores travel from the attic into the living space below"
          />

          <p>Mold spores from the attic enter the living space through ceiling light fixtures, HVAC returns, and any penetrations in the ceiling plane. Symptoms of mold exposure include persistent coughing, nasal congestion, headaches, and chronic fatigue. People with asthma or compromised immune systems are at significantly higher risk. If occupants have unexplained respiratory symptoms, the attic should be inspected.</p>

          <h2>Frequently Asked Questions</h2>

          <h3>What are the first signs of attic mold?</h3>
          <p>Musty smell in upper floors or closets, unexplained respiratory symptoms among household members, and visible dark staining on rafters when the attic is accessed. If your last attic inspection was more than 3 years ago, schedule one — particularly if your home was built before 2005.</p>

          <h3>Does BRE Builders fix the ventilation cause before remediating?</h3>
          <p>Yes — always. Treating mold without correcting the ventilation cause leads to recurrence within one to two seasons. We identify and correct the source, then remediate. NV License #0085999.</p>
        </div>
      }
    />
  )
}
