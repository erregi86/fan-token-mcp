// Utilities
export { cn } from "./lib/utils"

// ─── Hooks ───
export { useCoinGeckoLogo } from "./hooks"

// ─── Form Controls ───
export { Button, buttonVariants } from "./components/button"
export type { ButtonProps } from "./components/button"

export { Input } from "./components/input"
export type { InputProps } from "./components/input"

export { Label } from "./components/label"
export type { LabelProps } from "./components/label"

export { Textarea } from "./components/textarea"
export type { TextareaProps } from "./components/textarea"

export { Checkbox } from "./components/checkbox"
export type { CheckboxProps } from "./components/checkbox"

export { Switch } from "./components/switch"
export type { SwitchProps } from "./components/switch"

export { RadioGroup, RadioGroupItem } from "./components/radio-group"

export { Select, SelectTrigger, SelectContent, SelectItem } from "./components/select"

export { Slider } from "./components/slider"
export type { SliderProps } from "./components/slider"

export { Toggle, toggleVariants } from "./components/toggle"
export type { ToggleProps } from "./components/toggle"

export { ToggleGroup, ToggleGroupItem, toggleGroupVariants } from "./components/toggle-group"

// ─── Layout ───
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/card"

export { Separator } from "./components/separator"
export type { SeparatorProps } from "./components/separator"

export { AspectRatio } from "./components/aspect-ratio"
export type { AspectRatioProps } from "./components/aspect-ratio"

export { ScrollArea, ScrollBar } from "./components/scroll-area"

export { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./components/collapsible"

// ─── Data Display ───
export { Badge, badgeVariants } from "./components/badge"
export type { BadgeProps } from "./components/badge"

export { Avatar, AvatarImage, AvatarFallback } from "./components/avatar"

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from "./components/table"

export { Skeleton } from "./components/skeleton"

export { Progress } from "./components/progress"
export type { ProgressProps } from "./components/progress"

// ─── Feedback ───
export { Alert, AlertTitle, AlertDescription, alertVariants } from "./components/alert"
export type { AlertProps } from "./components/alert"

export { Tooltip } from "./components/tooltip"
export type { TooltipProps } from "./components/tooltip"

export { ToastProvider, Toast, ToastAction, ToastViewport, useToast, toast, toastVariants } from "./components/toast"

// ─── Overlays ───
export {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "./components/dialog"

export {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
  AlertDialogTitle, AlertDialogDescription, AlertDialogFooter,
  AlertDialogAction, AlertDialogCancel,
} from "./components/alert-dialog"

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, sheetVariants } from "./components/sheet"

export { Popover, PopoverTrigger, PopoverContent } from "./components/popover"

export { HoverCard, HoverCardTrigger, HoverCardContent } from "./components/hover-card"

// ─── Menus ───
export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuShortcut,
  DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
} from "./components/dropdown-menu"

export {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuLabel, ContextMenuCheckboxItem,
  ContextMenuRadioGroup, ContextMenuRadioItem,
  ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent,
} from "./components/context-menu"

export {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarLabel, MenubarShortcut, MenubarCheckboxItem,
  MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent,
} from "./components/menubar"

// ─── Navigation ───
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/accordion"

export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs"

export {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from "./components/breadcrumb"

export {
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "./components/pagination"

export {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
  NavigationMenuViewport, NavigationMenuIndicator, navigationMenuTriggerStyle,
} from "./components/navigation-menu"

export {
  AppHeader, AppHeaderLogo, AppHeaderNav, AppHeaderNavItem,
  AppHeaderSearch, AppHeaderActions, AppHeaderActionButton,
} from "./components/app-header"

// ─── Search ───
export {
  Command, CommandInput, CommandList, CommandEmpty, CommandGroup,
  CommandItem, CommandSeparator, CommandShortcut, CommandDialog,
} from "./components/command"

// ─── Drawer (Mobile) ───
export {
  Drawer, DrawerTrigger, DrawerClose, DrawerOverlay, DrawerContent,
  DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter,
} from "./components/drawer"

// ─── Sidebar ───
export {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarTrigger, SidebarInset,
  useSidebar,
} from "./components/sidebar"

// ─── Calendar ───
export { Calendar } from "./components/calendar"

// ─── Carousel ───
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./components/carousel"

// ─── Form ───
export { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, useFormField } from "./components/form"

// ─── Input OTP ───
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./components/input-otp"

// ─── Resizable ───
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./components/resizable"
