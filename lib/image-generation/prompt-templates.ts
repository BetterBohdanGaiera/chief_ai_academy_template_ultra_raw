/**
 * Prompt Templates for AI Image Generation
 *
 * Categorized template library for generating design-consistent imagery
 * across common presentation scenarios.
 */

import { CATEGORY_DESIGN_RULES } from "./design-system-rules";

/**
 * Template Metadata
 */
export interface PromptTemplate {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  prompt: string;
  recommendedAspectRatio: string;
  useCases: string[];
  tags: string[];
}

/**
 * Template Categories
 */
export type TemplateCategory = "hero" | "concept" | "data-viz" | "portrait" | "background";

/**
 * Template Library
 *
 * Each template includes a carefully crafted prompt that aligns with
 * the presentation's design system and intended use case.
 */
export const PROMPT_TEMPLATES: PromptTemplate[] = [
  // === HERO IMAGE TEMPLATES ===
  {
    id: "hero-bold",
    name: "Bold Hero",
    category: "hero",
    description: "High-impact title slide with dramatic geometric shapes and electric orange accents",
    prompt: "Minimalist brutalist hero image featuring large-scale geometric shapes (rectangles, circles) with electric orange (#FF4D00) as dominant accent color on pure white background. Asymmetric composition with dramatic negative space. Bold, confident, transformation-focused. Professional executive presentation aesthetic. Clean, modern, high-contrast. Subtle grain texture overlay.",
    recommendedAspectRatio: "16:9",
    useCases: ["Title slides", "Section dividers", "Opening presentation slide"],
    tags: ["geometric", "bold", "orange", "minimalist", "high-impact"]
  },
  {
    id: "hero-subtle",
    name: "Subtle Hero",
    category: "hero",
    description: "Refined title slide with minimal geometric patterns and understated elegance",
    prompt: "Elegant minimalist hero image with subtle geometric grid pattern in light gray on white background. Small electric orange accent element in corner. Centered composition with ample whitespace. Sophisticated, refined, executive-level quality. Barely visible dot matrix texture. Professional corporate aesthetic with retro-futuristic undertones.",
    recommendedAspectRatio: "16:9",
    useCases: ["Executive summary slides", "Conclusion slides", "Professional intros"],
    tags: ["subtle", "elegant", "grid", "minimalist", "sophisticated"]
  },
  {
    id: "hero-dynamic",
    name: "Dynamic Hero",
    category: "hero",
    description: "Energetic title slide with angular shapes suggesting motion and transformation",
    prompt: "Dynamic brutalist composition with angular geometric shapes suggesting forward motion. Electric orange (#FF4D00) and neon cyan (#00BBFF) accent elements on white background. Diagonal composition lines creating energy. Bold, transformative, future-focused. Geometric patterns (chevrons, arrows) implying progress. High contrast, clean, professional executive presentation quality.",
    recommendedAspectRatio: "16:9",
    useCases: ["Transformation slides", "Strategy reveals", "Future vision slides"],
    tags: ["dynamic", "motion", "transformation", "angular", "energetic"]
  },

  // === CONCEPT ILLUSTRATION TEMPLATES ===
  {
    id: "concept-ai",
    name: "AI Concept",
    category: "concept",
    description: "Abstract visualization of artificial intelligence and machine learning",
    prompt: "Abstract geometric representation of AI and machine learning. Interconnected nodes forming neural network pattern. Electric orange for transformation nodes, neon cyan for data/technology elements. White background with subtle grid. Clean geometric shapes (circles, lines, hexagons). Minimalist, technical but accessible. Professional executive-level infographic style. No human figures, focus on abstract geometric metaphor.",
    recommendedAspectRatio: "16:9",
    useCases: ["AI introduction slides", "Technology explanation", "ML concept slides"],
    tags: ["ai", "neural-network", "abstract", "technology", "nodes"]
  },
  {
    id: "concept-transformation",
    name: "Digital Transformation",
    category: "concept",
    description: "Visual metaphor for organizational change and digital evolution",
    prompt: "Abstract geometric illustration of transformation and evolution. Before/after concept using geometric shapes morphing from simple to complex. Electric orange emphasizing the transformation moment. White background with gradient mesh pattern. Clean, professional, forward-looking. Geometric shapes suggesting progress: arrows, ascending lines, expanding circles. Executive presentation quality, sophisticated, inspiring.",
    recommendedAspectRatio: "3:2",
    useCases: ["Change management slides", "Digital transformation", "Evolution narratives"],
    tags: ["transformation", "evolution", "change", "progress", "before-after"]
  },
  {
    id: "concept-strategy",
    name: "Strategic Planning",
    category: "concept",
    description: "Abstract representation of strategic thinking and planning",
    prompt: "Geometric abstract illustration of strategic planning. Layered geometric shapes suggesting depth and complexity. Electric orange for key decision points, cyan for supporting elements. White background with subtle concentric circle pattern. Organized, systematic, thoughtful composition. Geometric forms: rectangles for structure, circles for goals, connecting lines for relationships. Professional, executive-level sophistication.",
    recommendedAspectRatio: "4:3",
    useCases: ["Strategy slides", "Planning presentations", "Framework explanations"],
    tags: ["strategy", "planning", "framework", "structure", "systematic"]
  },
  {
    id: "concept-innovation",
    name: "Innovation Spark",
    category: "concept",
    description: "Energetic visualization of innovation and breakthrough ideas",
    prompt: "Dynamic geometric composition representing innovation and creative breakthroughs. Radiating geometric shapes from central point suggesting idea explosion. Electric orange and neon cyan bursts on white background. Geometric star patterns, expanding hexagons, dynamic angular forms. Energetic, inspiring, forward-thinking. Clean professional aesthetic with retro-futuristic geometric patterns. Subtle grain texture for depth.",
    recommendedAspectRatio: "16:9",
    useCases: ["Innovation slides", "Idea generation", "Creative thinking"],
    tags: ["innovation", "creativity", "breakthrough", "ideas", "dynamic"]
  },

  // === DATA VISUALIZATION BACKGROUND TEMPLATES ===
  {
    id: "dataviz-grid",
    name: "Data Grid",
    category: "data-viz",
    description: "Subtle geometric grid background for charts and tables",
    prompt: "Subtle geometric grid background pattern on white base. Very light gray grid lines (5% opacity). Barely visible electric orange accent dots at grid intersections. Minimalist, clean, designed to support foreground data visualization. No competing visual elements. Uniform, professional, suitable for charts, graphs, and tables overlay. Extremely subtle texture to add depth without distraction.",
    recommendedAspectRatio: "16:9",
    useCases: ["Chart backgrounds", "Table slides", "Data presentation"],
    tags: ["grid", "subtle", "data", "background", "minimal"]
  },
  {
    id: "dataviz-gradient",
    name: "Soft Gradient",
    category: "data-viz",
    description: "Gentle gradient background with minimal pattern for data displays",
    prompt: "Extremely subtle gradient background from pure white to very light off-white (#FAFAFA). Barely visible dot matrix pattern (3% opacity). Clean, professional, designed to sit behind charts and data visualizations. No strong visual elements. Gentle, uniform, supportive background. Small electric orange accent element in far corner (very subtle). Executive presentation quality, sophisticated minimalism.",
    recommendedAspectRatio: "16:9",
    useCases: ["Chart slides", "Dashboard views", "Analytics presentations"],
    tags: ["gradient", "subtle", "data", "charts", "minimal"]
  },
  {
    id: "dataviz-texture",
    name: "Textured Canvas",
    category: "data-viz",
    description: "Light textured background adding depth without competing with data",
    prompt: "White background with subtle grain texture overlay. Very low opacity geometric dot pattern creating gentle canvas texture. Professional, clean, designed to provide depth to data visualizations without visual competition. Uniform brightness, suitable for overlaying colorful charts. Minimal, sophisticated, executive-level quality. Tiny electric orange accent dots scattered sparsely (barely visible).",
    recommendedAspectRatio: "4:3",
    useCases: ["Data heavy slides", "Statistical presentations", "Report backgrounds"],
    tags: ["texture", "grain", "subtle", "data-support", "professional"]
  },

  // === EXECUTIVE PORTRAIT TEMPLATES ===
  {
    id: "portrait-executive",
    name: "Executive Portrait",
    category: "portrait",
    description: "Professional business portrait in modern corporate setting",
    prompt: "Professional executive portrait in modern corporate environment. Clean white or light gray background. Natural professional lighting, confident pose. Modern business attire. Geometric architectural elements (windows, walls) with subtle electric orange accent in environment (artwork, furniture detail). Rule of thirds composition, appropriate headroom. High-end corporate photography quality, sophisticated, approachable yet authoritative.",
    recommendedAspectRatio: "3:4",
    useCases: ["Team slides", "Leadership introductions", "About us sections"],
    tags: ["portrait", "professional", "executive", "corporate", "leadership"]
  },
  {
    id: "portrait-team",
    name: "Team Collaboration",
    category: "portrait",
    description: "Group of professionals collaborating in modern office",
    prompt: "Professional team collaboration scene in modern minimalist office. Diverse group of executives working together. White walls, natural light, clean geometric furniture. Electric orange accent element in environment (chair, screen, artwork). Candid but polished photography style. Geometric composition, professional corporate atmosphere. High-quality business photography, sophisticated, inclusive, forward-thinking organization aesthetic.",
    recommendedAspectRatio: "16:9",
    useCases: ["Team culture slides", "Collaboration themes", "Organization overviews"],
    tags: ["team", "collaboration", "corporate", "group", "modern-office"]
  },

  // === ABSTRACT BACKGROUND TEMPLATES ===
  {
    id: "background-dots",
    name: "Dot Matrix",
    category: "background",
    description: "Geometric dot pattern background for versatile slide usage",
    prompt: "Uniform dot matrix pattern on pure white background. Small geometric dots in light gray (10% opacity) arranged in perfect grid. Subtle electric orange dots appear occasionally (5% of dots) creating barely visible accent pattern. Extremely minimal, clean, professional. Designed to work with overlaid text and UI elements. Retro-futuristic aesthetic, sophisticated, executive presentation quality.",
    recommendedAspectRatio: "16:9",
    useCases: ["General content slides", "Text-heavy slides", "Versatile backgrounds"],
    tags: ["dots", "pattern", "grid", "versatile", "minimal"]
  },
  {
    id: "background-mesh",
    name: "Gradient Mesh",
    category: "background",
    description: "Subtle gradient mesh pattern adding modern sophistication",
    prompt: "Subtle gradient mesh background with organic flowing curves. White to off-white gradient with barely visible electric orange and neon cyan tints (2-3% opacity) creating gentle color zones. Geometric grid overlay (very low opacity). Modern, sophisticated, clean. Designed to support text overlay. Minimalist brutalist meets soft organic forms. Executive-level refinement, professional presentation quality.",
    recommendedAspectRatio: "16:9",
    useCases: ["Feature slides", "Content backgrounds", "Section transitions"],
    tags: ["mesh", "gradient", "subtle", "modern", "sophisticated"]
  },
  {
    id: "background-geometric",
    name: "Geometric Abstract",
    category: "background",
    description: "Light geometric shapes background with brutalist aesthetic",
    prompt: "Abstract geometric composition with large-scale light gray geometric shapes (circles, rectangles, triangles) on white background. All shapes at very low opacity (5-8%). Single small electric orange geometric accent. Asymmetric composition, ample whitespace. Brutalist minimalist aesthetic. Designed to sit behind content without visual competition. Professional, modern, executive presentation quality. Subtle grain texture overlay.",
    recommendedAspectRatio: "16:9",
    useCases: ["Content slides", "Mixed media backgrounds", "Slide variety"],
    tags: ["geometric", "abstract", "shapes", "brutalist", "minimal"]
  },
  {
    id: "background-retro",
    name: "Retro Grid",
    category: "background",
    description: "Retro-futuristic grid pattern with 1980s tech aesthetic",
    prompt: "Retro-futuristic grid background inspired by 1980s computer graphics. Perspective grid receding to horizon on white background. Very light cyan grid lines with electric orange accent line. Minimalist, nostalgic yet modern. Clean, professional, suitable for text overlay. Geometric precision, subtle grain texture. Executive presentation quality with retro-futuristic character. Low contrast, supportive background element.",
    recommendedAspectRatio: "21:9",
    useCases: ["Technology slides", "Futuristic themes", "Innovation sections"],
    tags: ["retro", "grid", "futuristic", "1980s", "perspective"]
  },
];

