import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "fan-tokens"

const meta = {
  title: "Components/Data Display/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
}

export const Card: Story = {
  name: "Card Loading",
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const List: Story = {
  name: "List Loading",
  render: () => (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </div>
  ),
}
