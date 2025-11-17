# Feature: F1-04, F1-05, F1-06 - Level Detail Slides Redesign

## Feature Description

Redesign F1 slides 04, 05, and 06 (Level 1, Level 2, Level 3 detail slides) to use more engaging, interactive patterns that better convey the progression through the levels and make the content more memorable for executives. Current implementation uses static two-column layouts which are functional but lack the "Show, Don't Tell" philosophy of the best executive presentations.

## User Story

As an executive learner
I want visually distinctive and interactive level detail slides
So that I can clearly understand the differences between levels and remember their key characteristics

## Problem Statement

**Current Issues**:

1. **Level 1 (04-f1-level1-individual.tsx)**:
   - Static two-column layout (What It Is vs Limitations)
   - Lists with checkmarks/X marks - functional but not memorable
   - No interactive elements - passive consumption
   - Gray color scheme is neutral but doesn't convey "this is OK for learning"

2. **Level 2 (05-f1-level2-saas.tsx)**:
   - Nearly identical structure to Level 1 (Advantages vs Limitations)
   - Blue color hints at "better than Level 1" but not strongly
   - Bullet lists with checkmarks again - pattern repetition
   - No differentiation mechanism to help learners remember Level 1 vs Level 2

3. **Level 3 (06-f1-level3-trap.tsx)**:
   - **This one is actually good** - uses button toggle (Promise vs Reality)
   - Interactive Pattern 1 (Toggle Comparison) - proven to work
   - Red color emphasizes danger - appropriate
   - Should be **preserved as-is** or only lightly enhanced

**Core Problems**:
- Levels 1 and 2 look too similar - doesn't reinforce their distinct characteristics
- No progression narrative - doesn't build toward "Level 4 is where transformation happens"
- Passive text consumption - executives forget bullet points
- No visual or interactive hooks to make levels memorable

## Solution Statement

Redesign Levels 1 and 2 to use distinct interactive patterns that:

1. **Create visual differentiation** - Each level should have a unique presentation style
2. **Build narrative progression** - Design should hint at "we're moving toward something important"
3. **Make content stick** - Use interactivity or visual metaphors, not just lists
4. **Preserve Level 3** - Toggle pattern already works well, keep it

**Proposed Patterns**:

### F1-04 (Level 1): One-Screen Simplicity with Progression Hint
**Pattern**: `patterns/one-screen-simplicity/` adapted
**Why**: Level 1 is simple, so design should be clean and minimal. But it should plant a seed: "This is just the beginning."
**Key Feature**: Simple card layout with a visual "progress bar" or "stepping stone" metaphor showing "You are here (Level 1 of 5)"

### F1-05 (Level 2): Comparison Grid with "Good But Not Enough" Theme
**Pattern**: `patterns/are-vs-not-comparison/` adapted OR custom grid
**Why**: Level 2 is better than Level 1, but still limited. Show the "step up" while emphasizing "but transformation requires more."
**Key Feature**: Side-by-side comparison that emphasizes "What you get vs What you're missing"

### F1-06 (Level 3): PRESERVE Current Toggle Pattern
**Pattern**: Current implementation (Pattern 1: Toggle Comparison)
**Why**: Already follows best practices - interactive, memorable, shows dramatic difference
**Changes**: Minor enhancements only (AI-generated background image, subtle animation improvements)

## Relevant Files

### Design Documentation
- `ai_docs/INTERACTIVE_PATTERNS.md` - Pattern 1 (Toggle), Pattern 3 (Hover-Reveal)
- `ai_docs/components_inspiration/patterns/one-screen-simplicity/` - For Level 1
- `ai_docs/components_inspiration/patterns/are-vs-not-comparison/` - For Level 2
- `ai_docs/components_inspiration/patterns/button-toggle-comparison/` - Reference for Level 3 (already used)
- `ai_docs/DESIGN_AESTHETICS.md` - Color palette, typography, animations
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation for backgrounds

### Implementation Files
- `components/slides/f1/04-f1-level1-individual.tsx` - Current Level 1 (97 lines) - REDESIGN
- `components/slides/f1/05-f1-level2-saas.tsx` - Current Level 2 (88 lines) - REDESIGN
- `components/slides/f1/06-f1-level3-trap.tsx` - Current Level 3 (127 lines) - ENHANCE ONLY
- `config/slides.ts` - Slide registry (no changes needed)

