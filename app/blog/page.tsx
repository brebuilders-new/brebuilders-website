import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { IMGS } from '@/lib/images'
import { SITE } from '@/lib/site-data'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Construction Guides | Reno NV Contractor',
  description: 'ADU guides, structural repair tips, and construction insights for Reno homeowners from BRE Builders — licensed general contractor since 1989.',
  openGraph: {
    title: 'BRE Builders Blog — Construction Guides for Reno Homeowners',
    description: 'ADU guides, repair advice, remodeling tips, and local insights. Licensed NV #0085999 · CA #1093798.',
    url: 'https://brebuilders.com/blog/',
    type: 'website',
    siteName: 'BRE Builders',
    locale: 'en_US',
    images: [{ url: `${SITE_URL}/api/og?title=BRE+Builders+Blog&sub=Reno+Construction+Guides+%C2%B7+NV+%230085999&badge=Blog`, width: 1200, height: 630, alt: 'Blue Reef Builders Blog — Construction & Remodeling Guides for Reno NV Homeowners' }],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'BRE Builders Blog — Construction Guides for Reno Homeowners',
    description: 'ADU guides, repair advice, remodeling tips, and local insights. Licensed NV #0085999 · CA #1093798.',
    images: [{ url: `${SITE_URL}/api/og?title=BRE+Builders+Blog&sub=Reno+Construction+Guides+%C2%B7+NV+%230085999&badge=Blog`, alt: 'Blue Reef Builders Blog — Construction & Remodeling Guides for Reno NV Homeowners' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/` },
}

// All posts now on Vercel routes
const POSTS = [
  {
    title: 'Commercial Contractor Reno NV — Tenant Improvements, Warehouses & Offices',
    excerpt: 'What commercial construction costs in Reno NV — tenant improvements, warehouse builds, office renovations. Verified 2026 pricing from a licensed contractor.',
    href: '/blog/commercial-contractor-reno-nv',
    category: 'Commercial',
    date: 'April 2026',
  },
  {
    title: 'Lake Tahoe Contractor — What to Know Before You Build in 2026',
    excerpt: 'TRPA permits, dual-state licensing, snow-load requirements, and why Lake Tahoe construction costs 20-35% more than Reno. Complete guide from a licensed NV & CA contractor.',
    href: '/blog/lake-tahoe-contractor-guide',
    category: 'Lake Tahoe',
    date: 'April 2026',
  },
  {
    title: 'Custom Home Builder Reno NV — What It Actually Costs in 2026',
    excerpt: 'Real 2026 pricing for custom home construction in Reno NV — design-build process, permit timelines, and what separates good contractors from bad ones.',
    href: '/blog/custom-home-builder-reno-nv',
    category: 'Custom Homes',
    date: 'April 2026',
  },
  {
    title: 'Kitchen Remodel Cost Reno NV — Real Prices for 2026',
    excerpt: 'How much does a kitchen remodel cost in Reno NV? Real pricing data — from $18,000 basic refreshes to $85,000 full gut renovations.',
    href: '/blog/kitchen-remodel-cost-reno-nv',
    category: 'Kitchen & Bath',
    date: 'April 2026',
  },
  {
    title: 'Home Addition Cost Reno NV — 2026 Pricing Guide',
    excerpt: 'Room additions start at $80,000 in Reno NV. Real pricing for room additions, master suites, second stories, and garage additions.',
    href: '/blog/home-addition-cost-reno-nv',
    category: 'Home Additions',
    date: 'April 2026',
  },
  {
    title: 'Deck Builder Reno NV — Cost, Permits & What to Expect in 2026',
    excerpt: 'New decks start at $18,000 in Reno NV. What decks cost, permit requirements, best materials for Northern Nevada climate, and Lake Tahoe snow-load requirements.',
    href: '/blog/deck-builder-reno-nv',
    category: 'Decks',
    date: 'April 2026',
  },
  {
    href: '/blog/how-to-add-an-adu-in-nevada',
    title: 'How to Add an ADU in Nevada Without Breaking the Bank: 2025 Guide',
    category: 'ADU',
    excerpt: 'Nevada ADU laws, permit costs, construction timelines, and real cost data for Reno homeowners. From $75,000.',
    img: IMGS.adu_main,
    alt: 'ADU Construction Guide Nevada 2025 BRE Builders',
    priority: true,
    service: '/services/adu',
  },
  {
    href: '/blog/structural-repair-warning-signs',
    title: 'Top 10 Signs Your Home Needs Structural Repair (Don\'t Ignore #3)',
    category: 'Structural Repairs',
    excerpt: 'Warning signs from foundation cracks to sloping floors. What each sign means for your Reno home.',
    img: IMGS.repairs_rot,
    alt: 'Structural Repair Warning Signs Reno Home BRE Builders',
    priority: true,
    service: '/services/repairs',
  },
  {
    href: '/blog/deck-safety-warning-signs',
    title: '8 Signs Your Deck Is No Longer Safe — Reno & Lake Tahoe',
    category: 'Decks',
    excerpt: 'Eight structural warning signs BRE Builders checks on every deck inspection. Free inspections available.',
    img: IMGS.repairs_deck_lt,
    alt: 'Deck Safety Warning Signs Reno Lake Tahoe BRE Builders',
    priority: true,
    service: '/services/decks',
  },
  {
    href: '/blog/reno-kitchen-remodeling-trends',
    title: 'Reno Kitchen Remodeling: Top Trends & Investment Tips for 2025',
    category: 'Kitchen & Bath',
    excerpt: 'Natural materials, smart kitchens, functional islands. What Reno homeowners should prioritize for ROI.',
    img: IMGS.svc_kitchen,
    alt: 'Kitchen Remodeling Reno NV 2025 Trends BRE Builders',
    service: '/services/kitchen-bath',
  },
  {
    href: '/blog/is-your-kitchen-ruining-your-property-value',
    title: 'Is Your Kitchen Ruining Your Property Value? Fix These 5 Things First',
    category: 'Kitchen & Bath',
    excerpt: 'An outdated kitchen quietly drains your Reno home\'s value. The 5 problems that cost you the most at resale.',
    img: IMGS.svc_kitchen,
    alt: 'Kitchen property value Reno NV BRE Builders',
    service: '/services/kitchen-bath',
  },
  {
    href: '/blog/5-signs-its-time-to-remodel-your-kitchen',
    title: '5 Signs It\'s Time to Remodel Your Kitchen — #2 Is Quietly Hurting Your Value',
    category: 'Kitchen & Bath',
    excerpt: 'Not sure if it\'s time? These 5 signs tell you the answer — and #2 is one most Reno homeowners miss.',
    img: IMGS.svc_kitchen,
    alt: '5 signs kitchen remodel Reno NV',
    service: '/services/kitchen-bath',
  },
  {
    href: '/blog/bre-builders-car-wash-reno',
    title: 'From Strikes to Suds: How BRE Builders Saved a Reno Icon',
    category: 'Commercial',
    excerpt: 'Converting the abandoned Starlite Lanes bowling alley into Reno\'s longest car wash. Adaptive reuse case study.',
    img: IMGS.concrete_slab,
    alt: 'Commercial Car Wash Construction Reno NV BRE Builders',
    service: '/services/commercial',
  },
  {
    href: '/blog/reno-home-repairs-20-year',
    title: 'Reno Home Repairs: What to Expect in a 20-Year-Old House',
    category: 'Structural Repairs',
    excerpt: '8 structural and system issues in Reno homes built in the early 2000s — and when each becomes urgent.',
    img: IMGS.repairs_foundation,
    alt: 'Reno Home Repairs 20 Year Old House',
    service: '/services/repairs',
  },
  {
    href: '/blog/reno-home-repairs-30-year',
    title: 'Reno Home Repairs: What to Expect in a 30-Year-Old House',
    category: 'Structural Repairs',
    excerpt: '8 critical issues in 1990s-era Reno homes — galvanized pipes, aluminum wiring, unsafe decks, roof age.',
    img: IMGS.repairs_rot,
    alt: 'Reno Home Repairs 30 Year Old House',
    service: '/services/repairs',
  },
  {
    href: '/blog/reno-structural-repairs',
    title: 'Why More Reno Homeowners Trust BRE Builders for Structural Repairs',
    category: 'Structural Repairs',
    excerpt: 'Northern Nevada soil conditions, 35+ years of repair experience, and what sets BRE apart.',
    img: IMGS.repairs_deck_lt,
    alt: 'Reno Structural Repair Contractor BRE Builders',
    service: '/services/repairs',
  },
  {
    href: '/blog/reno-redevelopment',
    title: 'Reno\'s $1 Billion Redevelopment — What It Means for Contractors',
    category: 'Commercial',
    excerpt: 'Tech migration, downtown transformation, ADU boom. What Reno\'s construction cycle means for homeowners.',
    img: IMGS.svc_commercial,
    alt: 'Reno Redevelopment Commercial Construction BRE Builders',
    service: '/services/commercial',
  },
  {
    href: '/blog/reno-home-10-year-maintenance',
    title: 'What Reno Homeowners Overlook in 10-Year-Old Homes',
    category: 'Structural Repairs',
    excerpt: '5 climate-specific issues in 10-year-old Reno homes: clay soils, UV damage, attic ducts, driveways, decks.',
    img: IMGS.repairs_foundation,
    alt: 'Reno Home Maintenance 10 Year Old House BRE Builders',
    service: '/services/repairs',
  },
]

const CATEGORIES = ['All', 'ADU', 'Structural Repairs', 'Kitchen & Bath', 'Decks', 'Commercial']

// Strategic service links for the sidebar / bottom CTA
const SERVICE_SHORTCUTS = [
  { label: 'ADU Construction — from $75K', href: '/services/adu' },
  { label: 'Structural Repairs — Free Estimates', href: '/services/repairs' },
  { label: 'Kitchen & Bath Remodeling', href: '/services/kitchen-bath' },
  { label: 'Deck Construction & Repair', href: '/services/decks' },
  { label: 'Home Additions', href: '/services/additions' },
  { label: 'Commercial Construction', href: '/services/commercial' },
]

const AREA_SHORTCUTS = [
  { label: 'Reno, NV', href: '/service-areas/nevada/' },
  { label: 'Sparks, NV', href: '/service-areas/sparks/' },
  { label: 'Lake Tahoe', href: '/service-areas/lake-tahoe/' },
  { label: 'Carson City, NV', href: '/service-areas/carson-city/' },
  { label: 'Truckee, CA', href: '/service-areas/truckee/' },
  { label: 'Northern California', href: '/service-areas/northern-california/' },
]

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function BlogPage() {
  const featured = POSTS.filter(p => p.priority)
  const rest = POSTS.filter(p => !p.priority)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://brebuilders.com/blog/',
        url: 'https://brebuilders.com/blog/',
        name: 'BRE Builders Blog — Construction Guides for Reno Homeowners',
        description: 'ADU guides, structural repair tips, and construction insights for Reno homeowners from BRE Builders.',
        publisher: { '@id': 'https://brebuilders.com/#business' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.blog-intro'] },
      }) }} />
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-[660px] mb-12">
            <SL text="Construction Blog" />
            <h1 className="font-display text-[clamp(38px,5.5vw,72px)] font-light leading-[0.95] tracking-tight text-cream mb-4">
              Insights From the<br /><span className="italic text-teal">Job Site.</span>
            </h1>
            <p className="text-[15px] text-cream/55 leading-relaxed mb-6">
              ADU guides, repair advice, remodeling tips, and Northern Nevada construction
              insights from BRE Builders — licensed since 1989.
            </p>
            {/* Breadcrumb / context pill row */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(c => (
                <span key={c} className="font-mono text-[11px] tracking-wider text-cream/45 border border-white/[0.08] px-3 py-1.5 rounded-full hover:border-teal/30 hover:text-teal transition-all cursor-default">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* ── MAIN CONTENT ── */}
            <div>
              {/* Featured posts */}
              <section className="mb-14">
                <SL text="Featured Guides" />
                <div className="grid md:grid-cols-3 gap-5">
                  {featured.map((p, i) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/25 transition-all bg-panel"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.img}
                          alt={p.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading={i < 2 ? 'eager' : 'lazy'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-panel/90 to-transparent" />
                        <div className="absolute top-3 left-3 font-mono text-[9px] tracking-wider uppercase bg-teal text-void px-2 py-1 rounded">
                          {p.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <h2 className="font-display text-[17px] text-cream leading-snug mb-3 group-hover:text-teal transition-colors">
                          {p.title}
                        </h2>
                        <p className="text-[13px] text-cream/40 leading-relaxed mb-4">{p.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] text-teal/60 group-hover:text-teal transition-colors tracking-wider uppercase">
                            Read Guide →
                          </span>

                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Inline CTA — after featured */}
              <div className="mb-12 p-5 bg-teal/[0.06] border border-teal/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-display text-[18px] text-cream mb-1">Have a project in mind?</p>
                  <p className="text-[13px] text-cream/50">Free estimates. Licensed NV #0085999 · CA #1093798. Response within 24 hours.</p>
                </div>
                <div className="flex gap-2.5 flex-shrink-0">
                  <Link href="/contact" className="btn-primary text-[13px] py-2.5 px-5">Get a Free Quote →</Link>
                  <a href={SITE.phoneHref} className="btn-ghost text-[13px] py-2.5 px-4 font-mono">Call</a>
                </div>
              </div>

              {/* All posts list */}
              <section className="mb-14">
                <SL text="All Posts" />
                <div className="space-y-0">
                  {rest.map(p => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="group flex items-start gap-5 py-4 border-b border-white/[0.055] hover:bg-panel/30 -mx-4 px-4 rounded-lg transition-colors"
                    >
                      <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded-lg hidden sm:block">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.img} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[10px] tracking-wider uppercase text-teal/60">{p.category}</span>
                        </div>
                        <h3 className="font-display text-[16px] text-cream leading-snug mb-1 group-hover:text-teal transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-[12px] text-cream/35 leading-relaxed hidden md:block">{p.excerpt}</p>
                      </div>
                      <span className="font-mono text-[11px] text-teal/40 group-hover:text-teal transition-colors flex-shrink-0 hidden sm:block mt-1">→</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* ── SIDEBAR ── */}
            <aside className="hidden lg:block">
              {/* Sticky sidebar */}
              <div className="sticky top-28 space-y-6">
                {/* Free estimate CTA */}
                <div className="bg-panel rounded-2xl p-5 border border-white/[0.07]">
                  <p className="font-display text-[20px] text-cream mb-1 leading-snug">Start Your Project</p>
                  <p className="text-[12px] text-cream/45 mb-4">Free estimates. Licensed NV #0085999. Response within 24 hours.</p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-[13px] mb-2">Get a Free Estimate →</Link>
                  <a href={SITE.phoneHref} className="btn-ghost w-full justify-center text-[13px] font-mono">{SITE.phone}</a>
                </div>

                {/* Services shortcut */}
                <div className="bg-panel rounded-2xl p-5 border border-white/[0.07]">
                  <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-4">Our Services</p>
                  <div className="space-y-0">
                    {SERVICE_SHORTCUTS.map(s => (
                      <Link key={s.href} href={s.href} className="group flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                        <span className="text-[13px] text-cream/60 group-hover:text-teal transition-colors">{s.label}</span>
                        <span className="text-cream/20 group-hover:text-teal transition-colors text-[12px]">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Service areas shortcut */}
                <div className="bg-panel rounded-2xl p-5 border border-white/[0.07]">
                  <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-4">Service Areas</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {AREA_SHORTCUTS.map(a => (
                      <Link key={a.href} href={a.href} className="text-[12px] text-cream/50 hover:text-teal transition-colors py-1">
                        {a.label} →
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Testimonials teaser */}
                <div className="bg-teal/[0.04] border border-teal/15 rounded-2xl p-5">
                  <p className="font-display text-[16px] text-cream mb-3 leading-snug">
                    &ldquo;Exceeds my expectations every time.&rdquo;
                  </p>
                  <p className="font-mono text-[10px] text-cream/35 mb-3">— Stephanie, Reno NV</p>
                  <Link href="/testimonials" className="font-mono text-[11px] text-teal hover:text-cream transition-colors">
                    Read All Reviews →
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom cross-links strip — mobile-first */}
          <div className="mt-12 pt-10 border-t border-white/[0.06]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'View All Projects', desc: 'Portfolio of completed work', href: '/projects' },
                { label: 'Client Testimonials', desc: 'Real reviews from Reno clients', href: '/testimonials' },
                { label: 'Frequently Asked Questions', desc: 'Permits, pricing, timelines', href: '/faq' },
                { label: 'About BRE Builders', desc: '35+ years, licensed NV & CA', href: '/about' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="group p-4 bg-panel rounded-xl border border-white/[0.06] hover:border-teal/25 transition-colors">
                  <span className="text-[14px] text-cream/75 group-hover:text-teal transition-colors font-medium block">{l.label}</span>
                  <span className="text-[12px] text-cream/35 block mt-0.5">{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
