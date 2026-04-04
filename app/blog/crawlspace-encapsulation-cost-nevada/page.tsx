import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Crawlspace Encapsulation Cost Nevada | BRE Builders Reno NV',
  description: 'Crawlspace encapsulation cost in Nevada depends on size, existing damage, and drainage needs. BRE Builders explains what affects pricing and provides free on-site evaluations. NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=How+Much+Does+Crawlspace+Encapsulation+Cost+in+Nev&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Crawlspace`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/crawlspace-encapsulation-cost-nevada/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How Much Does Crawlspace Encapsulation Cost in Nevada?',
      description: 'Crawlspace encapsulation cost in Nevada depends on size, existing damage, and drainage needs. BRE Builders explains what affects pricing and provides free on-site evaluations. NV #0085999.',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com', logo: { '@type': 'ImageObject', url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp' } },
      datePublished: '2025-09-15',
      dateModified: '2025-11-01',
      image: IMGS.blog_basement_water,
      url: `${SITE_URL}/blog/crawlspace-encapsulation-cost-nevada/`,
      keywords: 'crawlspace encapsulation cost nevada, crawlspace vapor barrier reno nv, crawlspace moisture repair northern nevada, bre builders crawlspace evaluation',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.article-lede', 'article h2'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does crawlspace encapsulation cost in Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Crawlspace encapsulation in Nevada is project-specific and cannot be accurately quoted without an on-site assessment. Key factors that affect cost include crawlspace size and accessibility, existing mold or pest damage requiring remediation first, drainage issues requiring sump pumps or grading corrections, and insulation requirements. BRE Builders provides free on-site evaluations with written scope. NV #0085999.' } },
        { '@type': 'Question', name: 'Is crawlspace encapsulation worth it in Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — especially in Northern Nevada where clay soils create seasonal moisture pressure, spring snowmelt saturates soil near foundations, and temperature swings drive condensation. Encapsulation prevents subfloor rot, mold growth, pest infestations, and the whole-home humidity problems that result from unprotected crawlspaces. The cost of encapsulation is significantly less than subfloor replacement or mold remediation.' } },
        { '@type': 'Question', name: 'What is the difference between a vapor barrier and full encapsulation?', acceptedAnswer: { '@type': 'Answer', text: 'A vapor barrier is a polyethylene sheet placed on the crawlspace floor to block ground moisture. Full encapsulation also includes wall coverage, vent sealing, insulation of rim joists and ducts, and often a dehumidifier. In Northern Nevada, full encapsulation provides better long-term moisture control than a floor barrier alone.' } },
        { '@type': 'Question', name: 'Do I need to fix existing damage before encapsulation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. If mold, pest damage, rotted joists, or drainage problems are already present, they must be addressed first. Installing a vapor barrier over active mold or failing wood seals the problem in rather than solving it. BRE Builders always evaluates existing conditions before recommending encapsulation scope.' } },
      ],
    },
  ],
}

export default function Blog_CrawlspaceEncapsulationCostNevada() {
  return (
    <BlogTemplate
      title="How Much Does Crawlspace Encapsulation Cost in Nevada?"
      category="Structural Repairs"
      publishDate="September 2025"
      heroImage={IMGS.blog_basement_water}
      heroAlt="Crawlspace moisture damage Nevada — basement water intrusion evaluation BRE Builders Reno NV #0085999"
      excerpt="Crawlspace encapsulation prevents moisture damage, mold, and structural degradation. In Nevada, costs vary based on size, existing damage, and drainage needs. Here is what affects pricing and when to call."
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
          <p>Crawlspace encapsulation seals the space beneath your home against moisture, pests, and mold. In Nevada, where temperatures swing dramatically and soil conditions vary by neighborhood, an unprotected crawlspace is one of the most common sources of whole-home moisture problems, subfloor deterioration, and structural damage. Here is what determines cost — and how to know if you need it.</p>

          <h2>What Crawlspace Encapsulation Involves</h2>

          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Foundation and crawlspace moisture evaluation Reno Nevada — BRE Builders structural inspection NV #0085999"
            caption="Foundation moisture assessment at a Reno property — evaluating existing conditions before recommending encapsulation scope"
          />

          <p>A full encapsulation typically includes: heavy-mil vapor barrier on the ground and walls, sealing of vents, insulation of rim joists and ducts, and remediation of any existing moisture damage, mold, or pest issues. The result is a controlled environment that prevents ground moisture from evaporating upward into the floor system above.</p>

          <h2>Factors That Affect Cost in Nevada</h2>

          <h3>Crawlspace size and accessibility</h3>
          <p>Larger crawlspaces require more materials and labor. Low-clearance or difficult-to-access spaces require additional time and sometimes specialized equipment. These factors add to labor cost and must be assessed on-site.</p>

          <h3>Existing damage requiring remediation first</h3>

          <BlogImage
            src={IMGS.repairs_rot}
            alt="Dry rot and structural damage in crawlspace — subfloor rot repair Reno NV BRE Builders"
            caption="Dry rot in crawlspace framing — this must be remediated before any vapor barrier installation begins"
          />

          <p>If mold, pest damage, rotted joists, or structural deterioration are already present, they must be addressed before encapsulation. Installing a barrier over existing damage seals the problem in and allows it to continue. This remediation adds to total cost but is non-negotiable for a durable result.</p>

          <h3>Drainage requirements</h3>
          <p>Properties with poor drainage, high water tables, or flooding history may require sump pumps, drain tile, or exterior grading corrections in addition to the barrier installation. In Reno neighborhoods near Damonte Ranch, South Reno, and parts of Spanish Springs, this is common following spring snowmelt.</p>

          <h2>When to Call for an Evaluation</h2>

          <BlogImage
            src={IMGS.blog_basement_water}
            alt="Crawlspace water intrusion Nevada — moisture damage basement inspection free evaluation BRE Builders"
            caption="Active moisture intrusion in a Northern Nevada crawlspace — if you see this, call before it reaches the subfloor above"
          />

          <p>Schedule an evaluation if you notice: musty odors in your home, visible mold on crawlspace surfaces, wood rot on joists or beams, evidence of pest activity, cold floors in winter, or soft spots in flooring above the crawlspace.</p>

          <BlogPullQuote>
            Any contractor who quotes crawlspace encapsulation over the phone without seeing the space is guessing. Conditions vary too much by property. A proper evaluation takes 30 minutes and costs nothing. BRE Builders NV #0085999.
          </BlogPullQuote>

          <h2>Frequently Asked Questions</h2>

          <h3>Is crawlspace encapsulation worth it in Nevada?</h3>
          <p>Yes — particularly in Northern Nevada where clay soil expansion, spring snowmelt, and temperature extremes create seasonal moisture pressure against crawlspace walls and floors. The cost of encapsulation is significantly less than the cost of subfloor replacement, mold remediation, or pest damage repair after the fact.</p>

          <h3>How long does crawlspace encapsulation last?</h3>
          <p>A properly installed heavy-mil vapor barrier lasts 15-25 years with annual visual inspections. The encapsulation system as a whole — barrier, insulation, drainage — should be re-evaluated every 5 years or after any significant moisture event.</p>
        </div>
      }
    />
  )
}
