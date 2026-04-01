import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Deck Builder Reno NV | Deck Repair Lake Tahoe',
  description:
    'Deck construction and repair in Reno, Sparks & Lake Tahoe. New builds and structural restoration. NV License #0085999. Free estimates.',
  alternates: { canonical: 'https://brebuilders.com/decks/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/decks/#service',
      name: 'Deck Builder and Deck Repair Reno NV',
      description: 'BRE Builders builds and repairs decks in Reno, Sparks, and Lake Tahoe. New deck construction and structural deck repair. Licensed NV #0085999.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Lake Tahoe, NV' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I know if my deck is structurally unsafe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Warning signs include: soft or springy boards, visible rot or discoloration, wobbly railings, rusted or missing fasteners, ledger board separation from the house, and visible cracks in support posts. Schedule an inspection if you notice any of these.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does BRE Builders repair decks at Lake Tahoe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. BRE Builders repairs and builds decks at Lake Tahoe properties including Zephyr Cove, Incline Village, and surrounding areas. Licensed NV #0085999.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Decks', item: 'https://brebuilders.com/decks/' },
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

const DECK_FAQS = [
  {
    q: 'How do I know if my deck is structurally unsafe?',
    a: 'Warning signs: soft or springy boards, visible rot or discoloration, wobbly railings, rusted or missing fasteners, ledger board separation from the house, and visible cracks in support posts. Schedule a free inspection if you notice any of these.',
  },
  {
    q: 'Does BRE Builders build and repair decks at Lake Tahoe?',
    a: 'Yes. BRE Builders builds and repairs decks at Lake Tahoe properties including Zephyr Cove, Incline Village, and surrounding areas. We have completed structural deck repairs at multiple Tahoe properties. Licensed NV #0085999.',
  },
  {
    q: 'How long does a deck repair take in Reno?',
    a: 'Minor deck repairs take 1–3 days. Structural repairs (ledger, posts, beams) take 3–7 days. A complete deck rebuild runs 3–7 days depending on size and complexity.',
  },
  {
    q: 'What materials do you use for decks in Reno and Lake Tahoe?',
    a: 'We build with Trex composite decking, pressure-treated lumber, and stainless/galvanized hardware. Material choice depends on budget, climate exposure, and aesthetics. We discuss options at the estimate.',
  },
  {
    q: 'Do Lake Tahoe decks need special structural requirements?',
    a: 'Yes. Lake Tahoe properties face snow loads, freeze-thaw cycles, and UV exposure. Decks must meet Washoe County or Douglas County structural requirements. BRE Builders designs and builds to local code.',
  },
]

const SAFETY_SIGNS = [
  'Soft, springy, or spongy boards underfoot',
  'Visible rot, discoloration, or fungal growth on wood',
  'Wobbly or loose railings that move when pushed',
  'Rusted, corroded, or missing fasteners and hardware',
  'Ledger board pulling away from the house',
  'Cracks or splits in support posts or beams',
  'Deck moves or vibrates when walked on',
  "Water pooling on deck surface that doesn't drain",
]

export default function DecksPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        {/* ── HERO: safety + beauty — Lake Tahoe deck photo ──────────────── */}
        {/* Mobile: safety urgency "Is your deck safe this season?"
            Desktop: Lake Tahoe visual + new deck aspiration */}
        <section className="relative min-h-[70vh] lg:min-h-[78vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* Desktop: hillside deck repair photo (dramatic) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.repairs_arun}
            alt="Hillside Deck Repair Reinforced Support Beams Lake Tahoe NV BRE Builders"
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            fetchPriority="high"
          />
          {/* Mobile: Charolette finished deck (aspirational) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.deck_charolette}
            alt="Custom Deck Build Smooth Sealed Surface BRE Builders Sparks NV"
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[580px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">
                  Deck Builder & Repair · Reno & Lake Tahoe
                </span>
              </div>

              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-tight text-white mb-4">
                Deck Builder
                <br />
                Reno NV &
                <br />
                <span className="italic text-teal">Lake Tahoe</span>
              </h1>

              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[460px]">
                New deck construction and structural deck repair. Reno, Sparks, Carson City, and Lake
                Tahoe. Trex composite and pressure-treated builds. Licensed NV #0085999.
              </p>

              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['New Decks', 'Structural Repair', 'Lake Tahoe Specialist', 'Free Inspection'].map((b) => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="animate-fade-up-4">
                {/* Mobile: safety-first CTA */}
                <div className="md:hidden mb-4">
                  <p className="font-display text-[18px] text-yellow-300/80 mb-4 leading-snug">
                    Is your deck safe this season?
                  </p>
                  <div className="flex gap-3">
                    <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Free Inspection</a>
                    <Link href="/contact?service=decks" className="btn-ghost flex-1 justify-center">Get Quote</Link>
                  </div>
                </div>
                {/* Desktop: build-first */}
                <div className="hidden md:flex gap-3 mb-5">
                  <Link href="/contact?service=decks" className="btn-primary">Get a Free Deck Quote →</Link>
                  <Link href="/blog/deck-safety-warning-signs-reno-lake-tahoe/" className="btn-ghost">8 Safety Warning Signs</Link>
                </div>
                <p className="font-mono text-[11px] text-white/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                  Deck rebuilds: 3–7 days · Minor repairs: 1–3 days
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SAFETY CHECKER ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Deck Safety" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-4">
              8 Signs Your Deck Is No Longer Safe.
            </h2>
            <p className="text-[15px] text-cream/55 leading-relaxed max-w-[560px] mb-10">
              Reno and Lake Tahoe decks take a beating from freeze-thaw cycles, UV exposure, and
              seasonal snow loads. Check for these warning signs before the season starts.
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-10">
              {SAFETY_SIGNS.map((sign, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-panel rounded-xl border border-white/[0.055]">
                  <span className="font-mono text-[11px] text-teal/50 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[13px] text-cream/60 leading-relaxed">{sign}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/contact?service=decks" className="btn-primary">
                Request Free Deck Inspection →
              </Link>
              <Link href="/blog/deck-safety-warning-signs-reno-lake-tahoe/" className="btn-ghost">
                Read: Deck Safety Warning Signs →
              </Link>
            </div>
          </div>
        </section>

        {/* ── DECK GALLERY ────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="Deck Projects" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-10">
              Reno & Lake Tahoe
              <br /><span className="italic text-teal">Deck Work.</span>
            </h2>

            {/* Mobile: carousel */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-3 scrollbar-none mb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {[
                { src: IMGS.repairs_arun, alt: 'Hillside Deck Repair Reinforced Support Beams Lake Tahoe NV', cap: 'Hillside Deck Repair — Lake Tahoe' },
                { src: IMGS.deck_charolette, alt: 'Custom Deck Build Smooth Sealed Surface Sparks NV', cap: "Charolette's Deck — Sparks, NV" },
                { src: IMGS.repairs_deck_lt, alt: 'Steel Angle Brackets Securing Deck to CMU Wall Lake Tahoe', cap: 'Structural Reinforcement — Lake Tahoe' },
                { src: IMGS.lt(2), alt: 'Exterior Deck Renovation Lake Tahoe Full Home Renovation', cap: 'Deck Renovation — Zephyr Cove' },
              ].map((img, i) => (
                <div key={i} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '78vw' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full h-52 object-cover rounded-xl" loading={i < 2 ? 'eager' : 'lazy'} />
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{img.cap}</p>
                </div>
              ))}
            </div>

            {/* Desktop: masonry grid */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              <div className="col-span-2 overflow-hidden rounded-xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.repairs_arun} alt="Hillside Deck Repair Reinforced Support Beams Lake Tahoe NV BRE Builders" className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" style={{ height: '340px' }} loading="eager" />
                <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">Hillside Deck Repair — Lake Tahoe, NV</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMGS.deck_charolette} alt="Custom Deck Build Smooth Sealed Surface Sparks NV BRE Builders" className="w-full h-40 object-cover group-hover:scale-[1.03] transition-transform duration-600" loading="eager" />
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">Custom Deck — Sparks, NV</p>
                </div>
                <div className="overflow-hidden rounded-xl group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMGS.repairs_deck_lt} alt="Steel Angle Brackets Deck Structural Reinforcement Lake Tahoe BRE Builders" className="w-full h-40 object-cover group-hover:scale-[1.03] transition-transform duration-600" loading="lazy" />
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">Steel Bracket Repair — Lake Tahoe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ + AEO ─────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Deck Building & Repair in Reno" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  The Deck Contractor
                  <br /><span className="italic text-teal">Reno Trusts.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    BRE Builders builds and repairs decks throughout Reno, Sparks, Carson City, and Lake Tahoe.
                    We've repaired hillside decks in Zephyr Cove, reinforced balconies attached to CMU walls, and
                    built new decks from the ground up across Northern Nevada.
                  </p>
                  <p>
                    Every deck project begins with a structural assessment. We use Trex composite decking,
                    pressure-treated lumber, and galvanized or stainless hardware rated for the local climate.
                    All work is licensed (NV #0085999) and permit-compliant.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/projects/lake-tahoe-deck-repair" className="btn-ghost text-[12px] py-2 px-4">Lake Tahoe Deck Project →</Link>
                  <Link href="/projects/arun-deck-repair" className="btn-ghost text-[12px] py-2 px-4">Hillside Deck Repair →</Link>
                  <Link href="/blog/deck-safety-warning-signs-reno-lake-tahoe/" className="btn-ghost text-[12px] py-2 px-4">Deck Safety Blog Post →</Link>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <FAQAccordion items={DECK_FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">Don't wait for a deck failure.</p>
              <p className="text-[14px] text-cream/50 mb-6">Free inspection for Reno and Lake Tahoe decks. NV #0085999.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[15px] mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?service=decks" className="btn-ghost w-full justify-center py-3 text-[13px]">Request a Quote Online</Link>
            </div>
          </div>
        </section>

        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.lt(14)} alt="Exterior Deck Renovation Lake Tahoe BRE Builders" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Build or Repair.<br /><span className="italic text-teal">Done Right the First Time.</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">Free estimates · Licensed NV #0085999 · Reno & Lake Tahoe</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=decks" className="btn-primary px-10 py-4 text-[14px]">Get a Free Deck Quote →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
