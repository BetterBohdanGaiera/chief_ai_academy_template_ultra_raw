/**
 * Image Validation Utilities
 *
 * Post-generation validation to ensure images meet quality requirements
 * for presentation usage.
 */

import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Validation Result
 */
export interface ValidationResult {
  valid: boolean;
  warnings: string[];
  errors: string[];
  metadata: ImageMetadata;
}

/**
 * Image Metadata
 */
export interface ImageMetadata {
  filepath: string;
  filename: string;
  sizeBytes: number;
  sizeMB: number;
  exists: boolean;
  created: Date;
}

/**
 * Aspect Ratio Dimensions
 */
const ASPECT_RATIO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "1:1": { width: 1024, height: 1024 },
  "16:9": { width: 1920, height: 1080 },
  "9:16": { width: 1080, height: 1920 },
  "3:2": { width: 1500, height: 1000 },
  "2:3": { width: 1000, height: 1500 },
  "4:3": { width: 1600, height: 1200 },
  "3:4": { width: 1200, height: 1600 },
  "4:5": { width: 1280, height: 1600 },
  "5:4": { width: 1600, height: 1280 },
  "21:9": { width: 2560, height: 1080 },
};

/**
 * Recommended file size ranges (in MB)
 */
const SIZE_RECOMMENDATIONS = {
  minMB: 0.1,    // Too small might indicate quality issues
  maxMB: 10,     // Too large might cause performance issues
  idealMinMB: 0.5,
  idealMaxMB: 5,
};

/**
 * Get image metadata from file
 */
export function getImageMetadata(filepath: string): ImageMetadata {
  const exists = fs.existsSync(filepath);

  if (!exists) {
    return {
      filepath,
      filename: path.basename(filepath),
      sizeBytes: 0,
      sizeMB: 0,
      exists: false,
      created: new Date(),
    };
  }

  const stats = fs.statSync(filepath);

  return {
    filepath,
    filename: path.basename(filepath),
    sizeBytes: stats.size,
    sizeMB: parseFloat((stats.size / (1024 * 1024)).toFixed(2)),
    exists: true,
    created: stats.birthtime,
  };
}

/**
 * Validate image file
 */
export function validateImage(
  filepath: string,
  expectedAspectRatio?: string
): ValidationResult {
  const metadata = getImageMetadata(filepath);
  const warnings: string[] = [];
  const errors: string[] = [];

  // Check if file exists
  if (!metadata.exists) {
    errors.push(`Image file not found: ${filepath}`);
    return {
      valid: false,
      warnings,
      errors,
      metadata,
    };
  }

  // Validate file size
  if (metadata.sizeMB < SIZE_RECOMMENDATIONS.minMB) {
    warnings.push(
      `Image file size (${metadata.sizeMB}MB) is very small. This might indicate generation issues.`
    );
  }

  if (metadata.sizeMB > SIZE_RECOMMENDATIONS.maxMB) {
    warnings.push(
      `Image file size (${metadata.sizeMB}MB) is large. Consider optimizing for web usage.`
    );
  }

  if (
    metadata.sizeMB >= SIZE_RECOMMENDATIONS.idealMinMB &&
    metadata.sizeMB <= SIZE_RECOMMENDATIONS.idealMaxMB
  ) {
    // Ideal size range - no warning
  } else if (metadata.sizeMB < SIZE_RECOMMENDATIONS.idealMinMB) {
    warnings.push(
      `Image file size (${metadata.sizeMB}MB) is below ideal range (${SIZE_RECOMMENDATIONS.idealMinMB}-${SIZE_RECOMMENDATIONS.idealMaxMB}MB).`
    );
  } else if (metadata.sizeMB > SIZE_RECOMMENDATIONS.idealMaxMB) {
    warnings.push(
      `Image file size (${metadata.sizeMB}MB) is above ideal range (${SIZE_RECOMMENDATIONS.idealMinMB}-${SIZE_RECOMMENDATIONS.idealMaxMB}MB).`
    );
  }

  // Validate expected aspect ratio (informational only - we can't check actual dimensions without image library)
  if (expectedAspectRatio && ASPECT_RATIO_DIMENSIONS[expectedAspectRatio]) {
    const expected = ASPECT_RATIO_DIMENSIONS[expectedAspectRatio];
    // Note: We're not reading actual image dimensions here to avoid dependencies
    // This is informational validation based on request parameters
    warnings.push(
      `Expected dimensions for ${expectedAspectRatio}: ${expected.width}x${expected.height}px (approximate)`
    );
  }

  const valid = errors.length === 0;

  return {
    valid,
    warnings,
    errors,
    metadata,
  };
}

