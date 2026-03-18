import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip, Button } from "fan-tokens"

const meta = {
  title: "Components/Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
}
