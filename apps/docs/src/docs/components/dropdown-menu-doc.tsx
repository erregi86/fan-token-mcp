import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
  Button,
} from "fan-tokens"

export function DropdownMenuDoc() {
  return (
    <ComponentPage name="Dropdown Menu" description="Displays a menu to the user — such as a set of actions or functions.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use dropdown menus for action menus triggered by a button, such as account menus or context actions." },
          { icon: "💡", text: "Group related actions with separators and labels to improve scannability." },
          { icon: "⚠️", text: "Keep menus focused. If you have more than 10 items, consider reorganizing into submenus or a different pattern." },
        ]}
      />

      <BreakpointInfo
        mobile="Consider a full-width bottom sheet for menus with many items to improve touch targets."
        desktop="Positioned dropdown near the trigger. Submenus are supported for organizing nested actions."
      />

      <DemoSection title="Basic Menu">
        <DropdownMenu>
          <DropdownMenuTrigger><Button variant="outline">Open Menu</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem>Billing<DropdownMenuShortcut>⌘B</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem>Settings<DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoSection>

      <DemoSection title="With Sub-items">
        <DropdownMenu>
          <DropdownMenuTrigger><Button variant="outline">More Options</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>New File</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuItem>Copy Link</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoSection>

      <DemoSection title="With Separator Groups">
        <DropdownMenu>
          <DropdownMenuTrigger><Button variant="outline">Actions</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Edit</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cut</DropdownMenuItem>
            <DropdownMenuItem>Copy</DropdownMenuItem>
            <DropdownMenuItem>Paste</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>View</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Zoom In</DropdownMenuItem>
            <DropdownMenuItem>Zoom Out</DropdownMenuItem>
            <DropdownMenuItem>Reset Zoom</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Group related items with separators and labels for better scannability.",
          "Include keyboard shortcuts where applicable to improve power-user efficiency.",
          "Keep the menu to 7-10 items maximum per level.",
          "Use descriptive, concise labels for each menu item.",
        ]}
        donts={[
          "Put too many items in a single menu level -- consider grouping or submenus.",
          "Nest more than one level deep -- deeply nested submenus are hard to navigate.",
          "Use dropdown menus for navigation -- use a proper nav component instead.",
          "Mix destructive and non-destructive actions without clear separation.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--menu-bg", value: "var(--popover)", description: "Background color of the dropdown menu." },
          { name: "--menu-fg", value: "var(--popover-foreground)", description: "Text color of menu items." },
          { name: "--menu-border", value: "var(--border)", description: "Border color of the menu container." },
          { name: "--menu-radius", value: "0.375rem", description: "Border radius of the menu container." },
          { name: "--menu-shadow", value: "0 4px 6px -1px rgba(0,0,0,0.1)", description: "Box shadow of the dropdown menu." },
          { name: "--menu-item-radius", value: "0.25rem", description: "Border radius of individual menu items." },
          { name: "--menu-separator-color", value: "var(--border)", description: "Color of the separator line between groups." },
        ]}
      />

      <CodeBlock>{`<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      Settings
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Email</DropdownMenuItem>
        <DropdownMenuItem>Copy Link</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}</CodeBlock>
    </ComponentPage>
  )
}
