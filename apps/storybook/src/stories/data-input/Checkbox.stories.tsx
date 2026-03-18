import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox, Label } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
    </div>
  ),
}

export const Multiple: Story = {
  name: "Multiple Options",
  render: () => (
    <div className="space-y-3">
      {["Email notifications", "SMS alerts", "Push notifications"].map((label, i) => (
        <div key={i} className="flex items-center space-x-2">
          <Checkbox id={`opt-${i}`} defaultChecked={i === 0} />
          <Label htmlFor={`opt-${i}`}>{label}</Label>
        </div>
      ))}
    </div>
  ),
}
