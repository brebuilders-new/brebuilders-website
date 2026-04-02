import type { Metadata } from 'next'
import ServiceTemplate, {
  SectionLabel, SectionHeading, PageSection, MobileCTABox,
  DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Concrete Contractors Reno NV | Foundations, Slabs & Flatwork | BRE Builders',
  description: 'Expert concrete contractors in Reno, NV. Foundations, driveways, patios, commercial slabs, walkways. Licensed NV #0085999. Free estimates.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Concrete+Contractors+Reno+NV&sub=Foundations+%C2%B7+Slabs+%C2%B7+Flatwork+%C2%B7+NV+%230085999&badge=Concrete`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/concrete/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Concrete Contractors Reno NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [{ '@type': 'City', name: 'Reno' }, { '@type': 'State', name: 'Nevada' }],
      description: 'BRE Builders delivers high-quality concrete work — foundations, driveways, patios, commercial slabs, and walkways — built for strength and longevity in Reno\'s high-desert climate.',
      url: 'https://brebuilders.com/concrete/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What concrete services does BRE Builders provide in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides foundation pours, commercial slabs, residential driveways, patios, sidewalks, retaining walls, and specialty concrete work. Licensed NV #0085999.' } },
        { '@type': 'Question', name: 'How does Reno\'s climate affect concrete?', acceptedAnswer: { '@type': 'Answer', text: 'Reno\'s freeze-thaw cycles, high UV exposure, and clay soils require specific concrete mix designs, proper curing procedures, and expansion joint placement. BRE Builders has worked in these conditions since 1989.' } },
        { '@type': 'Question', name: 'Do you pour foundations for ADUs and additions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders pours foundations for ADUs, home additions, garage slabs, and new construction. We coordinate with structural engineers for engineered foundation specifications.' } },
      ],
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'Concrete Work', item: 'https://brebuilders.com/concrete/' },
    ]},
  ],
}

const FAQS = [
  { q: 'What concrete services does BRE Builders provide in Reno?', a: 'BRE Builders provides foundation pours, commercial slabs, residential driveways, patios, sidewalks, retaining walls, utility access slabs, and specialty concrete work. Licensed NV #0085999.' },
  { q: "How does Reno's climate affect concrete work?", a: "Reno's freeze-thaw cycles, high UV exposure, and expansive clay soils require specific concrete mix designs, proper curing procedures, and strategic expansion joint placement. BRE Builders has worked in these conditions since 1989." },
  { q: 'Do you pour foundations for ADUs and home additions?', a: 'Yes. BRE Builders pours foundations for ADUs, home additions, garage slabs, and new construction. We coordinate with structural engineers for engineered foundation specifications and work through the full permitting process.' },
  { q: 'Can you repair existing concrete in Reno?', a: 'Yes. We repair cracked slabs, settled sections, spalled surfaces, and deteriorated expansion joints. Minor repairs through full slab replacement.' },
  { q: 'Do you do commercial concrete work?', a: 'Yes. BRE Builders has completed commercial concrete pours including the car wash in Reno — a large utility-access commercial slab. We handle commercial foundations, warehouse floors, and site concrete.' },
]

