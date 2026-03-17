import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { HoverCard, HoverCardTrigger, HoverCardContent, Avatar, AvatarFallback } from "fan-tokens"

export function HoverCardDoc() {
  return (
    <ComponentPage name="Hover Card" description="For sighted users to preview content available behind a link.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use hover cards to preview content on hover, such as user profiles or link previews." },
          { icon: "💡", text: "Great for providing supplementary context without requiring a click or navigation." },
          { icon: "⚠️", text: "Hover is not available on touch devices. Always ensure the linked content is accessible by other means." },
        ]}
      />

      <BreakpointInfo
        mobile="Not usable on touch devices (no hover). Show preview content inline or behind a tap instead."
        desktop="Hover-triggered preview card appears near the trigger with configurable open/close delays."
      />

      <DemoSection title="User Profile Preview">
        <HoverCard>
          <HoverCardTrigger href="#" className="text-sm font-medium text-primary underline underline-offset-4">@nextjs</HoverCardTrigger>
          <HoverCardContent>
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>NJ</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm text-muted-foreground">The React Framework -- created and maintained by @vercel.</p>
                <p className="text-xs text-muted-foreground">Joined December 2021</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for supplementary preview information that enriches the browsing experience.",
          "Keep content concise -- a short summary, avatar, and key metadata.",
          "Ensure the trigger element is still functional (e.g., a link) without the hover card.",
        ]}
        donts={[
          "Put essential content only inside a hover card -- users on touch devices will never see it.",
          "Use on mobile-first interfaces where hover is not available.",
          "Include interactive elements like buttons or forms inside the hover card.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--hover-card-bg", value: "var(--popover)", description: "Background color of the hover card." },
          { name: "--hover-card-fg", value: "var(--popover-foreground)", description: "Text color inside the hover card." },
          { name: "--hover-card-radius", value: "0.5rem", description: "Border radius of the hover card." },
          { name: "--hover-card-shadow", value: "0 4px 6px -1px rgba(0,0,0,0.1)", description: "Box shadow for the hover card." },
          { name: "--hover-card-border", value: "var(--border)", description: "Border color of the hover card." },
        ]}
      />

      <CodeBlock>{`<HoverCard>
  <HoverCardTrigger href="/user/nextjs">
    @nextjs
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback>NJ</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm text-muted-foreground">
          The React Framework.
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}</CodeBlock>
    </ComponentPage>
  )
}
