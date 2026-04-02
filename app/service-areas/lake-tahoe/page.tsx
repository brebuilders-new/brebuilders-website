const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contractor Lake Tahoe NV | Deck Repair & Renovation',
  description:
    'Licensed contractor serving Lake Tahoe, NV — full home renovation, deck repair, ADU construction, structural work. NV License #0085999. Free estimates.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=Contractor+Lake+Tahoe+NV&sub=Deck+Repair+%C2%B7+Full+Home+Renovation+%C2%B7+ADU+Construction&badge=Lake+Tahoe`,
      width: 1200, height: 630,
    }],
  },
  alternates: { canonical: 'https://brebuilders.com/service-areas/lake-tahoe/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Contractor Lake Tahoe NV',
      description: 'BRE Builders provides full home renovation, deck repair, ADU construction, and structural work at Lake Tahoe, NV. Licensed NV #0085999.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'Place', name: 'Lake Tahoe, NV' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does BRE Builders work at Lake Tahoe properties?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders has completed multiple projects at Lake Tahoe including the full home renovation at 695 Lakeview Blvd, Zephyr Cove, deck structural repairs, and ADU work. Licensed NV #0085999.' },
        },
        {
          '@type': 'Question',
          name: 'Do Lake Tahoe decks need special construction?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lake Tahoe decks must handle heavy snow loads (up to 200 lbs per sq ft), UV exposure, and extreme freeze-thaw cycles. BRE Builders designs and builds to Washoe County and Douglas County structural requirements.' },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://brebuilders.com/service-areas/' },
        { '@type': 'ListItem', position: 3, name: 'Lake Tahoe', item: 'https://brebuilders.com/service-areas/lake-tahoe/' },
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
  { q: 'Does BRE Builders work at Lake Tahoe properties?', a: 'Yes. BRE Builders has completed multiple projects at Lake Tahoe — including the full home renovation at 695 Lakeview Blvd in Zephyr Cove, structural deck repairs, and water intrusion work. NV License #0085999.' },
  { q: 'Do Lake Tahoe decks need special structural requirements?', a: 'Yes. Lake Tahoe decks must handle heavy snow loads, UV degradation, and extreme freeze-thaw cycles. BRE Builders designs to Washoe County and Douglas County requirements and uses materials rated for high-altitude mountain climates.' },
  { q: 'Can BRE Builders build an ADU on a Lake Tahoe property?', a: 'Yes, subject to Washoe County zoning and the Tahoe Regional Planning Agency (TRPA) regulations. BRE Builders manages the full permit process including TRPA review. ADU costs in Tahoe typically range from $95,000 to $350,000.' },
  { q: 'How far is BRE Builders from Lake Tahoe?', a: "BRE Builders is based in Reno, NV — approximately 45 minutes from Zephyr Cove and 60 minutes from Incline Village. We regularly serve Tahoe properties and schedule efficiently to minimize travel time." },
]

