const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Kitchen & Bath Remodel Reno NV | Licensed Contractor',
  description:
    'Kitchen and bathroom remodeling in Reno, NV. High-quality finishes, modern layouts, licensed contractor. NV License #0085999. Free estimates.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=Kitchen+%26+Bath+Remodel+Reno+NV&sub=High-Quality+Finishes+%C2%B7+Expert+Execution&badge=Kitchen+%26+Bath`,
      width: 1200, height: 630,
    }],
  },
  alternates: { canonical: 'https://brebuilders.com/kitchen/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/kitchen/#service',
      name: 'Kitchen and Bathroom Remodeling Reno NV',
      description:
        'BRE Builders provides kitchen and bathroom remodeling in Reno, NV. Licensed general contractor since 1989. NV License #0085999.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a kitchen remodel cost in Reno NV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kitchen remodels in Reno range from $15,000 for a minor refresh to $80,000+ for a full gut-and-rebuild with custom cabinetry. Bathroom remodels range from $8,000 to $35,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a kitchen remodel take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard kitchen remodel takes 2–3 weeks. Full gut-and-rebuild projects with custom cabinetry take 4–6 weeks. BRE Builders provides detailed timelines at the quote stage.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Kitchen & Bath', item: 'https://brebuilders.com/kitchen/' },
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
  {
    q: 'How much does a kitchen remodel cost in Reno NV?',
    a: 'Kitchen remodels in Reno range from $15,000 for a minor refresh to $80,000+ for a full gut-and-rebuild with custom cabinetry. Bathroom remodels range from $8,000 to $35,000. BRE Builders provides free, itemized estimates.',
  },
  {
    q: 'How long does a kitchen remodel take?',
    a: 'A standard kitchen remodel takes 2–3 weeks. Full gut-and-rebuild with custom cabinetry runs 4–6 weeks. BRE Builders provides a detailed timeline at the quote stage.',
  },
  {
    q: 'Do you handle permits for kitchen and bath remodels?',
    a: 'Yes. Structural changes, electrical, and plumbing work require permits in Reno. BRE Builders handles all permit applications as part of the project.',
  },
  {
    q: 'Can I see examples of your kitchen and bath work?',
    a: 'Yes. View our Ripon CA luxury estate project for kitchen and interior work. Additional project photos available on request.',
  },
]

