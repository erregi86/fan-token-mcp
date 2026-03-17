import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "fan-tokens"

export function CommandDoc() {
  return (
    <ComponentPage name="Command" description="A fast, composable command palette for searchable action lists, keyboard-driven navigation, and Cmd+K workflows.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for command palettes (Cmd+K / Ctrl+K) that let users quickly find and execute actions." },
          { icon: "✅", text: "Great for searchable action lists, navigation shortcuts, and power-user workflows." },
          { icon: "💡", text: "Group related commands under CommandGroup with descriptive headings for scannability." },
          { icon: "⚠️", text: "Always include a search input -- command palettes without filtering become unwieldy." },
        ]}
      />

      <BreakpointInfo
        mobile="Display as a full-screen modal overlay for easy thumb access and maximum content visibility."
        desktop="Use a centered floating palette (max-width ~640px) with keyboard navigation. Trigger via Cmd+K shortcut."
      />

      <DemoSection title="Basic Command Palette with Groups">
        <Command className="max-w-md rounded-lg border border-border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="Calendar">
                <span className="mr-2">C</span>
                Calendar
              </CommandItem>
              <CommandItem value="Search Emoji">
                <span className="mr-2">S</span>
                Search Emoji
              </CommandItem>
              <CommandItem value="Calculator">
                <span className="mr-2">C</span>
                Calculator
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem value="Profile">
                <span className="mr-2">P</span>
                Profile
              </CommandItem>
              <CommandItem value="Billing">
                <span className="mr-2">B</span>
                Billing
              </CommandItem>
              <CommandItem value="Settings">
                <span className="mr-2">S</span>
                Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Support full keyboard navigation (arrow keys, Enter to select, Escape to close).",
          "Group actions logically with descriptive headings for quick scanning.",
          "Show a helpful empty state when no results match the search query.",
          "Provide keyboard shortcut hints (e.g., Cmd+K) so users discover the feature.",
        ]}
        donts={[
          "Put too many items without search filtering -- the palette becomes unusable.",
          "Use Command for simple dropdown menus -- use Select or DropdownMenu instead.",
          "Forget to handle the empty state -- users need feedback when search yields no results.",
          "Nest command palettes inside each other.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "bg-popover", value: "var(--popover)", description: "Background for the command palette container." },
          { name: "border", value: "var(--border)", description: "Border around the palette and between groups." },
          { name: "bg-accent", value: "var(--accent)", description: "Background for the highlighted/focused item." },
          { name: "text-muted-foreground", value: "var(--muted-foreground)", description: "Color for group headings and secondary text." },
        ]}
      />

      <CodeBlock>{`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "fan-tokens"

{/* Inline command list */}
<Command className="max-w-md rounded-lg border shadow-md">
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem value="new-file">New File</CommandItem>
      <CommandItem value="new-folder">New Folder</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Navigation">
      <CommandItem value="dashboard">Go to Dashboard</CommandItem>
      <CommandItem value="settings">Go to Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

{/* As a dialog (Cmd+K pattern) */}
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandGroup heading="Actions">
      <CommandItem onSelect={() => handleAction("create")}>
        Create new project
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}</CodeBlock>
    </ComponentPage>
  )
}
