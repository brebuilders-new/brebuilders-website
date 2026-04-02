import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
const CANONICAL = 'https://brebuilders.com/service-areas/carson-city/'

export const metadata: Metadata = {
  title: 'General Contractor Carson City NV | ADU · Repairs · Remodeling | BRE Builders',
  description: 'Licensed general contractor serving Carson City, NV since 1989. ADU construction, structural repairs, remodeling. 4,800 ft elevation expertise. NV Lic #0085999. Free estimates.',
  openGraph: {
    title: "General Contractor Carson City NV | BRE Builders — Nevada's Capital",
    description: "BRE Builders serves Carson City, NV — ADU construction, structural repairs, remodeling. Elevation-specific construction expertise. NV #0085999. Free estimates.",
    url: CANONICAL,
    type: 'website',
    images: [{ url: `${SITE_URL}/api/og?title=General+Contractor+Carson+City+NV&sub=ADUs+%C2%B7+Repairs+%C2%B7+NV+%230085999+%C2%B7+Since+1989&badge=Carson+City`, width: 1200, height: 630 }],
    siteName: 'BRE Builders',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'General Contractor Carson City NV | BRE Builders',
    description: 'Licensed contractor serving Carson City, NV. ADUs, repairs, remodeling. NV #0085999. Free estimates.',
    images: [`${SITE_URL}/api/og?title=General+Contractor+Carson+City+NV&sub=ADUs+%C2%B7+Repairs+%C2%B7+NV+%230085999&badge=Carson+City`],
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
      telephone: '+17753914517',
      email: 'brebuilders@gmail.com',
      url: 'https://brebuilders.com',
      foundingDate: '1989',
      areaServed: [
        { '@type': 'City', name: 'Carson City', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'South Carson City' },
        { '@type': 'Place', name: 'Minden, NV' },
        { '@type': 'Place', name: 'Gardnerville, NV' },
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Nevada Contractor License #0085999' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California Contractor License #1093798' },
      ],
      sameAs: ['https://www.facebook.com/BlueReefBuilds', 'https://brebuilders.com'],
    },
    {
      '@type': 'Service',
      name: 'General Contractor Services — Carson City, NV',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: { '@type': 'City', name: 'Carson City', containedInPlace: { '@type': 'State', name: 'Nevada' } },
      description: 'BRE Builders provides ADU construction, structural repairs, kitchen & bath remodeling, additions, decks, and commercial construction in Carson City, NV.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does BRE Builders serve Carson City NV?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders serves Carson City, NV for residential and commercial construction — ADU construction from $75,000, structural repairs, remodeling, additions, decks, and commercial work. Licensed NV #0085999. Free estimates.' } },
        { '@type': 'Question', name: 'Can BRE Builders build an ADU in Carson City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ADUs in Carson City are governed by the Carson City consolidated municipality. BRE Builders handles all Carson City building department permits, engineering, and construction for ADU projects from $75,000.' } },
        { '@type': 'Question', name: 'How far is Carson City from BRE Builders?', acceptedAnswer: { '@type': 'Answer', text: 'Carson City is approximately 30 miles south of Reno — about a 30-minute drive. BRE Builders regularly serves Carson City residential and commercial projects.' } },
        { '@type': 'Question', name: 'Does BRE Builders understand Carson City building codes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Carson City operates as a consolidated municipality — permits go through the Carson City building department directly. BRE Builders is familiar with the Carson City permit process and submits efficiently. Licensed NV #0085999.' } },
        { '@type': 'Question', name: 'What structural challenges exist in Carson City construction?', acceptedAnswer: { '@type': 'Answer', text: 'Carson City sits at 4,800 feet elevation — 800 feet higher than Reno — which means colder winters, deeper frost penetration, greater snow load requirements, and Sierra Nevada seismic considerations. BRE Builders designs for these conditions.' } },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      name: 'General Contractor Carson City NV | BRE Builders',
      url: CANONICAL,
      description: 'BRE Builders serves Carson City, NV — ADU construction, structural repairs, remodeling. Licensed NV #0085999.',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-intro', '.speakable-faq', 'h1'] },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://brebuilders.com/service-areas/' },
        { '@type': 'ListItem', position: 3, name: 'Carson City, NV', item: CANONICAL },
      ],
    },
  ],
}

const FAQS = [
  { q: 'Does BRE Builders serve Carson City NV?', a: 'Yes. BRE Builders serves Carson City for residential and commercial construction — ADU construction from $75,000, structural repairs, remodeling, additions, decks, and commercial work. Licensed NV #0085999. Free estimates.' },
  { q: 'Can BRE Builders build an ADU in Carson City?', a: 'Yes. ADUs in Carson City follow Carson City consolidated municipality regulations. BRE Builders handles all permits, engineering, and construction for ADU projects from $75,000. Response within 24 hours.' },
  { q: "How does Carson City's elevation affect construction?", a: 'Carson City sits at 4,800 feet elevation — colder winters, deeper frost penetration, greater snow load requirements for decks and roofs, and Sierra Nevada seismic considerations. BRE Builders designs specifically for these conditions.' },
  { q: 'Does BRE Builders know the Carson City building department?', a: 'Yes. Carson City operates as a consolidated municipality — permits go through the Carson City building department directly. BRE Builders is familiar with the process and submits permits efficiently. Licensed NV #0085999.' },
  { q: 'How far is Carson City from BRE Builders?', a: 'Carson City is approximately 30 miles south of Reno — about a 30-minute drive. BRE Builders regularly serves Carson City projects for residential and commercial work.' },
  { q: 'Do you serve Minden and Gardnerville from Carson City?', a: 'Yes. BRE Builders serves the greater Carson Valley area including Minden and Gardnerville — contact us to discuss project scope and travel for these locations. Licensed NV #0085999.' },
]

