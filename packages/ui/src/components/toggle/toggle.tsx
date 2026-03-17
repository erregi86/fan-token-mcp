import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const toggleVariants = cva(
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

interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
}

function Toggle({ className, variant, size, pressed = false, onPressedChange, ...props }: ToggleProps) {
  return (
    <button
      data-slot="toggle"
      data-state={pressed ? "on" : "off"}
      aria-pressed={pressed}
      className={cn(
        toggleVariants({ variant, size }),
        pressed && "bg-accent text-accent-foreground",
        className
      )}
      onClick={() => onPressedChange?.(!pressed)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
export type { ToggleProps }
