# Design Spec — Mirza Yousuf Personal Website
> Last updated: May 2026. Reference: `index.html`

---

## Overview

A single-page personal portfolio with a **terminal / IDE aesthetic**. Dark background, monospace type, `//`-prefixed labels, syntax-highlighted chips, and a 12-column CSS bento grid. Built with React (Babel inline) + plain CSS custom properties.

**Sections (in order):**
1. Nav (fixed)
2. Hero
3. About (bento grid)
4. Recent Projects
5. University Courses (terminal UI)
6. Work Experience
7. Connect / Footer

---

## Design Tokens

### Colors (CSS custom properties on `:root`)

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#09090e` | Page background |
| `--bg2` | `#0f0f17` | Card backgrounds |
| `--bg3` | `#14141f` | Card hover, thumbnails |
| `--border` | `rgba(255,255,255,0.07)` | Hairline grid lines, section dividers |
| `--border2` | `rgba(255,255,255,0.12)` | Borders on interactive elements |
| `--text` | `#e8e8f0` | Primary text |
| `--text2` | `#8888aa` | Secondary / muted text |
| `--text3` | `#55556a` | Tertiary, placeholders, prompt symbols |
| `--green` | `oklch(72% 0.2 145)` | **Primary accent** — cursor, badges, links, highlights |
| `--green-dim` | `oklch(72% 0.2 145 / 0.15)` | Tinted backgrounds (chips, badges) |
| `--green-glow` | `oklch(72% 0.2 145 / 0.35)` | Box-shadow glow on primary button hover |
| `--blue` | `oklch(68% 0.18 240)` | Secondary accent — course codes, exp tags |
| `--blue-dim` | `oklch(68% 0.18 240 / 0.12)` | Blue chip backgrounds |
| `--purple` | `oklch(68% 0.18 290)` | Tertiary accent — data/ML chips |
| `--purple-dim` | `oklch(68% 0.18 290 / 0.12)` | Purple chip backgrounds |
| `--orange` | `oklch(72% 0.18 55)` | DB/design chips |

> **Accent swap:** The tweaks panel lets the user change `--green` / `--green-dim` / `--green-glow` to blue or purple at runtime. All accent-colored elements inherit from `--green`, so only those three vars need updating.

### Typography

| Token | Value |
|---|---|
| `--mono` | `'JetBrains Mono', monospace` |
| `--sans` | `'Inter', sans-serif` |

**Usage rules:**
- `--mono` → nav logo, nav links, hero prompt/name/title, all card labels, section numbers, chip text, terminal UI, exp roles/companies/dates, footer, buttons
- `--sans` → body paragraphs, card subtitles, project descriptions, exp descriptions

**Type scale:**
| Element | Size | Weight |
|---|---|---|
| Hero name | `clamp(48px, 7vw, 96px)` | 700 |
| Hero subtitle | `clamp(16px, 2vw, 22px)` | 400 |
| Section headings | `28px` | 700 |
| Connect heading | `48px` | 700 |
| Card title | `14–26px` (varies per card) | 600 |
| Body / desc | `13–16px` | 400 |
| Labels / chips / nav | `10–13px` | 400–500 |

---

## Layout

### Grid
- Max content width: **1200px**, centered, `margin: 0 auto`
- Section padding: `80px 48px` (desktop), `60px 24px` (≤900px)
- Nav height: **64px** (fixed, `padding-top: 64px` on `<main>`)

### Breakpoint
Single breakpoint at **900px**:
- All bento cards go `grid-column: span 12` (full width, stacked)
- Projects grid → single column
- Experience cards → single column
- Nav/footer → compact padding

---

## Components

### Nav
- Fixed top, `z-index: 100`
- Background: `rgba(9,9,14,0.85)` + `backdrop-filter: blur(16px)`
- Border bottom: `1px solid var(--border)`
- Left: logo `~/mirza-yousuf` in `--mono`, accent green
- Right: links in `--mono` 12px, each prefixed with `// ` (via `::before`, color `--text3`)
- Link hover → color shifts to `--green`

---

### Hero

**Layout:** full-viewport column, vertically centered, with a CSS grid background (48×48px, masked with radial gradient fading right).

