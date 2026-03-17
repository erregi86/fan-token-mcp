import { createContext, useContext, useState, useCallback } from "react"
import { cn } from "../../lib/utils"

interface CollapsibleContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null)

function useCollapsible() {
  const ctx = useContext(CollapsibleContext)
  if (!ctx) throw new Error("Collapsible components must be within <Collapsible>")
  return ctx
}

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

function Collapsible({ open: controlled, onOpenChange, defaultOpen = false, className, children, ...props }: CollapsibleProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen)
  const open = controlled ?? uncontrolled
  const setOpen = useCallback((v: boolean) => {
    if (controlled === undefined) setUncontrolled(v)
    onOpenChange?.(v)
  }, [controlled, onOpenChange])

  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div data-slot="collapsible" data-state={open ? "open" : "closed"} className={className} {...props}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  )
}

function CollapsibleTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = useCollapsible()
  return (
    <button data-slot="collapsible-trigger" data-state={open ? "open" : "closed"} className={className} onClick={() => setOpen(!open)} {...props}>
      {children}
    </button>
  )
}

function CollapsibleContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useCollapsible()
  if (!open) return null
  return (
    <div data-slot="collapsible-content" data-state="open" className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
