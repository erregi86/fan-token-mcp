import { cn } from "../../lib/utils"

/**
 * Card tokens → components.css:
 * --card-radius, --card-shadow, --card-bg, --card-fg, --card-border-color
 * --card-padding, --card-header-gap, --card-title-font-size/weight
 * --card-description-font-size
 */

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-[var(--card-radius)] border border-[var(--card-border-color)] bg-[var(--card-bg)] text-[var(--card-fg)] shadow-[var(--card-shadow)]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-[var(--card-header-gap)] p-[var(--card-padding)]", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-[length:var(--card-title-font-size)] font-[number:var(--card-title-font-weight)] leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-[length:var(--card-description-font-size)] text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-[var(--card-padding)] pt-0", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-[var(--card-padding)] pt-0", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
