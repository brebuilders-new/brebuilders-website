import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "From Strikes to Suds: How BRE Builders Saved a Reno Icon | BRE Builders",
  description: "BRE Builders transformed the abandoned Starlite Lanes bowling alley into Reno's longest car wash tunnel. Adaptive reuse case study. Licensed NV #0085999.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=From+Strikes+to+Suds&sub=How+BRE+Builders+Saved+a+Reno+Icon&badge=Commercial`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/from-strikes-to-suds-how-bre-builders-saved-a-reno-icon/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "From Strikes to Suds: How BRE Builders Saved a Reno Icon",
  author: { '@type': 'Organization', name: 'BRE Builders' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  datePublished: '2025-07-30',
  url: 'https://brebuilders.com/from-strikes-to-suds-how-bre-builders-saved-a-reno-icon/',
}

export default function CarWashBlogPage() {
  return (
    <BlogTemplate
      title="From Strikes to Suds"
      category="Commercial Construction"
      publishDate="July 30, 2025"
      heroImage={IMGS.concrete_slab}
      heroAlt="Commercial car wash construction Reno NV BRE Builders concrete slab"
      excerpt="BRE Builders transformed the abandoned Starlite Lanes bowling alley — vacant since 2015 — into Reno's longest car wash tunnel, overcoming seven years of damage, vandalism, and complex structural challenges."
      schema={schema}
      relatedServices={[
        { label: 'Commercial Construction', href: '/services/commercial' },
        { label: 'Concrete Work', href: '/services/concrete' },
        { label: 'Warehouse & Metal Buildings', href: '/services/warehouse' },
      ]}
      relatedPosts={[
        { title: 'Why More Reno Homeowners Trust BRE Builders for Structural Repairs', href: '/blog/reno-structural-repairs', img: IMGS.repairs_foundation, alt: 'Structural repairs Reno NV', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_rot, alt: '20 year home repairs Reno', category: 'Structural Repairs' },
        { title: 'ADU Construction Guide Nevada', href: '/blog/how-to-add-an-adu-in-nevada', img: IMGS.adu_main, alt: 'ADU construction Nevada guide', category: 'ADUs' },
      ]}
      content={
        <div>
          <p className="text-[16px] font-medium text-cream/80 leading-relaxed">BRE Builders transformed the abandoned Starlite Lanes bowling alley — vacant since 2015 — into Reno&apos;s longest car wash tunnel, overcoming seven years of structural damage, vandalism, and complex engineering challenges.</p>

          <h2>The Story</h2>
          <p>The Starlite Lanes property had sat vacant for nearly a decade. Seven years without maintenance meant the structure had accumulated freeze-thaw damage, vandalism, water intrusion at multiple points, and deferred maintenance across every system. Most contractors walked away from projects like this. BRE Builders didn&apos;t.</p>
          <p>Blue Reef Enterprises took on the full scope — structural assessment, demolition of compromised elements, new commercial concrete slab with integrated utility access and drainage, and complete commercial build-out through finishes. The result: Reno&apos;s longest car wash tunnel, built on the bones of a Reno institution.</p>

          <h2>Why It Matters — Adaptive Reuse vs. New Construction</h2>
          <p>This project is a case study in adaptive reuse — converting an existing structure rather than building from scratch. The numbers make a compelling argument:</p>
          <ul>
            <li><strong>50–75% reduction in carbon emissions</strong> compared to equivalent new construction</li>
            <li><strong>15–30% cost savings</strong> versus building a new commercial structure of the same footprint</li>
            <li><strong>Faster permitting</strong> — existing footprint, existing utility connections, existing site entitlements</li>
            <li><strong>Community preservation</strong> — a Reno landmark got a second life rather than demolition</li>
          </ul>

          <h2>The Technical Challenges</h2>
          <p>Converting a bowling alley into a car wash tunnel required solving specific structural and MEP problems that don&apos;t come up in standard commercial construction:</p>

          <h3>Commercial Concrete Slab with Utility Access</h3>
          <p>A car wash tunnel requires precise drainage slopes, embedded utility access points, and a slab capable of carrying continuous vehicle traffic. BRE Builders designed and poured a commercial slab with integrated trench drains, utility stub-outs, and the structural capacity for the tunnel equipment load — while tying into the existing foundation where it remained sound.</p>

          <h3>Seven Years of Deferred Damage</h3>
          <p>The structure had accumulated significant problems from neglect: water intrusion through the roof had damaged interior framing, vandals had removed copper plumbing and fixtures, and freeze-thaw cycles had stressed the original concrete. BRE Builders assessed the full scope before any permit was pulled — no surprises mid-project.</p>

          <h3>Permit Coordination — City of Reno Commercial</h3>
          <p>Commercial projects in Reno involve multiple permit types and inspection phases — building, electrical, plumbing, mechanical, and fire. BRE Builders managed the full permit process through the City of Reno Building Department, coordinating all trades and inspections through to Certificate of Occupancy.</p>

          <h2>Featured in Northern Nevada Business Weekly — July 2025</h2>
          <p>The project was recognized by Northern Nevada Business Weekly in July 2025 as an example of commercial adaptive reuse in the Reno market. The article highlighted BRE Builders&apos; approach to structural assessment and phased renovation for the commercial redevelopment sector.</p>

          <h2>Commercial Construction in Reno — BRE Builders</h2>
          <p>BRE Builders handles commercial construction throughout Reno and Northern Nevada — tenant improvements, ground-up builds, adaptive reuse, and structural repairs on commercial properties. If you have a commercial project that other contractors have turned down, call us. We have the structural experience to assess it honestly and execute it correctly.</p>
          <p>Free estimates on all commercial projects. Licensed NV #0085999 · CA #1093798.</p>
        </div>
      }
    />
  )
}
