# Education Module - Restructured

**Status:** ✅ Complete
**Restructure Date:** 2025-11-15
**Structure:** 2 Courses (Foundation + Skills), 5 Modules, 4 Learning Paths

---

## New Structure Overview

### COURSE 1: FOUNDATION (~40 min, 2 modules)

**Who:** Everyone - establishes shared mental model

#### F1: Five Levels Framework (20 min)
- **Location:** `courses/foundation/f1_five_levels_framework.md`
- **Content:** All 5 levels + Level 3 trap + iteration economics
- **Key Concepts:** Rapid iteration (10-20 cycles/day), 200+ iterations to reach 95%+, Level 3 trap (70% → abandonment)

#### F2: Organization Structure (18 min)
- **Location:** `courses/foundation/f2_organization_structure.md`
- **Content:** Roles defined → Process stories (HR, Sales, Ops) → Transformation process
- **Key Concepts:** Agent Manager + Developer partnership, 4 key roles, real implementation stories

---

### COURSE 2: SKILLS (~55 min, 3 modules)

**Who:** Implementation teams, leaders, domain experts

#### S1: Choosing AI Technology (18 min)
- **Location:** `courses/skills/s1_choosing_ai_technology.md`
- **Content:** Four AI approaches (ML, Existing Tools, Custom Agentic, No AI) with 2-3 embedded examples per type + Context Engineering advantage + Three Solution Categories with ROI ranges + Decision Framework
- **Key Concepts:** When existing tools are sufficient vs custom build, context engineering control dimensions, hybrid strategy

#### S2: Understanding Agents (12 min)
- **Location:** `courses/skills/s2_understanding_agents.md`
- **Content:** Four Components (LLM, Tools, Memory, Autonomy) + Agentic Spectrum + Limitations & Vendor Evaluation + Strategic Decision Framework
- **Key Concepts:** Component checklist for evaluation, red flags vs green flags, integration depth check

#### S3: Managing AI (25 min)
- **Location:** `courses/skills/s3_managing_ai.md`
- **Content:** Management Shift (people→AI) + Agentic Builder Tools (Level 3.5: Cursor, Claude Code) + Context Engineering (5-step methodology with HR/Sales/Marketing examples) + Multi-Agentic Systems + What Non-Tech Can Do
- **Key Concepts:** Context engineering 5 steps, rapid iteration discovery, Agent Manager vs Developer scope

---

## Learning Paths by Role

**Location:** `learning_paths/`

### Executive Path (~70 min)
- **File:** `learning_paths/executive_path.md`
- **Modules:** F1 → F2 → S1 → Optional: S2, S3 overview
- **Focus:** Strategic understanding, build-vs-buy decisions, organizational readiness

### AI Champion Path (~110 min) - Complete Curriculum
- **File:** `learning_paths/ai_champion_path.md`
- **Modules:** F1 → F2 → S1 → S2 → S3 (full)
- **Focus:** Transformation leadership, team building, quality oversight

### Agent Manager Path (~85 min)
- **File:** `learning_paths/agent_manager_path.md`
- **Modules:** F1 → F2 → S1 (brief) → S3 (deep focus on context engineering)
- **Focus:** Context engineering mastery, process documentation, validation

### Developer Path (~95 min)
- **File:** `learning_paths/developer_path.md`
- **Modules:** F1 → F2 → S1 (brief) → S2 → S3
- **Focus:** Agent architecture, enabling rapid iteration, multi-agentic systems

---

## Supporting Resources

**Location:** `resources/`

### Knowledge Components (Single Source of Truth)
- **Location:** `resources/knowledge_components/`
- **What:** Reusable knowledge building blocks that modules reference (not duplicate)
- **Why:** Update once, changes propagate everywhere automatically
- **Categories:**
  - **Levels** (5 components): Individual level definitions (L1-L5)
  - **Level Relationships** (3 components): How levels connect (L3→L4 transition, L4→L5 transition, overview)
  - **Frameworks** (5 components): Iteration Economics, Four Roles, Context Engineering, ROI Calculation, Agent Evaluation
  - **Decision Trees** (2 components): ML vs Agentic, Build vs Buy
  - **Stories** (1 component): HR Onboarding Assistant
  - **Anti-Patterns** (1 component): Level 3 Trap
- **Key Documents:**
  - `README.md` - Component library index and usage guide
  - `COMPOSITION_RULES.md` - How to use and customize components
  - `COMPONENT_RELATIONSHIP_MAP.md` - Visual map of how components connect
