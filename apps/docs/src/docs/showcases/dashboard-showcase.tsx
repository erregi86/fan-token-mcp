import { useState } from "react"
import { cn } from "fan-tokens/utils"

// Layout
import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarTrigger, SidebarInset,
} from "fan-tokens/sidebar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "fan-tokens/card"
import { Separator } from "fan-tokens/separator"
import { ScrollArea } from "fan-tokens/scroll-area"

// Form Controls
import { Button } from "fan-tokens/button"
import { Input } from "fan-tokens/input"
import { Label } from "fan-tokens/label"
import { Checkbox } from "fan-tokens/checkbox"
import { Switch } from "fan-tokens/switch"
import { Select, SelectTrigger, SelectContent, SelectItem } from "fan-tokens/select"

// Data Display
import { Badge } from "fan-tokens/badge"
import { Avatar, AvatarImage, AvatarFallback } from "fan-tokens/avatar"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "fan-tokens/table"
import { Skeleton } from "fan-tokens/skeleton"
import { Progress } from "fan-tokens/progress"

// Navigation
import { Tabs, TabsList, TabsTrigger, TabsContent } from "fan-tokens/tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "fan-tokens/breadcrumb"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "fan-tokens/pagination"

// Overlays
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "fan-tokens/dialog"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "fan-tokens/alert-dialog"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "fan-tokens/sheet"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "fan-tokens/dropdown-menu"
import { Tooltip } from "fan-tokens/tooltip"

// Feedback
import { Alert, AlertTitle, AlertDescription } from "fan-tokens/alert"
import { useToast, toast } from "fan-tokens/toast"

// Calendar
import { Calendar } from "fan-tokens/calendar"

// Form
import { Form, FormField, FormLabel, FormControl, FormDescription as FormDesc, FormMessage } from "fan-tokens/form"

/* ─── Data ─── */
const NAV_ITEMS = [
  { label: "Dashboard", icon: "📊", active: true },
  { label: "Analytics", icon: "📈", active: false },
  { label: "Customers", icon: "👤", active: false },
  { label: "Products", icon: "📦", active: false },
  { label: "Orders", icon: "🛒", active: false },
  { label: "Settings", icon: "⚙️", active: false },
]

