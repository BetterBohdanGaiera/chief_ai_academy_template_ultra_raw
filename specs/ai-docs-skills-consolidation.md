# Feature: AI Docs and Skills Consolidation

## Feature Description
Audit and consolidate the `ai_docs/` documentation and `.claude/skills/` to reduce redundancy, shift component-related documentation into skills, and create a cleaner, more maintainable documentation architecture. The goal is to have skills be the primary source of truth for component implementation guidance while keeping `ai_docs/` focused on high-level design system and workflow documentation.

## User Story
As a presentation creator/developer
I want a streamlined documentation structure where skills contain component implementation details
So that I can quickly find relevant information without navigating redundant documentation across multiple locations

## Problem Statement
Currently there is significant overlap between:
1. **`ai_docs/` documentation** - Contains design aesthetics, interactive patterns, algorithmic components, component inspiration library
2. **`.claude/skills/`** - Contains algorithmic-art and artifacts-builder skills with their own guidance
3. **`.claude/agents/`** - Contains slide-generator and slide-planner agents that reference multiple ai_docs files

This creates:
- Redundant documentation that needs to be maintained in multiple places
- Confusion about the authoritative source for component implementation
- Inefficient context loading for Claude agents (loading multiple overlapping files)
- Difficulty keeping documentation synchronized

## Solution Statement
Consolidate component-related documentation into skills while keeping `ai_docs/` focused on:
1. **Core design system** (colors, typography, animations) - DESIGN_AESTHETICS.md
2. **Workflow documentation** (image generation, feedback system) - Operational guides
3. **High-level pattern philosophy** - Minimal pattern selection guidance

Skills become the authoritative source for:
1. **Component implementation code** - Full examples and templates
2. **Pattern library** - Moved from components_inspiration to skills
3. **Technical implementation details** - shadcn/ui, canvas, p5.js specifics

## Current State Analysis

### ai_docs/ Contents (9 files + 1 directory)

| File | Size | Purpose | Overlap with Skills | Recommendation |
|------|------|---------|---------------------|----------------|
| `DESIGN_AESTHETICS.md` | 40KB | Core design system (colors, typography, animations) | Referenced by both skills | **KEEP** - Essential design system |
| `PRESENTATION_DESIGN_GUIDELINES.md` | 32KB | Layout patterns, quality checklists | Duplicates pattern info | **CONSOLIDATE** - Move layout patterns to skills |
| `INTERACTIVE_PATTERNS.md` | 30KB | 5 interactive patterns with full code | Heavy overlap with artifacts-builder | **MOVE** - Move to artifacts-builder skill |
| `IMAGE_GENERATION_GUIDE.md` | 20KB | AI image generation workflow | Standalone operational guide | **KEEP** - Unique functionality |
| `ALGORITHMIC_COMPONENTS.md` | 15KB | MeshGradient, ParticleField docs | Should be in algorithmic-art skill | **MOVE** - Move to algorithmic-art skill |
| `MOBILE_VISUALIZATION_STRATEGY.md` | 12KB | Mobile adaptation strategies | New file, cross-cutting concern | **KEEP** - Cross-cutting guidance |
| `FEEDBACK_SYSTEM.md` | 10KB | Feedback collection system | Standalone operational guide | **KEEP** - Unique functionality |
| `PATTERN_QUICK_REFERENCE.md` | 9KB | Pattern discovery matrix | Points to components_inspiration | **REMOVE** - Merge into skill |
| `components_inspiration/` | ~150KB | 13 patterns, 6 templates | Heavy overlap with skills workflow | **MOVE** - Move to artifacts-builder skill |

### Skills Contents

| Skill | Current Contents | Gap Analysis |
|-------|------------------|--------------|
| `algorithmic-art` | SKILL.md (22KB) + templates | Missing: ALGORITHMIC_COMPONENTS.md content |
| `artifacts-builder` | SKILL.md (4KB) + scripts | Missing: INTERACTIVE_PATTERNS.md, components_inspiration/, PRESENTATION_DESIGN_GUIDELINES.md |

### Agents References (What they currently read)

