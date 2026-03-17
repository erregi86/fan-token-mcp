import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"

interface PopoverContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const PopoverContext = createContext<PopoverContextValue | null>(null)

function usePopover() {
  const ctx = useContext(PopoverContext)
  if (!ctx) throw new Error("Popover components must be used within <Popover>")
  return ctx
}

interface PopoverProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function Popover({ children, open: controlledOpen, onOpenChange }: PopoverProps) {
  const [uncontrolled, setUncontrolled] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const open = controlledOpen ?? uncontrolled

  const setOpen = useCallback((v: boolean) => {
    if (controlledOpen === undefined) setUncontrolled(v)
    onOpenChange?.(v)
  }, [controlledOpen, onOpenChange])

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </PopoverContext.Provider>
  )
}

function PopoverTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen, triggerRef } = usePopover()
  return (
    <button
      ref={triggerRef}
      data-slot="popover-trigger"
      data-state={open ? "open" : "closed"}
      className={className}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
    </button>
  )
}

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end"
  sideOffset?: number
}

function PopoverContent({ className, align = "center", sideOffset = 4, children, ...props }: PopoverContentProps) {
  const { open, setOpen, triggerRef } = usePopover()
  const contentRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (!open) return
    const trigger = triggerRef.current
    if (trigger) {
      const rect = trigger.getBoundingClientRect()
      setPos({
        top: rect.bottom + sideOffset + window.scrollY,
        left: align === "start" ? rect.left + window.scrollX
          : align === "end" ? rect.right + window.scrollX
          : rect.left + rect.width / 2 + window.scrollX,
      })
    }

    const handleClick = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open, setOpen, triggerRef, align, sideOffset])

  if (!open) return null

  return createPortal(
    <div
      ref={contentRef}
      data-slot="popover-content"
      data-state={open ? "open" : "closed"}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        transform: align === "center" ? "translateX(-50%)" : align === "end" ? "translateX(-100%)" : undefined,
      }}
      className={cn(
        "z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </div>,
    document.body
  )
}

export { Popover, PopoverTrigger, PopoverContent }
