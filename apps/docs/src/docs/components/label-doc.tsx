import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Label, Input } from "fan-tokens"

export function LabelDoc() {
  return (
    <ComponentPage
      name="Label"
      description="Renders an accessible label associated with form controls. Built on a native <label> element for correct semantics and click-to-focus behavior."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Always pair a Label with a form control (Input, Textarea, Select, Checkbox, etc.)." },
          { icon: "✅", text: "Use the htmlFor prop matching the input's id attribute to ensure screen readers announce the label correctly." },
          { icon: "💡", text: "Clicking a properly associated Label will focus or toggle the linked control -- no extra JS required." },
          { icon: "⚠️", text: "Never rely on placeholder text as a substitute for a visible Label." },
        ]}
      />

      <BreakpointInfo
        mobile="Stack the label above the input for a single-column layout. Full-width labels improve tap-target clarity."
        desktop="Can use a side-by-side (horizontal) layout with the label to the left and the input to the right."
      />

      <DemoSection title="Default">
        <Label>Email address</Label>
      </DemoSection>

      <DemoSection title="With Input">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="label-demo-email">Email</Label>
          <Input type="email" id="label-demo-email" placeholder="you@example.com" />
        </div>
      </DemoSection>

      <DemoSection title="Required Indicator">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="label-demo-required">
            Full name <span className="text-destructive">*</span>
          </Label>
          <Input id="label-demo-required" placeholder="Jane Doe" />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="label-demo-disabled" className="opacity-50">
            Username
          </Label>
          <Input id="label-demo-disabled" placeholder="disabled" disabled />
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Always set htmlFor to match the associated input's id.",
          "Keep label text concise -- one to three words is ideal.",
          "Add a visible required indicator (e.g. asterisk) for mandatory fields.",
        ]}
        donts={[
          "Skip labels for fields you think are \"obvious\" (e.g. search, email).",
          "Use placeholder text as a replacement for a label.",
          "Wrap interactive elements (buttons, links) inside a Label.",
        ]}
      />

      <TokensReference
        tokens={[
          {
            name: "--label-font-size",
            value: "var(--text-sm)",
            description: "Font size of the label text.",
          },
          {
            name: "--label-font-weight",
            value: "500",
            description: "Medium weight for clear visual hierarchy against input text.",
          },
          {
            name: "--label-line-height",
            value: "1.25rem",
            description: "Line height ensuring consistent vertical rhythm with adjacent controls.",
          },
        ]}
      />

      <CodeBlock>{`import { Label, Input } from "fan-tokens"

{/* Basic usage */}
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />

{/* Required indicator */}
<Label htmlFor="name">
  Full name <span className="text-destructive">*</span>
</Label>
<Input id="name" placeholder="Jane Doe" />`}</CodeBlock>
    </ComponentPage>
  )
}
