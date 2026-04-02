import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Our Approach | How We Work | Since 1989',
  description:
    'How BRE Builders works — consultation, design, permits, construction, and delivery. Licensed general contractor since 1989. NV #0085999.',
  alternates: { canonical: 'https://brebuilders.com/our-approach/' },
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

const STEPS = [
  {
    n: '01',
    title: 'Free Consultation',
    body: 'We start with a conversation about your project goals, timeline, and budget. For most projects, we follow up with a site visit so we can give you an accurate, itemized estimate — at no charge.',
  },
  {
    n: '02',
    title: 'Scope & Design',
    body: "We help you clarify the project scope. For new builds and additions, we coordinate architectural plans. We'll tell you exactly what's included, what's not, and why. No surprises.",
  },
  {
    n: '03',
    title: 'Permits & Approvals',
    body: "We handle all permit applications with Washoe County, City of Reno, or California jurisdictions. We don't start construction until everything is properly approved and code-compliant.",
  },
  {
    n: '04',
    title: 'Construction',
    body: 'Our licensed in-house team manages every phase — framing, MEP coordination, inspections, and finishes. You get regular milestone updates. We finish on schedule because we plan properly.',
  },
  {
    n: '05',
    title: 'Delivery & Warranty',
    body: 'Final walkthrough, punch list completion, and a 1-year workmanship warranty. We pass along all manufacturer warranties. And we remain reachable after the job is done.',
  },
]

export default function OurApproachPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[55vh] flex flex-col justify-end pb-14 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.lt(7)} alt="Custom Interior Stair Construction Lake Tahoe BRE Builders craftsmanship" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="relative z-10 container">
            <div className="max-w-[520px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">How We Work</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,72px)] leading-[0.95] tracking-tight text-white mb-4">
                Our Approach.<br /><span className="italic text-teal">No Surprises.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <div className="max-w-[760px]">
              <SL text="Our Process" />
              <h2 className="font-display text-[clamp(26px,3.5vw,48px)] font-light leading-[1.1] tracking-tight mb-12">
                Five Phases. Zero Confusion.
              </h2>

              {/* Desktop: horizontal timeline | Mobile: vertical steps */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-px bg-white/[0.07]" />
                  <div className="space-y-10">
                    {STEPS.map(s => (
                      <div key={s.n} className="flex gap-8 relative">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-panel border border-teal/25 flex items-center justify-center relative z-10">
                          <span className="font-mono text-[13px] text-teal">{s.n}</span>
                        </div>
                        <div className="pt-3 pb-8">
                          <h3 className="font-display text-[22px] text-cream mb-2">{s.title}</h3>
                          <p className="text-[15px] text-cream/55 leading-relaxed">{s.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: stacked */}
              <div className="md:hidden space-y-4">
                {STEPS.map(s => (
                  <div key={s.n} className="flex gap-4 p-5 bg-panel rounded-xl border border-white/[0.055]">
                    <div className="font-mono text-[28px] text-teal/20 font-bold leading-none flex-shrink-0">{s.n}</div>
                    <div>
                      <h3 className="font-display text-[18px] text-cream mb-1.5">{s.title}</h3>
                      <p className="text-[13px] text-cream/50 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="Our Principles" />
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { t: 'Honest Estimates', b: 'We give you a real number, not a low bid to win the job. Our estimates reflect actual cost — materials, labor, permits, and buffer.' },
                { t: 'One Team', b: "We don't subcontract our core work. Our licensed crew manages your project from day one through completion. One point of contact." },
                { t: 'Code First', b: "Everything we build is permitted and inspected. We don't cut corners that create liability for you — or for us." },
              ].map(p => (
                <div key={p.t} className="bg-panel rounded-xl p-6 border border-white/[0.055]">
                  <h3 className="font-display text-[20px] text-cream mb-3">{p.t}</h3>
                  <p className="text-[14px] text-cream/50 leading-relaxed">{p.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-panel border-t border-white/[0.05]">
          <div className="container text-center">
            <h2 className="font-display text-[clamp(28px,4vw,56px)] font-light leading-[1.0] tracking-tight text-cream mb-5">
              Ready to Start?<br /><span className="italic text-teal">We&apos;re Ready Too.</span>
            </h2>
            <p className="text-[15px] text-cream/50 max-w-md mx-auto mb-10">
              Free estimates. Response within 24 hours. NV #0085999 · CA #1093798.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 w-full sm:w-auto justify-center">Request a Free Quote →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-8 py-4 w-full sm:w-auto justify-center font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
