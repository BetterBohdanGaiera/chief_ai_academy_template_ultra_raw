/**
 * Slide registry configuration
 * Maps slide IDs to components and metadata
 *
 * NOTE: This is Phase 1 with MOCK slides only.
 * Full course content (F1-F2, S1-S3) will be added in future phases.
 */

import { type SlideRegistry } from '@/types/courses'

/**
 * Mock slide registry
 * Contains 3 demonstration slides to prove infrastructure works
 */
export const slideRegistry: SlideRegistry = {
  'mock-01-foundation-title': {
    slide: {
      id: 'mock-01-foundation-title',
      component: () => import('@/components/slides/mock/01-foundation-title'),
      module: 'mock',
      title: 'Foundation Course',
      tags: ['title', 'foundation', 'all-roles'],
      duration: 1,
      notes: 'Mock title slide demonstrating hero layout and brutalist design system'
    },
    loader: () => import('@/components/slides/mock/01-foundation-title')
  },
  'mock-02-skills-concept': {
    slide: {
      id: 'mock-02-skills-concept',
      component: () => import('@/components/slides/mock/02-skills-concept'),
      module: 'mock',
      title: 'Skills Course Concept',
      tags: ['concept', 'skills', 'champion', 'manager', 'developer'],
      duration: 2,
      notes: 'Mock content slide with AI-generated image, 2-column layout, interactive elements'
    },
    loader: () => import('@/components/slides/mock/02-skills-concept')
  },
  'mock-03-executive-strategic': {
    slide: {
      id: 'mock-03-executive-strategic',
      component: () => import('@/components/slides/mock/03-executive-strategic'),
      module: 'mock',
      title: 'Executive Strategic Overview',
      tags: ['strategic', 'executive', 'simplified'],
      duration: 2,
      notes: 'Mock executive slide demonstrating path-based filtering (simplified version of slide 2)'
    },
    loader: () => import('@/components/slides/mock/03-executive-strategic')
  }
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
