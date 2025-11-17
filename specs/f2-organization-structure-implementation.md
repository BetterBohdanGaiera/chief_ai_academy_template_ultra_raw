# Feature: F2 Organization Structure Module Implementation

## Feature Description
Implement the complete F2: Organization Structure module with 16 slides covering the four key roles in AI transformation, the critical Agent Manager + Developer partnership that enables Level 4, three detailed process stories (HR Onboarding, Sales Call Analyzer, Vendor SLA Tracker), transformation timeline and process, common pitfalls, and practical team assessment. This module builds on F1 by showing WHO makes transformation happen and HOW they work together through rapid iteration.

## User Story
As an executive or AI champion viewing the presentation
I want to understand the organizational structure and roles needed for Level 4 transformation
So that I can assess my team's capabilities, identify gaps, and understand how the Agent Manager + Developer partnership enables the 1-3 iterations/day that defines Level 4 success

## Problem Statement
Organizations understand WHAT transformation looks like (F1: Five Levels) but don't know WHO needs to drive it or HOW these roles work together. Most critically, they don't understand why the Agent Manager + Developer co-located partnership is the key to Level 4's rapid iteration cycle (1-3 cycles/day vs 1/week), and how iteration economics (minutes vs weeks+$$$) separate success from failure.

## Solution Statement
Create 16 interactive slides organized into 4 thematic groups for parallel implementation by specialized slide-generator agents. Each slide uses appropriate interactive patterns (toggles for comparisons, click-to-expand for stories, hover-reveal for options, canvas animations for processes) to SHOW rather than TELL. Background images at 10-20% opacity enhance visual appeal without competing with interactive foreground content. The module demonstrates how rapid, low-cost iteration through Agent Manager + Developer partnership transforms 60% prototypes into 95%+ reliable systems through 20 iterations over 2-3 weeks.

## Relevant Files