### Source Content
- `courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md`:
  - Lines 56-60: Level 1 content
  - Lines 62-66: Level 2 content
  - Lines 68-91: Level 3 content (promise + trap)

## Content Breakdown

### Slide F1-04: Level 1 - Individual AI
**Source**: `f1_five_levels_framework.md` (Section 3, lines 56-60)

**Core Message**: "People use ChatGPT/Claude individually. It's fine for learning, but won't drive transformation."

**What It Is** (Preserved):
- People use ChatGPT, Claude individually
- No central coordination or strategy
- Knowledge stays with individuals
- Cost: $20/person/month subscriptions

**Key Limitations** (Preserved):
- No knowledge sharing — Each person reinvents the wheel
- No company context — Generic responses, not tailored
- No integration — Doesn't connect to your systems
- Limited impact — Individual productivity only

**Learning Objective**: Help learners understand that individual AI use is the starting point, not the destination

**Interactive Elements** (NEW):
- Progress indicator showing "Level 1 of 5"
- Simple, clean layout emphasizing "this is just the beginning"
- Subtle animation hinting at progression to come

### Slide F1-05: Level 2 - Generic SaaS Tools
**Source**: `f1_five_levels_framework.md` (Section 4, lines 62-66)

**Core Message**: "Pre-built tools like Jasper, Copy.ai. Quick to deploy, but generic. Good for specific use cases, not transformation."

**Advantages** (Preserved):
- Quick deployment — Sign up and start immediately
- Pre-built workflows — Proven templates included
- No development needed — Business teams can use directly
- Predictable cost — $50-500/month per seat

**Critical Limitations** (Preserved):
- Generic, not customized — Can't learn YOUR business
- Limited integration — Doesn't deeply connect to your systems
- One-size-fits-all — Can't match your specific processes
- Adoption issues — Teams abandon tools that don't fit

**Learning Objective**: Show that Level 2 is a step up from Level 1, but still insufficient for real transformation

**Interactive Elements** (NEW):
- Comparison grid: "What You Get" vs "What's Missing"
- Visual emphasis on the gap between "useful" and "transformational"
- Progression hint: "Better than Level 1, but transformation requires more"

### Slide F1-06: Level 3 - The Trap
**Source**: `f1_five_levels_framework.md` (Section 5, lines 68-91)

**Core Message**: "No-code automation (Zapier, Make.com). Sounds perfect, but slow iteration creates THE TRAP. Negative ROI."

**Current Implementation** (PRESERVE):
- Toggle between "The Promise" and "The Reality"
- Shows sales pitch vs what actually happens
- Red color scheme emphasizes danger
- Clear timeline of failure (Month 1-2, Month 3-6)

**Enhancement Opportunities** (MINOR):
- Add AI-generated background image (10-20% opacity)
- Subtle animation improvements (if needed)
- Ensure accessibility (keyboard navigation, screen reader support)

**Learning Objective**: Create memorable understanding that Level 3 is a trap, not a stepping stone

**Interactive Elements** (PRESERVED):
- Button toggle: "The Promise" vs "The Reality"
- Dramatic difference in content reveals the trap
- Color-coding: Green (promise) → Red (reality)

## Visual Design Recommendations

### Slide F1-04: Level 1 - One-Screen Simplicity Pattern
**Pattern**: `patterns/one-screen-simplicity/` adapted
**Source**: `ai_docs/components_inspiration/patterns/one-screen-simplicity/README.md`

**Rationale**: Level 1 is fundamentally simple, so the design should be clean and minimal. However, it should establish a visual language of progression (stepping stones, journey metaphor) that hints at the 5-level framework.

**Key Features to Implement**:
1. **Progress Indicator**: Badge showing "Level 1 of 5" or visual stepping stones
2. **Clean Grid Layout**: 2-3 cards instead of two-column split
3. **Semantic Color**: Gray (neutral) with subtle hints of future transformation
4. **Staggered Animations**: Sequential card reveals (100ms delays)
5. **Bottom Insight**: "This is where most companies start — but transformation requires more"

