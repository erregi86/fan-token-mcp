import { cn } from "../../lib/utils"

interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function Switch({ className, checked = false, onCheckedChange, disabled, ...props }: SwitchProps) {
  return (
    <button
      data-slot="switch"
      role="switch"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      disabled={disabled}
      className={cn(
        /* Tokens: --switch-height, --switch-width, --switch-bg-on, --switch-bg-off */
        "peer inline-flex h-[var(--switch-height)] w-[var(--switch-width)] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)] focus-visible:ring-offset-[length:var(--focus-ring-offset)] focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-[var(--switch-bg-on)]" : "bg-[var(--switch-bg-off)]",
        className
      )}
      onClick={() => onCheckedChange?.(!checked)}
      {...props}
    >
      <span
        data-slot="switch-thumb"
        className={cn(
          /* Tokens: --switch-thumb-size, --switch-thumb-bg */
          "pointer-events-none block size-[var(--switch-thumb-size)] rounded-full bg-[var(--switch-thumb-bg)] shadow-lg ring-0 transition-transform",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  )
}

export { Switch }
export type { SwitchProps }
