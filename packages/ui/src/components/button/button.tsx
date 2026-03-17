import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

/**
 * Button tokens → components.css:
 * --button-radius, --button-font-size, --button-font-weight, --button-line-height
 * --button-height/sm/lg, --button-padding-x/sm/lg, --button-icon-size, --button-shadow
 * Colors: --primary, --secondary, --destructive, --accent, --input
 * Focus: --focus-ring-color, --focus-ring-width, --focus-ring-offset
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors outline-none",
    "rounded-[var(--button-radius)]",
    "text-[length:var(--button-font-size)]",
    "font-[number:var(--button-font-weight)]",
    "leading-[var(--button-line-height)]",
    "focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[var(--button-icon-size)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[var(--button-shadow)] hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-[var(--button-shadow)] hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground shadow-[var(--button-shadow)] hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-[var(--button-shadow)] hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[var(--button-height)] px-[var(--button-padding-x)] py-[var(--button-padding-y)]",
        sm: "h-[var(--button-sm-height)] px-[var(--button-sm-padding-x)] rounded-[var(--button-sm-radius)] text-[length:var(--button-sm-font-size)]",
        lg: "h-[var(--button-lg-height)] px-[var(--button-lg-padding-x)]",
        icon: "size-[var(--button-icon-only-size)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