**Visual Structure**:
```
┌─────────────────────────────────────┐
│ Badge: Level 1 | Progress: ●○○○○    │
│ TITLE: INDIVIDUAL AI                 │
│ Subtitle: ChatGPT, Claude           │
├─────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐│
│ │ What Is │ │ Use Case│ │ Limits  ││
│ │ Card    │ │ Card    │ │ Card    ││
│ └─────────┘ └─────────┘ └─────────┘│
├─────────────────────────────────────┤
│ Key Insight: Starting point,        │
│ not the destination                  │
└─────────────────────────────────────┘
```

**Animation Sequence**:
1. Badge + Title fade in (0ms)
2. Card 1 ("What It Is") slide in left (300ms delay)
3. Card 2 ("Use Cases") fade in (500ms delay)
4. Card 3 ("Limitations") slide in right (700ms delay)
5. Key insight fade in (1000ms delay)

### Slide F1-05: Level 2 - ARE vs NOT Comparison Pattern (Adapted)
**Pattern**: `patterns/are-vs-not-comparison/` adapted OR custom "Good But Not Enough" grid
**Source**: `ai_docs/components_inspiration/patterns/are-vs-not-comparison/README.md`

**Rationale**: Level 2 is an improvement over Level 1, but falls short of transformation. The visual design should emphasize this "good but insufficient" duality through clear comparison.

**Key Features to Implement**:
1. **Progress Indicator**: "Level 2 of 5" - visual progression from Level 1
2. **Dual-Column Comparison**: "What You Get" vs "What's Missing"
3. **Color Coding**: Blue (advantages) vs Orange/Muted (limitations)
4. **Visual Metaphor**: Perhaps a "bridge halfway built" or "toolkit with missing tools"
5. **Bottom Insight**: "Good for specific use cases — not enough for transformation"

**Visual Structure**:
```
┌─────────────────────────────────────┐
│ Badge: Level 2 | Progress: ○●○○○    │
│ TITLE: GENERIC SAAS TOOLS           │
│ Subtitle: Jasper, Copy.ai           │
├─────────────────────────────────────┤
│ WHAT YOU GET      │  WHAT'S MISSING │
│ ┌───────────────┐ │ ┌─────────────┐│
│ │ ✓ Quick start │ │ │ ✗ Custom fit││
│ │ ✓ Templates   │ │ │ ✗ Integration│
│ │ ✓ Low cost    │ │ │ ✗ Deep learn││
│ └───────────────┘ │ └─────────────┘│
├─────────────────────────────────────┤
│ Key Insight: Step up from Level 1,  │
│ but transformation requires Level 4  │
└─────────────────────────────────────┘
```

**Animation Sequence**:
1. Badge + Title fade in (0ms)
2. "What You Get" column slide in left (300ms)
3. "What's Missing" column slide in right (500ms)
4. Key insight fade in (900ms)

### Slide F1-06: Level 3 - Button Toggle Comparison (PRESERVED)
**Pattern**: `patterns/button-toggle-comparison/` (already implemented)
**Source**: `ai_docs/INTERACTIVE_PATTERNS.md` - Pattern 1 (lines 47-147)

**Rationale**: Current implementation is excellent - uses proven interactive toggle pattern, creates memorable "aha moment" when reality is revealed, appropriate danger color scheme.

**Preserve These Features**:
- Button toggle: "The Promise" vs "The Reality"
- Two-state content (sales pitch cards vs failure timeline)
- Red color scheme (border-red-500, bg-red-500/10)
- Destructive badge variant
- Smooth fade-in transitions between states

**Minor Enhancements Only**:
1. **Add AI-generated background image** (10-15% opacity, mix-blend-multiply)
2. **Ensure keyboard accessibility** (Tab to buttons, Enter to toggle)
3. **Add subtle entrance animations** (if not already present)
4. **Verify mobile responsiveness** (buttons stack on small screens)

**NO MAJOR CHANGES** - This slide already works well

## Image Generation Strategy

