import { useState } from "react"
import {
  Button,
  Input,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  Alert,
  AlertTitle,
  AlertDescription,
  Textarea,
} from "fan-tokens"

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        setDark(!dark)
        document.documentElement.classList.toggle("dark")
      }}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </Button>
  )
}

export default function Demo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">MCP Component Library</h1>
            <p className="text-muted-foreground">AI-first design system with custom tokens</p>
          </div>
          <ThemeToggle />
        </div>

        <Separator />

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Button</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <Separator />

        {/* Input & Label */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Input & Label</h2>
          <div className="max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="max-w-sm space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message..." />
          </div>
        </section>

        <Separator />

        {/* Card */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Card</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Alpha</CardTitle>
                <CardDescription>A card with all sub-components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards compose from Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Badge>New</Badge>
                <Badge variant="secondary">Update</Badge>
                <Badge variant="destructive">Urgent</Badge>
                <Badge variant="outline">Draft</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Avatar */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Avatar</h2>
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <Separator />

        {/* Tabs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Tabs</h2>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>Dashboard overview content goes here.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>Charts and metrics go here.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Configuration options go here.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* Select */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Select</h2>
          <div className="max-w-xs">
            <Select>
              <SelectTrigger>Choose a framework...</SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <Separator />

        {/* Dialog */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Dialog</h2>
          <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Open Dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        <Separator />

        {/* Tooltip */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Tooltip</h2>
          <div className="flex gap-4">
            <Tooltip content="This is a tooltip">
              <Button variant="outline">Hover me</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" side="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>
          </div>
        </section>

        <Separator />

        {/* Alert */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Alert</h2>
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can use the alert component to display important messages.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  )
}
