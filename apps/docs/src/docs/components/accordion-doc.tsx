import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "fan-tokens"

export function AccordionDoc() {
  return (
    <ComponentPage name="Accordion" description="A vertically stacked set of interactive headings that each reveal an associated section of content.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for FAQ sections where users scan for specific questions." },
          { icon: "✅", text: "Use for collapsible content groups such as settings panels or filter sections." },
          { icon: "✅", text: "Use for reducing visual clutter when content is long but not always needed." },
          { icon: "💡", text: "Choose between single and multiple mode based on whether users need to compare content across sections." },
        ]}
      />

      <BreakpointInfo
        mobile="Full-width layout. Use single item open at a time to conserve vertical space."
        desktop="Can allow multiple items open simultaneously for side-by-side comparison workflows."
      />

      <DemoSection title="Single Accordion">
        <Accordion type="single" collapsible className="w-full max-w-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger value="item-1">Is it accessible?</AccordionTrigger>
            <AccordionContent value="item-1">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger value="item-2">Is it styled?</AccordionTrigger>
            <AccordionContent value="item-2">Yes. It comes with default styles that match your design tokens.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger value="item-3">Is it animated?</AccordionTrigger>
            <AccordionContent value="item-3">Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>

      <DemoSection title="Multiple Accordion">
        <Accordion type="multiple" className="w-full max-w-lg">
          <AccordionItem value="multi-1">
            <AccordionTrigger value="multi-1">Section One</AccordionTrigger>
            <AccordionContent value="multi-1">This accordion allows multiple sections to be open at the same time.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="multi-2">
            <AccordionTrigger value="multi-2">Section Two</AccordionTrigger>
            <AccordionContent value="multi-2">Open this alongside Section One to compare content side by side.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="multi-3">
            <AccordionTrigger value="multi-3">Section Three</AccordionTrigger>
            <AccordionContent value="multi-3">All three sections can remain expanded simultaneously.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>

      <DemoSection title="With Default Open">
        <Accordion type="single" collapsible defaultValue="default-2" className="w-full max-w-lg">
          <AccordionItem value="default-1">
            <AccordionTrigger value="default-1">First Item</AccordionTrigger>
            <AccordionContent value="default-1">This item is collapsed by default.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="default-2">
            <AccordionTrigger value="default-2">Second Item (Default Open)</AccordionTrigger>
            <AccordionContent value="default-2">This item is expanded by default via the defaultValue prop.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="default-3">
            <AccordionTrigger value="default-3">Third Item</AccordionTrigger>
            <AccordionContent value="default-3">This item is also collapsed by default.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for reducing visual clutter on content-heavy pages.",
          "Use for FAQ sections where users scan for specific answers.",
          "Keep trigger labels concise and descriptive.",
          "Use the collapsible prop on single-type to allow all items to close.",
        ]}
        donts={[
          "Hide critical information that users need to see immediately behind an accordion.",
          "Nest accordions inside other accordions -- use a flat structure instead.",
          "Use an accordion for only one item -- consider a collapsible or disclosure instead.",
          "Place unrelated content in the same accordion group.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--accordion-border-color", value: "var(--border)", description: "Border color between accordion items." },
          { name: "--accordion-trigger-padding-y", value: "1rem", description: "Vertical padding for accordion trigger buttons." },
          { name: "--accordion-trigger-font-size", value: "0.875rem", description: "Font size of the accordion trigger text." },
          { name: "--accordion-trigger-font-weight", value: "500", description: "Font weight of the accordion trigger text." },
          { name: "--accordion-content-font-size", value: "0.875rem", description: "Font size of the accordion content area." },
          { name: "--accordion-content-padding-bottom", value: "1rem", description: "Bottom padding inside the accordion content area." },
        ]}
      />

      <CodeBlock>{`{/* Single mode -- only one item open at a time */}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">Title</AccordionTrigger>
    <AccordionContent value="item-1">Content</AccordionContent>
  </AccordionItem>
</Accordion>

{/* Multiple mode -- many items can be open */}
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">Title</AccordionTrigger>
    <AccordionContent value="item-1">Content</AccordionContent>
  </AccordionItem>
</Accordion>

{/* With default open item */}
<Accordion type="single" collapsible defaultValue="item-2">
  <AccordionItem value="item-2">
    <AccordionTrigger value="item-2">Pre-expanded</AccordionTrigger>
    <AccordionContent value="item-2">Visible on mount</AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
    </ComponentPage>
  )
}
