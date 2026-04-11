import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ServiceHeroSection, SectionLabel, SectionHeading, SpeakableBlock,
  PageSection, MobileCTABox, DesktopCTASection, RelatedServices, ServiceFAQSection,
} from '@/components/templates/ServiceTemplate'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'
import { GalleryGrid } from '@/components/gallery/GalleryLightbox'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Deck Contractors Reno NV | New Builds & Structural Repair',
  description: 'Licensed deck contractors in Reno NV. New deck builds, structural repair, snow-load rated framing for Tahoe. NV #0085999. 35+ years. Free estimate.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Deck+Builder+Reno+NV+%26+Lake+Tahoe&sub=New+Decks+%C2%B7+Structural+Repair+%C2%B7+Snow+Load+Expertise&badge=Decks`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Deck Contractors Reno NV | New Builds & Structural Repair', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Deck Contractors Reno NV | New Builds & Structural Repair',
    description: 'Licensed deck contractors in Reno NV. New deck builds, structural repair, snow-load rated framing for Tahoe. NV #0085999. 35+ years. Free estimate.',
    images: [{ url: `${SITE_URL}/api/og?title=Deck+Builder+Reno+NV+%26+Lake+Tahoe&sub=New+Decks+%C2%B7+Structural+Repair+%C2%B7+Snow+Load+Expertise&badge=Decks`, alt: 'Blue Reef Builders — Deck Contractors Reno NV | New Builds & Structural Repair' }],
  },
  alternates: { canonical: `${SITE_URL}/decks/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://brebuilders.com/decks/#service',
      name: 'Deck Builder Reno NV',
      description: 'BRE Builders builds and repairs decks in Reno, NV and Lake Tahoe. Snow-load rated construction, structural repair, composite and wood decking.',
      provider: { '@id': 'https://brebuilders.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
        { '@type': 'Place', name: 'Lake Tahoe, NV' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a new deck cost in Reno NV?', acceptedAnswer: { '@type': 'Answer', text: 'BRE Builders provides free on-site estimates for deck construction and repair. Pricing depends on size, materials, and structural requirements. Contact us for a project-specific quote.' } },
        { '@type': 'Question', name: 'Do decks in Lake Tahoe need special construction?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lake Tahoe decks must handle snow loads of up to 200 lbs per sq ft, UV exposure, and freeze-thaw cycles. BRE Builders designs to Washoe County and Douglas County structural requirements.' } },
        { '@type': 'Question', name: 'What are signs a deck needs structural repair?', acceptedAnswer: { '@type': 'Answer', text: 'Signs include: soft or spongy wood when walked on, visible rot or discoloration, ledger pulling away from house, wobbly railing, rust-stained fasteners, and posts showing signs of rot at the base.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Deck Builder', item: 'https://brebuilders.com/decks/' },
      ],
    },
    { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-summary', '.speakable-faq'] },
  ],
}

const DECK_SIGNS = [
  'Soft or spongy boards when you walk on them',
  'Visible rot, gray discoloration, or soft wood anywhere',
  'Ledger board pulling away from the house',
  'Wobbly or loose railing posts',
  'Rust-stained decking or fasteners showing',
  'Posts showing rot or deterioration at the base',
  'Deck is 10+ years old with no professional inspection',
  'Squeaking, bouncing, or movement underfoot',
]

const FAQS = [
  { q: 'How much does a new deck cost in Reno NV?', a: 'BRE Builders provides free on-site estimates for deck construction and repair. Pricing depends on size, materials, and structural requirements. Contact us for a project-specific quote.' },
  { q: 'Do decks in Lake Tahoe need special construction?', a: 'Yes. Lake Tahoe decks must handle snow loads up to 200 lbs per sq ft, UV degradation, and extreme freeze-thaw cycles. BRE Builders designs and builds to Washoe County and Douglas County structural requirements.' },
  { q: 'What are signs a deck needs structural repair?', a: 'Signs include: soft or spongy wood, visible rot, ledger pulling away from the house, wobbly railing, rust-stained fasteners, and posts showing rot at the base.' },
  { q: 'Does BRE Builders repair existing decks?', a: 'Yes. We provide complete structural evaluations and repair failing decks throughout Reno and Lake Tahoe. Many repairs are more cost-effective than full replacement.' },
  { q: 'What materials does BRE Builders use for decks?', a: 'We build with pressure-treated wood, composite decking (Trex, TimberTech), and tropical hardwoods. For Lake Tahoe, we recommend composite or aluminum for maximum durability against snow and UV.' },
]

export default function DecksPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main data-theme="cedar">
        <ServiceHeroSection hero={{
          bgDesktop: IMGS.repairs_arun,
          bgMobile: IMGS.deck_charolette,
          eyebrow: 'Deck Builder · Reno NV & Lake Tahoe',
          h1Lines: ['Deck Builder', 'Reno & Lake Tahoe'],
          h1Ghost: 'Snow-load rated. Built to last.',
          lead: 'New deck construction and structural repair in Reno, NV and Lake Tahoe. Snow-load engineered builds, composite and wood, full permit handling. NV License #0085999.',
          badges: ['Snow Load Expertise', 'Full Structural Repair', 'Composite & Wood', 'Free Estimates'],
          ctaPrimaryLabel: 'Get a Free Deck Estimate →',
          ctaPrimaryHref: '/contact?service=deck',
          ctaSecondaryLabel: 'Lake Tahoe Deck Repair',
          ctaSecondaryHref: '/service-areas/lake-tahoe/',
          urgencyNote: 'Deck inspections available same-week — free with any estimate',
          stats: [{ n: 'Free', label: 'Inspection' }, { n: '35+', label: 'Years Exp.' }, { n: 'Free', label: 'Inspection' }],
          license: 'NV',
        }} />

        {/* Safety checker strip */}
        <section className="bg-panel border-y border-white/[0.06]">
          <div className="container py-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-teal">Quick Safety Checker</span>
              <div className="h-px bg-white/[0.06] flex-1" />
              <Link href="/contact?service=deck&urgency=inspection" className="font-mono text-[11px] text-teal/60 hover:text-teal transition-colors hidden md:block">Request Free Inspection →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {DECK_SIGNS.slice(0, 8).map((sign, i) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-cream/45">
                  <span className="text-gold/60 flex-shrink-0 mt-0.5">□</span>
                  <span>{sign}</span>
                </div>
              ))}
            </div>
            <p className="font-mono text-[11px] text-cream/30 mt-4">
              2+ items checked? Your deck needs a professional inspection.{' '}
              <Link href="/contact?service=deck" className="text-teal hover:underline">Request one free →</Link>
            </p>
          </div>
        </section>

        {/* Photos */}
        <PageSection bg="bg-deep">
          <SectionLabel text="Deck Projects" />
          <SectionHeading line1="Built for Every Season." line2italic="Engineered to Code." size="lg" className="mb-10" />
          <GalleryGrid
            mode="grid"
            images={[
              { src: IMGS.deck_charolette, alt: "Charolette's Deck Smooth Sealed Surface BRE Builders Reno", title: 'Sealed Deck Surface', caption: 'Reno, NV · Smooth sealed finish' },
              { src: IMGS.repairs_arun, alt: 'Hillside Deck Reinforcement Support Beams Lake Tahoe BRE Builders', title: 'Hillside Deck Reinforcement', caption: 'Lake Tahoe, NV · Structural support beams' },
              { src: IMGS.repairs_deck_lt, alt: 'Steel Angle Bracket System Deck Repair Lake Tahoe BRE Builders', title: 'Steel Bracket Repair', caption: 'Lake Tahoe, NV · CMU wall deck anchor system' },
              { src: IMGS.lt(2), alt: 'Deck Structure Renovation Lake Tahoe BRE Builders', title: 'Deck Structure Renovation', caption: 'Zephyr Cove, Lake Tahoe · Full structural rebuild' },
            ]}
            aspectClass="h-56"
          />
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/projects/charolettes-deck/" className="btn-ghost text-[13px] py-2.5 px-5">View: Custom Deck — Reno NV →</Link>
            <Link href="/projects/arun-deck-repair/" className="btn-ghost text-[13px] py-2.5 px-5">View: Hillside Deck Repair — Lake Tahoe →</Link>
            <Link href="/projects/lake-tahoe-deck/" className="btn-ghost text-[13px] py-2.5 px-5">View: Structural Deck Repair — Lake Tahoe →</Link>
          </div>
        </PageSection>

        <ServiceFAQSection
          faqs={FAQS}
          label="Deck Questions"
          aeoContent={
            <div>
              <SectionLabel text="Deck Builder Reno NV & Lake Tahoe" />
              <SectionHeading line1="Built for the Mountain." line2italic="Engineered to Last." size="md" className="mb-6" />
              <SpeakableBlock className="mb-6">
                <p>BRE Builders builds and repairs decks throughout Reno, Sparks, and Lake Tahoe. In the Reno metro, decks face UV exposure, summer heat, and winter freeze-thaw cycles that accelerate wood deterioration. At Lake Tahoe, snow loads can reach 200 lbs per square foot — decks must be engineered to handle it.</p>
                <p>Our licensed team handles everything from permit applications through final inspection. Whether you need a new deck, structural reinforcement, composite replacement, or railing upgrades, BRE Builders provides one licensed team for the entire job. NV License #0085999.</p>
              </SpeakableBlock>
              <div className="hidden md:flex flex-wrap gap-3">
                <Link href="/service-areas/lake-tahoe/" className="btn-ghost text-[12px] py-2 px-4">Lake Tahoe Decks →</Link>
                <Link href="/repairs/" className="btn-ghost text-[12px] py-2 px-4">Structural Repairs →</Link>
              </div>
            </div>
          }
        />

        
        {/* ── BLOG + AREA CROSS-LINKS ── */}
        <section className="py-14 bg-void border-t border-white/[0.05]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Blog cross-links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Deck repair or new deck build?</span>
                </div>
                <div className="space-y-0">
                                    <Link href="/blog/deck-safety-warning-signs" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">8 Signs Your Deck Is No Longer Safe</span>
                      <span className="text-[11px] text-cream/35 block">Free inspection guide — know what to check</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-home-repairs-20-year" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">20-Year-Old Reno Home Repairs</span>
                      <span className="text-[11px] text-cream/35 block">Deck deterioration in 20-year homes</span>
                    </div>
                  </Link>
                  <Link href="/blog/reno-home-repairs-30-year" className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors">
                    <span className="text-teal/30 group-hover:text-teal text-[16px] flex-shrink-0 leading-snug">›</span>
                    <div>
                      <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">30-Year-Old Reno Home Repairs</span>
                      <span className="text-[11px] text-cream/35 block">Unsafe deck framing in 1990s builds</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Service area links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-teal flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Service Areas</span>
                </div>
                <div className="space-y-0 mb-4">
                                    <Link href="/service-areas/nevada/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Deck Builder Reno, NV</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/lake-tahoe/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Deck Builder Lake Tahoe</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                  <Link href="/service-areas/truckee/" className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">Deck Builder Truckee, CA</span>
                    <span className="text-cream/20 group-hover:text-teal text-[12px]">→</span>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                                    <Link href="/testimonials" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">Testimonials →</Link>
                  <Link href="/faq" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">FAQ →</Link>
                  <Link href="/about" className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">About BRE →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RelatedServices items={[
          { label: 'Structural Repairs', href: '/repairs/', desc: 'If the deck is failing' },
          { label: 'Lake Tahoe Services', href: '/service-areas/lake-tahoe/', desc: 'Mountain deck experts' },
          { label: 'Home Additions', href: '/additions/', desc: 'Expand your space' },
          { label: 'Custom Homes', href: '/services/new-home-builds', desc: 'Full builds' },
        ]} />

        <MobileCTABox
          headline="Is your deck safe this season?"
          subtext="Free inspection with any estimate. NV #0085999. Reno & Lake Tahoe."
          ctaLabel="Request a Free Deck Inspection"
          ctaHref="/contact?service=deck"
        />
        <DesktopCTASection
          bgImage={IMGS.deck_charolette}
          bgAlt="BRE Builders completed deck Charolette's sealed surface Reno NV"
          headline="A Deck That Lasts"
          headlineItalic="Through Every Season."
          subtext="Free estimates · Snow-load rated · NV #0085999"
          ctaLabel="Get a Free Deck Estimate →"
          ctaHref="/contact?service=deck"
        />
      </main>
      <Footer />
    </>
  )
}
