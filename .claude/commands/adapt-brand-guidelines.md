# Adapt Brand Guidelines

Adapt the visual style of the entire presentation repository based on brand inputs. This command extracts brand elements from images, websites, or text descriptions and updates all design system files after user confirmation.

## Supported Input Types

1. **Image files** - Logos, color palettes, brand imagery (provide file path)
2. **Website URLs** - Analyze brand from company website
3. **Text descriptions** - Verbal style preferences (e.g., "modern, minimalist, blue tones")

You can combine multiple input types in a single invocation.

## Instructions

Follow this interactive workflow to extract brand elements and update the design system.

---

## Phase 1: Input Analysis

### For Image Inputs

If the user provides an image file path:

1. Read the image using the Read tool
2. Analyze the image for:
   - **Dominant colors**: Extract hex values for primary, secondary, accent colors
   - **Color relationships**: Identify color harmony (complementary, analogous, triadic)
   - **Typography indicators**: If logo contains text, note font characteristics (serif/sans-serif, weight, geometric/humanist)
   - **Design style**: Assess aesthetic (minimalist, bold, playful, corporate, tech-forward)
   - **Logo characteristics**: Shape, complexity, use of negative space

### For Website URLs

If the user provides a website URL:

1. Use WebFetch to retrieve the website content
2. Analyze for:
   - Primary brand colors from headers, buttons, CTAs
   - Secondary colors from backgrounds, cards
   - Typography choices (Google Fonts, system fonts)
   - Overall design aesthetic
   - Interactive patterns and animations
3. If CSS variables are visible, extract them directly

### For Text Descriptions

If the user provides text descriptions:

1. Parse design keywords and map to design system values:
   - **Color keywords**: "blue", "warm", "corporate blue", "forest green" → specific hex values
   - **Style keywords**:
     - "modern" → clean lines, minimal shadows, sans-serif typography
     - "bold" → high contrast, strong colors, heavy weights
     - "playful" → rounded corners, varied colors, lighter weights
     - "corporate" → traditional colors, structured layouts, serif accents
     - "minimalist" → reduced palette, generous whitespace, subtle shadows
     - "tech-forward" → cyan/blue accents, dark mode friendly, monospace touches

### Color Derivation Logic

When only partial color information is provided, derive missing colors:

- **Primary only provided**:
  - Secondary: Complementary or 30° analogous color
  - Accent: Triadic (120°) or split-complementary color
  - Background light: Tint at 97-99% lightness
  - Background dark: Shade at 5-10% lightness, desaturated

- **Status colors** (always derived to match brand warmth):
  - Success: Green hue adjusted toward brand warmth
  - Warning: Amber/yellow adjusted toward brand warmth
  - Destructive: Red/pink adjusted toward brand warmth

---

## Phase 2: User Confirmation

After extracting brand elements, present them for approval using this format:

```
## Brand Adaptation Preview

### Color Palette

| Role              | Current   | New       | Notes |
|-------------------|-----------|-----------|-------|
| Primary           | #FF4D00   | [hex]     | Main brand color |
| Primary Glow      | rgba(...) | [rgba]    | 20% opacity version |
| Secondary/Accent  | #00BBFF   | [hex]     | Supporting color |
| Background Light  | #FAFAFA   | [hex]     | Light theme background |
| Background Dark   | #0A0A0A   | [hex]     | Dark elements |
| Foreground        | #0A0A0A   | [hex]     | Primary text |
| Foreground Muted  | #525252   | [hex]     | Secondary text |
| Success           | #10B981   | [hex]     | Positive states |
| Warning           | #F59E0B   | [hex]     | Caution states |
| Destructive       | #EF4444   | [hex]     | Error states |

### Typography (if changes identified)

| Role    | Current      | New         |
|---------|--------------|-------------|
| Display | Bebas Neue   | [font]      |
| Body    | Manrope      | [font]      |

### Design Style

| Attribute        | Current              | New           |
|------------------|----------------------|---------------|
| Aesthetic        | Brutalist-Minimalism | [style]       |
| Shadow Intensity | Medium               | [level]       |
| Corner Radius    | 0.5rem               | [value]       |

---

**Files to be updated:** [count] files across the design system

**Options:**
- Type `yes` to apply all changes
- Type `modify [element] [new-value]` to adjust (e.g., "modify primary #3B82F6")
- Type `cancel` to abort
```

Wait for user response before proceeding.

---

## Phase 3: File Updates

After user approval, update files in this order:

### Phase 3a: Core CSS Variables

**File: `app/globals.css`**

Update the `:root` section (lines 7-65):

```css
/* Update these variables with new brand colors */
--primary: [NEW_PRIMARY];
--primary-glow: rgba([R], [G], [B], 0.2);
--primary-intense: [LIGHTER_PRIMARY];
--primary-dark: [DARKER_PRIMARY];

--accent-blue: [NEW_SECONDARY];
--accent-blue-glow: rgba([R], [G], [B], 0.15);
--accent-blue-dark: [DARKER_SECONDARY];

--background-dark: [NEW_BG_LIGHT];
--background-light: [NEW_BG_WHITE];
--foreground: [NEW_FOREGROUND];
--foreground-muted: [NEW_MUTED];

--warning: [NEW_WARNING];
--success: [NEW_SUCCESS];
--destructive: [NEW_DESTRUCTIVE];
```

