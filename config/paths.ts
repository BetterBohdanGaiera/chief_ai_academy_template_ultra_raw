/**
 * Learning path configuration
 * Defines role-based learning paths with slide composition rules
 */

import { type Path, type PathRegistry } from '@/types/courses'

export const paths: PathRegistry = {
  executive: {
    id: 'executive',
    title: 'Executive Path',
    description: 'Strategic AI transformation overview for C-suite leaders and board members',
    duration: 70, // minutes
    audience: 'C-suite executives, VP-level leaders, board members',
    slides: [
      { module: 'f1', range: [1, 20] }, // All F1 slides
      { module: 'f2', range: [1, 18] }, // All F2 slides
      { module: 's1', range: [1, 5] },  // S1 strategic slides only (no implementation details)
    ],
    slug: '/paths/executive',
    theme: 'primary'
  },
  'ai-champion': {
    id: 'ai-champion',
    title: 'AI Champion Path',
    description: 'Complete curriculum for transformation leaders driving AI adoption',
    duration: 110, // minutes
    audience: 'AI Champions, Transformation Leaders, Innovation Directors',
    slides: [
      { module: 'f1', range: [1, 20] }, // All F1 slides
      { module: 'f2', range: [1, 18] }, // All F2 slides
      { module: 's1', range: [1, 15] }, // All S1 slides
      { module: 's2', range: [1, 8] },  // All S2 slides
      { module: 's3', range: [1, 23] }, // All S3 slides
    ],
    slug: '/paths/ai-champion',
    theme: 'primary'
  },
  'agent-manager': {
    id: 'agent-manager',
    title: 'Agent Manager Path',
    description: 'Context engineering and managing AI agents for domain experts',
    duration: 85, // minutes
    audience: 'Agent Managers, Domain Experts, Product Owners',
    slides: [
      { module: 'f1', range: [1, 20] }, // All F1 slides
      { module: 'f2', range: [1, 18] }, // All F2 slides
      { module: 's1', range: [1, 3] },  // S1 brief intro
      { module: 's3', range: [1, 23] }, // All S3 slides (deep dive)
    ],
    slug: '/paths/agent-manager',
    theme: 'primary'
  },
  developer: {
    id: 'developer',
    title: 'Developer Path',
    description: 'Technical implementation of AI agents and custom solutions',
    duration: 95, // minutes
    audience: 'Developers, Engineers, Technical Architects',
    slides: [
      { module: 'f1', range: [1, 20] }, // All F1 slides
      { module: 'f2', range: [1, 18] }, // All F2 slides
      { module: 's1', range: [1, 3] },  // S1 brief intro
      { module: 's2', range: [1, 8] },  // All S2 slides (deep dive)
      { module: 's3', range: [1, 23] }, // All S3 slides (deep dive)
    ],
    slug: '/paths/developer',
    theme: 'primary'
  }
}

/**
 * Get path by ID
 */
export function getPath(pathId: string): Path | undefined {
  return paths[pathId]
}

/**
 * Get all paths as an array
 */
export function getAllPaths(): Path[] {
  return Object.values(paths)
}