/**
 * Validate multiple images
 */
export function validateImages(
  filepaths: string[],
  expectedAspectRatio?: string
): ValidationResult[] {
  return filepaths.map(fp => validateImage(fp, expectedAspectRatio));
}

/**
 * Format validation result for CLI display
 */
export function formatValidationResult(result: ValidationResult): string {
  const { valid, warnings, errors, metadata } = result;

  let output = `\n📊 Validation Report: ${metadata.filename}\n`;
  output += '─'.repeat(60) + '\n';

  if (!metadata.exists) {
    output += '❌ File does not exist\n';
    return output;
  }

  output += `✓ File exists: ${metadata.filepath}\n`;
  output += `✓ Size: ${metadata.sizeMB}MB (${metadata.sizeBytes} bytes)\n`;
  output += `✓ Created: ${metadata.created.toLocaleString()}\n`;

  if (warnings.length > 0) {
    output += '\n⚠️  Warnings:\n';
    warnings.forEach(w => {
      output += `  • ${w}\n`;
    });
  }

  if (errors.length > 0) {
    output += '\n❌ Errors:\n';
    errors.forEach(e => {
      output += `  • ${e}\n`;
    });
  }

  if (valid && warnings.length === 0) {
    output += '\n✅ All validation checks passed!\n';
  } else if (valid) {
    output += '\n✅ Validation passed (with warnings)\n';
  } else {
    output += '\n❌ Validation failed\n';
  }

  output += '─'.repeat(60) + '\n';

  return output;
}

/**
 * Get validation summary for multiple images
 */
export function getValidationSummary(results: ValidationResult[]): string {
  const totalImages = results.length;
  const validImages = results.filter(r => r.valid).length;
  const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
  const totalErrors = results.reduce((sum, r) => sum + r.errors.length, 0);

  let summary = '\n';
  summary += '╔════════════════════════════════════════════════════════════╗\n';
  summary += '║  VALIDATION SUMMARY                                        ║\n';
  summary += '╚════════════════════════════════════════════════════════════╝\n';
  summary += `\nTotal Images: ${totalImages}\n`;
  summary += `Valid: ${validImages} ✓\n`;

  if (totalWarnings > 0) {
    summary += `Warnings: ${totalWarnings} ⚠️\n`;
  }

  if (totalErrors > 0) {
    summary += `Errors: ${totalErrors} ❌\n`;
  }

  if (validImages === totalImages && totalWarnings === 0) {
    summary += '\n🎉 All images passed validation without warnings!\n';
  } else if (validImages === totalImages) {
    summary += '\n✅ All images are valid (review warnings above)\n';
  } else {
    summary += '\n⚠️  Some images failed validation (see details above)\n';
  }

  return summary;
}

/**
 * Validation suggestions based on results
 */
export function getValidationSuggestions(result: ValidationResult): string[] {
  const suggestions: string[] = [];

  if (!result.metadata.exists) {
    suggestions.push('Check that the image generation completed successfully');
    suggestions.push('Verify the output directory path is correct');
    return suggestions;
  }

  if (result.metadata.sizeMB < SIZE_RECOMMENDATIONS.minMB) {
    suggestions.push('Try regenerating the image - it may be corrupted');
    suggestions.push('Check your Gemini API connection and quota');
  }

  if (result.metadata.sizeMB > SIZE_RECOMMENDATIONS.maxMB) {
    suggestions.push('Consider using a lower resolution for web optimization');
    suggestions.push('Use image compression tools if needed for production');
  }

  if (result.warnings.length > 0 && result.valid) {
    suggestions.push('Image is usable but review warnings for optimal quality');
  }

  return suggestions;
}
