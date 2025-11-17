# Plan Slide Redesign

Create a detailed redesign specification for presentation slides by extracting source content, consulting design patterns, and organizing slides into agent groups for parallel implementation.

## Instructions

You are creating a comprehensive spec file in `specs/` that will guide the implementation of slide redesign. Follow these steps carefully:

### Step 1: Parse Input

The user will provide EITHER:
- **Existing slide IDs**: e.g., "F1 slides 1-5" or "01-f1-title, 02-f1-why-levels, 03-f1-levels-overview"
- **New slide descriptions**: e.g., "Create 3 slides explaining the 5 levels framework: title slide, overview, and detailed breakdown"
- **Mixed input**: Combination of existing slides to redesign and new slides to create

Parse the input to determine:
- Module identifier (F1, F2, S1, S2, S3, etc.)
- Slide IDs or descriptions
- Total number of slides to design/redesign

### Step 2: Extract Source Content

**CRITICAL**: If the user references an existing module or curriculum content, extract the source material from `courses_to_build/education_v2/`.

**Content Structure:**
```
courses_to_build/education_v2/
├── README.md                                    # Course structure overview
├── courses/
│   ├── foundation/
│   │   ├── f1_five_levels_framework.md         # F1 module content
│   │   └── f2_organizational_structure.md       # F2 module content
│   └── skills/
│       ├── s1_strategic_decision_making.md      # S1 module content
│       ├── s2_agent_architecture.md             # S2 module content
│       └── s3_managing_agentic_ai.md            # S3 module content
└── resources/
    └── knowledge_components/                    # Reusable content components
```

**Extraction Workflow:**
1. Read the module's `.md` file (e.g., `courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md`)
2. Extract relevant sections for each slide based on:
   - Slide IDs mentioned (if redesigning existing slides)
   - Content topics mentioned (if creating new slides)
   - Module learning objectives
3. Check `courses_to_build/education_v2/resources/knowledge_components/` for reusable content blocks
4. Summarize extracted content in the spec file under "Content Breakdown" section

**Example Extraction:**
```markdown
## Content Breakdown

### Slide 01: Title Slide
**Source**: `courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md` (Introduction section)
**Content**:
- Module: F1 - Five Levels Framework
- Title: "The 5 Levels of AI Implementation Maturity"
- Subtitle: "A Strategic Framework for AI Success"
- Learning objective: Introduce the framework that helps executives assess and advance their AI maturity

### Slide 02: Why Levels Matter
**Source**: `courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md` (Motivation section)
**Content**:
- Key message: "Most companies fail at Level 3 - understanding why is critical"
- Statistics: 70% of AI projects fail due to Level 3 trap
- Transition insight: Success requires escaping Level 3 and reaching Level 4
```

### Step 3: Consult Design Pattern Library

**ESSENTIAL**: Before designing slides, consult `ai_docs/components_inspiration/` to find matching patterns.

**Pattern Library Structure:**
- **Pattern Index**: `ai_docs/components_inspiration/README.md` - Complete catalog of 13 proven patterns
- **Individual Patterns**: `ai_docs/components_inspiration/patterns/*/` - Each pattern has README + component
- **Interactive Patterns Reference**: `ai_docs/INTERACTIVE_PATTERNS.md` - 5 core interactive patterns

**Pattern Matching Workflow:**
1. Read `ai_docs/components_inspiration/README.md` - Review pattern index and use case mapping
2. For each slide, determine the primary goal:
   - Teaching a concept → Check "Teaching a Concept" section in use case mapping
   - Comparing options → Check "Enabling Decision-Making & Comparison"
   - Building engagement → Check "Building Engagement & Interactivity"
   - Assessment → Check "Assessment & Validation"
   - Progressive disclosure → Check "Transitions & Progressive Disclosure"
3. Identify 2-3 candidate patterns for each slide
4. Read each candidate pattern's README in `patterns/[pattern-name]/README.md` to understand:
   - Why it works (design psychology)
   - When to use (specific scenarios)
   - Key features (interactive elements)
