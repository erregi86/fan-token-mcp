import type { Meta, StoryObj } from "@storybook/react"
import { Select, SelectTrigger, SelectContent, SelectItem, Label } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">Select a fruit</SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label>Timezone</Label>
      <Select>
        <SelectTrigger>Select timezone</SelectTrigger>
        <SelectContent>
          <SelectItem value="utc">UTC</SelectItem>
          <SelectItem value="est">Eastern (EST)</SelectItem>
          <SelectItem value="cst">Central (CST)</SelectItem>
          <SelectItem value="pst">Pacific (PST)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[200px]">Disabled</SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
  ),
}
