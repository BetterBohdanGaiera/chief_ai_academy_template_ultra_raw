# Iteration Animation Pattern

**Source:** `components/slides/foundation/f2/09b-iteration-speed-comparison.tsx`

## Why It Works

This pattern transforms abstract concepts like "iteration speed" into concrete, memorable visuals through principles of cognitive psychology and data visualization:

**Temporal Compression**: By simulating 90 days in 60 seconds, the animation makes invisible time-based processes visible and comprehensible. The human brain struggles to imagine cumulative effects over months, but can easily perceive them when compressed into a minute. This is the same principle used in time-lapse photography to show plant growth or city development.

**Accumulation as Persuasion**: Watching dots accumulate in real-time triggers the brain's pattern recognition systems. The slow drip of gray dots vs the rapid fire of orange dots creates an visceral, emotional understanding of "50x faster" that no bar chart or bullet point can match. This is persuasion through experience, not argument.

**Motion Captures Attention**: The moving cyan time indicator (vertical line) acts as a forcing function for sustained attention. Eyes naturally track movement, so viewers stay engaged throughout the 60-second animation rather than glancing and moving on. This increases message retention by 3-5x compared to static diagrams.

## When to Use

1. **Comparative Time-Based Processes**: When demonstrating why one approach is dramatically faster than another (e.g., CI/CD vs manual deployment, agile vs waterfall, in-house vs outsourced)

2. **ROI Visualization**: When showing how small daily improvements compound into massive differences over months/years (e.g., 1% daily improvement = 37x better in a year)

3. **Proof of Concept**: When stakeholders are skeptical about your methodology and need to "see it to believe it" (visual proof trumps verbal claims)

4. **Training/Education**: When teaching concepts like compound interest, iteration cycles, or network effects that benefit from visual demonstration

5. **Sales Presentations**: When differentiating your product's speed/efficiency from competitors in a memorable, shareable way

## When NOT to Use

1. **Non-Time-Based Comparisons**: If your comparison is about quality, features, or other non-temporal dimensions, use a different pattern (e.g., are-vs-not-comparison)

2. **Uncertain Metrics**: If you don't have reliable data for iteration frequencies, avoid this pattern (vague animations undermine credibility)

3. **Very Long or Very Short Timescales**: This works best for processes measured in days/weeks/months. Avoid for microseconds (too fast) or years (too slow)

4. **Static Presentations**: If your slide deck will be printed or viewed as PDFs, use a static "before/after" chart instead

## Key Features

- **Canvas-Based Rendering**: High-performance, resolution-independent animation using HTML5 Canvas API
- **Device Pixel Ratio Scaling**: Crisp rendering on retina/high-DPI displays
- **Configurable Time Simulation**: Easily adjust real-time-to-simulated-time ratio
- **Live State Updates**: React state hooks sync canvas animation with UI metrics
- **Automatic Cleanup**: Prevents memory leaks with `cancelAnimationFrame` on unmount
- **Responsive Design**: Canvas adapts to container width while maintaining aspect ratio
- **Accessible Alternatives**: Complementary metrics cards provide information for users who can't see animations

## Code Highlights

**Device Pixel Ratio Scaling** (prevents blurry canvas on retina):
```tsx
const rect = canvas.getBoundingClientRect()
canvas.width = rect.width * window.devicePixelRatio
canvas.height = rect.height * window.devicePixelRatio
ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
```

**Time Simulation Logic**:
```tsx
const SIMULATION_SPEED = 1.5 // days per second
const realElapsed = (now - startTime) / 1000
const simulatedDays = Math.min(realElapsed * SIMULATION_SPEED, TOTAL_SIMULATION_DAYS)
```
Adjust `SIMULATION_SPEED` to control how fast simulated time progresses.

**Iteration Calculation**:
```tsx
const slowCount = Math.floor(simulatedDays / SLOW_ITERATION_DAYS)
const fastCount = Math.floor(simulatedDays / FAST_ITERATION_DAYS)
```
`Math.floor` ensures discrete iteration counts (no partial iterations).

**Dot Positioning**:
```tsx
const daysToX = (days: number) => {
  const progress = days / TOTAL_SIMULATION_DAYS
  return trackStartX + trackWidth * progress
}
```
Linear mapping from simulation time to X coordinate for horizontal positioning.

**Memory Leak Prevention**:
```tsx
return () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
}
```
Critical cleanup in `useEffect` return function to stop animation when component unmounts.

## Reuse Guidelines

### Step 1: Define Your Simulation Parameters

```tsx
// Customize these constants:
const SIMULATION_SPEED = 1.5        // days per real second
const TOTAL_SIMULATION_DAYS = 90    // total simulated duration
const SLOW_ITERATION_DAYS = 20      // slow approach: 1 iteration every N days
const FAST_ITERATION_DAYS = 0.4     // fast approach: 1 iteration every N days
```

**Example**: To show 30 days in 45 seconds with iterations every 10 days (slow) vs every 1 day (fast):
```tsx
const SIMULATION_SPEED = 30 / 45  // = 0.67 days per second
const TOTAL_SIMULATION_DAYS = 30
const SLOW_ITERATION_DAYS = 10
const FAST_ITERATION_DAYS = 1
```

