# Feature: Build Education V2 Courses - Foundation & Skills Presentation Slides

## Feature Description
Convert the education_v2 curriculum (5 modules across 2 courses with 4 learning paths) from markdown documentation into interactive presentation slides following the established brutalist-minimalist design system. This feature transforms 2 Foundation modules (F1: Five Levels Framework, F2: Organization Structure) and 3 Skills modules (S1: Choosing AI Technology, S2: Understanding Agents, S3: Managing AI) into approximately 84 slides with AI-generated imagery, interactive components, and role-based learning paths.

## User Story
As an AI transformation educator
I want to deliver the Chief AI Academy curriculum through interactive web-based presentations
So that executives, AI champions, agent managers, and developers can learn through visually engaging, role-customized slide decks rather than static markdown documents

## Problem Statement
The education_v2 curriculum exists as comprehensive markdown files (`courses_to_build/education_v2/`) with rich content including frameworks, case studies, decision trees, and quizzes. However, it needs to be transformed into presentation slides that:
- Follow the established brutalist-minimalist design system (electric orange #FF4D00, Bebas Neue typography, geometric patterns)
- Support 4 role-based learning paths (Executive, AI Champion, Agent Manager, Developer)
- Include AI-generated illustrations using the handwritten style guide
- Provide interactive elements (toggles, hover-reveals, canvas animations) per INTERACTIVE_PATTERNS.md
- Maintain atomic slide composition for reuse across courses and paths

## Solution Statement
Build a comprehensive slide library organized by module (F1, F2, S1, S2, S3) with each slide as a reusable React component. Use the existing PresentationContainer architecture to support multi-course routing and learning path filtering. Generate approximately 80+ unique slides referencing knowledge components, with role-specific paths that assemble slides from the atomic library based on audience needs.

## Relevant Files
Use these files to implement the feature:

### Design & Architecture References (ESSENTIAL - Read First)
- `ai_docs/DESIGN_AESTHETICS.md` - **CRITICAL:** Complete design system including brutalist-minimalism aesthetics, typography (Bebas Neue/Syne/Manrope/JetBrains Mono), color palette (electric orange #FF4D00, neon cyan #00BBFF), animations, shadows, component variants. Single source of truth for all visual decisions.
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - **CRITICAL:** Layout patterns, typography scales, spacing systems, grid patterns, component usage rules, accessibility standards, quality checklists. Must reference for all slide planning.
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - **CRITICAL:** Style guide for AI-generated images using Gemini API. Handwritten illustration style with orange tones, 16 predefined templates, prompt structure. Required for all slide visuals.
- `ai_docs/INTERACTIVE_PATTERNS.md` - Interactive slide patterns (toggle comparisons, canvas animations, hover-reveals, click-to-expand, mini POCs). Reference for dynamic slides.

### Source Content (Curriculum to Convert)
- `courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md` - 20 min module on 5 levels (L1-L5), Level 3 trap, iteration economics, transition playbook
- `courses_to_build/education_v2/courses/foundation/f2_organization_structure.md` - 18 min module on 4 roles framework, Agent Manager + Developer partnership, transformation stories, common pitfalls
- `courses_to_build/education_v2/courses/skills/s1_choosing_ai_technology.md` - 18 min module on ML vs Agentic, Build vs Buy, solution categories, hybrid strategy
- `courses_to_build/education_v2/courses/skills/s2_understanding_agents.md` - 12 min module on 4 components (LLM, Tools, Memory, Autonomy), agentic spectrum, vendor evaluation
- `courses_to_build/education_v2/courses/skills/s3_managing_ai.md` - 25 min module on management shift, agentic tools (Cursor/Claude Code), context engineering methodology, multi-agentic systems

### Supporting Content Resources
- `courses_to_build/education_v2/resources/knowledge_components/` - 17 reusable knowledge components (frameworks, decision trees, stories, anti-patterns)
  - `levels/` - Individual level definitions (L1-L5)
  - `frameworks/` - Four Roles, Iteration Economics, Context Engineering, ROI Calculation
  - `decision_trees/` - ML vs Agentic, Build vs Buy
  - `stories/` - HR Onboarding Assistant case study
- `courses_to_build/education_v2/resources/economics/` - 10 case study files with ROI calculations
- `courses_to_build/education_v2/resources/use_cases_level_3_to_4.md` - Real transformation examples
- `courses_to_build/education_v2/resources/glossary.md` - Technical definitions
- `courses_to_build/education_v2/IMPROVEMENT_SPECIFICATIONS.md` - Enhancement specifications (SPEC-001 to SPEC-008) completed

### Learning Path Configurations
- `courses_to_build/education_v2/learning_paths/executive_path.md` - 70 min path (F1, F2, S1)
- `courses_to_build/education_v2/learning_paths/ai_champion_path.md` - 110 min complete curriculum (F1, F2, S1, S2, S3)
- `courses_to_build/education_v2/learning_paths/agent_manager_path.md` - 85 min path (F1, F2, S3 deep focus)
- `courses_to_build/education_v2/learning_paths/developer_path.md` - 95 min path (F1, F2, S2, S3)

### Existing Infrastructure (DO NOT MODIFY - Reference Only)
- `components/presentation-container.tsx` - Slide display wrapper with navigation
- `components/course-navigation.tsx` - In-presentation nav bar (breadcrumbs, progress, arrows)
- `components/course-selector.tsx` - Landing page course cards
- `components/path-navigator.tsx` - Landing page path cards
- `components/presenter-mode.tsx` - Presenter overlay with notes
- `config/courses.ts` - Course registry definitions
- `config/paths.ts` - Learning path definitions
- `config/slides.ts` - Slide registry (ID → component mapping + metadata)
- `hooks/use-course-navigation.ts` - Navigation state management
- `types/courses.ts` - TypeScript interfaces
- `app/page.tsx` - Landing page container
- `app/(courses)/layout.tsx` - Shared layout for courses and paths

### Existing Slide Components (Reference Patterns)
- `components/slides/mock/01-foundation-title.tsx` - Title slide pattern (hero, badge, subtitle)
- `components/slides/mock/02-skills-concept.tsx` - Concept slide pattern (card grid, 5-column layout)
- `components/slides/mock/03-executive-strategic.tsx` - Two-column pattern (visual + text)

### UI Component Library (shadcn/ui - Available)
- `components/ui/badge.tsx` - Badge component with custom variants (default, outline, gradient, glow, cyan, brutal)
- `components/ui/card.tsx` - Card component with custom variants (default, layered, glow, brutal, glass)
- `components/ui/button.tsx` - Button component with custom variants (default, outline, gradient, brutal, glow)
- Icons: `lucide-react` library (CheckCircle2, Lightbulb, TrendingUp, Zap, Users, AlertTriangle, etc.)

### Utility Components (Available)
- `components/decorative/grain-overlay.tsx` - Film grain texture overlay
- `components/decorative/geometric-patterns.tsx` - Background patterns (dots, grid, diagonal) + gradient meshes
- `components/animations/staggered-reveal.tsx` - Staggered entrance animations for card grids
- `components/animations/slide-transitions.tsx` - Entrance transition wrappers (fade, slide, scale, rotate)

### Image Generation Tool
- `generate-image.ts` - CLI tool for generating images via Gemini API
- Usage: `tsx generate-image.ts "[PROMPT]" --template [TEMPLATE_ID] --ratio [RATIO]`
- Templates: hero-bold, hero-subtle, concept-ai, concept-transformation, dataviz-grid, background-geometric, etc.
- See `ai_docs/IMAGE_GENERATION_GUIDE.md` for complete template catalog

### Global Styles
- `app/globals.css` - Design system implementation (colors, animations, shadows, patterns, custom utilities)

### New Files to Create

**Slide Components** (organized by module):
- `components/slides/f1/` - Foundation Module 1 slides (approx. 15-18 slides)
  - `01-f1-title.tsx` - Module title slide
  - `02-f1-why-levels.tsx` - Introduction slide
  - `03-f1-level-1-individual-ai.tsx` - Level 1 definition
  - `04-f1-level-2-generic-saas.tsx` - Level 2 definition
  - `05-f1-level-3-no-code-trap.tsx` - Level 3 + trap introduction
  - `06-f1-level-3-trap-symptoms.tsx` - Trap symptoms checklist
  - `07-f1-level-4-iterative-agents.tsx` - Level 4 definition
  - `08-f1-iteration-economics.tsx` - 20 iterations to 95% concept
  - `09-f1-level-5-autonomous.tsx` - Level 5 definition
  - `10-f1-level-comparison-matrix.tsx` - All 5 levels comparison table
  - `11-f1-transition-l1-l2-to-l4.tsx` - 90-day roadmap for L1-L2
  - `12-f1-transition-l3-escape.tsx` - L3 trap escape plan
  - `13-f1-transition-l4-optimization.tsx` - L4 optimization checklist
  - `14-f1-transition-decision-tree.tsx` - First action decision tree
  - `15-f1-self-assessment.tsx` - Organizational level assessment (6 dimensions)
  - `16-f1-quiz.tsx` - Knowledge check quiz (5 questions)
  - `17-f1-summary.tsx` - Module summary slide
  - `18-f1-whats-next.tsx` - Role-based next steps

- `components/slides/f2/` - Foundation Module 2 slides (approx. 14-16 slides)
  - `01-f2-title.tsx` - Module title slide
  - `02-f2-four-roles-framework.tsx` - 4 roles overview (Chief AI Officer, AI Champion, Agent Manager, Developer)
  - `03-f2-agent-manager-role.tsx` - Agent Manager deep dive + two paths (w/ developer vs Level 3.5 tools)
  - `04-f2-developer-role.tsx` - AI Agent Developer role
  - `05-f2-partnership-dynamics.tsx` - Agent Manager + Developer co-location, iteration flow
  - `06-f2-hr-onboarding-story.tsx` - HR Onboarding Assistant story (Sarah + Marcus)
  - `07-f2-sales-call-analyzer-story.tsx` - Sales Call Analyzer story (Maria + Alex)
  - `08-f2-vendor-sla-story.tsx` - Vendor SLA Compliance story (David + Priya)
  - `09-f2-transformation-timeline.tsx` - Typical transformation timeline (3 weeks build, 2-3 use cases per quarter)
  - `10-f2-pitfall-1-communication.tsx` - Pitfall 1: Agent Manager + Developer communication breakdown
  - `11-f2-pitfall-2-context-quality.tsx` - Pitfall 2: Fast iteration but poor context
  - `12-f2-pitfall-3-scope-creep.tsx` - Pitfall 3: Requirements changing during iteration
  - `13-f2-pitfall-4-accuracy-plateau.tsx` - Pitfall 4: Stuck below 90% accuracy
  - `14-f2-pitfall-5-deployment-pressure.tsx` - Pitfall 5: Deploy before production-ready
  - `15-f2-pitfall-6-no-monitoring.tsx` - Pitfall 6: No monitoring after deployment
  - `16-f2-summary.tsx` - Module summary slide

- `components/slides/s1/` - Skills Module 1 slides (approx. 14-16 slides)
  - `01-s1-title.tsx` - Module title slide
  - `02-s1-four-approaches.tsx` - 4 AI approaches overview (ML, Existing Tools, Custom Agentic, No AI)
  - `03-s1-ml-vs-agentic.tsx` - ML vs Agentic decision tree
  - `04-s1-build-vs-buy.tsx` - Build vs Buy decision framework
  - `05-s1-context-engineering-advantage.tsx` - Why custom agents have context control advantage
  - `06-s1-solution-category-1.tsx` - Category 1: Static Information Chatbots (HR example)
  - `07-s1-solution-category-2.tsx` - Category 2: Dynamic Content Chatbots (Deal Analytics example)
  - `08-s1-solution-category-3.tsx` - Category 3: Custom Workflow Agents (Sales Call Analyzer example)
  - `09-s1-roi-ranges.tsx` - ROI ranges by category ($10-40K, $30-80K, $50-150K+)
  - `10-s1-hybrid-strategy.tsx` - Hybrid approach: Existing tools + Custom agents
  - `11-s1-integration-depth.tsx` - Integration depth check (surface vs deep)
  - `12-s1-use-case-readiness.tsx` - Use case readiness assessment (6 dimensions)
  - `13-s1-quiz.tsx` - Knowledge check quiz
  - `14-s1-summary.tsx` - Module summary slide

- `components/slides/s2/` - Skills Module 2 slides (approx. 10-12 slides)
  - `01-s2-title.tsx` - Module title slide
  - `02-s2-four-components.tsx` - 4 components framework (LLM, Tools, Memory, Autonomy)
  - `03-s2-llm-component.tsx` - LLM Engine deep dive
  - `04-s2-tools-component.tsx` - Tool Integration deep dive
  - `05-s2-memory-component.tsx` - Memory Systems deep dive
  - `06-s2-autonomy-component.tsx` - Autonomy/Agency deep dive
  - `07-s2-agentic-spectrum.tsx` - Agentic spectrum (low to high autonomy)
  - `08-s2-vendor-evaluation.tsx` - Vendor evaluation red flags vs green flags
  - `09-s2-limitations.tsx` - When agents DON'T work (creativity, human judgment, legal decisions)
  - `10-s2-quiz.tsx` - Knowledge check quiz
  - `11-s2-summary.tsx` - Module summary slide

- `components/slides/s3/` - Skills Module 3 slides (approx. 18-20 slides)
  - `01-s3-title.tsx` - Module title slide
  - `02-s3-management-shift.tsx` - Managing people vs managing AI comparison
  - `03-s3-agentic-tools-intro.tsx` - Level 3.5 tools introduction (Cursor, Claude Code)
  - `04-s3-chat-vs-agentic-tools.tsx` - Chat AI vs Agentic Development Tools comparison table
  - `05-s3-context-engineering-intro.tsx` - "Teaching AI Your Expertise" introduction
  - `06-s3-context-before-after-hr.tsx` - Before/After example: HR Policy Question (vague vs structured context)
  - `07-s3-context-before-after-sales.tsx` - Before/After example: Sales Call Scoring (vague vs structured context)
  - `08-s3-context-what-changed.tsx` - What changed between before/after (structured evaluation framework, edge cases, output format)
  - `09-s3-context-worksheet-part-1-2.tsx` - Context Engineering Worksheet: Part 1-2 (Process Overview, Knowledge Sources)
  - `10-s3-context-worksheet-part-3-4.tsx` - Worksheet: Part 3-4 (Evaluation Criteria, Edge Cases)
  - `11-s3-context-worksheet-part-5-6.tsx` - Worksheet: Part 5-6 (Output Structure, Iteration Plan)
  - `12-s3-context-5-steps.tsx` - 5-step context engineering methodology
  - `13-s3-iteration-discovery.tsx` - What iteration reveals (tacit knowledge, edge cases, validation rules)
  - `14-s3-multi-agentic-intro.tsx` - Multi-agentic systems introduction
  - `15-s3-multi-agentic-patterns.tsx` - Orchestration patterns (sequential, parallel, hierarchical)
  - `16-s3-agent-manager-scope.tsx` - What Agent Managers can do vs need developers for
  - `17-s3-developer-scope.tsx` - What Developers enable (complex integrations, orchestration, performance)
  - `18-s3-quiz.tsx` - Knowledge check quiz
  - `19-s3-summary.tsx` - Module summary slide

**Configuration Updates**:
- `config/courses.ts` - Add `foundation` and `skills` course definitions
- `config/paths.ts` - Add `executive`, `ai-champion`, `agent-manager`, `developer` path definitions
- `config/slides.ts` - Add all 70-84 slide registrations with metadata (module, title, duration, tags, speakerNotes)

**Route Components**:
- `app/(courses)/courses/foundation/page.tsx` - Foundation course route (F1 + F2)
- `app/(courses)/courses/skills/page.tsx` - Skills course route (S1 + S2 + S3)
- `app/(courses)/paths/executive/page.tsx` - Executive path route (filtered slides)
- `app/(courses)/paths/ai-champion/page.tsx` - AI Champion path route (all slides)
- `app/(courses)/paths/agent-manager/page.tsx` - Agent Manager path route (F1, F2, S3 focus)
- `app/(courses)/paths/developer/page.tsx` - Developer path route (F1, F2, S2, S3)

## Implementation Plan
IMPORTANT: Each phase should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

- [ ] **Phase 1: Foundation - Setup & Infrastructure** - Prepare configuration, generate hero images, update course/path registries
  - Status:
  - Comments:

- [ ] **Phase 2: Core Implementation - Build F1 & F2 Slides** - Create Foundation module slides with interactive elements and imagery
  - Status:
  - Comments:

- [ ] **Phase 3: Core Implementation - Build S1, S2, S3 Slides** - Create Skills module slides with interactive elements and imagery
  - Status:
  - Comments:

- [ ] **Phase 4: Integration - Routes & Path Filtering** - Implement course routes and learning path logic
  - Status:
  - Comments:

- [ ] **Phase 5: Polish & Validation** - Test all paths, verify design system compliance, run validation commands
  - Status:
  - Comments:

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom. Each task should be a checkbox that will be checked off during implementation. Include Status and Comments fields for tracking progress.

### Phase 1: Foundation - Setup & Infrastructure

- [x] **Read all design documentation** - Read DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, IMAGE_GENERATION_GUIDE.md, INTERACTIVE_PATTERNS.md completely
  - Status: Completed
  - Comments: All design documentation reviewed. Design system uses brutalist-minimalist aesthetic with electric orange #FF4D00, Bebas Neue typography, and orchestrated animations.

- [x] **Analyze source content structure** - Read all 5 module markdown files (F1, F2, S1, S2, S3) to understand content depth and slide count estimates
  - Status: Completed
  - Comments: All 5 modules analyzed. F1 (20 min), F2 (18 min), S1 (18 min), S2 (12 min), S3 (25 min). Total ~93 minutes of content requiring 70-84 slides. Content includes knowledge component references ({{kc:...}}) that need translation to visual slides.

- [ ] **Create slide planning spreadsheet** - Map each markdown section to slide components with: slide ID, title, content summary, interactive pattern, image needs, estimated duration
  - Status:
  - Comments:

- [ ] **Generate hero images for modules** - Use `tsx generate-image.ts` to create title slide images for F1, F2, S1, S2, S3 (5 images total)
  - Prompts: "Five levels AI framework with ascending geometric progression", "Organizational transformation team structure", "Technology decision making paths", "AI agent architecture components", "Process documentation and management framework"
  - Template: hero-bold for all
  - Ratio: 16:9
  - Status:
  - Comments:

- [ ] **Update course registry** - Add `foundation` and `skills` courses to `config/courses.ts` with proper metadata (title, description, duration, modules, slug, theme)
  - Status:
  - Comments:

- [ ] **Update path registry** - Add 4 learning paths to `config/paths.ts` (executive, ai-champion, agent-manager, developer) with audience, description, duration, modules
  - Status:
  - Comments:

- [ ] **Create slide registry template** - Set up initial structure in `config/slides.ts` with empty registry object and import statements ready
  - Status:
  - Comments:

### Phase 2: Core Implementation - Build F1 Slides (Foundation Module 1)

- [ ] **Create F1 directory structure** - Create `components/slides/f1/` directory
  - Status:
  - Comments:

- [ ] **Build F1-01: Module title slide** - Create `01-f1-title.tsx` with hero pattern (badge, Bebas Neue title, Syne subtitle, gradient mesh warm background)
  - Content: "Module F1: Five Levels Framework" + "Understanding the maturity progression from individual AI to autonomous agents"
  - Image: Use generated hero image
  - Status:
  - Comments:

- [ ] **Build F1-02: Why levels matter** - Create `02-f1-why-levels.tsx` with two-column pattern (visual left, text right)
  - Content: Why understanding levels matters (3-4 key points)
  - Image: Generate concept-ai style illustration
  - Status:
  - Comments:

- [ ] **Build F1-03 to F1-09: Level definitions** - Create 7 slides for L1, L2, L3 (+ trap intro), L4, L5, comparison matrix, Level 3 trap symptoms
  - Pattern: Card-based layouts for level definitions, table for comparison
  - Interactive: Hover-reveal cards for level features
  - Images: Generate concept illustrations for each level (5 images)
  - Status:
  - Comments:

- [ ] **Build F1-10: Iteration economics** - Create `08-f1-iteration-economics.tsx` with data visualization
  - Pattern: Chart showing 20 iterations to 95% progression (use canvas animation or Recharts)
  - Interactive: Animated progression line
  - Status:
  - Comments:

- [ ] **Build F1-11 to F1-14: Transition playbook** - Create 4 slides for 90-day roadmaps (L1-L2→L4, L3 escape, L4 optimization, decision tree)
  - Pattern: Timeline visualizations, decision tree flowchart, checklist cards
  - Interactive: Click-to-expand details for each phase
  - Images: Generate background-geometric for each (4 images)
  - Status:
  - Comments:

- [ ] **Build F1-15: Self-assessment** - Create `15-f1-self-assessment.tsx` with interactive rating form
  - Pattern: 6 dimensions with 1-5 rating scales
  - Interactive: Client component with useState for rating inputs, live score calculation
  - Status:
  - Comments:

- [ ] **Build F1-16: Knowledge quiz** - Create `16-f1-quiz.tsx` with interactive quiz component
  - Pattern: 5 multiple choice questions with explanations
  - Interactive: Client component with quiz logic, score tracking, 80% passing threshold
  - Status:
  - Comments:

- [ ] **Build F1-17: Module summary** - Create `17-f1-summary.tsx` with key takeaways
  - Pattern: Numbered circular badge cards (see slide 39 pattern)
  - Status:
  - Comments:

- [ ] **Build F1-18: What's next** - Create `18-f1-whats-next.tsx` with role-based recommendations
  - Pattern: Card grid with 4 roles (Executive, AI Champion, Agent Manager, Developer) + next module suggestions
  - Status:
  - Comments:

- [ ] **Register F1 slides** - Add all F1 slides to `config/slides.ts` with metadata (id, component, module: 'f1', title, duration, tags, speakerNotes)
  - Status:
  - Comments:

### Phase 3: Core Implementation - Build F2 Slides (Foundation Module 2)

- [ ] **Create F2 directory structure** - Create `components/slides/f2/` directory
  - Status:
  - Comments:

- [ ] **Build F2-01: Module title slide** - Create title slide with hero pattern
  - Status:
  - Comments:

- [ ] **Build F2-02: Four Roles Framework** - Create `02-f2-four-roles-framework.tsx` with 4-card grid
  - Pattern: Grid layout with icon + role name + 1-sentence description for each role
  - Interactive: Hover-reveal for expanded role details
  - Images: Generate 4 portrait-executive style images or concept illustrations
  - Status:
  - Comments:

- [ ] **Build F2-03 to F2-05: Role deep dives** - Create 3 slides for Agent Manager (with two paths), Developer, and partnership dynamics
  - Pattern: Two-column layouts (role description + key responsibilities)
  - Interactive: Toggle comparison for Agent Manager's two paths (w/ developer vs Level 3.5 tools)
  - Status:
  - Comments:

- [ ] **Build F2-06 to F2-08: Transformation stories** - Create 3 slides for HR Onboarding, Sales Call Analyzer, Vendor SLA case studies
  - Pattern: Story structure (Problem → Team → Week-by-week build → ROI → Impact quote)
  - Interactive: Click-to-expand for week-by-week details
  - Images: Generate concept-transformation illustrations (3 images)
  - Reference: ROI calculations from `resources/economics/` case studies
  - Status:
  - Comments:

- [ ] **Build F2-09: Transformation timeline** - Create timeline visualization slide
  - Pattern: Horizontal timeline with milestones (3 weeks build, 2-3 use cases per quarter)
  - Status:
  - Comments:

- [ ] **Build F2-10 to F2-15: Common pitfalls** - Create 6 slides for each pitfall
  - Pattern: Symptom → Root Cause → How to Avoid → Red Flags (structured layout)
  - Interactive: Accordion or click-to-expand for each pitfall section
  - Images: Generate background-dots or background-geometric for visual variety
  - Status:
  - Comments:

- [ ] **Build F2-16: Module summary** - Create summary slide
  - Status:
  - Comments:

- [ ] **Register F2 slides** - Add all F2 slides to `config/slides.ts`
  - Status:
  - Comments:

### Phase 4: Core Implementation - Build S1, S2, S3 Slides (Skills Modules)

- [ ] **Create S1 directory and build 14-16 slides** - Follow same pattern as F1/F2
  - Key slides: Four approaches overview, ML vs Agentic decision tree, Build vs Buy framework, 3 solution category slides with ROI ranges, use case readiness assessment, quiz
  - Interactive patterns: Decision tree (click-to-navigate), toggle comparison for approach selection
  - Images: Generate concept-strategy, dataviz-grid, background-geometric illustrations
  - Status:
  - Comments:

- [ ] **Create S2 directory and build 10-12 slides** - Build Skills Module 2
  - Key slides: Four components framework, component deep dives (4 slides), agentic spectrum, vendor evaluation (red/green flags), limitations checklist, quiz
  - Interactive patterns: Hover-reveal cards for component details, checklist with visual indicators
  - Images: Generate concept-ai, background-mesh illustrations
  - Status:
  - Comments:

- [ ] **Create S3 directory and build 18-20 slides** - Build Skills Module 3 (largest module)
  - Key slides: Management shift comparison, Level 3.5 tools intro, chat vs agentic tools table, context engineering before/after examples (2 slides), context worksheet (3 slides for 6 parts), 5-step methodology, iteration discovery, multi-agentic patterns, scope division (Agent Manager vs Developer), quiz
  - Interactive patterns: Before/after toggle comparison, worksheet as interactive form (or multi-step reveal), mini POC for context quality demonstration
  - Images: Generate background-geometric, concept-transformation illustrations
  - Reference: SPEC-002 from IMPROVEMENT_SPECIFICATIONS.md for context engineering content
  - Status:
  - Comments:

- [ ] **Register S1, S2, S3 slides** - Add all Skills module slides to `config/slides.ts`
  - Status:
  - Comments:

### Phase 5: Integration - Routes & Path Filtering

- [ ] **Create Foundation course route** - Build `app/(courses)/courses/foundation/page.tsx`
  - Assemble F1 + F2 slides in sequence
  - Use PresentationContainer with course navigation
  - Status:
  - Comments:

- [ ] **Create Skills course route** - Build `app/(courses)/courses/skills/page.tsx`
  - Assemble S1 + S2 + S3 slides in sequence
  - Use PresentationContainer with course navigation
  - Status:
  - Comments:

- [ ] **Create Executive path route** - Build `app/(courses)/paths/executive/page.tsx`
  - Filter slides: F1 (all), F2 (all), S1 (selected slides - high-level only, skip technical depth)
  - Use PresentationContainer with path-specific metadata
  - Duration target: ~70 min
  - Status:
  - Comments:

- [ ] **Create AI Champion path route** - Build `app/(courses)/paths/ai-champion/page.tsx`
  - Include ALL slides from F1, F2, S1, S2, S3 (complete curriculum)
  - Duration target: ~110 min
  - Status:
  - Comments:

- [ ] **Create Agent Manager path route** - Build `app/(courses)/paths/agent-manager/page.tsx`
  - Filter slides: F1 (all), F2 (all), S1 (brief overview only), S3 (deep focus - all context engineering slides)
  - Skip S2 (agent architecture less relevant for Agent Managers)
  - Duration target: ~85 min
  - Status:
  - Comments:

- [ ] **Create Developer path route** - Build `app/(courses)/paths/developer/page.tsx`
  - Filter slides: F1 (all), F2 (all), S1 (brief overview), S2 (all - architecture critical), S3 (all - management + multi-agentic focus)
  - Duration target: ~95 min
  - Status:
  - Comments:

- [ ] **Update landing page** - Ensure `app/page.tsx` displays all courses and paths correctly with CourseSelector and PathNavigator components
  - Verify course cards show Foundation and Skills
  - Verify path cards show all 4 learning paths
  - Status:
  - Comments:

### Phase 6: Polish & Validation

- [ ] **Visual design review** - Review all slides for design system compliance
  - Check typography hierarchy (Bebas Neue for titles, Syne for subtitles, Manrope for body)
  - Verify color usage (electric orange #FF4D00 used sparingly 10-20%, dark background #0A0A0A)
  - Confirm spacing follows system (p-8 lg:p-16 containers, gap-4 md:gap-6 grids)
  - Validate shadow usage (shadow-glow for emphasis, shadow-layered for depth)
  - Status:
  - Comments:

- [ ] **Accessibility audit** - Verify WCAG AA compliance
  - Test keyboard navigation (Tab through all interactive elements)
  - Verify focus states visible (orange ring on all interactive elements)
  - Check color contrast ratios (4.5:1 minimum for body text, 3:1 for large text)
  - Add alt text to all images (descriptive, functional, <150 characters)
  - Test with screen reader (semantic HTML, ARIA labels where needed)
  - Status:
  - Comments:

- [ ] **Interactive elements testing** - Test all interactive patterns
  - Toggle comparisons: State changes work correctly, animations smooth
  - Hover-reveal cards: Details appear on hover, performance acceptable
  - Click-to-expand: Accordions/details work, no layout shift issues
  - Quizzes: Answer selection works, score calculation correct, explanations display
  - Self-assessments: Rating inputs functional, score totals accurate, interpretations show
  - Canvas animations: Render smoothly, respect prefers-reduced-motion
  - Status:
  - Comments:

- [ ] **Responsive behavior testing** - Test all breakpoints
  - Mobile (375px): Content stacks correctly, typography scales down appropriately, images resize
  - Tablet (768px): Grid layouts adjust (1→2 columns), spacing increases
  - Desktop (1024px+): Full layouts render, maximum typography scales apply
  - Test orientation changes (portrait/landscape)
  - Status:
  - Comments:

- [ ] **Cross-browser testing** - Test in Chrome, Firefox, Safari, Edge
  - Verify animations work consistently
  - Check font rendering (Bebas Neue, Syne, Manrope display correctly)
  - Test interactive elements (click, hover, focus states)
  - Status:
  - Comments:

- [ ] **Performance optimization** - Optimize load times and runtime performance
  - Verify lazy loading works for slide components
  - Check image file sizes (<5MB per image, optimize if needed)
  - Test presentation navigation speed (no lag between slides)
  - Measure Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS)
  - Status:
  - Comments:

- [ ] **Content accuracy review** - Verify content matches source markdown
  - Cross-reference key concepts, frameworks, decision trees with original markdown files
  - Verify ROI calculations match case study files in `resources/economics/`
  - Check knowledge component references ({{kc:...}}) are translated correctly
  - Validate quiz questions test the right concepts per module learning objectives
  - Status:
  - Comments:

- [ ] **Speaker notes completeness** - Add speaker notes to all slides
  - Each slide should have concise speaker notes (2-4 sentences) in slide registry metadata
  - Notes should provide context, examples, or talking points beyond what's on screen
  - Review in presenter mode (press P) to verify notes display correctly
  - Status:
  - Comments:

## Testing Strategy

### Unit Tests
- Slide component rendering: Each slide renders without errors, props passed correctly
- Interactive components: Quiz logic, self-assessment calculations, toggle states
- Navigation hooks: `use-course-navigation` manages slide state correctly
- Path filtering: Learning paths include correct slides based on role definitions

### Integration Tests
- Course routes: Foundation and Skills courses assemble slides correctly
- Path routes: All 4 learning paths filter and order slides as expected
- Navigation flow: Previous/next buttons work, keyboard shortcuts function (arrows, space, home, end, P for presenter mode)
- Presenter mode: Speaker notes display, timing tracked, navigation synchronized

### Edge Cases
- Empty states: Landing page with no courses (should not occur, but handle gracefully)
- Missing images: Slides render with placeholder if image fails to load
- Browser compatibility: Graceful degradation for older browsers (animations disable, core content visible)
- Screen reader navigation: All content accessible via keyboard and screen reader
- Very long slide decks: Performance acceptable with 80+ slides (lazy loading critical)
- Rapid navigation: No race conditions or state corruption when quickly navigating slides

## Acceptance Criteria
- [ ] All 5 modules (F1, F2, S1, S2, S3) converted to interactive slides (70-84 total slides)
- [ ] 2 courses (Foundation, Skills) accessible at `/courses/foundation` and `/courses/skills`
- [ ] 4 learning paths (Executive, AI Champion, Agent Manager, Developer) accessible at `/paths/*`
- [ ] All slides follow brutalist-minimalist design system (DESIGN_AESTHETICS.md compliance)
- [ ] Typography uses Bebas Neue (display), Syne (emphasis), Manrope (body), JetBrains Mono (code)
- [ ] Color palette: Electric orange #FF4D00 (10-20% usage), dark background #0A0A0A, proper contrast ratios
- [ ] AI-generated images for all hero slides and key concept illustrations (25-35 images total)
- [ ] Interactive patterns implemented per INTERACTIVE_PATTERNS.md (toggles, hover-reveals, click-to-expand, canvas animations, mini POCs)
- [ ] Quizzes functional with 5 questions per module, 80% passing score, unlimited attempts
- [ ] Self-assessments functional with rating scales, score calculations, interpretations
- [ ] Responsive design works across mobile (375px), tablet (768px), desktop (1024px+)
- [ ] Keyboard navigation works (arrows, space, home, end, P for presenter mode)
- [ ] Accessibility: WCAG AA compliance (4.5:1 contrast, alt text, focus states, semantic HTML, screen reader support)
- [ ] Performance: LCP <2.5s, FID <100ms, CLS <0.1, smooth 60fps animations
- [ ] No TypeScript errors, no build warnings, all Validation Commands pass

## Slide Design Requirements
IMPORTANT: This feature involves creating 70-84 presentation slides. Complete this section thoroughly.

### Image Generation Strategy
IMPORTANT: Every slide should be visually supported by AI-generated images. Reference the ai_docs/IMAGE_GENERATION_GUIDE.md for complete style specifications.

**Number of images:** 25-35 images total across all modules
- 5 hero images (F1, F2, S1, S2, S3 title slides)
- 5-7 level illustrations (L1-L5 concept slides in F1)
- 3-5 transformation story illustrations (F2 case studies)
- 3-5 framework/decision tree diagrams (S1 ML vs Agentic, Build vs Buy)
- 4-5 component architecture illustrations (S2 four components)
- 5-7 context engineering/management illustrations (S3)

**Image subjects:**
1. **F1 Hero**: Five-level pyramid or ascending geometric progression showing AI maturity stages
2. **F2 Hero**: Team collaboration scene with Agent Manager + Developer working together
3. **S1 Hero**: Decision paths branching (technology selection metaphor)
4. **S2 Hero**: AI agent architecture components interconnected (LLM, tools, memory, autonomy)
5. **S3 Hero**: Process documentation and management framework with iterative cycles
6. **Level illustrations (L1-L5)**: Individual geometric representations for each level maturity stage
7. **Transformation stories**: Before/after scenes showing process improvement (HR, Sales, Operations contexts)
8. **Decision trees**: Branching path visualizations for ML vs Agentic and Build vs Buy
9. **Component diagrams**: Technical architecture showing LLM, tools, memory, autonomy components
10. **Context engineering**: Before/after comparison showing structured vs unstructured context

**Aspect ratios:**
- Hero images (title slides): 16:9 (1920x1080)
- Concept illustrations (content slides): 16:9 or 3:2 depending on layout needs
- Background patterns (ambient visuals): 16:9

**Prompt drafts using IMAGE_GENERATION_GUIDE.md template:**

*Example prompts (following base template):*

1. **F1 Hero - Five Levels Framework:**
   ```
   A professional handwritten illustration of a five-level ascending pyramid structure representing AI maturity progression, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds. Each tier labeled with simple geometric icons (individual person at bottom, team collaboration, automation workflow, iterative cycle, autonomous network at top). Clean linework, minimal color fills, educational diagram style. Aspect ratio 16:9.
   ```
   Template: `hero-bold`, Ratio: `16:9`

2. **F2 Hero - Organization Structure:**
   ```
   A professional handwritten illustration of two people collaborating at a desk with screens showing AI workflows, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds. One person (domain expert) pointing at process diagram, other person (developer) at laptop coding. Speech bubbles with simple icons (lightbulb, checkmark). Clean linework, minimal color fills. Aspect ratio 16:9.
   ```
   Template: `hero-bold`, Ratio: `16:9`

3. **S1 Hero - Technology Decision Paths:**
   ```
   A professional handwritten illustration of a decision tree with branching paths diverging from center, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds. Central starting point with four major branches (labeled with simple icons: brain for ML, toolbox for existing tools, robot for custom agents, X for no AI). Clean linework, minimal color fills. Aspect ratio 16:9.
   ```
   Template: `hero-bold`, Ratio: `16:9`

4. **F1 Level 3 Trap Illustration:**
   ```
   A professional handwritten illustration of a circular trap with warning signs, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds. Downward spiral with stuck arrow at 70% mark, warning triangles, broken iteration cycle. Clean linework, minimal color fills, cautionary diagram style. Aspect ratio 3:2.
   ```
   Template: `concept-transformation`, Ratio: `3:2`

5. **S3 Context Engineering Before/After:**
   ```
   A professional handwritten illustration showing two contrasting panels side-by-side (before/after), featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds. Left panel: vague scattered notes with question marks. Right panel: structured checklist with checkmarks, organized layers. Clean linework, minimal color fills, comparison diagram style. Aspect ratio 16:9.
   ```
   Template: `concept-transformation`, Ratio: `16:9`

**Integration points:** Images will appear in the following layout positions:
- Hero images: Full-width background or centered max-w-4xl on title slides
- Concept illustrations: Left column in two-column layouts (40% width) or centered in single-column layouts
- Background patterns: Absolute positioned behind content with low opacity (10-30%)
- Diagrams: Centered with max-w-3xl, shadow-lg, rounded-xl styling

**Generation commands:**
```bash
# F1 Hero
tsx generate-image.ts "A professional handwritten illustration of a five-level ascending pyramid structure representing AI maturity progression, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds. Each tier labeled with simple geometric icons." --template hero-bold --ratio 16:9

# F2 Hero
tsx generate-image.ts "A professional handwritten illustration of two people collaborating at a desk with screens showing AI workflows, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), with charcoal outlines and white/light gray backgrounds." --template hero-bold --ratio 16:9

# (Continue for all 25-35 images...)
```

**REMEMBER:**
- All images must use the handwritten illustration style with orange color palette (#F5A623, #FF4D00)
- Use the base prompt template structure from IMAGE_GENERATION_GUIDE.md
- Generate images using: `tsx generate-image.ts "[PROMPT]" --template [TEMPLATE] --ratio [RATIO]`
- Save generated images to `public/generated-images/`
- Each image should complement and enhance the slide's message without competing with text content

### Visual Component Selection
Specify which visual elements will be used and why they're appropriate for the narrative:

**Text blocks:**
- Module titles: Bebas Neue text-7xl md:text-8xl lg:text-9xl for hero slides
- Section headings: Syne text-4xl md:text-6xl font-bold for content slide titles
- Subtitles: Syne text-2xl md:text-3xl text-primary for emphasis text
- Body text: Manrope text-base md:text-lg for descriptions, bullet points, card content
- Code/technical terms: JetBrains Mono text-sm for technical annotations, API endpoints

**Data visualizations:**
- Iteration economics chart (F1): Line chart showing 20 iterations to 95% accuracy progression (use Recharts or canvas animation)
- Level comparison matrix (F1): Table component with color-coded cells (Basic/Warning/Transformation status colors)
- ROI ranges by category (S1): Horizontal bar chart showing $10-40K, $30-80K, $50-150K+ ranges
- Timeline visualizations (F2, F1): Horizontal timeline with milestones for transformation journey and 90-day roadmaps
- Decision trees (S1): Flowchart-style visualization for ML vs Agentic and Build vs Buy frameworks
- Agentic spectrum (S2): Horizontal slider/spectrum showing low to high autonomy levels
- Pitfall diagnostic flowchart (F2): Branching decision tree for identifying common pitfalls

**Interactive elements:**
- Toggle comparisons: Before/after context quality (S3), Level 3 vs Level 4 economics (F1), Chat AI vs Agentic tools (S3)
- Hover-reveal cards: Level definitions (F1), role details (F2), component deep dives (S2)
- Click-to-expand accordions: Pitfall details (F2), transformation story week-by-week (F2), context worksheet parts (S3)
- Interactive quizzes: 5 questions per module with answer selection, score calculation, explanations
- Self-assessments: Rating scales (1-5) for 6 dimensions with live score totaling and interpretation display
- Canvas animations: Iteration velocity visualization (F1), multi-agentic orchestration patterns (S3)
- Mini POCs: Context quality demonstration (S3) - show real-time AI response with vague vs structured context

**Icons (lucide-react):**
- CheckCircle2: Checkmarks for criteria met, completed steps, green flags
- AlertTriangle: Warnings for red flags, pitfalls, edge cases
- Lightbulb: Insights, key takeaways, "aha moments"
- TrendingUp: Growth metrics, ROI indicators, improvement trajectories
- Zap: Speed/efficiency indicators, rapid iteration emphasis
- Users: Team collaboration, role frameworks, partnership dynamics
- Settings/Cog: Configuration, tools, technical components
- BarChart: Data/analytics indicators, metrics tracking
- Brain: AI/LLM components, intelligence references
- Sparkles: New features, innovations, Level 5 autonomy

**AI-Generated Images:**
- 5 hero images for module title slides (F1, F2, S1, S2, S3)
- 5-7 level concept illustrations (L1-L5 in F1)
- 3-5 transformation story illustrations (F2 case studies)
- 3-5 framework diagrams (S1 decision trees)
- 4-5 component architecture visuals (S2)
- 5-7 context engineering/management illustrations (S3)
- All using handwritten style with orange palette per IMAGE_GENERATION_GUIDE.md

### Layout Design
Describe the slide layout using the existing design system:

**Grid structure:**
- Hero slides (module titles): Single column, centered, max-w-7xl, text-center, vertical spacing space-y-10 lg:space-y-16
- Two-column content slides: grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 (visual left 40%, content right 60%)
- Card grids (levels, roles, categories): grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6
- Five-column layouts (F1 level comparison): grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4
- Three-column layouts (pitfalls, frameworks): grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6
- Single column (quizzes, assessments): max-w-6xl mx-auto space-y-6 lg:space-y-8

**Spacing:**
- Container padding: p-8 lg:p-16 for standard slides, p-8 lg:p-24 for hero slides
- Content vertical spacing: space-y-6 lg:space-y-8 for sections, space-y-3 for tightly related elements
- Grid gaps: gap-3 for tight grids (badges), gap-4 md:gap-6 for standard grids, gap-8 lg:gap-12 for two-column layouts

**Component hierarchy:**
- Badge (module indicator): Badge variant="outline" or variant="glow" at top, text-sm px-4 py-2 or px-6 py-3 for hero slides
- Main title: h1 or h2 with font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight
- Subtitle: p with font-syne font-bold text-2xl md:text-4xl lg:text-5xl text-primary/80
- Content cards: Card component with CardContent, varying border/background based on emphasis (border-border/50 bg-muted/20 for standard, border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 for featured)
- Key insights: Highlighted cards with border-primary bg-orange/5 or shadow-glow for maximum emphasis

**Full-screen slide pattern:**
- All slides: `min-h-screen flex items-center justify-center p-8 lg:p-16` for perfect vertical centering
- Content wrapper: `max-w-6xl w-full` (or max-w-7xl for hero slides) for responsive width constraint

### Interactive & Animation Patterns
Detail the interactive elements that enhance visual appeal:

**Entrance animations (tw-animate-css):**
- Orchestrated sequence for hero slides:
  1. Badge: `animate-slide-in-down` (0ms)
  2. Title: `animate-fade-in delay-200 fill-backwards` (200ms)
  3. Subtitle: `animate-slide-in-up delay-400 fill-backwards` (400ms)
  4. Content: `animate-fade-in delay-600 fill-backwards` (600ms)
- Card grid stagger: `animate-fade-in fill-backwards` with `style={{ animationDelay: \`\${index * 100}ms\` }}`
- Total orchestration: ~1.5 seconds from start to finish

**Interactive reveals:**
- **Toggle comparisons** (Pattern 1 from INTERACTIVE_PATTERNS.md):
  - Use case: Before/after context quality (S3), Level 3 vs Level 4 economics (F1)
  - Implementation: Client component with useState, button to toggle between two states
  - Visual: Smooth transition-all duration-300, color changes (muted → primary for active state)

- **Hover-reveal cards** (Pattern 3 from INTERACTIVE_PATTERNS.md):
  - Use case: Level definitions (F1), role details (F2), component features (S2)
  - Implementation: Card with `group` class, nested content with `group-hover:opacity-100`
  - Visual: Scale-102 on hover, shadow intensifies (shadow-sm → shadow-lg)

- **Click-to-expand accordions** (Pattern 4 from INTERACTIVE_PATTERNS.md):
  - Use case: Pitfall sections (F2), transformation story details (F2), context worksheet parts (S3)
  - Implementation: Client component with useState for expanded state, conditional rendering
  - Visual: Chevron rotation on expand, smooth max-height transition

- **Canvas animations** (Pattern 2 from INTERACTIVE_PATTERNS.md):
  - Use case: Iteration velocity dashboard (F1), multi-agentic orchestration (S3)
  - Implementation: useEffect with requestAnimationFrame for smooth 60fps rendering
  - Visual: Animated lines, particles, or progress bars showing process over time

- **Mini POCs** (Pattern 5 from INTERACTIVE_PATTERNS.md):
  - Use case: Context quality demonstration (S3) - show AI response quality difference
  - Implementation: Client component with textarea input, button to submit, simulated AI responses
  - Visual: Side-by-side comparison with color coding (red for poor quality, green for high quality)

**Hover effects:**
- Cards: `transition-all duration-300 hover:shadow-xl hover:scale-105`
- Buttons: `hover:bg-primary/90 transition-colors duration-200`
- Interactive elements: `hover:border-primary transition-colors duration-300`

**Transitions:**
- State changes: `transition-all duration-300` for smooth property changes
- Color changes: `transition-colors duration-200` for faster color-only transitions
- Scale/transform: `transition-transform duration-300` for hover effects

**Pop-up logic:**
- Quiz explanations: onClick triggers state change, explanation appears with fade-in animation
- Assessment results: After rating all dimensions, onClick "Calculate Score" shows interpretation section
- Expanded details: onClick on card/accordion header toggles expanded state, content slides down with max-height transition

### Color & Typography Usage
Specify how the design system will be applied:

**Color scheme:**
- **Primary orange (#FF4D00)**:
  - Badge backgrounds for emphasis (variant="default" or variant="glow")
  - Border accents on featured cards (border-primary/40)
  - Key text emphasis (text-primary for subtitles, keywords)
  - Icon highlights (Lightbulb, TrendingUp in featured contexts)
  - Shadow glows (shadow-glow, shadow-glow-lg for hero CTAs)
  - Limited usage (10-20% of visual elements to maintain impact)

- **Status colors**:
  - Basic/Level 1-2: Muted gray (text-muted-foreground, bg-muted/20)
  - Warning/Level 3: Amber/yellow (border-warning, bg-warning/10, text-warning)
  - Transformation/Level 4-5: Orange (border-primary, bg-primary/10, text-primary)

- **Neutral grays**:
  - Deep charcoal background: bg-background (#0A0A0A) for slide backgrounds
  - Near-white foreground: text-foreground (#FAFAFA) for primary text
  - Medium gray: text-muted-foreground (#A0A0A0) for secondary text, metadata
  - Light gray borders: border-border/50 for subtle card borders

- **Gradients** (use sparingly):
  - Hero slide backgrounds: `bg-gradient-to-br from-background via-background to-primary/5`
  - Featured cards: `bg-gradient-to-br from-primary/10 to-primary/5`
  - Atmospheric gradients: GradientMesh variant="warm" for subtle warmth

**Text hierarchy:**
- **Display titles (Bebas Neue)**: text-7xl (72px) to text-9xl (128px) for hero slides, leading-none tracking-tight, all-caps friendly
  - Mobile: text-6xl (60px)
  - Tablet: text-8xl (96px)
  - Desktop: text-9xl (128px)

- **Section headers (Syne)**: text-4xl (36px) to text-6xl (60px) for content slide titles, font-bold
  - Mobile: text-4xl (36px)
  - Tablet: text-5xl (48px)
  - Desktop: text-6xl (60px)

- **Subtitles/emphasis (Syne)**: text-2xl (24px) to text-5xl (48px) for emphasized text, font-semibold or font-bold
  - Mobile: text-2xl (24px)
  - Desktop: text-4xl to text-5xl (36-48px)

- **Body text (Manrope)**: text-base (16px) to text-xl (20px) for paragraphs, descriptions, lists
  - Mobile: text-sm (14px) to text-base (16px)
  - Desktop: text-lg (18px) to text-xl (20px)

- **Code/technical (JetBrains Mono)**: text-xs (12px) to text-sm (14px) for inline code, API endpoints, technical annotations

**Contrast ratios (WCAG AA compliance):**
- Body text (#FAFAFA on #0A0A0A): 19.8:1 (exceeds AAA standard)
- Muted text (#A0A0A0 on #0A0A0A): 6.7:1 (exceeds AA standard)
- Orange large text (#FF4D00 on #0A0A0A): 5.8:1 (meets AA for large text ≥18px)
- Warning color (#FFB800 on #0A0A0A): 7.2:1 (exceeds AA standard)

**Font weights:**
- Bebas Neue: 400 (single weight available, ultra-condensed)
- Syne: 600 (semi-bold) for subtitles, 700 (bold) for emphasis, 800 (extra-bold) for impact
- Manrope: 400 (regular) for body, 600 (semi-bold) for emphasis, 700 (bold) for strong emphasis
- JetBrains Mono: 400 (regular) for code, 500 (medium) for emphasized code

### Accessibility Checklist
List accessibility requirements to ensure inclusive design:

- [ ] **Color contrast meets WCAG AA standards** (4.5:1 minimum for body text, 3:1 for large text ≥18px)
  - Verify #FAFAFA on #0A0A0A (body text) = 19.8:1 ✓
  - Verify #A0A0A0 on #0A0A0A (muted text) = 6.7:1 ✓
  - Verify #FF4D00 on #0A0A0A (orange large text) = 5.8:1 ✓
  - Verify warning/success colors meet standards

- [ ] **All interactive elements have visible focus states**
  - Use `focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2` (orange ring, 50% opacity)
  - Global default: `* { @apply outline-ring/50 }` in globals.css
  - Test by tabbing through all buttons, links, form inputs, quiz options, assessment ratings

- [ ] **Text is readable at minimum font size** (16px for body text)
  - Mobile: text-sm (14px) minimum for captions/metadata, text-base (16px) for body
  - Desktop: text-base (16px) minimum for captions, text-lg (18px) for body
  - Never use text smaller than 12px (text-xs) except for technical annotations

- [ ] **Icons paired with text labels or ARIA labels**
  - Good: `<Badge><Sparkles aria-hidden="true" />Module 01</Badge>` (icon decorative, text provides context)
  - Good: `<Sparkles aria-label="New feature" />` (icon standalone, aria-label provides context)
  - Avoid: `<Sparkles />` alone with no text or aria-label

- [ ] **Keyboard navigation works for all interactive elements**
  - Tab: Navigate through buttons, links, form inputs (logical order)
  - Enter/Space: Activate buttons, toggle accordions, select quiz answers
  - Arrow keys: Navigate slides (already implemented in PresentationContainer)
  - P: Toggle presenter mode (already implemented)
  - Escape: Close modals/popups (if implemented)

- [ ] **Screen reader compatible** (semantic HTML, ARIA attributes)
  - Use proper heading hierarchy: h1 for slide titles, h2 for sections, h3 for subsections
  - Use semantic elements: `<section>` for slides, `<nav>` for navigation, `<button>` for actions (not `<div onClick>`)
  - Add ARIA labels where needed: `aria-label`, `aria-describedby`, `aria-live` for dynamic content
  - Mark decorative elements: `aria-hidden="true"` for GrainOverlay, GeometricPattern, decorative icons

- [ ] **Motion can be reduced** (respects prefers-reduced-motion)
  - All animations use CSS `@media (prefers-reduced-motion: reduce)` rule in globals.css
  - Animations → instant state changes (0.01ms duration)
  - Test by enabling "Reduce motion" in OS settings
  - Verify slides still functional with animations disabled

### Component Implementation Notes
Technical notes for implementing the visual design:

**shadcn/ui components to use:**
- **Badge**: Module indicators, tags, status labels
  - Variants: `default` (solid orange), `outline` (bordered), `gradient` (orange gradient), `glow` (orange glow shadow), `brutal` (brutalist shadow)
  - Usage: `<Badge variant="glow" className="text-sm px-6 py-3">Module F1</Badge>`

- **Card** + **CardContent**: Content containers, level definitions, role cards, framework sections
  - Variants: `default` (subtle), `layered` (multi-layer shadow), `glow` (orange glow), `brutal` (brutalist), `glass` (semi-transparent)
  - Usage: `<Card variant="glow"><CardContent className="p-6">...</CardContent></Card>`

- **Button**: CTAs, quiz submit, toggle controls, navigation
  - Variants: `default` (solid orange), `outline` (bordered), `gradient` (orange gradient), `brutal` (brutalist), `glow` (orange glow)
  - Usage: `<Button variant="glow" onClick={handleClick}>Submit Quiz</Button>`

- **Accordion** (if needed): Expandable pitfall sections, detailed transformations
  - Usage: `<Accordion type="single" collapsible><AccordionItem value="item-1">...</AccordionItem></Accordion>`

- **HoverCard** (if needed): Additional info on hover for dense content
  - Usage: `<HoverCard><HoverCardTrigger>Term</HoverCardTrigger><HoverCardContent>Definition</HoverCardContent></HoverCard>`

**Custom components needed:**
- **QuizComponent**: Reusable quiz component with question display, answer selection, score tracking, explanations
  - Props: `questions: Question[]`, `passingScore: number`, `onComplete: (score: number) => void`
  - State: `selectedAnswers`, `showExplanations`, `score`
  - Features: Answer highlighting (green for correct, red for incorrect), explanation reveal, retry functionality

- **AssessmentComponent**: Reusable self-assessment component with rating scales, score calculation, interpretation
  - Props: `dimensions: Dimension[]`, `interpretations: Interpretation[]`
  - State: `ratings: Record<string, number>`, `totalScore`, `interpretation`
  - Features: 1-5 rating scales (radio buttons or slider), live score calculation, interpretation display based on score ranges

- **ToggleComparison**: Before/after toggle component for context quality, economics comparisons
  - Props: `beforeContent: ReactNode`, `afterContent: ReactNode`, `beforeLabel: string`, `afterLabel: string`
  - State: `activeView: 'before' | 'after'`
  - Features: Toggle button, smooth transition, color-coded states

- **DecisionTree**: Interactive decision tree for ML vs Agentic, Build vs Buy
  - Props: `tree: TreeNode`, `onNodeClick?: (node: TreeNode) => void`
  - Implementation: Recursive component rendering nodes and branches, clickable nodes for expansion
  - Features: Expand/collapse branches, highlight selected path, visual connectors

**Recharts configuration (for data visualizations):**
- **Iteration Economics Chart (F1)**:
  ```tsx
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={iterationData}>
      <XAxis dataKey="iteration" label={{ value: 'Iteration Number', position: 'insideBottom' }} />
      <YAxis label={{ value: 'Accuracy %', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Line type="monotone" dataKey="accuracy" stroke="#FF4D00" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
  ```
  - Color array: `["#FF4D00", "#00BBFF", "#FFB800"]` (orange, cyan, amber)
  - Responsive: Use ResponsiveContainer, adjust height based on screen size

- **ROI Ranges Chart (S1)**:
  ```tsx
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={roiData} layout="vertical">
      <XAxis type="number" label={{ value: 'Annual ROI ($K)', position: 'insideBottom' }} />
      <YAxis type="category" dataKey="category" />
      <Tooltip />
      <Bar dataKey="minROI" fill="#FF4D00" />
      <Bar dataKey="maxROI" fill="#FF6A00" />
    </BarChart>
  </ResponsiveContainer>
  ```

**Animation libraries:**
- **tw-animate-css utilities**: animate-slide-in-down, animate-fade-in, animate-scale-in, animate-glow-pulse
- **Custom keyframes**: grain-animation (8s stepped infinite for GrainOverlay)
- **Delay classes**: delay-100 through delay-600 (incremental 100ms delays for staggered reveals)
- **Fill-backwards**: `fill-backwards` class to prevent flash before animation starts

**State management:**
- **Client components** (`"use client"` directive):
  - Quizzes: useState for selectedAnswers, score, showExplanations
  - Assessments: useState for ratings, totalScore, interpretation
  - Toggle comparisons: useState for activeView ('before' | 'after')
  - Click-to-expand: useState for expanded state (boolean or string ID)
  - Canvas animations: useEffect for animation loop with requestAnimationFrame

- **Server components** (default):
  - Static slides without interactivity
  - Content that doesn't require client-side state

## Validation Commands
Execute every command to validate the feature works correctly with zero regressions.

- `pnpm run build` - Build the presentation to validate no TypeScript or build errors (must complete with 0 errors, 0 warnings)
- `pnpm run lint` - Run linting to validate code quality (must pass with 0 errors, 0 warnings)
- Visual inspection: Test slide navigation, animations, and interactive elements in browser
  - Navigate through all 5 modules using arrow keys, verify smooth transitions
  - Test presenter mode (press P), verify speaker notes display
  - Test all 4 learning paths, verify correct slide filtering for each role
  - Interact with quizzes (answer questions, submit, verify score calculation)
  - Interact with assessments (rate dimensions, verify score totals and interpretations)
  - Test toggle comparisons (before/after state changes work smoothly)
  - Test hover-reveal cards (details appear on hover, no layout shift)
  - Test click-to-expand accordions (expand/collapse works, smooth animations)
  - Verify all images load correctly, check alt text is present
  - Test keyboard navigation (Tab through all interactive elements, verify focus states visible)
  - Test responsive behavior (resize browser from mobile to desktop, verify layouts adapt)

## Notes
**Additional notes, future considerations, or context relevant to the feature:**

### Content Sources & References
- All content is sourced from `courses_to_build/education_v2/` directory
- 5 modules (F1, F2, S1, S2, S3) are well-documented with improvement specifications (SPEC-001 to SPEC-008 completed)
- Knowledge components in `resources/knowledge_components/` provide reusable building blocks (frameworks, decision trees, stories)
- ROI calculations and case studies in `resources/economics/` should be referenced for accurate financial data

### Design System Compliance
- **ESSENTIAL:** DESIGN_AESTHETICS.md is the single source of truth for all visual decisions
- **ESSENTIAL:** PRESENTATION_DESIGN_GUIDELINES.md provides complete layout patterns and component usage rules
- **ESSENTIAL:** IMAGE_GENERATION_GUIDE.md specifies image style and generation workflow
- Do NOT deviate from established design system (colors, typography, spacing, animations, component variants)
- Consistency across all 70-84 slides is critical for professional polish

### Image Generation Workflow
- All AI-generated images use Gemini API via `generate-image.ts` CLI tool
- Handwritten illustration style with warm orange tones (#F5A623, #FF4D00) and charcoal outlines
- 16 predefined templates available (hero-bold, concept-ai, concept-transformation, dataviz-grid, background-geometric, etc.)
- Generate images BEFORE building slides to have assets ready
- Save all images to `public/generated-images/` directory with metadata JSON files

### Interactive Patterns Priority
- Prioritize "Show, Don't Tell" philosophy from INTERACTIVE_PATTERNS.md
- Prefer interactive demonstrations over static text-heavy slides
- Use toggles for comparisons (before/after, poor vs excellent)
- Use canvas animations for time-based processes (iteration cycles, transformation journeys)
- Use hover-reveals for exploring details on demand (level features, role responsibilities)
- Use mini POCs for teaching complex concepts (context quality demonstration)

### Learning Path Filtering Logic
- Executive path: F1 (all), F2 (all), S1 (high-level only, skip deep technical) → ~70 min
- AI Champion path: ALL slides from F1, F2, S1, S2, S3 → ~110 min (complete curriculum)
- Agent Manager path: F1 (all), F2 (all), S1 (brief), S3 (deep context engineering focus), skip S2 → ~85 min
- Developer path: F1 (all), F2 (all), S1 (brief), S2 (all), S3 (all) → ~95 min
- Implement filtering in path route components by selecting slide IDs from registry based on role requirements

### Atomic Slide Composition
- Each slide is a standalone React component that can be reused across courses and paths
- Slides are organized by module (f1/, f2/, s1/, s2/, s3/) for maintainability
- Slide registry (`config/slides.ts`) maps IDs to components and metadata
- Lazy loading enabled for performance with 80+ slides

### Quiz & Assessment Implementation
- Quizzes: 5 questions per module, 80% passing score (4/5 correct), unlimited attempts
- Quiz questions should test: Concepts (definitions, frameworks), Application (scenarios, decision-making), Strategic understanding (when to use, why it matters)
- Assessments: 6 dimensions per assessment, 1-5 rating scale, score totals with interpretations (e.g., 6-12 = Early Stage, 13-18 = Building Capability, etc.)
- Both should be client components with useState for interactivity

### Performance Considerations
- Lazy loading critical for 80+ slide performance (already implemented in infrastructure)
- Optimize images: Target 0.5-5MB per image (check with IMAGE_GENERATION_GUIDE.md validation warnings)
- Use IntersectionObserver for card grid animations (only animate when visible)
- Debounce interactive elements (quiz answer selection, assessment rating changes)
- Minimize re-renders: use React.memo for expensive components, useMemo for calculations

### Accessibility Priorities
- Keyboard navigation is critical: Tab order logical, focus states visible, all actions keyboard-accessible
- Screen reader support: Semantic HTML, ARIA labels, proper heading hierarchy
- Color contrast: WCAG AA minimum (4.5:1 for body text, verified for design system colors)
- Motion preferences: Respect prefers-reduced-motion (already implemented in globals.css)
- Alt text: Descriptive, functional, <150 characters for all AI-generated images

### Future Enhancements (Out of Scope for This Feature)
- Analytics tracking: Track slide views, time on slide, quiz scores, path completion rates
- Export to PDF: Allow users to export learning path slides as PDF for offline viewing
- Bookmarking: Save progress, resume from last viewed slide
- Collaborative notes: Allow users to add personal notes to slides (synced to user account)
- Multi-language support: Translate slides to other languages (Spanish, French, German, etc.)
- Video integration: Embed video explanations for complex concepts
- Live presentation mode: Instructor-led delivery with audience following along on their devices
