import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Structural Repairs Reno NV | Foundation & Home Repairs | BRE Builders',
  description:
    'Licensed structural repair contractors in Reno, NV. Foundation repair, dry rot, water intrusion, framing. NV License #0085999. Free inspection request.',
  alternates: { canonical: 'https://brebuilders.com/repairs/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/repairs/#service',
      name: 'Structural Repairs Reno NV',
      description:
        'BRE Builders provides structural repair services in Reno, NV — foundation repair, dry rot, water intrusion, framing, and home stabilization.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are signs of structural damage in a Reno home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Key warning signs include: stair-step cracks in brick or block, wide or growing foundation cracks, uneven or sloping floors, bowing or separating walls, and doors or windows suddenly misaligned. These require professional inspection.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can BRE Builders respond to a structural repair request in Reno?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BRE Builders responds to structural repair requests within 24 hours. Emergency evaluations can often be scheduled within 48 hours.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Structural Repairs', item: 'https://brebuilders.com/repairs/' },
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

const REPAIR_FAQS = [
  {
    q: 'What are signs of structural damage in a Reno home?',
    a: 'Key warning signs include stair-step cracks in brick or block, wide or growing foundation cracks, uneven or sloping floors, bowing or separating walls, and doors or windows suddenly misaligned. These require professional inspection.',
  },
  {
    q: 'How quickly can BRE Builders respond to a repair request?',
    a: 'We respond to structural repair requests within 24 hours. Emergency evaluations can often be scheduled within 48 hours.',
  },
  {
    q: 'Do you repair foundation issues in Reno and Lake Tahoe?',
    a: 'Yes. BRE Builders handles foundation repair, settlement, crack repair, and drainage issues across Reno, Sparks, Carson City, and Lake Tahoe. NV License #0085999.',
  },
  {
    q: 'What does a structural repair inspection involve?',
    a: 'A licensed BRE contractor reviews visible structural elements — foundation, framing, walls, floors, and exterior. We identify cosmetic vs structural concerns and provide a written scope.',
  },
  {
    q: 'Can water intrusion damage be structural?',
    a: "Yes. Prolonged water intrusion near a foundation can weaken soil stability, cause settlement, accelerate dry rot in framing, and create mold. Early repair is always less costly than delayed action.",
  },
]

const COSMETIC_SIGNS = [
  'Thin hairline cracks in drywall — normal settling or temperature changes',
  'Minor slab surface cracking — shallow, does not indicate foundation movement',
  'Doors sticking seasonally — weather-related expansion and contraction',
  'Small nail pops or trim gaps — minor interior shifts from aging materials',
]

const STRUCTURAL_SIGNS = [
  'Stair-step cracks in brick or block — commonly signals foundation settlement',
  'Wide or growing foundation cracks — may indicate active structural movement',
  'Uneven or sloping floors — suggests compromised supports or shifting foundation',
  'Bowing or separating walls — results from sustained structural pressure',
  'Doors and windows suddenly misaligned — rapid alignment changes from structural shifts',
]

