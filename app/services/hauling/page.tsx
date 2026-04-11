import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceTemplate, {
  SectionLabel, SectionHeading, SpeakableBlock, PageSection, MobileCTABox,
  DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Demo & Hauling Near Me | Debris Removal Reno NV | BRE Builders',
  description: 'Demo and hauling near you in Reno NV. Construction debris removal, demolition waste, junk hauling. Same-day available. Licensed NV #0085999. One call, done.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Hauling+%26+Debris+Removal+Reno+NV&sub=Construction+Site+Cleanup+%C2%B7+NV+%230085999&badge=Hauling`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Demo & Hauling Reno NV | Same-Day Debris Removal', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo & Hauling Near Me | Debris Removal Reno NV | BRE Builders',
    description: 'Demolition and hauling services in Reno NV. Construction debris, demo waste, junk removal. Same-day available. Licensed NV #0085999. One call handles it al',
    images: [{ url: `${SITE_URL}/api/og?title=Hauling+%26+Debris+Removal+Reno+NV&sub=Construction+Site+Cleanup+%C2%B7+NV+%230085999&badge=Hauling`, alt: 'Blue Reef Builders — Demo & Hauling Reno NV | Same-Day Debris Removal' }],
  },
  alternates: { canonical: `${SITE_URL}/hauling-removal/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Hauling & Construction Debris Removal Reno NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [{ '@type': 'City', name: 'Reno' }, { '@type': 'State', name: 'Nevada' }],
      description: 'BRE Builders provides efficient site cleanup, material hauling, and debris removal for construction projects across Reno, NV. Licensed NV #0085999.',
      url: 'https://brebuilders.com/hauling-removal/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders do same-day hauling in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Same-day hauling is available depending on schedule and volume. Contact us to check availability. We typically can respond within 24 hours for most hauling jobs in Reno.' } },
        { '@type': 'Question', name: 'What types of debris do you haul?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders hauls construction debris, demolition waste, lumber, concrete pieces, drywall, roofing material, yard waste, old appliances, and general junk. We do not haul hazardous materials.' } },
      ],
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'Hauling & Removal', item: 'https://brebuilders.com/hauling-removal/' },
    ]},
  ],
}

const FAQS = [
  { q: 'Does BRE Builders do same-day hauling in Reno?', a: 'Same-day hauling is available depending on schedule and volume. Contact us to check availability. We typically respond within 24 hours for most hauling jobs in Reno. Licensed NV #0085999.' },
  { q: 'What types of debris do you haul?', a: 'BRE Builders hauls construction debris, demolition waste, lumber, concrete chunks, drywall, roofing material, yard waste, old appliances, and general junk. We do not haul hazardous materials.' },
  { q: 'Do you haul debris during active construction projects?', a: 'Yes. BRE Builders provides ongoing site cleanup and debris hauling throughout the construction process — keeping the job site safe, organized, and on schedule.' },
  { q: 'Can you haul from residential properties?', a: 'Yes. We haul from residential properties in Reno, Sparks, Carson City, and throughout Northern Nevada. Full cleanout, partial hauls, and post-renovation debris removal.' },
  { q: 'Do you provide demolition as well as hauling?', a: 'Yes. BRE Builders handles light demolition work — interior demo, deck removal, shed demolition, wall removal — and then hauls all debris. Ask about combined demolition and hauling quotes.' },
]

export default function HaulingPage() {
  return (
    <ServiceTemplate theme="commercial"
      schema={schema}
      hero={{
        bgDesktop: IMGS.svc_hauling,
        bgMobile: IMGS.svc_hauling,
        eyebrow: 'Hauling & Removal · Reno & Northern Nevada',
        h1Lines: ['Hauling &', 'Debris Removal'],
        h1Ghost: 'Reno, Nevada',
        lead: 'BRE Builders provides efficient site cleanup, material hauling, and debris removal — keeping your project safe, organized, and on schedule. Same-day available. Licensed NV #0085999.',
        badges: ['Construction Debris', 'Same-Day Available', 'Demolition + Haul', 'Free Estimates'],
        ctaPrimaryLabel: 'Get a Hauling Quote →',
        ctaPrimaryHref: '/contact?service=hauling',
        ctaSecondaryLabel: 'View All Services',
        ctaSecondaryHref: '/services',
        ctaMobileLabel: 'Call for Same-Day Hauling',
        urgencyNote: 'Same-day available · Licensed NV #0085999',
        stats: [{ n: '24h', label: 'Response' }, { n: 'NV · CA', label: 'Licensed' }, { n: 'Free', label: 'Estimates' }],
        license: 'NV',
      }}
      sections={
        <>
          <MobileCTABox
            headline="Need debris removed fast?"
            subtext="Same-day available · Licensed NV #0085999 · Free estimates"
            ctaLabel="Call Now — Same-Day Available"
            ctaHref={SITE.phoneHref}
            variant="urgent"
          />

          <PageSection bg="bg-deep">
            <SectionLabel text="What We Haul" />
            <SectionHeading line1="Fast. Reliable." line2italic="Site Cleanup Done Right." size="lg" className="mb-6 text-cream" />
            <div className="speakable-summary max-w-[680px] mb-10 space-y-3 text-[15px] text-cream/55 leading-relaxed">
              <p>BRE Builders provides efficient site cleanup, material hauling, and debris removal for residential and commercial projects across Reno and Northern Nevada. Whether you need ongoing debris management during a construction project or a one-time post-renovation cleanout — we get it done fast and properly disposed of.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { icon: '🔨', title: 'Construction Debris', desc: 'Drywall, lumber, framing scraps, insulation, and all construction byproduct hauled and disposed properly.' },
                { icon: '🏚️', title: 'Demolition Waste', desc: 'Post-demo cleanup — concrete chunks, tile, plaster, and structural debris removed from site.' },
                { icon: '🚛', title: 'Material Hauling', desc: 'Move materials between sites, haul aggregate, deliver fill material, and transport construction supplies.' },
                { icon: '🏡', title: 'Residential Cleanouts', desc: 'Post-renovation cleanouts, estate cleanouts, and general junk removal from Reno homes.' },
                { icon: '🔩', title: 'Roofing & Shingles', desc: 'Tear-off shingles, underlayment, and roofing debris properly removed and disposed.' },
                { icon: '🌿', title: 'Yard & Green Waste', desc: 'Tree branches, landscaping debris, soil, and organic material hauled from residential and commercial properties.' },
              ].map(s => (
                <div key={s.title} className="p-5 bg-panel rounded-2xl border border-white/[0.06] hover:border-teal/20 transition-colors">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="font-display text-[16px] text-cream mb-2">{s.title}</h3>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </PageSection>

          <PageSection bg="bg-void" border>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel text="Demolition + Hauling" />
                <SectionHeading line1="We Demo It." line2italic="We Haul It." size="md" className="text-cream mb-5" />
                <div className="space-y-4 text-[14px] text-cream/55 leading-relaxed">
                  <p>Most hauling companies don't do demolition. Most demo contractors don't haul. BRE Builders does both — which means you get one call, one contractor, one clean price for the full scope of removal work.</p>
                  <p>We handle interior demolition (walls, flooring, cabinets, tile), deck removal, shed demolition, and structure removal — then haul every piece of debris off your property properly.</p>
                  <p>For active construction projects, we provide staged debris removal throughout the build — keeping the job site safe, organized, and ready for the next trade. A clean site runs faster.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-4">Common Haul Jobs</p>
                  {[
                    'Post-renovation cleanouts',
                    'Full interior demo + haul',
                    'Deck removal and haul',
                    'Concrete demolition debris',
                    'Roofing tear-off disposal',
                    'Construction site staging cleanup',
                    'Appliance and fixture removal',
                    'Yard waste and tree debris',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2.5 py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-teal text-[12px]">✓</span>
                      <span className="text-[13px] text-cream/60">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-1">Same-Day Available</p>
                  <p className="text-[13px] text-cream/55">Call us to check same-day availability in Reno. We typically respond within 24 hours. Licensed NV #0085999.</p>
                </div>
              </div>
            </div>
          </PageSection>

          <ServiceFAQSection
            faqs={FAQS}
            label="Hauling & Removal Questions"
            aeoContent={
              <div>
                <SectionLabel text="Hauling & Removal in Reno NV" />
                <SectionHeading line1="What Reno Homeowners" line2italic="Ask About Hauling." size="md" className="mb-6" />
                <div className="speakable-faq space-y-4 text-[14px] text-cream/60 leading-relaxed">
                  <div>
                    <h3 className="font-display text-[16px] text-teal mb-2">Does BRE Builders do same-day hauling in Reno?</h3>
                    <p>Same-day hauling is available depending on schedule and volume. Contact us to check availability — we typically respond within 24 hours for most hauling jobs in Reno, Sparks, and Northern Nevada. Licensed NV #0085999.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] text-teal mb-2">What types of debris does BRE Builders haul?</h3>
                    <p>BRE Builders hauls construction debris, demolition waste, lumber, concrete chunks, drywall, roofing material, yard waste, old appliances, and general junk. We do not haul hazardous materials, chemicals, or biohazardous waste.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] text-teal mb-2">Do you do demolition as well as hauling?</h3>
                    <p>Yes. BRE Builders handles light demolition — interior demo, deck removal, shed demolition, wall removal — and then hauls all debris. Ask about combined demolition and hauling quotes when requesting an estimate.</p>
                  </div>
                </div>
              </div>
            }
            internalLinks={[
              { label: 'Structural Repairs', href: '/services/repairs/' },
              { label: 'Concrete Work', href: '/services/concrete/' },
              { label: 'Commercial Construction', href: '/services/commercial/' },
            ]}
          />
          <DesktopCTASection
            bgImage={IMGS.svc_hauling}
            bgAlt="BRE Builders Reno NV"
            headlineItalic="Free Estimates · NV #0085999"
           
            headline="Get Your Site Cleaned Up"
            subtext="Same-day available. Free estimates. Licensed NV #0085999."
            ctaLabel="Get a Hauling Quote →"
            ctaHref="/contact?service=hauling"
          />
          <RelatedServices items={[
            { label: 'Structural Repairs', href: '/services/repairs', desc: 'BRE Builders Reno NV' },
            { label: 'Concrete Work', href: '/services/concrete', desc: 'BRE Builders Reno NV' },
            { label: 'Decks', href: '/services/decks', desc: 'BRE Builders Reno NV' },
            { label: 'Commercial Construction', href: '/services/commercial', desc: 'BRE Builders Reno NV' },
          ]} />
          <div className="flex flex-wrap gap-3 mt-6 mb-2">
            <Link href="/projects/car-wash/" className="btn-ghost text-[13px] py-2.5 px-5">View: Car Wash Site Prep — Reno NV →</Link>
            <Link href="/projects/mine-shaft/" className="btn-ghost text-[13px] py-2.5 px-5">View: Custom Build — Reno NV →</Link>
          </div>
        </>
      }
    />
  )
}
