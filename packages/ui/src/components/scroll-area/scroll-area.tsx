import { cn } from "../../lib/utils"

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal"
}

function ScrollArea({ className, children, orientation = "vertical", ...props }: ScrollAreaProps) {
  return (
    <div
      data-slot="scroll-area"
      className={cn(
        "relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        data-slot="scroll-area-viewport"
        className={cn(
          "h-full w-full rounded-[inherit]",
          orientation === "vertical" ? "overflow-y-auto" : "overflow-x-auto",
          "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border"
        )}
      >
        {children}
      </div>
    </div>
  )
}

function ScrollBar({ className, orientation = "vertical", ...props }: React.HTMLAttributes<HTMLDivElement> & { orientation?: "vertical" | "horizontal" }) {
  return (
    <div
      data-slot="scroll-bar"
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )}
      {...props}
    />
  )
}

export { ScrollArea, ScrollBar }
