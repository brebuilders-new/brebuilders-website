import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
const CANONICAL = 'https://brebuilders.com/service-areas/sparks/'

export const metadata: Metadata = {
  title: 'General Contractor Sparks NV | ADU · Repairs · Remodeling | BRE Builders',
  description: 'Licensed general contractor serving Sparks, NV since 1989. ADU construction from $75K, structural repairs, kitchen & bath remodeling, decks. NV Lic #0085999. Free estimates.',
  openGraph: {
    title: 'General Contractor Sparks NV | BRE Builders — Licensed Since 1989',
    description: 'BRE Builders serves Spanish Springs, South Meadows, Wingfield Springs, and all Sparks neighborhoods. ADUs, repairs, remodeling. NV #0085999.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: `${SITE_URL}/api/og?title=General+Contractor+Sparks+NV&sub=ADUs+%C2%B7+Repairs+%C2%B7+Licensed+Since+1989+%C2%B7+NV+%230085999&badge=Sparks+NV`, width: 1200, height: 630 }],
    siteName: 'BRE Builders',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'General Contractor Sparks NV | BRE Builders',
    description: 'Licensed contractor serving Sparks, NV. ADU construction, repairs, remodeling. NV #0085999. Free estimates.',
    images: [`${SITE_URL}/api/og?title=General+Contractor+Sparks+NV&sub=ADUs+%C2%B7+Repairs+%C2%B7+NV+%230085999&badge=Sparks+NV`],
  },
  alternates: { canonical: CANONICAL },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://brebuilders.com/#business',
      name: 'Blue Reef Builders',
      alternateName: 'BRE Builders',
      description: 'Licensed general contractor serving Sparks, NV. ADU construction, structural repairs, remodeling, additions, decks, and commercial construction since 1989.',
      telephone: '+17753914517',
      email: 'brebuilders@gmail.com',
      url: 'https://brebuilders.com',
      logo: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp',
      image: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp',
      foundingDate: '1989',
      priceRange: '$$',
      areaServed: [
        { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Spanish Springs, NV' },
        { '@type': 'Place', name: 'South Meadows, NV' },
        { '@type': 'Place', name: 'Wingfield Springs, NV' },
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Nevada Contractor License', credentialCategory2: '#0085999' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California Contractor License', credentialCategory2: '#1093798' },
      ],
      sameAs: [
        'https://www.facebook.com/BlueReefBuilds',
        'https://brebuilders.com',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/service-areas/sparks/#service',
      name: 'General Contractor Services — Sparks, NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Construction Services Sparks NV',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ADU Construction Sparks NV', description: 'Accessory dwelling units from $75,000. Full design-build, permit handling.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Repair Sparks NV', description: 'Foundation repair, dry rot removal, framing repair.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Remodeling Sparks NV', description: 'Full kitchen remodels and targeted upgrades.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deck Construction Sparks NV', description: 'Custom decks built for Northern Nevada wind and sun exposure.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Additions Sparks NV', description: 'Room additions, second stories, garage additions.' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does BRE Builders serve Sparks NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders actively serves all Sparks, NV neighborhoods including Spanish Springs, South Meadows, Wingfield Springs, Sun Valley, and downtown Sparks. Licensed NV #0085999. Free estimates on all projects.' },
        },
        {
          '@type': 'Question',
          name: 'What services are available in Sparks NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides ADU construction (from $75,000), structural repairs, foundation repair, deck construction, kitchen and bath remodeling, home additions, concrete work, hauling, and commercial tenant improvements in Sparks, NV. Free estimates. Licensed NV #0085999.' },
        },
        {
          '@type': 'Question',
          name: 'How much does an ADU cost in Sparks NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'ADU construction in Sparks, NV starts at $75,000 for studio units (400–600 sq ft). One-bedroom ADUs average $95,000–$115,000. Two-bedroom ADUs range $115,000–$300,000. BRE Builders handles all Washoe County and City of Sparks permits.' },
        },
        {
          '@type': 'Question',
          name: 'How long has BRE Builders served Sparks NV?',
          acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders has been operating in the Reno-Sparks metro since 1989 — over 35 years of residential and commercial construction in Sparks and Northern Nevada. NV License #0085999.' },
        },
        {
          '@type': 'Question',
          name: 'Does BRE Builders do commercial construction in Sparks?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders provides commercial tenant improvements, office build-outs, warehouse construction, and retail build-outs in Sparks commercial areas. Licensed NV #0085999 and CA #1093798.' },
        },
        {
          '@type': 'Question',
          name: 'What neighborhoods in Sparks does BRE Builders serve?',
          acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders serves all Sparks neighborhoods including Spanish Springs, South Meadows, Wingfield Springs, Sun Valley, downtown Sparks, and the eastern Sparks industrial and commercial corridor.' },
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      name: 'General Contractor Sparks NV | BRE Builders',
      url: CANONICAL,
      description: 'BRE Builders serves Sparks, NV — ADU construction, structural repairs, remodeling, commercial. Licensed NV #0085999. Free estimates.',
      isPartOf: { '@type': 'WebSite', url: 'https://brebuilders.com' },
      about: { '@id': 'https://brebuilders.com/#business' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.speakable-intro', '.speakable-services', '.speakable-faq', 'h1'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://brebuilders.com/service-areas/' },
        { '@type': 'ListItem', position: 3, name: 'Sparks, NV', item: CANONICAL },
      ],
    },
  ],
}

