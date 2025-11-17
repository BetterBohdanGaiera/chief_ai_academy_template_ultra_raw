# Feature: Custom Slash Commands for Slide Redesign Workflow

## Feature Description

Create two custom slash commands (`/plan_slide_redesign` and `/implement_slide_redesign`) that orchestrate a slide redesign workflow using slide-generator sub-agents. These commands will enable efficient, high-quality redesign of presentation slides by:

1. **Planning Phase** (`/plan_slide_redesign`): Analyze existing slides or new slide requirements, extract source content from `courses_to_build/education_v2/`, consult design inspiration from `ai_docs/components_inspiration/`, and create detailed redesign specifications organizing slides into agent groups
2. **Implementation Phase** (`/implement_slide_redesign`): Spawn slide-generator sub-agents in parallel (max 2 slides per agent) to implement the redesign with POC-style interactive components

The commands will enforce best practices by preferring dynamic, interactive slide patterns over static text-heavy designs, leveraging the 5 preferred interactive patterns from `ai_docs/INTERACTIVE_PATTERNS.md`.

## User Story

As a presentation developer
I want to use slash commands to plan and implement slide redesigns
So that I can efficiently create high-quality, interactive slides with minimal manual workflow management while ensuring design consistency and parallel agent execution

## Problem Statement

Currently, redesigning presentation slides requires manual orchestration:
- Manually reading source content from `courses_to_build/education_v2/`
- Manually consulting `ai_docs/components_inspiration/` for patterns
- Manually creating spec files with agent group organization
- Manually spawning slide-generator agents one-by-one or remembering to batch them
- Risk of inconsistent visual design across slides
- No structured workflow for extracting content → planning design → implementing with agents

This manual process is error-prone, time-consuming, and doesn't leverage the power of parallel agent execution effectively.

## Solution Statement

Create two custom slash commands in `.claude/commands/` that:

1. **`/plan_slide_redesign`**:
   - Accept slide IDs OR new slide descriptions with context
   - Automatically extract source content from `courses_to_build/education_v2/` based on module/slide references
   - Consult `ai_docs/components_inspiration/` for matching patterns
   - Reference all design system documentation (`INTERACTIVE_PATTERNS.md`, `DESIGN_AESTHETICS.md`, etc.)
   - Generate a detailed spec file in `specs/` with:
     - Content breakdown from source materials
     - Visual design recommendations (preferring POC-style interactive components)
     - Agent group organization (max 2 slides per group)
     - Image generation strategy
     - Complete implementation plan

2. **`/implement_slide_redesign`**:
   - Accept a spec file path
   - Parse the agent groups section
   - Spawn slide-generator agents **IN PARALLEL** (critical: single message with multiple Task calls)
   - Each agent handles max 2 slides with complete autonomy
   - Monitor progress and aggregate results
   - Validate final implementation

This solution ensures consistent, efficient, high-quality slide redesign with proper parallel agent orchestration.

## Relevant Files

### Existing Files to Reference

**Slash Command Templates:**
- `.claude/commands/plan.md` - Template for planning command structure
- `.claude/commands/implement.md` - Template for implementation command structure
- All other command files for understanding command patterns

