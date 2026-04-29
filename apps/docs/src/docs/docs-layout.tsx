import { useState, useEffect, useMemo, Suspense } from "react"
import { cn } from "fan-tokens/utils"

/* ─── Component registry ─── */
export interface ComponentDoc {
  slug: string
  name: string
  category: string
  description: string
  render: () => React.ReactNode
}

const CATEGORIES = [
  "Foundations",
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
  const knownSlugs = useMemo(
    () => new Set(["introduction", "tokens", ...components.map((c) => c.slug)]),
    [components]
  )
  const getSlugFromHash = () => {
    const hashSlug = window.location.hash.slice(1) || "introduction"
    return knownSlugs.has(hashSlug) ? hashSlug : "introduction"
  }
  const [activeSlug, setActiveSlug] = useState(getSlugFromHash)
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
    const onHash = () => setActiveSlug(getSlugFromHash())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [knownSlugs])

  const navigate = (slug: string) => {
    if (!knownSlugs.has(slug)) return
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
  const showcaseComponents = components.filter((c) => c.category === "Showcases")
  const activeShowcaseComponent = showcaseComponents.find((c) => c.slug === activeSlug)
  const isShowcasePage = Boolean(activeShowcaseComponent)

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
          <img src="/favicon.svg" alt="FanTokens" width="32" height="32" className="shrink-0" />
          <div>
            <h1 className="text-sm font-semibold leading-none">FanTokens</h1>
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
            {showcaseComponents.map((item) => (
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
              {activeComponent ? `${activeComponent.category} / ${activeComponent.name}` : "Introduction"}
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
          {isShowcasePage ? (
            <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6">
              <Suspense fallback={<div className="flex items-center justify-center h-64 text-muted-foreground">Loading showcase...</div>}>
                {activeShowcaseComponent?.render()}
              </Suspense>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl px-4 py-6 sm:px-8 sm:py-8">
              {activeSlug === "introduction" && <IntroductionPage count={components.length} />}
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
          <svg width="48" height="48" viewBox="0 0 136 27.0408" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M40.7267 8.98292H33.4123V12.3383H39.8162V14.872H33.4123V20.9889H30.3836V6.41943H40.7267V8.98292Z" fill="currentColor"/>
            <path d="M42.2951 11.3683C43.0406 10.4181 44.3207 9.94301 46.1355 9.94301C47.3166 9.94301 48.3656 10.1773 49.283 10.6457C50.2001 11.1143 50.6587 11.9985 50.6587 13.2984V18.2472C50.6587 18.5904 50.6652 19.0061 50.6785 19.4943C50.6983 19.8639 50.7543 20.1146 50.8467 20.2466C50.939 20.3786 51.0776 20.4875 51.2625 20.5732V20.9889H48.1942C48.1083 20.7711 48.049 20.5667 48.016 20.3752C47.9829 20.1839 47.9565 19.9662 47.9369 19.722C47.5473 20.1443 47.0988 20.5039 46.5907 20.8008C45.9836 21.1504 45.2974 21.3254 44.5319 21.3254C43.5554 21.3254 42.7486 21.0465 42.112 20.489C41.4751 19.9315 41.1569 19.1414 41.1569 18.1185C41.1569 16.7922 41.6681 15.8321 42.6911 15.2383C43.2517 14.915 44.0767 14.684 45.1655 14.5454L46.1256 14.4267C46.6467 14.3608 47.0196 14.2782 47.244 14.1792C47.6463 14.0077 47.8478 13.7405 47.8478 13.3775C47.8478 12.9355 47.6943 12.6303 47.3874 12.462C47.0807 12.2937 46.6303 12.2096 46.0365 12.2096C45.3699 12.2096 44.8983 12.3746 44.621 12.7045C44.4232 12.9486 44.2911 13.2785 44.2252 13.6942H41.5033C41.5627 12.7507 41.8264 11.9754 42.2951 11.3683ZM44.3934 18.9499C44.6573 19.1677 44.9806 19.2766 45.3634 19.2766C45.9705 19.2766 46.5297 19.0984 47.0411 18.7421C47.5523 18.3858 47.818 17.7359 47.8379 16.7922V15.7431C47.6597 15.8554 47.4798 15.946 47.2984 16.0152C47.1169 16.0845 46.8679 16.1489 46.5511 16.2082L45.9177 16.327C45.3238 16.4327 44.8983 16.5613 44.6408 16.7131C44.2054 16.9704 43.9876 17.3697 43.9876 17.9107C43.9876 18.3924 44.1227 18.7389 44.3934 18.9499Z" fill="currentColor"/>
            <path d="M57.9932 12.2888C57.0363 12.2888 56.3798 12.6946 56.0236 13.5062C55.8387 13.9352 55.7463 14.4828 55.7463 15.1492V20.9889H52.9354V10.2201H55.6572V11.7939C56.0201 11.2396 56.3632 10.8405 56.6867 10.5962C57.2672 10.1607 58.0031 9.94301 58.8938 9.94301C60.0088 9.94301 60.9211 10.235 61.6306 10.819C62.3398 11.4029 62.6945 12.3714 62.6945 13.724V20.9889H59.8045V14.4267C59.8045 13.8592 59.7285 13.4237 59.5767 13.1202C59.2996 12.5659 58.7716 12.2888 57.9932 12.2888Z" fill="currentColor"/>
            <path d="M76.227 6.39958V8.98291H71.8621V20.9888H68.794V8.98291H64.4093V6.39958H76.227Z" fill="currentColor"/>
            <path d="M84.7855 11.5662C85.696 12.7079 86.1513 14.0572 86.1513 15.6144C86.1513 17.198 85.696 18.5525 84.7855 19.6774C83.8748 20.8025 82.4924 21.365 80.6382 21.365C78.784 21.365 77.4017 20.8025 76.4912 19.6774C75.5805 18.5525 75.1252 17.198 75.1252 15.6144C75.1252 14.0572 75.5805 12.7079 76.4912 11.5662C77.4017 10.4247 78.784 9.85392 80.6382 9.85392C82.4924 9.85392 83.8748 10.4247 84.7855 11.5662ZM80.6283 12.2393C79.8035 12.2393 79.1685 12.5313 78.723 13.1152C78.2777 13.6992 78.0549 14.5323 78.0549 15.6144C78.0549 16.6966 78.2777 17.5313 78.723 18.1185C79.1685 18.7059 79.8035 18.9994 80.6283 18.9994C81.4531 18.9994 82.0865 18.7059 82.5287 18.1185C82.9707 17.5313 83.1918 16.6966 83.1918 15.6144C83.1918 14.5323 82.9707 13.6992 82.5287 13.1152C82.0865 12.5313 81.4531 12.2393 80.6283 12.2393Z" fill="currentColor"/>
            <path d="M97.8148 20.9888H94.41L91.8267 16.3765L90.6587 17.5939V20.9888H87.8873V6.44907H90.6587V14.3079L94.1724 10.2498H97.6664L93.8952 14.3772L97.8148 20.9888Z" fill="currentColor"/>
            <path d="M107.904 17.8216C107.832 18.4616 107.498 19.1116 106.905 19.7714C105.981 20.8206 104.687 21.3452 103.025 21.3452C101.652 21.3452 100.441 20.9032 99.3922 20.0188C98.3431 19.1347 97.8184 17.6963 97.8184 15.7034C97.8184 13.8362 98.2917 12.4043 99.2387 11.4078C100.186 10.4116 101.415 9.91329 102.926 9.91329C103.823 9.91329 104.631 10.0815 105.351 10.418C106.07 10.7546 106.664 11.2858 107.132 12.0116C107.554 12.6516 107.828 13.394 107.954 14.2386C108.026 14.7334 108.056 15.4461 108.043 16.3765H100.659C100.699 17.4587 101.038 18.2174 101.679 18.6529C102.068 18.9236 102.536 19.0588 103.084 19.0588C103.665 19.0588 104.136 18.8939 104.499 18.5639C104.697 18.3857 104.872 18.1383 105.024 17.8216L107.904 17.8216ZM105.113 14.5157C105.067 13.7701 104.841 13.2042 104.435 12.8183C104.029 12.4322 103.526 12.2392 102.926 12.2392C102.272 12.2392 101.766 12.4438 101.406 12.8529C101.047 13.2621 100.821 13.8163 100.728 14.5157L105.113 14.5157Z" fill="currentColor"/>
            <path d="M114.844 12.2888C113.887 12.2888 113.231 12.6946 112.875 13.5062C112.69 13.9352 112.597 14.4828 112.597 15.1492V20.9889H109.787V10.2201H112.508V11.7939C112.871 11.2396 113.214 10.8405 113.538 10.5962C114.118 10.1607 114.854 9.94301 115.745 9.94301C116.86 9.94301 117.772 10.235 118.482 10.819C119.191 11.4029 119.546 12.3714 119.546 13.724V20.9889H116.656V14.4267C116.656 13.8592 116.58 13.4237 116.428 13.1202C116.151 12.5659 115.623 12.2888 114.844 12.2888Z" fill="currentColor"/>
            <path d="M129.276 10.6952C130.12 11.2364 130.605 12.1668 130.731 13.4864H127.91C127.87 13.1236 127.768 12.8366 127.603 12.6253C127.293 12.2427 126.765 12.0512 126.019 12.0512C125.406 12.0512 124.969 12.147 124.708 12.3383C124.447 12.5297 124.317 12.754 124.317 13.0113C124.317 13.3347 124.456 13.569 124.733 13.7141C125.01 13.8659 125.99 14.1265 127.672 14.4959C128.794 14.7599 129.635 15.1591 130.196 15.6936C130.751 16.2347 131.028 16.911 131.028 17.7226C131.028 18.7916 130.63 19.6643 129.835 20.3406C129.04 21.0169 127.811 21.3551 126.148 21.3551C124.452 21.3551 123.2 20.997 122.392 20.2812C121.584 19.5653 121.18 18.653 121.18 17.5444H124.04C124.099 18.046 124.228 18.4023 124.426 18.6134C124.776 18.9895 125.422 19.1776 126.366 19.1776C126.92 19.1776 127.361 19.0951 127.687 18.9301C128.014 18.7653 128.177 18.5179 128.177 18.1878C128.177 17.8711 128.045 17.6303 127.781 17.4653C127.517 17.3004 126.537 17.0166 124.842 16.6141C123.621 16.3106 122.76 15.9311 122.258 15.4759C121.757 15.0272 121.506 14.3806 121.506 13.5359C121.506 12.5396 121.897 11.6835 122.679 10.9674C123.461 10.2516 124.561 9.89353 125.98 9.89353C127.326 9.89353 128.425 10.1607 129.276 10.6952Z" fill="currentColor"/>
            <path d="M131.028 6.22715V5.67576H133.057V6.22715H132.372V7.97438H131.703V6.22715H131.028ZM134.891 7.97438H134.37L133.872 6.30774V7.97438H133.261V5.67576H134.216L134.634 6.99854L135.046 5.67576H136V7.97438H135.39V6.30774L134.891 7.97438Z" fill="currentColor"/>
          </svg>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">FanTokens</h1>
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
      <div className="rounded-lg border-2 border-success/30 bg-success/5 p-4">
        <h4 className="flex items-center gap-1.5 text-sm font-semibold text-success mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Do
        </h4>
        <ul className="space-y-1.5">
          {dos.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 size-1 shrink-0 rounded-full bg-success" />
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
        <h4 className="flex items-center gap-1.5 text-sm font-semibold text-destructive mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          Don't
        </h4>
        <ul className="space-y-1.5">
          {donts.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 size-1 shrink-0 rounded-full bg-destructive" />
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
