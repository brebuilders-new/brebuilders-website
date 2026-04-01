import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Commercial Contractor Reno NV | Tenant Improvements',
  description: 'Commercial construction in Reno, NV — tenant improvements, office buildouts, retail, warehouses. Licensed NV #0085999 · CA #1009219. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/commercial-services/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Construction Reno NV',
  description: 'BRE Builders provides commercial construction and tenant improvements in Reno, NV. Offices, retail, warehouses, metal buildings. Licensed NV #0085999.',
  provider: { '@id': 'https://brebuilders.com/#business' },
  areaServed: { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

const FAQS = [
  { q: 'What commercial services does BRE Builders provide?', a: 'Tenant improvements, office buildouts, retail construction, warehouse builds, metal buildings, and commercial concrete. Licensed NV #0085999 · CA #1009219.' },
  { q: 'Does BRE Builders do tenant improvements in Reno NV?', a: 'Yes. We specialize in commercial tenant improvements — office suites, retail spaces, medical offices, and multi-tenant buildouts. We handle permits, framing, MEP coordination, and finish work.' },
  { q: 'Do you build warehouses and metal buildings in Nevada?', a: 'Yes. BRE Builders builds custom warehouse and metal buildings across Northern Nevada. Scalable, code-compliant structures for industrial, storage, and commercial use.' },
]

export default function CommercialPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="relative min-h-[65vh] lg:min-h-[72vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
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
                Licensed in Nevada and California. NV #0085999 · CA #1009219.
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Commercial Contractor Reno" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  Licensed.<br /><span className="italic text-teal">Experienced. Reliable.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55">
                  <p>BRE Builders has built and improved commercial spaces in Reno since 1989. From small office suites to full warehouse builds, we manage the complete project — permits, trades, finishes.</p>
                  <p>Licensed in Nevada (#0085999) and California (#1009219), we're qualified to work on commercial projects across the Nevada-California border. Free estimates on all commercial projects.</p>
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
            <p className="text-[15px] text-white/50 max-w-md mx-auto mb-10">Free estimates · Licensed NV #0085999 · CA #1009219</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?service=commercial" className="btn-primary px-8 py-4 w-full sm:w-auto justify-center">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-8 py-4 w-full sm:w-auto justify-center font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
