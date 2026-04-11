import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Vapor Barrier Crawlspace Northern Nevada | BRE Builders Reno',
  description: 'Northern Nevada crawlspaces face seasonal moisture, clay soil expansion, and pest pressure. BRE Builders explains when a vapor barrier is needed, what to look for first, and what full encapsulation involves. NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Do+I+Need+a+Vapor+Barrier+in+My+Crawlspace+in+Nort&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Crawlspace`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Vapor Barrier Crawlspace Northern Nevada | BRE Builders Reno', }] },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Vapor Barrier Crawlspace Northern Nevada | BRE Builders Reno',
    description: 'Northern Nevada crawlspaces face seasonal moisture, clay soil expansion, and pest pressure. BRE Builders explains when a vapor barrier is needed, what to l',
    images: [{ url: `${SITE_URL}/api/og?title=Do+I+Need+a+Vapor+Barrier+in+My+Crawlspace+in+Nort&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Crawlspace`, alt: 'Blue Reef Builders — Vapor Barrier Crawlspace Northern Nevada | BRE Builders Reno' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/vapor-barrier-crawlspace-northern-nevada/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Do I Need a Vapor Barrier in My Crawlspace in Northern Nevada?',
      description: 'Northern Nevada crawlspaces face seasonal moisture, clay soil expansion, and pest pressure. BRE Builders explains when a vapor barrier is needed, what to look for first, and what full encapsulation involves. NV #0085999.',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com', logo: { '@type': 'ImageObject', url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp' } },
      datePublished: '2025-11-01',
      dateModified: '2025-11-01',
      image: IMGS.repairs_foundation,
      url: `${SITE_URL}/blog/vapor-barrier-crawlspace-northern-nevada/`,
      keywords: 'vapor barrier crawlspace northern nevada, do i need vapor barrier reno nv, crawlspace moisture protection reno, bre builders crawlspace repair',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.article-lede', 'article h2'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a vapor barrier in my Northern Nevada crawlspace?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, yes. Northern Nevada clay soils absorb seasonal moisture from snowmelt and create ground vapor pressure against crawlspace floors year-round. Without a vapor barrier, this moisture evaporates upward into the subfloor system, causing wood rot, mold, pest infestations, and whole-home humidity problems. BRE Builders recommends evaluation of any home with an unprotected crawlspace.' } },
        { '@type': 'Question', name: 'What thickness vapor barrier do I need in Nevada?', acceptedAnswer: { '@type': 'Answer', text: 'For Northern Nevada conditions, a minimum 6-mil polyethylene sheet is the code-standard floor barrier. For crawlspaces with high seasonal moisture, pest history, or active drainage issues, 10-20 mil reinforced vapor barrier is recommended for durability. The barrier should extend up walls and be sealed to foundation walls and any piers.' } },
        { '@type': 'Question', name: 'How do I know if my crawlspace needs a vapor barrier?', acceptedAnswer: { '@type': 'Answer', text: 'Signs that indicate a vapor barrier is needed: musty odors in the home, soft or cold floors in winter, visible moisture or mold on joists or subfloor, pest activity, and high whole-home humidity without a visible leak source. If your crawlspace floor is bare soil or has only partial coverage — it needs a barrier.' } },
        { '@type': 'Question', name: 'Can I install a vapor barrier myself?', acceptedAnswer: { '@type': 'Answer', text: 'A basic floor barrier installation is within DIY capability for accessible crawlspaces with no existing damage. However, if mold, pest damage, or structural issues are present, professional remediation must occur first. Improperly installed barriers that leave gaps or do not extend up walls provide minimal protection. BRE Builders provides free crawlspace evaluations to assess what is needed. NV #0085999.' } },
      ],
    },
  ],
}

