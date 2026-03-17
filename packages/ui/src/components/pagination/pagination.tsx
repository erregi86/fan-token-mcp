import { cn } from "../../lib/utils"

function Pagination({ className, ...props }: React.ComponentPropsWithoutRef<"nav">) {
  return <nav data-slot="pagination" role="navigation" aria-label="pagination" className={cn("mx-auto flex w-full justify-center", className)} {...props} />
}

function PaginationContent({ className, ...props }: React.ComponentPropsWithoutRef<"ul">) {
  return <ul data-slot="pagination-content" className={cn("flex flex-row items-center gap-1", className)} {...props} />
}

function PaginationItem({ className, ...props }: React.ComponentPropsWithoutRef<"li">) {
  return <li data-slot="pagination-item" className={className} {...props} />
}

interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  isActive?: boolean
  size?: "default" | "sm" | "lg" | "icon"
}

function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        isActive ? "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground",
        size === "icon" ? "size-9" : size === "sm" ? "h-8 px-3" : size === "lg" ? "h-10 px-8" : "h-9 px-4",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({ className, ...props }: React.ComponentPropsWithoutRef<typeof PaginationLink>) {
  return (
    <PaginationLink data-slot="pagination-previous" aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, ...props }: React.ComponentPropsWithoutRef<typeof PaginationLink>) {
  return (
    <PaginationLink data-slot="pagination-next" aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span data-slot="pagination-ellipsis" aria-hidden className={cn("flex size-9 items-center justify-center", className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
      </svg>
      <span className="sr-only">More pages</span>
    </span>
  )
}

export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis }
