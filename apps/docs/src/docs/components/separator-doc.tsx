import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Separator } from "fan-tokens"

export function SeparatorDoc() {
  return (
    <ComponentPage name="Separator" description="Visually or semantically separates content. A thin line that divides sections, menu items, or inline elements.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use as a visual divider between distinct sections of content." },
          { icon: "💡", text: "Helps users scan and understand content grouping without adding extra spacing." },
          { icon: "⚠️", text: "Prefer spacing or headings for separation when the boundary is already clear." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width horizontal separators. Avoid vertical separators in stacked layouts."
        desktop="Can use vertical separators in flex/inline layouts such as toolbars or breadcrumbs."
      />

      <DemoSection title="Horizontal">
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium">MCP UI</h4>
            <p className="text-sm text-muted-foreground">An open-source design system.</p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Getting Started</h4>
            <p className="text-sm text-muted-foreground">Install the package and import components.</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Vertical">
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Components</span>
          <Separator orientation="vertical" />
          <span>Tokens</span>
          <Separator orientation="vertical" />
          <span>Examples</span>
        </div>
      </DemoSection>

      <DemoSection title="With Content Between">
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Section One</h4>
            <p className="text-sm text-muted-foreground">Content for the first section goes here.</p>
          </div>
          <div className="relative my-6">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
              OR
            </span>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Section Two</h4>
            <p className="text-sm text-muted-foreground">Content for the second section goes here.</p>
          </div>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use to group related content and create clear visual boundaries.",
          "Use vertical orientation in horizontal flex layouts like toolbars and nav bars.",
          "Combine with spacing for a balanced, readable layout.",
        ]}
        donts={[
          "Overuse separators -- too many adds visual noise and clutter.",
          "Use instead of proper spacing or margin between elements.",
          "Place between every single item in a list -- let the list structure provide grouping.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--separator-color", value: "var(--border)", description: "Color of the separator line." },
          { name: "--separator-thickness", value: "1px", description: "Thickness of the separator line." },
        ]}
      />

      <CodeBlock>{`{/* Horizontal separator */}
<Separator />

{/* Vertical separator in a flex row */}
<div className="flex h-5 items-center gap-4">
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Components</span>
</div>

{/* Separator with centered label */}
<div className="relative my-6">
  <Separator />
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
    OR
  </span>
</div>`}</CodeBlock>
    </ComponentPage>
  )
}
