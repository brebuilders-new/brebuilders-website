import type { Metadata } from 'next'
import BlogTemplate from '@/components/templates/BlogTemplate'
import { IMGS } from '@/lib/images'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Top 10 Signs Your Home Needs Structural Repair — Don\'t Ignore #3',
  description: 'Warning signs of structural damage in Reno homes — from stair-step cracks to bowing walls. What to watch for and when to call a licensed contractor.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Structural+Repair+Warning+Signs&sub=10+Signs+Your+Reno+Home+Needs+Inspection&badge=Structural+Repairs`, width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://brebuilders.com/top-10-signs-your-home-needs-structural-repair-dont-ignore-3/' },
}

export default function StructuralRepairSignsPage() {
  return (
    <BlogTemplate
      title="Top 10 Signs Your Home Needs Structural Repair — Don't Ignore #3"
      category="Structural Repairs"
      heroImage={IMGS.repairs_rot}
      heroAlt="Extensive Dry Rot Exposure Wall Panel Structural Damage Reno NV BRE Builders"
      excerpt="Warning signs that indicate your Reno home may have structural issues — from stair-step cracks to bowing walls. What to watch for and when to act."
      relatedServices={[
        { label: 'Structural Repairs', href: '/services/repairs' },
        { label: 'Foundation Repair', href: '/services/repairs/foundation' },
        { label: 'Water Intrusion Repair', href: '/services/repairs/water-intrusion' },
      ]}
      relatedPosts={[
        { title: 'How to Add an ADU in Nevada', href: '/blog/how-to-add-an-adu-in-nevada', img: IMGS.adu_main, alt: 'ADU Nevada guide', category: 'ADU' },
        { title: 'Deck Safety Warning Signs', href: '/blog/deck-safety-warning-signs', img: IMGS.repairs_arun, alt: 'Deck safety', category: 'Decks' },
      ]}
      content={
        <div>
          <p>Reno homes face unique structural stresses from expansive clay soils and freeze-thaw cycles. Early identification of structural problems prevents exponentially more expensive repairs later. Here are the signs to watch for.</p>

          <h2>1. Stair-Step Cracks in Brick or Block</h2>
          <p>Diagonal cracks following mortar joints in a stair-step pattern indicate differential foundation settlement. This requires immediate professional evaluation.</p>

          <h2>2. Wide or Growing Foundation Cracks</h2>
          <p>Hairline cracks under 1/8&quot; are common and often not serious. Cracks wider than 1/4&quot;, or any crack that is visibly growing over weeks, require professional assessment.</p>

          <h2>3. Uneven or Sloping Floors — Don't Ignore This</h2>
          <p>Floors that slope more than 1 inch over 8 feet, bounce noticeably, or feel soft in spots indicate structural problems beneath. This is the sign most homeowners delay acting on — and the one that leads to the most expensive repairs when ignored.</p>

          <h2>4. Bowing Walls</h2>
          <p>Walls that bow inward or separate at corners are actively moving under lateral pressure. This can indicate soil pressure against a foundation wall.</p>

          <h2>5. Doors and Windows Suddenly Misaligned</h2>
          <p>If doors or windows that previously operated normally are suddenly sticking, not latching, or showing gaps at the frame, the structure is moving.</p>

          <h2>6. Visible Dry Rot or Soft Wood</h2>
          <p>Soft, discolored, or crumbling wood anywhere on the structure indicates moisture infiltration and potential structural compromise. Common in siding, window frames, deck ledgers, and subfloor areas.</p>

          <h2>7. Water Stains Inside Walls or Floors</h2>
          <p>Water infiltration weakens structural components over time. Stains suggest active or past moisture intrusion that may have damaged framing, insulation, or sheathing.</p>

          <h2>8. Gaps Between Wall and Ceiling or Floor</h2>
          <p>Separating at interior joints can indicate settling, heaving, or shifting. Combined with other signs, this warrants professional inspection.</p>

          <h2>9. Rust-Stained Concrete</h2>
          <p>Rust stains on concrete indicate reinforcing steel is corroding — which expands as it rusts and can crack the surrounding concrete.</p>

          <h2>10. Chimney Pulling Away from House</h2>
          <p>A chimney that is visibly separating from the main structure indicates significant differential settlement and requires immediate structural assessment.</p>

          <h2>What Causes Structural Problems in Reno?</h2>
          <p>Reno&apos;s expansive clay soils are the primary cause. Clay expands when wet and shrinks when dry — creating constant movement against foundations. Freeze-thaw cycles compound this over time. BRE Builders has worked with Reno&apos;s soil conditions since 1989. Licensed NV #0085999.</p>
        </div>
      }
    />
  )
}
