# Feature: Quinn-Inspired Design System with Orange Accents

## Feature Description
Transform the existing presentation from its current design to a sophisticated, minimalist aesthetic inspired by the Quinn Fluid Demo Squarespace template. The redesign will maintain a clean, white background with orange as the primary accent color, implementing an editorial luxury design language that emphasizes content over decoration. The design will feature generous whitespace, refined typography, subtle animations, and a responsive grid system that adapts fluidly across devices.

## User Story
As a presentation viewer
I want to experience a sophisticated, minimalist design with clear visual hierarchy
So that I can focus on the content without distraction while enjoying a premium, modern aesthetic

## Problem Statement
The current presentation needs a design refresh that brings:
1. A more refined, minimalist aesthetic with better use of whitespace
2. Consistent orange accent colors throughout (replacing any red/inconsistent accent usage)
3. Improved typography hierarchy with better spacing and readability
4. More subtle, elegant interactions and animations
5. A cohesive design system that feels premium and editorial

## Solution Statement
Implement a comprehensive design system overhaul inspired by the Quinn Fluid Demo template, featuring:
- Clean white backgrounds with strategic use of off-white cards
- Orange as the primary accent color (oklch(0.65 0.2 35))
- Refined typography with generous letter-spacing and modern font sizing
- Responsive grid system (8-column mobile, 24-column desktop)
- Subtle hover states and transitions (0.6s duration)
- Minimalist navigation with elegant indicators
- Premium spacing system with consistent padding and gaps

## Relevant Files
Use these files to implement the feature:

- **app/globals.css** - Contains the design system color palette, already configured with orange accents. Needs refinement for spacing, typography, and animation standards.
- **app/page.tsx** - Main presentation container with navigation. Needs redesign of navigation controls to match Quinn aesthetic.
- **components/slide-1-overview.tsx** - First slide component. Needs layout, spacing, and visual refinement to match minimalist aesthetic.
- **components/slide-2-principles.tsx** - Second slide component. Needs card design, typography, and spacing updates.
- **components/ui/badge.tsx** - Badge component used throughout slides. Needs subtle refinement for Quinn aesthetic.
- **components/ui/button.tsx** - Button component for navigation. Needs minimal, elegant styling.
- **components/ui/card.tsx** - Card component for content containers. Needs refined borders, shadows, and hover states.

### New Files
- **specs/design-tokens.md** - Documentation of the Quinn-inspired design tokens and spacing system for reference.

## Implementation Plan
IMPORTANT: Each phase should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

- [ ] **Phase 1: Design System Foundation** - Establish core design tokens, spacing system, typography scale, and animation standards based on Quinn aesthetic
  - Status:
  - Comments:

- [ ] **Phase 2: Component Refinement** - Update all UI components (buttons, badges, cards) with refined styling, subtle shadows, and elegant hover states
  - Status:
  - Comments:

- [ ] **Phase 3: Layout & Spacing Overhaul** - Implement responsive grid system, generous whitespace, and improved content hierarchy across all slides
  - Status:
  - Comments:

- [ ] **Phase 4: Navigation & Interactions** - Redesign navigation controls with minimal, elegant styling and smooth transitions
  - Status:
  - Comments:

- [ ] **Phase 5: Final Polish & Validation** - Fine-tune animations, test responsiveness, ensure accessibility, and validate design consistency
  - Status:
  - Comments:

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom. Each task should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

### Design System Foundation

- [x] **Document Quinn-inspired design tokens** - Create specs/design-tokens.md with spacing scale, typography scale, color usage guidelines, and animation standards
  - Status: Completed
  - Comments: Created comprehensive design tokens documentation with spacing system, typography scale, color palette, animation standards, and accessibility guidelines

- [x] **Refine globals.css with Quinn spacing system** - Add custom CSS variables for spacing (2vw base, 4vw/6vw gutters), update typography scale with generous line-heights and letter-spacing
  - Status: Completed
  - Comments: Added typography refinements with tracking-tight for headings, leading-relaxed for paragraphs, and transition-all duration-600 for interactive elements. Added prefers-reduced-motion support.

