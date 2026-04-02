import type { Metadata } from 'next'
import ServiceTemplate, {
  ServiceHeroSection, SectionLabel, SectionHeading, SpeakableBlock,
  PageSection, MobileCTABox, DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Retail Construction & Tenant Improvements Reno NV | BRE Builders',
  description: 'Retail build-outs and tenant improvements in Reno, NV. Brand-focused retail spaces, storefront construction, permitting. Licensed NV #0085999. Free estimates.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Retail+Build-Out+Reno+NV&sub=Tenant+Improvements+%C2%B7+NV+%230085999&badge=Commercial`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/retail/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Retail Construction & Tenant Improvements Reno NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [{ '@type': 'City', name: 'Reno' }, { '@type': 'State', name: 'Nevada' }],
      description: 'BRE Builders delivers retail construction, tenant improvements, and store build-outs in Reno — blending brand-focused design with durable craftsmanship.',
      url: 'https://brebuilders.com/retail/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does a retail tenant improvement include?', acceptedAnswer: { '@type': 'Answer', text: 'A retail tenant improvement (TI) typically includes demolition of the existing space, framing, electrical, plumbing, HVAC modifications, flooring, ceiling, lighting, storefront elements, and finish work. BRE Builders manages permitting and all trades.' } },
        { '@type': 'Question', name: 'How long does a retail build-out take in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'A standard retail build-out runs 4–8 weeks depending on scope. Permit approval adds 2–4 weeks. BRE Builders coordinates the schedule to get you open as quickly as code allows.' } },
        { '@type': 'Question', name: 'Can you work with my landlord and architect?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders coordinates with landlords, architects, and property managers. We review the lease improvement allowance, landlord approval process, and construction specifications as part of our pre-construction phase.' } },
      ],
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'Retail Build-Out', item: 'https://brebuilders.com/retail/' },
    ]},
  ],
}

const WHAT_WE_BUILD = [
  { icon: '🛒', title: 'Storefront Build-Outs', desc: 'New retail spaces built from shell condition — framing, electrical, plumbing, HVAC, flooring, and finishes.' },
  { icon: '🎨', title: 'Brand-Focused Design Execution', desc: 'We build to your brand standards and architect drawings. Millwork, custom fixtures, and specialty finishes executed precisely.' },
  { icon: '💡', title: 'Lighting & Electrical', desc: 'Display lighting, track systems, panel upgrades, POS outlets, and exterior signage wiring.' },
  { icon: '🪟', title: 'Storefront & Display Windows', desc: 'Aluminum storefront systems, display windows, and entry door installations.' },
  { icon: '📋', title: 'Permits & Inspections', desc: 'Full permit handling through City of Reno and Washoe County. Coordinate landlord approvals, building permits, and CO.' },
  { icon: '🔧', title: 'Tenant Improvement Renovations', desc: 'Existing retail space renovations — reconfiguration, upgraded finishes, ADA compliance, and systems updates.' },
]

const FAQS = [
  { q: 'What does a retail tenant improvement include?', a: 'A retail TI typically includes demolition, framing, electrical, plumbing, HVAC modifications, flooring, ceiling, lighting, storefront elements, and finish work. BRE Builders manages permitting and all trades in-house. Licensed NV #0085999.' },
  { q: 'How long does a retail build-out take in Reno?', a: 'A standard retail build-out runs 4–8 weeks depending on scope. Permit approval adds 2–4 weeks. BRE Builders coordinates the schedule to get you open as quickly as code allows.' },
  { q: 'Can you work with my landlord and architect?', a: 'Yes. We coordinate with landlords, architects, and property managers. We review the lease improvement allowance, landlord approval process, and construction specifications as part of pre-construction.' },
  { q: 'Do you handle ADA compliance for retail spaces?', a: 'Yes. All retail build-outs include ADA-compliant design — accessible pathways, door widths, restrooms where applicable, and entrance ramps. We ensure compliance before final inspection.' },
  { q: 'What areas does BRE Builders serve for retail construction?', a: 'We serve Reno, Sparks, Carson City, and the greater Northern Nevada region. Licensed NV #0085999 and CA #1093798 for retail projects on both sides of the state line.' },
]

