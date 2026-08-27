---
feature: Portfolio motion and visual atmosphere refresh
binds_to: ./DESIGN.md
target: react-vite-tailwind-engineer
framework_actual: Astro 6, native CSS and browser APIs
---

# Portfolio Motion Refresh

Every screen must read as the same product if placed side by side.

## Flow: Discover the Work

**Goal:** Let a prospective client understand Ximena's project-lead point of view, scan selected work, switch language, and reach contact without motion obscuring content.

**User story:** As a prospective collaborator, I want a memorable but calm bilingual portfolio journey so I can judge the work and contact the project lead confidently.

**Entry points:** `/`, `/#work`, `/#about`, and `/#contact`.

```text
Load page
  -> hero type assembles while Living Contour draws
  -> scroll cue leads to practice statement
  -> selected work images reveal through editorial masks
  -> experience rows expose an oxide tracking line on hover/focus
  -> contact orbit resolves around the email link
  -> mail client opens from the explicit email link
```

### Decisions and edge states

- If JavaScript is unavailable, content and SVG art are fully visible; no element begins permanently hidden.
- If `prefers-reduced-motion: reduce`, bypass observers and pointer/scroll transforms. Render the final composition immediately.
- If the pointer is coarse, disable the custom cursor and magnetic effects. All links retain visible hover and focus states.
- On deep-link refresh, the target section remains correctly positioned and reveals immediately when in view.
- Offline has no functional penalty after the document loads. Font failure falls back to metric-compatible local faces and never hides text.
- Placeholder project links use meaningful accessible labels and stay visibly focusable. Do not add loading spinners because no asynchronous project data exists.
- Email activation relies on `mailto:`. There is no success/error UI to fabricate; the link remains selectable and copyable.

## Composition

Use at least four distinct layout families:

1. Full-bleed editorial hero with staggered type baselines.
2. Ruled two-column practice statement.
3. Asymmetric project grid with a full-width lead and alternating portrait/landscape crops.
4. Tabular experience list.
5. Full-bleed inverse contact field.

Add a slim fixed progress rail on the right edge for desktop. It contains no section numbers: a single oxide line grows with page progress. Hide it below 768px.

## Component: LivingContour

**Purpose:** The single signature SVG creates spatial continuity through the page.

**Markup:** One fixed hero-scale SVG inside a decorative atmosphere layer plus cropped SVG instances inside project thumbnails. Use paths, circles, and masks, not raster images.

**States:**

| state | visual | behavior |
|---|---|---|
| initial | contour paths offset and faint | hero load begins the first 20% draw |
| scrolling | line progress follows normalized page progress | update in one `requestAnimationFrame` loop |
| project hover/focus | local contour shifts 8px and oxide disc scales to 1 | 500ms locked easing |
| reduced motion | complete line and static local art | no transforms or dash animation |

**Accessibility:** All instances decorative with `aria-hidden="true"`. The composition cannot carry meaning unavailable in text.

**Performance:** Prefer inline SVG under 12 paths. Set path lengths once at startup, cache measurements, and write only CSS custom properties during scroll.

## Component: HeroAssembly

**Purpose:** Establish the editorial voice in one orchestrated entrance.

- Preserve the four-line headline copy.
- Wrap line content in overflow-hidden clips. On load, lines rise from `translateY(115%)` with 80ms staggering.
- The first line starts only after fonts are ready or after a 700ms timeout, whichever comes first.
- Replace the plain gradient circle with an inline orbital SVG: oxide solid core, graphite elliptical ring, one small coordinate tick.
- Add a compact “Scroll to work” anchor below the hero, aligned to the page grid, with an arrow drawn as SVG.
- Pointer movement may shift the orbital ring by at most 8px on fine pointers. It must settle using the locked easing and must not chase on mobile.
- Hero remains readable at 320px; decorative orbital art moves behind text and never causes overflow.

## Component: ProjectPlate

**Purpose:** Turn placeholders into authored, theme-fitting motion graphics while real case-study imagery is unavailable.

Each plate uses a distinct composition built from the same visual system:

- Cadence: large `C` crop, concentric timing rings, oxide sweep.
- Northbound: north arrow, offset grid, contour ridge.
- Lumen Studio: aperture arcs, small coordinate cross, light field.
- Field Notes: ruled index marks, leaf-like contour loop, oversized `04` crop.

Images reveal via a square-edged `clip-path: inset(0 0 100% 0)` to final state as they enter. Inner art counter-translates 24px to create depth. On hover/focus, image scale maxes at `1.025`; metadata rule draws left to right. No rounded generic cards.

