import { createContext, useContext, useState, useCallback } from "react"
import { cn } from "../../lib/utils"

interface RadioGroupContextValue {
  value: string
  onValueChange: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

function RadioGroup({ value: controlledValue, defaultValue = "", onValueChange, className, children, ...props }: RadioGroupProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue)
  const value = controlledValue ?? uncontrolled

  const handleChange = useCallback((v: string) => {
    if (controlledValue === undefined) setUncontrolled(v)
    onValueChange?.(v)
  }, [controlledValue, onValueChange])

  return (
    <RadioGroupContext.Provider value={{ value, onValueChange: handleChange }}>
      <div data-slot="radio-group" role="radiogroup" className={cn("grid gap-2", className)} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

interface RadioGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function RadioGroupItem({ value, className, ...props }: RadioGroupItemProps) {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error("RadioGroupItem must be used within <RadioGroup>")
  const checked = ctx.value === value

  return (
    <button
      data-slot="radio-group-item"
      role="radio"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      className={cn(
        /* Tokens: --radio-size, --radio-border-color */
        "aspect-square size-[var(--radio-size)] rounded-full border border-[var(--radio-border-color)] text-primary shadow-sm transition-colors focus:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => ctx.onValueChange(value)}
      {...props}
    >
      {checked && (
        <span className="flex items-center justify-center">
          /* Token: --radio-dot-size, --radio-bg */
          <span className="size-[var(--radio-dot-size)] rounded-full bg-[var(--radio-bg)]" />
        </span>
      )}
    </button>
  )
}

export { RadioGroup, RadioGroupItem }
