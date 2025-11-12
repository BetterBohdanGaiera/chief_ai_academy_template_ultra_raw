import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckSquare } from "lucide-react"

export function Slide13aLevel3GuidanceMain() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-5xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            If You Still Choose This Path
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Working with External Providers
          </p>
        </div>

        {/* Main Guidance */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-8 lg:p-10">
            <h3 className="text-xl lg:text-2xl font-bold mb-5">
              If you choose to build with an agency or consultant despite the challenges, here's something that
              increases your probability of success:
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Gather Real-World Examples Upfront</h4>
                <p className="text-base lg:text-lg leading-relaxed mb-4">
                  Before the provider starts building, you and your domain experts should:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base lg:text-lg leading-relaxed">
                      Collect 30-50 real examples of questions or scenarios the system will handle
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base lg:text-lg leading-relaxed">Include typical cases AND worst-case edge cases</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base lg:text-lg leading-relaxed">
                      Define what the correct answer/output should be for each
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base lg:text-lg leading-relaxed">Show explicit examples of good vs bad responses</p>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-lg lg:text-xl font-bold text-primary mb-2">Give these to your provider from day one.</p>
                <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                  This practice is called "test-driven development" or "evaluation sets" (evals)—but the concept is
                  simple: give real examples before building starts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What This Does */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-3">What This Does</h3>
            <p className="text-base lg:text-lg leading-relaxed">
              This forces the provider to optimize for ALL your scenarios—not just the perfect demo cases. From the
              first version, you'll get something closer to what you actually need.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
