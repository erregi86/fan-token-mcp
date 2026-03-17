import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Select, SelectTrigger, SelectContent, SelectItem } from "fan-tokens"

export function SelectDoc() {
  return (
    <ComponentPage
      name="Select"
      description="Displays a list of options for the user to pick from, triggered by a button. Ideal when you have 5 or more options and limited space."
    >
      {/* Usage Guidelines */}
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use Select when the user needs to choose one option from a list of 5 or more items." },
          { icon: "✅", text: "Use when vertical space is limited and a RadioGroup would take too much room." },
          { icon: "💡", text: "Always provide a descriptive placeholder so users know what to select before opening." },
          { icon: "⚠️", text: "For 2-3 options, prefer RadioGroup for immediate visibility of all choices." },
        ]}
      />

      {/* Responsive breakpoints */}
      <DemoSection title="Responsive Behavior">
        <BreakpointInfo
          mobile="Full-width trigger (w-full). On iOS and Android, the native select picker is used for better touch interaction and scroll behavior."
          desktop="Constrained width (max-w-sm). Custom dropdown with keyboard navigation, search filtering, and hover states."
        />
      </DemoSection>

      {/* Default */}
      <DemoSection title="Default">
        <Select>
          <SelectTrigger className="w-[240px]">Select a fruit</SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </DemoSection>

      {/* With Placeholder */}
      <DemoSection title="With Placeholder">
        <Select>
          <SelectTrigger className="w-[240px]">Choose a timezone...</SelectTrigger>
          <SelectContent>
            <SelectItem value="est">Eastern (EST)</SelectItem>
            <SelectItem value="cst">Central (CST)</SelectItem>
            <SelectItem value="mst">Mountain (MST)</SelectItem>
            <SelectItem value="pst">Pacific (PST)</SelectItem>
            <SelectItem value="akst">Alaska (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii (HST)</SelectItem>
          </SelectContent>
        </Select>
      </DemoSection>

      {/* With Groups */}
      <DemoSection title="With Groups">
        <Select>
          <SelectTrigger className="w-[240px]">Select a framework...</SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="nuxt">Nuxt</SelectItem>
            <SelectItem value="remix">Remix</SelectItem>
          </SelectContent>
        </Select>
        <p className="mt-2 text-xs text-muted-foreground">
          Group related items logically when the list contains different categories.
        </p>
      </DemoSection>

      {/* Disabled */}
      <DemoSection title="Disabled">
        <Select disabled>
          <SelectTrigger className="w-[240px]">Select a fruit</SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>
      </DemoSection>

      {/* Dos and Don'ts */}
      <DosAndDonts
        dos={[
          "Use Select for lists of 5 or more options to conserve vertical space.",
          "Add clear placeholder text that describes what the user is selecting (e.g., 'Choose a country...').",
          "Group related options logically when the list is long.",
          "Pair with a Label component for form accessibility.",
        ]}
        donts={[
          "Don't use Select for 2-3 options -- use RadioGroup so all choices are immediately visible.",
          "Don't nest selects inside other selects or dropdowns -- it creates confusing layered popovers.",
          "Don't use Select for actions -- use DropdownMenu instead.",
          "Don't omit the placeholder -- an empty trigger gives no context to the user.",
        ]}
      />

      {/* Token reference */}
      <TokensReference
        tokens={[
          { name: "--select-height", value: "2.25rem", description: "Trigger button height" },
          { name: "--select-radius", value: "var(--radius-md)", description: "Border radius of trigger and content" },
          { name: "--select-padding-x", value: "0.75rem", description: "Horizontal padding inside the trigger" },
          { name: "--select-font-size", value: "var(--text-sm)", description: "Font size for trigger and items" },
          { name: "--select-border-color", value: "var(--input)", description: "Border color of the trigger" },
          { name: "--select-bg", value: "var(--background)", description: "Background color of the trigger" },
          { name: "--select-content-bg", value: "var(--popover)", description: "Background color of the dropdown content" },
          { name: "--focus-ring-width", value: "2px", description: "Focus ring thickness for keyboard navigation" },
        ]}
      />

      <CodeBlock>{`import { Select, SelectTrigger, SelectContent, SelectItem } from "fan-tokens"

{/* Basic select */}
<Select>
  <SelectTrigger className="w-[240px]">Select a fruit</SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>

{/* Full-width on mobile */}
<Select>
  <SelectTrigger className="w-full sm:max-w-sm">Choose a timezone...</SelectTrigger>
  <SelectContent>
    <SelectItem value="est">Eastern (EST)</SelectItem>
    <SelectItem value="pst">Pacific (PST)</SelectItem>
  </SelectContent>
</Select>

{/* Disabled */}
<Select disabled>
  <SelectTrigger>Not available</SelectTrigger>
  <SelectContent>
    <SelectItem value="n/a">N/A</SelectItem>
  </SelectContent>
</Select>`}</CodeBlock>
    </ComponentPage>
  )
}
