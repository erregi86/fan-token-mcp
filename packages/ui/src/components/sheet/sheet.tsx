import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

interface SheetContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = createContext<SheetContextValue | null>(null)

function useSheet() {
  const ctx = useContext(SheetContext)
  if (!ctx) throw new Error("Sheet components must be within <Sheet>")
  return ctx
}

function Sheet({ children, open: controlled, onOpenChange, defaultOpen = false }: { children: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void; defaultOpen?: boolean }) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen)
  const open = controlled ?? uncontrolled
  const setOpen = useCallback((v: boolean) => {
    if (controlled === undefined) setUncontrolled(v)
    onOpenChange?.(v)
  }, [controlled, onOpenChange])

  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>
}

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

function SheetTrigger({ className, children, asChild = false, ...props }: SheetTriggerProps) {
  const { setOpen } = useSheet()
  const Comp = asChild ? Slot : "button"
  return <Comp data-slot="sheet-trigger" className={className} onClick={() => setOpen(true)} {...props}>{children}</Comp>
}

function SheetClose({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useSheet()
  return <button data-slot="sheet-close" className={className} onClick={() => setOpen(false)} {...props}>{children}</button>
}

const sheetVariants = cva(
  /* Tokens: --sheet-padding, --sheet-shadow, --sheet-bg */
  "fixed z-50 gap-4 bg-[var(--sheet-bg)] p-[var(--sheet-padding)] shadow-[var(--sheet-shadow)] transition-transform duration-300 ease-in-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-border",
        bottom: "inset-x-0 bottom-0 border-t border-border",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-border sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l border-border sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  }
)

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sheetVariants> {}

function SheetContent({ className, side = "right", children, ...props }: SheetContentProps) {
  const { open, setOpen } = useSheet()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = "" }
  }, [open, setOpen])

  if (!open) return null

  return (
    <>
      {/* Token: --dialog-overlay-bg */}
      <div ref={overlayRef} data-slot="sheet-overlay" className="fixed inset-0 z-50 bg-[var(--dialog-overlay-bg)]" onClick={() => setOpen(false)} />
      <div data-slot="sheet-content" className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <button data-slot="sheet-close" className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-[length:var(--focus-ring-width)] focus:ring-[var(--focus-ring-color)]" onClick={() => setOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  )
}

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)} {...props} />
}

function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 data-slot="sheet-title" className={cn("text-lg font-semibold text-foreground", className)} {...props} />
}

function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p data-slot="sheet-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sheet-footer" className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2", className)} {...props} />
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, sheetVariants }
