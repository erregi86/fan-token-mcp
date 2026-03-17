import { useState } from "react"
import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Slider } from "fan-tokens"

export function SliderDoc() {
  const [defaultVal, setDefaultVal] = useState([33])
  const [rangeVal, setRangeVal] = useState([25])

  return (
    <ComponentPage
      name="Slider"
      description="An input where the user selects a value from within a given range. Ideal for numeric ranges like volume, price filters, and configuration values."
    >
      {/* Usage Guidelines */}
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use Slider for selecting numeric values within a continuous range (volume, brightness, price filters)." },
          { icon: "✅", text: "Always display the current value so users have precise feedback on their selection." },
          { icon: "💡", text: "Set sensible min, max, and step values that match the domain (e.g., step=5 for percentages, step=100 for price)." },
          { icon: "⚠️", text: "For precise numeric input, use an Input with type='number' instead -- sliders are imprecise by nature." },
        ]}
      />

      {/* Responsive breakpoints */}
      <DemoSection title="Responsive Behavior">
        <BreakpointInfo
          mobile="Full-width slider track. Increase thumb size for comfortable touch targets (minimum 44x44px hit area). Consider showing value in a tooltip above the thumb."
          desktop="Constrained width (max-w-sm or max-w-md). Standard thumb size. Can display value inline next to the slider."
        />
      </DemoSection>

      {/* Default */}
      <DemoSection title="Default">
        <div className="max-w-sm">
          <Slider value={defaultVal} onValueChange={setDefaultVal} max={100} step={1} />
          <p className="mt-3 text-sm text-muted-foreground">Value: {defaultVal[0]}</p>
        </div>
      </DemoSection>

      {/* With min/max/step */}
      <DemoSection title="With Min / Max / Step">
        <div className="max-w-sm">
          <Slider
            value={rangeVal}
            onValueChange={setRangeVal}
            min={0}
            max={100}
            step={5}
          />
          <p className="mt-3 text-sm text-muted-foreground">
            Value: {rangeVal[0]} (min: 0, max: 100, step: 5)
          </p>
        </div>
      </DemoSection>

      {/* Disabled */}
      <DemoSection title="Disabled">
        <div className="max-w-sm">
          <Slider value={[50]} max={100} step={1} disabled />
          <p className="mt-3 text-sm text-muted-foreground">Disabled at 50</p>
        </div>
      </DemoSection>

      {/* Dos and Don'ts */}
      <DosAndDonts
        dos={[
          "Show the current value alongside the slider so users know the exact number they have selected.",
          "Set sensible min, max, and step values that match your domain -- avoid overly granular ranges.",
          "Use full-width sliders on mobile for easier thumb targeting.",
          "Pair with a Label component to describe what the slider controls.",
        ]}
        donts={[
          "Don't use a slider for precise number input -- use an Input with type='number' for exact values.",
          "Don't set a step of 1 on a range of 0-10000 -- the slider becomes too sensitive to small movements.",
          "Don't hide the current value -- users need feedback on where the thumb is positioned.",
          "Don't use sliders for non-numeric selections -- use Select or RadioGroup instead.",
        ]}
      />

      {/* Token reference */}
      <TokensReference
        tokens={[
          { name: "--slider-track-height", value: "0.5rem", description: "Height of the slider track" },
          { name: "--slider-track-bg", value: "var(--secondary)", description: "Background color of the unfilled track" },
          { name: "--slider-range-bg", value: "var(--primary)", description: "Background color of the filled range" },
          { name: "--slider-thumb-size", value: "1.25rem", description: "Width and height of the thumb" },
          { name: "--slider-thumb-bg", value: "var(--background)", description: "Background color of the thumb" },
          { name: "--slider-thumb-border-color", value: "var(--primary)", description: "Border color of the thumb" },
          { name: "--focus-ring-width", value: "2px", description: "Focus ring thickness for keyboard navigation" },
        ]}
      />

      <CodeBlock>{`import { Slider } from "fan-tokens"

{/* Basic slider */}
<Slider value={[33]} onValueChange={setVal} max={100} step={1} />

{/* With custom range and step */}
<Slider value={[25]} onValueChange={setVal} min={0} max={100} step={5} />

{/* Full-width on mobile */}
<div className="w-full sm:max-w-sm">
  <Slider value={val} onValueChange={setVal} max={100} step={1} />
  <p className="mt-2 text-sm text-muted-foreground">Value: {val[0]}</p>
</div>

{/* Disabled */}
<Slider value={[50]} max={100} step={1} disabled />`}</CodeBlock>
    </ComponentPage>
  )
}
