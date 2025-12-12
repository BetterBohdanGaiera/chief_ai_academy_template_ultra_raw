# Implement Slide Redesign

Spawn slide-generator agents in parallel to implement slides according to a redesign specification. This command orchestrates parallel agent execution, monitors progress, and validates the final implementation.

---

## SKILL SELECTION REQUIREMENT (READ THIS FIRST)

**CRITICAL**: Every slide MUST use an appropriate skill. This is NOT optional.

### Skill Selection Decision Tree

```
┌─────────────────────────────────────────────────────────────────┐
│                    SLIDE REQUIREMENTS                            │
└─────────────────────────────────────────────────────────────────┘
                              │
           ┌──────────────────┴──────────────────┐
           ▼                                     ▼
   ┌───────────────────┐               ┌───────────────────┐
   │   GENERATIVE/     │               │   REACT UI/       │
   │   CANVAS-BASED?   │               │   INTERACTIVE?    │
   └───────────────────┘               └───────────────────┘
           │                                     │
   ┌───────┴───────┐                   ┌────────┴────────┐
   │               │                   │                 │
   ▼               ▼                   ▼                 ▼
Flow fields    Canvas           State mgmt        Standard
Particles      animations       Complex UI        layouts
Procedural     Network viz      Multi-state       Cards/badges
art            Time-based       Forms             Hover states
   │               │                   │                 │
   └───────┬───────┘                   └────────┬────────┘
           ▼                                    ▼
  ┌─────────────────┐                 ┌─────────────────┐
  │ algorithmic-art │                 │artifacts-builder│
  │     SKILL       │                 │     SKILL       │
  └─────────────────┘                 └─────────────────┘
```

### Quick Reference Table

| Slide Needs | Skill | Examples |
|-------------|-------|----------|
| Flow fields, particles | `algorithmic-art` | MeshGradient, ParticleField |
| Canvas animations | `algorithmic-art` | Network visualizations, time-based |
| Procedural/generative art | `algorithmic-art` | Noise patterns, fractals |
| Complex React UI | `artifacts-builder` | Multi-component interactions |
| State management | `artifacts-builder` | useState, toggles, forms |
| Standard layouts | `artifacts-builder` | Cards, badges, grids |
| Hover-reveal patterns | `artifacts-builder` | Interactive card exploration |
| Data visualizations | `artifacts-builder` | Recharts, graphs |

### Skill Invocation Instructions for Agents

When spawning agents, ensure they understand:
1. **Check spec file** for recommended skill per slide
2. **If no recommendation**: Use decision tree above
3. **Invoke skill** before implementing each slide
4. **Document** skill usage in implementation notes

---

## Instructions

You are implementing slides according to a spec file created by `/plan_slide_redesign`. Follow these steps carefully to ensure parallel agent spawning and high-quality implementation.

### Prerequisites Check

Before starting, verify the spec file is ready:
1. Read the spec file provided by the user
2. Verify it contains an `## Agent Groups` section
3. Confirm each agent group specifies:
   - Group identifier and descriptive name
   - Slide IDs included
   - Theme/topic
   - Agent identifier
   - Patterns to use
   - Consistency requirements
4. Verify `## Image Generation Strategy` section exists with prompts for all slides
5. Verify `## Visual Design Recommendations` section exists with pattern selections

**If any of these are missing, STOP and ask the user to run `/plan_slide_redesign` first.**

### Multi-Slide Feedback Flow Check (CRITICAL)

**IMPORTANT**: Check if the spec file contains a `## Shared State Architecture` section. This indicates a feedback flow that requires special handling.

**If "Shared State Architecture" section is present:**

1. **Verify ALL pages that load feedback slides have FeedbackProvider wrapper**:
   - Module page MUST wrap `PresentationContainer` with `FeedbackProvider`
   - Home page MUST also wrap if it loads feedback slides (e.g., `app/page.tsx`)
   - Any other page loading these slides MUST also wrap
   - This is NOT optional - state persistence WILL break without it (runtime error)

2. **Verify question slides will use context**:
   - All question slides MUST use `useFeedback()` hook
   - Must NOT use local `useState` for selections
   - Must include visual confirmation ("Selection saved")
   - Must include Enter key handler for text inputs

3. **Verify summary slide will consume context**:
   - Summary slide MUST read from context state
   - Must NOT use mock/hardcoded data
   - Must include label lookup maps for display

