import { createContext, useContext, useState, useCallback } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const toggleGroupVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ToggleGroupContextValue {
  type: "single" | "multiple"
  value: string[]
  onItemToggle: (value: string) => void
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null)

interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

function ToggleGroup({
  type = "single",
  value: controlledValue,
  defaultValue,
  onValueChange,
  variant,
  size,
  className,
  children,
  ...props
}: ToggleGroupProps) {
  const initial = defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  const [uncontrolled, setUncontrolled] = useState<string[]>(initial)
  const value = controlledValue !== undefined
    ? (Array.isArray(controlledValue) ? controlledValue : [controlledValue])
    : uncontrolled

  const onItemToggle = useCallback((item: string) => {
    const next = value.includes(item)
      ? value.filter((v) => v !== item)
      : type === "single" ? [item] : [...value, item]

    if (controlledValue === undefined) setUncontrolled(next)
    onValueChange?.(type === "single" ? (next[0] ?? "") : next)
  }, [value, type, controlledValue, onValueChange])

  return (
    <ToggleGroupContext.Provider value={{ type, value, onItemToggle, variant, size }}>
      <div data-slot="toggle-group" role="group" className={cn("flex items-center gap-1", className)} {...props}>
        {children}
      </div>
    </ToggleGroupContext.Provider>
  )
}

interface ToggleGroupItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleGroupVariants> {
  value: string
}

function ToggleGroupItem({ value, className, variant: itemVariant, size: itemSize, ...props }: ToggleGroupItemProps) {
  const ctx = useContext(ToggleGroupContext)
  if (!ctx) throw new Error("ToggleGroupItem must be used within <ToggleGroup>")

  const pressed = ctx.value.includes(value)
  const variant = itemVariant ?? ctx.variant
  const size = itemSize ?? ctx.size

  return (
    <button
      data-slot="toggle-group-item"
      data-state={pressed ? "on" : "off"}
      aria-pressed={pressed}
      className={cn(
        toggleGroupVariants({ variant, size }),
        pressed && "bg-accent text-accent-foreground",
        className
      )}
      onClick={() => ctx.onItemToggle(value)}
      {...props}
    />
  )
}

export { ToggleGroup, ToggleGroupItem, toggleGroupVariants }
