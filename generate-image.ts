#!/usr/bin/env tsx
/**
 * Gemini Image Generation CLI Tool with Design System Integration
 *
 * Usage:
 *   tsx generate-image.ts "your prompt" [options]
 *   tsx generate-image.ts --list-templates
 *   tsx generate-image.ts --template-info <template-id>
 *
 * Options:
 *   --count <number>       Number of images to generate (default: 1)
 *   --ratio <string>       Aspect ratio: 1:1, 16:9, 9:16, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 21:9 (default: 1:1)
 *   --output <path>        Output directory (default: public/generated-images/)
 *   --template <id>        Use predefined template (e.g., hero-bold, concept-ai)
 *   --style <intensity>    Design system intensity: minimal, moderate, bold (default: moderate)
 *   --list-templates       Display all available templates
 *   --template-info <id>   Show detailed info for a specific template
 *   --no-design-system     Skip automatic design system rule injection
 *
 * Examples:
 *   tsx generate-image.ts "AI transformation concept" --template concept-ai --ratio 16:9
 *   tsx generate-image.ts --template hero-bold "Executive Leadership" --count 2
 *   tsx generate-image.ts "custom prompt" --style bold
 *   tsx generate-image.ts --list-templates
 */



import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "dotenv";
import {
  getAllTemplatesDisplay,
  getTemplateById,
  getTemplateDisplayInfo,
  findTemplateByQuery,
  getTemplateSuggestions,
  type PromptTemplate,
} from "./lib/image-generation/prompt-templates";
import {
  injectDesignRules,
  type StyleIntensity,
} from "./lib/image-generation/design-system-rules";
import {
  validateImages,
  formatValidationResult,
  getValidationSummary,
  type ValidationResult,
} from "./lib/image-generation/image-validator";

// Load environment variables
config();

// Types
interface ImageGenerationOptions {
  prompt: string;
  count?: number;
  aspectRatio?: string;
  outputDir?: string;
  template?: string;
  styleIntensity?: StyleIntensity;
  useDesignSystem?: boolean;
}

interface GenerationMetadata {
  timestamp: number;
  prompt: string;
  originalPrompt: string;
  template?: string;
  styleIntensity: StyleIntensity;
  aspectRatio: string;
  count: number;
  designSystemApplied: boolean;
  validation: ValidationResult[];
}

// Valid aspect ratios supported by Gemini
const VALID_ASPECT_RATIOS = [
  "1:1", "16:9", "9:16", "3:2", "2:3",
  "4:3", "3:4", "4:5", "5:4", "21:9"
];

/**
 * Parse command line arguments
 */
function parseArgs(): ImageGenerationOptions | null {
  const args = process.argv.slice(2);

  // Handle special commands first
  if (args.length === 0) {
    console.error("Error: Prompt text or command is required");
    console.error("Usage: tsx generate-image.ts \"your prompt\" [options]");
    console.error("       tsx generate-image.ts --list-templates");
    console.error("       tsx generate-image.ts --template-info <template-id>");
    process.exit(1);
  }

  // Handle --list-templates
  if (args[0] === "--list-templates") {
    console.log(getAllTemplatesDisplay());
    process.exit(0);
  }

  // Handle --template-info
  if (args[0] === "--template-info") {
    if (!args[1]) {
      console.error("Error: --template-info requires a template ID");
      console.error("Usage: tsx generate-image.ts --template-info <template-id>");
      process.exit(1);
    }

    const template = getTemplateById(args[1]);
    if (!template) {
      console.error(`Error: Template "${args[1]}" not found`);
      const suggestions = getTemplateSuggestions(args[1]);
      if (suggestions.length > 0) {
        console.error(`\nDid you mean one of these?\n  ${suggestions.join("\n  ")}`);
      }
      console.error("\nUse --list-templates to see all available templates");
      process.exit(1);
    }

    console.log(getTemplateDisplayInfo(template));
    process.exit(0);
  }

  // Check for prompt (can be first arg or after --template)
  let promptIndex = 0;
  let hasPrompt = false;

  // If first arg doesn't start with --, it's the prompt
  if (!args[0].startsWith("--")) {
    hasPrompt = true;
    promptIndex = 0;
  } else {
    // Look for prompt after flags
    for (let i = 0; i < args.length; i++) {
      if (!args[i].startsWith("--") && (i === 0 || !args[i - 1].startsWith("--") || args[i - 1] === "--template" || args[i - 1] === "--style")) {
        // Skip values that are flag arguments
        const prevFlag = i > 0 ? args[i - 1] : "";
        if (["--count", "--ratio", "--output", "--template", "--style", "--template-info"].includes(prevFlag)) {
          continue;
        }
        hasPrompt = true;
        promptIndex = i;
        break;
      }
    }
  }

  const options: ImageGenerationOptions = {
    prompt: "",
    count: 1,
    aspectRatio: "1:1",
    outputDir: path.join(process.cwd(), "public/generated-images"),
    styleIntensity: "moderate",
    useDesignSystem: true,
  };

  // Parse optional flags
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // Skip the prompt
    if (i === promptIndex) {
      options.prompt = arg;
      continue;
    }

    switch (arg) {
      case "--count":
        const count = parseInt(args[++i]);
        if (isNaN(count) || count < 1 || count > 4) {
          console.error("Error: --count must be a number between 1 and 4");
          process.exit(1);
        }
        options.count = count;
        break;

      case "--ratio":
        const ratio = args[++i];
        if (!VALID_ASPECT_RATIOS.includes(ratio)) {
          console.error(`Error: Invalid aspect ratio. Valid options: ${VALID_ASPECT_RATIOS.join(", ")}`);
          process.exit(1);
        }
        options.aspectRatio = ratio;
        break;

      case "--output":
        options.outputDir = args[++i];
        break;

      case "--template":
        options.template = args[++i];
        break;

      case "--style":
        const style = args[++i] as StyleIntensity;
        if (!["minimal", "moderate", "bold"].includes(style)) {
          console.error("Error: --style must be one of: minimal, moderate, bold");
          process.exit(1);
        }
        options.styleIntensity = style;
        break;

      case "--no-design-system":
        options.useDesignSystem = false;
        break;

      default:
        // Skip if it's a value for a previous flag
        if (i > 0 && ["--count", "--ratio", "--output", "--template", "--style"].includes(args[i - 1])) {
          continue;
        }
        // Unknown flag
        if (arg.startsWith("--")) {
          console.error(`Error: Unknown option ${arg}`);
          process.exit(1);
        }
    }
  }

  // Validate template if provided
  if (options.template) {
    const template = findTemplateByQuery(options.template);
    if (!template) {
      console.error(`Error: Template "${options.template}" not found`);
      const suggestions = getTemplateSuggestions(options.template);
      if (suggestions.length > 0) {
        console.error(`\nDid you mean one of these?\n  ${suggestions.join("\n  ")}`);
      }
      console.error("\nUse --list-templates to see all available templates");
      process.exit(1);
    }

    // Use template prompt if no user prompt provided
    if (!options.prompt) {
      options.prompt = template.prompt;
      console.log(`\n📋 Using template: ${template.name}`);
    }

    // Use template's recommended aspect ratio if not specified
    if (options.aspectRatio === "1:1" && template.recommendedAspectRatio) {
      options.aspectRatio = template.recommendedAspectRatio;
      console.log(`📐 Using recommended aspect ratio: ${options.aspectRatio}`);
    }
  }

  // Final validation
  if (!options.prompt) {
    console.error("Error: Prompt text is required");
    console.error("Usage: tsx generate-image.ts \"your prompt\" [options]");
    console.error("   Or: tsx generate-image.ts --template <template-id>");
    process.exit(1);
  }

  return options;
}

/**
 * Generate images using Gemini API with design system integration
 */