4. **MANDATORY: Final summary slide implementation**:
   - Must be the LAST slide in the feedback flow
   - Display all collected choices using label lookup maps
   - Include submit button with `variant="glow"`
   - Add Enter key handler for keyboard accessibility
   - Show "Feedback was remembered" toast on submission:
     ```tsx
     {showConfirmation && (
       <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
         <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg">
           <Check className="h-4 w-4" />
           <span className="font-syne text-sm font-semibold">Feedback was remembered</span>
         </div>
       </div>
     )}
     ```
   - Auto-advance to next slide after 1.5-2 second delay:
     ```tsx
     const handleSubmit = async () => {
       await submitFeedback()
       setShowConfirmation(true)
       // Auto-advance after showing confirmation
       setTimeout(() => {
         nextSlide() // from useCourseNavigation hook
       }, 1500)
     }
     ```
   - Reference: `.claude/patterns/multi-slide-feedback/summary-slide.tsx`

5. **Add to agent prompts**:
   When spawning slide-generator agents for feedback flows, add this to each agent's prompt:

   ```
   **CRITICAL - Multi-Slide Feedback Flow:**
   This module uses shared state across slides. You MUST:

   1. For question slides:
      - Import and use `useFeedback()` from `@/contexts/FeedbackContext`
      - Do NOT use local `useState` for selections (state will be lost!)
      - Add "Selection saved" toast after each selection
      - Add Enter key handler for text inputs
      - Reference: `.claude/patterns/multi-slide-feedback/question-slide.tsx`

   2. For summary slides (MANDATORY - must be LAST slide in flow):
      - Consume context state via `useFeedback()`
      - Create label lookup maps to display user-friendly text
      - Do NOT use mock or hardcoded data
      - Include submit button with "Feedback was remembered" toast
      - Auto-advance to next slide after 1.5-2 second confirmation delay
      - Support Enter key for submission
      - Reference: `.claude/patterns/multi-slide-feedback/summary-slide.tsx`

   3. ALL pages loading these slides must wrap with FeedbackProvider:
      - Module page (app/(courses)/modules/[module]/page.tsx)
      - Home page if loading feedback slides (app/page.tsx)
      - Reference: `.claude/patterns/multi-slide-feedback/module-page.tsx`
   ```

**Reference Implementation**: `.claude/patterns/multi-slide-feedback/` contains complete examples.

### Step 1: Parse Agent Groups

Read the spec file's `## Agent Groups` section and extract all group definitions.

**For EACH agent group, note:**
- Group identifier (e.g., "Group 1: Introduction & Context")
- Slide IDs to implement (e.g., "01-f1-title, 02-f1-why-levels")
- Theme/topic (e.g., "Establishing the framework and motivation")
- Patterns to use (e.g., "One-Screen Simplicity", "Button Toggle Comparison")
- Consistency requirements (colors, typography, animations)

**Example Parsing:**
```
Agent Group 1:
  Name: "Introduction & Context"
  Slides: ["01-f1-title", "02-f1-why-levels"]
  Theme: "Establishing the framework and motivation"
  Patterns: ["One-Screen Simplicity", "Button Toggle Comparison"]
  Consistency: Same orange palette, Bebas titles, 200ms animation delays

Agent Group 2:
  Name: "Framework Overview"
  Slides: ["03-f1-levels-overview", "04-f1-level1"]
  Theme: "Introducing the 5 levels and deep-dive into Level 1"
  Patterns: ["Horizontal Timeline", "One-Screen Simplicity"]
  Consistency: Same color palette, timeline → detail flow
```

### Step 2: Spawn slide-generator Agents in Parallel

**CRITICAL**: You MUST spawn ALL agents in a SINGLE message using multiple Task tool calls. Do NOT spawn agents sequentially.

**Agent Spawning Rules:**
- Use `subagent_type: "slide-generator"` for all agents
- Spawn ALL agents in ONE message with multiple Task tool calls
- Each agent gets max 2 slides
- Provide complete instructions so agents can work autonomously
- Reference the spec file path so agents can read full details

**For EACH agent group, create a Task tool call:**

