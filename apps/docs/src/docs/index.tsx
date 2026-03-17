import { DocsLayout, type ComponentDoc } from "./docs-layout"
import { ToastProvider } from "fan-tokens"

// Component docs
import { ButtonDoc } from "./components/button-doc"
import { InputDoc } from "./components/input-doc"
import { LabelDoc } from "./components/label-doc"
import { TextareaDoc } from "./components/textarea-doc"
import { CheckboxDoc } from "./components/checkbox-doc"
import { SwitchDoc } from "./components/switch-doc"
import { RadioGroupDoc } from "./components/radio-group-doc"
import { SelectDoc } from "./components/select-doc"
import { SliderDoc } from "./components/slider-doc"
import { ToggleDoc } from "./components/toggle-doc"
import { CardDoc } from "./components/card-doc"
import { SeparatorDoc } from "./components/separator-doc"
import { AspectRatioDoc } from "./components/aspect-ratio-doc"
import { ScrollAreaDoc } from "./components/scroll-area-doc"
import { CollapsibleDoc } from "./components/collapsible-doc"
import { BadgeDoc } from "./components/badge-doc"
import { AvatarDoc } from "./components/avatar-doc"
import { TableDoc } from "./components/table-doc"
import { SkeletonDoc } from "./components/skeleton-doc"
import { ProgressDoc } from "./components/progress-doc"
import { AlertDoc } from "./components/alert-doc"
import { TooltipDoc } from "./components/tooltip-doc"
import { ToastDoc } from "./components/toast-doc"
import { DialogDoc } from "./components/dialog-doc"
import { AlertDialogDoc } from "./components/alert-dialog-doc"
import { SheetDoc } from "./components/sheet-doc"
import { PopoverDoc } from "./components/popover-doc"
import { HoverCardDoc } from "./components/hover-card-doc"
import { DropdownMenuDoc } from "./components/dropdown-menu-doc"
import { ContextMenuDoc } from "./components/context-menu-doc"
import { MenubarDoc } from "./components/menubar-doc"
import { AccordionDoc } from "./components/accordion-doc"
import { TabsDoc } from "./components/tabs-doc"
import { BreadcrumbDoc } from "./components/breadcrumb-doc"
import { PaginationDoc } from "./components/pagination-doc"
import { NavigationMenuDoc } from "./components/navigation-menu-doc"
import { CommandDoc } from "./components/command-doc"
import { DrawerDoc } from "./components/drawer-doc"
import { SidebarDoc } from "./components/sidebar-doc"
import { CalendarDoc } from "./components/calendar-doc"
import { CarouselDoc } from "./components/carousel-doc"
import { FormDoc } from "./components/form-doc"
import { InputOTPDoc } from "./components/input-otp-doc"
import { ResizableDoc } from "./components/resizable-doc"

