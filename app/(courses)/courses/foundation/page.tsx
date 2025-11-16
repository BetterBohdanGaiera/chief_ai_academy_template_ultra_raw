/**
 * Foundation Course Page
 * Displays module selector for F1 and F2 modules
 */

import { ModuleSelector } from '@/components/module-selector'

export default function FoundationCoursePage() {
  return (
    <ModuleSelector
      courseId="foundation"
      title="Foundation Course"
      description="Build your understanding of AI adoption levels and organizational structure"
    />
  )
}
