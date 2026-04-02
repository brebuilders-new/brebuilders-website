import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
const CANONICAL = 'https://brebuilders.com/service-areas/truckee/'

export const metadata: Metadata = {
  title: 'Contractor Truckee CA & Graeagle | Snow-Load Rated Builds | CA Lic #1093798',
  description: 'BRE Builders serves Truckee CA and Graeagle — custom homes, snow-load rated decks, structural repair, remodeling. 200+ inches annual snow. CA Lic #1093798. Free estimates.',
  openGraph: {
    title: 'Contractor Truckee CA & Graeagle | Snow-Load Builds | CA Lic #1093798',
    description: 'Mountain construction expertise. Custom homes, decks engineered for 200+ inch snowfall, structural repairs, vacation home remodeling. CA #1093798.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: `${SITE_URL}/api/og?title=Contractor+Truckee+CA+%26+Graeagle&sub=Snow-Load+Rated+%C2%B7+Custom+Homes+%C2%B7+CA+%231093798&badge=Truckee+CA`, width: 1200, height: 630 }],
    siteName: 'BRE Builders',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Truckee CA & Graeagle | BRE Builders',
    description: 'Mountain construction — snow-load rated decks, custom homes, structural repair. CA #1093798. Free estimates.',
    images: [`${SITE_URL}/api/og?title=Contractor+Truckee+CA&sub=Snow-Load+%C2%B7+Custom+Homes+%C2%B7+CA+%231093798&badge=Truckee+CA`],
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
        { '@type': 'City', name: 'Truckee', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'Place', name: 'Graeagle', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'Place', name: 'Tahoe Donner, CA' },
        { '@type': 'Place', name: 'Northstar California' },
        { '@type': 'Place', name: 'Plumas County, CA' },
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California Contractor License #1093798' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Nevada Contractor License #0085999' },
      ],
      sameAs: ['https://www.facebook.com/BlueReefBuilds', 'https://brebuilders.com'],
    },
    {
      '@type': 'Service',
      name: 'General Contractor Services — Truckee CA & Graeagle',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Truckee', containedInPlace: { '@type': 'State', name: 'California' } },
        { '@type': 'Place', name: 'Graeagle', containedInPlace: { '@type': 'State', name: 'California' } },
      ],
      description: 'Mountain community construction — custom homes, snow-load rated decks, structural repairs, vacation home remodeling. CA License #1093798.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is BRE Builders licensed in California for Truckee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders holds California Contractor License #1093798 and Nevada Contractor License #0085999 — licensed on both sides of the state line. We serve Truckee, Graeagle, and all Tahoe-Truckee mountain communities.' } },
        { '@type': 'Question', name: 'Does BRE Builders build snow-load rated decks in Truckee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All deck construction in Truckee and the Tahoe-Truckee region is engineered for high snow loads. Truckee receives over 200 inches of snow annually — decks must be designed for this. BRE Builders builds to Truckee\'s specific structural requirements.' } },
        { '@type': 'Question', name: 'Do you serve Graeagle and Plumas County CA?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders serves Graeagle, Portola, and the Plumas County area. We have completed projects in this mountain community. CA License #1093798.' } },
        { '@type': 'Question', name: 'Do you remodel vacation homes in Truckee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders remodels vacation and second homes in Truckee, Tahoe Donner, Northstar, and surrounding mountain communities. We coordinate work during shoulder seasons to minimize owner disruption. CA #1093798.' } },
        { '@type': 'Question', name: 'What permits are required for construction in Truckee CA?', acceptedAnswer: { '@type': 'Answer', text: 'Truckee is incorporated as a town within Nevada County, CA. Most construction requires Town of Truckee building permits. BRE Builders handles the Truckee permit process and is experienced with Nevada County requirements. CA #1093798.' } },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      name: 'Contractor Truckee CA & Graeagle | BRE Builders',
      url: CANONICAL,
      description: 'BRE Builders serves Truckee CA and Graeagle — mountain construction expertise. CA License #1093798.',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-intro', '.speakable-faq', 'h1'] },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://brebuilders.com/service-areas/' },
        { '@type': 'ListItem', position: 3, name: 'Truckee, CA & Graeagle', item: CANONICAL },
      ],
    },
  ],
}

