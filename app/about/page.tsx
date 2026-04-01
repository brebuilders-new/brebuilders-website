import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE, TESTIMONIALS } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'About BRE Builders | Blue Reef Enterprises | Since 1989',
  description:
    'About Blue Reef Builders — licensed general contractor in Reno, NV since 1989. Steve Rosenthal, owner. NV #0085999 · CA #1009219. Residential and commercial.',
  alternates: { canonical: 'https://brebuilders.com/about/' },
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.lt(1)} alt="BRE Builders completed project Lake Tahoe full home renovation" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/60 to-void/25" />
          <div className="relative z-10 container">
            <div className="max-w-[560px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">About Blue Reef Builders</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-tight text-white mb-4">
                Licensed General<br />Contractor<br /><span className="italic text-teal">Since 1989.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70">
                Blue Reef Enterprises, LLC. Reno, NV. 35+ years of residential and commercial
                construction across Northern Nevada and California.
              </p>
            </div>
          </div>
        </section>

        {/* About body */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SL text="About BRE Builders" />
                <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-6">
                  Precision, Purpose,<br /><span className="italic text-teal">Integrity.</span>
                </h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-cream/55">
                  <p>
                    Blue Reef Enterprises, LLC is a licensed general contractor providing residential
                    remodeling, commercial improvements, custom home building, and addition work across
                    Northern Nevada and Northern California.
                  </p>
                  <p>
                    Our projects are managed with precision, clean execution, and strict code compliance
                    to ensure long-term reliability. We focus on clear communication, responsible planning,
                    and results that stay aligned with client expectations.
                  </p>
                  <p>
                    Every build — small or large — is completed with attention to detail and a commitment
                    to lasting quality. Steve Rosenthal, owner and founder, has led BRE Builders since 1989
                    with the same approach: do it right the first time.
                  </p>
                </div>

                {/* License block */}
                <div className="mt-8 bg-panel rounded-xl p-5 border border-gold/20 border-l-[3px] border-l-gold">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-gold mb-3">Licensing & Credentials</p>
                  <div className="space-y-2 text-[13px] text-cream/60">
                    <div className="flex items-center justify-between">
                      <span>Legal Name</span>
                      <span className="text-cream/80 font-mono text-[12px]">Blue Reef Enterprises, LLC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Nevada License</span>
                      <span className="text-teal font-mono text-[12px]">#0085999</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>California License</span>
                      <span className="text-teal font-mono text-[12px]">#1009219</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Founded</span>
                      <span className="text-cream/80 font-mono text-[12px]">1989</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Experience</span>
                      <span className="text-cream/80 font-mono text-[12px]">35+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Owner</span>
                      <span className="text-cream/80 font-mono text-[12px]">Steve Rosenthal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Values grid */}
              <div>
                <SL text="Our Commitment" />
                <h2 className="font-display text-[clamp(24px,3.5vw,44px)] font-light leading-[1.1] tracking-tight mb-8">
                  Quality, Value &<br /><span className="italic text-teal">Trust.</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { t: 'Exceptional Service', b: 'We go above and beyond to ensure every client is satisfied, offering prompt support, expert guidance, and a seamless experience from start to finish.' },
                    { t: 'Quality Focused', b: 'Our work speaks for itself — we use premium tools, follow best practices, and prioritize attention to detail to deliver lasting results.' },
                    { t: 'Competitive Pricing', b: 'We offer top-notch services at prices that respect your budget — no hidden fees, just honest value.' },
                    { t: 'Fair Warranty', b: '1-year workmanship warranty on all projects. Our commitment doesn\'t end after delivery.' },
                  ].map(v => (
                    <div key={v.t} className="bg-panel rounded-xl p-5 border border-white/[0.055] hover:border-teal/20 transition-colors">
                      <h3 className="font-display text-[15px] text-cream mb-2">{v.t}</h3>
                      <p className="text-[12px] text-cream/38 leading-relaxed">{v.b}</p>
                    </div>
                  ))}
                </div>

                {/* Service areas pills */}
                <div className="mt-6">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-cream/30 mb-3">Service Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Reno, NV', 'Sparks, NV', 'Lake Tahoe, NV', 'Carson City, NV', 'Truckee, CA', 'Graeagle, CA', 'Northern California'].map(a => (
                      <span key={a} className="text-[12px] text-cream/50 border border-white/[0.07] px-3 py-1 rounded-full">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <SL text="What Clients Say" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              Trusted by Homeowners
              <br /><span className="italic text-teal">Across Nevada & California.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="bg-deep rounded-xl p-6 border border-white/[0.055] relative">
                  <div className="font-display text-[48px] leading-none text-teal/18 absolute top-3 left-4 select-none">&ldquo;</div>
                  <p className="font-display text-[15px] italic text-cream/62 leading-relaxed pt-7 mb-4">{t.text}</p>
                  <div className="font-semibold text-[13px] text-cream">{t.name}</div>
                  <div className="font-mono text-[10px] text-cream/28 tracking-wider mt-0.5">{t.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-void">
          <div className="container text-center">
            <h2 className="font-display text-[clamp(30px,4.5vw,60px)] font-light leading-[1.0] tracking-tight text-cream mb-5">
              Work With a Contractor<br /><span className="italic text-teal">You Can Trust.</span>
            </h2>
            <p className="text-[15px] text-cream/50 max-w-md mx-auto mb-10">
              Free estimates · Licensed NV #0085999 · CA #1009219 · Since 1989
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
