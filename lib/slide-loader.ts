/**
 * Slide loader utility
 * Dynamic slide loading with preloading and error boundaries
 */

import { type Slide } from '@/types/courses'
import { slideRegistry } from '@/config/slides'

/**
 * Load slide component by ID
 *
 * @param slideId - Slide identifier
 * @returns Promise resolving to slide component
 */
export async function loadSlide(slideId: string): Promise<React.ComponentType> {
  const entry = slideRegistry[slideId]

  if (!entry) {
    throw new Error(`Slide "${slideId}" not found in registry`)
  }

  try {
    const module = await entry.loader()
    return module.default
  } catch (error) {
    console.error(`Failed to load slide "${slideId}":`, error)
    throw new Error(`Failed to load slide "${slideId}"`)
  }
}

/**
 * Preload slides for better performance
 * Loads slide components in the background
 *
 * @param slideIds - Array of slide IDs to preload
 */
export function preloadSlides(slideIds: string[]): void {
  for (const slideId of slideIds) {
    const entry = slideRegistry[slideId]
    if (entry) {
      // Trigger lazy import without awaiting
      entry.loader().catch(error => {
        console.warn(`Failed to preload slide "${slideId}":`, error)
      })
    }
  }
}

/**
 * Preload next N slides from current position
 *
 * @param slideIds - All slide IDs in presentation
 * @param currentIndex - Current slide index
 * @param count - Number of slides ahead to preload (default: 3)
 */
export function preloadNextSlides(
  slideIds: string[],
  currentIndex: number,
  count: number = 3
): void {
  const nextSlides = slideIds.slice(currentIndex + 1, currentIndex + 1 + count)
  preloadSlides(nextSlides)
}

/**
 * Get slide metadata by ID
 *
 * @param slideId - Slide identifier
 * @returns Slide metadata or undefined
 */
export function getSlideMetadata(slideId: string): Slide | undefined {
  const entry = slideRegistry[slideId]
  return entry?.slide
}

/**
 * Check if slide exists in registry
 *
 * @param slideId - Slide identifier
 * @returns True if slide exists
 */
export function slideExists(slideId: string): boolean {
  return slideId in slideRegistry
}
