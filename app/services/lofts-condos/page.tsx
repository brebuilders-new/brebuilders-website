import type { Metadata } from 'next'
import ServiceTemplate, {
  SectionLabel, SectionHeading, PageSection, MobileCTABox,
  DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Loft & Condo Remodeling Reno NV | HOA-Compliant',
  description: 'Loft and condo remodeling in Reno, NV. Custom layouts, kitchen & bath upgrades, HOA-compliant work. Licensed NV #0085999. Free estimates.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Loft+%26+Condo+Remodeling&sub=Modern+Renovations+%C2%B7+Reno+NV+%C2%B7+NV+%230085999&badge=Residential`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/lofts-and-condo-remodels/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Loft & Condo Remodeling Reno NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [{ '@type': 'City', name: 'Reno' }, { '@type': 'State', name: 'Nevada' }],
      description: 'BRE Builders delivers modern, high-quality renovations for lofts and condos — transforming interiors with smart layouts, premium finishes, and expert craftsmanship. Licensed NV #0085999.',
      url: 'https://brebuilders.com/lofts-and-condo-remodels/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders work with HOA restrictions for condo remodels?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders is experienced with HOA approval processes and condo building rules. We review your HOA documentation, coordinate approvals, and work within the restrictions that apply to your unit.' } },
        { '@type': 'Question', name: 'Can you remodel a condo kitchen or bathroom in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kitchen and bath remodeling is one of the most common condo renovation requests we receive. We handle full gut-and-remodel or targeted upgrades — cabinets, countertops, tile, plumbing fixtures, and electrical.' } },
        { '@type': 'Question', name: 'Do you do loft conversions and open-plan remodels?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders handles open-plan conversions, loft bedroom builds, mezzanine additions, and maximizing vertical space in loft-style units.' } },
      ],
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'Lofts & Condo Remodels', item: 'https://brebuilders.com/lofts-and-condo-remodels/' },
    ]},
  ],
}

const FAQS = [
  { q: 'Does BRE Builders work with HOA restrictions for condo remodels?', a: 'Yes. BRE Builders is experienced with HOA approval processes and condo building rules. We review your HOA documentation, coordinate approvals, and work within the restrictions that apply to your unit. Licensed NV #0085999.' },
  { q: 'Can you remodel a condo kitchen or bathroom in Reno?', a: 'Yes. Kitchen and bath remodeling is one of the most common condo renovation requests. We handle full gut-and-remodel or targeted upgrades — cabinets, countertops, tile, plumbing fixtures, and electrical.' },
  { q: 'Do you do loft conversions and open-plan remodels?', a: 'Yes. BRE Builders handles open-plan conversions, loft bedroom builds, mezzanine additions, and maximizing vertical space in loft-style units throughout Reno.' },
  { q: 'How do you handle noise restrictions in condo buildings?', a: 'We schedule loud work during permitted hours, use dust containment barriers to protect neighbors, and coordinate with building management on work schedules. We treat the shared building with respect.' },
  { q: 'Do you work in high-rise condos in Reno?', a: 'Yes. BRE Builders has experience working in multi-story residential buildings — including elevator access coordination, loading dock scheduling, and working within building access rules.' },
]

export default function LoftCondoPage() {
  return (
    <ServiceTemplate theme="warmth"
      schema={schema}
      hero={{
        bgDesktop: IMGS.svc_loft,
        bgMobile: IMGS.svc_loft,
        eyebrow: 'Lofts & Condo Remodels · Reno, NV',
        h1Lines: ['Loft & Condo', 'Remodeling'],
        h1Ghost: 'Reno, Nevada',
        lead: 'BRE Builders delivers modern, high-quality renovations for lofts and condos — transforming interiors with smart layouts, premium finishes, and expert craftsmanship. HOA-compliant. Licensed NV #0085999.',
        badges: ['HOA-Compliant Work', 'Kitchen & Bath', 'Custom Layouts', 'Licensed & Insured'],
        ctaPrimaryLabel: 'Get a Remodel Quote →',
        ctaPrimaryHref: '/contact?service=lofts-condos',
        ctaSecondaryLabel: 'Kitchen & Bath Upgrades',
        ctaSecondaryHref: '/services/kitchen-bath',
        urgencyNote: 'Licensed NV #0085999 · HOA coordination included',
        stats: [{ n: '35+', label: 'Years' }, { n: 'NV · CA', label: 'Licensed' }, { n: 'Free', label: 'Estimates' }],
        license: 'NV',
      }}
      sections={
        <>
          <MobileCTABox
            headline="Ready to transform your loft or condo?"
            subtext="HOA-compliant · Licensed NV #0085999 · Free estimates"
            ctaLabel="Call for a Free Quote"
            ctaHref={SITE.phoneHref}
            variant="default"
          />

          <PageSection bg="bg-deep">
            <SectionLabel text="What We Do" />
            <SectionHeading line1="Maximize Space" line2italic="and Style." size="lg" className="mb-6 text-cream" />
            <div className="speakable-summary max-w-[680px] mb-10 space-y-3 text-[15px] text-cream/55 leading-relaxed">
              <p>BRE Builders remodels lofts and condos throughout Reno. We work within HOA and building restrictions, coordinate with property management where needed, and deliver finished results on schedule.</p>
              <p>Whether you want to open up a floor plan, upgrade a kitchen, renovate a bathroom, add custom storage, or fully refresh the interior of your unit — we handle the complete project in-house.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { icon: '🍳', title: 'Kitchen & Bath Upgrades', desc: 'Full gut-and-remodel or targeted upgrades — cabinets, countertops, tile, fixtures, and electrical.' },
                { icon: '🪵', title: 'Flooring Replacement', desc: 'Hardwood, engineered wood, LVP, and tile — installed with proper subfloor prep and transitions.' },
                { icon: '🗄️', title: 'Custom Built-Ins & Storage', desc: 'Floor-to-ceiling shelving, custom closets, entertainment walls, and built-in storage solutions.' },
                { icon: '💡', title: 'Electrical & Lighting', desc: 'Panel upgrades, recessed lighting, pendant installations, smart switches, and outlet additions.' },
                { icon: '🔧', title: 'Interior Structural Work', desc: 'Non-load-bearing wall removal, loft platforms, mezzanine floors, and space reconfiguration.' },
                { icon: '🎨', title: 'Painting & Finishing', desc: 'Full interior paint, texture work, trim installation, and finish-level craftsmanship throughout.' },
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
                <SectionLabel text="HOA & Building Coordination" />
                <SectionHeading line1="We Know How" line2italic="Condo Buildings Work." size="md" className="text-cream mb-6" />
                <div className="space-y-4 text-[14px] text-cream/55 leading-relaxed">
                  <p>Remodeling a condo or loft is not the same as remodeling a house. You have HOA approval requirements, neighboring units to protect from noise and dust, shared hallways and elevators to work around, and building management teams to coordinate with.</p>
                  <p>BRE Builders handles all of this. We review HOA documentation before any work begins, submit the required approval requests, schedule work within allowed hours, and use proper dust containment to protect your neighbors and the shared building.</p>
                  <p>We have experience in multi-story residential buildings in Reno — including elevator access scheduling, loading dock coordination, and working with building managers to get access without disrupting other residents.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-4">Our HOA Process</p>
                  {[
                    ['Review HOA Rules & CC&Rs', 'Pre-construction'],
                    ['Submit Approval Documentation', 'Week 1'],
                    ['Coordinate Building Access', 'Pre-start'],
                    ['Schedule Within Permitted Hours', 'During build'],
                    ['Dust & Noise Containment', 'Throughout'],
                    ['Final Inspection & Sign-Off', 'Completion'],
                  ].map(([step, timing]) => (
                    <div key={step} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-[13px] text-cream/65">{step}</span>
                      <span className="font-mono text-[10px] text-teal/70">{timing}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-2">Reno Loft & Condo Areas We Serve</p>
                  <p className="text-[13px] text-cream/55 leading-relaxed">Downtown Reno lofts, Midtown condos, South Reno developments, Sparks, Carson City, and throughout Northern Nevada. Licensed NV #0085999.</p>
                </div>
              </div>
            </div>
          </PageSection>

          <ServiceFAQSection faqs={FAQS} />
          <DesktopCTASection
            bgImage={IMGS.svc_loft}
            bgAlt="BRE Builders Reno NV"
            headlineItalic="Free Estimates · NV #0085999"
           
            headline="Transform Your Loft or Condo"
            subtext="Free estimates. HOA coordination included. Licensed NV #0085999."
            ctaLabel="Get a Remodel Quote →"
            ctaHref="/contact?service=lofts-condos"
          />
          <RelatedServices items={[
            { label: 'Kitchen & Bath Remodeling', href: '/services/kitchen-bath', desc: 'BRE Builders Reno NV' },
            { label: 'Home Additions', href: '/services/additions', desc: 'BRE Builders Reno NV' },
            { label: 'Structural Repairs', href: '/services/repairs', desc: 'BRE Builders Reno NV' },
            { label: 'ADU Construction', href: '/services/adu', desc: 'BRE Builders Reno NV' },
          ]} />
        </>
      }
    />
  )
}