const FAQS = [
  { q: 'Does BRE Builders serve Sparks NV?', a: 'Yes. BRE Builders actively serves all Sparks, NV neighborhoods including Spanish Springs, South Meadows, Wingfield Springs, Sun Valley, and downtown Sparks. Licensed NV #0085999. Free estimates on all projects.' },
  { q: 'How much does an ADU cost in Sparks NV?', a: 'ADU construction in Sparks starts at $75,000 for studio units (400–600 sq ft). One-bedroom ADUs average $95,000–$115,000. Two-bedroom ADUs range $115,000–$300,000. BRE Builders handles all Washoe County and City of Sparks permits.' },
  { q: 'What services are available in Sparks NV?', a: 'ADU construction, structural repairs, foundation repair, deck construction, kitchen and bath remodeling, home additions, concrete work, hauling, and commercial tenant improvements. Free estimates. Licensed NV #0085999.' },
  { q: 'How long has BRE Builders served Sparks NV?', a: 'BRE Builders has been operating in the Reno-Sparks metro since 1989 — over 35 years of residential and commercial construction in Sparks and Northern Nevada.' },
  { q: 'Does BRE Builders do commercial construction in Sparks?', a: 'Yes. BRE Builders provides commercial tenant improvements, office build-outs, warehouse construction, and retail build-outs in Sparks. Licensed NV #0085999 · CA #1093798.' },
  { q: 'What neighborhoods in Sparks does BRE Builders serve?', a: 'Spanish Springs, South Meadows, Wingfield Springs, Sun Valley, downtown Sparks, and the eastern Sparks industrial and commercial corridor.' },
]

const SERVICES = [
  { label: 'ADU Construction', href: '/services/adu', desc: 'From $75K. Detached ADUs, garage conversions, in-law suites. Permit-ready in Sparks & Washoe County.' },
  { label: 'Structural Repairs', href: '/services/repairs', desc: 'Foundation repair, dry rot removal, framing repair — Sparks soil conditions understood.' },
  { label: 'Kitchen & Bath', href: '/services/kitchen-bath', desc: 'Full remodels and targeted upgrades in Sparks homes.' },
  { label: 'Deck Construction', href: '/services/decks', desc: 'Custom decks built for Northern Nevada wind and sun. Snow-load engineered.' },
  { label: 'Home Additions', href: '/services/additions', desc: 'Room additions, second stories, and garage additions.' },
  { label: 'Concrete Work', href: '/services/concrete', desc: 'Driveways, patios, foundation slabs. Engineered for Northern Nevada soils.' },
  { label: 'Commercial Construction', href: '/services/commercial', desc: 'Tenant improvements, office build-outs, warehouse construction.' },
  { label: 'Hauling & Removal', href: '/services/hauling', desc: 'Construction debris, demolition waste. Same-day available.' },
]

