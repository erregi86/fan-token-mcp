import { useState } from "react"
import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Toggle, ToggleGroup, ToggleGroupItem } from "fan-tokens"

export function ToggleDoc() {
  const [bold, setBold] = useState(false)
  const [pressed, setPressed] = useState(true)
  const [align, setAlign] = useState("left")

  return (
    <ComponentPage
      name="Toggle"
      description="A two-state button that can be either on or off. Use for toolbar actions, formatting options, and mode switches."
    >
      {/* Usage Guidelines */}
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use Toggle for on/off state controls in toolbars, like bold, italic, and alignment options." },
          { icon: "✅", text: "Use Toggle for mode switches where the action is immediately applied (no form submission)." },
          { icon: "💡", text: "Combine with ToggleGroup for mutually exclusive options like text alignment." },
          { icon: "⚠️", text: "For form inputs that save on submit, prefer Checkbox or Switch instead." },
        ]}
      />

      {/* Responsive breakpoints */}
      <DemoSection title="Responsive Behavior">
        <BreakpointInfo
          mobile="Use size='lg' or increase padding for comfortable touch targets (44x44px minimum). Stack toggle groups vertically if they overflow."
          desktop="Standard size works well. Group toggles horizontally in toolbars. Use the outline variant for visual grouping."
        />
      </DemoSection>

      {/* Default */}
      <DemoSection title="Default">
        <Toggle pressed={bold} onPressedChange={setBold}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
          Bold
        </Toggle>
        <p className="mt-3 text-sm text-muted-foreground">Pressed: {bold ? "true" : "false"}</p>
      </DemoSection>

      {/* Pressed */}
      <DemoSection title="Pressed (Active State)">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
          Bold
        </Toggle>
        <p className="mt-3 text-xs text-muted-foreground">Toggle starts in the pressed state to show active styling.</p>
      </DemoSection>

      {/* With Icon */}
      <DemoSection title="With Icon">
        <div className="flex gap-3">
          <Toggle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
          </Toggle>
          <Toggle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
          </Toggle>
          <Toggle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
          </Toggle>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Icon-only toggles are common in formatting toolbars. Always add aria-label for accessibility.</p>
      </DemoSection>

      {/* Disabled */}
      <DemoSection title="Disabled">
        <div className="flex gap-3">
          <Toggle disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
            Bold
          </Toggle>
          <Toggle disabled pressed>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
            Italic
          </Toggle>
        </div>
      </DemoSection>

      {/* Outline Variant */}
      <DemoSection title="Outline Variant">
        <ToggleGroup type="single" value={align} onValueChange={(v) => v && setAlign(v as string)} variant="outline">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
        <p className="mt-3 text-sm text-muted-foreground">Alignment: {align}</p>
        <p className="mt-1 text-xs text-muted-foreground">The outline variant adds a visible border, useful for grouping related toggles in toolbars.</p>
      </DemoSection>

      {/* Dos and Don'ts */}
      <DosAndDonts
        dos={[
          "Use Toggle for toolbar actions like bold, italic, underline, and text alignment.",
          "Use Toggle for mode switches where the change is applied immediately.",
          "Combine with ToggleGroup for mutually exclusive choices (e.g., alignment).",
          "Add aria-label to icon-only toggles for screen reader accessibility.",
        ]}
        donts={[
          "Don't use Toggle for form inputs that require a submit action -- use Checkbox or Switch instead.",
          "Don't use Toggle as a replacement for radio buttons -- use RadioGroup for form selections.",
          "Don't mix Toggle and Button in the same toolbar -- keep interaction patterns consistent.",
          "Don't use pressed state for navigation -- toggles represent state, not routing.",
        ]}
      />

      {/* Token reference */}
      <TokensReference
        tokens={[
          { name: "--toggle-height", value: "2.25rem", description: "Default toggle button height" },
          { name: "--toggle-padding-x", value: "0.75rem", description: "Horizontal padding" },
          { name: "--toggle-radius", value: "var(--radius-md)", description: "Border radius" },
          { name: "--toggle-font-size", value: "var(--text-sm)", description: "Font size" },
          { name: "--toggle-bg", value: "transparent", description: "Default background color" },
          { name: "--toggle-bg-pressed", value: "var(--accent)", description: "Background when pressed/active" },
          { name: "--toggle-border-color", value: "var(--input)", description: "Border color for outline variant" },
          { name: "--focus-ring-width", value: "2px", description: "Focus ring thickness for keyboard navigation" },
        ]}
      />

      <CodeBlock>{`import { Toggle, ToggleGroup, ToggleGroupItem } from "fan-tokens"

{/* Basic toggle */}
<Toggle pressed={bold} onPressedChange={setBold}>
  <BoldIcon />
  Bold
</Toggle>

{/* Icon-only toggle */}
<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>

{/* Outline variant */}
<Toggle variant="outline" pressed={false}>
  <ItalicIcon />
  Italic
</Toggle>

{/* Toggle group for mutually exclusive options */}
<ToggleGroup type="single" value={align} onValueChange={setAlign} variant="outline">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}</CodeBlock>
    </ComponentPage>
  )
}
