import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { defaultValue: [50], min: 0, max: 100, step: 1 },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[25, 75]} min={0} max={100} step={1} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[40]} disabled />
    </div>
  ),
}
