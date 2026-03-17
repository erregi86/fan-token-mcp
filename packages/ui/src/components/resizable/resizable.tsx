import { useState, useRef, useCallback } from "react"
import { cn } from "../../lib/utils"

/* ─── ResizablePanelGroup ─── */
interface ResizablePanelGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical"
}

function ResizablePanelGroup({ direction = "horizontal", className, children, ...props }: ResizablePanelGroupProps) {
  return (
    <div
      data-slot="resizable-panel-group"
      data-direction={direction}
      className={cn(
        "flex h-full w-full",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ─── ResizablePanel ─── */
interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize?: number
  minSize?: number
  maxSize?: number
}

function ResizablePanel({ defaultSize = 50, minSize = 10, maxSize = 90, className, style, ...props }: ResizablePanelProps) {
  return (
    <div
      data-slot="resizable-panel"
      className={cn("flex-1 overflow-auto", className)}
      style={{ flexBasis: `${defaultSize}%`, minWidth: `${minSize}%`, maxWidth: `${maxSize}%`, ...style }}
      {...props}
    />
  )
}

/* ─── ResizableHandle ─── */
interface ResizableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean
}

function ResizableHandle({ withHandle = false, className, ...props }: ResizableHandleProps) {
  const handleRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)

    const parent = handleRef.current?.parentElement
    if (!parent) return
    const direction = parent.dataset.direction || "horizontal"
    const panels = Array.from(parent.children).filter(
      (c) => (c as HTMLElement).dataset.slot === "resizable-panel"
    ) as HTMLElement[]

    const handleIdx = Array.from(parent.children).indexOf(handleRef.current!)
    const leftPanel = panels[Math.floor(handleIdx / 2)]
    const rightPanel = panels[Math.floor(handleIdx / 2) + 1]
    if (!leftPanel || !rightPanel) return

    const startX = e.clientX
    const startY = e.clientY
    const startLeftWidth = leftPanel.getBoundingClientRect().width
    const startLeftHeight = leftPanel.getBoundingClientRect().height
    const parentWidth = parent.getBoundingClientRect().width
    const parentHeight = parent.getBoundingClientRect().height

    const onMouseMove = (ev: MouseEvent) => {
      if (direction === "horizontal") {
        const delta = ev.clientX - startX
        const newPct = ((startLeftWidth + delta) / parentWidth) * 100
        leftPanel.style.flexBasis = `${Math.max(10, Math.min(90, newPct))}%`
      } else {
        const delta = ev.clientY - startY
        const newPct = ((startLeftHeight + delta) / parentHeight) * 100
        leftPanel.style.flexBasis = `${Math.max(10, Math.min(90, newPct))}%`
      }
    }

    const onMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
  }, [])

  return (
    <div
      ref={handleRef}
      data-slot="resizable-handle"
      className={cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        "[&[data-direction=vertical]]:h-px [&[data-direction=vertical]]:w-full",
        isDragging && "bg-ring",
        className
      )}
      onMouseDown={handleMouseDown}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>
          </svg>
        </div>
      )}
    </div>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