Links require useful `aria-label` values such as `View Cadence, Identity, 2025`. Focus mirrors hover and uses the locked oxide outline.

## Component: ScrollReveal

Use IntersectionObserver for one-time reveals. Differentiate text, rules, and plates:

- text: opacity + 24px rise;
- rules: `scaleX(0)` from the left;
- plates: clip-path mask + inner counter-motion;
- experience rows: 16px rise with 50ms capped stagger.

Add `.js` to the root before applying hidden starting states so content stays visible without JavaScript. Unobserve after entrance. At widths below 640px, halve translations and remove stagger delays above 150ms.

## Component: ContactOrbit

**Purpose:** Resolve the Living Contour into the single primary action.

The footer becomes an inverse full-bleed field extending to viewport edges. An SVG orbit surrounds “Let's talk.” and rotates no more than 18 degrees over the entire section scroll range. The email link is the only primary action; underline translates rather than flashing color. Decorative coordinate text remains subtle and hidden from screen readers.

## Global Atmosphere

- Add an ultra-light inline SVG grain layer at opacity <= 0.035. Keep it fixed and non-interactive.
- Add two broad radial ink blooms using CSS gradients, not multicolor mesh. Their only hues are locked background/inverse/oxide tokens.
- Use `mix-blend-mode: multiply` only for decorative linework. Never on readable text.
- Section background transitions should be hard editorial cuts or very broad single-hue fades. No glass panels.
- Custom cursor becomes a small outlined graphite ring with an oxide center. On links it expands and exposes a short “VIEW” or “MAIL” label only on fine pointers.

## Keyboard and screen-reader path

Tab order follows DOM order: scroll cue, four project links, email. Add a skip link as the first focusable element. All pointer-only effects have hover and `:focus-visible` equivalents. Decorative motion gets no ARIA. Section landmarks keep their headings. Touch targets are at least 48px high where controls are compact.

## Responsive behavior

- `<640px`: single project column, no fixed progress rail, no cursor, simplified contour background, static hero orbit, 48px minimum controls.
- `640–1023px`: two-column layouts may remain where copy stays above 38ch; contact orbit scales with viewport.
- `>=1024px`: full signature contour, pointer depth, fixed progress rail, asymmetric project sizing.

## Build Handoff

**Target agent:** `react-vite-tailwind-engineer` acting as the closest available client-side specialist, but implement in the actual Astro files without adding React or Tailwind.

**Design system:** bespoke. No package setup. Use Astro, semantic HTML, native CSS, inline SVG, IntersectionObserver, requestAnimationFrame, and matchMedia only.

**Instruction:** Implement exactly this spec. Theme the design system with our locked tokens; do NOT redesign or re-implement its components.

### Acceptance criteria

- [ ] Current content and section anchors remain usable.
- [ ] Living Contour visibly connects hero, selected work, and contact using inline SVG.
- [ ] Hero has one orchestrated load sequence; projects have scroll masks; footer has a scroll-linked orbit.
- [ ] Four project placeholders become distinct SVG art plates using one coherent visual language.
- [ ] No new runtime dependency is added.
- [ ] JavaScript-off content is visible and reduced-motion produces a complete static layout.
- [ ] Keyboard focus mirrors hover; skip link and meaningful project labels are present.
- [ ] Mobile at 320px has no horizontal overflow; touch targets are >=48px.
- [ ] Continuous scroll writes are batched in one RAF and limited to transform/opacity/CSS custom properties.
- [ ] `npm run build` succeeds with no Astro or TypeScript errors.

## Design Pre-Flight

- [x] Identity lock: all values bind to `DESIGN.md`; planned off-system values: 0.
- [x] One accent, one radius scale, one SVG family, one type pairing.
- [x] Anti-slop: banned fonts, color clichés, generic cards, nested cards, status decoration, gradient text, and buzzword copy: 0.
- [x] Signature: Living Contour is present across three major page moments.
- [x] State and edge coverage includes JS-off, reduced motion, deep links, offline/font failure, pointer type, and empty async-state non-applicability.
- [x] Accessibility includes contrast, focus, keyboard path, reduced motion, semantic landmarks, decorative SVG treatment, and 48px mobile targets.
- [x] Layout craft uses five composition families and one focal point per viewport.
- [x] Cognitive load: one contact action, no expanded navigation, four work links.

Self-critique: distinctiveness 4, hierarchy 4, consistency 4, accessibility 4, states/edges 3, copy 3, restraint 4, motion motivation 4. Total 30/32. No axis <= 2.

Revision at gate: limited continuous motion to the signature contour, hero orbit, and contact orbit so each animated element reinforces spatial continuity rather than competing for attention.
