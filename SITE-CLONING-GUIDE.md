# Site Cloning Guide: From Live Site to Pixel-Perfect Next.js Source

This document explains the step-by-step process used to clone [agentation.dev](https://agentation.dev) into a fully functional Next.js project with pixel-perfect fidelity. Another agent can follow this same process to clone any site.

---

## Prerequisites

- **Bun** (package manager & runtime)
- **Next.js** (React framework)
- **Playwright MCP** (browser automation for screenshots & scraping)
- A browser to save the target site's HTML + assets

---

## Phase 1: Capture the Source Materials

### 1.1 Save the Full HTML

Open the target site in a browser and **Save As → Complete Webpage**. This gives you:
- `SiteName.html` — the full rendered HTML (golden source for DOM structure and content)
- `SiteName_files/` — associated CSS, JS, images, fonts

### 1.2 Save the CSS

The compiled/minified CSS file inside `SiteName_files/` is the **golden source for ALL styling**. This is critical — it contains every class definition, animation, responsive breakpoint, and design token.

### 1.3 Save Static Assets

Copy any `_next/static/` or equivalent build assets directory. This preserves:
- Font files
- SVG icons/logos
- Images
- Any other static resources

### 1.4 Create a Design Reference (Optional)

Write a `DESIGN_reference.md` capturing:
- Color palette (CSS custom properties)
- Typography (font families, weights, sizes)
- Layout system (max-widths, padding, gaps)
- Component inventory (sidebar, hero, footer, etc.)

---

## Phase 2: Scaffold the Next.js Project

```bash
bunx create-next-app@latest site-clone
cd site-clone
```

### 2.1 Configure Fonts

Read the original CSS to identify fonts. In our case:
- **Inter** (variable, sans-serif) — body text
- **IBM Plex Serif** (serif) — titles

Set up via `next/font/google` in `app/layout.tsx`:

```tsx
import { Inter, IBM_Plex_Serif } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
```

### 2.2 Copy Static Assets

Copy SVGs, logos, and other assets into `public/assets/`.

---

## Phase 3: Extract & Replicate Styles

### 3.1 Extract CSS Custom Properties

From the original CSS, pull out all `:root` variables:

```css
:root {
  --font-primary: "Inter", system-ui, ...;
  --font-title: "IBM Plex Serif", Georgia, ...;
  --body-color: #111;
  --body-bg: #fdfdfc;
  --hyperlink-color: #2480ed;
  /* etc. */
}
```

### 3.2 Copy Base Styles Verbatim

Copy the reset, selection styles, heading styles, link styles, etc. directly from the original CSS into `globals.css`. Use the **exact same class names** as the original — don't invent new ones.

### 3.3 Copy Component Styles

For each component class (`.side-nav`, `.article`, `.footer`, `.demo-button`, etc.), copy the CSS definition verbatim. This ensures pixel-perfect match.

### 3.4 Copy Animations

Copy all `@keyframes` definitions. The original site likely has:
- Entrance animations (slide-in, fade-in)
- Idle animations (ear twitches, eye movements)
- Interaction animations (button clicks, toolbar expand)

---

## Phase 4: Build Components from HTML Structure

### 4.1 Use Browser Snapshots

Use **Playwright MCP** to navigate to each page and capture:
1. **Accessibility snapshots** (`browser_snapshot`) — gives you the DOM tree structure
2. **Full-page screenshots** (`browser_take_screenshot`) — visual reference
3. **Page source** — exact HTML for content extraction

```
browser_navigate → url
browser_snapshot → DOM tree
browser_take_screenshot → visual reference
```

### 4.2 Map HTML → React Components

For each major section in the HTML, create a React component:

| HTML Structure | React Component |
|---|---|
| `<nav class="side-nav">` | `SideNav.tsx` |
| `<div class="article">` | Content in `page.tsx` |
| `<div class="hero-demo-container">` | `HeroDemo.tsx` |
| `<footer class="footer">` | Footer in `page.tsx` |

### 4.3 Preserve Class Names

**Critical**: Use the same CSS class names from the original. Don't convert to Tailwind utilities for content styling. The class names are the bridge between your JSX and the copied CSS.

```tsx
// ✅ Good — matches original CSS
<div className="article">
  <section className="demo-section hide-on-mobile">

// ❌ Bad — invents new names
<div className="max-w-xl mx-auto">
  <section className="mt-6 hidden sm:block">
```

### 4.4 Handle Inline Styles

Some elements in the original have inline styles (e.g., `style="font-size: 2rem"`). Replicate these as React inline styles:

```tsx
<h1 style={{ fontSize: "2rem", lineHeight: 1.15 }}>
```

### 4.5 Handle SVG Icons

The original may use inline SVGs for icons instead of emoji. Extract the exact SVG markup:

```tsx
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
  style={{ display: "inline-block", verticalAlign: "-0.45em", width: "1.5em", height: "1.5em" }}>
  <path d="..." />
</svg>
```

---

## Phase 5: Build All Pages

### 5.1 Scrape Each Route

For each route in the sidebar nav, use Playwright MCP to:
1. Navigate to the page
2. Capture the accessibility snapshot (DOM tree)
3. Take a screenshot
4. Extract the content within the `.article` wrapper

### 5.2 Create Next.js Route Files

For each page, create `app/[route]/page.tsx` following the same pattern:

```tsx
export default function PageName() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article">
          {/* Page content here */}
        </div>
        <footer className="footer" style={...}>
          {/* Footer content */}
        </footer>
      </main>
    </>
  );
}
```

### 5.3 Extract Shared Layout

If all pages share the same sidebar + footer structure, consider extracting a shared layout component or using Next.js layouts.

---

## Phase 6: Visual Verification Loop

### 6.1 Side-by-Side Comparison

Use Playwright MCP to screenshot both sites and compare:

```
1. browser_navigate → https://original-site.com/page
2. browser_take_screenshot → reference.png
3. browser_navigate → http://localhost:3000/page
4. browser_take_screenshot → local.png
5. Compare visually
```

### 6.2 Fix Differences Iteratively

Common issues to check:
- **Font rendering** — ensure `font-variation-settings` match
- **Spacing** — padding, margin, gap values
- **Colors** — exact hex/rgba values
- **Animations** — keyframe timings and easing curves
- **Responsive behavior** — test at multiple breakpoints
- **Missing elements** — badges, icons, decorative elements

### 6.3 Build Check

Always run `bun run build` after changes to catch:
- TypeScript errors
- Missing imports
- Invalid JSX

---

## Key Principles

1. **Original CSS is the golden source** — copy class definitions verbatim
2. **Original HTML is the golden structure** — match DOM hierarchy exactly
3. **Preserve class names** — they bridge JSX and CSS
4. **Use inline styles sparingly** — only when the original does
5. **Don't modify working components** — if HeroDemo works, leave it alone
6. **Verify visually after every change** — screenshots don't lie
7. **Build frequently** — catch errors early

---

## Tools Used

| Tool | Purpose |
|---|---|
| **Playwright MCP** | Browser automation, screenshots, DOM snapshots, page scraping |
| **Bun** | Package management, dev server, builds |
| **Next.js 16** | React framework with App Router |
| **Tailwind v4** | Base layer only (not for content styling) |
| **next/font** | Font optimization (Inter, IBM Plex Serif) |

---

## File Structure

```
project/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── globals.css         # ALL styles (copied from original CSS)
│   ├── page.tsx            # Homepage
│   ├── install/page.tsx    # /install route
│   ├── features/page.tsx   # /features route
│   ├── ...                 # Other routes
│   └── components/
│       ├── SideNav.tsx     # Fixed sidebar navigation
│       ├── BunnyLogo.tsx   # Logo component
│       ├── Footer.tsx      # Footer (if extracted)
│       └── Hero/
│           ├── HeroDemo.tsx        # Animated demo
│           └── HeroDemo.module.css # Demo styles
├── public/
│   └── assets/             # SVGs, logos, images
├── styles/
│   └── demo-browser.css    # Additional style modules
└── SITE-CLONING-GUIDE.md   # This file
```
