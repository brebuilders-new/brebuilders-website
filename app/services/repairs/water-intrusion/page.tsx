import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Water Intrusion Repair Reno NV | Free Evaluation',
  description:
    'Water intrusion and moisture repair in Reno, NV. Basement, crawl space, foundation water damage. Licensed NV #0085999. Free evaluation.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Water+Intrusion+Repair+Reno+NV&sub=Free+Evaluation+%C2%B7+Licensed+Since+1989+%C2%B7+NV+%230085999&badge=Water+Intrusion`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Water Intrusion Repair Reno NV | Free Evaluation', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Intrusion Repair Reno NV | Free Evaluation',
    description: 'Water intrusion and moisture repair in Reno, NV. Basement, crawl space, foundation water damage. Licensed NV #0085999. Free evaluation.',
    images: [{ url: `${SITE_URL}/api/og?title=Water+Intrusion+Repair+Reno+NV&sub=Free+Evaluation+%C2%B7+Licensed+Since+1989+%C2%B7+NV+%230085999&badge=Water+Intrusion`, alt: 'Blue Reef Builders — Water Intrusion Repair Reno NV | Free Evaluation' }],
  },
  alternates: { canonical: `${SITE_URL}/repairs/water-intrusion-and-moisture-issues-in-reno-nv/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/repairs/water-intrusion-and-moisture-issues-in-reno-nv/#service',
      name: 'Water Intrusion Repair Reno NV',
      description: 'Water intrusion diagnosis, moisture barriers, drainage correction in Reno, NV. Basement, crawl space, foundation drainage. Licensed NV #0085999. Free evaluation.',
      provider: { '@id': 'https://brebuilders.com/#business' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are signs of water intrusion in a Reno home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Signs include: water stains on basement or crawl space walls, musty odor, efflorescence (white powder) on concrete walls, visible mold or mildew, damp or soft drywall, standing water, and soft or spongy flooring near the foundation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How urgent is water intrusion in a home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Water intrusion urgency depends on severity. Active flooding is an emergency. Ongoing moisture with mold risk is urgent (within days). Slow infiltration should be addressed within weeks. Untreated water intrusion worsens over time and can cause structural damage.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Repairs', item: 'https://brebuilders.com/repairs/' },
        { '@type': 'ListItem', position: 3, name: 'Water Intrusion', item: 'https://brebuilders.com/repairs/water-intrusion-and-moisture-issues-in-reno-nv/' },
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
  { q: 'What are signs of water intrusion in a Reno home?', a: 'Signs include: water stains on basement or crawl space walls, musty odor, efflorescence (white powder) on concrete, visible mold, damp or soft drywall, standing water, and soft flooring near the foundation.' },
  { q: 'How urgent is water intrusion?', a: 'Active flooding is an emergency. Ongoing moisture with mold risk is urgent (address within days). Slow infiltration should be addressed within weeks. Untreated water intrusion causes structural damage over time.' },
  { q: 'What causes water intrusion in Reno homes?', a: 'Common causes: failed waterproofing membrane, poor grading directing water toward foundation, clogged gutters, irrigation runoff, cracked foundation walls, and deteriorated window wells.' },
  { q: 'Does BRE Builders handle mold-related repairs?', a: 'BRE Builders handles the structural and waterproofing aspects of water intrusion. We coordinate with licensed mold remediation contractors where needed and ensure the moisture source is resolved before any restoration work begins.' },
]

const URGENCY = [
  { level: 'Emergency', label: 'Active water / flooding', action: 'Call now', color: 'text-red-400' },
  { level: 'Urgent', label: 'Visible mold or standing water', action: 'Same-week inspection', color: 'text-orange-400' },
  { level: 'Soon', label: 'Persistent damp, odor, stains', action: 'Schedule within 2 weeks', color: 'text-yellow-400' },
  { level: 'Planning', label: 'Minor seepage, monitoring', action: 'Free evaluation at your pace', color: 'text-teal' },
]

export default function WaterIntrusionPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main data-theme="repairs">
        {/* ── MOBILE HERO — compact, content above fold ── */}
        <section className="md:hidden relative overflow-hidden">
          <div className="relative w-full" style={{ height: '42vw', minHeight: 150, maxHeight: 220 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.repairs_water} alt="Water Intrusion Moisture Damage Inspection Reno Nevada BRE Builders" className="w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 35%' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-void/5 to-void/85" />
          </div>
          <div className="bg-deep px-5 pt-5 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-teal">Water Intrusion & Moisture · Reno NV</span>
            </div>
            <h1 className="font-display font-light text-[clamp(27px,7.5vw,40px)] leading-[1.0] tracking-tight text-white mb-3">
              Water Intrusion
                <br />and Moisture Issues
                <br /><span className="italic text-teal">in Reno, NV</span>
            </h1>
            <p className="text-[13px] leading-[1.65] text-white/60 mb-4">
              Water intrusion, moisture damage, and drainage issues. BRE Builders diagnoses the source,
                repairs the damage, and waterproofs against recurrence. Licensed NV #0085999.
            </p>
            <div className="flex gap-2.5">
              <a href="tel:7753914517" className="btn-primary flex-1 justify-center py-3.5 text-[14px]">📞 Call Now</a>
              <a href="/contact" className="btn-ghost flex-1 justify-center py-3.5 text-[13px]">Get Quote</a>
            </div>
          </div>
        </section>

        <section className="hidden md:relative md:block md:flex min-h-[68vh] lg:min-h-[75vh] md:flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.repairs_water} alt="Water Intrusion Moisture Damage Inspection Reno Nevada BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/93 via-void/60 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[580px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Water Intrusion & Moisture · Reno NV</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(34px,5.5vw,70px)] leading-[0.95] tracking-tight text-white mb-4">
                Water Intrusion
                <br />and Moisture Issues
                <br /><span className="italic text-teal">in Reno, NV</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[470px]">
                Water intrusion, moisture damage, and drainage issues. BRE Builders diagnoses the source,
                repairs the damage, and waterproofs against recurrence. Licensed NV #0085999.
              </p>
              <div className="animate-fade-up-4">
                <div className="md:hidden flex gap-3 mb-5">
                  <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center">📞 Emergency Call</a>
                  <Link href="/contact?service=water-intrusion" className="btn-ghost flex-1 justify-center">Request Inspection</Link>
                </div>
                <div className="hidden md:flex gap-3 mb-5">
                  <Link href="/contact?service=water-intrusion" className="btn-primary">Request Free Water Intrusion Evaluation →</Link>
                  <Link href="/services/repairs/" className="btn-ghost">All Repairs</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency levels */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="How Urgent Is Your Situation?" />
            <h2 className="font-display text-[clamp(26px,3.5vw,50px)] font-light leading-[1.1] tracking-tight mb-10">
              Water Intrusion Urgency Guide.
            </h2>
            <div className="grid md:grid-cols-4 gap-4 mb-10">
              {URGENCY.map((u) => (
                <div key={u.level} className="bg-panel rounded-xl p-5 border border-white/[0.055]">
                  <div className={`font-mono text-[12px] tracking-wider uppercase mb-2 ${u.color}`}>{u.level}</div>
                  <p className="text-[14px] text-cream mb-2 font-display">{u.label}</p>
                  <p className="font-mono text-[11px] text-cream/40">{u.action}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone} — Emergency Line</a>
              <Link href="/contact?service=water-intrusion" className="btn-ghost">Schedule Non-Emergency Inspection</Link>
            </div>
          </div>
        </section>

        {/* FAQ + AEO */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Water Intrusion in Reno" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  Fix the Source.<br /><span className="italic text-teal">Stop the Damage.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    Water intrusion in Reno homes often starts small — a damp smell, a stain on the wall —
                    and grows into a structural problem. BRE Builders diagnoses the exact source and
                    repairs it permanently.
                  </p>
                  <p>
                    We handle waterproofing membranes, drainage correction, crack injection, sump systems,
                    crawl space encapsulation, and the structural damage that water causes over time.
                    Licensed NV #0085999. Free evaluation.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/services/repairs/foundation-repair-and-foundation-issues-in-reno-nv/" className="btn-ghost text-[12px] py-2 px-4">Foundation Repair →</Link>
                  <Link href="/services/repairs/" className="btn-ghost text-[12px] py-2 px-4">All Structural Repairs →</Link>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <FAQAccordion items={FAQS} />
              </div>
            </div>
          </div>
        </section>

        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-blue-950/20 border border-blue-900/30 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream leading-snug mb-2">Don&apos;t let moisture become structural damage.</p>
              <p className="text-[14px] text-cream/50 mb-6">Free evaluation. Response within 24 hours. NV #0085999.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-[15px] mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?service=water-intrusion" className="btn-ghost w-full justify-center py-3 text-[13px]">Request Evaluation Online</Link>
            </div>
          </div>
        </section>

        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.repairs_foundation} alt="Foundation Water Damage Repair Reno NV" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/92" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(36px,5vw,68px)] font-light leading-[1.0] tracking-tight text-white mb-5">
              Fix the Source.<br /><span className="italic text-teal">Stop the Damage.</span>
            </h2>
            <p className="text-[16px] text-white/90 max-w-md mx-auto mb-10">Free evaluation · NV #0085999 · Response within 24 hours</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?service=water-intrusion" className="btn-primary px-10 py-4 text-[14px]">Request Free Evaluation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 text-[14px] font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
