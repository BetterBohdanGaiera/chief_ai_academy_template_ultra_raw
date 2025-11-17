/**
 * Module utilities
 * Helper functions for module metadata operations
 */

import { type Module } from '@/types/courses'
import { getSlidesByModule } from '@/config/slides'

/**
 * Module registry with static metadata
 * Maps module IDs to module information
 */
export const moduleRegistry: Record<string, Omit<Module, 'slideCount' | 'duration'> & { courseId: string }> = {
  'f1': {
    id: 'f1',
    title: 'Five Levels Framework',
    description: 'Understanding the 5 levels of AI adoption and why most organizations get stuck at Level 3',
    duration: 0, // Will be calculated
    slideCount: 0, // Will be calculated
    courseId: 'foundation'
  },
  'f2': {
    id: 'f2',
    title: 'Organization Structure',
    description: 'How to structure teams and roles for successful AI transformation',
    duration: 0, // Will be calculated (estimated)
    slideCount: 0, // Will be calculated
    courseId: 'foundation'
  },
  's1': {
    id: 's1',
    title: 'Choosing AI Technology',
    description: 'Framework for selecting the right AI tools and platforms for your organization',
    duration: 0, // Will be calculated
    slideCount: 0, // Will be calculated
    courseId: 'skills'
  },
  's2': {
    id: 's2',
    title: 'Understanding Agents',
    description: 'Deep dive into AI agents, their capabilities, and how to deploy them effectively',
    duration: 0, // Will be calculated (estimated)
    slideCount: 0, // Will be calculated
    courseId: 'skills'
  },
  's3': {
    id: 's3',
    title: 'Managing AI',
    description: 'Best practices for governing AI initiatives and measuring success',
    duration: 0, // Will be calculated (estimated)
    slideCount: 0, // Will be calculated
    courseId: 'skills'
  }
}

/**
 * Get module metadata with calculated slide count and duration
 * @param moduleId - Module identifier (e.g., 'f1', 's1')
 * @returns Module metadata with calculated slideCount and duration
 */
export function getModuleMetadata(moduleId: string): Module {
  const staticData = moduleRegistry[moduleId]

  if (!staticData) {
    throw new Error(`Module ${moduleId} not found in registry`)
  }

  // Get slides for this module
  const slides = getSlidesByModule(moduleId)

  // Calculate total duration by summing slide durations
  const totalDuration = slides.reduce((sum, slide) => sum + slide.duration, 0)

  return {
    ...staticData,
    slideCount: slides.length,
    duration: totalDuration
  }
}

/**
 * Get all modules for a specific course
 * @param courseId - Course identifier (e.g., 'foundation', 'skills')
 * @returns Array of Module objects with metadata
 */
export function getAllModulesForCourse(courseId: string): Module[] {
  // Map course IDs to their module IDs
  const courseModules: Record<string, string[]> = {
    'foundation': ['f1', 'f2'],
    'skills': ['s1', 's2', 's3']
  }

  const moduleIds = courseModules[courseId]

  if (!moduleIds) {
    throw new Error(`Course ${courseId} not found`)
  }

  return moduleIds.map(moduleId => getModuleMetadata(moduleId))
}

/**
 * Check if a module has available slides
 * @param moduleId - Module identifier
 * @returns true if module has at least 1 slide
 */
export function isModuleAvailable(moduleId: string): boolean {
  const slides = getSlidesByModule(moduleId)
  return slides.length > 0
}

/**
 * Get module status for UI display
 * @param moduleId - Module identifier
 * @returns Status string: 'available' or 'coming-soon'
 */
export function getModuleStatus(moduleId: string): 'available' | 'coming-soon' {
  return isModuleAvailable(moduleId) ? 'available' : 'coming-soon'
}
