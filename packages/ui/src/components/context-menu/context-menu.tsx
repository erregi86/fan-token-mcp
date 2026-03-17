import { createContext, useContext, useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"

interface ContextMenuContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  position: { x: number; y: number }
  setPosition: (pos: { x: number; y: number }) => void
}

const ContextMenuContext = createContext<ContextMenuContextValue | null>(null)

function useContextMenu() {
  const ctx = useContext(ContextMenuContext)
  if (!ctx) throw new Error("ContextMenu components must be within <ContextMenu>")
  return ctx
}

function ContextMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  return (
    <ContextMenuContext.Provider value={{ open, setOpen, position, setPosition }}>
      {children}
    </ContextMenuContext.Provider>
  )
}

function ContextMenuTrigger({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { setOpen, setPosition } = useContextMenu()
  return (
    <div data-slot="context-menu-trigger" className={className}
      onContextMenu={(e) => { e.preventDefault(); setPosition({ x: e.clientX, y: e.clientY }); setOpen(true) }}
      {...props}>
      {children}
    </div>
  )
}

function ContextMenuContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen, position } = useContextMenu()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => { document.removeEventListener("mousedown", handleClick); document.removeEventListener("keydown", handleKey) }
  }, [open, setOpen])

  if (!open) return null

  return createPortal(
    <div ref={ref} data-slot="context-menu-content" style={{ position: "fixed", top: position.y, left: position.x }}
      className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-fade-in", className)} {...props}>
      {children}
    </div>,
    document.body
  )
}

function ContextMenuItem({ className, inset, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  const { setOpen } = useContextMenu()
  return (
    <div data-slot="context-menu-item" role="menuitem" tabIndex={-1}
      className={cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", inset && "pl-8", className)}
      onClick={() => setOpen(false)} {...props}>
      {children}
    </div>
  )
}

function ContextMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="context-menu-separator" className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
}

function ContextMenuLabel({ className, inset, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return <div data-slot="context-menu-label" className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)} {...props} />
}

function ContextMenuCheckboxItem({ className, children, checked, onCheckedChange, ...props }: React.HTMLAttributes<HTMLDivElement> & { checked?: boolean; onCheckedChange?: (v: boolean) => void }) {
  return (
    <div data-slot="context-menu-checkbox-item" role="menuitemcheckbox" aria-checked={checked}
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

function ContextMenuRadioGroup({ value = "", onValueChange, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (v: string) => void }) {
  return <RadioCtx.Provider value={{ value, onValueChange: onValueChange ?? (() => {}) }}><div role="group" {...props}>{children}</div></RadioCtx.Provider>
}

function ContextMenuRadioItem({ className, children, value, ...props }: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = useContext(RadioCtx)
  const checked = ctx?.value === value
  return (
    <div data-slot="context-menu-radio-item" role="menuitemradio" aria-checked={checked}
      className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground", className)}
      onClick={() => ctx?.onValueChange(value)} {...props}>
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <span className="size-2 rounded-full bg-current" />}
      </span>
      {children}
    </div>
  )
}

function ContextMenuSub({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <ContextMenuContext.Provider value={{ open, setOpen, position: { x: 0, y: 0 }, setPosition: () => {} }}>
        {children}
      </ContextMenuContext.Provider>
    </div>
  )
}

function ContextMenuSubTrigger({ className, inset, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div data-slot="context-menu-sub-trigger" className={cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground", inset && "pl-8", className)} {...props}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  )
}

function ContextMenuSubContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = useContextMenu()
  if (!ctx.open) return null
  return (
    <div data-slot="context-menu-sub-content" className={cn("absolute left-full top-0 z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg", className)} {...props}>
      {children}
    </div>
  )
}

export {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuLabel, ContextMenuCheckboxItem,
  ContextMenuRadioGroup, ContextMenuRadioItem,
  ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent,
}
