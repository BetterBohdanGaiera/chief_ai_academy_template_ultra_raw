# Plan Slide Redesign

Orchestrate parallel slide planning by reading source content, organizing slides into groups, and spawning multiple `slide-planner` agents simultaneously.

---

## VISUAL-FIRST DESIGN PHILOSOPHY (READ THIS FIRST)

**Core Principle: "Show, Don't Tell"**

Before planning ANY slide, ask yourself: **"Can this be shown instead of told?"**

### The Visual-First Mandate

Every slide should prioritize visual communication over text:

| ❌ Text-Heavy Approach | ✅ Visual-First Approach |
|------------------------|-------------------------|
| Bullet points listing benefits | Interactive toggle showing before/after |
| Paragraph explaining process | Canvas animation demonstrating flow |
| Static text describing options | Hover-reveal cards for exploration |
| Written comparison | Side-by-side visual contrast |

### Text-to-Visual Ratio Target

**Target: Maximum 30% text, minimum 70% visual elements**

Visual elements include:
- Interactive components (toggles, buttons, hover states)
- Data visualizations (charts, graphs, diagrams)
- Canvas animations and algorithmic art
- AI-generated images at appropriate opacity
- Icons and visual metaphors
- Structured layouts (cards, grids)

### Visual-First Checklist (Apply to EVERY Slide)

Before finalizing a slide plan, verify:
- [ ] **Primary message is visual** - The core concept is shown, not just described
- [ ] **Text supports visuals** - Labels, captions, and explanations enhance visuals
- [ ] **Interactive where possible** - Concepts that benefit from exploration have interactivity
- [ ] **Data is visualized** - Numbers and comparisons use charts or visual metaphors
- [ ] **"Can this be shown?"** question was explicitly asked and answered

### When to Invoke Skills

**IMPORTANT**: Most slides benefit from skills. Make skill usage explicit in planning:

| Slide Needs | Skill to Use |
|-------------|--------------|
| Flow fields, particles, procedural art | `algorithmic-art` |
| Canvas animations, network visualizations | `algorithmic-art` |
| Complex React UI, state management | `artifacts-builder` |
| Standard cards, badges, layouts | `artifacts-builder` (default) |
| Interactive toggles, hover states | `artifacts-builder` |

Reference: `ai_docs/INTERACTIVE_PATTERNS.md` for complete pattern implementations

---

## CRITICAL: PLANNING ONLY - NO EXECUTION

**THIS COMMAND ONLY CREATES SPECIFICATION FILES. IT MUST NEVER:**

- Create or modify any `.tsx` slide component files
- Edit `config/slides.ts`
- Edit any `page.tsx` files
- Run any build or dev commands
- Generate any images
- Implement any code whatsoever

**ALLOWED ACTIONS:**
- Read source content files
- Read design documentation (`ai_docs/`)
- Write specification files to `specs/` folder ONLY
- Report created spec file paths

**OUTPUT**: Markdown specification files in `specs/` folder

**IMPLEMENTATION**: Use `/implement_slide_redesign` command separately (AFTER reviewing specs)

---

## Instructions

When the user invokes this command, you act as the **MASTER ORCHESTRATOR** responsible for:
1. Understanding ALL source content at a master level
2. Organizing slides into groups (max 4 per group)
3. Spawning `slide-planner` agents IN PARALLEL (one per group)
4. Collecting and reporting spec file paths

---

## Phase 1: Master-Level Understanding

Before spawning any agents, YOU (the orchestrator) must complete these steps:

### 1.1 Parse User Input

Extract from `$ARGUMENTS`:
- **Module identifier** (e.g., F1, F2, S1, S2, S3, vlada, etc.)
- **Total number of slides** requested
- **Slide descriptions/topics** (list of what each slide should cover)
- **Source content path** (file/folder provided by user)

**Example Input:**
```
F1 slides 1-8: title, why levels, overview, level 1, level 2, level 3, level 4, level 5. Source: data_vlada/presentation.md
```

**Parsed Result:**
- Module: F1
- Total slides: 8
- Slide topics: [title, why levels, overview, level 1, level 2, level 3, level 4, level 5]
- Source: data_vlada/presentation.md

### 1.2 Read ALL Source Content

