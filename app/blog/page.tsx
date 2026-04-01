import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Blog | BRE Builders Reno NV Construction Tips & News',
  description:
    'Construction tips, ADU guides, repair advice, and local market insights from BRE Builders — licensed general contractor in Reno, NV since 1989.',
  alternates: { canonical: 'https://brebuilders.com/blog/' },
}

// All verified WP blog posts — these live at brebuilders.com, not on the new site
// Links go directly to WP until blog posts are migrated
const POSTS = [
  {
    slug: 'how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide',
    title: 'How to Add an ADU in Nevada Without Breaking the Bank: 2025 Guide',
    category: 'ADU',
    excerpt: 'Nevada ADU laws, permit costs, construction timelines, and real cost data for Reno homeowners considering an accessory dwelling unit in 2025.',
    img: IMGS.adu_main,
    alt: 'ADU Guide Nevada 2025 BRE Builders',
    priority: true,
  },
  {
    slug: 'top-10-signs-your-home-needs-structural-repair-dont-ignore-3',
    title: 'Top 10 Signs Your Home Needs Structural Repair (Don\'t Ignore #3)',
    category: 'Structural Repairs',
    excerpt: 'Warning signs that indicate your Reno home may have structural issues — from stair-step cracks to bowing walls. What to watch for.',
    img: IMGS.repairs_rot,
    alt: 'Structural Repair Warning Signs Reno Home',
    priority: true,
  },
  {
    slug: 'deck-safety-warning-signs-reno-lake-tahoe',
    title: 'Deck Safety Warning Signs for Reno and Lake Tahoe Homeowners',
    category: 'Decks',
    excerpt: 'Eight signs your Reno or Lake Tahoe deck needs immediate inspection. Seasonal wear, freeze-thaw damage, and structural warning signs.',
    img: IMGS.repairs_arun,
    alt: 'Deck Safety Warning Signs Reno Lake Tahoe',
    priority: true,
  },
  {
    slug: 'reno-kitchen-remodeling-top-trends-investment-tips-for-2025',
    title: 'Reno Kitchen Remodeling: Top Trends & Investment Tips for 2025',
    category: 'Kitchen & Bath',
    excerpt: 'Kitchen remodel ROI in Reno, current material trends, and what Reno homeowners should prioritize for resale or livability.',
    img: IMGS.ripon[1],
    alt: 'Kitchen Remodeling Reno NV 2025 Trends',
  },
  {
    slug: 'from-strikes-to-suds-how-bre-builders-saved-a-reno-icon',
    title: 'From Strikes to Suds: How BRE Builders Saved a Reno Icon',
    category: 'Commercial',
    excerpt: 'The story of the BRE Builders car wash project in Reno — converting a bowling alley into a commercial car wash.',
    img: IMGS.concrete_slab,
    alt: 'Commercial Concrete Car Wash Construction Reno NV BRE Builders',
  },
  {
    slug: 'reno-home-repairs-20-year-old-house',
    title: 'Reno Home Repairs: What to Expect in a 20-Year-Old House',
    category: 'Structural Repairs',
    excerpt: 'What structural and system issues commonly appear in Reno homes built in the early 2000s — and what to do about them.',
    img: IMGS.repairs_foundation,
    alt: 'Reno Home Repairs 20 Year Old House Structural Issues',
  },
  {
    slug: 'reno-home-repairs-30-year-old-house',
    title: 'Reno Home Repairs: What to Expect in a 30-Year-Old House',
    category: 'Structural Repairs',
    excerpt: "What Reno homeowners should expect in homes from the 1990s — foundation concerns, aging systems, and deferred maintenance.",
    img: IMGS.repairs_rot,
    alt: 'Reno Home Repairs 30 Year Old House Structural',
  },
  {
    slug: 'why-more-reno-homeowners-trust-bre-builders-for-structural-repairs',
    title: 'Why More Reno Homeowners Trust BRE Builders for Structural Repairs',
    category: 'Structural Repairs',
    excerpt: 'What sets BRE Builders apart for structural repair work in Northern Nevada — licensing, approach, and track record.',
    img: IMGS.repairs_deck_lt,
    alt: 'Reno Structural Repair Contractor BRE Builders',
  },
  {
    slug: 'reno-1-billion-redevelopment-contractors',
    title: 'Reno\'s $1 Billion Redevelopment: What It Means for Local Contractors',
    category: 'Commercial',
    excerpt: 'Reno\'s ongoing downtown and midtown redevelopment — what\'s being built, who\'s doing the work, and the outlook for local contractors.',
    img: IMGS.svc_commercial,
    alt: 'Reno Redevelopment Commercial Construction BRE Builders',
  },
  {
    slug: 'what-reno-homeowners-overlook-in-10-year-old-homes',
    title: 'What Reno Homeowners Overlook in 10-Year-Old Homes',
    category: 'Structural Repairs',
    excerpt: 'Common maintenance blind spots in Reno homes that are 8–12 years old — what to inspect before problems compound.',
    img: IMGS.lt(5),
    alt: 'Reno Home Maintenance 10 Year Old House BRE Builders',
  },
]

const CATEGORIES = ['All', 'ADU', 'Structural Repairs', 'Kitchen & Bath', 'Decks', 'Commercial']

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
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-[660px] mb-14">
            <SL text="Construction Blog" />
            <h1 className="font-display text-[clamp(38px,5.5vw,72px)] font-light leading-[0.95] tracking-tight text-cream mb-4">
              Insights From the<br />
              <span className="italic text-teal">Job Site.</span>
            </h1>
            <p className="text-[15px] text-cream/55 leading-relaxed">
              ADU guides, repair advice, remodeling tips, and Northern Nevada construction
              insights from BRE Builders — licensed since 1989.
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map(c => (
              <span key={c} className="font-mono text-[11px] tracking-wider text-cream/50 border border-white/[0.1] px-3 py-1.5 rounded-full hover:border-teal/30 hover:text-teal transition-all cursor-pointer">
                {c}
              </span>
            ))}
          </div>

          {/* Featured posts */}
          <section className="mb-14">
            <SL text="Featured Guides" />
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((p, i) => (
                <a
                  key={p.slug}
                  href={`https://brebuilders.com/${p.slug}/`}
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
                    <span className="font-mono text-[11px] text-teal/60 group-hover:text-teal transition-colors tracking-wider uppercase">
                      Read Article →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* All other posts */}
          <section className="mb-14">
            <SL text="All Posts" />
            <div className="space-y-0">
              {rest.map((p, i) => (
                <a
                  key={p.slug}
                  href={`https://brebuilders.com/${p.slug}/`}
                  className="group flex items-start gap-5 py-5 border-b border-white/[0.055] hover:bg-panel/30 -mx-4 px-4 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded-lg hidden sm:block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] tracking-wider uppercase text-teal/60 mb-1">{p.category}</div>
                    <h3 className="font-display text-[16px] text-cream leading-snug mb-1 group-hover:text-teal transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[12px] text-cream/35 leading-relaxed hidden md:block">{p.excerpt}</p>
                  </div>
                  <span className="font-mono text-[11px] text-teal/40 group-hover:text-teal transition-colors flex-shrink-0 hidden sm:block">→</span>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-panel rounded-2xl p-8 border border-white/[0.06] text-center">
            <p className="font-display text-[22px] text-cream mb-2">Have a project in mind?</p>
            <p className="text-[14px] text-cream/50 mb-6">
              BRE Builders provides free estimates for all residential and commercial projects.
              Licensed NV #0085999 · CA #1009219.
            </p>
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
