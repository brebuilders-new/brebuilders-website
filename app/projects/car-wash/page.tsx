import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Car Wash Construction Reno NV — Commercial Concrete | Portfolio',
  description: 'Commercial car wash construction in Reno, NV. Concrete slab, utility access, commercial build. NV License #0085999. BRE Builders.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Car+Wash+Construction+Reno+NV&sub=Commercial+Concrete+%26+Build-Out+%C2%B7+Reno+NV&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/car-wash-construction-reno-nv-concrete-slab-foundation/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'Car Wash Construction Reno NV — BRE Builders Portfolio',
      description: 'Commercial concrete slab and car wash construction in Reno NV by BRE Builders. Site prep, utility integration, commercial build-out. NV #0085999.',
      url: 'https://brebuilders.com/projects/car-wash/',
      image: IMGS.concrete_slab,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders do commercial concrete work in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders handles commercial concrete slabs, foundations, and site concrete in Reno and Northern Nevada. This car wash project involved a large utility-access commercial slab with drainage integration and complete commercial build-out. Licensed NV #0085999.' } },
        { '@type': 'Question', name: 'What is involved in commercial site prep for a car wash in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Commercial car wash construction requires excavation, grading, utility rough-in, drainage system design, commercial-grade concrete slab pours with utility access points, and coordination of all mechanical, electrical, and plumbing trades. BRE Builders manages the full project from permits through final inspection.' } },
        { '@type': 'Question', name: 'Can BRE Builders handle commercial permits in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders manages all commercial permit applications with the City of Reno and Washoe County — including commercial building permits, utility permits, and final occupancy inspections. NV License #0085999.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'Car Wash Construction Reno NV', item: 'https://brebuilders.com/projects/car-wash/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

export default function CarWashPage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Car Wash Construction Reno' },
      ]}
      heroImage={IMGS.concrete_slab}
      heroAlt="Commercial Concrete Slab Pour with Utility Access Car Wash Construction Reno NV BRE Builders"
      projectType="Commercial Construction · Reno, NV"
      location="Reno, NV"
      title="Car Wash Construction"
      titleItalic="Reno, Nevada."
      description="Commercial car wash construction in Reno, NV — complete concrete slab with utility access, drainage, and full commercial build-out. NV License #0085999."
      meta={[
        { label: 'Project Type', value: 'Commercial Construction' },
        { label: 'Location', value: 'Reno, NV' },
        { label: 'Scope', value: 'Concrete Slab + Build-Out' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.concrete_slab, alt: 'Commercial Concrete Slab Pour with Utility Access Car Wash Reno NV BRE Builders', caption: 'Concrete Slab Pour — Utility Access' },
        { src: IMGS.svc_commercial, alt: 'Commercial Construction Reno NV BRE Builders', caption: 'Commercial Construction' },
        { src: IMGS.svc_concrete, alt: 'Concrete Work Commercial Reno NV BRE Builders', caption: 'Concrete Work Detail' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Commercial concrete slab pour with integrated utility access',
        'Drainage system design and installation',
        'Commercial build-out — structure through finishes',
        'Full permit handling — City of Reno commercial permits',
        'Coordination of MEP trades throughout',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            From Strikes to Suds.<br /><span className="italic text-teal">A Reno Transformation.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
            <p>This commercial project converted an existing Reno property into a fully operational car wash — requiring new concrete slab construction with utility access, drainage integration, and complete commercial build-out from the ground up.</p>
            <p>BRE Builders managed the entire project from permit application through final inspection. Commercial concrete work at this scale requires precise coordination of poured sections, utility stub-outs, and drainage slopes — all executed within commercial code requirements.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders do commercial concrete work in Reno?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. BRE Builders handles commercial concrete slabs, foundations, and site concrete across Reno and Northern Nevada. This car wash project involved a large utility-access commercial slab with drainage integration and complete build-out. Licensed NV #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Can BRE Builders handle commercial permits in Reno?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. BRE Builders manages all commercial permit applications with the City of Reno and Washoe County — including commercial building permits, utility permits, and final occupancy inspections.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