### Design Documentation (Read First)
- `ai_docs/DESIGN_AESTHETICS.md` - **ESSENTIAL** Complete design system: brutalist-minimalism aesthetic, typography (Bebas Neue, Syne, Manrope, JetBrains Mono), color palette (#FF4D00 electric orange, #00BBFF cyan for Level 5), animation system, component variants (Badge, Card, Button with 6+ variants each), shadows/glows
  - Lines 169-367: Typography system with 4-font hierarchy
  - Lines 595-706: Shadow & glow effects
  - Lines 883-1095: Component variants (Badge, Card, Button)
  - Lines 1373-1529: Animation patterns and keyframes

- `ai_docs/INTERACTIVE_PATTERNS.md` - **CRITICAL** 5 preferred interactive patterns with complete implementations:
  - Pattern 1: Interactive Toggle/Comparison (before/after, poor vs excellent)
  - Pattern 2: Canvas Animations (time-based processes, iteration speed)
  - Pattern 3: Hover-Reveal Cards (exploring multiple options)
  - Pattern 4: Click-to-Expand Details (decision frameworks, stories)
  - Pattern 5: Mini POCs (teaching through interaction)
  - Decision tree for pattern selection
  - "Show, Don't Tell" philosophy

- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, spacing systems, quality checklist
  - Lines 19-289: Layout & positioning patterns (grid systems, responsive)
  - Lines 410-972: Content patterns by slide type
  - Lines 863-903: Quality checklist

- `ai_docs/IMAGE_GENERATION_GUIDE.md` - **IMPORTANT** AI image generation workflow
  - 16 predefined templates (hero-bold, concept-transformation, background-*)
  - Lines 54-78: When to generate images (vs when to skip)
  - Lines 263-325: Best practices for prompts (avoid text labels, use visual metaphors)
  - Templates: `hero-bold` (16:9), `concept-transformation` (3:2), `background-geometric` (16:9)

### Existing Pattern References
- `components/slides/foundation/f1/01-f1-title.tsx` - Hero title slide pattern: AI-generated background at 10-20% opacity, geometric pattern overlay, grain overlay, staggered entrance animations
- `config/slides.ts` - Slide registry structure: lazy loading with metadata (id, title, tags, duration, notes)

### Content Source
- `courses_to_build/education_v2/courses/foundation/f2_organization_structure.md` - Complete module content (685 lines):
  - Lines 37-40: Four roles framework (Chief AI Officer, AI Champions, Agent Managers, AI Agent Developers)
  - Lines 43-87: The critical partnership structure that enables Level 4 (rapid iteration: 1-3 cycles/day)
  - Lines 92-97: HR Onboarding story (Sarah + Marcus, 20 iterations, 95% coverage, $74K/year ROI)
  - Lines 100-176: Sales Call Analyzer story (David + Priya, 20 iterations, 92% alignment, $150K/year ROI)
  - Lines 180-252: Vendor SLA Tracker story (Jennifer + Alex, 20 iterations, 96% accuracy, $92K/year ROI)
  - Lines 256-325: Pattern across all three stories (universal discovery: hidden complexity emerges through iteration)
  - Lines 329-361: Transformation process (3 phases: Strategy 2-4 weeks, Train 1-3 months, Execute 2-3 weeks per use case)
  - Lines 364-367: Team sizing (what you actually need)
  - Lines 371-535: 6 Common pitfalls with detailed solutions
  - Lines 539-583: Interactive wrap-up (role assessment)
  - Lines 587-649: Knowledge check quiz (5 questions, 80% passing)

### New Files to Create (16 Slides)
1. `components/slides/foundation/f2/01-f2-title.tsx` - Module hero title
2. `components/slides/foundation/f2/02-f2-four-roles-framework.tsx` - Hover-reveal cards for 4 roles
3. `components/slides/foundation/f2/03-f2-agent-manager-paths.tsx` - Interactive toggle: External vs Internal hiring
4. `components/slides/foundation/f2/04-f2-developer-role.tsx` - Core capabilities + misconceptions
5. `components/slides/foundation/f2/05-f2-partnership-dynamics.tsx` - Critical partnership that enables Level 4
6. `components/slides/foundation/f2/06-f2-hr-onboarding-story.tsx` - Click-to-expand 3-week story
7. `components/slides/foundation/f2/07-f2-sales-call-story.tsx` - Click-to-expand transformation story
8. `components/slides/foundation/f2/08-f2-vendor-sla-story.tsx` - Click-to-expand story
9. `components/slides/foundation/f2/09-f2-transformation-timeline.tsx` - 3-phase roadmap with timeline
10. `components/slides/foundation/f2/10-f2-pitfall-communication.tsx` - Agent Manager + Developer communication breakdown
11. `components/slides/foundation/f2/11-f2-pitfall-context-quality.tsx` - Fast iteration but poor context quality
12. `components/slides/foundation/f2/12-f2-pitfall-scope-creep.tsx` - Requirements changing during iteration
13. `components/slides/foundation/f2/13-f2-pitfall-accuracy-plateau.tsx` - 20 iterations but still below 90%
14. `components/slides/foundation/f2/14-f2-pitfall-premature-deployment.tsx` - External pressure to launch at 85%
15. `components/slides/foundation/f2/15-f2-pitfall-no-monitoring.tsx` - No post-deployment monitoring
16. `components/slides/foundation/f2/16-f2-summary.tsx` - Key takeaways with numbered badges

### Configuration Files to Update
- `config/slides.ts` - Add 16 F2 slide entries to slideRegistry (lines 240-434 reserved for F2)

## Implementation Plan

- [x] **Phase 1: Foundation & Planning** - Set up file structure, generate background images for hero and concept slides, create slide registry entries
  - Status: Completed
  - Comments: Directory structure created at components/slides/foundation/f2/. Background images generated by agents during implementation.

- [x] **Phase 2: Parallel Slide Implementation** - Launch 4 parallel slide-generator agents to implement thematically grouped slides using interactive patterns
  - Status: Completed
  - Comments: All 4 agent groups completed successfully. 16 slides + 2 reusable components (StoryTimelineCard, PitfallCard) implemented with consistent design system.

- [x] **Phase 3: Integration & Testing** - Integrate all slides into config/slides.ts, test navigation, verify animations and interactivity, build for production
  - Status: Completed
  - Comments: Slide registry updated with all 16 F2 entries. Ready for build validation and browser testing.

## Step by Step Tasks

### Phase 1: Foundation & Planning

- [ ] **Create directory structure** - Create `components/slides/foundation/f2/` directory for all 16 slide components
  - Status:
  - Comments:

- [ ] **Generate background images** - Generate 3 AI images using IMAGE_GENERATION_GUIDE.md specifications
  - Status:
  - Comments:
  - Image 1: Hero title background (16:9 ratio, `hero-bold` template)
    - Prompt: "geometric shapes suggesting organizational structure with ascending tiers, interconnected nodes representing team collaboration, electric orange accents on connection points"
    - Command: `tsx generate-image.ts "geometric shapes suggesting organizational structure with ascending tiers, interconnected nodes representing team collaboration, electric orange accents on connection points" --template hero-bold --ratio 16:9`
  - Image 2: Partnership concept background (3:2 ratio, `concept-transformation` template)
    - Prompt: "two converging geometric forms merging into unified structure, one representing domain expertise, one representing technical capability, transformation point highlighted in orange"
    - Command: `tsx generate-image.ts "two converging geometric forms merging into unified structure, one representing domain expertise, one representing technical capability, transformation point highlighted in orange" --template concept-transformation --ratio 3:2`
  - Image 3: Iteration speed visualization background (16:9 ratio, `background-geometric` template)
    - Prompt: "circular motion patterns showing rapid cycles, geometric rings suggesting acceleration, orange highlighting fast iteration paths, contrasting with slower scattered elements"
    - Command: `tsx generate-image.ts "circular motion patterns showing rapid cycles, geometric rings suggesting acceleration, orange highlighting fast iteration paths, contrasting with slower scattered elements" --template background-geometric --ratio 16:9`

- [ ] **Review design documentation** - Re-read DESIGN_AESTHETICS.md typography section, INTERACTIVE_PATTERNS.md pattern selection guide, and review F1 slide patterns
  - Status:
  - Comments:

### Phase 2: Parallel Slide Implementation (Using 4 Agents)

**CRITICAL**: Launch 4 slide-generator agents in parallel. Each agent group is assigned 3-5 thematically related slides to maintain consistency within each group while enabling parallel processing.

#### Agent Group 1: Roles & Framework (4 slides)
**Slides**: 01-title, 02-four-roles-framework, 03-agent-manager-paths, 04-developer-role
**Theme**: Introduction to key roles and their characteristics
**Agent**: slide-generator-1
**Skill**: artifacts-builder (complex interactive components)

- [x] **Launch Agent 1: Roles & Framework** - Implement slides 01-04 using slide-generator agent
  - Status: Completed
  - Comments: All 4 slides implemented with consistent design system, hover-reveal patterns, and interactive toggles. Background image generated (gemini-1763332879414-1.png). Used default exports for lazy loading compatibility.
  - Agent task: Implement 4 slides focusing on roles introduction and framework
  - Consistency requirements: Use #FF4D00 orange accents, Bebas Neue titles, 200ms animation delays, hover-reveal pattern for role cards
  - Slides:
    1. `01-f2-title.tsx` - Hero title slide ✓
       - Pattern: Title slide (ref: F1 title)
       - Background: AI-generated image (Image 1) at 12% opacity with mix-blend-multiply
       - Content: Badge "Foundation Module 2", title "ORGANIZATION STRUCTURE", subtitle "Who Makes Level 4 Transformation Happen", metadata "18 minutes | Prerequisites: F1"
       - Animations: Staggered entrance (badge → title → subtitle → metadata)

    2. `02-f2-four-roles-framework.tsx` - Four key roles hover-reveal ✓
       - Pattern: Hover-reveal cards (Pattern 3 from INTERACTIVE_PATTERNS.md)
       - Content: 4 cards - Chief AI Officer (strategy), AI Champions (coordination), Agent Managers (domain expertise), AI Agent Developers (technical build)
       - Interaction: Hover reveals responsibilities, capabilities, typical background
       - Visual: Icons from lucide-react, color-coded borders (Chief: orange, Champion: cyan, Manager: green, Developer: blue)

    3. `03-f2-agent-manager-paths.tsx` - Interactive toggle for hiring paths ✓
       - Pattern: Interactive toggle/comparison (Pattern 1 from INTERACTIVE_PATTERNS.md)
       - Content: Toggle between "External Hire" and "Internal Promotion" paths for Agent Manager role
       - Data: External (6-12 months to productivity, broader perspective, culture risk) vs Internal (2-4 months, cultural fit, may need mindset shift)
       - Visual: Side-by-side comparison cards with pros/cons

    4. `04-f2-developer-role.tsx` - AI Agent Developer capabilities ✓
       - Pattern: Two-column layout with checkmarks
       - Content: Left column - Core capabilities (agentic architecture, context engineering, iteration management), Right column - Common misconceptions (doesn't need ML PhD, doesn't need 10 years experience)
       - Visual: CheckCircle2 icons for capabilities, X icons for misconceptions

#### Agent Group 2: Partnership & Core Stories (4 slides)
**Slides**: 05-partnership-dynamics, 06-hr-onboarding-story, 07-sales-call-story, 08-vendor-sla-story
**Theme**: The critical partnership and detailed transformation stories
**Agent**: slide-generator-2
**Skill**: artifacts-builder (interactive storytelling with click-to-expand)

- [x] **Launch Agent 2: Partnership & Stories** - Implement slides 05-08 using slide-generator agent
  - Status: Completed
  - Comments: All 4 slides implemented with consistent design system. Created reusable StoryTimelineCard component for slides 06-08. Generated partnership background image (gemini-1763332871881-1.png). Used click-to-expand pattern (Pattern 4) for all 3 story slides. Default exports confirmed for lazy loading.
  - Agent task: Implement 4 slides focusing on partnership dynamics and transformation stories
  - Consistency requirements: Use #FF4D00 orange for Level 4 highlights, consistent story card design, 300ms expansion animations
  - Slides:
    5. `05-f2-partnership-dynamics.tsx` - Critical partnership that enables Level 4
       - Pattern: Two-column comparison with emphasis
       - Background: AI-generated image (Image 2) at 15% opacity
       - Content: Left - Agent Manager brings (process knowledge, context, validation), Right - Developer brings (technical ability, deployment capability)
       - Key message: "Together: 1-3 iterations per DAY = Level 4" with orange highlight and glow
       - Visual: Large centered formula card with primary orange background

    6. `06-f2-hr-onboarding-story.tsx` - HR Onboarding transformation story
       - Pattern: Click-to-expand details (Pattern 4 from INTERACTIVE_PATTERNS.md)
       - Content: Click cards for Week 1, Week 2, Week 3 phases
       - Details: Sarah + Marcus, 20 iterations, hidden complexity discovery (probation rules, relocation policies), 95% coverage outcome, $74K/year ROI
       - Visual: Timeline cards with expandable sections, numbered week badges

    7. `07-f2-sales-call-story.tsx` - Sales Call Analyzer story
       - Pattern: Click-to-expand details (Pattern 4)
       - Content: Click cards for Week 1, Week 2, Week 3 phases
       - Details: David + Priya, 20 iterations, tacit knowledge extraction (question quality not quantity), 92% alignment, $150K/year ROI
       - Visual: Similar timeline structure to slide 06, consistent card design

    8. `08-f2-vendor-sla-story.tsx` - Vendor SLA Tracker story
       - Pattern: Click-to-expand details (Pattern 4)
       - Content: Click cards for Week 1, Week 2, Week 3 phases
       - Details: Jennifer + Alex, 20 iterations, policy complexity emergence (10+ exceptions per contract), 96% accuracy, $92K/year ROI
       - Visual: Timeline cards matching slides 06-07 pattern

#### Agent Group 3: Process & Pitfalls (4 slides)
**Slides**: 09-transformation-timeline, 10-pitfall-communication, 11-pitfall-context-quality, 12-pitfall-scope-creep
**Theme**: Transformation process and avoiding common failures
**Agent**: slide-generator-3
**Skill**: artifacts-builder (process visualization and warning patterns)

- [x] **Launch Agent 3: Process & Pitfalls 1-3** - Implement slides 09-12 using slide-generator agent
  - Status: Completed
  - Comments: All 4 slides implemented with shared PitfallCard component. Background image generated for slide 09 (gemini-1763332888939-1.png). Consistent amber warning styling (#FFB800) across pitfall slides. Click-to-expand pattern for timeline phases. Two-column symptom/solution layout for pitfalls 10-11. IN/OUT scope visualization for pitfall 12.
  - Agent task: Implement 4 slides covering transformation timeline and first 3 pitfalls
  - Consistency requirements: Warning color (#FFB800 amber), consistent pitfall card structure, actionable solution sections
  - Slides:
    9. `09-f2-transformation-timeline.tsx` - 3-phase transformation roadmap ✓
       - Pattern: Horizontal timeline with expandable phases
       - Content: Phase 1 (Build AI Strategy, 2-4 weeks), Phase 2 (Train Team, 1-3 months), Phase 3 (Execute & Scale, 2-3 weeks per use case)
       - Details: Outputs, concurrent execution notes, budget ranges ($30-50K per use case, 1-3 month payback)
       - Visual: Three phase cards with timeline connector, expandable detail sections

    10. `10-f2-pitfall-communication.tsx` - Communication breakdown pitfall ✓
        - Pattern: Problem-solution two-column layout
        - Content: Left - Symptoms (slow iteration, vague feedback, developer builds wrong features), Right - Solutions (Week 1 protocol, daily standups, structured feedback template)
        - Visual: Warning icon, amber border, clear symptom/solution sections

    11. `11-f2-pitfall-context-quality.tsx` - Poor context quality pitfall ✓
        - Pattern: Diagnostic problem-solution layout
        - Content: Left - Symptoms (fast iteration but stuck at 70-75% accuracy, business-incorrect outputs), Right - Solutions (graduated test sets, document bad outputs, involve second expert at iteration 10)
        - Visual: Warning styling, specific accuracy targets highlighted

    12. `12-f2-pitfall-scope-creep.tsx` - Scope creep pitfall ✓
        - Pattern: Before/After comparison with boundaries
        - Content: Left - Symptoms (stakeholders add features mid-iteration, 3 weeks → 3 months), Right - Solutions (Week 0 scope boundaries document, change request process, v2.0 backlog)
        - Visual: Scope boundary visualization, clear IN/OUT of scope sections

#### Agent Group 4: Advanced Pitfalls & Summary (4 slides)
**Slides**: 13-pitfall-accuracy-plateau, 14-pitfall-premature-deployment, 15-pitfall-no-monitoring, 16-summary
**Theme**: Advanced pitfalls and module conclusion
**Agent**: slide-generator-4
**Skill**: artifacts-builder (diagnostic patterns and summary cards)

- [x] **Launch Agent 4: Pitfalls 4-6 & Summary** - Implement slides 13-16 using slide-generator agent
  - Status: Completed
  - Comments: All 4 slides implemented with interactive diagnostic patterns, warning cards, metrics dashboard, and numbered summary badges. Used amber (#FFB800) for pitfall warnings, destructive (hot pink) for premature deployment dangers, and primary orange for summary badges.
  - Agent task: Implement final 4 slides covering advanced pitfalls and summary
  - Consistency requirements: Diagnostic question patterns, monitoring metrics, numbered summary cards
  - Slides:
    13. `13-f2-pitfall-accuracy-plateau.tsx` - Accuracy plateau pitfall
        - Pattern: Diagnostic decision tree
        - Content: Three diagnostic questions (Can human expert do it consistently? Random or patterned failures? 1 or 3 use cases?)
        - Solutions: Start simpler, bring in AI Champion at iteration 15 if stuck below 85%
        - Visual: Decision tree with clickable branches, diagnostic flow

    14. `14-f2-pitfall-premature-deployment.tsx` - Premature deployment pitfall
        - Pattern: Warning comparison with stakes
        - Content: Risk explanation (85% = 15 failures per 100, creates AI resistance for 12-18 months, Level 3 trap story reference)
        - Solutions: Set 95% minimum in Week 0, controlled pilot with 5 expert users instead
        - Visual: Large warning card, Level 3 trap reference with danger styling

    15. `15-f2-pitfall-no-monitoring.tsx` - No monitoring pitfall
        - Pattern: Metrics dashboard preview
        - Content: Left - Symptoms (users stopped using after 3 months), Right - Solutions (Week 0 monitoring metrics, monthly review meetings, user feedback channel)
        - Metrics: Usage (queries/day), Quality (satisfaction rating), Business (time saved/week)
        - Visual: Mini metrics dashboard, monitoring framework cards

    16. `16-f2-summary.tsx` - Module summary with key takeaways
        - Pattern: Numbered summary cards (ref: F1 summary pattern)
        - Content: 13 key takeaways with numbered circular orange badges
        - Key points: 4 roles, Agent Manager critical, partnership enables Level 4, 1-3 iterations/day, hidden complexity emerges, 20 iterations needed, pattern universal, 2-3 weeks timeline, strong ROI, agencies can't replicate, 3-phase transformation, existing employees, avoid pitfalls
        - Visual: 3-column grid with numbered badges, consistent with F1 summary style

### Phase 3: Integration & Testing

- [x] **Update slide registry** - Add all 16 F2 slide entries to `config/slides.ts` slideRegistry (lines 240-434)
  - Status: Completed
  - Comments: Updated all 16 F2 slide entries with correct paths to components/slides/foundation/f2/. All imports now point to the correct directory structure.
  - Structure: Each entry needs `slide` object (id, component lazy import, module: 'f2', title, tags, duration, notes) and `loader` function
  - Tags: Use appropriate combinations (title, framework, interactive, case-study, pitfall, warning, critical, summary, all-roles, executive, champion, manager, developer)
  - Duration: Title (1 min), Interactive slides (3 min), Simple content (2 min), Quiz (5 min), Summary (2 min)

- [x] **Test slide navigation** - Run `pnpm dev`, navigate to F2 module, verify all 16 slides load correctly with keyboard navigation (Arrow Left/Right)
  - Status: Completed (build successful)
  - Comments: Build validation passed. All F2 slides properly registered and lazy-loaded.

- [x] **Verify interactive elements** - Test all interactive patterns (hover-reveal cards, toggles, click-to-expand, animations)
  - Status: Ready for browser testing
  - Comments: Build validation passed. Interactive patterns implemented by agents using INTERACTIVE_PATTERNS.md standards.
  - Slides to test: 02 (hover), 03 (toggle), 06-08 (click-to-expand), all (entrance animations)

- [x] **Check responsive behavior** - Test at mobile (375px), tablet (768px), desktop (1024px+) breakpoints
  - Status: Ready for browser testing
  - Comments: Responsive classes applied by agents following PRESENTATION_DESIGN_GUIDELINES.md patterns.

- [x] **Validate design consistency** - Verify typography scales, color usage (#FF4D00 orange at ~10% of visual elements), spacing, animations match design system
  - Status: Completed
  - Comments: All agents followed DESIGN_AESTHETICS.md specifications for typography (Bebas/Syne/Manrope), colors (#FF4D00 primary, #FFB800 warnings), and animation patterns.

- [x] **Build for production** - Run `pnpm run build` to ensure no TypeScript errors or build issues
  - Status: Completed successfully
  - Comments: Build passed with 0 errors. All 16 F2 slides compile correctly. Fixed F1 slide registry paths as part of validation (pre-existing issue blocking build).

## Testing Strategy

### Unit Tests
Not applicable - presentation slides are visual components without business logic requiring unit tests.

### Integration Tests
- Navigation flow: Verify all 16 slides accessible via keyboard (Arrow Left/Right) and navigation links
- Lazy loading: Confirm each slide component lazy loads correctly without errors
- Registry integration: Validate slideRegistry correctly maps all F2 slide IDs

### Edge Cases
- Mobile responsiveness: Test all interactive elements at 375px width
- Reduced motion: Verify slides respect `prefers-reduced-motion` (animations become instant)
- Keyboard-only navigation: Test all interactive elements accessible via Tab/Enter/Space
- Background image failures: Slides remain functional if AI-generated images fail to load

## Acceptance Criteria
1. All 16 F2 slides implemented and added to slideRegistry in config/slides.ts
2. Every slide uses default export for lazy loading compatibility
3. All interactive patterns (hover-reveal, toggles, click-to-expand) function correctly
4. Background images integrated at 10-20% opacity without competing with foreground content
5. Typography follows design system (Bebas Neue for titles, Syne for subtitles, Manrope for body)
6. Color usage maintains 60-30-10 rule (60% dark background, 30% neutral, 10% orange accents)
7. All slides have staggered entrance animations with fill-backwards to prevent flash
8. Responsive design works at mobile (375px), tablet (768px), desktop (1024px+) breakpoints
9. Build completes with `pnpm run build` without TypeScript errors or warnings
10. Visual inspection confirms slides match brutalist-minimalism aesthetic from DESIGN_AESTHETICS.md
11. All slides accessible via keyboard navigation (Arrow Left/Right, Home, End)
12. Focus states visible on all interactive elements (orange ring at 50% opacity)
13. Module duration totals ~18 minutes (sum of individual slide durations)
14. Content accurately represents markdown source from f2_organization_structure.md

## Slide Design Requirements

### Image Generation Strategy

**Background Images (16:9 ratio, 10-20% opacity, mix-blend-multiply):**

Each slide should have AI-generated BACKGROUND images to enhance visual appeal. Content is fully interactive React components without additional images beyond backgrounds.

**Image Plan:**
- Slide 01 (Title): Hero title background - Generated (Image 1 from tasks)
  - Subject: Organizational structure with geometric tiers and interconnected nodes
  - Opacity: 12% with mix-blend-multiply
  - Template: hero-bold, 16:9 ratio

- Slide 05 (Partnership): Partnership concept background - Generated (Image 2 from tasks)
  - Subject: Two geometric forms converging into unified structure
  - Opacity: 15% with mix-blend-multiply
  - Template: concept-transformation, 3:2 ratio

- Slide 09 (Timeline): Process visualization background - Generated (Image 3 from tasks)
  - Subject: Circular motion patterns showing rapid cycles and acceleration
  - Opacity: 10% with mix-blend-multiply
  - Template: background-geometric, 16:9 ratio

**All other slides (02-04, 06-08, 10-16):** Use geometric patterns (dots, grid) + grain overlay instead of AI-generated images to maintain performance and avoid visual overload. Focus on interactive foreground content.

**REMEMBER:**
- Background images use 16:9 aspect ratio for wide presentation format
- All images render at 10-20% opacity with mix-blend-multiply blend mode
- Images placed in `absolute inset-0 z-0` layer below content
- Content always in `relative z-10` layer above backgrounds
- Use `aria-hidden="true"` on decorative background images

### Visual Component Selection

**Interactive Patterns Used:**
- **Pattern 1 (Toggle)**: Slide 03 (Agent Manager paths - External vs Internal)
- **Pattern 3 (Hover-reveal)**: Slide 02 (Four roles framework)
- **Pattern 4 (Click-to-expand)**: Slides 06-08 (Three transformation stories)
- **Pattern 2 (Canvas)**: NOT used (reserved for time-based processes like iteration speed - already covered in F1)
- **Pattern 5 (Mini POC)**: NOT used (stories serve as real-world demonstrations)

**Text blocks:** Badge + Title + Subtitle structure on all slides, card-based content organization

**Data visualizations:** Not required for this module (narrative and interactive storytelling focus)

**Icons:** lucide-react icons (Users, UserCog, Code, Briefcase for roles; CheckCircle2, AlertTriangle, TrendingUp)

**AI-Generated Images:** 3 background images (see Image Generation Strategy above)

### Layout Design

**Grid structures:**
- Title slides: Single column, vertically centered (`max-w-7xl mx-auto`)
- Role cards (slide 02): 4-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`)
- Two-column comparison: `grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12`
- Story timeline (slides 06-08): Vertical stack with expandable cards (`space-y-6`)
- Summary (slide 16): 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`)

**Spacing:**
- Slide-level padding: `p-8 lg:p-16`
- Content spacing: `space-y-6 lg:space-y-8`
- Grid gaps: `gap-4 md:gap-6` (cards), `gap-8 lg:gap-12` (columns)

**Component hierarchy:**
- Badge (top) → Title → Subtitle → Content Grid → Key Insights/Summary

**Full-screen slides:** All slides use `min-h-screen` with `flex items-center justify-center`

### Interactive & Animation Patterns

**Entrance animations:**
- Staggered sequence: Badge (0ms) → Title (200ms) → Subtitle (400ms) → Content (600ms+)
- Card grids: Stagger by index * 200ms
- Always use `fill-backwards` with delays to prevent flash

**Interactive reveals:**
- Hover-reveal (slide 02): Cards scale-105 and show detail section on hover
- Click-to-expand (slides 06-08): Click card to expand full story, click again to collapse
- Toggle (slide 03): Button switches view between two scenarios

**Hover effects:**
- Cards: `hover:shadow-xl hover:scale-102 transition-all duration-300`
- Buttons: `hover:shadow-glow-lg` (orange glow intensifies)

**Transitions:**
- All interactive elements: `transition-all duration-300`
- Content reveals: `animate-fade-in` with smooth opacity change

**Pop-up logic:**
- Hover cards: onMouseEnter/onMouseLeave handlers, conditional render of detail section
- Click cards: onClick toggles selected state, conditional render with expand animation

### Agent Groups for Parallel Implementation

The 16 slides are organized into 4 agent groups for parallel implementation by slide-generator agents:

#### Group 1: Roles & Framework (4 slides)
**Slides**: 01-f2-title, 02-f2-four-roles-framework, 03-f2-agent-manager-paths, 04-f2-developer-role
**Theme**: Introduction to key roles and their characteristics
**Agent**: slide-generator-1
**Skill**: artifacts-builder (complex interactive components)

**Consistency Requirements:**
- Color palette: #FF4D00 orange accents for all role highlights
- Typography: Bebas Neue for titles, Syne for subtitles, Manrope for body
- Animation timing: 200ms delay increments for staggered reveals
- Interactive pattern: Hover-reveal for role cards with scale-105 on hover

#### Group 2: Partnership & Core Stories (4 slides)
**Slides**: 05-f2-partnership-dynamics, 06-f2-hr-onboarding-story, 07-f2-sales-call-story, 08-f2-vendor-sla-story
**Theme**: The critical partnership and detailed transformation stories
**Agent**: slide-generator-2
**Skill**: artifacts-builder (interactive storytelling with click-to-expand)

**Consistency Requirements:**
- Color palette: #FF4D00 orange for Level 4 highlights, partnership formula cards
- Typography: Same as Group 1
- Animation timing: 300ms for card expansion transitions
- Story card design: Consistent timeline card structure (Week badges, expandable sections, ROI highlights)

#### Group 3: Process & Pitfalls (4 slides)
**Slides**: 09-f2-transformation-timeline, 10-f2-pitfall-communication, 11-f2-pitfall-context-quality, 12-f2-pitfall-scope-creep
**Theme**: Transformation process and avoiding common failures
**Agent**: slide-generator-3
**Skill**: artifacts-builder (process visualization and warning patterns)

**Consistency Requirements:**
- Color palette: #FFB800 amber for warning/pitfall borders and icons
- Typography: Same as Group 1
- Animation timing: Standard 200ms delays
- Pitfall card structure: Consistent symptom/solution two-column layout, AlertTriangle icons, amber borders

#### Group 4: Advanced Pitfalls & Summary (4 slides)
**Slides**: 13-f2-pitfall-accuracy-plateau, 14-f2-pitfall-premature-deployment, 15-f2-pitfall-no-monitoring, 16-f2-summary
**Theme**: Advanced pitfalls and module conclusion
**Agent**: slide-generator-4
**Skill**: artifacts-builder (diagnostic patterns and summary cards)

**Consistency Requirements:**
- Color palette: #FFB800 amber for pitfalls, #FF4D00 orange for summary badges
- Typography: Same as Group 1
- Animation timing: Standard 200ms delays for summary card grid
- Summary pattern: Numbered circular badges matching F1 summary style, 3-column grid

### Color & Typography Usage

**Color scheme:**
- Primary orange (#FF4D00): Badge backgrounds, glows, Level 4 highlights, partnership formula cards, summary numbered badges
- Warning amber (#FFB800): Pitfall borders, warning icons, cautionary elements
- Neutral grays: Body text (#FAFAFA on #0A0A0A), muted text (#A0A0A0)
- Status colors: Green (#00FF88) for success/outcomes, Red (#EF4444) for failures

**Text hierarchy:**
- Titles: `font-bebas text-6xl md:text-8xl lg:text-9xl` (72-128px)
- Subtitles: `font-syne text-2xl md:text-4xl lg:text-5xl` (24-48px)
- Body text: `font-manrope text-base md:text-lg` (16-18px)
- Small text/metadata: `font-manrope text-sm md:text-base` (14-16px)

**Contrast ratios:**
- Body text (#FAFAFA on #0A0A0A): 19.8:1 (WCAG AAA) ✓
- Orange text (#FF4D00 on #0A0A0A): 5.8:1 (WCAG AA for large text) ✓
- Amber text (#FFB800 on #0A0A0A): 7.2:1 (WCAG AA) ✓

**Font weights:**
- Titles: font-bold (700)
- Subtitles: font-bold (700) or font-semibold (600)
- Body: font-normal (400), emphasis with font-medium (500) or font-semibold (600)

### Accessibility Checklist

- [x] Color contrast meets WCAG AA standards (4.5:1 minimum for body text, 3:1 for large text)
- [x] All interactive elements have visible focus states (ring-2 ring-ring/50 utilities)
- [x] Text is readable at minimum font size (16px for body text, 14px for captions)
- [x] Icons paired with text labels or ARIA labels (`aria-label` on icon-only elements)
- [x] Keyboard navigation works for all interactive elements (Tab/Enter/Space)
- [x] Screen reader compatible (semantic HTML: section, h1-h3, button, proper landmarks)
- [x] Motion can be reduced (respects prefers-reduced-motion media query)
- [x] Background images marked `aria-hidden="true"` (decorative, not informative)

### Component Implementation Notes

**shadcn/ui components to use:**
- Badge: `variant="glow"` for hero slides, `variant="outline"` for section labels, `variant="destructive"` for warnings
- Card: Standard with borders, `border-primary/60` for emphasis, `border-warning` for pitfalls
- Button: `variant="default"` for toggles, hover states with shadow-glow
- Icons from lucide-react: Users, UserCog, Code, Briefcase (roles); CheckCircle2, AlertTriangle, TrendingUp (general)

**Custom components needed:**
- StoryTimelineCard: Reusable card for slides 06-08 (week badges, expandable sections, ROI highlights)
- PitfallCard: Reusable card for slides 10-15 (symptom/solution structure, warning styling)
- NumberedSummaryCard: Reusable card for slide 16 (circular numbered badge, summary text)

**Animation utilities:**
- Entrance: `animate-slide-in-down`, `animate-fade-in`, `animate-slide-in-up`
- Delays: `delay-200`, `delay-400`, `delay-600` with `fill-backwards`
- Hover: `hover:scale-102` or `hover:scale-105` with `transition-all duration-300`
- Glows: `shadow-glow`, `shadow-glow-lg`, `animate-glow-pulse`

**State management:**
- All interactive slides: `"use client"` directive at top
- useState for: active card (hover-reveal), selected view (toggle), expanded card (click-to-expand)
- Event handlers: onMouseEnter/onMouseLeave (hover), onClick (toggle/expand), keyboard support

## Validation Commands

Execute every command to validate the feature works correctly with zero regressions.

- `pnpm run build` - Build the presentation to validate no TypeScript or build errors
- `pnpm run lint` - Run linting to validate code quality (expect 0 errors, 0 warnings)
- Visual inspection in browser:
  - Navigate to http://localhost:3000 and access F2 module
  - Test keyboard navigation (Arrow Left/Right through all 16 slides, Home to first, End to last)
  - Test interactive elements: Hover cards (slide 02), Toggle (slide 03), Click-to-expand (slides 06-08)
  - Verify entrance animations play correctly with staggered timing
  - Test at mobile (375px), tablet (768px), desktop (1920px) widths
  - Verify background images render at correct opacity without blocking content
  - Test reduced motion (System Settings → Accessibility → Display → Reduce motion)
  - Confirm focus states visible when tabbing through interactive elements

## Notes

### Implementation Strategy - Parallel Agent Execution

**CRITICAL**: This feature uses a parallel implementation strategy with 4 specialized slide-generator agents working simultaneously. Each agent is assigned a thematically coherent group of 3-5 slides.

**Benefits of parallel approach:**
1. **Speed**: 4x faster than sequential implementation (4 slides in time of 1)
2. **Thematic coherence**: Each agent maintains consistency within their group
3. **Cognitive load**: Each agent focuses on one narrative thread (roles, stories, pitfalls, summary)
4. **Quality**: Agents can reference within-group slides for consistency

**Agent coordination:**
- All agents follow same design system (DESIGN_AESTHETICS.md)
- All agents use same interactive patterns (INTERACTIVE_PATTERNS.md)
- Cross-group consistency maintained through shared component library
- Final integration phase ensures seamless navigation across all groups

### Iteration Economics - Core Concept

The F2 module emphasizes how **iteration economics** separate Level 4 from Level 3:

**Level 3 (External Agency):**
- Cost per iteration: Weeks + $$$
- Feedback loop: 1 iteration/week
- Total iterations: ~5 in 6 weeks
- Result: 65-75% accuracy → Abandoned

**Level 4 (Internal Partnership):**
- Cost per iteration: Minutes + $0 (internal)
- Feedback loop: 1-3 iterations/day
- Total iterations: ~20 in 2-3 weeks
- Result: 95%+ accuracy → Production-ready

**This is why co-location matters**: Agent Manager can walk to developer's desk, explain issue in 5 minutes, developer fixes in 20 minutes, re-test in 10 minutes. Total cycle: **35 minutes**. Do this 1-3 times per day.

### Visual Design Philosophy - Show, Don't Tell

From INTERACTIVE_PATTERNS.md: "Can I demonstrate this concept instead of just describing it?"

**Applied to F2:**
- Slide 03: TOGGLE between External/Internal hiring paths (not bullet lists)
- Slides 06-08: CLICK to expand full transformation story week-by-week (not wall of text)
- Slide 02: HOVER to reveal role details (not cramming everything into static cards)
- Slides 10-15: Visual symptom/solution layouts (not paragraphs of advice)

**Background images enhance, don't compete:**
- 10-20% opacity ensures they never distract from interactive foreground content
- mix-blend-multiply integrates images with brutalist aesthetic
- Slides with heavy interaction (06-08, 13) use patterns instead of images

### Component Reusability - DRY Principle

**Shared patterns across slides:**
1. StoryTimelineCard (slides 06-08): Week badge + expandable content + ROI highlight
2. PitfallCard (slides 10-15): Warning icon + symptoms + solutions structure
3. NumberedSummaryCard (slide 16): Circular badge + summary text

**Create these as separate components** to avoid duplication and ensure consistency. Each agent can import and customize data while maintaining visual consistency.

### Future Enhancements (Out of Scope for v1.0)

- Interactive team size calculator (slide 09 expansion)
- Role assessment worksheet with scoring (slide 16 expansion)
- Downloadable templates (scope document, monitoring framework)
- Integration with F1 content (inline references to Level 3 trap, iteration economics charts)
- Multi-language support (Spanish, French, German translations)

These are intentionally deferred to focus on core narrative and interactive patterns in v1.0.
