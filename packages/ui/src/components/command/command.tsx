import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { cn } from "../../lib/utils"

/* ─── Context ─── */
interface CommandContextValue {
  search: string
  setSearch: (s: string) => void
  selectedIndex: number
  setSelectedIndex: (i: number) => void
  items: string[]
  registerItem: (id: string) => void
  unregisterItem: (id: string) => void
}

const CommandContext = createContext<CommandContextValue | null>(null)

function useCommand() {
  const ctx = useContext(CommandContext)
  if (!ctx) throw new Error("Command components must be within <Command>")
  return ctx
}

/* ─── Command ─── */
function Command({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [search, setSearch] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [items, setItems] = useState<string[]>([])

  const registerItem = useCallback((id: string) => setItems((prev) => [...prev, id]), [])
  const unregisterItem = useCallback((id: string) => setItems((prev) => prev.filter((i) => i !== id)), [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => Math.min(i + 1, items.length - 1)) }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => Math.max(i - 1, 0)) }
  }, [items.length])

  return (
    <CommandContext.Provider value={{ search, setSearch, selectedIndex, setSelectedIndex, items, registerItem, unregisterItem }}>
      <div data-slot="command" className={cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)} onKeyDown={handleKeyDown} {...props}>
        {children}
      </div>
    </CommandContext.Provider>
  )
}

/* ─── Input ─── */
function CommandInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  const { search, setSearch } = useCommand()
  return (
    <div data-slot="command-input-wrapper" className="flex items-center border-b border-border px-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 shrink-0 opacity-50"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input
        data-slot="command-input"
        className={cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className)}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        {...props}
      />
    </div>
  )
}

/* ─── List ─── */
function CommandList({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="command-list" className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)} {...props}>
      {children}
    </div>
  )
}

/* ─── Empty ─── */
function CommandEmpty({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="command-empty" className={cn("py-6 text-center text-sm", className)} {...props}>{children ?? "No results found."}</div>
}

/* ─── Group ─── */
function CommandGroup({ className, heading, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { heading?: string }) {
  return (
    <div data-slot="command-group" role="group" className={cn("overflow-hidden p-1 text-foreground", className)} {...props}>
      {heading && <div data-slot="command-group-heading" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">{heading}</div>}
      {children}
    </div>
  )
}

/* ─── Item ─── */
interface CommandItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  value?: string
  onSelect?: (value: string) => void
  disabled?: boolean
}

function CommandItem({ className, value = "", onSelect, disabled, children, ...props }: CommandItemProps) {
  const ctx = useCommand()
  const itemText = value.toLowerCase()
  const isFiltered = ctx.search && !itemText.includes(ctx.search.toLowerCase())

  if (isFiltered) return null

  return (
    <div
      data-slot="command-item"
      role="option"
      data-disabled={disabled || undefined}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={() => !disabled && onSelect?.(value)}
      {...props}
    >
      {children}
    </div>
  )
}

/* ─── Separator ─── */
function CommandSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="command-separator" className={cn("-mx-1 h-px bg-border", className)} {...props} />
}

/* ─── Shortcut ─── */
function CommandShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span data-slot="command-shortcut" className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}

/* ─── Dialog wrapper ─── */
function CommandDialog({ children, open, onOpenChange, ...props }: React.HTMLAttributes<HTMLDivElement> & { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); onOpenChange?.(!open) }
      if (e.key === "Escape" && open) onOpenChange?.(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/80" onClick={() => onOpenChange?.(false)} />
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
        <Command className="w-full max-w-lg rounded-lg border border-border shadow-lg" {...props}>
          {children}
        </Command>
      </div>
    </>
  )
}

export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut, CommandDialog }