**CRITICAL**: Read the ENTIRE source material provided by the user using the Read tool.

- If file path → Read the file completely
- If folder path → Read relevant files in the folder (use Glob to find them first)
- If inline text → Parse the provided text directly

**Understand and extract:**
- Main themes and concepts
- Key data points, statistics, examples
- Learning objectives
- How content maps to each requested slide
- Visual metaphors and imagery opportunities

### 1.3 Calculate Agent Distribution

Based on total slides, determine number of agents needed:

| Total Slides | Agents | Spec Files |
|--------------|--------|------------|
| 1-4          | 1      | 1          |
| 5-8          | 2      | 2          |
| 9-12         | 3      | 3          |
| 13-16        | 4      | 4          |

**Formula:** `num_agents = ceil(total_slides / 4)`

### 1.4 Organize Slides into Groups

Assign slides to groups with **THEMATIC COHERENCE**:
- Group slides that cover related topics together
- Maximum 4 slides per group
- Each group becomes one spec file
- Balance workload across groups

**Example for 8 slides:**
```
Group 1 (Introduction & Context): slides 1-4
  - title, why levels, overview, level 1

Group 2 (Advanced Levels): slides 5-8
  - level 2, level 3, level 4, level 5
```

### 1.5 Extract Context for Each Group

For EACH group, prepare a context package containing:
- **Slide assignments**: Which slides this agent will plan (IDs and descriptions)
- **Relevant content summary**: Extracted portions of source material for these slides
- **Expected spec filename**: e.g., `f1-spec-1-slides-1-4-redesign.md`
- **Source path**: Original path so agent can re-read if needed

---

## Phase 2: Spawn Agents in Parallel

### 2.1 Show Plan to User

Before spawning agents, display your plan:

```markdown
## Planning [N] slides across [M] agents in parallel

### Group 1: [Theme Name]
- **Slides**: [1-4]
- **Topics**: [list of slide topics]
- **Spec file**: specs/[module]-spec-1-slides-1-4-redesign.md

### Group 2: [Theme Name]
- **Slides**: [5-8]
- **Topics**: [list of slide topics]
- **Spec file**: specs/[module]-spec-2-slides-5-8-redesign.md

Spawning [M] slide-planner agents now...
```

### 2.2 Spawn ALL Agents in a SINGLE Message

**CRITICAL**: You MUST spawn ALL agents in ONE message using multiple Task tool calls. Do NOT spawn agents sequentially.

For EACH group, create a Task tool call with:

```
subagent_type: "slide-planner"
description: "Plan [Module] slides [range]"
prompt: [See template below]
```

### 2.3 Agent Prompt Template

Use this template for each agent's prompt (customize the bracketed sections):

```
You are planning slides [START]-[END] for module [MODULE].

## Your Assignment

- **Slides to plan**: [comma-separated list of slide descriptions]
- **Spec filename**: specs/[module]-spec-[N]-slides-[range]-redesign.md
- **Source content path**: [path] (re-read if you need more detail than provided below)

## Pre-Extracted Context

[PASTE THE RELEVANT CONTENT SUMMARY FOR THIS GROUP HERE]

This context was extracted from the source by the orchestrator. You may use it directly or re-read the source file for additional detail.

## Instructions

Follow the slide-planner agent workflow to create ONE spec file:

1. **Review the provided context** - Use it as your primary source, re-read the original if needed
2. **Consult design patterns** - Read `ai_docs/components_inspiration/README.md` to find matching patterns
3. **Plan each slide** - Content breakdown, visual design recommendations, pattern selection
4. **Plan image generation** - CRITICAL: NO TEXT in background images (shapes/forms only)
5. **Write spec file** - Save to `specs/[filename].md` using the Write tool
6. **Return the spec file path** - Your final output must include the path created

## Design Documentation References

Read these before designing:
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 core interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (typography, colors, animations)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns and quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/[pattern-name]/` - Specific pattern details

## Critical Rules

- **Max 4 slides per spec** - You are creating exactly ONE spec file
- **NO TEXT in background images** - Use visual shapes/forms only
- **Pattern-first approach** - Always check components_inspiration/ before designing
- **Return file path** - Your final output MUST include the spec file path created

