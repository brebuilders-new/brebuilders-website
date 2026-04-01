import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Retail Construction Reno NV | Store Build-Out | BRE Builders',
  description: 'Retail construction and store build-out in Reno, NV. Customer-facing retail spaces, permitting, finishes. Licensed NV #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/retail/' },
}

export default function RetailPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_retail} alt="Retail Construction Build-Out Reno NV BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5"><div className="w-6 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Retail Construction · Reno NV</span></div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,72px)] leading-[0.94] tracking-tight text-white mb-4">
                Retail Build-Out<br />Reno, Nevada
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Customer-facing retail environments built to your brand standards. Storefront buildouts, fixture installation, flooring, lighting, and permitting. Licensed NV #0085999.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?service=retail" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[620px] mb-8">
              <p>BRE Builders builds out retail spaces throughout Reno. We manage permitting, MEP coordination, and all finish work. Our team delivers customer-ready retail environments on budget and on schedule. Licensed NV #0085999 · CA #1009219. Free estimates.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact?service=retail" className="btn-primary">Get a Free Estimate →</Link>
              <Link href="/services/commercial/" className="btn-ghost">All Commercial Services →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
