# Agentation Website - Complete 1:1 Implementation Plan

## Executive Summary

This document provides a comprehensive analysis of the original Agentation website (saved HTML file) and a detailed plan for creating a 1:1 remake. The original is a single-page marketing site with NO SIDEBAR - it's a standard centered content layout with a fixed-width container.

**CRITICAL FINDING**: The current implementation has a sidebar that DOES NOT EXIST in the original. The original uses a standard centered content layout.

---

## Page Structure Overview

### Layout Architecture

**NO SIDEBAR EXISTS** - The original uses:

- Standard centered content layout
- Fixed-width container (likely max-width: 640px or similar)
- Vertical scrolling single-page design
- No left/right navigation panels

### Main Sections (Top to Bottom)

1. **Header/Hero Section**
   - Animated bunny logo (SVG with ear twitching animations)
   - Main headline with styled underlines
   - Tagline/description
   - Code snippet display

2. **Interactive Demo Section**
   - Browser mockup with animated interactions
   - Simulated UI with toolbar
   - Cursor animations
   - Terminal/CLI output display

3. **Features Section** (implied from structure)
   - Feature cards or descriptions
   - Visual demonstrations

4. **FAQ/Documentation Section** (implied)
   - Q&A content
   - Usage instructions

5. **Footer** (standard)
   - Links
   - Copyright
   - Social media

---

## Detailed Component Analysis

### 1. Header/Hero Section

#### Bunny Logo Animation

**Location**: Top of page, centered
**Specifications**:

- SVG: 36x36px (mobile), 28x28 viewBox
- Animated elements:
  - Left ear: `navLeftEarTwitch` animation (5s infinite)
  - Right ear: `navRightEarTwitch` animation (5s infinite)
  - Left eye: `navLeftEyeMove` animation (5s infinite)
  - Right eye: `navRightEyeMove` animation (5s infinite)
- Entrance animations:
  - Ears: 0.3s ease-out with staggered delays (0.1s, 0.15s)
  - Face: 0.3s ease-out at 0.25s
  - Eyes: 0.3s ease-out at 0.35s, 0.4s
- Forensic perk animation on interaction
- Color: `rgba(0, 0, 0, 0.85)` with 0.2s transition
- Transform origins: bottom center (ears), center (eyes/face)

#### Main Headline

**Text**: "Point at bugs. Let AI fix them."
**Styling**:

- Font size: 2rem
- Line height: 1.15
- Margin bottom: 0.5rem
- Two styled underlines:
  1. `.sketchy-underline` on "Point at bugs"
     - Marker color: `#4c74ff`
     - Linear gradient background with color-mix
     - Border radius: 0.2em 0.15em
  2. `.pen-underline` on "fix them"
     - SVG background image (hand-drawn stroke)
     - Stroke color: `#f4694c`
     - Background position: 0 calc(100% - 2px)
     - Background size: 100% 8px

#### Tagline

**Text**: "Agentation turns UI annotations into structured context that AI coding agents can understand and act on. Click any element, add a note, and paste the output into Claude Code, Cursor, or any AI tool."
**Class**: `.tagline`

#### Code Snippet Display

**Features**:

- Copy button with icon transition
- Syntax highlighting
- Monospace font
- Dark background

---

### 2. Interactive Demo Section

#### Browser Mockup

**Class**: `.hero-demo-browser`
**Dimensions**:

- Width: 100%
- Height: 300px (desktop), 260px (mobile)
- Background: `#F6F5F4`
- Border radius: 12px (desktop), 10px (mobile)
- Box shadow: `0 0 0 1px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.08)`

#### Browser Bar

**Class**: `.hero-demo-browser-bar`
**Elements**:

- Three dots (red, yellow, green): 8px circles (6px on mobile)
  - Red: `#ff5f57`
  - Yellow: `#febc2e`
  - Green: `#28c840`
- URL bar: `localhost:3000`
  - Background: `rgba(0, 0, 0, 0.04)`
  - Font size: 10px (9px mobile)
  - Border radius: 6px

