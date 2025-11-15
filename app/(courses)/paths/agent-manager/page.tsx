/**
 * Agent Manager Learning Path Page
 * Context engineering and managing AI agents focus
 */

import { PresentationContainer } from '@/components/presentation-container'

// Mock slide IDs for Agent Manager path
const agentManagerSlides = [
  'mock-01-foundation-title',
  'mock-02-skills-concept'
]

export default function AgentManagerPathPage() {
  return (
    <PresentationContainer
      slideIds={agentManagerSlides}
      title="Agent Manager Path"
      id="path-agent-manager"
    />
  )
}
