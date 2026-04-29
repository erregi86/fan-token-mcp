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
import { Switch, Label } from "fan-tokens"

export function SwitchDoc() {
  const [defaultOn, setDefaultOn] = useState(false)
  const [withLabel, setWithLabel] = useState(false)
  const [checkedDemo, setCheckedDemo] = useState(true)

  return (
    <ComponentPage
      name="Switch"
      description="A toggle control that allows the user to switch between two states, typically on and off. Changes take effect immediately."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for instant toggles where the change takes effect immediately without a submit action." },
          { icon: "✅", text: "Ideal for settings and preferences such as enabling notifications, dark mode, or feature flags." },
          { icon: "✅", text: "Use when the toggle represents a clear on/off or enabled/disabled binary state." },
          { icon: "💡", text: "Label should describe the setting, not the action. For example, 'Airplane Mode' not 'Turn on Airplane Mode'." },
          { icon: "⚠️", text: "Avoid using inside forms that require a submit button -- use Checkbox for those scenarios." },
        ]}
      />

      <BreakpointInfo
        mobile="Use a full-width row layout with the label on the left and the switch aligned to the right for easy thumb access."
        desktop="Display inline with the label positioned directly next to the switch for a compact layout."
      />

      <DemoSection title="Default">
        <Switch checked={defaultOn} onCheckedChange={setDefaultOn} />
      </DemoSection>

      <DemoSection title="With Label">
        <div className="flex items-center gap-3">
          <Switch checked={withLabel} onCheckedChange={setWithLabel} />
          <Label>Airplane Mode</Label>
        </div>
      </DemoSection>

      <DemoSection title="Checked">
        <div className="flex items-center gap-3">
          <Switch checked={checkedDemo} onCheckedChange={setCheckedDemo} />
          <Label>Notifications enabled</Label>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Switch disabled checked={false} />
            <Label className="text-muted-foreground">Disabled off</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch disabled checked={true} />
            <Label className="text-muted-foreground">Disabled on</Label>
          </div>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for instant toggles that take effect immediately without requiring a form submission.",
          "Pair with a clear label that describes the setting being controlled.",
          "Use when the two states are clearly opposite (on/off, enabled/disabled).",
        ]}
        donts={[
          "Use inside forms that need a submit button -- use Checkbox instead.",
          "Use for non-boolean choices where more than two options exist.",
          "Use without a label, as the switch state alone may be ambiguous to users.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--switch-width", value: "2.5rem", description: "Total width of the switch track." },
          { name: "--switch-height", value: "1.25rem", description: "Total height of the switch track." },
          { name: "--switch-thumb-size", value: "1rem", description: "Diameter of the circular thumb indicator." },
          { name: "--switch-bg", value: "var(--input)", description: "Background color of the track when unchecked." },
          { name: "--switch-checked-bg", value: "var(--primary)", description: "Background color of the track when checked." },
          { name: "--focus-ring-width", value: "2px", description: "Width of the focus ring shown on keyboard navigation." },
        ]}
      />

      <CodeBlock>{`import { Switch, Label } from "fan-tokens"

// Basic usage
<Switch checked={on} onCheckedChange={setOn} />

// With label
<div className="flex items-center gap-3">
  <Switch checked={on} onCheckedChange={setOn} />
  <Label>Airplane Mode</Label>
</div>

// Full-width settings row (mobile-friendly)
<div className="flex items-center justify-between">
  <Label>Dark Mode</Label>
  <Switch checked={dark} onCheckedChange={setDark} />
</div>

// Disabled
<Switch disabled checked={false} />`}</CodeBlock>
    </ComponentPage>
  )
}
