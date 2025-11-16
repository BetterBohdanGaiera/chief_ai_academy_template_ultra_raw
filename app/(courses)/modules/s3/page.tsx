/**
 * S3 Module Page - Managing AI
 * 19 slides covering management shift, context engineering, and multi-agentic systems
 */

import { PresentationContainer } from '@/components/presentation-container'

// S3: Managing AI slide IDs (19 slides)
const s3Slides = [
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

export default function S3ModulePage() {
  return (
    <PresentationContainer
      slideIds={s3Slides}
      title="S3: Managing AI"
      id="s3"
    />
  )
}