async function generateImages(options: ImageGenerationOptions): Promise<{
  savedPaths: string[];
  metadata: GenerationMetadata;
}> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found in environment variables");
  }

  // Store original prompt
  const originalPrompt = options.prompt;

  // Apply template if specified
  let template: PromptTemplate | undefined;
  if (options.template) {
    template = findTemplateByQuery(options.template)!;
  }

  // Apply design system rules if enabled
  let finalPrompt = options.prompt;
  const designSystemApplied = options.useDesignSystem !== false;

  if (designSystemApplied) {
    const category = template?.category;
    finalPrompt = injectDesignRules(
      options.prompt,
      category,
      options.styleIntensity || "moderate"
    );
  }

  console.log(`\n🎨 Generating image(s) with Gemini...`);
  if (template) {
    console.log(`📋 Template: ${template.name} (${template.id})`);
  }
  console.log(`📝 Original Prompt: "${originalPrompt}"`);
  if (designSystemApplied) {
    console.log(`🎨 Design System: Applied (${options.styleIntensity || "moderate"} intensity)`);
  } else {
    console.log(`🎨 Design System: Skipped`);
  }
  console.log(`🖼️  Aspect Ratio: ${options.aspectRatio}`);
  console.log(`#️⃣  Count: ${options.count}\n`);

  const ai = new GoogleGenAI({ apiKey });

  // Build the prompt - request multiple images if count > 1
  let apiPrompt = finalPrompt;
  if (options.count && options.count > 1) {
    apiPrompt = `Generate ${options.count} variations of: ${finalPrompt}`;
  }

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: apiPrompt,
    config: {
      responseModalities: ["Image"],
      imageConfig: {
        aspectRatio: options.aspectRatio
      }
    }
  });

  // Ensure output directory exists
  const outputDir = path.resolve(options.outputDir!);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created directory: ${outputDir}`);
  }

  // Save generated images
  const savedPaths: string[] = [];
  const timestamp = Date.now();

  // Extract images from response - Gemini API returns in candidates[0].content.parts
  const parts = result.candidates?.[0]?.content?.parts || [];
  const imageParts = parts.filter((part: any) => part.inlineData?.mimeType?.startsWith("image/"));

  if (imageParts.length === 0) {
    throw new Error("No images were generated in the response");
  }

  console.log(`\n✅ Generated ${imageParts.length} image(s)\n`);

  for (let i = 0; i < imageParts.length; i++) {
    const imageData = imageParts[i].inlineData.data;
    const filename = `gemini-${timestamp}-${i + 1}.png`;
    const filepath = path.join(outputDir, filename);

    // Convert base64 to buffer and save
    const buffer = Buffer.from(imageData, "base64");
    fs.writeFileSync(filepath, buffer);

    savedPaths.push(filepath);

    // Also output relative path for use in HTML
    const relativePath = path.relative(process.cwd(), filepath);
    console.log(`💾 Saved: ${relativePath}`);
  }

  // Validate generated images
  console.log("\n🔍 Validating generated images...\n");
  const validationResults = validateImages(savedPaths, options.aspectRatio);

  // Display validation results
  validationResults.forEach(result => {
    console.log(formatValidationResult(result));
  });

  console.log(getValidationSummary(validationResults));

  // Create metadata
  const metadata: GenerationMetadata = {
    timestamp,
    prompt: finalPrompt,
    originalPrompt,
    template: template?.id,
    styleIntensity: options.styleIntensity || "moderate",
    aspectRatio: options.aspectRatio!,
    count: options.count!,
    designSystemApplied,
    validation: validationResults,
  };

  // Save metadata JSON alongside images
  const metadataPath = path.join(outputDir, `gemini-${timestamp}-metadata.json`);
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  console.log(`📄 Metadata saved: ${path.relative(process.cwd(), metadataPath)}\n`);

  return { savedPaths, metadata };
}

/**
 * Main execution
 */
async function main() {
  try {
    const options = parseArgs();

    if (!options) {
      // parseArgs handles its own exit for special commands
      return;
    }

    const result = await generateImages(options);
    const { savedPaths, metadata } = result;

    console.log(`\n✨ Success! Generated ${savedPaths.length} image(s)`);
    console.log(`\n📋 HTML Usage:`);
    savedPaths.forEach((filepath, index) => {
      const relativePath = path.relative(process.cwd(), filepath);
      console.log(`<img src="${relativePath.replace(/\\/g, "/")}" alt="Generated image ${index + 1}" />`);
    });

    console.log(`\n💡 Tips:`);
    if (metadata.designSystemApplied) {
      console.log(`   • Design system rules applied with ${metadata.styleIntensity} intensity`);
      console.log(`   • Use --no-design-system to skip automatic styling`);
    } else {
      console.log(`   • Try --template <id> for design-consistent images`);
      console.log(`   • Use --list-templates to see available templates`);
    }
    if (metadata.template) {
      console.log(`   • Template "${metadata.template}" used - check metadata JSON for details`);
    }
    console.log(`   • Metadata saved for reference and reproducibility`);
    console.log("");
  } catch (error) {
    console.error("\n❌ Error:", error instanceof Error ? error.message : String(error));

    if (error instanceof Error && error.message.includes("GEMINI_API_KEY")) {
      console.error("\n💡 Tip: Make sure GEMINI_API_KEY is set in your .env file");
    }

    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Export for programmatic use
export { generateImages, ImageGenerationOptions, GenerationMetadata };