5. Select the best-fit pattern for each slide
6. Document pattern selections in spec file

**Example Pattern Recommendations:**
```markdown
## Visual Design Recommendations

### Slide 01: Title Slide
**Pattern**: One-Screen Simplicity (`patterns/one-screen-simplicity/`)
**Rationale**: Title slides benefit from minimalist layout with maximum clarity. This pattern ensures strong first impression without cognitive overload.
**Key Features**:
- Badge + Title + Subtitle hierarchy
- Atmospheric background (GradientMesh + GrainOverlay)
- Orchestrated entrance animations

### Slide 02: Why Levels Matter
**Pattern**: Interactive Toggle Comparison (`patterns/button-toggle-comparison/`)
**Rationale**: Demonstrating "why" requires showing the dramatic difference between success and failure. Toggle pattern creates memorable cognitive contrast.
**Key Features**:
- Button toggle between "Success" vs "Failure" scenarios
- Same layout for both views (makes differences obvious)
- Color-coding (green for success, red for failure)
- Animated transitions between states
```

### Step 4: Reference Design System Documentation

Ensure the spec file references ALL relevant design documentation:

**Required References:**
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 core interactive patterns (toggle, canvas, hover-reveal, click-expand, mini POCs)
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (typography, colors, animations, component variants)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists, typography scales
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow with templates
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas-based animation components (if using canvas patterns)
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/[pattern-name]/` - Specific pattern documentation

### Step 5: Plan Image Generation Strategy

**CRITICAL**: Every slide MUST have an AI-generated BACKGROUND image at 10-20% opacity to enhance visual appeal.

**Image Generation Planning:**
1. For each slide, determine the background image subject based on:
   - Slide content theme
   - Visual metaphor that enhances the message
   - Consistency with design system (handwritten illustration style, orange palette)
2. Draft image generation prompts using the template from `ai_docs/IMAGE_GENERATION_GUIDE.md`:
   ```
   Base template:
   "A professional handwritten illustration of [SUBJECT], featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white/light gray background. [SCENE DETAILS]. Editorial style, clean lines, minimal shading."
   ```
3. Specify aspect ratio: 16:9 for background images
4. Note opacity and blend mode: 10-20% with mix-blend-multiply
5. Optional: Plan additional content images (1:1 for cards, 3:2 for balanced scenes) if needed

**Example Image Strategy:**
```markdown
## Image Generation Strategy

### Slide 01: Title Slide
**Background Image** (16:9, 15% opacity, mix-blend-multiply):
- Subject: Abstract representation of 5 ascending steps/levels with a figure climbing them
- Prompt: "A professional handwritten illustration of a business person climbing 5 ascending steps representing maturity levels, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. Steps are numbered 1-5, figure is small and positioned mid-climb. Editorial style, clean lines, minimal shading."
- Generation command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`

### Slide 02: Why Levels Matter - Success Toggle View
**Background Image** (16:9, 10% opacity):
- Subject: Thriving office environment with upward trending graphs
- Prompt: "A professional handwritten illustration of a modern office with people collaborating successfully, upward trending charts on screens, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. Positive energy, growth indicators. Editorial style, clean lines, minimal shading."

### Slide 02: Why Levels Matter - Failure Toggle View
**Background Image** (16:9, 10% opacity):
- Subject: Stagnant office with confused team members
- Prompt: "A professional handwritten illustration of an office with confused team members looking at flat/declining charts, featuring muted orange and gray tones, with charcoal outlines and white background. Stagnation indicators, puzzled expressions. Editorial style, clean lines, minimal shading."
```

### Step 6: Organize Slides into Agent Groups

**CRITICAL FOR PARALLEL IMPLEMENTATION**: Organize slides into groups of max 2 slides per group for parallel agent execution.

**Grouping Principles:**
- **Group Size**: Exactly 1-2 slides per group (optimal for quality + parallelization)
- **Thematic Coherence**: Group related slides together (e.g., introduction slides, technical slides, summary slides)
- **Balanced Workload**: Distribute complex vs simple slides evenly across groups