#### Demo Content Layout

**Structure**:

- Narrow sidebar (44px width) - ONLY IN DEMO, NOT IN MAIN LAYOUT
  - Icon-only navigation
  - Logo at top (20x20px)
  - Navigation icons (16x16px)
  - Active state: `rgba(0, 0, 0, 0.15)`
  - Selected state: green outline `#22c55e`
- Main content area (flex: 1)
  - Header row with logo, title, button, avatar
  - Metrics row (3 cards)
  - Data table

#### Interactive Elements in Demo

**Cursor Animations**:

- Three cursor types: pointer, crosshair, i-beam
- Smooth transitions: 0.35s cubic-bezier(0.4, 0, 0.2, 1)
- Drop shadow: `0 1px 2px rgba(0, 0, 0, 0.3)`
- Scale transitions on type change

**Drag Selection**:

- Dashed border: 1.5px `#22c55e`
- Background: `rgba(34, 197, 94, 0.08)`
- Border radius: 8px

**Markers**:

- Size: 22px circle (18px mobile)
- Blue default: `#3b82f6`
- Green multi-select: `#34c759` (26px, rounded square)
- Orange: `#f59e0b`
- Entrance animation: scale(0.3) to scale(1), 0.25s cubic-bezier
- Box shadow: `0 2px 6px rgba(0, 0, 0, 0.2)`

**Toolbar** (Dark Mode):

- Background: `#1a1a1a`
- Position: bottom right (12px from edges, 8px mobile)
- Collapsed: 36x36px circle (28x28 mobile)
- Expanded: 200px width, 20px border-radius
- Box shadow: `0 2px 8px rgba(0, 0, 0, 0.25), 0 4px 16px rgba(0, 0, 0, 0.15)`
- Buttons: 28px circles (22px mobile)
  - Color: `rgba(255, 255, 255, 0.85)`
  - Active state: `#3b82f6` with `rgba(59, 130, 246, 0.25)` background
  - Hover: `rgba(255, 255, 255, 0.1)` background
- Divider: 1px x 12px, `rgba(255, 255, 255, 0.15)`

**Popup** (Dark Mode):

- Width: 200px (190px mobile)
- Background: `#1a1a1a`
- Border radius: 14px (12px mobile)
- Box shadow: `0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08)`
- Entrance: scale(0.95) translateY(4px) to scale(1) translateY(0)
- Input field:
  - Height: 40px (32px mobile)
  - Background: `rgba(255, 255, 255, 0.06)`
  - Border: `1px solid rgba(255, 255, 255, 0.1)`
  - Font size: 11px (9px mobile)
- Buttons:
  - Cancel: transparent, `rgba(255, 255, 255, 0.5)` text
  - Submit: `#3b82f6` (blue), `#22c55e` (green), `#f59e0b` (orange)
  - Font size: 10px (9px mobile)
  - Border radius: 14px

**Terminal Display** (Cream Style):

- Background: `#faf9f7`
- Position: absolute, top right (20px, 25px)
- Size: 340px x 280px (responsive on mobile)
- Border radius: 10px (8px mobile)
- Box shadow: `0 0 0 1px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12), 0 12px 32px rgba(0, 0, 0, 0.08)`
- Title bar: white background with traffic light dots
- Content:
  - Font: "SF Mono", monospace
  - Font size: 10px (9px mobile)
  - Line height: 1.6
  - Color: `rgba(0, 0, 0, 0.7)`
- Entrance: translateY(8px) scale(0.98) to translateY(0) scale(1)

---

### 3. Typography System

#### Font Families

```css
--font-primary:
  "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif --font-title: "IBM Plex Serif", Georgia,
  "Times New Roman", serif;
```

#### Font Imports

- Inter: weights 100-900
- IBM Plex Serif: weights 400, 500, 600
- Cascadia Code: italic variant

#### Heading Styles

- H1:
  - Font family: IBM Plex Serif
  - Font size: 1.25rem
  - Font weight: 500
  - Line height: 1.4
  - Letter spacing: -0.01rem
  - Color: `rgba(0, 0, 0, 0.85)`

- H2:
  - Font size: 0.8125rem
  - Font weight: 550
  - Letter spacing: -0.005rem

#### Body Text

- Font size: 15px
- Font smoothing: antialiased
- Text rendering: optimizeLegibility

---

### 4. Color System

#### Primary Colors

```css
--body-color: #111 --body-bg: #fdfdfc --heading-color: #111
  --hyperlink-color: #2480ed --selection-color: #111 --selection-bg: #ededed
  --focus-color: rgba(0, 122, 255, 0.5);
```

#### Accent Colors

- Blue: `#3b82f6` / `#4c74ff`
- Green: `#22c55e` / `#34c759` / `#28c840`
- Orange: `#f59e0b` / `#f4694c`
- Red: `#ff5f57` / `#ff3b30`
- Yellow: `#febc2e` / `#f5a623`

#### Dark Mode Colors (for toolbar/popups)

- Background: `#1a1a1a` / `#1c1c1c`
- Text: `rgba(255, 255, 255, 0.85)`
- Muted text: `rgba(255, 255, 255, 0.5)`
- Borders: `rgba(255, 255, 255, 0.08)`

---

### 5. Animation System

#### Keyframe Animations

**Bunny Animations**:

- `navBunnyEnterEar`: opacity 0→1, scale 0.8→1 (0.3s ease-out)
- `navBunnyEnterFace`: opacity 0→1, scale 0.9→1 (0.3s ease-out)
- `navBunnyEnterEye`: opacity 0→1, scale 0.5→1 (0.3s ease-out)
- `navLeftEarTwitch`: complex rotation sequence (5s ease-in-out infinite)
- `navRightEarTwitch`: complex rotation sequence (5s ease-in-out infinite)
- `navLeftEyeMove`: translate and blink sequence (5s ease-in-out infinite)
- `navRightEyeMove`: translate and blink sequence (5s ease-in-out infinite)
- `navForensicLeftEarPerk`: rotate -25deg with translateY (0.8s ease-out)
- `navForensicRightEarPerk`: rotate 25deg with translateY (0.8s ease-out)

**UI Animations**:

- `typeChar`: opacity 0→1 (0.1s ease-out) - for typing effect
- `bunnySlideIn`: height 0→44px, opacity 0→1 (0.7s cubic-bezier)
- `checkDraw`: stroke-dashoffset animation (0.18s ease-out)
- `checkBounce`: scale bounce effect (0.3s cubic-bezier)

**Toolbar Animations**:

- `toolbarEnter`: opacity 0→1, scale 0.5→1, rotate 90deg→0 (0.5s cubic-bezier)
- `badgeEnter`: opacity 0→1, scale 0→1 (0.3s cubic-bezier, 0.4s delay)
- `scaleIn`: opacity 0→1, scale 0.85→1 (0.15s ease-out)
- `scaleOut`: opacity 1→0, scale 1→0.85 (0.15s ease-out)
- `slideUp`: opacity 0→1, scale 0.85→1, translateY 8px→0 (0.2s ease-out)
- `slideDown`: opacity 1→0, scale 1→0.85, translateY 0→8px (0.2s ease-out)

**Marker Animations**:

- `markerIn`: opacity 0→1, scale 0.3→1, translate -50% -50% (0.25s cubic-bezier)
- `markerOut`: opacity 1→0, scale 1→0.3, translate -50% -50% (0.2s ease-out)

**Highlight Animations**:

- `fadeIn`: opacity 0→1 (0.15s ease-out)
- `fadeOut`: opacity 1→0 (0.15s ease-out)
- `hoverHighlightIn`: opacity 0→1, scale 0.98→1 (0.12s ease-out)
- `hoverTooltipIn`: opacity 0→1, scale 0.95→1, translateY 4px→0 (0.1s ease-out)