- **Total:** 17 knowledge components with multiple presentation formats each
- **Guarantee:** Updating a knowledge component once → changes appear in ALL modules that reference it

### Glossary
- **File:** `resources/glossary.md`
- Technical definitions and key terms

### Quizzes
- **Location:** `resources/quizzes/`
- **File:** `all_quizzes.md`
- Interactive quizzes for reinforcement learning

### Economics Case Studies
- **Location:** `resources/economics/`
- 10 agent deployment case studies with detailed ROI data

### Use Cases
- **File:** `resources/use_cases_level_3_to_4.md`
- Real examples of Level 3 to Level 4 transformations

---

## Archived Materials

**Location:** `archive/`

### Old Structure
- **Directory:** `archive/modules/`
- Contains previous course1_strategy and course2_implementation structure
- Preserved for reference but deprecated

---

## File Structure

```
education_full/
├── README.md (this file)
├── RESTRUCTURE_SUMMARY.md (planning document)
│
├── courses/
│   ├── foundation/
│   │   ├── f1_five_levels_framework.md
│   │   └── f2_organization_structure.md
│   └── skills/
│       ├── s1_choosing_ai_technology.md
│       ├── s2_understanding_agents.md
│       └── s3_managing_ai.md
│
├── learning_paths/
│   ├── executive_path.md
│   ├── ai_champion_path.md
│   ├── agent_manager_path.md
│   └── developer_path.md
│
├── resources/
│   ├── glossary.md
│   ├── use_cases_level_3_to_4.md
│   ├── quizzes/
│   │   └── all_quizzes.md
│   └── economics/
│       └── (10 case study files)
│
└── archive/
    └── modules/
        └── (old structure)
```

---

## Usage Recommendations

### For Self-Paced Learning:
1. Start with your role's learning path
2. Read modules in sequence (prerequisites matter)
3. Complete interactive wrap-ups at end of each module
4. Refer to resources folder for deep dives

### For Instructor-Led Delivery:
1. Use learning paths to customize curriculum per audience
2. Foundation course (F1 + F2) establishes baseline for all
3. Skills course modules can be delivered separately or combined
4. Interactive wrap-ups work as breakout exercises

### For Team Training:
- **Executive Session:** Executive Path (70 min)
- **AI Champion Bootcamp:** Full curriculum (110 min over 2 days)
- **Agent Manager Workshop:** Agent Manager Path + hands-on context engineering (Full day)
- **Developer Onboarding:** Developer Path + technical deep dive (Full day)

---

## Key Design Decisions Implemented

### 1. Knowledge Component Architecture (Single Source of Truth)
✅ **17 knowledge components** extracted into `resources/knowledge_components/`
✅ **Modules reference components** instead of duplicating content
✅ **Update propagation:** Change a component once → appears in all referencing modules
✅ **Content duplication reduced:** From 80% to <20% for core frameworks
✅ **Big picture visibility:** Component relationship map shows how all concepts connect
✅ **Multiple presentation formats:** Each component provides full, summary, inline, visual, and/or checklist formats
✅ **Reference syntax:** Modules use `{{kc:component_id:format}}` to reference components

### 2. No Visual Descriptions
✅ Removed all visual design specs
✅ Pure content and messaging only
✅ Focused on key takeaways per slide

### 3. Embedded Examples (Not Separate Modules)
✅ 2-3 quick examples shown WITHIN concept slides
✅ Pattern: "ML Examples: churn prediction, demand forecasting, pricing"
✅ No branching to separate use-case modules

### 4. Running Stories in S3
✅ HR onboarding, Sales call analyzer, Marketing content quality used as continuous examples
✅ Shows how context is progressively added across 5 steps
✅ Demonstrates universal patterns across departments

### 5. Atomic Slides
✅ Each slide has one clear idea/concept
✅ Separate slides for separate ideas
✅ No overcrowded content

### 6. Connection to Top Picture
✅ Every module starts with "Why This Matters" linking to bigger picture
✅ Clear prerequisites listed
✅ "Connection to Bigger Picture" section
✅ "What's Next" recommendations by role

---

## Contact & Feedback

For questions or feedback on this restructured curriculum, contact the AI transformation team.

**Last Updated:** 2025-11-15
**Version:** 2.0 (Restructured)
**Status:** Ready for delivery
