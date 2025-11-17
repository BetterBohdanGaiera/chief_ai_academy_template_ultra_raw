"use client"

/**
 * Module selector component
 * Displays module cards for a specific course (Foundation or Skills)
 */

import Link from 'next/link'
import { ArrowRight, Clock, Layers } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getSlidesByModule } from '@/config/slides'

type ModuleInfo = {
  id: string
  title: string
  description: string
  slideCount: number
  duration: number // minutes
  slug: string
}

// Module metadata based on course structure
const moduleMetadata: Record<string, ModuleInfo> = {
  f1: {
    id: 'f1',
    title: 'Five Levels Framework',
    description: 'Understanding the 5 levels of AI adoption and avoiding the Level 3 trap',
    slideCount: 2,
    duration: 3,
    slug: '/modules/f1'
  },
  f2: {
    id: 'f2',
    title: 'Organization Structure',
    description: 'Four key roles and the critical Agent Manager + Developer partnership',
    slideCount: 2,
    duration: 4,
    slug: '/modules/f2'
  },
  s1: {
    id: 's1',
    title: 'Choosing AI Technology',
    description: 'Decision frameworks for ML vs Agentic AI and build vs buy',
    slideCount: 2,
    duration: 4,
    slug: '/modules/s1'
  },
  s2: {
    id: 's2',
    title: 'Understanding Agents',
    description: 'Four essential components (LLM, Tools, Memory, Autonomy) and vendor evaluation',
    slideCount: 2,
    duration: 3,
    slug: '/modules/s2'
  },
  s3: {
    id: 's3',
    title: 'Managing AI',
    description: 'From managing people to managing AI, context engineering methodology',
    slideCount: 2,
    duration: 4,
    slug: '/modules/s3'
  }
}

type ModuleSelectorProps = {
  courseId: 'foundation' | 'skills'
  title?: string
  description?: string
}

export function ModuleSelector({ courseId, title, description }: ModuleSelectorProps) {
  // Get modules for this course
  const moduleIds = courseId === 'foundation' ? ['f1', 'f2'] : ['s1', 's2', 's3']
  const modules = moduleIds.map(id => moduleMetadata[id])

  const courseName = courseId === 'foundation' ? 'Foundation' : 'Skills'
  const displayTitle = title || `${courseName} Modules`
  const displayDescription = description || `Select a module to begin your ${courseName.toLowerCase()} course journey`

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="glow" className="transform -rotate-1">
          {courseName} Course
        </Badge>
        <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-tight">
          SELECT YOUR <span className="text-primary">MODULE</span>
        </h2>
        <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          {displayDescription}
        </p>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {modules.map((module, index) => (
          <Card
            key={module.id}
            variant="layered"
            className="group hover:-translate-y-1 transition-all duration-300 animate-fade-in fill-backwards"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <Badge variant="gradient" className="uppercase">
                  {module.id}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Layers className="h-4 w-4" />
                    <span>{module.slideCount} slides</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration} min</span>
                  </div>
                </div>
              </div>
              <CardTitle className="font-bebas text-3xl md:text-4xl leading-tight">
                {module.title}
              </CardTitle>
              <CardDescription className="font-syne text-base md:text-lg mt-2">
                {module.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={module.slug} className="block">
                <Button
                  variant="glow"
                  className="w-full group-hover:shadow-glow-lg transition-all duration-300"
                >
                  <Layers className="h-5 w-5 mr-2" />
                  Start Module
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Hint */}
      <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
        <p className="font-manrope">
          Each module builds on the previous one. We recommend completing them in order for the best learning experience.
        </p>
      </div>
    </div>
  )
}
