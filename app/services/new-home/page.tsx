import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Custom Home Builder Reno NV | New Home Construction',
  description:
    'Custom home building in Reno, NV and Northern California. Ground-up builds, in-house design-build. Licensed NV #0085999 · CA #1009219. Free consultations.',
  alternates: { canonical: 'https://brebuilders.com/new-home/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/new-home/#service',
      name: 'Custom Home Building Reno NV',
      description: 'BRE Builders builds custom homes in Reno, NV and Northern California. Ground-up construction, in-house design-build. Licensed NV #0085999 · CA #1009219.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Northern California' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does BRE Builders build custom homes in both Nevada and California?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. BRE Builders holds Nevada License #0085999 and California License #1009219. We build custom homes in Reno, NV and throughout Northern California including Ripon, Truckee, and Graeagle.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost to build a custom home in Reno NV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom home construction in Reno, NV typically ranges from $300,000 to $1M+ depending on size, design complexity, site conditions, and finish level. BRE Builders provides free consultations and detailed estimates.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Custom Home Building', item: 'https://brebuilders.com/new-home/' },
      ],
    },
  ],
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

const FAQS = [
  { q: 'Does BRE Builders build custom homes in both Nevada and California?', a: 'Yes. BRE Builders holds Nevada License #0085999 and California License #1009219. We build custom homes in Reno, NV and Northern California including Ripon, Truckee, and Graeagle.' },
  { q: 'What does a custom home cost in Reno NV?', a: 'Custom home construction in Reno typically ranges from $300,000 to $1M+ depending on size, design complexity, site conditions, and finish level. Free consultations available.' },
  { q: 'Do you provide in-house design services?', a: 'Yes. BRE Builders offers in-house design-build services, managing concept through construction under one roof. We coordinate architectural plans, engineering, permits, and construction.' },
  { q: 'What styles of custom homes do you build?', a: 'Single-story, two-story, multi-level custom, mountain/lodge style, modern, and Mediterranean. We also build specialty rooms including home theaters, gyms, bunkers, and multi-gen suites.' },
  { q: 'How long does it take to build a custom home?', a: 'Design and permitting: 3–6 months. Construction: 6–18 months depending on size and complexity. Total timeline from concept to move-in is typically 12–24 months.' },
]

