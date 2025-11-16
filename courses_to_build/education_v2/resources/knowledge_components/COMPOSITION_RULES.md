# Knowledge Component Composition Rules

## Purpose

This document defines **when and how to use knowledge components** when creating or updating curriculum content. It provides clear guidelines for:

1. **Embed vs Reference** - When to duplicate content vs link to components
2. **Presentation Format Selection** - Choosing the right format for the context
3. **Component Customization** - How to adapt components for specific contexts
4. **Reference Syntax** - Standard markdown syntax for component references
5. **Quality Standards** - Ensuring component usage maintains learning effectiveness

## Core Principles

### 1. Single Source of Truth

**Rule:** Each core concept should exist in exactly ONE authoritative location.

✅ **Do:**
- Reference `level_4_iterative_agents` component when discussing Level 4
- Link to `iteration_economics` when explaining why iteration speed matters
- Use `hr_onboarding_assistant` story by reference in multiple modules

❌ **Don't:**
- Copy the Level 4 definition into module text
- Duplicate the Iteration Economics framework explanation
- Embed the HR story multiple times with slight variations

**Exception:** First introduction in a learning path may embed the component for pedagogical anchoring (see "When to Embed" below).

### 2. Pedagogical Effectiveness Over DRY

**Rule:** Learning effectiveness trumps pure technical efficiency.

Strategic repetition is valuable when it serves learning goals:
- Spaced repetition across modules reinforces concepts
- Context-specific framing helps different learner personas
- Critical transitions (L3→L4) deserve repeated emphasis

**Guideline:** Reference the component, but add context-specific framing around it.

### 3. Maintainability by Default

**Rule:** Default to referencing components unless there's a strong pedagogical reason to embed.

When in doubt, ask: "If this concept changes, should the update appear everywhere automatically?"
- If YES → Reference the component
- If NO → Embed (but document why)

## When to Embed vs Reference

### Embed (Duplicate Content) When:

| Criterion | Example | Rationale |
|-----------|---------|-----------|
| **First introduction in learning path** | F1 module embeds full Level 4 definition on first mention | Pedagogical anchoring - learner needs complete concept before seeing references |
| **Concept is tiny** | "Level 4 = rapid iteration" inline mention | < 100 words AND referenced < 3 times = embedding is more efficient than reference |
| **Heavy customization needed** | Industry-specific variation of ROI formula for healthcare sector | 60%+ of component would need to be changed = fork it instead of parameterize |
| **Standalone learning artifact** | PDF handout needs to work offline without links | Reference syntax doesn't work in print/offline formats |
| **Critical pedagogical moment** | The "aha moment" where L3→L4 transition clicks | Some concepts deserve full explanation in-place for maximum impact |

### Reference (Link to Component) When:

| Criterion | Example | Rationale |
|-----------|---------|-----------|
| **Concept appears 3+ times** | Level 4 definition used in F1, F2, S1, S2, S3 | Maintenance efficiency - update once, propagates everywhere |
| **Content is stable** | Five Levels framework definitions | Core concepts unlikely to need context-specific variations |
| **Refresher/reinforcement** | S3 references Iteration Economics learned in F1 | Spaced repetition via reference instead of full duplication |
| **Cross-module connection** | Implementation stories reference frameworks they demonstrate | Shows relationships between components |
| **Component has multiple formats** | Visual format for slides, full format for text | Component provides specialized formats for different contexts |

### Decision Tree: Embed or Reference?

```
Is this the first time the concept appears in this learning path?
├─ YES → Consider embedding (full format) for pedagogical anchoring
│         But add reference marker to show it's a component
└─ NO → Reference the component
     │
     └─ Is the concept < 100 words AND referenced < 3 times total?
        ├─ YES → Embed (maintenance overhead low)
        └─ NO → Reference (single source of truth wins)
             │
             └─ Do you need 60%+ customization for this context?
                ├─ YES → Fork the component (create context-specific variant)
                └─ NO → Reference with parameters (if customization needed)
```

## Reference Syntax

### Standard Component Reference Format

Use `{{kc:component_id:format}}` syntax to reference knowledge components.

**Anatomy:**
- `kc` = knowledge component (distinguishes from React components)
- `component_id` = unique ID from component front-matter
- `format` = presentation format (full, summary, inline, visual, checklist)

### Reference Examples

#### 1. Full Component Embed

```markdown
## Level 4: Iterative Agents

{{kc:level_4_iterative_agents:full}}
```

**When to use:** First introduction, detailed explanation needed, learner hasn't seen concept before.

**Renders as:** Complete component content with all sections, examples, visuals.

#### 2. Summary Reference

