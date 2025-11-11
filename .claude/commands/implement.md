# Implement the following plan
Follow the `Instructions` to implement the `Plan` then `Report` the completed work.

## Instructions
- Read the plan, think hard about the plan and implement the plan.
- IMPORTANT: This command expects the plan to be a file path to a spec file (e.g., `specs/feature-name.md`).
- As you complete each phase and task in the Implementation Plan and Step by Step Tasks sections:
  1. Update the spec file by checking off the completed checkbox (- [ ] → - [x])
  2. Fill in the Status field with completion status (e.g., "Completed", "In Progress", "Partially Done")
  3. Fill in the Comments field with brief notes about what was done, any issues encountered, or important decisions made
- Update the spec file progressively after completing each phase/task, not just at the end.
- Use the Edit tool to update checkboxes and fields in the spec file as you progress.

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

### Visual Appeal Verification Checklist
Before marking a slide task as complete, verify:
- [ ] Color usage follows design system (primary orange, status colors, or neutral grays from globals.css)
- [ ] Typography hierarchy is clear (text-7xl titles, text-4xl headers, text-lg/xl body)
- [ ] Spacing is consistent (p-8 lg:p-16 for sections, gap-4/6/8 for grids)
- [ ] Responsive grid layouts work at all breakpoints (grid-cols-1 md:grid-cols-2 lg:grid-cols-5)
- [ ] Visual balance: content is centered and well-distributed
- [ ] Icons from lucide-react enhance (not clutter) the message

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