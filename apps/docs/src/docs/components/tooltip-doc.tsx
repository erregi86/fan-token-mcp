import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Tooltip, Button } from "fan-tokens"

export function TooltipDoc() {
  return (
    <ComponentPage
      name="Tooltip"
      description="A popup that displays supplementary information related to an element when the user hovers over or focuses it."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use tooltips to provide supplementary information on hover, such as labels for icon-only buttons." },
          { icon: "⚠️", text: "Never place essential information inside a tooltip — it is inaccessible on touch devices." },
          { icon: "✅", text: "Keep tooltip text brief: one short sentence or a few words at most." },
        ]}
      />

      <BreakpointInfo
        mobile="Tooltips do not work well on touch devices. Use visible labels or descriptions as alternatives."
        desktop="Hover-triggered tooltips work well here. Especially useful for icon-only buttons and toolbar actions."
      />

      <DemoSection title="Default">
        <Tooltip content="Add to library">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
      </DemoSection>

      <DemoSection title="Different Positions">
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Top tooltip" position="top">
            <Button variant="outline">Top</Button>
          </Tooltip>
          <Tooltip content="Bottom tooltip" position="bottom">
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left tooltip" position="left">
            <Button variant="outline">Left</Button>
          </Tooltip>
          <Tooltip content="Right tooltip" position="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for icon-only button labels to provide accessible names.",
          "Keep text brief — a few words or one short sentence.",
          "Use for supplementary, non-essential information.",
        ]}
        donts={[
          "Put essential information in tooltips — it is not accessible on mobile or for keyboard-only users without focus support.",
          "Use for complex or interactive content — use a Popover instead.",
          "Add tooltips to elements that already have visible, descriptive labels.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--tooltip-bg", value: "var(--primary)", description: "Background color of the tooltip." },
          { name: "--tooltip-fg", value: "var(--primary-foreground)", description: "Text color inside the tooltip." },
          { name: "--tooltip-radius", value: "var(--radius)", description: "Border radius of the tooltip container." },
          { name: "--tooltip-padding-x", value: "0.75rem", description: "Horizontal padding inside the tooltip." },
          { name: "--tooltip-padding-y", value: "0.375rem", description: "Vertical padding inside the tooltip." },
          { name: "--tooltip-font-size", value: "0.75rem", description: "Font size of the tooltip text." },
        ]}
      />

      <CodeBlock>{`import { Tooltip, Button } from "fan-tokens"

{/* Basic tooltip */}
<Tooltip content="Add to library">
  <Button variant="outline">Hover me</Button>
</Tooltip>

{/* Tooltip with position */}
<Tooltip content="Bottom tooltip" position="bottom">
  <Button variant="outline">Bottom</Button>
</Tooltip>`}</CodeBlock>
    </ComponentPage>
  )
}
