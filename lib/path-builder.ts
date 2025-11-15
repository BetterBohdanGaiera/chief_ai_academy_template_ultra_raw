/**
 * Path builder utility
 * Composes slide arrays from path configurations with validation
 */

import { type Path, type SlideRange, type Slide } from '@/types/courses'
import { slideRegistry } from '@/config/slides'

/**
 * Build slide array from path configuration
 * Filters slides based on path manifest (module + range)
 *
 * @param path - Learning path configuration
 * @returns Array of slide IDs to display
 */
export function buildSlidesFromPath(path: Path): string[] {
  const slideIds: string[] = []

  // Iterate through each slide range in the path
  for (const range of path.slides) {
    const rangeSlides = getSlidesForRange(range)
    slideIds.push(...rangeSlides)
  }

  return slideIds
}

/**
 * Get slides for a specific module range
 *
 * @param range - Slide range specification
 * @returns Array of slide IDs matching the range
 */
function getSlidesForRange(range: SlideRange): string[] {
  const { module, range: [start, end] } = range
  const slideIds: string[] = []

  // Get all slides for this module
  const moduleSlides = Object.entries(slideRegistry)
    .filter(([_, entry]) => entry.slide.module === module)
    .map(([id, entry]) => ({ id, slide: entry.slide }))

  // For now, since we're using mock slides, return all matching module slides
  // In the future, this will respect the range specification
  for (const { id } of moduleSlides) {
    slideIds.push(id)
  }

  return slideIds
}

/**
 * Validate path configuration
 * Checks for:
 * - Non-existent modules
 * - Invalid slide ranges
 * - Empty paths
 *
 * @param path - Learning path to validate
 * @returns Validation result with errors array
 */
export function validatePath(path: Path): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []

  // Check if path has slides
  if (!path.slides || path.slides.length === 0) {
    errors.push(`Path "${path.id}" has no slides configured`)
  }

  // Validate each slide range
  for (const range of path.slides || []) {
    // Check if module exists in slide registry
    const moduleExists = Object.values(slideRegistry).some(
      entry => entry.slide.module === range.module
    )

    if (!moduleExists) {
      errors.push(`Module "${range.module}" referenced in path "${path.id}" not found in slide registry`)
    }

    // Validate range
    const [start, end] = range.range
    if (start < 1 || end < start) {
      errors.push(`Invalid range [${start}, ${end}] for module "${range.module}" in path "${path.id}"`)
    }
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

/**
 * Calculate total duration for a path based on composed slides
 *
 * @param path - Learning path
 * @returns Total duration in minutes
 */
export function calculatePathDuration(path: Path): number {
  const slideIds = buildSlidesFromPath(path)
  let totalDuration = 0

  for (const slideId of slideIds) {
    const entry = slideRegistry[slideId]
    if (entry) {
      totalDuration += entry.slide.duration
    }
  }

  return totalDuration
}

/**
 * Get slide count for a path
 *
 * @param path - Learning path
 * @returns Total number of slides
 */
export function getPathSlideCount(path: Path): number {
  const slideIds = buildSlidesFromPath(path)
  return slideIds.length
}
