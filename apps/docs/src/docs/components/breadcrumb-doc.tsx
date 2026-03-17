import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "fan-tokens"

export function BreadcrumbDoc() {
  return (
    <ComponentPage name="Breadcrumb" description="Displays the path to the current resource using a hierarchy of links.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for showing page hierarchy and the user's navigation path within the application." },
          { icon: "✅", text: "Use on pages that are more than two levels deep in the site structure." },
          { icon: "💡", text: "Always include the current page as the last item, rendered as non-interactive text." },
          { icon: "⚠️", text: "Do not use as a replacement for primary navigation -- breadcrumbs are a secondary wayfinding aid." },
        ]}
      />

      <BreakpointInfo
        mobile="Truncate middle items with an ellipsis. Show only the parent and current page to save horizontal space."
        desktop="Show the full breadcrumb trail from root to current page."
      />

      <DemoSection title="Default">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DemoSection>

      <DemoSection title="With Custom Separator">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem><BreadcrumbLink href="#">Library</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem><BreadcrumbPage>Data</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DemoSection>

      <DemoSection title="Truncated">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Always include the current page as the last item, displayed as plain text (not a link).",
          "Start the breadcrumb from the root of the application (e.g., Home).",
          "Use a consistent separator across the entire application.",
          "Use truncation with ellipsis when the trail exceeds 4-5 levels.",
        ]}
        donts={[
          "Use breadcrumbs for linear step processes -- use a Stepper component instead.",
          "Make the last item (current page) a clickable link.",
          "Show breadcrumbs on the top-level / home page itself.",
          "Use breadcrumbs as the sole navigation mechanism.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--breadcrumb-separator-color", value: "var(--muted-foreground)", description: "Color of the separator between breadcrumb items." },
          { name: "--breadcrumb-separator-size", value: "0.875rem", description: "Font size of the separator character or icon." },
          { name: "--breadcrumb-link-color", value: "var(--muted-foreground)", description: "Text color of breadcrumb links." },
          { name: "--breadcrumb-link-hover-color", value: "var(--foreground)", description: "Text color of breadcrumb links on hover." },
          { name: "--breadcrumb-page-color", value: "var(--foreground)", description: "Text color of the current page (last item)." },
          { name: "--breadcrumb-font-size", value: "0.875rem", description: "Font size of breadcrumb text." },
        ]}
      />

      <CodeBlock>{`{/* Default breadcrumb */}
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

{/* Truncated with ellipsis */}
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</CodeBlock>
    </ComponentPage>
  )
}