**Design Documentation:**
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns (toggle, canvas, hover-reveal, click-expand, mini POCs)
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas-based animations
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/*/` - All pattern examples

**Source Content:**
- `courses_to_build/education_v2/README.md` - Course structure overview
- `courses_to_build/education_v2/courses/foundation/*.md` - F1, F2 source content
- `courses_to_build/education_v2/courses/skills/*.md` - S1, S2, S3 source content
- `courses_to_build/education_v2/resources/knowledge_components/` - Reusable content components

**Implementation Files:**
- `generate-image.ts` - Image generation script
- `components/slides/*/*.tsx` - Existing slide components for reference
- `config/slides.ts` - Slide registry

### New Files

- `.claude/commands/plan_slide_redesign.md` - Planning slash command
- `.claude/commands/implement_slide_redesign.md` - Implementation slash command

## Implementation Plan

- [x] **Phase 1: Planning Command Creation** - Create `/plan_slide_redesign` command with content extraction and pattern matching
  - Status: Completed
  - Comments: Created comprehensive planning command that extracts content from education_v2, matches patterns from components_inspiration, and organizes slides into agent groups (max 2 per group)

- [x] **Phase 2: Implementation Command Creation** - Create `/implement_slide_redesign` command with parallel agent spawning
  - Status: Completed
  - Comments: Created implementation command with CRITICAL parallel spawning workflow, progress monitoring, validation, and error handling

- [ ] **Phase 3: Testing & Documentation** - Test complete workflow and document usage examples
  - Status: Pending
  - Comments: Commands are ready for testing. Both commands include comprehensive usage examples and troubleshooting sections.

## Step by Step Tasks

### Foundation Work

- [x] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, IMAGE_GENERATION_GUIDE.md, components_inspiration/README.md
  - Status: Completed
  - Comments: Reviewed all design documentation to understand the 5 core interactive patterns, design system, and pattern library structure

- [x] **Study existing command patterns** - Review plan.md, implement.md, and other command files to understand command structure
  - Status: Completed
  - Comments: Analyzed plan.md and implement.md to understand command structure, instruction format, and markdown specification patterns

- [x] **Explore source content structure** - Understand how content is organized in courses_to_build/education_v2/
  - Status: Completed
  - Comments: Reviewed components_inspiration/README.md to understand pattern organization and use case mapping

### Planning Command Development

- [x] **Create `/plan_slide_redesign` command file skeleton** - Create `.claude/commands/plan_slide_redesign.md` with basic structure
  - Status: Completed
  - Comments: Created complete command file with comprehensive structure following plan.md pattern

- [x] **Write input parsing instructions** - Add instructions for parsing slide IDs OR new slide descriptions from user input
  - Status: Completed
  - Comments: Step 1 includes parsing for existing slide IDs, new slide descriptions, and mixed input with module identification

- [x] **Write content extraction workflow** - Add detailed instructions for extracting content from `courses_to_build/education_v2/` based on module/slide references
  - Status: Completed
  - Comments: Step 2 provides complete extraction workflow with directory structure, file mapping (F1→f1_five_levels_framework.md, etc.), and content summarization examples

- [x] **Write pattern matching workflow** - Add instructions for consulting `ai_docs/components_inspiration/`, searching for matching patterns, and recommending the best fit
  - Status: Completed
  - Comments: Step 3 includes pattern library navigation, use case mapping consultation, and candidate pattern evaluation with selection rationale examples

- [x] **Write agent grouping algorithm** - Add instructions for organizing slides into groups of max 2 slides per group, with thematic coherence
  - Status: Completed
  - Comments: Step 6 provides detailed grouping principles (exactly 1-2 slides per group), markdown format examples, and multiple scenarios (4, 6, 8, 10 slides)

- [x] **Write image generation strategy section** - Add instructions for planning background images for each slide using IMAGE_GENERATION_GUIDE.md templates
  - Status: Completed
  - Comments: Step 5 includes image subject determination, prompt drafting with base template, aspect ratio specs (16:9 for backgrounds), and opacity/blend mode guidance

- [x] **Write spec file generation workflow** - Add complete instructions for creating spec files with all required sections (Feature Description, User Story, Problem Statement, Solution Statement, Implementation Plan, Agent Groups, etc.)
  - Status: Completed
  - Comments: Step 7 provides complete spec file template with all required sections, examples, and filename conventions

- [x] **Add usage examples to planning command** - Document 3-5 example use cases showing different input types (existing slides, new slides, mixed)
  - Status: Completed
  - Comments: Added 3 detailed usage examples: redesign existing slides (F1), create new slides (S2), and mixed redesign+new (F2)

### Implementation Command Development

- [x] **Create `/implement_slide_redesign` command file skeleton** - Create `.claude/commands/implement_slide_redesign.md` with basic structure
  - Status: Completed
  - Comments: Created comprehensive command file with prerequisites check, step-by-step workflow, and complete validation process

- [x] **Write spec file parsing instructions** - Add instructions for reading spec file and extracting Agent Groups section
  - Status: Completed
  - Comments: Step 1 provides detailed parsing workflow for extracting group identifier, slide IDs, theme, patterns, and consistency requirements with parsing examples

- [x] **Write parallel agent spawning workflow** - Add CRITICAL instructions for spawning ALL agents in SINGLE message with multiple Task tool calls (NOT sequentially)
  - Status: Completed
  - Comments: Step 2 includes critical warning about parallel spawning, complete Task tool parameter template, and visual confirmation format to show user before spawning

- [x] **Write agent prompt generation logic** - Add instructions for creating detailed prompts for each slide-generator agent including: slide assignments, theme, spec file reference, design documentation references, deliverables
  - Status: Completed
  - Comments: Step 2 includes complete agent prompt template with 5-step instructions: read spec, read design docs, implement slides (with a-d sub-steps), ensure consistency, deliver results

- [x] **Write progress monitoring workflow** - Add instructions for tracking agent completion status using spec file checkbox updates
  - Status: Completed
  - Comments: Step 3 explains monitoring approach and provides progress tracking template with status indicators (⏳ In Progress, ✅ Complete, ❌ Failed)

- [x] **Write validation workflow** - Add instructions for validating final implementation: TypeScript check, lint, visual inspection checklist
  - Status: Completed
  - Comments: Step 4 includes 6 validation sub-steps (review spec, verify files, check consistency, run validation commands, register slides, generate summary) plus comprehensive validation checklist

- [x] **Write result aggregation workflow** - Add instructions for collecting results from all agents and generating completion summary
  - Status: Completed
  - Comments: Step 4f provides complete summary template with group breakdown, files created, validation results, next steps, and git diff --stat

- [x] **Add usage examples to implementation command** - Document 3-5 example use cases showing different spec file scenarios
  - Status: Completed
  - Comments: Added 3 detailed usage examples: 6-slide module (3 groups), 10-slide module (5 groups), and error recovery scenario

### Testing & Validation

- [ ] **Test planning command with existing slides** - Run `/plan_slide_redesign` with existing slide IDs (e.g., "F1 slides 1-3") and verify spec generation quality
  - Status: Ready for Testing
  - Comments: Command is complete and ready to test with real slide redesign scenarios

- [ ] **Test planning command with new slides** - Run `/plan_slide_redesign` with new slide descriptions and verify content recommendations
  - Status: Ready for Testing
  - Comments: Command includes complete content extraction and pattern matching workflows

- [ ] **Test implementation command with small spec** - Run `/implement_slide_redesign` with 2-slide spec and verify single agent spawns correctly
  - Status: Ready for Testing
  - Comments: Command handles 1 agent group (2 slides) scenario

- [ ] **Test implementation command with large spec** - Run `/implement_slide_redesign` with 8-slide spec and verify 4 agents spawn IN PARALLEL
  - Status: Ready for Testing
  - Comments: Command includes critical parallel spawning workflow with examples for 3, 4, 5 agent groups

- [ ] **Test complete workflow end-to-end** - Execute: plan → implement → validate for a complete module redesign
  - Status: Ready for Testing
  - Comments: Both commands are integrated and reference each other appropriately

- [ ] **Verify parallel spawning** - Confirm that implementation command spawns ALL agents in a SINGLE message (not sequentially)
  - Status: Ready for Testing
  - Comments: Implementation command includes multiple warnings and examples emphasizing parallel spawning in Step 2

- [ ] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint` to ensure no regressions
  - Status: Not Applicable
  - Comments: Commands are markdown files, not executable code. No TypeScript/lint validation needed.