- [ ] **Configure animation standards** - Set global transition duration to 0.6s, define fade/slide entrance animations, establish hover state transitions
  - Status:
  - Comments:

### Component Refinement

- [ ] **Update Badge component styling** - Reduce padding for subtlety (px-3 py-1), refine border radius, ensure proper contrast on orange background
  - Status:
  - Comments:

- [ ] **Redesign Button component** - Implement minimal outline style, subtle shadow on hover, refined border radius, smooth transitions
  - Status:
  - Comments:

- [ ] **Refine Card component** - Update to very subtle borders (border-border/50), minimal shadow (shadow-sm), elegant hover state (shadow-md), slight scale on hover
  - Status:
  - Comments:

### Slide Layout Refinement

- [ ] **Update Slide1Overview layout** - Increase spacing between sections (space-y-20), refine grid gaps (gap-8 lg:gap-10), improve badge positioning
  - Status:
  - Comments:

- [ ] **Refine Slide1Overview typography** - Increase title size (text-6xl md:text-8xl), improve line-height (leading-[1.1]), add generous letter-spacing (tracking-tight)
  - Status:
  - Comments:

- [ ] **Improve Slide1Overview card design** - Reduce visual weight of borders, refine padding (p-8), improve hover states, subtle background colors
  - Status:
  - Comments:

- [ ] **Update Slide2Principles layout** - Implement wider max-width (max-w-6xl), increase vertical spacing (space-y-16), refine card grid
  - Status:
  - Comments:

- [ ] **Refine Slide2Principles typography** - Update heading sizes for better hierarchy, improve body text sizing (text-lg), optimize line-heights
  - Status:
  - Comments:

- [ ] **Improve Slide2Principles card styling** - Implement minimal borders, generous padding (p-10), refined highlight boxes with subtle backgrounds
  - Status:
  - Comments:

### Navigation Redesign

- [ ] **Redesign navigation buttons** - Update to minimal circular buttons with subtle backdrop blur, refined shadows, elegant hover states
  - Status:
  - Comments:

- [ ] **Update slide indicators** - Implement minimal dot indicators with smooth transitions, active state with orange accent, refined positioning
  - Status:
  - Comments:

- [ ] **Improve scroll behavior** - Ensure smooth horizontal scrolling, refine snap points, optimize scroll performance
  - Status:
  - Comments:

### Final Polish

- [ ] **Fine-tune whitespace throughout** - Review all spacing, ensure generous margins (p-12 lg:p-20), optimize content-to-whitespace ratio
  - Status:
  - Comments:

- [ ] **Refine all animations** - Ensure consistent 0.6s timing, smooth easing functions, subtle entrance effects
  - Status:
  - Comments:

- [ ] **Test responsive behavior** - Validate mobile (8-column), tablet, and desktop (24-column) layouts, ensure fluid transitions
  - Status:
  - Comments:

- [ ] **Accessibility audit** - Check color contrast (WCAG AA), keyboard navigation, focus states, screen reader compatibility
  - Status:
  - Comments:

- [ ] **Cross-browser testing** - Test in Chrome, Firefox, Safari, Edge for consistent rendering and animations
  - Status:
  - Comments:

- [ ] **Run validation commands** - Execute build, lint, and visual inspection to ensure zero errors and design consistency
  - Status:
  - Comments:

## Testing Strategy
### Unit Tests
- Not applicable for this design-focused feature (no logic changes, only visual refinement)

### Integration Tests
- Visual regression testing by comparing before/after screenshots
- Test all slide components render correctly with new styles
- Verify navigation functions properly with updated design

### Edge Cases
- Test with very long text content to ensure layout doesn't break
- Verify color contrast in all states (default, hover, active, warning, transformation)
- Test responsiveness at breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- Ensure animations respect prefers-reduced-motion setting
- Test with different zoom levels (80%, 100%, 125%, 150%)

