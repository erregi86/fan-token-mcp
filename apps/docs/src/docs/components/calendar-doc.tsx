import { useState } from "react"
import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Calendar } from "fan-tokens/calendar"

export function CalendarDoc() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [rangeStart, setRangeStart] = useState<Date | undefined>(undefined)

  const today = new Date()
  const pastDate = new Date(today)
  pastDate.setDate(pastDate.getDate() - 1)

  return (
    <ComponentPage name="Calendar" description="A date picker calendar component for selecting single dates or date ranges with full keyboard navigation.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for date selection in forms, booking flows, and date range pickers." },
          { icon: "✅", text: "Supports disabling specific dates (weekends, past dates, unavailable dates)." },
          { icon: "💡", text: "Combine with a Popover for an inline date picker input pattern." },
          { icon: "⚠️", text: "Do not use Calendar for time selection -- pair with a separate time input." },
        ]}
      />

      <BreakpointInfo
        mobile="Display the calendar full-width with a single month view. Ensure touch targets are at least 44px."
        desktop="Can show dual months side by side for date range selection. Standard width is around 280-320px per month."
      />

      <DemoSection title="Single Date Selection">
        <div className="flex flex-col items-center gap-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-border"
          />
          {date && (
            <p className="text-sm text-muted-foreground">
              Selected: <span className="font-medium text-foreground">{date.toLocaleDateString()}</span>
            </p>
          )}
        </div>
      </DemoSection>

      <DemoSection title="Disabled Past Dates">
        <div className="flex flex-col items-center gap-3">
          <Calendar
            mode="single"
            selected={rangeStart}
            onSelect={setRangeStart}
            disabled={(d) => d < today}
            className="rounded-md border border-border"
          />
          <p className="text-xs text-muted-foreground">Past dates are disabled. Only future dates can be selected.</p>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Indicate today's date visually so users have a point of reference.",
          "Disable past or unavailable dates to prevent invalid selections.",
          "Provide keyboard navigation support (arrow keys, Enter, Escape).",
          "Show the selected date in a readable format near the calendar.",
        ]}
        donts={[
          "Use Calendar for time selection -- use a dedicated time picker instead.",
          "Display a calendar without clear month/year navigation controls.",
          "Allow selection of dates that are not valid for the use case (e.g., past dates for future bookings).",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "bg-primary", value: "var(--primary)", description: "Background for the selected date cell." },
          { name: "text-primary-foreground", value: "var(--primary-foreground)", description: "Text color on the selected date." },
          { name: "bg-accent", value: "var(--accent)", description: "Background for hovered/focused date cells." },
          { name: "text-muted-foreground", value: "var(--muted-foreground)", description: "Color for disabled and out-of-range dates." },
        ]}
      />

      <CodeBlock>{`import { Calendar } from "fan-tokens/calendar"

const [date, setDate] = useState<Date | undefined>(new Date())

{/* Single date selection */}
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>

{/* With disabled dates */}
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(d) => d < new Date()}
  className="rounded-md border"
/>

{/* Combine with Popover for inline picker */}
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">{date?.toLocaleDateString() ?? "Pick a date"}</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`}</CodeBlock>
    </ComponentPage>
  )
}
