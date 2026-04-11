import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Arun Hillside Deck Repair Lake Tahoe NV | Portfolio',
  description: 'Hillside deck structural repair at Lake Tahoe, NV. Reinforced support beams and elevated framing. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Arun+Hillside+Deck+Repair&sub=Reinforced+Support+Beams+%C2%B7+Lake+Tahoe+NV&badge=Portfolio`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Arun Hillside Deck Repair Lake Tahoe NV | Portfolio', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Arun Hillside Deck Repair Lake Tahoe NV | Portfolio',
    description: 'Hillside deck structural repair at Lake Tahoe, NV. Reinforced support beams and elevated framing. NV License #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=Arun+Hillside+Deck+Repair&sub=Reinforced+Support+Beams+%C2%B7+Lake+Tahoe+NV&badge=Portfolio`, alt: 'Blue Reef Builders — Arun Hillside Deck Repair Lake Tahoe NV | Portfolio' }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/arun-hillside-deck-repair-lake-tahoe-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'Arun Hillside Deck Repair — BRE Builders Portfolio',
      description: 'Precision hillside deck repair at Lake Tahoe by BRE Builders. Reinforced support beams, elevated framing, structural restoration on steep terrain. NV #0085999.',
      url: 'https://brebuilders.com/projects/arun-deck-repair/',
      image: IMGS.repairs_arun,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders repair decks in Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders repairs hillside and elevated decks throughout Lake Tahoe and Northern Nevada. We handle structural beam reinforcement, railing replacement, deck board replacement, and full structural rehabilitation. All work permitted under NV #0085999.' } },
        { '@type': 'Question', name: 'What makes hillside deck repair in Lake Tahoe different?', acceptedAnswer: { '@type': 'Answer', text: 'Hillside decks at Lake Tahoe face snow loads, freeze-thaw cycling, and steep terrain that accelerate structural wear. BRE Builders assesses load capacity, connection hardware, and ledger attachment before recommending repairs.' } },
        { '@type': 'Question', name: 'How much does deck repair cost in Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Deck repair costs at Lake Tahoe depend on extent of damage, deck size, and structural requirements. BRE Builders provides free on-site estimates. Contact us to schedule a free inspection.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'Arun Deck Repair', item: 'https://brebuilders.com/projects/arun-deck-repair/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function ArunDeckRepairPage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Arun Hillside Deck Repair' },
      ]}
      heroImage={IMGS.repairs_arun}
      heroAlt="Arun Hillside Deck Repair Reinforced Support Beams Elevated Framing Lake Tahoe NV BRE Builders"
      projectType="Hillside Deck Structural Repair · Lake Tahoe, NV"
      location="Lake Tahoe, NV"
      title="Hillside Deck Repair"
      titleItalic="Reinforced for Lake Tahoe."
      description="Hillside deck structural repair at Lake Tahoe, NV — reinforced support beams, elevated framing, snow-load rated. NV License #0085999."
      meta={[
        { label: 'Project Type', value: 'Structural Deck Repair' },
        { label: 'Location', value: 'Lake Tahoe, NV' },
        { label: 'Scope', value: 'Hillside Reinforcement' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.repairs_arun, alt: 'Arun Hillside Deck Repair Reinforced Support Beams Elevated Framing Lake Tahoe BRE Builders', caption: 'Reinforced Support Beams — Elevated Framing' },
        { src: IMGS.repairs_deck_lt, alt: 'Steel Bracket System Deck Repair Lake Tahoe Structural', caption: 'Steel Bracket Reinforcement' },
        { src: IMGS.lt(2), alt: 'Deck Structure After Repair Lake Tahoe BRE Builders', caption: 'Post-Repair Structure' },
        { src: IMGS.lt(14), alt: 'Exterior Deck Renovation Lake Tahoe BRE Builders', caption: 'Exterior Deck — Complete' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Hillside deck structural assessment — elevated framing inspection',
        'Support beam reinforcement and replacement',
        'Elevated framing repair and connection strengthening',
        'Snow-load compliance verification for Lake Tahoe requirements',
        'Post-repair structural documentation',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Hillside Deck.<br /><span className="italic text-teal">Structurally Reinforced.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
            <p>Hillside decks at Lake Tahoe face amplified structural stress — the combination of snow loads, elevated framing exposure, and the compressive forces of hillside terrain makes regular structural inspection and reinforcement essential.</p>
            <p>This repair reinforced the support beams and elevated framing system, bringing the deck up to current Lake Tahoe structural requirements and restoring load-bearing integrity throughout the structure.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders repair hillside decks in Lake Tahoe?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. BRE Builders handles structural beam reinforcement, railing replacement, and full deck rehabilitation on steep terrain at Lake Tahoe. All work permitted under NV #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">What makes hillside deck repair different at Tahoe?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Snow loads, freeze-thaw cycling, and steep terrain accelerate structural wear. BRE Builders assesses load capacity and connection hardware before recommending any repair approach.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
