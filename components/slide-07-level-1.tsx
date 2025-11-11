import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { User, MessageSquare } from "lucide-react"

export function Slide07Level1() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-secondary text-secondary-foreground text-xl font-bold px-4 py-2">
            Level 1
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Individual AI
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
            How It Works
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What it is */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-8 w-8 text-muted-foreground" />
                <h3 className="text-2xl font-bold">What it is</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">Employees access ChatGPT, Claude, Gemini directly</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">Individual subscriptions or free accounts</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">Each person develops their own prompts and workflows</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">Chat-only interaction - no file operations, no persistence</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* How people use it */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
                <h3 className="text-2xl font-bold">How people use it</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-lg leading-relaxed">Draft emails and documents</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-lg leading-relaxed">Brainstorm ideas</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-lg leading-relaxed">Summarize reports</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-lg leading-relaxed">Get quick answers</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Value & Limitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Value</h3>
              <p className="text-xl font-semibold text-primary">10-20% individual productivity boost</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Limitations</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-base leading-relaxed">Knowledge stays in individual heads</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-base leading-relaxed">No shared context or organizational memory</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-base leading-relaxed">When employee leaves, their AI knowledge leaves too</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-base font-semibold">Zero organizational leverage</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