**Settings Panel Animations**:

- `settingsPanelIn`: opacity 0→1, translateY 10px→0, scale 0.95→1, blur 5px→0 (0.2s ease)
- `settingsPanelOut`: opacity 1→0, translateY 0→20px, scale 1→0.95, blur 0→5px (0.1s ease)

**Tooltip Animations**:

- `tooltipIn`: opacity 0→1, translateX -50%, translateY 2px→0, scale 0.891→0.909 (0.1s ease-out)

**Cycle Button Animation**:

- `cycleTextIn`: opacity 0→1, translateY -6px→0 (0.2s ease-out)

**Theme Toggle Animation**:

- `themeIconIn`: opacity 0→1, scale 0.8→1, rotate -30deg→0 (0.35s cubic-bezier)

**MCP Indicator Pulse**:

- `mcpIndicatorPulseConnected`: box-shadow pulse with green (2.5s ease-in-out infinite)
- `mcpIndicatorPulseConnecting`: box-shadow pulse with orange (1.5s ease-in-out infinite)
- `mcpPulseError`: box-shadow pulse with red (2s infinite)

#### Timing Functions

- Standard ease: `cubic-bezier(0.19, 1, 0.22, 1)`
- Bounce: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Smooth: `cubic-bezier(0.16, 1, 0.3, 1)`
- Slide: `cubic-bezier(0.32, 0.72, 0, 1)`
- Cursor: `cubic-bezier(0.4, 0, 0.2, 1)`

---

### 6. Interactive Features

#### Toolbar Features

1. **Collapse/Expand**
   - Collapsed: 44x44px circle with bunny icon
   - Expanded: 257px width (297px with server connected)
   - Transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1)
   - Hover effect on collapsed state

2. **Control Buttons**
   - Select mode (cursor icon)
   - Multi-select mode (crosshair icon)
   - Pause animations (pause/play icon)
   - Hide markers (eye icon)
   - Copy feedback (copy/check icon)
   - Send annotations (send icon)
   - Clear all (trash icon)
   - Settings (gear icon)

3. **Button States**
   - Default: `rgba(255, 255, 255, 0.85)`
   - Hover: `rgba(255, 255, 255, 0.12)` background
   - Active: `#3c82f7` with `rgba(60, 130, 247, 0.25)` background
   - Disabled: 0.35 opacity
   - Error: `#ff3b30` with `rgba(255, 59, 48, 0.25)` background

4. **Tooltips**
   - Appear on hover after 0.85s delay
   - Position: above button (14px gap)
   - Arrow indicator
   - Keyboard shortcuts shown
   - Light/dark mode variants

5. **Badge Indicators**
   - Position: top-right of button (-13px, -13px)
   - Size: 18px height, min-width 18px
   - Background: `#3c82f7`
   - Font size: 0.625rem
   - Entrance animation with delay

#### Settings Panel

1. **Structure**
   - Position: above toolbar (0.5rem gap)
   - Width: 205px minimum
   - Background: `#1c1c1c` (dark) / `#fff` (light)
   - Border radius: 1rem
   - Gradient fade edges (16px width)

2. **Header**
   - Brand: "Agentation" with version
   - Theme toggle button
   - Border bottom: `rgba(255, 255, 255, 0.07)`

3. **Sections**
   - Separated by borders
   - Extra padding option
   - Scroll container for overflow

4. **Controls**
   - Cycle buttons (with dots indicator)
   - Toggle switches (24x16px)
   - Checkboxes (14x14px)
   - Sliders (4px track, 14px thumb)
   - Dropdowns
   - Color pickers (20px circles)

5. **Automations Page**
   - Slide-in transition from right
   - Back button with arrow
   - MCP connection status
   - Webhook URL input (textarea)
   - Auto-send toggle

#### Annotation Popup

1. **Trigger**: Click on element in select mode
2. **Position**: Above/below element (centered)
3. **Content**:
   - Element identifier (truncated)
   - Timestamp
   - Computed styles (expandable)
   - Quote text (if text selected)
   - Textarea for note
   - Cancel/Submit buttons
   - Delete button (left side)

