"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckSquare, AlertTriangle } from "lucide-react"

export function Slide09Level3Promise() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-5xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Badge className="bg-warning text-warning-foreground text-xl font-bold px-4 py-2">Level 3</Badge>
            <AlertTriangle className="h-8 w-8 text-warning" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            No-Code Automation
          </h2>
          <p className="text-2xl md:text-3xl text-warning font-bold text-pretty leading-relaxed">THE TRAP</p>
        </div>

        {/* The Promise */}
        <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-10">
            <h3 className="text-3xl font-bold mb-6 text-center">The Promise</h3>
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-2xl font-semibold text-muted-foreground">
                  "Automate workflows without developers!"
                </p>
                <p className="text-xl text-muted-foreground">Zapier, Make.com, n8n</p>
              </div>

              <div className="text-center space-y-3">
                <p className="text-2xl font-semibold text-muted-foreground">"Drag-and-drop AI in minutes!"</p>
                <p className="text-2xl font-semibold text-muted-foreground">
                  "Transform your business for $99/month!"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* It sounds perfect */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">It sounds perfect:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl leading-relaxed">No technical team needed</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl leading-relaxed">No long projects</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl leading-relaxed">Just plug in a tool</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl leading-relaxed">Watch efficiency soar</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Setup */}
        <div className="text-center space-y-6 pt-4">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            So companies buy the subscription.
            <br />
            Set up the workflow.
            <br />
            Launch it to the team.
          </p>
          <div className="pt-8">
            <p className="text-4xl md:text-5xl font-bold text-warning animate-pulse">And then...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
