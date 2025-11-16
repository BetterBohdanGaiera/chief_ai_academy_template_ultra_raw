# Implement the following plan
Follow the `Instructions` to implement the `Plan` then `Report` the completed work.

## Instructions
- Read the plan, think hard about the plan and implement the plan.
- IMPORTANT: This command expects the plan to be a file path to a spec file (e.g., `specs/feature-name.md`).
- **ESSENTIAL:** Before implementing ANY slide or visual feature, reference `ai_docs/DESIGN_AESTHETICS.md` for the complete design system (typography hierarchy, color palette, animation patterns, component variants, accessibility standards). This is the authoritative source for all design decisions.
- **ESSENTIAL:** Reference `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` for layout patterns, typography scales, color usage, spacing systems, component patterns, and quality checklists.
- As you complete each phase and task in the Implementation Plan and Step by Step Tasks sections:
  1. Update the spec file by checking off the completed checkbox (- [ ] → - [x])
  2. Fill in the Status field with completion status (e.g., "Completed", "In Progress", "Partially Done")
  3. Fill in the Comments field with brief notes about what was done, any issues encountered, or important decisions made
- Update the spec file progressively after completing each phase/task, not just at the end.
- Use the Edit tool to update checkboxes and fields in the spec file as you progress.
- **CRITICAL:** For slide implementations, ALWAYS generate BACKGROUND images using `ai_docs/IMAGE_GENERATION_GUIDE.md` and the `generate-image.ts` script. Every slide should have a background image at appropriate opacity (10-20%) to enhance visual appeal. Content can be fully interactive without additional images.

## Slide Implementation Guidelines
IMPORTANT: If implementing presentation slides, follow these technical and design guidelines:

### Component Creation Pattern
1. Create slide component: `components/slide-N-title.tsx` (where N is the slide number)
2. Follow the standard slide structure:
   ```tsx
   "use client" // If interactive elements are used

   export function SlideNTitle() {
     return (
       <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
         {/* Content hierarchy: Badge + Title + Subtitle + Content Grid + Key Insights */}
       </section>
     )
   }
   ```
3. Import into `app/page.tsx` and add to slide array for navigation
4. Update slide navigation count if adding new slides

### Image Generation & Integration
CRITICAL: Every slide should have AI-generated BACKGROUND images at appropriate opacity (10-20%). Content can be fully interactive without additional images. Follow ai_docs/IMAGE_GENERATION_GUIDE.md specifications.

**Generation Workflow:**
1. **Review the Image Generation Strategy** from the spec file
2. **Generate background image** using the `generate-image.ts` script:
   ```bash
   tsx generate-image.ts "[PROMPT FROM SPEC]" --ratio 16:9
   ```
3. **Verify style consistency** before integrating:
   - [ ] Colors match design system (orange tones, charcoal, white/gray)
   - [ ] Handwritten illustration style (not photorealistic)
   - [ ] Subject aligns with slide context
   - [ ] Composition is clean and uncluttered
4. **Integrate as background layer** with appropriate opacity:
   ```tsx
   <div className="absolute inset-0 z-0">
     <img
       src="/generated-images/gemini-[timestamp]-1.png"
       alt=""
       className="w-full h-full object-cover opacity-15 mix-blend-multiply"
       aria-hidden="true"
     />
   </div>
   ```
5. **Test in browser** to ensure background enhances (not distracts from) content

**Background Image Checklist (Complete for EACH slide):**
- [ ] Background image generated using 16:9 aspect ratio
- [ ] Opacity set to 10-20% for subtle enhancement
- [ ] mix-blend-multiply applied for proper integration
- [ ] Image saved to `public/generated-images/` directory
- [ ] aria-hidden="true" and empty alt text for decorative background
- [ ] Style is consistent with other presentation backgrounds
- [ ] Background complements interactive content without overpowering

**Background Image Generation Command:**
```bash
# Background image (16:9, rendered at 10-20% opacity)
tsx generate-image.ts "A professional handwritten illustration of [SUBJECT fitting slide context], featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. [SCENE DETAILS]. Editorial style, clean lines, minimal shading." --ratio 16:9
```

**Optional Content Images** (if slide needs additional visuals beyond background):
```bash
# Card/icon image (1:1)
tsx generate-image.ts "A professional handwritten illustration of [SUBJECT], featuring warm orange tones, charcoal outlines, light gray background. [DETAILS]. Editorial style, minimal composition." --ratio 1:1
```

