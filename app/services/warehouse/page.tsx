import type { Metadata } from 'next'
import ServiceTemplate, {
  ServiceHeroSection, SectionLabel, SectionHeading, SpeakableBlock,
  PageSection, MobileCTABox, DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Warehouse & Metal Buildings Reno NV | BRE Builders',
  description: 'Durable warehouse and metal building construction in Reno, NV. Custom steel structures, fast turnaround, code-compliant builds. Licensed NV #0085999. Free estimates.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Warehouse+%26+Metal+Buildings&sub=Custom+Steel+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Commercial`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/warehouse-metal-buildings/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Warehouse & Metal Building Construction Reno NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [{ '@type': 'City', name: 'Reno' }, { '@type': 'State', name: 'Nevada' }],
      description: 'BRE Builders constructs warehouses and metal buildings across Northern Nevada. Custom steel structures, site prep, foundation, erection, and finish work.',
      url: 'https://brebuilders.com/warehouse-metal-buildings/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What types of metal buildings does BRE Builders construct?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders constructs commercial warehouses, storage facilities, distribution centers, metal workshops, agricultural buildings, and industrial structures. All builds are code-compliant and permit-ready.' } },
        { '@type': 'Question', name: 'Do you handle the foundation for warehouse projects?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders handles the full scope — site preparation, concrete foundation slab, metal structure erection, interior finishing, and final inspection. Licensed NV #0085999.' } },
        { '@type': 'Question', name: 'How long does it take to build a metal warehouse in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Timeline depends on size and complexity. A standard metal building can be erected in 2–4 weeks after foundation is complete. Full project including permits and foundation typically runs 6–12 weeks.' } },
      ],
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'Warehouse & Metal Buildings', item: 'https://brebuilders.com/warehouse-metal-buildings/' },
    ]},
  ],
}

const SERVICES = [
  { icon: '🏭', title: 'Commercial Warehouses', desc: 'Distribution centers, storage facilities, and logistics hubs built for operational efficiency.' },
  { icon: '🔩', title: 'Metal Building Erection', desc: 'Pre-engineered metal structures assembled with precision — walls, roof systems, and framing.' },
  { icon: '🧱', title: 'Foundation & Site Prep', desc: 'Concrete slab foundations designed for industrial loads, with proper drainage and utility stub-outs.' },
  { icon: '🚪', title: 'Doors, Windows & Insulation', desc: 'Commercial overhead doors, personnel doors, windows, and full insulation packages.' },
  { icon: '⚡', title: 'Electrical & Lighting', desc: 'Industrial electrical panels, high-bay lighting, outlet runs, and exterior lighting.' },
  { icon: '📋', title: 'Full Permit Handling', desc: 'We manage all City of Reno and Washoe County commercial permits from application through CO.' },
]

const FAQS = [
  { q: 'What types of metal buildings does BRE Builders construct?', a: 'BRE Builders constructs commercial warehouses, storage facilities, distribution centers, metal workshops, agricultural buildings, and industrial structures across Northern Nevada. All builds are code-compliant and permit-ready. Licensed NV #0085999.' },
  { q: 'Do you handle the foundation for warehouse projects?', a: 'Yes. We handle the full scope — site preparation, concrete foundation slab, metal structure erection, interior finishing, and final inspection.' },
  { q: 'How long does it take to build a metal warehouse in Reno?', a: 'A standard metal building can be erected in 2–4 weeks after foundation is complete. Full project including permits and foundation typically runs 6–12 weeks depending on size and complexity.' },
  { q: 'Can you build metal buildings for industrial or agricultural use?', a: 'Yes. BRE Builders builds metal structures for industrial storage, equipment housing, workshops, and agricultural applications. We design to your specific use-case and load requirements.' },
  { q: 'Do you work on existing warehouse renovations?', a: 'Yes. We handle tenant improvements, structural repairs, dock door additions, mezzanine installs, and full interior build-outs in existing warehouse buildings.' },
]

