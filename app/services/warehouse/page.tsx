import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Warehouse & Metal Building Construction Reno NV | BRE Builders',
  description: 'Warehouse and metal building construction in Reno, NV. Industrial, storage, commercial structures. Licensed NV #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/warehouse-metal-buildings/' },
}

export default function WarehousePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_warehouse} alt="Warehouse Metal Building Construction Reno NV BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5"><div className="w-6 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Warehouse & Metal Buildings · Reno NV</span></div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,70px)] leading-[0.94] tracking-tight text-white mb-4">
                Warehouse & Metal<br />Buildings Reno, NV
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Custom warehouse and metal building construction. Scalable industrial structures, storage facilities, and commercial buildings — code-compliant, built to last. Licensed NV #0085999.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?service=warehouse" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[620px] mb-8">
              <p>BRE Builders constructs warehouse and metal buildings across Northern Nevada. We handle site preparation, foundation, erection, and finish work for industrial, storage, and commercial structures. Licensed NV #0085999 · CA #1009219. Free estimates.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact?service=warehouse" className="btn-primary">Get a Free Estimate →</Link>
              <Link href="/services/commercial/" className="btn-ghost">All Commercial Services →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
