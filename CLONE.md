# clone/ — AI Agents for Account Receivables | Daylit

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://www.daylit.com/: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **259** component(s) (474 section instance(s) over 69 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (the Tailwind utilities are not bundled, because Tailwind v3 output is unlayered and would override a site whose own CSS uses native `@layer`; the site's CSS alone styles the clone).
- `public/`: **548** real file(s), 159.4 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 0 still(s) captured** (0 canvas(es) drew nothing and are an empty, correctly sized box). The 0 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 355 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **225 element(s) forced visible.** These started hidden/offset on the original and were still hidden/offset when this clone was captured — the scroll-triggered animation that reveals them on the original did not fire the same way during capture. Rather than ship them permanently invisible, their hiding style was stripped so they render plainly (no animation, but visible). Rebuild the real scroll-in motion in the remix.
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
- **No analytics or trackers**: none are in `src/` or `public/`.
- **No external links**: links to other sites (and to pages that were not captured) keep their element and styling but have no `href`; links between cloned pages go through the router. `--keep-external-links` keeps them.

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | PASS (1072 image reference(s), 1072 resolved) |
| No tracker host in code or `public/` | PASS |
| No external hyperlink in `src/` | PASS (479 link(s) to other sites or uncaptured pages lost their target) |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | PASS: vite build ok; 69 route(s) loaded: 0 console/network error(s), 0 outside host(s), 0 empty page(s) |
| Parity vs the original page, per section (gate 80%) | PASS: average 98.1% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 99.6% over 10 of 10 section(s) (reference: original crawl screenshot); page height 9047 → 9047 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `AccelerateRevenueCollection` | 1220 → 1220 px | 97.7% | 97.7% |
| 2 | `Section` | 596 → 596 px | 100.0% | 100.0% |
| 3 | `EnterpriseGradeOnboardedIn` | 2557 → 2557 px | 100.0% | 100.0% |
| 4 | `AccountsReceivableJustGot` | 1222 → 1222 px | 100.0% | 100.0% |
| 5 | `YouVeGotQuestions` | 756 → 756 px | 100.0% | 100.0% |
| 6 | `DiscoverHowDaylitS` | 1073 → 1073 px | 100.0% | 100.0% |
| 7 | `Div` | 513 → 513 px | 100.0% | 100.0% |
| 8 | `BookADemoToday` | 359 → 359 px | 100.0% | 100.0% |
| 9 | `FooterWrap` | 573 → 573 px | 99.0% | 99.0% |

**`/blog/this-ai-startup-is-giving-away-the-playbook-to-kill-its-own-category`**: 92.5% over 5 of 5 section(s) (reference: original crawl screenshot); page height 4932 → 4932 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky12` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header2` | 828 → 828 px | 99.7% | 99.7% |
| 2 | `Article` | 1947 → 1947 px | 97.9% | 97.9% |
| 3 | `YouMightAlsoLike` | 972 → 972 px | 81.3% | 81.3% |
| 4 | `FooterComponent` | 888 → 888 px | 85.2% | 85.2% |

**`/legal/dpa-customer`**: 99.6% over 3 of 3 section(s) (reference: original crawl screenshot); page height 5163 → 5163 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky11` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `DaylitDataProcessingAgreeme` | 4118 → 4118 px | 99.9% | 99.9% |
| 2 | `FooterComponent16` | 888 → 888 px | 98.0% | 98.0% |

**`/blog/why-the-most-effective-collections-channel-gets-skipped-first`**: 99.2% over 5 of 5 section(s) (reference: original crawl screenshot); page height 9284 → 9737 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky11` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header9` | 828 → 828 px | 99.8% | 99.8% |
| 2 | `TableOfContents` | 6299 → 6752 px | 99.2% | 99.2% |
| 3 | `YouMightAlsoLike` | 972 → 972 px | 100.0% | 100.0% |
| 4 | `FooterComponent` | 888 → 888 px | 98.0% | 98.0% |

**`/blog/ar-automation-practices-distributors`**: 99.2% over 6 of 6 section(s) (reference: original crawl screenshot); page height 10236 → 10236 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky11` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header15` | 828 → 828 px | 99.8% | 99.8% |
| 2 | `TableOfContents3` | 7053 → 7053 px | 99.2% | 99.2% |
| 3 | `PostSolutionCta2` | 158 → 158 px | 100.0% | 100.0% |
| 4 | `YouMightAlsoLike` | 972 → 972 px | 100.0% | 100.0% |
| 5 | `FooterComponent` | 873 → 873 px | 97.9% | 97.9% |

**`/blog/working-capital-spotlight-chemicals`**: 98.8% over 5 of 5 section(s) (reference: original crawl screenshot); page height 4384 → 4384 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky11` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header26` | 828 → 828 px | 99.7% | 99.7% |
| 2 | `DelaySupplierPaymentsWith` | 1399 → 1399 px | 97.7% | 97.7% |
| 3 | `YouMightAlsoLike` | 972 → 972 px | 100.0% | 100.0% |
| 4 | `FooterComponent` | 888 → 888 px | 98.0% | 98.0% |

### Missing in the mirror

1 local URL(s) the rendered page used were not saved by the crawl: `/_ext/cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg`

