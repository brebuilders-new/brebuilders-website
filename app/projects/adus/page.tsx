import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'ADU Construction Portfolio | Reno NV & Northern Nevada | BRE Builders',
  description: 'ADU construction portfolio — pool house ADUs, in-law suites, and garage conversions across Reno and Northern Nevada. NV License #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=ADU+Portfolio&sub=Pool+Houses+%C2%B7+In-Law+Suites+%C2%B7+Garage+Conversions&badge=Portfolio`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — ADU Construction Portfolio | Reno NV & Northern Nevada | BRE Builders', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'ADU Construction Portfolio | Reno NV & Northern Nevada | BRE Builders',
    description: 'ADU construction portfolio — pool house ADUs, in-law suites, and garage conversions across Reno and Northern Nevada. NV License #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=ADU+Portfolio&sub=Pool+Houses+%C2%B7+In-Law+Suites+%C2%B7+Garage+Conversions&badge=Portfolio`, alt: 'Blue Reef Builders — ADU Construction Portfolio | Reno NV & Northern Nevada | BRE Builders' }],
  },
  alternates: { canonical: 'https://brebuilders.com/projects/adus/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemPage',
      name: 'ADU Construction Portfolio — BRE Builders',
      description: 'ADU projects completed by BRE Builders in Reno, Sparks, and Lake Tahoe NV. Pool houses, in-law suites, garage conversions. NV License #0085999.',
      url: 'https://brebuilders.com/projects/adus/',
      image: IMGS.adu_main,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders build ADUs in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders is the #1 ranked ADU builder in Reno NV with a Google AI Overview placement for "adu builders reno". We build studio through 2-bedroom ADUs from $75,000. NV License #0085999.' } },
        { '@type': 'Question', name: 'What types of ADUs does BRE Builders build?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders builds detached ADUs, attached ADUs, garage conversions, pool houses, in-law suites, and above-garage units. All ADU types from 400-1,200 sq ft with full permit handling in Reno, Sparks, and Lake Tahoe.' } },
        { '@type': 'Question', name: 'How much does an ADU cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'ADU costs in Reno start at $75,000 for a studio and range to $300,000 for a fully-appointed 2-bedroom. BRE Builders provides free ADU consultations with detailed written estimates. NV #0085999.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
        { '@type': 'ListItem', position: 3, name: 'ADU Portfolio', item: 'https://brebuilders.com/projects/adus/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

export default function ADUPortfolioPage() {
  return (
    <ProjectTemplate
      theme="growth"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'ADU Portfolio' },
      ]}
      heroImage={IMGS.adu_main}
      heroAlt="ADU Construction Portfolio Reno NV BRE Builders — Pool Houses In-Law Suites Garage Conversions"
      projectType="ADU Construction Portfolio · Reno & Northern Nevada"
      location="Reno & Northern Nevada"
      title="ADU Portfolio"
      titleItalic="Built for Life & Income."
      description="Pool house ADUs, in-law suites, and garage conversions across Reno and Northern Nevada. Licensed NV #0085999. From $75K."
      meta={[
        { label: 'Project Type', value: 'ADU Construction' },
        { label: 'Location', value: 'Reno & Northern Nevada' },
        { label: 'Price Range', value: '$75K–$300K' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={[
        { src: IMGS.adu_main, alt: 'ADU Construction Reno NV BRE Builders Portfolio', caption: 'ADU Construction — Reno, NV' },
        { src: IMGS.adu_pool, alt: 'Pool House ADU BRE Builders Northern Nevada', caption: 'Pool House ADU' },
        { src: IMGS.adu_inlaw, alt: 'In-Law Suite ADU BRE Builders Reno NV', caption: 'In-Law Suite ADU' },
        { src: IMGS.adu_garage, alt: 'Garage Conversion ADU BRE Builders Reno NV', caption: 'Garage Conversion' },
      ]}
      desktopGalleryMode="grid"
      scope={[
        'Permit handling end to end — city and county submissions',
        'Pool house ADUs with full utilities and guest amenities',
        'In-law suite construction — private entrance, full bath, kitchenette',
        'Garage conversions — structural reinforcement, insulation, MEP',
        'Design coordination and site management',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Portfolio" />
          <h2 className="font-display text-[clamp(22px,3vw,38px)] font-light leading-[1.1] tracking-tight mb-5">
            ADUs Built Right.<br /><span className="italic text-teal">From $75K.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/80">
            <p>BRE Builders has been building ADUs across Reno, Sparks, and Northern Nevada for over 35 years. Every project is permitted, inspected, and built to last — pool houses, in-law suites, garage conversions, and ground-up detached units.</p>
            <p>We handle the full process: permit applications, utility coordination, structural work, MEP, and finishes. One contractor, one point of contact, one job done right.</p>
            <p>Free estimates. Quote within 24 hours. Licensed NV #0085999, CA #1093798.</p>
          </div>
          <div className="speakable-faq space-y-3 mt-6">
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">Does BRE Builders build ADUs in Reno NV?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Yes. BRE Builders is ranked #1 for "adu builders reno" with a Google AI Overview placement. We build studio through 2-bedroom ADUs from $75,000 with full permit handling. NV License #0085999.</p>
            </div>
            <div className="p-4 bg-deep rounded-xl border border-white/[0.06]">
              <h3 className="font-display text-[14px] text-teal mb-2">What types of ADUs does BRE Builders build?</h3>
              <p className="text-[13px] text-cream/50 leading-relaxed">Detached ADUs, garage conversions, pool houses, in-law suites, and above-garage units — 400 to 1,200 sq ft across Reno, Sparks, and Lake Tahoe.</p>
            </div>
          </div>
        </div>
      }
      schema={schema}
      ctaHref="/services/adu"
      ctaLabel="Explore ADU Services →"
    />
  )
}
