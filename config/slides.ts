/**
 * Slide registry configuration
 * Maps slide IDs to components and metadata
 *
 * Contains all 78 production slides across 5 modules plus 3 mock slides
 */

import { type SlideRegistry } from '@/types/courses'

/**
 * Complete slide registry
 * - F1: Five Levels Framework (18 slides)
 * - F2: Organization Structure (16 slides)
 * - S1: Choosing AI Technology (14 slides)
 * - S2: Understanding Agents (11 slides)
 * - S3: Managing AI (19 slides)
 * - Mock slides (3 slides for testing)
 */
export const slideRegistry: SlideRegistry = {
  // ============================================
  // F1: FIVE LEVELS FRAMEWORK (18 slides)
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
  'f1-03-levels-overview': {
    slide: {
      id: 'f1-03-levels-overview',
      component: () => import('@/components/slides/f1/03-f1-levels-overview'),
      module: 'f1',
      title: 'The 5 Levels Overview',
      tags: ['framework', 'interactive', 'all-roles'],
      duration: 3,
      notes: 'Interactive hover-reveal cards for all 5 levels'
    },
    loader: () => import('@/components/slides/f1/03-f1-levels-overview')
  },
  'f1-04-level1-individual': {
    slide: {
      id: 'f1-04-level1-individual',
      component: () => import('@/components/slides/f1/04-f1-level1-individual'),
      module: 'f1',
      title: 'Level 1: Individual AI',
      tags: ['level-detail', 'all-roles'],
      duration: 2,
      notes: 'ChatGPT, Claude - individual use without integration'
    },
    loader: () => import('@/components/slides/f1/04-f1-level1-individual')
  },
  'f1-05-level2-saas': {
    slide: {
      id: 'f1-05-level2-saas',
      component: () => import('@/components/slides/f1/05-f1-level2-saas'),
      module: 'f1',
      title: 'Level 2: Generic SaaS Tools',
      tags: ['level-detail', 'all-roles'],
      duration: 2,
      notes: 'Pre-built AI tools like Jasper, Copy.ai - generic but useful'
    },
    loader: () => import('@/components/slides/f1/05-f1-level2-saas')
  },
  'f1-06-level3-trap': {
    slide: {
      id: 'f1-06-level3-trap',
      component: () => import('@/components/slides/f1/06-f1-level3-trap'),
      module: 'f1',
      title: 'Level 3: The Trap',
      tags: ['level-detail', 'interactive', 'critical', 'executive', 'champion'],
      duration: 3,
      notes: 'Interactive toggle showing promise vs reality of no-code automation'
    },
    loader: () => import('@/components/slides/f1/06-f1-level3-trap')
  },
  'f1-07-level3-failure': {
    slide: {
      id: 'f1-07-level3-failure',
      component: () => import('@/components/slides/f1/07-f1-level3-failure'),
      module: 'f1',
      title: 'Level 3: Full Failure Story',
      tags: ['level-detail', 'warning', 'executive', 'champion'],
      duration: 3,
      notes: 'Timeline of Level 3 failure and organizational consequences'
    },
    loader: () => import('@/components/slides/f1/07-f1-level3-failure')
  },
  'f1-08-iteration-economics': {
    slide: {
      id: 'f1-08-iteration-economics',
      component: () => import('@/components/slides/f1/08-f1-iteration-economics'),
      module: 'f1',
      title: 'Iteration Economics',
      tags: ['data-viz', 'critical', 'executive', 'champion', 'manager', 'developer'],
      duration: 3,
      notes: 'Recharts visualization showing why 20 iterations matter'
    },
    loader: () => import('@/components/slides/f1/08-f1-iteration-economics')
  },
  'f1-09-level4-iterative': {
    slide: {
      id: 'f1-09-level4-iterative',
      component: () => import('@/components/slides/f1/09-f1-level4-iterative'),
      module: 'f1',
      title: 'Level 4: Iterative Agents',
      tags: ['level-detail', 'critical', 'all-roles'],
      duration: 3,
      notes: 'How transformation actually works - rapid iteration'
    },
    loader: () => import('@/components/slides/f1/09-f1-level4-iterative')
  },
  'f1-10-level5-autonomous': {
    slide: {
      id: 'f1-10-level5-autonomous',
      component: () => import('@/components/slides/f1/10-f1-level5-autonomous'),
      module: 'f1',
      title: 'Level 5: Autonomous Agents',
      tags: ['level-detail', 'advanced', 'executive', 'champion'],
      duration: 2,
      notes: 'Full automation - multi-agent systems'
    },
    loader: () => import('@/components/slides/f1/10-f1-level5-autonomous')
  },
  'f1-11-transition-l1-l2': {
    slide: {
      id: 'f1-11-transition-l1-l2',
      component: () => import('@/components/slides/f1/11-f1-transition-l1-l2'),
      module: 'f1',
      title: 'Transition: L1-L2 to L4',
      tags: ['roadmap', 'actionable', 'champion', 'manager'],
      duration: 3,
      notes: '90-day roadmap from individual AI to Level 4'
    },
    loader: () => import('@/components/slides/f1/11-f1-transition-l1-l2')
  },
  'f1-12-transition-l3-escape': {
    slide: {
      id: 'f1-12-transition-l3-escape',
      component: () => import('@/components/slides/f1/12-f1-transition-l3-escape'),
      module: 'f1',
      title: 'Escape the L3 Trap',
      tags: ['roadmap', 'actionable', 'critical', 'executive', 'champion'],
      duration: 3,
      notes: 'Diagnosis checklist and escape plan for Level 3 failures'
    },
    loader: () => import('@/components/slides/f1/12-f1-transition-l3-escape')
  },
  'f1-13-decision-tree': {
    slide: {
      id: 'f1-13-decision-tree',
      component: () => import('@/components/slides/f1/13-f1-decision-tree'),
      module: 'f1',
      title: 'First Action Decision Tree',
      tags: ['interactive', 'decision-framework', 'actionable', 'champion', 'manager'],
      duration: 3,
      notes: 'Click-to-expand 4-question decision framework'
    },
    loader: () => import('@/components/slides/f1/13-f1-decision-tree')
  },
  'f1-14-l4-optimization': {
    slide: {
      id: 'f1-14-l4-optimization',
      component: () => import('@/components/slides/f1/14-f1-l4-optimization'),
      module: 'f1',
      title: 'L4 Optimization Checklist',
      tags: ['actionable', 'champion', 'manager', 'developer'],
      duration: 2,
      notes: 'Week-by-week targets and troubleshooting guide'
    },
    loader: () => import('@/components/slides/f1/14-f1-l4-optimization')
  },
  'f1-15-self-assessment': {
    slide: {
      id: 'f1-15-self-assessment',
      component: () => import('@/components/slides/f1/15-f1-self-assessment'),
      module: 'f1',
      title: 'Self-Assessment',
      tags: ['interactive', 'assessment', 'all-roles'],
      duration: 5,
      notes: 'Interactive 6-dimension rating system with calculated results'
    },
    loader: () => import('@/components/slides/f1/15-f1-self-assessment')
  },
  'f1-16-quiz': {
    slide: {
      id: 'f1-16-quiz',
      component: () => import('@/components/slides/f1/16-f1-quiz'),
      module: 'f1',
      title: 'Knowledge Check',
      tags: ['interactive', 'quiz', 'all-roles'],
      duration: 5,
      notes: '5-question quiz with 80% passing threshold'
    },
    loader: () => import('@/components/slides/f1/16-f1-quiz')
  },
  'f1-17-summary': {
    slide: {
      id: 'f1-17-summary',
      component: () => import('@/components/slides/f1/17-f1-summary'),
      module: 'f1',
      title: 'Module Summary',
      tags: ['summary', 'all-roles'],
      duration: 2,
      notes: 'Key takeaways with numbered circular badges'
    },
    loader: () => import('@/components/slides/f1/17-f1-summary')
  },
  'f1-18-whats-next': {
    slide: {
      id: 'f1-18-whats-next',
      component: () => import('@/components/slides/f1/18-f1-whats-next'),
      module: 'f1',
      title: 'What\'s Next',
      tags: ['next-steps', 'all-roles'],
      duration: 1,
      notes: 'Role-based next steps and recommendations'
    },
    loader: () => import('@/components/slides/f1/18-f1-whats-next')
  },

  // ============================================
  // F2: ORGANIZATION STRUCTURE (16 slides)
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
  'f2-03-agent-manager-paths': {
    slide: {
      id: 'f2-03-agent-manager-paths',
      component: () => import('@/components/slides/f2/03-f2-agent-manager-paths'),
      module: 'f2',
      title: 'Agent Manager Paths',
      tags: ['role-detail', 'interactive', 'champion', 'manager'],
      duration: 2,
      notes: 'Interactive toggle: External vs Internal hiring paths'
    },
    loader: () => import('@/components/slides/f2/03-f2-agent-manager-paths')
  },
  'f2-04-developer-role': {
    slide: {
      id: 'f2-04-developer-role',
      component: () => import('@/components/slides/f2/04-f2-developer-role'),
      module: 'f2',
      title: 'AI Agent Developer Role',
      tags: ['role-detail', 'champion', 'developer'],
      duration: 2,
      notes: 'Core capabilities and common misconceptions'
    },
    loader: () => import('@/components/slides/f2/04-f2-developer-role')
  },
  'f2-05-partnership-dynamics': {
    slide: {
      id: 'f2-05-partnership-dynamics',
      component: () => import('@/components/slides/f2/05-f2-partnership-dynamics'),
      module: 'f2',
      title: 'Partnership Dynamics',
      tags: ['critical', 'champion', 'manager', 'developer'],
      duration: 3,
      notes: 'Agent Manager + Developer partnership enables Level 4'
    },
    loader: () => import('@/components/slides/f2/05-f2-partnership-dynamics')
  },
  'f2-06-hr-onboarding-story': {
    slide: {
      id: 'f2-06-hr-onboarding-story',
      component: () => import('@/components/slides/f2/06-f2-hr-onboarding-story'),
      module: 'f2',
      title: 'Story: HR Onboarding',
      tags: ['case-study', 'interactive', 'all-roles'],
      duration: 3,
      notes: 'Click-to-expand 3-week transformation story (Sarah + Marcus)'
    },
    loader: () => import('@/components/slides/f2/06-f2-hr-onboarding-story')
  },
  'f2-07-sales-call-story': {
    slide: {
      id: 'f2-07-sales-call-story',
      component: () => import('@/components/slides/f2/07-f2-sales-call-story'),
      module: 'f2',
      title: 'Story: Sales Call Analyzer',
      tags: ['case-study', 'interactive', 'all-roles'],
      duration: 3,
      notes: 'Click-to-expand transformation story (David + Priya) - $150K/year ROI'
    },
    loader: () => import('@/components/slides/f2/07-f2-sales-call-story')
  },
  'f2-08-vendor-sla-story': {
    slide: {
      id: 'f2-08-vendor-sla-story',
      component: () => import('@/components/slides/f2/08-f2-vendor-sla-story'),
      module: 'f2',
      title: 'Story: Vendor SLA Tracker',
      tags: ['case-study', 'interactive', 'all-roles'],
      duration: 3,
      notes: 'Click-to-expand story (Jennifer + Alex) - 96% accuracy'
    },
    loader: () => import('@/components/slides/f2/08-f2-vendor-sla-story')
  },
  'f2-09-transformation-timeline': {
    slide: {
      id: 'f2-09-transformation-timeline',
      component: () => import('@/components/slides/f2/09-f2-transformation-timeline'),
      module: 'f2',
      title: 'Transformation Timeline',
      tags: ['roadmap', 'executive', 'champion'],
      duration: 3,
      notes: '3-phase transformation process with timeline and budget'
    },
    loader: () => import('@/components/slides/f2/09-f2-transformation-timeline')
  },
  'f2-10-pitfall-communication': {
    slide: {
      id: 'f2-10-pitfall-communication',
      component: () => import('@/components/slides/f2/10-f2-pitfall-communication'),
      module: 'f2',
      title: 'Pitfall: Communication',
      tags: ['pitfall', 'warning', 'champion', 'manager', 'developer'],
      duration: 2,
      notes: 'Agent Manager and Developer communication breakdown'
    },
    loader: () => import('@/components/slides/f2/10-f2-pitfall-communication')
  },
  'f2-11-pitfall-context-quality': {
    slide: {
      id: 'f2-11-pitfall-context-quality',
      component: () => import('@/components/slides/f2/11-f2-pitfall-context-quality'),
      module: 'f2',
      title: 'Pitfall: Context Quality',
      tags: ['pitfall', 'warning', 'manager', 'developer'],
      duration: 2,
      notes: 'Fast iteration but poor context quality - stuck at 70-75%'
    },
    loader: () => import('@/components/slides/f2/11-f2-pitfall-context-quality')
  },
  'f2-12-pitfall-scope-creep': {
    slide: {
      id: 'f2-12-pitfall-scope-creep',
      component: () => import('@/components/slides/f2/12-f2-pitfall-scope-creep'),
      module: 'f2',
      title: 'Pitfall: Scope Creep',
      tags: ['pitfall', 'warning', 'champion', 'manager'],
      duration: 2,
      notes: 'Requirements keep changing during iteration'
    },
    loader: () => import('@/components/slides/f2/12-f2-pitfall-scope-creep')
  },
  'f2-13-pitfall-accuracy-plateau': {
    slide: {
      id: 'f2-13-pitfall-accuracy-plateau',
      component: () => import('@/components/slides/f2/13-f2-pitfall-accuracy-plateau'),
      module: 'f2',
      title: 'Pitfall: Accuracy Plateau',
      tags: ['pitfall', 'warning', 'manager', 'developer'],
      duration: 2,
      notes: '20 iterations but still below 90% accuracy'
    },
    loader: () => import('@/components/slides/f2/13-f2-pitfall-accuracy-plateau')
  },
  'f2-14-pitfall-premature-deployment': {
    slide: {
      id: 'f2-14-pitfall-premature-deployment',
      component: () => import('@/components/slides/f2/14-f2-pitfall-premature-deployment'),
      module: 'f2',
      title: 'Pitfall: Premature Deployment',
      tags: ['pitfall', 'warning', 'critical', 'executive', 'champion'],
      duration: 2,
      notes: 'External pressure to launch at 85% accuracy'
    },
    loader: () => import('@/components/slides/f2/14-f2-pitfall-premature-deployment')
  },
  'f2-15-pitfall-no-monitoring': {
    slide: {
      id: 'f2-15-pitfall-no-monitoring',
      component: () => import('@/components/slides/f2/15-f2-pitfall-no-monitoring'),
      module: 'f2',
      title: 'Pitfall: No Monitoring',
      tags: ['pitfall', 'warning', 'champion', 'manager'],
      duration: 2,
      notes: 'No post-deployment monitoring or continuous improvement'
    },
    loader: () => import('@/components/slides/f2/15-f2-pitfall-no-monitoring')
  },
  'f2-16-summary': {
    slide: {
      id: 'f2-16-summary',
      component: () => import('@/components/slides/f2/16-f2-summary'),
      module: 'f2',
      title: 'Module Summary',
      tags: ['summary', 'all-roles'],
      duration: 2,
      notes: 'Key takeaways and next steps by role'
    },
    loader: () => import('@/components/slides/f2/16-f2-summary')
  },

  // ============================================
  // S1: CHOOSING AI TECHNOLOGY (14 slides)
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
  's1-03-ml-vs-agentic': {
    slide: {
      id: 's1-03-ml-vs-agentic',
      component: () => import('@/components/slides/s1/03-s1-ml-vs-agentic'),
      module: 's1',
      title: 'ML vs Agentic Decision Tree',
      tags: ['decision-framework', 'interactive', 'champion', 'manager'],
      duration: 3,
      notes: 'Interactive click-to-navigate decision tree'
    },
    loader: () => import('@/components/slides/s1/03-s1-ml-vs-agentic')
  },
  's1-04-build-vs-buy': {
    slide: {
      id: 's1-04-build-vs-buy',
      component: () => import('@/components/slides/s1/04-s1-build-vs-buy'),
      module: 's1',
      title: 'Build vs Buy Framework',
      tags: ['decision-framework', 'interactive', 'executive', 'champion'],
      duration: 3,
      notes: 'Interactive toggle comparison for build vs buy decisions'
    },
    loader: () => import('@/components/slides/s1/04-s1-build-vs-buy')
  },
  's1-05-context-engineering-advantage': {
    slide: {
      id: 's1-05-context-engineering-advantage',
      component: () => import('@/components/slides/s1/05-s1-context-engineering-advantage'),
      module: 's1',
      title: 'Context Engineering Advantage',
      tags: ['concept', 'critical', 'champion', 'manager', 'developer'],
      duration: 3,
      notes: 'Why custom gives control beyond existing tools'
    },
    loader: () => import('@/components/slides/s1/05-s1-context-engineering-advantage')
  },
  's1-06-category-static-info': {
    slide: {
      id: 's1-06-category-static-info',
      component: () => import('@/components/slides/s1/06-s1-category-static-info'),
      module: 's1',
      title: 'Category 1: Static Info Chatbots',
      tags: ['solution-category', 'champion', 'manager'],
      duration: 2,
      notes: 'HR assistant, Sales enablement - $15K-$99K/year ROI'
    },
    loader: () => import('@/components/slides/s1/06-s1-category-static-info')
  },
  's1-07-category-dynamic-content': {
    slide: {
      id: 's1-07-category-dynamic-content',
      component: () => import('@/components/slides/s1/07-s1-category-dynamic-content'),
      module: 's1',
      title: 'Category 2: Dynamic Content',
      tags: ['solution-category', 'champion', 'manager'],
      duration: 2,
      notes: 'Customer support, Deal intelligence - $14K-$246K/year ROI'
    },
    loader: () => import('@/components/slides/s1/07-s1-category-dynamic-content')
  },
  's1-08-category-workflows': {
    slide: {
      id: 's1-08-category-workflows',
      component: () => import('@/components/slides/s1/08-s1-category-workflows'),
      module: 's1',
      title: 'Category 3: Workflows & Analyzers',
      tags: ['solution-category', 'champion', 'manager'],
      duration: 2,
      notes: 'Proposal analyzer, Call scoring - $63K-$158K/year ROI'
    },
    loader: () => import('@/components/slides/s1/08-s1-category-workflows')
  },
  's1-09-roi-ranges': {
    slide: {
      id: 's1-09-roi-ranges',
      component: () => import('@/components/slides/s1/09-s1-roi-ranges'),
      module: 's1',
      title: 'ROI Ranges',
      tags: ['data-viz', 'executive', 'champion'],
      duration: 2,
      notes: 'Horizontal bar chart showing ROI ranges by category'
    },
    loader: () => import('@/components/slides/s1/09-s1-roi-ranges')
  },
  's1-10-hybrid-strategy': {
    slide: {
      id: 's1-10-hybrid-strategy',
      component: () => import('@/components/slides/s1/10-s1-hybrid-strategy'),
      module: 's1',
      title: 'Hybrid Strategy',
      tags: ['strategy', 'executive', 'champion'],
      duration: 3,
      notes: '3-layer approach: Commodity, Simple Data, Advanced Capabilities'
    },
    loader: () => import('@/components/slides/s1/10-s1-hybrid-strategy')
  },
  's1-11-integration-depth-check': {
    slide: {
      id: 's1-11-integration-depth-check',
      component: () => import('@/components/slides/s1/11-s1-integration-depth-check'),
      module: 's1',
      title: 'Integration Depth Check',
      tags: ['assessment', 'interactive', 'champion', 'manager'],
      duration: 3,
      notes: 'YES/NO questions to assess Level 3 vs Level 4'
    },
    loader: () => import('@/components/slides/s1/11-s1-integration-depth-check')
  },
  's1-12-use-case-readiness': {
    slide: {
      id: 's1-12-use-case-readiness',
      component: () => import('@/components/slides/s1/12-s1-use-case-readiness'),
      module: 's1',
      title: 'Use Case Readiness',
      tags: ['assessment', 'interactive', 'champion', 'manager'],
      duration: 5,
      notes: 'Interactive 6-dimension rating system with sliders'
    },
    loader: () => import('@/components/slides/s1/12-s1-use-case-readiness')
  },
  's1-13-quiz': {
    slide: {
      id: 's1-13-quiz',
      component: () => import('@/components/slides/s1/13-s1-quiz'),
      module: 's1',
      title: 'Knowledge Check',
      tags: ['interactive', 'quiz', 'all-roles'],
      duration: 5,
      notes: '5-question quiz covering technology selection'
    },
    loader: () => import('@/components/slides/s1/13-s1-quiz')
  },
  's1-14-summary': {
    slide: {
      id: 's1-14-summary',
      component: () => import('@/components/slides/s1/14-s1-summary'),
      module: 's1',
      title: 'Module Summary',
      tags: ['summary', 'all-roles'],
      duration: 2,
      notes: 'Key takeaways and next steps'
    },
    loader: () => import('@/components/slides/s1/14-s1-summary')
  },

  // ============================================
  // S2: UNDERSTANDING AGENTS (11 slides)
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
  's2-03-llm-deep-dive': {
    slide: {
      id: 's2-03-llm-deep-dive',
      component: () => import('@/components/slides/s2/03-s2-llm-deep-dive'),
      module: 's2',
      title: 'Component 1: LLM (Brain)',
      tags: ['component-detail', 'interactive', 'manager', 'developer'],
      duration: 2,
      notes: 'Hover-reveal cards for understanding and reasoning capabilities'
    },
    loader: () => import('@/components/slides/s2/03-s2-llm-deep-dive')
  },
  's2-04-tools-deep-dive': {
    slide: {
      id: 's2-04-tools-deep-dive',
      component: () => import('@/components/slides/s2/04-s2-tools-deep-dive'),
      module: 's2',
      title: 'Component 2: Tools (Hands)',
      tags: ['component-detail', 'interactive', 'manager', 'developer'],
      duration: 2,
      notes: 'Hover-reveal cards for action capabilities'
    },
    loader: () => import('@/components/slides/s2/04-s2-tools-deep-dive')
  },
  's2-05-memory-deep-dive': {
    slide: {
      id: 's2-05-memory-deep-dive',
      component: () => import('@/components/slides/s2/05-s2-memory-deep-dive'),
      module: 's2',
      title: 'Component 3: Memory (Notebook)',
      tags: ['component-detail', 'interactive', 'manager', 'developer'],
      duration: 2,
      notes: 'Hover-reveal cards for context persistence'
    },
    loader: () => import('@/components/slides/s2/05-s2-memory-deep-dive')
  },
  's2-06-autonomy-deep-dive': {
    slide: {
      id: 's2-06-autonomy-deep-dive',
      component: () => import('@/components/slides/s2/06-s2-autonomy-deep-dive'),
      module: 's2',
      title: 'Component 4: Autonomy (Compass)',
      tags: ['component-detail', 'interactive', 'manager', 'developer'],
      duration: 2,
      notes: 'Hover-reveal cards for goal-directed behavior'
    },
    loader: () => import('@/components/slides/s2/06-s2-autonomy-deep-dive')
  },
  's2-07-agentic-spectrum': {
    slide: {
      id: 's2-07-agentic-spectrum',
      component: () => import('@/components/slides/s2/07-s2-agentic-spectrum'),
      module: 's2',
      title: 'The Agentic Spectrum',
      tags: ['framework', 'interactive', 'champion', 'manager'],
      duration: 3,
      notes: 'Click-to-expand Level 1-5 mapping with component presence'
    },
    loader: () => import('@/components/slides/s2/07-s2-agentic-spectrum')
  },
  's2-08-vendor-evaluation': {
    slide: {
      id: 's2-08-vendor-evaluation',
      component: () => import('@/components/slides/s2/08-s2-vendor-evaluation'),
      module: 's2',
      title: 'Vendor Evaluation',
      tags: ['assessment', 'interactive', 'executive', 'champion'],
      duration: 3,
      notes: 'Interactive toggle: Red flags vs Green flags checklist'
    },
    loader: () => import('@/components/slides/s2/08-s2-vendor-evaluation')
  },
  's2-09-limitations': {
    slide: {
      id: 's2-09-limitations',
      component: () => import('@/components/slides/s2/09-s2-limitations'),
      module: 's2',
      title: 'When Agents DON\'T Work',
      tags: ['warning', 'interactive', 'executive', 'champion'],
      duration: 3,
      notes: 'Interactive toggle: Don\'t use vs Do use scenarios'
    },
    loader: () => import('@/components/slides/s2/09-s2-limitations')
  },
  's2-10-quiz': {
    slide: {
      id: 's2-10-quiz',
      component: () => import('@/components/slides/s2/10-s2-quiz'),
      module: 's2',
      title: 'Knowledge Check',
      tags: ['interactive', 'quiz', 'all-roles'],
      duration: 5,
      notes: '5-question quiz on agent components and evaluation'
    },
    loader: () => import('@/components/slides/s2/10-s2-quiz')
  },
  's2-11-summary': {
    slide: {
      id: 's2-11-summary',
      component: () => import('@/components/slides/s2/11-s2-summary'),
      module: 's2',
      title: 'Module Summary',
      tags: ['summary', 'all-roles'],
      duration: 2,
      notes: 'Component reminder and key insights'
    },
    loader: () => import('@/components/slides/s2/11-s2-summary')
  },

  // ============================================
  // S3: MANAGING AI (19 slides)
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
  },
  's3-03-agentic-tools-intro': {
    slide: {
      id: 's3-03-agentic-tools-intro',
      component: () => import('@/components/slides/s3/03-s3-agentic-tools-intro'),
      module: 's3',
      title: 'Agentic Development Tools',
      tags: ['concept', 'manager', 'developer'],
      duration: 2,
      notes: 'Cursor IDE, Claude Code - Level 3.5 tools'
    },
    loader: () => import('@/components/slides/s3/03-s3-agentic-tools-intro')
  },
  's3-04-chat-vs-agentic': {
    slide: {
      id: 's3-04-chat-vs-agentic',
      component: () => import('@/components/slides/s3/04-s3-chat-vs-agentic'),
      module: 's3',
      title: 'Chat vs Agentic Tools',
      tags: ['comparison', 'manager', 'developer'],
      duration: 2,
      notes: 'Table comparison across 8 dimensions'
    },
    loader: () => import('@/components/slides/s3/04-s3-chat-vs-agentic')
  },
  's3-05-context-engineering-intro': {
    slide: {
      id: 's3-05-context-engineering-intro',
      component: () => import('@/components/slides/s3/05-s3-context-engineering-intro'),
      module: 's3',
      title: 'Context Engineering Introduction',
      tags: ['concept', 'critical', 'manager', 'developer'],
      duration: 2,
      notes: 'Teaching AI your expertise through structured context'
    },
    loader: () => import('@/components/slides/s3/05-s3-context-engineering-intro')
  },
  's3-06-context-before-after-hr': {
    slide: {
      id: 's3-06-context-before-after-hr',
      component: () => import('@/components/slides/s3/06-s3-context-before-after-hr'),
      module: 's3',
      title: 'Context Example: HR Policy',
      tags: ['example', 'interactive', 'manager'],
      duration: 3,
      notes: 'Interactive toggle: Vague vs Structured context with outcomes'
    },
    loader: () => import('@/components/slides/s3/06-s3-context-before-after-hr')
  },
  's3-07-context-before-after-sales': {
    slide: {
      id: 's3-07-context-before-after-sales',
      component: () => import('@/components/slides/s3/07-s3-context-before-after-sales'),
      module: 's3',
      title: 'Context Example: Sales Scoring',
      tags: ['example', 'interactive', 'manager'],
      duration: 3,
      notes: 'Interactive toggle: Generic vs Specific with 12-criteria framework'
    },
    loader: () => import('@/components/slides/s3/07-s3-context-before-after-sales')
  },
  's3-08-context-what-changed': {
    slide: {
      id: 's3-08-context-what-changed',
      component: () => import('@/components/slides/s3/08-s3-context-what-changed'),
      module: 's3',
      title: 'What Changed',
      tags: ['analysis', 'manager'],
      duration: 2,
      notes: '5 key transformations from vague to structured context'
    },
    loader: () => import('@/components/slides/s3/08-s3-context-what-changed')
  },
  's3-09-context-worksheet-1': {
    slide: {
      id: 's3-09-context-worksheet-1',
      component: () => import('@/components/slides/s3/09-s3-context-worksheet-1'),
      module: 's3',
      title: 'Context Worksheet: Parts 1-2',
      tags: ['worksheet', 'interactive', 'actionable', 'manager'],
      duration: 3,
      notes: 'Multi-step reveal: Process Overview + Knowledge Sources'
    },
    loader: () => import('@/components/slides/s3/09-s3-context-worksheet-1')
  },
  's3-10-context-worksheet-2': {
    slide: {
      id: 's3-10-context-worksheet-2',
      component: () => import('@/components/slides/s3/10-s3-context-worksheet-2'),
      module: 's3',
      title: 'Context Worksheet: Parts 3-4',
      tags: ['worksheet', 'interactive', 'actionable', 'manager'],
      duration: 3,
      notes: 'Multi-step reveal: Evaluation Criteria + Edge Cases'
    },
    loader: () => import('@/components/slides/s3/10-s3-context-worksheet-2')
  },
  's3-11-context-worksheet-3': {
    slide: {
      id: 's3-11-context-worksheet-3',
      component: () => import('@/components/slides/s3/11-s3-context-worksheet-3'),
      module: 's3',
      title: 'Context Worksheet: Parts 5-6',
      tags: ['worksheet', 'interactive', 'actionable', 'manager'],
      duration: 3,
      notes: 'Multi-step reveal: Output Structure + Iteration Plan'
    },
    loader: () => import('@/components/slides/s3/11-s3-context-worksheet-3')
  },
  's3-12-context-5-steps': {
    slide: {
      id: 's3-12-context-5-steps',
      component: () => import('@/components/slides/s3/12-s3-context-5-steps'),
      module: 's3',
      title: '5-Step Context Engineering',
      tags: ['methodology', 'interactive', 'critical', 'manager', 'developer'],
      duration: 3,
      notes: 'Click-to-expand 5-step framework over 2-3 weeks'
    },
    loader: () => import('@/components/slides/s3/12-s3-context-5-steps')
  },
  's3-13-iteration-discovery': {
    slide: {
      id: 's3-13-iteration-discovery',
      component: () => import('@/components/slides/s3/13-s3-iteration-discovery'),
      module: 's3',
      title: 'What Iteration Reveals',
      tags: ['concept', 'manager', 'developer'],
      duration: 2,
      notes: '4 phases of iteration discovery (1-5, 6-10, 11-15, 16-20)'
    },
    loader: () => import('@/components/slides/s3/13-s3-iteration-discovery')
  },
  's3-14-multi-agentic-intro': {
    slide: {
      id: 's3-14-multi-agentic-intro',
      component: () => import('@/components/slides/s3/14-s3-multi-agentic-intro'),
      module: 's3',
      title: 'Multi-Agentic Introduction',
      tags: ['advanced', 'developer'],
      duration: 2,
      notes: 'Single-Agent vs Multi-Agentic comparison'
    },
    loader: () => import('@/components/slides/s3/14-s3-multi-agentic-intro')
  },
  's3-15-multi-agentic-example': {
    slide: {
      id: 's3-15-multi-agentic-example',
      component: () => import('@/components/slides/s3/15-s3-multi-agentic-example'),
      module: 's3',
      title: 'Multi-Agentic Example',
      tags: ['example', 'interactive', 'advanced', 'developer'],
      duration: 3,
      notes: 'Click-to-expand: Sales Call Analyzer (3 subprocesses)'
    },
    loader: () => import('@/components/slides/s3/15-s3-multi-agentic-example')
  },
  's3-16-agent-manager-capabilities': {
    slide: {
      id: 's3-16-agent-manager-capabilities',
      component: () => import('@/components/slides/s3/16-s3-agent-manager-capabilities'),
      module: 's3',
      title: 'Agent Manager Capabilities',
      tags: ['scope', 'manager'],
      duration: 3,
      notes: 'What Agent Managers can build with Level 3.5 tools'
    },
    loader: () => import('@/components/slides/s3/16-s3-agent-manager-capabilities')
  },
  's3-17-developer-scope': {
    slide: {
      id: 's3-17-developer-scope',
      component: () => import('@/components/slides/s3/17-s3-developer-scope'),
      module: 's3',
      title: 'When to Involve Developer',
      tags: ['scope', 'manager', 'developer'],
      duration: 3,
      notes: '4 scenarios requiring developer involvement'
    },
    loader: () => import('@/components/slides/s3/17-s3-developer-scope')
  },
  's3-18-quiz': {
    slide: {
      id: 's3-18-quiz',
      component: () => import('@/components/slides/s3/18-s3-quiz'),
      module: 's3',
      title: 'Knowledge Check',
      tags: ['interactive', 'quiz', 'all-roles'],
      duration: 5,
      notes: '5-question quiz on managing AI and context engineering'
    },
    loader: () => import('@/components/slides/s3/18-s3-quiz')
  },
  's3-19-summary': {
    slide: {
      id: 's3-19-summary',
      component: () => import('@/components/slides/s3/19-s3-summary'),
      module: 's3',
      title: 'Module Summary',
      tags: ['summary', 'all-roles'],
      duration: 2,
      notes: '5 key takeaways and next steps by role'
    },
    loader: () => import('@/components/slides/s3/19-s3-summary')
  },

  // ============================================
  // MOCK SLIDES (3 slides for testing)
  // ============================================
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