/**
 * Get templates by category
 */
export function getTemplatesByCategory(category: TemplateCategory): PromptTemplate[] {
  return PROMPT_TEMPLATES.filter(t => t.category === category);
}

/**
 * Get template by ID
 */
export function getTemplateById(id: string): PromptTemplate | undefined {
  return PROMPT_TEMPLATES.find(t => t.id === id);
}

/**
 * Search templates by tag
 */
export function getTemplatesByTag(tag: string): PromptTemplate[] {
  return PROMPT_TEMPLATES.filter(t =>
    t.tags.some(templateTag =>
      templateTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
}

/**
 * Get all template categories
 */
export function getAllCategories(): TemplateCategory[] {
  return ["hero", "concept", "data-viz", "portrait", "background"];
}

/**
 * Get template display info for CLI listing
 */
export function getTemplateDisplayInfo(template: PromptTemplate): string {
  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ${template.name} (${template.id})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Category: ${template.category}
  Ratio: ${template.recommendedAspectRatio}

  ${template.description}

  Use Cases:
  ${template.useCases.map(uc => `  • ${uc}`).join('\n')}

  Tags: ${template.tags.join(', ')}
  `.trim();
}

/**
 * Get all templates formatted for CLI display
 */
export function getAllTemplatesDisplay(): string {
  let output = `
╔════════════════════════════════════════════════════════════╗
║  AI IMAGE GENERATION - AVAILABLE TEMPLATES                 ║
╚════════════════════════════════════════════════════════════╝

`;

  const categories = getAllCategories();

  categories.forEach(category => {
    const templates = getTemplatesByCategory(category);
    output += `\n📂 ${category.toUpperCase()} (${templates.length} templates)\n`;
    output += '─'.repeat(60) + '\n\n';

    templates.forEach(template => {
      output += `  ${template.id}\n`;
      output += `  ${template.name} - ${template.description}\n`;
      output += `  Ratio: ${template.recommendedAspectRatio} | Tags: ${template.tags.slice(0, 3).join(', ')}\n\n`;
    });
  });

  output += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

USAGE EXAMPLES:
  tsx generate-image.ts --template hero-bold "AI transformation"
  tsx generate-image.ts --template concept-ai --count 2
  tsx generate-image.ts --template dataviz-grid --ratio 16:9

For detailed template info:
  tsx generate-image.ts --template-info <template-id>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  return output;
}

/**
 * Match user query to template (fuzzy matching)
 */
export function findTemplateByQuery(query: string): PromptTemplate | null {
  const lowerQuery = query.toLowerCase();

  // Try exact ID match first
  const exactMatch = getTemplateById(lowerQuery);
  if (exactMatch) return exactMatch;

  // Try category match (e.g., "category:hero")
  if (lowerQuery.startsWith('category:')) {
    const category = lowerQuery.replace('category:', '') as TemplateCategory;
    const templates = getTemplatesByCategory(category);
    return templates.length > 0 ? templates[0] : null;
  }

  // Try tag match
  const tagMatches = getTemplatesByTag(lowerQuery);
  if (tagMatches.length > 0) return tagMatches[0];

  // Try partial name match
  const nameMatch = PROMPT_TEMPLATES.find(t =>
    t.name.toLowerCase().includes(lowerQuery) ||
    t.id.toLowerCase().includes(lowerQuery)
  );
  if (nameMatch) return nameMatch;

  return null;
}

/**
 * Get template suggestions for invalid query
 */
export function getTemplateSuggestions(query: string): string[] {
  const lowerQuery = query.toLowerCase();

  const suggestions = PROMPT_TEMPLATES
    .filter(t =>
      t.id.toLowerCase().includes(lowerQuery) ||
      t.name.toLowerCase().includes(lowerQuery) ||
      t.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      t.category.toLowerCase().includes(lowerQuery)
    )
    .map(t => t.id)
    .slice(0, 5);

  return suggestions;
}
