import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Rio Tinto Home Renovation | Portfolio',
  description: 'Interior residential renovation project in Rio Tinto, NV by BRE Builders. Drywall, framing, and interior finish work. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Rio+Tinto+Home+Renovation&sub=Interior+Renovation+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Rio Tinto Home Renovation | Portfolio', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Rio Tinto Home Renovation | Portfolio',
    description: 'Interior residential renovation project in Rio Tinto, NV by BRE Builders. Drywall, framing, and interior finish work. NV License #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=Rio+Tinto+Home+Renovation&sub=Interior+Renovation+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, alt: 'Blue Reef Builders — Rio Tinto Home Renovation | Portfolio' }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/rio-tinto-home-renovation-project/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'Rio Tinto Home Renovation — BRE Builders Portfolio',
      description: 'Full-scale residential renovation in Rio Tinto Reno NV by BRE Builders. Exterior housewrap, siding, windows, drywall, custom bathroom tiling. NV #0085999.',
      url: 'https://brebuilders.com/projects/rio-tinto/',
      image: IMGS.rio_tinto,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders do full home renovations in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders completes full-scale residential renovations in Reno including this Rio Tinto project — exterior housewrap, siding, windows, interior drywall, and custom bathroom tiling. All work permitted under NV #0085999.' } },
        { '@type': 'Question', name: 'What does a full home renovation include in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'A full home renovation with BRE Builders can include exterior siding replacement, window installation, structural repairs, interior drywall finishing, kitchen and bathroom remodeling, flooring, and finish work throughout. BRE Builders manages permits, trades, and construction under a single contract.' } },
        { '@type': 'Question', name: 'How much does a home renovation cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'Home renovation costs in Reno vary significantly based on scope, size, and finish level. BRE Builders provides free on-site estimates with detailed line-item pricing. Contact us to discuss your renovation project. NV #0085999.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'Rio Tinto Renovation', item: 'https://brebuilders.com/projects/rio-tinto/' },
      ],
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/projects/rio-tinto/#hero-image',
      url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Interior-Living-Room-Drywall-Prep-%E2%80%93-Rio-Tinto-1000x1000.jpg',
      contentUrl: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Interior-Living-Room-Drywall-Prep-%E2%80%93-Rio-Tinto-1000x1000.jpg',
      name: 'Rio Tinto Home Renovation — Interior Living Room Reno NV | BRE Builders',
      description: 'Interior living room renovation with drywall preparation at Rio Tinto residential project, Reno, NV. BRE Builders licensed general contractor NV #0085999.',
      caption: 'Rio Tinto home renovation — interior living room drywall preparation, Reno NV by BRE Builders',
      encodingFormat: 'image/jpeg',
      width: 1000,
      height: 1000,
      representativeOfPage: true,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: 'https://brebuilders.com/terms-of-service/',
      keywords: 'BRE Builders, home renovation Reno NV, interior renovation, licensed contractor nevada, NV #0085999',
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function RioTintoPage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Rio Tinto Home Renovation' },
      ]}
      heroImage={IMGS.rio_tinto}
      heroAlt="Interior Living Room Drywall Preparation Rio Tinto Home Renovation BRE Builders Reno NV"
      projectType="Residential Renovation · Rio Tinto, NV"
      location="Rio Tinto, NV"
      title="Interior Home Renovation"
      titleItalic="Rio Tinto, Nevada."
      description="Interior renovation including drywall preparation, framing, and finish work by BRE Builders. NV License #0085999."
      meta={[
        { label: 'Project Type', value: 'Residential Renovation' },
        { label: 'Location', value: 'Rio Tinto, NV' },
        { label: 'Scope', value: 'Interior Renovation' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.rio_tinto, alt: 'Interior Living Room Drywall Preparation Rio Tinto Home Renovation BRE Builders', caption: 'Interior Renovation — Living Room' },
        { src: IMGS.repairs_rot, alt: 'Wall Panel Structural Work Interior Renovation Reno NV BRE Builders', caption: 'Structural Framing Work' },
        { src: IMGS.lt(5), alt: 'Interior Finish Work Updated Materials Home Renovation BRE Builders', caption: 'Interior Finish Work' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Interior drywall preparation and installation',
        'Structural framing and wall work',
        'Interior finish work and materials',
        'Permit-compliant renovation throughout',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Residential Renovation<br /><span className="italic text-teal">Rio Tinto, NV.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
            <p>This Rio Tinto residential renovation showcases BRE Builders&apos; interior renovation work — drywall preparation, framing, and finish work executed to permit-compliant standards throughout the home.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders do full home renovations in Reno NV?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. This Rio Tinto project included exterior housewrap, siding, windows, interior drywall finishing, and custom bathroom tiling. All work permitted under NV #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">What does a full home renovation include with BRE Builders?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Exterior siding, windows, structural repairs, drywall, kitchen and bath remodeling, flooring, and finishes — all under one contract with one team.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
