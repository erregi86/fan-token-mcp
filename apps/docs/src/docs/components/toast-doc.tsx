import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Button, useToast } from "fan-tokens"

export function ToastDoc() {
  return (
    <ComponentPage
      name="Toast"
      description="A succinct, auto-dismissing message that provides transient feedback after a user action."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use toasts for transient success or error feedback after user-initiated actions." },
          { icon: "⚠️", text: "Do not use toasts for critical information that requires acknowledgment — use AlertDialog instead." },
          { icon: "✅", text: "Keep messages short and auto-dismiss after 3-5 seconds." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width toast anchored at the bottom of the viewport."
        desktop="Fixed-width toast positioned in the bottom-right corner."
      />

      <DemoSection title="Success Toast">
        <SuccessToastDemo />
      </DemoSection>

      <DemoSection title="Error Toast">
        <ErrorToastDemo />
      </DemoSection>

      <DemoSection title="With Action Button">
        <ActionToastDemo />
      </DemoSection>

      <DosAndDonts
        dos={[
          "Keep messages short — one sentence or less.",
          "Auto-dismiss after 3-5 seconds so the toast does not block the UI.",
          "Include an action button for undo or retry when appropriate.",
        ]}
        donts={[
          "Use for critical information that needs explicit acknowledgment — use AlertDialog instead.",
          "Stack too many toasts at once; limit visible toasts to 1-3.",
          "Put long descriptions or multiple paragraphs in a toast.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--toast-radius", value: "var(--radius)", description: "Border radius of the toast container." },
          { name: "--toast-padding", value: "1rem", description: "Internal padding of the toast." },
          { name: "--toast-shadow", value: "0 4px 12px rgba(0,0,0,0.15)", description: "Box shadow for elevation." },
          { name: "--toast-bg", value: "var(--card)", description: "Background color of the toast." },
          { name: "--toast-fg", value: "var(--card-foreground)", description: "Text color inside the toast." },
          { name: "--toast-border-color", value: "var(--border)", description: "Border color of the toast container." },
        ]}
      />

      <CodeBlock>{`import { Button, useToast } from "fan-tokens"

function MyComponent() {
  const { toast } = useToast()

  return (
    <>
      {/* Success toast */}
      <Button onClick={() => toast({ title: "Saved!", description: "Your changes have been saved." })}>
        Save
      </Button>

      {/* Error toast */}
      <Button
        variant="destructive"
        onClick={() => toast({ title: "Error", description: "Something went wrong.", variant: "destructive" })}
      >
        Delete
      </Button>

      {/* Toast with action */}
      <Button onClick={() => toast({
        title: "Item deleted",
        description: "The item was moved to trash.",
        action: <Button variant="outline" size="sm">Undo</Button>,
      })}>
        Delete with undo
      </Button>
    </>
  )
}`}</CodeBlock>
    </ComponentPage>
  )
}

function SuccessToastDemo() {
  const { toast } = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: "Saved!",
          description: "Your changes have been saved successfully.",
        })
      }
    >
      Show Success Toast
    </Button>
  )
}

function ErrorToastDemo() {
  const { toast } = useToast()
  return (
    <Button
      variant="destructive"
      onClick={() =>
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    >
      Show Error Toast
    </Button>
  )
}

function ActionToastDemo() {
  const { toast } = useToast()
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          title: "Item deleted",
          description: "The item was moved to trash.",
          action: (
            <Button variant="outline" size="sm">
              Undo
            </Button>
          ),
        })
      }
    >
      Show Toast with Action
    </Button>
  )
}
