/**
 * Slide registry configuration
 * Maps slide IDs to components and metadata
 *
 * Template: Add your slides here following the pattern below
 */

import { type SlideRegistry } from '@/types/courses'

/**
 * Slide Registry
 * Each module should have its own section
 * Slide IDs follow pattern: {module}-{number}-{name}
 */
export const slideRegistry: SlideRegistry = {
  // ============================================
  // M1: EXAMPLE MODULE (Template Slides)
  // ============================================
  'm1-01-title': {
    slide: {
      id: 'm1-01-title',
      component: () => import('@/components/slides/m1/01-example-title'),
      module: 'm1',
      title: 'Example Title Slide',
      tags: ['title', 'example'],
      duration: 1,
      notes: 'Hero title slide template with animated background'
    },
    loader: () => import('@/components/slides/m1/01-example-title')
  },
  'm1-02-interactive': {
    slide: {
      id: 'm1-02-interactive',
      component: () => import('@/components/slides/m1/02-example-interactive'),
      module: 'm1',
      title: 'Interactive Example',
      tags: ['interactive', 'example'],
      duration: 2,
      notes: 'Interactive toggle pattern example'
    },
    loader: () => import('@/components/slides/m1/02-example-interactive')
  }

  // ============================================
  // M2: YOUR MODULE (Add slides here)
  // ============================================
  // 'm2-01-title': { ... }

  // ============================================
  // M3: ANOTHER MODULE (Add slides here)
  // ============================================
  // 'm3-01-title': { ... }
}

/**
 * Get slide by ID
 */
export function getSlide(slideId: string) {
  return slideRegistry[slideId]
}

/**
 * Get all slides as an array
 */
export function getAllSlides() {
  return Object.values(slideRegistry).map(entry => entry.slide)
}

/**
 * Get slides by module
 */
export function getSlidesByModule(moduleId: string) {
  return Object.values(slideRegistry)
    .filter(entry => entry.slide.module === moduleId)
    .map(entry => entry.slide)
}

/**
 * Get slides by tags
 */
export function getSlidesByTags(tags: string[]) {
  return Object.values(slideRegistry)
    .filter(entry => tags.some(tag => entry.slide.tags.includes(tag)))
    .map(entry => entry.slide)
}