export default function CarsonCityPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>

        {/* Mobile Hero */}
        <section className="relative md:hidden overflow-hidden" style={{ minHeight: '100svh' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_repair} alt="General Contractor Carson City NV — BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,10,15,0.15) 0%, rgba(5,10,15,0.55) 40%, rgba(5,10,15,0.92) 65%, rgba(5,10,15,1) 85%)' }} />
          <div className="relative z-10 flex flex-col justify-end px-5 pb-8 pt-28" style={{ minHeight: '100svh' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Carson City, NV · NV #0085999</span>
            </div>
            <h1 className="font-display font-light text-[clamp(34px,9vw,52px)] leading-[0.95] tracking-tight text-white mb-3">
              General Contractor<br /><span className="italic text-teal">Carson City, NV</span>
            </h1>
            <p className="speakable-intro text-[14px] leading-[1.6] text-white/65 mb-5 max-w-[340px]">
              ADU construction, structural repairs, remodeling, and commercial work in Nevada&apos;s capital. Licensed NV #0085999.
            </p>
            <div className="flex flex-col gap-2.5 mb-4">
              <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 py-4 bg-teal text-void text-[15px] font-bold rounded-xl">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call for a Free Quote
              </a>
              <Link href="/contact?location=carson-city" className="w-full flex items-center justify-center py-3.5 border border-white/20 text-white text-[14px] font-mono rounded-xl bg-white/[0.04]">Request Quote Online →</Link>
            </div>
          </div>
        </section>

        {/* Desktop Hero */}
        <section className="relative hidden md:flex flex-col justify-end pb-20 lg:pb-28 pt-32 overflow-hidden min-h-[82vh] lg:min-h-[88vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_repair} alt="General Contractor Carson City NV — BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/96 via-void/60 to-void/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/40 to-transparent" />
          <div className="absolute top-0 left-0 w-1 h-full bg-teal/30" />
          <div className="relative z-10 container">
            <nav className="flex items-center gap-2 mb-7 font-mono text-[11px] text-white/30" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link><span>/</span>
              <Link href="/service-areas" className="hover:text-teal transition-colors">Service Areas</Link><span>/</span>
              <span className="text-white/55">Carson City, NV</span>
            </nav>
            <div className="animate-fade-up-1 flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Carson City, NV · 4,800 ft Elevation · NV #0085999</span>
            </div>
            <h1 className="animate-fade-up-2 font-display font-light text-[clamp(48px,6.5vw,88px)] leading-[0.92] tracking-tight text-white mb-5">
              General Contractor<br /><span className="italic text-teal">Carson City, Nevada</span>
            </h1>
            <p className="speakable-intro animate-fade-up-3 text-[16px] leading-[1.8] text-white/65 mb-6 max-w-[580px]">
              BRE Builders serves Nevada&apos;s capital for ADU construction from $75,000, structural repairs, remodeling, additions, and commercial work. Elevation-specific construction expertise at 4,800 feet. Licensed NV #0085999 · CA #1093798.
            </p>
            <div className="animate-fade-up-4 flex gap-3 flex-wrap items-center mb-6">
              <Link href="/contact?location=carson-city" className="btn-primary px-8">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
            <div className="flex gap-12 pt-8 border-t border-white/10">
              {[{ n: '35+', l: 'Years Exp.' }, { n: '4,800ft', l: 'Elevation' }, { n: 'NV · CA', l: 'Licensed' }, { n: 'Free', l: 'Estimates' }].map(s => (
                <div key={s.l}><div className="font-display text-[clamp(22px,3vw,36px)] font-light text-white leading-none">{s.n}</div><div className="font-mono text-[10px] tracking-wider text-white/35 mt-1.5 uppercase">{s.l}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Services in Carson City, NV</span>
            </div>
            <h2 className="font-display font-light text-[clamp(26px,4vw,50px)] leading-tight text-cream mb-4">
              Full-Service Construction<br /><span className="italic text-teal">in Nevada&apos;s Capital.</span>
            </h2>
            <div className="speakable-intro max-w-[680px] mb-10 space-y-3 text-[15px] text-cream/55 leading-relaxed">
              <p>BRE Builders serves Carson City as part of our core Northern Nevada service area. We deliver the same licensed, in-house construction scope that we provide in Reno — 30 miles north. Carson City&apos;s consolidated municipality structure means building permits go directly through the Carson City building department. BRE Builders is familiar with this process and navigates it efficiently.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'ADU Construction', href: '/services/adu', desc: 'From $75K. Detached ADUs permitted through Carson City consolidated municipality.' },
                { label: 'Structural Repairs', href: '/services/repairs', desc: 'Foundation repair, dry rot, framing — 4,800ft elevation soil and frost conditions.' },
                { label: 'Kitchen & Bath', href: '/services/kitchen-bath', desc: 'Full kitchen and bathroom remodels in Carson City homes.' },
                { label: 'Home Additions', href: '/services/additions', desc: 'Bedroom additions, second stories, and garage additions.' },
                { label: 'Deck Construction', href: '/services/decks', desc: 'Snow-load rated decks for Carson City&apos;s elevation and freeze cycles.' },
                { label: 'Commercial Construction', href: '/services/commercial', desc: 'Tenant improvements, office build-outs, and commercial renovations.' },
              ].map(s => (
                <Link key={s.label} href={s.href} className="p-5 bg-panel rounded-2xl border border-white/[0.06] hover:border-teal/30 transition-colors group">
                  <h3 className="font-display text-[16px] text-cream mb-2 group-hover:text-teal transition-colors">{s.label}</h3>
                  <p className="text-[12px] text-cream/45 leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Elevation context */}
        <section className="py-20 bg-void border-y border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Elevation-Specific Expertise</span>
                </div>
                <h2 className="font-display font-light text-[clamp(24px,3.5vw,46px)] leading-tight text-cream mb-6">
                  Nevada&apos;s Capital<br /><span className="italic text-teal">Built Different.</span>
                </h2>
                <div className="space-y-4 text-[14px] text-cream/55 leading-relaxed">
                  <p>Carson City sits at 4,800 feet elevation — 800 feet higher than Reno. This means colder winters with deeper frost penetration, greater snow load requirements for decks and roofs, and proximity to Sierra Nevada fault lines that create seismic considerations. BRE Builders designs for these elevation-specific conditions on every Carson City project.</p>
                  <p>Carson City has grown significantly with state government employment and tech industry migration from California. New residential developments are active throughout the city — from South Carson near the airport to established neighborhoods near the Capitol. BRE Builders has worked in these conditions for decades.</p>
                  <p>We pull all permits directly through the Carson City Building Department, manage all inspections, and deliver a clean Certificate of Occupancy. One point of contact for the full project. Licensed NV #0085999.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-panel rounded-2xl p-6 border border-white/[0.06]">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-4">Carson City Areas We Serve</p>
                  {['South Carson City', 'East Carson City', 'Warm Springs Road Corridor', 'Westside neighborhoods', 'Carson City Airport area', 'Near Nevada Capitol', 'Minden / Gardnerville (nearby)', 'Dayton, NV (nearby)'].map(n => (
                    <div key={n} className="flex items-center gap-2.5 py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-teal text-[12px]">✓</span><span className="text-[13px] text-cream/60">{n}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-teal/[0.06] border border-teal/20 rounded-2xl p-5">
                  <p className="font-mono text-[11px] text-teal mb-1">Carson City Permit Process</p>
                  <p className="text-[13px] text-cream/55 leading-relaxed">Carson City is a consolidated municipality — building permits go directly through Carson City Building Department, not a county. BRE Builders navigates this process efficiently. Licensed NV #0085999.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-deep">
          <div className="container max-w-[800px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Carson City FAQ</span>
            </div>
            <h2 className="font-display font-light text-[clamp(24px,3.5vw,46px)] text-cream mb-8">Common Questions</h2>
            <div className="speakable-faq"><FAQAccordion items={FAQS} /></div>
          </div>
        </section>

        <section className="py-20 bg-void">
          <div className="container text-center">
            <h2 className="font-display font-light text-[clamp(28px,4vw,56px)] text-cream mb-4">Start Your Carson City Project</h2>
            <p className="text-[15px] text-cream/50 mb-8 max-w-[500px] mx-auto">Free estimates. Licensed NV #0085999 · CA #1093798 · Since 1989. Response within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact?location=carson-city" className="btn-primary">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
