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
  // REDDIT: Reddit Marketing Research Module
  // ============================================
  'reddit-01-title': {
    slide: {
      id: 'reddit-01-title',
      component: () => import('@/components/slides/reddit/01-title'),
      module: 'reddit',
      title: 'Reddit Marketing Research',
      tags: ['reddit', 'title', 'research', 'lead-generation'],
      duration: 2,
      notes: 'Title slide introducing Reddit marketing research for client acquisition'
    },
    loader: () => import('@/components/slides/reddit/01-title')
  },
  'reddit-02-all-in-one-platforms': {
    slide: {
      id: 'reddit-02-all-in-one-platforms',
      component: () => import('@/components/slides/reddit/02-all-in-one-platforms'),
      module: 'reddit',
      title: 'All-in-One Platforms',
      tags: ['reddit', 'tools', 'platforms', 'automation'],
      duration: 3,
      notes: 'Comparison of 5 all-in-one Reddit marketing platforms with features and limitations'
    },
    loader: () => import('@/components/slides/reddit/02-all-in-one-platforms')
  },
  'reddit-03-monitoring-tools': {
    slide: {
      id: 'reddit-03-monitoring-tools',
      component: () => import('@/components/slides/reddit/03-monitoring-tools'),
      module: 'reddit',
      title: 'Monitoring Tools',
      tags: ['reddit', 'tools', 'monitoring', 'search'],
      duration: 2,
      notes: 'GummySearch vs Syften comparison for monitoring-only solutions'
    },
    loader: () => import('@/components/slides/reddit/03-monitoring-tools')
  },
  'reddit-04-components-spare-parts': {
    slide: {
      id: 'reddit-04-components-spare-parts',
      component: () => import('@/components/slides/reddit/04-components-spare-parts'),
      module: 'reddit',
      title: 'Components (Spare Parts)',
      tags: ['reddit', 'components', 'infrastructure', 'diy'],
      duration: 4,
      notes: 'Building blocks for custom Reddit marketing system - accounts, browsers, API, AI'
    },
    loader: () => import('@/components/slides/reddit/04-components-spare-parts')
  },
  'reddit-05-shadowban-safety': {
    slide: {
      id: 'reddit-05-shadowban-safety',
      component: () => import('@/components/slides/reddit/05-shadowban-safety'),
      module: 'reddit',
      title: 'Shadowban & Safety',
      tags: ['reddit', 'safety', 'shadowban', 'interactive'],
      duration: 3,
      notes: 'Toggle between dangerous and safe Reddit behaviors to avoid shadowbans'
    },
    loader: () => import('@/components/slides/reddit/05-shadowban-safety')
  },
  'reddit-06-build-vs-buy': {
    slide: {
      id: 'reddit-06-build-vs-buy',
      component: () => import('@/components/slides/reddit/06-build-vs-buy'),
      module: 'reddit',
      title: 'Build vs Buy Decision',
      tags: ['reddit', 'strategy', 'comparison', 'interactive'],
      duration: 3,
      notes: 'Compare generic vs value-first responses and buy vs build components'
    },
    loader: () => import('@/components/slides/reddit/06-build-vs-buy')
  },
  'reddit-07-economics-roi': {
    slide: {
      id: 'reddit-07-economics-roi',
      component: () => import('@/components/slides/reddit/07-economics-roi'),
      module: 'reddit',
      title: 'Economics & ROI',
      tags: ['reddit', 'economics', 'roi', 'calculator'],
      duration: 3,
      notes: 'Cost comparison and ROI calculation framework for Reddit marketing'
    },
    loader: () => import('@/components/slides/reddit/07-economics-roi')
  },
  'reddit-08-architecture': {
    slide: {
      id: 'reddit-08-architecture',
      component: () => import('@/components/slides/reddit/08-architecture'),
      module: 'reddit',
      title: 'System Architecture',
      tags: ['reddit', 'architecture', 'system'],
      duration: 3,
      notes: 'Two-layer modular architecture showing BUY vs BUILD components'
    },
    loader: () => import('@/components/slides/reddit/08-architecture')
  },
  'reddit-09-native-strategy': {
    slide: {
      id: 'reddit-09-native-strategy',
      component: () => import('@/components/slides/reddit/09-native-strategy'),
      module: 'reddit',
      title: 'Native Product Mention Strategy',
      tags: ['reddit', 'strategy', 'engagement'],
      duration: 3,
      notes: 'Toggle comparison of spammy vs native Reddit engagement'
    },
    loader: () => import('@/components/slides/reddit/09-native-strategy')
  },
  'reddit-10-risks-next-steps': {
    slide: {
      id: 'reddit-10-risks-next-steps',
      component: () => import('@/components/slides/reddit/10-risks-next-steps'),
      module: 'reddit',
      title: 'Risks & Next Steps',
      tags: ['reddit', 'risks', 'action-plan'],
      duration: 3,
      notes: 'Risk matrix with mitigation strategies and 4-step action plan'
    },
    loader: () => import('@/components/slides/reddit/10-risks-next-steps')
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
