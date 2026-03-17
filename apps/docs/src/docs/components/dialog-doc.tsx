import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button, Input, Label } from "fan-tokens"

export function DialogDoc() {
  return (
    <ComponentPage name="Dialog" description="A window overlaid on either the primary window or another dialog window, rendering content that requires user interaction.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for modal interactions that require user input or confirmation before proceeding." },
          { icon: "✅", text: "Ideal for forms presented in overlays, such as editing a profile or creating a resource." },
          { icon: "💡", text: "Always provide a clear title and description so users understand the context." },
          { icon: "⚠️", text: "Avoid using Dialog for simple yes/no confirmations — use AlertDialog instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-screen or bottom-sheet style dialog that occupies the entire viewport for easier touch interaction."
        desktop="Centered modal with max-w-lg, overlaid on a dimmed backdrop."
      />

      <DemoSection title="Basic Dialog with Trigger">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome</DialogTitle>
              <DialogDescription>This is a basic dialog with a trigger button. Click outside or press Escape to close.</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </DemoSection>

      <DemoSection title="Form Dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Name</Label>
                <Input className="col-span-3" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Username</Label>
                <Input className="col-span-3" defaultValue="@peduarte" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoSection>

      <DemoSection title="Dialog with Footer Actions">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Share Document</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share this document</DialogTitle>
              <DialogDescription>Invite collaborators by entering their email address below.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Email address</Label>
                <Input type="email" placeholder="colleague@company.com" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Send Invite</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Trap focus inside the dialog so keyboard users stay within the modal.",
          "Close the dialog on Escape key press.",
          "Include a visible close button (X) in the top-right corner.",
          "Provide clear action labels in the footer (e.g., 'Save changes', 'Cancel').",
        ]}
        donts={[
          "Nest dialogs inside other dialogs — it creates a confusing UX.",
          "Use Dialog for simple confirmations — use AlertDialog instead.",
          "Put long scrollable content inside a dialog — use Sheet for lengthy content.",
          "Open a dialog without a user-initiated trigger action.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--dialog-radius", value: "var(--radius-lg)", description: "Border radius of the dialog container." },
          { name: "--dialog-padding", value: "1.5rem", description: "Inner padding of the dialog content area." },
          { name: "--dialog-shadow", value: "var(--shadow-lg)", description: "Box shadow applied to the dialog." },
          { name: "--dialog-bg", value: "var(--background)", description: "Background color of the dialog surface." },
          { name: "--dialog-overlay-bg", value: "rgba(0, 0, 0, 0.8)", description: "Background color of the overlay behind the dialog." },
          { name: "--dialog-max-width", value: "32rem (max-w-lg)", description: "Maximum width of the dialog on desktop viewports." },
        ]}
      />

      <CodeBlock>{`<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description text here.</DialogDescription>
    </DialogHeader>
    {/* Form or content */}
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</CodeBlock>
    </ComponentPage>
  )
}