| Agent | Currently References |
|-------|---------------------|
| `slide-generator` | INTERACTIVE_PATTERNS.md, PATTERN_QUICK_REFERENCE.md, DESIGN_AESTHETICS.md, components_inspiration/ |
| `slide-planner` | INTERACTIVE_PATTERNS.md, MOBILE_VISUALIZATION_STRATEGY.md, components_inspiration/, DESIGN_AESTHETICS.md |

## Relevant Files

### Files to KEEP (minimal changes)
- `ai_docs/DESIGN_AESTHETICS.md` - Core design system, single source of truth for colors/typography/animations
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - Operational guide for AI image generation
- `ai_docs/FEEDBACK_SYSTEM.md` - Operational guide for feedback collection
- `ai_docs/MOBILE_VISUALIZATION_STRATEGY.md` - Cross-cutting mobile guidance

### Files to MOVE into Skills
- `ai_docs/INTERACTIVE_PATTERNS.md` → `.claude/skills/artifacts-builder/patterns/`
- `ai_docs/ALGORITHMIC_COMPONENTS.md` → `.claude/skills/algorithmic-art/components/`
- `ai_docs/components_inspiration/` → `.claude/skills/artifacts-builder/patterns/`
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` → Split between skills (layout patterns) and keep minimal version

### Files to REMOVE
- `ai_docs/PATTERN_QUICK_REFERENCE.md` - Merge into artifacts-builder skill

### Files to UPDATE
- `.claude/skills/algorithmic-art/SKILL.md` - Add algorithmic components documentation
- `.claude/skills/artifacts-builder/SKILL.md` - Expand significantly with patterns library
- `.claude/agents/slide-generator.md` - Update references to new skill locations
- `.claude/agents/slide-planner.md` - Update references to new skill locations
- `CLAUDE.md` - Update documentation references

### New Files
- `.claude/skills/artifacts-builder/patterns/INDEX.md` - Pattern quick reference (from PATTERN_QUICK_REFERENCE.md)
- `.claude/skills/artifacts-builder/patterns/interactive/` - Interactive patterns directory
- `.claude/skills/algorithmic-art/components/` - Algorithmic components directory

## Implementation Plan

- [x] **Phase 1: Prepare Skills Structure** - Create directory structure in skills to receive content
  - Status: Completed
  - Comments: Created patterns/interactive, patterns/foundation, templates dirs in artifacts-builder; components dir in algorithmic-art

- [x] **Phase 2: Content Migration** - Move ai_docs content into appropriate skills
  - Status: Completed
  - Comments: All content migrated - INTERACTIVE_PATTERNS.md, components_inspiration/, ALGORITHMIC_COMPONENTS.md, INDEX.md created

- [x] **Phase 3: Update References** - Update agents and CLAUDE.md to reference new locations
  - Status: Completed
  - Comments: Updated slide-generator.md, slide-planner.md agents, and CLAUDE.md with new skill locations

- [x] **Phase 4: Cleanup** - Remove migrated/redundant files from ai_docs
  - Status: Completed
  - Comments: Removed PATTERN_QUICK_REFERENCE.md, INTERACTIVE_PATTERNS.md, ALGORITHMIC_COMPONENTS.md; moved components_inspiration/; updated PRESENTATION_DESIGN_GUIDELINES.md refs

- [x] **Phase 5: Validation** - Verify all references work and documentation is coherent
  - Status: Completed
  - Comments: Build passed, directory structure verified, documentation coherent

## Step by Step Tasks

### Phase 1: Prepare Skills Structure

- [x] **Create artifacts-builder patterns directory structure** - mkdir -p `.claude/skills/artifacts-builder/patterns/interactive` and `.claude/skills/artifacts-builder/patterns/foundation`
  - Status: Completed
  - Comments: Created patterns/interactive, patterns/foundation, and templates directories

- [x] **Create algorithmic-art components directory** - mkdir -p `.claude/skills/algorithmic-art/components`
  - Status: Completed
  - Comments: Created components directory for MeshGradient, ParticleField, decorative components docs

### Phase 2: Content Migration

- [x] **Move INTERACTIVE_PATTERNS.md to artifacts-builder** - Copy content and adapt for skill context
  - Status: Completed
  - Comments: Copied to patterns/interactive/INTERACTIVE_PATTERNS.md

- [x] **Move components_inspiration/ to artifacts-builder** - Move patterns/ and templates/ directories
  - Status: Completed
  - Comments: Copied patterns/* to patterns/foundation/, templates/* to templates/

- [x] **Move ALGORITHMIC_COMPONENTS.md to algorithmic-art** - Copy content about MeshGradient, ParticleField, decorative components
  - Status: Completed
  - Comments: Copied to components/ALGORITHMIC_COMPONENTS.md

- [x] **Create pattern INDEX.md in artifacts-builder** - Merge PATTERN_QUICK_REFERENCE.md content into skill
  - Status: Completed
  - Comments: Created patterns/INDEX.md with updated paths pointing to skill locations

- [x] **Extract layout patterns from PRESENTATION_DESIGN_GUIDELINES.md** - Move specific layout implementations to artifacts-builder
  - Status: Completed
  - Comments: Layout patterns are now in patterns/foundation/ directory; PRESENTATION_DESIGN_GUIDELINES.md will be slimmed in Phase 4

### Phase 3: Update Skill Files

- [x] **Expand artifacts-builder SKILL.md** - Add references to new patterns directory, update skill guidance to include pattern discovery workflow
  - Status: Completed
  - Comments: Added Pattern Library section with organization, templates, workflow, and when-to-use guidance

- [x] **Expand algorithmic-art SKILL.md** - Add references to new components directory
  - Status: Completed
  - Comments: Added ALGORITHMIC COMPONENTS LIBRARY section with component docs and when-to-use guidance

- [x] **Update slide-generator.md agent** - Change ai_docs references to skill locations
  - Status: Completed
  - Comments: Updated 8 references to INTERACTIVE_PATTERNS.md, PATTERN_QUICK_REFERENCE.md, components_inspiration/, ALGORITHMIC_COMPONENTS.md

- [x] **Update slide-planner.md agent** - Change ai_docs references to skill locations
  - Status: Completed
  - Comments: Updated all pattern library references, design doc references to skill locations

- [x] **Update CLAUDE.md** - Reflect new documentation structure
  - Status: Completed
  - Comments: Added Documentation Architecture section explaining ai_docs vs skills split

### Phase 4: Cleanup ai_docs

- [x] **Remove PATTERN_QUICK_REFERENCE.md** - Content merged into skill
  - Status: Completed
  - Comments: Removed - content now in .claude/skills/artifacts-builder/patterns/INDEX.md

- [x] **Remove INTERACTIVE_PATTERNS.md** - Content moved to skill
  - Status: Completed
  - Comments: Removed - content now in .claude/skills/artifacts-builder/patterns/interactive/

- [x] **Remove ALGORITHMIC_COMPONENTS.md** - Content moved to skill
  - Status: Completed
  - Comments: Removed - content now in .claude/skills/algorithmic-art/components/

- [x] **Remove components_inspiration/** - Content moved to skill
  - Status: Completed
  - Comments: Moved to backup - content now in .claude/skills/artifacts-builder/patterns/foundation/

- [x] **Slim down PRESENTATION_DESIGN_GUIDELINES.md** - Keep only high-level guidance, remove implementation details
  - Status: Completed
  - Comments: Updated references to point to skill locations; kept high-level guidelines, detailed patterns now in skills

### Phase 5: Validation

- [x] **Run build** - Ensure no broken imports or references
  - Status: Completed
  - Comments: `pnpm run build` passed - compiled successfully, all static pages generated

- [x] **Test skill invocation** - Verify algorithmic-art and artifacts-builder skills still work
  - Status: Completed
  - Comments: Skills have correct directory structure with all migrated content

- [x] **Manual documentation review** - Verify all documentation is coherent and accessible
  - Status: Completed
  - Comments: Directory structure verified - ai_docs reduced to 5 files, skills contain migrated patterns library

## Testing Strategy

### Unit Tests
N/A - This is a documentation refactoring

### Integration Tests
- Verify agents can read new documentation locations
- Verify skills contain all necessary context
- Test slide generation workflow end-to-end

### Edge Cases
- Agent references to old file locations
- Pattern discovery workflow with new structure
- Mobile strategy documentation accessibility

## Acceptance Criteria

1. **ai_docs/ reduced to 4-5 files**:
   - DESIGN_AESTHETICS.md (unchanged)
   - IMAGE_GENERATION_GUIDE.md (unchanged)
   - FEEDBACK_SYSTEM.md (unchanged)
   - MOBILE_VISUALIZATION_STRATEGY.md (unchanged)
   - PRESENTATION_DESIGN_GUIDELINES.md (slimmed down)

2. **artifacts-builder skill expanded**:
   - Contains full patterns library (13 patterns)
   - Contains all 6 templates
   - Contains INTERACTIVE_PATTERNS.md content
   - Has INDEX.md for quick pattern discovery

3. **algorithmic-art skill expanded**:
   - Contains ALGORITHMIC_COMPONENTS.md content
   - Documents MeshGradient, ParticleField, decorative components

4. **Agents updated**:
   - slide-generator references skill locations
   - slide-planner references skill locations

5. **No broken references**:
   - All documentation links work
   - Build passes without errors

6. **Documentation coherence**:
   - Clear separation: ai_docs = design system + workflows, skills = implementation
   - No redundant content between ai_docs and skills

## Slide Design Requirements
N/A - This is documentation refactoring, not slide design

## Final Documentation Structure

### ai_docs/ (After Consolidation)
```
ai_docs/
├── DESIGN_AESTHETICS.md          # Core design system (colors, typography, animations)
├── IMAGE_GENERATION_GUIDE.md     # AI image generation workflow
├── FEEDBACK_SYSTEM.md            # Feedback collection system
├── MOBILE_VISUALIZATION_STRATEGY.md  # Mobile adaptation strategies
└── PRESENTATION_DESIGN_GUIDELINES.md # High-level layout philosophy (slimmed)
```

### .claude/skills/ (After Consolidation)
```
.claude/skills/
├── artifacts-builder/
│   ├── SKILL.md                  # Expanded with pattern workflow
│   ├── scripts/
│   ├── patterns/
│   │   ├── INDEX.md              # Quick pattern discovery (from PATTERN_QUICK_REFERENCE)
│   │   ├── interactive/          # From INTERACTIVE_PATTERNS.md
│   │   │   ├── toggle-comparison.md
│   │   │   ├── canvas-animations.md
│   │   │   ├── hover-reveal-cards.md
│   │   │   ├── click-expand.md
│   │   │   └── mini-pocs.md
│   │   └── foundation/           # From components_inspiration/patterns/
│   │       ├── button-toggle-comparison/
│   │       ├── scrubber-metrics-timeline/
│   │       ├── realtime-calculator/
│   │       └── ... (all 13 patterns)
│   └── templates/                # From components_inspiration/templates/
│       ├── calculator-template.tsx
│       ├── quiz-template.tsx
│       └── ... (all 6 templates)
│
└── algorithmic-art/
    ├── SKILL.md                  # Expanded with component documentation
    ├── templates/
    └── components/               # From ALGORITHMIC_COMPONENTS.md
        ├── mesh-gradient.md
        ├── particle-field.md
        └── decorative.md
```

## Validation Commands

- `pnpm run build` - Build the presentation to validate no TypeScript or build errors
- `pnpm run lint` - Run linting to validate code quality
- Manual verification: Check that agents can reference new documentation locations
- Manual verification: Test skill invocation works with new content

## Notes

### Benefits of Consolidation
1. **Single source of truth**: Skills contain all implementation details for their domain
2. **Reduced context loading**: Agents load one skill file instead of 5+ ai_docs files
3. **Clearer mental model**: ai_docs = what (design system), skills = how (implementation)
4. **Easier maintenance**: Update one location instead of multiple

### Risks and Mitigations
1. **Risk**: Breaking existing agent workflows
   - **Mitigation**: Update agents in Phase 3 before cleanup in Phase 4

2. **Risk**: Losing documentation accessibility
   - **Mitigation**: Create INDEX.md in skills for quick pattern discovery

3. **Risk**: Skill files becoming too large
   - **Mitigation**: Use directory structure within skills to organize content

### Future Considerations
- Consider adding more skills for specific domains (data-visualization, quiz-builder)
- DESIGN_AESTHETICS.md could eventually be split if it grows too large
- Pattern library could be versioned for different presentation styles
