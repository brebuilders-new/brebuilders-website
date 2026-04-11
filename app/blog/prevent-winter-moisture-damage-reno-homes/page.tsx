import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Prevent Winter Moisture Damage Older Reno Homes | BRE Builders',
  description: 'Older Reno homes lack modern vapor barriers and insulation, making them vulnerable every winter. BRE Builders explains what to check and how to protect your home before temperatures drop. NV #0085999.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=How+to+Prevent+Winter+Moisture+Damage+in+Older+Ren&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Winter+Prep`, width: 1200, height: 630,
      alt: 'Blue Reef Builders — Prevent Winter Moisture Damage Older Reno Homes | BRE Builders', }] },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  twitter: {
    card: 'summary_large_image',
    title: 'Prevent Winter Moisture Damage Older Reno Homes | BRE Builders',
    description: 'Older Reno homes lack modern vapor barriers and insulation, making them vulnerable every winter. BRE Builders explains what to check and how to protect you',
    images: [{ url: `${SITE_URL}/api/og?title=How+to+Prevent+Winter+Moisture+Damage+in+Older+Ren&sub=BRE+Builders+%C2%B7+NV+%230085999+%C2%B7+Free+Evaluation&badge=Winter+Prep`, alt: 'Blue Reef Builders — Prevent Winter Moisture Damage Older Reno Homes | BRE Builders' }],
  },
  alternates: { canonical: `${SITE_URL}/blog/prevent-winter-moisture-damage-reno-homes/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Prevent Winter Moisture Damage in Older Reno Homes',
      description: 'Older Reno homes lack modern vapor barriers and insulation, making them vulnerable every winter. BRE Builders explains what to check and how to protect your home before temperatures drop. NV #0085999.',
      author: { '@type': 'Person', name: 'Steve Rosenthal', jobTitle: 'Owner, BRE Builders' },
      publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com', logo: { '@type': 'ImageObject', url: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2026/01/brelogo.webp' } },
      datePublished: '2025-10-01',
      dateModified: '2025-11-01',
      image: IMGS.repairs_foundation,
      url: `${SITE_URL}/blog/prevent-winter-moisture-damage-reno-homes/`,
      keywords: 'winter moisture damage reno homes, prevent moisture older home reno nv, northern nevada home winterization, bre builders moisture prevention',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.article-lede', 'article h2'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I prevent moisture damage in an older Reno home over winter?', acceptedAnswer: { '@type': 'Answer', text: 'Five priorities for older Reno homes: (1) Seal windows and doors with new weatherstripping and caulk. (2) Have your crawlspace evaluated and install a vapor barrier if not present. (3) Inspect and repair roof flashing, particularly around chimneys and at valleys. (4) Clean gutters and downspouts so snowmelt routes away from the foundation. (5) Confirm bathroom fans vent to the exterior, not into the attic.' } },
        { '@type': 'Question', name: 'What are the signs of winter moisture damage in a Reno home?', acceptedAnswer: { '@type': 'Answer', text: 'Early signs include: peeling paint or bubbling wallpaper on exterior walls, ceiling staining that appears or grows after rain or snowmelt, musty odor in specific rooms or closets, condensation on windows that does not occur in summer, and soft spots in floors near exterior walls. These signs often appear in spring after the damage occurred over winter.' } },
        { '@type': 'Question', name: 'Why are older Reno homes more vulnerable to winter moisture?', acceptedAnswer: { '@type': 'Answer', text: 'Homes built before the 1990s typically lack: continuous vapor barriers in crawlspaces, foam-sealed rim joists, high-R insulation in attics, and modern weatherstripping on windows and doors. Aging wood and plaster absorb and retain moisture differently than modern materials. Without active maintenance, these conditions worsen each winter.' } },
        { '@type': 'Question', name: 'When should I replace weatherstripping on windows and doors in Reno?', acceptedAnswer: { '@type': 'Answer', text: 'If you can feel cold air around window or door frames in winter, or if existing weatherstripping is cracked, flattened, or separating from the frame — replace it before the first hard freeze. This is a simple, inexpensive fix that prevents significant moisture and heat loss over the course of a winter.' } },
      ],
    },
  ],
}

export default function Blog_PreventWinterMoistureDamageRenoHomes() {
  return (
    <BlogTemplate
      title="How to Prevent Winter Moisture Damage in Older Reno Homes"
      category="Structural Repairs"
      publishDate="October 2025"
      heroImage={IMGS.repairs_foundation}
      heroAlt="Winter moisture damage prevention older Reno home — structural evaluation BRE Builders NV #0085999"
      excerpt="Older Reno homes were built before modern vapor barriers and insulation standards. Winter moisture seeps in through aging materials, gaps, and unprotected crawlspaces. Here is what to check before the cold season."
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
          <p>Older Reno homes have character and value — but they were built before modern vapor barriers, insulation standards, and building envelope requirements. As temperatures drop below freezing and snowmelt cycles begin, moisture finds entry through aging materials, failed seals, and unprotected structural cavities. The damage from winter moisture rarely shows up in winter — it shows up in spring, after months of slow infiltration.</p>

          <h2>Why Older Homes Are More Vulnerable</h2>

          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Older Reno home foundation moisture vulnerability — winter moisture damage prevention evaluation BRE Builders"
            caption="Foundation moisture assessment in an older Reno home — winter is when existing vulnerabilities become active damage"
          />

          <p>Homes built before the 1990s typically lack the continuous vapor barriers, foam-sealed rim joists, and high-R insulation that modern construction requires. Aging wood, plaster, and original windows absorb and retain moisture differently than modern materials. When temperatures drop, thermal bridging creates cold surfaces where condensation forms — silently, inside walls and crawlspaces — over the entire winter season.</p>

          <BlogPullQuote>
            Winter moisture damage rarely shows up in winter. It shows up in spring — as mold, as soft flooring, as ceiling staining — after months of slow infiltration you could not see or feel while it was happening.
          </BlogPullQuote>

          <h2>What to Check Before Winter Arrives</h2>

          <BlogImage
            src={IMGS.blog_cracked_shower}
            alt="Water damage behind wall surfaces Reno home — moisture infiltration winter BRE Builders structural repair"
            caption="What lies behind surfaces that look fine — moisture damage discovered during renovation of a pre-1995 Reno home"
          />

          <h3>Windows and door frames</h3>
          <p>Older homes often have deteriorated weatherstripping and failed caulk around frames. If you can feel cold air at the frame edges in winter, moisture is also entering. Reseal with weatherstripping and caulk rated for exterior use before temperatures drop consistently below freezing.</p>

          <h3>Roof flashing</h3>
          <p>Flashing at chimneys, valleys, skylights, and roof-to-wall transitions fails over time. Any ceiling staining that appeared after last winter — even faint — indicates a flashing failure that will worsen with snow loading and freeze-thaw cycles. Have it repaired before the first significant snowfall.</p>

          <h3>Gutters and downspouts</h3>
          <p>Clogged gutters cause overflow that pools against the foundation. In older homes without adequate foundation waterproofing, this winter pooling is a primary moisture infiltration path. Clean gutters before winter and extend downspouts at least four feet away from the foundation.</p>

          <h3>Crawlspace vapor barrier</h3>

          <BlogImage
            src={IMGS.blog_basement_water}
            alt="Crawlspace moisture winter Reno older home — vapor barrier needed northern nevada"
            caption="Unprotected crawlspace in a pre-1990s Reno home — without a vapor barrier, winter ground moisture continuously evaporates upward"
          />

          <p>Ground moisture rises through unprotected crawlspaces into the floor system above, year-round — but especially in winter when temperature differentials increase evaporation. In older Reno homes with vented crawlspaces built on clay soil, this is a primary source of winter subfloor and joist deterioration over time.</p>

          <h2>Frequently Asked Questions</h2>

          <h3>What are the signs of winter moisture damage in Reno homes?</h3>
          <p>Early signs include: peeling paint or bubbling wallpaper on exterior walls, ceiling staining that appears after snowmelt or rain, musty odors in specific rooms, condensation on windows that does not occur in summer, and soft spots in floors near exterior walls. These signs often appear in spring after the damage occurred over winter.</p>

          <h3>Is weatherstripping replacement worth doing on older windows?</h3>
          <p>Yes — it is the lowest-cost, highest-ROI winter preparation for older homes. If you can feel cold air at frames in winter, moisture is also entering. Replacement weatherstripping and exterior-rated caulk costs very little and prevents significant heat loss and moisture infiltration over the course of a full winter.</p>
        </div>
      }
    />
  )
}
