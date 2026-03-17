import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

interface AlertDialogContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null)

function useAlertDialog() {
  const ctx = useContext(AlertDialogContext)
  if (!ctx) throw new Error("AlertDialog components must be within <AlertDialog>")
  return ctx
}

function AlertDialog({ children, open: controlled, onOpenChange, defaultOpen = false }: { children: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void; defaultOpen?: boolean }) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen)
  const open = controlled ?? uncontrolled
  const setOpen = useCallback((v: boolean) => {
    if (controlled === undefined) setUncontrolled(v)
    onOpenChange?.(v)
  }, [controlled, onOpenChange])

  return <AlertDialogContext.Provider value={{ open, setOpen }}>{children}</AlertDialogContext.Provider>
}

interface AlertDialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

function AlertDialogTrigger({ className, children, asChild = false, ...props }: AlertDialogTriggerProps) {
  const { setOpen } = useAlertDialog()
  const Comp = asChild ? Slot : "button"
  return <Comp data-slot="alert-dialog-trigger" className={className} onClick={() => setOpen(true)} {...props}>{children}</Comp>
}

function AlertDialogContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = useAlertDialog()

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
      <div data-slot="alert-dialog-overlay" className="fixed inset-0 z-50 bg-black/80" />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          data-slot="alert-dialog-content"
          role="alertdialog"
          className={cn("w-full max-w-lg rounded-lg border border-border bg-background p-6 shadow-lg animate-fade-in", className)}
          {...props}
        >
          {children}
        </div>
      </div>
    </>
  )
}

function AlertDialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="alert-dialog-header" className={cn("flex flex-col gap-2 text-center sm:text-left", className)} {...props} />
}

function AlertDialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 data-slot="alert-dialog-title" className={cn("text-lg font-semibold", className)} {...props} />
}

function AlertDialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p data-slot="alert-dialog-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function AlertDialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="alert-dialog-footer" className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 mt-4", className)} {...props} />
}

function AlertDialogAction({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useAlertDialog()
  return (
    <button data-slot="alert-dialog-action"
      className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors", className)}
      onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}

function AlertDialogCancel({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useAlertDialog()
  return (
    <button data-slot="alert-dialog-cancel"
      className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors mt-2 sm:mt-0", className)}
      onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel }
