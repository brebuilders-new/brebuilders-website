import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Commercial Contractor Reno NV | Tenant Improvements',
  description: 'Commercial contractor in Reno NV. Tenant improvement contractors for office, retail, warehouse builds. Licensed NV #0085999 · CA #1093798. Free estimates.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Commercial+Contractor+Reno+NV&sub=Tenant+Improvements+%C2%B7+NV+%230085999+%C2%B7+CA+%231093798&badge=Commercial`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Commercial Contractor Reno NV | Tenant Improvements', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Contractor Reno NV | Tenant Improvements',
    description: 'Commercial contractor in Reno NV. Tenant improvement contractors for office, retail, warehouse builds. Licensed NV #0085999 · CA #1093798. Free estimates.',
    images: [{ url: `${SITE_URL}/api/og?title=Commercial+Contractor+Reno+NV&sub=Tenant+Improvements+%C2%B7+NV+%230085999+%C2%B7+CA+%231093798&badge=Commercial`, alt: 'Blue Reef Builders — Commercial Contractor Reno NV | Tenant Improvements' }],
  },
  alternates: { canonical: `${SITE_URL}/commercial-services/` },
}

const FAQS = [
  { q: 'What commercial services does BRE Builders provide?', a: 'Tenant improvements, office buildouts, retail construction, warehouse builds, metal buildings, and commercial concrete. Licensed NV #0085999 · CA #1093798.' },
  { q: 'Does BRE Builders do tenant improvements in Reno NV?', a: 'Yes. We specialize in commercial tenant improvements — office suites, retail spaces, medical offices, and multi-tenant buildouts. We handle permits, framing, MEP coordination, and finish work.' },
  { q: 'Do you build warehouses and metal buildings in Nevada?', a: 'Yes. BRE Builders builds custom warehouse and metal buildings across Northern Nevada. Scalable, code-compliant structures for industrial, storage, and commercial use.' },
  { q: 'Are you licensed for commercial work in California?', a: 'Yes. BRE Builders holds California Contractor License #1093798 and has completed commercial projects in Northern California. We handle all California permit requirements.' },
  { q: 'How long does a commercial tenant improvement take?', a: 'Timelines vary by scope. A basic office suite remodel typically takes 4–8 weeks. A full buildout from shell condition runs 8–20 weeks depending on permit timelines and trade coordination. BRE Builders provides a project schedule at kickoff.' },
  { q: 'Do you handle permits for commercial projects?', a: 'Yes. BRE Builders manages all commercial permit applications, trade inspections, and final sign-offs. We work with Washoe County, the City of Reno, and California jurisdictions.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/services/commercial/#service',
      name: 'Commercial Construction Reno NV',
      description: 'BRE Builders provides commercial construction and tenant improvements in Reno, NV. Offices, retail, warehouses, metal buildings. Licensed NV #0085999 · CA #1093798.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Northern California' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brebuilders.com/services/' },
        { '@type': 'ListItem', position: 3, name: 'Commercial Construction', item: 'https://brebuilders.com/services/commercial/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary', '.speakable-faq'] },
  ],
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function CommercialPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main data-theme="commercial">
        {/* ── MOBILE HERO — compact, content above fold ── */}
        <section className="md:hidden relative overflow-hidden">
          <div className="relative w-full" style={{ height: '42vw', minHeight: 150, maxHeight: 220 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.svc_commercial} alt="Commercial Tenant Improvement Construction Reno NV BRE Builders" className="w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 35%' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-void/5 to-void/85" />
          </div>
          <div className="bg-deep px-5 pt-5 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-teal">Commercial Construction · Reno NV</span>
            </div>
            <h1 className="font-display font-light text-[clamp(27px,7.5vw,40px)] leading-[1.0] tracking-tight text-white mb-3">
              Commercial<br />Contractor<br /><span className="italic text-teal">Reno, NV</span>
            </h1>
            <p className="text-[13px] leading-[1.65] text-white/60 mb-4">
              Tenant improvements, office buildouts, retail construction, warehouses, and metal buildings.
                Licensed in Nevada and California. NV #0085999 · CA #1093798.
            </p>
            <div className="flex gap-2.5">
              <a href="tel:7753914517" className="btn-primary flex-1 justify-center py-3.5 text-[14px]">📞 Call Now</a>
              <a href="/contact" className="btn-ghost flex-1 justify-center py-3.5 text-[13px]">Get Quote</a>
            </div>
          </div>
        </section>

        <section className="hidden md:relative md:block md:flex min-h-[65vh] lg:min-h-[72vh] md:flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_commercial} alt="Commercial Tenant Improvement Construction Reno NV BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />
          <div className="relative z-10 container">
            <div className="max-w-[580px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Commercial Construction · Reno NV</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-tight text-white mb-4">
                Commercial<br />Contractor<br /><span className="italic text-teal">Reno, NV</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[470px]">
                Tenant improvements, office buildouts, retail construction, warehouses, and metal buildings.
                Licensed in Nevada and California. NV #0085999 · CA #1093798.
              </p>
              <div className="animate-fade-up-4">
                <div className="md:hidden flex gap-3 mb-4">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Call Now</a>
                  <Link href="/contact?service=commercial" className="btn-ghost flex-1 justify-center">Get Quote</Link>
                </div>
                <div className="hidden md:flex gap-3">
                  <Link href="/contact?service=commercial" className="btn-primary">Get a Free Commercial Estimate →</Link>
                  <Link href="/services/warehouse/" className="btn-ghost">Warehouse & Metal Buildings</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Commercial Services" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              Every Commercial Need.<br /><span className="italic text-teal">One Contractor.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {[
                { title: 'Tenant Improvements', href: '/contact?service=commercial', img: IMGS.svc_commercial, alt: 'Commercial Tenant Improvements Reno NV BRE Builders', desc: 'Office suites, retail spaces, medical offices, multi-tenant buildouts. Permit-ready.' },
                { title: 'Office Construction', href: '/services/office/', img: IMGS.svc_office, alt: 'Office Construction Reno NV BRE Builders', desc: 'Modern office spaces — open floor plans, private suites, conference rooms, reception areas.' },
                { title: 'Retail Build-Out', href: '/services/retail/', img: IMGS.svc_retail, alt: 'Retail Build-Out Reno NV BRE Builders', desc: 'Customer-facing retail environments designed to drive engagement and traffic flow.' },
                { title: 'Warehouse & Metal Buildings', href: '/services/warehouse/', img: IMGS.svc_warehouse, alt: 'Warehouse Metal Building Construction Reno NV BRE Builders', desc: 'Scalable industrial and storage structures — custom dimensions, code-compliant, efficient.' },
                { title: 'Concrete', href: '/services/concrete/', img: IMGS.concrete_slab, alt: 'Commercial Concrete Slab Construction Reno NV BRE Builders', desc: 'Commercial slabs, foundations, utility access, parking lots, and specialty concrete work.' },
                { title: 'Hauling & Site Prep', href: '/services/hauling/', img: IMGS.svc_hauling, alt: 'Hauling Removal Reno NV BRE Builders', desc: 'Demo and debris removal, site clearing, interior demolition — prep for any project.' },
              ].map((s, i) => (
                <Link key={s.title} href={s.href} className="group card overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600" loading={i < 3 ? 'eager' : 'lazy'} />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-[17px] text-cream mb-1 group-hover:text-teal transition-colors">{s.title}</h3>
                    <p className="text-[12px] text-cream/40 leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects/car-wash/" className="btn-ghost text-[13px] py-2.5 px-5">View: Car Wash Construction — Reno NV →</Link>
              <Link href="/projects/warehouse-metal-buildings/" className="btn-ghost text-[13px] py-2.5 px-5">View: Warehouse & Metal Building →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Commercial Construction in Reno NV" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  What to Know Before<br /><span className="italic text-teal">Your Commercial Build.</span>
                </h2>
                <div className="speakable-faq space-y-4 text-[14px] leading-relaxed text-cream/55">
                  <div>
                    <h3 className="font-display text-[15px] text-teal mb-2">What does a tenant improvement involve in Reno NV?</h3>
                    <p>A tenant improvement (TI) is any construction done to customize a commercial lease space for a specific tenant. BRE Builders handles the full scope — framing, MEP coordination, finishes, signage blocking, ADA compliance, and all Washoe County or City of Reno permits. Licensed NV #0085999.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] text-teal mb-2">How long does a commercial buildout take in Reno?</h3>
                    <p>A basic office suite remodel typically takes 4–8 weeks. A full buildout from shell condition runs 8–20 weeks depending on permit timelines and trade coordination. BRE Builders provides a detailed project schedule at kickoff.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] text-teal mb-2">Does BRE Builders do commercial work in California?</h3>
                    <p>Yes. BRE Builders holds California Contractor License #1093798 and has completed commercial projects in Northern California. We handle all California permit requirements including CARB and local jurisdiction requirements.</p>
                  </div>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <FAQAccordion items={FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-void py-16 md:py-24 relative overflow-hidden">
          <div className="container text-center">
            <h2 className="font-display text-[clamp(32px,4.5vw,62px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Let&apos;s Build Your<br /><span className="italic text-teal">Commercial Space.</span>
            </h2>
            <p className="text-[15px] text-white/90 max-w-md mx-auto mb-10">Free estimates · Licensed NV #0085999 · CA #1093798</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?service=commercial" className="btn-primary px-8 py-4 w-full sm:w-auto justify-center">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-8 py-4 w-full sm:w-auto justify-center font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>

        <section className="py-12 bg-panel">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Concrete Work', href: '/services/concrete/', desc: 'Slabs, foundations, site concrete' },
                { label: 'Warehouse & Metal', href: '/services/warehouse/', desc: 'Industrial, storage, commercial' },
                { label: 'Office Construction', href: '/services/office/', desc: 'Open plans, private suites' },
                { label: 'Retail Build-Out', href: '/services/retail/', desc: 'Storefront, fixtures, permits' },
              ].map(s => (
                <Link key={s.label} href={s.href} className="group block p-4 bg-deep rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all">
                  <div className="font-display text-[15px] text-cream mb-1 group-hover:text-teal transition-colors">{s.label}</div>
                  <div className="font-mono text-[11px] text-cream/35">{s.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
