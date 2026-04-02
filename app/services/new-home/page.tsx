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
  title: 'Custom Home Builder Reno NV | New Home Construction',
  description: 'Licensed custom home builders in Reno, NV and Northern California. Ground-up design-build, full permit handling. NV License #0085999 · CA License #1093798.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Custom+Home+Builder+Reno+NV&sub=Ground-Up+Design-Build+%C2%B7+NV+%230085999+%C2%B7+CA+%231093798&badge=Custom+Homes`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/new-home/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/new-home/#service',
      name: 'Custom Home Builder Reno NV',
      description: 'BRE Builders designs and constructs custom homes in Reno, NV and Northern California. Licensed NV #0085999 · CA #1093798.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Northern California' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a custom home cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'Custom homes in Reno typically cost $250–$450+ per square foot for construction. A 2,000 sq ft custom home runs $500,000–$900,000+. Land is additional. BRE Builders provides detailed estimates after design is defined.' } },
        { '@type': 'Question', name: 'Does BRE Builders handle both design and construction?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders is a design-build contractor. Our in-house team handles concept, design, engineering coordination, permitting, and construction. You work with one team from start to finish.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Custom Home Builder', item: 'https://brebuilders.com/new-home/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

const FAQS = [
  { q: 'How much does a custom home cost in Reno NV?', a: 'Custom homes in Reno typically cost $250–$450+ per square foot. A 2,000 sq ft custom home runs $500,000–$900,000+. Land is additional. BRE Builders provides detailed estimates after design is defined.' },
  { q: 'Does BRE Builders handle both design and construction?', a: 'Yes. BRE Builders is a design-build contractor. Our in-house team handles concept, design, engineering coordination, permitting, and all construction. One team from concept to keys.' },
  { q: 'Does BRE Builders build in California?', a: 'Yes. BRE Builders holds California License #1093798 and has completed luxury estate projects in Ripon, CA and other Northern California locations.' },
  { q: 'How long does it take to build a custom home in Reno?', a: 'Design and permitting typically takes 3–6 months. Construction takes 8–18 months depending on size and complexity. Total timeline is 12–24 months from initial consultation.' },
]

export default function NewHomePage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main data-theme="luxury">
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.ripon[3],
          bgMobile: IMGS.ripon[0],
          eyebrow: 'Custom Home Builder · Reno NV & California',
          h1Lines: ['Custom Homes', 'Built Your Way.'],
          h1Ghost: 'Concept to keys — one team.',
          lead: 'Design-build custom home construction in Reno, NV and Northern California. In-house design, full permit handling, licensed construction. NV License #0085999 · CA License #1093798.',
          badges: ['Design + Build', 'Both States Licensed', 'Permit Handling', 'Free Consultation'],
          ctaPrimaryLabel: 'Schedule a Free Consultation →',
          ctaPrimaryHref: '/contact?service=new-home',
          ctaSecondaryLabel: 'View Ripon Estate Project',
          ctaSecondaryHref: '/projects/ripon-estate/',
          urgencyNote: 'Custom home builds start with a free design consultation',
          stats: [{ n: '$250+', label: 'Per Sq Ft' }, { n: '35+', label: 'Years Exp.' }, { n: 'NV + CA', label: 'Licensed' }],
          license: 'both',
        }} />

        {/* Ripon proof */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Signature Build — Ripon, CA" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading line1="Luxury Estate." line2italic="Ground to Grandeur." size="lg" className="mb-5" />
              <SpeakableBlock className="mb-6">
                <p>A complete ground-up luxury estate in Ripon, California — blending classical European architecture with modern amenities. Every column, arch, and interior detail was designed, engineered, and built in-house by our California licensed team.</p>
                <p>This is what in-house design-build looks like. One team. One vision. From first sketch to final key.</p>
              </SpeakableBlock>
              <div className="flex gap-3">
                <Link href="/projects/ripon-estate/" className="btn-primary">View Full Project →</Link>
                <Link href="/contact?service=new-home" className="btn-ghost hidden md:flex">Start Your Build →</Link>
              </div>
            </div>
            <GalleryGrid
              mode="grid"
              images={[
                { src: IMGS.ripon[3], alt: 'Mediterranean Front Elevation Luxury Estate Ripon California BRE Builders', title: 'Front Elevation',  caption: 'Ripon, CA — Mediterranean luxury estate' },
                { src: IMGS.ripon[2], alt: 'Grand Foyer Iron Staircase Marble Flooring Ripon Estate',                   title: 'Grand Foyer',     caption: 'Iron staircase, marble flooring' },
                { src: IMGS.ripon[1], alt: "Chef's Kitchen Custom Cabinetry Marble Backsplash Ripon CA",                title: "Chef's Kitchen",  caption: "Custom cabinetry, marble backsplash" },
              ]}
              aspectClass="h-44"
            />
          </div>
        </PageSection>

        {/* Process */}
        <PageSection bg="bg-panel" border>
          <SectionLabel text="Design-Build Process" />
          <SectionHeading line1="One Team." line2italic="Start to Keys." size="lg" className="mb-12" />
          <div className="hidden md:grid grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Free Consultation', body: 'We review your vision, site, budget range, and design goals. No commitment.' },
              { n: '02', title: 'Design & Engineering', body: 'In-house concept development, architectural plans, and structural engineering coordination.' },
              { n: '03', title: 'Permits', body: 'Full permit applications in Nevada or California. We manage all agency submissions.' },
              { n: '04', title: 'Construction', body: 'Licensed in-house team handles foundation through finishes. Milestone updates throughout.' },
            ].map((s) => (
              <div key={s.n}>
                <div className="font-mono text-[11px] text-teal/60 mb-3">{s.n}</div>
                <h3 className="font-display text-[20px] text-cream mb-2">{s.title}</h3>
                <p className="text-[13px] text-cream/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden space-y-4">
            {[
              { n: '01', title: 'Free Consultation', body: 'Vision, site, budget, design goals. No commitment required.' },
              { n: '02', title: 'Design & Engineering', body: 'In-house concept to architectural plans.' },
              { n: '03', title: 'Permits', body: 'All Nevada or California permits managed in-house.' },
              { n: '04', title: 'Construction', body: 'Licensed team. Foundation to finishes.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 p-4 bg-deep rounded-xl border border-white/[0.055]">
                <div className="font-mono text-[28px] text-teal/20 font-bold leading-none flex-shrink-0">{s.n}</div>
                <div>
                  <div className="font-display text-[17px] text-cream">{s.title}</div>
                  <p className="text-[13px] text-cream/45 leading-relaxed mt-1">{s.body}</p>
                </div>
              </div>
            ))}
            <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4">📞 Schedule a Consultation</a>
          </div>
        </PageSection>

        <ServiceFAQSection
          faqs={FAQS}
          label="Custom Home Questions"
          aeoContent={
            <div>
              <SectionLabel text="Custom Home Builder Reno NV" />
              <SectionHeading line1="Licensed in Both States." line2italic="One Team Everywhere." size="md" className="mb-6" />
              <SpeakableBlock className="mb-6">
                <p>BRE Builders is one of the few general contractors in the Reno region licensed in both Nevada (#0085999) and California (#1093798). Our custom home division provides complete design-build services — from initial design concept through final Certificate of Occupancy.</p>
                <p>We have completed custom homes and luxury estate projects in Reno, NV and throughout Northern California. Every project is managed in-house from design to construction — no subcontracting the design to a separate firm.</p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/projects/ripon-estate/" className="btn-ghost text-[12px] py-2 px-4">View Ripon Estate →</Link>
                <Link href="/adus/" className="btn-ghost text-[12px] py-2 px-4">ADU Construction →</Link>
                <Link href="/service-areas/northern-california/" className="btn-ghost text-[12px] py-2 px-4">Northern California →</Link>
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
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Building a custom home in Nevada or California?</span>
                </div>
                <div className="space-y-0">
                                    <Link href="/blog/how-to-add-an-adu-in-nevada" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">ADU Construction Guide — Reno 2025</span>
                      <span className="text-[11px] text-cream/35 block">Many new-home builds include an ADU</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-redevelopment" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">Reno's $1 Billion Redevelopment Context</span>
                      <span className="text-[11px] text-cream/35 block">Why Reno's housing market is strong for builders</span>
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
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Custom Homes Reno, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/northern-california/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Custom Homes Northern California</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/truckee/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Custom Homes Truckee, CA</span>
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
          { label: 'ADU Construction', href: '/adus/', desc: 'Add a dwelling unit' },
          { label: 'Home Additions', href: '/additions/', desc: 'Expand your existing home' },
          { label: 'Northern California', href: '/service-areas/northern-california/', desc: 'CA #1093798 projects' },
          { label: 'Kitchen & Bath', href: '/kitchen/', desc: 'Interior upgrades' },
        ]} />

        <MobileCTABox
          headline="Your custom home starts with one call."
          subtext="Free consultation. NV #0085999 · CA #1093798. Response within 24 hours."
          ctaLabel="Schedule a Consultation"
          ctaHref="/contact?service=new-home"
        />
        <DesktopCTASection
          bgImage={IMGS.ripon[3]}
          bgAlt="Luxury custom estate Ripon California BRE Builders"
          headline="Built the Way"
          headlineItalic="You Imagined It."
          subtext="Free consultation · NV #0085999 · CA #1093798 · Since 1989"
          ctaLabel="Schedule a Free Consultation →"
          ctaHref="/contact?service=new-home"
        />
      </main>
      <Footer />
    </>
  )
}
