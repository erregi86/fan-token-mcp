import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  /* Tokens: --badge-radius, --badge-font-size, --badge-font-weight, --badge-padding-x/y, --focus-ring-* */
  "inline-flex items-center border transition-colors focus:outline-none focus:ring-[length:var(--focus-ring-width)] focus:ring-[var(--focus-ring-color)] focus:ring-offset-[length:var(--focus-ring-offset)] rounded-[var(--badge-radius)] px-[var(--badge-padding-x)] py-[var(--badge-padding-y)] text-[length:var(--badge-font-size)] font-[number:var(--badge-font-weight)]",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
