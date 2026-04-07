import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: '20-Year-Old Reno Homes — 8 Issues to Repair Before They Worsen | BRE Builders',
  description: 'At 20 years, Reno homes face hidden wear — attic mold, sagging kitchen floors, faulty breaker panels, shifting porch columns, basement water intrusion. BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=20-Year-Old+Reno+Home+Repairs&sub=8+Hidden+Issues+in+Early+2000s+Reno+Homes&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/reno-home-repairs-20-year/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '20-Year-Old Reno Homes — 8 Issues to Repair Before They Worsen',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-06-01',
      image: IMGS.blog_20yr_hero,
      url: `${SITE_URL}/blog/reno-home-repairs-20-year/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What repairs do 20-year-old Reno homes need?', acceptedAnswer: { '@type': 'Answer', text: 'Twenty-year-old Reno homes commonly need: attic mold remediation, window frame separation repair, sagging kitchen floor subfloor repair, cracked shower tile and wallboard repair, aging furnace replacement, faulty breaker panel upgrade, shifting porch column repair, and basement water intrusion mitigation.' } },
        { '@type': 'Question', name: 'Why do kitchen floors sag in 20-year-old Reno homes?', acceptedAnswer: { '@type': 'Answer', text: 'Kitchen floors soften under laminate due to long-term subfloor moisture or gaps in vapor barriers below sinks. Common in Reno homes built 2000-2005. Requires subfloor repair before new flooring.' } },
        { '@type': 'Question', name: 'Why are Toll Brothers homes having furnace failures?', acceptedAnswer: { '@type': 'Answer', text: 'Furnaces over 18 years old lose efficiency and risk failure — especially common in Toll Brothers subdivisions in South Reno and Sparks built in the early 2000s.' } },
        { '@type': 'Question', name: 'Why do basements flood near Damonte Ranch?', acceptedAnswer: { '@type': 'Answer', text: 'Basements near Damonte Ranch flood in spring when clay soil expands and groundwater rises post-snowmelt. BRE Builders provides drainage and waterproofing solutions.' } },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function Repairs20YearPage() {
  return (
    <BlogTemplate
      title="20-Year-Old Reno Homes — Issues to Repair Before They Worsen"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.blog_20yr_hero}
      heroAlt="20-year-old Reno home structural repairs — BRE Builders licensed contractor NV #0085999"
      excerpt="At 20 years old, Reno homes often face hidden wear that homeowners only notice after damage is done. These are the 8 structural and mechanical issues BRE Builders most commonly finds in early 2000s Reno homes."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
      ]}
      relatedPosts={[
        { title: '30-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-30-year', img: IMGS.blog_30yr_hero, alt: '30 year home repairs Reno NV', category: 'Structural Repairs' },
        { title: '10-Year Reno Home Oversights', href: '/blog/reno-home-10-year-maintenance', img: IMGS.svc_repair, alt: '10 year home maintenance Reno NV', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs Reno NV', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>At 20 years old, Reno homes often face hidden wear that homeowners only notice after damage is done. Small issues that were easy to ignore at the 10-year mark have now had another decade to compound. These are the 8 issues BRE Builders most commonly finds in early 2000s Reno homes.</p>

          <BlogPullQuote>
            Reno home repairs for 20-year-old houses are time-sensitive. The problems at this age are not cosmetic — they are structural, mechanical, and moisture-related issues that worsen significantly if not addressed.
          </BlogPullQuote>

          <h2>Attic Mold Growth</h2>
          <p>Attic plywood molds from warm air trapped by poor vents, often seen in homes built before 2005 in South Reno.</p>

          <h2>Window Frame Separation</h2>
          <p>Vinyl or aluminum window frames detach from sills as shifting slabs and UV exposure weaken anchors over time.</p>

          <h2>Sagging Kitchen Floors</h2>
          <p>Kitchen floors soften under laminate due to long-term subfloor moisture or gaps in vapor barriers below sinks.</p>
          <BlogImage
            src={IMGS.blog_cracked_shower}
            alt="Cracked shower tile water damage 20-year-old Reno home — wallboard rot repair BRE Builders NV #0085999"
            caption="Cracked Shower Walls — Grout decay allows water to rot wallboard behind second-floor baths"
          />

          <h2>Cracked Shower Walls</h2>
          <p>Tile walls around showers crack due to grout decay, allowing water to rot wallboard behind second-floor baths.</p>

          <h2>Failing HVAC Systems</h2>
          <p>Furnaces over 18 years old lose efficiency and risk failure; especially common in Toll Brothers subdivisions.</p>
          <BlogImage
            src={IMGS.blog_hvac}
            alt="Failing HVAC system 20-year-old Reno home — Toll Brothers furnace replacement BRE Builders NV #0085999"
            caption="Failing HVAC Systems — Toll Brothers subdivisions particularly affected after 18+ years"
          />

          <h2>Faulty Breaker Panels</h2>
          <p>Breaker boxes from early 2000s lack GFCI/arc fault protection and may overheat from modern appliance usage.</p>

          <h2>Shifting Porch Columns</h2>
          <p>Stucco porch columns in Double Diamond shift from their bases as builder footings settle and shrink unevenly.</p>
          <BlogImage
            src={IMGS.blog_porch}
            alt="Shifting porch columns Double Diamond Reno home — builder footing settlement BRE Builders NV #0085999"
            caption="Shifting Porch Columns — Double Diamond builder footings settling and shrinking"
          />

          <h2>Basement Water Intrusion</h2>
          <p>Basements near Damonte Ranch flood in spring when clay soil expands and groundwater rises post-snowmelt.</p>
          <BlogImage
            src={IMGS.blog_basement_water}
            alt="Basement water intrusion Damonte Ranch Reno NV — spring snowmelt clay soil flooding BRE Builders NV #0085999"
            caption="Basement Water Intrusion — Damonte Ranch spring snowmelt and clay soil expansion"
          />

          <h2>Free 20-Year Home Assessment in Reno</h2>
          <p>BRE Builders provides structural and repair assessments for 20-year-old homes across Reno, Sparks, Carson City, and Northern Nevada. Licensed NV #0085999 · CA #1093798. Free consultation. Response within 24 hours. Call (775) 391-4517.</p>
        </div>
      }
    />
  )
}
