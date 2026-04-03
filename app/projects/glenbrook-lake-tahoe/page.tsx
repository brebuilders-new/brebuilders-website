import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { CDN, WP } from '@/lib/image-catalog'

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
  { n: 1,  title: "Full Home Renovation — Exterior",       caption: "Complete exterior renovation of this Lake Tahoe mountain home. Structural upgrades, new siding, and snow-load rated systems installed to current Washoe County code." },
  { n: 2,  title: "Front Elevation — Completed",           caption: "Front elevation after full renovation. New exterior cladding, updated trim, and improved weather barrier throughout. Designed for Lake Tahoe winter conditions." },
  { n: 3,  title: "Entry and Facade Detail",               caption: "Entry area detail showing quality of exterior finish work. All exterior materials selected for performance in Lake Tahoe's freeze-thaw climate cycle." },
  { n: 4,  title: "Main Living Area",                      caption: "Main living area renovation — new flooring, updated walls, and improved lighting throughout. Open layout maintained while upgrading all finish materials." },
  { n: 5,  title: "Interior Finish Work",                  caption: "Interior finish detail showing the quality of materials and craftsmanship. Every surface inspected and finished to BRE Builders' standard before client walkthrough." },
  { n: 6,  title: "Kitchen Renovation",                    caption: "Kitchen renovation with new cabinetry, updated fixtures, and modern finishes. Layout optimized for function while maintaining the mountain home aesthetic." },
  { n: 7,  title: "Dining and Living Space",               caption: "Dining and living renovation — coordinated finishes throughout the open-plan main level. New flooring connects kitchen, dining, and living zones seamlessly." },
  { n: 8,  title: "Master Suite Renovation",               caption: "Master suite renovation — enlarged layout, new flooring, and updated lighting. En suite bathroom completely renovated as part of this phase." },
  { n: 9,  title: "Master Bathroom",                       caption: "Master bathroom renovation — new tile work, vanity, fixtures, and shower. Plumbing updated to current code. Tile selected for durability in mountain climate." },
  { n: 10, title: "Secondary Bedroom",                     caption: "Secondary bedroom renovation — new flooring, updated walls, and improved closet storage. All bedrooms renovated to consistent finish standard." },
  { n: 11, title: "Hallway and Interior Detail",           caption: "Hallway renovation detail showing transition between renovated spaces. Consistent flooring and trim throughout creates a unified renovation result." },
  { n: 12, title: "Staircase Construction",                caption: "Staircase renovation — structural assessment confirmed load capacity, then new treads, risers, and railing installed. All work permitted and inspected." },
  { n: 13, title: "Upper Level Renovation",                caption: "Upper level renovation — all bedrooms, hallways, and mechanical access updated. Second-floor structural review performed prior to renovation start." },
  { n: 14, title: "Loft Area",                             caption: "Loft area renovation — open second-floor space with updated flooring and improved railing. Natural light maximized through existing window locations." },
  { n: 15, title: "Deck and Exterior Work",                caption: "Deck renovation — new decking material rated for Lake Tahoe snow loads, updated railing system, and improved drainage away from structure." },
  { n: 16, title: "Rear Elevation",                        caption: "Rear elevation showing exterior renovation scope. All weather-exposed surfaces upgraded with materials appropriate for Tahoe Basin conditions." },
  { n: 17, title: "Side Elevation Detail",                 caption: "Side elevation detail — siding, window trim, and foundation interface. Proper flashing and weatherproofing critical for mountain home longevity." },
  { n: 18, title: "Structural Upgrade Work",               caption: "Structural upgrade phase — framing reinforcement and connection hardware upgraded to current IBC seismic and snow-load requirements for this elevation." },
  { n: 19, title: "Foundation and Site Work",              caption: "Foundation and site preparation — soil conditions assessed, drainage improved, and foundation interface waterproofed before interior work began." },
  { n: 20, title: "Framing Phase",                         caption: "Framing phase — new partition walls, structural reinforcement, and header upgrades. All framing inspected before insulation and drywall installation." },
  { n: 21, title: "Pre-Construction Assessment",           caption: "Pre-construction assessment — full structural review, permit application, and scope documentation completed before any demolition began." },
  { n: 22, title: "Completed Project",                     caption: "Project complete — full interior and exterior renovation of this Glenbrook mountain home. Permitted, inspected, and delivered on schedule. BRE Builders NV #0085999." },
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
        </div>
      }
      schema={schema}
      ctaHref="/services/additions"
      ctaLabel="Explore Full Home Renovations →"
    />
  )
}
