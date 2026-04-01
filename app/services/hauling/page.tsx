import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

// GSC: 2,482 impressions / 0.04% CTR — catastrophic title. This page needs work.
export const metadata: Metadata = {
  title: 'Hauling & Demolition Reno NV | Same-Day Removal | BRE Builders',
  description: 'Hauling and demolition services in Reno, NV. Construction debris, yard waste, appliance removal, interior demo, full property cleanouts. NV #0085999.',
  alternates: { canonical: 'https://brebuilders.com/hauling-removal/' },
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function HaulingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_hauling} alt="Hauling Junk Removal Reno NV BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Hauling & Demolition · Reno NV</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-white mb-4">
                Hauling &<br />Demolition<br /><span className="italic text-teal">Reno, NV</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Construction debris removal, junk hauling, interior demolition, appliance removal, and
                full property cleanouts. Fast, licensed, and insured. NV #0085999.
              </p>
              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['Construction Debris', 'Junk Removal', 'Interior Demo', 'Property Cleanouts', 'Same-Day Available'].map(b => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">✓ {b}</span>
                ))}
              </div>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 Call for Same-Day Service</a>
                <Link href="/contact?service=hauling" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="What We Haul & Demo" />
            <h2 className="font-display text-[clamp(26px,4vw,50px)] font-light leading-[1.05] tracking-tight mb-10">
              One Call. Everything Gone.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { title: 'Construction Debris', desc: 'Post-demolition cleanup, drywall, framing, roofing, and mixed job site waste.' },
                { title: 'Interior Demolition', desc: 'Selective or full interior demo — walls, flooring, fixtures — prepping for renovation.' },
                { title: 'Appliance & Furniture Removal', desc: 'Washers, dryers, refrigerators, furniture, and large household items.' },
                { title: 'Yard Waste & Landscaping', desc: 'Tree trimmings, brush, soil, concrete, and landscaping debris.' },
                { title: 'Property Cleanouts', desc: 'Full estate, foreclosure, or commercial property cleanouts from floor to ceiling.' },
                { title: 'Building Demolition', desc: 'Sheds, garages, outbuildings — structural demo and site clearance.' },
              ].map(s => (
                <div key={s.title} className="bg-panel rounded-xl p-5 border border-white/[0.055]">
                  <h3 className="font-display text-[17px] text-cream mb-2">{s.title}</h3>
                  <p className="text-[13px] text-cream/40 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone} — Call Now</a>
              <Link href="/contact?service=hauling" className="btn-ghost">Request a Quote Online</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
