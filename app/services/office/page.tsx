import type { Metadata } from 'next'
import ServiceTemplate, {
  SectionLabel, SectionHeading, SpeakableBlock, PageSection, MobileCTABox,
  DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Office Construction Contractors Reno NV | BRE Builders',
  description: 'Office construction and build-out contractors in Reno, NV. New office builds, tenant improvements, medical offices, ADA compliance. Licensed NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Office+Construction+Reno+NV&sub=Build-Outs+%C2%B7+Tenant+Improvements+%C2%B7+NV+%230085999&badge=Commercial`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/office/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Office Construction & Build-Out Contractors Reno NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [{ '@type': 'City', name: 'Reno' }, { '@type': 'State', name: 'Nevada' }],
      description: 'BRE Builders creates functional, stylish office environments — from new builds to full-scale renovations — tailored to your team\'s workflow and growth. Licensed NV #0085999.',
      url: 'https://brebuilders.com/office/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What types of office construction does BRE Builders do?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders handles new office builds, tenant improvement build-outs, medical office construction, private suite additions, open-plan conversions, and full office renovations in Reno, NV. Licensed NV #0085999.' } },
        { '@type': 'Question', name: 'Do you build medical offices in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders has experience with medical office and healthcare facility construction, including HIPAA-compliant layout considerations, specialized plumbing, and ADA-compliant design.' } },
      ],
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'Office Construction', item: 'https://brebuilders.com/office/' },
    ]},
  ],
}

const FAQS = [
  { q: 'What types of office construction does BRE Builders do?', a: 'BRE Builders handles new office builds, tenant improvement build-outs, medical office construction, private suite additions, open-plan conversions, and full office renovations in Reno, NV. Licensed NV #0085999.' },
  { q: 'Do you build medical offices in Reno?', a: 'Yes. BRE Builders has experience with medical office and healthcare facility construction, including plumbing for medical sinks, ADA-compliant restrooms and corridors, and specialized MEP requirements.' },
  { q: 'How long does an office build-out take?', a: 'A standard office tenant improvement runs 4–8 weeks. Larger multi-room builds or those requiring significant MEP work can take 8–12 weeks. Permit approval adds 2–4 weeks upfront.' },
  { q: 'Can you add private offices to an open floor plan?', a: 'Yes. BRE Builders adds private offices, conference rooms, and glass partition walls to existing open-plan spaces. We manage structural framing, electrical for new circuits, and all finish work.' },
  { q: 'Do you handle ADA compliance for office spaces?', a: 'Yes. All office construction includes ADA-compliant design — accessible restrooms, door widths, pathway clearances, and accessible entry. We ensure full compliance before final inspection.' },
]

