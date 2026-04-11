import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: '30-Year-Old Reno Homes — 8 Structural Repairs to Act On Now | BRE Builders',
  description: 'A 30-year-old home in Northern Nevada is dealing with real structural degradation — galvanized pipe corrosion, aluminum wiring, unsafe deck framing, foundation movement. BRE Builders NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=30-Year-Old+Reno+Home+Repairs&sub=8+Structural+Issues+in+1990s+Reno+Homes&badge=Structural+Repairs`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — 30-Year-Old Reno Homes — 8 Structural Repairs to Act On Now | BRE Builders', }] },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: '30-Year-Old Reno Homes — 8 Structural Repairs to Act On Now | BRE Buil',
    description: 'A 30-year-old home in Northern Nevada is dealing with real structural degradation — galvanized pipe corrosion, aluminum wiring, unsafe deck framing, founda',
    images: [{ url: `${SITE_URL}/api/og?title=30-Year-Old+Reno+Home+Repairs&sub=8+Structural+Issues+in+1990s+Reno+Homes&badge=Structural+Repairs`, alt: 'Blue Reef Builders — 30-Year-Old Reno Homes — 8 Structural Repairs to Act On Now | BRE Builders' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/reno-home-repairs-30-year/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '30-Year-Old Reno Homes — 8 Structural Repairs to Act On Now',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
      datePublished: '2025-06-01',
      image: IMGS.blog_30yr_hero,
      url: `${SITE_URL}/blog/reno-home-repairs-30-year/`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What structural problems are common in 30-year-old Reno homes?', acceptedAnswer: { '@type': 'Answer', text: 'Thirty-year-old Reno homes built in the 1990s commonly have: ceiling texture failure, foundation movement (Hidden Valley soil expansion), rodent entry via aging crawlspace mesh, rusty furnace damage from 90s humidifiers, unsafe deck framing (pre-2000 joist spacing), compacted attic insulation, galvanized pipe corrosion, and aluminum wiring risk.' } },
        { '@type': 'Question', name: 'Is foundation movement normal in 30-year-old Reno homes?', acceptedAnswer: { '@type': 'Answer', text: 'Homes in Hidden Valley and other Reno neighborhoods show diagonal drywall cracks and stuck doors due to long-term soil expansion shifting slabs. BRE Builders provides free foundation assessments.' } },
        { '@type': 'Question', name: 'Is aluminum wiring dangerous in a 30-year-old Reno home?', acceptedAnswer: { '@type': 'Answer', text: 'Aluminum wires overheat in outlets, switches, and fixtures — especially under new dimmers or smart devices. Homes with aluminum wiring require special connectors and periodic inspection.' } },
        { '@type': 'Question', name: 'How do I know if my 30-year-old deck is unsafe in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Decks built pre-2000 often lack proper joist spacing for snow load requirements. Signs include sagging, soft spots, and visible rot at ledger connections. BRE Builders provides free deck structural assessments in Reno and Lake Tahoe.' } },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function Repairs30YearPage() {
  return (
    <BlogTemplate
      title="30-Year-Old Reno Homes — Structural Repairs to Act On Now"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.blog_30yr_hero}
      heroAlt="30-year-old Reno home structural repairs — BRE Builders licensed contractor NV #0085999"
      excerpt="A 30-year-old home in Northern Nevada is likely dealing with real structural degradation — from shifting foundations to failing insulation, rusty HVACs, and unsafe wiring. These are the 8 problems most homeowners miss until it is too late."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Deck Construction & Repair', href: '/services/decks' },
      ]}
      relatedPosts={[
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.blog_20yr_hero, alt: '20 year home repairs Reno NV', category: 'Structural Repairs' },
        { title: '10-Year Reno Home Oversights', href: '/blog/reno-home-10-year-maintenance', img: IMGS.svc_repair, alt: '10 year home maintenance Reno NV', category: 'Structural Repairs' },
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs Reno NV', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>A 30-year-old home in Northern Nevada is likely dealing with real structural degradation — from shifting foundations to failing insulation, rusted HVACs, and even unsafe wiring. Whether your house was built in the 90s or before, these are the problems most homeowners miss until it&apos;s too late.</p>

          <BlogPullQuote>
            Reno home repairs for 30-year-old houses require a structural alert. At this age, original building systems have cycled through at least one full replacement — and three decades of Northern Nevada&apos;s climate have tested every component.
          </BlogPullQuote>

          <h2>Ceiling Texture Failure</h2>
          <p>Popcorn ceilings sag and detach in homes built pre-1995 as rooflines shift and past leaks degrade gypsum board.</p>

          <h2>Foundation Movement</h2>
          <p>Homes in Hidden Valley show diagonal drywall cracks and stuck doors due to long-term soil expansion shifting slabs.</p>
          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Foundation movement diagonal drywall cracks 30-year-old Hidden Valley Reno home — BRE Builders NV #0085999"
            caption="Foundation Movement — Hidden Valley, Reno NV · Long-term clay soil expansion"
          />

          <h2>Rodent Entry Points</h2>
          <p>Rodents access crawlspaces via gaps in aging mesh barriers, bringing debris and causing insulation movement.</p>

          <h2>Rusty Furnace Damage</h2>
          <p>Rust inside furnaces from 90s humidifiers and hard water accelerates heat exchanger failure and vent pipe damage.</p>
          <BlogImage
            src={IMGS.blog_furnace}
            alt="Rusty furnace damage 30-year-old Reno home — heat exchanger failure BRE Builders structural repair NV #0085999"
            caption="Rusty Furnace Damage — 90s humidifiers and hard water accelerate failure"
          />

          <h2>Unsafe Deck Framing</h2>
          <p>Decks built pre-2000 often lack proper joist spacing; snow load causes sagging or full structural separation.</p>
          <BlogImage
            src={IMGS.blog_unsafe_deck}
            alt="Unsafe deck framing pre-2000 Reno home — snow load structural failure BRE Builders deck repair NV #0085999"
            caption="Unsafe Deck Framing — Pre-2000 construction lacks current snow-load joist spacing"
          />

          <h2>Compacted Attic Insulation</h2>
          <p>Attics insulated with 1990s batts lose volume and R-value; compacted insulation no longer protects from heat loss.</p>

          <h2>Galvanized Pipe Corrosion</h2>
          <p>Galvanized pipes corrode inside over time, causing leaks in wall cavities and rusty water from older fittings.</p>
          <BlogImage
            src={IMGS.blog_pipes}
            alt="Galvanized pipe corrosion 30-year-old Reno home — wall cavity leaks rusty water BRE Builders NV #0085999"
            caption="Galvanized Pipe Corrosion — Inside corrosion causes wall cavity leaks and rusty water"
          />

          <h2>Aluminum Wiring Risk</h2>
          <p>Aluminum wires overheat in outlets, switches, and fixtures — especially under new dimmers or smart devices today.</p>
          <BlogImage
            src={IMGS.blog_wiring}
            alt="Aluminum wiring risk 30-year-old Reno home — overheating outlets smart devices BRE Builders NV #0085999"
            caption="Aluminum Wiring Risk — Overheats under modern dimmers and smart devices"
          />

          <h2>Get a Free 30-Year Home Assessment in Reno</h2>
          <p>BRE Builders provides structural and repair assessments for 30-year-old homes throughout Reno, Sparks, Carson City, Lake Tahoe, and Northern California. Licensed NV #0085999 · CA #1093798. Free consultation. Response within 24 hours. Call (775) 391-4517.</p>
        </div>
      }
    />
  )
}
