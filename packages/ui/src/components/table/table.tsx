import { cn } from "../../lib/utils"

/**
 * Table tokens → components.css:
 * --table-font-size, --table-head-height, --table-head-font-weight, --table-head-fg
 * --table-cell-padding-x/y, --table-row-border-color, --table-row-hover-bg, --table-row-selected-bg
 */

function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table data-slot="table" className={cn("w-full caption-bottom text-[length:var(--table-font-size)]", className)} {...props} />
    </div>
  )
}

function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead data-slot="table-header" className={cn("[&_tr]:border-b", className)} {...props} />
}

function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />
}

function TableFooter({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tfoot data-slot="table-footer" className={cn("border-t bg-[var(--table-row-hover-bg)] font-[number:var(--table-head-font-weight)] [&>tr]:last:border-b-0", className)} {...props} />
}

function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr data-slot="table-row" className={cn("border-b border-[var(--table-row-border-color)] transition-colors hover:bg-[var(--table-row-hover-bg)] data-[state=selected]:bg-[var(--table-row-selected-bg)]", className)} {...props} />
}

function TableHead({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th data-slot="table-head" className={cn("h-[var(--table-head-height)] px-[var(--table-cell-padding-x)] text-left align-middle font-[number:var(--table-head-font-weight)] text-[var(--table-head-fg)] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)} {...props} />
}

function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td data-slot="table-cell" className={cn("px-[var(--table-cell-padding-x)] py-[var(--table-cell-padding-y)] align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)} {...props} />
}

function TableCaption({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return <caption data-slot="table-caption" className={cn("mt-4 text-[length:var(--table-font-size)] text-muted-foreground", className)} {...props} />
}

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption }
