import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

/* ─── Types ─── */
interface ToastData {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
  action?: React.ReactNode
  duration?: number
}

interface ToastContextValue {
  toasts: ToastData[]
  addToast: (toast: Omit<ToastData, "id">) => string
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

/* ─── Variants ─── */
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-md border border-border p-4 pr-6 shadow-lg transition-all animate-fade-in",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

/* ─── Toast Item ─── */
function Toast({ id, title, description, variant = "default", action, duration = 5000 }: ToastData) {
  const ctx = useContext(ToastContext)

  useEffect(() => {
    if (duration <= 0) return
    const timer = setTimeout(() => ctx?.removeToast(id), duration)
    return () => clearTimeout(timer)
  }, [id, duration, ctx])

  return (
    <div data-slot="toast" className={cn(toastVariants({ variant }))}>
      <div className="grid gap-1">
        {title && <div data-slot="toast-title" className="text-sm font-semibold">{title}</div>}
        {description && <div data-slot="toast-description" className="text-sm opacity-90">{description}</div>}
      </div>
      {action}
      <button
        data-slot="toast-close"
        className="absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100"
        onClick={() => ctx?.removeToast(id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  )
}

/* ─── Action ─── */
function ToastAction({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button data-slot="toast-action"
      className={cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50", className)}
      {...props}>
      {children}
    </button>
  )
}

/* ─── Viewport ─── */
function ToastViewport() {
  const ctx = useContext(ToastContext)
  if (!ctx || ctx.toasts.length === 0) return null

  return (
    <div data-slot="toast-viewport" className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-[420px]">
      {ctx.toasts.map((t) => <Toast key={t.id} {...t} />)}
    </div>
  )
}

/* ─── Hook ─── */
function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>")

  const toastFn = useCallback((props: Omit<ToastData, "id">) => {
    return ctx.addToast(props)
  }, [ctx])

  const dismiss = useCallback((id: string) => {
    ctx.removeToast(id)
  }, [ctx])

  return { toast: toastFn, dismiss, toasts: ctx.toasts }
}

/* ─── Global imperative toast() ─── */
let globalAddToast: ((toast: Omit<ToastData, "id">) => string) | null = null

function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = useCallback((t: Omit<ToastData, "id">) => {
    const id = Math.random().toString(36).slice(2, 9)
    setToasts((prev) => [...prev, { ...t, id }])
    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  useEffect(() => {
    globalAddToast = addToast
    return () => { globalAddToast = null }
  }, [addToast])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  )
}

function toast(props: Omit<ToastData, "id">) {
  if (globalAddToast) return globalAddToast(props)
  console.warn("Toast: no ToastProvider found.")
  return ""
}

export { ToastProvider, Toast, ToastAction, ToastViewport, useToast, toast, toastVariants }
