"use client"

import { useState } from "react"
import { Workflow, Code, FileCheck, Brain, TrendingUp, DollarSign, CheckCircle2, AlertCircle, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface UseCase {
  title: string
  description: string
  roi: string
  icon: React.ComponentType<{ className?: string }>
  complexity: "Medium" | "High"
}

const USE_CASES: UseCase[] = [
  {
    title: "Automated Code Review",
    description: "Apply engineering best practices at scale, identify bugs, security issues, and architectural concerns",
    roi: "$95K-$158K/year",
    icon: Code,
    complexity: "High",
  },
  {
    title: "Contract Analysis",
    description: "Review legal documents, extract key terms, identify risks, and flag non-standard clauses",
    roi: "$85K-$145K/year",
    icon: FileCheck,
    complexity: "High",
  },
  {
    title: "Research Synthesis",
    description: "Aggregate findings from multiple sources, identify patterns, and generate insights",
    roi: "$63K-$120K/year",
    icon: Brain,
    complexity: "Medium",
  },
]

const BENEFITS = [
  "Apply expert judgment at scale",
  "Consistent quality across tasks",
  "Handle complex, multi-step workflows",
  "Autonomous decision-making",
  "Continuous learning and improvement",
  "Significant time savings for experts",
]

const CONSIDERATIONS = [
  "Higher implementation complexity",
  "Requires domain expertise to build",
  "More expensive to develop initially",
  "Need robust testing and validation",
  "Ongoing refinement required",
]

export function Slide405CustomWorkflows() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="triangles" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Workflow className="h-5 w-5 mr-2" />
            CATEGORY 3: CUSTOM WORKFLOWS
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Apply Expert Judgment
            <span className="block text-primary mt-2">At Scale</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Level 5 • ROI: $63K-$158K/year
          </p>
        </div>

        {/* Main Content Tabs */}
        <div className="animate-slide-in-up delay-200 fill-backwards">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview" className="text-base">Overview</TabsTrigger>
              <TabsTrigger value="use-cases" className="text-base">Use Cases</TabsTrigger>
              <TabsTrigger value="implementation" className="text-base">Implementation</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className="border-2 border-primary/40">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="font-syne text-2xl text-primary">What Are Custom Workflows & Analyzers?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg text-foreground/80 font-manrope leading-relaxed mb-6">
                    Custom workflows and analyzers represent the highest category of agentic solutions. They automate complex,
                    multi-step processes that require expert judgment, reasoning, and decision-making. These systems can handle
                    nuanced situations, apply domain-specific knowledge, and operate with significant autonomy.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Benefits */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <h4 className="font-syne font-bold text-lg">Key Benefits</h4>
                      </div>
                      <ul className="space-y-2">
                        {BENEFITS.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/70">
                            <span className="text-primary mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Considerations */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                        <h4 className="font-syne font-bold text-lg">Considerations</h4>
                      </div>
                      <ul className="space-y-2">
                        {CONSIDERATIONS.map((consideration, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/70">
                            <span className="text-amber-500 mt-1">•</span>
                            <span>{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ROI Highlight */}
              <Card className="border-2 border-primary/60 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-1">Typical Annual ROI Range</p>
                      <p className="text-4xl font-bold font-jetbrains text-primary">$63,000 - $158,000</p>
                    </div>
                    <DollarSign className="h-16 w-16 text-primary/30" />
                  </div>
                  <p className="text-sm text-foreground/60 mt-4 font-manrope">
                    ROI from scaling expert capabilities, reducing review cycles, and enabling experts to focus on high-value strategic work
                  </p>
                </CardContent>
              </Card>

              {/* How It Works - Multi-Agent Flow */}
              <Card className="border-2 border-primary/40 bg-primary/5">
                <CardHeader>
                  <CardTitle className="font-syne text-xl text-primary">Multi-Agent Workflow Example</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-semibold">Input Analysis Agent</p>
                        <p className="text-sm text-foreground/60">Receives task, extracts requirements, routes to specialized agents</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <GitBranch className="h-6 w-6 text-primary/50 rotate-90" />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-semibold">Specialized Processing Agents</p>
                        <p className="text-sm text-foreground/60">Domain experts perform analysis, validation, and transformations in parallel</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <GitBranch className="h-6 w-6 text-primary/50 rotate-90" />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-semibold">Synthesis & Review Agent</p>
                        <p className="text-sm text-foreground/60">Aggregates findings, identifies conflicts, applies quality checks</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <GitBranch className="h-6 w-6 text-primary/50 rotate-90" />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <p className="font-semibold">Decision & Output Agent</p>
                        <p className="text-sm text-foreground/60">Makes final decision, formats output, triggers actions or escalations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Use Cases Tab */}
            <TabsContent value="use-cases" className="space-y-6">
              <div className="grid gap-6">
                {USE_CASES.map((useCase, idx) => {
                  const Icon = useCase.icon
                  return (
                    <Card
                      key={idx}
                      className="border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                              <h4 className="font-syne text-xl font-bold text-primary">{useCase.title}</h4>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="border-amber-500 text-amber-500">
                                  {useCase.complexity}
                                </Badge>
                                <Badge variant="outline" className="border-primary text-primary">
                                  {useCase.roi}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-foreground/70 font-manrope leading-relaxed">
                              {useCase.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Real Example Callout */}
              <Card className="bg-primary/5 border-2 border-primary/40">
                <CardContent className="p-6">
                  <p className="font-syne text-lg font-bold text-primary mb-2">Real Example:</p>
                  <p className="text-foreground/80 font-manrope leading-relaxed">
                    A software company with 50 engineers deployed an automated code review agent. It caught 85% of common issues
                    before human review, reduced review cycle time by 40%, and allowed senior engineers to focus on architectural
                    decisions instead of syntax and style checks. Each engineer saved 5 hours per week. Annual value:{" "}
                    <span className="font-bold text-primary">$130,000</span>.
                  </p>
                </CardContent>
              </Card>

              {/* When to Choose This Category */}
              <Card className="border-2 border-primary/40">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="font-syne text-xl text-primary">When to Choose This Category</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground">GOOD FIT IF:</p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                          <span>Task requires expert judgment</span>
                        </li>
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                          <span>Multi-step process with decision points</span>
                        </li>
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                          <span>High volume of similar tasks</span>
                        </li>
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                          <span>Expert time is bottleneck</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground">NOT A FIT IF:</p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                          <span>Simple lookup or retrieval task</span>
                        </li>
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                          <span>Low task volume</span>
                        </li>
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                          <span>No clear success criteria</span>
                        </li>
                        <li className="flex items-start gap-2 text-foreground/70 text-sm">
                          <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                          <span>Requires human creativity/empathy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-6">
              <Card className="border-2 border-primary/40">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="font-syne text-2xl text-primary">Implementation Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        phase: "Week 1-3",
                        title: "Domain Analysis & Architecture",
                        tasks: [
                          "Map expert decision-making process",
                          "Identify decision points and criteria",
                          "Design multi-agent architecture",
                          "Build comprehensive evaluation set",
                        ],
                      },
                      {
                        phase: "Week 4-6",
                        title: "Agent Development",
                        tasks: [
                          "Implement specialized agents",
                          "Develop orchestration layer",
                          "Build tool integrations",
                          "Create feedback mechanisms",
                        ],
                      },
                      {
                        phase: "Week 7-9",
                        title: "Testing & Refinement",
                        tasks: [
                          "Rigorous evaluation against test set",
                          "Expert review and validation",
                          "Iterate on edge cases",
                          "Performance optimization",
                        ],
                      },
                      {
                        phase: "Week 10-12",
                        title: "Pilot & Scale",
                        tasks: [
                          "Controlled pilot with experts",
                          "Monitor quality and accuracy",
                          "Gather feedback and improve",
                          "Gradual rollout to full team",
                        ],
                      },
                    ].map((phase, idx) => (
                      <div key={idx} className="border-l-4 border-primary pl-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="border-primary text-primary">{phase.phase}</Badge>
                          <h4 className="font-syne font-bold text-lg">{phase.title}</h4>
                        </div>
                        <ul className="space-y-1">
                          {phase.tasks.map((task, taskIdx) => (
                            <li key={taskIdx} className="flex items-start gap-2 text-foreground/70">
                              <span className="text-primary mt-1">✓</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card className="border-2 border-primary/40">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="font-syne text-xl text-primary">Typical Tech Stack</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">LLM</p>
                      <p className="text-foreground/80">GPT-4, Claude Opus, Gemini Pro</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Framework</p>
                      <p className="text-foreground/80">LangGraph, AutoGen, CrewAI</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Orchestration</p>
                      <p className="text-foreground/80">Prefect, Airflow, Custom</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Evaluation</p>
                      <p className="text-foreground/80">LangSmith, Braintrust, Custom metrics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Factors */}
              <Card className="bg-primary/5 border-2 border-primary/40">
                <CardHeader>
                  <CardTitle className="font-syne text-xl text-primary flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Critical Success Factors
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold">Expert Involvement</p>
                        <p className="text-sm text-foreground/60">Domain experts must guide development and validation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold">Comprehensive Testing</p>
                        <p className="text-sm text-foreground/60">Build large evaluation sets covering edge cases</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-semibold">Iterative Approach</p>
                        <p className="text-sm text-foreground/60">Start narrow, prove value, then expand scope</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-semibold">Continuous Learning</p>
                        <p className="text-sm text-foreground/60">Implement feedback loops for ongoing improvement</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom Insight */}
        <div className="text-center animate-fade-in delay-400 fill-backwards">
          <Card className="inline-block bg-white/95 backdrop-blur-md border-2 border-primary/40 px-8 py-4">
            <p className="font-syne text-lg font-semibold text-foreground">
              <span className="text-primary">Best for:</span> Scaling expert capabilities and automating complex, judgment-heavy workflows
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
