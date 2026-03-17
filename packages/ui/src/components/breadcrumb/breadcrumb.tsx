import { cn } from "../../lib/utils"
import { Slot } from "@radix-ui/react-slot"

function Breadcrumb({ className, ...props }: React.ComponentPropsWithoutRef<"nav">) {
  return <nav data-slot="breadcrumb" aria-label="breadcrumb" className={className} {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentPropsWithoutRef<"ol">) {
  return (
    <ol data-slot="breadcrumb-list" className={cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className)} {...props} />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentPropsWithoutRef<"li">) {
  return <li data-slot="breadcrumb-item" className={cn("inline-flex items-center gap-1.5", className)} {...props} />
}

interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean
}

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a"
  return <Comp data-slot="breadcrumb-link" className={cn("transition-colors hover:text-foreground", className)} {...(props as any)} />
}

function BreadcrumbPage({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className={cn("font-normal text-foreground", className)} {...props} />
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
      {children ?? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      )}
    </li>
  )
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" className={cn("flex size-9 items-center justify-center", className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
      </svg>
      <span className="sr-only">More</span>
    </span>
  )
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis }
