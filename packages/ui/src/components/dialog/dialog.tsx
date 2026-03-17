import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

interface DialogContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

function useDialog() {
  const ctx = useContext(DialogContext)
  if (!ctx) throw new Error("Dialog components must be used within <Dialog>")
  return ctx
}

interface DialogProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

function Dialog({ children, open: controlledOpen, onOpenChange, defaultOpen = false }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) setUncontrolledOpen(value)
      onOpenChange?.(value)
    },
    [isControlled, onOpenChange]
  )

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

function DialogTrigger({ children, className, asChild = false, ...props }: DialogTriggerProps) {
  const { setOpen } = useDialog()
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="dialog-trigger"
      className={className}
      onClick={() => setOpen(true)}
      {...props}
    >
      {children}
    </Comp>
  )
}

function DialogContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = useDialog()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, setOpen])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      data-slot="dialog-overlay"
      /* Token: --dialog-overlay-bg */
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--dialog-overlay-bg)]"
      onClick={(e) => {
        if (e.target === overlayRef.current) setOpen(false)
      }}
    >
      <div
        data-slot="dialog-content"
        role="dialog"
        aria-modal="true"
        className={cn(
          /* Tokens: --dialog-radius, --dialog-shadow, --dialog-padding, --dialog-max-width, --dialog-bg, --dialog-border-color */
          "relative w-full max-w-[var(--dialog-max-width)] rounded-[var(--dialog-radius)] border border-[var(--dialog-border-color)] bg-[var(--dialog-bg)] p-[var(--dialog-padding)] shadow-[var(--dialog-shadow)] animate-fade-in",
          className
        )}
        {...props}
      >
        {children}
        <button
          data-slot="dialog-close"
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-[length:var(--focus-ring-width)] focus:ring-[var(--focus-ring-color)]"
          onClick={() => setOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  )
}

function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="dialog-title"
      /* Tokens: --dialog-title-font-size, --dialog-title-font-weight */
      className={cn("text-[length:var(--dialog-title-font-size)] font-[number:var(--dialog-title-font-weight)] leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="dialog-description"
      /* Token: --dialog-description-font-size */
      className={cn("text-[length:var(--dialog-description-font-size)] text-muted-foreground", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 mt-4", className)}
      {...props}
    />
  )
}

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter }
