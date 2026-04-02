import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "Charolette's Deck — Custom Deck Build Reno NV | Portfolio",
  description: "Custom deck construction in Reno, NV. Smooth sealed surface finish. Licensed deck builder. NV License #0085999.",
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Charolette%27s+Deck+%E2%80%93+Custom+Build&sub=Smooth+Sealed+Surface+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/portfolio/charolettes-deck/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: "Charolette's Deck — BRE Builders Portfolio",
  url: 'https://brebuilders.com/portfolio/charolettes-deck/',
  image: IMGS.deck_charolette,
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
        </div>
      }
      schema={schema}
    />
  )
}
