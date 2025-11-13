/**
 * Design System Rules for AI Image Generation
 *
 * This module defines prompt fragments that encode the presentation's
 * brutalist-minimalist retro-futuristic design system for consistent
 * AI-generated imagery.
 *
 * Color Palette: Light theme with electric orange and neon cyan accents
 * Aesthetic: Brutalist minimalism meets retro-futuristic
 * Purpose: Executive AI strategy presentation
 */

/**
 * Color Palette extracted from globals.css
 */
export const DESIGN_COLORS = {
  // Primary Colors
  primary: "#FF4D00",           // Electric Orange - transformation, emphasis, energy
  primaryGlow: "rgba(255, 77, 0, 0.2)",
  primaryIntense: "#FF6A00",
  primaryDark: "#CC3D00",

  // Accent Colors
  accentBlue: "#00BBFF",        // Neon Cyan - technology, innovation, highlights
  accentBlueGlow: "rgba(0, 187, 255, 0.15)",
  accentBlueDark: "#0099DD",

  // Background Colors (Light Theme)
  backgroundLight: "#FFFFFF",   // Pure white for cards
  backgroundDark: "#FAFAFA",    // Off-white for surfaces

  // Text Colors
  foreground: "#0A0A0A",        // Near black - primary text
  foregroundMuted: "#525252",   // Medium gray - muted text

  // Status Colors
  warning: "#F59E0B",           // Amber - caution, important callouts
  warningGlow: "rgba(245, 158, 11, 0.15)",
  success: "#10B981",           // Emerald - achievement, positive outcomes
  successGlow: "rgba(16, 185, 129, 0.15)",
  destructive: "#EF4444",       // Red - errors, critical issues
  destructiveGlow: "rgba(239, 68, 68, 0.15)",

  // Chart Colors (for data visualization backgrounds)
  chart1: "#FF4D00",            // Electric orange
  chart2: "#0099DD",            // Blue
  chart3: "#F59E0B",            // Amber
  chart4: "#10B981",            // Green
  chart5: "#EC4899",            // Pink
} as const;

/**
 * Aesthetic Principles
 *
 * These describe the visual style to guide AI image generation
 */
export const AESTHETIC_PRINCIPLES = {
  brutalism: "bold geometric shapes, high contrast, raw minimalism, strong typography presence",
  minimalism: "clean layouts, ample whitespace, no unnecessary decoration, focus on essential elements",
  retroFuturistic: "neon accents, geometric patterns (dots, grids), subtle grain texture, 1980s tech aesthetic meets modern design",
  executive: "professional, sophisticated, corporate-appropriate, high-end business presentation quality",
  accessibility: "WCAG AA compliant contrast ratios, clear readability, reduced motion friendly",
} as const;

/**
 * Visual Elements
 *
 * Common patterns used across the presentation
 */
export const VISUAL_ELEMENTS = {
  patterns: "geometric grid patterns, dot matrices, concentric circles, angular lines",
  textures: "subtle grain overlay, noise texture for depth",
  shapes: "sharp rectangles, circles, triangles, hexagons, clean geometric forms",
  composition: "centered focal points, rule of thirds, asymmetric balance for dynamic layouts",
} as const;

/**
 * Style Intensity Levels
 *
 * Control how strongly design system rules are applied
 */
export type StyleIntensity = "minimal" | "moderate" | "bold";

/**
 * Base Design System Rules as Prompt Fragment
 *
 * This is the core style description appended to all prompts
 */
export function getBaseDesignRules(intensity: StyleIntensity = "moderate"): string {
  const intensityDescriptions = {
    minimal: "with subtle design system influence",
    moderate: "following design system guidelines",
    bold: "with strong emphasis on design system aesthetic"
  };

  return `
Design System Requirements ${intensityDescriptions[intensity]}:
- Color Palette: Clean white and off-white backgrounds (#FFFFFF, #FAFAFA), dark text (#0A0A0A), electric orange accents (#FF4D00), neon cyan highlights (#00BBFF)
- Style: Brutalist minimalism meets retro-futuristic aesthetic
- Visual Elements: Bold geometric shapes, high contrast, ample whitespace, clean composition
- Patterns: Geometric grids, dot matrices, subtle grain texture
- Tone: Professional, executive-level, sophisticated, modern corporate
- Accessibility: High contrast ratios (WCAG AA compliant), clear readable text
- NO dark backgrounds, NO gradients on text, NO overly complex illustrations
`.trim();
}

/**
 * Category-Specific Design Rules
 *
 * Additional style guidance for specific image types
 */
