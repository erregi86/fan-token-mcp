import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { children: "Button", variant: "default", size: "default" },
}

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
}

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive" },
}

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
}

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
}

export const Link: Story = {
  args: { children: "Link", variant: "link" },
}

export const Small: Story = {
  args: { children: "Small", size: "sm" },
}

export const Large: Story = {
  args: { children: "Large", size: "lg" },
}

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
