"use client"

import { useState } from "react"
import { MessageSquare, Database as DatabaseIcon, BookOpen, Users, DollarSign, CheckCircle2, AlertCircle } from "lucide-react"
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
}

const USE_CASES: UseCase[] = [
  {
    title: "HR Policy Assistant",
    description: "Answer employee questions about benefits, PTO, policies instantly",
    roi: "$25K-$50K/year",
    icon: Users,
  },
  {
    title: "Product Documentation",
    description: "Help customers find answers in extensive product documentation",
    roi: "$40K-$99K/year",
    icon: BookOpen,
  },
  {
    title: "Internal Knowledge Base",
    description: "Surface company information from wikis, docs, and training materials",
    roi: "$15K-$45K/year",
    icon: DatabaseIcon,
  },
]

const BENEFITS = [
  "No external API dependencies",
  "Consistent, predictable responses",
  "Low operational complexity",
  "Fast implementation (2-4 weeks)",
  "Easy to maintain and update",
  "Lower ongoing costs",
]

const CONSIDERATIONS = [
  "Limited to existing knowledge",
  "Can't handle real-time queries",
  "Requires comprehensive documentation",
  "Need periodic content updates",
]

export function Slide403StaticChatbots() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="dots" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2" style={{ backgroundColor: "#10B98120", borderColor: "#10B981" }}>
            <MessageSquare className="h-5 w-5 mr-2" />
            CATEGORY 1: STATIC INFORMATION
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Answer From
            <span className="block text-success mt-2">Existing Knowledge</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Level 4 • ROI: $15K-$99K/year
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
              <Card className="border-2 border-success/40">
                <CardHeader className="bg-success/5">
                  <CardTitle className="font-syne text-2xl text-success">What Are Static Information Chatbots?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg text-foreground/80 font-manrope leading-relaxed mb-6">
                    Static information chatbots answer questions by retrieving and synthesizing information from a fixed knowledge base.
                    They excel at making existing documentation, policies, and training materials accessible through natural conversation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Benefits */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        <h4 className="font-syne font-bold text-lg">Key Benefits</h4>
                      </div>
                      <ul className="space-y-2">
                        {BENEFITS.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/70">
                            <span className="text-success mt-1">•</span>
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
              <Card className="border-2 border-success/60 bg-gradient-to-br from-success/5 to-success/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-1">Typical Annual ROI Range</p>
                      <p className="text-4xl font-bold font-jetbrains text-success">$15,000 - $99,000</p>
                    </div>
                    <DollarSign className="h-16 w-16 text-success/30" />
                  </div>
                  <p className="text-sm text-foreground/60 mt-4 font-manrope">
                    Based on reduced support tickets, faster information access, and improved employee productivity
                  </p>
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
                      className="border-2 border-success/30 hover:border-success/60 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-success" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-syne text-xl font-bold text-success">{useCase.title}</h4>
                              <Badge variant="outline" className="border-success text-success">
                                {useCase.roi}
                              </Badge>
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
              <Card className="bg-success/5 border-2 border-success/40">
                <CardContent className="p-6">
                  <p className="font-syne text-lg font-bold text-success mb-2">Real Example:</p>
                  <p className="text-foreground/80 font-manrope leading-relaxed">
                    A 200-person company deployed an HR chatbot to answer benefits questions. It reduced HR support tickets by
                    60% and saved each employee an average of 2 hours per month searching for policy information. Annual value: <span className="font-bold text-success">$48,000</span>.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-6">
              <Card className="border-2 border-success/40">
                <CardHeader className="bg-success/5">
                  <CardTitle className="font-syne text-2xl text-success">Implementation Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        phase: "Week 1-2",
                        title: "Knowledge Base Preparation",
                        tasks: [
                          "Audit existing documentation",
                          "Identify knowledge gaps",
                          "Organize content by topic",
                          "Create evaluation test set",
                        ],
                      },
                      {
                        phase: "Week 3",
                        title: "Build & Configure",
                        tasks: [
                          "Implement RAG (Retrieval-Augmented Generation)",
                          "Configure embeddings and search",
                          "Set up prompt templates",
                          "Connect to deployment platform",
                        ],
                      },
                      {
                        phase: "Week 4",
                        title: "Test & Launch",
                        tasks: [
                          "Run evaluation tests",
                          "Pilot with small user group",
                          "Collect feedback and iterate",
                          "Full rollout and monitoring",
                        ],
                      },
                    ].map((phase, idx) => (
                      <div key={idx} className="border-l-4 border-success pl-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="border-success text-success">{phase.phase}</Badge>
                          <h4 className="font-syne font-bold text-lg">{phase.title}</h4>
                        </div>
                        <ul className="space-y-1">
                          {phase.tasks.map((task, taskIdx) => (
                            <li key={taskIdx} className="flex items-start gap-2 text-foreground/70">
                              <span className="text-success mt-1">✓</span>
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
              <Card className="border-2 border-success/40">
                <CardHeader className="bg-success/5">
                  <CardTitle className="font-syne text-xl text-success">Typical Tech Stack</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">LLM</p>
                      <p className="text-foreground/80">GPT-4, Claude, or Gemini</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Vector DB</p>
                      <p className="text-foreground/80">Pinecone, Weaviate, or Qdrant</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Framework</p>
                      <p className="text-foreground/80">LangChain, LlamaIndex, or custom</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom Insight */}
        <div className="text-center animate-fade-in delay-400 fill-backwards">
          <Card className="inline-block bg-white/95 backdrop-blur-md border-2 border-success/40 px-8 py-4">
            <p className="font-syne text-lg font-semibold text-foreground">
              <span className="text-success">Best for:</span> Organizations with comprehensive documentation looking to improve information accessibility
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
