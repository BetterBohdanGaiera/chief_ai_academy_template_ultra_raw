"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface StaggeredRevealProps {
  children: React.ReactNode
  delay?: number // delay in ms between each child
  className?: string
}

/**
 * StaggeredReveal - Wrapper for staggered child animations
 *
 * Automatically applies incremental animation delays to children
 *
 * Usage:
 * <StaggeredReveal delay={100}>
 *   <Card className="animate-fade-in fill-backwards">Card 1</Card>
 *   <Card className="animate-fade-in fill-backwards">Card 2</Card>
 *   <Card className="animate-fade-in fill-backwards">Card 3</Card>
 * </StaggeredReveal>
 */
export function StaggeredReveal({
  children,
  delay = 100,
  className,
}: StaggeredRevealProps) {
  const childrenArray = React.Children.toArray(children)

  return (
    <>
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            key: index,
            className: cn(child.props.className),
            style: {
              ...child.props.style,
              animationDelay: `${index * delay}ms`,
            },
          })
        }
        return child
      })}
    </>
  )
}
