#!/usr/bin/env tsx
/**
 * Gemini Image Generation CLI Tool
 *
 * Usage:
 *   tsx generate-image.ts "your prompt" [options]
 *
 * Options:
 *   --count <number>     Number of images to generate (default: 1)
 *   --ratio <string>     Aspect ratio: 1:1, 16:9, 9:16, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 21:9 (default: 1:1)
 *   --output <path>      Output directory (default: public/generated-images/)
 *
 * Example:
 *   tsx generate-image.ts "a futuristic AI robot presenting to executives" --count 2 --ratio 16:9
 */

import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "dotenv";

// Load environment variables
config();

// Types
interface ImageGenerationOptions {
  prompt: string;
  count?: number;
  aspectRatio?: string;
  outputDir?: string;
}

// Valid aspect ratios supported by Gemini
const VALID_ASPECT_RATIOS = [
  "1:1", "16:9", "9:16", "3:2", "2:3",
  "4:3", "3:4", "4:5", "5:4", "21:9"
];

/**
 * Parse command line arguments
 */
function parseArgs(): ImageGenerationOptions {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0].startsWith("--")) {
    console.error("Error: Prompt text is required as the first argument");
    console.error("Usage: tsx generate-image.ts \"your prompt\" [options]");
    process.exit(1);
  }

  const options: ImageGenerationOptions = {
    prompt: args[0],
    count: 1,
    aspectRatio: "1:1",
    outputDir: "public/generated-images"
  };

  // Parse optional flags
  for (let i = 1; i < args.length; i++) {
    switch (args[i]) {
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

      default:
        console.error(`Error: Unknown option ${args[i]}`);
        process.exit(1);
    }
  }

  return options;
}

/**
 * Generate images using Gemini API
 */
async function generateImages(options: ImageGenerationOptions): Promise<string[]> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found in environment variables");
  }

  console.log(`\n🎨 Generating image(s) with Gemini...`);
  console.log(`📝 Prompt: "${options.prompt}"`);
  console.log(`🖼️  Aspect Ratio: ${options.aspectRatio}`);
  console.log(`#️⃣  Count: ${options.count}\n`);

  const ai = new GoogleGenAI({ apiKey });

  // Build the prompt - request multiple images if count > 1
  let fullPrompt = options.prompt;
  if (options.count && options.count > 1) {
    fullPrompt = `Generate ${options.count} variations of: ${options.prompt}`;
  }

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: fullPrompt,
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

  return savedPaths;
}

/**
 * Main execution
 */
async function main() {
  try {
    const options = parseArgs();
    const savedPaths = await generateImages(options);

    console.log(`\n✨ Success! Generated ${savedPaths.length} image(s)`);
    console.log(`\n📋 HTML Usage:`);
    savedPaths.forEach((filepath, index) => {
      const relativePath = path.relative(process.cwd(), filepath);
      console.log(`<img src="${relativePath.replace(/\\/g, "/")}" alt="Generated image ${index + 1}" />`);
    });
    console.log("");
  } catch (error) {
    console.error("\n❌ Error:", error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Export for programmatic use
export { generateImages, ImageGenerationOptions };
