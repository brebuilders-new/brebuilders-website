import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: '30-Year-Old Reno Homes — Structural Repairs to Act On Now | BRE Builders',
  description: 'A 30-year-old home in Northern Nevada faces real structural degradation — galvanized pipe corrosion, aluminum wiring, unsafe decks, foundation movement. BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=30-Year-Old+Reno+Home+Repairs&sub=8+Structural+Issues+in+1990s+Reno+Homes&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/blog/reno-home-repairs-30-year/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '30-Year-Old Reno Homes — Structural Repairs to Act On Now',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-06-01',
      image: IMGS.repairs_rot,
      url: `${SITE_URL}/blog/reno-home-repairs-30-year/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What structural problems are common in 30-year-old Reno homes?', acceptedAnswer: { '@type': 'Answer', text: 'Thirty-year-old Reno homes built in the 1990s commonly have galvanized pipe corrosion, aluminum wiring risks, unsafe deck framing (pre-2000 joist spacing), foundation movement from clay soil, compacted attic insulation, rusty furnace damage, rodent entry points, and ceiling texture failure.' } },
        { '@type': 'Question', name: 'Are galvanized pipes dangerous in a 30-year-old Reno home?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Galvanized pipes corrode inside over time, causing leaks in wall cavities and rusty water from older fittings. A 30-year-old Reno home with original galvanized supply lines should have them assessed and replaced by a licensed plumber.' } },
        { '@type': 'Question', name: 'Is aluminum wiring dangerous?', acceptedAnswer: { '@type': 'Answer', text: 'Aluminum wiring in outlets, switches, and fixtures can overheat — especially under new dimmers or smart devices. Homes with aluminum wiring require special connectors and periodic inspection by a licensed electrician.' } },
        { '@type': 'Question', name: 'How do I know if my 30-year-old deck is unsafe?', acceptedAnswer: { '@type': 'Answer', text: 'Decks built pre-2000 often lack proper joist spacing for snow load requirements. Signs of structural failure include sagging, soft spots, visible rot at ledger board connections, and wobbling railings. BRE Builders provides free deck structural assessments.' } },
      ],
    },
  ],
}

const ISSUES = [
  {
    title: 'Ceiling Texture Failure',
    desc: 'Popcorn ceilings sag and detach in homes built pre-1995 as rooflines shift and past leaks degrade gypsum board.',
    img: null,
  },
  {
    title: 'Foundation Movement',
    desc: 'Homes in Hidden Valley show diagonal drywall cracks and stuck doors due to long-term soil expansion shifting slabs.',
    img: IMGS.repairs_foundation,
    imgAlt: 'Foundation movement and cracking — 30-year-old Reno home structural repair by BRE Builders NV #0085999',
    imgCaption: 'Foundation Movement — Hidden Valley, Reno NV · Soil expansion shifting slabs',
  },
  {
    title: 'Rodent Entry Points',
    desc: 'Rodents access crawlspaces via gaps in aging mesh barriers, bringing debris and causing insulation movement.',
    img: null,
  },
  {
    title: 'Rusty Furnace Damage',
    desc: 'Rust inside furnaces from 90s humidifiers and hard water accelerates heat exchanger failure and vent pipe damage.',
    img: null,
  },
  {
    title: 'Unsafe Deck Framing',
    desc: 'Decks built pre-2000 often lack proper joist spacing; snow load causes sagging or full structural separation.',
    img: IMGS.repairs_arun,
    imgAlt: 'Unsafe deck framing structural repair Lake Tahoe NV — BRE Builders licensed deck contractor NV #0085999',
    imgCaption: 'Unsafe Deck Framing — Pre-2000 construction lacks proper snow-load joist spacing',
  },
  {
    title: 'Compacted Attic Insulation',
    desc: 'Attics insulated with 1990s batts lose volume and R-value; compacted insulation no longer protects from heat loss.',
    img: null,
  },
  {
    title: 'Galvanized Pipe Corrosion',
    desc: 'Galvanized pipes corrode inside over time, causing leaks in wall cavities and rusty water from older fittings.',
    img: null,
  },
  {
    title: 'Aluminum Wiring Risk',
    desc: 'Aluminum wires overheat in outlets, switches, and fixtures — especially under new dimmers or smart devices today.',
    img: null,
  },
]

export default function Repairs30YearPage() {
  return (
    <BlogTemplate
      title="30-Year-Old Reno Homes — Structural Repairs to Act On Now"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.repairs_rot}
      heroAlt="Structural damage 30-year-old Reno home — dry rot and foundation issues BRE Builders NV #0085999"
      excerpt="A 30-year-old home in Northern Nevada is likely dealing with real structural degradation — from shifting foundations to failing insulation, rusty HVACs, and unsafe wiring. Here are the 8 problems most homeowners miss until it&apos;s too late."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Deck Construction & Repair', href: '/services/decks' },
      ]}
      relatedPosts={[
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_foundation, alt: '20 year home repairs Reno NV', category: 'Structural Repairs' },
        { title: '10-Year Reno Home Oversights', href: '/blog/reno-home-10-year-maintenance', img: IMGS.svc_repair, alt: '10 year home maintenance Reno NV', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs Reno NV', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>A 30-year-old home in Northern Nevada is likely dealing with real structural degradation — from shifting foundations to failing insulation, rusted HVACs, and even unsafe wiring. Whether your house was built in the 90s or before, these are the problems most homeowners miss until it&apos;s too late.</p>

          <BlogPullQuote>
            Reno home repairs for 30-year-old houses require a structural alert. At this age, original building systems have cycled through at least one full replacement — and three decades of Northern Nevada&apos;s climate have tested every component.
          </BlogPullQuote>

          {ISSUES.map((issue, i) => (
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

          <h2>Get a Free 30-Year Home Assessment in Reno</h2>
          <p>BRE Builders provides structural and repair assessments for 30-year-old homes throughout the Reno-Sparks metro, Carson City, Lake Tahoe, and Northern California. Licensed NV #0085999 · CA #1093798. Free consultation. Response within 24 hours. Call (775) 391-4517.</p>
        </div>
      }
    />
  )
}
