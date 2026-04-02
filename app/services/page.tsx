import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SERVICES } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'All Services | General Contractor Reno NV',
  description:
    'Complete list of BRE Builders services — ADU construction, structural repairs, kitchen & bath, custom homes, decks, additions, commercial, concrete, hauling. Licensed NV & CA.',
  alternates: { canonical: `${SITE_URL}/services/` },
}

const SERVICE_IMGS: Record<string, string> = {
  adu: IMGS.adu_main,
  repairs: IMGS.repairs_foundation,
  additions: IMGS.svc_addition,
  'kitchen-bath': IMGS.svc_kitchen,
  'new-home': IMGS.ripon[3],
  decks: IMGS.repairs_arun,
  concrete: IMGS.concrete_slab,
  commercial: IMGS.svc_commercial,
  hauling: IMGS.svc_hauling,
  'lofts-condos': IMGS.svc_loft,
  retail: IMGS.svc_retail,
  office: IMGS.svc_office,
  warehouse: IMGS.svc_warehouse,
}

// Map new slugs to original WP URLs (keep indexed URLs)
const SERVICE_HREFS: Record<string, string> = {
  adu: '/adus/',
  repairs: '/repairs/',
  additions: '/additions/',
  'kitchen-bath': '/kitchen/',
  'new-home': '/new-home/',
  decks: '/decks/',
  concrete: '/concrete/',
  commercial: '/commercial-services/',
  hauling: '/hauling-removal/',
  'lofts-condos': '/lofts-and-condo-remodels/',
  retail: '/retail/',
  office: '/office/',
  warehouse: '/warehouse-metal-buildings/',
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function ServicesPage() {
  const residential = SERVICES.filter(s =>
    ['adu', 'repairs', 'additions', 'kitchen-bath', 'new-home', 'decks', 'lofts-condos'].includes(s.slug)
  )
  const commercial = SERVICES.filter(s =>
    ['commercial', 'retail', 'office', 'warehouse', 'concrete', 'hauling'].includes(s.slug)
  )

  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-[660px] mb-16">
            <SL text="All Services" />
            <h1 className="font-display text-[clamp(38px,5.5vw,72px)] font-light leading-[0.95] tracking-tight text-cream mb-4">
              Every Project.<br />
              <span className="italic text-teal">Every Scale.</span>
            </h1>
            <p className="text-[15px] text-cream/55 leading-relaxed">
              BRE Builders provides residential and commercial construction services across Northern
              Nevada and California. Licensed NV #0085999 · CA #1093798.
            </p>
          </div>

          {/* Residential */}
          <section className="mb-16">
            <SL text="Residential Services" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {residential.map((s, i) => (
                <a
                  key={s.slug}
                  href={SERVICE_HREFS[s.slug] || `/services/${s.slug}/`}
                  className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all duration-400 bg-panel"
                >
                  {SERVICE_IMGS[s.slug] && (
                    <div className="relative h-36 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={SERVICE_IMGS[s.slug]}
                        alt={`${s.name} – BRE Builders Reno NV`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                        loading={i < 4 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-teal/0 via-teal/50 to-teal/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-display text-[16px] text-cream mb-1 group-hover:text-teal transition-colors leading-snug">
                      {s.shortName}
                    </h3>
                    {'priceRange' in s && s.priceRange && (
                      <p className="font-mono text-[10px] text-teal/60 mb-1">{s.priceRange}</p>
                    )}
                    <p className="text-[11px] font-mono tracking-wider uppercase text-teal/40 group-hover:text-teal transition-colors flex items-center gap-1">
                      Learn more <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Commercial */}
          <section className="mb-16">
            <SL text="Commercial Services" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {commercial.map((s, i) => (
                <a
                  key={s.slug}
                  href={SERVICE_HREFS[s.slug] || `/services/${s.slug}/`}
                  className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all duration-400 bg-panel"
                >
                  {SERVICE_IMGS[s.slug] && (
                    <div className="relative h-36 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={SERVICE_IMGS[s.slug]}
                        alt={`${s.name} – BRE Builders Reno NV`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-display text-[16px] text-cream mb-1 group-hover:text-teal transition-colors">{s.shortName}</h3>
                    <p className="text-[11px] font-mono tracking-wider uppercase text-teal/40 group-hover:text-teal transition-colors flex items-center gap-1">
                      Learn more →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* License + CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-panel rounded-xl p-6 border border-white/[0.055]">
              <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-4">Licensing</p>
              <div className="space-y-2 text-[14px] text-cream/60">
                <div className="flex justify-between">
                  <span>Nevada</span>
                  <span className="font-mono text-teal">Lic #0085999</span>
                </div>
                <div className="flex justify-between">
                  <span>California</span>
                  <span className="font-mono text-teal">Lic #1093798</span>
                </div>
                <div className="flex justify-between">
                  <span>Founded</span>
                  <span className="font-mono text-cream/80">1989</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="font-mono text-cream/80">35+ Years</span>
                </div>
              </div>
            </div>
            <div className="bg-teal/[0.06] border border-teal/20 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="font-display text-[22px] text-cream mb-2">Not sure which service you need?</p>
                <p className="text-[14px] text-cream/50 mb-4">Call or submit a request. We'll help you find the right solution.</p>
              </div>
              <div className="flex gap-3">
                <a href="tel:7753914517" className="btn-primary flex-1 justify-center">📞 Call</a>
                <Link href="/contact" className="btn-ghost flex-1 justify-center">Get Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
