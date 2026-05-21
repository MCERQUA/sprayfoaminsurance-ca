# SEO Report — sprayfoaminsurance-ca
Date: 2026-05-21

## 1. Site Identity
- **Framework**: Next.js 16.2.2 with static export (`output: 'export'` in next.config.ts)
- **Target Audience**: Canadian spray foam contractors seeking specialized commercial insurance
- **Niche**: B2B insurance brokerage for spray polyurethane foam (SPF) installers in Canada
- **Deployment Status**: Netlify deployment (`netlify.toml` configured, published to `out` directory)
- **Domain**: sprayfoaminsurance.ca (inferred from sitemap and code references)
- **Language**: en-CA (Canadian English)

## 2. Inventory
- **Total Pages**: 2
  - `/` (home page)
  - `/quote` (standalone quote form page)
- **URL Structure**: Flat/simple (root + single subdir)
- **Page Files**:
  - `/src/app/layout.tsx` (root layout)
  - `/src/app/page.tsx` (home)
  - `/src/app/quote/page.tsx` (quote form)
- **Sitemap**: Present at `/sitemap.xml` — contains only 1 URL (https://sprayfoaminsurance.ca/)
- **Robots.txt**: Present at `/robots.txt` — allows all crawlers, references sitemap

## 3. On-Page SEO (Sample: All 2 Pages)

### Page 1: Home (/)
| Attribute | Value | Status |
|-----------|-------|--------|
| Title Tag | "Spray Foam Insurance Canada \| Commercial Insurance for SPF Contractors" | ✅ Good (67 chars - under 60 ideal but acceptable) |
| Meta Description | "Specialized commercial insurance for Canadian spray foam contractors. CGL, pollution liability, workers' comp, and more. Get a free quote today." | ✅ Good (149 chars - in range) |
| H1 | "Spray Foam Insurance for<br>Canadian Contractors" | ✅ Present (main Hero section) |
| H2 Tags | "Insurance Coverage Built for SPF Contractors", "Why Canadian SPF Contractors Choose Us" | ✅ Present (2x H2s) |
| Canonical | Not specified in layout.tsx | ⚠️ Missing |
| OG Tags | Not implemented | ⚠️ Missing (no og:title, og:description, og:image) |
| Twitter Cards | Not implemented | ⚠️ Missing |

### Page 2: Quote Form (/quote)
| Attribute | Value | Status |
|-----------|-------|--------|
| Title Tag | "Get Your Quote — Spray Foam Insurance Canada" | ✅ Good (52 chars) |
| Meta Description | "Free commercial insurance quote for Canadian spray foam contractors. Voice-assisted form for tradeshow on-the-spot capture." | ✅ Good (128 chars) |
| H1 | Form page - no H1 tag | ⚠️ Missing H1 (form-only page) |
| Canonical | Not specified | ⚠️ Missing |
| OG Tags | Not implemented | ⚠️ Missing |
| Robots | `index: true, follow: true` (explicitly set) | ✅ Good |

## 4. Structured Data
- **JSON-LD Schema**: None detected
- **Missing Opportunities**:
  - No LocalBusiness schema (should include address, phone, service area)
  - No Service schema (insurance products not marked up)
  - No BreadcrumbList (only 2 pages, but still useful)
  - No FAQPage schema (no FAQ section visible)
  - No Organization schema (no legal entity markup)

## 5. Content Quality

### Word Count (Sample Pages)
| Page | Section | Word Count |
|------|---------|-----------|
| Home | Hero | ~65 words |
| Home | Coverage Grid (6 cards) | ~240 words |
| Home | Why Choose Us | ~220 words |
| Home | Total visible body content | ~775 words |

**Assessment**: Moderate word count; functional but thin for SEO. Primary value is in conversion-focused sections (form, CTA) rather than informational content depth.

### Internal Linking
- Header: Links to phone (tel: 1-888-SPF-QUOTE) and quote form (scroll anchor #quote)
- Hero: CTA button links to quote form (scroll anchor)
- Footer: Links to Privacy Policy and Terms of Service (href="#" — not implemented)
- **Density**: Minimal internal linking structure; only 2 pages limits opportunity
- **Anchor Text**: Generic ("Get a Free Quote", "Get Your Free Quote")

### Images
| Image | Alt Text | Status |
|-------|----------|--------|
| Logo (Header) | "Spray Foam Insurance Canada" | ✅ Good |
| Josh Cotner (Hero) | "Josh Cotner, Canadian spray foam insurance specialist" | ✅ Descriptive |
| Equipment Coverage (Why Choose Us) | "Spray foam rig and equipment — we insure what you work with" | ✅ Descriptive |
| Hero Video Background | `<video>` tag (no alt text) | ⚠️ N/A for video |

**Image Alt-Text Coverage**: 100% of static images have meaningful alt text (3/3)

**Image Formats**: Optimized (`.webp` format used for Josh photo and equipment; `.mp4` for video)

**Image Count**: 3 static images + 1 video + multiple inline SVGs (icons)

## 6. Technical

### robots.txt Rules
```
User-agent: *
Allow: /
Sitemap: https://sprayfoaminsurance.ca/sitemap.xml
```
- ✅ Allows all crawlers
- ✅ Sitemap declared
- ⚠️ No disallow rules (may want to exclude form params or staging)

### Sitemap
- **Location**: `/sitemap.xml`
- **Entry Count**: 1 URL only
  - `https://sprayfoaminsurance.ca/` (changefreq: weekly, priority: 1.0)
- **Issue**: `/quote` page NOT listed in sitemap
- **Dates**: No lastmod dates

### 404 Handling
- **Custom 404 Page**: Not present (`/src/app/not-found.tsx` not found)
- **Default Behavior**: Next.js will serve built-in 404 page
- ⚠️ Opportunity: Custom 404 with navigation to main pages

### next.config.ts Configuration
```typescript
output: 'export'
images: {
  unoptimized: true,
}
```
- ✅ Static export (good for SEO — crawlable HTML)
- ✅ Images unoptimized flag (explicit; pre-optimized files acceptable)
- ⚠️ No redirects configured
- ⚠️ No headers config in next.config (headers set in netlify.toml instead)

### netlify.toml Headers
- Frame-ancestors CSP set to allow iframe embedding in JamBot tenants
- X-Frame-Options: ALLOWALL for /quote/* routes
- ⚠️ No Cache-Control or other SEO-relevant headers

## 7. Top Issues (Ranked by Impact)

| # | Issue | Severity | File:Line | Details |
|---|-------|----------|-----------|---------|
| 1 | Sitemap missing /quote page | High | `/out/sitemap.xml` | Only home page indexed; quote form excluded from sitemap |
| 2 | No JSON-LD structured data | High | N/A | Missing LocalBusiness, Service, Organization schemas |
| 3 | No Open Graph / Twitter meta tags | Medium | `src/app/layout.tsx` | Poor social sharing preview |
| 4 | No canonical tags | Medium | `src/app/layout.tsx`, `src/app/page.tsx` | Not critical for 2-page site but best practice |
| 5 | Footer links not implemented | Medium | `src/app/components/Footer.tsx:47-51` | Privacy & Terms links point to "#" (dead links) |
| 6 | Quote page has no H1 tag | Medium | `src/app/quote/page.tsx` | Form-only page lacks heading hierarchy |
| 7 | Thin content / low word count | Medium | All pages | ~775 words total visible content; competitor sites likely 1500+ |
| 8 | No custom 404 page | Low | N/A | Default Next.js 404 shown; no brand continuity |
| 9 | Missing lastmod in sitemap | Low | `src/` (no sitemap generation) | No update timestamps in sitemap |
| 10 | No breadcrumb schema | Low | N/A | Not essential for 2 pages but accessibility helper |

## 8. Top Recommendations (Concrete Next Actions)

1. **Add /quote to sitemap.xml** (High priority)
   - Update sitemap generation to include `/quote` page
   - Add lastmod timestamps for both URLs
   - Consider weekly or monthly changefreq

2. **Implement JSON-LD structured data** (High priority)
   - Add LocalBusiness schema in layout.tsx metadata with address, phone, service area
   - Add Service schema for each insurance product (CGL, pollution liability, etc.)
   - Add Organization schema with legal entity name and contact

3. **Add Open Graph & Twitter meta tags** (Medium priority)
   - og:title, og:description, og:image, og:url in layout.tsx Metadata
   - twitter:card, twitter:title, twitter:description, twitter:image
   - Use professional social card image (e.g., logo + tagline)

4. **Implement canonical tags** (Medium priority)
   - Add canonical in layout.tsx Metadata export for auto-injection
   - Format: `<link rel="canonical" href="https://sprayfoaminsurance.ca{pathname}">`

5. **Create custom 404 page** (Medium priority)
   - Add `/src/app/not-found.tsx` with brand messaging and navigation
   - Link back to home and quote form
   - Reduces bounce rate on crawl errors

6. **Fix footer links** (Medium priority)
   - Create actual `/privacy` and `/terms` pages, or
   - Update href to "#privacy" / "#terms" if pages exist, or
   - Link to external legal resource if outsourced

7. **Expand content (strategic)** (Low priority)
   - Add FAQ section for common insurance questions
   - Consider "Insurance Guide" or blog post on spray foam risks
   - Improves word count and internal linking
   - Supports FAQ schema later

8. **Optimize quote form discoverability** (Low priority)
   - Ensure quote page SEO metadata is crawlable (currently explicit robots: index)
   - Test that form is visible to screen readers (a11y)
   - Consider adding a `/get-quote` alias for better UX

---

## Summary Assessment

**Status**: ⚠️ **Needs Work** — Solid foundation with good title/meta descriptions and clean tech stack, but missing critical SEO elements (structured data, social sharing, complete sitemap).

**Headline Finding**: Site has strong conversion focus (clear CTAs, embedded quote form) but lacks SEO infrastructure (no schema, sparse internal linking, thin content) that would help organic discovery and competitive rankings in the niche market.