const STATS = [
  { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", trend: "up", progress: 72 },
  { title: "Subscriptions", value: "+2,350", change: "+180.1%", trend: "up", progress: 85 },
  { title: "Active Users", value: "+12,234", change: "+19%", trend: "up", progress: 64 },
  { title: "Conversion", value: "3.2%", change: "-2%", trend: "down", progress: 32 },
]

const ORDERS = [
  { id: "ORD-001", customer: "Liam Johnson", email: "liam@email.com", status: "Completed", amount: "$250.00", date: "2026-03-14" },
  { id: "ORD-002", customer: "Olivia Smith", email: "olivia@email.com", status: "Pending", amount: "$150.00", date: "2026-03-13" },
  { id: "ORD-003", customer: "Noah Williams", email: "noah@email.com", status: "Processing", amount: "$350.00", date: "2026-03-13" },
  { id: "ORD-004", customer: "Emma Brown", email: "emma@email.com", status: "Completed", amount: "$450.00", date: "2026-03-12" },
  { id: "ORD-005", customer: "James Davis", email: "james@email.com", status: "Failed", amount: "$120.00", date: "2026-03-12" },
  { id: "ORD-006", customer: "Sophia Wilson", email: "sophia@email.com", status: "Completed", amount: "$280.00", date: "2026-03-11" },
]

const ACTIVITY = [
  { user: "Liam J.", action: "placed order #ORD-001", time: "2 min ago", initials: "LJ" },
  { user: "Olivia S.", action: "updated their profile", time: "15 min ago", initials: "OS" },
  { user: "Noah W.", action: "submitted a support ticket", time: "1 hour ago", initials: "NW" },
  { user: "Emma B.", action: "completed onboarding", time: "3 hours ago", initials: "EB" },
  { user: "James D.", action: "upgraded to Pro plan", time: "5 hours ago", initials: "JD" },
]

const statusColor = (s: string) => {
  switch (s) {
    case "Completed": return "default"
    case "Pending": return "secondary"
    case "Processing": return "outline"
    case "Failed": return "destructive"
    default: return "secondary"
  }
}

/* ─── Dashboard ─── */
export function DashboardShowcase() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(new Date())
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  return (
    <div className="h-[900px] overflow-hidden rounded-xl border border-border shadow-lg min-w-0">
      <SidebarProvider defaultOpen={false}>
       

        {/* ─── Main Content ─── */}
        <SidebarInset>
          <ScrollArea className="h-full">
            {/* Header */}
            <header className="flex items-center justify-between border-b border-border px-3 sm:px-6 py-3">
              <div className="flex items-center gap-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-5 hidden sm:block" />
                <Breadcrumb className="hidden sm:flex">
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Dashboard</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative hidden sm:block">
                  <Input placeholder="Search..." className="w-56 pr-8" />
                </div>
                <Tooltip content="Notifications">
                  <Button variant="ghost" size="icon" className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                    <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground">3</span>
                  </Button>
                </Tooltip>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="size-8 cursor-pointer">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>

            <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
              {/* Page Title */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Dashboard</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">Overview of your business metrics</p>
                </div>
                <div className="flex gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                        Settings
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Dashboard Settings</SheetTitle>
                        <SheetDescription>Configure your dashboard preferences.</SheetDescription>
                      </SheetHeader>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center justify-between">
                          <Label>Show revenue</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Show activity feed</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Compact mode</Label>
                          <Switch />
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <Label>Date range</Label>
                          <Select>
                            <SelectTrigger>Last 30 days</SelectTrigger>
                            <SelectContent>
                              <SelectItem value="7">Last 7 days</SelectItem>
                              <SelectItem value="30">Last 30 days</SelectItem>
                              <SelectItem value="90">Last 90 days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        New Order
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New Order</DialogTitle>
                        <DialogDescription>Add a new order to the system.</DialogDescription>
                      </DialogHeader>
                      <Form className="space-y-4">
                        <FormField name="customer">
                          <FormLabel>Customer Name</FormLabel>
                          <FormControl><Input placeholder="Enter customer name" /></FormControl>
                        </FormField>
                        <FormField name="amount">
                          <FormLabel>Amount</FormLabel>
                          <FormControl><Input type="number" placeholder="0.00" /></FormControl>
                        </FormField>
                        <FormField name="status">
                          <FormLabel>Status</FormLabel>
                          <Select>
                            <SelectTrigger>Select status</SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="processing">Processing</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormField>
                      </Form>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button onClick={() => toast({ title: "Order created", description: "New order has been added successfully." })}>Create Order</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Alert */}
              <Alert>
                <AlertTitle>Welcome back, John!</AlertTitle>
                <AlertDescription>You have 3 new orders and 2 pending reviews. <a href="#" className="font-medium underline">View details</a></AlertDescription>
              </Alert>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {STATS.map((stat) => (
                  <Card key={stat.title}>
                    <CardHeader className="pb-2">
                      <CardDescription className="text-xs">{stat.title}</CardDescription>
                      <CardTitle className="text-2xl">{stat.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="text-[10px] px-1.5 py-0">
                          {stat.change}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground">from last month</span>
                      </div>
                      <Progress value={stat.progress} className="h-1" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Orders Table */}
                <Card className="lg:col-span-2 min-w-0">
                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-base sm:text-lg">Recent Orders</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Manage your orders and track status.</CardDescription>
                      </div>
                      <Tabs defaultValue="all">
                        <TabsList>
                          <TabsTrigger value="all">All</TabsTrigger>
                          <TabsTrigger value="completed">Completed</TabsTrigger>
                          <TabsTrigger value="pending">Pending</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-10">
                            <Checkbox
                              checked={selectedRows.length === ORDERS.length}
                              onCheckedChange={(checked) => setSelectedRows(checked ? ORDERS.map((o) => o.id) : [])}
                            />
                          </TableHead>
                          <TableHead>Order</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                          <TableHead className="w-10"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {ORDERS.map((order) => (
                          <TableRow key={order.id} data-state={selectedRows.includes(order.id) ? "selected" : undefined}>
                            <TableCell>
                              <Checkbox
                                checked={selectedRows.includes(order.id)}
                                onCheckedChange={() => toggleRow(order.id)}
                              />
                            </TableCell>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>
                              <div>
                                <div className="text-sm">{order.customer}</div>
                                <div className="text-xs text-muted-foreground">{order.email}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={statusColor(order.status) as any}>{order.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right font-medium">{order.amount}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger>
                                  <Button variant="ghost" size="icon" className="size-7">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>View details</DropdownMenuItem>
                                  <DropdownMenuItem>Edit order</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-4">
                    <div className="text-xs text-muted-foreground">
                      {selectedRows.length} of {ORDERS.length} row(s) selected
                    </div>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationNext href="#" /></PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </CardFooter>
                </Card>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Activity Feed */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-4">
                          {ACTIVITY.map((a, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Avatar className="size-7">
                                <AvatarFallback className="text-[10px]">{a.initials}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 text-xs">
                                <span className="font-medium">{a.user}</span>{" "}
                                <span className="text-muted-foreground">{a.action}</span>
                                <div className="text-[10px] text-muted-foreground mt-0.5">{a.time}</div>
                              </div>
                            </div>
                          ))}
                          {/* Skeleton loading */}
                          <div className="flex items-start gap-3">
                            <Skeleton className="size-7 rounded-full" />
                            <div className="flex-1 space-y-1.5">
                              <Skeleton className="h-3 w-3/4" />
                              <Skeleton className="h-2 w-1/2" />
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Calendar */}
                  <Card>
                    <CardHeader className="pb-1">
                      <CardTitle className="text-base">Schedule</CardTitle>
                    </CardHeader>
                    <CardContent className="p-1">
                      <Calendar
                        selected={calendarDate}
                        onSelect={setCalendarDate}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex gap-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm">Delete Selected ({selectedRows.length})</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete {selectedRows.length} order(s). This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => { setSelectedRows([]); toast({ title: "Deleted", description: "Selected orders have been removed." }) }}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Button variant="outline" size="sm" onClick={() => toast({ title: "Report exported", description: "Your CSV report is ready for download." })}>
                  Export CSV
                </Button>
              </div>
            </div>
          </ScrollArea>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
