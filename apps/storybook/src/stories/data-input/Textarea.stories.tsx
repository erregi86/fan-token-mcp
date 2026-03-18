import type { Meta, StoryObj } from "@storybook/react"
import { Textarea, Label } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { placeholder: "Type your message here..." },
}

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Write something..." />
    </div>
  ),
}

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
}
