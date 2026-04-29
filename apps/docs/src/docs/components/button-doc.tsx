import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, VariantGuide, DosAndDonts, TokensReference } from "../docs-layout"
import { Button } from "fan-tokens"

export function ButtonDoc() {
  return (
    <ComponentPage
      name="Button"
      description="Displays a button or a component that looks like a button. Use buttons for primary actions, form submissions, and interactive triggers."
    >
      {/* Usage Guidelines */}
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use buttons for actions that change state, submit data, or trigger workflows." },
          { icon: "✅", text: "Pair with clear, action-oriented labels: 'Save changes', 'Delete item', 'Send message'." },
          { icon: "💡", text: "Limit primary buttons to one per visible area to maintain visual hierarchy." },
          { icon: "⚠️", text: "Avoid using buttons for navigation — use links or NavigationMenu instead." },
        ]}
      />

      {/* Responsive breakpoints */}
      <DemoSection title="Responsive Behavior">
        <BreakpointInfo
          mobile="Use full-width buttons (w-full) for touch targets. Stack buttons vertically with gap-2. Minimum touch target: 44×44px (size 'default' or 'lg')."
          desktop="Use inline buttons with natural width. Place primary actions on the right side of button groups. Use size 'sm' for dense UIs (tables, toolbars)."
        />
        <div className="mt-4 space-y-3">
          <p className="text-xs font-medium text-muted-foreground">Mobile layout (stacked, full-width):</p>
          <div className="flex flex-col gap-2 max-w-xs">
            <Button className="w-full">Confirm order</Button>
            <Button variant="outline" className="w-full">Cancel</Button>
          </div>
          <p className="text-xs font-medium text-muted-foreground mt-4">Desktop layout (inline, right-aligned):</p>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Confirm order</Button>
          </div>
        </div>
      </DemoSection>

      {/* Variants */}
      <DemoSection title="Variants">
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </DemoSection>

      <VariantGuide
        variants={[
          { name: "default", when: "Primary actions — the most important action on the page. E.g., 'Save', 'Submit', 'Create'. Only one per section." },
          { name: "secondary", when: "Supporting actions that are important but not primary. E.g., 'Export', 'Duplicate'. Works alongside primary buttons." },
          { name: "destructive", when: "Dangerous or irreversible actions — 'Delete', 'Remove', 'Revoke'. Usually placed in confirmation dialogs." },
          { name: "outline", when: "Secondary or cancel actions that need a visible boundary. E.g., 'Cancel', 'Back'. Lower visual weight than default." },
          { name: "ghost", when: "Tertiary actions in toolbars, sidebars, or table rows. No background, minimal visual weight. E.g., icon buttons, 'Edit', 'More'." },
          { name: "link", when: "Actions that look like links — 'Learn more', 'View details'. Renders inline with text, no padding." },
        ]}
      />

      {/* Sizes */}
      <DemoSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          <strong>sm:</strong> Dense UIs, table rows, toolbars · <strong>default:</strong> Forms, dialogs, standard pages · <strong>lg:</strong> Hero CTAs, marketing pages · <strong>icon:</strong> Icon-only actions (always add aria-label)
        </p>
      </DemoSection>

      {/* With icon */}
      <DemoSection title="With Icon">
        <div className="flex flex-wrap gap-3">
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Add item
          </Button>
          <Button variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download
          </Button>
        </div>
      </DemoSection>

      {/* Disabled */}
      <DemoSection title="Disabled">
        <div className="flex gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </div>
      </DemoSection>

      {/* Dos and Don'ts */}
      <DosAndDonts
        dos={[
          "Use one primary (default) button per visible section to create clear hierarchy.",
          "Use action verbs for labels: 'Save changes', 'Send invite', 'Delete account'.",
          "Use full-width buttons on mobile for better touch targets.",
          "Pair destructive buttons with a confirmation dialog (AlertDialog).",
          "Add aria-label to icon-only buttons for accessibility.",
        ]}
        donts={[
          "Don't use multiple primary buttons in the same section — use secondary/outline for others.",
          "Don't use vague labels like 'Click here', 'OK', or 'Submit' — be specific about the action.",
          "Don't use destructive variant for non-destructive actions.",
          "Don't use ghost variant for primary actions — it's too subtle for important flows.",
          "Don't disable buttons without explaining why (use a tooltip or helper text).",
        ]}
      />

      {/* Token reference */}
      <TokensReference
        tokens={[
          { name: "--button-height", value: "2.25rem", description: "Default button height" },
          { name: "--button-padding-x", value: "1rem", description: "Horizontal padding" },
          { name: "--button-radius", value: "var(--radius-full)", description: "Border radius" },
          { name: "--button-font-size", value: "var(--text-sm)", description: "Font size" },
          { name: "--button-font-weight", value: "var(--font-weight-medium)", description: "Font weight" },
          { name: "--button-sm-height", value: "2rem", description: "Small size height" },
          { name: "--button-lg-height", value: "2.5rem", description: "Large size height" },
          { name: "--button-icon-only-size", value: "2.25rem", description: "Icon button dimensions" },
          { name: "--focus-ring-width", value: "2px", description: "Focus ring thickness" },
          { name: "--focus-ring-color", value: "var(--ring)", description: "Focus ring color" },
        ]}
      />

      <CodeBlock>{`import { Button } from "fan-tokens"

{/* Primary action */}
<Button variant="default">Save changes</Button>

{/* Secondary + Primary pair */}
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Confirm</Button>
</div>

{/* Mobile full-width */}
<Button className="w-full sm:w-auto">Submit</Button>

{/* Icon button */}
<Button size="icon" aria-label="Add item">
  <PlusIcon />
</Button>`}</CodeBlock>
    </ComponentPage>
  )
}