### Slide F1-04: Level 1 Background
**Background Image** (16:9, 15% opacity, mix-blend-multiply):
- **Subject**: Single person sitting at desk with laptop, thinking/using AI tool, warm orange and gray tones
- **Prompt**: "A professional handwritten illustration of a business person working alone at a laptop with a chat interface visible on screen, featuring warm orange tones (vibrant orange #F5A623, light orange accents) and gray tones for the figure, with charcoal outlines and white/light gray background. Solo work environment, minimal surrounding elements. Editorial style, clean lines, minimal shading."
- **Generation command**: `tsx generate-image.ts "A professional handwritten illustration of a business person working alone at a laptop with a chat interface visible on screen, featuring warm orange tones (vibrant orange #F5A623, light orange accents) and gray tones for the figure, with charcoal outlines and white/light gray background. Solo work environment, minimal surrounding elements. Editorial style, clean lines, minimal shading." --ratio 16:9`

### Slide F1-05: Level 2 Background
**Background Image** (16:9, 15% opacity, mix-blend-multiply):
- **Subject**: Multiple SaaS tool interfaces/logos floating around a desk, representing "off the shelf" tools
- **Prompt**: "A professional handwritten illustration of pre-built software tool interfaces and generic application windows arranged in a grid, featuring warm orange tones (vibrant orange #F5A623) and blue accents (#3B82F6), with charcoal outlines and white/light gray background. Generic, template-like feel. Editorial style, clean lines, minimal shading."
- **Generation command**: `tsx generate-image.ts "A professional handwritten illustration of pre-built software tool interfaces and generic application windows arranged in a grid, featuring warm orange tones (vibrant orange #F5A623) and blue accents (#3B82F6), with charcoal outlines and white/light gray background. Generic, template-like feel. Editorial style, clean lines, minimal shading." --ratio 16:9`

### Slide F1-06: Level 3 Background
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- **Subject**: Fragmented workflow with disconnected pieces, representing the "trap"
- **Prompt**: "A professional handwritten illustration of broken workflow connections with disconnected puzzle pieces and warning symbols, featuring warm orange tones (vibrant orange #F5A623) and red warning tones (#EF4444), with charcoal outlines and white/light gray background. Sense of fragmentation and caution. Editorial style, clean lines, minimal shading."
- **Generation command**: `tsx generate-image.ts "A professional handwritten illustration of broken workflow connections with disconnected puzzle pieces and warning symbols, featuring warm orange tones (vibrant orange #F5A623) and red warning tones (#EF4444), with charcoal outlines and white/light gray background. Sense of fragmentation and caution. Editorial style, clean lines, minimal shading." --ratio 16:9`

## Agent Groups

### Group 1: Level 1 Redesign (1 slide)
**Slides**: 04-f1-level1-individual
**Theme**: Foundation - Starting point of AI journey
**Agent**: slide-generator-1
**Patterns Used**:
- One-Screen Simplicity (adapted with progression indicator)

**Consistency Requirements**:
- Gray color scheme (Level 1 is neutral)
- Progress indicator showing "1 of 5"
- Clean, minimal design emphasizing simplicity
- Staggered animations (100ms delays)
- Background image at 15% opacity

### Group 2: Level 2 + Level 3 Enhancement (2 slides)
**Slides**: 05-f1-level2-saas, 06-f1-level3-trap
**Theme**: Progression to limitations and trap awareness
**Agent**: slide-generator-2
**Patterns Used**:
- ARE vs NOT Comparison (adapted) for Level 2
- Button Toggle Comparison (preserved) for Level 3

**Consistency Requirements**:
- Progressive color scheme (blue → red)
- Progress indicators (2 of 5, 3 of 5)
- Level 2: Dual-column comparison layout
- Level 3: PRESERVE existing toggle interaction
- Both: Background images at 12-15% opacity
- Same animation timing (transitions 300ms)

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status: Complete (via spec creation)
  - Comments: Content extracted, patterns selected, images planned

- [ ] **Phase 2: Parallel Implementation** - Spawn slide-generator agents in parallel for both groups
  - Status: Pending
  - Comments: 2 agent groups to run in parallel

- [ ] **Phase 3: Integration & Validation** - Test slides in sequence, validate design system compliance
  - Status: Pending
  - Comments: Critical to test Level 1 → 2 → 3 progression narrative

