import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'What Do Clients Say About Blue Reef Builders in Reno, NV?',
  description: 'Discover real reviews from clients who have worked with Blue Reef Builders. Exceptional construction and remodeling in Reno, NV. Licensed NV #0085999.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Client+Testimonials&sub=Real+Reviews+%C2%B7+Blue+Reef+Builders+Reno+NV&badge=Reviews`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — What Do Clients Say About Blue Reef Builders in Reno, NV?', }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'What Do Clients Say About Blue Reef Builders in Reno, NV?',
    description: 'Discover real reviews from clients who have worked with Blue Reef Builders. Exceptional construction and remodeling in Reno, NV. Licensed NV #0085999.',
    images: [{ url: `${SITE_URL}/api/og?title=Client+Testimonials&sub=Real+Reviews+%C2%B7+Blue+Reef+Builders+Reno+NV&badge=Reviews`, alt: 'Blue Reef Builders — What Do Clients Say About Blue Reef Builders in Reno, NV?' }],
  },
  alternates: { canonical: `${SITE_URL}/testimonials/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Client Testimonials — Blue Reef Builders',
      description: 'Real client reviews for BRE Builders (Blue Reef Builders), licensed general contractor in Reno, NV.',
      url: 'https://brebuilders.com/testimonials/',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://brebuilders.com/testimonials/' },
      ],
    },
  ],
}

// All testimonials verified verbatim from WP source (content_post)
const TESTIMONIALS = [
  {
    name: 'Matt',
    location: 'Rocklin, CA',
    stars: 5,
    quote: 'I have worked with Steve for years. Always able to work with my budget and deliver beyond expectations. My go-to local expert.',
    service: 'Ongoing Construction Work',
  },
  {
    name: 'Jenn',
    location: 'Sacramento, CA',
    stars: 4,
    quote: 'The team was quick to respond to my request. Hard to find reliable people and I trust them.',
    service: 'Home Remodeling',
  },
  {
    name: 'Stephanie',
    location: 'Reno, NV',
    stars: 5,
    quote: 'The team at Blue Reef Builders exceeds my expectations every time I have used them. I have had their team work on several of my projects and they have always met their stated deadlines and come in at bid. I continue to use them for large and small projects and recommend them whenever I can.',
    service: 'Multiple Projects',
  },
  {
    name: 'Bill',
    location: 'Sparks, NV',
    stars: 5,
    quote: 'Steve and Chris and the whole team at BRE Builders have been a joy to work with. I can always count on them to get the job done and the results have been fabulous!',
    service: 'Residential Construction',
  },
  {
    name: 'Austin',
    location: 'Reno, NV',
    stars: 5,
    quote: 'I am so glad that I found these guys, their team was able to meet all of my needs! Concrete, new deck, kitchen remodel, electrical and even landscaping! What a relief it was to find one company that could handle all of my needs under one roof. Highly recommend!',
    service: 'Concrete, Deck, Kitchen Remodel',
  },
  {
    name: 'Reggie',
    location: 'Modesto, CA',
    stars: 5,
    quote: "Steve and his team at Blue Reef are jacks of all trades and licensed in both Nevada and California which has been great for me as I have several investment properties in both states. It's the company to call if you have friends or family in Reno/Tahoe or the other side of the border in California.",
    service: 'Multi-State Investment Properties',
  },
]

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {[1,2,3,4,5].map(n => (
        <svg key={n} className={`w-4 h-4 ${n <= stars ? 'text-gold' : 'text-white/15'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* ── TESTIMONIALS HERO — MOBILE: compact ── */}
        <section className="md:hidden relative overflow-hidden">
          <div className="relative w-full" style={{ height: '38vw', minHeight: 130, maxHeight: 190 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.svc_repair} alt="BRE Builders Client Testimonials" className="w-full h-full object-cover" style={{ objectPosition: '50% 35%' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-void/40 to-void/85" />
          </div>
          <div className="bg-deep px-5 pt-5 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-teal">Client Reviews · Blue Reef Builders</span>
            </div>
            <h1 className="font-display font-light text-[clamp(26px,7vw,38px)] leading-[1.02] tracking-tight text-white mb-2">
              What Clients Say<br /><span className="italic text-teal">About BRE Builders.</span>
            </h1>
            <p className="text-[13px] leading-[1.65] text-white/90">
              Real clients. Real projects. Real results. Serving Reno, Sparks, Lake Tahoe, and Northern California since 1989.
            </p>
          </div>
        </section>

        {/* ── TESTIMONIALS HERO — DESKTOP: cinematic ── */}
        <section className="hidden md:relative md:block md:min-h-[55vh] lg:min-h-[65vh] md:flex md:flex-col md:justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.svc_repair} alt="BRE Builders Client Testimonials" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/65 to-void/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent" />
          <div className="absolute top-0 left-0 w-1 h-full bg-teal/25" />
          <div className="relative z-10 container">
            <div className="max-w-[580px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Client Reviews · Blue Reef Builders</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(34px,5.5vw,68px)] leading-[0.94] tracking-tight text-white mb-4">
                What Clients Say<br /><span className="italic text-teal">About BRE Builders.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/90 max-w-[460px]">
                Real clients. Real projects. Real results. Serving Reno, Sparks, Lake Tahoe, and Northern California since 1989.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="py-20 bg-deep">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-teal flex-shrink-0" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Client Testimonials</span>
            </div>
            <h2 className="font-display font-light text-[clamp(26px,4vw,52px)] leading-tight text-cream mb-3">
              We love what we do and we love<br className="hidden md:block" /><span className="italic text-teal"> working with amazing partners.</span>
            </h2>
            <p className="text-[15px] text-cream/50 mb-12 max-w-[560px]">
              Thank you for your kind words that encourage us daily. Below are reviews from clients across Reno, Sparks, Sacramento, Modesto, and the greater region.
            </p>

<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 md:pb-0 md:gap-5" style={{scrollSnapType:'x mandatory',WebkitOverflowScrolling:'touch'}}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className="flex-shrink-0 w-[82vw] md:w-auto md:flex-shrink-0 bg-panel border border-white/[0.055] rounded-xl p-7 hover:border-teal/15 transition-colors relative h-full" style={{scrollSnapAlign:'start'}}>
                  <div className="font-display text-[56px] leading-none text-teal/35 absolute top-4 left-5 select-none">&ldquo;</div>
                  <div className="flex gap-0.5 mb-3 pt-8">{[1,2,3,4,5].map(s => <span key={s} className="text-gold text-[14px]">&#9733;</span>)}</div>
                  <p className="font-display text-[15px] italic text-cream/85 leading-relaxed mb-5">{(t as any).text || (t as any).quote}</p>
                  <div className="font-semibold text-[13px] text-cream">{t.name}</div>
                  <div className="font-mono text-[10px] text-cream/60 tracking-wider mt-0.5">{t.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project photos as social proof */}
        <section className="py-20 bg-void border-y border-white/[0.05]">
          <div className="container">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal flex-shrink-0" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Completed Projects</span>
            </div>
            <h2 className="font-display font-light text-[clamp(26px,4vw,48px)] leading-tight text-cream mb-4">
              Results You Can See.
            </h2>
            <p className="text-[15px] text-cream/50 mb-10 max-w-[560px]">
              Our work speaks for itself. Browse completed projects from across the Reno, Lake Tahoe, and Northern California region.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {[
                { href: '/projects/lake-tahoe-renovation', img: IMGS.lt(1), label: 'Lake Tahoe Renovation' },
                { href: '/projects/ripon-estate', img: IMGS.ripon[0], label: 'Ripon CA Estate' },
                { href: '/projects/charolettes-deck', img: IMGS.deck_charolette, label: "Charolette's Deck" },
                { href: '/projects/car-wash', img: IMGS.svc_commercial, label: 'Car Wash Construction' },
              ].map(p => (
                <Link key={p.label} href={p.href} className="group relative overflow-hidden rounded-xl aspect-[4/3] block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.label + ' BRE Builders'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-mono text-[11px] text-cream/80">{p.label}</p>
                </Link>
              ))}
            </div>
            <Link href="/projects" className="btn-ghost">View All Projects →</Link>
          </div>
        </section>

        {/* Service discovery — testimonials readers know they want work done */}
        <section className="py-16 bg-panel border-y border-white/[0.05]">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-px bg-teal flex-shrink-0" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">What Can We Build For You?</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {[
                { label: 'ADU Construction', desc: 'Studio to 2BR · from $75,000 · Reno & NorCal', href: '/services/adu' },
                { label: 'Structural Repairs', desc: 'Foundation, framing, dry rot · Free estimates', href: '/services/repairs' },
                { label: 'Kitchen & Bath Remodeling', desc: 'Custom cabinetry, stone counters, premium finishes', href: '/services/kitchen-bath' },
                { label: 'Deck Construction', desc: 'Snow-load rated · Reno, Sparks, Lake Tahoe', href: '/services/decks' },
                { label: 'Custom Home Building', desc: 'Ground-up builds · Ripon CA estate completed', href: '/services/new-home-builds' },
                { label: 'Home Additions', desc: 'Room additions, second stories, garage additions', href: '/services/additions' },
              ].map(s => (
                <Link key={s.href} href={s.href} className="group flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] hover:border-teal/25 bg-deep hover:bg-teal/[0.04] transition-all">
                  <div className="flex-1">
                    <span className="text-[14px] text-cream/75 group-hover:text-teal transition-colors font-medium block">{s.label}</span>
                    <span className="text-[11px] text-cream/35 block mt-0.5">{s.desc}</span>
                  </div>
                  <span className="text-cream/20 group-hover:text-teal text-[13px] flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'View All Projects', href: '/projects' },
                { label: 'About BRE Builders', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Blog', href: '/blog' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-deep">
          <div className="container text-center">
            <h2 className="font-display font-light text-[clamp(28px,4vw,56px)] text-cream mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-[15px] text-cream/50 mb-8 max-w-[500px] mx-auto">
              Free estimates on all residential and commercial projects. Licensed NV #0085999 · CA #1093798. Response within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
              <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
