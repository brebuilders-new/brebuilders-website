import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "Charolette's Deck — Custom Deck Build Reno NV | Portfolio",
  description: "Custom deck construction in Reno, NV. Smooth sealed surface finish. Licensed deck builder. NV License #0085999.",
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Charolette%27s+Deck+%E2%80%93+Custom+Build&sub=Smooth+Sealed+Surface+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Charolette', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Charolette',
    description: 'Custom deck construction in Reno, NV. Smooth sealed surface finish. Licensed deck builder. NV License #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=Charolette%27s+Deck+%E2%80%93+Custom+Build&sub=Smooth+Sealed+Surface+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, alt: 'Blue Reef Builders — Charolette' }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/charolettes-deck/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: "Charolette's Deck — BRE Builders Portfolio",
      description: 'Custom deck build in Sparks NV by BRE Builders. Smooth sealed surface finish, custom design. Licensed NV #0085999.',
      url: 'https://brebuilders.com/projects/charolettes-deck/',
      image: IMGS.deck_charolette,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders build custom decks in Sparks NV?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders builds custom decks in Sparks, Reno, and throughout Northern Nevada. We handle design, permitting, and construction — from simple ground-level decks to elevated multi-level structures. NV License #0085999.' } },
        { '@type': 'Question', name: 'What deck materials does BRE Builders use in Reno and Sparks?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders uses pressure-treated lumber, composite decking (including Trex), and sealed concrete surfaces depending on project requirements and client preference. All materials are selected for Northern Nevada climate durability.' } },
        { '@type': 'Question', name: 'How much does a custom deck cost in Reno or Sparks NV?', acceptedAnswer: { '@type': 'Answer', text: 'Custom deck costs in Reno and Sparks depend on size, materials, and complexity. BRE Builders provides free on-site estimates. Contact us to discuss your deck project.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: "Charolette's Deck", item: 'https://brebuilders.com/projects/charolettes-deck/' },
      ],
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/projects/charolettes-deck/#hero-image',
      url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Charolettes-Finished-Deck-%E2%80%93-Smooth-Sealed-Surface-1000x1000.jpg',
      contentUrl: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Charolettes-Finished-Deck-%E2%80%93-Smooth-Sealed-Surface-1000x1000.jpg',
      name: "Charolette's Finished Deck — Custom Deck Build Reno NV | BRE Builders",
      description: 'Custom deck construction with smooth sealed surface finish in Reno, NV. Properly sloped for drainage, sealed for UV and weather resistance. BRE Builders NV #0085999.',
      caption: "Charolette's finished deck — smooth sealed custom build, Reno NV by BRE Builders",
      encodingFormat: 'image/jpeg',
      width: 1000,
      height: 1000,
      representativeOfPage: true,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: 'https://brebuilders.com/terms-of-service/',
      keywords: 'BRE Builders, custom deck Reno NV, deck construction, licensed contractor nevada, NV #0085999',
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function CharoletteDeckPage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: "Charolette's Deck" },
      ]}
      heroImage={IMGS.deck_charolette}
      heroAlt="Charolette's Finished Deck Smooth Sealed Surface Custom Deck Build BRE Builders Reno NV"
      projectType="Custom Deck Build · Reno, NV"
      location="Reno, NV"
      title="Charolette's Deck"
      titleItalic="Custom Built. Reno NV."
      description="Custom deck construction in Reno, NV — smooth sealed surface finish, structural framing, railing installation. NV License #0085999."
      meta={[
        { label: 'Project Type', value: 'Custom Deck Build' },
        { label: 'Location', value: 'Reno, NV' },
        { label: 'Finish', value: 'Smooth Sealed Surface' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.deck_charolette, alt: "Charolette's Finished Deck Smooth Sealed Surface Custom Build BRE Builders Reno NV", caption: "Completed Deck — Sealed Surface" },
        { src: IMGS.svc_deck, alt: 'Custom Deck Construction Reno NV BRE Builders', caption: 'Deck Construction' },
        { src: IMGS.repairs_arun, alt: 'Deck Support Structure Framing BRE Builders Reno NV', caption: 'Structural Framing' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Custom deck design and structural engineering',
        'Foundation and post installation',
        'Framing and structural deck build',
        'Smooth sealed surface application',
        'Railing installation — code-compliant',
        'Final inspection and permit close-out',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Custom Built.<br /><span className="italic text-teal">Sealed to Last.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
            <p>This custom deck build in Reno delivered a smooth, sealed surface finish — designed for durability through Nevada&apos;s freeze-thaw cycles and UV exposure. BRE Builders handled structural design, permitting, and complete construction in-house.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders build custom decks in Sparks NV?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. BRE Builders builds custom decks in Sparks, Reno, and Northern Nevada — design, permits, and construction under one contract. NV License #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">What deck materials does BRE Builders use?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Pressure-treated lumber, composite decking, and sealed concrete surfaces — all selected for Northern Nevada climate durability.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