### Visual Appeal Verification Checklist
Before marking a slide task as complete, verify against `ai_docs/DESIGN_AESTHETICS.md` and `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md`:

**Design System Compliance** (from DESIGN_AESTHETICS.md):
- [ ] Typography uses correct font classes (font-bebas for titles, font-syne for emphasis, font-manrope for body)
- [ ] Color palette matches design system (electric orange #FF4D00, charcoal #0A0A0A, muted gray #A0A0A0)
- [ ] Component variants are used correctly (Badge: glow/gradient, Card: layered/glow, Button: brutal/glow)
- [ ] Atmospheric backgrounds include layered effects (GradientMesh + GeometricPattern + GrainOverlay)
- [ ] Animations follow orchestrated entrance pattern (badge → title → subtitle → content with delays)
- [ ] Shadow effects use custom utilities (shadow-glow, shadow-layered, shadow-brutal)
- [ ] Accessibility standards met (WCAG AA contrast, focus states, reduced motion support)

**Layout & Composition**:
- [ ] Spacing is consistent (p-8 lg:p-16 minimum for sections, gap-4/6/8 for grids)
- [ ] Responsive grid layouts work at all breakpoints (grid-cols-1 md:grid-cols-2 lg:grid-cols-5)
- [ ] Visual balance: content is centered and well-distributed
- [ ] Icons from lucide-react enhance (not clutter) the message
- [ ] Layout matches one of the documented patterns (Section 6 of design guidelines)
- [ ] Component usage follows established standards (Section 5 of design guidelines)
- [ ] Quality checklist completed (Section 14 of design guidelines)

### Interactivity & Animation Verification
For slides with interactive elements, verify:
- [ ] Entrance animations are smooth (fade-in, slide-up using tw-animate-css or transition-all)
- [ ] Interactive reveals work correctly (pop-ups appear on correct trigger: click/hover/scroll)
- [ ] Hover effects provide clear feedback (shadow, scale, color changes)
- [ ] Transitions are smooth between states (transition-all with appropriate duration)
- [ ] Client component directive ("use client") is added when using useState/useEffect
- [ ] Interactive elements have clear visual affordances (buttons look clickable, cards lift on hover)

### Data Visualization Implementation
When implementing charts or data displays:
- [ ] Use Recharts for charts (BarChart, LineChart, PieChart, AreaChart, etc.)
- [ ] Configure responsive container: ResponsiveContainer width="100%" height={400}
- [ ] Use chart colors from design system (primary orange, chart-1 through chart-5)
- [ ] Add proper labels, tooltips, and legends for clarity
- [ ] Tables use proper semantic HTML (thead, tbody, th, td)
- [ ] Data is formatted appropriately (numbers, percentages, currencies)

### Accessibility Testing
For every slide, verify:
- [ ] Color contrast meets WCAG AA (4.5:1 for body, 3:1 for large text)
- [ ] All interactive elements have visible focus states (ring utilities: focus:ring-2)
- [ ] Icons have text labels or aria-label attributes
- [ ] Keyboard navigation works (Tab, Enter, Space for interactions)
- [ ] Semantic HTML is used (section, h1-h6, button, nav, etc.)
- [ ] Motion respects prefers-reduced-motion (use motion-safe: utilities if needed)

### Registration & Integration Steps
After creating a slide component:
1. Import in `app/page.tsx`: `import { SlideNTitle } from '@/components/slide-N-title'`
2. Add to slides array: `<SlideNTitle />`
3. Navigation updates automatically based on array length
4. Test slide transitions (chevron buttons and dot indicators)
5. Verify smooth scrolling with snap points works correctly

## Parallel Agent Spawning for Multi-Slide Modules

**IMPORTANT:** If the spec file contains an `## Agent Groups` section (indicating 4+ slides organized for parallel implementation), use this workflow to spawn slide-generator agents in parallel for maximum efficiency.

### Prerequisites Check
Before spawning agents, verify:
- [ ] Spec file contains `## Agent Groups` section with defined groups
- [ ] Each group specifies: slides, theme, agent identifier
- [ ] All required ai_docs are referenced correctly
- [ ] Image generation strategy is defined

### Parallel Spawning Workflow

#### Step 1: Parse Agent Groups from Spec
Read the spec file and extract all agent group definitions. For each group, note:
- Group identifier (e.g., "Group 1: Introduction")
- Slide IDs to implement (e.g., "01-hero, 02-definition, 03-why")
- Theme/topic
- Agent identifier (e.g., "slide-generator-1")

NOTE: Skill selection (algorithmic-art vs artifacts-builder) is determined by slide-generator agents during implementation, NOT specified in advance.

#### Step 2: Spawn slide-generator Agents in Parallel
**CRITICAL:** You MUST spawn all agents in a SINGLE message using multiple Task tool calls. Do NOT spawn agents sequentially.

For EACH agent group, create a Task tool call with:
```
Task tool parameters:
- subagent_type: "slide-generator"
- description: "Implement [Group Name] slides"
- prompt: "
  You are assigned to implement [Group Name] for the [Module Name] module.

  **Your slides:** [list slide IDs]
  **Theme:** [group theme]

  **Spec file:** specs/[filename].md

  **Instructions:**
  1. Read the spec file completely, especially the Agent Groups section for your assigned group
  2. Read all required ai_docs (INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, etc.)
  3. For each slide in your group:
     - Check ai_docs/components_inspiration/ for inspirational patterns
     - Generate background images using: tsx generate-image.ts '[prompt]' --ratio 16:9
     - Choose appropriate skill (algorithmic-art vs artifacts-builder) based on slide requirements
     - Implement slide with complete code
     - Update spec file checkboxes as you complete each slide
  4. Ensure visual consistency across all slides in your group (same colors, typography, animations)
  5. Update the spec file with:
     - Check off completed slide checkboxes (- [ ] → - [x])
     - Fill in Status fields ('Completed')
     - Add Comments with implementation notes

  **Deliverables:**
  - [Number] complete slide components in components/slides/[module]/
  - Updated spec file with all your group's checkboxes marked complete
  - Brief summary of implementation approach for your group
"
```

**Example for spawning 4 agent groups:**
```
Send a SINGLE message with 4 Task tool calls:
1. Task(slide-generator) for Group 1: Introduction (3 slides)
2. Task(slide-generator) for Group 2: Technical Architecture (4 slides)
3. Task(slide-generator) for Group 3: Use Cases (3 slides)
4. Task(slide-generator) for Group 4: Summary (2 slides)
```

#### Step 3: Monitor Agent Progress
After spawning all agents:
- Agents work independently on their assigned slide groups
- Each agent updates the spec file as they complete slides
- Monitor for completion messages from all agents

#### Step 4: Aggregate Results & Validation
Once all agents have completed:
1. **Review spec file**: Verify all slide checkboxes are marked complete
2. **Check consistency**: Ensure visual consistency across all slides
3. **Validate files**: Confirm all slide files exist in correct locations
4. **Test integration**: Import all slides into `app/page.tsx`
5. **Run validation commands**:
   ```bash
   pnpm run build  # Verify no TypeScript errors
   pnpm run lint   # Verify code quality
   ```
6. **Visual inspection**: Test slide navigation and interactions in browser

### Progress Tracking Template
Use this template to track parallel implementation:

```markdown
## Implementation Progress

### Group 1: [Name] - slide-generator-1
- **Status:** ⏳ In Progress | ✅ Complete
- **Slides:** [slide IDs]
- **Completed:** [X/Y slides]

### Group 2: [Name] - slide-generator-2
- **Status:** ⏳ In Progress | ✅ Complete
- **Slides:** [slide IDs]
- **Completed:** [X/Y slides]

### Group 3: [Name] - slide-generator-3
- **Status:** ⏳ In Progress | ✅ Complete
- **Slides:** [slide IDs]
- **Completed:** [X/Y slides]

### Group 4: [Name] - slide-generator-4
- **Status:** ⏳ In Progress | ✅ Complete
- **Slides:** [slide IDs]
- **Completed:** [X/Y slides]

**Overall:** [X/Y total slides] complete
```

### Error Handling
If an agent encounters issues:
- Review the agent's error message
- Check if the spec file has sufficient detail
- Verify all ai_docs references are correct
- If needed, spawn a replacement agent with clarified instructions

### Final Integration Steps
After all agents complete:
1. Import ALL slides in correct order in `app/page.tsx`
2. Test complete module navigation (all slides in sequence)
3. Verify visual consistency across the entire module
4. Update spec file with final completion status
5. Run full validation suite

## Plan
$ARGUMENTS

## Report
- Summarize the work you've just done in a concise bullet point list.
- Report the files and total lines changed with `git diff --stat`
- Note any checkboxes that were checked off and any Status/Comments added to the spec file