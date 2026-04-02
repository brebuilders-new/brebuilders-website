import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Northern California Construction Services | CA Lic #1093798 | BRE Builders',
  description: 'Licensed contractor serving Northern California — custom homes, structural repairs, remodeling, commercial. Ripon estate completed. CA License #1093798. Free consultations.',
  openGraph: {
    title: 'Northern California Contractor | BRE Builders — CA Lic #1093798',
    description: 'BRE Builders serves Northern California for custom homes, structural repairs, remodeling, and commercial construction. Proven work in Ripon CA. CA #1093798 · NV #0085999.',
    url: 'https://brebuilders.com/service-areas/northern-california/',
    type: 'website',
    images: [{ url: `${SITE_URL}/api/og?title=Northern+California+Contractor&sub=Custom+Homes+%C2%B7+CA+Lic+%231093798+%C2%B7+Proven+Work+in+Ripon+CA&badge=Northern+CA`, width: 1200, height: 630 }],
    siteName: 'BRE Builders',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern California Contractor | BRE Builders',
    description: 'Custom homes, repairs, remodeling. CA #1093798. Proven work in Ripon CA.',
    images: [`${SITE_URL}/api/og?title=Northern+California+Contractor&sub=CA+Lic+%231093798+%C2%B7+Ripon+CA&badge=Northern+CA`],
  },
  alternates: { canonical: `${SITE_URL}/service-areas/northern-california/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://brebuilders.com/#business',
      name: 'Blue Reef Builders',
      alternateName: 'BRE Builders',
      description: 'Licensed contractor serving Northern California since 1989 — custom homes, structural repairs, remodeling, commercial construction. CA License #1093798 · NV License #0085999.',
      telephone: '+17753914517',
      url: 'https://brebuilders.com',
      foundingDate: '1989',
      areaServed: [
        { '@type': 'State', name: 'California' },
        { '@type': 'City', name: 'Ripon', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'City', name: 'Truckee', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'Place', name: 'Graeagle', containedInPlace: { '@type': 'State', name: 'California' } },
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California General Contractor License', credentialID: '1093798' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Nevada General Contractor License', credentialID: '0085999' },
      ],
      sameAs: ['https://www.facebook.com/BlueReefBuilds', 'https://brebuilders.com'],
    },
    {
      '@type': 'Service',
      name: 'Northern California Construction Services',
      description: 'BRE Builders provides custom home building, structural repairs, kitchen & bath remodeling, home additions, and commercial construction throughout Northern California. CA License #1093798.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'State', name: 'California' },
      serviceType: ['Custom Home Building', 'Structural Repairs', 'Kitchen Remodeling', 'Home Additions', 'Commercial Construction'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://brebuilders.com/service-areas/northern-california/#webpage',
      name: 'Northern California Construction Services | BRE Builders',
      url: 'https://brebuilders.com/service-areas/northern-california/',
      description: 'Licensed contractor serving Northern California. Custom homes, structural repairs, remodeling, commercial. CA #1093798. Proven work in Ripon CA.',
      isPartOf: { '@type': 'WebSite', url: 'https://brebuilders.com' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.speakable-intro', 'h1', '.speakable-services'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://brebuilders.com/service-areas/' },
        { '@type': 'ListItem', position: 3, name: 'Northern California', item: 'https://brebuilders.com/service-areas/northern-california/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is BRE Builders licensed in California?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders holds California General Contractor License #1093798 and Nevada Contractor License #0085999. Licensed and insured on both sides of the state line.' } },
        { '@type': 'Question', name: 'What areas of Northern California does BRE Builders serve?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders serves Northern California including Ripon, Modesto, Truckee, Graeagle, and the greater Central Valley to Sierra Nevada region. We have completed projects in Ripon (luxury estate ground-up build), Truckee, and Graeagle. CA License #1093798.' } },
        { '@type': 'Question', name: 'Has BRE Builders completed projects in California?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders completed a full ground-up luxury estate in Ripon, California — custom Mediterranean-style home with classical architecture, modern interior, and complete site development. CA License #1093798.' } },
        { '@type': 'Question', name: 'What types of construction does BRE Builders do in California?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides custom home construction, structural repairs, kitchen and bath remodeling, home additions, deck construction, and commercial construction in California. All work is performed under CA License #1093798.' } },
        { '@type': 'Question', name: 'How does BRE Builders handle California building permits?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders manages all California building permits in-house. For Ripon and Central Valley projects, permits go through San Joaquin County or the respective city building department. For Truckee, permits go through the Town of Truckee. For Graeagle, through Plumas County. We are familiar with all these jurisdictions.' } },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'BRE Builders Northern California Services',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Custom Home Building Northern California', url: 'https://brebuilders.com/new-home/' },
        { '@type': 'ListItem', position: 2, name: 'Structural Repairs Northern California', url: 'https://brebuilders.com/repairs/' },
        { '@type': 'ListItem', position: 3, name: 'Kitchen Remodeling Northern California', url: 'https://brebuilders.com/kitchen/' },
        { '@type': 'ListItem', position: 4, name: 'Contractor Truckee CA', url: 'https://brebuilders.com/service-areas/truckee/' },
        { '@type': 'ListItem', position: 5, name: 'Commercial Construction Northern California', url: 'https://brebuilders.com/commercial-services/' },
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
  { q: 'Is BRE Builders licensed in California?', a: 'Yes. BRE Builders holds California General Contractor License #1093798 and Nevada Contractor License #0085999. Licensed and insured on both sides of the state line.' },
  { q: 'What areas of Northern California does BRE Builders serve?', a: 'BRE Builders serves Northern California including Ripon, Modesto, Truckee, Graeagle, and the Central Valley to Sierra Nevada region. We have completed projects in Ripon (luxury estate), Truckee, and Graeagle. CA License #1093798.' },
  { q: 'Has BRE Builders completed projects in California?', a: 'Yes. BRE Builders completed a full ground-up luxury estate in Ripon, California — classical Mediterranean architecture, modern interior, and complete site development. CA License #1093798.' },
  { q: 'What construction services does BRE Builders offer in California?', a: 'Custom home construction, structural repairs, kitchen & bath remodeling, home additions, deck construction, and commercial construction. All work under CA License #1093798.' },
  { q: 'How does BRE Builders handle California building permits?', a: 'We manage all California building permits in-house. Central Valley projects go through San Joaquin County or city building departments. Truckee projects go through the Town of Truckee. Graeagle through Plumas County. We are familiar with all these jurisdictions.' },
]

export default function NorthernCaliforniaPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>

        {/* ── MOBILE HERO ── */}
        <section className="relative md:hidden overflow-hidden" style={{ minHeight: '100svh' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.ripon[0]} alt="BRE Builders Northern California luxury home construction Ripon CA" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 30%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,10,15,0.1) 0%, rgba(5,10,15,0.5) 40%, rgba(5,10,15,0.92) 65%, rgba(5,10,15,1) 85%)' }} />
          <div className="relative z-10 flex flex-col justify-end px-5 pb-8 pt-28" style={{ minHeight: '100svh' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Northern California · CA Lic #1093798</span>
            </div>
            <h1 className="font-display font-light text-[clamp(30px,9vw,48px)] leading-[0.95] tracking-tight text-white mb-3">
              Northern California<br /><span className="italic text-teal">Construction Services</span>
            </h1>
            <p className="speakable-intro text-[14px] leading-[1.65] text-white/65 mb-4 max-w-[340px]">
              Custom homes, structural repairs, remodeling, commercial construction. CA License #1093798. Ripon estate completed.
            </p>
            <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 mb-4">
              {['CA Lic #1093798', 'Ripon Estate Built', 'Custom Homes', 'Free Consultations'].map(b => (
                <span key={b} className="flex-shrink-0 font-mono text-[9px] tracking-wider text-teal border border-teal/30 bg-teal/[0.1] px-2.5 py-1.5 rounded-lg">✓ {b}</span>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 py-4 bg-teal text-void text-[15px] font-bold rounded-xl">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call for a Free Consultation
              </a>
              <Link href="/contact?location=northern-california" className="w-full flex items-center justify-center py-3.5 border border-white/20 text-white text-[14px] font-mono rounded-xl bg-white/[0.04]">
                Request Quote Online →
              </Link>
            </div>
          </div>
        </section>

        {/* ── DESKTOP HERO ── */}
        <section className="relative hidden md:flex flex-col justify-end pb-20 lg:pb-28 pt-32 overflow-hidden min-h-[82vh] lg:min-h-[88vh]">
          {/* Desktop: Ripon exterior — the proof */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.ripon[3]} alt="Luxury estate Ripon California BRE Builders custom home construction" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/96 via-void/55 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/40 to-transparent" />
          <div className="absolute top-0 left-0 w-1 h-full bg-teal/30" />
          <div className="relative z-10 container">
            <div className="animate-fade-up-1 flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Northern California · Licensed Since 1989</span>
              <span className="font-mono text-[10px] text-white/20">·</span>
              <span className="font-mono text-[10px] text-white/25">CA Lic #1093798</span>
            </div>
            <h1 className="animate-fade-up-2 font-display font-light text-[clamp(48px,6.5vw,88px)] leading-[0.93] tracking-tight text-white mb-5">
              Northern California<br /><span className="italic text-teal">Construction Services</span>
            </h1>
            <p className="speakable-intro animate-fade-up-3 text-[16px] leading-[1.8] text-white/65 mb-6 max-w-[560px]">
              BRE Builders holds California Contractor License #1093798 and serves Northern California for custom home construction, structural repairs, remodeling, home additions, and commercial work. Proven project: ground-up luxury estate in Ripon, CA. Free consultations.
            </p>
            <div className="animate-fade-up-3 flex flex-wrap gap-2 mb-7">
              {['CA Lic #1093798', 'Custom Home Builds', 'Ripon CA Estate', 'Truckee & Graeagle', 'Structural Repairs', 'Free Consultations'].map(b => (
                <span key={b} className="font-mono text-[10px] tracking-wider text-teal border border-teal/30 bg-teal/[0.08] px-3 py-1.5 rounded-lg">✓ {b}</span>
              ))}
            </div>
            <div className="animate-fade-up-4 flex gap-3 items-center">
              <Link href="/contact?location=northern-california" className="btn-primary px-8">Schedule a Free Consultation →</Link>
              <Link href="/projects/ripon-estate" className="btn-ghost">View Ripon Estate →</Link>
            </div>
          </div>
        </section>

        {/* ── RIPON ESTATE PROOF ── */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Signature Northern California Project" />
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display font-light text-[clamp(26px,4vw,50px)] leading-tight text-cream mb-5">
                  Ripon, CA Luxury Estate.<br /><span className="italic text-teal">Ground-Up. Built to Vision.</span>
                </h2>
                <div className="speakable-services space-y-4 text-[15px] text-cream/55 leading-relaxed">
                  <p>A complete ground-up luxury estate in Ripon, California — blending classical European architecture with modern amenities. Every column, arch, interior detail, and finish was designed, engineered, and built by the BRE Builders California licensed team. CA License #1093798.</p>
                  <p>The Ripon estate project demonstrates the full scope of BRE Builders&apos; California capability: custom home construction, high-end interior finishes, site development, and the full permit process through San Joaquin County. This is the same quality and the same team available for Northern California projects of any scale.</p>
                </div>
                <div className="mt-6 flex gap-3">
                  <Link href="/projects/ripon-estate" className="btn-primary">View Full Ripon Project →</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {IMGS.ripon.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt={`Ripon CA luxury estate photo ${i + 1} BRE Builders Northern California`}
                    className={`w-full object-cover rounded-xl ${i === 0 ? 'col-span-2 h-56' : 'h-40'}`}
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-20 lg:py-28 bg-void border-y border-white/[0.05]">
          <div className="container">
            <SL text="Services in Northern California" />
            <h2 className="font-display font-light text-[clamp(26px,4vw,52px)] leading-tight text-cream mb-8">
              Full-Scope Construction.<br /><span className="italic text-teal">California Licensed.</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Custom Home Building', href: '/services/new-home', desc: 'Ground-up custom homes in Northern California. Full design-build under CA License #1093798.', icon: '🏡' },
                { label: 'Structural Repairs', href: '/services/repairs', desc: 'Foundation repair, dry rot, water intrusion, framing. California residential and commercial.', icon: '🔧' },
                { label: 'Kitchen & Bath', href: '/services/kitchen-bath', desc: 'Full kitchen and bathroom remodels in Northern California homes.', icon: '🍳' },
                { label: 'Home Additions', href: '/services/additions', desc: 'Room additions, second stories, and garage additions in California.', icon: '🏗️' },
                { label: 'Contractor Truckee CA', href: '/service-areas/truckee', desc: 'Snow-load rated builds in Truckee and Graeagle. 5,820 ft mountain construction expertise.', icon: '❄️' },
                { label: 'ADU Construction', href: '/services/adu', desc: 'ADUs under California ADU law. CA permit handling for San Joaquin County and Truckee.', icon: '🏠' },
              ].map(s => (
                <Link key={s.label} href={s.href} className="p-5 bg-panel rounded-2xl border border-white/[0.06] hover:border-teal/30 transition-colors group">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="font-display text-[16px] text-cream mb-2 group-hover:text-teal transition-colors">{s.label}</h3>
                  <p className="text-[12px] text-cream/45 leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALIFORNIA COVERAGE ── */}
        <section className="py-20 lg:py-28 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="California Coverage Area" />
                <h2 className="font-display font-light text-[clamp(24px,3.5vw,46px)] leading-tight text-cream mb-6">
                  Central Valley to<br /><span className="italic text-teal">Sierra Nevada.</span>
                </h2>
                <div className="space-y-4 text-[14px] text-cream/55 leading-relaxed">
                  <p>BRE Builders holds California Contractor License #1093798 and serves the Northern California region extending from the Central Valley — Ripon, Modesto, Stockton — through the Sierra foothill communities and into the high mountain areas of Truckee and Graeagle.</p>
                  <p>Our Nevada base in Reno puts us at the geographic crossroads between these California markets. Ripon is approximately 2 hours from Reno via I-80. Truckee is 40 minutes from Reno. Graeagle is 90 minutes. We schedule efficiently to minimize travel on California projects.</p>
                  <p>California has different permit requirements, contractor licensing requirements, and building code amendments compared to Nevada. BRE Builders is familiar with California-specific requirements and manages all permit processes in-house under CA License #1093798.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-4">Northern California Areas We Serve</p>
                  {[
                    ['Ripon, CA', 'San Joaquin County — custom homes, commercial'],
                    ['Modesto, CA', 'Stanislaus County — residential and commercial'],
                    ['Truckee, CA', 'Nevada County — mountain construction, snow-load builds'],
                    ['Graeagle, CA', 'Plumas County — mountain community construction'],
                    ['Portola, CA', 'Plumas County — residential and commercial'],
                    ['Sierra Foothills', 'Placer / El Dorado Counties — custom homes, repairs'],
                  ].map(([place, note]) => (
                    <div key={place} className="flex gap-3 py-2.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-teal text-[12px] flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <span className="text-[13px] text-cream/70 font-medium">{place}</span>
                        <span className="text-[12px] text-cream/35 ml-2">{note}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-1">Dual-Licensed — Both States</p>
                  <p className="text-[13px] text-cream/55">CA License #1093798 · NV License #0085999. One contractor for projects on both sides of the state line.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="Northern California FAQ" />
                <h2 className="font-display font-light text-[clamp(24px,3.5vw,46px)] leading-tight text-cream mb-4">
                  California Construction<br /><span className="italic text-teal">Questions Answered.</span>
                </h2>
                <p className="text-[14px] text-cream/50 mb-6 max-w-[380px]">Questions from Northern California homeowners and property owners. CA #1093798 · NV #0085999.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact?location=northern-california" className="btn-primary">Schedule a Consultation →</Link>
                  <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
                </div>
              </div>
              <FAQAccordion items={FAQS} />
            </div>
          </div>
        </section>


        {/* ── RELATED CONTENT PILLS ── */}
        <section className="py-10 bg-deep border-t border-white/[0.05]">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-teal flex-shrink-0" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Related Services & Guides</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/projects/ripon-estate" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Ripon CA Estate Project →</Link>
              <Link href="/services/new-home" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Custom Home Building CA →</Link>
              <Link href="/services/repairs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Structural Repairs →</Link>
              <Link href="/blog/deck-safety-warning-signs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">8 Signs Your Deck Is Unsafe →</Link>
              <Link href="/service-areas/truckee/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Truckee, CA Service Area →</Link>
              <Link href="/service-areas/lake-tahoe/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Lake Tahoe Service Area →</Link>
            </div>
          </div>
        </section>

        {/* ── MOBILE CTA ── */}
        <section className="md:hidden bg-void py-12">
          <div className="container">
            <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-6">
              <p className="font-display text-[22px] text-cream mb-2">Northern California project?</p>
              <p className="text-[14px] text-cream/50 mb-6">CA #1093798 · NV #0085999 · Ripon estate completed. Free consultations.</p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 mb-3">📞 {SITE.phone}</a>
              <Link href="/contact?location=northern-california" className="btn-ghost w-full justify-center py-3 text-[13px]">Request a Quote Online</Link>
            </div>
          </div>
        </section>

        {/* ── DESKTOP CTA ── */}
        <section className="hidden md:block bg-void relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.ripon[3]} alt="Northern California luxury home BRE Builders" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-void/88" />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-[clamp(32px,4.5vw,62px)] font-light leading-[1.0] text-white mb-5">
              Northern California Project?<br /><span className="italic text-teal">We&apos;ve Proven It Here.</span>
            </h2>
            <p className="text-[15px] text-white/50 max-w-md mx-auto mb-10">CA #1093798 · NV #0085999 · Ripon estate completed · Free consultations</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact?location=northern-california" className="btn-primary px-10 py-4">Schedule a Free Consultation →</Link>
              <a href={SITE.phoneHref} className="btn-ghost px-10 py-4 font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
