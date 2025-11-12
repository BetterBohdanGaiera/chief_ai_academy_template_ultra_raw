import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Workflow, RotateCw, Shield } from "lucide-react"

export function Slide16Level5() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-background to-blue-950/20">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Badge
              className="text-xl font-bold px-4 py-2"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)) 0%, rgb(59, 130, 246) 100%)",
                color: "white",
              }}
            >
              Level 5
            </Badge>
            <Sparkles className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Autonomous Agents
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-pretty leading-relaxed text-blue-600 dark:text-blue-400">
            Trusted Components Operating Autonomously
          </p>
        </div>

        {/* The Architecture */}
        <Card className="border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <CardContent className="p-10">
            <h3 className="text-3xl font-bold mb-6 text-center">The Architecture</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Workflow className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">
                  Built from <span className="font-bold text-primary">Level 4 functionalities you trust completely</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">Each sub-functionality has been iterated and refined at Level 4</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">
                  Now operates <span className="font-bold">without human-in-the-loop</span> - fully autonomous
                </p>
              </div>
              <div className="flex items-start gap-3">
                <RotateCw className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">Self-monitoring and self-correcting</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Makes It Different */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-8">
              <Badge className="bg-primary text-primary-foreground text-lg font-bold px-3 py-1 mb-4">Level 4</Badge>
              <p className="text-xl font-semibold mb-2">Human approves each action</p>
              <p className="text-base text-muted-foreground">(HITL - Human In The Loop)</p>
            </CardContent>
          </Card>
          <Card className="border-blue-500/40 bg-blue-500/10">
            <CardContent className="p-8">
              <Badge
                className="text-lg font-bold px-3 py-1 mb-4"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, rgb(59, 130, 246) 100%)",
                  color: "white",
                }}
              >
                Level 5
              </Badge>
              <p className="text-xl font-semibold mb-2">AI makes decisions autonomously</p>
              <p className="text-base text-muted-foreground">Using trusted components</p>
            </CardContent>
          </Card>
        </div>

        {/* The Power - Multi-Agent Orchestration */}
        <Card className="border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <CardContent className="p-10">
            <h3 className="text-3xl font-bold mb-6 text-center">The Power - Multi-Agent Orchestration</h3>

            {/* Multi-Agent Visualization */}
            <div className="mb-8 flex justify-center">
              <img
                src="/generated-images/gemini-1762957978715-1.png"
                alt="Multiple autonomous AI agents orchestrating together in a network with flowing data streams"
                className="w-full max-w-5xl h-auto rounded-xl shadow-lg"
              />
            </div>
            <p className="text-xl leading-relaxed mb-6 text-center">
              The breakthrough isn't just automation - it's <span className="font-bold text-blue-600 dark:text-blue-400">orchestration</span>
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-lg mb-2">Person's Simple Input:</p>
                  <p className="text-base text-muted-foreground">Describes what they want in natural language</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">AI System Internally Knows:</p>
                  <ul className="space-y-2">
                    <li className="text-base text-muted-foreground">• Where to route the request</li>
                    <li className="text-base text-muted-foreground">• Which agents to use</li>
                    <li className="text-base text-muted-foreground">• What order to execute</li>
                    <li className="text-base text-muted-foreground">• How to combine results</li>
                  </ul>
                </div>
              </div>
              <Card className="border-blue-500/30 bg-blue-500/5">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold mb-2">Example:</p>
                  <p className="text-base text-muted-foreground mb-3">"Analyze this sales call and update CRM"</p>
                  <p className="text-base">
                    → System uses <span className="font-semibold">Call Analyzer Agent</span> →{" "}
                    <span className="font-semibold">Deal Intelligence Agent</span> →{" "}
                    <span className="font-semibold">CRM Update Agent</span> → All automatically
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* How It Creates Value */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">How It Creates Value</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-500/40 bg-blue-500/5">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Full Process Automation</h4>
                <p className="text-sm text-muted-foreground">Using trusted Level 4 components</p>
              </CardContent>
            </Card>
            <Card className="border-blue-500/40 bg-blue-500/5">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Infinitely Scalable</h4>
                <p className="text-sm text-muted-foreground">10x volume, zero added cost</p>
              </CardContent>
            </Card>
            <Card className="border-blue-500/40 bg-blue-500/5">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Strategic Leverage</h4>
                <p className="text-sm text-muted-foreground">Frees leadership for high-value work</p>
              </CardContent>
            </Card>
            <Card className="border-blue-500/40 bg-blue-500/5">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Natural Language Interface</h4>
                <p className="text-sm text-muted-foreground">Person-triggered multi-agent pipelines</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Challenge */}
        <Card className="border-warning/40 bg-warning/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p className="text-base">• Legal and regulatory considerations</p>
              <p className="text-base">• Robust monitoring required</p>
              <p className="text-base">• Cultural shift in trust</p>
            </div>
          </CardContent>
        </Card>

        {/* Current State */}
        <div className="text-center">
          <Card className="border-blue-500/40 bg-blue-500/10 inline-block">
            <CardContent className="p-6">
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Current State: Cutting edge. Some companies already there.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
