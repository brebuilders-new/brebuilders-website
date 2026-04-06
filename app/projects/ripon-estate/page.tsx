import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import Link from 'next/link'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Ripon CA Luxury Estate | Custom Home Build | Portfolio',
  description: 'Ground-up luxury estate in Ripon, California. Classical architecture, custom cabinetry, marble surfaces, iron staircase. CA License #1093798.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=Ripon+CA+Luxury+Estate&sub=Ground-Up+Custom+Home+%C2%B7+Ripon%2C+California+%C2%B7+CA+%231093798&badge=Portfolio`,
      width: 1200, height: 630,
    }],
  },
  alternates: { canonical: `${SITE_URL}/portfolio/ripon-california-estate-project/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Ripon CA Luxury Estate — BRE Builders Portfolio',
  description: 'Ground-up luxury custom home in Ripon, California by BRE Builders. CA License #1093798.',
  url: 'https://brebuilders.com/portfolio/ripon-california-estate-project/',
  image: IMGS.ripon[3],
}

const PHOTOS = [
  {
    src: IMGS.ripon[3],
    alt: 'Mediterranean-Inspired Front Elevation Luxury Estate Ripon California BRE Builders',
    title: 'Mediterranean-Inspired Front Elevation',
    caption: 'European-inspired columns, arched windows, and a central fountain — ground-up custom estate, Ripon, CA',
  },
  {
    src: IMGS.ripon[0],
    alt: 'Classical Columned Entryway Luxury Custom Home Ripon California BRE Builders',
    title: 'Classical Columned Entryway',
    caption: 'Arched entry with fluted columns and ornamental molding — an architectural study in balance and proportion',
  },
  {
    src: IMGS.ripon[2],
    alt: 'Grand Foyer Custom Iron Staircase Marble Flooring Luxury Estate Ripon California',
    title: 'Grand Foyer',
    caption: 'Double-height foyer with a sweeping staircase — hand-forged ironwork, marble flooring, architectural symmetry',
  },
  {
    src: IMGS.ripon[1],
    alt: "Chef's Kitchen Custom Cabinetry Marble Backsplash Luxury Home Ripon CA BRE Builders",
    title: "Chef's Kitchen",
    caption: 'Custom cabinetry with integrated lighting and a marble backsplash centerpiece — built for daily use and visual impact',
  },
  {
    src: IMGS.ripon[4],
    alt: 'Elegant Laundry Suite Custom Cabinetry Marble Surfaces Brass Hardware Ripon CA',
    title: 'Elegant Laundry Suite',
    caption: 'Charcoal custom cabinetry, marble surfaces, and brass hardware — every room finished to the same standard',
  },
]

export default function RiponEstatePage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Ripon Estate' },
      ]}
      heroImage={IMGS.ripon[3]}
      heroAlt="Mediterranean Luxury Custom Estate Front Elevation Ripon California BRE Builders"
      projectType="Ground-Up Custom Home · Ripon, CA"
      location="Ripon, California"
      title="Crafting Luxury"
      titleItalic="from the Ground Up."
      description="Every detail of this Ripon, California estate reflects our signature in-house craftsmanship, licensed expertise, and timeless design. CA License #1093798."
      meta={[
        { label: 'Project Type', value: 'Ground-Up Custom Home' },
        { label: 'Location', value: 'Ripon, CA' },
        { label: 'Style', value: 'Mediterranean / Classical' },
        { label: 'License', value: 'CA #1093798' },
      ]}
      photos={PHOTOS}
      desktopGalleryMode="alternating"
      scope={[
        'Mediterranean-inspired front elevation with columns and arched windows',
        'Classical columned entryway with ornamental molding',
        'Grand foyer with hand-forged iron staircase and marble flooring',
        "Chef's kitchen with custom cabinetry and marble backsplash centerpiece",
        'Elegant laundry suite with custom cabinetry and brass hardware',
        'All interior design, permitting, and construction in-house',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(24px,3.5vw,44px)] font-light leading-[1.1] tracking-tight mb-6">
            A ground-up luxury estate.<br /><span className="italic text-teal">Every element built in-house.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-6">
            <p>At Blue Reef Builders, we take pride in bringing vision to life — from the first concept sketch to the final turn of the key. Licensed to build in both Nevada and California, our in-house design and planning teams ensure every project embodies craftsmanship, creativity, and precision.</p>
            <p>This ground-up custom estate in Ripon, California showcases timeless architecture paired with modern luxury. Designed to balance grandeur and comfort, it combines classical detailing with contemporary finishes, creating a home that is as welcoming as it is impressive.</p>
          </div>
          <blockquote className="border-l-2 border-teal pl-5 mb-8">
            <p className="font-display text-[15px] italic text-cream/60 leading-relaxed">&ldquo;Every project we take on is fully managed by our in-house team — from design concept to final construction. Our licensed professionals handle planning, permitting, and craftsmanship across Nevada and California.&rdquo;</p>
          </blockquote>
          <Link href="/services/new-home-builds" className="btn-primary inline-flex">Interested in a Custom Home? →</Link>
        </div>
      }
      schema={schema}
    />
  )
}
