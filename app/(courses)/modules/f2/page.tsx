/**
 * F2 Module Page - Organization Structure
 * 16 slides covering roles, partnerships, and transformation stories
 */

import { PresentationContainer } from '@/components/presentation-container'

// F2: Organization Structure slide IDs (16 slides)
const f2Slides = [
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
  'f2-16-summary'
]

export default function F2ModulePage() {
  return (
    <PresentationContainer
      slideIds={f2Slides}
      title="F2: Organization Structure"
      id="f2"
    />
  )
}
