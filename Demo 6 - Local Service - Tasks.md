# Development Tasks - Demo 6 (Local Service / Quote-first)

Source docs:

- `docs/global prompt.md`
- `Local Service/demo6.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [ ] Confirm service vertical + examples (e.g., Plumbing / Electrical / Cleaning) used across copy + icons.
- [ ] Confirm business name + brand (e.g., "QuickQuote") and tone (trustworthy, fast, practical).
- [ ] Confirm conversion priorities:
  - [ ] Quote requests (primary)
  - [ ] Phone calls (especially mobile)
- [ ] Confirm the phone number + display format (must be visible site-wide).
- [ ] Confirm emergency positioning (do we offer "Emergency / Same-day"?) and operating hours copy.
- [ ] Confirm Perth GEO positioning:
  - [ ] Primary: Perth, WA
  - [ ] Secondary: key suburbs list for `/areas/`
- [ ] Confirm CTA labels used site-wide:
  - [ ] "Get a Free Quote"
  - [ ] "Call Now"
  - [ ] "Get My Free Quote" (form submit)
- [ ] Choose styling approach: Tailwind OR CSS modules + tokens (pick one and stick to it).
- [ ] Choose fonts (max 2): strong sans headings + same-family body (no thin/decorative fonts).

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [ ] Create a new Astro project (static output).
- [ ] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [ ] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [ ] Add/verify npm scripts: `dev`, `build`, `preview`.
- [ ] Add `src/assets/images/` placeholder images (hero/service photo, service icons, OG image).

## Phase 2 - Design System (Trust-first)

- [ ] Choose primary color direction:
  - [ ] Deep Blue (e.g. `#0B5ED7`) OR
  - [ ] Teal (e.g. `#0F766E`)
- [ ] Define secondary/support color: muted green (e.g. `#2E7D32`) for trust labels (Licensed/Insured/Available today).
- [ ] Define urgency accent: amber/soft orange (e.g. `#F59E0B`) for Emergency/Same-day.
- [ ] Define background: white/off-white (`#FFFFFF` / `#F8FAFC`).
- [ ] Define text: dark slate/charcoal (e.g. `#1F2933`).
- [ ] Define spacing scale (4/8/12/16/24/32/48/64).
- [ ] Define typography scale (strong headings; high readability at small sizes; clarity > style).
- [ ] Implement focus-visible styles for links/buttons/inputs.
- [ ] Implement reduced motion support (`prefers-reduced-motion`).

UX rules to enforce in UI:

- [ ] Quote CTA visible above the fold.
- [ ] Phone number always visible.
- [ ] Mobile-first: sticky "Call Now" button (bottom) + tap-friendly form fields.
- [ ] Keep motion minimal (no heavy sliders/animations).

If using Tailwind:

- [ ] Install/configure Tailwind for Astro.
- [ ] Add Tailwind theme tokens (colors, font families, spacing, radii, shadows).

If using CSS modules + tokens:

- [ ] Create `src/styles/tokens.css` (colors, font families, spacing, radii, shadows).
- [ ] Create base/global styles (typography defaults, container widths, utilities).

## Phase 3 - Core Layout & Shared Components

- [ ] Create `src/layouts/BaseLayout.astro` with:
  - [ ] Skip link
  - [ ] Header/nav with phone number and click-to-call link
  - [ ] Sticky mobile bottom CTA (`StickyCallButton.astro`)
  - [ ] Footer with NAP + hours + service areas + emergency note (if applicable)
  - [ ] Title/meta slots
  - [ ] OG/Twitter meta placeholders
- [ ] Build suggested components (Astro):
  - [ ] `HeroQuote.astro` (headline + subhead + dual CTAs)
  - [ ] `TrustBadges.astro` (Licensed / Insured / Same-day / Local Perth)
  - [ ] `ServiceCard.astro` (icon + title + 1-line description + quote link)
  - [ ] `QuoteForm.astro` (multi-step feel; accessible single-page form)
  - [ ] `StickyCallButton.astro` (mobile)
  - [ ] `AreasGrid.astro` (suburb list + blurbs)
  - [ ] `FAQAccordion.astro` (lightweight, accessible)

## Phase 4 - Content & Data Layer

- [ ] Create `src/data/services.json` (3-6 services) with:
  - [ ] `id`, `title`, `description`, `icon`, `isEmergency` (optional)
- [ ] Create `src/data/areas.json` (Perth suburbs) with:
  - [ ] `name`, `blurb` (1-2 sentences), `priority` (optional)
- [ ] Create `src/data/faqs.json` (5-8 FAQs) covering:
  - [ ] Same-day service
  - [ ] Licensed/insured
  - [ ] Suburb coverage
  - [ ] Response time
  - [ ] Is the quote free?
- [ ] Add testimonial quotes (optional) with name + suburb (avoid star overload).
- [ ] Add business placeholder content used site-wide (NAP, hours, emergency availability note).

## Phase 5 - Pages (Demo IA + Required Pages)

### Home (`src/pages/index.astro`) (Conversion Hub)

- [ ] Hero above the fold:
  - [ ] Headline: "Fast & Reliable [Service] in Perth"
  - [ ] Subheading: "Licensed • Insured • Same-Day Service Available"
  - [ ] Primary CTA: "Get a Free Quote"
  - [ ] Secondary CTA: "Call Now" (with icon)
  - [ ] Trust badges row
