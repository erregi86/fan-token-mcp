import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "fan-tokens"

export function NavigationMenuDoc() {
  return (
    <ComponentPage name="Navigation Menu" description="A collection of links for navigating websites.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for top-level site navigation with rich dropdown content panels." },
          { icon: "✅", text: "Use when navigation items need to reveal sub-links, descriptions, or featured content." },
          { icon: "💡", text: "Keep top-level items to 4-7 for scannability. Use mega-menu patterns for larger sites." },
          { icon: "⚠️", text: "Not suitable for in-page navigation -- use Tabs or anchor links instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Collapse navigation into a hamburger menu or slide-out drawer. Show items vertically in a stacked layout."
        desktop="Horizontal navigation bar with hover/click-activated dropdown panels."
      />

      <DemoSection title="Basic Navigation Menu">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 w-[400px]">
                <div className="grid gap-3">
                  <div className="rounded-md bg-muted p-4">
                    <h3 className="text-sm font-medium">MCP UI</h3>
                    <p className="text-xs text-muted-foreground mt-1">Beautifully designed components built with your tokens.</p>
                  </div>
                  <NavigationMenuLink href="#" className="text-sm">Introduction</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="text-sm">Installation</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="text-sm">Typography</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 w-[400px]">
                <div className="grid grid-cols-2 gap-3">
                  <NavigationMenuLink href="#" className="text-sm">Alert Dialog</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="text-sm">Hover Card</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="text-sm">Progress</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="text-sm">Scroll Area</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="text-sm">Tabs</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="text-sm">Tooltip</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Keep top-level navigation items to 4-7 for easy scanning.",
          "Use clear, concise labels for navigation triggers.",
          "Include a direct link option for items that do not need a dropdown.",
          "Provide visual feedback (highlight, underline) for the active navigation item.",
        ]}
        donts={[
          "Deeply nest navigation -- limit dropdown content to one level of depth.",
          "Use for in-page section navigation -- use Tabs or anchor links instead.",
          "Overload dropdown panels with too many links -- group and limit content.",
          "Auto-open dropdowns on hover for mobile -- use click/tap interactions.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--nav-trigger-padding-x", value: "1rem", description: "Horizontal padding inside navigation trigger buttons." },
          { name: "--nav-trigger-padding-y", value: "0.5rem", description: "Vertical padding inside navigation trigger buttons." },
          { name: "--nav-trigger-font-size", value: "0.875rem", description: "Font size of navigation trigger labels." },
          { name: "--nav-trigger-font-weight", value: "500", description: "Font weight of navigation trigger labels." },
          { name: "--nav-content-radius", value: "var(--radius)", description: "Border radius of the dropdown content panel." },
          { name: "--nav-content-padding", value: "1rem", description: "Inner padding of the dropdown content panel." },
          { name: "--nav-content-shadow", value: "var(--shadow-md)", description: "Box shadow applied to the dropdown content panel." },
          { name: "--nav-content-bg", value: "var(--popover)", description: "Background color of the dropdown content panel." },
        ]}
      />

      <CodeBlock>{`<NavigationMenu>
  <NavigationMenuList>
    {/* Item with dropdown content */}
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent className="p-4 w-[400px]">
        <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
        <NavigationMenuLink href="#">Installation</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Direct link item (no dropdown) */}
    <NavigationMenuItem>
      <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</CodeBlock>
    </ComponentPage>
  )
}
