import type { Meta, StoryObj } from "@storybook/react"
import { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, Input, Button } from "fan-tokens"

const meta = {
  title: "Components/Data Input/Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <form className="space-y-4 w-[350px]" onSubmit={(e) => e.preventDefault()}>
      <FormField name="username">
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter your username" />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormField>
      <FormField name="email">
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="you@example.com" />
        </FormControl>
        <FormDescription>We&apos;ll never share your email.</FormDescription>
        <FormMessage />
      </FormField>
      <Button type="submit">Submit</Button>
    </form>
  ),
}
