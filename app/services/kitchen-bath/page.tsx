import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ServiceHeroSection, SectionLabel, SectionHeading, SpeakableBlock,
  PageSection, MobileCTABox, DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'
import { GalleryGrid } from '@/components/gallery/GalleryLightbox'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Kitchen & Bath Remodel Reno NV | $15K–$80K',
  description: 'Kitchen remodels $15K–$80K and full bathroom renovations in Reno, NV. Custom cabinetry, tile, layout changes. Licensed NV #0085999. Free on-site estimate.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Kitchen+%26+Bath+Remodel+Reno+NV&sub=Custom+Cabinetry+%C2%B7+Tile+%C2%B7+Countertops+%C2%B7+NV+%230085999&badge=Kitchen+%26+Bath`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/services/kitchen-bath/` },
}

const FAQS = [
  { q: 'How much does a kitchen remodel cost in Reno NV?', a: 'Kitchen remodels in Reno range from $15,000 for minor updates to $80,000+ for full gut-and-rebuild remodels with custom cabinetry. The national average for a mid-range remodel is $25,000–$50,000.' },
  { q: 'How long does a kitchen remodel take in Reno?', a: 'Minor kitchen remodels take 2–4 weeks. Full kitchen remodels with custom cabinetry take 6–12 weeks. Planning and design add 2–4 weeks before construction begins.' },
  { q: 'Does BRE Builders handle kitchen permits in Reno?', a: 'Yes. Structural, electrical, and plumbing changes require permits. BRE Builders manages all permit applications as part of the project.' },
  { q: 'Do you remodel bathrooms in addition to kitchens?', a: 'Yes. BRE Builders provides full bathroom remodels — from tile and vanity replacement to complete gut-and-rebuild. Master baths, guest baths, and powder rooms.' },
]


const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/services/kitchen-bath/#service',
      name: 'Kitchen & Bath Remodeling Reno NV',
      serviceType: 'Kitchen and Bathroom Remodeling',
      description: 'Full kitchen and bathroom remodeling in Reno, NV — custom cabinetry, tile, countertops, layout changes, and complete gut-and-rebuild projects. Licensed NV #0085999.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
      ],
      url: 'https://brebuilders.com/services/kitchen-bath/',
      offers: { '@type': 'Offer', priceRange: '$15,000–$80,000+', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a kitchen remodel cost in Reno NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'Kitchen remodels in Reno range from $15,000 for minor updates to $80,000+ for full gut-and-rebuild remodels with custom cabinetry. Mid-range remodels typically run $25,000–$50,000.' },
        },
        {
          '@type': 'Question',
          name: 'How long does a kitchen remodel take in Reno?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minor kitchen remodels take 2–4 weeks. Full kitchen remodels with custom cabinetry take 6–12 weeks. Planning and design add 2–4 weeks before construction begins.' },
        },
        {
          '@type': 'Question',
          name: 'Does BRE Builders handle kitchen permits in Reno NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders manages all permit applications for structural, electrical, and plumbing changes as part of the project scope. Licensed NV #0085999.' },
        },
        {
          '@type': 'Question',
          name: 'Do you remodel bathrooms in addition to kitchens?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders provides full bathroom remodels — tile, vanities, showers, tubs, and complete gut-and-rebuild. Master baths, guest baths, and powder rooms across Reno and Sparks.' },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
        { '@type': 'ListItem', position: 3, name: 'Kitchen & Bath Remodeling', item: 'https://brebuilders.com/services/kitchen-bath/' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://brebuilders.com/services/kitchen-bath/',
      url: 'https://brebuilders.com/services/kitchen-bath/',
      name: 'Kitchen & Bath Remodel Reno NV | Blue Reef Builders',
      description: 'Kitchen and bathroom remodeling in Reno, NV. Custom cabinetry, tile, countertops, layout changes. Licensed NV #0085999. Free estimates.',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro', '.speakable-faq'],
      },
    },
  ],
}