Also update OKLCH values for shadcn/ui compatibility:
```css
--primary-oklch: oklch([L] [C] [H]);
--accent: oklch([L] [C] [H]);
```

Update gradient utilities (lines 367-406):
```css
.bg-gradient-mesh-warm { /* Update warm tints */ }
.bg-gradient-orange { /* Update orange gradient */ }
.bg-gradient-cyan { /* Update secondary gradient */ }
```

Update pattern utilities (line 346):
```css
.bg-dots-pattern { /* Update dot color */ }
```

### Phase 3b: Design Documentation

**File: `ai_docs/DESIGN_AESTHETICS.md`**

Update the Color Palette section with new hex values and usage guidelines.

Update sections:
- "Color Palette" - All color definitions
- "Gradient Recipes" - Update gradient examples
- "Shadow & Glow Effects" - Update glow color references
- "Best Practices" - Update color usage examples

**File: `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md`**

Update color system references in typography and layout sections.

**File: `ai_docs/IMAGE_GENERATION_GUIDE.md`**

Update "Color Values" section with new brand colors for AI image generation prompts:
- Update base prompt template colors
- Update example prompts with new hex values

**File: `ai_docs/ALGORITHMIC_COMPONENTS.md`**

Update "Color Scheme Recommendations" section:
- MeshGradientBackground color examples
- ParticleField color recommendations
- Warm/cool scheme definitions

### Phase 3c: Pattern Components

**Directory: `ai_docs/components_inspiration/patterns/`**

For each of these 13 pattern files, update hardcoded color references:

1. `are-vs-not-comparison/component.tsx`
2. `button-toggle-comparison/component.tsx`
3. `formal-quiz/component.tsx`
4. `horizontal-timeline/component.tsx`
5. `incremental-prototype/component.tsx`
6. `interactive-correlation/component.tsx`
7. `iteration-animation/component.tsx`
8. `knowledge-test-poll/component.tsx`
9. `layered-evolution/component.tsx`
10. `one-screen-simplicity/component.tsx`
11. `progressive-disclosure/component.tsx`
12. `realtime-calculator/component.tsx`
13. `scrubber-metrics-timeline/component.tsx`

Replace occurrences of:
- `#FF4D00` → [NEW_PRIMARY]
- `#00D9FF` / `#00BBFF` → [NEW_SECONDARY]
- `text-primary` classes remain (they use CSS variables)
- Hardcoded `rgba(255, 77, 0, ...)` → new primary rgba

**File: `ai_docs/components_inspiration/patterns/INDEX.md`**

Update "Design System Compliance" section color references.

### Phase 3d: Skills

**File: `.claude/skills/algorithmic-art/SKILL.md`**

Update "DESIGN SYSTEM INTEGRATION" section:
```javascript
// Update these color constants
const colorPrimary = '[NEW_PRIMARY]';
const colorCyan = '[NEW_SECONDARY]';
const colorCharcoal = '[NEW_BACKGROUND_DARK]';
```

---

## Phase 4: Validation

After all updates, run validation:

### Build Check
```bash
pnpm run build
```
Verify TypeScript compilation succeeds with no errors.

### Lint Check
```bash
pnpm run lint
```
Verify code quality passes.

### Contrast Validation

Report contrast ratios for key combinations:
- Primary on background: Calculate and report ratio
- Foreground on background: Calculate and report ratio
- Ensure WCAG AA compliance (4.5:1 for body text, 3:1 for large text)

If contrast fails WCAG AA, suggest adjustments.

### Visual Preview

Suggest the user run:
```bash
pnpm run dev
```
And navigate to test slides to verify:
- Colors display correctly
- Animations work with new colors
- Interactive patterns function properly
- Overall visual coherence

---

## Rollback Instructions

If issues are found after applying changes, the user can revert using:

```bash
git checkout -- app/globals.css ai_docs/ .claude/skills/
```

Or for specific files:
```bash
git checkout -- [specific-file-path]
```

---

## Relevant Files

### Core (must update)
- `app/globals.css` - CSS custom properties and utilities

### Documentation (must update)
- `ai_docs/DESIGN_AESTHETICS.md` - Primary design system documentation
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout and typography guidelines
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation prompts
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas animation components

### Patterns (update hardcoded colors)
- `ai_docs/components_inspiration/patterns/*/component.tsx` - 13 pattern files
- `ai_docs/components_inspiration/patterns/INDEX.md` - Pattern index

### Skills (update color references)
- `.claude/skills/algorithmic-art/SKILL.md` - Algorithmic art skill

---

## User Input

$ARGUMENTS