## STRICT BOUNDARIES - DO NOT VIOLATE

**YOU ARE A PLANNER, NOT AN IMPLEMENTER. YOU MUST NEVER:**
- Create or modify `.tsx` files
- Edit `config/slides.ts` or any `page.tsx`
- Write any React/TypeScript code
- Generate images
- Run build commands

**YOUR ONLY OUTPUT IS**: A single markdown spec file in `specs/` folder
```

### 2.4 Example: Spawning 2 Agents for 8 Slides

Send a SINGLE message with 2 Task tool calls:

```
Task 1:
  subagent_type: "slide-planner"
  description: "Plan F1 slides 1-4"
  prompt: |
    You are planning slides 1-4 for module F1.

    ## Your Assignment
    - Slides to plan: title, why levels matter, levels overview, level 1
    - Spec filename: specs/f1-spec-1-slides-1-4-redesign.md
    - Source content path: data_vlada/presentation.md

    ## Pre-Extracted Context
    [Introduction section content...]
    [Why levels matter section content...]
    [Overview section content...]
    [Level 1 section content...]

    ## Instructions
    [Full instructions as above...]

Task 2:
  subagent_type: "slide-planner"
  description: "Plan F1 slides 5-8"
  prompt: |
    You are planning slides 5-8 for module F1.

    ## Your Assignment
    - Slides to plan: level 2, level 3, level 4, level 5
    - Spec filename: specs/f1-spec-2-slides-5-8-redesign.md
    - Source content path: data_vlada/presentation.md

    ## Pre-Extracted Context
    [Level 2 section content...]
    [Level 3 section content...]
    [Level 4 section content...]
    [Level 5 section content...]

    ## Instructions
    [Full instructions as above...]
```

---

## Phase 3: Collect & Report

After ALL agents complete:

### 3.1 Collect Results

Each agent will return the spec file path it created. Gather all paths.

### 3.2 Report to User

Display the completion summary:

```markdown
## Slide Planning Complete

Created **[N] specifications** in parallel:

### Spec Files Created

| Spec File | Slides | Theme |
|-----------|--------|-------|
| `specs/[filename-1].md` | 1-4 | [theme name] |
| `specs/[filename-2].md` | 5-8 | [theme name] |

### Next Steps

Implement each spec using:
```
/implement_slide_redesign specs/[filename-1].md
/implement_slide_redesign specs/[filename-2].md
```

Or implement all at once by running the commands sequentially.

### Slide Registration Required (MANDATORY)

After implementation, ALL slides MUST be registered in:
1. **`config/slides.ts`** - Add slide metadata entries (id, component, module, title, tags, duration, notes)
2. **`app/page.tsx`** - Add slide IDs to defaultSlides array in correct order

**IMPORTANT**: Slides will NOT appear in the presentation until registered in BOTH files!
```

---

## Edge Cases

### Single Spec (≤4 slides)

If total slides ≤ 4, spawn only ONE agent:
- No need to show parallel plan
- Single spec file created
- Simpler output format

### Large Requests (>16 slides)

If total slides > 16, warn the user:
```
⚠️ Large request detected: [N] slides requested.

This will create [M] spec files with [M] parallel agents.
Consider breaking into smaller batches for better results.

Proceed? (The agents will be spawned if you continue)
```

### Missing Source Content

If no source path is provided:
```
❌ Error: No source content path provided.

Please specify the source file/folder containing the presentation content:

Example:
/plan_slide_redesign F1 slides 1-4: title, overview. Source: data_vlada/content.md
```

### Source File Not Found

If the source file doesn't exist, report the error and ask for correction.

---

## Key Points Summary

1. **PLANNING ONLY** - This command creates spec files, NEVER implements code
2. **YOU are the orchestrator** - Read all content first, then distribute to agents
3. **Parallel spawning is CRITICAL** - All agents in ONE message
4. **Max 4 slides per agent** - Each agent creates one spec file
5. **Context distribution** - Extract and pass relevant content to each agent
6. **Agents can re-read** - Provide source path so agents can get more detail if needed
7. **Report all spec paths** - Final output lists all created spec files
8. **NO `.tsx` FILES** - Never create or modify any component files

---

## User Input

$ARGUMENTS