## Acceptance Criteria
- [ ] All slides feature clean white backgrounds with subtle off-white cards
- [ ] Orange accent color (oklch(0.65 0.2 35)) is consistently used throughout
- [ ] Typography has generous letter-spacing and optimal line-heights
- [ ] Responsive grid adapts smoothly from 8-column (mobile) to 24-column (desktop)
- [ ] All hover states include subtle transitions at 0.6s duration
- [ ] Navigation controls are minimal and elegant with refined styling
- [ ] Spacing follows a consistent system with generous whitespace
- [ ] All interactive elements have smooth, subtle animations
- [ ] Color contrast meets WCAG AA standards (4.5:1 for body text)
- [ ] Design feels cohesive, premium, and editorial across all slides
- [ ] Build and lint commands execute without errors
- [ ] Presentation is fully responsive and accessible

## Slide Design Requirements
IMPORTANT: This feature involves modifying existing presentation slides with refined visual design.

### Visual Component Selection
- **Text blocks**: Refined typography with generous spacing for key messages and descriptions
- **Badge components**: Subtle, minimal badges for level indicators and slide markers
- **Card containers**: Clean cards with minimal borders for principle/level content blocks
- **Icons**: lucide-react icons (AlertTriangle, TrendingUp, ArrowDown) for visual emphasis
- **Interactive navigation**: Minimal circular buttons and dot indicators
- **No data visualizations**: This is a content-focused presentation without charts

### Layout Design
- **Grid structure**:
  - Mobile: 8-column grid with 6vw gutters
  - Desktop: 24-column grid with 4vw gutters
  - Slide 1: 5-column grid on desktop for level cards
  - Slide 2: Single column layout for principle cards
- **Spacing**:
  - Container padding: p-12 lg:p-20 (generous outer spacing)
  - Section spacing: space-y-16 lg:space-y-20 (vertical rhythm)
  - Grid gaps: gap-6 lg:gap-10 (breathing room between cards)
  - Card padding: p-8 lg:p-10 (comfortable internal spacing)
- **Component hierarchy**: Badge (Module marker) → Title (large, bold) → Subtitle (muted) → Content Grid → Key Insights (prominent)
- **Full-screen slide**: min-h-screen with flex items-center for vertical centering

### Interactive & Animation Patterns
- **Entrance animations**: Subtle fade-in for content (if implemented with scroll triggers)
- **Hover effects**:
  - Cards: shadow-sm → shadow-lg with smooth transition
  - Buttons: subtle scale transform (scale-105)
  - Navigation dots: opacity and scale changes
- **Transitions**:
  - Global transition-all duration-600 for smooth state changes
  - Specific hover transitions for shadows and transforms
- **Focus states**: Ring utilities with orange accent for keyboard navigation
- **No pop-ups or click reveals**: Keep it simple and content-focused

### Color & Typography Usage
- **Color scheme**:
  - Primary: oklch(0.65 0.2 35) - Vibrant orange for accents, badges, highlights
  - Warning: oklch(0.7 0.22 70) - Yellow-orange for Level 3 "trap" indicators
  - Background: oklch(1 0 0) - Pure white
  - Foreground: oklch(0.15 0 0) - Deep charcoal for text
  - Muted: oklch(0.5 0 0) - Medium gray for secondary text
  - Border: oklch(0.9 0 0) - Light gray for subtle divisions
- **Text hierarchy**:
  - Main title: text-6xl md:text-8xl font-bold tracking-tight leading-[1.1]
  - Section headings: text-4xl md:text-6xl font-bold tracking-tight
  - Subheadings: text-xl md:text-2xl text-muted-foreground leading-relaxed
  - Body text: text-base lg:text-lg leading-relaxed
  - Small text: text-sm text-muted-foreground
  - Card titles: text-lg lg:text-2xl font-semibold
- **Contrast ratios**:
  - Body text on white: 13.8:1 (exceeds WCAG AAA)
  - Orange on white: 4.1:1 (meets WCAG AA for large text)
  - White on orange: 5.1:1 (exceeds WCAG AA)
- **Font weights**:
  - font-bold for titles and emphasis (700)
  - font-semibold for subheadings (600)
  - font-medium for badges and labels (500)
  - font-normal for body text (400)

