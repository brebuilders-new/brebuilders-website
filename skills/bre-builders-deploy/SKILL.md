---
name: bre-builders-deploy
description: Deployment, git, and infrastructure skill for BRE Builders website rebuild. Read before any commit, push, deploy, build, or infrastructure change. Contains repo credentials, Vercel setup, build commands, env vars, and pre/post deploy checklists. Trigger on: deploy, commit, push, build, Vercel, git, environment variables, DNS, domain, hosting for BRE Builders.
---

# BRE Builders — Deploy Skill

**Read bre-builders-master first, then this skill.**

---

## CREDENTIALS & ENDPOINTS

```
GitHub User:    brebuilders-new
GitHub Repo:    https://github.com/brebuilders-new/brebuilders-website
Token:          [TOKEN_IN_PROJECT_GIT_FILE]  (in /mnt/project/git)
Git email:      brebuilders@gmail.com
Git name:       BRE Builders
Branch (prod):  main
Branch (dev):   dev

Vercel Account: https://vercel.com/brebuilders
Vercel Settings: https://vercel.com/brebuilders/~/settings
Staging URL:    https://brebuilders-website.vercel.app
Live Domain:    brebuilders.com (DNS cutover ONLY at Phase 10)
```

---

## GIT WORKFLOW

```bash
# Clone
TOKEN=$(cat /mnt/project/git)
git clone "https://brebuilders-new:${TOKEN}@github.com/brebuilders-new/brebuilders-website.git" /tmp/bre-repo

# Configure
git config user.email "brebuilders@gmail.com"
git config user.name "BRE Builders"

# Work on dev branch
git checkout -b dev  # first time
git checkout dev     # subsequent times

# Always pull before working
git pull --rebase origin dev

# Standard commit flow
git add [specific files — never git add -A blindly]
git commit -m "feat: [what was built]"
git push origin dev

# To merge to main (production deploy)
git checkout main
git merge dev
git push origin main
```

**Commit message format:**
- `feat: [feature]` — new page or component
- `fix: [bug]` — bug fix
- `content: [page]` — content update
- `seo: [page]` — SEO/meta update
- `style: [component]` — styling change
- `schema: [page]` — schema markup

---

## BUILD COMMANDS

```bash
# Install
npm install

# Dev server
npm run dev

# Production build (MUST pass before any push to main)
npm run build

# Type check
npx tsc --noEmit

# Start production build locally
npm start
```

**RULE: npm run build must pass with 0 errors before any commit to main.**

---

## ENVIRONMENT VARIABLES

Set these in Vercel dashboard (Settings → Environment Variables):

```
RESEND_API_KEY=           # Get from resend.com — for form email delivery
CONTACT_TO_EMAIL=         brebuilders@gmail.com
CONTACT_CC_EMAILS=        steve@brebuilders.com,chris@[verify],sean@[verify]
NEXT_PUBLIC_GA_ID=        G-[verify from existing GSC]
NEXT_PUBLIC_SITE_URL=     https://brebuilders.com
```

**Note:** Never hardcode these in source files. Always use `process.env.VARIABLE_NAME`.

---

## PRE-DEPLOY CHECKLIST (before pushing to main)

- [ ] `npm run build` passes with 0 errors
- [ ] `npx tsc --noEmit` passes
- [ ] All 301 redirects are in `next.config.js`
- [ ] No hardcoded credentials in any file
- [ ] All images have alt text (no empty alt="")
- [ ] Form submits successfully in local test
- [ ] Form email arrives at brebuilders@gmail.com in local test
- [ ] Mobile layout checked on at least 375px width
- [ ] No console errors in browser dev tools
- [ ] No broken internal links
- [ ] ADU page content matches depth of original /adus/ page

---

## POST-DEPLOY CHECKLIST (after Vercel deploy)

- [ ] Staging URL loads: https://brebuilders-website.vercel.app
- [ ] Home page renders correctly
- [ ] Navigation works on all screen sizes
- [ ] Portfolio images load (not broken)
- [ ] Contact form submits and email received
- [ ] All 301 redirects return 301 (test with curl -I)
- [ ] Sitemap accessible at /sitemap.xml
- [ ] robots.txt accessible at /robots.txt

---

## DNS CUTOVER PROCEDURE (Phase 10 ONLY)

**DO NOT do this until Phase 10 checklist is 100% complete.**

