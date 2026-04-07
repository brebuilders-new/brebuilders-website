import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogVideo } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "From Strikes to Suds: How BRE Builders Saved a Reno Icon | BRE Builders",
  description: "BRE Builders transformed the abandoned Starlite Lanes bowling alley into Reno's longest car wash tunnel. Adaptive reuse case study. Licensed NV #0085999.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=From+Strikes+to+Suds&sub=How+BRE+Builders+Saved+a+Reno+Icon&badge=Commercial`, width: 1200, height: 630 }] },
  alternates: { canonical: `${SITE_URL}/from-strikes-to-suds-how-bre-builders-saved-a-reno-icon/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'From Strikes to Suds: How BRE Builders Saved a Reno Icon',
      author: { '@type': 'Organization', name: 'BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders do commercial construction in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders provides commercial construction including tenant improvements, concrete slabs, and commercial build-outs. Licensed NV #0085999 and CA #1093798.' } },
        { '@type': 'Question', name: 'Can BRE Builders convert an existing building into a car wash?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders completed this Reno car wash conversion — concrete slab, utility integration, drainage systems, and complete commercial build-out from permits through final inspection.' } },
        { '@type': 'Question', name: 'Does BRE Builders handle commercial permits in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders manages all commercial permit applications with the City of Reno and Washoe County, including building permits, utility connections, and occupancy inspections. NV License #0085999.' } },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary'] },
  ],
}

export default function CarWashBlogPage() {
  return (
    <BlogTemplate
      title="From Strikes to Suds"
      category="Commercial Construction"
      publishDate="July 30, 2025"
      heroImage={IMGS.concrete_slab}
      heroAlt="Commercial car wash construction Reno NV BRE Builders concrete slab"
      excerpt="BRE Builders transformed the abandoned Starlite Lanes bowling alley — vacant since 2015 — into Reno's longest car wash tunnel, overcoming seven years of damage, vandalism, and complex structural challenges."
      schema={schema}
      relatedServices={[
        { label: 'Commercial Construction', href: '/services/commercial' },
        { label: 'Concrete Work', href: '/services/concrete' },
        { label: 'Warehouse & Metal Buildings', href: '/services/warehouse' },
      ]}
      relatedPosts={[
        { title: 'Why More Reno Homeowners Trust BRE Builders for Structural Repairs', href: '/blog/reno-structural-repairs', img: IMGS.repairs_foundation, alt: 'Structural repairs Reno NV', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_rot, alt: '20 year home repairs Reno', category: 'Structural Repairs' },
        { title: 'ADU Construction Guide Nevada', href: '/blog/how-to-add-an-adu-in-nevada', img: IMGS.adu_main, alt: 'ADU construction Nevada guide', category: 'ADUs' },
      ]}
      content={
        <div>
          <p>The Starlite Express Car Wash in Reno, Nevada required a complete ground-up commercial construction build — from concrete slab and utility rough-in through full MEP systems, equipment installation, and final finishes. BRE Builders managed the entire project as general contractor, self-performing concrete work and coordinating all specialty trades.</p>

          <BlogVideo
            videoId="6oTurM7gESE"
            title="BRE Builders — Lake Tahoe Renovation Project"
            caption="BRE Builders project walkthrough — full commercial build scope and quality of work"
          />

          <h2>Project Scope</h2>
          <p>Commercial car wash construction is one of the more complex light-industrial build types in Northern Nevada. The project required coordination of civil, structural, mechanical, plumbing, electrical, and specialty car wash equipment systems — all on a compressed schedule to meet a tenant occupancy deadline.</p>

          <BlogImage
            src={IMGS.concrete_slab}
            alt="Commercial concrete slab pour with utility access Reno NV BRE Builders"
            caption="Concrete slab pour with utility penetrations — Reno commercial construction by BRE Builders"
          />

          <h2>Concrete & Civil Work</h2>
          <p>BRE Builders self-performed all concrete work on the project, including the main equipment bay slab, approach and exit pads, utility trenching and backfill, and curb and gutter work. Car wash slabs require specific slope tolerances for drainage, embedded anchor systems for equipment, and penetration blocking for all utility runs. Getting the slab right at rough-in prevents extremely expensive corrections later when equipment is already installed.</p>

          <h2>MEP Coordination</h2>
          <p>Car wash facilities have unusually intensive mechanical and plumbing requirements — high-pressure water systems, chemical injection equipment, reclaim systems, large electrical services for motors and controls, and HVAC for the tunnel and equipment bays. BRE Builders coordinated all trades from a single GC contract, providing the owner a single point of accountability through final commissioning.</p>

          <h2>Schedule Performance</h2>
          <p>Commercial tenants and franchise operators run on hard opening dates — delays cost real money in lost revenue and can trigger lease penalties. BRE Builders delivered the Starlite Express Car Wash on schedule, with all systems commissioned and operational at handover. Our Northern Nevada network of reliable subcontractors and our self-performed concrete capability are key to schedule reliability on commercial projects.</p>

          <h2>Commercial Construction in Reno, NV</h2>
          <p>BRE Builders has completed commercial projects across Northern Nevada including tenant improvements, retail build-outs, office construction, warehouse facilities, and specialty projects like this car wash. We hold Nevada General Contractor License #0085999 and California License #1093798. If you have a commercial project in Reno or Northern Nevada, contact us for a project consultation.</p>
        </div>
      }
    />
  )
}
