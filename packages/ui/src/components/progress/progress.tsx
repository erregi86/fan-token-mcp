import { cn } from "../../lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

function Progress({ className, value = 0, max = 100, ...props }: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div
      data-slot="progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      /* Tokens: --progress-height, --progress-radius, --progress-bg */
      className={cn("relative h-[var(--progress-height)] w-full overflow-hidden rounded-[var(--progress-radius)] bg-[var(--progress-bg)]", className)}
      {...props}
    >
      <div
        data-slot="progress-indicator"
        /* Token: --progress-track-bg */
        className="h-full w-full flex-1 bg-[var(--progress-track-bg)] transition-all"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  )
}

export { Progress }
export type { ProgressProps }
