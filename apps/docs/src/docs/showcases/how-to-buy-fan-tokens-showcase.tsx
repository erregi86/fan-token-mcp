import { cn } from "fan-tokens/utils"
import { Button } from "fan-tokens/button"
import { Badge } from "fan-tokens/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "fan-tokens/card"
import { Separator } from "fan-tokens/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "fan-tokens/accordion"
import { Alert, AlertTitle, AlertDescription } from "fan-tokens/alert"

const STEPS = [
  {
    number: "01",
    title: "Create an Account",
    description: "Register on a supported cryptocurrency exchange that lists Fan Tokens. You'll typically need to verify your identity through a standard KYC process. Most major exchanges support Fan Token trading pairs.",
    tip: "💡 Look for exchanges that list multiple Fan Tokens"
  },
  {
    number: "02",
    title: "Add Funds to Your Account",
    description: "Deposit funds using supported payment methods such as bank transfers, credit/debit cards, or existing cryptocurrency. Make sure the funds are available in your exchange wallet before proceeding.",
    tip: "💡 Check deposit fees and processing times"
  },
  {
    number: "03",
    title: "Browse Available Fan Tokens",
    description: "Explore the available Fan Tokens on Fantokens.com to discover which teams and brands have active tokens. Compare prices, market caps, and community engagement before making your choice.",
    tip: "💡 Use Fantokens.com to track real-time prices and trends"
  },
  {
    number: "04",
    title: "Buy Your Fan Token",
    description: "Select the Fan Token you want to purchase, set the amount, review the order details, and confirm. Your tokens will appear in your exchange wallet and you can start engaging with the fan community.",
    tip: "💡 Start with a small amount to familiarize yourself"
  },
]

const TRUST = [
  {
    icon: "🔒",
    title: "Secure Transactions",
    description: "Fan Token purchases are processed through regulated exchanges with industry-standard encryption, two-factor authentication, and secure wallet infrastructure."
  },
  {
    icon: "📊",
    title: "Transparent Markets",
    description: "All Fan Token prices and trading volumes are publicly visible on-chain and on supported exchanges. Track real-time market data on Fantokens.com."
  },
  {
    icon: "✅",
    title: "Reliable Platforms",
    description: "Fan Tokens are listed on established, reputable cryptocurrency exchanges trusted by millions of users worldwide, backed by official partnerships with sports brands."
  },
]

const DISCOVERY_TOKENS = [
  {
    symbol: "PSG",
    name: "Paris Saint-Germain",
    gradient: "from-blue-900 via-blue-700 to-slate-950",
    description: "Official Fan Token of Paris Saint-Germain FC, one of the most popular tokens in the market."
  },
  {
    symbol: "BAR",
    name: "FC Barcelona",
    gradient: "from-red-600 to-blue-700",
    description: "The official Fan Token for one of the world's most iconic football clubs."
  },
  {
    symbol: "CITY",
    name: "Manchester City",
    gradient: "from-cyan-400 to-blue-900",
    description: "Manchester City's Fan Token connecting the global fan community with the club."
  },
  {
    symbol: "UFC",
    name: "UFC",
    gradient: "from-slate-900 to-slate-700",
    description: "The official UFC Fan Token for combat sports fans worldwide."
  },
]

const FAQS = [
  {
    q: "Do I need cryptocurrency to buy Fan Tokens?",
    a: "No. Most exchanges allow you to buy Fan Tokens directly with fiat currency (USD, EUR, etc.) using your bank account or credit card. No prior crypto experience needed."
  },
  {
    q: "Can I trade Fan Tokens after buying?",
    a: "Yes. Fan Tokens are listed on cryptocurrency exchanges where they can be freely traded. Their price fluctuates based on market demand, fan engagement, and overall market conditions."
  },
  {
    q: "Are Fan Tokens safe to purchase?",
    a: "Fan Tokens from established sports organizations are as safe as any cryptocurrency. Use reputable exchanges with security features like 2FA and insurance coverage for added protection."
  },
  {
    q: "Where are Fan Tokens available?",
    a: "Fan Tokens are listed on major crypto exchanges including Binance, Crypto.com, Coinbase, and others. Check which exchanges support your region before signing up."
  },
  {
    q: "How many Fan Tokens should I buy?",
    a: "Start with a small amount to learn the process, then invest what you can afford to lose. Diversify across multiple teams and hold for long-term utility and potential appreciation."
  },
]

