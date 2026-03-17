import { createContext, useContext, useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"

interface HoverCardContextValue {
  open: boolean
  triggerRef: React.RefObject<HTMLAnchorElement | null>
  contentRef: React.RefObject<HTMLDivElement | null>
  handleEnter: () => void
  handleLeave: () => void
}

const HoverCardCtx = createContext<HoverCardContextValue | null>(null)

function HoverCard({ children, openDelay = 200, closeDelay = 300 }: { children: React.ReactNode; openDelay?: number; closeDelay?: number }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLAnchorElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const openTimer = useRef<number | undefined>(undefined)
  const closeTimer = useRef<number | undefined>(undefined)

  const handleEnter = () => { clearTimeout(closeTimer.current); openTimer.current = window.setTimeout(() => setOpen(true), openDelay) }
  const handleLeave = () => { clearTimeout(openTimer.current); closeTimer.current = window.setTimeout(() => setOpen(false), closeDelay) }

  return (
    <HoverCardCtx.Provider value={{ open, triggerRef, contentRef, handleEnter, handleLeave }}>
      {children}
    </HoverCardCtx.Provider>
  )
}

function HoverCardTrigger({ className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ctx = useContext(HoverCardCtx)
  if (!ctx) return null
  return (
    <a ref={ctx.triggerRef} data-slot="hover-card-trigger" className={className} onMouseEnter={ctx.handleEnter} onMouseLeave={ctx.handleLeave} {...props}>
      {children}
    </a>
  )
}

function HoverCardContent({ className, children, sideOffset = 4, ...props }: React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }) {
  const ctx = useContext(HoverCardCtx)
  const [pos, setPos] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (!ctx?.open || !ctx.triggerRef.current) return
    const rect = ctx.triggerRef.current.getBoundingClientRect()
    setPos({ top: rect.bottom + sideOffset + window.scrollY, left: rect.left + rect.width / 2 + window.scrollX })
  }, [ctx?.open, sideOffset])

  if (!ctx?.open) return null

  return createPortal(
    <div ref={ctx.contentRef} data-slot="hover-card-content" data-state="open" style={{ position: "absolute", top: pos.top, left: pos.left, transform: "translateX(-50%)" }}
      className={cn("z-50 w-64 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-fade-in", className)}
      onMouseEnter={ctx.handleEnter} onMouseLeave={ctx.handleLeave} {...props}>
      {children}
    </div>,
    document.body
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