**Agent Group Format:**
```markdown
## Agent Groups

### Group 1: Introduction & Context (2 slides)
**Slides**: 01-f1-title, 02-f1-why-levels
**Theme**: Establishing the framework and motivation
**Agent**: slide-generator-1
**Patterns Used**:
- Slide 01: One-Screen Simplicity
- Slide 02: Button Toggle Comparison

**Consistency Requirements:**
- Same color palette (electric orange #FF4D00, neon cyan #00D9FF)
- Same typography hierarchy (Bebas Neue titles, Manrope body)
- Same animation timing (200ms delay increments)
- Same background opacity (15% for both)

### Group 2: Framework Overview (2 slides)
**Slides**: 03-f1-levels-overview, 04-f1-level1
**Theme**: Introducing the 5 levels and deep-dive into Level 1
**Agent**: slide-generator-2
**Patterns Used**:
- Slide 03: Horizontal Timeline
- Slide 04: One-Screen Simplicity

**Consistency Requirements:**
- Same color palette (electric orange #FF4D00, charcoal #0A0A0A)
- Same typography hierarchy
- Same animation timing
- Timeline → Detail slide flow

### Group 3: Middle Levels (2 slides)
**Slides**: 05-f1-level2, 06-f1-level3
**Theme**: Examining Levels 2 and 3 (the trap)
**Agent**: slide-generator-3
**Patterns Used**:
- Slide 05: One-Screen Simplicity
- Slide 06: Iteration Animation (canvas-based)

**Consistency Requirements:**
- Same color palette
- Warning colors for Level 3 (red tones)
- Canvas animation complements static slide design
```

**Grouping Examples:**

**4 slides → 2 groups** (2 slides each):
```
Group 1: Slides 1-2 (Introduction)
Group 2: Slides 3-4 (Deep Dive)
```

**6 slides → 3 groups** (2 slides each):
```
Group 1: Slides 1-2 (Introduction)
Group 2: Slides 3-4 (Core Content)
Group 3: Slides 5-6 (Summary)
```

**8 slides → 4 groups** (2 slides each):
```
Group 1: Slides 1-2 (Introduction)
Group 2: Slides 3-4 (Technical Architecture)
Group 3: Slides 5-6 (Use Cases)
Group 4: Slides 7-8 (Summary)
```

**10 slides → 5 groups** (2 slides each):
```
Group 1: Slides 1-2 (Introduction & Context)
Group 2: Slides 3-4 (Framework Overview)
Group 3: Slides 5-6 (Technical Deep Dive)
Group 4: Slides 7-8 (Practical Applications)
Group 5: Slides 9-10 (Summary & Next Steps)
```

**Special case - 3 slides → 2 groups** (2 slides + 1 slide):
```
Group 1: Slides 1-2 (Main content)
Group 2: Slide 3 (Summary)
```

### Step 7: Generate Complete Spec File

Create the spec file in `specs/` with the filename format: `[module]-slides-[range]-redesign.md`

**Example filenames:**
- `specs/f1-slides-1-5-redesign.md`
- `specs/s2-architecture-slides-redesign.md`
- `specs/new-ai-strategy-module-slides.md`

**Required Spec File Sections:**

