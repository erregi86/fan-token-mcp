import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference, VariantGuide } from "../docs-layout"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Button, Input, Label } from "fan-tokens"

export function SheetDoc() {
  return (
    <ComponentPage name="Sheet" description="A panel that slides in from the edge of the screen, used for supplementary content like settings, filters, and detail views.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for side panels that display secondary content: settings, filters, or detail views." },
          { icon: "✅", text: "Great for workflows where the user needs context from the main page while interacting with the panel." },
          { icon: "💡", text: "Choose the slide direction based on content purpose — right for details, left for navigation." },
          { icon: "⚠️", text: "For mobile bottom sheets with drag-to-dismiss, consider using Drawer instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width panel from the bottom (prefer Drawer) or side. Takes up most of the viewport."
        desktop="Side panel (right or left) with max-w-sm, overlaid on a dimmed backdrop."
      />

      <DemoSection title="Right Sheet">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Right Sheet</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>Adjust your application preferences here.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Display Name</Label>
                <Input defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input type="email" defaultValue="john@example.com" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </DemoSection>

      <DemoSection title="Left Sheet">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Left Sheet</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Browse sections of the application.</SheetDescription>
            </SheetHeader>
            <nav className="grid gap-2 py-4">
              <Button variant="ghost" className="justify-start">Dashboard</Button>
              <Button variant="ghost" className="justify-start">Projects</Button>
              <Button variant="ghost" className="justify-start">Team Members</Button>
              <Button variant="ghost" className="justify-start">Settings</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </DemoSection>

      <DemoSection title="With Form Content">
        <Sheet>
          <SheetTrigger asChild>
            <Button>Apply Filters</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Filter Results</SheetTitle>
              <SheetDescription>Narrow down results by applying filters below.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Category</Label>
                <Input placeholder="e.g. Design, Engineering" />
              </div>
              <div className="grid gap-2">
                <Label>Date Range</Label>
                <Input type="date" />
              </div>
              <div className="grid gap-2">
                <Label>Status</Label>
                <Input placeholder="e.g. Active, Archived" />
              </div>
              <Button className="mt-2">Apply Filters</Button>
            </div>
          </SheetContent>
        </Sheet>
      </DemoSection>

      <VariantGuide
        variants={[
          { name: "right", when: "Settings panels, detail views, and editing forms. The most common side." },
          { name: "left", when: "Navigation menus, filter sidebars, and file browsers." },
          { name: "top", when: "Notification centers, search bars, and announcements." },
          { name: "bottom", when: "Mobile-friendly actions, quick settings. Consider Drawer for drag-to-dismiss." },
        ]}
      />

      <DosAndDonts
        dos={[
          "Use for secondary content that doesn't warrant a full page navigation.",
          "Keep sheet content focused on a single task or topic.",
          "Provide a clear title and description for context.",
          "Allow closing via the overlay click and Escape key.",
        ]}
        donts={[
          "Use for critical confirmations — use AlertDialog instead.",
          "Overload the sheet with too much content; if it needs scrolling extensively, consider a dedicated page.",
          "Nest a Sheet inside another Sheet or Dialog.",
          "Use a bottom Sheet on mobile when Drawer provides a better native feel.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--sheet-padding", value: "1.5rem", description: "Inner padding of the sheet content area." },
          { name: "--sheet-shadow", value: "var(--shadow-lg)", description: "Box shadow applied to the sheet panel." },
          { name: "--sheet-bg", value: "var(--background)", description: "Background color of the sheet surface." },
          { name: "--dialog-overlay-bg", value: "rgba(0, 0, 0, 0.8)", description: "Shared overlay background color (same as Dialog)." },
        ]}
      />

      <CodeBlock>{`<Sheet>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description text here.</SheetDescription>
    </SheetHeader>
    {/* Panel content */}
  </SheetContent>
</Sheet>`}</CodeBlock>
    </ComponentPage>
  )
}
