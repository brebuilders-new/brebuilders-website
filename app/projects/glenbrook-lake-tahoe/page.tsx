import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { CDN } from '@/lib/image-catalog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Glenbrook Lake Tahoe Full Home Renovation | Glenbrook, Lake Tahoe | BRE Builders',
  description: 'Full home renovation at Glenbrook, Lake Tahoe, Lake Tahoe NV. Structural upgrades, interior renovation, exterior work. 37-photo portfolio. BRE Builders NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Glenbrook+Lake+Tahoe+Renovation&sub=619+Lakeview+Dr+%C2%B7+Full+Home+Renovation+%C2%B7+37+Photos&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/projects/glenbrook-lake-tahoe/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'Glenbrook Lake Tahoe Full Home Renovation — BRE Builders Portfolio',
      description: 'Full interior and exterior renovation of a Glenbrook Lake Tahoe property by BRE Builders. Structural reinforcement, custom finishes, kitchen, bath, staircase. NV #0085999.',
      url: `${SITE_URL}/projects/glenbrook-lake-tahoe/`,
      image: `${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37-600x403.webp`,
      about: {
        '@type': 'Project',
        name: 'Glenbrook Lake Tahoe Full Home Renovation',
        location: { '@type': 'Place', name: '619 Lakeview Dr, Glenbrook, NV 89413', address: { '@type': 'PostalAddress', streetAddress: '619 Lakeview Dr', addressLocality: 'Glenbrook', addressRegion: 'NV', postalCode: '89413' } },
        contractor: { '@type': 'GeneralContractor', name: 'Blue Reef Builders', license: 'NV #0085999' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders renovate homes in Glenbrook Lake Tahoe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders completed a full interior and exterior renovation of this Glenbrook, Lake Tahoe property — structural reinforcement, kitchen and bathroom renovation, custom staircase, and exterior improvements. All work permitted through Washoe County under NV #0085999.' } },
        { '@type': 'Question', name: 'What are the permitting requirements for renovating a home in Glenbrook NV?', acceptedAnswer: { '@type': 'Answer', text: 'Glenbrook properties fall under Washoe County jurisdiction with additional TRPA (Tahoe Regional Planning Agency) requirements for properties in the Lake Tahoe Basin. BRE Builders is experienced with both Washoe County and TRPA permit requirements and manages all applications as part of the project scope.' } },
        { '@type': 'Question', name: 'What structural requirements apply to Lake Tahoe home renovations?', acceptedAnswer: { '@type': 'Answer', text: 'Lake Tahoe properties must be designed for snow loads exceeding 200 lbs per square foot in some zones, seismic requirements, and high wind conditions. BRE Builders accounts for all Lake Tahoe Basin structural requirements in renovation design and construction.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'Glenbrook Lake Tahoe Renovation', item: 'https://brebuilders.com/projects/glenbrook-lake-tahoe/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

// 37 photos — all labeled with SEO captions
const PHOTOS = [
  { n:  1, title: "Full Home Renovation — Exterior", caption: "Complete exterior renovation. Snow-rated structure, new siding, weather barrier. Washoe County permitted. BRE Builders NV #0085999." },
  { n:  3, title: "Entry & Facade Detail", caption: "Entry area showing quality of exterior finish work. All materials selected for performance in freeze-thaw climate." },
  { n:  5, title: "Interior Finish Work", caption: "Interior finish detail — every surface inspected and finished to BRE Builders standard before client walkthrough." },
  { n:  7, title: "Dining & Living Space", caption: "Dining and living renovation — coordinated finishes throughout open-plan main level." },
  { n:  9, title: "Master Bathroom", caption: "Master bathroom — new tile, vanity, fixtures, shower. Plumbing updated to code." },
  { n: 12, title: "Staircase Construction", caption: "Staircase renovation — structural load confirmed, new treads, risers, and railing installed. Permitted and inspected." },
  { n: 13, title: "Upper Level", caption: "Upper level — all bedrooms, hallways, and mechanical access updated. Second-floor structural review performed." },
  { n: 14, title: "Loft Area", caption: "Loft area renovation — open second-floor space with updated flooring and improved railing." },
  { n: 15, title: "Deck & Exterior", caption: "Deck renovation — new decking material rated for Lake Tahoe snow loads, updated railing, improved drainage." },
  { n: 16, title: "Rear Elevation", caption: "Rear elevation showing exterior renovation scope. All weather-exposed surfaces upgraded." },
  { n: 17, title: "Side Elevation Detail", caption: "Side elevation detail — siding, window trim, and foundation interface. Proper flashing and weatherproofing." },
  { n: 18, title: "Structural Upgrade Work", caption: "Structural upgrade — framing reinforcement and connection hardware upgraded to current IBC snow-load requirements." },
  { n: 19, title: "Foundation & Site Work", caption: "Foundation and site prep — drainage improved, foundation interface waterproofed before interior work began." },
  { n: 20, title: "Framing Phase", caption: "Framing phase — new partition walls, structural reinforcement, header upgrades. Inspected before insulation and drywall." },
  { n: 21, title: "Pre-Construction Assessment", caption: "Pre-construction assessment — full structural review, permit application, scope documentation completed before demolition." },
  { n: 22, title: "Project Complete", caption: "Project complete — full interior and exterior renovation. Permitted, inspected, delivered on schedule. BRE Builders NV #0085999." }
].map(({ n, caption }) => {
  const pad = String(n).padStart(2, '0')
  return {
    src: `${CDN}/2025/12/${pad}-619-Lakeview-Dr-Glenbrook-NV-89413-${n}-of-37-600x403.webp`,
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
      heroImage={`${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37-600x403.webp`}
      heroAlt="Glenbrook Lake Tahoe Full Home Renovation Exterior — Glenbrook, Lake Tahoe — BRE Builders Licensed General Contractor NV #0085999"
      projectType="Full Home Renovation · Glenbrook, Lake Tahoe, NV"
      location="Glenbrook, Lake Tahoe, NV"
      title="Glenbrook Lake Tahoe"
      titleItalic="Full Home Renovation."
      description="Complete interior and exterior renovation at Glenbrook, Lake Tahoe, Lake Tahoe, NV. Structural upgrades, kitchen and bathroom renovation, custom finishes, deck work, and exterior improvements. Licensed NV #0085999."
      meta={[
        { label: 'Project Type', value: 'Full Home Renovation' },
        { label: 'Location', value: 'Glenbrook, Lake Tahoe, NV' },
        { label: 'Address', value: 'Glenbrook, Lake Tahoe, NV' },
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
            <p>Glenbrook, Lake Tahoe in Glenbrook is one of the most demanding renovation environments in Northern Nevada — Lake Tahoe properties face extreme seasonal conditions, strict Washoe County permitting, and structural requirements that account for snow loads exceeding 200 lbs per square foot.</p>
            <p>BRE Builders completed a full interior and exterior renovation of this Lake Tahoe property, handling everything from structural reinforcement to custom interior finishes, kitchen and bathroom renovation, custom staircase work, and exterior improvements built to withstand mountain conditions.</p>
            <p>Every phase was permitted through Washoe County and inspected to current code. The result is a fully renovated Lake Tahoe home built to last decades in one of the most beautiful and demanding environments in Nevada.</p>
            <p className="text-[12px] text-cream/40 italic">Images shown are from a completed project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders renovate homes in Glenbrook Lake Tahoe?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. This Glenbrook project included full structural reinforcement, kitchen and bathroom renovation, custom staircase work, and exterior improvements — all permitted through Washoe County under NV #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">What permitting is required for Lake Tahoe home renovations?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Glenbrook properties require both Washoe County and TRPA (Tahoe Regional Planning Agency) permits. BRE Builders manages all applications and is experienced with the specific requirements of the Tahoe Basin.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
      ctaHref="/services/additions"
      ctaLabel="Explore Full Home Renovations →"
    />
  )
}
