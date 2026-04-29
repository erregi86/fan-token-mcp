import { useState } from "react"
import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { RadioGroup, RadioGroupItem, Label } from "fan-tokens"

export function RadioGroupDoc() {
  const [defaultValue, setDefaultValue] = useState("comfortable")
  const [labelValue, setLabelValue] = useState("medium")
  const [horizontalValue, setHorizontalValue] = useState("left")

  return (
    <ComponentPage
      name="Radio Group"
      description="A set of checkable buttons where no more than one can be checked at a time. Use when all options should be visible and the user must select exactly one."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for single-select scenarios with 2 to 5 options that should all be visible at once." },
          { icon: "✅", text: "Ideal when the user needs to compare options before making a selection." },
          { icon: "💡", text: "If you have more than 5 options, consider using a Select dropdown to save space." },
          { icon: "💡", text: "Always provide a default selection when one option is clearly the most common or recommended choice." },
          { icon: "⚠️", text: "Do not use for multi-select scenarios -- use Checkbox groups instead." },
        ]}
      />

      <DemoSection title="Responsive Behavior">
        <BreakpointInfo
          mobile="Display options in a vertical list with larger spacing between items for comfortable touch interaction."
          desktop="Can use a horizontal layout for 2-3 options. For 4+ options, prefer a vertical list or grid."
        />
      </DemoSection>

      <DemoSection title="Default">
        <RadioGroup value={defaultValue} onValueChange={setDefaultValue}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" />
            <Label>Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" />
            <Label>Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" />
            <Label>Compact</Label>
          </div>
        </RadioGroup>
        <p className="mt-3 text-sm text-muted-foreground">Selected: {defaultValue}</p>
      </DemoSection>

      <DemoSection title="With Labels">
        <RadioGroup value={labelValue} onValueChange={setLabelValue}>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <RadioGroupItem value="small" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label>Small</Label>
                <p className="text-sm text-muted-foreground">Best for compact interfaces</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RadioGroupItem value="medium" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label>Medium</Label>
                <p className="text-sm text-muted-foreground">Recommended for most use cases</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RadioGroupItem value="large" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label>Large</Label>
                <p className="text-sm text-muted-foreground">Best for touch-heavy interfaces</p>
              </div>
            </div>
          </div>
        </RadioGroup>
      </DemoSection>

      <DemoSection title="Horizontal Layout">
        <RadioGroup
          value={horizontalValue}
          onValueChange={setHorizontalValue}
          className="flex gap-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="left" />
            <Label>Left</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="center" />
            <Label>Center</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="right" />
            <Label>Right</Label>
          </div>
        </RadioGroup>
      </DemoSection>

      <DemoSection title="Disabled">
        <RadioGroup value="option-1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-1" disabled />
            <Label className="text-muted-foreground">Option 1 (disabled)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-2" disabled />
            <Label className="text-muted-foreground">Option 2 (disabled)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-3" disabled />
            <Label className="text-muted-foreground">Option 3 (disabled)</Label>
          </div>
        </RadioGroup>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use when all options need to be visible and comparable at a glance.",
          "Use for groups of 2 to 5 mutually exclusive options.",
          "Provide a sensible default selection when one option is clearly the most common.",
          "Use clear, concise labels that differentiate each option.",
        ]}
        donts={[
          "Use for more than 5 options -- use a Select dropdown instead to save space.",
          "Use for multi-select scenarios -- use Checkbox groups instead.",
          "Use without labels, as the radio buttons alone do not convey meaning.",
          "Mix radio buttons from different groups in the same visual list.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--radio-size", value: "1rem", description: "Width and height of the radio button circle." },
          { name: "--radio-dot-size", value: "0.5rem", description: "Diameter of the inner dot when selected." },
          { name: "--radio-border-color", value: "var(--primary)", description: "Border color of the radio button in its default state." },
          { name: "--radio-bg", value: "var(--primary)", description: "Background color of the radio button when checked." },
          { name: "--focus-ring-width", value: "2px", description: "Width of the focus ring shown on keyboard navigation." },
        ]}
      />

      <CodeBlock>{`import { RadioGroup, RadioGroupItem, Label } from "fan-tokens"

// Basic usage
<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" />
    <Label>Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" />
    <Label>Option 2</Label>
  </div>
</RadioGroup>

// Horizontal layout
<RadioGroup value={value} onValueChange={setValue} className="flex gap-4">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="left" />
    <Label>Left</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="right" />
    <Label>Right</Label>
  </div>
</RadioGroup>

// Disabled
<RadioGroup value="option-1">
  <RadioGroupItem value="option-1" disabled />
  <RadioGroupItem value="option-2" disabled />
</RadioGroup>`}</CodeBlock>
    </ComponentPage>
  )
}
