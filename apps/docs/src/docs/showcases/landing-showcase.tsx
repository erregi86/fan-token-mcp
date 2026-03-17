import { useState } from "react"
import { cn } from "fan-tokens/utils"

// Components
import { Button } from "fan-tokens/button"
import { Input } from "fan-tokens/input"
import { Badge } from "fan-tokens/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "fan-tokens/card"
import { Separator } from "fan-tokens/separator"
import { Avatar, AvatarFallback } from "fan-tokens/avatar"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "fan-tokens/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "fan-tokens/tabs"
import { Switch } from "fan-tokens/switch"
import { Label } from "fan-tokens/label"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "fan-tokens/navigation-menu"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "fan-tokens/carousel"
import { ToggleGroup, ToggleGroupItem } from "fan-tokens/toggle-group"
import { Progress } from "fan-tokens/progress"
import { Tooltip } from "fan-tokens/tooltip"
import { toast } from "fan-tokens/toast"

/* ─── Data ─── */
const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
    ),
    title: "Advanced Analytics",
    description: "Track every metric that matters with real-time dashboards and intelligent insights powered by AI.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
    ),
    title: "Team Collaboration",
    description: "Work together seamlessly with shared workspaces, real-time editing, and built-in communication tools.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
    ),
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC2 compliance, and granular permissions to keep your data safe and secure.",
  },
]

const PRICING = [
  {
    name: "Starter",
    price: { monthly: 19, yearly: 15 },
    description: "For individuals and small projects.",
    features: ["5 projects", "10GB storage", "Basic analytics", "Email support", "API access"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 39 },
    description: "For growing teams and businesses.",
    features: ["Unlimited projects", "100GB storage", "Advanced analytics", "Priority support", "API access", "Custom integrations", "Team management"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 149, yearly: 119 },
    description: "For large organizations with advanced needs.",
    features: ["Everything in Pro", "Unlimited storage", "Custom analytics", "24/7 phone support", "SSO & SAML", "Dedicated account manager", "SLA guarantee", "On-premise option"],
    cta: "Contact Sales",
    popular: false,
  },
]

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "CTO at TechFlow", initials: "SC", text: "This platform transformed how our team operates. The analytics alone saved us 40 hours per month." },
  { name: "Marcus Rivera", role: "Head of Product at Scale", initials: "MR", text: "The best investment we've made. Setup took 10 minutes, and we saw ROI within the first week." },
  { name: "Aisha Patel", role: "Engineering Lead at Forge", initials: "AP", text: "Finally, a tool that understands developer workflows. The API and integrations are world-class." },
  { name: "Tom Baker", role: "CEO at Launchpad", initials: "TB", text: "We switched from three separate tools to this one platform. Productivity went through the roof." },
]

const FAQS = [
  { q: "How does the free trial work?", a: "You get full access to all Pro features for 14 days. No credit card required. Cancel anytime." },
  { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
  { q: "Is there a setup fee?", a: "No, there are no setup fees or hidden charges. You only pay for your subscription." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all plans. No questions asked." },
]

const STATS_DATA = [
  { value: "10K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Integrations" },
  { value: "4.9/5", label: "User Rating" },
]

/* ─── Landing Page ─── */
export function LandingShowcase() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="rounded-xl border border-border shadow-lg overflow-hidden bg-background">
      {/* ─── Navbar ─── */}
      <nav className="flex items-center justify-between border-b border-border px-4 sm:px-8 py-3">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">A</div>
            <span className="text-lg font-bold">Acme</span>
          </div>
          <NavigationMenu className="hidden sm:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Features</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Docs</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="px-4 sm:px-8 py-12 sm:py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          <span className="mr-1">✨</span> New: AI-Powered Insights
        </Badge>
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          Build better products,{" "}
          <span className="text-primary">faster than ever</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-lg text-muted-foreground">
          The all-in-one platform for modern teams. Analytics, collaboration, and automation — everything you need to ship with confidence.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" className="px-8 w-full sm:w-auto">
            Start Free Trial
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">No credit card required · 14-day free trial · Cancel anytime</p>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="border-y border-border bg-muted/30 px-4 sm:px-8 py-8 sm:py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {STATS_DATA.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="px-4 sm:px-8 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-3">Features</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Everything you need to scale</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">Powerful tools designed for modern teams.</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {FEATURES.map((f) => (
            <Card key={f.title} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {f.icon}
                </div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Pricing ─── */}
      <section className="px-4 sm:px-8 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="outline" className="mb-3">Pricing</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">Choose the plan that fits your needs.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Label className="text-sm">Monthly</Label>
            <Switch
              checked={billing === "yearly"}
              onCheckedChange={(c) => setBilling(c ? "yearly" : "monthly")}
            />
            <Label className="text-sm">
              Yearly <Badge variant="secondary" className="ml-1 text-[10px]">Save 20%</Badge>
            </Label>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {PRICING.map((plan) => (
            <Card key={plan.name} className={cn("relative", plan.popular && "border-primary shadow-lg")}>
              {plan.popular && (
                <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2">Most Popular</Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price[billing]}</span>
                  <span className="text-muted-foreground">/{billing === "monthly" ? "mo" : "mo"}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ─── Testimonials Carousel ─── */}
      <section className="px-4 sm:px-8 py-12 sm:py-20 bg-muted/20">
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="outline" className="mb-3">Testimonials</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Loved by teams worldwide</h2>
        </div>
        <div className="mx-auto max-w-2xl px-8 sm:px-14">
          <Carousel>
            <CarouselContent>
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i}>
                  <Card className="text-center p-8">
                    <CardContent className="pt-0">
                      <p className="text-base italic text-muted-foreground mb-6">"{t.text}"</p>
                      <div className="flex items-center justify-center gap-3">
                        <Avatar>
                          <AvatarFallback>{t.initials}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="text-sm font-medium">{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <Separator />

      {/* ─── FAQ ─── */}
      <section className="px-4 sm:px-8 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="outline" className="mb-3">FAQ</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Frequently asked questions</h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger value={`faq-${i}`}>{faq.q}</AccordionTrigger>
                <AccordionContent value={`faq-${i}`}>
                  <p className="text-muted-foreground">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator />

      {/* ─── CTA Section ─── */}
      <section className="px-4 sm:px-8 py-12 sm:py-20 text-center bg-primary/5">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to get started?</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">Join 10,000+ teams already using Acme.</p>
        <div className="mx-auto mt-6 flex max-w-md gap-2">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button onClick={() => toast({ title: "Welcome!", description: "Check your inbox for a confirmation link." })}>
            Get Started
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Free 14-day trial. No credit card required.</p>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border px-4 sm:px-8 py-8">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground text-xs font-bold">A</div>
              <span className="font-semibold">Acme</span>
            </div>
            <p className="text-xs text-muted-foreground">Building the future of team productivity.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-6" />
        <div className="text-center text-xs text-muted-foreground">
          © 2026 Acme Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
