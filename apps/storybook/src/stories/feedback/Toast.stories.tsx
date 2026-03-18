import type { Meta, StoryObj } from "@storybook/react"
import { Button, ToastProvider, ToastViewport, useToast } from "fan-tokens"

function ToastDemo() {
  const { toast } = useToast()
  return (
    <div className="flex gap-2">
      <Button onClick={() => toast({ title: "Success!", description: "Your action was completed." })}>
        Show Toast
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast({ title: "Error!", description: "Something went wrong.", variant: "destructive" })}
      >
        Show Error
      </Button>
    </div>
  )
}

const meta = {
  title: "Components/Feedback/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => <ToastDemo />,
}