```
Task tool parameters:
- subagent_type: "slide-generator"
- description: "Implement [Group Name] slides"
- prompt: "
  You are assigned to implement [Group Name] for the [Module Name] module.

  **Your slides:** [comma-separated slide IDs]
  **Theme:** [group theme description]
  **Spec file:** [spec file path]

  **Instructions:**

  1. **Read the spec file completely**:
     - Focus on your assigned slides in the Agent Groups section
     - Review Content Breakdown for your slides
     - Review Visual Design Recommendations for your slides
     - Review Image Generation Strategy for your slides

  2. **Read all design documentation**:
     - ai_docs/INTERACTIVE_PATTERNS.md - 5 core interactive patterns
     - ai_docs/DESIGN_AESTHETICS.md - Complete design system
     - ai_docs/PRESENTATION_DESIGN_GUIDELINES.md - Layout patterns, quality checklists
     - ai_docs/IMAGE_GENERATION_GUIDE.md - AI image generation workflow
     - ai_docs/components_inspiration/README.md - Pattern library index

  3. **For EACH slide in your group**:

     a. **INVOKE APPROPRIATE SKILL (MANDATORY)**:
        - Check spec file for "Recommended Skill" field for this slide
        - If not specified, use the Skill Selection Decision Tree:
          * Canvas/generative/procedural → `algorithmic-art`
          * React UI/state management/interactive → `artifacts-builder`
        - **Invoke the skill using the Skill tool** before implementing the slide
        - Document which skill was used in your implementation notes

     b. **Check components_inspiration for patterns**:
        - Navigate to ai_docs/components_inspiration/patterns/[pattern-name]/
        - Read the pattern's README.md to understand design rationale
        - Review the pattern's component.tsx for implementation details

     c. **Generate background images**:
        - **⚠️ CRITICAL**: Verify prompt has NO TEXT/LABELS/NUMBERS before generating
        - Extract the generation prompt from spec file's Image Generation Strategy section
        - **VALIDATE PROMPT**: Ensure it describes visual shapes/forms ONLY (no text references)
        - Run: tsx generate-image.ts '[PROMPT FROM SPEC]' --ratio 16:9
        - Verify image is saved to public/generated-images/
        - **INSPECT IMAGE**: Confirm generated image contains NO TEXT before proceeding
        - Note the timestamp for integration

     d. **Implement the slide component**:
        - **CHECK IF FILE EXISTS**: First check if components/slides/[module]/[slide-id].tsx already exists
        - **UPDATE/OVERWRITE file**: components/slides/[module]/[slide-id].tsx
          - **If file exists**: Use Write tool to COMPLETELY REWRITE it with new implementation (replacing old version)
          - **If file is new**: Use Write tool to create it fresh
          - **NEVER**: Skip existing files, create duplicates, or leave old versions
        - **CRITICAL**: Always use Write tool (NOT Edit) for complete slide rewrites to ensure clean replacement
        - Use EXACTLY this export pattern for lazy loading:
          ```typescript
          export default function SlideName() {
            return (
              // slide content
            )
          }
          ```
        - Integrate background image with proper opacity (10-20%) and mix-blend-multiply
        - Follow the selected pattern's structure from components_inspiration
        - Apply design system (DESIGN_AESTHETICS.md): typography, colors, animations
        - Ensure accessibility (WCAG AA contrast, focus states, semantic HTML)
        - Add entrance animations (badge → title → subtitle → content with delays)

     e. **Update spec file checkboxes**:
        - Mark slide task as completed: - [ ] → - [x]
        - Fill in Status field: 'Completed'
        - Add Comments with brief implementation notes (include which skill was used)

  4. **Ensure visual consistency across your group**:
     - All slides in your group must use the same color palette
     - All slides must use consistent typography hierarchy
     - All slides must use same animation timing patterns
     - Background images should have similar opacity levels

  5. **Final deliverables**:
     - [Number] complete slide components in components/slides/[module]/
     - Background images generated and saved
     - Spec file updated with completed checkboxes and comments
     - Brief summary of your implementation approach

  **Design System Compliance Checklist** (verify before marking complete):
  - [ ] **NO TEXT IN BACKGROUND IMAGES**: All background images are purely visual (no text/labels/numbers)
  - [ ] Typography: font-bebas (titles), font-syne (emphasis), font-manrope (body)
  - [ ] Colors: Electric orange #FF4D00, neon cyan #00D9FF, charcoal #0A0A0A
  - [ ] Component variants used correctly (Badge: glow/gradient, Card: layered/glow, Button: brutal/glow)
  - [ ] Animations: Orchestrated entrance (badge → title → subtitle → content with 200ms delays)
  - [ ] Spacing: p-8 lg:p-16 (sections), gap-4/6/8 (grids)
  - [ ] Accessibility: WCAG AA contrast, focus states, semantic HTML, ARIA labels
  - [ ] Responsive: Works at all breakpoints (mobile, tablet, desktop)

  **Pattern Implementation Notes**:
  - If pattern uses canvas/p5.js: Consider using algorithmic-art skill for complex animations
  - If pattern uses React/shadcn: Use artifacts-builder skill OR implement directly
  - Always preserve the pattern's core structure and interactive elements
  - Customize content while maintaining the pattern's UX benefits

  **Critical**: Use default exports (export default function) NOT named exports for all slide components to work with lazy loading system.
"
```

