import { createContext, useContext, useState, useRef, useEffect, useCallback } from "react"
import { cn } from "../../lib/utils"

interface SelectContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  value: string
  onValueChange: (value: string) => void
}

const SelectContext = createContext<SelectContextValue | null>(null)

function useSelect() {
  const ctx = useContext(SelectContext)
  if (!ctx) throw new Error("Select components must be used within <Select>")
  return ctx
}

interface SelectProps {
  children: React.ReactNode
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
}

function Select({ children, value: controlledValue, onValueChange, defaultValue = "" }: SelectProps) {
  const [open, setOpen] = useState(false)
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (!isControlled) setUncontrolledValue(newValue)
      onValueChange?.(newValue)
      setOpen(false)
    },
    [isControlled, onValueChange]
  )

  return (
    <SelectContext.Provider value={{ open, setOpen, value, onValueChange: handleValueChange }}>
      <div data-slot="select" className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

function SelectTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen, value } = useSelect()
  return (
    <button
      data-slot="select-trigger"
      type="button"
      role="combobox"
      aria-expanded={open}
      className={cn(
        /* Tokens: --select-trigger-height, --select-trigger-radius, --select-trigger-padding-x, --select-trigger-font-size, --select-trigger-shadow */
        "flex h-[var(--select-trigger-height)] w-full items-center justify-between rounded-[var(--select-trigger-radius)] border border-[var(--input-border-color)] bg-[var(--input-bg)] px-[var(--select-trigger-padding-x)] py-2 text-[length:var(--select-trigger-font-size)] shadow-[var(--select-trigger-shadow)]",
        "placeholder:text-[var(--input-placeholder-color)] focus:outline-none focus:ring-[length:var(--focus-ring-width)] focus:ring-[var(--focus-ring-color)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children ?? value ?? <span className="text-muted-foreground">Select...</span>}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 opacity-50">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </button>
  )
}

function SelectContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = useSelect()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.parentElement?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open, setOpen])

  if (!open) return null

  return (
    <div
      ref={ref}
      data-slot="select-content"
      className={cn(
        /* Tokens: --select-content-radius, --select-content-shadow, --select-content-padding, --popover-bg/fg, --popover-border-color */
        "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[var(--select-content-radius)] border border-[var(--popover-border-color)] bg-[var(--popover-bg)] p-[var(--select-content-padding)] text-[var(--popover-fg)] shadow-[var(--select-content-shadow)] animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function SelectItem({ className, value: itemValue, children, ...props }: SelectItemProps) {
  const { value, onValueChange } = useSelect()
  const isSelected = value === itemValue

  return (
    <div
      data-slot="select-item"
      role="option"
      aria-selected={isSelected}
      className={cn(
        /* Tokens: --select-item-radius, --select-item-padding-x/y, --select-item-font-size */
        "relative flex cursor-pointer select-none items-center rounded-[var(--select-item-radius)] px-[var(--select-item-padding-x)] py-[var(--select-item-padding-y)] text-[length:var(--select-item-font-size)] outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
      onClick={() => onValueChange(itemValue)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectContent, SelectItem }