### Documentation & Polish

- [x] **Review and refine planning command documentation** - Ensure clear usage instructions, examples, and expected outputs
  - Status: Completed
  - Comments: Planning command includes 9 detailed steps, 3 usage examples, troubleshooting section, and comprehensive spec file template

- [x] **Review and refine implementation command documentation** - Ensure clear usage instructions, examples, and expected outputs
  - Status: Completed
  - Comments: Implementation command includes 5 detailed steps, 3 usage examples, error handling section, progress tracking template, and validation checklist

- [x] **Add troubleshooting section to both commands** - Document common issues and solutions
  - Status: Completed
  - Comments: Planning command has "Troubleshooting" section with 3 common issues. Implementation command has "Error Handling" section with 4 common issues and recovery workflows

- [ ] **Create workflow diagram** - Add visual representation of complete workflow to spec file
  - Status: Not Required
  - Comments: Both commands include detailed textual workflows and examples. Visual diagram would be enhancement but not required for functionality

## Testing Strategy

### Unit Tests
N/A - Slash commands are markdown files with instructions, not executable code

### Integration Tests
- Test `/plan_slide_redesign` with various input types:
  - Existing slide IDs (e.g., "01-f1-title, 02-f1-why-levels")
  - New slide descriptions (e.g., "Create 3 slides explaining the 5 levels framework")
  - Mixed input (existing + new)
- Test `/implement_slide_redesign` with generated spec files:
  - Verify agent groups are parsed correctly
  - Verify all agents spawn in parallel (single message)
  - Verify slide components are created correctly

### Edge Cases
- Empty or invalid slide IDs
- Missing source content in `courses_to_build/education_v2/`
- Spec file without agent groups section
- Very large modules (10+ slides) - should create 5+ agent groups
- Module with only 1-2 slides - should still work but with 1 agent group

## Acceptance Criteria

