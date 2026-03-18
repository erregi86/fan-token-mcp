import type { Meta, StoryObj } from "@storybook/react"
import { Switch, Label } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane" {...args} />
      <Label htmlFor="airplane">Airplane Mode</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="active" defaultChecked />
      <Label htmlFor="active">Active</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="off" disabled />
      <Label htmlFor="off" className="opacity-50">Disabled</Label>
    </div>
  ),
}
