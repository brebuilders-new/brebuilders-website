import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Loft & Condo Remodeling Reno NV | BRE Builders',
  description: 'Loft and condo remodeling in Reno, NV. Interior renovation, custom finishes, structural improvements. Licensed NV #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/lofts-and-condo-remodels/' },
}

export default function LoftCondoPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_loft} alt="Loft Condo Remodel Reno NV BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5"><div className="w-6 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Lofts & Condo Remodels · Reno NV</span></div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,72px)] leading-[0.94] tracking-tight text-white mb-4">
                Loft & Condo<br />Remodeling Reno, NV
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Interior renovation for Reno lofts and condominiums — custom finishes, structural improvements, kitchen and bath upgrades, flooring, and electrical. Licensed NV #0085999.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?service=lofts-condos" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="flex items-center gap-3 mb-5"><div className="w-7 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">What We Do</span></div>
            <div className="grid md:grid-cols-2 gap-5 mb-8 max-w-[760px]">
              {['Kitchen & Bath Upgrades', 'Flooring Replacement', 'Custom Built-Ins & Storage', 'Electrical & Lighting', 'Interior Structural Work', 'Painting & Finishing'].map(s => (
                <div key={s} className="flex items-center gap-3 p-4 bg-panel rounded-xl border border-white/[0.055]">
                  <span className="text-teal flex-shrink-0">✓</span>
                  <span className="text-[14px] text-cream/65">{s}</span>
                </div>
              ))}
            </div>
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[620px] mb-8">
              <p>BRE Builders remodels lofts and condos throughout Reno. We work within HOA and building restrictions, coordinate with property management where needed, and deliver finished results on schedule. Licensed NV #0085999. Free estimates.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact?service=lofts-condos" className="btn-primary">Get a Free Estimate →</Link>
              <Link href="/services/kitchen-bath/" className="btn-ghost">Kitchen & Bath →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
