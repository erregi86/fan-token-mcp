import { cn } from "../../lib/utils"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        /* Tokens: --label-font-size, --label-font-weight, --label-line-height */
        "text-[length:var(--label-font-size)] font-[number:var(--label-font-weight)] leading-[var(--label-line-height)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

export { Label }
export type { LabelProps }
