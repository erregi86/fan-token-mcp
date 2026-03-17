import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  VariantGuide,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Alert, AlertTitle, AlertDescription } from "fan-tokens"

export function AlertDoc() {
  return (
    <ComponentPage
      name="Alert"
      description="Displays a callout for important messages, warnings, errors, or success feedback that persists on the page."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use alerts for important messages that need to persist on the page until the user addresses them." },
          { icon: "⚠️", text: "Use for warnings, errors, and success feedback that should not disappear automatically." },
          { icon: "✅", text: "Include actionable, concise text so users know what to do next." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width layout. Icon and text stack vertically if space is constrained."
        desktop="Inline layout with icon alongside text content."
      />

      <DemoSection title="Default">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </DemoSection>

      <DemoSection title="Destructive">
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </DemoSection>

      <DemoSection title="With Title and Description">
        <div className="space-y-4">
          <Alert>
            <AlertTitle>New update available</AlertTitle>
            <AlertDescription>
              Version 2.4.0 includes performance improvements and bug fixes. Restart to apply the update.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Deployment failed</AlertTitle>
            <AlertDescription>
              Build step exited with code 1. Check your build logs for details and try again.
            </AlertDescription>
          </Alert>
        </div>
      </DemoSection>

      <VariantGuide
        variants={[
          {
            name: "default",
            when: "Informational messages, tips, and general notices that do not indicate an error.",
          },
          {
            name: "destructive",
            when: "Errors, critical warnings, and actions that may result in data loss or failure.",
            className: "text-red-600 dark:text-red-400",
          },
        ]}
      />

      <DosAndDonts
        dos={[
          "Use for persistent messages that the user should read before continuing.",
          "Include actionable text so the user knows what step to take next.",
          "Pair a clear title with a supporting description for context.",
        ]}
        donts={[
          "Use for transient feedback after an action — use Toast instead.",
          "Display too many alerts on a single page; it dilutes their importance.",
          "Use the destructive variant for non-critical information.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--alert-radius", value: "var(--radius)", description: "Border radius of the alert container." },
          { name: "--alert-padding", value: "1rem", description: "Internal padding of the alert." },
          { name: "--alert-border-color", value: "var(--border)", description: "Border color for the default variant." },
          { name: "--alert-icon-size", value: "1rem", description: "Width and height of the leading icon." },
        ]}
      />

      <CodeBlock>{`import { Alert, AlertTitle, AlertDescription } from "fan-tokens"

{/* Default informational alert */}
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components using the cli.</AlertDescription>
</Alert>

{/* Destructive alert for errors */}
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
</Alert>`}</CodeBlock>
    </ComponentPage>
  )
}
