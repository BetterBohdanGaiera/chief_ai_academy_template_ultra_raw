# Claude Code Skills for Chief AI Academy Presentation

This directory contains locally installed Claude Code skills that enhance development capabilities for this presentation project.

## Installed Skills

### 1. artifacts-builder

**Purpose**: Suite of tools for creating elaborate, multi-component React artifacts using modern frontend technologies.

**When to use**: When you need to create complex interactive components or visualizations that require:
- React + TypeScript
- Tailwind CSS + shadcn/ui components
- State management or routing
- Multi-component architecture

**How to trigger**: Simply request creation of a React artifact in natural language:
- "Create a React artifact for an interactive data visualization"
- "Build a React component with shadcn/ui for [feature]"
- "Create an artifact showing [concept] with interactive controls"

**Tech stack**:
- React 18 + TypeScript
- Vite (development)
- Parcel (bundling to single HTML file)
- Tailwind CSS 3.4.1
- 40+ pre-installed shadcn/ui components

**Workflow**:
1. Initialize project: `bash .claude/skills/artifacts-builder/scripts/init-artifact.sh <project-name>`
2. Develop your artifact
3. Bundle to single HTML: `bash .claude/skills/artifacts-builder/scripts/bundle-artifact.sh`
4. Share the generated `bundle.html`

**Design guidelines**: Avoids "AI slop" patterns (excessive centering, purple gradients, uniform rounded corners, Inter font)

---

### 2. algorithmic-art

**Purpose**: Creating algorithmic/generative art using p5.js with seeded randomness and parametric exploration.

**When to use**: When you need:
- Generative art visualizations
- Flow fields or particle systems
- Algorithmic animations
- Interactive art with seeded randomness
- Computational aesthetics

**How to trigger**: Request generative art in natural language:
- "Create algorithmic art for [concept]"
- "Generate a flow field visualization showing [idea]"
- "Build a p5.js particle system for [purpose]"
- "Design generative art representing [theme]"

**Key features**:
- Two-phase approach: Philosophy → Implementation
- Seeded randomness for reproducibility (Art Blocks pattern)
- Interactive parameter controls
- Seed navigation (Previous/Next/Random)
- PNG download functionality
- Emphasizes emergent behavior over static composition

**Philosophy**: "Beauty lives in the process, not the final frame" - focuses on algorithmic execution where each seed generates unique output from the same underlying system.

---

## How Skills Work

**Auto-activation**: Unlike slash commands, skills activate automatically when Claude determines they're relevant to your request based on their description. You don't need to explicitly invoke them.

**Storage location**: `.claude/skills/` (project-level, shared with team via git)

**Configuration**: Each skill has a `SKILL.md` file with YAML frontmatter:
```yaml
---
name: skill-name
description: What it does and when to use it
---
```

## Modifying Skills

To customize these skills for your project needs:

1. **Edit SKILL.md**: Update instructions, add project-specific guidelines
2. **Modify scripts/templates**: Customize initialization scripts or templates
3. **Add supporting files**: Include additional resources, examples, or configurations
4. **Commit changes**: Push to git to share with your team

## Available Supporting Files

### artifacts-builder
- `scripts/init-artifact.sh` - Scaffolds new React project with all dependencies
- `scripts/bundle-artifact.sh` - Bundles React app to single HTML file
- `scripts/shadcn-components.tar.gz` - Pre-packaged shadcn/ui components

### algorithmic-art
- `templates/viewer.html` - Base template for p5.js viewer with controls
- `templates/generator_template.js` - Template for generative algorithms

## Examples

### Using artifacts-builder for Presentation Visualizations

```
User: "Create an interactive React component showing the AI adoption pyramid
from Slide 02 with animated filling and hover states"

Claude: [artifacts-builder skill auto-activates]
- Initializes React project with shadcn/ui
- Creates pyramid component with animations
- Bundles to single HTML artifact
```

### Using algorithmic-art for Background Imagery

```
User: "Generate algorithmic art representing systematic transformation
with flowing particles moving from chaos to order"

Claude: [algorithmic-art skill auto-activates]
- Creates "Systematic Emergence" philosophy
- Implements p5.js particle system with flow fields
- Provides interactive viewer with seed control
```

## Notes

- Skills are stored in this repository and version-controlled with git
- The `temp-skills` directory contains the original clone and can be removed if needed
- Skills integrate with your existing design system (electric orange #FF4D00, brutalist-minimalist aesthetic)
- Both skills emphasize high-quality, polished output that avoids common "AI-generated" aesthetic pitfalls

## Documentation

- **artifacts-builder**: See `artifacts-builder/SKILL.md` for complete documentation
- **algorithmic-art**: See `algorithmic-art/SKILL.md` for detailed philosophy and implementation guide
- **Claude Code Skills**: https://code.claude.com/docs/en/skills.md

---

**Last updated**: 2025-11-13
**Repository**: chief_ai_academy_executive_presentation