export function HowToBuyFanTokensShowcase() {
  return (
    <div className="rounded-lg border border-border shadow-lg overflow-hidden bg-background">
      {/* ─── NAVBAR ─── */}
      <nav className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">F</div>
          <span className="font-bold text-lg">Fan<span className="text-primary">Tokens</span></span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Voting</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Newsroom</a>
          <a href="#" className="text-sm text-foreground font-medium">How to Buy</a>
        </div>
        <Button size="sm" className="hidden sm:inline-flex">Get Alpha Alerts</Button>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text */}
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">🛒 Buying Guide</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              How to Buy <span className="text-primary">Fan Tokens</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fan Tokens can be purchased through supported platforms and exchanges. This guide explains the simple steps to discover and acquire your first tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Fan Tokens →
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                See Steps
              </Button>
            </div>
          </div>

          {/* Right: Wallet Visual */}
          <div className="hidden lg:block relative">
            <Card className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">My Wallet</span>
                  <span className="flex items-center gap-1 text-xs text-success">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    Connected
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">$1,247.80</div>
                  <div className="text-sm text-success">↑ +3.2% today</div>
                </div>

                {/* Wallet Tokens */}
                <div className="space-y-3 border-t border-border pt-4">
                  {[
                    { icon: "PSG", name: "PSG Fan Token", symbol: "$PSG", amount: "120 PSG", value: "$542.40", gradient: "from-blue-900 to-slate-950" },
                    { icon: "BAR", name: "FC Barcelona", symbol: "$BAR", amount: "85 BAR", value: "$391.00", gradient: "from-red-600 to-blue-700" },
                    { icon: "CITY", name: "Manchester City", symbol: "$CITY", amount: "50 CITY", value: "$314.40", gradient: "from-cyan-400 to-blue-900" },
                  ].map((token, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className={cn("flex size-10 items-center justify-center rounded-lg text-white text-xs font-bold", `bg-gradient-to-b ${token.gradient}`)}>
                          {token.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{token.name}</div>
                          <div className="text-xs text-muted-foreground">{token.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{token.amount}</div>
                        <div className="text-xs text-muted-foreground">{token.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-success/10 border border-success/20 text-success px-3 py-1 rounded-full text-xs font-semibold">
              ✓ Purchase Complete
            </div>
            <div className="absolute bottom-4 left-4 bg-muted border border-border text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">
              🔒 Secure Transaction
            </div>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW FLOW ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">🗺️ Overview</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The Buying Process at a Glance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to go from curious visitor to Fan Token holder.
            </p>
          </div>

          {/* Flow Steps */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl">
                    {STEPS[idx].number[0]}
                  </div>
                  <div className="text-xs font-semibold text-center mt-2">Step {idx + 1}</div>
                  <div className="text-xs text-muted-foreground text-center">{step.title.split(" ")[0]}</div>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="hidden sm:block text-2xl text-muted-foreground -mb-8">→</div>
                )}
                {idx < STEPS.length - 1 && (
                  <div className="sm:hidden text-2xl text-muted-foreground -ml-2">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STEP-BY-STEP GUIDE ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border" id="steps">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">📋 Step-by-Step</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Detailed Buying Guide</h2>
            <p className="text-muted-foreground">
              Follow these steps to purchase your first Fan Tokens through a supported exchange.
            </p>
          </div>

          <div className="space-y-6">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex gap-6 pb-6 border-b border-border last:border-b-0">
                <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-3">{step.description}</p>
                  <div className="text-sm text-muted-foreground bg-muted/50 border border-border rounded-lg px-3 py-2 inline-block">
                    {step.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST & SECURITY ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">🛡️ Trust & Security</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Safe and Transparent</h2>
            <p className="text-muted-foreground">
              Fan Tokens are traded on established platforms with strong security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST.map((item, idx) => (
              <Card key={idx}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{item.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOKEN DISCOVERY ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">🔍 Discover</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Fan Tokens Available on the Platform</h2>
            <p className="text-muted-foreground">
              Start exploring real Fan Tokens — track prices, voting activity, and market trends across 80+ tokens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DISCOVERY_TOKENS.map((token, idx) => (
              <Card key={idx} className="flex flex-col hover:border-primary transition-colors cursor-pointer">
                <CardHeader className="pb-3 text-center">
                  <div className={cn(
                    "mx-auto mb-4 flex size-16 items-center justify-center rounded-lg text-white font-bold",
                    `bg-gradient-to-b ${token.gradient}`
                  )}>
                    {token.symbol}
                  </div>
                  <CardTitle className="text-base">{token.name}</CardTitle>
                  <p className="text-sm text-primary font-semibold">${token.symbol}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-3">
                  <p className="text-xs text-muted-foreground">{token.description}</p>
                  <Button size="sm" variant="outline" className="w-full mt-auto">
                    Explore {token.symbol} →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">❓ FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Buying Questions Answered</h2>
            <p className="text-muted-foreground">Common questions about purchasing Fan Tokens.</p>
          </div>

          <Accordion type="single" collapsible>
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── SECURITY ALERT ─── */}
      <section className="px-6 sm:px-12 py-8">
        <Alert className="bg-success/5 border-success/20">
          <AlertTitle className="text-success font-bold">Security Reminder</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            Always use secure exchanges with 2FA enabled, never share your private keys or seed phrases, and be cautious of phishing attempts.
          </AlertDescription>
        </Alert>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Start Discovering Fan Tokens</h2>
          <p className="text-muted-foreground text-lg">
            Join the global community of Fan Token holders and support your favorite teams
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              Start Buying Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 sm:px-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2018–2026 FanTokens. All rights reserved.</p>
      </footer>
    </div>
  )
}