export default function ConcretePage() {
  return (
    <ServiceTemplate theme="commercial"
      schema={schema}
      hero={{
        bgDesktop: IMGS.concrete_slab,
        bgMobile: IMGS.svc_concrete,
        eyebrow: 'Concrete Work · Reno & Northern Nevada',
        h1Lines: ['Concrete Contractors', 'Reno, Nevada'],
        h1Ghost: 'Strength. Precision. Longevity.',
        lead: 'BRE Builders delivers high-quality concrete solutions — from foundations and driveways to walkways and commercial slabs — built for strength and longevity in Reno\'s high-desert climate. Licensed NV #0085999.',
        badges: ['Foundations & Slabs', 'Driveways & Patios', 'Commercial Concrete', 'Freeze-Thaw Rated'],
        ctaPrimaryLabel: 'Get a Concrete Quote →',
        ctaPrimaryHref: '/contact?service=concrete',
        ctaSecondaryLabel: 'View Concrete Projects',
        ctaSecondaryHref: '/projects/car-wash',
        urgencyNote: 'Licensed NV #0085999 · 35+ years in Reno\'s climate conditions',
        stats: [{ n: '35+', label: 'Years' }, { n: 'NV · CA', label: 'Licensed' }, { n: 'Free', label: 'Estimates' }],
        license: 'NV',
      }}
      sections={
        <>
          <MobileCTABox
            headline="Need concrete work done right?"
            subtext="Licensed NV #0085999 · Built for Reno's climate · Free estimates"
            ctaLabel="Call for a Free Quote"
            ctaHref={SITE.phoneHref}
            variant="default"
          />

          <PageSection bg="bg-deep">
            <SectionLabel text="Concrete Services" />
            <SectionHeading line1="Built for Strength," line2italic="Precision, and Longevity." size="lg" className="mb-6 text-cream" />
            <div className="speakable-summary max-w-[680px] mb-10 space-y-3 text-[15px] text-cream/55 leading-relaxed">
              <p>BRE Builders delivers high-quality concrete work for residential and commercial projects across Reno and Northern Nevada. We handle everything from ADU foundations to large commercial slabs — with the experience of 35+ years working in Reno's specific climate conditions.</p>
              <p>Reno's expansive clay soils and freeze-thaw cycles create unique demands on concrete. We use proper mix designs, curing procedures, and expansion joint strategies that hold up over time.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { icon: '🏗️', title: 'Foundations', desc: 'Residential and commercial foundations — slab-on-grade, stem wall, and pier designs. Engineered specifications when required.' },
                { icon: '🚗', title: 'Driveways', desc: 'Residential and commercial driveways. Control joints, proper slope, and finish options including broom and exposed aggregate.' },
                { icon: '🪨', title: 'Patios & Flatwork', desc: 'Backyard patios, pool decks, walkways, and entry slabs. Decorative finish options available.' },
                { icon: '🏭', title: 'Commercial Slabs', desc: 'Warehouse floors, utility access slabs, loading dock areas, and commercial site concrete.' },
                { icon: '🧱', title: 'Retaining Walls', desc: 'Concrete retaining walls for grading, erosion control, and site development.' },
                { icon: '🔧', title: 'Concrete Repair', desc: 'Crack repair, slab grinding, spall patching, and joint replacement on existing concrete.' },
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
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionLabel text="Reno Climate Expertise" />
                <SectionHeading line1="35 Years in" line2italic="Reno's Conditions." size="md" className="text-cream mb-6" />
                <div className="space-y-4 text-[14px] text-cream/55 leading-relaxed">
                  <p>Reno's unique combination of expansive clay soils, freeze-thaw cycles, high-desert UV exposure, and temperature swings creates challenges that generic concrete specifications don't address. BRE Builders has been pouring concrete in these conditions since 1989.</p>
                  <p>Proper concrete work in Reno requires correct mix design for the freeze-thaw environment, adequate curing time and protection, properly spaced control and expansion joints, and drainage planning that accounts for Reno's soil behavior when it expands and contracts.</p>
                  <p>We don't guess at specs. We've poured slabs and foundations across the Reno basin, Sparks, Carson City, and at elevation in Lake Tahoe — each environment has specific requirements we know from direct experience.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-4">Concrete Project Types</p>
                  {[
                    'ADU foundations and slabs',
                    'Home addition foundations',
                    'Garage floor pours',
                    'Commercial warehouse slabs',
                    'Car wash and utility slabs',
                    'Driveway replacement',
                    'Patio and walkway pours',
                    'Retaining wall construction',
                    'Concrete repair and patching',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2.5 py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-teal text-[12px]">✓</span>
                      <span className="text-[13px] text-cream/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageSection>

          <ServiceFAQSection faqs={FAQS} />
          <DesktopCTASection
            bgImage={IMGS.concrete_slab}
            bgAlt="BRE Builders Reno NV"
            headlineItalic="Free Estimates · NV #0085999"
           
            headline="Get Your Concrete Work Done Right"
            subtext="Free estimates. 35+ years of Reno climate expertise. Licensed NV #0085999."
            ctaLabel="Request a Concrete Quote →"
            ctaHref="/contact?service=concrete"
          />
          <RelatedServices items={[
            { label: 'ADU Construction', href: '/services/adu', desc: 'BRE Builders Reno NV' },
            { label: 'Home Additions', href: '/services/additions', desc: 'BRE Builders Reno NV' },
            { label: 'Commercial Construction', href: '/services/commercial', desc: 'BRE Builders Reno NV' },
            { label: 'Hauling & Removal', href: '/services/hauling', desc: 'BRE Builders Reno NV' },
          ]} />
        </>
      }
    />
  )
}
