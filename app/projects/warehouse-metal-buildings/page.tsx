import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Warehouse & Metal Buildings Portfolio | Northern Nevada | BRE Builders',
  description: 'Commercial warehouse and metal building construction across Northern Nevada. Tenant improvements, steel erection, concrete foundations. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Warehouse+%26+Metal+Buildings&sub=Commercial+Construction+%C2%B7+Northern+Nevada&badge=Portfolio`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/projects/warehouse-metal-buildings/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Warehouse & Metal Buildings Portfolio — BRE Builders',
  url: 'https://brebuilders.com/projects/warehouse-metal-buildings/',
  image: IMGS.svc_warehouse,
}

export default function WarehouseMetalBuildingsPage() {
  return (
    <ProjectTemplate
      theme="commercial"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Warehouse & Metal Buildings' },
      ]}
      heroImage={IMGS.svc_warehouse}
      heroAlt="Warehouse Metal Building Construction Northern Nevada BRE Builders Commercial"
      projectType="Commercial Construction · Northern Nevada"
      location="Northern Nevada"
      title="Warehouse & Metal Buildings"
      titleItalic="Built for Business."
      description="Commercial warehouse and metal building projects across Northern Nevada — steel erection, concrete foundations, tenant improvements. Licensed NV #0085999 CA #1093798."
      meta={[
        { label: 'Project Type', value: 'Commercial / Metal Buildings' },
        { label: 'Location', value: 'Northern Nevada' },
        { label: 'Scope', value: 'Ground-up & TI' },
        { label: 'License', value: 'NV #0085999 · CA #1093798' },
      ]}
      photos={[
        { src: IMGS.svc_warehouse, alt: 'Warehouse Metal Building Construction Northern Nevada BRE Builders', caption: 'Metal Building — Northern Nevada' },
        { src: IMGS.concrete_slab, alt: 'Commercial Concrete Slab Foundation BRE Builders Reno NV', caption: 'Concrete Slab & Foundation' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Pre-engineered metal building kit erection and assembly',
        'Commercial concrete slab and foundation work',
        'Site preparation and utility coordination',
        'Tenant improvements — interior buildouts and finishes',
        'Permitting and inspections — Nevada and California',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Portfolio" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            Commercial Built.<br /><span className="italic text-teal">On Time. On Budget.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/80">
            <p>BRE Builders has delivered commercial warehouse and metal building projects across Northern Nevada for over 35 years. From pre-engineered steel kits to full ground-up concrete and steel construction, we handle the complete scope.</p>
            <p>We are licensed in both Nevada and California, with deep experience in commercial permitting, site prep, utility coordination, and tenant improvements.</p>
            <p>Free estimates. Licensed NV #0085999, CA #1093798.</p>
          </div>
        </div>
      }
      schema={schema}
      ctaHref="/services/commercial"
      ctaLabel="Explore Commercial Services →"
    />
  )
}
