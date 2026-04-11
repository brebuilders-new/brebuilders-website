import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Quaking Aspen Structural Repair | Portfolio',
  description: 'Structural repair project at Quaking Aspen, Reno NV. Dry rot removal, framing repair, structural restoration. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Quaking+Aspen+Structural+Repair&sub=Dry+Rot+%26+Structural+Restoration+%C2%B7+Reno+NV&badge=Portfolio`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Quaking Aspen Structural Repair | Portfolio', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Quaking Aspen Structural Repair | Portfolio',
    description: 'Structural repair project at Quaking Aspen, Reno NV. Dry rot removal, framing repair, structural restoration. NV License #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=Quaking+Aspen+Structural+Repair&sub=Dry+Rot+%26+Structural+Restoration+%C2%B7+Reno+NV&badge=Portfolio`, alt: 'Blue Reef Builders — Quaking Aspen Structural Repair | Portfolio' }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/quaking-aspen-structural-repair/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'Quaking Aspen Structural Repair — BRE Builders Portfolio',
      description: 'Structural dry rot repair and framing rehabilitation at Quaking Aspen, Reno NV by BRE Builders. NV License #0085999.',
      url: 'https://brebuilders.com/projects/quaking-aspen/',
      image: IMGS.repairs_rot,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do you repair dry rot in a Reno home?', acceptedAnswer: { '@type': 'Answer', text: 'Dry rot repair starts with identifying the full extent of damage — which is often larger than visible. BRE Builders removes all compromised material, treats the affected area, rebuilds the structural framing to code, and restores the exterior finish. All work is permitted and inspected. NV License #0085999.' } },
        { '@type': 'Question', name: 'How much does structural repair cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides free on-site inspections for structural repairs in Reno. Pricing depends on the extent of damage, structural complexity, and materials required. Contact us to schedule a free inspection — we assess before we quote.' } },
        { '@type': 'Question', name: 'Can dry rot spread if not repaired?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dry rot is a fungal decay that spreads through wood with moisture present. Leaving it untreated allows it to progress into adjacent framing members and structural elements. Early intervention — like the Quaking Aspen project — prevents significantly more expensive repairs.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'Quaking Aspen Structural Repair', item: 'https://brebuilders.com/projects/quaking-aspen/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

export default function QuakingAspenPage() {
  return (
    <ProjectTemplate
      theme="gallery"
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
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">How do you repair dry rot in a Reno home?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Dry rot repair starts with identifying the full extent of damage — often larger than visible. BRE Builders removes all compromised material, rebuilds structural framing to code, and restores the exterior finish. All work permitted and inspected under NV #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Can dry rot spread if not repaired?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. Dry rot is a fungal decay that spreads through wood wherever moisture is present. Early intervention — as this project shows — prevents it from progressing into adjacent structural members and becoming a far more expensive repair.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
