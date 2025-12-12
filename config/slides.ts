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
  },
  'm1-03-feedback': {
    slide: {
      id: 'm1-03-feedback',
      component: () => import('@/components/slides/m1/03-feedback'),
      module: 'm1',
      title: 'Feedback Collection',
      tags: ['feedback', 'interactive', 'form'],
      duration: 3,
      notes: 'Collect feedback from domain expert reviewers'
    },
    loader: () => import('@/components/slides/m1/03-feedback')
  },

  // ============================================
  // FB: FEEDBACK MODULE (TechFlow Solutions)
  // ============================================
  'fb-01-title': {
    slide: {
      id: 'fb-01-title',
      component: () => import('@/components/slides/fb/01-title'),
      module: 'fb',
      title: 'TechFlow Feedback Session',
      tags: ['title', 'feedback'],
      duration: 1,
      notes: 'Title slide establishing the feedback session context'
    },
    loader: () => import('@/components/slides/fb/01-title')
  },
  'fb-02-techflow-overview': {
    slide: {
      id: 'fb-02-techflow-overview',
      component: () => import('@/components/slides/fb/02-techflow-overview'),
      module: 'fb',
      title: 'TechFlow Overview',
      tags: ['context', 'company', 'metrics'],
      duration: 2,
      notes: 'Company background and key metrics for context'
    },
    loader: () => import('@/components/slides/fb/02-techflow-overview')
  },
  'fb-03-market-landscape': {
    slide: {
      id: 'fb-03-market-landscape',
      component: () => import('@/components/slides/fb/03-market-landscape'),
      module: 'fb',
      title: 'Market Landscape',
      tags: ['context', 'competition', 'interactive'],
      duration: 3,
      notes: 'Interactive competitive positioning quadrant - supports positioning decisions'
    },
    loader: () => import('@/components/slides/fb/03-market-landscape')
  },
  'fb-04-campaign-context': {
    slide: {
      id: 'fb-04-campaign-context',
      component: () => import('@/components/slides/fb/04-campaign-context'),
      module: 'fb',
      title: 'Campaign Context',
      tags: ['context', 'campaign', 'data-viz'],
      duration: 2,
      notes: 'Campaign details and decision gaps - transitions to feedback questions'
    },
    loader: () => import('@/components/slides/fb/04-campaign-context')
  },
  'fb-05-positioning-question': {
    slide: {
      id: 'fb-05-positioning-question',
      component: () => import('@/components/slides/fb/05-positioning-question'),
      module: 'fb',
      title: 'Strategic Positioning',
      tags: ['feedback', 'interactive', 'question'],
      duration: 3,
      notes: 'Question 1: TechFlow positioning direction - AI-First, Mid-Market, or Unified Platform'
    },
    loader: () => import('@/components/slides/fb/05-positioning-question')
  },
  'fb-06-brand-tone-question': {
    slide: {
      id: 'fb-06-brand-tone-question',
      component: () => import('@/components/slides/fb/06-brand-tone-question'),
      module: 'fb',
      title: 'Brand Tone',
      tags: ['feedback', 'interactive', 'question'],
      duration: 3,
      notes: 'Question 2: Brand voice positioning on spectrum from Playful to Professional'
    },
    loader: () => import('@/components/slides/fb/06-brand-tone-question')
  },
  'fb-07-lead-strategy-question': {
    slide: {
      id: 'fb-07-lead-strategy-question',
      component: () => import('@/components/slides/fb/07-lead-strategy-question'),
      module: 'fb',
      title: 'Lead Strategy',
      tags: ['feedback', 'interactive', 'question'],
      duration: 3,
      notes: 'Question 3: Quality vs quantity optimization with $180K budget'
    },
    loader: () => import('@/components/slides/fb/07-lead-strategy-question')
  },
  'fb-08-summary-next-steps': {
    slide: {
      id: 'fb-08-summary-next-steps',
      component: () => import('@/components/slides/fb/08-summary-next-steps'),
      module: 'fb',
      title: 'Summary & Submit',
      tags: ['feedback', 'summary', 'cta'],
      duration: 2,
      notes: 'Review selections and submit feedback with timeline'
    },
    loader: () => import('@/components/slides/fb/08-summary-next-steps')
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
