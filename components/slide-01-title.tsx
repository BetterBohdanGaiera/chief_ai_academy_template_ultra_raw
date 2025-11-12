import { Badge } from "@/components/ui/badge"

export function Slide01Title() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-5xl w-full space-y-12 text-center">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="text-sm px-6 py-3 border-primary text-primary font-medium"
          >
            Chief AI Academy
          </Badge>
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-balance leading-[1.05]">
            AI Transformation for Executives
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance leading-tight">
            Systematic Approach to Real Results
          </p>
        </div>

        {/* Session Info */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-lg md:text-xl text-muted-foreground pt-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Interactive Session</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">75-85 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Clear Implementation Framework</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="pt-8">
          <img
            src="/generated-images/gemini-1762957041486-1.png"
            alt="Diverse business executives collaborating around a glowing holographic AI interface, representing innovation and teamwork in AI transformation"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        {/* Decorative Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
