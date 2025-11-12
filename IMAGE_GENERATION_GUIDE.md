# Image Generation Style Guide

## Overview
This guide defines the standard visual style and workflow for generating AI images for presentation slides using the `generate-image.ts` script. All images must maintain visual coherence and complement the presentation's design system.

---

## Core Visual Style

### Illustration Aesthetic
**Primary Style:** Handwritten illustration style with live objects, people, and scenes
- **Characteristics:**
  - Artistic, hand-drawn quality (not photorealistic)
  - Warm, approachable, human-centric illustrations
  - Clean lines with subtle texture
  - Professional yet friendly tone
  - Contemporary illustration style (similar to modern editorial illustrations)

### Color Palette Integration
All images MUST use colors that complement the slide design system:

**Primary Colors (from `app/globals.css`):**
- **Vibrant Orange:** `oklch(0.65 0.2 35)` - Primary accent color
- **Light Orange:** `oklch(0.75 0.15 35)` - Secondary accent
- **Dark Orange:** `oklch(0.55 0.25 35)` - Emphasis color
- **Deep Charcoal:** `oklch(0.15 0 0)` - Text and line work
- **Pure White:** `oklch(1 0 0)` - Background highlights
- **Light Gray:** `oklch(0.96 0 0)` - Neutral backgrounds
- **Medium Gray:** `oklch(0.5 0 0)` - Supporting elements

**Color Usage Rules:**
1. Orange tones should be prominent in illustrations (40-60% of color area)
2. Use charcoal for line work, outlines, and details
3. White and light gray for backgrounds and negative space
4. Avoid introducing colors outside this palette (no blues, greens, purples unless explicitly justified)

---

## Base Prompt Template

Use this template for ALL image generation to ensure consistency:

```
A professional handwritten illustration style drawing of [SUBJECT],
featuring clean lines and warm orange tones (vibrant orange #F5A623, light orange, dark orange accents),
with charcoal outlines and white/light gray backgrounds.
The illustration should have an editorial, contemporary aesthetic with a friendly, approachable feel.
[SPECIFIC SCENE DETAILS].
Minimal shading, flat color areas with subtle texture, professional business context.
```

### Template Variables:
- `[SUBJECT]`: Main subject (e.g., "business executives in a meeting", "AI robot assistant", "data visualization concept")
- `[SPECIFIC SCENE DETAILS]`: Scene-specific context (e.g., "in a modern boardroom with glass walls", "presenting on a large screen", "surrounded by floating data icons")

---

## Aspect Ratio Guidelines

Choose the appropriate aspect ratio based on slide layout:

| Layout Type | Aspect Ratio | Use Case | Command Example |
|-------------|--------------|----------|-----------------|
| **Full-width hero** | `16:9` | Title slides, full-screen visuals | `--ratio 16:9` |
| **Square card** | `1:1` | Icon-style illustrations, profile shots | `--ratio 1:1` |
| **Vertical card** | `9:16` | Tall infographics, mobile-first concepts | `--ratio 9:16` |
| **Horizontal card** | `3:2` | Balanced scenes, multi-person illustrations | `--ratio 3:2` |
| **Wide banner** | `21:9` | Ultra-wide process diagrams, timelines | `--ratio 21:9` |

---

## Composition Guidelines

### Subject Types & Best Practices

#### 1. People & Characters
**Do:**
- Show diverse, professional individuals in business contexts
- Use warm, confident poses and gestures
- Include subtle facial expressions (optimistic, thoughtful, engaged)
- Dress in modern business attire (smart casual to formal)
- Show interaction and collaboration

**Don't:**
- Use photorealistic faces or bodies
- Create caricatures or exaggerated features
- Include logos, branding, or text in clothing
- Overcrowd scenes with too many characters (max 3-4 focal people)

**Example Prompts:**
```bash
tsx generate-image.ts "A professional handwritten illustration of a confident female executive presenting AI strategy, featuring clean lines and warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. She stands beside a modern display with data visualizations, gesturing toward insights. Editorial style, friendly and approachable, minimal shading, flat color areas." --ratio 16:9
```

#### 2. Abstract Concepts & Data
**Do:**
- Use geometric shapes and flowing lines to represent data
- Incorporate icons and symbols for clarity
- Show connections with dotted lines or arrows
- Use size variation to show hierarchy or importance

