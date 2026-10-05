# clone/ — AI Agents for Account Receivables | Daylit

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://www.daylit.com/?dl=anon_q5vd15p4muv2itl7--force: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **259** component(s) (474 section instance(s) over 69 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (Tailwind utilities load first, preflight is off, so the site's CSS wins).
- `public/`: **547** real file(s), 159.0 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 0 still(s) captured** (0 canvas(es) drew nothing and are an empty, correctly sized box). The 0 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 334 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, menus, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
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
| Parity vs the original page, per section (gate 80%) | PASS: average 99.3% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 99.6% over 10 of 10 section(s) (reference: original crawl screenshot); page height 9047 → 9047 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `AccelerateRevenueCollection` | 1220 → 1220 px | 97.6% | 97.6% |
| 2 | `Section` | 596 → 596 px | 100.0% | 100.0% |
| 3 | `EnterpriseGradeOnboardedIn` | 2557 → 2557 px | 100.0% | 100.0% |
| 4 | `AccountsReceivableJustGot` | 1222 → 1222 px | 100.0% | 100.0% |
| 5 | `YouVeGotQuestions` | 756 → 756 px | 100.0% | 100.0% |
| 6 | `DiscoverHowDaylitS` | 1073 → 1073 px | 100.0% | 100.0% |
| 7 | `Div` | 513 → 513 px | 100.0% | 100.0% |
| 8 | `BookADemoToday` | 359 → 359 px | 100.0% | 100.0% |
| 9 | `FooterWrap` | 573 → 573 px | 99.0% | 99.0% |

**`/product/fundnow`**: 99.0% over 17 of 17 section(s) (reference: original crawl screenshot); page height 12109 → 12109 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky12` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Form7` | 625 → 625 px | 100.0% | 100.0% |
| 2 | `Section5` | 682 → 682 px | 93.8% | 93.8% |
| 3 | `Section2` | 300 → 300 px | 96.3% | 96.3% |
| 4 | `WLayoutVflex` | 296 → 296 px | 100.0% | 100.0% |
| 5 | `BgSurface7` | 761 → 761 px | 100.0% | 100.0% |
| 6 | `WantToSeeHow` | 276 → 276 px | 100.0% | 100.0% |
| 7 | `WVariant0a13d40172e0` | 224 → 224 px | 100.0% | 100.0% |
| 8 | `HowSellingCustomerInvoices` | 1006 → 1006 px | 100.0% | 100.0% |
| 9 | `BgSurface6` | 825 → 825 px | 100.0% | 100.0% |
| 10 | `BgSurface8` | 981 → 981 px | 96.6% | 96.6% |
| 11 | `BigSection2` | 904 → 904 px | 100.0% | 100.0% |
| 12 | `StillHaveQuestions` | 296 → 296 px | 100.0% | 100.0% |
| 13 | `LatestInsightsAboutAccounts` | 1780 → 1780 px | 99.6% | 99.6% |
| 14 | `WLayoutVflex` | 296 → 296 px | 100.0% | 100.0% |
| 15 | `UTexture2` | 1056 → 1056 px | 100.0% | 100.0% |
| 16 | `FooterComponent8` | 888 → 888 px | 98.0% | 98.0% |

**`/blog/your-ar-inbox-isnt-slow-its-a-trust-problem`**: 99.2% over 5 of 5 section(s) (reference: original crawl screenshot); page height 9848 → 10301 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky20` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header3` | 828 → 828 px | 99.8% | 99.8% |
| 2 | `LetAIAnswerThe` | 6863 → 7316 px | 99.2% | 99.2% |
| 3 | `YouMightAlsoLike2` | 972 → 972 px | 100.0% | 100.0% |
| 4 | `FooterComponent` | 888 → 888 px | 98.0% | 98.0% |

**`/blog/why-the-most-effective-collections-channel-gets-skipped-first`**: 99.2% over 5 of 5 section(s) (reference: original crawl screenshot); page height 9284 → 9737 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky20` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header9` | 828 → 828 px | 99.8% | 99.8% |
| 2 | `TableOfContents` | 6299 → 6752 px | 99.2% | 99.2% |
| 3 | `YouMightAlsoLike` | 972 → 972 px | 100.0% | 100.0% |
| 4 | `FooterComponent` | 888 → 888 px | 98.0% | 98.0% |

**`/blog/how-chemical-companies-use-daylit-to-unlock-working-capital`**: 99.3% over 6 of 6 section(s) (reference: original crawl screenshot); page height 7975 → 7975 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky20` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header14` | 828 → 828 px | 99.8% | 99.8% |
| 2 | `ExecutiveSummary` | 4776 → 4776 px | 99.2% | 99.2% |
| 3 | `PostSolutionCta` | 158 → 158 px | 100.0% | 100.0% |
| 4 | `YouMightAlsoLike` | 972 → 972 px | 100.0% | 100.0% |
| 5 | `FooterComponent` | 888 → 888 px | 98.0% | 98.0% |

**`/blog/slowest-part-of-a-dispute-manual-work`**: 99.2% over 5 of 5 section(s) (reference: original crawl screenshot); page height 9818 → 10271 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `NavbarSticky20` | 117 → 117 px | 100.0% | 100.0% |
| 1 | `Header25` | 828 → 828 px | 99.8% | 99.8% |
| 2 | `TableOfContents11` | 6833 → 7286 px | 99.2% | 99.2% |
| 3 | `YouMightAlsoLike` | 972 → 972 px | 100.0% | 100.0% |
| 4 | `FooterComponent` | 888 → 888 px | 98.0% | 98.0% |

### Missing in the mirror

2 local URL(s) the rendered page used were not saved by the crawl: `/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6abd6b0e8f14d9c9d93fe01c_Card%20/(1/`, `/_ext/cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg`

