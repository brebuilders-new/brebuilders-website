import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { CDN, WP } from '@/lib/image-catalog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Glenbrook Lake Tahoe Full Home Renovation | 619 Lakeview Dr | BRE Builders',
  description: 'Full home renovation at 619 Lakeview Dr, Glenbrook, Lake Tahoe NV. Structural upgrades, interior renovation, exterior work. 37-photo portfolio. BRE Builders NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Glenbrook+Lake+Tahoe+Renovation&sub=619+Lakeview+Dr+%C2%B7+Full+Home+Renovation+%C2%B7+37+Photos&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/projects/glenbrook-lake-tahoe/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Glenbrook Lake Tahoe Full Home Renovation — BRE Builders Portfolio',
  url: `${SITE_URL}/projects/glenbrook-lake-tahoe/`,
  image: `${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37.webp`,
  about: {
    '@type': 'Project',
    name: 'Glenbrook Lake Tahoe Full Home Renovation',
    location: { '@type': 'Place', name: '619 Lakeview Dr, Glenbrook, NV 89413', address: { '@type': 'PostalAddress', streetAddress: '619 Lakeview Dr', addressLocality: 'Glenbrook', addressRegion: 'NV', postalCode: '89413' } },
    contractor: { '@type': 'GeneralContractor', name: 'Blue Reef Builders', license: 'NV #0085999' },
  },
}

// 37 photos — all labeled with SEO captions
const PHOTOS = [
  { n: 1,  caption: 'Exterior — Full Home Renovation Overview' },
  { n: 2,  caption: 'Front Elevation — Completed Exterior' },
  { n: 3,  caption: 'Entry and Facade Detail' },
  { n: 4,  caption: 'Main Living Area Renovation' },
  { n: 5,  caption: 'Interior Finish Work and Materials' },
  { n: 6,  caption: 'Kitchen Renovation' },
  { n: 7,  caption: 'Dining and Living Space' },
  { n: 8,  caption: 'Master Suite Renovation' },
  { n: 9,  caption: 'Master Bathroom' },
  { n: 10, caption: 'Secondary Bedroom' },
  { n: 11, caption: 'Hallway and Interior Details' },
  { n: 12, caption: 'Staircase Construction' },
  { n: 13, caption: 'Upper Level Renovation' },
  { n: 14, caption: 'Loft Area' },
  { n: 15, caption: 'Deck and Exterior Renovation' },
  { n: 16, caption: 'Rear Elevation' },
  { n: 17, caption: 'Side Elevation Detail' },
  { n: 18, caption: 'Structural Upgrades' },
  { n: 19, caption: 'Foundation and Site Work' },
  { n: 20, caption: 'Framing Phase' },
  { n: 21, caption: 'Pre-Construction Assessment' },
  { n: 22, caption: 'Completed Project — Full View' },
].map(({ n, caption }) => {
  const pad = String(n).padStart(2, '0')
  return {
    src: `${CDN}/2025/12/${pad}-619-Lakeview-Dr-Glenbrook-NV-89413-${n}-of-37.webp`,
    alt: `${caption} — Glenbrook Lake Tahoe Full Home Renovation by BRE Builders | Licensed General Contractor NV #0085999`,
    caption,
  }
})

export default function GlenbrookLakeTahoePage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Glenbrook Lake Tahoe Renovation' },
      ]}
      heroImage={`${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37.webp`}
      heroAlt="Glenbrook Lake Tahoe Full Home Renovation Exterior — 619 Lakeview Dr — BRE Builders Licensed General Contractor NV #0085999"
      projectType="Full Home Renovation · Glenbrook, Lake Tahoe, NV"
      location="Glenbrook, Lake Tahoe, NV"
      title="Glenbrook Lake Tahoe"
      titleItalic="Full Home Renovation."
      description="Complete interior and exterior renovation at 619 Lakeview Dr, Glenbrook, Lake Tahoe, NV. Structural upgrades, kitchen and bathroom renovation, custom finishes, deck work, and exterior improvements. Licensed NV #0085999."
      meta={[
        { label: 'Project Type', value: 'Full Home Renovation' },
        { label: 'Location', value: 'Glenbrook, Lake Tahoe, NV' },
        { label: 'Address', value: '619 Lakeview Dr, Glenbrook NV 89413' },
        { label: 'Photos', value: '22 Portfolio Photos' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={PHOTOS}
      desktopGalleryMode="grid"
      scope={[
        'Full structural assessment and reinforcement — Lake Tahoe snow-load compliance',
        'Complete interior renovation — living areas, bedrooms, bathrooms',
        'Kitchen renovation with custom cabinetry and modern finishes',
        'Master suite and bathroom renovation',
        'Custom staircase construction',
        'Deck and exterior renovation — weather-rated materials',
        'Exterior facade improvements and paint',
        'Permit management and inspections — Washoe County',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Glenbrook, Lake Tahoe.<br /><span className="italic text-teal">Fully Renovated.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/80">
            <p>619 Lakeview Dr in Glenbrook is one of the most demanding renovation environments in Northern Nevada — Lake Tahoe properties face extreme seasonal conditions, strict Washoe County permitting, and structural requirements that account for snow loads exceeding 200 lbs per square foot.</p>
            <p>BRE Builders completed a full interior and exterior renovation of this Lake Tahoe property, handling everything from structural reinforcement to custom interior finishes, kitchen and bathroom renovation, custom staircase work, and exterior improvements built to withstand mountain conditions.</p>
            <p>Every phase was permitted through Washoe County and inspected to current code. The result is a fully renovated Lake Tahoe home built to last decades in one of the most beautiful and demanding environments in Nevada.</p>
            <p className="text-[12px] text-cream/40 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
        </div>
      }
      schema={schema}
      ctaHref="/services/additions"
      ctaLabel="Explore Full Home Renovations →"
    />
  )
}
