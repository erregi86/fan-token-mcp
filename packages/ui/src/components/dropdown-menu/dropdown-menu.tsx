import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"

/* ─── Context ─── */
interface DropdownMenuContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null)

function useDropdownMenu() {
  const ctx = useContext(DropdownMenuContext)
  if (!ctx) throw new Error("DropdownMenu components must be within <DropdownMenu>")
  return ctx
}

/* ─── Root ─── */
function DropdownMenu({ children, open: controlled, onOpenChange }: { children: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const [uncontrolled, setUncontrolled] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const open = controlled ?? uncontrolled
  const setOpen = useCallback((v: boolean) => {
    if (controlled === undefined) setUncontrolled(v)
    onOpenChange?.(v)
  }, [controlled, onOpenChange])

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

/* ─── Trigger ─── */
function DropdownMenuTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen, triggerRef } = useDropdownMenu()
  return (
    <button ref={triggerRef} data-slot="dropdown-menu-trigger" data-state={open ? "open" : "closed"} className={className} onClick={() => setOpen(!open)} {...props}>
      {children}
    </button>
  )
}

/* ─── Content ─── */
interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end"
  sideOffset?: number
}

function DropdownMenuContent({ className, align = "start", sideOffset = 4, children, ...props }: DropdownMenuContentProps) {
  const { open, setOpen, triggerRef } = useDropdownMenu()
  const contentRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (!open) return
    const trigger = triggerRef.current
    if (trigger) {
      const rect = trigger.getBoundingClientRect()
      setPos({
        top: rect.bottom + sideOffset + window.scrollY,
        left: align === "end" ? rect.right + window.scrollX : rect.left + window.scrollX,
      })
    }
    const handleClick = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node) && triggerRef.current && !triggerRef.current.contains(e.target as Node)) setOpen(false)
    }
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => { document.removeEventListener("mousedown", handleClick); document.removeEventListener("keydown", handleKey) }
  }, [open, setOpen, triggerRef, align, sideOffset])

  if (!open) return null

  return createPortal(
    <div ref={contentRef} data-slot="dropdown-menu-content" style={{ position: "absolute", top: pos.top, left: pos.left, transform: align === "end" ? "translateX(-100%)" : align === "center" ? "translateX(-50%)" : undefined }}
      className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-fade-in", className)} {...props}>
      {children}
    </div>,
    document.body
  )
}

/* ─── Item ─── */
function DropdownMenuItem({ className, children, inset, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  const { setOpen } = useDropdownMenu()
  return (
    <div data-slot="dropdown-menu-item" role="menuitem" tabIndex={-1}
      className={cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", inset && "pl-8", className)}
      onClick={() => setOpen(false)} {...props}>
      {children}
    </div>
  )
}

/* ─── Label ─── */
function DropdownMenuLabel({ className, inset, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return <div data-slot="dropdown-menu-label" className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)} {...props} />
}

/* ─── Separator ─── */
function DropdownMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="dropdown-menu-separator" role="separator" className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
}

/* ─── Group ─── */
function DropdownMenuGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="dropdown-menu-group" role="group" className={className} {...props} />
}

/* ─── Shortcut ─── */
function DropdownMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span data-slot="dropdown-menu-shortcut" className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
}

/* ─── Checkbox Item ─── */
function DropdownMenuCheckboxItem({ className, children, checked, onCheckedChange, ...props }: React.HTMLAttributes<HTMLDivElement> & { checked?: boolean; onCheckedChange?: (checked: boolean) => void }) {
  return (
    <div data-slot="dropdown-menu-checkbox-item" role="menuitemcheckbox" aria-checked={checked}
      className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)}
      onClick={() => onCheckedChange?.(!checked)} {...props}>
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
      </span>
      {children}
    </div>
  )
}

/* ─── Radio Group / Item ─── */
const RadioCtx = createContext<{ value: string; onValueChange: (v: string) => void } | null>(null)

function DropdownMenuRadioGroup({ value = "", onValueChange, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (value: string) => void }) {
  return (
    <RadioCtx.Provider value={{ value, onValueChange: onValueChange ?? (() => {}) }}>
      <div data-slot="dropdown-menu-radio-group" role="group" {...props}>{children}</div>
    </RadioCtx.Provider>
  )
}

function DropdownMenuRadioItem({ className, children, value, ...props }: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = useContext(RadioCtx)
  const checked = ctx?.value === value
  return (
    <div data-slot="dropdown-menu-radio-item" role="menuitemradio" aria-checked={checked}
      className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)}
      onClick={() => ctx?.onValueChange(value)} {...props}>
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <span className="size-2 rounded-full bg-current" />}
      </span>
      {children}
    </div>
  )
}

/* ─── Sub Menu ─── */
function DropdownMenuSub({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef: { current: null } as any }}>
      <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  )
}

function DropdownMenuSubTrigger({ className, inset, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div data-slot="dropdown-menu-sub-trigger" className={cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", inset && "pl-8", className)} {...props}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  )
}

function DropdownMenuSubContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useDropdownMenu()
  if (!open) return null
  return (
    <div data-slot="dropdown-menu-sub-content" className={cn("absolute left-full top-0 z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg", className)} {...props}>
      {children}
    </div>
  )
}

export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuShortcut,
  DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
}
