/**
 * S2 Module Page - Understanding AI Agents
 * 11 slides covering four agent components and vendor evaluation
 */

import { PresentationContainer } from '@/components/presentation-container'

// S2: Understanding Agents slide IDs (11 slides)
const s2Slides = [
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
  's2-11-summary'
]

export default function S2ModulePage() {
  return (
    <PresentationContainer
      slideIds={s2Slides}
      title="S2: Understanding AI Agents"
      id="s2"
    />
  )
}
