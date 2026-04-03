const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'General Contractor Reno NV | Licensed Since 1989',
  description:
    'BRE Builders is a licensed general contractor in Reno, NV. ADUs, repairs, kitchen & bath, additions, custom homes, commercial. NV License #0085999. Free estimates.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=General+Contractor+Reno+NV&sub=%231+ADU+Builder+%C2%B7+Page+1+Foundation+Repair+%C2%B7+Licensed+Since+1989&badge=Reno+NV`,
      width: 1200, height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'General Contractor Reno NV | BRE Builders — Licensed Since 1989',
    description: '#1 ADU Builder Reno · Page 1 Foundation Repair · Licensed NV #0085999. Free estimates.',
    images: [`${SITE_URL}/api/og?title=General+Contractor+Reno+NV&sub=%231+ADU+Builder+%C2%B7+Page+1+Foundation+Repair+%C2%B7+NV+%230085999&badge=Reno+NV`],
  },
  alternates: { canonical: `${SITE_URL}/service-areas/nevada/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://brebuilders.com/#business',
      name: 'Blue Reef Builders',
      image: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp',
      telephone: '+17753914517',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2600 Mill St #400',
        addressLocality: 'Reno',
        addressRegion: 'NV',
        postalCode: '89502',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 39.5296, longitude: -119.8138 },
      url: 'https://brebuilders.com',
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
      ],
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Nevada Contractor License #0085999' },
      sameAs: ['https://www.facebook.com/BlueReefBuilds', 'https://brebuilders.com'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is BRE Builders licensed in Reno Nevada?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders holds Nevada Contractor License #0085999 and has been licensed in Nevada since 1989. Bonded and insured.' },
        },
        {
          '@type': 'Question',
          name: 'What services does BRE Builders offer in Reno NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'In Reno, BRE Builders provides ADU construction, structural repairs, foundation repair, water intrusion repair, kitchen and bathroom remodeling, home additions, custom home building, deck construction and repair, commercial tenant improvements, concrete work, and hauling and demolition.' },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://brebuilders.com/service-areas/' },
        { '@type': 'ListItem', position: 3, name: 'Reno, NV', item: 'https://brebuilders.com/service-areas/nevada/' },
      ],
    },
,
    {
      '@type': 'WebPage',
      '@id': 'https://brebuilders.com/service-areas/nevada/',
      name: 'General Contractor Reno NV | BRE Builders',
      url: 'https://brebuilders.com/service-areas/nevada/',
      description: 'BRE Builders serves Reno, NV — #1 ADU builder, Page 1 foundation repair. Licensed NV #0085999. Free estimates.',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.speakable-summary', '.speakable-faq', 'h1'],
      },
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
  { q: 'Is BRE Builders licensed in Reno Nevada?', a: 'Yes. BRE Builders holds Nevada Contractor License #0085999 and has been licensed in Nevada since 1989. Fully bonded and insured.' },
  { q: 'What services does BRE Builders offer in Reno NV?', a: 'ADU construction, structural repairs, foundation repair, water intrusion, kitchen and bath remodeling, home additions, custom homes, deck construction and repair, commercial TI, concrete, and hauling.' },
  { q: 'How quickly does BRE Builders respond to inquiries in Reno?', a: 'We respond to all Reno inquiries within 24 hours. For structural emergencies, same-day response is available.' },
  { q: 'Does BRE Builders serve Sparks NV as well?', a: 'Yes. Sparks is part of our core service area. We have completed multiple projects in Sparks neighborhoods including decks, ADUs, and kitchen remodels.' },
]

const RENO_SERVICES = [
  { label: 'ADU Construction', href: '/adus/', note: '#1 Reno ranking', img: IMGS.adu_main, alt: 'ADU Construction Reno NV BRE Builders' },
  { label: 'Structural Repairs', href: '/repairs/', note: 'Page 1 ranking', img: IMGS.repairs_foundation, alt: 'Structural Repairs Reno NV BRE Builders' },
  { label: 'Foundation Repair', href: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/', note: 'Page 1 ranking', img: IMGS.repairs_rot, alt: 'Foundation Repair Reno NV BRE Builders' },
  { label: 'Kitchen & Bath', href: '/kitchen/', note: null, img: IMGS.svc_kitchen, alt: 'Kitchen Remodel Reno NV BRE Builders' },
  { label: 'Home Additions', href: '/additions/', note: null, img: IMGS.lt(4), alt: 'Home Additions Reno NV BRE Builders' },
  { label: 'Deck Builder', href: '/decks/', note: null, img: IMGS.deck_charolette, alt: 'Deck Builder Reno NV BRE Builders' },
  { label: 'Custom Home Building', href: '/new-home/', note: null, img: IMGS.ripon[3], alt: 'Custom Home Builder Reno NV BRE Builders' },
  { label: 'Commercial', href: '/commercial-services/', note: null, img: IMGS.svc_commercial, alt: 'Commercial Contractor Reno NV BRE Builders' },
]

export default function RenoPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* Hero */}
        {/* ── MOBILE HERO — compact image strip, content below fold ── */}
        <section className="md:hidden relative overflow-hidden">
          <div className="relative w-full" style={{ height: '42vw', minHeight: 155, maxHeight: 230 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.lt(1)} alt="BRE Builders licensed general contractor Reno NV" className="w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-void/5 to-void/85" />
          </div>
          <div className="bg-deep px-5 pt-5 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-teal">General Contractor · Reno, NV</span>
            </div>
            <h1 className="font-display font-light text-[clamp(28px,7.5vw,42px)] leading-[0.97] tracking-tight text-white mb-3">
              General Contractor<br />Reno, Nevada<br />
              <span className="italic text-teal">Licensed Since 1989.</span>
            </h1>
            <p className="text-[13px] leading-[1.65] text-white/60 mb-4">
              BRE Builders — ADU construction, structural repairs, kitchen &amp; bath, home additions. NV Lic #0085999.
            </p>
            <div className="flex gap-2.5">
              <a href={SITE.phoneHref} className="btn-primary flex-1 justify-center py-3.5 text-[14px]">📞 Call Now</a>
              <Link href="/contact" className="btn-ghost flex-1 justify-center py-3.5 text-[13px]">Get Quote</Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {['NV Lic #0085999', '35+ Years', 'Free Estimates'].map(b => (
                <span key={b} className="font-mono text-[9px] tracking-wider text-teal border border-teal/25 bg-teal/[0.06] px-2 py-1 rounded">✓ {b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESKTOP HERO — cinematic full bleed ── */}
        <section className="hidden md:relative md:block md:min-h-[65vh] lg:min-h-[72vh] md:flex md:flex-col md:justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.lt(1)} alt="BRE Builders completed project Reno NV general contractor" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent" />
          <div className="relative z-10 container">
            <div className="max-w-[600px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">General Contractor · Reno, NV</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,6vw,76px)] leading-[0.94] tracking-tight text-white mb-4">
                General Contractor<br />Reno, Nevada<br />
                <span className="italic text-teal">Licensed Since 1989.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-5 max-w-[480px]">
                BRE Builders is Reno&apos;s licensed general contractor for ADU construction, structural
                repairs, kitchen and bath remodeling, home additions, custom homes, and commercial
                construction. NV License #0085999.
              </p>
              <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-6">
                {['NV Lic #0085999', '35+ Years', 'Free Estimates', 'Response in 24h'].map(b => (
                  <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-2.5 py-1 rounded-md">✓ {b}</span>
                ))}
              </div>
              <div className="animate-fade-up-4">
                <div className="flex gap-3">
                  <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
                  <Link href="/adus/" className="btn-ghost">#1 ADU Builder Reno</Link>
                </div>
              </div>
            </div>
            <div className="flex gap-12 mt-10 pt-8 border-t border-white/10">
              {[{ n: '#1', l: 'ADU Ranking · Reno' }, { n: 'Page 1', l: 'Foundation Repair' }, { n: '35+', l: 'Years · Est. 1989' }].map(s => (
                <div key={s.l}>
                  <div className="font-display text-[clamp(20px,2.5vw,34px)] font-light text-white leading-none">{s.n}</div>
                  <div className="font-mono text-[10px] tracking-wider text-white/35 mt-1 uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services in Reno */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Services in Reno & Sparks" />
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              Every Service.<br /><span className="italic text-teal">One Licensed Contractor.</span>
            </h2>
            {/* Mobile carousel */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-3 scrollbar-none mb-6" style={{ scrollSnapType: 'x mandatory' }}>
              {RENO_SERVICES.map((s, i) => (
                <a key={s.label} href={s.href} className="flex-shrink-0 group" style={{ scrollSnapAlign: 'start', width: '70vw' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.alt} className="w-full h-44 object-cover rounded-xl mb-3" loading={i < 2 ? 'eager' : 'lazy'} />
                  <div className="font-display text-[17px] text-cream group-hover:text-teal transition-colors">{s.label}</div>
                  {s.note && <div className="font-mono text-[10px] text-teal/60 mt-0.5">{s.note}</div>}
                </a>
              ))}
            </div>
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-4 gap-4">
              {RENO_SERVICES.map((s, i) => (
                <a key={s.label} href={s.href} className="group card overflow-hidden">
                  <div className="relative h-36 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" loading={i < 4 ? 'eager' : 'lazy'} />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel/80 to-transparent" />
                    {s.note && (
                      <div className="absolute top-2 right-2 font-mono text-[9px] bg-teal text-void px-2 py-0.5 rounded tracking-wider">{s.note}</div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="font-display text-[15px] text-cream group-hover:text-teal transition-colors">{s.label}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* AEO content + FAQ */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="BRE Builders Serves Reno NV" />
                <h2 className="font-display text-[clamp(26px,3.5vw,46px)] font-light leading-[1.1] tracking-tight mb-6">
                  Reno&apos;s Most Trusted<br /><span className="italic text-teal">General Contractor.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    BRE Builders has provided residential and commercial construction services in Reno, Nevada
                    since 1989 — 35+ years of licensed, permitted work across every neighborhood and project type.
                  </p>
                  <p>
                    We are the highest-ranked ADU builder in Reno on Google (#1 for &ldquo;adu builders reno&rdquo; with a
                    Google AI Overview citation) and hold Page 1 rankings for foundation repair. Licensed NV #0085999.
                    Free estimates, same-day response for emergencies.
                  </p>
                  <p>
                    Our Reno service area includes all of Washoe County — Reno, Sparks, Incline Village, Sun Valley,
                    and surrounding communities.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-3">
                  <Link href="/adus/" className="btn-ghost text-[12px] py-2 px-4">ADU Builder Reno →</Link>
                  <Link href="/repairs/" className="btn-ghost text-[12px] py-2 px-4">Structural Repairs →</Link>
                  <Link href="/service-areas/lake-tahoe/" className="btn-ghost text-[12px] py-2 px-4">Lake Tahoe →</Link>
                </div>
              </div>
              <div>
                <SL text="Common Questions" />
                <div className="speakable-faq"><FAQAccordion items={FAQS} /></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream mb-2">Reno&apos;s Licensed Contractor Since 1989.</p>
              <p className="text-[14px] text-cream/50 mb-6">Free estimates. NV #0085999. Response within 24 hours.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mb-3">📞 {SITE.phone}</a>
              <Link href="/contact" className="btn-ghost w-full justify-center py-3 text-[13px]">Request a Free Quote Online</Link>
            </div>
          </div>
        </section>
        <section className="hidden md:block bg-void py-20">
          <div className="container text-center">
            <h2 className="font-display text-[clamp(32px,4.5vw,62px)] font-light leading-[1.0] tracking-tight text-cream mb-5">
              Reno&apos;s Contractor.<br /><span className="italic text-teal">Since 1989.</span>
            </h2>
            <p className="text-[15px] text-cream/50 mb-10">Free estimates · NV #0085999 · Response in 24 hours</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary px-10 py-4">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>

        {/* ── RELATED CONTENT PILLS ── */}
        <section className="py-10 bg-deep border-t border-white/[0.05]">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-teal flex-shrink-0" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Related Services & Guides</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/blog/how-to-add-an-adu-in-nevada" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">ADU Guide Nevada 2025 →</Link>
              <Link href="/blog/structural-repair-warning-signs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Top 10 Structural Warning Signs →</Link>
              <Link href="/blog/deck-safety-warning-signs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">8 Signs Your Deck Is Unsafe →</Link>
              <Link href="/blog/reno-home-repairs-20-year" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">20-Year Reno Home Repairs →</Link>
              <Link href="/blog/reno-kitchen-remodeling-trends" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Reno Kitchen Trends 2025 →</Link>
              <Link href="/blog/reno-redevelopment" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Reno's $1B Redevelopment →</Link>
            </div>
          </div>
        </section>

            <Footer />
    </>
  )
}