export default function SparksPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>

        {/* ── HERO ── */}
        {/* Mobile */}
        <section className="relative md:hidden overflow-hidden" style={{ minHeight: '100svh' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_commercial} alt="General Contractor Sparks NV — BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 30%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,10,15,0.15) 0%, rgba(5,10,15,0.55) 40%, rgba(5,10,15,0.92) 65%, rgba(5,10,15,1) 85%)' }} />
          <div className="relative z-10 flex flex-col justify-end px-5 pb-8 pt-28" style={{ minHeight: '100svh' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Sparks, NV · Licensed NV #0085999</span>
            </div>
            <h1 className="font-display font-light text-[clamp(34px,9vw,52px)] leading-[0.95] tracking-tight text-white mb-3">
              General Contractor<br /><span className="italic text-teal">Sparks, Nevada</span>
            </h1>
            <p className="speakable-intro text-[14px] leading-[1.6] text-white/65 mb-5 max-w-[340px]">
              BRE Builders has served Sparks, NV since 1989 — ADU construction, structural repairs, remodeling, and commercial. Licensed NV #0085999.
            </p>
            <div className="flex flex-col gap-2.5 mb-4">
              <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 py-4 bg-teal text-void text-[15px] font-bold rounded-xl">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call for a Free Quote
              </a>
              <Link href="/contact?location=sparks" className="w-full flex items-center justify-center py-3.5 border border-white/20 text-white text-[14px] font-mono rounded-xl bg-white/[0.04]">Request Quote Online →</Link>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
              <p className="font-mono text-[10px] text-white/35">NV Lic #0085999 · Since 1989</p>
              <div className="flex gap-4">
                {[{ n: '35+', l: 'Years' }, { n: 'Free', l: 'Estimates' }].map(s => (
                  <div key={s.l} className="text-right"><div className="font-display text-[16px] text-white leading-none">{s.n}</div><div className="font-mono text-[9px] text-white/30 uppercase mt-0.5">{s.l}</div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Desktop */}
        <section className="relative hidden md:flex flex-col justify-end pb-20 lg:pb-28 pt-32 overflow-hidden min-h-[82vh] lg:min-h-[88vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_commercial} alt="General Contractor Sparks NV — BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/96 via-void/60 to-void/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/40 to-transparent" />
          <div className="absolute top-0 left-0 w-1 h-full bg-teal/30" />
          <div className="relative z-10 container">
            <nav className="flex items-center gap-2 mb-7 font-mono text-[11px] text-white/30" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link><span>/</span>
              <Link href="/service-areas" className="hover:text-teal transition-colors">Service Areas</Link><span>/</span>
              <span className="text-white/55">Sparks, NV</span>
            </nav>
            <div className="animate-fade-up-1 flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Sparks, NV · Licensed Since 1989 · NV #0085999</span>
            </div>
            <h1 className="animate-fade-up-2 font-display font-light text-[clamp(48px,6.5vw,88px)] leading-[0.92] tracking-tight text-white mb-5">
              General Contractor<br /><span className="italic text-teal">Sparks, Nevada</span>
            </h1>
            <p className="speakable-intro animate-fade-up-3 text-[16px] leading-[1.8] text-white/65 mb-6 max-w-[580px]">
              BRE Builders has served Sparks, NV since 1989. ADU construction from $75,000, structural repairs, kitchen &amp; bath remodeling, deck construction, home additions, and commercial build-outs — all licensed under NV #0085999. Free estimates on all projects.
            </p>
            <div className="animate-fade-up-4 flex gap-3 flex-wrap items-center mb-6">
              <Link href="/contact?location=sparks" className="btn-primary px-8">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
            <div className="flex gap-12 pt-8 border-t border-white/10">
              {[{ n: '35+', l: 'Years in Sparks' }, { n: '$75K', l: 'ADU Starts At' }, { n: 'NV · CA', l: 'Licensed' }, { n: 'Free', l: 'Estimates' }].map(s => (
                <div key={s.l}><div className="font-display text-[clamp(22px,3vw,36px)] font-light text-white leading-none">{s.n}</div><div className="font-mono text-[10px] tracking-wider text-white/35 mt-1.5 uppercase">{s.l}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPEAKABLE INTRO STRIP ── */}
        <section className="py-6 bg-panel border-b border-white/[0.05]">
          <div className="container">
            <p className="speakable-services font-mono text-[11px] text-cream/50 leading-relaxed max-w-[900px]">
              BRE Builders serves Sparks, NV — <strong className="text-teal/80">ADU construction from $75,000</strong> · structural repairs · foundation repair · kitchen &amp; bath remodeling · deck construction · home additions · concrete work · hauling &amp; removal · commercial tenant improvements. Licensed NV #0085999 · CA #1093798 · Founded 1989.
            </p>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Services in Sparks, NV</span>
            </div>
            <h2 className="font-display font-light text-[clamp(26px,4vw,50px)] leading-tight text-cream mb-4">
              Everything You Need.<br /><span className="italic text-teal">One Local Contractor.</span>
            </h2>
            <p className="text-[15px] text-cream/55 leading-relaxed max-w-[600px] mb-10">
              BRE Builders provides the full range of residential and commercial construction in Sparks. Completed projects in Spanish Springs, South Meadows, Wingfield Springs, Sun Valley, and downtown Sparks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map(s => (
                <Link key={s.label} href={s.href} className="p-5 bg-panel rounded-2xl border border-white/[0.06] hover:border-teal/30 transition-colors group">
                  <h3 className="font-display text-[16px] text-cream mb-2 group-hover:text-teal transition-colors">{s.label}</h3>
                  <p className="text-[12px] text-cream/45 leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCAL EXPERTISE ── */}
        <section className="py-20 bg-void border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Local Sparks Expertise</span>
                </div>
                <h2 className="font-display font-light text-[clamp(24px,3.5vw,46px)] leading-tight text-cream mb-6">
                  35+ Years Serving<br /><span className="italic text-teal">The Reno-Sparks Metro.</span>
                </h2>
                <div className="space-y-4 text-[14px] text-cream/55 leading-relaxed">
                  <p>BRE Builders has been working in the greater Reno-Sparks metro since 1989. We know Sparks&apos; neighborhoods — the expansive clay soils in Spanish Springs that require careful foundation work, the HOA requirements in Wingfield Springs gated communities, the wind exposure in South Meadows that demands proper deck lateral bracing.</p>
                  <p>We don&apos;t subcontract the critical structural work. Foundation repair, framing, concrete, and waterproofing are handled in-house under Nevada Contractor License #0085999. One contractor, full accountability on every Sparks project.</p>
                  <p>ADU construction in Sparks follows Washoe County and City of Sparks regulations. BRE Builders handles all permit applications, engineering submissions, and inspection coordination so you don&apos;t have to navigate the process yourself.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-4">Sparks Neighborhoods We Serve</p>
                  {['Spanish Springs', 'South Meadows', 'Wingfield Springs', 'Sun Valley', 'Downtown Sparks', 'Pyramid Lake Corridor', 'Eastern Sparks Industrial', 'McCarran Industrial Area'].map(n => (
                    <div key={n} className="flex items-center gap-2.5 py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-teal text-[12px]">✓</span><span className="text-[13px] text-cream/60">{n}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-2">ADU Rental Income Potential — Sparks, NV</p>
                  <p className="text-[13px] text-cream/55 leading-relaxed">ADUs in Sparks earn $1,100–$1,800/month. Nevada requires 30-day minimum rental. A $75K–$150K ADU can fully pay for itself in 6–12 years on rental income alone. BRE Builders provides free ROI consultation on all ADU projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── AEO: Answer-first, question H2s, FAQPage schema above ── */}
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Sparks FAQ</span>
                </div>
                <h2 className="font-display font-light text-[clamp(24px,3.5vw,46px)] leading-tight text-cream mb-6">
                  Common Questions About<br /><span className="italic text-teal">BRE Builders in Sparks.</span>
                </h2>
                <p className="text-[14px] text-cream/50 leading-relaxed mb-6">
                  35+ years serving Sparks. Licensed NV #0085999. Free estimates on all projects. Response within 24 hours.
                </p>
                <Link href="/contact?location=sparks" className="btn-primary">Get a Free Estimate →</Link>
              </div>
              <div className="speakable-faq">
                <FAQAccordion items={FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-void">
          <div className="container text-center">
            <h2 className="font-display font-light text-[clamp(28px,4vw,56px)] text-cream mb-4">Start Your Sparks Project</h2>
            <p className="text-[15px] text-cream/50 mb-8 max-w-[500px] mx-auto">Free estimates. Licensed NV #0085999 · CA #1093798 · Since 1989. Response within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact?location=sparks" className="btn-primary">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
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
              <Link href="/services/adu" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">ADU Construction in Sparks →</Link>
              <Link href="/services/repairs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Structural Repairs Sparks →</Link>
              <Link href="/services/decks" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Deck Builder Sparks →</Link>
              <Link href="/blog/structural-repair-warning-signs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Top 10 Structural Warning Signs →</Link>
              <Link href="/blog/reno-home-repairs-20-year" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">20-Year Reno Home Repairs →</Link>
              <Link href="/service-areas/nevada/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Reno, NV Service Area →</Link>
            </div>
          </div>
        </section>

            <Footer />
    </>
  )
}
