import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contractor Sparks NV | Licensed General Contractor',
  description: 'BRE Builders serves Sparks, NV — ADU construction, repairs, kitchen & bath, decks, additions. Licensed NV #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/service-areas/sparks/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'General Contractor Sparks NV',
  description: 'BRE Builders provides construction services in Sparks, NV. ADU construction, repairs, kitchen and bath, decks, additions. NV License #0085999.',
  provider: { '@id': 'https://brebuilders.com/#business' },
  areaServed: { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
}

export default function SparksPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.deck_charolette} alt="Custom Deck Build Sparks NV BRE Builders completed project" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Contractor · Sparks, NV</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,72px)] leading-[0.94] tracking-tight text-white mb-4">
                General Contractor<br />Sparks, Nevada<br />
                <span className="italic text-teal">Licensed Since 1989.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Full residential and commercial construction services in Sparks, NV. BRE Builders has
                completed deck builds, ADUs, kitchen remodels, and structural repairs throughout Sparks
                neighborhoods. NV License #0085999.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?location=sparks" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-deep">
          <div className="container">
            <div className="flex items-center gap-3 mb-5"><div className="w-7 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Services in Sparks</span></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'ADU Construction', href: '/adus/' },
                { label: 'Structural Repairs', href: '/repairs/' },
                { label: 'Kitchen & Bath', href: '/kitchen/' },
                { label: 'Deck Build & Repair', href: '/decks/' },
                { label: 'Home Additions', href: '/additions/' },
                { label: 'Concrete Work', href: '/concrete/' },
              ].map(s => (
                <Link key={s.label} href={s.href} className="group p-4 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all block">
                  <div className="font-display text-[16px] text-cream group-hover:text-teal transition-colors">{s.label}</div>
                  <div className="font-mono text-[10px] text-teal/40 mt-1">Learn more →</div>
                </Link>
              ))}
            </div>
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[620px] mb-8">
              <p>BRE Builders serves Sparks, NV as part of its core Northern Nevada service area. We have completed deck builds, ADU projects, kitchen remodels, and structural repairs in Sparks neighborhoods including Spanish Springs, South Meadows, and the older established areas near downtown Sparks. Licensed NV #0085999.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?location=sparks" className="btn-primary">Get a Free Estimate →</Link>
              <Link href="/service-areas/reno/" className="btn-ghost">Also Serving Reno →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
