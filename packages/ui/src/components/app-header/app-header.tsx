import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

/* ─── AppHeader Root ─── */
interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
}

function AppHeader({ className, children, ...props }: AppHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-border bg-background flex items-center justify-between px-6 py-3 sm:px-8 w-full",
        className
      )}
      data-slot="app-header"
      {...props}
    >
      {children}
    </header>
  )
}

/* ─── AppHeaderLogo ─── */
interface AppHeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function AppHeaderLogo({ className, children, ...props }: AppHeaderLogoProps) {
  return (
    <div className={cn("shrink-0", className)} data-slot="app-header-logo" {...props}>
      {children}
    </div>
  )
}

/* ─── AppHeaderNav ─── */
interface AppHeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function AppHeaderNav({ className, children, ...props }: AppHeaderNavProps) {
  return (
    <nav
      className={cn("hidden sm:flex gap-2 items-center flex-1", className)}
      data-slot="app-header-nav"
      {...props}
    >
      {children}
    </nav>
  )
}

/* ─── AppHeaderNavItem ─── */
interface AppHeaderNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: ReactNode
}

function AppHeaderNavItem({ className, active = false, children, ...props }: AppHeaderNavItemProps) {
  return (
    <button
      className={cn(
        "px-2 py-4 flex items-center justify-center font-semibold text-sm transition-colors",
        active ? "text-primary" : "text-foreground hover:text-primary/80",
        className
      )}
      data-slot="app-header-nav-item"
      {...props}
    >
      {children}
    </button>
  )
}

/* ─── AppHeaderSearch ─── */
interface AppHeaderSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch?: (value: string) => void
  placeholder?: string
}

function AppHeaderSearch({ className, onSearch, placeholder = "Search", ...props }: AppHeaderSearchProps) {
  return (
    <div
      className={cn("hidden md:flex gap-2 items-center bg-muted px-2 py-2 rounded-lg w-80", className)}
      data-slot="app-header-search"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted-foreground shrink-0"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground outline-none"
        data-slot="app-header-search-input"
      />
      <div className="bg-background border border-border rounded px-1.5 py-0.5 text-xs font-medium text-foreground shrink-0">
        /
      </div>
    </div>
  )
}

/* ─── AppHeaderActions ─── */
interface AppHeaderActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function AppHeaderActions({ className, children, ...props }: AppHeaderActionsProps) {
  return (
    <div className={cn("flex gap-3 items-center shrink-0", className)} data-slot="app-header-actions" {...props}>
      {children}
    </div>
  )
}

/* ─── AppHeaderAction Button ─── */
const appHeaderActionVariants = cva(
  "inline-flex items-center justify-center transition-colors rounded-lg border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-border bg-background hover:bg-muted",
        ghost: "hover:bg-muted",
      },
      size: {
        sm: "px-3 py-1.5 text-sm font-medium",
        md: "px-4 py-2 text-sm font-medium",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface AppHeaderActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof appHeaderActionVariants> {
  children: ReactNode
}

function AppHeaderActionButton({
  className,
  variant,
  size,
  children,
  ...props
}: AppHeaderActionButtonProps) {
  return (
    <button
      className={cn(appHeaderActionVariants({ variant, size, className }))}
      data-slot="app-header-action"
      {...props}
    >
      {children}
    </button>
  )
}

/* ─── AppHeaderMobile ─── */
interface AppHeaderMobileProps extends React.HTMLAttributes<HTMLElement> {
  onSearch?: () => void
  onMenu?: () => void
  children: ReactNode
}

function AppHeaderMobile({ className, onSearch, onMenu, children, ...props }: AppHeaderMobileProps) {
  return (
    <header
      className={cn(
        "border-b border-border bg-background flex items-center justify-between px-4 py-2 h-14 w-full",
        className
      )}
      data-slot="app-header-mobile"
      {...props}
    >
      {children}
    </header>
  )
}

/* ─── AppHeaderDataSticky ─── */
interface DataItem {
  label: string
  value: string
}

interface AppHeaderDataStickyProps extends React.HTMLAttributes<HTMLElement> {
  items: DataItem[]
}

function AppHeaderDataSticky({ className, items, ...props }: AppHeaderDataStickyProps) {
  return (
    <div
      className={cn(
        "border-b border-border bg-background flex gap-2 items-center px-4 py-3 w-full overflow-x-auto",
        className
      )}
      data-slot="app-header-data-sticky"
      {...props}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-1 items-center px-2 py-1 shrink-0"
          data-slot="app-header-data-item"
        >
          <span className="text-sm text-muted-foreground font-semibold">{item.label}</span>
          <span className="text-sm text-primary font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  )
}

/* ─── AppHeaderMenuItem ─── */
interface AppHeaderMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: ReactNode
}

function AppHeaderMenuItem({ className, active = false, children, ...props }: AppHeaderMenuItemProps) {
  return (
    <button
      className={cn(
        "px-2 py-4 flex items-center justify-center font-semibold text-sm transition-colors",
        active ? "text-primary" : "text-foreground hover:text-primary/80",
        className
      )}
      data-slot="app-header-menu-item"
      {...props}
    >
      {children}
    </button>
  )
}

export {
  AppHeader,
  AppHeaderLogo,
  AppHeaderNav,
  AppHeaderNavItem,
  AppHeaderSearch,
  AppHeaderActions,
  AppHeaderActionButton,
  AppHeaderMobile,
  AppHeaderDataSticky,
  AppHeaderMenuItem,
}

export type {
  AppHeaderProps,
  AppHeaderLogoProps,
  AppHeaderNavProps,
  AppHeaderNavItemProps,
  AppHeaderSearchProps,
  AppHeaderActionsProps,
  AppHeaderActionButtonProps,
  AppHeaderMobileProps,
  AppHeaderDataStickyProps,
  AppHeaderMenuItemProps,
  DataItem,
}
