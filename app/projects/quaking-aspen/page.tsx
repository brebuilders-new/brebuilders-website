import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Quaking Aspen Structural Repair | Portfolio',
  description: 'Structural repair project at Quaking Aspen, Reno NV. Dry rot removal, framing repair, structural restoration. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Quaking+Aspen+Structural+Repair&sub=Dry+Rot+%26+Structural+Restoration+%C2%B7+Reno+NV&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/portfolio/quaking-aspen-structural-repair/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Quaking Aspen Structural Repair — BRE Builders Portfolio',
  url: 'https://brebuilders.com/portfolio/quaking-aspen-structural-repair/',
  image: IMGS.repairs_rot,
}

export default function QuakingAspenPage() {
  return (
    <ProjectTemplate
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Quaking Aspen Structural Repair' },
      ]}
      heroImage={IMGS.repairs_rot}
      heroAlt="Extensive Dry Rot Exposure Along Wall Panel Structural Damage Quaking Aspen Reno NV BRE Builders"
      projectType="Structural Repair · Reno, NV"
      location="Quaking Aspen, Reno, NV"
      title="Structural Repair"
      titleItalic="Quaking Aspen, Reno."
      description="Complete structural repair including extensive dry rot removal, wall panel replacement, and structural framing restoration. NV License #0085999."
      meta={[
        { label: 'Project Type', value: 'Structural Repair' },
        { label: 'Location', value: 'Reno, NV' },
        { label: 'Scope', value: 'Dry Rot & Framing Repair' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.repairs_rot, alt: 'Extensive Dry Rot Exposure Along Wall Panel Quaking Aspen Structural Damage Reno NV', caption: 'Dry Rot Diagnosis — Extensive Exposure' },
        { src: IMGS.repairs_foundation, alt: 'Foundation and Structural Issues Reno NV BRE Builders', caption: 'Structural Assessment' },
        { src: IMGS.repairs_mine, alt: 'Structural Wall Custom Openings Framing Repair Reno NV BRE Builders', caption: 'Framing Repair Work' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Complete dry rot diagnosis and documentation',
        'Extensive wall panel removal — all compromised material',
        'Structural framing repair and replacement',
        'Siding and exterior restoration',
        'Code-compliant structural rehabilitation throughout',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Structural Repair.<br /><span className="italic text-teal">Root Cause First.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
            <p>This Reno structural repair project showcases BRE Builders&apos; diagnostic approach to dry rot and structural damage. Extensive dry rot was discovered along multiple wall panels — all compromised material was removed and the underlying structure was rebuilt to code.</p>
            <p>Reno&apos;s climate creates unique structural risks. Freeze-thaw cycles and moisture infiltration accelerate wood deterioration. Early diagnosis — like this project demonstrates — prevents significantly more expensive repairs later.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