1. Confirm Vercel project has custom domain `brebuilders.com` added
2. In domain registrar (GoDaddy/current registrar): Update A record to Vercel IP
3. Update CNAME `www` to `cname.vercel-dns.com`
4. Wait 15–30 min for propagation
5. Verify `https://brebuilders.com` loads new site
6. Verify SSL certificate is active (green padlock)
7. Test all 301 redirects on live domain
8. Submit new sitemap to Google Search Console
9. Monitor GSC for 2 weeks for any coverage issues

**Keep WordPress on SiteGround running for 30 days post-cutover as safety net.**

---

## VERCEL PROJECT SETUP

Connect repo to Vercel:
1. Go to https://vercel.com/brebuilders
2. New Project → Import from GitHub → brebuilders-new/brebuilders-website
3. Framework: Next.js (auto-detected)
4. Build command: `npm run build`
5. Output directory: `.next`
6. Install all environment variables
7. Deploy

Auto-deploys on every push to `main`.  
Preview deploys on every push to any branch.

---

## NEXT.JS CONFIG TEMPLATE (next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['brebuilders.com'],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // Residential service redirects
      { source: '/adus/', destination: '/services/adu/', permanent: true },
      { source: '/adus', destination: '/services/adu/', permanent: true },
      { source: '/repairs/', destination: '/services/repairs/', permanent: true },
      { source: '/repairs', destination: '/services/repairs/', permanent: true },
      { source: '/concrete/', destination: '/services/concrete/', permanent: true },
      { source: '/kitchen/', destination: '/services/kitchen-bath/', permanent: true },
      { source: '/decks/', destination: '/services/decks/', permanent: true },
      { source: '/new-home/', destination: '/services/new-home/', permanent: true },
      { source: '/additions/', destination: '/services/additions/', permanent: true },
      { source: '/retail/', destination: '/services/retail/', permanent: true },
      { source: '/office/', destination: '/services/office/', permanent: true },
      { source: '/warehouse-metal-buildings/', destination: '/services/warehouse/', permanent: true },
      { source: '/hauling-removal/', destination: '/services/hauling/', permanent: true },
      { source: '/lofts-and-condo-remodels/', destination: '/services/lofts-condos/', permanent: true },
      // Sub-pages
      { source: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/', destination: '/services/repairs/foundation/', permanent: true },
      { source: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv/', destination: '/services/repairs/water-intrusion/', permanent: true },
      // Hub pages
      { source: '/frequently-asked-questions-bre-builders/', destination: '/faq/', permanent: true },
      { source: '/blogs/', destination: '/blog/', permanent: true },
      { source: '/project-type/home-remodeling/', destination: '/services/', permanent: true },
      { source: '/project-type/commercial-tenant-improvements/', destination: '/services/commercial/', permanent: true },
      { source: '/project-type/custom-home-building/', destination: '/services/new-home/', permanent: true },
      // Portfolio pages
      { source: '/portfolio/lake-tahoe-interior-renovation-project/', destination: '/projects/lake-tahoe-interior-renovation/', permanent: true },
      { source: '/portfolio/ripon-california-estate-project/', destination: '/projects/ripon-estate/', permanent: true },
      { source: '/portfolio/rio-tinto-home-renovation-project/', destination: '/projects/rio-tinto-renovation/', permanent: true },
      { source: '/portfolio/quaking-aspen-structural-repair/', destination: '/projects/quaking-aspen-repair/', permanent: true },
      { source: '/portfolio/lake-tahoe-deck-balcony-structural-repair/', destination: '/projects/lake-tahoe-deck-repair/', permanent: true },
      { source: '/portfolio/mine-shaft-framing-shed-construction-reno-nv/', destination: '/projects/mine-shaft-framing/', permanent: true },
      { source: '/portfolio/car-wash-construction-reno-nv-concrete-slab-foundation/', destination: '/projects/car-wash-reno/', permanent: true },
      { source: '/portfolio/arun-hillside-deck-repair-lake-tahoe-nv/', destination: '/projects/arun-deck-repair/', permanent: true },
      { source: '/portfolio/charolettes-deck/', destination: '/projects/charolettes-deck/', permanent: true },
      // Service areas
      { source: '/service-areas/nevada/', destination: '/service-areas/', permanent: true },
      { source: '/residential-services/', destination: '/services/', permanent: true },
    ]
  },
}

module.exports = nextConfig
```
