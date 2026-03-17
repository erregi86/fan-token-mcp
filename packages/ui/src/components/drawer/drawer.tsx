import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

/* ─── Context ─── */
interface DrawerContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  direction: "top" | "bottom" | "left" | "right"
  dragOffset: number
  setDragOffset: (offset: number) => void
  isDragging: boolean
  setIsDragging: (dragging: boolean) => void
}

const DrawerContext = createContext<DrawerContextValue | null>(null)

function useDrawer() {
  const ctx = useContext(DrawerContext)
  if (!ctx) throw new Error("Drawer components must be within <Drawer>")
  return ctx
}

/* ─── Root ─── */
interface DrawerProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  direction?: "top" | "bottom" | "left" | "right"
  shouldScaleBackground?: boolean
}

function Drawer({
  children,
  open: controlled,
  onOpenChange,
  defaultOpen = false,
  direction = "bottom",
}: DrawerProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const open = controlled ?? uncontrolled

  const setOpen = useCallback(
    (v: boolean) => {
      if (controlled === undefined) setUncontrolled(v)
      onOpenChange?.(v)
      if (!v) setDragOffset(0)
    },
    [controlled, onOpenChange]
  )

  return (
    <DrawerContext.Provider value={{ open, setOpen, direction, dragOffset, setDragOffset, isDragging, setIsDragging }}>
      {children}
    </DrawerContext.Provider>
  )
}

/* ─── Trigger ─── */
function DrawerTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDrawer()
  return (
    <button data-slot="drawer-trigger" className={className} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  )
}

/* ─── Close ─── */
function DrawerClose({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDrawer()
  return (
    <button data-slot="drawer-close" className={className} onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}

/* ─── Overlay ─── */
function DrawerOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = useDrawer()
  if (!open) return null
  return (
    <div
      data-slot="drawer-overlay"
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      onClick={() => setOpen(false)}
      {...props}
    />
  )
}

/* ─── Content ─── */
const drawerContentVariants = cva("fixed z-50 flex flex-col bg-background", {
  variants: {
    direction: {
      bottom: "inset-x-0 bottom-0 mt-24 rounded-t-[10px] border-t border-border",
      top: "inset-x-0 top-0 mb-24 rounded-b-[10px] border-b border-border",
      left: "inset-y-0 left-0 mr-24 w-3/4 max-w-sm rounded-r-[10px] border-r border-border",
      right: "inset-y-0 right-0 ml-24 w-3/4 max-w-sm rounded-l-[10px] border-l border-border",
    },
  },
  defaultVariants: { direction: "bottom" },
})

interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  const { open, setOpen, direction, dragOffset, setDragOffset, setIsDragging } = useDrawer()
  const contentRef = useRef<HTMLDivElement>(null)
  const startY = useRef(0)
  const startX = useRef(0)

  // Lock body scroll
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", handleKey)
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", handleKey) }
  }, [open, setOpen])

  // Touch drag-to-dismiss
  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY
    startX.current = e.touches[0].clientX
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = e.touches[0].clientY - startY.current
    const deltaX = e.touches[0].clientX - startX.current

    if (direction === "bottom" && deltaY > 0) setDragOffset(deltaY)
    else if (direction === "top" && deltaY < 0) setDragOffset(Math.abs(deltaY))
    else if (direction === "right" && deltaX > 0) setDragOffset(deltaX)
    else if (direction === "left" && deltaX < 0) setDragOffset(Math.abs(deltaX))
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (dragOffset > 100) {
      setOpen(false)
    }
    setDragOffset(0)
  }

  if (!open) return null

  const getTransform = () => {
    if (dragOffset === 0) return undefined
    if (direction === "bottom") return `translateY(${dragOffset}px)`
    if (direction === "top") return `translateY(-${dragOffset}px)`
    if (direction === "right") return `translateX(${dragOffset}px)`
    if (direction === "left") return `translateX(-${dragOffset}px)`
  }

  return (
    <>
      <DrawerOverlay />
      <div
        ref={contentRef}
        data-slot="drawer-content"
        className={cn(drawerContentVariants({ direction }), className)}
        style={{ transform: getTransform(), transition: dragOffset === 0 ? "transform 0.3s ease" : "none" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        {/* Drag handle for bottom/top drawers */}
        {(direction === "bottom" || direction === "top") && (
          <div className="mx-auto mt-4 h-1.5 w-[100px] rounded-full bg-muted" />
        )}
        {children}
      </div>
    </>
  )
}

/* ─── Header / Title / Description / Footer ─── */
function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="drawer-header" className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
}

function DrawerTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 data-slot="drawer-title" className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
}

function DrawerDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p data-slot="drawer-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="drawer-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
}

export {
  Drawer, DrawerTrigger, DrawerClose, DrawerOverlay, DrawerContent,
  DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter,
}
