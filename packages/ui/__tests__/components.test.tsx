import { render, screen } from "@testing-library/react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../src/components/accordion";

import { Alert, AlertTitle, AlertDescription } from "../src/components/alert";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "../src/components/alert-dialog";

import { AspectRatio } from "../src/components/aspect-ratio";

import { Avatar, AvatarFallback } from "../src/components/avatar";

import { Badge } from "../src/components/badge";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "../src/components/breadcrumb";

import { Button } from "../src/components/button";

import { Calendar } from "../src/components/calendar";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../src/components/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../src/components/carousel";

import { Checkbox } from "../src/components/checkbox";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../src/components/collapsible";

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../src/components/command";

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "../src/components/context-menu";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../src/components/dialog";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../src/components/drawer";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../src/components/dropdown-menu";

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
} from "../src/components/form";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../src/components/hover-card";

import { Input } from "../src/components/input";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../src/components/input-otp";

import { Label } from "../src/components/label";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "../src/components/menubar";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../src/components/navigation-menu";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../src/components/pagination";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../src/components/popover";

import { Progress } from "../src/components/progress";

import { RadioGroup, RadioGroupItem } from "../src/components/radio-group";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../src/components/resizable";

import { ScrollArea } from "../src/components/scroll-area";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../src/components/select";

import { Separator } from "../src/components/separator";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../src/components/sheet";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../src/components/sidebar";

import { Skeleton } from "../src/components/skeleton";

import { Slider } from "../src/components/slider";

import { Switch } from "../src/components/switch";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../src/components/table";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../src/components/tabs";

import { Textarea } from "../src/components/textarea";

import { ToastProvider } from "../src/components/toast";

import { Toggle } from "../src/components/toggle";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "../src/components/toggle-group";

import { Tooltip } from "../src/components/tooltip";

// 1. Accordion
describe("Accordion", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(container).toBeTruthy();
  });
});

// 2. Alert
describe("Alert", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Alert>
        <AlertTitle>T</AlertTitle>
        <AlertDescription>D</AlertDescription>
      </Alert>
    );
    expect(container).toBeTruthy();
  });
});

// 3. AlertDialog
describe("AlertDialog", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
      </AlertDialog>
    );
    expect(container).toBeTruthy();
  });
});

// 4. AspectRatio
describe("AspectRatio", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>
    );
    expect(container).toBeTruthy();
  });
});

// 5. Avatar
describe("Avatar", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    expect(container).toBeTruthy();
  });
});

// 6. Badge
describe("Badge", () => {
  it("renders without crashing", () => {
    render(<Badge>Text</Badge>);
    expect(screen.getByText("Text")).toBeTruthy();
  });
});

// 7. Breadcrumb
describe("Breadcrumb", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(container).toBeTruthy();
  });
});

// 8. Button
describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button>Click</Button>);
    expect(screen.getByText("Click")).toBeTruthy();
  });
});

// 9. Calendar
describe("Calendar", () => {
  it("renders without crashing", () => {
    const { container } = render(<Calendar />);
    expect(container).toBeTruthy();
  });
});

// 10. Card
describe("Card", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>T</CardTitle>
        </CardHeader>
        <CardContent>C</CardContent>
      </Card>
    );
    expect(container).toBeTruthy();
  });
});

// 11. Carousel
describe("Carousel", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    expect(container).toBeTruthy();
  });
});

// 12. Checkbox
describe("Checkbox", () => {
  it("renders without crashing", () => {
    const { container } = render(<Checkbox />);
    expect(container).toBeTruthy();
  });
});

// 13. Collapsible
describe("Collapsible", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );
    expect(container).toBeTruthy();
  });
});

// 14. Command
describe("Command", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Command>
        <CommandInput placeholder="Search" />
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
        </CommandList>
      </Command>
    );
    expect(container).toBeTruthy();
  });
});

// 15. ContextMenu
describe("ContextMenu", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ContextMenu>
        <ContextMenuTrigger>Right click</ContextMenuTrigger>
      </ContextMenu>
    );
    expect(container).toBeTruthy();
  });
});

// 16. Dialog
describe("Dialog", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
      </Dialog>
    );
    expect(container).toBeTruthy();
  });
});

// 17. Drawer
describe("Drawer", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
      </Drawer>
    );
    expect(container).toBeTruthy();
  });
});

