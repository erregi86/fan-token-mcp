import { useState, useEffect } from "react"
import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Progress } from "fan-tokens"

export function ProgressDoc() {
  const [value, setValue] = useState(13)
  useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ComponentPage
      name="Progress"
      description="Displays an indicator showing the completion progress of a task, such as file uploads or step completion."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for determinate progress such as file uploads, form steps, or download progress." },
          { icon: "✅", text: "Show a percentage or step count alongside the bar for clarity." },
          { icon: "💡", text: "Animate the transition between values for a smooth experience." },
          { icon: "⚠️", text: "Do not use for indeterminate loading -- use Skeleton or a spinner instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Use full-width progress bars that span the container for visibility on small screens."
        desktop="Constrain width (e.g., max-w-md) to keep the bar proportional within wider layouts."
      />

      <DemoSection title="Default">
        <div className="max-w-md">
          <Progress value={value} />
          <p className="mt-2 text-sm text-muted-foreground">{value}%</p>
        </div>
      </DemoSection>

      <DemoSection title="Different Values">
        <div className="max-w-md space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-muted-foreground">25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-muted-foreground">50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-muted-foreground">100% -- Complete</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Show a percentage or step count alongside the progress bar.",
          "Use for operations where completion can be measured (uploads, multi-step forms).",
          "Animate value changes for a smooth visual transition.",
          "Use descriptive labels so users understand what is progressing.",
        ]}
        donts={[
          "Use for indeterminate loading states -- use Skeleton or a spinner instead.",
          "Leave the progress bar without context (no label or percentage).",
          "Set values above 100 or below 0.",
          "Use multiple progress bars in close proximity without clear labels.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--progress-height", value: "8px", description: "Height of the progress bar track." },
          { name: "--progress-radius", value: "9999px", description: "Border radius of the track and indicator." },
          { name: "--progress-bg", value: "var(--muted)", description: "Background color of the track." },
          { name: "--progress-indicator-bg", value: "var(--primary)", description: "Background color of the filled indicator." },
        ]}
      />

      <CodeBlock>{`import { Progress } from "fan-tokens"

{/* Basic usage */}
<Progress value={33} />

{/* With label */}
<div>
  <div className="flex justify-between mb-1">
    <span className="text-sm">Uploading...</span>
    <span className="text-sm text-muted-foreground">66%</span>
  </div>
  <Progress value={66} />
</div>

{/* Full width on mobile, constrained on desktop */}
<Progress value={50} className="w-full md:max-w-md" />`}</CodeBlock>
    </ComponentPage>
  )
}