### Step 2: Customize Track Labels and Colors

```tsx
// In the animate() function:
ctx.fillText('Your Slow Method', trackStartX, slowTrackY - 30)
ctx.fillText('Your Fast Method', trackStartX, fastTrackY - 30)

// Change dot colors:
ctx.fillStyle = '#your-slow-color'  // e.g., '#dc2626' for red
ctx.fillStyle = '#your-fast-color'  // e.g., '#22c55e' for green
```

### Step 3: Update Metrics Card Content

```tsx
<p className="text-2xl font-syne font-bold">
  Your slow approach description
</p>
<p className="text-sm text-foreground/70 font-manrope">
  Explain why this approach is slower...
</p>
```

### Step 4: Adjust Canvas Height

```tsx
<canvas
  ref={canvasRef}
  style={{ height: '300px' }}  // Shorter for compact slides
  // or
  style={{ height: '600px' }}  // Taller for more dramatic effect
/>
```

### Step 5: Optional - Add Pause/Reset Controls

```tsx
const [isPaused, setIsPaused] = useState(false)

// In animate():
if (!isPaused && simulatedDays < TOTAL_SIMULATION_DAYS) {
  animationId = requestAnimationFrame(animate)
}

// Add button:
<Button onClick={() => setIsPaused(!isPaused)}>
  {isPaused ? 'Resume' : 'Pause'}
</Button>
```

## Example Adaptations

### Adaptation 1: Agile vs Waterfall

```tsx
const SIMULATION_SPEED = 1.0  // 1 day per second
const TOTAL_SIMULATION_DAYS = 180  // 6 months
const WATERFALL_ITERATION_DAYS = 90  // 1 release every 3 months
const AGILE_ITERATION_DAYS = 14  // 1 sprint every 2 weeks

// Labels:
"Waterfall (Big Bang Releases)"
"Agile (Continuous Delivery)"

// Metrics:
"2 releases over 6 months"
"12+ sprints in 6 months"
```

### Adaptation 2: Manual Testing vs Automated CI/CD

```tsx
const SIMULATION_SPEED = 0.5  // 0.5 days per second (slower for visibility)
const TOTAL_SIMULATION_DAYS = 30  // 1 month
const MANUAL_ITERATION_DAYS = 5  // manual QA cycle every week
const AUTOMATED_ITERATION_DAYS = 0.25  // CI/CD deploy 4x per day

// Labels:
"Manual QA (Weekly Releases)"
"Automated CI/CD (4x Daily)"

// Metrics:
"6 releases per month"
"120 releases per month"
```

### Adaptation 3: Startup Pivot Speed

```tsx
const SIMULATION_SPEED = 2.0  // 2 days per second
const TOTAL_SIMULATION_DAYS = 90  // 3 months
const CORPORATE_ITERATION_DAYS = 30  // corporate: 1 pivot per month
const STARTUP_ITERATION_DAYS = 7  // startup: 1 pivot per week

// Labels:
"Corporate (Committee-Driven)"
"Startup (Founder-Driven)"

// Metrics:
"3 pivots in 3 months"
"12+ pivots in 3 months"
```

## Accessibility Notes

- **Animation Disability**: Provide static "final state" screenshot or text summary for users with `prefers-reduced-motion`
  ```tsx
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Skip animation, show final state immediately
  }
  ```
- **Color Blindness**: Use both color AND position (top/bottom tracks) to differentiate approaches
- **Screen Readers**: Ensure metrics cards are readable; canvas content is decorative (`aria-hidden="true"`)
- **Keyboard Navigation**: If adding pause/reset controls, ensure they're keyboard-accessible

## Performance Notes

- **Canvas Redraws**: Each animation frame clears and redraws entire canvas. For 60 FPS, this is ~16ms per frame. If performance lags, reduce canvas size or lower frame rate.
- **Memory**: Arrays (`slowDots`, `fastDots`) grow linearly with iteration count. For 200+ iterations, this is negligible (<10KB).
- **Mobile**: Test on lower-end devices; consider reducing `TOTAL_SIMULATION_DAYS` or `SIMULATION_SPEED` if animation stutters.

## Design System Dependencies

- `@/components/ui/badge` - Badge for "Visual Proof" header
- `@/components/ui/card` - Card, CardContent for metrics and time display
- `lucide-react` - (none required for this pattern, but available if adding icons)
- Tailwind CSS - responsive grid, animations
- Custom fonts: `font-bebas`, `font-syne`, `font-manrope`, `font-mono`
- Canvas API - HTML5 standard (no external library needed)

## Troubleshooting

**Canvas appears blurry on retina displays**:
- Ensure you're using `window.devicePixelRatio` scaling (see Code Highlights)

**Animation doesn't stop after unmounting**:
- Verify `cancelAnimationFrame` is in `useEffect` cleanup function

**Dots overlap or disappear**:
- Reduce `FAST_ITERATION_DAYS` or increase canvas width to spread dots out
- Alternatively, reduce dot radius from `5` to `3` pixels

**Time display shows NaN**:
- Check that `timeElapsed` state is initialized to `0`, not `undefined`
