import { useRef, useState, useCallback, useEffect } from "react"
import { cn } from "../../lib/utils"

interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  value?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
  disabled?: boolean
}

function Slider({ className, value: controlledValue, defaultValue = [0], min = 0, max = 100, step = 1, onValueChange, disabled = false, ...props }: SliderProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue)
  const value = controlledValue ?? uncontrolled
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const getPercent = (v: number) => ((v - min) / (max - min)) * 100

  const updateValue = useCallback((clientX: number) => {
    if (!trackRef.current || disabled) return
    const rect = trackRef.current.getBoundingClientRect()
    const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
    let newVal = min + percent * (max - min)
    newVal = Math.round(newVal / step) * step
    newVal = Math.min(Math.max(newVal, min), max)
    const next = [newVal]
    if (controlledValue === undefined) setUncontrolled(next)
    onValueChange?.(next)
  }, [min, max, step, controlledValue, onValueChange, disabled])

  useEffect(() => {
    const handleMove = (e: MouseEvent) => { if (dragging.current) updateValue(e.clientX) }
    const handleUp = () => { dragging.current = false }
    document.addEventListener("mousemove", handleMove)
    document.addEventListener("mouseup", handleUp)
    return () => { document.removeEventListener("mousemove", handleMove); document.removeEventListener("mouseup", handleUp) }
  }, [updateValue])

  return (
    <div
      data-slot="slider"
      ref={trackRef}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value[0]}
      aria-disabled={disabled}
      className={cn("relative flex w-full touch-none select-none items-center", disabled && "opacity-50", className)}
      onMouseDown={(e) => { dragging.current = true; updateValue(e.clientX) }}
      {...props}
    >
      {/* Tokens: --slider-track-height, --progress-radius, --progress-bg */}
      <div className="relative h-[var(--slider-track-height)] w-full grow overflow-hidden rounded-[var(--progress-radius)] bg-[var(--progress-bg)]">
        <div className="absolute h-full bg-[var(--progress-track-bg)]" style={{ width: `${getPercent(value[0])}%` }} />
      </div>
      <div
        data-slot="slider-thumb"
        /* Tokens: --slider-thumb-size, --slider-thumb-border-color, --slider-thumb-bg */
        className="absolute block size-[var(--slider-thumb-size)] rounded-full border border-[var(--slider-thumb-border-color)] bg-[var(--slider-thumb-bg)] shadow transition-colors focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)]"
        style={{ left: `calc(${getPercent(value[0])}% - 8px)` }}
      />
    </div>
  )
}

export { Slider }
export type { SliderProps }
