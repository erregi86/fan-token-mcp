import { cn } from "../../lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <div
      data-slot="separator"
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(
        /* Tokens: --separator-color, --separator-thickness */
        "shrink-0 bg-[var(--separator-color)]",
        orientation === "horizontal" ? "h-[var(--separator-thickness)] w-full" : "h-full w-[var(--separator-thickness)]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
export type { SeparatorProps }
