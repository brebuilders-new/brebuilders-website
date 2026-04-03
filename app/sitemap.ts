import type { MetadataRoute } from 'next'
import { SERVICES, PROJECTS, SERVICE_AREAS } from '@/lib/site-data'
import fs from 'fs'
import path from 'path'

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

// Dynamically read blog slugs from filesystem at build time
function getBlogSlugs(): string[] {
  try {
    const blogDir = path.join(process.cwd(), 'app/blog')
    return fs.readdirSync(blogDir).filter(f =>
      fs.statSync(path.join(blogDir, f)).isDirectory() && f !== 'page.tsx'
    )
  } catch { return [] }
}

function getBlogLastModified(slug: string): string {
  try {
    const pagePath = path.join(process.cwd(), 'app/blog', slug, 'page.tsx')
    return fs.statSync(pagePath).mtime.toISOString()
  } catch { return new Date().toISOString() }
}

function getPageLastModified(pagePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), 'app', pagePath, 'page.tsx')
    return fs.statSync(fullPath).mtime.toISOString()
  } catch { return new Date().toISOString() }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs()

  return [
    // ── Tier 1: Core ──────────────────────────────────────────────────────
    {
      url: base + '/',
      lastModified: getPageLastModified(''),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: base + '/services/adu/',
      lastModified: getPageLastModified('services/adu'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: base + '/services/repairs/',
      lastModified: getPageLastModified('services/repairs'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: base + '/contact/',
      lastModified: getPageLastModified('contact'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },

    // ── Tier 2: Service pages (dynamic from SERVICES array) ───────────────
    ...SERVICES.map(s => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: getPageLastModified(`services/${s.slug}`),
      changeFrequency: 'monthly' as const,
      priority: ('isHighPriority' in s && s.isHighPriority) ? 0.88 : 0.75,
    })),

    // Repair sub-pages
    {
      url: base + '/services/repairs/foundation/',
      lastModified: getPageLastModified('services/repairs/foundation'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: base + '/services/repairs/water-intrusion/',
      lastModified: getPageLastModified('services/repairs/water-intrusion'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── Tier 3: Projects (dynamic from PROJECTS array) ────────────────────
    {
      url: base + '/projects/',
      lastModified: getPageLastModified('projects'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    ...PROJECTS.map((p, i) => ({
      url: `${base}/projects/${p.slug}/`,
      lastModified: getPageLastModified(`projects/${p.slug}`),
      changeFrequency: 'monthly' as const,
      priority: ('featured' in p && p.featured) ? 0.80 : Math.max(0.60, 0.78 - i * 0.03),
    })),

    // ── Tier 4: Service areas (dynamic from SERVICE_AREAS array) ──────────
    {
      url: base + '/service-areas/',
      lastModified: getPageLastModified('service-areas'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...SERVICE_AREAS
      .filter(a => a.slug !== 'graeagle' && a.slug !== 'carson-valley') // no pages yet
      .map(area => ({
        url: `${base}/service-areas/${area.slug}/`,
        lastModified: getPageLastModified(`service-areas/${area.slug}`),
        changeFrequency: 'monthly' as const,
        priority: ['reno', 'lake-tahoe', 'northern-california'].includes(area.slug) ? 0.85 : 0.75,
      })),

    // ── Tier 5: Company ───────────────────────────────────────────────────
    {
      url: base + '/about/',
      lastModified: getPageLastModified('about'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: base + '/faq/',
      lastModified: getPageLastModified('faq'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: base + '/testimonials/',
      lastModified: getPageLastModified('testimonials'),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: base + '/our-approach/',
      lastModified: getPageLastModified('our-approach'),
      changeFrequency: 'monthly',
      priority: 0.60,
    },
    {
      url: base + '/careers/',
      lastModified: getPageLastModified('careers'),
      changeFrequency: 'monthly',
      priority: 0.55,
    },

    // ── Tier 6: Blog (dynamic from filesystem) ────────────────────────────
    {
      url: base + '/blog/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.70,
    },
    ...blogSlugs.map(slug => ({
      url: `${base}/blog/${slug}/`,
      lastModified: getBlogLastModified(slug),
      changeFrequency: 'monthly' as const,
      priority: ['how-to-add-an-adu-in-nevada', 'reno-redevelopment', 'structural-repair-warning-signs'].includes(slug)
        ? 0.72
        : 0.60,
    })),
  ]
}
