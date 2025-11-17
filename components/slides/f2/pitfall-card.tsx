import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

interface PitfallCardProps {
  symptoms: string[]
  solutions: string[]
  className?: string
}

export function PitfallCard({ symptoms, solutions, className = "" }: PitfallCardProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {/* Left: Symptoms */}
      <Card className="border-amber-500/40 bg-amber-500/5">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0" />
            <h3 className="text-xl font-display text-amber-500">SYMPTOMS</h3>
          </div>
          <ul className="space-y-2">
            {symptoms.map((symptom, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-foreground/80">
                <span className="text-amber-500 shrink-0">•</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Right: Solutions */}
      <Card className="border-primary/40 bg-primary/5">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <h3 className="text-xl font-display text-primary">SOLUTIONS</h3>
          </div>
          <ul className="space-y-2">
            {solutions.map((solution, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-foreground/80">
                <span className="text-primary shrink-0">✓</span>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
