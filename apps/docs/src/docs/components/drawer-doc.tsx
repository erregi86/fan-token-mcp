import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Button, Input, Label } from "fan-tokens"

export function DrawerDoc() {
  return (
    <ComponentPage name="Drawer" description="A mobile-first bottom sheet overlay with drag-to-dismiss. Ideal for actions, menus, and options on touch devices.">
      <UsageGuidelines
        guidelines={[
          { icon: "📱", text: "Designed as a mobile-first bottom sheet pattern for actions and options." },
          { icon: "✅", text: "Use for contextual menus, quick actions, and option selectors on mobile devices." },
          { icon: "💡", text: "Includes a drag handle and supports swipe-to-dismiss for a native mobile feel." },
          { icon: "🖥️", text: "On desktop, consider using Dialog or Sheet instead for better ergonomics." },
        ]}
      />

      <BreakpointInfo
        mobile="Bottom sheet with a drag handle at the top. Supports swipe-to-dismiss for natural touch interaction."
        desktop="Consider using Dialog (for focused tasks) or Sheet (for side panels) instead. Drawer can still work but feels less native on pointer devices."
      />

      <DemoSection title="Basic Drawer">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quick Actions</DrawerTitle>
              <DrawerDescription>Select an action to perform.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">Share</Button>
              <Button variant="ghost" className="w-full justify-start">Copy Link</Button>
              <Button variant="ghost" className="w-full justify-start">Download</Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DemoSection>

      <DemoSection title="With Content Sections">
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Edit Profile</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile. Swipe down to dismiss.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" />
              </div>
            </div>
            <DrawerFooter>
              <Button>Save changes</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use on mobile for menus, action sheets, and quick option selectors.",
          "Include a drag handle so users know they can swipe to dismiss.",
          "Keep content concise — a few actions or a short form.",
          "Provide a visible close or cancel button as a fallback.",
        ]}
        donts={[
          "Use on desktop — prefer Sheet or Dialog for pointer-based interfaces.",
          "Put too much content that requires extensive scrolling.",
          "Use for destructive confirmations — use AlertDialog instead.",
          "Omit the drag handle, as it signals the swipe-to-dismiss affordance.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--drawer-bg", value: "var(--background)", description: "Background color of the drawer surface." },
          { name: "--drawer-border", value: "var(--border)", description: "Border color at the top edge of the drawer." },
          { name: "--drawer-handle-bg", value: "var(--muted)", description: "Color of the drag handle indicator." },
          { name: "--drawer-padding", value: "1rem", description: "Inner padding of the drawer content area." },
          { name: "--drawer-radius", value: "var(--radius-lg)", description: "Border radius of the top corners." },
        ]}
      />

      <CodeBlock>{`<Drawer>
  <DrawerTrigger asChild>
    <Button>Open</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    {/* Content */}
    <DrawerFooter>
      <Button>Action</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}</CodeBlock>
    </ComponentPage>
  )
}
