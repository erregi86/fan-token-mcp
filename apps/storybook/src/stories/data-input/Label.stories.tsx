import type { Meta, StoryObj } from "@storybook/react"
import { Label, Input } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { children: "Your email address" },
}

export const WithInput: Story = {
  name: "With Input",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}
