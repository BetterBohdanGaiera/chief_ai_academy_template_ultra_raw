/**
 * Skills Course Page
 * Displays module selector for S1, S2, and S3 modules
 */

import { ModuleSelector } from '@/components/module-selector'

export default function SkillsCoursePage() {
  return (
    <ModuleSelector
      courseId="skills"
      title="Skills Course"
      description="Master AI technology selection, agent architecture, and management practices"
    />
  )
}