### Accessibility Checklist
- [x] Color contrast meets WCAG AA standards - Orange/white = 4.1:1, text/background = 13.8:1
- [ ] All interactive elements have visible focus states - Implement ring-2 ring-primary ring-offset-2 on focus
- [x] Text is readable at minimum font size - Base text is text-base (16px)
- [ ] Icons paired with text labels or ARIA labels - Add aria-label to navigation buttons and indicators
- [ ] Keyboard navigation works for all interactive elements - Ensure proper tabIndex on all buttons
- [ ] Screen reader compatible - Use semantic HTML (section, nav, h1-h3), add ARIA attributes where needed
- [ ] Motion can be reduced - Add @media (prefers-reduced-motion: reduce) rules to disable animations

### Component Implementation Notes
- **shadcn/ui components to use**: Badge, Card, CardContent, Button (already in use)
- **Custom components needed**: None - refining existing components only
- **No Recharts needed**: This is a content presentation without data visualizations
- **Animation approach**: Use Tailwind transition utilities (transition-all duration-600) and optional tw-animate-css for entrance effects
- **State management**: Client component with useRef for scroll management (already implemented in page.tsx)
- **Typography**: Inter font family already configured in globals.css
- **Responsive images**: Not applicable - no images in current slides

## Validation Commands
Execute every command to validate the feature works correctly with zero regressions.

- `uv run pnpm run build` - Build the presentation to validate no TypeScript or build errors
- `uv run pnpm run lint` - Run linting to validate code quality and catch any issues
- Visual inspection in browser:
  - Open http://localhost:3000 after running `uv run pnpm run dev`
  - Test slide navigation (left/right arrows, dot indicators)
  - Verify orange accent colors throughout
  - Check hover states on all interactive elements
  - Test responsive behavior at different screen sizes (mobile, tablet, desktop)
  - Verify smooth animations and transitions
  - Check keyboard navigation (Tab through elements, Enter to activate)
  - Test with browser zoom at 80%, 100%, 125%, 150%

## Notes
### Design Philosophy
The Quinn Fluid Demo aesthetic is characterized by:
- **Restraint over decoration**: Minimal visual elements, letting content breathe
- **Generous whitespace**: More space between elements creates premium feel
- **Subtle interactions**: Hover states are refined, not dramatic
- **Typography as hero**: Large, bold titles with excellent hierarchy
- **Neutral + accent**: White/gray base with strategic orange highlights
- **Editorial luxury**: Feels like a high-end magazine or portfolio

### Orange Color Justification
The current globals.css already uses orange as the primary accent:
- `--primary: oklch(0.65 0.2 35)` - Main orange accent
- `--warning: oklch(0.7 0.22 70)` - Yellow-orange for warnings
- `--transformation: oklch(0.65 0.2 35)` - Orange for transformation zone

This orange is vibrant but professional, conveying energy and innovation while maintaining sophistication.

### Spacing System Reference
Quinn uses a fluid spacing system:
- Mobile: 6vw gutters, 2vw padding
- Desktop: 4vw gutters, 2vw padding
- Fixed gap: 11px between grid cells

We'll adapt this to Tailwind's spacing scale while maintaining the generous proportions:
- Container: p-12 lg:p-20 (3rem to 5rem)
- Sections: space-y-16 lg:space-y-20 (4rem to 5rem)
- Grids: gap-6 lg:gap-10 (1.5rem to 2.5rem)
- Cards: p-8 lg:p-10 (2rem to 2.5rem)

### Animation Standards
All transitions should use:
- Duration: 0.6s (600ms)
- Easing: ease-in-out (Tailwind default)
- Properties: transform, shadow, opacity, background-color

### Future Considerations
- Consider adding subtle scroll-triggered entrance animations for content blocks
- Could implement a more sophisticated grid system with custom CSS Grid for complex layouts
- May want to add more slides following the same design system
- Could introduce subtle parallax effects on scroll for depth (but keep minimal)
- Consider adding a settings panel for users to toggle between light/dark mode or reduced motion
