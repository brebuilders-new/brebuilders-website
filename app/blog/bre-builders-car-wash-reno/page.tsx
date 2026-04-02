import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
export const metadata: Metadata = {
  title: 'From Strikes to Suds: How BRE Builders Saved a Reno Icon',
  description: 'BRE Builders transformed the abandoned Starlite Lanes bowling alley (vacant since 2015) into Reno\'s longest car wash tunnel. Featured in Northern Nevada Business Weekly, July 2025.',
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=From+Strikes+to+Suds&sub=BRE+Builders+Transforms+a+Reno+Icon+%C2%B7+Concrete+%26+Commercial&badge=Commercial`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/from-strikes-to-suds-how-bre-builders-saved-a-reno-icon/' },
}
export default function CarWashBlogPage() {
  return (
    <BlogTemplate
      title="From Strikes to Suds: How BRE Builders Saved a Reno Icon"
      category="Concrete Work"
      heroImage={IMGS.concrete_slab}
      heroAlt="Commercial Concrete Slab Pour with Utility Access Reno NV BRE Builders Car Wash"
      excerpt="BRE Builders transformed the abandoned Starlite Lanes bowling alley into Reno's longest car wash tunnel. Featured in Northern Nevada Business Weekly, July 29, 2025."
      relatedServices={[{ label: 'Commercial Construction', href: '/services/commercial' }, { label: 'Concrete Work', href: '/services/concrete' }]}
      relatedPosts={[
        { title: "Reno's $1 Billion Redevelopment", href: '/blog/reno-redevelopment', img: IMGS.svc_commercial, alt: 'Reno redevelopment', category: 'Commercial' },
        { title: 'Structural Repair Warning Signs', href: '/blog/structural-repair-warning-signs', img: IMGS.repairs_rot, alt: 'Structural repair', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p className="font-mono text-[11px] text-teal/70 tracking-wider mb-2">NEWS · FEATURED IN NORTHERN NEVADA BUSINESS WEEKLY · JULY 29, 2025</p>
          <h2>The Story</h2>
          <p>Blue Reef Enterprises (BRE Builders) transformed the abandoned Starlite Lanes bowling alley — vacant since 2015 — into Reno&apos;s longest car wash tunnel, overcoming seven years of damage, vandalism, and complex structural challenges.</p>
          <p>Picture this: a 1963 bowling alley sits abandoned for seven years. Squatters rip out copper pipes. Debris fills where strikes once echoed. Most people see a lost cause. Steve and his team at Blue Reef Enterprises saw the future home of Reno&apos;s longest car wash tunnel.</p>
          <h2>Why It Matters</h2>
          <p>This adaptive reuse project showcases how experienced contractors can save 50–75% in carbon emissions and 15–30% in costs compared to new construction, while revitalizing community spaces.</p>
          <h2>Technical Challenges Solved</h2>
          <p>Blue Reef&apos;s team solved major challenges including structural steel reinforcement, space division (12,000 sq ft car wash + 15,000 sq ft event venue), and innovative heat recovery systems. Raw site conditions presented uneven terrain, utility conflicts, and poor drainage that required extensive excavation and grading work.</p>
          <h2>Business Impact</h2>
          <p>Featured in Northern Nevada Business Weekly, the project demonstrates Blue Reef Enterprises&apos; 35+ years of expertise in complex commercial renovations across Nevada and California. Licensed NV #0085999 · CA #1093798.</p>
        </div>
      }
    />
  )
}
