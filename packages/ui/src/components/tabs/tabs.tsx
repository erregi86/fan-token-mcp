import { createContext, useContext, useState, useCallback } from "react"
import { cn } from "../../lib/utils"

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error("Tabs components must be used within <Tabs>")
  return ctx
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
}

function Tabs({ value: controlledValue, onValueChange, defaultValue = "", className, ...props }: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (!isControlled) setUncontrolledValue(newValue)
      onValueChange?.(newValue)
    },
    [isControlled, onValueChange]
  )

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div data-slot="tabs" className={className} {...props} />
    </TabsContext.Provider>
  )
}

function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="tabs-list"
      role="tablist"
      className={cn(
        /* Tokens: --tabs-list-height, --tabs-list-radius, --tabs-list-padding, --tabs-list-bg */
        "inline-flex h-[var(--tabs-list-height)] items-center justify-center rounded-[var(--tabs-list-radius)] bg-[var(--tabs-list-bg)] p-[var(--tabs-list-padding)] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function TabsTrigger({ className, value: tabValue, ...props }: TabsTriggerProps) {
  const { value, onValueChange } = useTabs()
  const isActive = value === tabValue

  return (
    <button
      data-slot="tabs-trigger"
      role="tab"
      aria-selected={isActive}
      className={cn(
        /* Tokens: --tabs-trigger-radius, --tabs-trigger-padding-x/y, --tabs-trigger-font-size, --tabs-trigger-font-weight */
        "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--tabs-trigger-radius)] px-[var(--tabs-trigger-padding-x)] py-[var(--tabs-trigger-padding-y)] text-[length:var(--tabs-trigger-font-size)] font-[number:var(--tabs-trigger-font-weight)] transition-all",
        "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)]",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-background text-foreground shadow-xs",
        className
      )}
      onClick={() => onValueChange(tabValue)}
      {...props}
    />
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function TabsContent({ className, value: tabValue, ...props }: TabsContentProps) {
  const { value } = useTabs()
  if (value !== tabValue) return null

  return (
    <div
      data-slot="tabs-content"
      role="tabpanel"
      className={cn("mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
