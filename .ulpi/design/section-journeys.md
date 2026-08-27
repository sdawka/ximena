---
feature: section-journeys
register: brand
aesthetic_direction: editorial / magazine
design_system: bespoke
implementation_target: react-vite-tailwind-engineer
framework: Astro 6 static site
---

# Section Journeys — From Ambiguity to Alignment

## Design Read

The page is a continuous cartographic journey, not a stack of reveal animations. Every major section is a scene with three legible beats: an unresolved opening, a scroll-driven transformation, and a resolved handoff. The visitor moves from ambiguity to alignment while Ximena's practice, work, perspective, experience, and invitation are revealed.

The direction remains quiet editorial rigor interrupted by a living cartographic field. The typography stays disciplined; the drama comes from changing spatial relationships, SVG linework, sticky composition, masking, and contrast. Do not add generic floating cards, gradient blobs, glass panels, statistics, testimonial modules, or invented copy.

Counterfactual test: if the Living Contour Journey and its named stages are removed, the page collapses into an ordinary editorial portfolio. Therefore the route and the five distinct transformations are mandatory, not decoration.

Every screen must read as the same product if placed side by side.

## Locked Foundation

Use `.ulpi/design/DESIGN.md` as the source of truth. Do not change the locked palette, typography, spacing, radius, SVG language, or voice. Preserve both English and Spanish content and existing real project/experience data. Oxide remains the single accent.

No new runtime dependency is permitted. Use semantic Astro markup, CSS sticky positioning, bespoke inline SVG, IntersectionObserver for discrete active states, and one requestAnimationFrame scroll director for continuous progress. Never hijack wheel/touch scroll, snap the page, or animate layout properties during scroll.

## Journey Map

```text
[ORIENT: find the signal]
      route searches, then locks
                │
                ▼
[ALIGN: turn complexity into direction]
      three inputs converge to one line
                │
                ▼
[NAVIGATE: selected work as four waypoints]
      one focused case replaces the last
                │
                ▼
[REVEAL: perspective comes into focus]
      editorial mask opens into the full statement
                │
                ▼
[TRACE: experience accumulates]
      route draws through dated nodes
                │
                ▼
[ARRIVE: invitation]
      all strands resolve into one contact orbit
```

The visible desktop rail uses five labels: `ORIENT`, `ALIGN`, `NAVIGATE`, `TRACE`, `ARRIVE`. Reveal is the perspective interlude inside the handoff from Navigate to Trace, so it does not create a sixth rail item. The active label is oxide and its marker fills; completed markers remain outlined and legible. This rail is decorative and `aria-hidden`; normal headings provide document structure.

## Flow: Read the Portfolio as a Journey

### Goal

Help a prospective collaborator understand how Ximena turns ambiguity into aligned delivery, then make contacting her feel like the destination rather than a footer.

### Entry and Exit

- Direct `/` and `/es/` entry starts in Orient. A restored browser scroll position must immediately resolve every chapter to the correct state without replaying entrances.
- The existing skip link continues to reach `#work` and must focus/position at Navigate without trapping the visitor in a sticky scene.
- Existing project links remain true anchors to `#contact`, keyboard accessible and usable without JavaScript.
- The success exit is the `mailto:` contact action in Arrive.

### Section 01 — ORIENT / Hero

**Narrative:** scattered signals find a center.

- Make the hero a `min-height: 180svh` journey section with a sticky scene sized to the viewport below the header.
- Opening (0–25%): the four headline lines occupy slightly separated horizontal offsets. A large bespoke SVG field contains three partial contour paths, coordinate ticks, and an oxide beacon away from center. Keep the full headline readable; offsets never clip words.
- Transformation (25–75%): local progress draws the partial paths, reduces line offsets, rotates the elliptical compass ring by at most 18 degrees, and moves the beacon along a fixed SVG motion path or equivalent transform toward its target.
- Resolution (75–100%): headline lines align into their current composed lockup, the route becomes one continuous oxide segment, and the scroll cue changes visually from downward prompt to a thin handoff line entering Align.
- Pointer parallax may remain, but must be a subtle additive layer and disabled for coarse pointers/reduced motion.

### Section 02 — ALIGN / Practice

**Narrative:** complexity becomes a shared direction.

- Make this `min-height: 190svh` with a sticky two-column scene. Preserve the practice eyebrow, title, body copy, and currently block.
- Left column is the stable editorial statement. Right column is a full-height process field, not a card.
- Opening: three mineral/graphite SVG streams labeled with short existing concepts or neutral labels (`VISION`, `TEAMS`, `TIMELINES`; Spanish: `VISIÓN`, `EQUIPOS`, `TIEMPOS`) enter from different edges. Labels use utility type.
- Transformation: streams visibly approach one another while the practice paragraph reveals by one restrained line mask. Avoid word-by-word animation.
- Resolution: the three lines merge into one oxide route marked `ALIGNED DELIVERY` / `ENTREGA ALINEADA`; the currently block settles beside the resolved endpoint.
- The diagram must carry meaning even if labels wrap; labels cannot be embedded as inaccessible essential SVG text. Duplicate them as visible HTML or provide equivalent nearby text.

