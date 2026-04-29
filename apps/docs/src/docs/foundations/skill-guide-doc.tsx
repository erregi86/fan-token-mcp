import { ComponentPage, DemoSection, CodeBlock } from "../docs-layout"
import { Badge } from "fan-tokens"

export function SkillGuideDoc() {
  return (
    <ComponentPage
      name="Page Generator Skill"
      description="Generate production-ready pages using FanTokens components and design tokens."
    >
      <DemoSection title="Overview">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            The <code className="font-mono bg-muted px-2 py-1 rounded text-xs">/fan-tokens</code> skill generates complete, production-ready pages using only components and tokens from the FanTokens design system. No configuration needed — copy and paste ready.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="success">Dashboard</Badge>
            <Badge variant="success">Landing Pages</Badge>
            <Badge variant="success">Admin Interfaces</Badge>
            <Badge variant="secondary">Zero Setup</Badge>
            <Badge variant="secondary">Token-Driven</Badge>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Option 1: Quick Defaults">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Generate a page with sensible defaults in one command.</p>
          <CodeBlock>{`/fan-tokens generate-page dashboard
/fan-tokens generate-page landing
/fan-tokens generate-page backoffice`}</CodeBlock>
          <p className="text-xs text-muted-foreground mt-3">Creates a complete page with responsive layout and all features included. Use when you need a quick starting point.</p>
        </div>
      </DemoSection>

      <DemoSection title="Option 2: Preset Templates">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Choose a specific template layout for your page type.</p>
          <CodeBlock>{`// Landing page templates
/fan-tokens create landing --template minimal
/fan-tokens create landing --template corporate

// Dashboard templates
/fan-tokens create dashboard --template minimal
/fan-tokens create dashboard --template full

// Backoffice templates
/fan-tokens create backoffice --template minimal
/fan-tokens create backoffice --template full`}</CodeBlock>
          <p className="text-xs text-muted-foreground mt-3">Use when you want a specific layout preset without customizing individual sections.</p>
        </div>
      </DemoSection>

      <DemoSection title="Option 3: Custom Sections">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Build exactly what you need by selecting specific sections.</p>
          <CodeBlock>{`// Dashboard with stats and recent orders
/fan-tokens build dashboard --sections=stats,recent_orders,growth

// Landing with hero and features
/fan-tokens build landing --sections=hero,features_grid,cta

// Backoffice with sidebar and table
/fan-tokens build backoffice --sections=header,sidebar,table,pagination`}</CodeBlock>

          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold text-foreground">Available sections by page type:</p>
            <div className="grid gap-4 md:grid-cols-3 text-xs">
              <div>
                <p className="font-semibold text-foreground mb-2">Dashboard</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• stats</li>
                  <li>• recent_orders</li>
                  <li>• growth</li>
                  <li>• activity_feed</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Landing</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• hero</li>
                  <li>• features_grid</li>
                  <li>• testimonials</li>
                  <li>• pricing</li>
                  <li>• faq</li>
                  <li>• cta</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Backoffice</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• header</li>
                  <li>• sidebar</li>
                  <li>• filters</li>
                  <li>• table</li>
                  <li>• bulk_actions</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Use when you need fine-grained control over page structure.</p>
        </div>
      </DemoSection>

      <DemoSection title="What Gets Generated">
        <div className="space-y-3">
          <div className="p-3 border border-border rounded-lg">
            <p className="font-semibold text-sm mb-1">✅ Complete TSX File</p>
            <p className="text-xs text-muted-foreground">Proper imports from fan-tokens, responsive grids, design token usage throughout</p>
          </div>
          <div className="p-3 border border-border rounded-lg">
            <p className="font-semibold text-sm mb-1">✅ Zero Configuration</p>
            <p className="text-xs text-muted-foreground">Copy and paste ready. No additional setup or configuration required</p>
          </div>
          <div className="p-3 border border-border rounded-lg">
            <p className="font-semibold text-sm mb-1">✅ Token-Driven</p>
            <p className="text-xs text-muted-foreground">All colors and spacing use semantic tokens. Change colors by updating token values</p>
          </div>
          <div className="p-3 border border-border rounded-lg">
            <p className="font-semibold text-sm mb-1">✅ Production-Ready</p>
            <p className="text-xs text-muted-foreground">TypeScript with proper types, responsive layouts, WCAG accessible components</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="How to Use Generated Pages">
        <CodeBlock>{`1. Copy the generated TSX code
2. Create a new file: src/pages/my-dashboard.tsx
3. Paste the code
4. Import in your router:

import DashboardPage from '@/pages/my-dashboard'

// In your router
<Route path="/admin" element={<DashboardPage />} />

5. Customize with your data`}</CodeBlock>
      </DemoSection>

      <DemoSection title="Available Page Types">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold text-sm mb-2">Dashboard</h3>
            <p className="text-xs text-muted-foreground">Admin and analytics dashboards with stat cards, tables, and progress indicators</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold text-sm mb-2">Landing</h3>
            <p className="text-xs text-muted-foreground">Marketing landing pages with hero, features, testimonials, and CTAs</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold text-sm mb-2">Backoffice</h3>
            <p className="text-xs text-muted-foreground">Admin interfaces with sidebar, tables, filters, and bulk actions</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Tips for Best Results">
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="text-primary font-semibold">1.</span>
            <div>
              <p className="font-medium text-sm">Low token usage</p>
              <p className="text-xs text-muted-foreground">All generated pages are optimized for minimal API usage while maintaining quality</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-primary font-semibold">2.</span>
            <div>
              <p className="font-medium text-sm">Responsive by default</p>
              <p className="text-xs text-muted-foreground">All pages work perfectly on mobile, tablet, and desktop without extra work</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-primary font-semibold">3.</span>
            <div>
              <p className="font-medium text-sm">Token-first design</p>
              <p className="text-xs text-muted-foreground">Every color, spacing, and text size uses semantic tokens for consistency</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-primary font-semibold">4.</span>
            <div>
              <p className="font-medium text-sm">Type-safe by default</p>
              <p className="text-xs text-muted-foreground">Generated with TypeScript, no any types, full IntelliSense support</p>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Example: Dashboard Layout">
        <div className="p-4 border border-border rounded-lg bg-muted/30 text-xs text-muted-foreground space-y-2">
          <p>A generated dashboard includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>AppHeader with navigation</li>
            <li>4-column stat cards showing key metrics</li>
            <li>Recent orders table with status badges</li>
            <li>Progress indicators for growth trends</li>
            <li>Responsive grid (1 col mobile, 2+ col tablet/desktop)</li>
          </ul>
        </div>
      </DemoSection>

      <DemoSection title="Example: Landing Page Layout">
        <div className="p-4 border border-border rounded-lg bg-muted/30 text-xs text-muted-foreground space-y-2">
          <p>A generated landing page includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>AppHeader with navigation and CTAs</li>
            <li>Hero section with headline and buttons</li>
            <li>Feature cards in responsive grid</li>
            <li>Stats section highlighting key metrics</li>
            <li>Final CTA section with footer</li>
          </ul>
        </div>
      </DemoSection>

      <DemoSection title="Component Registry">
        <p className="text-xs text-muted-foreground mb-3">Generated pages use these FanTokens components:</p>
        <CodeBlock>{`Layout: Card, Separator, ScrollArea
Controls: Button, Input, Badge, Select
Display: Table, Avatar, Progress, Skeleton
Feedback: Alert, Toast
Navigation: Tabs, Breadcrumb, Pagination, AppHeader

Semantic Tokens: primary, secondary, destructive, success,
                warning, muted, background, foreground`}</CodeBlock>
      </DemoSection>
    </ComponentPage>
  )
}
