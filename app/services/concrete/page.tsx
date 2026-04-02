import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Concrete Contractor Reno NV | Slabs & Foundations',
  description: 'Concrete contractor in Reno, NV. Foundations, slabs, driveways, commercial concrete, utility access. Licensed NV #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/concrete/' },
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function ConcretePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.concrete_slab} alt="Commercial Concrete Slab Pour Utility Access Reno NV BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Concrete · Reno NV</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-tight text-white mb-4">
                Concrete<br />Contractor<br /><span className="italic text-teal">Reno, NV</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-6 max-w-[460px]">
                Foundations, slabs, driveways, commercial concrete, and utility access. Licensed NV #0085999.
                Residential and commercial concrete work throughout Northern Nevada.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?service=concrete" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Concrete Services" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {['Foundations & Footings', 'Concrete Slabs', 'Driveways & Pathways', 'Commercial Concrete', 'Utility Access & Trenching', 'Retaining Walls'].map(s => (
                <div key={s} className="bg-panel rounded-xl p-5 border border-white/[0.055] flex items-center gap-3">
                  <span className="text-teal text-[14px] flex-shrink-0">✓</span>
                  <span className="text-[14px] text-cream/65">{s}</span>
                </div>
              ))}
            </div>

            {/* Ripon/car wash project callout */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.concrete_slab} alt="Commercial Concrete Slab Pour Utility Access Car Wash Reno NV BRE Builders" className="w-full h-52 object-cover" loading="eager" />
                <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">Commercial Concrete Slab — Car Wash, Reno NV</p>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-display text-[26px] text-cream mb-3">Ripon CA — Concrete Estate Foundation</h2>
                <p className="text-[14px] text-cream/50 leading-relaxed mb-4">
                  BRE Builders poured and engineered the full concrete foundation for the Ripon, CA luxury
                  estate — one of our largest California concrete projects. Licensed CA #1093798.
                </p>
                <Link href="/projects/ripon-estate" className="text-[12px] font-mono tracking-wider uppercase text-teal/60 hover:text-teal transition-colors">View Project →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact?service=concrete" className="btn-primary">Get a Free Concrete Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
