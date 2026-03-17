import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts } from "../docs-layout"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from "fan-tokens"

export function MenubarDoc() {
  return (
    <ComponentPage name="Menubar" description="A visually persistent menu common in desktop applications.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use menubars for desktop app-style menu bars with top-level categories like File, Edit, and View." },
          { icon: "💡", text: "Ideal for productivity tools, editors, and admin dashboards that need a rich command surface." },
          { icon: "⚠️", text: "Menubars take up horizontal space and rely on hover/click patterns suited to desktop. Consider alternatives for mobile." },
        ]}
      />

      <BreakpointInfo
        mobile="Collapse the menubar into a hamburger menu or a single dropdown to conserve horizontal space."
        desktop="Full horizontal menubar with keyboard navigation between menus. Supports shortcuts and separators."
      />

      <DemoSection title="Basic Menubar">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab<MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
              <MenubarItem>New Window<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print<MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
              <MenubarItem>Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use standard, familiar menu labels (File, Edit, View, Help) that users expect.",
          "Include keyboard shortcuts for common actions to support power users.",
          "Group related items with separators within each menu.",
        ]}
        donts={[
          "Use menubars on mobile-first applications -- the pattern does not translate well to small screens.",
          "Overload menus with too many items; keep each menu focused and scannable.",
          "Use non-standard or creative menu names that break user expectations.",
        ]}
      />

      <CodeBlock>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab
        <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window
        <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</CodeBlock>
    </ComponentPage>
  )
}