- [ ] Services snapshot grid (3-6 cards) with "Request quote" links.
- [ ] Why choose us section (3-5 bullet cards): upfront pricing, fast response, local Perth operator, respectful, fully insured.
- [ ] Areas served preview paragraph + CTA to `/areas/`.
- [ ] Testimonials (optional): 2-3 short quotes with name + suburb.
- [ ] Final CTA block: "Need help today?" + Quote + Call buttons.

### Services (`src/pages/services/index.astro`)

- [ ] Services index for SEO + clarity (grid/stacked cards).
- [ ] Each service card includes: icon, short explanation, typical use cases, CTA to quote/contact.
- [ ] Optional: add `/services/[service]/` detail pages later (data-driven).

### Areas (`src/pages/areas/index.astro`) (Local SEO Power Page)

- [ ] Intro paragraph: “We proudly provide [service] across Perth and surrounding suburbs.”
- [ ] Render suburb list as grid/multi-column with 1-2 sentence blurbs each.
- [ ] Repeat CTAs throughout: "Request a quote in [Suburb]".

### Contact (`src/pages/contact/index.astro`) (CORE Conversion)

- [ ] Quote form with multi-step feel (single page is fine):
  - [ ] Step 1: Service type (dropdown or cards)
  - [ ] Step 2: Location (suburb required; optional postcode)
  - [ ] Step 3: Urgency (Today / This week / Flexible)
  - [ ] Step 4: Details textarea (“Describe the issue or job”)
  - [ ] Step 5: Contact info (Name, Phone required, Email optional)
  - [ ] Primary submit CTA: "Get My Free Quote"
- [ ] Form UX rules: clear labels (no placeholders-only), required fields marked, success state message.
- [ ] Spam-safe: honeypot/hidden field.
- [ ] Contact extras: large phone number, business hours, emergency availability note.

### Pricing (`src/pages/pricing/index.astro`) (Optional)

- [ ] Typical call-out fee range + hourly rate range.
- [ ] Clear disclaimer: “Final pricing provided after inspection.”
- [ ] CTA back to quote/contact.

### Required pages from base prompt

- [ ] About (`src/pages/about.astro`) - local operator story + trust positioning.
- [ ] Privacy (`src/pages/privacy.astro`) - simple legal page.

## Phase 6 - SEO & GEO (Perth)

- [ ] Page titles follow a consistent template (per-page + brand).
- [ ] Meta description per page (unique, conversion-focused).
- [ ] Canonical URLs set correctly (respecting `site` + `base`).
- [ ] OpenGraph: title/description + placeholder OG image.
- [ ] Twitter card meta.
- [ ] Add JSON-LD schema:
  - [ ] `LocalBusiness` OR `HomeAndConstructionBusiness` (as appropriate) with Perth, WA address fields
  - [ ] `FAQPage` schema on Home or Contact
  - [ ] Add `Service` entries if you split into service pages
- [ ] Follow SEO copy guidelines (natural language; avoid keyword stuffing):
  - [ ] “local [service] in Perth”
  - [ ] “same-day [service] near you”
  - [ ] “trusted Perth [service provider]”
- [ ] Add `robots.txt`.
- [ ] Add sitemap (if straightforward) and verify it works with the configured `site`.
- [ ] Internal linking: Home -> Services -> Areas -> Contact (and back) with clear CTAs.

## Phase 7 - Accessibility & UX Checks

- [ ] Contrast AA compliant.
- [ ] One H1 per page; heading order is logical.
- [ ] Skip link works and is visible on focus.
- [ ] Keyboard navigation works across header, cards, accordion, and form controls.
- [ ] All phone numbers use `tel:` links and are easy to reach on mobile.
- [ ] Buttons have 44px+ tap targets.
- [ ] Form errors are clear and announced appropriately (if validation added).

## Phase 8 - Performance

- [ ] Target Lighthouse 95-100.
- [ ] Use `astro:assets` for images where possible; responsive sizes + lazy loading below the fold.
- [ ] Minimal JS (form logic only; no heavy sliders/animations).
- [ ] Avoid layout shift (set image dimensions / aspect ratios).

## Phase 9 - Deployment & Handoff

- [ ] Add build/run instructions (README or `/docs/`):
  - [ ] `npm install`
  - [ ] `npm run dev`
  - [ ] `npm run build`
  - [ ] `npm run preview`
- [ ] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [ ] Quick QA pass:
  - [ ] Phone number visible on all pages + click-to-call works
  - [ ] Sticky "Call Now" works on mobile and doesn’t cover key content
  - [ ] Quote form flow + success state + honeypot
  - [ ] Areas page CTAs and internal links
  - [ ] Basic SEO meta presence (view-source)

## Optional / Bonus

- [ ] Implement service-specific pages (`/services/<service>/`) fed from `services.json`.
- [ ] Prefill the contact form from service/area CTAs via query params (e.g., `?service=plumbing&suburb=subiaco`).
- [ ] Add a sticky "Get a Free Quote" CTA on long pages (keep it unobtrusive).
- [ ] Add an "Available today" badge pattern (static copy; no real scheduling needed).