### Section 03 — NAVIGATE / Work

**Narrative:** four projects are four waypoints on one route.

- Keep the full-bleed inverse band. Replace the masonry/grid feeling with a `min-height` scroll theatre containing a sticky viewport and four regular-flow waypoint steps. Total desktop runway should be about `420svh` (one viewport per case plus transition space).
- Sticky viewport layout: compact section heading and vertical waypoint index on the left; one large art plate and changing metadata on the right. Only one case is visually dominant at a time.
- The four existing project anchors and inline SVG artworks remain in the DOM as a semantic list. Active step opacity is 1; adjacent steps may be faintly visible as route context but never overlap text.
- On transition, the outgoing artwork translates upward no more than 8% and masks out; incoming artwork rises from below and unmasks. Metadata follows the same spatial direction with a shorter distance. The oxide route connects waypoint 01 → 04 and the active node fills.
- Fast scrolling must resolve directly to the appropriate active case; it must not queue animations.
- Each project anchor retains its complete accessible name and visible metadata. Focus immediately makes that project active and never hides the focus ring.
- Mobile (<768px): no sticky theatre. Render four large sequential project chapters with visible art and metadata; each artwork may draw/reveal once on intersection.

### Perspective Interlude — REVEAL / About

**Narrative:** a point of view comes into focus.

- Create a `min-height: 160svh` interlude with a sticky statement.
- Opening: the existing about sentence is fully present for assistive technology but visually divided into two broad horizontal masks with a narrow vertical seam.
- Transformation: the seam moves across the measure like a cartographic lens; the leading portion shifts from muted to primary and the italic phrase receives the oxide emphasis already allowed by the design language.
- Resolution: masks are fully open and the entire statement is comfortably readable. The final contour strand exits toward Trace.
- Never split or duplicate text in a way that produces repeated screen-reader output. Decorative duplicated text must be `aria-hidden`.
- Mobile: render one static, readable statement with a short oxide rule drawing beneath it.

### Section 04 — TRACE / Experience

**Narrative:** each role adds a segment to the path.

- Make the section `min-height: 220svh` with the title and a route diagram sticky on desktop while experience rows advance as four scroll steps.
- The existing experience data stays unchanged. Present it as a semantic ordered list or equivalent structured rows.
- A vertical SVG route runs beside the rows. Local progress draws the line from oldest (bottom) toward current (top), or equivalently arranges rows chronologically while the visual direction remains unambiguous. Each threshold fills the matching oxide node and elevates that row from muted to primary.
- Current `Independent` is the destination node and receives a small pulsing availability ring only when motion is allowed. Do not invent tenure or metrics.
- Mobile: static timeline with all nodes and line visible; intersection may lift row opacity once, but no pinned section.

### Section 05 — ARRIVE / Contact

**Narrative:** the route resolves into an invitation.

- Expand the inverse contact section to `min-height: 170svh` with a sticky inner scene.
- Opening: four thin route strands enter from the edges behind the contact title. The orbit is open or offset and the email is visible but quiet.
- Transformation: strands converge toward the orbit, its dashed/drawn geometry closes, and the title tightens from a slightly expanded arrangement into its current centered lockup.
- Resolution: one oxide endpoint lands beside the email; the email gains full contrast and its underline completes. The final scene should feel calm and settled, not celebratory or explosive.
- The email remains usable throughout. Footer metadata appears before the sticky runway ends so it can be reached normally.

## Component Specifications

### JourneyRail

- Purpose: persistent desktop map of the five narrative stages.
- DOM: one fixed `nav`-like decorative container with five label/marker pairs; use `aria-hidden="true"` because it is not interactive.
- States: upcoming = subtle; active = oxide label + filled marker; complete = text/muted outline.
- Desktop only at `min-width: 1024px`; hide below. It must not cover content at 1024px or interfere with pointer events.

### JourneySection

- Purpose: shared contract for section-local progress.
- Required attributes: `data-journey`, `data-stage`, and a stable section id where applicable.
- CSS variables: `--section-progress` clamped 0–1 and optional `--section-active` 0/1. Children derive all continuous transforms from these.
- No-JS state is the final, fully readable composition. `.js` may opt into unresolved openings only after initialization.
- Progress formula: clamp `(viewportHeight - rect.top) / (rect.height + viewportHeight)`, adjusted so sticky content reaches exact 0 and 1 at scene boundaries. Cache element references; recompute geometry on resize rather than on every event where practical.

### ProjectTheatre

- Purpose: focus one selected project per scroll waypoint without removing semantic access to the others.
- Active project is determined by which step crosses a center-line observer or by normalized local progress mapped to four bounded indices.
- States: preceding, active, following, focus-forced. Transitions use opacity, transform, and clip-path only.
- Tab/Shift+Tab moves naturally through project anchors; focus sets active state. Enter follows the existing href.
- Decorative artwork SVG remains `aria-hidden`; accessible names are generated from visible project name, discipline, and year.