const FAQS = [
  { q: 'Is BRE Builders licensed in California for Truckee construction?', a: 'Yes. BRE Builders holds California Contractor License #1093798 and Nevada Contractor License #0085999 — licensed on both sides of the state line. We serve Truckee, Graeagle, and all Tahoe-Truckee mountain communities.' },
  { q: 'Does BRE Builders build snow-load rated decks in Truckee?', a: 'Yes. All deck construction in Truckee is engineered for high snow loads. Truckee receives over 200 inches of snow annually — decks must be structurally designed for this. BRE Builders builds to Town of Truckee snow load requirements.' },
  { q: 'Do you serve Graeagle and Plumas County CA?', a: 'Yes. BRE Builders serves Graeagle, Portola, and the Plumas County area. We have completed projects in this mountain community. California License #1093798.' },
  { q: 'Do you remodel vacation homes in Truckee?', a: 'Yes. BRE Builders remodels vacation and second homes in Truckee, Tahoe Donner, Northstar, and surrounding mountain communities. We schedule work during shoulder seasons to minimize disruption for out-of-area owners.' },
  { q: 'What permits are required for Truckee CA construction?', a: 'Truckee is incorporated within Nevada County, CA. Most construction requires Town of Truckee building permits and in some cases Nevada County approvals. BRE Builders handles the full permit process. CA #1093798.' },
  { q: 'How deep are frost footings in Truckee CA?', a: 'Truckee sits at 5,820 feet elevation. Frost depth in this area requires footings to a depth that exceeds standard California requirements — BRE Builders designs all foundations to Truckee-specific frost penetration depths per local code.' },
]

