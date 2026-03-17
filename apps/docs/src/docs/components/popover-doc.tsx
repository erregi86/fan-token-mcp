import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Popover, PopoverTrigger, PopoverContent, Button, Input, Label } from "fan-tokens"

export function PopoverDoc() {
  return (
    <ComponentPage name="Popover" description="Displays rich content in a portal, triggered by a button.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use popovers to display rich floating content such as settings panels, date pickers, or form controls." },
          { icon: "💡", text: "Ideal when the content is more interactive or complex than what a tooltip can convey." },
          { icon: "⚠️", text: "Popovers are dismissed by clicking outside or pressing Escape. Do not use for critical confirmations." },
        ]}
      />

      <BreakpointInfo
        mobile="Consider full-width popovers or bottom sheet patterns to maximize usable space on small screens."
        desktop="Positioned near the trigger element. Supports configurable alignment and side offset."
      />

      <DemoSection title="Basic Popover">
        <Popover>
          <PopoverTrigger><Button variant="outline">Open popover</Button></PopoverTrigger>
          <PopoverContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label>Width</Label>
                  <Input className="col-span-2 h-8" defaultValue="100%" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label>Height</Label>
                  <Input className="col-span-2 h-8" defaultValue="25px" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for interactive content that is more complex than a tooltip (forms, settings, pickers).",
          "Provide a clear trigger element so users know where the popover originates.",
          "Keep popover content focused on a single task or related set of controls.",
        ]}
        donts={[
          "Use for simple text-only information — use a Tooltip instead.",
          "Use for critical actions that require confirmation — use a Dialog instead.",
          "Nest popovers inside other popovers; this creates confusing interaction layers.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--popover-radius", value: "0.5rem", description: "Border radius of the popover container." },
          { name: "--popover-padding", value: "1rem", description: "Internal padding of the popover content area." },
          { name: "--popover-shadow", value: "0 4px 6px -1px rgba(0,0,0,0.1)", description: "Box shadow applied to the popover." },
          { name: "--popover-bg", value: "var(--popover)", description: "Background color of the popover surface." },
          { name: "--popover-fg", value: "var(--popover-foreground)", description: "Text color inside the popover." },
          { name: "--popover-border-color", value: "var(--border)", description: "Border color of the popover container." },
        ]}
      />

      <CodeBlock>{`<Popover>
  <PopoverTrigger>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Settings</h4>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label>Width</Label>
        <Input className="col-span-2 h-8" defaultValue="100%" />
      </div>
    </div>
  </PopoverContent>
</Popover>`}</CodeBlock>
    </ComponentPage>
  )
}
