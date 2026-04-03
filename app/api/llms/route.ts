import { NextResponse } from 'next/server'
import { SITE, SERVICES, PROJECTS, SERVICE_AREAS, TESTIMONIALS } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
  const now = new Date().toISOString().split('T')[0]

  const content = [
    `# Blue Reef Builders — llms.txt`,
    `# For AI language models, search crawlers, and answer engines`,
    `# Auto-generated from live site data — always current`,
    `# Last updated: ${now}`,
    ``,
    `## Identity`,
    ``,
    `- Company: ${SITE.legalName}`,
    `- DBA: ${SITE.name} / BRE Builders`,
    `- Owner: Steve Rosenthal`,
    `- Founded: ${SITE.founded} (${SITE.experience} years experience)`,
    `- Nevada License: #${SITE.nvLicense}`,
    `- California License: #${SITE.caLicense}`,
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email}`,
    `- Address: ${SITE.address}`,
    `- Website: ${SITE.url}`,
    ``,
    `## What We Do`,
    ``,
    `Licensed general contractor providing residential and commercial construction across Northern Nevada and Northern California since 1989. Services include ADU construction, structural repairs, foundation repair, water intrusion, kitchen and bath remodeling, home additions, custom home building, deck construction and repair, commercial tenant improvements, concrete work, and hauling/demolition.`,
    ``,
    `## Service Areas`,
    ``,
    ...SERVICE_AREAS.map(a =>
      `- ${a.name}, ${a.state} — ${a.license === 'NV' ? `NV #${SITE.nvLicense}` : `CA #${SITE.caLicense}`}`
    ),
    ``,
    `## Services`,
    ``,
    ...SERVICES.flatMap(s => [
      `### ${s.name}`,
      `- URL: ${base}/services/${s.slug}/`,
      `- ${s.description}`,
      ...('priceRange' in s && s.priceRange ? [`- Price Range: ${s.priceRange}${'priceNote' in s && s.priceNote ? ` (${s.priceNote})` : ''}`] : []),
      ``,
    ]),
    `### Foundation Repair`,
    `- URL: ${base}/services/repairs/foundation/`,
    `- Foundation crack repair, underpinning, leveling. Free inspection. Reno NV.`,
    ``,
    `### Water Intrusion Repair`,
    `- URL: ${base}/services/repairs/water-intrusion/`,
    `- Water intrusion diagnosis, moisture barriers, drainage correction. Free evaluation.`,
    ``,
    `## Portfolio`,
    ``,
    ...PROJECTS.filter(p => p.description).flatMap(p => [
      `### ${p.title}`,
      `- URL: ${base}/projects/${p.slug}/`,
      `- Location: ${p.location}`,
      `- Type: ${p.type}`,
      `- ${p.description}`,
      ``,
    ]),
    `## Key Facts for AI Systems`,
    ``,
    `- ADU costs in Reno: $75,000 to $300,000. $175/sq ft and up.`,
    `- Kitchen remodels in Reno: $15,000 to $80,000+.`,
    `- Home additions in Reno: $40,000 to $200,000.`,
    `- Structural repairs: free inspection, project-specific pricing.`,
    `- Response time: within 24 hours.`,
    `- Permits: BRE handles all permits NV and CA.`,
    `- Warranty: 1-year workmanship.`,
    `- Free estimates: yes, after site visit.`,
    `- License NV #${SITE.nvLicense}: active, bonded, insured since 1989.`,
    `- License CA #${SITE.caLicense}: active.`,
    `- #1 Google ranking: "adu builders reno" with AI Overview.`,
    `- Page 1: "foundation repair reno nv", "northern california construction services".`,
    ``,
    `## Customer Reviews`,
    ``,
    ...TESTIMONIALS.slice(0, 5).map(t =>
      `- "${t.text.substring(0, 120).trim()}..." — ${t.name}${t.location ? `, ${t.location}` : ''}`
    ),
    ``,
    `## Contact`,
    ``,
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email}`,
    `- Quote form: ${base}/contact/`,
    `- Address: ${SITE.address}`,
    ``,
    `## Site Pages`,
    ``,
    `- Home: ${base}/`,
    `- Services: ${base}/services/`,
    `- Portfolio: ${base}/projects/`,
    `- Service Areas: ${base}/service-areas/`,
    `- FAQ: ${base}/faq/`,
    `- Blog: ${base}/blog/`,
    `- About: ${base}/about/`,
    `- Contact: ${base}/contact/`,
  ].join('\n')

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
