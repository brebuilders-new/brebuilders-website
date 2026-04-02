import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: '20-Year-Old Reno Homes — What to Repair Before It Gets Worse | BRE Builders',
  description: 'At 20 years, Reno homes face hidden wear homeowners miss until damage is done — attic mold, sagging kitchen floors, faulty breaker panels, shifting porch columns. BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=20-Year-Old+Reno+Home+Repairs&sub=8+Hidden+Issues+in+Early+2000s+Reno+Homes&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/reno-home-repairs-20-year/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '20-Year-Old Reno Homes — What to Repair Before It Gets Worse',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-06-01',
      image: IMGS.repairs_foundation,
      url: `${SITE_URL}/blog/reno-home-repairs-20-year/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What repairs do 20-year-old Reno homes need?', acceptedAnswer: { '@type': 'Answer', text: 'Twenty-year-old Reno homes commonly need: attic mold remediation, window frame replacement, sagging kitchen floor repair, cracked shower tile repair, HVAC replacement (furnaces over 18 years old), faulty breaker panel upgrade, shifting porch column repair, and basement water intrusion mitigation.' } },
        { '@type': 'Question', name: 'Why do kitchen floors sag in 20-year-old Reno homes?', acceptedAnswer: { '@type': 'Answer', text: 'Kitchen floors soften under laminate due to long-term subfloor moisture or gaps in vapor barriers below sinks. This is common in Reno homes built between 2000–2005 and requires subfloor repair or replacement before new flooring is installed.' } },
        { '@type': 'Question', name: 'Are Toll Brothers homes in Reno having furnace problems?', acceptedAnswer: { '@type': 'Answer', text: 'Furnaces over 18 years old lose efficiency and risk failure — this is especially common in Toll Brothers subdivisions in South Reno and Sparks built in the early 2000s. BRE Builders can assess your mechanical systems and coordinate HVAC replacement.' } },
        { '@type': 'Question', name: 'How does basement water intrusion happen in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Basements near Damonte Ranch flood in spring when clay soil expands and groundwater rises post-snowmelt. BRE Builders provides waterproofing and drainage solutions for Reno homes with basement water intrusion.' } },
      ],
    },
  ],
}

const ISSUES = [
  {
    title: 'Attic Mold Growth',
    desc: 'Attic plywood molds from warm air trapped by poor vents, often seen in homes built before 2005 in South Reno.',
    img: null,
  },
  {
    title: 'Window Frame Separation',
    desc: 'Vinyl or aluminum window frames detach from sills as shifting slabs and UV exposure weaken anchors over time.',
    img: null,
  },
  {
    title: 'Sagging Kitchen Floors',
    desc: 'Kitchen floors soften under laminate due to long-term subfloor moisture or gaps in vapor barriers below sinks.',
    img: IMGS.blog_20yr_hero,
    imgAlt: 'Sagging kitchen floors 20-year-old Reno home — subfloor moisture damage repair by BRE Builders NV #0085999',
    imgCaption: 'Sagging Kitchen Floors — Subfloor moisture damage common in early 2000s Reno homes',
  },
  {
    title: 'Cracked Shower Tile',
    desc: 'Tile walls around showers crack due to grout decay, allowing water to rot wallboard behind second-floor baths.',
    img: null,
  },
  {
    title: 'Aging Furnace Failure',
    desc: 'Furnaces over 18 years old lose efficiency and risk failure; especially common in Toll Brothers subdivisions.',
    img: null,
  },
  {
    title: 'Faulty Breaker Panels',
    desc: 'Breaker boxes from early 2000s lack GFCI/arc fault protection and may overheat from modern appliance usage.',
    img: null,
  },
  {
    title: 'Shifting Porch Columns',
    desc: 'Stucco porch columns in Double Diamond shift from their bases as builder footings settle and shrink unevenly.',
    img: IMGS.blog_porch,
    imgAlt: 'Shifting porch columns 20-year-old Reno home — Double Diamond structural repair BRE Builders NV #0085999',
    imgCaption: 'Shifting Porch Columns — Builder footings settling in Double Diamond and South Reno',
  },
  {
    title: 'Basement Water Intrusion',
    desc: 'Basements near Damonte Ranch flood in spring when clay soil expands and groundwater rises post-snowmelt.',
    img: IMGS.blog_basement_water,
    imgAlt: 'Basement water intrusion Reno NV — Damonte Ranch clay soil groundwater spring flooding BRE Builders',
    imgCaption: 'Basement Water Intrusion — Damonte Ranch area, spring snowmelt and clay soil expansion',
  },
]

export default function Repairs20YearPage() {
  return (
    <BlogTemplate
      title="20-Year-Old Reno Homes — What to Repair Before It Gets Worse"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Foundation and structural repair 20-year-old Reno home — BRE Builders licensed contractor NV #0085999"
      excerpt="At 20 years old, Reno homes often face hidden wear that homeowners only notice after damage is done. Here are the 8 issues most common in early 2000s Reno construction — and what to do about them."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
      ]}
      relatedPosts={[
        { title: '30-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-30-year', img: IMGS.repairs_rot, alt: '30 year home repairs Reno NV', category: 'Structural Repairs' },
        { title: '10-Year Reno Home Oversights', href: '/blog/reno-home-10-year-maintenance', img: IMGS.svc_repair, alt: '10 year home maintenance Reno NV', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs Reno NV', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>At 20 years old, Reno homes often face hidden wear that homeowners only notice after damage is done. Small issues that were easy to ignore at the 10-year mark have now had another decade to compound. These are the 8 structural and mechanical issues BRE Builders most commonly finds in early 2000s Reno homes.</p>

          <BlogPullQuote>
            Reno home repairs for 20-year-old houses are time-sensitive. The problems common at this age are not cosmetic — they are structural, mechanical, and moisture-related issues that worsen significantly if not addressed.
          </BlogPullQuote>

          {ISSUES.map((issue) => (
            <div key={issue.title}>
              <h2>{issue.title}</h2>
              <p>{issue.desc}</p>
              {issue.img && (
                <BlogImage
                  src={issue.img}
                  alt={issue.imgAlt || ''}
                  caption={issue.imgCaption || ''}
                />
              )}
            </div>
          ))}

          <h2>Free 20-Year Home Assessment in Reno</h2>
          <p>BRE Builders provides structural and repair assessments for 20-year-old homes across Reno, Sparks, Carson City, and Northern Nevada. Licensed NV #0085999 · CA #1093798. Free consultation. Response within 24 hours. Call (775) 391-4517.</p>
        </div>
      }
    />
  )
}
