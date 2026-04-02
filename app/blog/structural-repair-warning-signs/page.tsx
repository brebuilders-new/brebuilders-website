import type { Metadata } from 'next'
import BlogTemplate, { BlogImage, BlogPullQuote } from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: "Top 10 Signs Your Home Needs Structural Repair — Don't Ignore #3 | BRE Builders",
  description: "10 structural warning signs Reno homeowners miss until it's expensive. BRE Builders breaks down each sign, what causes it, and what it means for your home. Licensed NV #0085999.",
  openGraph: { images: [{ url: `${SITE_URL}/api/og?title=Top+10+Structural+Repair+Warning+Signs&sub=Don%27t+Ignore+%233+%C2%B7+Reno+NV&badge=Structural+Repairs`, width: 1200, height: 630 }] },
  alternates: { canonical: 'https://brebuilders.com/top-10-signs-your-home-needs-structural-repair-dont-ignore-3/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Top 10 Signs Your Home Needs Structural Repair — Don't Ignore #3",
  author: { '@type': 'Organization', name: 'BRE Builders' },
  publisher: { '@type': 'Organization', name: 'Blue Reef Builders', url: 'https://brebuilders.com' },
  datePublished: '2025-06-01',
  url: 'https://brebuilders.com/top-10-signs-your-home-needs-structural-repair-dont-ignore-3/',
}

