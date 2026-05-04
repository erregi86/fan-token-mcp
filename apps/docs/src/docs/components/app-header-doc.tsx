import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import {
  AppHeader, AppHeaderLogo, AppHeaderNav,
  AppHeaderSearch, AppHeaderActions, AppHeaderActionButton,
  AppHeaderMobile, AppHeaderDataSticky, AppHeaderMenuItem
} from "fan-tokens"

const logoUrl = "https://www.figma.com/api/mcp/asset/abbdabf7-e64c-4c27-96d4-7704f026edc5"

export function AppHeaderDoc() {
  return (
    <ComponentPage
      name="App Header"
      description="A flexible top navigation header component for applications. Includes logo placement, navigation items, search bar, and action buttons with responsive behavior."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for main application navigation across all pages." },
          { icon: "✅", text: "Include a logo, primary navigation, and important actions (search, CTA buttons)." },
          { icon: "✅", text: "Keep the header sticky or persistent so users can navigate from any page position." },
          { icon: "💡", text: "Hide secondary navigation items on mobile — use a menu button or drawer if needed." },
          { icon: "⚠️", text: "Avoid overcrowding the header with too many action buttons." },
        ]}
      />

      <DemoSection title="Responsive Behavior">
        <BreakpointInfo
          mobile="Logo only, with a menu trigger button for navigation. Hide search and secondary actions behind a drawer or mobile menu."
          desktop="Full header with logo, navigation menu, search bar, and all action buttons visible in a single row."
        />
      </DemoSection>

      <DemoSection title="Basic Header">
        <div className="border rounded-lg overflow-hidden bg-background">
          <AppHeader>
            <AppHeaderLogo>
              <img src={logoUrl} alt="FanTokens Logo" className="w-[130px] h-8" />
            </AppHeaderLogo>
            <AppHeaderNav>
              <AppHeaderMenuItem active>Fan Tokens</AppHeaderMenuItem>
              <AppHeaderMenuItem>Voting</AppHeaderMenuItem>
              <AppHeaderMenuItem>Rewards</AppHeaderMenuItem>
              <AppHeaderMenuItem>Newsroom</AppHeaderMenuItem>
            </AppHeaderNav>
            <AppHeaderSearch placeholder="Search..." />
            <AppHeaderActions>
              <AppHeaderActionButton variant="default">Get Alpha Alerts</AppHeaderActionButton>
              <AppHeaderActionButton variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </AppHeaderActionButton>
            </AppHeaderActions>
          </AppHeader>
        </div>
      </DemoSection>

      <DemoSection title="Header Variants">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold mb-3">Default (Blue Button)</p>
            <div className="border rounded-lg overflow-hidden bg-background">
              <AppHeader>
                <AppHeaderLogo><span className="font-bold">App</span></AppHeaderLogo>
                <AppHeaderNav>
                  <AppHeaderMenuItem active>Home</AppHeaderMenuItem>
                  <AppHeaderMenuItem>Features</AppHeaderMenuItem>
                </AppHeaderNav>
                <AppHeaderSearch placeholder="Search..." />
                <AppHeaderActions>
                  <AppHeaderActionButton variant="default" size="sm">Sign Up</AppHeaderActionButton>
                </AppHeaderActions>
              </AppHeader>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">With Outline Button</p>
            <div className="border rounded-lg overflow-hidden bg-background">
              <AppHeader>
                <AppHeaderLogo><span className="font-bold">Docs</span></AppHeaderLogo>
                <AppHeaderNav>
                  <AppHeaderMenuItem active>Overview</AppHeaderMenuItem>
                  <AppHeaderMenuItem>Guide</AppHeaderMenuItem>
                </AppHeaderNav>
                <AppHeaderSearch placeholder="Search docs..." />
                <AppHeaderActions>
                  <AppHeaderActionButton variant="outline" size="sm">Sign In</AppHeaderActionButton>
                </AppHeaderActions>
              </AppHeader>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Minimal (Logo + Actions)</p>
            <div className="border rounded-lg overflow-hidden bg-background">
              <AppHeader>
                <AppHeaderLogo><span className="font-bold">Brand</span></AppHeaderLogo>
                <div className="flex-1" />
                <AppHeaderActions>
                  <AppHeaderActionButton variant="ghost" size="sm">Log In</AppHeaderActionButton>
                  <AppHeaderActionButton variant="default" size="sm">Get Started</AppHeaderActionButton>
                </AppHeaderActions>
              </AppHeader>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Navigation States">
        <div className="border rounded-lg overflow-hidden bg-background">
          <AppHeader>
            <AppHeaderLogo><span className="font-bold">Nav States</span></AppHeaderLogo>
            <AppHeaderNav>
              <AppHeaderMenuItem active>Active</AppHeaderMenuItem>
              <AppHeaderMenuItem>Inactive</AppHeaderMenuItem>
              <AppHeaderMenuItem disabled>Disabled</AppHeaderMenuItem>
            </AppHeaderNav>
          </AppHeader>
        </div>
      </DemoSection>

      <DemoSection title="Action Buttons">
        <div className="border rounded-lg overflow-hidden bg-background">
          <AppHeader>
            <AppHeaderLogo><span className="font-bold">Actions</span></AppHeaderLogo>
            <div className="flex-1" />
            <AppHeaderActions>
              <AppHeaderActionButton variant="default">Primary</AppHeaderActionButton>
              <AppHeaderActionButton variant="outline">Secondary</AppHeaderActionButton>
              <AppHeaderActionButton variant="ghost">Ghost</AppHeaderActionButton>
              <AppHeaderActionButton variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
              </AppHeaderActionButton>
            </AppHeaderActions>
          </AppHeader>
        </div>
      </DemoSection>

      <DemoSection title="Desktop Header V2">
        <div className="border rounded-lg overflow-hidden bg-background">
          <AppHeader>
            <AppHeaderLogo><span className="font-bold">FanTokens</span></AppHeaderLogo>
            <AppHeaderNav>
              <AppHeaderMenuItem active>Fan Tokens</AppHeaderMenuItem>
              <AppHeaderMenuItem>Voting</AppHeaderMenuItem>
              <AppHeaderMenuItem>Rewards</AppHeaderMenuItem>
              <AppHeaderMenuItem>Newsroom</AppHeaderMenuItem>
            </AppHeaderNav>
            <AppHeaderSearch placeholder="Search" />
            <AppHeaderActions>
              <AppHeaderActionButton variant="default">Get Alpha Alerts</AppHeaderActionButton>
              <AppHeaderActionButton variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </AppHeaderActionButton>
            </AppHeaderActions>
          </AppHeader>
        </div>
      </DemoSection>

      <DemoSection title="Mobile Header">
        <div className="border rounded-lg overflow-hidden bg-background">
          <AppHeaderMobile>
            <AppHeaderLogo><span className="font-bold">FanTokens</span></AppHeaderLogo>
            <AppHeaderActions>
              <AppHeaderActionButton variant="default" size="sm">Get Alpha Alerts</AppHeaderActionButton>
              <AppHeaderActionButton variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
              </AppHeaderActionButton>
              <AppHeaderActionButton variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
              </AppHeaderActionButton>
            </AppHeaderActions>
          </AppHeaderMobile>
        </div>
      </DemoSection>

      <DemoSection title="Data Sticky Header">
        <div className="border rounded-lg overflow-hidden bg-background">
          <AppHeaderDataSticky
            items={[
              { label: "Fan Tokens:", value: "86" },
              { label: "Market Cap:", value: "$220,915,707" },
              { label: "Diluted Market Cap:", value: "$679,420,906" },
              { label: "24h Volume:", value: "$106,313,653" },
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection title="Menu Item States">
        <div className="border rounded-lg overflow-hidden bg-background p-4">
          <div className="flex gap-4">
            <AppHeaderMenuItem active>Active Menu</AppHeaderMenuItem>
            <AppHeaderMenuItem>Inactive Menu</AppHeaderMenuItem>
          </div>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Keep the header clean and uncluttered with only essential navigation and actions.",
          "Use semantic colors for buttons (blue for primary CTA, outlined for secondary).",
          "Show the current page in the navigation with an active state (blue text).",
          "Make navigation items keyboard navigable and accessible.",
          "Use icon buttons for secondary actions and status indicators.",
        ]}
        donts={[
          "Don't put too many navigation links in the header (max 5-6 on desktop).",
          "Don't hide all navigation on mobile — provide an accessible menu alternative.",
          "Don't use the header for page titles (use a separate title/breadcrumb).",
          "Don't make the header taller than 80px to preserve vertical space.",
          "Don't mix too many button styles — stick to primary, outline, and ghost.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--background", value: "var(--background)", description: "Header background color." },
          { name: "--border", value: "var(--border)", description: "Bottom border color separating header from content." },
          { name: "--foreground", value: "var(--foreground)", description: "Default text color for nav items." },
          { name: "--primary", value: "var(--primary)", description: "Active nav item color and primary button background." },
          { name: "--muted", value: "var(--muted)", description: "Search bar background color." },
          { name: "--primary-foreground", value: "var(--primary-foreground)", description: "Text color on primary buttons." },
        ]}
      />

      <CodeBlock>{`import {
  AppHeader, AppHeaderLogo, AppHeaderNav, AppHeaderMenuItem,
  AppHeaderSearch, AppHeaderActions, AppHeaderActionButton,
  AppHeaderMobile, AppHeaderDataSticky
} from "fan-tokens"

export default function Header() {
  return (
    <>
      {/* Data Sticky Bar */}
      <AppHeaderDataSticky
        items={[
          { label: "Fan Tokens:", value: "86" },
          { label: "Market Cap:", value: "$220M" },
        ]}
      />

      {/* Desktop Header */}
      <AppHeader>
        <AppHeaderLogo>
          <span className="text-lg font-bold">FanTokens</span>
        </AppHeaderLogo>

        <AppHeaderNav>
          <AppHeaderMenuItem active>Home</AppHeaderMenuItem>
          <AppHeaderMenuItem>Features</AppHeaderMenuItem>
          <AppHeaderMenuItem>Pricing</AppHeaderMenuItem>
          <AppHeaderMenuItem>Docs</AppHeaderMenuItem>
        </AppHeaderNav>

        <AppHeaderSearch placeholder="Search..." />

        <AppHeaderActions>
          <AppHeaderActionButton variant="default">
            Get Alpha Alerts
          </AppHeaderActionButton>
          <AppHeaderActionButton variant="outline" size="icon">
            {/* Theme Toggle Icon */}
          </AppHeaderActionButton>
        </AppHeaderActions>
      </AppHeader>
    </>
  )
}`}</CodeBlock>
    </ComponentPage>
  )
}