export default function TruckeePage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>

        {/* Mobile Hero */}
        <section className="relative md:hidden overflow-hidden" style={{ minHeight: '100svh' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_deck} alt="Contractor Truckee CA and Graeagle — BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,10,15,0.15) 0%, rgba(5,10,15,0.55) 40%, rgba(5,10,15,0.92) 65%, rgba(5,10,15,1) 85%)' }} />
          <div className="relative z-10 flex flex-col justify-end px-5 pb-8 pt-28" style={{ minHeight: '100svh' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Truckee CA & Graeagle · CA #1093798</span>
            </div>
            <h1 className="font-display font-light text-[clamp(34px,9vw,52px)] leading-[0.95] tracking-tight text-white mb-3">
              Contractor<br /><span className="italic text-teal">Truckee CA & Graeagle</span>
            </h1>
            <p className="speakable-intro text-[14px] leading-[1.6] text-white/65 mb-5 max-w-[340px]">
              Mountain construction expertise — snow-load rated decks, custom homes, structural repair. CA License #1093798 · NV #0085999.
            </p>
            <div className="flex flex-col gap-2.5 mb-4">
              <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 py-4 bg-teal text-void text-[15px] font-bold rounded-xl">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call for a Free Quote
              </a>
              <Link href="/contact?location=truckee" className="w-full flex items-center justify-center py-3.5 border border-white/20 text-white text-[14px] font-mono rounded-xl bg-white/[0.04]">Request Quote Online →</Link>
            </div>
          </div>
        </section>

        {/* Desktop Hero */}
        <section className="relative hidden md:flex flex-col justify-end pb-20 lg:pb-28 pt-32 overflow-hidden min-h-[82vh] lg:min-h-[88vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_deck} alt="Contractor Truckee CA and Graeagle — BRE Builders" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/96 via-void/60 to-void/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/40 to-transparent" />
          <div className="absolute top-0 left-0 w-1 h-full bg-teal/30" />
          <div className="relative z-10 container">
            <nav className="flex items-center gap-2 mb-7 font-mono text-[11px] text-white/30" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link><span>/</span>
              <Link href="/service-areas" className="hover:text-teal transition-colors">Service Areas</Link><span>/</span>
              <span className="text-white/55">Truckee CA & Graeagle</span>
            </nav>
            <div className="animate-fade-up-1 flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-teal" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Mountain Construction · CA Lic #1093798 · NV #0085999</span>
            </div>
            <h1 className="animate-fade-up-2 font-display font-light text-[clamp(48px,6.5vw,88px)] leading-[0.92] tracking-tight text-white mb-5">
              Contractor<br /><span className="italic text-teal">Truckee CA & Graeagle</span>
            </h1>
            <p className="speakable-intro animate-fade-up-3 text-[16px] leading-[1.8] text-white/65 mb-6 max-w-[580px]">
              Mountain community construction expertise — custom homes, snow-load rated decks engineered for 200+ inches of annual snowfall, structural repairs, vacation home remodeling. Licensed CA #1093798 · NV #0085999.
            </p>
            <div className="animate-fade-up-4 flex gap-3 flex-wrap items-center mb-6">
              <Link href="/contact?location=truckee" className="btn-primary px-8">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
            <div className="flex gap-12 pt-8 border-t border-white/10">
              {[{ n: '200"', l: 'Annual Snow' }, { n: '5,820ft', l: 'Elevation' }, { n: 'CA · NV', l: 'Licensed' }, { n: 'Free', l: 'Estimates' }].map(s => (
                <div key={s.l}><div className="font-display text-[clamp(22px,3vw,36px)] font-light text-white leading-none">{s.n}</div><div className="font-mono text-[10px] tracking-wider text-white/35 mt-1.5 uppercase">{s.l}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* Mountain expertise */}
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Mountain Construction Expertise</span>
            </div>
            <h2 className="font-display font-light text-[clamp(26px,4vw,50px)] leading-tight text-cream mb-4">
              Built for Snow, Cold,<br /><span className="italic text-teal">and Mountain Conditions.</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="speakable-intro space-y-4 text-[15px] text-cream/55 leading-relaxed">
                <p>Truckee receives over 200 inches of snow annually at 5,820 feet elevation. Every deck, structure, and addition here must account for extreme snow loads, freeze-thaw cycles, and the building codes the Town of Truckee enforces for mountain environments. Standard construction specs don&apos;t apply.</p>
                <p>BRE Builders holds California Contractor License #1093798 and has the mountain construction experience that Truckee, Tahoe Donner, Northstar, and Graeagle projects demand. Deck framing is sized for documented snow loads. Rooflines designed for drainage. Foundations poured to frost depth at Truckee&apos;s elevation.</p>
                <p>We also serve Graeagle and the Plumas County mountain communities — similar snow and elevation conditions, permit jurisdiction through Plumas County and the Town of Portola.</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '❄️', title: 'Snow-Load Engineered Structures', body: 'All decks, roofs, and additions engineered for Truckee\'s 200+ inch annual snowfall. Proper snow load calculations per Town of Truckee requirements.' },
                  { icon: '🏔️', title: 'Frost-Depth Foundations', body: 'Footings poured to proper depth for 5,820-foot elevation frost penetration — deeper than standard California code requirements.' },
                  { icon: '🪵', title: 'Mountain-Grade Materials', body: 'Composite decking, pressure-treated lumber rated for high UV and moisture exposure common at Truckee elevation.' },
                  { icon: '📋', title: 'Town of Truckee & Plumas County Permits', body: 'BRE Builders handles Town of Truckee permits (Nevada County) and Plumas County permits for Graeagle area projects. CA #1093798.' },
                ].map(s => (
                  <div key={s.title} className="flex gap-4 p-4 bg-panel rounded-xl border border-white/[0.06]">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="text-[14px] text-cream/80 font-medium mb-1">{s.title}</p>
                      <p className="text-[12px] text-cream/45 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-void border-y border-white/[0.05]">
          <div className="container">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Services in Truckee & Graeagle</span>
            </div>
            <h2 className="font-display font-light text-[clamp(26px,4vw,50px)] leading-tight text-cream mb-8">
              What We Build<br /><span className="italic text-teal">in the Mountains.</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Custom Homes', href: '/services/new-home', desc: 'Ground-up custom homes in Truckee and Graeagle. Full design-build. CA License #1093798.' },
                { label: 'Snow-Load Decks', href: '/services/decks', desc: 'Decks engineered for Truckee\'s 200+ inch snowfall. Proper drainage and structural calculations.' },
                { label: 'Structural Repairs', href: '/services/repairs', desc: 'Mountain home structural repairs — dry rot, snow damage, foundation issues at elevation.' },
                { label: 'Kitchen & Bath', href: '/services/kitchen-bath', desc: 'Full remodels in Truckee vacation and primary homes.' },
                { label: 'Home Additions', href: '/services/additions', desc: 'Additions designed for mountain snow loads and aesthetics.' },
                { label: 'Vacation Home Remodeling', href: '/contact?location=truckee', desc: 'Scheduled during shoulder seasons. Minimal disruption for out-of-area owners.' },
              ].map(s => (
                <Link key={s.label} href={s.href} className="p-5 bg-panel rounded-2xl border border-white/[0.06] hover:border-teal/30 transition-colors group">
                  <h3 className="font-display text-[16px] text-cream mb-2 group-hover:text-teal transition-colors">{s.label}</h3>
                  <p className="text-[12px] text-cream/45 leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-deep">
          <div className="container max-w-[800px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal flex-shrink-0" /><span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Truckee & Graeagle FAQ</span>
            </div>
            <h2 className="font-display font-light text-[clamp(24px,3.5vw,46px)] text-cream mb-8">Common Questions</h2>
            <div className="speakable-faq"><FAQAccordion items={FAQS} /></div>
          </div>
        </section>

        <section className="py-20 bg-void">
          <div className="container text-center">
            <h2 className="font-display font-light text-[clamp(28px,4vw,56px)] text-cream mb-4">Start Your Mountain Project</h2>
            <p className="text-[15px] text-cream/50 mb-8 max-w-[520px] mx-auto">Free estimates for Truckee, Graeagle, and surrounding mountain communities. CA #1093798 · NV #0085999.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact?location=truckee" className="btn-primary">Get a Free Estimate →</Link>
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
              <Link href="/blog/deck-safety-warning-signs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">8 Signs Your Deck Is Unsafe →</Link>
              <Link href="/services/decks" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Snow-Load Deck Construction →</Link>
              <Link href="/services/new-home" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Custom Home Building →</Link>
              <Link href="/service-areas/lake-tahoe/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Lake Tahoe Service Area →</Link>
              <Link href="/service-areas/northern-california/" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Northern California Services →</Link>
              <Link href="/services/repairs" className="font-mono text-[11px] text-cream/45 hover:text-teal border border-white/[0.08] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all bg-white/[0.02]">Structural Repairs →</Link>
            </div>
          </div>
        </section>

            <Footer />
    </>
  )
}
