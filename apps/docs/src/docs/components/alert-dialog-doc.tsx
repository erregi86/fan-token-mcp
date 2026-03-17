import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, Button } from "fan-tokens"

export function AlertDialogDoc() {
  return (
    <ComponentPage name="Alert Dialog" description="A modal dialog that interrupts the user with important content and expects a response. Used for destructive action confirmations.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for destructive action confirmations such as delete, remove, or revoke operations." },
          { icon: "✅", text: "Always clearly communicate the consequence of the action in the description." },
          { icon: "⚠️", text: "The user must explicitly choose an action — clicking the overlay does not dismiss an AlertDialog." },
          { icon: "💡", text: "For non-destructive flows or forms, use a regular Dialog instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width buttons stacked vertically for easier touch targets on small screens."
        desktop="Inline buttons right-aligned in the footer, with Cancel on the left and the action on the right."
      />

      <DemoSection title="Delete Confirmation">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DemoSection>

      <DemoSection title="With Destructive Action Button">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Revoke Access</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Revoke all access?</AlertDialogTitle>
              <AlertDialogDescription>
                This will immediately revoke access for all shared users. They will no longer be able to view or edit this resource. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep Access</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Revoke Access
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Clearly state the consequence of the action in the description text.",
          "Use the destructive variant for the action button to visually signal danger.",
          "Always provide a cancel option so the user can back out safely.",
          "Use concise, action-oriented labels (e.g., 'Delete', 'Revoke') instead of generic ones (e.g., 'OK').",
        ]}
        donts={[
          "Use AlertDialog for non-destructive flows — use a regular Dialog instead.",
          "Use AlertDialog for complex forms or multi-step processes — use Dialog or Sheet.",
          "Allow the overlay click to dismiss — AlertDialog requires an explicit choice.",
          "Use vague titles like 'Are you sure?' without explaining what will happen.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--dialog-radius", value: "var(--radius-lg)", description: "Border radius of the alert dialog container." },
          { name: "--dialog-padding", value: "1.5rem", description: "Inner padding of the alert dialog content area." },
          { name: "--dialog-shadow", value: "var(--shadow-lg)", description: "Box shadow applied to the alert dialog." },
          { name: "--dialog-bg", value: "var(--background)", description: "Background color of the alert dialog surface." },
          { name: "--dialog-overlay-bg", value: "rgba(0, 0, 0, 0.8)", description: "Background color of the overlay behind the alert dialog." },
          { name: "--dialog-max-width", value: "32rem (max-w-lg)", description: "Maximum width of the alert dialog on desktop viewports." },
        ]}
      />

      <CodeBlock>{`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</CodeBlock>
    </ComponentPage>
  )
}
