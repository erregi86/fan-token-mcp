import { cn } from "../../lib/utils"

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

function AspectRatio({ ratio = 16 / 9, className, style, children, ...props }: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative w-full", className)}
      style={{ ...style, aspectRatio: `${ratio}` }}
      {...props}
    >
      {children}
    </div>
  )
}

export { AspectRatio }
export type { AspectRatioProps }
