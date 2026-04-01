import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Lake Tahoe Full Home Renovation | BRE Builders Portfolio',
  description:
    '695 Lakeview Blvd, Zephyr Cove, NV — complete interior and exterior renovation by BRE Builders. Structural upgrades, kitchen, bath, custom stairs, deck. 16 photos.',
  alternates: { canonical: 'https://brebuilders.com/portfolio/lake-tahoe-interior-renovation-project-bre-builders/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Lake Tahoe Full Home Renovation — BRE Builders Portfolio',
  description: 'Complete interior and exterior renovation of 695 Lakeview Blvd, Zephyr Cove, NV by BRE Builders.',
  url: 'https://brebuilders.com/portfolio/lake-tahoe-interior-renovation-project-bre-builders/',
  image: 'https://brebuilders.com/wp-content/uploads/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
      { '@type': 'ListItem', position: 3, name: 'Lake Tahoe Renovation', item: 'https://brebuilders.com/portfolio/lake-tahoe-interior-renovation-project-bre-builders/' },
    ],
  },
}

// All 16 Lake Tahoe photos
const LT_PHOTOS = [
  { n: 1, suffix: '', cap: 'Exterior · Renovation Complete' },
  { n: 2, suffix: '', cap: 'Deck & Structure' },
  { n: 3, suffix: '', cap: 'Deck Railing & Walkway' },
  { n: 4, suffix: '', cap: 'Interior Living Space' },
  { n: 5, suffix: '', cap: 'Interior Finish Work' },
  { n: 6, suffix: '', cap: 'Loft & Upper Level' },
  { n: 7, suffix: '', cap: 'Custom Interior Staircase' },
  { n: 8, suffix: '', cap: 'Bathroom Renovation' },
  { n: 9, suffix: '', cap: 'Interior Room' },
  { n: 10, suffix: '', cap: 'Bathroom Installation' },
  { n: 11, suffix: '', cap: 'Interior Staircase' },
  { n: 12, suffix: '', cap: 'Upper Level · Skylights' },
  { n: 13, suffix: '', cap: 'Loft · Natural Light' },
  { n: 14, suffix: '', cap: 'Exterior Deck Renovation' },
  { n: 15, suffix: '', cap: 'Deck Walkway Detail' },
  { n: 16, suffix: '-1', cap: 'Completed Exterior' },
]

