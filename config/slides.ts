/**
 * Slide registry configuration
 * Maps slide IDs to components and metadata
 *
 * Contains 10 starter slides across 5 modules (2 per module)
 */

import { type SlideRegistry } from '@/types/courses'

/**
 * Starter slide registry - First 2 slides per module
 * - F1: Five Levels Framework (2 slides)
 * - F2: Organization Structure (2 slides)
 * - S1: Choosing AI Technology (2 slides)
 * - S2: Understanding Agents (2 slides)
 * - S3: Managing AI (2 slides)
 */
export const slideRegistry: SlideRegistry = {
  // ============================================
  // F1: FIVE LEVELS FRAMEWORK (2 slides)
  // ============================================
  'f1-01-title': {
    slide: {
      id: 'f1-01-title',
      component: () => import('@/components/slides/f1/01-f1-title'),
      module: 'f1',
      title: 'Five Levels Framework',
      tags: ['title', 'foundation', 'all-roles'],
      duration: 1,
      notes: 'Module hero title slide with AI-generated background'
    },
    loader: () => import('@/components/slides/f1/01-f1-title')
  },
  'f1-02-why-levels': {
    slide: {
      id: 'f1-02-why-levels',
      component: () => import('@/components/slides/f1/02-f1-why-levels'),
      module: 'f1',
      title: 'Why Levels Matter',
      tags: ['concept', 'foundation', 'executive', 'champion'],
      duration: 2,
      notes: 'Introduction to why AI adoption is a staircase with a trap door'
    },
    loader: () => import('@/components/slides/f1/02-f1-why-levels')
  },

  // ============================================
  // F2: ORGANIZATION STRUCTURE (2 slides)
  // ============================================
  'f2-01-title': {
    slide: {
      id: 'f2-01-title',
      component: () => import('@/components/slides/f2/01-f2-title'),
      module: 'f2',
      title: 'Organization Structure',
      tags: ['title', 'foundation', 'all-roles'],
      duration: 1,
      notes: 'Module hero title slide'
    },
    loader: () => import('@/components/slides/f2/01-f2-title')
  },
  'f2-02-four-roles-framework': {
    slide: {
      id: 'f2-02-four-roles-framework',
      component: () => import('@/components/slides/f2/02-f2-four-roles-framework'),
      module: 'f2',
      title: 'Four Key Roles',
      tags: ['framework', 'interactive', 'executive', 'champion'],
      duration: 3,
      notes: 'Hover-reveal cards for 4 roles in AI transformation'
    },
    loader: () => import('@/components/slides/f2/02-f2-four-roles-framework')
  },

  // ============================================
  // S1: CHOOSING AI TECHNOLOGY (2 slides)
  // ============================================
  's1-01-title': {
    slide: {
      id: 's1-01-title',
      component: () => import('@/components/slides/s1/01-s1-title'),
      module: 's1',
      title: 'Choosing AI Technology',
      tags: ['title', 'skills', 'all-roles'],
      duration: 1,
      notes: 'Module hero title slide'
    },
    loader: () => import('@/components/slides/s1/01-s1-title')
  },
  's1-02-four-approaches': {
    slide: {
      id: 's1-02-four-approaches',
      component: () => import('@/components/slides/s1/02-s1-four-approaches'),
      module: 's1',
      title: 'Four AI Approaches',
      tags: ['framework', 'interactive', 'executive', 'champion'],
      duration: 3,
      notes: 'Hover-reveal cards for ML, Agentic, Existing Tools, No AI'
    },
    loader: () => import('@/components/slides/s1/02-s1-four-approaches')
  },

  // ============================================
  // S2: UNDERSTANDING AGENTS (2 slides)
  // ============================================
  's2-01-title': {
    slide: {
      id: 's2-01-title',
      component: () => import('@/components/slides/s2/01-s2-title'),
      module: 's2',
      title: 'Understanding AI Agents',
      tags: ['title', 'skills', 'all-roles'],
      duration: 1,
      notes: 'Module hero title slide with agent architecture image'
    },
    loader: () => import('@/components/slides/s2/01-s2-title')
  },
  's2-02-four-components': {
    slide: {
      id: 's2-02-four-components',
      component: () => import('@/components/slides/s2/02-s2-four-components'),
      module: 's2',
      title: 'Four Agent Components',
      tags: ['framework', 'champion', 'manager', 'developer'],
      duration: 2,
      notes: 'LLM, Tools, Memory, Autonomy - the evaluation framework'
    },
    loader: () => import('@/components/slides/s2/02-s2-four-components')
  },

  // ============================================
  // S3: MANAGING AI (2 slides)
  // ============================================
  's3-01-title': {
    slide: {
      id: 's3-01-title',
      component: () => import('@/components/slides/s3/01-s3-title'),
      module: 's3',
      title: 'Managing AI',
      tags: ['title', 'skills', 'all-roles'],
      duration: 1,
      notes: 'Module hero title - Management transformation'
    },
    loader: () => import('@/components/slides/s3/01-s3-title')
  },
  's3-02-management-shift': {
    slide: {
      id: 's3-02-management-shift',
      component: () => import('@/components/slides/s3/02-s3-management-shift'),
      module: 's3',
      title: 'Management Shift',
      tags: ['concept', 'interactive', 'executive', 'champion', 'manager'],
      duration: 3,
      notes: 'Interactive toggle: Managing People vs Managing AI'
    },
    loader: () => import('@/components/slides/s3/02-s3-management-shift')
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