```markdown
As we learned in {{kc:iteration_economics:summary}}, the speed of iteration cycles
determines whether AI projects reach production quality.
```

**When to use:** Refresher, cross-reference, reminder of concept learned earlier.

**Renders as:** 2-3 sentence overview with key points, inline with surrounding text.

#### 3. Inline Mention

```markdown
Level 4 ({{kc:level_4_iterative_agents:inline}}) enables rapid iteration through
co-located Agent Manager + Developer partnerships.
```

**When to use:** Passing mention, definition reminder, quick reference.

**Renders as:** Single sentence definition, often in parentheses or as appositive.

#### 4. Visual Only

```markdown
### Comparison: Level 3 vs Level 4 Economics

{{kc:iteration_economics:visual}}
```

**When to use:** Slides, infographics, quick reference cards, visual learners.

**Renders as:** Diagram, table, chart, or infographic without explanatory text.

#### 5. Checklist Format

```markdown
### Validate Your Context Engineering

{{kc:context_engineering_methodology:checklist}}
```

**When to use:** Practitioner guides, implementation resources, self-assessment tools.

**Renders as:** Actionable steps or evaluation criteria in checkbox format.

#### 6. Component with Context

```markdown
## Real Implementation: HR Onboarding

Before we dive into the story, recall that {{kc:four_roles_framework:summary}}.
In this case study, Sarah plays the Agent Manager role while Marcus is the
AI Agent Developer.

{{kc:hr_onboarding_assistant:full}}

Notice how this story demonstrates {{kc:iteration_economics:summary}} in action—
they completed 20 iterations in 4 weeks because of rapid feedback loops.
```

**When to use:** Showing how components connect, building narrative coherence, reinforcing learning.

**Renders as:** Component content wrapped in contextual framing that connects to learner's journey.

### Reference Fallback Behavior

**If format doesn't exist:** System falls back to `full` format with warning.

**If component ID invalid:** System shows error message with suggestions.

**If circular reference:** System detects and blocks (see COMPONENT_RELATIONSHIP_MAP.md).

## Presentation Format Selection Guide

### Available Formats by Component Type

| Component Type | Typical Formats | Use Cases |
|---------------|----------------|-----------|
| **Levels** | full, summary, inline, visual | Full for first intro, summary for refreshers, inline for mentions, visual for comparisons |
| **Level Relationships** | full, summary, visual | Full for transformation story, visual for progression diagrams |
| **Frameworks** | full, summary, visual, checklist | Full for teaching, checklist for implementation, visual for reference |
| **Stories** | full, summary, iteration_log, roi_focus | Full for learning, iteration_log for developer audience, roi_focus for executives |
| **Decision Trees** | full, summary, visual, flowchart | Visual/flowchart for quick decisions, full for detailed analysis |
| **Anti-Patterns** | full, summary, timeline, visual | Timeline for failure progression, summary for warnings |

### Format Selection Decision Tree

```
What is the learning context?
├─ First exposure to concept
│  └─ Use: full format (complete explanation with examples)
│
├─ Refresher or cross-reference
│  └─ Use: summary format (2-3 sentence overview)
│
├─ Quick lookup or passing mention
│  └─ Use: inline format (single sentence definition)
│
├─ Visual presentation (slides, infographic)
│  └─ Use: visual format (diagram, table, chart only)
│
└─ Implementation or self-assessment
   └─ Use: checklist format (actionable steps)
```

### Audience-Specific Format Recommendations

| Audience | Preferred Formats | Rationale |
|----------|------------------|-----------|
| **Executives** | summary, visual, roi_focus | Time-constrained, need quick insights and ROI clarity |
| **AI Champions** | full, checklist | Need depth to teach others, implementation guidance |
| **Agent Managers** | full, iteration_log, checklist | Process experts need detailed examples and step-by-step guides |
| **Developers** | full, iteration_log, visual | Technical depth, code examples, architecture diagrams |

## Component Customization Patterns

### Pattern 1: Parameterized References (Future Feature)

**Concept:** Pass parameters to components to customize content without forking.

```markdown
{{kc:roi_calculation_model:full|industry=healthcare|company_size=500}}
```

**When to use:**
- Component supports parameterization (documented in front-matter)
- Customization is < 20% of content (variables, examples, specific numbers)
- Multiple contexts need similar but slightly different content

**Current status:** Not yet implemented. Use Pattern 2 (context wrapping) instead.

### Pattern 2: Context Wrapping

**Concept:** Reference component with context-specific framing before/after.

```markdown
## Healthcare-Specific ROI Calculation

In healthcare organizations, compliance costs add 15-20% to agent development.
Adjust the standard model accordingly:

{{kc:roi_calculation_model:full}}

For healthcare, add these compliance investment categories:
- HIPAA compliance review: $5-8K
- Security audit: $3-5K
- Documentation for regulatory approval: $2-4K
```

**When to use:**
- Need industry or role-specific framing
- Component is correct but needs additional context
- Building narrative coherence across module

✅ **Advantages:**
- Component remains pure/reusable
- Context makes learning more relevant
- Shows relationship to learner's situation

### Pattern 3: Component Forking

**Concept:** Create a variant component for heavily customized contexts.

**When to use:**
- Need 60%+ customization (component would be unrecognizable)
- Creating industry-specific curriculum (healthcare, finance, legal)
- Building role-specific learning paths with different emphasis

**Process:**
1. Copy component to new file: `roi_calculation_model_healthcare.md`
2. Update component ID in front-matter: `roi_calculation_model_healthcare`
3. Document relationship in front-matter:
   ```yaml
   forked_from: roi_calculation_model
   customization_reason: Healthcare compliance costs and ROI timelines
   ```
4. Add to COMPONENT_RELATIONSHIP_MAP.md
5. Use new component ID in references

❌ **Avoid forking if:**
- Customization is < 40% (use context wrapping instead)
- Only examples differ (parameterize or wrap)
- You're tempted to fork due to minor wording preferences (edit original instead)

### Pattern 4: Composite Components

**Concept:** Create a new component that composes multiple existing components.

**Example:**
```yaml
---
id: level_4_complete_guide
title: Complete Guide to Level 4 Transformation
category: guides
dependencies: [level_4_iterative_agents, iteration_economics, four_roles_framework, context_engineering_methodology]
---

# Complete Guide to Level 4 Transformation

## What is Level 4?
{{kc:level_4_iterative_agents:full}}

## Why Level 4 Works
{{kc:iteration_economics:full}}

## Organizational Structure
{{kc:four_roles_framework:full}}

## How to Build Level 4 Agents
{{kc:context_engineering_methodology:full}}
```

**When to use:**
- Creating learning path-specific guides
- Building printable resources that combine multiple components
- Providing role-specific "complete picture" views

## Quality Standards

### Component Reference Checklist

When adding a component reference to a module, verify:

- [ ] Component ID exists and matches filename
- [ ] Requested format is available in component front-matter
- [ ] Reference serves clear learning goal (not just "because DRY")
- [ ] Context before/after reference provides narrative coherence
- [ ] Learner has been introduced to prerequisite components (check dependencies)
- [ ] Format choice matches audience and learning context
- [ ] Reference doesn't create circular dependency

### Module Composition Checklist

When creating or refactoring a module with components:

- [ ] First mention of core concepts uses `full` format for anchoring
- [ ] Subsequent mentions use `summary` or `inline` formats
- [ ] Visual formats used for comparisons and quick reference
- [ ] Components referenced in logical dependency order (L1 before L2, L3 before L4, etc.)
- [ ] Transitions between components create narrative flow
- [ ] Context-specific framing connects components to module goals
- [ ] References don't fragment learning experience (not too many jumps)
- [ ] Module can stand alone for its learning path (even if referencing shared components)

### Anti-Patterns to Avoid

❌ **Reference Overload**
- Problem: Too many `{{kc:...}}` references make module feel disjointed
- Solution: Embed first mention (full), reference subsequent (summary/inline)

❌ **Format Mismatch**
- Problem: Using `visual` format in text-heavy narrative breaks flow
- Solution: Match format to context (full for teaching, visual for slides, etc.)

❌ **Missing Context**
- Problem: Component reference appears without introduction or transition
- Solution: Add framing sentences before/after reference

❌ **Dependency Violation**
- Problem: Referencing Level 4 before learner understands Level 3
- Solution: Check COMPONENT_RELATIONSHIP_MAP.md for dependency order

❌ **Pointless Embedding**
- Problem: Duplicating stable content that appears 5+ times
- Solution: Reference the component instead (single source of truth)

❌ **Over-Customization**
- Problem: Every module forks components for minor variations
- Solution: Use context wrapping for < 40% customization, parameterization for variables

## Special Cases

### Case 1: Learning Path First Exposure

**Scenario:** Executive learning path introduces Level 4 for the first time in F1. AI Champion learning path also introduces Level 4 in F1. Should both embed?

**Answer:** YES - both can embed on first exposure. This serves pedagogical anchoring for that learning path.

**Implementation:**
```markdown
<!-- In F1 Module (common to all paths) -->
## Level 4: Iterative Agents
{{kc:level_4_iterative_agents:full}}
```

