import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Input, Label } from "fan-tokens"

export function InputDoc() {
  return (
    <ComponentPage
      name="Input"
      description="A form input field that allows users to enter text, numbers, emails, and other data. Built on the native HTML input element with consistent styling and accessibility defaults."
    >
      {/* ── Usage Guidelines ── */}
      <UsageGuidelines
        guidelines={[
          {
            icon: "💡",
            text: "Use Input for single-line text entry such as names, emails, URLs, and search queries. For multi-line content, use Textarea instead.",
          },
          {
            icon: "✅",
            text: "Always pair an Input with a visible Label component. This ensures screen readers can announce the field's purpose.",
          },
          {
            icon: "✅",
            text: "Set the correct type attribute (email, password, url, tel, number) so mobile keyboards and browser autofill work properly.",
          },
          {
            icon: "⚠️",
            text: "Placeholder text disappears on focus and should never be the only way to communicate what the field expects. Use it for hints or examples only.",
          },
          {
            icon: "📱",
            text: "On mobile, inputs expand to full width automatically. Ensure touch targets meet the 44px minimum by keeping the default height.",
          },
        ]}
      />

      {/* ── Responsive Behavior ── */}
      <BreakpointInfo
        mobile="Inputs stretch to full width (w-full) with larger touch targets for comfortable thumb interaction. Avoid side-by-side input layouts on narrow viewports."
        desktop="Constrain input width with max-w-sm or a grid layout to maintain readable line lengths and a clean form structure."
      />

      {/* ── Demo: Default ── */}
      <DemoSection title="Default">
        <Input placeholder="Email" type="email" className="max-w-sm" />
      </DemoSection>

      {/* ── Demo: With Label ── */}
      <DemoSection title="With Label">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="email-demo">Email</Label>
          <Input
            id="email-demo"
            type="email"
            placeholder="you@example.com"
          />
        </div>
      </DemoSection>

      {/* ── Demo: File Input ── */}
      <DemoSection title="File Input">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="file-demo">Upload document</Label>
          <Input id="file-demo" type="file" />
        </div>
      </DemoSection>

      {/* ── Demo: Disabled ── */}
      <DemoSection title="Disabled">
        <Input
          disabled
          placeholder="Disabled input"
          className="max-w-sm"
        />
      </DemoSection>

      {/* ── Demo: With Helper Text ── */}
      <DemoSection title="With Helper Text">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="username-demo">Username</Label>
          <Input
            id="username-demo"
            type="text"
            placeholder="acme_user"
          />
          <p className="text-sm text-muted-foreground">
            Your unique display name. Only letters, numbers, and underscores.
          </p>
        </div>
      </DemoSection>

      {/* ── Dos and Don'ts ── */}
      <DosAndDonts
        dos={[
          "Always pair Input with a Label so screen readers announce the field purpose.",
          "Use placeholder text as a hint or example value (e.g. \"you@example.com\").",
          "Use the correct type attribute (email, password, url, tel, number) for built-in validation and mobile keyboard optimization.",
          "Provide visible error messages below the input when validation fails.",
          "Set autocomplete attributes for common fields (name, email, address) to speed up form filling.",
        ]}
        donts={[
          "Use placeholder text as a replacement for a label -- it disappears on focus and fails accessibility audits.",
          "Omit error states -- users need clear feedback when input is invalid.",
          "Use type=\"text\" for everything -- specialized types improve UX and accessibility.",
          "Rely solely on color to indicate input state -- add icons or text for color-blind users.",
          "Disable browser autofill without a strong reason -- it frustrates users.",
        ]}
      />

      {/* ── Tokens Reference ── */}
      <TokensReference
        tokens={[
          {
            name: "--input-height",
            value: "2.25rem",
            description: "Default height of the input field (36px). Ensures a comfortable click/tap target.",
          },
          {
            name: "--input-radius",
            value: "var(--radius-md)",
            description: "Border radius applied to the input corners.",
          },
          {
            name: "--input-padding-x",
            value: "0.75rem",
            description: "Horizontal padding inside the input field.",
          },
          {
            name: "--input-font-size",
            value: "var(--text-sm)",
            description: "Font size of the input text (typically 14px).",
          },
          {
            name: "--input-border-color",
            value: "var(--input)",
            description: "Border color in the default (resting) state.",
          },
          {
            name: "--input-bg",
            value: "transparent",
            description: "Background color of the input. Transparent by default to inherit the surface color.",
          },
          {
            name: "--input-placeholder-color",
            value: "var(--muted-foreground)",
            description: "Color of placeholder text, intentionally muted to distinguish it from user-entered values.",
          },
          {
            name: "--input-shadow",
            value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            description: "Subtle shadow applied to the input for depth. Can be set to none for flat designs.",
          },
          {
            name: "--focus-ring-width",
            value: "2px",
            description: "Width of the focus ring shown when the input is focused via keyboard or click.",
          },
          {
            name: "--focus-ring-color",
            value: "var(--ring)",
            description: "Color of the focus ring. Uses the global ring token for consistency across all focusable elements.",
          },
        ]}
      />

      {/* ── Code Examples ── */}
      <CodeBlock>
        {`import { Input, Label } from "fan-tokens"

{/* Basic input */}
<Input type="email" placeholder="Email" />

{/* With label and helper text */}
<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <p className="text-sm text-muted-foreground">
    We'll never share your email.
  </p>
</div>

{/* File input */}
<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="resume">Resume</Label>
  <Input id="resume" type="file" />
</div>

{/* Disabled */}
<Input disabled placeholder="Cannot edit" />

{/* Controlled input */}
const [value, setValue] = React.useState("")
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled"
/>`}
      </CodeBlock>
    </ComponentPage>
  )
}
