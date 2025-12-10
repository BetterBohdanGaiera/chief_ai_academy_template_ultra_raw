"use client"

/**
 * Interactive Slide Template
 *
 * Purpose: Reusable template for slides with user interaction, state management, and dynamic content
 *
 * Use Cases:
 * - Interactive demonstrations
 * - User-driven exploration
 * - Dynamic calculations
 * - Toggleable views
 * - Form-based interactions
 *
 * Key Features:
 * - Client-side state management (useState)
 * - Event handlers for user input
 * - Conditional rendering based on state
 * - Staggered entrance animations
 * - Responsive two-column layout
 * - Design system compliance
 *
 * How to Adapt:
 * 1. Replace placeholder content with your data
 * 2. Modify state interface to match your needs
 * 3. Update calculation logic in useMemo/useEffect
 * 4. Customize interactive elements (buttons, inputs, sliders)
 * 5. Adjust layout grid as needed
 */

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useMemo } from "react"
import { Sparkles, TrendingUp, Zap } from "lucide-react"

// Define your state interface
interface InteractiveState {
  activeView: "option1" | "option2"
  inputValue: number
  isExpanded: boolean
}

export default function InteractiveSlideTemplate() {
  // State management
  const [state, setState] = useState<InteractiveState>({
    activeView: "option1",
    inputValue: 50,
    isExpanded: false
  })

  // Computed values (use useMemo for expensive calculations)
  const calculatedMetric = useMemo(() => {
    // Replace with your calculation logic
    return state.inputValue * 2
  }, [state.inputValue])

  // Event handlers
  const handleToggleView = (view: "option1" | "option2") => {
    setState(prev => ({ ...prev, activeView: view }))
  }

  const handleSliderChange = (value: number) => {
    setState(prev => ({ ...prev, inputValue: value }))
  }

  const handleExpand = () => {
    setState(prev => ({ ...prev, isExpanded: !prev.isExpanded }))
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-8 lg:space-y-10">

        {/* Header Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="transform -rotate-1">
            <Sparkles className="h-5 w-5 mr-2" />
            Module XX: Interactive Topic
          </Badge>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            YOUR SLIDE TITLE
          </h2>

          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Subtitle explaining the interactive element
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="flex justify-center gap-3 animate-slide-in-up delay-200 fill-backwards">
          <Button
            variant={state.activeView === "option1" ? "default" : "outline"}
            onClick={() => handleToggleView("option1")}
            className="px-6"
          >
            Option 1
          </Button>
          <Button
            variant={state.activeView === "option2" ? "default" : "outline"}
            onClick={() => handleToggleView("option2")}
            className="px-6"
          >
            Option 2
          </Button>
        </div>

        {/* Two-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in delay-400 fill-backwards">

          {/* Left Column: Input/Controls */}
          <div className="space-y-6">
            <Card variant="glow">
              <CardContent className="p-6">
                <h3 className="font-syne text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Interactive Input
                </h3>

                {/* Slider Input Example */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-manrope text-sm font-medium">
                      Adjust Value
                    </label>
                    <span className="font-jetbrains text-lg font-bold text-primary">
                      {state.inputValue}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={state.inputValue}
                    onChange={(e) => handleSliderChange(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer
                             [&::-webkit-slider-thumb]:appearance-none
                             [&::-webkit-slider-thumb]:w-4
                             [&::-webkit-slider-thumb]:h-4
                             [&::-webkit-slider-thumb]:rounded-full
                             [&::-webkit-slider-thumb]:bg-primary
                             [&::-webkit-slider-thumb]:cursor-pointer
                             [&::-webkit-slider-thumb]:shadow-glow"
                  />

                  <p className="text-sm text-muted-foreground">
                    Move the slider to see live updates
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Conditional Detail Section */}
            {state.isExpanded && (
              <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in">
                <CardContent className="p-6">
                  <h4 className="font-syne text-lg font-bold mb-3">
                    Expanded Details
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Additional information revealed when expanded. This could be explanations,
                    warnings, recommendations, or any context that supports the main interaction.
                  </p>
                </CardContent>
              </Card>
            )}

            <Button
              variant="outline"
              onClick={handleExpand}
              className="w-full"
            >
              {state.isExpanded ? "Hide Details" : "Show Details"}
            </Button>
          </div>

          {/* Right Column: Results/Output */}
          <div className="space-y-6">
            <Card variant="layered">
              <CardContent className="p-6">
                <h3 className="font-syne text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Live Results
                </h3>

                {/* Conditional content based on activeView */}
                {state.activeView === "option1" ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Calculated Metric</p>
                      <p className="font-bebas text-5xl text-primary">{calculatedMetric}</p>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Option 1 explanation: This shows how your input affects the outcome
                      in scenario A.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Alternative Metric</p>
                      <p className="font-bebas text-5xl text-primary">{calculatedMetric / 2}</p>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Option 2 explanation: This shows a different calculation or perspective
                      based on the same input.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Summary or Call-to-Action */}
            <Card className="border-border/50 bg-muted/10">
              <CardContent className="p-6">
                <h4 className="font-syne text-lg font-bold mb-2">Key Insight</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based on your selections, here's what you should know:
                  [Dynamic summary based on state]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Optional: Bottom Summary or Next Steps */}
        <div className="text-center pt-8 animate-fade-in delay-600 fill-backwards">
          <p className="text-lg text-muted-foreground">
            Experiment with the controls to see how different inputs affect outcomes
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * CUSTOMIZATION GUIDE
 *
 * 1. Update State Interface:
 *    - Define properties that match your interaction needs
 *    - Add more fields if you have multiple inputs
 *
 * 2. Replace Calculation Logic:
 *    - Update useMemo to reflect your actual business logic
 *    - Add multiple computed values if needed
 *
 * 3. Customize Interactive Elements:
 *    - Replace slider with other inputs (dropdowns, checkboxes, text)
 *    - Add more toggle buttons for multi-option views
 *    - Include forms for complex user input
 *
 * 4. Adjust Layout:
 *    - Change grid to 3 columns for more content
 *    - Use single column for simpler interactions
 *    - Add more rows for extensive content
 *
 * 5. Enhance Animations:
 *    - Add transitions when state changes
 *    - Include loading states for async operations
 *    - Use canvas for advanced visualizations
 *
 * 6. Accessibility:
 *    - Ensure all inputs have labels
 *    - Add ARIA attributes for screen readers
 *    - Test keyboard navigation (Tab, Enter, Space)
 *    - Verify color contrast for all states
 */