const components: ComponentDoc[] = [
  // Form Controls
  { slug: "button", name: "Button", category: "Form Controls", description: "Displays a button.", render: () => <ButtonDoc /> },
  { slug: "input", name: "Input", category: "Form Controls", description: "A form input field.", render: () => <InputDoc /> },
  { slug: "label", name: "Label", category: "Form Controls", description: "Accessible label for controls.", render: () => <LabelDoc /> },
  { slug: "textarea", name: "Textarea", category: "Form Controls", description: "A multiline text input.", render: () => <TextareaDoc /> },
  { slug: "checkbox", name: "Checkbox", category: "Form Controls", description: "A toggle checkbox.", render: () => <CheckboxDoc /> },
  { slug: "switch", name: "Switch", category: "Form Controls", description: "A toggle switch.", render: () => <SwitchDoc /> },
  { slug: "radio-group", name: "Radio Group", category: "Form Controls", description: "A set of radio buttons.", render: () => <RadioGroupDoc /> },
  { slug: "select", name: "Select", category: "Form Controls", description: "A dropdown select.", render: () => <SelectDoc /> },
  { slug: "slider", name: "Slider", category: "Form Controls", description: "A range slider input.", render: () => <SliderDoc /> },
  { slug: "toggle", name: "Toggle", category: "Form Controls", description: "A two-state toggle.", render: () => <ToggleDoc /> },
  { slug: "input-otp", name: "Input OTP", category: "Form Controls", description: "One-time password input.", render: () => <InputOTPDoc /> },
  { slug: "form", name: "Form", category: "Form Controls", description: "Form with validation.", render: () => <FormDoc /> },

  // Layout
  { slug: "card", name: "Card", category: "Layout", description: "A card container.", render: () => <CardDoc /> },
  { slug: "separator", name: "Separator", category: "Layout", description: "A visual divider.", render: () => <SeparatorDoc /> },
  { slug: "aspect-ratio", name: "Aspect Ratio", category: "Layout", description: "A ratio container.", render: () => <AspectRatioDoc /> },
  { slug: "scroll-area", name: "Scroll Area", category: "Layout", description: "Custom scrollbars.", render: () => <ScrollAreaDoc /> },
  { slug: "collapsible", name: "Collapsible", category: "Layout", description: "Expandable content.", render: () => <CollapsibleDoc /> },
  { slug: "resizable", name: "Resizable", category: "Layout", description: "Resizable panels.", render: () => <ResizableDoc /> },
  { slug: "sidebar", name: "Sidebar", category: "Layout", description: "Responsive app sidebar.", render: () => <SidebarDoc /> },
  { slug: "calendar", name: "Calendar", category: "Layout", description: "Date picker calendar.", render: () => <CalendarDoc /> },
  { slug: "carousel", name: "Carousel", category: "Layout", description: "Content carousel slider.", render: () => <CarouselDoc /> },

  // Data Display
  { slug: "badge", name: "Badge", category: "Data Display", description: "A small status indicator.", render: () => <BadgeDoc /> },
  { slug: "avatar", name: "Avatar", category: "Data Display", description: "User avatar.", render: () => <AvatarDoc /> },
  { slug: "table", name: "Table", category: "Data Display", description: "A data table.", render: () => <TableDoc /> },
  { slug: "skeleton", name: "Skeleton", category: "Data Display", description: "Loading placeholder.", render: () => <SkeletonDoc /> },
  { slug: "progress", name: "Progress", category: "Data Display", description: "Progress indicator.", render: () => <ProgressDoc /> },

  // Feedback
  { slug: "alert", name: "Alert", category: "Feedback", description: "User attention callout.", render: () => <AlertDoc /> },
  { slug: "tooltip", name: "Tooltip", category: "Feedback", description: "Hover information popup.", render: () => <TooltipDoc /> },
  { slug: "toast", name: "Toast", category: "Feedback", description: "Temporary notification.", render: () => <ToastDoc /> },

  // Overlays
  { slug: "dialog", name: "Dialog", category: "Overlays", description: "A modal dialog.", render: () => <DialogDoc /> },
  { slug: "alert-dialog", name: "Alert Dialog", category: "Overlays", description: "A confirmation dialog.", render: () => <AlertDialogDoc /> },
  { slug: "sheet", name: "Sheet", category: "Overlays", description: "Side panel overlay.", render: () => <SheetDoc /> },
  { slug: "drawer", name: "Drawer", category: "Overlays", description: "Mobile bottom sheet.", render: () => <DrawerDoc /> },
  { slug: "popover", name: "Popover", category: "Overlays", description: "A floating popover.", render: () => <PopoverDoc /> },
  { slug: "hover-card", name: "Hover Card", category: "Overlays", description: "Hover preview card.", render: () => <HoverCardDoc /> },

  // Menus
  { slug: "dropdown-menu", name: "Dropdown Menu", category: "Menus", description: "An action menu.", render: () => <DropdownMenuDoc /> },
  { slug: "context-menu", name: "Context Menu", category: "Menus", description: "Right-click menu.", render: () => <ContextMenuDoc /> },
  { slug: "menubar", name: "Menubar", category: "Menus", description: "Desktop-style menubar.", render: () => <MenubarDoc /> },

  // Navigation
  { slug: "accordion", name: "Accordion", category: "Navigation", description: "Collapsible content sections.", render: () => <AccordionDoc /> },
  { slug: "tabs", name: "Tabs", category: "Navigation", description: "Tabbed content panels.", render: () => <TabsDoc /> },
  { slug: "breadcrumb", name: "Breadcrumb", category: "Navigation", description: "Page hierarchy links.", render: () => <BreadcrumbDoc /> },
  { slug: "pagination", name: "Pagination", category: "Navigation", description: "Page navigation.", render: () => <PaginationDoc /> },
  { slug: "navigation-menu", name: "Navigation Menu", category: "Navigation", description: "Site navigation.", render: () => <NavigationMenuDoc /> },

  // Search
  { slug: "command", name: "Command", category: "Search", description: "Command palette.", render: () => <CommandDoc /> },
]

export default function Docs() {
  return (
    <ToastProvider>
      <DocsLayout components={components} />
    </ToastProvider>
  )
}