## Step by Step Tasks

### Foundation Work

- [x] **Read all design documentation** - Review patterns, design system, image generation guide
  - Status: Complete
  - Comments: Reviewed One-Screen Simplicity, ARE vs NOT, Button Toggle patterns

- [x] **Extract source content** - Read module content and extract level descriptions
  - Status: Complete
  - Comments: Content from f1_five_levels_framework.md extracted

- [x] **Match patterns** - Identify best-fit patterns for each slide
  - Status: Complete
  - Comments: One-Screen (L1), ARE vs NOT (L2), Toggle (L3 - preserve)

### Image Generation

- [x] **Generate background image for Slide 04 (Level 1)** - Solo worker with laptop
  - Status: Completed
  - Comments: Generated successfully - `gemini-1763382702805-1.png` (15% opacity, mix-blend-multiply)

- [x] **Generate background image for Slide 05 (Level 2)** - SaaS tool interfaces
  - Status: Completed
  - Comments: Generated successfully - `gemini-1763382728117-1.png` (15% opacity, mix-blend-multiply)

- [x] **Generate background image for Slide 06 (Level 3)** - Broken workflow/trap
  - Status: Completed
  - Comments: Generated successfully - `gemini-1763382744652-1.png` (12% opacity, mix-blend-multiply)

### Slide Implementation

- [x] **Implement Group 1: Level 1 Redesign** - Slide 04 using One-Screen Simplicity pattern
  - Status: Completed
  - Comments: Implemented with progression indicator (Level 1 of 5), 3-card grid (What It Is, Good For, Limitations), gray color scheme, staggered animations (300/500/700ms delays), background image at 15% opacity

- [x] **Implement Group 2: Levels 2-3** - Slide 05 redesign + Slide 06 enhancement
  - Status: Completed
  - Comments: Level 2: Redesigned with "What You Get vs What's Missing" comparison pattern (adapted from ARE vs NOT pattern), blue color scheme (Level 2 step up), dual-column layout with checkmarks (blue) and X marks (orange). Level 3: Enhanced with new background image (12% opacity), added progress indicator "Level 3 of 5", preserved existing button toggle interaction

### Integration & Validation

- [ ] **Test progression narrative** - Navigate F1-03 → 04 → 05 → 06 and verify story flows
  - Status: Pending
  - Comments: Ensure each level builds toward "Level 4 is transformation"

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status: Pending
  - Comments: All patterns must follow DESIGN_AESTHETICS.md

- [ ] **Test interactive elements** - Toggle on Level 3, hover states, keyboard navigation
  - Status: Pending
  - Comments: Ensure all interactions smooth and accessible

- [ ] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: Pending
  - Comments: Must pass TypeScript and lint checks

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic

### Integration Tests
- Navigate slide sequence: F1-03 (overview) → 04 (L1) → 05 (L2) → 06 (L3)
- Verify visual differentiation between levels (each looks distinct)
- Test progression narrative (builds toward transformation at Level 4)
- Test interactive elements (toggle on L3, hover states)
- Test responsive layouts at breakpoints (mobile, tablet, desktop)
- Test background images (correct opacity, visible but not distracting)

### Edge Cases
- Rapid slide navigation (chevron clicking)
- Keyboard-only navigation (Tab, Enter, Arrow keys)
- Mobile touch interactions (no hover states)
- Users with prefers-reduced-motion enabled
- Screen readers announcing content changes

## Acceptance Criteria

- [ ] Level 1 (F1-04) uses One-Screen Simplicity pattern with progression indicator
- [ ] Level 2 (F1-05) uses comparison grid emphasizing "good but not enough"
- [ ] Level 3 (F1-06) preserves current toggle interaction with minor enhancements
- [ ] All slides have AI-generated background images at 10-20% opacity
- [ ] Each level is visually distinct (not repetitive layouts)
- [ ] Progression narrative works: L1 (start) → L2 (better) → L3 (trap) → L4 (transformation)
- [ ] All slides responsive (mobile, tablet, desktop)
- [ ] All slides have proper entrance animations
- [ ] All interactive elements provide clear feedback
- [ ] All slides meet WCAG AA accessibility standards
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and narrative flow

