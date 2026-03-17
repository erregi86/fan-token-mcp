import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Label } from "fan-tokens"

export function TabsDoc() {
  return (
    <ComponentPage name="Tabs" description="A set of layered sections of content -- known as tab panels -- that are displayed one at a time.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for switching between related views without triggering a page navigation." },
          { icon: "✅", text: "Use when content sections share the same context but differ in category or type." },
          { icon: "💡", text: "Keep the number of tabs between 2 and 5 for optimal usability." },
          { icon: "⚠️", text: "Avoid using tabs for content that users need to see simultaneously -- consider side-by-side layouts instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Scrollable tabs or full-width layout. Consider vertical tabs for more than 3 items to avoid horizontal overflow."
        desktop="Horizontal tabs with all items visible. Tab bar fits comfortably within the content area."
      />

      <DemoSection title="Default Tabs">
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-sm text-muted-foreground pt-2">Overview content goes here. This is the default active tab.</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-sm text-muted-foreground pt-2">Analytics dashboards and metrics are displayed in this panel.</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-sm text-muted-foreground pt-2">Generated reports and export options live here.</p>
          </TabsContent>
        </Tabs>
      </DemoSection>

      <DemoSection title="With Content Panels">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Keep tab count between 2 and 5 for clarity.",
          "Use for related content that shares the same context (e.g., Account / Password).",
          "Label tabs with short, descriptive nouns or noun phrases.",
          "Set a sensible defaultValue so the first tab is active on load.",
        ]}
        donts={[
          "Use tabs for unrelated pages -- use top-level navigation instead.",
          "Use too many tabs that cause overflow or wrapping on desktop.",
          "Place actions (buttons) inside the tab trigger list.",
          "Nest tabs inside other tabs -- flatten the information architecture instead.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--tabs-list-bg", value: "var(--muted)", description: "Background color of the tab list container." },
          { name: "--tabs-list-radius", value: "var(--radius)", description: "Border radius of the tab list container." },
          { name: "--tabs-trigger-radius", value: "calc(var(--radius) - 2px)", description: "Border radius of individual tab triggers." },
          { name: "--tabs-trigger-padding-x", value: "0.75rem", description: "Horizontal padding inside each tab trigger." },
          { name: "--tabs-trigger-padding-y", value: "0.375rem", description: "Vertical padding inside each tab trigger." },
          { name: "--tabs-trigger-font-size", value: "0.875rem", description: "Font size of tab trigger labels." },
          { name: "--tabs-trigger-font-weight", value: "500", description: "Font weight of tab trigger labels." },
        ]}
      />

      <CodeBlock>{`{/* Basic tabs */}
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Overview content</TabsContent>
  <TabsContent value="tab2">Analytics content</TabsContent>
</Tabs>

{/* Tabs with card panels */}
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
      </CardHeader>
      <CardContent>Form fields here</CardContent>
    </Card>
  </TabsContent>
</Tabs>`}</CodeBlock>
    </ComponentPage>
  )
}