export default function NewHomePage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* Hero — Ripon estate is the proof point */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-end pb-14 lg:pb-24 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.ripon[3]} alt="Mediterranean Luxury Custom Home Front Elevation Ripon California BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[620px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Custom Home Building · NV & CA</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(40px,6.5vw,82px)] leading-[0.93] tracking-tight text-white mb-4">
                Custom Home<br />Builder Reno NV<br />
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.35)' }}>and California.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[500px]">
                Custom-built homes crafted from concept to completion. In-house design-build in Nevada
                and California. Ground-up construction, specialty rooms, luxury finishes.
                Licensed NV #0085999 · CA #1009219.
              </p>
              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['In-House Design-Build', 'NV & CA Licensed', 'Specialty Rooms', 'Free Consultation'].map(b => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">✓ {b}</span>
                ))}
              </div>
              <div className="animate-fade-up-4">
                <div className="md:hidden flex gap-3 mb-5">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Call Now</a>
                  <Link href="/contact?service=new-home" className="btn-ghost flex-1 justify-center">Get Quote</Link>
                </div>
                <div className="hidden md:flex gap-3 mb-5">
                  <Link href="/contact?service=new-home" className="btn-primary">Schedule a Free Consultation →</Link>
                  <Link href="/projects/ripon-estate" className="btn-ghost">View Ripon CA Estate</Link>
                </div>
              </div>
            </div>
            {/* Desktop stats */}
            <div className="hidden md:flex gap-12 mt-10 pt-8 border-t border-white/10">
              {[{ n: '35+', l: 'Years Experience' }, { n: 'NV·CA', l: 'Dual Licensed' }, { n: 'Ground-Up', l: 'Builds Only' }].map(s => (
                <div key={s.l}>
                  <div className="font-display text-[clamp(22px,3vw,38px)] font-light text-white leading-none">{s.n}</div>
                  <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ripon estate showcase */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Signature Custom Build — Ripon, CA" />
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="font-display text-[clamp(28px,4vw,54px)] font-light leading-[1.05] tracking-tight mb-5">
                  Luxury Estate.<br /><span className="italic text-teal">Concept to Key.</span>
                </h2>
                <p className="text-[15px] text-cream/55 leading-relaxed mb-4">
                  At Blue Reef Builders, we take pride in bringing vision to life — from the first concept sketch to the final turn of the key. Licensed to build in both Nevada and California, our in-house design and planning teams ensure every project embodies craftsmanship, creativity, and precision.
                </p>
                <p className="text-[15px] text-cream/55 leading-relaxed mb-6">
                  This ground-up custom estate in Ripon, California showcases timeless architecture paired with modern luxury. Designed to balance grandeur and comfort, it combines classical detailing with contemporary finishes.
                </p>
                <blockquote className="border-l-2 border-teal pl-5 mb-6">
                  <p className="font-display text-[17px] italic text-cream/70 leading-relaxed">
                    &ldquo;Every project we take on is fully managed by our in-house team — from design concept to final construction. Our licensed professionals handle planning, permitting, and craftsmanship across Nevada and California.&rdquo;
                  </p>
                </blockquote>
                <Link href="/projects/ripon-estate" className="btn-primary inline-flex">View Full Project Gallery →</Link>
              </div>
              {/* Ripon photo collage */}
              <div className="grid grid-cols-2 gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[3]} alt="Mediterranean Front Elevation Luxury Custom Home Ripon CA" className="col-span-2 h-52 w-full object-cover rounded-xl" loading="eager" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[1]} alt="Chef's Kitchen Custom Cabinetry Marble Backsplash Luxury Estate Ripon" className="h-40 w-full object-cover rounded-xl" loading="eager" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[2]} alt="Grand Foyer Custom Iron Staircase Marble Flooring Luxury Estate Ripon" className="h-40 w-full object-cover rounded-xl" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[0]} alt="Classical Columned Entryway Luxury Custom Home Ripon California" className="h-40 w-full object-cover rounded-xl" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[4]} alt="Elegant Laundry Suite Custom Cabinetry Marble Ripon CA" className="h-40 w-full object-cover rounded-xl" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="Custom Home Types" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              Every Style.<br /><span className="italic text-teal">Every Detail.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { title: 'Single-Story', desc: 'Open-plan single-level homes. Ideal for accessibility, efficiency, and lot maximization.' },
                { title: 'Two-Story', desc: 'Classic family layout with shared living below and private rooms above.' },
                { title: 'Multi-Level Custom', desc: 'Split-level and multi-level designs for sloped lots or dramatic interior spaces.' },
                { title: 'Mountain / Lodge Style', desc: 'Timber-frame or rustic aesthetic suited for Lake Tahoe, Truckee, and Graeagle lots.' },
                { title: 'Modern', desc: 'Clean lines, large glass, minimal ornamentation, high-efficiency systems.' },
                { title: 'Mediterranean / Classical', desc: 'Arches, columns, stucco, and ornamental detail — as seen in our Ripon, CA estate.' },
              ].map(s => (
                <div key={s.title} className="bg-panel rounded-xl p-5 border border-white/[0.055] hover:border-teal/20 transition-colors">
                  <h3 className="font-display text-[18px] text-cream mb-2">{s.title}</h3>
                  <p className="text-[13px] text-cream/45 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            {/* Specialty rooms from Form 7 */}
            <div className="bg-panel rounded-xl p-6 border border-teal/15">
              <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-4">Specialty Rooms</p>
              <div className="flex flex-wrap gap-3">
                {['Home Theater', 'Gym / Fitness Room', 'Workshop', 'Bunker / Safe Room', 'Home Office', 'Multi-Gen Suite', 'Wine Cellar', 'Guest Suite'].map(r => (
                  <span key={r} className="text-[13px] text-cream/55 border border-white/[0.08] px-3 py-1.5 rounded-lg bg-deep">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ + AEO */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Custom Home Building Reno NV" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  Built Right.<br /><span className="italic text-teal">From Day One.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>BRE Builders builds custom homes in Reno, NV and Northern California. We manage the full process in-house: design consultation, architectural coordination, permit applications, site preparation, and construction.</p>
                  <p>Licensed in both Nevada (#0085999) and California (#1009219), we're one of the few contractors in the region qualified to build across both states. Free consultations available.</p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/services/adu/" className="btn-ghost text-[12px] py-2 px-4">Consider an ADU →</Link>
                  <Link href="/services/additions/" className="btn-ghost text-[12px] py-2 px-4">Home Additions →</Link>
                  <Link href="/projects/ripon-estate" className="btn-ghost text-[12px] py-2 px-4">Ripon Estate Project →</Link>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <FAQAccordion items={FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">Ready to build your custom home?</p>
              <p className="text-[14px] text-cream/50 mb-6">Free consultation. NV #0085999 · CA #1009219. Response within 24 hours.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[15px] mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?service=new-home" className="btn-ghost w-full justify-center py-3 text-[13px]">Submit a Project Request</Link>
            </div>
          </div>
        </section>

        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.ripon[0]} alt="Classical Columned Custom Home Entryway Ripon California BRE Builders" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(36px,5vw,70px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Your Home.<br /><span className="italic text-teal">Exactly As You Envisioned.</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">Free consultations · Licensed NV & CA · In-house design-build</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=new-home" className="btn-primary px-10 py-4 text-[14px]">Schedule a Free Consultation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