export default function RepairsPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* ══════════════ HERO — urgency psychology ══════════════════════════ */}
        {/* Mobile: "Is your home safe?" → call NOW
            Desktop: diagnostic angle → symptom checker + inspection request */}
        <section className="relative min-h-[70vh] lg:min-h-[75vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.repairs_foundation}
            alt="Foundation Repair and Structural Issues Reno NV Licensed Contractor BRE Builders"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/60 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/65 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[600px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">
                  Structural Repairs · Reno, NV
                </span>
              </div>

              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-tight text-white mb-4">
                Structural Repairs
                <br />
                in Reno
                <br />
                <span
                  className="italic"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.35)' }}
                >
                  Done Right.
                </span>
              </h1>

              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[480px]">
                Foundation repair, dry rot, water intrusion, framing issues. BRE Builders diagnoses
                and repairs structural problems in Reno and Lake Tahoe homes. Licensed NV #0085999.
              </p>

              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['Prompt Response', 'Skilled Craftsmanship', 'Long-Term Solutions', 'Free Evaluation'].map(
                  (b) => (
                    <span
                      key={b}
                      className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md"
                    >
                      ✓ {b}
                    </span>
                  )
                )}
              </div>

              {/* CTAs */}
              <div className="animate-fade-up-4">
                {/* MOBILE: urgency-first → call */}
                <div className="md:hidden flex gap-3 mb-5">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">
                    📞 Call Now — It&apos;s Urgent
                  </a>
                  <Link href="/contact?service=repairs" className="btn-ghost flex-1 justify-center">
                    Request Inspection
                  </Link>
                </div>

                {/* DESKTOP: inspection-first */}
                <div className="hidden md:flex gap-3 mb-5">
                  <Link href="/contact?service=repairs" className="btn-primary">
                    Request a Free Inspection →
                  </Link>
                  <Link href="/services/repairs/foundation/" className="btn-ghost">
                    Foundation Repair
                  </Link>
                  <Link href="/services/repairs/water-intrusion/" className="btn-ghost">
                    Water Intrusion
                  </Link>
                </div>

                <p className="font-mono text-[11px] text-white/35 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                  Structural issues rarely resolve on their own — early inspection is always less expensive
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ MOBILE URGENCY STRIP ══════════════════════════════ */}
        <section className="md:hidden bg-red-950/30 border-b border-red-900/40 py-4">
          <div className="container">
            <p className="font-display text-[17px] text-cream/90 leading-snug">
              Structural issues get worse over time — not better.
            </p>
            <p className="font-mono text-[11px] text-cream/40 mt-1.5 tracking-wide">
              Early repair costs: hundreds. Delayed repair costs: tens of thousands.
            </p>
          </div>
        </section>

        {/* ══════════════ SYMPTOM CHECKER ════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="How to Know When It's Serious" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-4">
              Not Every Crack Means Structural Damage.
              <br />
              <span className="italic text-teal">Some Do.</span>
            </h2>
            <p className="text-[15px] text-cream/55 leading-relaxed max-w-[560px] mb-12">
              In Reno and Lake Tahoe homes, some issues are cosmetic from normal settling and
              seasonal changes, while others signal foundation or framing movement. Use the signs
              below to tell the difference.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Cosmetic — safe */}
              <div className="bg-panel rounded-xl p-6 border border-white/[0.055]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  <span className="font-mono text-[11px] tracking-wider uppercase text-green-400/70">
                    Likely Cosmetic — monitor
                  </span>
                </div>
                <ul className="space-y-3">
                  {COSMETIC_SIGNS.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[13px] text-cream/50 leading-relaxed">
                      <span className="text-green-400/50 mt-0.5 flex-shrink-0">○</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Structural — inspect */}
              <div className="bg-panel rounded-xl p-6 border border-red-900/40">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-red-400/70" />
                  <span className="font-mono text-[11px] tracking-wider uppercase text-red-400/70">
                    Potentially Structural — inspect now
                  </span>
                </div>
                <ul className="space-y-3">
                  {STRUCTURAL_SIGNS.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[13px] text-cream/50 leading-relaxed">
                      <span className="text-red-400/60 mt-0.5 flex-shrink-0">●</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?service=repairs"
                  className="mt-6 btn-primary inline-flex text-[13px] py-3"
                >
                  Request Inspection →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ REPAIR SERVICES ════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="Repair Services" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              What We Repair.
            </h2>

            {/* Mobile: carousel | Desktop: grid */}
            {/* Mobile carousel */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-3 scrollbar-none mb-6" style={{ scrollSnapType: 'x mandatory' }}>
              {[
                {
                  title: 'Foundation Repair',
                  href: '/services/repairs/foundation/',
                  img: IMGS.repairs_foundation,
                  alt: 'Foundation Repair Reno NV BRE Builders',
                  desc: 'Cracks, settlement, framing. Licensed foundation contractor.',
                },
                {
                  title: 'Water Intrusion',
                  href: '/services/repairs/water-intrusion/',
                  img: IMGS.repairs_water,
                  alt: 'Water Intrusion Repair Reno NV BRE Builders',
                  desc: 'Moisture, mold risk, efflorescence, drainage.',
                },
                {
                  title: 'Structural Repair',
                  href: '/contact?service=repairs',
                  img: IMGS.repairs_rot,
                  alt: 'Dry Rot Structural Repair Reno NV BRE Builders',
                  desc: 'Dry rot, framing, wall panels, load-bearing.',
                },
                {
                  title: 'Deck Structural',
                  href: '/services/decks/',
                  img: IMGS.repairs_arun,
                  alt: 'Deck Structural Repair Lake Tahoe BRE Builders',
                  desc: 'Deck safety, railing, support beams, ledger.',
                },
              ].map((s, i) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="flex-shrink-0 group"
                  style={{ scrollSnapAlign: 'start', width: '75vw' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-44 object-cover rounded-xl mb-3"
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                  <div className="font-display text-[17px] text-cream group-hover:text-teal transition-colors">
                    {s.title}
                  </div>
                  <div className="font-mono text-[11px] text-cream/35 mt-1">{s.desc}</div>
                </Link>
              ))}
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-4 gap-5">
              {[
                {
                  title: 'Foundation Repair',
                  href: '/services/repairs/foundation/',
                  img: IMGS.repairs_foundation,
                  alt: 'Foundation Repair Reno NV BRE Builders',
                  desc: 'Cracks, settlement, drainage, framing.',
                },
                {
                  title: 'Water Intrusion',
                  href: '/services/repairs/water-intrusion/',
                  img: IMGS.repairs_water,
                  alt: 'Water Intrusion Moisture Repair Reno NV BRE Builders',
                  desc: 'Moisture, mold risk, efflorescence.',
                },
                {
                  title: 'Dry Rot & Framing',
                  href: '/contact?service=repairs',
                  img: IMGS.repairs_rot,
                  alt: 'Dry Rot Structural Damage Repair BRE Builders Reno',
                  desc: 'Wall panels, framing, siding, load-bearing.',
                },
                {
                  title: 'Deck Structural',
                  href: '/services/decks/',
                  img: IMGS.repairs_arun,
                  alt: 'Deck Structural Repair Lake Tahoe BRE Builders',
                  desc: 'Deck safety, railing, ledger, support beams.',
                },
              ].map((s, i) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group card overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600"
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="font-display text-[17px] text-cream mb-1 group-hover:text-teal transition-colors">
                      {s.title}
                    </div>
                    <div className="font-mono text-[11px] text-cream/40">{s.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ AEO CONTENT + FAQ ══════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Structural Repairs in Reno" />
                <h2 className="font-display text-[clamp(26px,3.5vw,48px)] font-light leading-[1.1] tracking-tight mb-6">
                  Why Northern Nevada Homes Need Structural Attention.
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    Reno and Lake Tahoe homes face unique structural stressors: freeze-thaw cycles, clay-heavy
                    soil that expands and contracts seasonally, and high desert precipitation that can
                    channel water toward foundations.
                  </p>
                  <p>
                    BRE Builders has repaired structural damage across Northern Nevada since 1989. Our
                    licensed team (NV #0085999) diagnoses the root cause — not just the visible symptom —
                    and repairs it properly the first time.
                  </p>
                  <p>
                    We handle structural repairs on single-family homes, condos, commercial buildings, and
                    Lake Tahoe vacation properties. Foundation, framing, waterproofing, dry rot, deck
                    structures.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/services/repairs/foundation/" className="btn-ghost text-[12px] py-2 px-4">
                    Foundation Repair →
                  </Link>
                  <Link href="/services/repairs/water-intrusion/" className="btn-ghost text-[12px] py-2 px-4">
                    Water Intrusion →
                  </Link>
                  <Link href="/blog/top-10-signs-your-home-needs-structural-repair-dont-ignore-3/" className="btn-ghost text-[12px] py-2 px-4">
                    10 Warning Signs →
                  </Link>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <FAQAccordion items={REPAIR_FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ CTA ════════════════════════════════════════════════ */}
        {/* Mobile: urgency → call */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">
                Structural issues don&apos;t resolve on their own.
              </p>
              <p className="text-[14px] text-cream/50 mb-6">
                Early inspection is always less expensive. Call BRE Builders for a free evaluation today.
              </p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[15px] mb-3">
                📞 {SITE.phone} — Call Now
              </a>
              <Link href="/contact?service=repairs" className="btn-ghost w-full justify-center py-3 text-[13px]">
                Request Inspection Online
              </Link>
            </div>
          </div>
        </section>

        {/* Desktop CTA */}
        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMGS.repairs_rot}
              alt="BRE Builders structural repair project Reno NV"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-void/90" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Schedule a Free
              <br />
              <span className="italic text-teal">Structural Evaluation.</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-md mx-auto mb-10">
              Licensed. Experienced. Honest assessments. No upselling. NV #0085999.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=repairs" className="btn-primary px-10 py-4 text-[14px]">
                Request Free Inspection →
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">
                {SITE.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