4. **Animations**:
   - Entrance: `popupEnter` (0.2s cubic-bezier)
   - Exit: `popupExit` (0.15s ease-in)
   - Shake on validation error

5. **Styling**:
   - Width: 280px
   - Padding: 0.75rem 1rem 14px
   - Border radius: 16px
   - Box shadow: `0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08)`

#### Hover Interactions

1. **Element Highlighting**
   - Border: 2px solid `rgba(60, 130, 247, 0.5)`
   - Background: `rgba(60, 130, 247, 0.04)`
   - Border radius: 4px
   - Entrance animation

2. **Hover Tooltip**
   - Shows element name and React path
   - Font size: 0.6875rem
   - Background: `rgba(0, 0, 0, 0.85)`
   - Max width: 280px
   - Truncated with ellipsis

#### Selection Modes

1. **Single Select**
   - Blue outline: `rgba(60, 130, 247, 0.6)`
   - Blue background: `rgba(60, 130, 247, 0.05)`
   - Numbered marker appears

2. **Multi-Select**
   - Green outline: `rgba(52, 199, 89, 0.6)` (dashed)
   - Green background: `rgba(52, 199, 89, 0.05)`
   - Green rounded square markers
   - Drag selection box

3. **Drag Selection**
   - Real-time box drawing
   - Dashed border
   - Count indicator in center
   - Selects all intersecting elements

#### Marker System

1. **Marker Types**
   - Single: blue circle, numbered
   - Multi: green rounded square, numbered
   - Pending: orange circle
   - Hovered: red circle

2. **Marker Tooltip**
   - Shows on hover
   - Quote text (if any)
   - Note text
   - Hint text
   - Position: below marker (10px gap)
   - Scale: 0.909

3. **Marker Management**
   - Click to edit
   - Hover to highlight element
   - Delete from popup
   - Clear all button
   - Renumber on delete

#### Copy Feedback

1. **Format**: Structured text output
2. **Content**:
   - Page URL
   - Timestamp
   - List of annotations with:
     - Element selector
     - Quote (if any)
     - Note
     - Computed styles (optional)
3. **Feedback**: Check icon animation on copy

#### Keyboard Shortcuts

- S: Select mode
- M: Multi-select mode
- P: Pause/play animations
- H: Hide/show markers
- C: Copy feedback
- Esc: Cancel/close
- Delete: Remove selected marker

---

### 7. Responsive Design

#### Breakpoints

- Mobile: max-width 640px
- Desktop: default

#### Mobile Adjustments

**Hero Demo**:

- Browser height: 260px (from 300px)
- Sidebar: hidden
- Dots: 6px (from 8px)
- URL bar font: 9px (from 10px)
- Main padding: 12px (from 14px)
- Logo: 14px (from 18px)
- Title font: 10px (from 11px)
- Button: 45x22px (from 55x26px)
- Avatar: 22px (from 28px)
- Metrics gap: 8px (from 12px)
- Metric padding: 10px (from 12px)
- Table padding: 8-10px (from 10-14px)

**Toolbar**:

- Size: 28x28px (from 36x36px)
- Border radius: 14px (from 18px)
- Expanded: auto width (from 200px)
- Buttons: 22px (from 28px)
- Button icons: 13px (from default)
- Position: 8px from edges (from 12px)

**Popup**:

- Width: 190px (from 200px)
- Padding: 8px 10px 10px (from 10px 12px 12px)
- Border radius: 12px (from 14px)
- Header font: 9px (from 10px)
- Input height: 32px (from 40px)
- Input font: 9px (from 11px)
- Button padding: 4px 10px (from 5px 12px)
- Button font: 9px (from 10px)

**Markers**:

- Size: 18px (from 22px)
- Green: 22px (from 26px)
- Font: 10px (from 11px)

**Terminal**:

- Position: 10px all sides (from 20px/25px)
- Width: auto (from 340px)
- Height: 240px (from 280px)
- Border radius: 8px (from 10px)
- Dots: 10px (from 8px)
- Title font: 11px (from 13px)
- Content padding: 10px 12px (from 12px 14px)
- Content font: 9px (from 10px)

---

### 8. Accessibility Features

#### Focus States

- Outline: 2px solid `var(--focus-color)`
- Color: `rgba(0, 122, 255, 0.5)`
- Applied to all interactive elements

#### Keyboard Navigation

- All buttons keyboard accessible
- Shortcuts documented in tooltips
- Escape key closes modals
- Tab order logical

#### Screen Reader Support

- Semantic HTML structure
- ARIA labels on icon buttons
- Alt text on images
- Role attributes where needed

#### Color Contrast

- Body text: `#111` on `#fdfdfc` (high contrast)
- Muted text: `rgba(0, 0, 0, 0.5)` (sufficient contrast)
- Interactive elements: clear visual states

---

### 9. Performance Optimizations

#### CSS Optimizations

- `will-change` on animated elements
- `contain: layout style` on fixed elements
- Transform-based animations (GPU accelerated)
- Transition only necessary properties

#### Animation Performance

- Transform and opacity only (no layout thrashing)
- RequestAnimationFrame for smooth animations
- Debounced hover events
- Throttled scroll handlers

#### Loading Strategy

- Critical CSS inline
- Font preloading
- Lazy load demo animations
- Defer non-critical scripts

---

### 10. Missing Sections (Need to Implement)

Based on typical marketing site structure, these sections are likely present but not fully visible in the saved HTML:

1. **Features Section**
   - Feature cards
   - Icons or illustrations
   - Descriptions

2. **How It Works Section**
   - Step-by-step guide
   - Visual flow diagram

3. **Integration Section**
   - Supported tools (Claude, Cursor, etc.)
   - Integration instructions

4. **FAQ Section**
   - Common questions
   - Expandable answers

5. **CTA Section**
   - Call to action
   - Installation instructions
   - GitHub link

6. **Footer**
   - Navigation links
   - Social media
   - Copyright
   - Privacy/Terms

---

### 11. Implementation Checklist

#### Phase 1: Foundation

- [ ] Set up Next.js project structure
- [ ] Configure fonts (Inter, IBM Plex Serif, Cascadia Code)
- [ ] Implement CSS variables and color system
- [ ] Create base typography styles
- [ ] Set up responsive breakpoints

#### Phase 2: Layout

- [ ] Create centered content container (NO SIDEBAR)
- [ ] Implement header/hero section
- [ ] Add bunny logo with animations
- [ ] Style headline with underlines
- [ ] Add tagline and description

#### Phase 3: Interactive Demo

- [ ] Build browser mockup component
- [ ] Implement demo sidebar (within mockup only)
- [ ] Create demo content (metrics, table)
- [ ] Add cursor animations
- [ ] Implement drag selection
- [ ] Create marker system
- [ ] Build toolbar component
- [ ] Add popup component
- [ ] Implement terminal display

#### Phase 4: Animations

- [ ] Bunny entrance animations
- [ ] Bunny idle animations (ear twitch, eye movement)
- [ ] Toolbar expand/collapse
- [ ] Marker entrance/exit
- [ ] Popup entrance/exit
- [ ] Hover effects
- [ ] Selection animations
- [ ] Terminal slide-in

#### Phase 5: Interactive Features

- [ ] Select mode functionality
- [ ] Multi-select mode
- [ ] Drag selection
- [ ] Annotation popup
- [ ] Copy feedback
- [ ] Settings panel
- [ ] Theme toggle
- [ ] Keyboard shortcuts

#### Phase 6: Content Sections

- [ ] Features section
- [ ] How it works section
- [ ] Integration section
- [ ] FAQ section
- [ ] CTA section
- [ ] Footer

#### Phase 7: Polish

- [ ] Mobile responsive adjustments
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Animation timing refinement