**Example: Spawning 3 Agent Groups**

Send a SINGLE message with 3 Task tool calls:

```
Task 1:
  subagent_type: "slide-generator"
  description: "Implement Introduction & Context slides"
  prompt: [detailed prompt for Group 1 as above]

Task 2:
  subagent_type: "slide-generator"
  description: "Implement Framework Overview slides"
  prompt: [detailed prompt for Group 2 as above]

Task 3:
  subagent_type: "slide-generator"
  description: "Implement Deep Dive slides"
  prompt: [detailed prompt for Group 3 as above]
```

**Visual Confirmation to User:**

Before spawning agents, show the user:
```markdown
## Implementation Plan

I will spawn **[N] slide-generator agents in parallel** to implement [Total] slides:

### Group 1: [Name] - slide-generator-1
- **Slides**: [slide IDs]
- **Patterns**: [pattern names]
- **Status**: ⏳ Queued

### Group 2: [Name] - slide-generator-2
- **Slides**: [slide IDs]
- **Patterns**: [pattern names]
- **Status**: ⏳ Queued

### Group 3: [Name] - slide-generator-3
- **Slides**: [slide IDs]
- **Patterns**: [pattern names]
- **Status**: ⏳ Queued

**Spawning all agents now in a single parallel batch...**
```

### Step 3: Monitor Agent Progress

After spawning all agents (in your NEXT message after tool results return):

1. Agents work independently and autonomously
2. Each agent updates the spec file as they complete slides
3. Wait for ALL agents to complete before proceeding
4. Track completion by watching for agent completion messages

**While agents are working, inform the user:**
```
Agents are working in parallel. Each agent will:
1. Read design documentation
2. Generate background images for their slides
3. Implement slide components
4. Update spec file checkboxes
5. Report completion

I'll proceed with validation once all agents complete.
```

### Step 4: Aggregate Results & Validation

Once ALL agents have completed:

#### 4a. Review Spec File

Read the spec file to verify:
- All slide checkboxes are marked complete: - [x]
- All Status fields are filled: 'Completed'
- Comments are added with implementation notes

#### 4b. Verify Files Exist

Check that all slide component files were created:
```bash
# List all slide files
ls -la components/slides/[module]/
```

Verify:
- Correct number of files (matches number of slides in spec)
- Correct filenames (match slide IDs from spec)
- Files have content (not empty)

#### 4c. Check Visual Consistency

Read 2-3 slide files from different agent groups and verify:
- Consistent typography classes (font-bebas, font-syne, font-manrope)
- Consistent color usage (electric orange, neon cyan, charcoal)
- Consistent animation patterns
- Background images integrated with proper opacity

#### 4d. Run Validation Commands

Execute validation commands to check for errors:

```bash
# Check TypeScript compilation
pnpm run build

# Check code quality
pnpm run lint
```

If errors occur:
- Read the error messages carefully
- Fix TypeScript errors in slide files
- Re-run validation commands
- Report errors to user if cannot auto-fix

#### 4e. Register Slides (MANDATORY)

**CRITICAL**: ALL newly created slides MUST be registered in BOTH configuration files:

**1. Register in `config/slides.ts`:**
```typescript
'[module]-[number]-[name]': {
  slide: {
    id: '[module]-[number]-[name]',
    component: () => import('@/components/slides/[module]/[filename]'),
    module: '[module]',
    title: '[Slide Title]',
    tags: ['tag1', 'tag2'],
    duration: 2,
    notes: '[Brief description]'
  },
  loader: () => import('@/components/slides/[module]/[filename]')
},
```

