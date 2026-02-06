# Agentation SVG Assets

Extracted from `Agentation.html` on 2026-02-05

## Summary

**Total SVG assets extracted: 36**

All SVG files have been extracted with their complete content, including:

- Animation keyframes and CSS
- Class names for animation states
- All paths, circles, and graphic elements
- Original styling and attributes

## Key Assets

### Bunny Logo (2 variants)

#### `bunny-logo-nav.svg` (9.5KB)

- **Size:** 36x36 (viewBox: 0 0 28 28)
- **Description:** Navigation bunny logo with full animations
- **Animation Classes:**
  - `.nav-ear-left-idle` / `.nav-ear-right-idle` - Ear twitch animations
  - `.nav-eye-left-idle` / `.nav-eye-right-idle` - Eye movement animations
  - `.nav-x-eye` - X eyes for error/dead state
  - `.forensic-perk` - Ear perk animation
- **Keyframes Included:**
  - `navBunnyEnterEar` - Entrance animation for ears
  - `navBunnyEnterFace` - Entrance animation for face
  - `navBunnyEnterEye` - Entrance animation for eyes
  - `navLeftEarTwitch` / `navRightEarTwitch` - Idle ear animations
  - `navLeftEyeMove` / `navRightEyeMove` - Idle eye animations
  - `navForensicLeftEarPerk` / `navForensicRightEarPerk` - Alert animations

#### `bunny-logo-mobile.svg` (9.7KB)

- **Size:** 28x28 (viewBox: 0 0 28 28)
- **Description:** Mobile bunny logo with full animations
- **Animation Classes:** Same structure as nav variant but with `mobile-` prefix
- **Keyframes Included:** Same animations as nav variant with `mobile` prefix

### Icons

#### Toolbar Icons (18x18)

- `icon-pause-18.svg` - Pause/play animation control
- `icon-eye-18.svg` - Show/hide markers visibility
- `icon-copy-18.svg` - Copy feedback to clipboard
- `icon-trash-18.svg` - Delete annotation
- `icon-settings-18.svg` - Settings/gear icon
- `icon-close-18.svg` - Close/dismiss icon

#### Toolbar Icons (24x24)

- `icon-sparkle-24.svg` - AI/sparkle icon (feedback mode activation)
- `icon-pause-24.svg` - Pause icon with play triangle variant
- `icon-eye-24.svg` - Eye icon with open/closed states
- `icon-copy-24.svg` - Copy icon with check state
- `icon-check-24.svg` - Checkmark/success icon
- `icon-settings-24.svg` - Settings icon

#### Cursor Icons

- `icon-cursor-pointer.svg` - Standard pointer cursor
- `icon-cursor-crosshair.svg` - Crosshair for selection mode
- `icon-cursor-ibeam.svg` - I-beam for text selection

#### Other Icons

- `icon-desktop.svg` (14x14) - Desktop/monitor icon
- `icon-github.svg` (12x12) - GitHub logo
- `icon-copy-14.svg` (14x14) - Small copy icon
- `icon-check-14.svg` (14x14) - Small checkmark
- `icon-sparkle-20.svg` (20x20) - Medium sparkle icon

### Special Graphics

- `logo-claude-code.svg` - Claude Code welcome logo/graphic

## Animation States

### Bunny Logo Animation Classes

The bunny logo supports multiple animation states:

1. **Entrance State** (`.nav-ear-left-enter`, etc.)
   - Used when logo first appears
   - Scales in with bounce effect
   - Transitions to idle state

2. **Idle State** (`.nav-ear-left-idle`, etc.)
   - Continuous subtle animations
   - Ears twitch periodically
   - Eyes move and blink

3. **Forensic Perk State** (`.forensic-perk`)
   - Alert/attention animation
   - Ears perk up quickly
   - Returns to idle state

4. **X Eyes State** (`.nav-x-eye`)
   - Error or "dead" state
   - X marks replace eyes
   - Controlled via opacity

## Usage Notes

### Bunny Logo

- The bunny logo SVGs include embedded `<style>` tags with all animations
- Animation classes are prefixed by variant (`nav-` or `mobile-`)
- To use animations, ensure the SVG is inserted inline (not as `<img>` src)
- The logo responds to theme changes via fill color transitions

### Icons

- All icons use `currentColor` for stroke/fill
- Icons inherit color from parent element
- Some icons have multiple states (eye open/closed, copy/check)
- State changes are controlled via opacity and transform

### ViewBox

- All SVGs have been normalized with proper viewBox attributes
- Original width/height preserved in viewBox for correct aspect ratio

## File Structure

```
extracted-assets/
├── README.md                      # This file
├── manifest.json                  # Complete metadata for all assets
├── bunny-logo-nav.svg            # Main bunny logo (navigation)
├── bunny-logo-mobile.svg         # Mobile bunny logo
├── icon-*.svg                    # All icon files
└── logo-claude-code.svg          # Claude Code logo
```

## Manifest

See `manifest.json` for complete metadata including:

- Original attributes
- File sizes
- Descriptions
- Source indices

## Integration

To use these assets in your project:

1. **Inline SVG** (recommended for animations):

   ```jsx
   import BunnyLogo from "./extracted-assets/bunny-logo-nav.svg?raw";
   <div dangerouslySetInnerHTML={{ __html: BunnyLogo }} />;
   ```

2. **As Image** (no animations):

   ```jsx
   import bunnyLogo from "./extracted-assets/bunny-logo-nav.svg";
   <img src={bunnyLogo} alt="Bunny logo" />;
   ```

3. **As React Component** (with SVGR):
   ```jsx
   import { ReactComponent as BunnyLogo } from "./extracted-assets/bunny-logo-nav.svg";
   <BunnyLogo />;
   ```

## Notes

- All SVGs extracted exactly as they appear in the original HTML
- No modifications or optimizations applied
- Animation keyframes and styles preserved
- Class names preserved for animation control
- Some icons may have duplicate sizes (different variants)
