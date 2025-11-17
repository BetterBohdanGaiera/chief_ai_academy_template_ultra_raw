"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight } from "lucide-react"

interface Week {
  number: number
  title: string
  summary: string
  details: string[]
  highlights?: string[]
}

interface StoryTimelineCardProps {
  week: Week
  isExpanded: boolean
  onClick: () => void
  delay: number
}

export function StoryTimelineCard({ week, isExpanded, onClick, delay }: StoryTimelineCardProps) {
  return (
    <Card
      className={`
        cursor-pointer transition-all duration-300
        ${isExpanded
          ? "border-primary shadow-[0_0_30px_rgba(255,77,0,0.3)] scale-102"
          : "border-border hover:border-primary/50 hover:scale-101"
        }
        animate-fade-in delay-${delay} fill-backwards
      `}
      onClick={onClick}
    >
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant={isExpanded ? "default" : "outline"} className="text-sm">
            Week {week.number}
          </Badge>
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-primary" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </div>

        <h3 className="text-xl font-display">{week.title}</h3>
        <p className="text-sm text-foreground/80">{week.summary}</p>

        {isExpanded && (
          <div className="space-y-4 animate-fade-in pt-4 border-t border-border">
            <div>
              <p className="text-xs font-semibold text-primary mb-2">KEY ACTIVITIES:</p>
              <ul className="space-y-2">
                {week.details.map((detail, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {week.highlights && week.highlights.length > 0 && (
              <div className="pt-2">
                <p className="text-xs font-semibold text-green-500 mb-2">✓ OUTCOMES:</p>
                <ul className="space-y-1">
                  {week.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-foreground/90 flex gap-2">
                      <span className="text-green-500 shrink-0">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
