import { useState, useMemo } from "react"
import { cn } from "../../lib/utils"
import { buttonVariants } from "../button"

/* ─── Helpers ─── */
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

/* ─── Calendar ─── */
interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  selected?: Date
  onSelect?: (date: Date) => void
  defaultMonth?: Date
  disabled?: (date: Date) => boolean
}

function Calendar({ selected, onSelect, defaultMonth, disabled, className, ...props }: CalendarProps) {
  const [viewDate, setViewDate] = useState(defaultMonth ?? selected ?? new Date())
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const days = useMemo(() => {
    const total = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)
    const cells: (Date | null)[] = Array(firstDay).fill(null)
    for (let d = 1; d <= total; d++) cells.push(new Date(year, month, d))
    return cells
  }, [year, month])

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1))
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1))

  const isSelected = (d: Date) =>
    selected && d.toDateString() === selected.toDateString()

  const isToday = (d: Date) => d.toDateString() === new Date().toDateString()

  return (
    <div data-slot="calendar" className={cn("p-3", className)} {...props}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <button
          className={cn(buttonVariants({ variant: "outline", size: "icon" }), "size-7")}
          onClick={prevMonth}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span className="text-sm font-medium">
          {MONTHS[month]} {year}
        </span>
        <button
          className={cn(buttonVariants({ variant: "outline", size: "icon" }), "size-7")}
          onClick={nextMonth}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-xs text-muted-foreground font-medium py-1">{d}</div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />
          const isDisabled = disabled?.(day)
          return (
            <button
              key={day.toISOString()}
              disabled={isDisabled}
              className={cn(
                "inline-flex items-center justify-center size-8 rounded-md text-sm transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50",
                isSelected(day) && "bg-primary text-primary-foreground hover:bg-primary/90",
                isToday(day) && !isSelected(day) && "bg-accent text-accent-foreground",
              )}
              onClick={() => onSelect?.(day)}
            >
              {day.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { Calendar }
