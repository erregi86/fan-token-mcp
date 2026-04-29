import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Sheet, SheetContent } from "../sheet"
import { Button } from "../button"

/* ─── Constants ─── */
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_COLLAPSED = "3rem"
const MOBILE_BREAKPOINT = 768

/* ─── Context ─── */
interface SidebarContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  toggleSidebar: () => void
  isMobile: boolean
  state: "expanded" | "collapsed"
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error("Sidebar components must be within <SidebarProvider>")
  return ctx
}

/* ─── Provider ─── */
interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
}

function SidebarProvider({ defaultOpen = true, className, children, ...props }: SidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Keyboard shortcut: Ctrl+B
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const toggleSidebar = useCallback(() => setOpen((prev) => !prev), [])
  const state = open ? "expanded" : "collapsed"

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggleSidebar, isMobile, state }}>
      <div
        data-slot="sidebar-provider"
        data-state={state}
        className={cn("group/sidebar-wrapper flex min-h-svh w-full", className)}
        style={{ "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-collapsed": SIDEBAR_WIDTH_COLLAPSED } as React.CSSProperties}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

/* ─── Sidebar ─── */
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}

function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }: SidebarProps) {
  const { isMobile, state, open, setOpen } = useSidebar()

  if (collapsible === "none") {
    return (
      <div data-slot="sidebar" className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)} {...props}>
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side={side}
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className="group peer relative hidden h-full md:block" data-state={state} data-collapsible={state === "collapsed" ? collapsible : ""} data-side={side}>
      {/* Spacer */}
      <div
        className={cn(
          "relative h-full w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          state === "collapsed" && (collapsible === "offcanvas" ? "w-0" : "w-[--sidebar-width-collapsed]"),
          side === "right" && "rotate-180"
        )}
      />
      {/* Actual sidebar */}
      <div
        data-slot="sidebar"
        className={cn(
          "absolute inset-y-0 z-10 hidden h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left" ? "left-0 border-r border-sidebar-border" : "right-0 border-l border-sidebar-border",
          state === "collapsed" && collapsible === "offcanvas" && (side === "left" ? "left-[calc(var(--sidebar-width)*-1)]" : "right-[calc(var(--sidebar-width)*-1)]"),
          state === "collapsed" && collapsible === "icon" && "w-[--sidebar-width-collapsed]",
          variant === "floating" && "m-2 rounded-lg border border-sidebar-border shadow",
          variant === "inset" && "m-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

/* ─── Sub-parts ─── */
function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />
}

function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-content" className={cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2", className)} {...props} />
}

function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />
}

function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-group" className={cn("relative flex w-full min-w-0 flex-col p-2", className)} {...props} />
}

function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-group-label"
      className={cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70", className)}
      {...props}
    />
  )
}

function SidebarGroupContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-group-content" className={cn("w-full text-sm", className)} {...props} />
}

function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul data-slot="sidebar-menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
}

function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li data-slot="sidebar-menu-item" className={cn("group/menu-item relative", className)} {...props} />
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground border",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  tooltip?: string
}

function SidebarMenuButton({ isActive = false, tooltip, className, ...props }: SidebarMenuButtonProps) {
  return (
    <button
      data-slot="sidebar-menu-button"
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants(), isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium", className)}
      {...props}
    />
  )
}

/* ─── Trigger ─── */
function SidebarTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleSidebar } = useSidebar()
  return (
    <Button variant="ghost" size="icon" className={cn("size-7", className)} onClick={toggleSidebar} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>
      </svg>
    </Button>
  )
}

/* ─── Inset ─── */
function SidebarInset({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn("relative flex min-h-svh flex-1 flex-col bg-background", className)}
      {...props}
    />
  )
}

export {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarTrigger, SidebarInset,
  useSidebar,
}
