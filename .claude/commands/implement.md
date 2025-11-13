# Implement the following plan
Follow the `Instructions` to implement the `Plan` then `Report` the completed work.

## Instructions
- Read the plan, think hard about the plan and implement the plan.
- IMPORTANT: This command expects the plan to be a file path to a spec file (e.g., `specs/feature-name.md`).
- **ESSENTIAL:** Before implementing ANY slide or visual feature, reference `ai_docs/DESIGN_AESTHETICS.md` for the complete design system (typography hierarchy, color palette, animation patterns, component variants, accessibility standards). This is the authoritative source for all design decisions.
- **ESSENTIAL:** Reference `specs/presentation-design-guidelines.md` for layout patterns, typography scales, color usage, spacing systems, component patterns, and quality checklists.
- As you complete each phase and task in the Implementation Plan and Step by Step Tasks sections:
  1. Update the spec file by checking off the completed checkbox (- [ ] → - [x])
  2. Fill in the Status field with completion status (e.g., "Completed", "In Progress", "Partially Done")
  3. Fill in the Comments field with brief notes about what was done, any issues encountered, or important decisions made
- Update the spec file progressively after completing each phase/task, not just at the end.
- Use the Edit tool to update checkboxes and fields in the spec file as you progress.
- **CRITICAL:** For slide implementations, ALWAYS generate AI images using `IMAGE_GENERATION_GUIDE.md` and the `generate-image.ts` script. Every slide must have visually supportive images in the handwritten illustration style with orange color palette.

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
CRITICAL: Every slide MUST include AI-generated images following the IMAGE_GENERATION_GUIDE.md specifications.

**Generation Workflow:**
1. **Review the Image Generation Strategy** from the spec file
2. **Generate each image** using the `generate-image.ts` script:
   ```bash
   tsx generate-image.ts "[PROMPT FROM SPEC]" --ratio [ASPECT_RATIO] --output public/generated-images/
   ```
3. **Verify style consistency** before integrating:
   - [ ] Colors match design system (orange tones, charcoal, white/gray)
   - [ ] Handwritten illustration style (not photorealistic)
   - [ ] Subject aligns with slide narrative
   - [ ] Composition is clean and uncluttered
4. **Integrate into slide component** using appropriate pattern from IMAGE_GENERATION_GUIDE.md:
   ```tsx
   <img
     src="public/generated-images/gemini-[timestamp]-1.png"
     alt="[Descriptive alt text]"
     className="w-full h-auto rounded-xl shadow-lg"
   />
   ```
5. **Test in browser** to ensure images enhance (not distract from) the message

**Image Generation Checklist (Complete for EACH slide):**
- [ ] All images generated using base prompt template with orange color palette
- [ ] Aspect ratios match planned layout (16:9 hero, 1:1 cards, 3:2 balanced)
- [ ] Images saved to `public/generated-images/` directory
- [ ] Alt text is descriptive and meaningful
- [ ] Images integrated with responsive sizing and shadows
- [ ] Style is consistent with other presentation images
- [ ] Images complement (don't overpower) text content

**Common Image Generation Commands:**
```bash
# Hero/full-width image (16:9)
tsx generate-image.ts "A professional handwritten illustration of [SUBJECT], featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. [SCENE DETAILS]. Editorial style, clean lines, minimal shading." --ratio 16:9

# Card/icon image (1:1)
tsx generate-image.ts "A professional handwritten illustration of [SUBJECT], featuring warm orange tones, charcoal outlines, light gray background. [DETAILS]. Editorial style, minimal composition." --ratio 1:1

# Balanced scene (3:2)
tsx generate-image.ts "A professional handwritten illustration of [SUBJECT], featuring warm orange tones, charcoal outlines. [SCENE DETAILS]. Editorial style, professional aesthetic." --ratio 3:2
```

### Visual Appeal Verification Checklist
Before marking a slide task as complete, verify against `ai_docs/DESIGN_AESTHETICS.md` and `specs/presentation-design-guidelines.md`:

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

## Plan
$ARGUMENTS

## Report
- Summarize the work you've just done in a concise bullet point list.
- Report the files and total lines changed with `git diff --stat`
- Note any checkboxes that were checked off and any Status/Comments added to the spec file