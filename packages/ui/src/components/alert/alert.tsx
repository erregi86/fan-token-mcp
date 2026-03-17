import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const alertVariants = cva(
  /* Tokens: --alert-radius, --alert-padding, --alert-bg, --alert-fg */
  "relative w-full rounded-[var(--alert-radius)] border p-[var(--alert-padding)] [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-[var(--alert-bg)] text-[var(--alert-fg)]",
        destructive: "border-destructive/50 text-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      data-slot="alert-title"
      /* Token: --alert-title-font-weight */
      className={cn("mb-1 font-[number:var(--alert-title-font-weight)] leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="alert-description"
      /* Token: --alert-description-font-size */
      className={cn("text-[length:var(--alert-description-font-size)] [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, alertVariants }
export type { AlertProps }
