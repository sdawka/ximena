# Ximena Alvarez Sosa — Portfolio

## How to Edit Content

### Text Content (English)
Edit `src/i18n/en.json`:
- **Page title** — `meta.title`
- **Availability badge** — `header.available`
- **Hero headline** — `hero.designer`, `hero.quiet`, `hero.considered`, `hero.systems`
- **Hero tags** — `hero.pill`
- **Intro paragraphs** — `practice.text`, `currently.text`
- **About bio** — `about.text`
- **Footer info** — `footer.copyright`, `footer.coords`, `footer.status`

### Text Content (Spanish)
Edit `src/i18n/es.json` — same structure as English.

### Projects
Edit `src/components/HomePage.astro` (lines 9-14):
```js
{ n: "01", name: "Project Name", tags: ["Tag1", "Tag2"], year: "2025" }
```

### Experience / CV
Edit `src/components/HomePage.astro` (lines 16-21):
```js
{ yr: "2024 —", place: "Company", role: t.experience.roles.project_lead, loc: "City" }
```
Role labels come from the i18n files under `experience.roles`.

### Email Address
Edit `src/components/HomePage.astro` (line 109).

### Name in Header
Edit `src/components/HomePage.astro` (line 28).

## Tips
- Text inside `<em>...</em>` appears in italic accent style
- Keep quotes around text values
- The site supports English and Spanish — update both i18n files for full translation
