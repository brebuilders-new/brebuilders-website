import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Northern California Construction Services | BRE Builders | CA #1009219',
  description: 'BRE Builders provides construction services across Northern California — custom homes, commercial, structural repairs. CA License #1009219. Ripon, Truckee, Graeagle.',
  alternates: { canonical: 'https://brebuilders.com/service-areas/northern-california/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Northern California Construction Services',
  description: 'BRE Builders provides construction services across Northern California. Custom homes, commercial construction, structural repairs. CA License #1009219.',
  provider: { '@id': 'https://brebuilders.com/#business' },
  areaServed: { '@type': 'Place', name: 'Northern California' },
}

export default function NorthernCaliforniaPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="relative min-h-[68vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* Desktop: Ripon estate — dramatic proof of NorCal work */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.ripon[3]} alt="Mediterranean luxury custom home Northern California BRE Builders Ripon" className="absolute inset-0 w-full h-full object-cover hidden md:block" fetchPriority="high" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.ripon[0]} alt="Classical columned entryway luxury home Ripon California BRE Builders" className="absolute inset-0 w-full h-full object-cover md:hidden" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />
          <div className="relative z-10 container">
            <div className="max-w-[600px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5"><div className="w-6 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Northern California Construction</span></div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,74px)] leading-[0.94] tracking-tight text-white mb-4">
                Northern California<br />Construction Services<br />
                <span className="italic text-teal">CA Lic #1009219.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[480px]">
                Custom home building, commercial construction, structural repairs, and remodeling across
                Northern California. Proven work in Ripon, CA. CA License #1009219.
              </p>
              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['CA Lic #1009219', 'Custom Home Builds', 'Ripon CA Estate', 'Free Consultations'].map(b => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">✓ {b}</span>
                ))}
              </div>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="md:hidden btn-primary">📞 Call Now</a>
                <Link href="/contact?location=northern-california" className="md:hidden btn-ghost">Get Quote</Link>
                <Link href="/contact?location=northern-california" className="hidden md:inline-flex btn-primary">Schedule a Free Consultation →</Link>
                <Link href="/portfolio/ripon-california-estate-project/" className="hidden md:inline-flex btn-ghost">View Ripon Estate</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ripon proof */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <div className="flex items-center gap-3 mb-5"><div className="w-7 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Signature NorCal Project</span></div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-[clamp(26px,4vw,50px)] font-light leading-[1.05] tracking-tight mb-5">
                  Ripon, CA Luxury Estate.<br /><span className="italic text-teal">Ground-Up.</span>
                </h2>
                <p className="text-[15px] text-cream/55 leading-relaxed mb-5">
                  A complete ground-up luxury estate in Ripon, California — blending classical European
                  architecture with modern amenities. Every column, arch, and interior detail was designed,
                  engineered, and built in-house by our California licensed team. CA License #1009219.
                </p>
                <Link href="/portfolio/ripon-california-estate-project/" className="btn-primary inline-flex">View Full Ripon Project →</Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {IMGS.ripon.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt={`Ripon CA luxury estate photo ${i+1} BRE Builders`} className={`w-full object-cover rounded-xl ${i === 0 ? 'col-span-2 h-48' : 'h-36'}`} loading={i < 2 ? 'eager' : 'lazy'} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[660px] mb-8">
              <p>BRE Builders holds California Contractor License #1009219 and provides construction services throughout Northern California — from the Central Valley (Ripon, Modesto) through the Sierra foothills to the high mountain communities of Truckee and Graeagle. Free consultations.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?location=northern-california" className="btn-primary">Get a Free Consultation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
