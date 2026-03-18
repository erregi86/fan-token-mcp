import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard, HoverCardTrigger, HoverCardContent, Avatar, AvatarImage, AvatarFallback } from "fan-tokens"

const meta = {
  title: "Components/Feedback/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger href="#" className="text-sm font-medium underline cursor-pointer">
        @nextjs
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework — created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
