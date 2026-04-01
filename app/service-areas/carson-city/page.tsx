import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contractor Carson City NV | Licensed General Contractor',
  description: 'BRE Builders serves Carson City, NV — residential remodeling, ADU construction, additions, commercial. NV License #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/service-areas/carson-city/' },
}

export default function CarsonCityPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.lt(5)} alt="BRE Builders residential construction project Carson City NV" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5"><div className="w-6 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Contractor · Carson City, NV</span></div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,70px)] leading-[0.94] tracking-tight text-white mb-4">
                General Contractor<br />Carson City, NV<br />
                <span className="italic text-teal">NV Lic #0085999.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Residential and commercial construction in Carson City and the Carson Valley. ADU construction, additions, kitchen and bath remodeling, and commercial work. NV License #0085999.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?location=carson-city" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-deep">
          <div className="container">
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[620px] mb-8">
              <p>BRE Builders serves Carson City and the greater Carson Valley. Our licensed team (NV #0085999) provides residential remodeling, ADU construction, home additions, kitchen and bath renovations, commercial tenant improvements, and structural repairs throughout the state capital area.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[{ label: 'ADU Construction', href: '/adus/' }, { label: 'Home Additions', href: '/additions/' }, { label: 'Kitchen & Bath', href: '/kitchen/' }, { label: 'Structural Repairs', href: '/repairs/' }, { label: 'Commercial', href: '/commercial-services/' }, { label: 'Custom Homes', href: '/new-home/' }].map(s => (
                <Link key={s.label} href={s.href} className="group p-4 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all block">
                  <div className="font-display text-[15px] text-cream group-hover:text-teal transition-colors">{s.label}</div>
                </Link>
              ))}
            </div>
            <Link href="/contact?location=carson-city" className="btn-primary">Get a Free Estimate →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
