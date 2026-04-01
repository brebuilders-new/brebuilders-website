import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { PROJECTS } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Projects & Portfolio | BRE Builders Reno NV',
  description:
    'BRE Builders project portfolio — custom homes, ADUs, structural repairs, decks, commercial construction. Northern Nevada and California since 1989.',
  alternates: { canonical: 'https://brebuilders.com/projects/' },
}

const ALL_PROJECTS = [
  {
    slug: 'lake-tahoe-interior-renovation',
    wpSlug: 'portfolio/lake-tahoe-interior-renovation-project-bre-builders',
    title: 'Lake Tahoe Full Home Renovation',
    type: 'Full Home Renovation',
    location: 'Zephyr Cove, Lake Tahoe, NV',
    thumbnail: IMGS.lt(16),
    thumbnailAlt: 'Completed Full Home Renovation Exterior Lake Tahoe BRE Builders',
    featured: true,
    imageCount: 16,
    videoUrl: 'https://www.youtube.com/watch?v=6oTurM7gESE',
    desc: 'Complete interior and exterior transformation — structural upgrades, kitchen and bath remodeling, deck work, custom stairs. 16 photos.',
  },
  {
    slug: 'ripon-estate',
    wpSlug: 'portfolio/ripon-california-estate-project',
    title: 'Luxury Custom Home — Ripon, CA',
    type: 'Custom Home',
    location: 'Ripon, CA',
    thumbnail: IMGS.ripon[3],
    thumbnailAlt: 'Mediterranean Front Elevation Luxury Custom Home Ripon California BRE Builders',
    featured: true,
    imageCount: 5,
    desc: 'Ground-up luxury estate blending classical European architecture with modern amenities. Every column, arch, and interior detail built in-house.',
  },
  {
    slug: 'portfolio/adus',
    wpSlug: 'portfolio/adus',
    title: 'ADU Portfolio',
    type: 'ADU Construction',
    location: 'Reno & Northern Nevada',
    thumbnail: IMGS.adu_main,
    thumbnailAlt: 'ADU Construction Portfolio Reno NV BRE Builders',
    imageCount: 3,
    desc: 'Pool house ADUs, in-law suites, and garage conversions across Reno and Northern Nevada.',
  },
  {
    slug: 'portfolio/warehouse-metal-buildings',
    wpSlug: 'portfolio/warehouse-metal-buildings',
    title: 'Warehouse & Metal Buildings',
    type: 'Commercial',
    location: 'Northern Nevada',
    thumbnail: IMGS.svc_warehouse,
    thumbnailAlt: 'Warehouse Metal Building Construction Reno NV BRE Builders',
    desc: 'Commercial warehouse and metal building projects across Northern Nevada.',
  },
  {
    slug: 'quaking-aspen-repair',
    wpSlug: 'portfolio/quaking-aspen-structural-repair',
    title: 'Quaking Aspen Structural Repair',
    type: 'Structural Repair',
    location: 'Reno, NV',
    thumbnail: IMGS.repairs_rot,
    thumbnailAlt: 'Dry Rot Structural Damage Repair Reno NV BRE Builders',
    desc: 'Severe dry rot and structural damage repair — exposed framing, full remediation.',
  },
  {
    slug: 'lake-tahoe-deck-repair',
    wpSlug: 'portfolio/lake-tahoe-deck-balcony-structural-repair',
    title: 'Lake Tahoe Deck Structural Repair',
    type: 'Deck Repair',
    location: 'Lake Tahoe, NV',
    thumbnail: IMGS.repairs_deck_lt,
    thumbnailAlt: 'Steel Angle Brackets Securing Deck to CMU Wall Lake Tahoe BRE Builders',
    desc: 'Steel angle bracket system anchoring exterior deck to CMU wall. Full structural reinforcement.',
  },
  {
    slug: 'car-wash-reno',
    wpSlug: 'portfolio/car-wash-construction-reno-nv-concrete-slab-foundation',
    title: 'Car Wash — Concrete Slab & Foundation',
    type: 'Commercial / Concrete',
    location: 'Reno, NV',
    thumbnail: IMGS.concrete_slab,
    thumbnailAlt: 'Commercial Concrete Slab Pour Utility Access Car Wash Reno NV BRE Builders',
    desc: 'Full commercial concrete slab and foundation for a car wash in Reno — site prep, utility integration.',
  },
  {
    slug: 'arun-deck-repair',
    wpSlug: 'portfolio/arun-hillside-deck-repair-lake-tahoe-nv',
    title: 'Arun Hillside Deck Repair',
    type: 'Deck Repair',
    location: 'Lake Tahoe, NV',
    thumbnail: IMGS.repairs_arun,
    thumbnailAlt: 'Hillside Deck Repair Reinforced Support Beams Lake Tahoe NV BRE Builders',
    desc: 'Hillside deck repair with reinforced support beams and elevated framing on a challenging slope.',
  },
  {
    slug: 'rio-tinto-renovation',
    wpSlug: 'portfolio/rio-tinto-home-renovation-project',
    title: 'Rio Tinto Home Renovation',
    type: 'Residential Renovation',
    location: 'Rio Tinto, NV',
    thumbnail: IMGS.rio_tinto,
    thumbnailAlt: 'Interior Living Room Drywall Prep Rio Tinto Home Renovation Reno BRE Builders',
    desc: 'Full residential renovation — housewrap, siding, windows, drywall, custom bathroom tiling.',
  },
]

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function ProjectsPage() {
  const featured = ALL_PROJECTS.filter(p => p.featured)
  const rest = ALL_PROJECTS.filter(p => !p.featured)

  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-[660px] mb-16">
            <SL text="Portfolio" />
            <h1 className="font-display text-[clamp(40px,6vw,80px)] font-light leading-[0.95] tracking-tight text-cream mb-4">
              Projects That<br />
              <span className="italic text-teal">Speak.</span>
            </h1>
            <p className="text-[15px] text-cream/55 leading-relaxed">
              From ground-up luxury estates to structural repairs, ADU construction, and commercial buildouts —
              BRE Builders has been delivering results across Northern Nevada and California since 1989.
            </p>
          </div>

          {/* Featured projects — large cards */}
          <section className="mb-16">
            <SL text="Signature Projects" />
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((p, i) => (
                <a
                  key={p.slug}
                  href={`https://brebuilders.com/${p.wpSlug}/`}
                  className="group block overflow-hidden rounded-2xl border border-white/[0.055] hover:border-teal/25 transition-all duration-500 bg-panel"
                >
                  <div className="relative h-72 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.thumbnail}
                      alt={p.thumbnailAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="font-mono text-[10px] tracking-[2px] uppercase text-teal/80 mb-2">{p.type}</div>
                      <h2 className="font-display text-[22px] text-white mb-1 leading-snug">{p.title}</h2>
                      <p className="text-[12px] text-white/50">📍 {p.location}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[13px] text-cream/45 leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex items-center gap-4">
                      {p.imageCount && (
                        <span className="font-mono text-[11px] text-cream/30">{p.imageCount} photos</span>
                      )}
                      {p.videoUrl && (
                        <a
                          href={p.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-teal/60 hover:text-teal transition-colors"
                        >
                          ▶ Watch Video
                        </a>
                      )}
                      <span className="font-mono text-[11px] text-teal/55 group-hover:text-teal transition-colors ml-auto">
                        View Project →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Lake Tahoe inline gallery preview */}
          <section className="mb-16">
            <SL text="Lake Tahoe — 16-Photo Gallery" />
            <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none" style={{ scrollSnapType: 'x mandatory' }}>
              {Array.from({ length: 16 }, (_, i) => {
                const n = String(i + 1).padStart(2, '0')
                const suffix = i === 15 ? '-1' : ''
                return (
                  <div key={i} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '260px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://brebuilders.com/wp-content/uploads/2025/12/${n}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${i + 1}-of-16${suffix}-1024x684.webp`}
                      alt={`Lake Tahoe Full Home Renovation Photo ${i + 1} of 16 BRE Builders`}
                      className="w-full h-44 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500"
                      loading={i < 4 ? 'eager' : 'lazy'}
                    />
                  </div>
                )
              })}
            </div>
            <p className="font-mono text-[10px] text-cream/25 mt-2 tracking-wider">695 Lakeview Blvd · Zephyr Cove, NV · ← Swipe</p>
          </section>

          {/* All other projects */}
          <section>
            <SL text="All Projects" />
            <div className="grid md:grid-cols-3 gap-5">
              {rest.map((p, i) => (
                <a
                  key={p.slug}
                  href={`https://brebuilders.com/${p.wpSlug}/`}
                  className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/25 transition-all duration-500 bg-panel"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.thumbnail} alt={p.thumbnailAlt} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="font-mono text-[10px] tracking-[2px] uppercase text-teal/80 mb-1">{p.type}</div>
                      <h3 className="font-display text-[16px] text-white leading-snug">{p.title}</h3>
                      <p className="text-[12px] text-white/45 mt-0.5">📍 {p.location}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 p-8 bg-panel rounded-2xl border border-white/[0.06] text-center">
            <p className="font-display text-[24px] text-cream mb-2">Want to start your project?</p>
            <p className="text-[14px] text-cream/50 mb-6">Free estimates. Licensed in Nevada and California since 1989.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary px-8">Request a Free Quote →</Link>
              <a href="tel:7753914517" className="btn-ghost px-8 font-mono">(775) 391-4517</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