export default function Blog_VaporBarrierCrawlspaceNorthernNevada() {
  return (
    <BlogTemplate
      title="Do I Need a Vapor Barrier in My Crawlspace in Northern Nevada?"
      category="Structural Repairs"
      publishDate="November 2025"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Crawlspace vapor barrier Northern Nevada Reno — foundation moisture protection BRE Builders NV #0085999"
      excerpt="In Northern Nevada's variable climate, a crawlspace without a vapor barrier is an open door for moisture, mold, and pest damage. Here is when you need one — and what to assess first."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: 'Top 10 Signs Your Home Needs Structural Repair', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair warning signs Reno NV', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.blog_20yr_hero, alt: '20 year old Reno home repairs', category: 'Structural Repairs' },
        { title: 'Why Trust BRE Builders for Structural Repairs', href: '/blog/reno-structural-repairs', img: IMGS.blog_contractor, alt: 'BRE Builders structural repairs Reno NV', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>In Northern Nevada, crawlspace moisture is a seasonal problem that compounds over years. Spring snowmelt saturates clay soils. Summer temperature swings drive condensation. Without a vapor barrier, ground moisture evaporates upward into your floor system continuously — causing subfloor rot, mold on joists, and humidity throughout the home. The question is not usually whether you need one — it is what condition the crawlspace is in before you install it.</p>

          <h2>What a Vapor Barrier Does</h2>

          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Crawlspace foundation moisture Northern Nevada — vapor barrier installation evaluation BRE Builders Reno NV"
            caption="Foundation and crawlspace floor assessment — existing conditions must be evaluated before installing any vapor barrier"
          />

          <p>A vapor barrier is a polyethylene sheet installed across the crawlspace floor — typically 6 to 20 mil thickness depending on conditions. It blocks ground moisture from evaporating into the crawlspace air. Combined with proper ventilation or full encapsulation, it prevents the moisture accumulation that drives most crawlspace problems in Nevada. The barrier must extend up foundation walls and be sealed at any penetrations to be effective.</p>

          <h2>Signs You Need One Now</h2>

          <BlogImage
            src={IMGS.blog_basement_water}
            alt="Crawlspace moisture damage wet soil Reno Nevada — vapor barrier needed northern nevada home"
            caption="Visible moisture and wet soil in a Northern Nevada crawlspace — this is an active condition that will cause subfloor damage if not addressed"
          />

          <h3>Musty odors in the home</h3>
          <p>Ground moisture evaporating through an uncovered crawlspace carries organic odors that permeate flooring and rise into living spaces. If your home smells damp or musty — particularly in rooms directly above the crawlspace — the barrier is the first thing to evaluate.</p>

          <h3>Cold or soft floors</h3>
          <p>Cold floors in winter often indicate uninsulated and moisture-affected subfloors. Soft spots indicate subfloor rot — the moisture problem has been active long enough to cause structural damage. At this point, remediation of the subfloor and joists is required in addition to the vapor barrier.</p>

          <h3>Visible moisture in the crawlspace</h3>
          <p>Wet soil, condensation on pipes, rust on metal components, or standing water after rain are all direct indicators of a moisture problem a vapor barrier would address. If water is pooling — drainage corrections are needed before any barrier is installed.</p>

          <BlogPullQuote>
            A vapor barrier is a baseline, not a cure-all. If the crawlspace has existing mold, pest damage, or drainage issues, those must be addressed first. Installing a barrier over active damage makes conditions worse, not better.
          </BlogPullQuote>

          <h2>Northern Nevada Considerations</h2>

          <BlogImage
            src={IMGS.repairs_rot}
            alt="Subfloor rot from crawlspace moisture — dry rot damage Reno NV northern nevada home BRE Builders"
            caption="Subfloor rot from years of unaddressed crawlspace moisture — what happens when a vapor barrier is needed but never installed"
          />

          <p>Reno's clay-heavy soils expand and contract with moisture — this creates seasonal pressure changes in crawlspaces, particularly in South Reno, Spanish Springs, and older neighborhoods in Sparks. In these areas, a vapor barrier is not optional — it is a baseline requirement for maintaining subfloor integrity over time. BRE Builders provides free crawlspace evaluations throughout the Reno metro and Lake Tahoe region. NV License #0085999.</p>

          <h2>Frequently Asked Questions</h2>

          <h3>What thickness vapor barrier for Nevada conditions?</h3>
          <p>Minimum 6-mil polyethylene for standard conditions. For crawlspaces with high seasonal moisture, pest history, or active drainage issues — 10-20 mil reinforced barrier is recommended. The barrier must extend up foundation walls and be sealed at all penetrations and piers to be effective.</p>

          <h3>Do I need to fix existing damage before installing a barrier?</h3>
          <p>Yes, always. Mold, pest damage, rotted joists, and drainage problems must be addressed first. Installing a barrier over existing damage seals the problem in and allows it to continue under the barrier. BRE Builders evaluates all existing conditions before recommending scope.</p>
        </div>
      }
    />
  )
}