**Elements (top to bottom):**
1. **Status badge** — pill with pulsing green dot + `open to work — may 2026`
2. **Prompt line** — `$ whoami` in mono, muted
3. **Name** — typewriter animation (`useTypewriter` hook, 65ms/char, 400ms delay), blinking block cursor (`4px × 0.85em`, green, `animation: blink 1.1s step-end infinite`)
4. **Subtitle** — `// an aspiring software developer` (comment prefix in `--text3`, rest in `--green`)
5. **Description** — 2-line body text, `--text2`, max-width 480px
6. **CTA buttons** — row of 3:
   - Primary: `◆ GitHub` — green border/tint, fills green on hover with glow
   - Ghost: `View projects →`
   - Ghost: `Resume`

**Animations:**
- `@keyframes blink` — `step-end`, 50% opacity toggle, 1.1s
- `@keyframes pulse` — box-shadow expand, 2s ease-in-out, on `.status-dot` and `.avail-dot`

---

### Bento Grid (About section)

CSS grid: `grid-template-columns: repeat(12, 1fr)`, `gap: 1px`, `background: var(--border)` — the gap *is* the border line. Outer border + `border-radius: 12px` + `overflow: hidden` for clean corners.

**Cards and their spans:**

| Class | Col span | Row span | Content |
|---|---|---|---|
| `.bc-photo` | 5 | 2 | Headshot photo (or placeholder) + name/handle overlay |
| `.bc-status` | 7 | 1 | "Looking for a job", open-to-work dot, `const` graduation code snippet |
| `.bc-stack` | 4 | 1 | Tech chip cloud |
| `.bc-interests` | 3 | 1 | Arrow list: Full Stack, Cybersecurity, Data Science, Game Dev |
| `.bc-contact` | 4 | 1 | "Start a project together?" + copy-email button |
| `.bc-game` | 5 | 1 | Portfolio game CTA + game thumbnail |

**Card anatomy:**
- `.card-label` — `10px` mono, `--text3`, `letter-spacing: 0.1em`, prefixed `// ` via `::before`
- `.card-title` — semi-bold, white
- `.card-sub` — 13px, `--text2`
- Hover: `background` transitions from `--bg2` → `--bg3`

**Photo card specifics:**
- `min-height: 320px`
- Uses `<img>` with `object-fit: cover`, `filter: grayscale(20%) contrast(1.05)`
- Overlay gradient bottom-up: `rgba(9,9,14,0.95)` → transparent
- Overlay shows name (18px mono) + handle (12px, green)
- Placeholder: dashed border, centered SVG person icon + `// photo placeholder` label

**Tech chips (`.chip`):**
- `font-family: --mono`, `font-size: 11px`, `padding: 3px 10px`, `border-radius: 3px`
- Four color variants: `chip-green`, `chip-blue`, `chip-purple`, `chip-orange` — each sets `color`, `border-color`, and `background` from the corresponding dim token

**Copy email button:**
- Monospace, transparent background, border `--border2`
- Click: copies to clipboard, toggles icon `□` → `✓` and label, resets after 2s
- Hover: border → `--green`, text → `--green`

---

### Projects Grid

- `grid-template-columns: repeat(2, 1fr)`, `gap: 1px`, same hairline-border trick as bento
- Each card: `<a>` element (full block link)

**Card structure:**
1. **Thumbnail** — `height: 200px`, striped placeholder (`repeating-linear-gradient` at 45°, 10px stripes), mono filename label. If real image: `object-fit: cover`, scales to `1.04` on hover
2. **Meta area** — `padding: 20px 24px`
   - Project name (mono, 16px, 600)
   - Description (13px, `--text2`)
   - Footer row: tag chips left, `view →` link right (hidden by default, slides in on card hover via `opacity` + `translateX`)

---

### Courses — Terminal UI

A macOS-style terminal window:
- **Title bar:** three colored dots (red `#ff5f57`, yellow `#ffbd2e`, green `#28ca41`), title `bash — courses.sh`
- **Body:** mono font, rendered as a shell session:
  ```
  mirza@mun:~$ grep -r "courses I loved" ./university
  // found 6 results
  [COMP XXXX]   [description]
  ...
  mirza@mun:~$ show --all█
  ```
- Initially shows 4 courses; clicking `show --all` expands to all 6
- Each course row: 2-column grid (`120px` code + `1fr` desc), hover highlights with green left-border + `--green-dim` background
- Course codes in `--blue`, descriptions in `--text2`
- Blinking cursor on the prompt line (same blink animation)

---

### Experience

A stacked list with `1px` hairline dividers (same gap trick):