### ScrollDirector

- One passive `scroll` listener schedules one RAF. One passive resize listener refreshes measurements and schedules a frame.
- Each frame writes global page progress and local progress only for journey sections; update active rail stage and project index without spawning new timers.
- Use CSS variables and class changes. Do not call `scrollTo`, prevent default scroll, or introduce smooth-scroll libraries.
- Disconnect/rebind observers safely on Astro page transitions if those are ever enabled; current static navigation may initialize once.

## Responsive Rules

- `>=1024px`: all sticky chapter journeys and fixed labeled rail enabled.
- `768–1023px`: hero/Align/About/Contact can retain shortened sticky runways; work and experience favor sequential content if composition becomes crowded. Rail hidden.
- `<768px`: disable long pinning for Work, About, and Experience; prioritize a readable sequential narrative. Hero and Contact may use at most a short `120svh` runway if no content clips.
- `<360px`: no horizontal overflow at root, no clipped Spanish headline, and metadata stacks without overlap.
- Use `svh` with a reasonable `vh` fallback. Sticky scene top accounts for no fixed site header because the current header scrolls away.

## Accessibility and System States

- Reduced motion: every section renders its resolved state; no sticky runway is required, no parallax, path drawing, cursor follower, persistent pulse, or transition longer than 1ms.
- JavaScript unavailable/error: final content order, project links, language picker, email, all SVG plates, and experience rows remain visible and usable. Sticky dimensions must not create blank scroll deserts without `.js`.
- Keyboard: focus order follows visual/document order; skip link works; focus rings remain oxide 2px with 3px offset.
- Screen readers: section headings preserve correct hierarchy; decorative route art is hidden; no live announcements for passive scroll position.
- Zoom/reflow: content works at 200% and 320 CSS px without two-dimensional scrolling.
- Fonts delayed/offline: fallback faces preserve readable layout; do not defer the journey indefinitely waiting for fonts.
- Refresh/deep/restored scroll: initialize all progress from actual current geometry on first frame.
- Fast scroll and resize: state resolves deterministically; no animation queue or stale active project.

## Performance Budget

- One RAF loop only while a scroll/resize update is pending; never a permanent animation loop for scroll effects.
- Continuous properties: transforms, opacity, clip-path, and SVG stroke dash offset only.
- Avoid blur/filter animation and large repainting background-position animation.
- Maximum five journey rect reads plus four lightweight project-step reads in an update frame. Batch reads before writes.
- Keep all inline SVGs vector and compact. No raster image generation is needed.

## Design Preflight

- [x] Counterfactual identity: 3 — the named route transformations are structural.
- [x] Visual hierarchy: 3 — one dominant composition per viewport chapter.
- [x] Composition: 3 — asymmetry, sticky depth, and full-bleed contrast vary deliberately.
- [x] Typography: 3 — locked expressive Archivo/Newsreader pairing remains central.
- [x] Color strategy: 3 — mineral/graphite/oxide distribution is preserved.
- [x] Signature: 3 — the same contour changes semantic role across all sections.
- [x] Motion motivation: 3 — movement expresses search, convergence, wayfinding, accumulation, arrival.
- [x] Responsive behavior: 3 — sticky journeys become sequential narratives on small screens.
- [x] Accessibility: 3 — final-state fallback, reduced motion, semantic ordering, and focus behavior specified.
- [x] State coverage: 3 — no-JS, restored scroll, resize, fast scroll, delayed fonts, offline, coarse pointer covered.
- [x] AI-slop audit: 3 — no generic cards, gradient text, gratuitous pills, fake metrics, excessive icons, or ornamental effects.

## Acceptance Criteria

- [ ] Each of the five named stages has a visibly distinct opening, transformation, and resolved state on desktop.
- [ ] A continuous contour/route motif provides a clear visual handoff through the page.
- [ ] Work is experienced one focused case at a time on desktop and as four readable chapters on mobile.
- [ ] English and Spanish pages fit without clipping at 1440, 1024, 768, 375, and 320 CSS px.
- [ ] Reduced-motion and no-JS states expose all content immediately without empty runways.
- [ ] Keyboard and skip-link navigation remain complete; project and contact actions remain real links.
- [ ] Fast scrolling, refreshing mid-page, and resizing resolve to the correct active stage/project.
- [ ] Root horizontal overflow is zero at 320px.
- [ ] `npm run build` and Astro checks pass without adding dependencies.

## Build Handoff

Implementation target: `react-vite-tailwind-engineer`, acting as the closest client-side specialist for this Astro build. Primary file is `src/components/HomePage.astro`; edit translations only when the three short Align labels require localization. Preserve the bespoke system and all locked tokens.

Implement exactly this spec. Theme the design system with our locked tokens; do NOT redesign or re-implement its components.
