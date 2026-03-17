import { useState } from "react"
import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from "fan-tokens"

export function CollapsibleDoc() {
  const [open, setOpen] = useState(false)

  return (
    <ComponentPage name="Collapsible" description="An interactive component that expands and collapses a content panel with smooth animation.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for show/hide content sections where users may not need the content immediately." },
          { icon: "✅", text: "Great for secondary or optional information that reduces visual clutter when hidden." },
          { icon: "💡", text: "Pair with a clear trigger label so users know what will be revealed." },
          { icon: "⚠️", text: "For multiple collapsible sections, prefer Accordion which manages open state across items." },
        ]}
      />

      <BreakpointInfo
        mobile="Collapsible sections are excellent on mobile for reducing content density and keeping pages scannable."
        desktop="On desktop, consider starting collapsible sections expanded by default since more screen real estate is available."
      />

      <DemoSection title="Basic Collapsible with Trigger">
        <Collapsible open={open} onOpenChange={setOpen} className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                )}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border border-border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border border-border px-4 py-2 font-mono text-sm shadow-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border border-border px-4 py-2 font-mono text-sm shadow-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for optional or secondary content that users can explore on demand.",
          "Provide a clear, descriptive trigger label or icon indicating the expand/collapse action.",
          "Animate the transition for a polished user experience.",
        ]}
        donts={[
          "Hide critical information that users need to see immediately inside a Collapsible.",
          "Use Collapsible instead of Accordion when managing multiple expandable sections -- Accordion handles mutual exclusion.",
          "Nest collapsibles deeply -- it creates confusing interaction patterns.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "border", value: "var(--border)", description: "Border color for collapsible content containers." },
          { name: "shadow-sm", value: "0 1px 2px rgba(0,0,0,0.05)", description: "Subtle shadow for content items." },
          { name: "transition", value: "height 200ms ease", description: "Animation timing for expand/collapse." },
        ]}
      />

      <CodeBlock>{`import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from "fan-tokens"

const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  <div className="flex items-center justify-between">
    <h4>Section title</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm">Toggle</Button>
    </CollapsibleTrigger>
  </div>
  <div>Always visible content</div>
  <CollapsibleContent>
    <div>Hidden content revealed on expand</div>
    <div>More hidden content</div>
  </CollapsibleContent>
</Collapsible>`}</CodeBlock>
    </ComponentPage>
  )
}
