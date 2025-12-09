# AI Image Generation Guide

Technical documentation for using the `generate-image.ts` script to create images via the Gemini AI API.

**IMPORTANT - Design System Reference**: This guide covers the TECHNICAL usage of the image generation script. For all design decisions (colors, typography, aesthetic philosophy), refer to **`ai_docs/DESIGN_AESTHETICS.md`** as the single source of truth. The script automatically applies design system rules, but customization should align with DESIGN_AESTHETICS.md specifications.

## Table of Contents

1. [Quick Start](#quick-start)
2. [When to Generate Images](#when-to-generate-images)
3. [Template Selection Guide](#template-selection-guide)
4. [Command Reference](#command-reference)
5. [Best Practices](#best-practices)
6. [Integration with Slide Development](#integration-with-slide-development)
7. [Troubleshooting](#troubleshooting)
8. [Examples Gallery](#examples-gallery)

---

## Quick Start

### Prerequisites

1. Ensure `GEMINI_API_KEY` is set in your `.env` file:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

2. Install dependencies (if not already done):
   ```bash
   pnpm install
   ```

### Generate Your First Image

```bash
# List all available templates
pnpm gen:list

# Generate a hero image for a title slide
pnpm gen:hero "AI Transformation Strategy"

# Generate a concept illustration
pnpm gen:concept "Digital Innovation Framework"

# Generate with custom parameters
tsx generate-image.ts "Executive Leadership" --template hero-bold --ratio 16:9 --count 2
```

---

## When to Generate Images

### ✅ Generate New Images When:

- **Creating New Slides**: You need imagery for a new slide that doesn't fit existing generated images
- **Specific Concepts**: You have a specific concept/metaphor that requires custom visualization
- **Variety Needed**: You want multiple variations to choose from for the same slide
- **Design Consistency**: Existing images don't match the presentation's design system
- **Quality Upgrade**: Current images are low resolution or outdated

### ❌ Reuse Existing Images When:

- **Generic Backgrounds**: You need a simple background that existing generated images already cover
- **Cost Efficiency**: The existing image is "good enough" for the purpose
- **Consistency**: Using the same image across multiple slides for branding
- **Time Constraints**: Quick turnaround needed and current images are acceptable

### 🚫 When NOT to Generate Images

**Avoid generating images for these scenarios** (focus on clean design instead):

- **Text-heavy slides**: Images would distract from content
- **Heavily interactive slides**: Focus on UI components, not decorative backgrounds
- **Simple title/transition slides**: Clean design is more impactful
- **Dense data visualizations**: Charts and tables need clarity, not decoration
- **Slides with mini POCs**: The interactive demo is the visual element

**Reference**: For guidance on when to use algorithmic backgrounds instead, see `ai_docs/ALGORITHMIC_COMPONENTS.md`.

---

## Template Selection Guide

### Decision Tree

```
Need an image?
├── Title/Hero Slide?
│   ├── High-impact, bold → hero-bold
│   ├── Refined, professional → hero-subtle
│   └── Dynamic, future-focused → hero-dynamic
│
├── Abstract Concept?
│   ├── AI/Machine Learning → concept-ai
│   ├── Organizational Change → concept-transformation
│   ├── Strategic Planning → concept-strategy
│   └── Innovation/Ideas → concept-innovation
│
├── Behind Charts/Data?
│   ├── Need grid structure → dataviz-grid
│   ├── Soft gradient → dataviz-gradient
│   └── Textured depth → dataviz-texture
│
├── Team/People?
│   ├── Individual portrait → portrait-executive
│   └── Group collaboration → portrait-team
│
└── Versatile Background?
    ├── Dot pattern → background-dots
    ├── Flowing gradient → background-mesh
    ├── Geometric shapes → background-geometric
    └── Retro-futuristic → background-retro
```

### Template Categories

#### 1. Hero Images (Title Slides)

**hero-bold**: High-impact transformation themes
- Use for: Opening slides, section dividers, bold statements
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Large geometric shapes, strong orange accents, dramatic whitespace

**hero-subtle**: Refined professional aesthetic
- Use for: Executive summaries, conclusions, formal presentations
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Minimal patterns, understated elegance, sophisticated

**hero-dynamic**: Forward-looking innovation
- Use for: Transformation narratives, strategy reveals, future vision
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Angular shapes, motion implied, energetic composition

#### 2. Concept Illustrations (Abstract Ideas)

**concept-ai**: Artificial intelligence and machine learning
- Use for: AI introduction, technology explanation, ML concepts
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Neural network patterns, interconnected nodes, technical geometric

**concept-transformation**: Digital transformation and change
- Use for: Change management, digital evolution, organizational transformation
- Aspect Ratio: 3:2 (recommended)
- Characteristics: Before/after metaphors, morphing shapes, orange transformation moments

**concept-strategy**: Strategic planning and frameworks
- Use for: Strategy slides, planning presentations, framework explanations
- Aspect Ratio: 4:3 (recommended)
- Characteristics: Layered geometry, systematic composition, structured forms

**concept-innovation**: Innovation and creative breakthroughs
- Use for: Innovation themes, idea generation, creative thinking
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Radiating shapes, explosive geometry, dynamic energy

#### 3. Data Visualization Backgrounds

**dataviz-grid**: Subtle grid for charts and tables
- Use for: Chart backgrounds, table slides, data-heavy presentations
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Light grid pattern, minimal competition with foreground data

**dataviz-gradient**: Soft gradient for analytics
- Use for: Dashboard views, analytics presentations, data summaries
- Aspect Ratio: 16:9 (recommended)
- Characteristics: White-to-off-white gradient, dot matrix texture, very subtle

**dataviz-texture**: Canvas texture for depth
- Use for: Statistical slides, report backgrounds, data visualizations
- Aspect Ratio: 4:3 (recommended)
- Characteristics: Grain texture, professional depth, uniform brightness

#### 4. Executive Portraits

**portrait-executive**: Professional individual portrait
- Use for: Team slides, leadership introductions, about us sections
- Aspect Ratio: 3:4 (recommended)
- Characteristics: Corporate setting, professional lighting, orange environmental accents

**portrait-team**: Team collaboration scene
- Use for: Team culture, collaboration themes, organization overviews
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Group dynamics, modern office, inclusive professional atmosphere

#### 5. Abstract Backgrounds

**background-dots**: Dot matrix pattern
- Use for: General content, text-heavy slides, versatile usage
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Uniform dots, subtle orange accents, retro-futuristic feel

**background-mesh**: Gradient mesh sophistication
- Use for: Feature slides, content backgrounds, section transitions
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Organic curves, gradient zones, modern refinement

**background-geometric**: Geometric abstract shapes
- Use for: Content slides, mixed media, slide variety
- Aspect Ratio: 16:9 (recommended)
- Characteristics: Large-scale shapes, low opacity, brutalist minimalism

**background-retro**: Retro-futuristic grid
- Use for: Technology themes, futuristic sections, innovation slides
- Aspect Ratio: 21:9 (recommended)
- Characteristics: Perspective grid, 1980s aesthetic, cyan and orange accents

---

## Command Reference

### Basic Commands

```bash
# List all available templates
tsx generate-image.ts --list-templates
pnpm gen:list

# Get detailed template information
tsx generate-image.ts --template-info hero-bold

# Generate with template
tsx generate-image.ts "your prompt" --template <template-id>

# Generate multiple variations
tsx generate-image.ts "your prompt" --template <template-id> --count 2
```

### Advanced Options

```bash
# Control design system intensity
tsx generate-image.ts "prompt" --style minimal     # Subtle design influence
tsx generate-image.ts "prompt" --style moderate   # Balanced (default)
tsx generate-image.ts "prompt" --style bold       # Strong design emphasis

# Override aspect ratio
tsx generate-image.ts "prompt" --template hero-bold --ratio 3:2

# Skip design system (use template prompt as-is)
tsx generate-image.ts "prompt" --template hero-bold --no-design-system

# Custom output directory
tsx generate-image.ts "prompt" --output custom/path/
```

### NPM Script Shortcuts

```bash
pnpm gen:list         # List all templates
pnpm gen:hero "text"  # Generate hero image
pnpm gen:concept "text" # Generate concept illustration
```

### Batch Generation

```bash
# Generate full presentation set
bash scripts/generate-presentation-images.sh
```

---

## Best Practices

### ⚠️ CRITICAL: NO TEXT IN BACKGROUND IMAGES

**ABSOLUTE RULE**: Background images must NEVER contain text, labels, numbers, letters, or any written characters.

**Why This Matters:**
- Background images are visual atmosphere layers at 2-4% opacity
- Text in backgrounds becomes unreadable blur and looks unprofessional
- Slide text content should come from the component, not the background image
- Text in AI-generated images often looks distorted or unprofessional

**Enforcement Checklist:**
- [ ] Prompt describes **visual shapes, forms, and compositions** (not concepts that imply text)
- [ ] Prompt does NOT use words like: "labeled", "titled", "showing text", "with numbers"
- [ ] Prompt focuses on **pure visual metaphors** (geometric forms, organic shapes, abstract patterns)
- [ ] Prompt avoids **specific named concepts** that AI might render as text (e.g., "Five Levels" → "ascending tiers")

### Prompt Writing Tips

1. **NO TEXT - Use Visual Metaphors Only**
   - **RULE**: Describe shapes, colors, composition, and spatial relationships ONLY
   - **NEVER**: Reference text, labels, numbers, or named concepts that imply text
   - Good: "geometric shapes suggesting transformation and forward motion"
   - **WRONG**: "AI Transformation for Executives" (AI will render this as text)
   - Good: "interconnected nodes and flowing pathways"
   - **WRONG**: "strategic planning framework with key principles" (implies labels)
   - Good: "diverging angular paths, one chaotic with scattered elements, one organized with aligned forms"
   - **WRONG**: "two paths labeled chaos and order" (explicitly asks for text labels)
   - Good: "layered geometric foundation structure with ascending tiers"
   - **WRONG**: "foundation principles for success" (AI might render as text overlay)
   - Good: "branching paths diverging from center, left path with erratic angles, right path with smooth curves"
   - **WRONG**: "paths showing good vs bad decisions" (implies labeled paths)
   - Good: "ascending triangular forms creating hierarchy, orange accents on peak elements"
   - **WRONG**: "pyramid showing top performers vs experimenters" (categories become text)

2. **Be Specific but Concise**
   - Good: "interconnected nodes with flowing pathways in healthcare setting"
   - Avoid: "A picture showing how AI is transforming the healthcare industry by improving analytics capabilities and enabling better patient outcomes through data-driven insights"

3. **Let Design System Handle Style**
   - Focus on *what* you want, not *how* it should look
   - Design system automatically applies colors, aesthetic, layout
   - Good: "layered geometric structure with systematic composition"
   - Avoid: "Strategic planning framework with electric orange accents on white background using geometric shapes"

4. **Use Templates for Consistency**
   - Always use templates unless you have a very specific custom need
   - Templates ensure brand consistency across all generated images

5. **Consider Context**
   - Match template category to slide purpose
   - Use aspect ratio that fits your slide layout
   - Generate 2-3 variations to have options

### Design System Integration

**Style Intensity Guidelines:**

- **Minimal**: When template prompt is already detailed and style-specific
- **Moderate** (default): Balanced design system influence, works for 90% of cases
- **Bold**: When you want strong design system aesthetic, abstract backgrounds

**When to Use --no-design-system:**
- Rarely! Only when testing raw template prompts
- When generating images for external use (not presentation)

### File Organization

- All images save to `public/generated-images/` by default
- Metadata JSON files save alongside images
- Use metadata to track prompts, templates, and parameters
- Keep metadata files for reproducibility

---

## Integration with Slide Development

### Workflow

1. **Plan Slide**
   - Determine slide content and purpose
   - Decide if imagery is needed

2. **Select Template**
   - Use decision tree to pick appropriate template
   - Review template details with `--template-info`

3. **Generate Image**
   - Write concise prompt describing the concept
   - Use recommended aspect ratio from template
   - Generate 2-3 variations

4. **Review & Select**
   - Check generated images in `public/generated-images/`
   - Review validation warnings
   - Select best variation

5. **Integrate into Slide**
   - Reference image in slide component
   - Test in presentation (`pnpm run dev`)
   - Adjust if needed

### Example: Creating a New Slide

```bash
# Step 1: Decide on template
tsx generate-image.ts --template-info concept-ai

# Step 2: Generate variations
tsx generate-image.ts "Machine Learning Pipeline" --template concept-ai --count 2 --ratio 16:9

# Step 3: Check output
ls -lh public/generated-images/

# Step 4: Review metadata
cat public/generated-images/gemini-*-metadata.json | jq

# Step 5: Use in component (example path)
# <img src="/generated-images/gemini-1234567890-1.png" alt="ML Pipeline" />
```

---

## Troubleshooting

### Common Issues

#### 1. "GEMINI_API_KEY not found"

**Solution:**
```bash
# Create .env file in project root
echo "GEMINI_API_KEY=your_key_here" > .env

# Or export temporarily
export GEMINI_API_KEY=your_key_here
```

#### 2. Template not found

**Solution:**
```bash
# List available templates
pnpm gen:list

# Check if you have a typo
tsx generate-image.ts --template-info hero-bld  # Shows suggestions
```

#### 3. Images look inconsistent with design system

**Possible causes:**
- Using `--no-design-system` flag
- Style intensity too low (`--style minimal`)

**Solution:**
```bash
# Use default moderate intensity
tsx generate-image.ts "prompt" --template concept-ai

# Or increase to bold
tsx generate-image.ts "prompt" --template concept-ai --style bold
```

#### 4. File size warnings

**Interpretation:**
- < 0.1MB: Possible generation issue, try regenerating
- 0.1-0.5MB: Usable but below ideal
- 0.5-5MB: ✅ Ideal range
- 5-10MB: Large, consider optimization
- \> 10MB: May cause performance issues

**Solution for large files:**
```bash
# Regenerate if over 10MB
# Or use image optimization tools (imagemagick, sharp, etc.)
```

#### 5. API Rate Limits

**Solution:**
- Space out batch generations
- Add delays in bash script if needed
- Check Gemini API quota

### Validation Warnings

**"Image file size is below ideal range"**
- Usually fine, just informational
- If < 0.1MB, might indicate issue

**"Expected dimensions for 16:9: 1920x1080px"**
- Informational only (we don't read actual dimensions)
- Gemini API respects aspect ratio requests

---

## Examples Gallery

### Hero Images

**hero-bold**: "AI-Driven Business Transformation"
- Strong orange geometric shapes
- High contrast on white
- Dramatic asymmetric composition

**hero-subtle**: "Executive Strategy Overview"
- Light grid pattern
- Minimal orange accent
- Sophisticated whitespace

**hero-dynamic**: "Future of Digital Enterprise"
- Angular shapes suggesting motion
- Orange and cyan accents
- Forward-looking composition

### Concept Illustrations

**concept-ai**: "Neural Network Architecture"
- Interconnected nodes and lines
- Orange transformation points
- Cyan data/technology elements

**concept-transformation**: "Organizational Evolution"
- Before/after geometric metaphor
- Orange highlighting transformation
- Gradient mesh background

**concept-strategy**: "Strategic Framework"
- Layered geometric structure
- Organized systematic layout
- Orange key decision points

**concept-innovation**: "Innovation Breakthrough"
- Radiating geometric shapes
- Explosive orange and cyan
- Dynamic star patterns

### Data Viz Backgrounds

**dataviz-grid**: Clean background for charts
- 5% opacity grid lines
- Barely visible orange dots
- Supports foreground data

**dataviz-gradient**: Soft analytics background
- White to off-white gradient
- 3% dot matrix
- Extremely subtle

### Backgrounds

**background-dots**: Versatile dot matrix
- 10% gray dots in grid
- 5% orange accent dots
- Retro-futuristic feel

**background-geometric**: Brutalist abstract
- Large-scale low opacity shapes
- Single orange accent
- Asymmetric composition

---

## Advanced Topics

### Programmatic Usage

```typescript
import { generateImages, type ImageGenerationOptions } from './generate-image';

const options: ImageGenerationOptions = {
  prompt: "AI Strategy",
  template: "hero-bold",
  aspectRatio: "16:9",
  count: 1,
  styleIntensity: "moderate",
  useDesignSystem: true,
  outputDir: "public/generated-images"
};

const result = await generateImages(options);
console.log(result.savedPaths);
console.log(result.metadata);
```

### Metadata Schema

```json
{
  "timestamp": 1234567890,
  "prompt": "Full prompt with design system rules...",
  "originalPrompt": "User's original prompt",
  "template": "hero-bold",
  "styleIntensity": "moderate",
  "aspectRatio": "16:9",
  "count": 1,
  "designSystemApplied": true,
  "validation": [
    {
      "valid": true,
      "warnings": [],
      "errors": [],
      "metadata": {
        "filepath": "...",
        "sizeBytes": 1234567,
        "sizeMB": 1.23
      }
    }
  ]
}
```

---

## Resources

### Design Documentation

- **`ai_docs/DESIGN_AESTHETICS.md`**: Color palette specifications (#FF4D00, #00D9FF, etc.), typography system, component variants
- **`ai_docs/PRESENTATION_DESIGN_GUIDELINES.md`**: Layout patterns, integration guidelines, quality verification
- **`ai_docs/ALGORITHMIC_COMPONENTS.md`**: Alternative to images - canvas-based backgrounds (MeshGradient, ParticleField)
- **`ai_docs/INTERACTIVE_PATTERNS.md`**: Interactive slide patterns (when to skip static images)

### Technical References

- **Design System Reference**: `app/globals.css` (color palette, design tokens)
- **Template Source Code**: `lib/image-generation/prompt-templates.ts`
- **Design Rules**: `lib/image-generation/design-system-rules.ts`
- **Gemini API Docs**: https://ai.google.dev/

### Color Values (from DESIGN_AESTHETICS.md)

Use these exact values in prompts for design consistency:
- **Teal**: `#00897B` (primary - healthcare trust)
- **Light Teal**: `#26A69A` (accent)
- **Deep Navy**: `#1E3A5F` (secondary - fintech professionalism)
- **Deep Charcoal-Blue**: `#1A1A2E` (foreground text)
- **Off-white**: `#FFFFFF`, `#F8FAFB` (light backgrounds)

---

## Support

For issues or questions:
1. Check this guide's [Troubleshooting](#troubleshooting) section
2. Review generated metadata JSON files for prompt details
3. Test with `--list-templates` and `--template-info` commands
4. Verify `.env` configuration

---

*Last Updated: 2025 | v1.0*
