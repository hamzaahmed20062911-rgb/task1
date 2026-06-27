# DecodeLabs — Project 01: Responsive Frontend Interface
**Batch 2026 · Industrial Training Kit · Powered by DecodeLabs**

---

## Project Structure

```
project1/
├── index.html        Semantic HTML5 — full page
├── css/
│   └── style.css     Mobile-first CSS, design tokens, BEM
├── js/
│   └── main.js       Vanilla JS — no frameworks
└── README.md         This file
```

---

## Running in VS Code — Step by Step

### 1. Install VS Code
Download from https://code.visualstudio.com and install.

### 2. Open the project folder
- Go to **File → Open Folder**
- Select the `project1/` folder → click **Select Folder**

### 3. Install the Live Server extension
- Press `Ctrl + Shift + X` to open Extensions
- Search **Live Server** (by Ritwick Dey)
- Click **Install**

### 4. Launch
- In the Explorer panel, right-click `index.html`
- Select **"Open with Live Server"**
- Browser opens at `http://127.0.0.1:5500/`
- Every file save auto-refreshes the browser

### 5. Confirm it's working
Press `F12` → Console tab should show:
```
DecodeLabs · Project 01 loaded 
```
No red errors. Elements tab should show `<header>`, `<nav>`, `<main>`, `<footer>`.

### 6. Test responsiveness
- Press `F12` → click the phone/tablet icon (or `Ctrl + Shift + M`)
- Test all three breakpoints:

| Label   | Width     | Layout                        |
|---------|-----------|-------------------------------|
| Mobile  | < 768px   | Single column, hamburger nav  |
| Tablet  | ≥ 768px   | 2-col grid, full nav bar      |
| Desktop | ≥ 1024px  | Full multi-column layout      |

---

## Recommended VS Code Extensions

| Extension          | Purpose                         |
|--------------------|---------------------------------|
| Live Server        | Hot-reload local dev server     |
| Prettier           | Auto-format HTML / CSS / JS     |
| HTML CSS Support   | Class name IntelliSense         |
| Auto Rename Tag    | Keeps open/close tags in sync   |
| CSS Peek           | Jump from class name to CSS     |

---

## Constraint Checklist

### HTML5
- [x] Semantic landmarks: `<header>` `<nav>` `<main>` `<section>` `<article>` `<footer>`
- [x] `lang="en"` on `<html>`
- [x] `<meta charset>` and `<meta viewport>`
- [x] Heading hierarchy: h1 → h2 → h3 → h4, no skipping
- [x] `aria-label` on icon-only / ambiguous buttons
- [x] `aria-expanded` state on hamburger toggle
- [x] `role="list"` on styled lists (list-style removed)
- [x] `role="table"` / `role="row"` / `role="cell"` on custom table
- [x] `role="note"`, `role="complementary"` on aside-type blocks
- [x] `alt` on all images; `aria-hidden="true"` on decorative SVGs
- [x] Skip-to-main link at top of body

### CSS3
- [x] Mobile-first (base = mobile, expand with min-width)
- [x] All design values in CSS custom properties (`:root`)
- [x] CSS Grid for macro layouts (hero, pillar body, roadmap, footer)
- [x] Flexbox for micro components (nav, buttons, swatches, cards)
- [x] `clamp()` for all font sizes — no fixed `px` type
- [x] Breakpoints: `768px` tablet, `1024px` desktop
- [x] Max 2 font families: Montserrat + Roboto
- [x] Max 3 font weights: 400 / 500 / 700
- [x] Brand palette: `#A5856F` · `#A0D4E0` · `#F2F0EA`
- [x] No inline styles except dynamic swatch `background` colors
- [x] `prefers-reduced-motion` respected
- [x] `forced-colors` (Windows High Contrast) handled
- [x] `@media print` styles
- [x] `:focus-visible` ring on all interactive elements

### JavaScript
- [x] `"use strict"` at top of file
- [x] Zero frameworks — pure vanilla JS
- [x] `IntersectionObserver` for active nav + scroll reveal
- [x] Escape key closes nav, focus returns to toggle
- [x] `{ passive: true }` on all scroll/resize listeners
- [x] No inline `onclick` attributes in HTML
- [x] No `document.write()`

### Accessibility (WCAG 2.1 AA)
- [x] Skip link at top of page
- [x] All interactive elements keyboard-reachable (Tab order logical)
- [x] Visible focus indicator on every focusable element
- [x] Color contrast ≥ 4.5:1 for body text
- [x] `aria-hidden="true"` on all purely decorative elements
- [x] Screen-reader labels on all icon buttons
- [x] No information conveyed by color alone

---

## Design System

### Colors
```
--mocha       #A5856F   Primary / Stability
--blue        #A0D4E0   Accent / Trust
--moonlit     #F2F0EA   Surface / Refinement
--ink         #1a1410   Body text
--bg-dark     #13100d   Hero + dark sections
```

### Typography
```
Display  Montserrat  weights: 700
Body     Roboto      weights: 400 / 500
Max 2 families · Max 3 weights
```

### Breakpoints (mobile-first)
```css
/* base       → mobile  (single column)  */
@media (min-width: 768px)  { /* tablet  */ }
@media (min-width: 1024px) { /* desktop */ }
```

---

## Contact
- +91 89330 06408
- decodelabs.tech@gmail.com
- www.decodelabs.tech
- Greater Lucknow, India