Both learning paths reference F1, so first exposure is shared. Subsequent modules reference Level 4 in summary format.

### Case 2: Role-Specific Emphasis

**Scenario:** AI Champions need deep context engineering details. Executives need high-level summary only.

**Answer:** Use different presentation formats for different audiences.

**Implementation:**
```markdown
<!-- Executive Path: S3 Module -->
AI agents require context engineering: {{kc:context_engineering_methodology:summary}}

<!-- AI Champion Path: S3 Module -->
## Mastering Context Engineering
{{kc:context_engineering_methodology:full}}

Now let's practice each step:
{{kc:context_engineering_methodology:checklist}}
```

### Case 3: Print/Offline Resources

**Scenario:** Creating PDF handout that learners will use offline without links.

**Answer:** Embed components in print resources since references won't work.

**Implementation:**
1. Create print-specific composite component (see Pattern 4)
2. Mark as `presentation_context: offline` in front-matter
3. Embed all necessary components in single printable file
4. Don't use this composite in online modules (defeats single source of truth)

### Case 4: Updating Core Components

**Scenario:** Level 4 definition evolves. How do updates propagate?

**Answer:**
1. Update `level_4_iterative_agents.md` component (single source of truth)
2. Version bump in front-matter (1.0.0 → 1.1.0)
3. All modules referencing this component automatically show updated content
4. No manual synchronization needed

**Validation:**
```bash
# Find all modules referencing Level 4
grep -r "level_4_iterative_agents" executive_track/education_full/courses/

# Verify updated content appears in each
```

See COMPONENT_RELATIONSHIP_MAP.md for impact analysis before major updates.

## Workflow Guidelines

### Creating New Content: Component-First Approach

1. **Plan with components** - Before writing, ask: "Which existing components can I reuse?"
2. **Check the component library** - Review `knowledge_components/README.md` catalog
3. **Map dependencies** - Use COMPONENT_RELATIONSHIP_MAP.md to understand component relationships
4. **Design narrative flow** - Plan how components will be sequenced and connected
5. **Choose formats** - Select presentation formats based on audience and context
6. **Add context** - Write framing text that connects components into coherent narrative
7. **Validate references** - Run reference validation (see below)

### Refactoring Existing Content: Extract Components

1. **Identify duplication** - Find content repeated 3+ times across modules
2. **Assess stability** - Is this content stable enough to become single source of truth?
3. **Extract to component** - Create new component file with front-matter
4. **Choose formats** - Provide 2-4 presentation formats (full, summary, visual, etc.)
5. **Update relationship map** - Add to COMPONENT_RELATIONSHIP_MAP.md with dependencies
6. **Replace with references** - Update all modules to reference component
7. **Test propagation** - Verify updates to component appear in all referencing modules

### Validation Commands

**Check component exists:**
```bash
ls executive_track/education_full/resources/knowledge_components/**/component_id.md
```

**Find all references to component:**
```bash
grep -r "{{kc:component_id" executive_track/education_full/
```

**Verify format available:**
```bash
grep "presentation_formats:" executive_track/education_full/resources/knowledge_components/**/component_id.md
```

**Check for circular dependencies:**
```bash
# See COMPONENT_RELATIONSHIP_MAP.md validation section
```

## Migration Path

### Phase 1: Foundation (Current)
- ✅ Core components extracted (17/20)
- ✅ Component relationship map created
- ✅ Composition rules documented

### Phase 2: Reference System (Next)
- [ ] Define reference syntax processing (how `{{kc:...}}` renders)
- [ ] Update modules to use reference syntax
- [ ] Validate all references resolve correctly

### Phase 3: Advanced Features (Future)
- [ ] Implement parameterized references
- [ ] Build automated validation tools
- [ ] Create visual component browser
- [ ] Add reference analytics (most-used formats, etc.)

## Summary: Golden Rules

1. **Single Source of Truth** - Core concepts exist once, referenced everywhere
2. **Pedagogy Over DRY** - Learning effectiveness justifies strategic repetition
3. **Component First** - Always check existing components before creating new content
4. **Context Matters** - Add framing text to connect components into narrative
5. **Format Fits Context** - Match presentation format to audience and learning goal
6. **Dependencies Respected** - Follow component relationship map for logical sequencing
7. **Quality Maintained** - Component usage should enhance, not fragment, learning
8. **Maintainability Default** - When in doubt, reference (update once, propagate everywhere)

---

**Document Version:** 1.0.0
**Last Updated:** 2025-01-16
**Related Documents:**
- COMPONENT_RELATIONSHIP_MAP.md - Visual map of component dependencies
- README.md - Component library catalog and index
- _templates/*.md - Component creation templates