**2. Add to `app/page.tsx` defaultSlides array:**
```typescript
const defaultSlides = [
  // ... existing slides
  '[module]-[number]-[name]',  // Add your new slide here in correct order
]
```

**Validation:**
- Read `config/slides.ts` to verify all new slides are registered
- Read `app/page.tsx` to verify defaultSlides contains all new slide IDs
- If ANY slide is missing from EITHER file, add it now

**IMPORTANT**: Slides will NOT appear in the presentation until registered in BOTH files. Do NOT mark implementation as complete until registration is verified.

#### 4e-auto. Auto-Replace Template Slides (AUTOMATIC)

**This step runs AUTOMATICALLY after all agents complete. Do not skip.**

When registering new slides, you MUST also remove M1 template slides and replace them with the newly created slides:

**1. Identify M1 template slides to remove:**
```
Template slides (ALWAYS remove these):
- m1-01-title
- m1-02-interactive
- m1-03-feedback
```

**2. Parse spec file for new slide IDs:**
```
From the ## Agent Groups section, extract:
- All slide IDs that were implemented
- Module ID (e.g., f1, f2, m2)
- Slide titles and metadata
```

**3. Update `config/slides.ts` - Remove templates, add new:**

Read `config/slides.ts` and:
- **REMOVE** the M1 template section entirely (entries for m1-01-title, m1-02-interactive, m1-03-feedback)
- **ADD** new slide entries for all implemented slides
- **PRESERVE** all other modules (F1, etc.)

Example - Remove this entire block:
```typescript
// ============================================
// M1: EXAMPLE MODULE (Template Slides)
// ============================================
'm1-01-title': { ... },
'm1-02-interactive': { ... },
'm1-03-feedback': { ... },
```

**4. Update `app/page.tsx` defaultSlides array:**

Read `app/page.tsx` and:
- **REMOVE** M1 template slide IDs from the array:
  - `'m1-01-title'`
  - `'m1-02-interactive'`
  - `'m1-03-feedback'`
- **ADD** all newly implemented slide IDs at the BEGINNING of the array
- **PRESERVE** FeedbackProvider wrapper and existing F1 slides

Example transformation:
```typescript
// BEFORE:
const defaultSlides = [
  'm1-01-title',
  'm1-02-interactive',
  'm1-03-feedback',
  'f1-01-campaign-brief-title',
  ...
]

// AFTER (e.g., new f2 module implemented):
const defaultSlides = [
  'f2-01-title',
  'f2-02-context',
  'f2-03-interactive',
  'f1-01-campaign-brief-title',
  ...
]
```

**5. Verify the replacement:**
- Read updated `config/slides.ts` - confirm M1 entries removed, new entries added
- Read updated `app/page.tsx` - confirm M1 IDs removed, new IDs added
- Run `pnpm run build` to verify all imports resolve correctly

**6. Report the replacement:**
```markdown
### Template Slides Replaced
- **Removed**: m1-01-title, m1-02-interactive, m1-03-feedback
- **Added**: [list all newly created slide IDs]
```

**NOTE**: This replacement is MANDATORY. Template slides must be removed to prevent confusion and ensure the presentation shows only the actual implemented content.

#### 4f. Generate Completion Summary

Create a detailed summary for the user:

```markdown
## Implementation Complete ✓

Successfully implemented **[N] slides** across **[M] agent groups** in parallel.

### Summary by Group

#### Group 1: [Name] ✅
- **Slides**: [slide IDs]
- **Patterns Used**: [pattern names]
- **Background Images**: [X] generated
- **Status**: Complete

#### Group 2: [Name] ✅
- **Slides**: [slide IDs]
- **Patterns Used**: [pattern names]
- **Background Images**: [X] generated
- **Status**: Complete

#### Group 3: [Name] ✅
- **Slides**: [slide IDs]
- **Patterns Used**: [pattern names]
- **Background Images**: [X] generated
- **Status**: Complete

### Files Created

- `components/slides/[module]/[slide-ids].tsx` - [N] slide components
- `public/generated-images/gemini-[timestamps]-1.png` - [N] background images

### Template Slides Replaced

✅ **Removed** M1 template slides:
- m1-01-title
- m1-02-interactive
- m1-03-feedback

✅ **Added** new slides:
- [list all newly created slide IDs]

### Validation Results

✅ TypeScript compilation: Success
✅ Linting: Success
✅ Design system compliance: Verified
✅ Visual consistency: Verified across groups

### Next Steps

1. **Visual Inspection**: Run `pnpm run dev` and navigate to the slides
2. **Test Interactivity**: Click toggles, hover cards, test animations
3. **Test Responsiveness**: Check mobile, tablet, desktop views
4. **Test Accessibility**: Verify keyboard navigation and focus states

### Files Changed

[Output from `git diff --stat`]
```