export default function RetailPage() {
  return (
    <ServiceTemplate
      schema={schema}
      hero={{
        bgDesktop: IMGS.svc_retail,
        bgMobile: IMGS.svc_retail,
        eyebrow: 'Retail Construction · Reno & Northern Nevada',
        h1Lines: ['Retail Build-Out', 'Reno, Nevada'],
        h1Ghost: 'Tenant Improvements',
        lead: 'BRE Builders delivers high-impact retail construction and tenant improvements — blending brand-focused design with durable craftsmanship to create spaces that drive customer results. Licensed NV #0085999.',
        badges: ['Tenant Improvements', 'Brand-Focused Builds', 'Full Permit Handling', 'ADA Compliant'],
        ctaPrimaryLabel: 'Get a Retail Build-Out Quote →',
        ctaPrimaryHref: '/contact?service=retail',
        ctaSecondaryLabel: 'All Commercial Services',
        ctaSecondaryHref: '/services/commercial',
        urgencyNote: 'Licensed NV #0085999 · Trusted by local Reno businesses',
        stats: [{ n: '35+', label: 'Years' }, { n: 'NV · CA', label: 'Licensed' }, { n: 'Free', label: 'Estimates' }],
        license: 'both',
      }}
      sections={
        <>
          <MobileCTABox
            headline="Ready to build your retail space?"
            subtext="Licensed NV #0085999 · Trusted by Reno businesses · Free estimates"
            ctaLabel="Call for a Free Quote"
            ctaHref={SITE.phoneHref}
            variant="default"
          />

          <PageSection bg="bg-deep">
            <SectionLabel text="What We Build" />
            <SectionHeading line1="Spaces That Attract," line2italic="Engage, and Perform." size="lg" className="mb-4 text-cream" />
            <div className="speakable-summary max-w-[680px] mb-10 space-y-3 text-[15px] text-cream/55 leading-relaxed">
              <p>BRE Builders delivers retail construction and remodels that combine brand-focused design with durable craftsmanship. From shell build-outs to full tenant improvement renovations, we manage the entire process — permits, trades, and schedule coordination — in-house.</p>
              <p>Local Reno businesses trust BRE Builders for retail work that comes in on budget, on schedule, and ready for opening day.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {WHAT_WE_BUILD.map(s => (
                <div key={s.title} className="p-5 bg-panel rounded-2xl border border-white/[0.06] hover:border-teal/20 transition-colors">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="font-display text-[16px] text-cream mb-2">{s.title}</h3>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </PageSection>

          <PageSection bg="bg-void" border>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionLabel text="Our Process" />
                <SectionHeading line1="From Lease Signing" line2italic="to Opening Day." size="md" className="text-cream mb-6" />
                <div className="space-y-0">
                  {[
                    { step: '01', title: 'Pre-Construction & Permit Planning', body: 'We review your lease, landlord construction guidelines, and architect drawings. We identify permit requirements and establish a realistic timeline.' },
                    { step: '02', title: 'Demolition & Site Prep', body: 'Existing fixtures, flooring, and non-structural elements are removed. We stage the space for the incoming build.' },
                    { step: '03', title: 'Rough Framing & Systems', body: 'Walls framed, electrical rough-in, plumbing rough-in, and HVAC duct work — all inspected before close-up.' },
                    { step: '04', title: 'Finishes & Fixtures', body: 'Flooring, ceiling, lighting, millwork, storefront elements, and brand-specific fixtures installed to spec.' },
                    { step: '05', title: 'Final Inspection & Handover', body: 'We coordinate the final building inspection, obtain Certificate of Occupancy, and hand the space over punchlist-free.' },
                  ].map(s => (
                    <div key={s.step} className="flex gap-5 py-5 border-b border-white/[0.05] last:border-0">
                      <span className="font-mono text-[24px] text-teal/25 font-light flex-shrink-0 w-8">{s.step}</span>
                      <div>
                        <p className="text-[14px] text-cream/80 font-medium mb-1">{s.title}</p>
                        <p className="text-[13px] text-cream/45 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 lg:pt-12">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-3">Typical Timeline</p>
                  {[['Permit Approval', '2–4 weeks'], ['Demolition & Framing', '1–2 weeks'], ['Systems Rough-In', '1–2 weeks'], ['Finishes & Fixtures', '2–3 weeks'], ['Final Inspection', '1 week']].map(([phase, time]) => (
                    <div key={phase} className="flex justify-between py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-[13px] text-cream/60">{phase}</span>
                      <span className="font-mono text-[11px] text-teal/70">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-2">Trusted by Reno Businesses</p>
                  <p className="text-[13px] text-cream/55 leading-relaxed">BRE Builders has completed retail construction projects for local Reno businesses across service, food & beverage, specialty retail, and professional services. NV #0085999 · CA #1093798.</p>
                </div>
              </div>
            </div>
          </PageSection>

          <ServiceFAQSection faqs={FAQS} />
          <DesktopCTASection
            bgImage={IMGS.svc_retail}
            bgAlt="BRE Builders Reno NV"
            headlineItalic="Free Estimates · NV #0085999"
           
            headline="Get Your Retail Space Built"
            subtext="Free estimates. On-budget, on-schedule retail build-outs. Licensed NV #0085999 · CA #1093798."
            ctaLabel="Request a Retail Build-Out Quote →"
            ctaHref="/contact?service=retail"
          />
          <RelatedServices items={[
            { label: 'Commercial Construction', href: '/services/commercial', desc: 'BRE Builders Reno NV' },
            { label: 'Office Construction', href: '/services/office', desc: 'BRE Builders Reno NV' },
            { label: 'Warehouse & Metal', href: '/services/warehouse', desc: 'BRE Builders Reno NV' },
            { label: 'Concrete Work', href: '/services/concrete', desc: 'BRE Builders Reno NV' },
          ]} />
        </>
      }
    />
  )
}