export default function StructuralWarningSignsPage() {
  return (
    <BlogTemplate
      title="Top 10 Signs Your Home Needs Structural Repair"
      category="Structural Repairs"
      publishDate="June 2025"
      heroImage={IMGS.repairs_rot}
      heroAlt="Dry rot and structural damage Reno home BRE Builders inspection"
      excerpt="Most structural problems in Reno homes give clear warning signs before they become critical — but homeowners often miss them or chalk them up to cosmetic issues. BRE Builders breaks down the top 10 warning signs and what each one means."
      schema={schema}
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: '8 Signs Your Deck Is No Longer Safe', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_deck_lt, alt: 'Deck safety warning signs', category: 'Decks' },
        { title: 'Why More Reno Homeowners Trust BRE Builders', href: '/blog/reno-structural-repairs', img: IMGS.repairs_foundation, alt: 'BRE structural repairs Reno', category: 'Structural Repairs' },
        { title: '20-Year-Old Reno Home Repairs', href: '/blog/reno-home-repairs-20-year', img: IMGS.repairs_foundation, alt: '20 year home repairs', category: 'Structural Repairs' },
      ]}
      content={
        <div>
          <p>Most structural problems give you warning before they become catastrophic. Reno&apos;s specific conditions — expansive clay soils, freeze-thaw cycling, high UV, and temperature extremes — create recognizable damage patterns that BRE Builders has inspected and repaired since 1989. Here are the top 10 signs to act on.</p>

          <BlogImage
            src={IMGS.blog_contractor}
            alt="Licensed structural contractor inspecting foundation Reno NV BRE Builders"
            caption="BRE Builders has performed structural inspections across Northern Nevada and California since 1989"
            priority
          />

          <h2>1. Diagonal Cracks at Window and Door Corners</h2>
          <p>A diagonal crack running from the corner of a window or door opening — often at roughly 45 degrees — is the classic sign of foundation movement or settlement in Reno homes. The crack follows the path of least resistance in the drywall or stucco as the structure racks. This is not a drywall finishing problem. The crack will reappear after patching if the underlying movement continues. Get a structural assessment before repainting.</p>

          <h2>2. Doors and Windows That Stick or Won&apos;t Latch</h2>
          <p>A door that fit perfectly three years ago and now sticks at the top or bottom has racked — meaning the rough opening is no longer square. This follows from differential foundation settlement. It&apos;s a progressive problem: the longer it goes unaddressed, the worse the racking gets. Plane the door once if you need it to function, but the structural cause needs diagnosis.</p>

          <BlogImage
            src={IMGS.repairs_foundation}
            alt="Foundation cracks and settlement repair Reno NV BRE Builders"
            caption="Foundation cracks from clay soil movement — a common issue in Northern Nevada homes"
          />

          <h2>3. Floors That Slope or Feel Springy</h2>
          <p>This is the one homeowners most commonly ignore — and it&apos;s often the most serious. Sloping floors mean the structural support system beneath them has moved. Springy or bouncy floors mean the joists are undersized, damaged, or their connections have failed. A marble on the floor tells you immediately if you have slope. Any bounce when walking on a main floor (not upper-story bounce, which can be normal) warrants looking in the crawlspace. Free crawlspace inspection from BRE Builders.</p>

          <h2>4. Cracks in the Foundation or Stem Wall</h2>
          <p>Hairline shrinkage cracks in concrete foundations are common and usually benign. Cracks that are horizontal, that show displacement (one side higher than the other), that are wider than ⅛ inch, or that have grown over time are structural concerns. Horizontal cracks in basement or crawlspace walls indicate lateral pressure from soil — a sign that the wall is being pushed inward by expansive clay. This is not a crack-filling issue. It requires engineering assessment and typically helical tiebacks or carbon fiber straps.</p>

          <BlogPullQuote>
            Reno&apos;s clay soils expand when wet and shrink when dry — this constant movement is the #1 cause of structural damage in Northern Nevada homes.
          </BlogPullQuote>

          <h2>5. Visible Sagging Between Joists</h2>
          <p>Stand back and look at your ceiling or floor from a low angle. Any sagging between joist bays — the ceiling bowing down between where the joists are — indicates joist damage, excessive span without adequate sizing, or post/beam failure below. In Reno crawlspaces, joist damage from moisture or rot is the most common cause. In older homes, undersized original framing is frequent.</p>

          <h2>6. Gaps Between Walls and Ceiling</h2>
          <p>A gap appearing between an interior partition wall and the ceiling above it — particularly in upper floors or rooms below a ridge — indicates that the floor or roof structure above is deflecting under load. This is a framing problem, not a finishing problem. It typically signals either undersized framing, a failed ridge beam connection, or removal of a load-bearing element during a prior renovation.</p>

          <BlogImage
            src={IMGS.blog_wall_gaps}
            alt="Gap between wall and flooring indicating foundation settlement Reno NV"
            caption="Gaps between walls and flooring — a clear indicator of differential foundation movement"
          />

          <h2>7. Musty Smell in Crawlspace or Basement</h2>
          <p>A persistent musty or earthy smell from below is almost always moisture — and moisture in a crawlspace means wood rot is either active or developing. Reno&apos;s irrigation season introduces significant moisture into crawlspaces from perimeter saturation. An unencapsulated crawlspace with standing water or wet soil is rotting the sill plates and floor joists even if you can&apos;t see it from above. BRE Builders performs crawlspace inspections as part of every structural repair assessment.</p>

          <h2>8. White Staining on Foundation Walls</h2>
          <p>White powdery deposits on concrete or block foundation walls — called efflorescence — are caused by water moving through the masonry and depositing minerals on the surface as it evaporates. Efflorescence is a visual indicator of water infiltration, not a structural problem in itself. But the water causing it is attacking the concrete over time and potentially creating hydrostatic pressure that can crack or bow foundation walls.</p>

          <h2>9. Dry Rot Visible on Exposed Wood</h2>
          <p>Dry rot — despite the name — is a fungal decay that requires moisture to initiate. In Reno, it most commonly appears at sill plates, deck ledgers, exterior trim at grade, and any wood in contact with or close to the soil. Dry rot spreads through wood even after the moisture source is removed, consuming the cellulose and leaving a brown, cuboid-cracked mass with no structural capacity. Any visible dry rot requires immediate removal and replacement of affected framing.</p>

          <BlogImage
            src={IMGS.repairs_rot}
            alt="Extensive dry rot exposure along wall panel structural damage Reno NV"
            caption="Extensive dry rot along a wall panel — this requires full framing replacement, not patching"
          />

          <h2>10. Recent Soil Disturbance Near the Foundation</h2>
          <p>New landscaping, irrigation system installation, utility trenching, or neighboring construction can all disturb the soil bearing beneath or adjacent to a foundation. If any of these have occurred in the last 2–3 years and you&apos;ve noticed new cracking or settlement symptoms, the timing is not coincidental. Get a structural assessment sooner rather than later — catching soil disturbance movement early is far less expensive than addressing it after significant settlement has occurred.</p>

          <h2>BRE Builders — Free Structural Assessments in Reno</h2>
          <p>BRE Builders provides free structural assessments for Reno, Sparks, Carson City, Lake Tahoe, and Northern Nevada homeowners. If you see any of these signs, call us before it becomes a larger problem. Licensed NV #0085999 · CA #1093798. Response within 24 hours.</p>
        </div>
      }

    />
  )
}