```markdown
# Feature: [Module] - Slide Redesign ([Slide Range])

## Feature Description
[Describe the redesign goals, what's being improved, and the expected impact on learner engagement]

## User Story
As a presentation developer
I want to redesign [module] slides [range]
So that learners experience more engaging, interactive, and visually compelling content that follows POC-style design principles

## Problem Statement
[Describe current issues with existing slides OR gaps that new slides will fill:
- Static text-heavy designs with low engagement
- Missing interactive elements that demonstrate concepts
- Inconsistent visual design across slides
- Missing AI-generated background images
- etc.]

## Solution Statement
Redesign slides using POC-style interactive patterns from `ai_docs/components_inspiration/` and `ai_docs/INTERACTIVE_PATTERNS.md`:
- Replace static text with interactive demos (toggles, canvas animations, hover-reveal)
- Add AI-generated background images at appropriate opacity
- Ensure design system compliance (DESIGN_AESTHETICS.md)
- Organize implementation into [N] agent groups for parallel execution
- Follow "Show, Don't Tell" philosophy

## Relevant Files

### Source Content (if applicable)
- `courses_to_build/education_v2/courses/[path]/[module].md` - Module source content
- `courses_to_build/education_v2/resources/knowledge_components/` - Reusable content blocks

### Design Documentation
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas-based animation components
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/[pattern-names]/` - Specific patterns used

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/[module]/*.tsx` - Slide components to create/update
- `config/slides.ts` - Slide registry

### New Files
- `components/slides/[module]/[slide-ids].tsx` - New/redesigned slide components

## Content Breakdown

[For EACH slide, provide:
- Slide ID and title
- Source material reference (if applicable)
- Key content points extracted from source
- Learning objectives for the slide
- Interactive elements needed
- Data/metrics to display (if applicable)]

## Visual Design Recommendations

[For EACH slide, specify:
- Recommended pattern from components_inspiration (with path)
- Rationale for pattern selection
- Key features to implement
- Interactive elements to include
- Animation requirements
- Color scheme and typography usage]

## Image Generation Strategy

[For EACH slide, plan:
- Background image subject (16:9 aspect ratio)
- Complete generation prompt using template from IMAGE_GENERATION_GUIDE.md
- Opacity and blend mode (typically 10-20% with mix-blend-multiply)
- Optional content images (1:1 for cards, 3:2 for scenes)
- Generation commands ready to execute]

## Agent Groups

[Organize slides into groups of max 2 slides. For EACH group specify:
- Group identifier and descriptive name
- Slide IDs included (e.g., "01-title, 02-overview")
- Theme/topic that unifies the group
- Assigned agent identifier (e.g., "slide-generator-1")
- Patterns used in the group
- Consistency requirements (colors, typography, animations)]

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status:
  - Comments:

- [ ] **Phase 2: Parallel Implementation** - Spawn slide-generator agents in parallel to implement all slides
  - Status:
  - Comments:

- [ ] **Phase 3: Integration & Validation** - Register slides, test navigation, validate design system compliance
  - Status:
  - Comments:

## Step by Step Tasks

### Foundation Work

- [ ] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, components_inspiration/
  - Status:
  - Comments:

- [ ] **Extract source content** - Read module content from courses_to_build/education_v2/ and extract relevant sections
  - Status:
  - Comments:

- [ ] **Match patterns** - Consult components_inspiration/ and identify best-fit patterns for each slide
  - Status:
  - Comments:

### Image Generation

[For EACH slide, create a task:]
- [ ] **Generate background image for Slide [ID]** - Run: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`
  - Status:
  - Comments:

### Slide Implementation

[For EACH agent group, create a task:]
- [ ] **Implement Group [N]: [Name]** - Slides [IDs] using patterns [pattern names]
  - Status:
  - Comments:

### Integration & Validation

- [ ] **Register slides in config/slides.ts** - Add slide metadata and ordering
  - Status:
  - Comments:

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation
  - Status:
  - Comments:

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status:
  - Comments:

- [ ] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status:
  - Comments:

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- Test each slide renders without errors
- Test slide navigation (next/previous)
- Test interactive elements (toggles, buttons, hover effects)
- Test responsive layouts at breakpoints (mobile, tablet, desktop)

### Edge Cases
- Rapid clicking on toggle buttons
- Hover effects on touch devices
- Canvas animations with prefers-reduced-motion
- Keyboard navigation through all interactive elements

## Acceptance Criteria

- [ ] All slides have AI-generated background images at appropriate opacity
- [ ] All slides use patterns from components_inspiration/ or INTERACTIVE_PATTERNS.md
- [ ] All slides follow design system (DESIGN_AESTHETICS.md)
- [ ] All slides are responsive (mobile, tablet, desktop)
- [ ] All slides have proper entrance animations
- [ ] All interactive elements provide clear feedback
- [ ] All slides meet WCAG AA accessibility standards
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency

## Slide Design Requirements

[Complete for all slides - this section is required since this is a slide redesign spec]

### Image Generation Strategy
[Detailed per-slide image generation plan as described in Step 5 above]

### Visual Component Selection
[For each slide, specify:
- Text blocks and hierarchy
- Data visualizations (charts, tables, infographics)
- Interactive elements (toggles, hover cards, accordions, buttons)
- Icons from lucide-react
- AI-generated images integration]

### Layout Design
[For each slide, describe:
- Grid structure (1/2/5 column patterns)
- Spacing (p-8 lg:p-16, gap-4/6/8)
- Component hierarchy (Badge → Title → Subtitle → Content Grid)
- Full-screen slide setup (min-h-screen, centering)]

### Interactive & Animation Patterns
[For each slide, detail:
- Entrance animations (fade-in, slide-up, stagger)
- Interactive reveals (click, hover, scroll triggers)
- Hover effects (shadow, scale, color)
- Smooth transitions (transition-all)
- Pop-up/expand logic]

### Color & Typography Usage
- Color scheme: Electric orange (#FF4D00), neon cyan (#00D9FF), charcoal (#0A0A0A), muted gray (#A0A0A0)
- Text hierarchy: text-7xl (titles), text-4xl (headers), text-lg/xl (body)
- Contrast ratios: WCAG AA compliance (4.5:1 body, 3:1 large text)
- Font weights: font-bold (emphasis), font-normal (body)
- Font families: Bebas Neue (titles), Syne (emphasis), Manrope (body)

### Accessibility Checklist
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] All interactive elements have focus states (ring utilities)
- [ ] Text readable at minimum 16px for body
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader compatible (semantic HTML, ARIA)
- [ ] Motion respects prefers-reduced-motion

### Component Implementation Notes
- shadcn/ui components: Badge (glow/gradient), Card (layered/glow), Button (brutal/glow), HoverCard, Accordion
- Custom components: [List any new reusable components needed]
- Recharts configuration: [Specify chart types, responsive settings, color arrays]
- Animation libraries: tw-animate-css utilities or custom keyframes
- State management: "use client" with useState for interactivity

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "[PROMPT_SLIDE_01]" --ratio 16:9
tsx generate-image.ts "[PROMPT_SLIDE_02]" --ratio 16:9
# ... (repeat for each slide)

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to slides and test interactivity
```

## Notes

### Critical Design Decisions

1. **POC-Style Interactive Preference**: All slides prioritize dynamic, interactive demonstrations over static text-heavy designs following "Show, Don't Tell" philosophy
2. **Pattern-First Approach**: Every slide uses a proven pattern from components_inspiration/ or INTERACTIVE_PATTERNS.md
3. **Background Images Required**: Every slide has AI-generated background image at 10-20% opacity for visual enhancement
4. **Max 2 Slides Per Agent**: Ensures quality while enabling parallelization
5. **Design System Compliance**: All slides strictly follow DESIGN_AESTHETICS.md specifications

### Pattern Selection Rationale

[Document why specific patterns were chosen for each slide, referencing the pattern library documentation]

### Future Enhancements

[Optional: List potential improvements for future iterations]
```

### Step 8: Review and Refine

Before presenting the spec to the user:
1. **Verify completeness**: All sections filled, all slides planned
2. **Check pattern references**: All patterns exist in components_inspiration/
3. **Validate agent groups**: Max 2 slides per group, balanced workload
4. **Review prompts**: Image generation prompts follow template
5. **Confirm consistency**: Design system compliance throughout

### Step 9: Present Spec and Next Steps

After creating the spec file, inform the user:
1. Spec file location (e.g., `specs/f1-slides-1-5-redesign.md`)
2. Number of slides planned
3. Number of agent groups created
4. Patterns selected summary
5. Next step: Run `/implement_slide_redesign specs/[filename].md` to spawn agents and implement slides

## Usage Examples

### Example 1: Redesign Existing Slides

**User**: `/plan_slide_redesign F1 slides 1-5: title, why levels matter, levels overview, level 1, level 2`

**Your Response**:
1. Parse: F1 module, 5 slides (01-05)
2. Extract content from `courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md`
3. Match patterns:
   - Slide 01: One-Screen Simplicity
   - Slide 02: Button Toggle Comparison
   - Slide 03: Horizontal Timeline
   - Slide 04: One-Screen Simplicity
   - Slide 05: One-Screen Simplicity
4. Plan background images (5 prompts, 16:9 ratio)
5. Create 3 agent groups:
   - Group 1: Slides 1-2 (Introduction)
   - Group 2: Slides 3-4 (Framework Overview)
   - Group 3: Slide 5 (Deep Dive)
6. Generate spec: `specs/f1-slides-1-5-redesign.md`
7. Present summary and next steps

### Example 2: Create New Slides

**User**: `/plan_slide_redesign Create 4 slides for S2 explaining agent architecture: overview, LLM component, tools component, memory component`

**Your Response**:
1. Parse: S2 module, 4 new slides
2. Extract content from `courses_to_build/education_v2/courses/skills/s2_agent_architecture.md`
3. Match patterns:
   - Slide 01: One-Screen Simplicity (overview)
   - Slide 02: Hover-Reveal Cards (exploring LLM capabilities)
   - Slide 03: Click-to-Expand Details (tools breakdown)
   - Slide 04: Interactive Correlation (memory importance)
4. Plan background images (4 prompts)
5. Create 2 agent groups:
   - Group 1: Slides 1-2 (Overview & LLM)
   - Group 2: Slides 3-4 (Tools & Memory)
6. Generate spec: `specs/s2-architecture-slides-redesign.md`
7. Present summary

### Example 3: Mixed Redesign + New

**User**: `/plan_slide_redesign Redesign F2 slides 1-2 and add 1 new slide showing organizational transformation timeline`

**Your Response**:
1. Parse: F2 module, 2 existing + 1 new = 3 slides total
2. Extract content for slides 1-2 from existing, plan content for slide 3 from `courses_to_build/education_v2/courses/foundation/f2_organizational_structure.md`
3. Match patterns:
   - Slide 01: One-Screen Simplicity (title)
   - Slide 02: ARE vs NOT Comparison (role clarification)
   - Slide 03: Scrubber Metrics Timeline (transformation timeline)
4. Plan background images (3 prompts)
5. Create 2 agent groups:
   - Group 1: Slides 1-2 (Introduction & Roles)
   - Group 2: Slide 3 (Transformation)
6. Generate spec: `specs/f2-slides-redesign-with-timeline.md`

## Important Notes

- **Always prefer POC-style interactive patterns** over static text-heavy designs
- **Every slide MUST have a background image** at 10-20% opacity
- **Max 2 slides per agent group** for optimal quality and parallelization
- **Pattern-first approach**: Always check components_inspiration/ before designing custom slides
- **Design system compliance**: Strictly follow DESIGN_AESTHETICS.md for typography, colors, animations
- **Accessibility is non-negotiable**: All slides must meet WCAG AA standards

## Troubleshooting

### Issue: Can't find source content
- Check if module identifier is correct (F1, F2, S1, S2, S3)
- Verify file exists in `courses_to_build/education_v2/courses/`
- If truly new content not in education_v2, document that content will be created from scratch

### Issue: No matching pattern found
- Review all 13 patterns in components_inspiration/
- Consult INTERACTIVE_PATTERNS.md for the 5 core patterns
- Consider combining patterns or adapting similar patterns
- As last resort, design custom slide but document why no pattern matched

### Issue: Too many slides for agent groups
- Stick to max 2 slides per group
- 10 slides = 5 groups, 20 slides = 10 groups
- If feels like too many groups, consider breaking into multiple spec files

## User Input
$ARGUMENTS
