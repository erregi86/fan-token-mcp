import type { Meta, StoryObj } from "@storybook/react"
import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset,
} from "fan-tokens"

const meta = {
  title: "Components/Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="px-4 text-lg font-semibold">Acme Inc</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {["Dashboard", "Projects", "Calendar", "Settings"].map((item) => (
                  <SidebarMenuItem key={item}>
                    <SidebarMenuButton>{item}</SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Page Content</h1>
          <p className="text-muted-foreground mt-2">This is the main content area next to the sidebar.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}