Each card: `grid-template-columns: 1fr auto`
- **Left:** category tag (blue pill, 9px mono uppercase) → role name (mono 16px 600) → `// company` (green, 12px) → description (13px `--text2`)
- **Right:** date string (mono 11px, `--text3`, `white-space: nowrap`)
- Hover: `--bg2` → `--bg3`

**Entries:**
| Role | Company | Date | Tag |
|---|---|---|---|
| Cyber Security Intern | Fortinet & ZScaler workshops | Jul 2023 – Sep 2023 | Security |
| UI Developer Intern | Web Development | Jul 2024 – Sep 2024 | Frontend |
| Game Developer | Johnson Geo Center | Jul 2025 – Aug 2025 | Games |

---

### Connect / Footer

**Connect section:**
- Centered, `padding: 100px 48px`
- Section header (same pattern: number + h2 + line)
- Subtext: `--text2`
- 4 link buttons: LinkedIn, GitHub, Gmail, Resume — ghost style, hover → green fill

**Footer:**
- `border-top: 1px solid var(--border)`
- Left: `// Mirza Yousuf — built with curiosity` (mono 11px, `--text3`, name in `--green`)
- Right: `© 2026`

---

## Interactions & Animations

| Trigger | Effect |
|---|---|
| Page load | Name types in via `useTypewriter`, cursor blinks |
| `.status-dot` / `.avail-dot` | Continuous pulse (box-shadow expand) |
| Nav link hover | Color → `--green` |
| Button (primary) hover | Fill green + glow shadow |
| Button (ghost) hover | Border + text → white |
| Bento card hover | Background lightens (`--bg2` → `--bg3`) |
| Project card hover | Background lightens + thumbnail scales 1.04 + "view →" slides in |
| Course row hover | Left border turns green + row tints green-dim |
| Experience card hover | Background lightens |
| Connect link hover | Border + text + background → green |
| "copy my email" click | Icon + label swap, resets after 2s |
| "show --all" click | Expands course list from 4 → 6 |

---

## Data (hardcoded in JS)

### `STACK` array
```js
[React, Next.js, Node.js, Python, Pandas, Numpy, SQL, Sci-Kit, HTML/CSS, JS]
// chip colors: green/green/blue/blue/purple/purple/orange/purple/orange/green
```

### `PROJECTS` array
```js
[
  { name, desc, tags[], tagCls[], link }
  // Auto Emailer | Personal Site | Trail Mark | Ad Banner Design
]
```

### `COURSES` array
```js
[
  { code: 'COMP XXXX', desc: '...' }
  // COMP 2001, 2002, 2005, 2007, 3200, 3400
]
```

### `EXPERIENCE` array
```js
[
  { role, company, date, desc, tag }
  // Cyber Security Intern | UI Developer Intern | Game Developer
]
```

---

## Tweaks Panel

Uses `tweaks-panel.jsx` (companion file). Activated by host toolbar.

| Key | Type | Default | Effect |
|---|---|---|---|
| `accentColor` | `'green' \| 'blue' \| 'purple'` | `'green'` | Swaps `--green`, `--green-dim`, `--green-glow` CSS vars |
| `animateCursor` | `boolean` | `true` | Shows/hides blinking cursor span in hero |
| `terminalFont` | `boolean` | `true` | Swaps `--mono` between JetBrains Mono and Inter |
| `showPhoto` | `boolean` | `true` | (reserved — not yet wired to UI) |

Defaults are stored in a `/*EDITMODE-BEGIN*/…/*EDITMODE-END*/` JSON block so the host can persist edits.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Entire site — HTML shell + CSS + React/JSX inline |
| `tweaks-panel.jsx` | Tweaks panel web component (loaded via `<script type="text/babel">`) |

---

## To Do / Known Placeholders

- [ ] Replace photo placeholder with real headshot (`<img src="...">` inside `.photo-wrap`)
- [ ] Update all `href="#"` links to real URLs (GitHub, LinkedIn, resume PDF, game URL)
- [ ] Update email in `CopyEmailBtn` (`mirza.yousuf@example.com`)
- [ ] Add real project screenshots to `PROJECTS` (add `img` field, render `<img>` in `.project-thumb`)
- [ ] Wire `showPhoto` tweak to conditionally render photo vs. placeholder
- [ ] Update "open to work — may 2026" badge text when no longer job searching
