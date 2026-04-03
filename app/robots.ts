import type { MetadataRoute } from 'next'

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — allow everything except admin/api
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/admin/*',
          '/?m=',
          '/*?m=',
          '/cancellation-policy',
          '/privacy-policy',
          '/terms-of-service',
        ],
      },
      // AI crawlers — explicitly allow for AEO/AI Overview citation
      { userAgent: 'GPTBot',            allow: '/' },
      { userAgent: 'ChatGPT-User',      allow: '/' },
      { userAgent: 'Google-Extended',   allow: '/' },
      { userAgent: 'Googlebot',         allow: '/' },
      { userAgent: 'anthropic-ai',      allow: '/' },
      { userAgent: 'ClaudeBot',         allow: '/' },
      { userAgent: 'PerplexityBot',     allow: '/' },
      { userAgent: 'Applebot',          allow: '/' },
      { userAgent: 'Bingbot',           allow: '/' },
      { userAgent: 'DuckDuckBot',       allow: '/' },
      { userAgent: 'Slurp',             allow: '/' }, // Yahoo
      { userAgent: 'ia_archiver',       allow: '/' }, // Wayback Machine
      // Block bad bots
      { userAgent: 'AhrefsBot',         disallow: '/' },
      { userAgent: 'SemrushBot',        disallow: '/' },
      { userAgent: 'MJ12bot',           disallow: '/' },
      { userAgent: 'dotbot',            disallow: '/' },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