export const CATEGORY_DESIGN_RULES = {
  hero: `
- Emphasis: Large-scale geometric shapes, bold orange (#FF4D00) as primary accent
- Composition: Minimal, centered or asymmetric focal point with dramatic whitespace
- Energy: High-impact, transformation-focused, inspiring and forward-looking
- Background: Pure white or very light off-white with subtle texture
  `.trim(),

  concept: `
- Abstract Forms: Geometric shapes representing ideas, interconnected nodes, flowing lines
- Color Usage: Orange for transformation/change, cyan for technology/innovation, amber for caution/opportunity
- Complexity: Moderate - clear enough to understand at a glance but sophisticated
- Metaphors: Technology, AI, digital transformation, strategic thinking, executive decision-making
  `.trim(),

  dataViz: `
- Purpose: Subtle background that doesn't compete with foreground charts/tables
- Pattern: Light geometric grid or dot pattern, very low opacity
- Gradient: If used, extremely subtle light-to-lighter gradients only
- Texture: Minimal grain texture for depth without distraction
- CRITICAL: Absolutely NO TEXT, NO LABELS, NO NUMBERS, NO TYPOGRAPHY - pure background pattern only
  `.trim(),

  portrait: `
- Setting: Modern corporate environment, clean backgrounds, professional lighting
- Tone: Executive-level, confident, sophisticated, approachable
- Colors: Natural skin tones, neutral/white backgrounds, optional orange/cyan accents in environment
- Composition: Rule of thirds, appropriate headroom, professional framing
  `.trim(),

  background: `
- Versatility: Should work with overlaid text and UI elements
- Subtlety: Very low contrast internal elements, focus on texture not shapes
- Patterns: Geometric dots, grids, or mesh patterns at 5-15% opacity
- Colors: Primarily white/off-white with barely visible orange or cyan tints
- CRITICAL: Absolutely NO TEXT, NO LABELS, NO TYPOGRAPHY, NO NUMBERS - pure abstract visual background only
  `.trim(),
} as const;

/**
 * Get complete design system rules for a specific category and intensity
 */
export function getDesignRules(
  category?: keyof typeof CATEGORY_DESIGN_RULES,
  intensity: StyleIntensity = "moderate"
): string {
  const baseRules = getBaseDesignRules(intensity);

  if (category && CATEGORY_DESIGN_RULES[category]) {
    return `${baseRules}\n\nCategory-Specific Guidelines:\n${CATEGORY_DESIGN_RULES[category]}`;
  }

  return baseRules;
}

/**
 * Inject design system rules into a user prompt
 *
 * Smart composition that avoids redundancy if user already specified design elements
 */
export function injectDesignRules(
  userPrompt: string,
  category?: keyof typeof CATEGORY_DESIGN_RULES,
  intensity: StyleIntensity = "moderate"
): string {
  const designRules = getDesignRules(category, intensity);

  // Check if user prompt already mentions design system elements
  const hasColorMentions = /color|palette|orange|cyan|blue|white/i.test(userPrompt);
  const hasStyleMentions = /brutalist|minimal|retro|futuristic|geometric/i.test(userPrompt);

  // If user has extensively specified design, reduce intensity to avoid redundancy
  if (hasColorMentions && hasStyleMentions && intensity === "bold") {
    return `${userPrompt}\n\n${getDesignRules(category, "minimal")}`;
  }

  return `${userPrompt}\n\n${designRules}`;
}

/**
 * Color Palette Description for Prompts
 *
 * Human-readable color descriptions for AI understanding
 */
export function getColorPaletteDescription(): string {
  return `
Color Palette:
- Primary: Electric Orange (#FF4D00) - vibrant, energetic, used for emphasis and transformation themes
- Accent: Neon Cyan (#00BBFF) - cool, technological, used for innovation and highlights
- Background: White (#FFFFFF) and Off-White (#FAFAFA) - clean, professional, light theme
- Text: Near Black (#0A0A0A) - high contrast, maximum readability
- Warning: Amber (#F59E0B) - attention-grabbing for important callouts
- Success: Emerald (#10B981) - positive outcomes, achievements
  `.trim();
}

/**
 * Accessibility Requirements for Image Generation
 */
export function getAccessibilityRequirements(): string {
  return `
Accessibility Requirements:
- Text Contrast: Minimum 4.5:1 ratio for body text, 3:1 for large text (WCAG AA)
- Color Independence: Information conveyed through color must also be available through shape/pattern/text
- Readability: Clear typography hierarchy, sufficient whitespace around text elements
- Motion: Static images preferred; if suggesting motion, use subtle directional cues
  `.trim();
}