export default function WarehousePage() {
  return (
    <ServiceTemplate theme="commercial"
      schema={schema}
      hero={{
        bgDesktop: IMGS.svc_warehouse,
        bgMobile: IMGS.svc_warehouse,
        eyebrow: 'Warehouse & Metal Buildings · Reno, NV',
        h1Lines: ['Warehouse &', 'Metal Buildings'],
        h1Ghost: 'Reno, Nevada',
        lead: 'BRE Builders delivers high-performance metal structures and warehouses — engineered for durability, functionality, and fast, cost-effective construction across Northern Nevada. Licensed NV #0085999.',
        badges: ['Custom Steel Structures', 'Fast Turnaround', 'Code-Compliant Builds', 'Full Permit Handling'],
        ctaPrimaryLabel: 'Get a Free Warehouse Quote →',
        ctaPrimaryHref: '/contact?service=warehouse',
        ctaSecondaryLabel: 'All Commercial Services',
        ctaSecondaryHref: '/services/commercial',
        urgencyNote: 'Licensed NV #0085999 · Free estimates on all commercial projects',
        stats: [{ n: '35+', label: 'Years' }, { n: 'NV · CA', label: 'Licensed' }, { n: 'Free', label: 'Estimates' }],
        license: 'NV',
      }}
      sections={
        <>
          {/* Mobile CTA */}
          <MobileCTABox
            headline="Need a warehouse built right?"
            subtext="Licensed NV #0085999 · Free estimates · Response within 24 hours"
            ctaLabel="Call for a Free Quote"
            ctaHref={SITE.phoneHref}
            variant="default"
          />

          {/* What We Build */}
          <PageSection bg="bg-deep">
            <SectionLabel text="What We Build" />
            <SectionHeading line1="From Foundation" line2italic="to Final Inspection." size="lg" className="mb-4 text-cream" />
            <p className="text-[15px] text-cream/55 leading-relaxed max-w-[640px] mb-10">
              BRE Builders handles the complete warehouse and metal building project — site grading, foundation, structure, envelope, and finish work. One contractor, full accountability.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {SERVICES.map(s => (
                <div key={s.title} className="p-5 bg-panel rounded-2xl border border-white/[0.06] hover:border-teal/20 transition-colors">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="font-display text-[16px] text-cream mb-2">{s.title}</h3>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="speakable-summary max-w-[720px] space-y-4 text-[15px] text-cream/55 leading-relaxed">
              <p>BRE Builders constructs warehouse and metal buildings across Northern Nevada. We handle site preparation, foundation, erection, and finish work for industrial, storage, and commercial structures. Our team coordinates every trade in-house — no subcontracting the critical work.</p>
              <p>Reno's climate demands structures built for freeze-thaw cycles, wind loads, and UV exposure. Every metal building we deliver is engineered to local code requirements and inspected through to Certificate of Occupancy. Licensed NV #0085999.</p>
            </div>
          </PageSection>

          {/* Why BRE for warehouse */}
          <PageSection bg="bg-void" border>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel text="Why Choose BRE Builders" />
                <SectionHeading line1="Built for Nevada." line2italic="Built to Last." size="md" className="text-cream mb-6" />
                <div className="space-y-5">
                  {[
                    { title: '35+ Years of Commercial Experience', body: 'Since 1989, BRE Builders has been constructing commercial and industrial structures across Northern Nevada. We understand local code requirements, inspection processes, and the permitting timelines that affect your project schedule.' },
                    { title: 'Full In-House Scope', body: 'Site preparation, foundations, structural erection, electrical, insulation, and finish work — all managed under one license. No coordination gaps, no blame-shifting between subs.' },
                    { title: 'Fast Build Timelines', body: 'Metal building erection is fast when the foundation and materials are staged correctly. BRE Builders sequences your project to minimize weather exposure and meet your operational deadlines.' },
                    { title: 'Code-Compliant Throughout', body: 'Every warehouse we build meets Washoe County and City of Reno commercial building codes. We pull all permits, coordinate all inspections, and deliver a clean Certificate of Occupancy.' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-[14px] text-cream/80 font-medium mb-1">{item.title}</p>
                        <p className="text-[13px] text-cream/45 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-4">Typical Warehouse Scope</div>
                  {[
                    ['Site Survey & Grading', 'Pre-construction'],
                    ['Foundation Slab Pour', 'Week 1–3'],
                    ['Metal Structure Erection', 'Week 3–5'],
                    ['Envelope — Walls & Roof', 'Week 5–6'],
                    ['Electrical & Mechanical', 'Week 6–8'],
                    ['Finish Work & Inspection', 'Week 8–10'],
                  ].map(([phase, timing]) => (
                    <div key={phase} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-[13px] text-cream/65">{phase}</span>
                      <span className="font-mono text-[10px] text-teal/70">{timing}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-1">Licensed & Bonded</p>
                  <p className="text-[13px] text-cream/60">NV Contractor License #0085999 · CA License #1093798. Fully insured for commercial construction projects throughout Northern Nevada and Northern California.</p>
                </div>
              </div>
            </div>
          </PageSection>

          {/* FAQ */}
          <ServiceFAQSection faqs={FAQS} />

          {/* Desktop CTA */}
          <DesktopCTASection
            bgImage={IMGS.svc_warehouse}
            bgAlt="BRE Builders Reno NV"
            headlineItalic="Free Estimates · NV #0085999"
           
            headline="Ready to Build?"
            subtext="Free estimates on all warehouse and metal building projects. Licensed NV #0085999 · CA #1093798. Response within 24 hours."
            ctaLabel="Get a Free Warehouse Quote →"
            ctaHref="/contact?service=warehouse"
          />

          {/* Related */}
          <RelatedServices items={[
            { label: 'Commercial Construction', href: '/services/commercial', desc: 'BRE Builders Reno NV' },
            { label: 'Concrete Work', href: '/services/concrete', desc: 'BRE Builders Reno NV' },
            { label: 'Office Construction', href: '/services/office', desc: 'BRE Builders Reno NV' },
            { label: 'Retail Build-Out', href: '/services/retail', desc: 'BRE Builders Reno NV' },
          ]} />
        </>
      }
    />
  )
}
