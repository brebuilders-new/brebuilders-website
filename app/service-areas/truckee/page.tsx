import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contractor Truckee CA & Graeagle | BRE Builders | CA Lic #1009219',
  description: 'BRE Builders serves Truckee, CA and Graeagle — custom homes, decks, remodeling, structural repair. CA License #1009219. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/service-areas/truckee/' },
}

export default function TruckeePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.lt(13)} alt="BRE Builders project Truckee California mountain construction" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5"><div className="w-6 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Contractor · Truckee & Graeagle, CA</span></div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,70px)] leading-[0.94] tracking-tight text-white mb-4">
                Contractor Truckee &<br />Graeagle, CA<br />
                <span className="italic text-teal">CA Lic #1009219.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                Custom homes, decks, remodeling, and structural repair in Truckee and Graeagle. BRE Builders is
                California licensed (#1009219) for mountain community construction.
              </p>
              <div className="animate-fade-up-4 flex gap-3">
                <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
                <Link href="/contact?location=truckee" className="btn-ghost">Get a Quote</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-deep">
          <div className="container">
            <div className="speakable-summary text-[15px] text-cream/55 leading-relaxed max-w-[620px] mb-8">
              <p>BRE Builders serves Truckee, CA and the Graeagle/Plumas County area. California Licensed #1009219. Mountain construction expertise — custom homes, snow-load rated decks, remodeling, and structural repairs for year-round and vacation properties.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[{ label: 'Custom Homes', href: '/new-home/' }, { label: 'Deck Build & Repair', href: '/decks/' }, { label: 'Remodeling', href: '/kitchen/' }, { label: 'Structural Repairs', href: '/repairs/' }, { label: 'Home Additions', href: '/additions/' }, { label: 'ADU Construction', href: '/adus/' }].map(s => (
                <Link key={s.label} href={s.href} className="group p-4 bg-panel rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all block">
                  <div className="font-display text-[15px] text-cream group-hover:text-teal transition-colors">{s.label}</div>
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <Link href="/contact?location=truckee" className="btn-primary">Get a Free Estimate →</Link>
              <Link href="/service-areas/northern-california/" className="btn-ghost">Northern California →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
