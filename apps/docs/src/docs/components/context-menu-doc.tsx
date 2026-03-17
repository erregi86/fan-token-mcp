import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts } from "../docs-layout"
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuLabel } from "fan-tokens"

export function ContextMenuDoc() {
  return (
    <ComponentPage name="Context Menu" description="Displays a menu at the pointer's position on right-click.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use context menus for right-click triggered contextual actions on specific elements." },
          { icon: "💡", text: "Common use cases include file managers, canvas editors, and table rows with row-level actions." },
          { icon: "⚠️", text: "Context menus are not discoverable -- users must know to right-click. Always provide alternative access to the same actions." },
        ]}
      />

      <BreakpointInfo
        mobile="Not available on touch devices (no right-click). Use long-press gesture or an explicit action menu button instead."
        desktop="Right-click triggered menu appears at the pointer position. Supports labels, separators, and nested items."
      />

      <DemoSection title="Basic Context Menu">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>View Page Source</ContextMenuItem>
            <ContextMenuItem>Inspect</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Mirror actions that are available elsewhere in the UI -- context menus are a shortcut, not the only path.",
          "Group related items with separators for scannability.",
          "Keep items relevant to the element being right-clicked.",
        ]}
        donts={[
          "Put unique actions only in the context menu -- they will not be discoverable by most users.",
          "Rely on context menus as the primary way to access functionality.",
          "Use on mobile-first interfaces where right-click is not available.",
        ]}
      />

      <CodeBlock>{`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>View Page Source</ContextMenuItem>
    <ContextMenuItem>Inspect</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</CodeBlock>
    </ComponentPage>
  )
}
