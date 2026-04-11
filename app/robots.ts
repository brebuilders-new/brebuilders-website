import type { MetadataRoute } from 'next'

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: allow all crawlers, block admin/api ───────────────────
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

      // ── Google ──────────────────────────────────────────────────────────
      { userAgent: 'Googlebot',            allow: '/' },
      { userAgent: 'Googlebot-Image',      allow: '/' }, // Google Images
      { userAgent: 'Google-Extended',      allow: '/' }, // Gemini / AI training

      // ── Bing / Yahoo (Yahoo uses Bing index) ────────────────────────────
      { userAgent: 'Bingbot',              allow: '/' },
      { userAgent: 'msnbot',               allow: '/' },
      { userAgent: 'msnbot-media',         allow: '/' }, // Bing Images crawler
      { userAgent: 'Slurp',                allow: '/' }, // Yahoo

      // ── DuckDuckGo ──────────────────────────────────────────────────────
      { userAgent: 'DuckDuckBot',          allow: '/' },
      { userAgent: 'DuckDuckGo-Favicons',  allow: '/' },

      // ── AI answer engines ───────────────────────────────────────────────
      { userAgent: 'GPTBot',               allow: '/' }, // ChatGPT
      { userAgent: 'ChatGPT-User',         allow: '/' }, // ChatGPT browsing
      { userAgent: 'OAI-SearchBot',        allow: '/' }, // OpenAI search
      { userAgent: 'anthropic-ai',         allow: '/' }, // Anthropic
      { userAgent: 'ClaudeBot',            allow: '/' }, // Claude
      { userAgent: 'PerplexityBot',        allow: '/' }, // Perplexity
      { userAgent: 'Applebot',             allow: '/' }, // Apple / Siri
      { userAgent: 'Applebot-Extended',    allow: '/' }, // Apple AI training
      { userAgent: 'Meta-ExternalAgent',   allow: '/' }, // Meta AI
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },
      { userAgent: 'Bytespider',           allow: '/' }, // ByteDance / TikTok AI
      { userAgent: 'cohere-ai',            allow: '/' }, // Cohere
      { userAgent: 'YouBot',               allow: '/' }, // You.com

      // ── Social / preview crawlers ────────────────────────────────────────
      { userAgent: 'Twitterbot',           allow: '/' }, // X/Twitter cards
      { userAgent: 'facebookexternalhit',  allow: '/' }, // Facebook OG
      { userAgent: 'LinkedInBot',          allow: '/' }, // LinkedIn previews
      { userAgent: 'Pinterest',            allow: '/' }, // Pinterest image indexer
      { userAgent: 'Slackbot',             allow: '/' }, // Slack link previews

      // ── Archive ─────────────────────────────────────────────────────────
      { userAgent: 'ia_archiver',          allow: '/' }, // Wayback Machine

      // ── Block SEO scrapers (waste crawl budget, no value) ───────────────
      { userAgent: 'AhrefsBot',            disallow: '/' },
      { userAgent: 'SemrushBot',           disallow: '/' },
      { userAgent: 'MJ12bot',              disallow: '/' },
      { userAgent: 'dotbot',               disallow: '/' },
      { userAgent: 'BLEXBot',              disallow: '/' },
      { userAgent: 'DataForSeoBot',        disallow: '/' },
    ],

    // Both sitemaps — all search engines and crawlers read from here
    sitemap: [
      `${base}/sitemap.xml`,
      `${base}/image-sitemap.xml`,
    ],

    host: base,
  }
}