export default function KitchenBathPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        {/* ── HERO: aspiration-first — show the finished result ─── */}
        {/* Desktop: full Ripon kitchen photo, copy on left
            Mobile: cropped portrait of kitchen, call CTA prominent */}
        <section className="relative min-h-[70vh] lg:min-h-[78vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.ripon[1]}
            alt="Chef's Kitchen Custom Cabinetry Marble Backsplash Luxury Remodel BRE Builders"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/50 to-void/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[580px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Kitchen & Bath · Reno, NV</span>
              </div>

              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-tight text-white mb-4">
                Kitchen & Bath
                <br />
                Remodeling Reno
                <br />
                <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.35)' }}>
                  Done With Craft.
                </span>
              </h1>

              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                High-quality finishes, modern layouts, expert execution. Licensed kitchen and bathroom remodeling
                contractor serving Reno, Sparks, and Northern Nevada since 1989. NV License #0085999.
              </p>

              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['Custom Cabinetry', 'Tile & Stone', 'Full Gut Remodels', 'Free Estimates'].map((b) => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="animate-fade-up-4">
                {/* Mobile: photo first, then call */}
                <div className="md:hidden flex gap-3 mb-5">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Call Now</a>
                  <Link href="/contact?service=kitchen-bath" className="btn-ghost flex-1 justify-center">Get Quote</Link>
                </div>
                {/* Desktop: see work first, then quote */}
                <div className="hidden md:flex gap-3 mb-5">
                  <Link href="/contact?service=kitchen-bath" className="btn-primary">Get a Free Estimate →</Link>
                  <Link href="/projects/ripon-estate" className="btn-ghost">See Our Work</Link>
                </div>
                <p className="font-mono text-[11px] text-white/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                  2–3 weeks for standard remodel · Free estimate after site visit
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RIPON KITCHEN GALLERY ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Signature Kitchen Work" />
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
              <h2 className="font-display text-[clamp(28px,4vw,54px)] font-light leading-[1.05] tracking-tight">
                Ripon CA Luxury Estate.
                <br /><span className="italic text-teal">Every Surface Crafted.</span>
              </h2>
              <Link href="/projects/ripon-estate" className="hidden md:inline-flex items-center gap-2 text-[11px] font-mono tracking-[2px] uppercase text-teal/60 hover:text-teal transition-colors flex-shrink-0">
                View Full Project →
              </Link>
            </div>

            {/* Mobile: carousel */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-3 scrollbar-none mb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {[
                { src: IMGS.ripon[1], alt: "Chef's Kitchen Custom Cabinetry Marble Backsplash Luxury Home Ripon CA", cap: "Chef's Kitchen" },
                { src: IMGS.ripon[2], alt: 'Grand Foyer Custom Iron Staircase Marble Flooring Luxury Estate Ripon', cap: 'Grand Foyer' },
                { src: IMGS.ripon[3], alt: 'Mediterranean Front Elevation Luxury Estate Ripon California', cap: 'Estate Exterior' },
                { src: IMGS.ripon[4], alt: 'Elegant Laundry Suite Custom Cabinetry Marble Surfaces Ripon CA', cap: 'Laundry Suite' },
                { src: IMGS.lt(8), alt: 'Bathroom Renovation Updated Fixtures Lake Tahoe', cap: 'Bath Renovation' },
              ].map((img, i) => (
                <div key={i} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '78vw' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full h-56 object-cover rounded-xl" loading={i < 2 ? 'eager' : 'lazy'} />
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.cap}</p>
                </div>
              ))}
            </div>
            <p className="md:hidden font-mono text-[10px] text-cream/25 tracking-wider mb-8">← Swipe · 5 photos</p>

            {/* Desktop: featured masonry layout */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {/* Large kitchen photo */}
              <div className="col-span-2 row-span-2 overflow-hidden rounded-xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[1]} alt="Chef's Kitchen Custom Cabinetry Marble Backsplash Luxury Home Ripon CA" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" style={{ minHeight: '400px' }} loading="eager" />
              </div>
              {/* Two smaller */}
              <div className="overflow-hidden rounded-xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.lt(8)} alt="Bathroom Renovation Updated Fixtures Lake Tahoe" className="w-full h-44 object-cover group-hover:scale-[1.03] transition-transform duration-600" loading="eager" />
              </div>
              <div className="overflow-hidden rounded-xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[4]} alt="Elegant Laundry Suite Custom Cabinetry Marble Surfaces Ripon CA" className="w-full h-44 object-cover group-hover:scale-[1.03] transition-transform duration-600" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ── SCOPE OF WORK ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="What's Included" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              Full-Scope Remodeling.
              <br /><span className="italic text-teal">Start to Finish.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Kitchen Remodels',
                  items: ['Cabinet removal and custom installation', 'Countertop fabrication (stone, quartz, laminate)', 'Backsplash tile work', 'Flooring (tile, LVP, hardwood)', 'Lighting and electrical', 'Plumbing fixtures', 'Appliance coordination', 'Pantry and storage'],
                },
                {
                  title: 'Bathroom Remodels',
                  items: ['Shower and tub installation', 'Tile work — floor, walls, shower surrounds', 'Vanity and cabinetry', 'Fixtures, hardware, mirrors', 'Waterproofing and moisture barriers', 'Lighting and ventilation', 'Accessibility upgrades', 'Full gut-to-stud remodels'],
                },
              ].map((s) => (
                <div key={s.title} className="bg-panel rounded-xl p-6 border border-white/[0.055]">
                  <h3 className="font-display text-[22px] text-cream mb-5">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[13px] text-cream/50">
                        <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 md:hidden">
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[14px]">📞 Discuss Your Remodel</a>
            </div>
          </div>
        </section>

        {/* ── FAQ + AEO ─────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Kitchen & Bath in Reno" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  Licensed Remodeling.
                  <br /><span className="italic text-teal">Quality That Shows.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    BRE Builders has been remodeling kitchens and bathrooms in Reno and Northern Nevada since 1989.
                    We handle everything from a single bathroom refresh to full gut-and-rebuild renovations with
                    custom cabinetry and stone work.
                  </p>
                  <p>
                    Our team manages permits, trades coordination, and finish work in-house — no subcontractor
                    juggling. Licensed NV #0085999. Free estimates after site visit.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/projects/ripon-estate" className="btn-ghost text-[12px] py-2 px-4">Ripon Estate Project →</Link>
                  <Link href="/projects/lake-tahoe-interior-renovation" className="btn-ghost text-[12px] py-2 px-4">Lake Tahoe Renovation →</Link>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <FAQAccordion items={FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">Ready to transform your kitchen or bath?</p>
              <p className="text-[14px] text-cream/50 mb-6">Free estimate after site visit. 2–3 weeks standard timeline. NV #0085999.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[15px] mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?service=kitchen-bath" className="btn-ghost w-full justify-center py-3 text-[13px]">Request a Quote Online</Link>
            </div>
          </div>
        </section>

        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.ripon[3]} alt="Mediterranean Luxury Estate Front Elevation Ripon CA BRE Builders" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Your Kitchen or Bath.
              <br /><span className="italic text-teal">Transformed.</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">Free estimates · Licensed since 1989 · NV #0085999</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=kitchen-bath" className="btn-primary px-10 py-4 text-[14px]">Request Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
