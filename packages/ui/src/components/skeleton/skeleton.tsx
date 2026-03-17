import { cn } from "../../lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="skeleton"
      /* Tokens: --skeleton-radius, --skeleton-bg */
      className={cn("animate-pulse rounded-[var(--skeleton-radius)] bg-[var(--skeleton-bg)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