export default function KitchenBathPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main data-theme="warmth">
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.ripon[1],
          bgMobile: IMGS.lt(8),
          eyebrow: 'Kitchen & Bath Remodeling · Reno NV',
          h1Lines: ['Kitchen & Bath', 'Done Right.'],
          h1Ghost: 'Reno\'s licensed remodelers.',
          lead: 'Full kitchen and bathroom remodeling in Reno, NV. Custom cabinetry, tile work, countertops, fixtures, and layout changes. Licensed NV #0085999. Free estimates.',
          badges: ['Custom Cabinetry', 'Full Tile & Stone', 'Layout Changes', 'Free Estimates'],
          ctaPrimaryLabel: 'Get a Free Estimate →',
          ctaPrimaryHref: '/contact?service=kitchen-bath',
          ctaSecondaryLabel: 'View Kitchen Gallery',
          ctaSecondaryHref: '/projects/ripon-estate/',
          stats: [{ n: '$15K', label: 'Starting Cost' }, { n: '35+', label: 'Years Exp.' }, { n: '6–12 wks', label: 'Avg Timeline' }],
          license: 'NV',
        }} />

        <PageSection bg="bg-deep">
          <SectionLabel text="Kitchen & Bath Gallery" />
          <SectionHeading line1="Kitchen &amp; Bath Remodels" line2italic="Reno, NV — Completed Projects." size="lg" className="mb-10" />
          <GalleryGrid
            mode="grid"
            images={[
              { src: IMGS.ripon[1], alt: "Chef's Kitchen Custom Cabinetry Marble Backsplash Ripon CA", title: "Chef's Kitchen", caption: "Ripon, CA · Custom cabinetry, marble backsplash" },
              { src: IMGS.lt(8), alt: 'Bathroom Renovation Lake Tahoe Interior BRE Builders', title: 'Bathroom Renovation', caption: 'Lake Tahoe, NV · Full bath renovation' },
              { src: IMGS.lt(10), alt: 'Bathroom Installation Lake Tahoe BRE Builders', title: 'Bath Installation', caption: 'Lake Tahoe, NV · Tub, vanity, tile work' },
              { src: IMGS.ripon[4], alt: 'Laundry Suite Custom Cabinetry Brass Hardware Ripon CA', title: 'Laundry Suite', caption: 'Ripon, CA · Custom cabinetry + brass hardware' },
            ]}
            aspectClass="h-56"
          />
        </PageSection>

        <PageSection bg="bg-panel" border>
          <SectionLabel text="What We Remodel" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🍳', title: 'Full Kitchen Remodel', desc: 'Gut-and-rebuild with new cabinets, countertops, appliance placement, tile backsplash, and layout changes.' },
              { icon: '🚿', title: 'Master Bathroom', desc: 'Soaking tubs, walk-in showers, custom tile, dual vanities, and heated floors.' },
              { icon: '🛁', title: 'Guest Bath & Half Bath', desc: 'Tub-to-shower conversions, vanity replacements, tile work, and fixture upgrades.' },
              { icon: '🪵', title: 'Custom Cabinetry', desc: 'Semi-custom and custom cabinetry in kitchen, bath, and utility spaces. Built to fit.' },
              { icon: '🔲', title: 'Tile & Stone Work', desc: 'Floor tile, wall tile, backsplash, shower surrounds, and natural stone installation.' },
              { icon: '💧', title: 'Plumbing & Fixtures', desc: 'New fixtures, pipe rerouting, and plumbing changes handled in-house.' },
            ].map((s) => (
              <div key={s.title} className="bg-deep rounded-xl p-5 border border-white/[0.055] hover:border-teal/20 transition-colors">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-display text-[17px] text-cream mb-2">{s.title}</h3>
                <p className="text-[13px] text-cream/45 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <ServiceFAQSection
          faqs={FAQS}
          label="Remodel Questions"
          aeoContent={
            <div>
              <SectionLabel text="Kitchen & Bath in Reno NV" />
              <SectionHeading line1="What's Included in a" line2italic="Reno Kitchen Remodel." size="md" className="mb-6" />
              <SpeakableBlock className="mb-6">
                <p>BRE Builders provides full kitchen and bathroom remodeling throughout Reno, NV. From minor fixture upgrades to complete gut-and-rebuild remodels with custom cabinetry, we handle every aspect of the project in-house.</p>
                <p>Kitchen remodels in Reno range from $15,000 for cosmetic updates to $80,000+ for custom cabinetry and full layout changes. Bathroom remodels run $8,000–$40,000. All structural, electrical, and plumbing changes are permitted through Washoe County or the City of Reno. Licensed NV #0085999.</p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/additions/" className="btn-ghost text-[12px] py-2 px-4">Home Additions →</Link>
                <Link href="/new-home/" className="btn-ghost text-[12px] py-2 px-4">Custom Homes →</Link>
              </div>
            </div>
          }
        />

        
        {/* ── BLOG + AREA CROSS-LINKS ── */}
        <section className="py-14 bg-void border-t border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Blog cross-links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Planning a Reno kitchen or bath remodel?</span>
                </div>
                <div className="space-y-0">
                                    <Link href="/blog/is-your-kitchen-ruining-your-property-value" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">Is Your Kitchen Ruining Your Property Value?</span>
                      <span className="text-[11px] text-cream/35 block">5 fixes that protect equity at resale</span>
                    </div>
                  </Link>
                  <Link href="/blog/5-signs-its-time-to-remodel-your-kitchen" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">5 Signs It's Time to Remodel Your Kitchen</span>
                      <span className="text-[11px] text-cream/35 block">Know if the timing is right</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-kitchen-remodeling-trends" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">Reno Kitchen Remodeling Trends 2025</span>
                      <span className="text-[11px] text-cream/35 block">What's trending and what gets cited at resale</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Service area links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Service Areas</span>
                </div>
                <div className="space-y-0 mb-4">
                                    <Link href="/service-areas/nevada/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Kitchen Remodeling Reno, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/sparks/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Kitchen Remodeling Sparks, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/lake-tahoe/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Kitchen Remodeling Lake Tahoe</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                                    <Link href="/testimonials" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">Testimonials →</Link>
                  <Link href="/faq" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">FAQ →</Link>
                  <Link href="/about" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">About BRE →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RelatedServices items={[
          { label: 'Home Additions', href: '/additions/', desc: 'Add a whole new room' },
          { label: 'ADU Construction', href: '/adus/', desc: 'Full unit build' },
          { label: 'Custom Homes', href: '/new-home/', desc: 'Ground-up builds' },
          { label: 'Structural Repairs', href: '/repairs/', desc: 'Fix before you remodel' },
        ]} />

        <MobileCTABox
          headline="Ready to transform your kitchen or bath?"
          subtext="Free estimate + site visit. NV #0085999. 35+ years in Reno."
          ctaLabel="Request a Free Estimate"
          ctaHref="/contact?service=kitchen-bath"
        />
        <DesktopCTASection
          bgImage={IMGS.ripon[1]}
          bgAlt="Chef's kitchen custom cabinetry marble backsplash BRE Builders Ripon CA"
          headline="Your Kitchen."
          headlineItalic="Exactly As You Envisioned."
          subtext="Free estimates · Custom cabinetry specialists · NV #0085999"
          ctaLabel="Get a Free Remodel Estimate →"
          ctaHref="/contact?service=kitchen-bath"
        />
      </main>
      <Footer />
    </>
  )
}
