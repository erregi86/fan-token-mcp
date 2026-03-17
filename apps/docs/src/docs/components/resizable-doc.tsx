import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "fan-tokens/resizable"

export function ResizableDoc() {
  return (
    <ComponentPage name="Resizable" description="Resizable panel layouts with drag handles for building IDE-style split panes, dashboards, and adjustable interfaces.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for IDE-style layouts, dashboards, and multi-panel interfaces where users need to control panel sizes." },
          { icon: "✅", text: "Great for email clients, file explorers, and code editors with sidebar/content/inspector patterns." },
          { icon: "💡", text: "Always set sensible defaultSize, minSize, and maxSize constraints to prevent panels from collapsing entirely." },
          { icon: "⚠️", text: "Avoid on mobile -- stacked layouts work much better on narrow screens." },
        ]}
      />

      <BreakpointInfo
        mobile="Resizable panels are not ideal on mobile. Use a stacked or tabbed layout instead for narrow viewports."
        desktop="Horizontal panels with drag handles work well on desktop. Provide good default sizes and min/max constraints."
      />

      <DemoSection title="Two-Panel Layout">
        <div className="h-48 rounded-lg border border-border overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <span className="text-sm font-medium">Panel 1</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-sm font-medium">Panel 2</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </DemoSection>

      <DemoSection title="Three-Panel Layout">
        <div className="h-48 rounded-lg border border-border overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25} minSize={15}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <span className="text-sm">Sidebar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-sm">Content</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25} minSize={15}>
              <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                <span className="text-sm">Inspector</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Set minSize and maxSize constraints to prevent panels from being dragged too small or too large.",
          "Provide sensible defaultSize values that work well for the most common use case.",
          "Use the withHandle prop on ResizableHandle to give users a visible drag affordance.",
        ]}
        donts={[
          "Use resizable panels on mobile -- they are impractical on small touchscreens.",
          "Overuse in simple layouts that do not benefit from user-adjustable sizing.",
          "Forget to test keyboard accessibility for the drag handles.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "border", value: "var(--border)", description: "Color for the resize handle divider." },
          { name: "bg-muted", value: "var(--muted)", description: "Background for panel differentiation." },
          { name: "focus-ring", value: "var(--ring)", description: "Focus indicator on resize handle for keyboard users." },
        ]}
      />

      <CodeBlock>{`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "fan-tokens/resizable"

{/* Two-panel layout */}
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50} minSize={20}>
    Left panel content
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50} minSize={20}>
    Right panel content
  </ResizablePanel>
</ResizablePanelGroup>

{/* Three-panel layout (IDE-style) */}
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25} minSize={15}>
    Sidebar
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    Main content
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={25} minSize={15}>
    Inspector
  </ResizablePanel>
</ResizablePanelGroup>`}</CodeBlock>
    </ComponentPage>
  )
}
