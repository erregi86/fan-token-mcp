import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "fan-tokens"

export function PaginationDoc() {
  return (
    <ComponentPage name="Pagination" description="Pagination with page navigation, next and previous links.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for navigating paginated content such as data tables, lists, and search results." },
          { icon: "✅", text: "Use when the total dataset is too large to display on a single page." },
          { icon: "💡", text: "Always highlight the current page and provide context about total pages when possible." },
          { icon: "⚠️", text: "Consider infinite scroll or 'Load more' for feed-style content instead of traditional pagination." },
        ]}
      />

      <BreakpointInfo
        mobile="Show previous/next buttons only. Hide individual page numbers to conserve horizontal space."
        desktop="Show page numbers with ellipsis for large page counts. Display previous and next alongside numbered links."
      />

      <DemoSection title="Default Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </DemoSection>

      <DemoSection title="With Prev/Next Only">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Show the current page clearly with an active state.",
          "Show the total number of pages or results when feasible.",
          "Truncate long page ranges with ellipsis to keep the UI clean.",
          "Disable the Previous button on the first page and Next on the last page.",
        ]}
        donts={[
          "Show all page numbers when there are many pages -- always use ellipsis for truncation.",
          "Use pagination for content that naturally streams (e.g., social feeds).",
          "Hide pagination when there is only one page of results.",
          "Combine pagination with infinite scroll on the same list.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--pagination-item-size", value: "2.25rem", description: "Width and height of each pagination item button." },
          { name: "--pagination-item-radius", value: "var(--radius)", description: "Border radius of pagination item buttons." },
          { name: "--pagination-item-font-size", value: "0.875rem", description: "Font size of page number text." },
          { name: "--pagination-active-bg", value: "var(--primary)", description: "Background color of the active page indicator." },
          { name: "--pagination-active-color", value: "var(--primary-foreground)", description: "Text color of the active page number." },
          { name: "--pagination-hover-bg", value: "var(--accent)", description: "Background color of page items on hover." },
        ]}
      />

      <CodeBlock>{`{/* Full pagination with page numbers */}
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>

{/* Minimal prev/next only */}
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`}</CodeBlock>
    </ComponentPage>
  )
}
