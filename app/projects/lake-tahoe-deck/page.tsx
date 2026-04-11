import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Lake Tahoe Deck & Balcony Structural Repair | Portfolio',
  description: 'Deck and balcony structural repair at Lake Tahoe, NV. Steel bracket reinforcement, structural assessment. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Lake+Tahoe+Deck+Structural+Repair&sub=Steel+Bracket+Reinforcement+%C2%B7+Lake+Tahoe+NV&badge=Portfolio`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Lake Tahoe Deck & Balcony Structural Repair | Portfolio', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Tahoe Deck & Balcony Structural Repair | Portfolio',
    description: 'Deck and balcony structural repair at Lake Tahoe, NV. Steel bracket reinforcement, structural assessment. NV License #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=Lake+Tahoe+Deck+Structural+Repair&sub=Steel+Bracket+Reinforcement+%C2%B7+Lake+Tahoe+NV&badge=Portfolio`, alt: 'Blue Reef Builders — Lake Tahoe Deck & Balcony Structural Repair | Portfolio' }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/lake-tahoe-deck-balcony-structural-repair/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'Lake Tahoe Deck Balcony Structural Repair — BRE Builders Portfolio',
      description: 'Steel angle bracket structural repair of deck balcony at Lake Tahoe by BRE Builders. CMU wall anchoring, deck reinforcement. NV #0085999.',
      url: 'https://brebuilders.com/projects/lake-tahoe-deck/',
      image: IMGS.repairs_deck_lt,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders repair balcony decks in Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders repairs balcony and deck structures throughout Lake Tahoe. This project involved steel angle bracket anchoring to a CMU wall, complete structural reinforcement, and deck rehabilitation. All work permitted under NV #0085999.' } },
        { '@type': 'Question', name: 'How do you repair a deck attached to a CMU wall at Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders uses steel angle bracket systems anchored into CMU (concrete masonry unit) walls with rated hardware. Each anchor point is engineered for the snow loads and seismic conditions specific to the Lake Tahoe Basin.' } },
        { '@type': 'Question', name: 'How much does balcony structural repair cost in Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Balcony and deck structural repair costs at Lake Tahoe depend on extent of damage and structural requirements. BRE Builders provides free on-site inspections with written estimates. NV #0085999.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'Lake Tahoe Deck Repair', item: 'https://brebuilders.com/projects/lake-tahoe-deck/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function LakeTahoeDeckPage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Lake Tahoe Deck Repair' },
      ]}
      heroImage={IMGS.repairs_deck_lt}
      heroAlt="Steel Angle Bracket System Securing Exterior Wood Deck to CMU Wall Lake Tahoe Structural Repair BRE Builders"
      projectType="Deck & Balcony Structural Repair · Lake Tahoe, NV"
      location="Lake Tahoe, NV"
      title="Deck & Balcony"
      titleItalic="Structural Repair, Lake Tahoe."
      description="Structural repair of an exterior deck and balcony at Lake Tahoe, NV. Steel angle bracket system, structural reinforcement, snow-load rated. NV License #0085999."
      meta={[
        { label: 'Project Type', value: 'Deck Structural Repair' },
        { label: 'Location', value: 'Lake Tahoe, NV' },
        { label: 'Scope', value: 'Structural Reinforcement' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.repairs_deck_lt, alt: 'Steel Angle Brackets Securing Exterior Wood Deck CMU Wall Lake Tahoe Structural Repair', caption: 'Steel Angle Bracket System' },
        { src: IMGS.repairs_arun, alt: 'Reinforced Support Beams Elevated Framing Hillside Deck Lake Tahoe BRE Builders', caption: 'Reinforced Support Beams' },
        { src: IMGS.lt(2), alt: 'Deck and Exterior Structure Lake Tahoe Renovation BRE Builders', caption: 'Deck Structure — Post-Repair' },
        { src: IMGS.lt(3), alt: 'Deck Railing and Walkway Lake Tahoe Structural Work BRE Builders', caption: 'Railing and Walkway' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Structural assessment of deck and balcony connection points',
        'Steel angle bracket installation — deck to CMU wall',
        'Support beam reinforcement and elevated framing',
        'Snow-load rating verification and documentation',
        'Deck surface and railing inspection and repair',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Snow-Load Rated.<br /><span className="italic text-teal">Structurally Sound.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
            <p>Lake Tahoe decks face some of the most demanding structural requirements in Northern Nevada — snow loads can reach 200 lbs per square foot. This deck and balcony repair project reinforced the connection between the wood deck structure and the concrete masonry wall using a custom steel angle bracket system.</p>
            <p>The repair addressed structural movement that develops over time at Lake Tahoe properties due to freeze-thaw cycles, snow load, and UV degradation. BRE Builders assesses the full structural connection before recommending repairs — not just the surface symptoms.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders repair balcony decks in Lake Tahoe?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. This project involved steel angle bracket anchoring to a CMU wall with full structural reinforcement. All work permitted under NV #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">How is deck repair different at Lake Tahoe?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Tahoe Basin decks require hardware rated for snow loads and seismic conditions specific to the region. BRE Builders engineers each repair to those standards.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
