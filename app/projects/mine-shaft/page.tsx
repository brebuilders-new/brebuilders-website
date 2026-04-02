import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Mine Shaft Framing & Shed Construction Reno NV | Portfolio',
  description: 'Custom framing and shed construction in Reno, NV. Structural wall construction with custom openings. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Mine+Shaft+Framing+%26+Shed+Construction&sub=Custom+Framing+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/mine-shaft-framing-shed-construction-reno-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Mine Shaft Framing & Shed Construction — BRE Builders Portfolio',
  url: 'https://brebuilders.com/portfolio/mine-shaft-framing-shed-construction-reno-nv/',
  image: IMGS.repairs_mine,
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
        </div>
      }
      schema={schema}
    />
  )
}
