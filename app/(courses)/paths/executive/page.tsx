/**
 * Executive Learning Path Page
 * Strategic focus for C-suite executives
 * Duration: ~70 min (F1 all, F2 all, S1 high-level)
 */

import { PresentationContainer } from '@/components/presentation-container'

// Executive path: Strategic overview focusing on frameworks and decision-making
// F1: Five Levels Framework (all 18 slides)
// F2: Organization Structure (all 16 slides)
// S1: Choosing AI Technology (high-level selection - 8 slides)
const executiveSlides = [
  // F1: Five Levels Framework (18 slides)
  'f1-01-title',
  'f1-02-why-levels',
  'f1-03-levels-overview',
  'f1-04-level1-individual',
  'f1-05-level2-saas',
  'f1-06-level3-trap',
  'f1-07-level3-failure',
  'f1-08-iteration-economics',
  'f1-09-level4-iterative',
  'f1-10-level5-autonomous',
  'f1-11-transition-l1-l2',
  'f1-12-transition-l3-escape',
  'f1-13-decision-tree',
  'f1-14-l4-optimization',
  'f1-15-self-assessment',
  'f1-16-quiz',
  'f1-17-summary',
  'f1-18-whats-next',

  // F2: Organization Structure (16 slides)
  'f2-01-title',
  'f2-02-four-roles-framework',
  'f2-03-agent-manager-paths',
  'f2-04-developer-role',
  'f2-05-partnership-dynamics',
  'f2-06-hr-onboarding-story',
  'f2-07-sales-call-story',
  'f2-08-vendor-sla-story',
  'f2-09-transformation-timeline',
  'f2-10-pitfall-communication',
  'f2-11-pitfall-context-quality',
  'f2-12-pitfall-scope-creep',
  'f2-13-pitfall-accuracy-plateau',
  'f2-14-pitfall-premature-deployment',
  'f2-15-pitfall-no-monitoring',
  'f2-16-summary',

  // S1: Choosing AI Technology (high-level strategic - 8 slides)
  's1-01-title',
  's1-02-four-approaches',
  's1-03-ml-vs-agentic',
  's1-04-build-vs-buy',
  's1-08-category-workflows',
  's1-09-roi-ranges',
  's1-10-hybrid-strategy',
  's1-14-summary'
]

export default function ExecutivePathPage() {
  return (
    <PresentationContainer
      slideIds={executiveSlides}
      title="Executive Learning Path"
      id="path-executive"
    />
  )
}
