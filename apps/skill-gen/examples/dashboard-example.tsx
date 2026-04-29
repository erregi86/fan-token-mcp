import { AppHeader, AppHeaderLogo, AppHeaderNav, AppHeaderNavItem, AppHeaderActions, AppHeaderActionButton, Card, CardHeader, CardTitle, CardContent, Separator, Badge, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Progress } from "fan-tokens"

export default function Dashboard() {
  const stats = [
    { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", variant: "success" as const },
    { label: "Active Users", value: "12,234", change: "+19%", variant: "success" as const },
    { label: "Conversion", value: "3.2%", change: "-2%", variant: "destructive" as const },
    { label: "Growth", value: "+4.3%", change: "vs last month", variant: "info" as const },
  ]

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", status: "Completed", amount: "$250.00" },
    { id: "ORD-002", customer: "Jane Smith", status: "Pending", amount: "$180.00" },
    { id: "ORD-003", customer: "Bob Johnson", status: "Processing", amount: "$320.00" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <AppHeader>
        <AppHeaderLogo>
          <span className="font-bold text-lg">Dashboard</span>
        </AppHeaderLogo>
        <AppHeaderNav>
          <AppHeaderNavItem active>Overview</AppHeaderNavItem>
          <AppHeaderNavItem>Analytics</AppHeaderNavItem>
          <AppHeaderNavItem>Reports</AppHeaderNavItem>
        </AppHeaderNav>
        <AppHeaderActions>
          <AppHeaderActionButton variant="outline" size="sm">Settings</AppHeaderActionButton>
        </AppHeaderActions>
      </AppHeader>

      {/* Main Content */}
      <main className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <Badge variant={stat.variant} className="mt-2">{stat.change}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator />

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-sm">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>
                        <Badge variant={order.status === "Completed" ? "success" : "secondary"}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold">{order.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Growth Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Growth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Q1</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <Progress value={65} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Q2</span>
                  <span className="text-sm text-muted-foreground">82%</span>
                </div>
                <Progress value={82} />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