### Step 5: Final Integration Testing (Optional)

If requested by the user or if integration seems needed:

```bash
# Start dev server (if not running)
pnpm run dev

# Inform user to navigate to slides and test
```

Provide testing checklist:
```markdown
## Testing Checklist

### Visual Inspection
- [ ] All slides render without errors
- [ ] Background images display at correct opacity
- [ ] Typography hierarchy is correct (Bebas titles, Manrope body)
- [ ] Colors match design system (orange, cyan, charcoal)
- [ ] Animations play smoothly (entrance sequences)

### Interactivity Testing
- [ ] Toggle buttons switch content correctly
- [ ] Hover effects work on cards
- [ ] Click-to-expand reveals details
- [ ] Canvas animations run smoothly (if applicable)
- [ ] Keyboard navigation works (Tab, Enter, Space)

### Responsiveness Testing
- [ ] Mobile view (< 768px): Single column layouts work
- [ ] Tablet view (768-1024px): Responsive grids adapt
- [ ] Desktop view (> 1024px): Full layouts display correctly

### Accessibility Testing
- [ ] Color contrast meets WCAG AA (use browser DevTools)
- [ ] Focus states visible on all interactive elements
- [ ] Screen reader compatible (semantic HTML)
- [ ] Icons have text labels or ARIA labels
```

## Error Handling

### Issue: Spec file doesn't have Agent Groups section

**Response:**
```
❌ Error: The spec file does not contain an "Agent Groups" section.

This command requires a properly formatted spec file created by `/plan_slide_redesign`.

Please run:
  /plan_slide_redesign [your slide requirements]

Then run this command again with the generated spec file.
```

### Issue: Agent fails during implementation

**Response:**
1. Review the agent's error message
2. Check if spec file has sufficient detail for that group
3. Verify pattern references are correct
4. Check if design documentation files exist
5. If fixable, provide guidance to agent or fix directly
6. If not fixable, spawn a replacement agent for that group only

**Replacement Agent Workflow:**
```
The agent for Group [N] encountered an issue: [error description]

Spawning a replacement agent with clarified instructions...

[Use Task tool to spawn single replacement agent with improved prompt]
```

### Issue: TypeScript errors after implementation

**Response:**
1. Read error messages from `pnpm run build`
2. Identify which slide files have errors
3. Fix common issues:
   - Missing imports
   - Incorrect prop types
   - Missing default export
   - Syntax errors
4. Re-run `pnpm run build`
5. Report fixes to user

### Issue: Visual inconsistency across groups

**Response:**
1. Review slides from different groups
2. Identify inconsistencies (colors, typography, animations)
3. Determine which group followed design system correctly
4. Update other groups to match
5. Document the corrections

## Usage Examples

### Example 1: Implement 6-Slide Module (3 Agent Groups)

**User**: `/implement_slide_redesign specs/f1-slides-1-6-redesign.md`

**Your Workflow**:
1. Read spec file, find 3 agent groups:
   - Group 1: Slides 1-2
   - Group 2: Slides 3-4
   - Group 3: Slides 5-6
2. Show implementation plan to user
3. Spawn 3 slide-generator agents IN PARALLEL (single message with 3 Task calls)
4. Wait for all agents to complete
5. Verify spec file checkboxes are checked
6. Run validation commands
7. Generate completion summary
8. Show git diff --stat

### Example 2: Implement 10-Slide Module (5 Agent Groups)

**User**: `/implement_slide_redesign specs/s2-architecture-10-slides.md`

**Your Workflow**:
1. Read spec file, find 5 agent groups (2 slides each)
2. Show implementation plan
3. Spawn 5 slide-generator agents IN PARALLEL (single message with 5 Task calls)
4. Wait for completion
5. Validate all 10 slides
6. Register slides in config if needed
7. Generate completion summary

### Example 3: Implement with Error Recovery

**User**: `/implement_slide_redesign specs/f2-redesign.md`

