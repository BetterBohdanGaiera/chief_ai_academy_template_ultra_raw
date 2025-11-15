"use client"

/**
 * Course selector component
 * Landing page UI for selecting individual courses
 */

import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getAllCourses } from '@/config/courses'

export function CourseSelector() {
  const courses = getAllCourses()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="glow" className="transform -rotate-1">
          Course Selection
        </Badge>
        <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-tight">
          CHOOSE YOUR <span className="text-primary">COURSE</span>
        </h2>
        <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Select a standalone course to explore AI transformation frameworks and skills
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <Card
            key={course.id}
            variant="layered"
            className="group hover:-translate-y-1 transition-all duration-300 animate-fade-in fill-backwards"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <Badge variant="gradient">
                  {course.modules.length} Modules
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration} min</span>
                </div>
              </div>
              <CardTitle className="font-bebas text-4xl md:text-5xl leading-tight">
                {course.title}
              </CardTitle>
              <CardDescription className="font-syne text-base md:text-lg mt-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Module List */}
                <div className="flex flex-wrap gap-2">
                  {course.modules.map((moduleId) => (
                    <Badge key={moduleId} variant="outline" className="uppercase">
                      {moduleId}
                    </Badge>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={course.slug} className="block">
                  <Button
                    variant="glow"
                    className="w-full group-hover:shadow-glow-lg transition-all duration-300"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    Start Course
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
