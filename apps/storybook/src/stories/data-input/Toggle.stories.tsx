import type { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["default", "sm", "lg"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { children: "B", variant: "default" },
}

export const Outline: Story = {
  args: { children: "I", variant: "outline" },
}

export const Disabled: Story = {
  args: { children: "U", disabled: true },
}

export const WithText: Story = {
  name: "With Text",
  args: { children: "Toggle me" },
}
