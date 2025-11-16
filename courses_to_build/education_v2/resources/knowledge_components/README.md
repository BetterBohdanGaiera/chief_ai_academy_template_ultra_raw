# Knowledge Component Library

## Overview

Welcome to the **Knowledge Component Library** - the single source of truth for all core concepts, frameworks, and implementation stories across the Chief AI Academy curriculum.

This library implements a **knowledge component architecture** where frequently-used concepts are extracted into reusable components that can be referenced across multiple courses, modules, and learning paths. This ensures:

✅ **Single Source of Truth** - Update a concept once, changes propagate everywhere automatically
✅ **Consistency** - Same concept explained the same way across all modules
✅ **Maintainability** - Reduce content duplication from 80% to <20% for core frameworks
✅ **Big Picture Visibility** - Component relationship map shows how all concepts connect
✅ **Flexibility** - Multiple presentation formats (full, summary, visual, etc.) for different contexts

## Quick Start

### For Content Creators

**Before creating new content, ask:**
1. Which existing components can I reuse? (See [Component Catalog](#component-catalog))
2. How do these components relate? (See [COMPONENT_RELATIONSHIP_MAP.md](./COMPONENT_RELATIONSHIP_MAP.md))
3. What presentation format fits my audience? (See [COMPOSITION_RULES.md](./COMPOSITION_RULES.md))

**Component reference syntax:**
```markdown
{{kc:component_id:format}}

Examples:
{{kc:level_4_iterative_agents:full}}
{{kc:iteration_economics:summary}}
{{kc:four_roles_framework:visual}}
```

### For Learners

This library is the "back-end" of the curriculum. You don't interact with it directly - instead, you'll encounter these components seamlessly integrated into your learning modules.

**Example:** When you read about "Level 4: Iterative Agents" in Module F1, that content comes from the `level_4_iterative_agents` component in this library. When you see it referenced again in Module F2, it's the same authoritative source - ensuring consistency.

## Library Structure

```
knowledge_components/
├── README.md                          # This file - library index and usage guide
├── COMPONENT_RELATIONSHIP_MAP.md      # Visual map of component dependencies
├── COMPOSITION_RULES.md               # Rules for using components in modules
│
├── levels/                            # Individual level definitions (5 components)
│   ├── level_1_individual_ai.md
│   ├── level_2_generic_saas_tools.md
│   ├── level_3_no_code_automation.md
│   ├── level_4_iterative_agents.md
│   └── level_5_autonomous_agents.md
│
├── level_relationships/               # How levels connect (3 components)
│   ├── levels_overview.md
│   ├── level_3_to_4_transition.md     # THE CRITICAL transformation
│   └── level_4_to_5_transition.md
│
├── frameworks/                        # Core methodologies (5 components)
│   ├── iteration_economics.md
│   ├── four_roles_framework.md
│   ├── context_engineering_methodology.md
│   ├── roi_calculation_model.md
│   └── agent_evaluation_framework.md
│
├── decision_trees/                    # Strategic decision frameworks (2 components)
│   ├── ml_vs_agentic.md
│   └── build_vs_buy.md
│
├── anti_patterns/                     # What to avoid (1 component)
│   └── level_3_trap_story.md
│
├── stories/                           # Implementation case studies (1 of 3 complete)
│   ├── hr_onboarding_assistant.md     # ✅ Complete
│   ├── [sales_call_analyzer.md]      # ⏸️ Pending
│   └── [vendor_sla_tracker.md]       # ⏸️ Pending
│
└── _templates/                        # Component creation templates
    ├── level_template.md
    ├── level_relationship_template.md
    ├── framework_template.md
    ├── story_template.md
    └── decision_tree_template.md
```

## Component Catalog

### 1. Individual Level Components (5/5 Complete)

These define the five stages of AI adoption. Use these when explaining organizational AI maturity.

| Component | ID | Formats | Estimated Time | Key Topics |
|-----------|----|---------|----|------------|
| **Level 1: Individual AI** | `level_1_individual_ai` | full, summary, inline, visual | 3 min (full) | ChatGPT access, 10-20% productivity boost, zero organizational leverage |
| **Level 2: Generic SaaS** | `level_2_generic_saas_tools` | full, summary, inline, visual | 3 min (full) | Jasper, Copy.ai, quality ceiling, adoption failure loop |
| **Level 3: No-Code Automation** | `level_3_no_code_automation` | full, summary, inline, visual | 5 min (full) | Zapier, Make, THE TRAP, why it seems appealing, failure economics |
| **Level 4: Iterative Agents** | `level_4_iterative_agents` | full, summary, inline, visual | 5 min (full) | Rapid iteration (1-3/day), context engineering, transformation enabler, 95%+ reliability |
| **Level 5: Autonomous Agents** | `level_5_autonomous_agents` | full, summary, inline, visual | 4 min (full) | Multi-agent orchestration, full automation, governance, when to scale from L4 |

**When to use:**
- **Full format:** First introduction in learning path (F1 module)
- **Summary format:** Refresher or cross-reference in later modules
- **Inline format:** Quick definition when mentioning level in passing
- **Visual format:** Comparison tables, slides, quick reference cards

**Dependencies:**
- L1 → L2 → L3 → L4 → L5 (sequential progression)
- Most frameworks depend on L4 (transformation layer)

**Referenced by:**
- All course modules (F1, F2, S1, S2, S3)
- All learning paths (Executive, AI Champion, Agent Manager, Developer)
- Level relationship components
- Framework components (especially Iteration Economics, Four Roles)
- Implementation stories

### 2. Level Relationship Components (3/3 Complete)

These explain HOW levels connect and WHY transitions matter. Critical for understanding the big picture.

| Component | ID | Formats | Estimated Time | Key Topics |
|-----------|----|---------|----|------------|
| **Levels Overview** | `levels_overview` | full, summary, visual | 6 min (full) | How all 5 levels relate, progression path, comparison table, choosing your path |
| **L3→L4 Transition** | `level_3_to_4_transition` | full, summary, visual | 10 min (full) | **THE CRITICAL transformation**, why L3 fails (iteration economics), how L4 solves it, three paths to L4 |
| **L4→L5 Transition** | `level_4_to_5_transition` | full, summary, visual | 7 min (full) | When to scale from iterative to autonomous, multi-agent patterns, governance requirements |

**When to use:**
- **Levels Overview:** When learner needs big picture of all 5 levels and how they connect
- **L3→L4 Transition:** This is THE MOST IMPORTANT component - the "aha moment" for executives understanding why transformation is needed
- **L4→L5 Transition:** When discussing enterprise scale and autonomous systems

**Special note on L3→L4 Transition:**
This component is where the curriculum's core value proposition becomes clear. It explains:
- Why most AI projects fail (L3 trap)
- What makes successful AI transformation different (L4 rapid iteration)
- The iteration economics that determine success or failure
- Three paths to achieving L4 (co-located team, training, Agent Manager consulting)

Use **full format** for maximum impact in F1 and F2. Use **summary format** for refreshers in S1, S2, S3.

**Dependencies:**
- Depends on individual level components (L1-L5)
- L3→L4 also depends on `iteration_economics` framework

**Referenced by:**
- F1: Five Levels Framework (primary teaching)
- F2: Organization Structure (enables transformation)
- S1: Choosing AI Technology (decision context)
- All learning paths

### 3. Core Framework Components (5/6 Complete)

These provide the "how-to" methodologies for implementing Level 4 transformation.

| Component | ID | Formats | Estimated Time | Key Topics |
|-----------|----|---------|----|------------|
| **Iteration Economics** | `iteration_economics` | full, summary, visual, checklist | 8 min (full) | L3 vs L4 iteration cycles, cost per iteration, timeline to production, hidden complexity emergence |
| **Four Roles Framework** | `four_roles_framework` | full, summary, visual, checklist | 10 min (full) | Chief AI Officer, AI Champions, Agent Managers, AI Agent Developers, team sizing, critical partnership |
| **Context Engineering** | `context_engineering_methodology` | full, summary, step_by_step, checklist | 12 min (full) | 5-step process (Process Mapping, Data ID, Source Mapping, Structure Definition, Validation), quality checklist |
| **ROI Calculation** | `roi_calculation_model` | full, summary, visual, checklist | 10 min (full) | Investment components, return components, ROI formulas, sensitivity analysis, solution ranges |
| **Agent Evaluation** | `agent_evaluation_framework` | full, summary, visual, checklist | 8 min (full) | 4 components (LLM, Tools, Memory, Autonomy), vendor evaluation, red/green flags |
| **(1 framework TBD)** | - | - | - | Non-critical, can be added later |

**When to use:**
- **Iteration Economics:** When explaining why L3 fails and L4 succeeds, ROI justification, timeline planning
- **Four Roles Framework:** When discussing organizational structure, team composition, hiring plans
- **Context Engineering Methodology:** When teaching how to build Level 4 agents (S3 module deep dive)
- **ROI Calculation Model:** When building business case, economics case studies, executive presentations
- **Agent Evaluation Framework:** When evaluating vendors, choosing technology (S1, S2 modules)

**Presentation format guidance:**
- **Full:** Primary teaching in relevant module (Iteration Economics in F1, Context Engineering in S3, etc.)
- **Summary:** Cross-references and refreshers in other modules
- **Visual:** Comparison tables, diagrams for slides and quick reference
- **Checklist:** Practitioner guides, self-assessment tools, implementation resources

**Dependencies:**
- **Iteration Economics** depends on L3 and L4 (comparison framework)
- **Four Roles Framework** depends on L4 and Iteration Economics (roles enable rapid iteration)
- **Context Engineering** depends on L4 (methodology for building L4 agents)
- **Agent Evaluation** depends on L4 and L5 (evaluating agentic systems)
- **ROI Calculation** is independent (used across all levels)

**Referenced by:**
- Iteration Economics: F1, F2, all stories, L3→L4 transition, Level 3 Trap
- Four Roles: F2, all stories, learning paths
- Context Engineering: S3, all stories, Agent Manager learning path
- ROI Calculation: All economics case studies, all stories, executive path
- Agent Evaluation: S1, S2, Build vs Buy decision tree

### 4. Decision Tree Components (2/2 Complete)

These help executives and AI Champions make strategic technology choices.

| Component | ID | Formats | Estimated Time | Key Topics |
|-----------|----|---------|----|------------|
| **ML vs Agentic** | `ml_vs_agentic` | full, summary, visual, flowchart | 12 min (full) | 5 decision paths (ML, Existing Generic, Existing Data Access, Custom Agentic, No AI), four dimensions of control |
| **Build vs Buy** | `build_vs_buy` | full, summary, visual, checklist | 10 min (full) | Four-dimension test (Model Quality, Interface, Capabilities, Retrieval), hybrid strategy, vendor evaluation |

**When to use:**
- **ML vs Agentic:** Early in transformation planning (S1 module), when evaluating use cases
- **Build vs Buy:** After deciding on agentic approach, when evaluating vendors vs custom development

**Typical usage sequence:**
1. Use ML vs Agentic to determine if agentic approach is right
2. If yes (custom agentic path), then use Build vs Buy to decide implementation approach
3. If buy, then use Agent Evaluation Framework to assess vendors

**Dependencies:**
- **ML vs Agentic** depends on L3, L4, L5 (understanding options)
- **Build vs Buy** depends on Agent Evaluation Framework (vendor assessment)

**Referenced by:**
- S1: Choosing AI Technology (primary module for both)
- Executive learning path (strategic decision making)
- AI Champion learning path (technology selection responsibility)

### 5. Anti-Pattern Components (1/1 Complete)

These document failure patterns to help organizations avoid common traps.

| Component | ID | Formats | Estimated Time | Key Topics |
|-----------|----|---------|----|------------|
| **Level 3 Trap Story** | `level_3_trap_story` | full, summary, timeline, visual | 8 min (full) | Week-by-week failure timeline (Week 1 → Month 6), warning signs, escape routes, organizational scar tissue, -$25-30K ROI reality |

**When to use:**
- **Full format:** Warning story in F1 (why L3 fails), F2 (what to avoid organizationally)
- **Timeline format:** Visual representation of failure progression for slides/infographics
- **Summary format:** Quick reminder when discussing risks of no-code approaches

**Critical insight:**
This isn't just a "failure story" - it's pedagogically valuable because it:
1. Creates emotional urgency (executives recognize their own organization in the story)
2. Explains root cause (iteration economics, not tool quality)
3. Provides escape routes (how to pivot to L4 if already stuck)
4. Prevents resistance (understanding the trap prevents building AI skepticism)

**Dependencies:**
- Depends on `level_3_no_code_automation` (what L3 is)
- Depends on `iteration_economics` (why it fails)

**Referenced by:**
- F1: Five Levels Framework (warning story)
- F2: Organization Structure (what to avoid)
- Use cases resource files
- Executive learning path (risk awareness)

### 6. Implementation Story Components (1/3 Complete)

Real-world case studies demonstrating frameworks in action. These bring theory to life.

| Component | ID | Status | Formats | Estimated Time | Demonstrates |
|-----------|----|----|---------|-------|--------------|
| **HR Onboarding Assistant** | `hr_onboarding_assistant` | ✅ Complete | full, summary, iteration_log, roi_focus | 15 min (full) | L4, Iteration Economics, Context Engineering, Four Roles, ROI Calculation |
| **Sales Call Analyzer** | `sales_call_analyzer` | ⏸️ Pending | - | - | L4, tacit knowledge emergence, quality improvement |
| **Vendor SLA Tracker** | `vendor_sla_tracker` | ⏸️ Pending | - | - | L4, contract exceptions, compliance automation |

**HR Onboarding Assistant (Complete):**
- **Characters:** Sarah (Agent Manager, HR Director) + Marcus (AI Agent Developer)
- **Challenge:** New hire onboarding assistant with 2,000+ questions answered/year
- **Journey:** 20 iterations over 4 weeks, quality progression 60% → 96%
- **ROI:** 1,051% Year 1 ROI, 1.1 month payback, $58K investment → $150-300K value
- **Demonstrated Concepts:**
  - Four Roles Framework: Sarah = Agent Manager, Marcus = Developer, partnership model
  - Iteration Economics: Rapid iteration (1-3/day) enables 20+ cycles to production
  - Context Engineering: Hidden complexity revealed through iterations (benefits, PTO, systems access)
  - ROI Calculation: Detailed investment breakdown and return analysis

**When to use HR story:**
- **Full format:** Complete case study in F2, S3 (shows all frameworks working together)
- **Iteration_log format:** Developer-focused modules showing technical progression
- **ROI_focus format:** Executive presentations emphasizing business outcomes
- **Summary format:** Quick example when teaching specific frameworks

**Pending stories (Sales, Vendor SLA):**
- Will follow same multi-format structure as HR story
- Each demonstrates different aspects of L4 transformation
- Sales focuses on tacit knowledge emergence and quality improvement
- Vendor SLA focuses on contract exception handling and compliance

**Dependencies (HR story):**
- Depends on `level_4_iterative_agents`
- Depends on `iteration_economics`
- Depends on `context_engineering_methodology`
- Depends on `roi_calculation_model`
- Depends on `four_roles_framework`

**Referenced by:**
- F2: Organization Structure (roles in action)
- S3: Managing AI (context engineering example)
- Economics case studies (detailed ROI analysis)
- All learning paths (reinforcement of frameworks through real example)

## Component Presentation Formats

Every component provides **multiple presentation formats** for different learning contexts:

| Format | Length | When to Use | Example Use Cases |
|--------|--------|-------------|-------------------|
| **full** | Complete with examples | First introduction, detailed teaching | F1 introducing Level 4 for first time |
| **summary** | 2-3 sentences | Refresher, cross-reference | S3 referencing Iteration Economics learned in F1 |
| **inline** | 1 sentence definition | Passing mention, parenthetical | "Level 4 (rapid iteration AI) enables..." |
| **visual** | Diagram/table/chart | Slides, infographics, quick reference | Comparison table of L3 vs L4 economics |
| **checklist** | Actionable steps | Practitioner guides, self-assessment | Context Engineering implementation steps |
| **timeline** | Sequential events | Failure/success progressions | Level 3 Trap week-by-week timeline |
| **iteration_log** | Iteration-by-iteration | Developer-focused, technical depth | HR story showing 20 iterations with code changes |
| **roi_focus** | Business outcomes | Executive presentations, business case | HR story emphasizing 1,051% ROI |
| **flowchart** | Decision paths | Strategic choices | ML vs Agentic decision tree |
| **step_by_step** | Numbered process | Implementation guides | Context Engineering 5-step methodology |

**Format selection guidance:**
See [COMPOSITION_RULES.md](./COMPOSITION_RULES.md#presentation-format-selection-guide) for detailed recommendations.

## Component Relationships & Dependencies

**Visual overview:** See [COMPONENT_RELATIONSHIP_MAP.md](./COMPONENT_RELATIONSHIP_MAP.md) for comprehensive dependency diagram.

**Quick reference - Foundational components (build on these):**
- `level_1_individual_ai` - Entry point (0 dependencies)
- `level_4_iterative_agents` - Transformation enabler (1 dependency, 13+ dependents)
- `roi_calculation_model` - Universal framework (0 dependencies)

**Critical path for understanding curriculum:**
1. L1 → L2 → L3 (progression to the trap)
2. **`level_3_to_4_transition`** (THE CRITICAL moment - requires `iteration_economics`)
3. L4 → `four_roles_framework` → `context_engineering_methodology`
4. **`hr_onboarding_assistant`** (all frameworks in action)
5. L4 → L5 (scaling to autonomy)

**Component dependency rules:**
✅ **Acyclic** - No component A depends on B which depends on A
✅ **Resolvable** - All dependencies reference existing components
✅ **Logical** - Dependencies follow natural learning progression (L3 before L4, etc.)

## Usage Guidelines

### For Content Creators

**Starting a new module:**
1. Review this catalog to identify reusable components
2. Check [COMPONENT_RELATIONSHIP_MAP.md](./COMPONENT_RELATIONSHIP_MAP.md) for dependencies
3. Plan component sequence (introduce prerequisites first)
4. Choose presentation formats for audience and context
5. Write narrative text that connects components coherently

**Reference syntax:**
```markdown
<!-- Full component embed -->
{{kc:level_4_iterative_agents:full}}

<!-- Summary reference inline -->
As we learned in {{kc:iteration_economics:summary}}, iteration speed matters.

<!-- Visual only -->
{{kc:roi_calculation_model:visual}}
```

**Quality checklist:**
- [ ] Components referenced in logical dependency order
- [ ] First mention uses appropriate format (usually `full`)
- [ ] Subsequent mentions use `summary` or `inline`
- [ ] Context text connects components into narrative
- [ ] Format choice matches audience (executive vs technical)
- [ ] No circular dependencies introduced

### For Curriculum Maintainers

**Updating a component:**
1. Edit component file once (single source of truth)
2. Bump version in front-matter (1.0.0 → 1.1.0)
3. Update `last_updated` date
4. Changes propagate automatically to all referencing modules
5. Use COMPONENT_RELATIONSHIP_MAP.md for impact analysis

**Creating a new component:**
1. Use template from `_templates/` directory
2. Fill in front-matter metadata (id, title, category, tags, formats, dependencies)
3. Create 2-4 presentation formats minimum
4. Add to [COMPONENT_RELATIONSHIP_MAP.md](./COMPONENT_RELATIONSHIP_MAP.md)
5. Update this README catalog
6. Test references in target modules

**Validation commands:**
```bash
# Count components
find executive_track/education_full/resources/knowledge_components -name "*.md" -not -path "*/_templates/*" | wc -l

# Verify front-matter exists
grep -l "^---" executive_track/education_full/resources/knowledge_components/**/*.md

# Find component references in modules
grep -r "{{kc:component_id" executive_track/education_full/courses/
```

## Component Templates

Templates for creating new components are in `_templates/` directory:

- **level_template.md** - For individual level components (L1-L5 style)
- **level_relationship_template.md** - For transition components (L3→L4 style)
- **framework_template.md** - For methodological frameworks (Iteration Economics style)
- **story_template.md** - For implementation stories (HR Onboarding style)
- **decision_tree_template.md** - For strategic decision tools (ML vs Agentic style)

**Template structure:**
```yaml
---
# Front-matter metadata schema
id: unique_component_id
title: Component Title
category: levels|level_relationships|frameworks|stories|decision_trees|anti_patterns
tags: [tag1, tag2, tag3]
presentation_formats: [full, summary, inline, visual, checklist]
estimated_time:
  full: X minutes
  summary: Y seconds
dependencies: [other_component_id]
version: 1.0.0
last_updated: YYYY-MM-DD
---

# Component content in multiple formats...
```

## Related Documentation

- **[COMPONENT_RELATIONSHIP_MAP.md](./COMPONENT_RELATIONSHIP_MAP.md)** - Visual map of component dependencies and relationships
- **[COMPOSITION_RULES.md](./COMPOSITION_RULES.md)** - Detailed rules for when to embed vs reference components, format selection, customization patterns
- **Templates Directory** - `_templates/*.md` - Standardized templates for creating new components

## Statistics

**Current state (as of 2025-01-16):**
- Total components: **17 of 20** (85% complete)
  - ✅ 5/5 Individual Levels
  - ✅ 3/3 Level Relationships
  - ✅ 5/6 Frameworks (1 non-critical pending)
  - ✅ 2/2 Decision Trees
  - ✅ 1/1 Anti-Patterns
  - ⏸️ 1/3 Implementation Stories (2 pending)

**Content duplication reduction:**
- **Before:** 80-90% duplication for core frameworks
- **After:** Target <20% (single source of truth components)
- **Maintenance efficiency:** Update 1 file instead of 5-10

**Component reuse rate:**
- Most referenced: `level_4_iterative_agents` (13+ references)
- High impact: `iteration_economics` (7+ references)
- Universal: `roi_calculation_model` (used across all economics content)

## FAQs

**Q: When should I embed vs reference a component?**
A: Reference by default (single source of truth). Embed only for: (1) first introduction in learning path, (2) tiny content (<100 words, <3 references), (3) heavy customization (60%+), or (4) offline/print resources. See [COMPOSITION_RULES.md](./COMPOSITION_RULES.md) for decision tree.

**Q: How do I know which presentation format to use?**
A: Match format to context: `full` for first introduction/teaching, `summary` for refreshers/cross-references, `inline` for passing mentions, `visual` for slides/comparisons, `checklist` for implementation guides. See format selection guide above.

**Q: What if I need to customize a component for my context?**
A: Use context wrapping (add framing text before/after reference) for <40% customization. Fork the component (create new variant) only if you need 60%+ customization. See [COMPOSITION_RULES.md](./COMPOSITION_RULES.md#component-customization-patterns).

**Q: How do I know if updating a component will break anything?**
A: Check [COMPONENT_RELATIONSHIP_MAP.md](./COMPONENT_RELATIONSHIP_MAP.md) "Depended on by" section for impact analysis. Search codebase for component ID: `grep -r "component_id" executive_track/`. Most updates are non-breaking (clarity improvements, new examples).

**Q: Can components reference other components?**
A: Yes! But avoid circular dependencies. Check COMPONENT_RELATIONSHIP_MAP.md before adding dependencies. Example: `level_3_to_4_transition` references `iteration_economics`, which references `level_3_no_code_automation` and `level_4_iterative_agents`.

**Q: What's the difference between "levels" and "level_relationships" components?**
A: **Levels** define WHAT each level is (L1-L5 individual characteristics). **Level_relationships** explain HOW levels connect and WHY transitions matter (big picture, L3→L4 critical shift, L4→L5 scaling). Use levels for definitions, relationships for transformation story.

**Q: How do I add a new component?**
A: (1) Choose template from `_templates/`, (2) Fill metadata and create 2+ formats, (3) Add to COMPONENT_RELATIONSHIP_MAP.md, (4) Update this README catalog, (5) Test references in modules. See "For Curriculum Maintainers" section above.

---

**Document Version:** 1.0.0
**Last Updated:** 2025-01-16
**Library Status:** Phase 1 Complete (17/20 components), Phase 2 In Progress (relationship mapping and composition rules complete)
**Maintained by:** Curriculum Development Team
