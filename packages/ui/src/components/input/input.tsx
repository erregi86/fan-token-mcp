import { cn } from "../../lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        /* Tokens: --input-height, --input-radius, --input-padding-x/y, --input-font-size, --input-shadow, --input-border-color, --input-bg */
        "flex w-full transition-colors",
        "h-[var(--input-height)] rounded-[var(--input-radius)]",
        "border border-[var(--input-border-color)] bg-[var(--input-bg)]",
        "px-[var(--input-padding-x)] py-[var(--input-padding-y)]",
        "text-[length:var(--input-font-size)] shadow-[var(--input-shadow)]",
        "file:border-0 file:bg-transparent file:text-[length:var(--input-font-size)] file:font-medium file:text-foreground",
        "placeholder:text-[var(--input-placeholder-color)]",
        "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--input-focus-ring-color)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
export type { InputProps }
