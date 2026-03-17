import { createContext, useContext, useState, useRef, useEffect } from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

/* ─── Context ─── */
interface NavigationMenuContextValue {
  activeItem: string | null
  setActiveItem: (id: string | null) => void
}

const NavigationMenuContext = createContext<NavigationMenuContextValue>({ activeItem: null, setActiveItem: () => {} })

/* ─── Root ─── */
function NavigationMenu({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  return (
    <NavigationMenuContext.Provider value={{ activeItem, setActiveItem }}>
      <nav data-slot="navigation-menu" className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)} {...props}>
        {children}
        <NavigationMenuViewport />
      </nav>
    </NavigationMenuContext.Provider>
  )
}

/* ─── List ─── */
function NavigationMenuList({ className, children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul data-slot="navigation-menu-list" className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)} {...props}>
      {children}
    </ul>
  )
}

/* ─── Item Context ─── */
const ItemContext = createContext<{ id: string; triggerRef: React.RefObject<HTMLButtonElement | null> } | null>(null)

function NavigationMenuItem({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  const id = useRef(Math.random().toString(36).slice(2, 9)).current
  const triggerRef = useRef<HTMLButtonElement>(null)
  return (
    <ItemContext.Provider value={{ id, triggerRef }}>
      <li data-slot="navigation-menu-item" className={cn("relative", className)} {...props}>
        {children}
      </li>
    </ItemContext.Provider>
  )
}

/* ─── Trigger ─── */
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50"
)

function NavigationMenuTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { activeItem, setActiveItem } = useContext(NavigationMenuContext)
  const item = useContext(ItemContext)
  if (!item) return null
  const isOpen = activeItem === item.id

  return (
    <button ref={item.triggerRef} data-slot="navigation-menu-trigger" data-state={isOpen ? "open" : "closed"}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      onClick={() => setActiveItem(isOpen ? null : item.id)}
      onMouseEnter={() => setActiveItem(item.id)}
      {...props}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={cn("relative top-[1px] ml-1 transition duration-300", isOpen && "rotate-180")} aria-hidden>
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </button>
  )
}

/* ─── Content ─── */
function NavigationMenuContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { activeItem } = useContext(NavigationMenuContext)
  const item = useContext(ItemContext)
  if (!item || activeItem !== item.id) return null

  return (
    <div data-slot="navigation-menu-content" data-state="open"
      className={cn("absolute left-0 top-full w-full animate-fade-in md:w-auto", className)} {...props}>
      {children}
    </div>
  )
}

/* ─── Link ─── */
function NavigationMenuLink({ className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a data-slot="navigation-menu-link" className={cn(navigationMenuTriggerStyle(), className)} {...props}>
      {children}
    </a>
  )
}

/* ─── Viewport ─── */
function NavigationMenuViewport({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { activeItem, setActiveItem } = useContext(NavigationMenuContext)

  useEffect(() => {
    if (!activeItem) return
    const handleClick = () => setActiveItem(null)
    const timer = setTimeout(() => document.addEventListener("click", handleClick), 0)
    return () => { clearTimeout(timer); document.removeEventListener("click", handleClick) }
  }, [activeItem, setActiveItem])

  return (
    <div data-slot="navigation-menu-viewport" className={cn("absolute left-0 top-full flex justify-center", className)} {...props} />
  )
}

/* ─── Indicator ─── */
function NavigationMenuIndicator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="navigation-menu-indicator" className={cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", className)} {...props}>
      <div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </div>
  )
}

export {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
  NavigationMenuViewport, NavigationMenuIndicator, navigationMenuTriggerStyle,
}