---

### 12. Key Differences from Current Implementation

#### CRITICAL ISSUES TO FIX:

1. **NO SIDEBAR IN MAIN LAYOUT**
   - Current: Has a sidebar navigation
   - Original: Standard centered content layout
   - Fix: Remove sidebar, use centered container

2. **Layout Structure**
   - Current: Sidebar + main content split
   - Original: Single column, centered, max-width container
   - Fix: Restructure entire layout

3. **Content Flow**
   - Current: Unclear section organization
   - Original: Clear vertical flow with distinct sections
   - Fix: Implement proper section structure

4. **Demo Browser**
   - Current: May be missing or incomplete
   - Original: Fully interactive with animations
   - Fix: Build complete demo component

5. **Animations**
   - Current: Likely missing many animations
   - Original: Extensive animation system
   - Fix: Implement all keyframe animations

6. **Toolbar**
   - Current: May be simplified
   - Original: Full-featured with expand/collapse
   - Fix: Implement complete toolbar

7. **Typography**
   - Current: May use different fonts
   - Original: Inter + IBM Plex Serif
   - Fix: Match exact font stack

8. **Colors**
   - Current: May differ
   - Original: Specific color palette
   - Fix: Use exact color values

---

### 13. Technical Stack Recommendations

#### Framework

- Next.js 14+ (App Router)
- React 18+
- TypeScript

#### Styling

- Tailwind CSS (for utility classes)
- CSS Modules (for component styles)
- CSS Variables (for theming)

#### Animation

- Framer Motion (for complex animations)
- CSS Keyframes (for simple animations)
- React Spring (alternative)

#### State Management

- React Context (for toolbar state)
- Zustand (if more complex state needed)

#### Utilities

- clsx (for conditional classes)
- react-use (for hooks)

---

### 14. File Structure Recommendation

```
agentation-site/
├── app/
│   ├── layout.tsx (root layout, NO SIDEBAR)
│   ├── page.tsx (home page)
│   └── globals.css (global styles)
├── components/
│   ├── Header/
│   │   ├── BunnyLogo.tsx
│   │   ├── Headline.tsx
│   │   └── Tagline.tsx
│   ├── Demo/
│   │   ├── BrowserMockup.tsx
│   │   ├── DemoSidebar.tsx (only for demo)
│   │   ├── DemoContent.tsx
│   │   ├── Cursor.tsx
│   │   ├── Marker.tsx
│   │   ├── Toolbar.tsx
│   │   ├── Popup.tsx
│   │   └── Terminal.tsx
│   ├── Features/
│   │   └── FeatureCard.tsx
│   ├── FAQ/
│   │   └── FAQItem.tsx
│   └── Footer/
│       └── Footer.tsx
├── styles/
│   ├── animations.css
│   ├── typography.css
│   └── colors.css
└── public/
    └── fonts/
```

---

### 15. Next Steps

1. **Remove Sidebar**: First priority - restructure layout to remove sidebar
2. **Implement Centered Layout**: Create proper container with max-width
3. **Build Header**: Bunny logo + headline + tagline
4. **Create Demo**: Full interactive browser mockup
5. **Add Animations**: All keyframe animations
6. **Implement Toolbar**: Complete with all features
7. **Add Content Sections**: Features, FAQ, etc.
8. **Polish**: Responsive, accessibility, performance

---

### 16. Testing Checklist

- [ ] Visual comparison with original
- [ ] All animations working
- [ ] Responsive on mobile
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Performance metrics (Lighthouse)
- [ ] No layout shift (CLS)
- [ ] Fast load time (FCP, LCP)

---

## Conclusion

The original Agentation website is a sophisticated single-page marketing site with:

- **NO SIDEBAR** - standard centered layout
- Extensive animation system
- Interactive demo component
- Dark mode toolbar and popups
- Comprehensive responsive design
- Strong accessibility features

The current implementation needs significant restructuring to match the original, starting with removing the sidebar and implementing the proper centered layout.