function ltUrl(n: number, suffix: string) {
  const pad = String(n).padStart(2, '0')
  return `https://brebuilders.com/wp-content/uploads/2025/12/${pad}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16${suffix}-1024x684.webp`
}

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function LakeTahoeProjectPage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* Hero — photo 1 full bleed */}
        <section className="relative min-h-[72vh] lg:min-h-[80vh] flex flex-col justify-end pb-14 lg:pb-24 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ltUrl(1, '')}
            alt="Full Home Renovation Completed Exterior 695 Lakeview Blvd Zephyr Cove Lake Tahoe BRE Builders"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/55 to-void/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/65 to-transparent hidden md:block" />
          <div className="relative z-10 container">
            <div className="max-w-[600px]">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-6 font-mono text-[11px] text-cream/30">
                <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                <span>/</span>
                <Link href="/projects/" className="hover:text-teal transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-cream/60">Lake Tahoe Renovation</span>
              </nav>
              <div className="animate-fade-up-1 flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Full Home Renovation · Lake Tahoe</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-white mb-4">
                Full Home Renovation
                <br />
                <span className="italic text-teal">Lake Tahoe, NV</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-6 max-w-[500px]">
                A complete interior and exterior transformation combining structural upgrades, modern finishes,
                and long-term durability — executed by BRE Builders at 695 Lakeview Blvd, Zephyr Cove, NV 89448.
              </p>
              <div className="animate-fade-up-4 flex flex-wrap gap-3">
                <span className="font-mono text-[11px] text-cream/40 border border-white/[0.1] px-3 py-1.5 rounded-lg">📍 Zephyr Cove, Lake Tahoe, NV</span>
                <span className="font-mono text-[11px] text-cream/40 border border-white/[0.1] px-3 py-1.5 rounded-lg">16 Photos</span>
                <a href={SITE.youtubeProject} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-teal/70 border border-teal/20 px-3 py-1.5 rounded-lg hover:border-teal/50 hover:text-teal transition-colors">
                  ▶ Watch Project Video
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Project overview */}
        <section className="py-16 bg-panel border-b border-white/[0.05]">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Project Type', value: 'Full Home Renovation' },
                { label: 'Location', value: 'Zephyr Cove, NV' },
                { label: 'Scope', value: 'Interior + Exterior' },
                { label: 'Contractor', value: 'BRE Builders NV #0085999' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-cream/30 mb-1">{s.label}</div>
                  <div className="font-display text-[16px] text-cream">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery — all 16 photos */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <SL text="Project Gallery — 16 Photos" />
            <h2 className="font-display text-[clamp(26px,4vw,50px)] font-light leading-[1.05] tracking-tight mb-10">
              Every Phase.<br /><span className="italic text-teal">Every Detail.</span>
            </h2>

            {/* Mobile: scroll carousel */}
            <div className="md:hidden flex gap-3 overflow-x-auto pb-4 scrollbar-none mb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {LT_PHOTOS.map((p) => (
                <div key={p.n} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '80vw' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ltUrl(p.n, p.suffix)}
                    alt={`${p.cap} · Lake Tahoe Full Home Renovation BRE Builders`}
                    className="w-full h-56 object-cover rounded-xl"
                    loading={p.n <= 3 ? 'eager' : 'lazy'}
                  />
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{p.cap}</p>
                </div>
              ))}
            </div>
            <p className="md:hidden font-mono text-[10px] text-cream/25 tracking-wider mb-10">← Swipe · {LT_PHOTOS.length} photos</p>

            {/* Desktop: masonry grid */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {LT_PHOTOS.map((p) => (
                <div key={p.n} className={`overflow-hidden rounded-xl group ${p.n === 1 ? 'col-span-2 row-span-2' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ltUrl(p.n, p.suffix)}
                    alt={`${p.cap} · Lake Tahoe Full Home Renovation BRE Builders`}
                    className={`w-full object-cover group-hover:scale-[1.02] transition-transform duration-600 ${p.n === 1 ? 'h-full min-h-[400px]' : 'h-48'}`}
                    loading={p.n <= 4 ? 'eager' : 'lazy'}
                  />
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/30 uppercase">{p.cap}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project description — AEO content */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SL text="About This Project" />
                <h2 className="font-display text-[clamp(24px,3.5vw,44px)] font-light leading-[1.1] tracking-tight mb-6">
                  Full Home Renovation<br /><span className="italic text-teal">Lake Tahoe.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
                  <p>
                    This full-home renovation showcases coordinated kitchen and bath remodeling, interior
                    structural improvements, upgraded living spaces, and exterior deck work — delivered with
                    precision planning and code-compliant construction.
                  </p>
                  <p>
                    The project included custom interior staircase construction, loft renovation with skylights,
                    bathroom installations, exterior deck railing and walkway upgrades, and full interior finish
                    work throughout the multi-level Zephyr Cove property.
                  </p>
                  <p className="text-[12px] text-cream/30 italic">
                    Images shown are from a completed residential project and are displayed for portfolio purposes only.
                  </p>
                </div>

                {/* Video */}
                <div className="bg-panel rounded-xl p-5 border border-teal/15 mb-6">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-3">Project Video</p>
                  <a
                    href={SITE.youtubeProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 bg-teal/10 border border-teal/25 rounded-lg flex items-center justify-center text-teal group-hover:bg-teal/20 transition-colors flex-shrink-0">▶</div>
                    <div>
                      <div className="text-[14px] text-cream group-hover:text-teal transition-colors">Watch the Full Project Walkthrough</div>
                      <div className="font-mono text-[11px] text-cream/30">YouTube · BRE Builders</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Scope list */}
              <div>
                <SL text="Project Scope" />
                <div className="space-y-3">
                  {[
                    'Exterior structural renovation and deck integration',
                    'Deck railing and walkway upgrades',
                    'Interior living space renovation with updated finishes',
                    'Custom interior staircase construction',
                    'Loft and upper-level renovation with skylights',
                    'Bathroom renovation — vanity, tub, tiling, fixtures',
                    'Kitchen remodeling and updated materials',
                    'Exterior deck renovation with sealed surface',
                    'Multi-level interior finish work throughout',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 py-3 border-b border-white/[0.055]">
                      <span className="text-teal mt-0.5 flex-shrink-0 text-[12px]">✓</span>
                      <span className="text-[14px] text-cream/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related + CTA */}
        <section className="py-16 bg-panel border-t border-white/[0.05]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <SL text="Start Your Project" />
                <h2 className="font-display text-[clamp(24px,3.5vw,44px)] font-light leading-[1.1] tracking-tight mb-4">
                  Ready to Transform<br /><span className="italic text-teal">Your Home?</span>
                </h2>
                <p className="text-[15px] text-cream/55 mb-6">
                  Free estimates. Licensed NV #0085999. Response within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">Request a Free Quote →</Link>
                  <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'View All Projects', href: '/projects/' },
                  { label: 'Lake Tahoe Services', href: '/service-areas/lake-tahoe/' },
                  { label: 'Deck Repair', href: '/decks/' },
                  { label: 'Kitchen & Bath', href: '/kitchen/' },
                  { label: 'Structural Repairs', href: '/repairs/' },
                ].map(l => (
                  <Link key={l.label} href={l.href} className="text-[13px] font-mono text-cream/50 border border-white/[0.08] px-3 py-2 rounded-lg hover:border-teal/30 hover:text-teal transition-all">
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
