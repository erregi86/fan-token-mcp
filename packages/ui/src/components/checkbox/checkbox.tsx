import { cn } from "../../lib/utils"

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function Checkbox({ className, checked, onCheckedChange, disabled, ...props }: CheckboxProps) {
  return (
    <button
      data-slot="checkbox"
      role="checkbox"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      disabled={disabled}
      className={cn(
        /* Tokens: --checkbox-size, --checkbox-radius, --checkbox-border-color, --checkbox-bg, --checkbox-fg */
        "peer size-[var(--checkbox-size)] shrink-0 rounded-[var(--checkbox-radius)] border border-[var(--checkbox-border-color)] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)] disabled:cursor-not-allowed disabled:opacity-50",
        checked && "bg-[var(--checkbox-bg)] text-[var(--checkbox-fg)]",
        className
      )}
      onClick={() => onCheckedChange?.(!checked)}
      {...(props as any)}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[var(--checkbox-size)]"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )}
    </button>
  )
}

export { Checkbox }
export type { CheckboxProps }
