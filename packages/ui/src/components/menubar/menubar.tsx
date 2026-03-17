import { createContext, useContext, useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"

/* ─── Menubar Context ─── */
interface MenubarContextValue {
  activeMenu: string | null
  setActiveMenu: (id: string | null) => void
}

const MenubarContext = createContext<MenubarContextValue>({ activeMenu: null, setActiveMenu: () => {} })

function Menubar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  return (
    <MenubarContext.Provider value={{ activeMenu, setActiveMenu }}>
      <div data-slot="menubar" role="menubar" className={cn("flex h-9 items-center gap-1 rounded-md border border-border bg-background p-1 shadow-sm", className)} {...props}>
        {children}
      </div>
    </MenubarContext.Provider>
  )
}

/* ─── Menu Context ─── */
interface MenuContextValue {
  id: string
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const MenuContext = createContext<MenuContextValue | null>(null)

function MenubarMenu({ children }: { children: React.ReactNode }) {
  const id = useRef(Math.random().toString(36).slice(2, 9)).current
  const triggerRef = useRef<HTMLButtonElement>(null)
  return <MenuContext.Provider value={{ id, triggerRef }}>{children}</MenuContext.Provider>
}

/* ─── Trigger ─── */
function MenubarTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { activeMenu, setActiveMenu } = useContext(MenubarContext)
  const menu = useContext(MenuContext)
  if (!menu) return null
  const isOpen = activeMenu === menu.id

  return (
    <button ref={menu.triggerRef} data-slot="menubar-trigger" data-state={isOpen ? "open" : "closed"}
      className={cn("flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", isOpen && "bg-accent text-accent-foreground", className)}
      onClick={() => setActiveMenu(isOpen ? null : menu.id)}
      onMouseEnter={() => { if (activeMenu && activeMenu !== menu.id) setActiveMenu(menu.id) }}
      {...props}>
      {children}
    </button>
  )
}

/* ─── Content ─── */
function MenubarContent({ className, children, align = "start", sideOffset = 4, ...props }: React.HTMLAttributes<HTMLDivElement> & { align?: "start" | "center" | "end"; sideOffset?: number }) {
  const { activeMenu, setActiveMenu } = useContext(MenubarContext)
  const menu = useContext(MenuContext)
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ top: 0, left: 0 })

  const isOpen = menu && activeMenu === menu.id

  useEffect(() => {
    if (!isOpen || !menu?.triggerRef.current) return
    const rect = menu.triggerRef.current.getBoundingClientRect()
    setPos({ top: rect.bottom + sideOffset + window.scrollY, left: rect.left + window.scrollX })

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && menu.triggerRef.current && !menu.triggerRef.current.contains(e.target as Node)) setActiveMenu(null)
    }
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveMenu(null) }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => { document.removeEventListener("mousedown", handleClick); document.removeEventListener("keydown", handleKey) }
  }, [isOpen, menu, setActiveMenu, sideOffset])

  if (!isOpen) return null

  return createPortal(
    <div ref={ref} data-slot="menubar-content" style={{ position: "absolute", top: pos.top, left: pos.left }}
      className={cn("z-50 min-w-[12rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-fade-in", className)} {...props}>
      {children}
    </div>,
    document.body
  )
}

/* ─── Shared items ─── */
function MenubarItem({ className, inset, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  const { setActiveMenu } = useContext(MenubarContext)
  return (
    <div data-slot="menubar-item" role="menuitem" tabIndex={-1}
      className={cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", inset && "pl-8", className)}
      onClick={() => setActiveMenu(null)} {...props}>
      {children}
    </div>
  )
}

function MenubarSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="menubar-separator" className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
}

function MenubarLabel({ className, inset, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return <div data-slot="menubar-label" className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)} {...props} />
}

function MenubarShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span data-slot="menubar-shortcut" className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}

function MenubarCheckboxItem({ className, children, checked, onCheckedChange, ...props }: React.HTMLAttributes<HTMLDivElement> & { checked?: boolean; onCheckedChange?: (v: boolean) => void }) {
  return (
    <div data-slot="menubar-checkbox-item" role="menuitemcheckbox" aria-checked={checked}
      className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground", className)}
      onClick={() => onCheckedChange?.(!checked)} {...props}>
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
      </span>
      {children}
    </div>
  )
}

const RadioCtx = createContext<{ value: string; onValueChange: (v: string) => void } | null>(null)

function MenubarRadioGroup({ value = "", onValueChange, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (v: string) => void }) {
  return <RadioCtx.Provider value={{ value, onValueChange: onValueChange ?? (() => {}) }}><div role="group" {...props}>{children}</div></RadioCtx.Provider>
}

function MenubarRadioItem({ className, children, value, ...props }: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = useContext(RadioCtx)
  const checked = ctx?.value === value
  return (
    <div data-slot="menubar-radio-item" role="menuitemradio" aria-checked={checked}
      className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground", className)}
      onClick={() => ctx?.onValueChange(value)} {...props}>
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <span className="size-2 rounded-full bg-current" />}
      </span>
      {children}
    </div>
  )
}

function MenubarSub({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <MenubarSubCtx.Provider value={{ open }}>{children}</MenubarSubCtx.Provider>
    </div>
  )
}

const MenubarSubCtx = createContext<{ open: boolean }>({ open: false })

function MenubarSubTrigger({ className, inset, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div data-slot="menubar-sub-trigger" className={cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground", inset && "pl-8", className)} {...props}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  )
}

function MenubarSubContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useContext(MenubarSubCtx)
  if (!open) return null
  return (
    <div data-slot="menubar-sub-content" className={cn("absolute left-full top-0 z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg", className)} {...props}>
      {children}
    </div>
  )
}

export {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarLabel, MenubarShortcut, MenubarCheckboxItem,
  MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent,
}
