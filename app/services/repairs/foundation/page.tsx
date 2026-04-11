const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Foundation Repair Reno NV | Free Inspection',
  description:
    'Foundation repair and structural inspection in Reno, NV. Licensed GC since 1989. Cracks, settlement, drainage issues. NV License #0085999. Free evaluation.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=Foundation+Repair+Reno+NV&sub=Free+Evaluation+%C2%B7+Licensed+Since+1989+%C2%B7+NV+%230085999&badge=Foundation+Repair`,
      width: 1200, height: 630,
      alt: 'Blue Reef Builders — Foundation Repair Reno NV | Free Inspection',
    }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Repair Reno NV | Free Inspection',
    description: 'Foundation repair and structural inspection in Reno, NV. Licensed GC since 1989. Cracks, settlement, drainage issues. NV License #0085999. Free evaluation.',
    images: [{ url: `${SITE_URL}/api/og?title=Foundation+Repair+Reno+NV&sub=Free+Evaluation+%C2%B7+Licensed+Since+1989+%C2%B7+NV+%230085999&badge=Foundation+Repair`, alt: 'Blue Reef Builders — Foundation Repair Reno NV | Free Inspection' }],
  },
  alternates: { canonical: `${SITE_URL}/repairs/foundation-repair-and-foundation-issues-in-reno-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/repairs/foundation-repair-and-foundation-issues-in-reno-nv/#service',
      name: 'Foundation Repair Reno NV',
      description: 'Foundation crack repair, underpinning, leveling, and structural stabilization in Reno, NV. Licensed GC since 1989. Free on-site inspection. NV #0085999.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What causes foundation problems in Reno Nevada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Foundation problems in Reno are commonly caused by: expansive clay soils that swell and contract with moisture, freeze-thaw cycles in winter, poor drainage directing water toward the foundation, tree root intrusion, and inadequate original construction.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does foundation repair cost in Reno NV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BRE Builders provides free foundation inspections with a written scope before any estimate. Repair costs vary based on severity and scope. Contact us for a free evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is foundation repair covered by homeowners insurance in Nevada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Foundation damage from sudden events (burst pipes, earthquake) may be covered. Foundation damage from long-term issues (settling, drainage, soil movement) is typically excluded. BRE Builders provides documentation for insurance claims when applicable.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Structural Repairs', item: 'https://brebuilders.com/repairs/' },
        { '@type': 'ListItem', position: 3, name: 'Foundation Repair', item: 'https://brebuilders.com/repairs/foundation-repair-and-foundation-issues-in-reno-nv/' },
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
    q: 'What causes foundation problems in Reno Nevada?',
    a: 'Foundation problems in Reno are commonly caused by: expansive clay soils that swell and contract with moisture, freeze-thaw cycles, poor drainage directing water toward the foundation, tree root intrusion, and inadequate original construction.',
  },
  {
    q: 'How much does foundation repair cost in Reno NV?',
    a: 'Costs vary by scope and severity. BRE Builders provides free on-site foundation inspections before any estimate',
  },
  {
    q: 'Is foundation repair covered by homeowners insurance in Nevada?',
    a: 'Foundation damage from sudden events (burst pipes, earthquake) may be covered. Long-term issues (settling, drainage, soil movement) are typically excluded. BRE Builders provides documentation for insurance claims when applicable.',
  },
  {
    q: 'How long does foundation repair take?',
    a: 'Minor crack repair takes 1–3 days. Drainage corrections take 3–7 days. Major foundation work can take 1–3 weeks depending on scope. BRE Builders provides timelines at the evaluation stage.',
  },
  {
    q: 'Do you repair foundations in Lake Tahoe properties?',
    a: 'Yes. BRE Builders repairs foundations in Reno, Sparks, Carson City, Lake Tahoe, and surrounding areas. NV License #0085999.',
  },
]

export default function FoundationRepairPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main data-theme="repairs">
        {/* ── MOBILE HERO — compact, content above fold ── */}
        <section className="md:hidden relative overflow-hidden">
          <div className="relative w-full" style={{ height: '42vw', minHeight: 150, maxHeight: 220 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.repairs_foundation} alt="Foundation Repair Structural Issues Reno NV Licensed Contractor BRE Builders" className="w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 35%' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-void/5 to-void/85" />
          </div>
          <div className="bg-deep px-5 pt-5 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-teal">Foundation Repair · Reno NV</span>
            </div>
            <h1 className="font-display font-light text-[clamp(27px,7.5vw,40px)] leading-[1.0] tracking-tight text-white mb-3">
              Foundation Repair
                <br />and Foundation Issues
                <br />
                <span className="italic text-teal">in Reno, NV</span>
            </h1>
            <p className="text-[13px] leading-[1.65] text-white/60 mb-4">
              Licensed foundation repair contractor serving Reno, Sparks, and Northern Nevada. Cracks,
                settlement, drainage correction, and framing repair. NV License #0085999.
            </p>
            <div className="flex gap-2.5">
              <a href="tel:7753914517" className="btn-primary flex-1 justify-center py-3.5 text-[14px]">📞 Call Now</a>
              <a href="/contact" className="btn-ghost flex-1 justify-center py-3.5 text-[13px]">Get Quote</a>
            </div>
          </div>
        </section>

        <section className="hidden md:relative md:block md:flex min-h-[68vh] lg:min-h-[75vh] md:flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.repairs_foundation}
            alt="Foundation Repair Structural Issues Reno NV Licensed Contractor BRE Builders"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/93 via-void/60 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[580px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">
                  Foundation Repair · Reno NV
                </span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-white mb-4">
                Foundation Repair
                <br />and Foundation Issues
                <br />
                <span className="italic text-teal">in Reno, NV</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[470px]">
                Licensed foundation repair contractor serving Reno, Sparks, and Northern Nevada. Cracks,
                settlement, drainage correction, and framing repair. NV License #0085999.
              </p>
              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['Licensed Since 1989', 'Free Evaluation', 'Written Scope', 'Same-Week Response'].map((b) => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">✓ {b}</span>
                ))}
              </div>
              <div className="animate-fade-up-4">
                <div className="md:hidden flex gap-3 mb-5">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Call Now</a>
                  <Link href="/contact?service=foundation" className="btn-ghost flex-1 justify-center">Request Inspection</Link>
                </div>
                <div className="hidden md:flex gap-3 mb-5">
                  <Link href="/contact?service=foundation" className="btn-primary">Request Free Foundation Evaluation →</Link>
                  <Link href="/services/repairs/" className="btn-ghost">All Structural Repairs</Link>
                </div>
                <p className="font-mono text-[11px] text-white/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
                  Foundation issues worsen over time — early repair saves thousands
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation causes + signs */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Foundation Issues in Reno NV" />
            <h2 className="font-display text-[clamp(26px,3.5vw,50px)] font-light leading-[1.1] tracking-tight mb-4">
              Why Reno Homes Develop Foundation Problems.
            </h2>
            <p className="text-[15px] text-cream/55 max-w-[560px] mb-10">
              Reno's geology and climate create specific foundation challenges that homeowners should understand.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {[
                { title: 'Expansive Clay Soils', body: 'Reno sits on expansive clay soils that absorb water and swell, then shrink when dry. This seasonal movement places cyclical stress on foundations over time.' },
                { title: 'Freeze-Thaw Cycles', body: 'Winter frost and spring thaw cycles in Northern Nevada cause soil heave that can crack foundations, especially in older homes with shallow footings.' },
                { title: 'Poor Site Drainage', body: 'Water channeled toward a foundation by grading, landscaping, or irrigation slowly saturates the soil and causes settlement.' },
                { title: 'Age & Original Construction', body: 'Reno homes built before 1980 may have undersized footings or no vapor barrier. Problems that were minor at construction can become significant over decades.' },
              ].map((s) => (
                <div key={s.title} className="bg-panel rounded-xl p-5 border border-white/[0.055]">
                  <h3 className="font-display text-[18px] text-cream mb-2">{s.title}</h3>
                  <p className="text-[13px] text-cream/50 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <Link href="/contact?service=foundation" className="btn-primary">
              Schedule a Free Foundation Evaluation →
            </Link>
          </div>
        </section>

        {/* FAQ + AEO */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Foundation Repair Reno" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  Expert Foundation Repair.
                  <br /><span className="italic text-teal">Licensed. Honest. Thorough.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    BRE Builders has been repairing foundation and structural issues in Reno and Northern Nevada
                    since 1989. We diagnose the root cause of the problem, not just the visible symptom, and
                    repair it properly.
                  </p>
                  <p>
                    Foundation repair costs vary based on severity and scope. BRE Builders provides free evaluations —
                    major foundation work. BRE Builders provides written scopes and itemized estimates.
                    Licensed NV #0085999. Free evaluation.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/services/repairs/" className="btn-ghost text-[12px] py-2 px-4">All Structural Repairs →</Link>
                  <Link href="/services/repairs/water-intrusion-and-moisture-issues-in-reno-nv/" className="btn-ghost text-[12px] py-2 px-4">Water Intrusion →</Link>
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
            <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">Foundation issues only get worse.</p>
              <p className="text-[14px] text-cream/50 mb-6">Early evaluation. Free. Written scope. NV #0085999.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[15px] mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?service=foundation" className="btn-ghost w-full justify-center py-3 text-[13px]">Request Evaluation Online</Link>
            </div>
          </div>
        </section>

        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.repairs_rot} alt="Structural Damage Repair Reno NV BRE Builders" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/92" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Free Foundation Evaluation.<br /><span className="italic text-teal">Licensed. Honest. Thorough.</span>
            </h2>
            <p className="text-[16px] text-white/90 max-w-md mx-auto mb-10">NV #0085999 · Response within 24 hours · No upselling</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=foundation" className="btn-primary px-10 py-4 text-[14px]">Request Free Evaluation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
