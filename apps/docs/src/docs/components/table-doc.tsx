import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Checkbox,
} from "fan-tokens"

export function TableDoc() {
  return (
    <ComponentPage
      name="Table"
      description="A responsive table component for displaying structured data with multiple columns and rows."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for structured data that benefits from columns and rows, such as invoices, user lists, or reports." },
          { icon: "✅", text: "Use TableHead for column headers to provide semantic meaning and styling." },
          { icon: "💡", text: "Add TableCaption for accessibility -- it describes the table's purpose to screen readers." },
          { icon: "⚠️", text: "Consider a card-based layout on mobile if the table has many columns." },
        ]}
      />

      <BreakpointInfo
        mobile="Enable horizontal scrolling for wide tables. Hide non-essential columns and consider switching to a card layout for complex data."
        desktop="Display the full table with all columns visible. Use hover states on rows for better scannability."
      />

      <DemoSection title="Default Table">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV003</TableCell>
              <TableCell>Unpaid</TableCell>
              <TableCell>Bank Transfer</TableCell>
              <TableCell className="text-right">$350.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DemoSection>

      <DemoSection title="With Selection">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow data-state="selected" className="bg-muted/50">
              <TableCell>
                <input type="checkbox" defaultChecked className="rounded border-border" />
              </TableCell>
              <TableCell className="font-medium">Alice Johnson</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell className="text-right">Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">Bob Smith</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell className="text-right">Editor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">Carol White</TableCell>
              <TableCell>carol@example.com</TableCell>
              <TableCell className="text-right">Viewer</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DemoSection>

      <DemoSection title="With Footer">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Widget A</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$50.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Widget B</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">$75.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Widget C</TableCell>
              <TableCell className="text-right">3</TableCell>
              <TableCell className="text-right">$30.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2} className="font-semibold">Total</TableCell>
              <TableCell className="text-right font-semibold">$265.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use TableHead for column headers to provide clear labels.",
          "Keep rows scannable -- limit to 5-7 columns when possible.",
          "Right-align numeric data for easier comparison.",
          "Add TableCaption for accessibility context.",
        ]}
        donts={[
          "Use tables for page layout -- use CSS Grid or Flexbox instead.",
          "Put too many columns on mobile without a scroll container.",
          "Nest complex interactive elements inside table cells.",
          "Omit header rows -- they are critical for data comprehension.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--table-font-size", value: "var(--text-sm)", description: "Base font size for table content." },
          { name: "--table-head-height", value: "2.5rem", description: "Height of the table header row." },
          { name: "--table-head-font-weight", value: "var(--font-weight-medium)", description: "Font weight for header cells." },
          { name: "--table-head-fg", value: "var(--muted-foreground)", description: "Text color for header cells." },
          { name: "--table-cell-padding-x", value: "0.5rem", description: "Horizontal padding inside cells." },
          { name: "--table-cell-padding-y", value: "0.5rem", description: "Vertical padding inside cells." },
          { name: "--table-row-border-color", value: "var(--border)", description: "Color of row divider borders." },
          { name: "--table-row-hover-bg", value: "var(--muted)/50", description: "Background on row hover." },
          { name: "--table-row-selected-bg", value: "var(--muted)/50", description: "Background for selected rows." },
        ]}
      />

      <CodeBlock>{`import {
  Table, TableHeader, TableBody, TableFooter,
  TableRow, TableHead, TableCell, TableCaption,
} from "fan-tokens"

<Table>
  <TableCaption>Recent invoices</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}</CodeBlock>
    </ComponentPage>
  )
}
