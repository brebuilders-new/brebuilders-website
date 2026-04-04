import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'ADU Builder Lake Tahoe NV | TRPA Permits & Complete Builds',
  description: 'ADU builder at Lake Tahoe NV. TRPA permits, Washoe & Douglas County permits, snow-load engineering all handled. NV #0085999. Free site evaluation.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=ADU+Builder+Lake+Tahoe+NV&sub=TRPA+Permits+%C2%B7+NV+%230085999&badge=Lake+Tahoe+ADU`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/service-areas/lake-tahoe/adu/` },
}

const FAQS = [
  {
    q: 'Can I build an ADU on a Lake Tahoe property?',
    a: 'Yes, subject to Washoe County or Douglas County zoning and Tahoe Regional Planning Agency (TRPA) regulations. TRPA controls land coverage in the Tahoe Basin — your parcel\'s existing coverage determines what can be added. BRE Builders assesses feasibility before any commitment.',
  },
  {
    q: 'How much does an ADU cost in Lake Tahoe?',
    a: 'ADU costs at Lake Tahoe are higher than standard Reno builds due to TRPA permitting, snow-load engineering requirements, site access constraints, and mountain material transport. BRE Builders provides a free site evaluation with a realistic cost estimate for your specific parcel.'
  },
  {
    q: 'What is the TRPA permit process for a Lake Tahoe ADU?',
    a: 'The Tahoe Regional Planning Agency reviews ADU projects for land coverage, environmental impact, and compliance with the Tahoe Regional Plan. BRE Builders manages the full TRPA application, coverage documentation, and county building permit simultaneously.',
  },
  {
    q: 'How long does a Lake Tahoe ADU take to build?',
    a: 'Total timeline is typically 5–8 months. TRPA review and county permitting adds 6–10 weeks on top of a standard Nevada permit process. Construction is 3–5 months depending on scope and site access.',
  },
  {
    q: 'Does BRE Builders handle TRPA permits?',
    a: 'Yes. We manage the full permit process including TRPA review, coverage calculations, environmental documentation, and Washoe or Douglas County building permits. You don\'t deal with the agencies directly.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'ADU Construction Lake Tahoe NV',
      description: 'Licensed ADU builders serving Lake Tahoe, NV. TRPA-compliant ADU construction with full permit handling. NV #0085999. Free site evaluation.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'Place', name: 'Lake Tahoe, NV' },
      offers: { '@type': 'Offer', description: 'Price varies by parcel TRPA coverage, lot conditions, and ADU size. Free site evaluation available.' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-adu-lt'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://brebuilders.com/service-areas/' },
        { '@type': 'ListItem', position: 3, name: 'Lake Tahoe', item: 'https://brebuilders.com/service-areas/lake-tahoe/' },
        { '@type': 'ListItem', position: 4, name: 'ADU Builder Lake Tahoe', item: 'https://brebuilders.com/service-areas/lake-tahoe/adu/' },
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

export default function LakeTahoeADUPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>

        {/* ── MOBILE HERO ── */}
        <section className="md:hidden relative overflow-hidden" style={{ minHeight: '100svh' }}>
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.adu_main} alt="ADU Construction Lake Tahoe NV BRE Builders" className="w-full h-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/60 to-void/90" />
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[100svh] px-5 pb-10 pt-24">
            <SL text="ADU Builder · Lake Tahoe, NV" />
            <h1 className="font-display font-light text-[clamp(28px,7.5vw,42px)] leading-[0.97] tracking-tight text-white mb-3">
              ADU Builder<br /><span className="italic text-teal">Lake Tahoe, Nevada.</span>
            </h1>
            <p className="text-[13px] leading-[1.65] text-white/60 mb-6 max-w-[380px]">
              TRPA-compliant ADU construction. BRE Builders handles all permits — TRPA, Washoe County, Douglas County. NV #0085999.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact?service=adu&location=lake-tahoe" className="btn-primary">Get a Free Site Evaluation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>

        {/* ── DESKTOP HERO ── */}
        <section className="hidden md:flex flex-col justify-end pb-20 lg:pb-28 pt-32 relative overflow-hidden min-h-[80vh]">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.adu_main} alt="ADU Construction Lake Tahoe NV BRE Builders" className="w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 40%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-void/85 via-void/60 to-void/20" />
          </div>
          <div className="container relative z-10 max-w-[680px]">
            <SL text="ADU Builder · Lake Tahoe, NV" />
            <h1 className="font-display font-light text-[clamp(42px,6vw,80px)] leading-[0.93] tracking-tight text-white mb-5">
              ADU Builder<br /><span className="italic text-teal">Lake Tahoe, Nevada.</span>
            </h1>
            <p className="text-[16px] leading-relaxed text-white/60 mb-8 max-w-[520px] speakable-adu-lt">
              TRPA-compliant ADU construction at Lake Tahoe. Full permit handling — TRPA, Washoe or Douglas County. Licensed NV #0085999.
            </p>
            <div className="flex gap-4">
              <Link href="/contact?service=adu&location=lake-tahoe" className="btn-primary">Free Site Evaluation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section className="py-5 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
              {[
                'NV License #0085999',
                'TRPA Permit Experience',
                'Washoe & Douglas County',
                'Snow-Load Engineered',
                'Free Site Evaluation',
                'Free Site Evaluation',
              ].map(t => (
                <span key={t} className="font-mono text-[11px] text-cream/45 tracking-wide">✓ {t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY TAHOE IS DIFFERENT ── */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SL text="Lake Tahoe ADU Requirements" />
                <h2 className="font-display font-light text-[clamp(26px,4vw,50px)] leading-tight text-cream mb-6">
                  Tahoe ADUs Are<br /><span className="italic text-teal">Different.</span>
                </h2>
                <div className="speakable-adu-lt space-y-4 text-[15px] leading-relaxed text-cream/55">
                  <p>Building an ADU at Lake Tahoe requires more than a standard Nevada building permit. Every project in the Tahoe Basin must comply with the <strong className="text-cream">Tahoe Regional Planning Agency (TRPA)</strong> — a bi-state agency that controls land coverage, environmental impact, and development density across the entire basin.</p>
                  <p>TRPA limits how much of your parcel can be covered by structures and impervious surfaces. Before any design work begins, BRE Builders calculates your existing coverage and determines exactly what's buildable on your specific lot.</p>
                  <p>Add Washoe or Douglas County permitting, snow-load engineering requirements, and site access constraints — and you need a contractor who has done this before. BRE Builders has.</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Site feasibility & coverage calculation', desc: 'TRPA limits total land coverage. We calculate your parcel\'s existing coverage before anything else. Determines if and what size ADU is possible.' },
                  { step: '02', title: 'TRPA permit application', desc: 'Environmental documentation, coverage analysis, and TRPA-specific ADU application. BRE handles the full submission.' },
                  { step: '03', title: 'Washoe or Douglas County permit', desc: 'County building permit filed simultaneously with TRPA review. We manage both processes.' },
                  { step: '04', title: 'Snow-load engineering', desc: 'All Tahoe structures require engineering for snow loads up to 200 lbs per sq ft. Stamped plans included.' },
                  { step: '05', title: 'Construction & final inspection', desc: 'Licensed crew, code-compliant build, TRPA and county final sign-off.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4 bg-panel rounded-xl border border-white/[0.06] p-4">
                    <span className="font-mono text-[12px] text-teal font-700 w-8 flex-shrink-0 pt-0.5">{item.step}</span>
                    <div>
                      <p className="text-[13px] font-medium text-cream/85 mb-1">{item.title}</p>
                      <p className="text-[12px] text-cream/40 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 lg:py-24 bg-void border-y border-white/[0.05]">
          <div className="container max-w-[760px]">
            <SL text="ADU Costs at Lake Tahoe" />
            <h2 className="font-display font-light text-[clamp(26px,4vw,48px)] leading-tight text-cream mb-8">
              What Does a Lake Tahoe<br /><span className="italic text-teal">ADU Cost?</span>
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
              <p>
                Lake Tahoe ADU costs are higher than standard Reno builds due to TRPA permitting requirements, snow-load engineering, site access constraints, and mountain material transport costs. Pricing is project-specific and depends on your parcel's TRPA coverage allowance, lot conditions, and ADU size.
              </p>
              <p>
                BRE Builders provides a <strong className="text-cream">free site evaluation</strong> to assess your parcel's eligibility and give you a realistic cost estimate before you commit to anything.
              </p>
            </div>
            <div className="bg-teal/[0.05] border border-teal/15 rounded-xl p-6">
              <p className="font-mono text-[10px] tracking-[2px] text-teal uppercase mb-3">Why Tahoe Costs More Than Reno</p>
              <ul className="space-y-2 text-[13px] text-cream/55">
                <li>✓ TRPA permit process adds time and agency fees</li>
                <li>✓ Snow-load engineering required on all structures (up to 200 lbs/sq ft)</li>
                <li>✓ Site access at Tahoe is often limited — affects material delivery</li>
                <li>✓ TRPA coverage calculations must be completed before design begins</li>
                <li>✓ Washoe or Douglas County permits required in addition to TRPA</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-panel border-y border-white/[0.05]">
          <div className="container max-w-[800px]">
            <SL text="Common Questions" />
            <h2 className="font-display font-light text-[clamp(24px,3.5vw,44px)] leading-tight text-cream mb-10">
              Lake Tahoe ADU<br /><span className="italic text-teal">Questions Answered.</span>
            </h2>
            <div className="speakable-faq">
              <FAQAccordion items={FAQS} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-void">
          <div className="container text-center max-w-[600px]">
            <SL text="Start With a Free Evaluation" />
            <h2 className="font-display font-light text-[clamp(26px,4vw,48px)] leading-tight text-cream mb-5">
              Is Your Lot Eligible<br /><span className="italic text-teal">for a Tahoe ADU?</span>
            </h2>
            <p className="text-[15px] text-cream/50 leading-relaxed mb-8">
              TRPA coverage rules mean not every lot qualifies. We assess your parcel first — at no charge — before you commit to anything. If it's buildable, we'll tell you exactly what's possible and what it will cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=adu&location=lake-tahoe" className="btn-primary">Free Site Evaluation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
            <p className="mt-6 font-mono text-[11px] text-cream/25">NV License #0085999 · Licensed & Insured · 35+ Years</p>
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section className="py-10 bg-deep border-t border-white/[0.05]">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              <Link href="/services/adu/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">ADU Construction Reno NV →</Link>
              <Link href="/service-areas/lake-tahoe/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Lake Tahoe Contractor →</Link>
              <Link href="/blog/how-to-add-an-adu-in-nevada/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Nevada ADU Guide →</Link>
              <Link href="/service-areas/truckee/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Contractor Truckee CA →</Link>
              <Link href="/contact/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Free Estimate →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
