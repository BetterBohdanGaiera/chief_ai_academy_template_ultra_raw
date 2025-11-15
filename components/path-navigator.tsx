"use client"

/**
 * Path navigator component
 * Role-based learning path selection UI
 */

import Link from 'next/link'
import { ArrowRight, Clock, Users, Briefcase, Rocket, Code } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getAllPaths } from '@/config/paths'

const roleIcons = {
  executive: Briefcase,
  'ai-champion': Rocket,
  'agent-manager': Users,
  developer: Code
}

export function PathNavigator() {
  const paths = getAllPaths()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="gradient" className="transform rotate-1">
          Learning Paths
        </Badge>
        <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-tight">
          YOUR <span className="text-primary">ROLE-BASED</span> JOURNEY
        </h2>
        <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Follow a curated learning path designed for your specific role and responsibilities
        </p>
      </div>

      {/* Path Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {paths.map((path, index) => {
          const Icon = roleIcons[path.id as keyof typeof roleIcons] || Rocket

          return (
            <Card
              key={path.id}
              variant="glow"
              className="group hover:-translate-y-1 transition-all duration-300 animate-fade-in fill-backwards"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{path.duration} min</span>
                  </div>
                </div>
                <CardTitle className="font-bebas text-4xl md:text-5xl leading-tight">
                  {path.title}
                </CardTitle>
                <CardDescription className="font-syne text-base md:text-lg mt-2">
                  {path.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Audience */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Designed For
                    </p>
                    <p className="text-sm text-foreground/80">
                      {path.audience}
                    </p>
                  </div>

                  {/* Module Coverage */}
                  <div className="flex flex-wrap gap-2">
                    {path.slides.map((slideRange, idx) => (
                      <Badge key={idx} variant="outline" className="uppercase">
                        {slideRange.module}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={path.slug} className="block">
                    <Button
                      variant="gradient"
                      className="w-full group-hover:shadow-glow-lg transition-all duration-300"
                    >
                      <Users className="h-5 w-5 mr-2" />
                      Start Path
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
