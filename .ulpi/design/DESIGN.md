---
project: Ximena Alvarez Sosa Portfolio
register: brand
aesthetic_direction: editorial / magazine
color_strategy: committed
design_system: bespoke
design_variance: 7
motion_intensity: 9
visual_density: 5
---

# Ximena Alvarez Sosa Portfolio Design Language

## Design Read

Quiet editorial rigor interrupted by a living cartographic field. The page should feel typeset, spatial, and observant rather than decorated.

## Signature

The **Living Contour Journey** is one hand-drawn SVG route that changes purpose across five scroll chapters: it searches in Orient, converges in Align, indexes work in Navigate, becomes a career timeline in Trace, and resolves into a contact orbit in Arrive. Each section owns a local beginning, transformation, and resolved state; the route is the visual handoff between them. Everything around it stays typographically disciplined.

## Color (locked)

Color distribution is mineral field 60%, graphite 30%, oxide 10%. Oxide is the only accent. No gradient text, purple glow, beige body surface, or extra highlight color.

| role | OKLCH | hex | use |
|---|---|---|---|
| background | `oklch(0.82 0.018 137)` | `#C4CCBF` | dominant mineral paper field |
| surface | `oklch(0.90 0.012 137)` | `#DDE2DA` | raised project and text surfaces |
| elevated | `oklch(0.96 0.008 137)` | `#F0F2ED` | sparing image details and focus contrast |
| inverse | `oklch(0.20 0.012 118)` | `#171A16` | selected-work band and footer depth |
| text | `oklch(0.18 0.012 118)` | `#141713` | primary type on background, contrast > 12:1 |
| text-inverse | `oklch(0.94 0.010 137)` | `#E9EDE6` | type on inverse, contrast > 13:1 |
| muted | `oklch(0.38 0.015 130)` | `#4D544A` | secondary copy on light, contrast > 5.6:1 |
| subtle | `oklch(0.58 0.018 132)` | `#7D8678` | nonessential large labels and lines only |
| border | `oklch(0.66 0.018 134)` | `#929B8D` | rules and outlines; use stronger opacity for controls |
| accent | `oklch(0.65 0.19 38)` | `#E1572D` | oxide markers, contour emphasis, hover image wash |
| success | `oklch(0.52 0.11 145)` | `#3F7D4F` | semantic status only |
| warning | `oklch(0.72 0.13 83)` | `#C49325` | semantic warning only |
| danger | `oklch(0.51 0.17 27)` | `#B9342F` | semantic error only |
| info | `oklch(0.53 0.09 230)` | `#39778C` | semantic info only |

Focus uses a 2px oxide outline plus a 3px background offset. Accent text is never used below large-display size unless it passes 4.5:1 against its surface.

## Type (locked)

| role | family | use | notes |
|---|---|---|---|
| display/body | `Archivo`, `Arial Narrow`, sans-serif | hero, headings, navigation, reading | variable width and weight; large tracking floor `-0.055em`; body measure 68ch |
| editorial accent | `Newsreader`, Georgia, serif | italic words and oversized project numerals only | never for body copy; gives print contrast without becoming the whole identity |
| utility | `IBM Plex Mono`, monospace | dates, labels, location, status | uppercase only for short metadata |

Type scale: `11, 13, 16, 20, 28, 40, 64, clamp(72px, 14vw, 214px)`. Headlines use `text-wrap: balance`; reading copy uses `text-wrap: pretty`.

## Scales (locked)

- Spacing: `0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 224px`.
- Radius: `0, 2px, 9999px`. Rectangular editorial frames stay square; pills and circular markers use full radius.
- Motion: `fast 120ms`, `base 300ms`, `emphasis 500ms`, `sequence 900ms`; easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Motion rule: transforms and opacity only during continuous scroll. SVG drawing may update stroke dash offset. Scroll motion is section-local and narrative: each chapter must visibly progress from an unresolved to a resolved state. No bounce, elastic, scroll-jacking, or perpetual decorative motion beyond the availability pulse.
- Reduced motion: all elements render in their final state; no smooth scrolling, parallax, pointer-following, line drawing, or transition longer than 1ms.
- Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.
- Z-index: `base 0`, `art 1`, `content 2`, `sticky 30`, `fixed 40`, `cursor 70`, `skip-link 80`.

## Icon and SVG Language

Use bespoke, open geometric SVG linework only: 1px to 1.5px strokes, round caps for contour paths, square caps for rules. No third-party icon family is needed. Decorative SVGs are `aria-hidden="true"` and `focusable="false"`.

## Voice

Register: precise, calm, direct. Keep the bilingual first-person project-lead copy. Action vocabulary is “View project”, “Explore work”, and “Start a project”, with matching Spanish translations. Do not use buzzwords, fake metrics, version labels, or stylistic em dashes.

## Identity Lock

Every screen must read as the same product if placed side by side.