**Your Workflow**:
1. Spawn 4 agents in parallel
2. Agent 2 fails with error: "Pattern not found"
3. Review spec, identify issue: incorrect pattern path
4. Spawn replacement agent for Group 2 only with corrected path
5. Wait for replacement to complete
6. Continue with validation
7. Report the issue and resolution to user

## Important Notes

- **ALWAYS spawn ALL agents in a SINGLE message** - This is critical for parallel execution
- **Max 2 slides per agent** - Ensures quality and prevents overwhelm
- **Agents are autonomous** - Provide complete instructions so they can work independently
- **Spec file is source of truth** - All agents reference the same spec file for consistency
- **Design system compliance is mandatory** - Validate that all slides follow DESIGN_AESTHETICS.md
- **Default exports required** - All slide components must use default exports for lazy loading

## Progress Tracking Template

Use this to track parallel implementation (show to user after spawning):

```markdown
## Implementation Progress

### Group 1: [Name] - slide-generator-1
- **Status**: ⏳ In Progress | ✅ Complete | ❌ Failed
- **Slides**: [slide IDs]
- **Completed**: [X/Y slides]

### Group 2: [Name] - slide-generator-2
- **Status**: ⏳ In Progress | ✅ Complete | ❌ Failed
- **Slides**: [slide IDs]
- **Completed**: [X/Y slides]

### Group 3: [Name] - slide-generator-3
- **Status**: ⏳ In Progress | ✅ Complete | ❌ Failed
- **Slides**: [slide IDs]
- **Completed**: [X/Y slides]

### Group 4: [Name] - slide-generator-4
- **Status**: ⏳ In Progress | ✅ Complete | ❌ Failed
- **Slides**: [slide IDs]
- **Completed**: [X/Y slides]

**Overall**: [X/Y total slides] complete
```

## Validation Checklist

Before marking implementation as complete, verify:

**File Verification:**
- [ ] All slide component files exist in correct locations
- [ ] All background images exist in public/generated-images/
- [ ] File count matches number of slides in spec

**Design System Compliance:**
- [ ] **NO TEXT IN BACKGROUND IMAGES**: All background images contain only shapes/forms (zero text/labels/numbers)
- [ ] Typography uses correct font classes (Bebas, Syne, Manrope)
- [ ] Colors match design system (electric orange, neon cyan, charcoal)
- [ ] Animations follow orchestrated entrance pattern
- [ ] Component variants used correctly (Badge, Card, Button)
- [ ] Spacing consistent across all slides
- [ ] Background images at 10-20% opacity with mix-blend-multiply

**Code Quality:**
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] All slide components use default exports (not named exports)
- [ ] No console errors in browser

**Accessibility:**
- [ ] WCAG AA color contrast met
- [ ] Focus states visible on interactive elements
- [ ] Semantic HTML used (section, h1-h6, button, nav)
- [ ] Icons have text labels or ARIA labels
- [ ] Keyboard navigation works

**Functionality:**
- [ ] Slide navigation works (next/previous buttons)
- [ ] Interactive elements respond correctly (toggles, hover, click)
- [ ] Canvas animations run smoothly (if applicable)
- [ ] Responsive layouts work at all breakpoints

**Spec File Updates:**
- [ ] All slide checkboxes marked complete in spec file
- [ ] Status fields filled with 'Completed'
- [ ] Comments added with implementation notes

**Multi-Slide Feedback Flow (if applicable):**
- [ ] Final summary slide implemented as LAST slide in flow
- [ ] Summary slide displays all collected choices with label lookup maps
- [ ] Submit button with `variant="glow"` included
- [ ] "Feedback was remembered" toast shows on submission
- [ ] Auto-advance to next slide after 1.5-2 second delay
- [ ] Enter key handler for keyboard accessibility
- [ ] FeedbackProvider wraps all pages loading feedback slides

**Slide Registration & Template Replacement (MANDATORY):**
- [ ] M1 template slides removed from `config/slides.ts` (m1-01-title, m1-02-interactive, m1-03-feedback)
- [ ] M1 template slide IDs removed from `app/page.tsx` defaultSlides array
- [ ] All new slides registered in `config/slides.ts` with correct metadata
- [ ] All new slide IDs added to `app/page.tsx` defaultSlides array
- [ ] Slide ordering verified (new slides appear in correct sequence)
- [ ] Build passes after template replacement (`pnpm run build`)

## Spec File Path
$ARGUMENTS