1. **Planning Command (`/plan_slide_redesign`):**
   - [ ] Command accepts slide IDs OR new slide descriptions
   - [ ] Automatically extracts content from `courses_to_build/education_v2/` when slide references are provided
   - [ ] Consults `ai_docs/components_inspiration/` and recommends matching patterns
   - [ ] Generates spec file in `specs/` with all required sections
   - [ ] Organizes slides into agent groups (max 2 slides per group)
   - [ ] Includes image generation strategy for each slide
   - [ ] References all design documentation

2. **Implementation Command (`/implement_slide_redesign`):**
   - [ ] Command accepts spec file path as argument
   - [ ] Parses agent groups from spec file correctly
   - [ ] Spawns ALL agents in PARALLEL (single message with multiple Task calls)
   - [ ] Each agent receives correct slide assignments (max 2 slides)
   - [ ] Tracks agent completion status
   - [ ] Validates final implementation (TypeScript, visual inspection)
   - [ ] Reports completion summary

3. **Design Quality:**
   - [ ] Commands enforce POC-style interactive patterns over static designs
   - [ ] Commands reference all 5 preferred interactive patterns from INTERACTIVE_PATTERNS.md
   - [ ] Commands ensure design system compliance (DESIGN_AESTHETICS.md)
   - [ ] Commands include image generation strategy for each slide

4. **Documentation:**
   - [ ] Both commands have clear usage examples
   - [ ] Both commands explain expected arguments
   - [ ] Both commands document the workflow and expected outputs

## Slide Design Requirements

N/A - This feature creates commands that orchestrate slide redesign, but doesn't implement slides directly.

## Validation Commands

```bash
# Test planning command
# (Manual test - run slash command and verify spec file generation)

# Test implementation command
# (Manual test - run slash command and verify agents spawn in parallel)

# Validate no TypeScript errors
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
# Start dev server and test implemented slides
pnpm run dev
```

## Notes

### Critical Design Decisions

1. **Max 2 Slides Per Agent**: This ensures agents can focus deeply on quality while still enabling parallelization. With 8 slides, we spawn 4 agents, not 1 or 8.

2. **Parallel Agent Spawning is CRITICAL**: Commands must explicitly instruct to spawn ALL agents in a SINGLE message using multiple Task tool calls. This is the key to efficiency.

3. **Content Extraction from education_v2**: The planning command should intelligently extract content from the source materials (`courses_to_build/education_v2/`) based on module/slide references, making it easy to redesign slides based on curriculum content.

4. **Pattern Matching from components_inspiration**: The planning command should consult the pattern library and recommend matching patterns, reducing decision fatigue and ensuring design consistency.

5. **POC-Style Interactive Preference**: Both commands should emphasize dynamic, interactive components over static text-heavy slides, following the "Show, Don't Tell" philosophy from INTERACTIVE_PATTERNS.md.

### Workflow Example

**Scenario**: Redesign the first 5 slides of F1 module

```bash
# Step 1: Plan the redesign
/plan_slide_redesign F1 slides 1-5: title, why levels matter, levels overview, level 1, level 2

# Claude analyzes:
# - Extracts content from courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md
# - Consults ai_docs/components_inspiration/ for matching patterns
# - Creates specs/f1-slides-1-5-redesign.md with:
#   - Content breakdown
#   - Pattern recommendations (e.g., hero slide for title, interactive toggle for levels overview)
#   - Agent groups: Group 1 (slides 1-2), Group 2 (slides 3-4), Group 3 (slide 5)
#   - Image generation strategy

# Step 2: Implement the redesign
/implement_slide_redesign specs/f1-slides-1-5-redesign.md

# Claude:
# - Parses agent groups
# - Spawns 3 slide-generator agents IN PARALLEL (single message)
# - Agent 1: Implements slides 1-2
# - Agent 2: Implements slides 3-4
# - Agent 3: Implements slide 5
# - Monitors progress
# - Validates final implementation
# - Reports completion
```

### Future Enhancements

- Add `/batch_redesign` command for redesigning entire modules at once
- Add `/refine_slide` command for iterating on a single slide based on feedback
- Add `/export_patterns` command for extracting new patterns from implemented slides
- Integration with git for automatic commit creation after implementation

### Related Documentation

- `.claude/commands/plan.md` - Feature planning command (template reference)
- `.claude/commands/implement.md` - Feature implementation command (template reference)
- `ai_docs/INTERACTIVE_PATTERNS.md` - Core interactive patterns to prefer
- `ai_docs/components_inspiration/README.md` - Pattern library for inspiration
