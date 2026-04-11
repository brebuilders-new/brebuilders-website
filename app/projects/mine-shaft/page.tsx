import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Mine Shaft Framing & Shed Construction Reno NV | Portfolio',
  description: 'Custom framing and shed construction in Reno, NV. Structural wall construction with custom openings. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Mine+Shaft+Framing+%26+Shed+Construction&sub=Custom+Framing+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Mine Shaft Framing & Shed Construction Reno NV | Portfolio', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Mine Shaft Framing & Shed Construction Reno NV | Portfolio',
    description: 'Custom framing and shed construction in Reno, NV. Structural wall construction with custom openings. NV License #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=Mine+Shaft+Framing+%26+Shed+Construction&sub=Custom+Framing+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, alt: 'Blue Reef Builders — Mine Shaft Framing & Shed Construction Reno NV | Portfolio' }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/mine-shaft-framing-shed-construction-reno-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'Mine Shaft Framing & Shed Construction — BRE Builders Portfolio',
      description: 'Custom framing and shed construction over a mine shaft in Reno NV by BRE Builders. Precision structural work, safety compliance. NV #0085999.',
      url: 'https://brebuilders.com/projects/mine-shaft/',
      image: IMGS.repairs_mine,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders do specialty framing and custom construction in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders handles specialty construction projects in Reno including this mine shaft framing project. We manage complex structural requirements, safety compliance, and permitting for non-standard construction projects. NV License #0085999.' } },
        { '@type': 'Question', name: 'What is involved in constructing over a mine shaft?', acceptedAnswer: { '@type': 'Answer', text: 'Building over a mine shaft requires structural assessment of the existing opening, engineered framing to span and cap the shaft safely, and full building department permitting. BRE Builders handled all structural and permit requirements for this Reno project.' } },
        { '@type': 'Question', name: 'Does BRE Builders build custom sheds and outbuildings in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders constructs custom sheds, outbuildings, and accessory structures in Reno and Northern Nevada. All work is permitted and inspected. NV License #0085999.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'Mine Shaft Framing', item: 'https://brebuilders.com/projects/mine-shaft/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function MineShaftPage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Mine Shaft Framing & Shed Construction' },
      ]}
      heroImage={IMGS.repairs_mine}
      heroAlt="Custom Structural Wall Construction with Custom Openings Mine Shaft Framing Shed Reno NV BRE Builders"
      projectType="Custom Framing & Structure · Reno, NV"
      location="Reno, NV"
      title="Mine Shaft Framing"
      titleItalic="Custom Build, Reno NV."
      description="Custom structural framing and shed construction in Reno, NV. Structural walls with custom openings built to code. NV License #0085999."
      meta={[
        { label: 'Project Type', value: 'Custom Framing & Shed' },
        { label: 'Location', value: 'Reno, NV' },
        { label: 'Scope', value: 'Structural Framing' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.repairs_mine, alt: 'Custom Structural Wall with Custom Openings Mine Shaft Framing Reno NV BRE Builders', caption: 'Structural Wall — Custom Openings' },
        { src: IMGS.repairs_rot, alt: 'Framing and Structural Work Reno NV BRE Builders', caption: 'Structural Framing Work' },
        { src: IMGS.svc_repair, alt: 'Custom Construction Framing BRE Builders Reno NV', caption: 'Construction Detail' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Structural framing design and construction',
        'Custom wall openings — cut and framed to spec',
        'Permit-compliant structural work throughout',
        'Shed and outbuilding construction',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Custom Framing.<br /><span className="italic text-teal">Built to Spec.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
            <p>This custom framing project involved constructing structural walls with custom openings — work that requires precise structural engineering and code-compliant execution. BRE Builders handled design coordination, permitting, and full construction in-house.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders do specialty framing in Reno?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. BRE Builders handles complex structural requirements, safety compliance, and permitting for non-standard construction projects across Reno. NV License #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE build custom sheds and outbuildings in Reno?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. Custom sheds, outbuildings, and accessory structures throughout Reno and Northern Nevada — all permitted and inspected.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
