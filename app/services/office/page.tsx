import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Office Construction Reno NV | Office Build-Out | BRE Builders',
  description: 'Office construction and build-out in Reno, NV. Open plans, private suites, conference rooms. Licensed NV #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/office/' },
}

export default function OfficePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_office} alt="Office Construction Build-Out Reno NV BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5"><div className="w-6 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Office Construction · Reno NV</span></div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,72px)] leading-[0.94] tracking-tight text-white mb-4">
                Office Construction<br />Reno, Nevada
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Modern office spaces built to spec — open floor plans, private suites, conference rooms, reception areas. Full permit handling. Licensed NV #0085999.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?service=office" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[620px] mb-8">
              <p>BRE Builders builds office spaces across Reno — from small professional suites to multi-room corporate offices. We handle framing, mechanical coordination, ADA compliance, and finish work. Licensed NV #0085999. Free estimates after site walk.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact?service=office" className="btn-primary">Get a Free Estimate →</Link>
              <Link href="/services/commercial/" className="btn-ghost">All Commercial Services →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