// 18. DropdownMenu
describe("DropdownMenu", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
      </DropdownMenu>
    );
    expect(container).toBeTruthy();
  });
});

// 19. Form
describe("Form", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Form>
        <FormField name="test">
          <FormLabel>Label</FormLabel>
        </FormField>
      </Form>
    );
    expect(container).toBeTruthy();
  });
});

// 20. HoverCard
describe("HoverCard", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
      </HoverCard>
    );
    expect(container).toBeTruthy();
  });
});

// 21. Input
describe("Input", () => {
  it("renders without crashing", () => {
    render(<Input placeholder="Type..." />);
    expect(screen.getByPlaceholderText("Type...")).toBeTruthy();
  });
});

// 22. InputOTP
describe("InputOTP", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
        </InputOTPGroup>
      </InputOTP>
    );
    expect(container).toBeTruthy();
  });
});

// 23. Label
describe("Label", () => {
  it("renders without crashing", () => {
    render(<Label>Name</Label>);
    expect(screen.getByText("Name")).toBeTruthy();
  });
});

// 24. Menubar
describe("Menubar", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
    expect(container).toBeTruthy();
  });
});

// 25. NavigationMenu
describe("NavigationMenu", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(container).toBeTruthy();
  });
});

// 26. Pagination
describe("Pagination", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(container).toBeTruthy();
  });
});

// 27. Popover
describe("Popover", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
      </Popover>
    );
    expect(container).toBeTruthy();
  });
});

// 28. Progress
describe("Progress", () => {
  it("renders without crashing", () => {
    const { container } = render(<Progress value={50} />);
    expect(container).toBeTruthy();
  });
});

// 29. RadioGroup
describe("RadioGroup", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <RadioGroup>
        <RadioGroupItem value="a" />
      </RadioGroup>
    );
    expect(container).toBeTruthy();
  });
});

// 30. Resizable
describe("Resizable", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>A</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>B</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(container).toBeTruthy();
  });
});

// 31. ScrollArea
describe("ScrollArea", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ScrollArea className="h-20">
        <div>Content</div>
      </ScrollArea>
    );
    expect(container).toBeTruthy();
  });
});

// 32. Select
describe("Select", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Select>
        <SelectTrigger>Pick</SelectTrigger>
      </Select>
    );
    expect(container).toBeTruthy();
  });
});

// 33. Separator
describe("Separator", () => {
  it("renders without crashing", () => {
    const { container } = render(<Separator />);
    expect(container).toBeTruthy();
  });
});

// 34. Sheet
describe("Sheet", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
      </Sheet>
    );
    expect(container).toBeTruthy();
  });
});

// 35. Sidebar
describe("Sidebar", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Item</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    );
    expect(container).toBeTruthy();
  });
});

// 36. Skeleton
describe("Skeleton", () => {
  it("renders without crashing", () => {
    const { container } = render(<Skeleton className="h-4 w-20" />);
    expect(container).toBeTruthy();
  });
});

// 37. Slider
describe("Slider", () => {
  it("renders without crashing", () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    expect(container).toBeTruthy();
  });
});

// 38. Switch
describe("Switch", () => {
  it("renders without crashing", () => {
    const { container } = render(<Switch />);
    expect(container).toBeTruthy();
  });
});

// 39. Table
describe("Table", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>H</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>C</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(container).toBeTruthy();
  });
});

// 40. Tabs
describe("Tabs", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content</TabsContent>
      </Tabs>
    );
    expect(container).toBeTruthy();
  });
});

// 41. Textarea
describe("Textarea", () => {
  it("renders without crashing", () => {
    render(<Textarea placeholder="Type..." />);
    expect(screen.getByPlaceholderText("Type...")).toBeTruthy();
  });
});

// 42. Toast
describe("Toast", () => {
  it("renders without crashing", () => {
    const { container } = render(<ToastProvider />);
    expect(container).toBeTruthy();
  });
});

// 43. Toggle
describe("Toggle", () => {
  it("renders without crashing", () => {
    render(<Toggle>B</Toggle>);
    expect(screen.getByText("B")).toBeTruthy();
  });
});

// 44. ToggleGroup
describe("ToggleGroup", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(container).toBeTruthy();
  });
});

// 45. Tooltip
describe("Tooltip", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Tooltip content="Tip">
        <button>Hover</button>
      </Tooltip>
    );
    expect(container).toBeTruthy();
  });
});
