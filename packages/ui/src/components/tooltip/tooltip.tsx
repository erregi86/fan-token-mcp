import { useState, useRef } from "react"
import { cn } from "../../lib/utils"

interface TooltipProps {
  children: React.ReactElement
  content: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  className?: string
}

function Tooltip({ children, content, side = "top", className }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const show = () => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setVisible(true), 200)
  }

  const hide = () => {
    clearTimeout(timeoutRef.current)
    setVisible(false)
  }

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }

  return (
    <span
      data-slot="tooltip"
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <span
          data-slot="tooltip-content"
          role="tooltip"
          className={cn(
            /* Tokens: --tooltip-radius, --tooltip-bg, --tooltip-fg, --tooltip-padding-x/y, --tooltip-font-size, --tooltip-shadow */
            "absolute z-50 max-w-xs rounded-[var(--tooltip-radius)] bg-[var(--tooltip-bg)] px-[var(--tooltip-padding-x)] py-[var(--tooltip-padding-y)] text-[length:var(--tooltip-font-size)] text-[var(--tooltip-fg)] shadow-[var(--tooltip-shadow)] animate-fade-in",
            positionClasses[side],
            className
          )}
        >
          {content}
        </span>
      )}
    </span>
  )
}

export { Tooltip }
export type { TooltipProps }
