import { useState, useEffect, useMemo, lazy, Suspense } from "react"
import { cn } from "fan-tokens/utils"

const DashboardShowcase = lazy(() => import("./showcases/dashboard-showcase").then(m => ({ default: () => <m.DashboardShowcase /> })))
const LandingShowcase = lazy(() => import("./showcases/landing-showcase").then(m => ({ default: () => <m.LandingShowcase /> })))
const CryptoShowcase = lazy(() => import("./showcases/crypto-showcase").then(m => ({ default: () => <m.CryptoShowcase /> })))
const TokenDetailShowcase = lazy(() => import("./showcases/token-detail-showcase").then(m => ({ default: () => <m.TokenDetailShowcase /> })))

/* ─── Component registry ─── */
export interface ComponentDoc {
  slug: string
  name: string
  category: string
  description: string
  render: () => React.ReactNode
}

const CATEGORIES = [
  "Getting Started",
  "Form Controls",
  "Layout",
  "Data Display",
  "Feedback",
  "Overlays",
  "Menus",
  "Navigation",
  "Search",
] as const

interface DocsLayoutProps {
  components: ComponentDoc[]
}

export function DocsLayout({ components }: DocsLayoutProps) {
  const [activeSlug, setActiveSlug] = useState(() => window.location.hash.slice(1) || "introduction")
  const [search, setSearch] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  // Track screen size
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile && !sidebarOpen) setSidebarOpen(true)
      if (mobile && sidebarOpen) setSidebarOpen(false)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Sync hash
  useEffect(() => {
    const onHash = () => setActiveSlug(window.location.hash.slice(1) || "introduction")
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  const navigate = (slug: string) => {
    window.location.hash = slug
    setActiveSlug(slug)
    if (isMobile) setSidebarOpen(false)
  }

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  // Grouped & filtered
  const grouped = useMemo(() => {
    const q = search.toLowerCase()
    const filtered = components.filter(
      (c) => c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
    )
    const map = new Map<string, ComponentDoc[]>()
    for (const cat of CATEGORIES) {
      const items = filtered.filter((c) => c.category === cat)
      if (items.length) map.set(cat, items)
    }
    return map
  }, [components, search])

  const activeComponent = components.find((c) => c.slug === activeSlug)

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* ─── Mobile overlay backdrop ─── */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ─── Sidebar ─── */}
      <aside
        className={cn(
          "flex flex-col border-r border-border bg-card transition-all duration-200 overflow-hidden shrink-0",
          isMobile
            ? "fixed inset-y-0 left-0 z-50 w-72 shadow-xl"
            : sidebarOpen ? "w-72" : "w-0",
          isMobile && !sidebarOpen && "-translate-x-full"
        )}
        style={isMobile ? { transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)" } : undefined}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">
            UI
          </div>
          <div>
            <h1 className="text-sm font-semibold leading-none">MCP UI</h1>
            <p className="text-xs text-muted-foreground">Design System</p>
          </div>
        </div>

        {/* Search */}
        <div className="border-b border-border px-3 py-2">
          <div className="flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              placeholder="Search components..."
              className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 py-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
          {/* Introduction */}
          <button
            onClick={() => navigate("introduction")}
            className={cn(
              "mb-1 flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors",
              activeSlug === "introduction"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Introduction
          </button>

          {/* Tokens */}
          <button
            onClick={() => navigate("tokens")}
            className={cn(
              "mb-2 flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors",
              activeSlug === "tokens"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"/></svg>
            Design Tokens
          </button>

          {/* Component categories */}
          {Array.from(grouped.entries()).map(([category, items]) => (
            <div key={category} className="mb-3">
              <div className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                {category}
              </div>
              {items.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => navigate(item.slug)}
                  className={cn(
                    "flex w-full items-center rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                    activeSlug === item.slug
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          ))}

          {/* Showcase */}
          <div className="mb-3">
            <div className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
              Showcase
            </div>
            <button
              onClick={() => navigate("showcase-dashboard")}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                activeSlug === "showcase-dashboard"
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
              Dashboard
            </button>
            <button
              onClick={() => navigate("showcase-landing")}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                activeSlug === "showcase-landing"
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              Landing Page
            </button>
            <button
              onClick={() => navigate("showcase-crypto")}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                activeSlug === "showcase-crypto"
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              Crypto Tracker
            </button>
            <button
              onClick={() => navigate("showcase-token-detail")}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                activeSlug === "showcase-token-detail"
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              Token Detail
            </button>
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-3 py-2 text-[10px] text-muted-foreground">
          {components.length} components
        </div>
      </aside>

      {/* ─── Main ─── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            </button>
            <span className="text-sm text-muted-foreground">
              {activeComponent ? `${activeComponent.category} / ${activeComponent.name}` : activeSlug === "tokens" ? "Design Tokens" : activeSlug === "showcase-dashboard" ? "Showcase / Dashboard" : activeSlug === "showcase-landing" ? "Showcase / Landing Page" : activeSlug === "showcase-crypto" ? "Showcase / Crypto Tracker" : activeSlug === "showcase-token-detail" ? "Showcase / Token Detail" : "Introduction"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {activeSlug.startsWith("showcase-") ? (
            <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6">
              <Suspense fallback={<div className="flex items-center justify-center h-64 text-muted-foreground">Loading showcase...</div>}>
                {activeSlug === "showcase-dashboard" && <DashboardShowcase />}
                {activeSlug === "showcase-landing" && <LandingShowcase />}
                {activeSlug === "showcase-crypto" && <CryptoShowcase />}
                {activeSlug === "showcase-token-detail" && <TokenDetailShowcase />}
              </Suspense>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl px-4 py-6 sm:px-8 sm:py-8">
              {activeSlug === "introduction" && <IntroductionPage count={components.length} />}
              {activeSlug === "tokens" && <TokensPage />}
              {activeComponent && activeComponent.render()}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

/* ─── Introduction ─── */
function IntroductionPage({ count }: { count: number }) {
  const CATEGORY_INFO = [
    { name: "Form Controls", icon: "📝", count: 12, desc: "Button, Input, Select, Checkbox, Switch, Slider, and more" },
    { name: "Layout", icon: "📐", count: 9, desc: "Card, Separator, ScrollArea, Collapsible, Resizable, Sidebar" },
    { name: "Data Display", icon: "📊", count: 5, desc: "Badge, Avatar, Table, Skeleton, Progress" },
    { name: "Feedback", icon: "💬", count: 3, desc: "Alert, Tooltip, Toast" },
    { name: "Overlays", icon: "🪟", count: 6, desc: "Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard" },
    { name: "Menus", icon: "📋", count: 3, desc: "DropdownMenu, ContextMenu, Menubar" },
    { name: "Navigation", icon: "🧭", count: 5, desc: "Accordion, Tabs, Breadcrumb, Pagination, NavigationMenu" },
    { name: "Search", icon: "🔍", count: 1, desc: "Command palette with fuzzy search" },
  ]

  const PRINCIPLES = [
    { title: "Composable", desc: "Small, single-purpose primitives that combine into complex interfaces. No monolithic components — compose what you need.", icon: "🧩" },
    { title: "Accessible", desc: "WAI-ARIA compliant with full keyboard navigation, focus management, and screen reader support built into every component.", icon: "♿" },
    { title: "Themeable", desc: "Powered by CSS custom properties and semantic design tokens. Switch between light and dark themes, or create your own.", icon: "🎨" },
    { title: "Type-safe", desc: "Written in TypeScript with strict types. Every prop, variant, and callback is fully typed for a smooth developer experience.", icon: "🔒" },
  ]

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground text-lg font-bold">UI</div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">MCP UI</h1>
            <p className="text-sm text-muted-foreground">v1.0.0</p>
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A production-ready design system built on custom design tokens, following <span className="font-medium text-foreground">shadcn/ui</span> patterns.
          Fully composable, accessible, and themeable — with zero external dependencies.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <div className="text-3xl font-bold text-primary">{count}</div>
          <div className="mt-1 text-sm text-muted-foreground">Components</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <div className="text-3xl font-bold text-primary">8</div>
          <div className="mt-1 text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <div className="text-3xl font-bold text-primary">4</div>
          <div className="mt-1 text-sm text-muted-foreground">Showcases</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <div className="text-3xl font-bold text-primary">2</div>
          <div className="mt-1 text-sm text-muted-foreground">Themes</div>
        </div>
      </div>

      {/* Design Principles */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Design Principles</h2>
        <p className="text-sm text-muted-foreground mb-4">The foundational ideas behind every component in the library.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xl">{p.icon}</span>
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Component Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Component Categories</h2>
        <p className="text-sm text-muted-foreground mb-4">Browse {count} components organized across {CATEGORY_INFO.length} categories.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {CATEGORY_INFO.map((cat) => (
            <div key={cat.name} className="flex items-start gap-3 rounded-lg border border-border p-4 hover:bg-muted/30 transition-colors">
              <span className="text-xl mt-0.5">{cat.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm">{cat.name}</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{cat.count}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Quick Start</h2>
        <p className="text-sm text-muted-foreground mb-4">Import any component from the barrel export and start building.</p>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">1</span>
              <h3 className="text-sm font-semibold">Import components</h3>
            </div>
            <pre className="text-sm text-muted-foreground font-mono overflow-x-auto"><code>{`import { Button, Input, Card, Badge } from "fan-tokens"`}</code></pre>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">2</span>
              <h3 className="text-sm font-semibold">Use in your app</h3>
            </div>
            <pre className="text-sm text-muted-foreground font-mono overflow-x-auto"><code>{`function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Enter your name" />
        <Button variant="default">Get Started</Button>
      </CardContent>
    </Card>
  )
}`}</code></pre>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">3</span>
              <h3 className="text-sm font-semibold">Customize with variants</h3>
            </div>
            <pre className="text-sm text-muted-foreground font-mono overflow-x-auto"><code>{`{/* Buttons */}
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">More...</Button>

{/* Badges */}
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>`}</code></pre>
          </div>
        </div>
      </div>

      {/* Theming */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Theming</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Every component is styled with semantic design tokens. Toggle between light and dark modes using the <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">🌙</span> button in the top-right corner.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-white p-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
                <div className="size-3 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-gray-900">Light Mode</span>
              </div>
            </div>
            <div className="bg-card px-4 py-2.5 text-xs text-muted-foreground border-t border-border font-mono">
              class="light" &middot; Default
            </div>
          </div>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gray-950 p-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1.5">
                <div className="size-3 rounded-full bg-blue-400" />
                <span className="text-sm font-medium text-gray-100">Dark Mode</span>
              </div>
            </div>
            <div className="bg-card px-4 py-2.5 text-xs text-muted-foreground border-t border-border font-mono">
              class="dark" &middot; Toggle in header
            </div>
          </div>
        </div>
      </div>

      {/* Project Structure */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Project Structure</h2>
        <p className="text-sm text-muted-foreground mb-4">The library is organized for easy navigation and tree-shaking.</p>
        <div className="rounded-lg border border-border bg-muted/30 p-5">
          <pre className="text-sm text-muted-foreground font-mono overflow-x-auto"><code>{`src/
├── mcp/                    # Component library
│   ├── index.ts            # Barrel export (import from "fan-tokens")
│   ├── components/         # 44 component folders
│   │   ├── button/         #   └── button.tsx + index.ts
│   │   ├── input/
│   │   ├── card/
│   │   └── ...
│   ├── lib/                # Utilities (cn, etc.)
│   └── tokens/             # Design tokens
│
├── docs/                   # This documentation app
│   ├── components/         # 44 component doc pages
│   └── showcases/          # Full-page showcase demos
│       ├── dashboard       # Admin dashboard
│       ├── landing         # Marketing landing page
│       └── crypto          # CoinMarketCap-style tracker`}</code></pre>
        </div>
      </div>

      {/* Each doc page includes */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Documentation Format</h2>
        <p className="text-sm text-muted-foreground mb-4">Every component page includes the following sections for a consistent learning experience.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "💡", title: "Usage Guidelines", desc: "When and why to use the component" },
            { icon: "📱", title: "Responsive Behavior", desc: "How it adapts to mobile vs desktop" },
            { icon: "🎭", title: "Live Demos", desc: "Interactive examples of every variant" },
            { icon: "✅", title: "Do's and Don'ts", desc: "Best practices and anti-patterns" },
            { icon: "🎨", title: "Design Tokens", desc: "CSS variables you can override" },
            { icon: "📄", title: "Code Examples", desc: "Copy-paste import and usage snippets" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-2.5 rounded-lg border border-border p-3.5">
              <span className="text-lg mt-0.5">{item.icon}</span>
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Tokens Page ─── */
function TokensPage() {
  const colors = [
    { name: "Primary", var: "bg-primary", fg: "text-primary-foreground" },
    { name: "Secondary", var: "bg-secondary", fg: "text-secondary-foreground" },
    { name: "Accent", var: "bg-accent", fg: "text-accent-foreground" },
    { name: "Destructive", var: "bg-destructive", fg: "text-destructive-foreground" },
    { name: "Muted", var: "bg-muted", fg: "text-muted-foreground" },
    { name: "Background", var: "bg-background", fg: "text-foreground" },
    { name: "Card", var: "bg-card", fg: "text-card-foreground" },
    { name: "Popover", var: "bg-popover", fg: "text-popover-foreground" },
  ]

  const status = [
    { name: "Success", bg: "bg-success", fg: "text-success-foreground" },
    { name: "Warning", bg: "bg-warning", fg: "text-warning-foreground" },
    { name: "Info", bg: "bg-info", fg: "text-info-foreground" },
    { name: "Pending", bg: "bg-pending", fg: "text-pending-foreground" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
      <p className="mt-2 text-muted-foreground">Your brand colors, mapped to semantic roles.</p>

      <h2 className="mt-8 text-xl font-semibold">Core Colors</h2>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {colors.map((c) => (
          <div key={c.name} className="overflow-hidden rounded-lg border border-border">
            <div className={cn("flex h-20 items-center justify-center", c.var)}>
              <span className={cn("text-xs font-medium", c.fg)}>{c.name}</span>
            </div>
            <div className="bg-card px-3 py-2 text-xs text-muted-foreground font-mono">{c.var.replace("bg-", "")}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-semibold">Status Colors</h2>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {status.map((c) => (
          <div key={c.name} className="overflow-hidden rounded-lg border border-border">
            <div className={cn("flex h-20 items-center justify-center", c.bg)}>
              <span className={cn("text-xs font-medium", c.fg)}>{c.name}</span>
            </div>
            <div className="bg-card px-3 py-2 text-xs text-muted-foreground font-mono">{c.bg.replace("bg-", "")}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-semibold">Border & Ring</h2>
      <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-md border-2 border-border" />
          <span className="text-sm text-muted-foreground">border</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-md border-2 border-input" />
          <span className="text-sm text-muted-foreground">input</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-md ring-2 ring-ring" />
          <span className="text-sm text-muted-foreground">ring</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Shared demo wrapper ─── */
export function ComponentPage({
  name,
  description,
  children,
}: {
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="mt-8 space-y-8">{children}</div>
    </div>
  )
}

export function DemoSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      <div className="rounded-lg border border-border bg-card p-6">{children}</div>
    </div>
  )
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <div className="mt-3 rounded-md bg-muted/50 p-4">
      <pre className="text-xs font-mono text-muted-foreground overflow-x-auto"><code>{children}</code></pre>
    </div>
  )
}

/* ─── Rich doc sections ─── */

export function UsageGuidelines({ guidelines }: { guidelines: { icon: "✅" | "📱" | "🖥️" | "💡" | "⚠️"; text: string }[] }) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-5">
      <h3 className="text-sm font-semibold mb-3">Usage Guidelines</h3>
      <ul className="space-y-2">
        {guidelines.map((g, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-0.5 shrink-0">{g.icon}</span>
            <span>{g.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BreakpointInfo({ mobile, desktop }: { mobile: string; desktop: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-border p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
          <h4 className="text-sm font-semibold">Mobile (&lt; 640px)</h4>
        </div>
        <p className="text-sm text-muted-foreground">{mobile}</p>
      </div>
      <div className="rounded-lg border border-border p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
          <h4 className="text-sm font-semibold">Desktop (&ge; 640px)</h4>
        </div>
        <p className="text-sm text-muted-foreground">{desktop}</p>
      </div>
    </div>
  )
}

export function VariantGuide({ variants }: { variants: { name: string; when: string; className?: string }[] }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="bg-muted/30 px-4 py-2.5 border-b border-border">
        <h3 className="text-sm font-semibold">When to use each variant</h3>
      </div>
      <div className="divide-y divide-border">
        {variants.map((v) => (
          <div key={v.name} className="flex items-start gap-4 px-4 py-3">
            <code className={cn("shrink-0 rounded-md bg-muted px-2 py-0.5 text-xs font-mono font-medium", v.className)}>
              {v.name}
            </code>
            <span className="text-sm text-muted-foreground">{v.when}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DosAndDonts({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border-2 border-green-500/30 bg-green-500/5 p-4">
        <h4 className="flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Do
        </h4>
        <ul className="space-y-1.5">
          {dos.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 size-1 shrink-0 rounded-full bg-green-500" />
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border-2 border-red-500/30 bg-red-500/5 p-4">
        <h4 className="flex items-center gap-1.5 text-sm font-semibold text-red-600 dark:text-red-400 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          Don't
        </h4>
        <ul className="space-y-1.5">
          {donts.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 size-1 shrink-0 rounded-full bg-red-500" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function TokensReference({ tokens }: { tokens: { name: string; value: string; description: string }[] }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="bg-muted/30 px-4 py-2.5 border-b border-border">
        <h3 className="text-sm font-semibold">Design Tokens</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/10">
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Token</th>
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Default</th>
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tokens.map((t) => (
              <tr key={t.name}>
                <td className="px-4 py-2 font-mono text-xs text-primary">{t.name}</td>
                <td className="px-4 py-2 font-mono text-xs text-muted-foreground">{t.value}</td>
                <td className="px-4 py-2 text-xs text-muted-foreground">{t.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
