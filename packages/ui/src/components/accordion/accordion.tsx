import { createContext, useContext, useState, useCallback } from "react"
import { cn } from "../../lib/utils"

/* ─── Context ─── */
interface AccordionContextValue {
  value: string[]
  toggle: (item: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion components must be used within <Accordion>")
  return ctx
}

/* ─── Accordion ─── */
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  collapsible?: boolean
}

function Accordion({
  type = "single",
  defaultValue,
  collapsible = false,
  className,
  children,
  ...props
}: AccordionProps) {
  const initial = defaultValue
    ? Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    : []
  const [value, setValue] = useState<string[]>(initial)

  const toggle = useCallback(
    (item: string) => {
      setValue((prev) => {
        if (prev.includes(item)) {
          if (type === "single" && !collapsible) return prev
          return prev.filter((v) => v !== item)
        }
        return type === "single" ? [item] : [...prev, item]
      })
    },
    [type, collapsible]
  )

  return (
    <AccordionContext.Provider value={{ value, toggle }}>
      <div data-slot="accordion" className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

/* ─── AccordionItem ─── */
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  const ctx = useAccordion()
  const isOpen = ctx.value.includes(value)

  return (
    <div
      data-slot="accordion-item"
      data-state={isOpen ? "open" : "closed"}
      /* Token: --accordion-border-color */
      className={cn("border-b border-[var(--accordion-border-color)]", className)}
      {...props}
    >
      {children}
    </div>
  )
}

/* ─── AccordionTrigger ─── */
interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function AccordionTrigger({ value, className, children, ...props }: AccordionTriggerProps) {
  const ctx = useAccordion()
  const isOpen = ctx.value.includes(value)

  return (
    <h3 className="flex">
      <button
        data-slot="accordion-trigger"
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          /* Tokens: --accordion-trigger-padding-y, --accordion-trigger-font-size, --accordion-trigger-font-weight */
          "flex flex-1 items-center justify-between py-[var(--accordion-trigger-padding-y)] text-[length:var(--accordion-trigger-font-size)] font-[number:var(--accordion-trigger-font-weight)] transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        onClick={() => ctx.toggle(value)}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </h3>
  )
}

/* ─── AccordionContent ─── */
interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionContent({ value, className, children, ...props }: AccordionContentProps) {
  const ctx = useAccordion()
  const isOpen = ctx.value.includes(value)

  if (!isOpen) return null

  return (
    <div
      data-slot="accordion-content"
      data-state={isOpen ? "open" : "closed"}
      /* Token: --accordion-content-font-size */
      className={cn("overflow-hidden text-[length:var(--accordion-content-font-size)]", className)}
      {...props}
    >
      {/* Token: --accordion-content-padding-bottom */}
      <div className="pb-[var(--accordion-content-padding-bottom)] pt-0">{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
