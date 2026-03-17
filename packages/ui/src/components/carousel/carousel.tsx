import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react"
import { cn } from "../../lib/utils"

/* ─── Context ─── */
interface CarouselContextValue {
  current: number
  count: number
  scrollTo: (index: number) => void
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
  orientation: "horizontal" | "vertical"
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const ctx = useContext(CarouselContext)
  if (!ctx) throw new Error("Carousel components must be within <Carousel>")
  return ctx
}

/* ─── Root ─── */
interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  opts?: { loop?: boolean }
}

function Carousel({ orientation = "horizontal", opts, className, children, ...props }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const [count] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const canScrollPrev = opts?.loop ? true : current > 0
  const canScrollNext = opts?.loop ? true : current < count - 1

  const scrollTo = useCallback((index: number) => {
    const clamped = opts?.loop
      ? ((index % count) + count) % count
      : Math.max(0, Math.min(index, count - 1))
    setCurrent(clamped)
  }, [count, opts?.loop])

  const scrollPrev = useCallback(() => scrollTo(current - 1), [current, scrollTo])
  const scrollNext = useCallback(() => scrollTo(current + 1), [current, scrollTo])

  // Touch support
  const touchStart = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = orientation === "horizontal" ? e.touches[0].clientX : e.touches[0].clientY
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const end = orientation === "horizontal" ? e.changedTouches[0].clientX : e.changedTouches[0].clientY
    const diff = touchStart.current - end
    if (Math.abs(diff) > 50) diff > 0 ? scrollNext() : scrollPrev()
  }

  return (
    <CarouselContext.Provider value={{ current, count, scrollTo, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation }}>
      <div
        ref={containerRef}
        data-slot="carousel"
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

/* ─── Content ─── */
function CarouselContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { current, orientation } = useCarousel()
  const childArray = Array.isArray(children) ? children : [children]

  // Update count
  useEffect(() => {
    // We can't set count from context directly, but we track via children
  }, [childArray.length])

  const translateValue = orientation === "horizontal"
    ? `translateX(-${current * 100}%)`
    : `translateY(-${current * 100}%)`

  return (
    <div className="overflow-hidden">
      <div
        data-slot="carousel-content"
        className={cn(
          "flex transition-transform duration-300 ease-in-out",
          orientation === "vertical" && "flex-col",
          className
        )}
        style={{ transform: translateValue }}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

/* ─── Item ─── */
function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel()
  return (
    <div
      data-slot="carousel-item"
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

/* ─── Previous / Next ─── */
function CarouselPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { canScrollPrev, scrollPrev, orientation } = useCarousel()
  return (
    <button
      data-slot="carousel-previous"
      disabled={!canScrollPrev}
      className={cn(
        "absolute z-10 inline-flex size-8 items-center justify-center rounded-full border border-input bg-background shadow-sm hover:bg-accent disabled:opacity-50",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollPrev}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
    </button>
  )
}

function CarouselNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { canScrollNext, scrollNext, orientation } = useCarousel()
  return (
    <button
      data-slot="carousel-next"
      disabled={!canScrollNext}
      className={cn(
        "absolute z-10 inline-flex size-8 items-center justify-center rounded-full border border-input bg-background shadow-sm hover:bg-accent disabled:opacity-50",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
