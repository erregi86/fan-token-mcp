import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Label } from "fan-tokens"

export function CardDoc() {
  return (
    <ComponentPage name="Card" description="Displays a card with header, content, and footer. Use cards to group related information and actions.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use cards for grouping related content such as forms, profiles, or summaries." },
          { icon: "💡", text: "Ideal for dashboard widgets that display metrics, charts, or status information." },
          { icon: "💡", text: "Works well as list items in a grid or stacked layout for browsing collections." },
          { icon: "⚠️", text: "Avoid using cards for single, isolated pieces of content that don't need visual grouping." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width cards, stacked vertically with consistent spacing between them."
        desktop="Grid layout with 2-3 columns. Constrain max-width to maintain readability."
      />

      <DemoSection title="Default with Form">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </DemoSection>

      <DemoSection title="Stats Card">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-2xl">$45,231.89</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Subscriptions</CardDescription>
              <CardTitle className="text-2xl">+2,350</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Active Now</CardDescription>
              <CardTitle className="text-2xl">+573</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
      </DemoSection>

      <DemoSection title="Simple Card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Check your inbox for the latest updates from your team.
            </p>
          </CardContent>
        </Card>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use CardHeader for title and description to maintain consistent hierarchy.",
          "Keep content focused on a single topic or action per card.",
          "Use CardFooter for primary and secondary actions.",
        ]}
        donts={[
          "Nest cards deeply within other cards -- it creates visual confusion.",
          "Overload a single card with too many actions or unrelated information.",
          "Use cards when a simple list or table would be more appropriate.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--card-radius", value: "var(--radius-xl)", description: "Border radius of the card container." },
          { name: "--card-shadow", value: "var(--shadow-sm)", description: "Box shadow applied to the card." },
          { name: "--card-bg", value: "var(--card)", description: "Background color of the card." },
          { name: "--card-fg", value: "var(--card-foreground)", description: "Foreground (text) color of the card." },
          { name: "--card-border-color", value: "var(--border)", description: "Border color of the card." },
          { name: "--card-padding", value: "1.5rem", description: "Internal padding of card sections." },
          { name: "--card-header-gap", value: "0.375rem", description: "Gap between title and description in CardHeader." },
          { name: "--card-title-font-size", value: "1.25rem", description: "Font size of CardTitle." },
          { name: "--card-title-font-weight", value: "600", description: "Font weight of CardTitle." },
          { name: "--card-description-font-size", value: "0.875rem", description: "Font size of CardDescription." },
        ]}
      />

      <CodeBlock>{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>

{/* Stats card variant */}
<Card>
  <CardHeader>
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-2xl">$45,231.89</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
  </CardContent>
</Card>`}</CodeBlock>
    </ComponentPage>
  )
}