export default function LakeTahoePage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* Hero — the actual LT project photos are the proof */}
        <section className="relative min-h-[70vh] lg:min-h-[78vh] flex flex-col justify-end pb-14 lg:pb-24 pt-28 overflow-hidden">
          {/* Desktop: wide exterior shot */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.lt(1)} alt="Full Home Renovation Lake Tahoe Zephyr Cove NV BRE Builders completed exterior" className="absolute inset-0 w-full h-full object-cover hidden md:block" fetchPriority="high" />
          {/* Mobile: deck/railing detail — dramatic */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.lt(3)} alt="Deck Railing Renovation Lake Tahoe NV BRE Builders" className="absolute inset-0 w-full h-full object-cover md:hidden" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />
          <div className="relative z-10 container">
            <div className="max-w-[600px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Contractor · Lake Tahoe, NV</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,76px)] leading-[0.94] tracking-tight text-white mb-4">
                Contractor<br />Lake Tahoe, NV<br />
                <span className="italic text-teal">Proven Work. Real Results.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[480px]">
                Full home renovation, deck construction and repair, ADU construction, structural work.
                BRE Builders has completed verified projects at Lake Tahoe since 1989.
                NV License #0085999.
              </p>
              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['Completed Projects', 'Snow Load Expertise', 'TRPA Permit Experience', 'Free Estimates'].map(b => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">✓ {b}</span>
                ))}
              </div>
              <div className="animate-fade-up-4">
                <div className="md:hidden flex gap-3 mb-4">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Call Now</a>
                  <Link href="/contact?location=lake-tahoe" className="btn-ghost flex-1 justify-center">Get Quote</Link>
                </div>
                <div className="hidden md:flex gap-3">
                  <Link href="/contact?location=lake-tahoe" className="btn-primary">Request a Free Estimate →</Link>
                  <Link href="/portfolio/lake-tahoe-interior-renovation-project-bre-builders/" className="btn-ghost">View Project Gallery</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The proof: 16-photo gallery */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Signature Lake Tahoe Project" />
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="font-display text-[clamp(26px,4vw,52px)] font-light leading-[1.05] tracking-tight">
                  695 Lakeview Blvd.<br /><span className="italic text-teal">Zephyr Cove, NV.</span>
                </h2>
                <p className="text-[14px] text-cream/45 mt-3 max-w-[420px]">
                  Complete interior and exterior transformation — structural upgrades, kitchen and bath
                  remodeling, custom staircase, loft renovation, and full deck work. 16 photos.
                </p>
              </div>
              <a href={SITE.youtubeProject} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-wider text-teal/60 hover:text-teal transition-colors flex-shrink-0">
                ▶ Watch Project Video
              </a>
            </div>

            {/* Mobile: carousel */}
            <div className="md:hidden flex gap-3 overflow-x-auto pb-3 scrollbar-none mb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {[1,2,3,4,5,6,7,8].map(n => {
                const pad = String(n).padStart(2,'0')
                return (
                  <div key={n} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '78vw' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://brebuilders.com/wp-content/uploads/2025/12/${pad}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16-1024x684.webp`}
                      alt={`Lake Tahoe Renovation Photo ${n} of 16 BRE Builders`}
                      className="w-full h-52 object-cover rounded-xl"
                      loading={n <= 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                )
              })}
            </div>

            {/* Desktop: masonry */}
            <div className="hidden md:grid grid-cols-4 gap-3">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => {
                const pad = String(n).padStart(2,'0')
                const suffix = n === 16 ? '-1' : ''
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={n}
                    src={`https://brebuilders.com/wp-content/uploads/2025/12/${pad}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16${suffix}-1024x684.webp`}
                    alt={`Lake Tahoe Full Home Renovation Photo ${n} BRE Builders`}
                    className="w-full h-36 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500"
                    loading={n <= 4 ? 'eager' : 'lazy'}
                  />
                )
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/portfolio/lake-tahoe-interior-renovation-project-bre-builders/" className="btn-primary">View Full Gallery (16 Photos) →</a>
              <a href={SITE.youtubeProject} target="_blank" rel="noopener noreferrer" className="btn-ghost">▶ Watch Project Video</a>
            </div>
          </div>
        </section>

        {/* Lake Tahoe specific services */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="Lake Tahoe Services" />
            <h2 className="font-display text-[clamp(26px,4vw,50px)] font-light leading-[1.05] tracking-tight mb-10">
              Built for the Mountain.<br /><span className="italic text-teal">Engineered to Last.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                { title: 'Full Home Renovation', href: '/portfolio/lake-tahoe-interior-renovation-project-bre-builders/', img: IMGS.lt(4), alt: 'Full Home Renovation Lake Tahoe Interior', desc: 'Interior remodeling, structural upgrades, kitchen and bath, custom finishes.' },
                { title: 'Deck Build & Repair', href: '/decks/', img: IMGS.repairs_arun, alt: 'Hillside Deck Repair Lake Tahoe NV BRE Builders', desc: 'Snow-load rated decks, structural repair, railing upgrades. Washoe and Douglas County compliant.' },
                { title: 'ADU Construction', href: '/adus/', img: IMGS.adu_main, alt: 'ADU Construction Lake Tahoe NV BRE Builders', desc: 'TRPA-compliant ADU construction. BRE handles all permit coordination including Tahoe Regional Planning Agency.' },
                { title: 'Structural Repairs', href: '/repairs/', img: IMGS.repairs_deck_lt, alt: 'Deck Structural Reinforcement Lake Tahoe BRE Builders', desc: 'Water intrusion, dry rot, foundation issues common in Tahoe properties. Full diagnosis and repair.' },
                { title: 'Water Intrusion', href: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv/', img: IMGS.lt(10), alt: 'Bathroom Renovation Water Intrusion Repair Lake Tahoe', desc: 'Moisture issues in mountain homes need quick action. Free emergency evaluations.' },
                { title: 'Interior Remodeling', href: '/kitchen/', img: IMGS.lt(8), alt: 'Bathroom Kitchen Renovation Lake Tahoe Interior BRE Builders', desc: 'Kitchen, bath, loft, and living space renovations for Tahoe homes and vacation properties.' },
              ].map((s, i) => (
                <Link key={s.title} href={s.href} className="group card overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600" loading={i < 3 ? 'eager' : 'lazy'} />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-[17px] text-cream mb-1 group-hover:text-teal transition-colors">{s.title}</h3>
                    <p className="text-[12px] text-cream/40 leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ + AEO */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Lake Tahoe Contractor" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  The Contractor<br /><span className="italic text-teal">Tahoe Trusts.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    BRE Builders has completed verified projects at Lake Tahoe — including the full renovation
                    of 695 Lakeview Blvd in Zephyr Cove, structural deck repairs at multiple properties, and
                    water intrusion work on Tahoe vacation homes.
                  </p>
                  <p>
                    Lake Tahoe construction requires understanding of TRPA regulations, snow load engineering,
                    high-altitude material performance, and freeze-thaw design. BRE Builders brings 35+ years
                    of mountain construction experience. Licensed NV #0085999.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/decks/" className="btn-ghost text-[12px] py-2 px-4">Deck Repair →</Link>
                  <Link href="/adus/" className="btn-ghost text-[12px] py-2 px-4">ADU Lake Tahoe →</Link>
                  <Link href="/service-areas/reno/" className="btn-ghost text-[12px] py-2 px-4">Reno Service Area →</Link>
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
              <p className="font-display text-[22px] text-cream mb-2">Lake Tahoe project? Let&apos;s talk.</p>
              <p className="text-[14px] text-cream/50 mb-6">Free estimates. NV #0085999. Based in Reno, 45 min from Zephyr Cove.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?location=lake-tahoe" className="btn-ghost w-full justify-center py-3 text-[13px]">Request a Quote Online</Link>
            </div>
          </div>
        </section>
        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.lt(14)} alt="Exterior deck renovation Lake Tahoe BRE Builders" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(34px,5vw,66px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Lake Tahoe Project?<br /><span className="italic text-teal">We&apos;ve Done This Before.</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">Free estimates · NV #0085999 · 45 min from Reno</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?location=lake-tahoe" className="btn-primary px-10 py-4">Request a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