export default function OfficePage() {
  return (
    <ServiceTemplate theme="commercial"
      schema={schema}
      hero={{
        bgDesktop: IMGS.svc_office,
        bgMobile: IMGS.svc_office,
        eyebrow: 'Office Construction · Reno & Northern Nevada',
        h1Lines: ['Office Construction', 'Reno, Nevada'],
        h1Ghost: 'Build-Outs & Renovations',
        lead: 'BRE Builders creates functional, stylish office environments — from new builds to full-scale renovations — tailored to your team\'s workflow and growth. Licensed NV #0085999.',
        badges: ['New Office Builds', 'Tenant Improvements', 'Medical Offices', 'ADA Compliant'],
        ctaPrimaryLabel: 'Get an Office Build-Out Quote →',
        ctaPrimaryHref: '/contact?service=office',
        ctaSecondaryLabel: 'All Commercial Services',
        ctaSecondaryHref: '/services/commercial',
        urgencyNote: 'Licensed NV #0085999 · Free estimates on all office projects',
        stats: [{ n: '35+', label: 'Years' }, { n: 'NV · CA', label: 'Licensed' }, { n: 'Free', label: 'Estimates' }],
        license: 'both',
      }}
      sections={
        <>
          <MobileCTABox
            headline="Need an office space built or renovated?"
            subtext="Licensed NV #0085999 · Free estimates · Response within 24 hours"
            ctaLabel="Call for a Free Quote"
            ctaHref={SITE.phoneHref}
            variant="default"
          />

          <PageSection bg="bg-deep">
            <SectionLabel text="What We Build" />
            <SectionHeading line1="Designed for Productivity." line2italic="Built for Growth." size="lg" className="mb-6 text-cream" />
            <div className="speakable-summary max-w-[680px] mb-10 space-y-3 text-[15px] text-cream/55 leading-relaxed">
              <p>BRE Builders creates functional, stylish office environments from new builds to full-scale renovations, tailored to your team's workflow and business goals. We manage every aspect of the project in-house — permits, framing, electrical, mechanical, and finishes.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { icon: '🏢', title: 'New Office Construction', desc: 'Ground-up office buildings and commercial suites built to your specifications.' },
                { icon: '🔨', title: 'Tenant Improvement Build-Outs', desc: 'Transform shell spaces or existing offices into functional, branded environments.' },
                { icon: '🏥', title: 'Medical Office Construction', desc: 'Healthcare-specific builds with specialized plumbing, ADA design, and HIPAA layout considerations.' },
                { icon: '🪟', title: 'Glass Partitions & Private Offices', desc: 'Add private offices, conference rooms, and glass wall systems to open floor plans.' },
                { icon: '⚡', title: 'Electrical & Data Cabling', desc: 'Panel upgrades, new circuits, outlet placement for workstations, and structured data wiring.' },
                { icon: '♿', title: 'ADA Compliance', desc: 'Accessible restrooms, door widths, ramp installations, and fully compliant corridors.' },
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
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SectionLabel text="Office Types We Build" />
                <SectionHeading line1="Every Workspace." line2italic="Professionally Built." size="md" className="text-cream mb-6" />
                <div className="space-y-4">
                  {[
                    { t: 'Professional Services Offices', d: 'Law firms, accounting, financial services — private offices, conference rooms, reception areas.' },
                    { t: 'Medical & Dental Offices', d: 'Exam rooms, sterilization areas, reception, waiting rooms — ADA-compliant throughout.' },
                    { t: 'Technology & Startup Offices', d: 'Open-plan workspaces, server rooms, collaborative areas, and branded environments.' },
                    { t: 'Real Estate & Insurance Offices', d: 'Client-facing reception areas, private consultation rooms, and open agent floors.' },
                    { t: 'Government & Non-Profit Facilities', d: 'Code-compliant office construction meeting all public facility requirements.' },
                  ].map(item => (
                    <div key={item.t} className="flex gap-3 p-4 bg-panel rounded-xl border border-white/[0.05]">
                      <span className="text-teal flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="text-[14px] text-cream/75 font-medium">{item.t}</p>
                        <p className="text-[12px] text-cream/40 mt-0.5">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel text="Why BRE Builders" />
                <SectionHeading line1="35 Years of" line2italic="Commercial Expertise." size="md" className="text-cream mb-6" />
                <div className="space-y-4 text-[14px] text-cream/55 leading-relaxed">
                  <p>BRE Builders has been constructing commercial and office spaces across Reno and Northern Nevada since 1989. We hold Nevada Contractor License #0085999 and California Contractor License #1093798.</p>
                  <p>We manage every phase in-house — no subcontracting the critical work. Our team handles structural framing, electrical, plumbing rough-in, HVAC coordination, and all interior finishes under one contract.</p>
                  <p>Office projects in Reno require coordination with the City of Reno Planning Department, Building Department, and in some cases the Fire Marshal. BRE Builders has the permit experience to navigate the process efficiently.</p>
                </div>
                <div className="mt-6 bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-1">Free Estimates</p>
                  <p className="text-[13px] text-cream/55">We provide free, no-obligation estimates on all office construction projects. Contact us to schedule a site visit and project consultation.</p>
                </div>
              </div>
            </div>
          </PageSection>

          <ServiceFAQSection
            faqs={FAQS}
            label="Office Construction Questions"
            aeoContent={
              <div>
                <SectionLabel text="Office Construction in Reno NV" />
                <SectionHeading line1="What Reno Businesses Ask" line2italic="Before Building Out." size="md" className="mb-6" />
                <div className="speakable-faq space-y-4 text-[14px] text-cream/60 leading-relaxed">
                  <div>
                    <h3 className="font-display text-[16px] text-teal mb-2">How long does an office tenant improvement take in Reno?</h3>
                    <p>A standard office tenant improvement runs 4–8 weeks. Larger multi-room builds or those requiring significant MEP work can take 8–12 weeks. Permit approval adds 2–4 weeks upfront. BRE Builders provides a project schedule at kickoff so you can plan your move-in date. Licensed NV #0085999.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] text-teal mb-2">Does BRE Builders handle ADA compliance for office construction?</h3>
                    <p>Yes. All office construction includes ADA-compliant design — accessible restrooms, door widths, pathway clearances, and accessible entry. BRE Builders ensures full compliance before final inspection with Washoe County or the City of Reno.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] text-teal mb-2">Can BRE Builders add private offices to an open floor plan?</h3>
                    <p>Yes. BRE Builders adds private offices, conference rooms, and glass partition walls to existing open-plan spaces — managing structural framing, electrical for new circuits, data rough-in, and all finish work.</p>
                  </div>
                </div>
              </div>
            }
          />
          <DesktopCTASection
            bgImage={IMGS.svc_office}
            bgAlt="BRE Builders Reno NV"
            headlineItalic="Free Estimates · NV #0085999"
           
            headline="Start Your Office Project"
            subtext="Free estimates on all office construction. Licensed NV #0085999 · CA #1093798. Response within 24 hours."
            ctaLabel="Get an Office Build-Out Quote →"
            ctaHref="/contact?service=office"
          />
          <RelatedServices items={[
            { label: 'Commercial Construction', href: '/services/commercial', desc: 'BRE Builders Reno NV' },
            { label: 'Retail Build-Out', href: '/services/retail', desc: 'BRE Builders Reno NV' },
            { label: 'Warehouse & Metal', href: '/services/warehouse', desc: 'BRE Builders Reno NV' },
            { label: 'Lofts & Condos', href: '/services/lofts-condos', desc: 'BRE Builders Reno NV' },
          ]} />
        </>
      }
    />
  )
}
