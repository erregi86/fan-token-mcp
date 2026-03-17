import { useState } from "react"
import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Checkbox, Label } from "fan-tokens"

export function CheckboxDoc() {
  const [defaultChecked, setDefaultChecked] = useState(false)
  const [withLabel, setWithLabel] = useState(false)
  const [checkedDemo, setCheckedDemo] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [marketing, setMarketing] = useState(false)
  const [updates, setUpdates] = useState(true)

  return (
    <ComponentPage
      name="Checkbox"
      description="A control that allows the user to toggle between checked and not checked. Supports indeterminate state for partial selections."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "\u2705", text: "Use for boolean choices where the user can select zero, one, or multiple options independently." },
          { icon: "\u2705", text: "Ideal for multi-select scenarios such as selecting toppings, features, or filter criteria." },
          { icon: "\u2705", text: "Use for terms acceptance and consent flows where the user must explicitly opt in." },
          { icon: "\ud83d\udca1", text: "Always pair with a visible label for accessibility. The label should clearly describe what the checkbox controls." },
          { icon: "\u26a0\ufe0f", text: "If only one option can be selected from a group, use RadioGroup instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Use larger touch targets (min 44px) with increased spacing between options for comfortable tapping."
        desktop="Standard spacing with optional grid layout for organizing multiple checkbox groups side by side."
      />

      <DemoSection title="Default">
        <Checkbox checked={defaultChecked} onCheckedChange={setDefaultChecked} />
      </DemoSection>

      <DemoSection title="With Label">
        <div className="flex items-center gap-2">
          <Checkbox checked={withLabel} onCheckedChange={setWithLabel} />
          <Label>Accept terms and conditions</Label>
        </div>
      </DemoSection>

      <DemoSection title="Checked">
        <div className="flex items-center gap-2">
          <Checkbox checked={checkedDemo} onCheckedChange={setCheckedDemo} />
          <Label>This checkbox starts checked</Label>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox disabled checked={false} />
            <Label className="text-muted-foreground">Disabled unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox disabled checked={true} />
            <Label className="text-muted-foreground">Disabled checked</Label>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Multiple Checkboxes">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox checked={notifications} onCheckedChange={setNotifications} />
            <Label>Email notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked={marketing} onCheckedChange={setMarketing} />
            <Label>Marketing emails</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked={updates} onCheckedChange={setUpdates} />
            <Label>Product updates</Label>
          </div>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for independent boolean options that can each be toggled on or off.",
          "Always pair with a descriptive label so users know what they are selecting.",
          "Group related checkboxes together with a clear group heading.",
        ]}
        donts={[
          "Use when only one option can be selected from a group -- use RadioGroup instead.",
          "Use without a label or accessible name, as this creates an accessibility barrier.",
          "Use for actions that take effect immediately -- use Switch for instant toggles.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--checkbox-size", value: "1rem", description: "Width and height of the checkbox control." },
          { name: "--checkbox-radius", value: "var(--radius-xs)", description: "Border radius of the checkbox." },
          { name: "--checkbox-border-color", value: "var(--input)", description: "Border color in the default unchecked state." },
          { name: "--checkbox-bg", value: "var(--background)", description: "Background color of the checkbox when unchecked." },
          { name: "--focus-ring-width", value: "2px", description: "Width of the focus ring shown on keyboard navigation." },
        ]}
      />

      <CodeBlock>{`import { Checkbox, Label } from "fan-tokens"

// Basic usage
<Checkbox checked={checked} onCheckedChange={setChecked} />

// With label
<div className="flex items-center gap-2">
  <Checkbox checked={checked} onCheckedChange={setChecked} />
  <Label>Accept terms and conditions</Label>
</div>

// Disabled
<Checkbox disabled checked={false} />

// Multiple checkboxes
<div className="space-y-3">
  <div className="flex items-center gap-2">
    <Checkbox checked={notifications} onCheckedChange={setNotifications} />
    <Label>Email notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox checked={marketing} onCheckedChange={setMarketing} />
    <Label>Marketing emails</Label>
  </div>
</div>`}</CodeBlock>
    </ComponentPage>
  )
}
