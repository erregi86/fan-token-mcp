import { AppHeader, AppHeaderLogo, AppHeaderNav, AppHeaderNavItem, AppHeaderActions, AppHeaderActionButton, Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Badge, Separator } from "fan-tokens"

export default function LandingPage() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Built for speed. Load times under 1 second with optimized components."
    },
    {
      icon: "🎨",
      title: "Fully Themeable",
      desc: "Customize colors, spacing, and typography using design tokens."
    },
    {
      icon: "♿",
      title: "Accessible",
      desc: "WCAG 2.1 AAA compliant. Full keyboard navigation and screen reader support."
    },
    {
      icon: "📦",
      title: "Composable",
      desc: "Small, single-purpose components that combine into complex interfaces."
    },
    {
      icon: "🔒",
      title: "Type Safe",
      desc: "Written in TypeScript. Every prop and variant is fully typed."
    },
    {
      icon: "🚀",
      title: "Production Ready",
      desc: "Battle-tested components used in production by teams worldwide."
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <AppHeader>
        <AppHeaderLogo>
          <span className="font-bold text-lg">FanTokens</span>
        </AppHeaderLogo>
        <AppHeaderNav>
          <AppHeaderNavItem active>Home</AppHeaderNavItem>
          <AppHeaderNavItem>Features</AppHeaderNavItem>
          <AppHeaderNavItem>Docs</AppHeaderNavItem>
        </AppHeaderNav>
        <AppHeaderActions>
          <AppHeaderActionButton variant="outline" size="sm">Sign In</AppHeaderActionButton>
          <AppHeaderActionButton size="sm">Get Started</AppHeaderActionButton>
        </AppHeaderActions>
      </AppHeader>

      {/* Hero */}
      <section className="px-6 py-20 md:py-32 text-center">
        <Badge variant="secondary" className="mb-4 justify-center">v1.0 Available Now</Badge>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
          Design System for <span className="text-primary">Modern Teams</span>
        </h1>
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Production-ready components built on semantic design tokens. Ship faster, design smarter.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Button size="lg">Start Building →</Button>
          <Button variant="outline" size="lg">View Docs</Button>
        </div>
      </section>

      <Separator />

      {/* Features Grid */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose FanTokens?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to build consistent, accessible, and beautiful interfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Stats */}
      <section className="px-6 py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary">50+</div>
            <p className="text-sm text-muted-foreground mt-2">Components</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">100K+</div>
            <p className="text-sm text-muted-foreground mt-2">Downloads</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">99.9%</div>
            <p className="text-sm text-muted-foreground mt-2">Uptime</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">24/7</div>
            <p className="text-sm text-muted-foreground mt-2">Support</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="px-6 py-20 md:py-32 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of teams building with FanTokens. No credit card required.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="px-8">Create Free Account</Button>
          <Button variant="outline" size="lg">Schedule Demo</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 FanTokens. All rights reserved.</p>
      </footer>
    </div>
  )
}
