/**
 * Developer Learning Path Page
 * Technical implementation and architecture focus
 * Duration: ~95 min (F1 all, F2 all, S1 brief, S2 all, S3 all)
 */

import { PresentationContainer } from '@/components/presentation-container'

// Developer path: Technical focus on architecture, agents, and implementation
// F1: Five Levels Framework (all 18 slides)
// F2: Organization Structure (all 16 slides)
// S1: Choosing AI Technology (brief overview - 5 slides)
// S2: Understanding AI Agents (all 11 slides - architecture critical)
// S3: Managing AI (all 19 slides - management + multi-agentic focus)
const developerSlides = [
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

  // S1: Choosing AI Technology (brief overview - 5 slides)
  's1-01-title',
  's1-02-four-approaches',
  's1-04-build-vs-buy',
  's1-10-hybrid-strategy',
  's1-14-summary',

  // S2: Understanding AI Agents (all 11 slides - architecture critical)
  's2-01-title',
  's2-02-four-components',
  's2-03-llm-deep-dive',
  's2-04-tools-deep-dive',
  's2-05-memory-deep-dive',
  's2-06-autonomy-deep-dive',
  's2-07-agentic-spectrum',
  's2-08-vendor-evaluation',
  's2-09-limitations',
  's2-10-quiz',
  's2-11-summary',

  // S3: Managing AI (all 19 slides - management + multi-agentic focus)
  's3-01-title',
  's3-02-management-shift',
  's3-03-agentic-tools-intro',
  's3-04-chat-vs-agentic',
  's3-05-context-engineering-intro',
  's3-06-context-before-after-hr',
  's3-07-context-before-after-sales',
  's3-08-context-what-changed',
  's3-09-context-worksheet-1',
  's3-10-context-worksheet-2',
  's3-11-context-worksheet-3',
  's3-12-context-5-steps',
  's3-13-iteration-discovery',
  's3-14-multi-agentic-intro',
  's3-15-multi-agentic-example',
  's3-16-agent-manager-capabilities',
  's3-17-developer-scope',
  's3-18-quiz',
  's3-19-summary'
]

export default function DeveloperPathPage() {
  return (
    <PresentationContainer
      slideIds={developerSlides}
      title="Developer Learning Path"
      id="path-developer"
    />
  )
}