## Slide Design Requirements

### Color & Typography Usage
- **Level 1**: Gray color scheme (#6B7280) - neutral, starting point
  - Font: Bebas Neue (title), Manrope (body)
  - Badge: outline variant with gray
- **Level 2**: Blue color scheme (#3B82F6) - step up, but still limited
  - Font: Bebas Neue (title), Manrope (body)
  - Badge: outline variant with blue
  - Dual colors: Green for advantages, Orange for limitations
- **Level 3**: Red color scheme (#EF4444) - danger, trap warning
  - Font: Bebas Neue (title), Manrope (body)
  - Badge: destructive variant
  - Dual colors: Green (promise), Red (reality)

### Accessibility Checklist
- [ ] Color contrast meets WCAG AA (4.5:1 minimum for body text)
- [ ] All interactive elements have focus states (ring utilities)
- [ ] Text readable at minimum 16px for body content
- [ ] Icons paired with text labels (or ARIA labels)
- [ ] Keyboard navigation works (Tab, Enter, Space, Arrow keys)
- [ ] Screen reader compatible (semantic HTML, ARIA roles)
- [ ] Motion respects prefers-reduced-motion
- [ ] Touch targets adequate size (min 44x44px)

### Component Implementation Notes
- shadcn/ui components: Badge (outline, destructive), Card (layered), Button (for toggle)
- GrainOverlay: opacity 0.15 for all slides
- Animation libraries: tw-animate-css utilities
- State management: useState for Level 3 toggle (preserve existing)
- Lucide-react icons: User, Briefcase, Wrench (levels), CheckCircle2, XCircle, AlertTriangle

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "A professional handwritten illustration of a business person working alone at a laptop with a chat interface visible on screen, featuring warm orange tones (vibrant orange #F5A623, light orange accents) and gray tones for the figure, with charcoal outlines and white/light gray background. Solo work environment, minimal surrounding elements. Editorial style, clean lines, minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of pre-built software tool interfaces and generic application windows arranged in a grid, featuring warm orange tones (vibrant orange #F5A623) and blue accents (#3B82F6), with charcoal outlines and white/light gray background. Generic, template-like feel. Editorial style, clean lines, minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of broken workflow connections with disconnected puzzle pieces and warning symbols, featuring warm orange tones (vibrant orange #F5A623) and red warning tones (#EF4444), with charcoal outlines and white/light gray background. Sense of fragmentation and caution. Editorial style, clean lines, minimal shading." --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to slides 04, 05, 06 and test progression
```

## Notes

### Critical Design Decisions

1. **Distinct Patterns Per Level** - Each level gets its own visual treatment to aid memory
2. **Progression Narrative** - Visual design builds toward "Level 4 is where transformation happens"
3. **Preserve What Works** - Level 3 toggle already excellent, minor enhancements only
4. **Background Images** - All slides get AI-generated backgrounds for visual richness
5. **Color Progression** - Gray (neutral) → Blue (better) → Red (danger) → Orange (transformation at L4)

### Pattern Selection Rationale

**Level 1 - One-Screen Simplicity**:
- Mirrors the simplicity of individual AI use
- Clean layout establishes baseline
- Progress indicator hints at journey ahead

**Level 2 - ARE vs NOT Comparison**:
- Shows "good but not enough" duality
- Comparison format makes limitations obvious
- Sets up contrast with Level 4 (which HAS what's missing)

**Level 3 - Button Toggle** (preserved):
- Already proven pattern
- Interactive revelation creates "aha moment"
- Memorable trap awareness

### Future Enhancements

After implementing these slides, consider:
- Adding subtle transition animations between levels
- Creating a "journey map" overlay showing progress through all 5 levels
- Adding micro-interactions (e.g., card hover effects on L1, L2)

---

**Created**: 2025-01-17
**Status**: Specification Complete, Implementation Pending
**Complexity**: Medium (3 slides, 2 redesigns + 1 enhancement)
**Estimated Time**:
  - Level 1 redesign: 1.5 hours
  - Level 2 redesign: 1.5 hours
  - Level 3 enhancement: 30 minutes
  - Testing & validation: 1 hour
  - **Total**: ~4.5 hours implementation + testing
