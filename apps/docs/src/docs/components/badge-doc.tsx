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
import { Badge } from "fan-tokens"

export function BadgeDoc() {
  return (
    <ComponentPage
      name="Badge"
      description="Displays a badge or a component that looks like a badge. Used for status indicators, counts, tags, and labels."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for status indicators such as active, pending, or error states." },
          { icon: "✅", text: "Use for counts, such as notification badges or item totals." },
          { icon: "✅", text: "Use for tags and labels to categorize content." },
          { icon: "💡", text: "Keep badge text to 1-2 words for readability." },
          { icon: "⚠️", text: "Avoid using badges as interactive elements -- use buttons instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Ensure badges remain at a readable size. Avoid stacking too many badges in a single row -- wrap or limit visible badges."
        desktop="Display badges inline with text. Badges work well inside table cells, card headers, and list items."
      />

      <DemoSection title="All Variants">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </DemoSection>

      <DemoSection title="With Icon">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 6 9 17l-5-5"/></svg>
            Verified
          </Badge>
          <Badge variant="destructive">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>
            Error
          </Badge>
          <Badge variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            Info
          </Badge>
        </div>
      </DemoSection>

      <VariantGuide
        variants={[
          { name: "default", when: "Primary status indicators, active states, and key labels." },
          { name: "secondary", when: "Neutral informational badges, metadata, and secondary tags." },
          { name: "destructive", when: "Errors, critical alerts, and removal indicators." },
          { name: "outline", when: "Subtle tags, low-emphasis labels, and bordered categorizations." },
        ]}
      />

      <DosAndDonts
        dos={[
          "Keep text short -- 1-2 words maximum.",
          "Use for metadata and status information.",
          "Pair with icons for quick visual scanning.",
          "Use semantic variants to convey meaning (destructive for errors, etc.).",
        ]}
        donts={[
          "Use for long text or sentences.",
          "Use as buttons or clickable actions.",
          "Stack more than 3-4 badges in a row on mobile.",
          "Mix too many variant colors in one context.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--badge-radius", value: "var(--radius-md)", description: "Border radius for pill shape." },
          { name: "--badge-padding-x", value: "0.625rem", description: "Horizontal padding inside the badge." },
          { name: "--badge-padding-y", value: "0.125rem", description: "Vertical padding inside the badge." },
          { name: "--badge-font-size", value: "var(--text-xs)", description: "Font size of badge text." },
          { name: "--badge-font-weight", value: "var(--font-weight-semibold)", description: "Font weight for badge text." },
        ]}
      />

      <CodeBlock>{`import { Badge } from "fan-tokens"

{/* Basic usage */}
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Tag</Badge>

{/* With icon */}
<Badge variant="default">
  <CheckIcon className="mr-1 h-3 w-3" />
  Verified
</Badge>`}</CodeBlock>
    </ComponentPage>
  )
}
