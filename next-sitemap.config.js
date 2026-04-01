/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },       // OpenAI crawler
      { userAgent: 'ClaudeBot', allow: '/' },    // Anthropic crawler
      { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity crawler
    ],
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'}/sitemap.xml`],
  },
  priority: 0.7,
  changefreq: 'monthly',
  additionalPaths: async () => [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/services/adu/', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services/repairs/', priority: 0.9, changefreq: 'monthly' },
    { loc: '/contact/', priority: 0.9, changefreq: 'monthly' },
  ],
  exclude: ['/api/*'],
}
