import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "fan-tokens"

const meta = {
  title: "Components/Data Display/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: 60 },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div className="w-[300px]">
      <Progress value={0} />
    </div>
  ),
}

export const Full: Story = {
  render: () => (
    <div className="w-[300px]">
      <Progress value={100} />
    </div>
  ),
}
