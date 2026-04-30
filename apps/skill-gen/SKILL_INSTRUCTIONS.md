# FanTokens Page Generator Skill

Generate complete, production-ready pages using FanTokens components. The skill creates full TSX files with proper imports, styling using design tokens, and responsive layouts.

## Available Page Types

- `dashboard` - Admin/analytics dashboard
- `landing` - Marketing landing page
- `backoffice` - Admin interface with tables and forms
- `token-showcase` - Design token showcase page
- `pricing` - Pricing page with multiple tiers

## Syntax Options

### Option 1: Generate with Default Template

```
/fan-tokens generate-page dashboard
/fan-tokens generate-page landing
/fan-tokens generate-page backoffice
```

Creates a page with sensible defaults and minimal setup.

**Use when:** You need a quick starting point

---

### Option 2: Create with Specific Template

```
/fan-tokens create landing --template corporate
/fan-tokens create dashboard --template full
/fan-tokens create backoffice --template minimal
```

**Available templates:**
- `landing`: `minimal`, `corporate`
- `dashboard`: `minimal`, `full`
- `backoffice`: `minimal`, `full`

**Use when:** You want a specific layout preset

---

### Option 3: Build Custom with Sections

```
/fan-tokens build dashboard --sections=stats,recent_orders,growth
/fan-tokens build backoffice --sections=header,sidebar,table,pagination
/fan-tokens build landing --sections=hero,features,testimonials,pricing,cta
```

**Available sections:**
- `dashboard`: stats, recent_orders, growth, activity_feed
- `landing`: hero, features_grid, testimonials, pricing, faq, cta
- `backoffice`: header, sidebar, filters, table, bulk_actions

**Use when:** You need fine-grained control

---

## What Gets Generated

✅ **Complete TSX file** with:
- Proper imports from `fan-tokens`
- Responsive grid layouts (mobile, tablet, desktop)
- Design token usage (colors, spacing, typography)
- Semantic component composition
- Sample data/mock content

✅ **Zero configuration** - Copy and paste ready

✅ **Token-driven** - Change colors by updating token values

---

## Example Outputs

### Dashboard
- Header with navigation
- 4-column stat cards
- Recent orders table
- Progress indicators

### Landing Page
- Hero section
- Feature cards (6 in grid)
- Stats section
- CTA sections
- Footer

### Backoffice
- Top navigation
- Sidebar menu
- Data table with pagination
- Filters
- Bulk action buttons

---

## Component Registry

The skill uses components from the FanTokens library:

**Layout:** Card, Separator, ScrollArea

**Controls:** Button, Input, Badge, Select

**Display:** Table, Avatar, Progress, Skeleton

**Feedback:** Alert, Toast

**Navigation:** Tabs, Breadcrumb, Pagination

**Header:** AppHeader with Logo, Nav, Search, and Actions

**Semantic tokens:** primary, secondary, destructive, success, warning, info, muted, background, foreground

---

## How to Use Generated Pages

1. Copy the generated TSX code
2. Create a new file: `src/pages/your-page.tsx`
3. Paste the code
4. Import in your router
5. Customize with your data

```tsx
import DashboardPage from '@/pages/dashboard'
import LandingPage from '@/pages/landing'

// In your router
<Route path="/admin" element={<DashboardPage />} />
<Route path="/" element={<LandingPage />} />
```

---

## Tips

- **Low token usage**: All generated pages are optimized for minimal prompt size
- **Responsive by default**: All pages work on mobile, tablet, desktop
- **Token-first**: Every color, spacing, and text size uses design tokens
- **Type-safe**: Generated with TypeScript, no `any` types
- **Accessible**: Components include proper ARIA attributes

---

## Examples

See `/skill-gen/examples/` for:
- `dashboard-example.tsx` - Complete dashboard implementation
- `landing-example.tsx` - Complete landing page implementation
