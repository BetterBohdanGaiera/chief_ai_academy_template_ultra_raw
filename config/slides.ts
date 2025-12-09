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
  // VLADA: DENTAL FINANCE PRESENTATION
  // ============================================
  'vlada-01-title': {
    slide: {
      id: 'vlada-01-title',
      component: () => import('@/components/slides/vlada/01-title'),
      module: 'vlada',
      title: 'Title Slide - Financial Management for Dental Clinics',
      tags: ['title', 'intro', 'hero'],
      duration: 2,
      notes: 'Hero title slide introducing financial management service for dental clinics (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/01-title')
  },
  'vlada-02-problem': {
    slide: {
      id: 'vlada-02-problem',
      component: () => import('@/components/slides/vlada/02-problem'),
      module: 'vlada',
      title: 'Problem - Familiar Situation?',
      tags: ['problem', 'pain-points', 'interactive', 'hover-reveal'],
      duration: 3,
      notes: 'Hover-reveal cards presenting pain points dental clinic owners face (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/02-problem')
  },
  'vlada-03-solution': {
    slide: {
      id: 'vlada-03-solution',
      component: () => import('@/components/slides/vlada/03-solution'),
      module: 'vlada',
      title: 'Solution - What We Do',
      tags: ['solution', 'comparison', 'are-vs-not'],
      duration: 3,
      notes: 'ARE vs NOT comparison showing what financial administration service includes/excludes (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/03-solution')
  },
  'vlada-04-pricing': {
    slide: {
      id: 'vlada-04-pricing',
      component: () => import('@/components/slides/vlada/04-pricing'),
      module: 'vlada',
      title: 'Pricing - Two Plans Overview',
      tags: ['pricing', 'interactive', 'toggle', 'comparison'],
      duration: 3,
      notes: 'Interactive toggle comparing 9000 UAH vs 19000 UAH pricing plans (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/04-pricing')
  },
  'vlada-05-basic-plan-intro': {
    slide: {
      id: 'vlada-05-basic-plan-intro',
      component: () => import('@/components/slides/vlada/05-basic-plan-intro'),
      module: 'vlada',
      title: 'Basic Plan Intro - Maria Persona',
      tags: ['basic', 'persona', 'hover-reveal', 'interactive'],
      duration: 3,
      notes: 'Introduces Maria persona and 9000 UAH/month basic plan with hover-reveal criteria cards'
    },
    loader: () => import('@/components/slides/vlada/05-basic-plan-intro')
  },
  'vlada-06-basic-plan-details': {
    slide: {
      id: 'vlada-06-basic-plan-details',
      component: () => import('@/components/slides/vlada/06-basic-plan-details'),
      module: 'vlada',
      title: 'Basic Plan Details - Week 1 Integration',
      tags: ['basic', 'timeline', 'horizontal-timeline', 'interactive'],
      duration: 3,
      notes: '5-step onboarding timeline with daily/monthly breakdown for basic plan'
    },
    loader: () => import('@/components/slides/vlada/06-basic-plan-details')
  },
  'vlada-07-before-state': {
    slide: {
      id: 'vlada-07-before-state',
      component: () => import('@/components/slides/vlada/07-before-state'),
      module: 'vlada',
      title: 'Before State - Maria Before Working With Us',
      tags: ['before-after', 'case-study', 'chaos', 'interactive'],
      duration: 2,
      notes: 'CHAOS visual showing scattered financial data before service (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/07-before-state')
  },
  'vlada-08-after-state': {
    slide: {
      id: 'vlada-08-after-state',
      component: () => import('@/components/slides/vlada/08-after-state'),
      module: 'vlada',
      title: 'After State - One Month Later',
      tags: ['before-after', 'case-study', 'order', 'interactive', 'hover-reveal'],
      duration: 3,
      notes: 'ORDER visual showing clean financial report after one month (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/08-after-state')
  },
  'vlada-09-premium-plan-intro': {
    slide: {
      id: 'vlada-09-premium-plan-intro',
      component: () => import('@/components/slides/vlada/09-premium-plan-intro'),
      module: 'vlada',
      title: 'Premium Plan Intro - Andrii Persona',
      tags: ['premium', 'persona', 'hover-reveal', 'interactive'],
      duration: 3,
      notes: 'Introduces Andrii persona and 19000 UAH/month premium plan with goals and criteria (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/09-premium-plan-intro')
  },
  'vlada-10-premium-zoom-meetings': {
    slide: {
      id: 'vlada-10-premium-zoom-meetings',
      component: () => import('@/components/slides/vlada/10-premium-zoom-meetings'),
      module: 'vlada',
      title: 'Premium: Zoom Meetings',
      tags: ['premium', 'interactive', 'toggle', 'zoom'],
      duration: 3,
      notes: 'Button toggle comparison showing problem vs solution for monthly Zoom meetings with financier'
    },
    loader: () => import('@/components/slides/vlada/10-premium-zoom-meetings')
  },
  'vlada-11-premium-cost-calculation': {
    slide: {
      id: 'vlada-11-premium-cost-calculation',
      component: () => import('@/components/slides/vlada/11-premium-cost-calculation'),
      module: 'vlada',
      title: 'Premium: Cost Calculation',
      tags: ['premium', 'interactive', 'toggle', 'data', 'cost-analysis'],
      duration: 4,
      notes: 'Button toggle showing surface vs deep cost analysis for service profitability (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/11-premium-cost-calculation')
  },
  'vlada-12-premium-yearly-plan': {
    slide: {
      id: 'vlada-12-premium-yearly-plan',
      component: () => import('@/components/slides/vlada/12-premium-yearly-plan'),
      module: 'vlada',
      title: 'Premium: Yearly Financial Plan',
      tags: ['premium', 'interactive', 'progressive-disclosure', 'data'],
      duration: 4,
      notes: 'Progressive disclosure showing quarterly financial planning with variance tracking'
    },
    loader: () => import('@/components/slides/vlada/12-premium-yearly-plan')
  },
  'vlada-13-premium-4-dividends': {
    slide: {
      id: 'vlada-13-premium-4-dividends',
      component: () => import('@/components/slides/vlada/13-premium-4-dividends'),
      module: 'vlada',
      title: 'Premium: Dividend Recommendations',
      tags: ['premium', 'interactive', 'progressive-disclosure', 'data', 'dividends'],
      duration: 4,
      notes: 'Money bridge visualization showing profit vs cash on hand with safe withdrawal calculation (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/13-premium-4-dividends')
  },
  'vlada-14-premium-5-efficiency': {
    slide: {
      id: 'vlada-14-premium-5-efficiency',
      component: () => import('@/components/slides/vlada/14-premium-5-efficiency'),
      module: 'vlada',
      title: 'Premium: Doctor & Chair Efficiency',
      tags: ['premium', 'interactive', 'hover-reveal', 'data', 'efficiency'],
      duration: 4,
      notes: 'Hover-reveal cards showing quarterly efficiency analysis of doctors and chairs (Ukrainian)'
    },
    loader: () => import('@/components/slides/vlada/14-premium-5-efficiency')
  },
  'vlada-15-premium-budgets': {
    slide: {
      id: 'vlada-15-premium-budgets',
      component: () => import('@/components/slides/vlada/15-premium-6-budgets'),
      module: 'vlada',
      title: 'Premium: Budgets & Limits',
      tags: ['premium', 'interactive', 'toggle', 'data', 'budget'],
      duration: 4,
      notes: 'Button toggle comparison showing all budget categories vs overspend only, with expandable investigation section for root cause analysis'
    },
    loader: () => import('@/components/slides/vlada/15-premium-6-budgets')
  },
  'vlada-16-comparison-table': {
    slide: {
      id: 'vlada-16-comparison-table',
      component: () => import('@/components/slides/vlada/16-comparison-table'),
      module: 'vlada',
      title: 'Comparison: Pricing Tiers',
      tags: ['comparison', 'interactive', 'hover-reveal', 'pricing'],
      duration: 3,
      notes: 'ARE vs NOT comparison pattern showing base vs premium pricing tiers with hover-reveal benefits for premium features'
    },
    loader: () => import('@/components/slides/vlada/16-comparison-table')
  },
  'vlada-17-decision-guide': {
    slide: {
      id: 'vlada-17-decision-guide',
      component: () => import('@/components/slides/vlada/17-decision-guide'),
      module: 'vlada',
      title: 'Decision Guide: What to Choose',
      tags: ['decision', 'interactive', 'toggle', 'conversion'],
      duration: 3,
      notes: 'Interactive toggle comparison helping viewers self-qualify for 9k vs 19k plan'
    },
    loader: () => import('@/components/slides/vlada/17-decision-guide')
  },
  'vlada-18-cta-contacts': {
    slide: {
      id: 'vlada-18-cta-contacts',
      component: () => import('@/components/slides/vlada/18-cta-contacts'),
      module: 'vlada',
      title: 'CTA & Contacts',
      tags: ['cta', 'contacts', 'conversion', 'closing'],
      duration: 2,
      notes: 'Final conversion slide with CTA, contact cards, and memorable tagline'
    },
    loader: () => import('@/components/slides/vlada/18-cta-contacts')
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