**Don't:**
- Create overly complex diagrams
- Use realistic charts/graphs (keep illustrative)
- Include actual numbers or text labels (they'll be added in the slide)

**Example Prompts:**
```bash
tsx generate-image.ts "A professional handwritten illustration of abstract AI concepts with interconnected nodes and flowing data streams, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange accents), charcoal outlines, and light gray background. Geometric shapes representing neural networks, with clean lines and minimal shading. Editorial style, contemporary aesthetic." --ratio 1:1
```

#### 3. Technology & AI
**Do:**
- Show friendly, approachable robots or AI assistants
- Use rounded shapes for technology (avoid harsh edges)
- Include human-technology interaction
- Represent AI as helpful, collaborative tools

**Don't:**
- Create threatening or dystopian imagery
- Use overly complex mechanical details
- Depict AI replacing humans (show collaboration instead)

**Example Prompts:**
```bash
tsx generate-image.ts "A professional handwritten illustration of a friendly AI robot assistant collaborating with business professionals, featuring warm orange tones (vibrant orange #F5A623, light orange accents), charcoal outlines, white background. The robot has a simple, rounded design with a helpful gesture. Editorial style, approachable and optimistic feel, minimal shading, flat color areas." --ratio 3:2
```

#### 4. Business Scenes & Environments
**Do:**
- Show modern, clean office environments
- Include minimal furniture and props (focus on key elements)
- Use perspective to create depth
- Show natural light and open spaces

**Don't:**
- Add too many details (keep it clean and minimal)
- Use dark or cluttered spaces
- Include specific company branding

**Example Prompts:**
```bash
tsx generate-image.ts "A professional handwritten illustration of a modern boardroom with executives discussing AI strategy, featuring warm orange tones (vibrant orange #F5A623, light orange accents), charcoal outlines, light gray walls. Clean lines, minimal furniture, large windows with natural light. Editorial style, professional yet approachable, minimal shading, flat color areas." --ratio 16:9
```

---

## Generation Workflow

### Step-by-Step Process

1. **Identify Image Needs**
   - Review slide narrative and message
   - Determine how many images are needed per slide (typically 1-3)
   - Choose appropriate aspect ratios based on layout

2. **Craft Prompt Using Template**
   - Start with base prompt template
   - Customize `[SUBJECT]` and `[SPECIFIC SCENE DETAILS]`
   - Always include color specifications (orange tones, charcoal, white/gray)
   - Mention "handwritten illustration", "editorial style", "clean lines", "minimal shading"

3. **Generate Image**
   ```bash
   tsx generate-image.ts "[YOUR COMPLETE PROMPT]" --ratio [ASPECT_RATIO] --output public/generated-images/
   ```

4. **Verify Style Consistency**
   - Check that colors match design system (orange prominently featured)
   - Confirm illustration style is consistent with previous images
   - Ensure composition is clean and not cluttered
   - Verify subject matter aligns with slide message

5. **Integrate into Slide**
   - Copy the HTML `<img>` tag from the script output
   - Add to slide component with appropriate Tailwind classes
   - Use responsive sizing: `className="w-full h-auto rounded-xl"`
   - Add shadow for depth: `className="shadow-lg"`

---

## Image Integration Patterns

### Pattern 1: Hero Image (Full-Width)
```tsx
<div className="w-full max-w-6xl mx-auto">
  <img
    src="public/generated-images/gemini-[timestamp]-1.png"
    alt="[Descriptive alt text]"
    className="w-full h-auto rounded-xl shadow-2xl"
  />
</div>
```

### Pattern 2: Grid with Multiple Images
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <img
    src="public/generated-images/gemini-[timestamp]-1.png"
    alt="[Alt text]"
    className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
  />
  <img
    src="public/generated-images/gemini-[timestamp]-2.png"
    alt="[Alt text]"
    className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
  />
</div>
```

### Pattern 3: Card with Image + Text
```tsx
<Card className="overflow-hidden hover:shadow-xl transition-shadow">
  <img
    src="public/generated-images/gemini-[timestamp]-1.png"
    alt="[Alt text]"
    className="w-full h-64 object-cover"
  />
  <CardContent className="p-6">
    <h3 className="text-2xl font-bold mb-2">Card Title</h3>
    <p className="text-muted-foreground">Supporting text content</p>
  </CardContent>
</Card>
```

### Pattern 4: Background Image with Overlay
```tsx
<div
  className="relative w-full h-96 rounded-xl overflow-hidden"
  style={{
    backgroundImage: 'url(public/generated-images/gemini-[timestamp]-1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  <div className="relative z-10 p-8 text-white">
    <h2 className="text-4xl font-bold">Overlay Content</h2>
  </div>
</div>
```

---

## Do's and Don'ts

### ✅ Do:
- Always use the base prompt template for consistency
- Specify orange color palette in every prompt
- Use "handwritten illustration" or "editorial style" keywords
- Generate multiple variations if unsure (use `--count 2`)
- Keep subjects professional and business-focused
- Use appropriate aspect ratios for slide layouts
- Test images in context of the slide before finalizing

### ❌ Don't:
- Generate photorealistic images
- Use colors outside the design system
- Create overly complex or cluttered compositions
- Include text, logos, or branding in images
- Generate images without specifying the illustration style
- Use stock photo aesthetic or 3D renders
- Create images that don't align with slide narrative

---

## Quality Checklist

Before marking an image as complete, verify:

- [ ] Colors match the design system (orange, charcoal, white/gray)
- [ ] Style is handwritten illustration (not photo, 3D, or vector graphic)
- [ ] Subject matter aligns with slide message
- [ ] Composition is clean and uncluttered
- [ ] Aspect ratio is appropriate for layout
- [ ] Image is saved to `public/generated-images/`
- [ ] Alt text is descriptive and meaningful
- [ ] Image integrates smoothly with slide design
- [ ] Consistent with other images in the presentation
- [ ] Professional and appropriate for executive audience

---

## Troubleshooting

### Problem: Image doesn't match color palette
**Solution:** Regenerate with explicit color mentions in prompt:
```
"...featuring warm orange tones (vibrant orange #F5A623, light orange #FFB84D, dark orange #D98E1A), charcoal gray #262626 for outlines, and white/light gray backgrounds..."
```

### Problem: Image is too photorealistic
**Solution:** Add more style keywords:
```
"...handwritten illustration style, editorial contemporary aesthetic, flat color areas, minimal shading, clean lines, NOT photorealistic..."
```

### Problem: Image is too complex
**Solution:** Simplify subject description and request minimalism:
```
"...minimal composition, focus on [KEY ELEMENT], clean negative space, simple background, NOT cluttered..."
```

### Problem: Wrong aspect ratio
**Solution:** Regenerate with correct `--ratio` flag. Check section "Aspect Ratio Guidelines" above.

---

## Example Generation Commands

### Slide 1: Title/Hero Slide
```bash
tsx generate-image.ts "A professional handwritten illustration of diverse business executives gathered around a glowing AI hologram in a modern office, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. The scene shows collaboration and innovation, with clean lines, editorial style, friendly and optimistic feel, minimal shading, flat color areas." --ratio 16:9
```

### Slide 2: Concept Explanation
```bash
tsx generate-image.ts "A professional handwritten illustration of a simplified AI brain network with flowing connections, featuring warm orange tones (vibrant orange #F5A623, light orange, dark orange nodes), charcoal outlines, light gray background. Abstract representation with geometric shapes, clean lines, editorial style, minimal shading, contemporary aesthetic." --ratio 1:1
```

### Slide 3: Business Impact
```bash
tsx generate-image.ts "A professional handwritten illustration of an upward-trending growth chart with a business person pointing to insights, featuring warm orange tones (vibrant orange #F5A623, light orange accents), charcoal outlines, white background. Optimistic and professional, editorial style, clean lines, minimal shading, flat color areas." --ratio 3:2
```

---

## Notes for Implementers

1. **Batch Generation:** When implementing a slide with multiple images, generate all images at once using multiple commands to ensure style consistency
2. **File Naming:** Keep generated filenames (gemini-[timestamp]-N.png) for traceability
3. **Version Control:** If an image needs regeneration, create a new version rather than overwriting
4. **Accessibility:** Always provide meaningful alt text that describes the image content and purpose
5. **Performance:** Use appropriate image sizes - the script generates high-quality PNGs, but consider optimization for web delivery if needed

---

## Reference Links

- Script: `generate-image.ts`
- Design System: `app/globals.css`
- Slide Examples: `components/slide-*.tsx`
- Gemini API Docs: https://ai.google.dev/gemini-api/docs/image-generation
