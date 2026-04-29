import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarTrigger, SidebarInset,
} from "fan-tokens/sidebar"

const mainItems = [
  { label: "Dashboard", icon: "D" },
  { label: "Projects", icon: "P" },
  { label: "Analytics", icon: "A" },
]

const settingsItems = [
  { label: "General", icon: "G" },
  { label: "Security", icon: "S" },
  { label: "Billing", icon: "B" },
]

export function SidebarDoc() {
  return (
    <ComponentPage name="Sidebar" description="A responsive application sidebar supporting grouped navigation, collapsible sections, and mobile sheet behavior via Ctrl+B keyboard shortcut.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for app-level navigation with grouped menu items and collapsible sections." },
          { icon: "✅", text: "Supports icon-only collapsed mode, full labels mode, and mobile sheet/drawer." },
          { icon: "💡", text: "Group related navigation items under SidebarGroup with descriptive labels." },
          { icon: "⚠️", text: "Keep top-level navigation items to 5-7 max. Use groups for more items." },
        ]}
      />

      <DemoSection title="Responsive Behavior">
        <BreakpointInfo
          mobile="Sidebar collapses to a drawer/hamburger menu. Use SidebarTrigger to toggle visibility."
          desktop="Persistent sidebar at 240-280px width. Can collapse to icon-only mode (collapsible='icon') for more content space."
        />
      </DemoSection>

      <DemoSection title="Basic Sidebar with Groups">
        <div className="h-[400px] overflow-hidden rounded-lg border border-border">
          <SidebarProvider defaultOpen={true}>
            <Sidebar collapsible="icon">
              <SidebarHeader>
                <div className="flex items-center gap-2 px-2">
                  <div className="size-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">A</div>
                  <span className="text-sm font-semibold">Acme App</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {mainItems.map((item, i) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton isActive={i === 0}>
                            <span className="inline-flex size-4 items-center justify-center rounded bg-muted text-[10px] font-bold">{item.icon}</span>
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel>Settings</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {settingsItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton>
                            <span className="inline-flex size-4 items-center justify-center rounded bg-muted text-[10px] font-bold">{item.icon}</span>
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <div className="px-2 text-xs text-muted-foreground">v2.1.0</div>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset>
              <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                <SidebarTrigger />
                <span className="text-sm font-medium">Main Content</span>
              </div>
              <div className="p-4 text-sm text-muted-foreground">
                Click the trigger or press Ctrl+B to toggle the sidebar. Resize below 768px for mobile sheet behavior.
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </DemoSection>

      <DemoSection title="Collapsible Sidebar">
        <div className="h-[350px] overflow-hidden rounded-lg border border-border">
          <SidebarProvider defaultOpen={false}>
            <Sidebar collapsible="icon">
              <SidebarHeader>
                <div className="flex items-center gap-2 px-2">
                  <div className="size-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">A</div>
                  <span className="text-sm font-semibold">App</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {mainItems.map((item, i) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton isActive={i === 0} tooltip={item.label}>
                            <span className="inline-flex size-4 items-center justify-center rounded bg-muted text-[10px] font-bold">{item.icon}</span>
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                <SidebarTrigger />
                <span className="text-sm font-medium">Icon-only collapsed state</span>
              </div>
              <div className="p-4 text-sm text-muted-foreground">
                The sidebar starts collapsed to icon-only mode. Click the trigger to expand.
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Group menu items logically using SidebarGroup with descriptive SidebarGroupLabel.",
          "Highlight the currently active item with the isActive prop on SidebarMenuButton.",
          "Include a SidebarTrigger so users can toggle sidebar visibility.",
          "Use the tooltip prop on SidebarMenuButton for icon-only collapsed mode.",
        ]}
        donts={[
          "Put too many top-level items without grouping -- it overwhelms users.",
          "Nest navigation more than 2 levels deep -- flatten the hierarchy instead.",
          "Forget mobile behavior -- always test the sheet/drawer fallback at narrow widths.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--sidebar-width", value: "16rem (256px)", description: "Width of the expanded sidebar." },
          { name: "--sidebar-width-icon", value: "3rem (48px)", description: "Width of the collapsed icon-only sidebar." },
          { name: "bg-card", value: "var(--card)", description: "Background color for the sidebar." },
          { name: "border", value: "var(--border)", description: "Border separating sidebar from content." },
        ]}
      />

      <CodeBlock>{`import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarTrigger, SidebarInset,
} from "fan-tokens/sidebar"

<SidebarProvider>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <span>My App</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Settings</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
    {/* page content */}
  </SidebarInset>
</SidebarProvider>`}</CodeBlock>
    </ComponentPage>
  )
}
