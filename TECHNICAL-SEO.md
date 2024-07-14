# Technical SEO:

Feature Inspiration / Sources:
- [Google Search Console](https://search.google.com/search-console/about)
    - Features that are not understood:
    - See which queries bring users to your site. Analyse your site's impressions, clicks and position on Google Search.
    - Submit sitemaps and individual URLs for crawling. Review your index coverage to make sure that Google has the freshest view of your site.
    - Receive email alerts when Google identifies issues on your site. See which URLs are affected by these issues and tell Google when you’ve fixed them.
    - The URL Inspection tool provides detailed crawl, index and serving information about your pages, directly from the Google index.
    - AMP Page (not supported for legacy reasons)
    - Rich Results Preview
    - Core Web Vitals - Mobile + Desktop
- [SEO Spider by Screaming Frog](https://www.screamingfrog.co.uk/seo-spider)
    - Features that are not understood:
    - Crawl Configuration
    - Save & Open Crawls
    - JavaScript Rendering
    - Crawl Comparison
    - Custom Source Code Search
    - Custom Extraction
    - Custom JavaScript
    - Crawl with OpenAI & Gemini
    - Google Analytics Integration
    - Search Console Integration
    - PageSpeed Insights Integration
    - Link Metrics Integration
    - Segmentation
    - Forms Based Authentication
    - Looker Studio Crawl Report
    - Meta Refresh – Including target page and time delay.
- [Site Bulb](https://sitebulb.com/)
- [Screpy](https://screpy.com/)
- Not analyzed: [Site Analyzer](https://site-analyzer.pro/)
- Not analyzed: [Moz Onpage Grader](https://moz.com/tools/onpage-grader)

Other Sources / Read More about:
- [Pagination](https://developers.google.com/search/blog/2011/09/pagination-with-relnext-and-relprev)
- Links: Search more about ```<a rel="..." />```

Unsupported Features:
- AMP Crawling & Validation

Supported Features:
- Schedule Audits
- Create your own reports using Google Data Studio
- Set/List Overrides:
    - Reason for override
    - Make a different section for it

---

### Crawl Site:

- Review Meta Robots & Directives
- Site Architecture:
    - Visualise Site Architecture: interactive crawl and directory force-directed diagrams and tree graph site visualisations
- XML Sitemaps
    - Quickly create XML Sitemaps and Image XML Sitemaps, with advanced configuration over URLs to include, last modified, priority and change frequency.
    - find missing, non-indexable and orphan pages
    - Validator Example: https://www.xml-sitemaps.com/validate-xml-sitemap.html

---

### Crawl Page:

- Load the webpage using:
    - Chromium WRS + evergreen Googlebot (for SEO)
        - Crawl for mobile and desktop separately
    - Safari (for PageEx)
    - Chrome (for PageEx)
    - Development Notes:
        - NPM: Puppeteer / Selenium / WebDriver
        - Choose a proper UA – Crawl as Googlebot, Bingbot, Yahoo! Slurp, mobile user-agents or your own custom UA.
        - Choose proper HTTP Headers – Supply any header value in a request, from Accept-Language to cookie.
        - X-Robots-Tag – See directives issued via the HTTP Headder.

- PageEx:
    - W3C Validation
    - Accessibility
    - Mobile Usability
    - Page Speed Insights
    - Chrome User Experience Report (CrUX)
    - Look for Browser Console Errors + Sentry/Analytics Collector
    - Response Time
    - File Size
    - Speed Tests from different countries
    - External Page Speed Tests:
        - https://tools.pingdom.com/
        - https://gtmetrix.com/
    - Performance Checklist: https://github.com/flowforfrank/performance-checklist

- Cloacking Detection (Showing different content to Googlebot and different to others)

- Excluding <BODY> Analysis:
    - hreflang Attributes
    - NO Meta Robots – Index, noindex, follow, nofollow, noarchive, nosnippet etc.
    - isCanonical?
        - CRAWL BOTH - CURRENT and CANONICAL
        - Canonical must point to HTTPS
        - Must not be noindex nofollow
    - Page Titles – Missing, duplicate, long, short or multiple title elements.
    - Meta Description – Missing, duplicate, long, short or multiple descriptions.
    - Analyse Page Titles & Meta Data (Analyse page titles and meta descriptions during a crawl and identify those that are too long, short, missing, or duplicated across your site.)
    - Meta Keywords – Mainly for reference or regional search engines, as they are not used by Google, Bing or Yahoo.
    - URL Issues – Non ASCII characters, underscores, uppercase characters, parameters, or long URLs.
    - Security – Discover insecure pages, mixed content, insecure forms, missing security headers and more.
    - Rich Results Test + All Metadata Previews + Useless/Unrecognized Metadata

- Make a list of links (TEXT + ALT-TEXT + HREF) on the page
    - is broken?
    - is redirecting? - Recommend the last source. Allow only direct redirect. Prevent chains and loops.
    - is outbound?
        - prefetch: NO
        - share SEO? (nofollow?)
        - noreferrer (unless requested)
        - allowed to crawl?
    - is internal?
        - prefetch: YES
        - alternate = canonicals
    - is duplicate?
        - Discover exact duplicate URLs with an md5 algorithmic check, partially duplicated elements such as page titles, descriptions or headings and find low content pages.
    - get URL Rank.
    - (CACHE) Rescan this list every 7 days for external links.
    - (CACHE) Rescan this list for internal links on every publish.
    - Anchor Text – All link text. Alt text from images with links.
    - Pull external link metrics from Majestic, Ahrefs and Moz APIs into a crawl to perform content audits or profile links.
- Images:
    - All URLs with the image link & all images from a given page. Images over 100kb, missing alt text, alt text over 100 characters.
    - Anchor Text – All link text. Alt text from images with links.
- Structured Data & Validation
    - Schema.org
    - Google Rich Results / Google Schema Features
- simulate page rank (from https://site-analyzer.pro/)
- Content:
    - identify thin pages
    - uniqueness percentage
    - Discover Duplicate Pages (with % similarity)
    - Spelling & Grammar Checks
    - check sentiment and readability scores
    - Word Count – Analyse the number of words on every page.
    - H1 – Missing, duplicate, long, short or multiple headings.
    - H2 – Missing, duplicate, long, short or multiple headings
- Crawl with OpenAI & Gemini
- INTEGRATION:
    - Google Search Console: Crawl Status
    - PageSpeed Insights Integration – Connect to the PSI API for Lighthouse metrics, speed opportunities, diagnostics and Chrome User Experience Report (CrUX) data at scale.
    - Google Analytics Integration: Connect to the Google Analytics API and pull in user and conversion data directly during a crawl.
- OUTPUT:
    - SERP Preview
    - Headings

---


(Redirects) Checklist:
- Check for Permanent and Temporary Redirects
- Check for outbound redirects and prevent as much as possible
- List: Permanent and Temporary Redirects - 301 302 307 308
- Produce error if redirected page is redirected.

---
