import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Textarea, Label } from "fan-tokens"

export function TextareaDoc() {
  return (
    <ComponentPage
      name="Textarea"
      description="A multi-line text input for collecting longer-form content such as comments, descriptions, and messages."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use Textarea whenever the expected input spans multiple lines -- comments, descriptions, feedback, etc." },
          { icon: "✅", text: "Always pair with a Label so users know what to enter." },
          { icon: "💡", text: "Set an appropriate rows value to hint at the expected length of content." },
          { icon: "⚠️", text: "For single-line values (email, name, URL), use Input instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width with a minimum of 3 visible rows. Avoid fixed heights -- let the field stretch to the viewport width."
        desktop="Constrain width with max-w-lg or a grid column. Increase default rows to 5+ so the field feels spacious."
      />

      <DemoSection title="Default">
        <Textarea placeholder="Type your message here..." className="max-w-lg" />
      </DemoSection>

      <DemoSection title="With Label">
        <div className="grid w-full max-w-lg gap-1.5">
          <Label htmlFor="textarea-demo-msg">Your message</Label>
          <Textarea id="textarea-demo-msg" placeholder="Write something..." />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="grid w-full max-w-lg gap-1.5">
          <Label htmlFor="textarea-demo-disabled" className="opacity-50">
            Notes
          </Label>
          <Textarea
            id="textarea-demo-disabled"
            placeholder="This field is disabled"
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Auto-resize Hint">
        <div className="grid w-full max-w-lg gap-1.5">
          <Label htmlFor="textarea-demo-auto">Bio</Label>
          <Textarea
            id="textarea-demo-auto"
            placeholder="Tell us about yourself..."
            rows={2}
            className="resize-y min-h-[80px]"
          />
          <p className="text-xs text-muted-foreground">
            Drag the bottom-right handle or use <code className="rounded bg-muted px-1 py-0.5 text-[11px] font-mono">resize-y</code> to allow vertical resizing.
          </p>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Set an appropriate rows count that reflects the expected content length.",
          "Always pair with a Label for accessibility.",
          "Add a maxLength attribute on user-facing forms to prevent unbounded input.",
        ]}
        donts={[
          "Use Textarea for single-line input -- use Input instead.",
          "Leave user-facing textareas without a max-length constraint.",
          "Hide the resize handle when users may need to enter variable-length content.",
        ]}
      />

      <TokensReference
        tokens={[
          {
            name: "--textarea-radius",
            value: "var(--radius-md)",
            description: "Border radius for the textarea container.",
          },
          {
            name: "--textarea-padding-x",
            value: "0.75rem",
            description: "Horizontal padding inside the textarea.",
          },
          {
            name: "--textarea-padding-y",
            value: "0.5rem",
            description: "Vertical padding inside the textarea.",
          },
          {
            name: "--textarea-font-size",
            value: "var(--text-sm)",
            description: "Font size for textarea content.",
          },
          {
            name: "--textarea-border-color",
            value: "var(--input)",
            description: "Default border color in rest state.",
          },
          {
            name: "--textarea-bg",
            value: "var(--background)",
            description: "Background color of the textarea.",
          },
          {
            name: "--textarea-shadow",
            value: "var(--shadow-sm)",
            description: "Subtle box shadow for depth.",
          },
          {
            name: "--focus-ring-width",
            value: "2px",
            description: "Width of the focus ring applied on :focus-visible.",
          },
        ]}
      />

      <CodeBlock>{`import { Textarea, Label } from "fan-tokens"

{/* Basic */}
<Textarea placeholder="Type your message here..." />

{/* With Label */}
<Label htmlFor="msg">Your message</Label>
<Textarea id="msg" placeholder="Write something..." />

{/* Auto-resize hint */}
<Textarea rows={2} className="resize-y min-h-[80px]" />`}</CodeBlock>
    </ComponentPage>
  )
}
