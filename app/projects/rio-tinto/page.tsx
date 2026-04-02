import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Rio Tinto Home Renovation | Portfolio',
  description: 'Interior residential renovation project in Rio Tinto, NV by BRE Builders. Drywall, framing, and interior finish work. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Rio+Tinto+Home+Renovation&sub=Interior+Renovation+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/portfolio/rio-tinto-home-renovation-project/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Rio Tinto Home Renovation — BRE Builders Portfolio',
  url: 'https://brebuilders.com/portfolio/rio-tinto-home-renovation-project/',
  image: IMGS.rio_tinto,
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
        </div>
      }
      schema={schema}
    />
  )
}
