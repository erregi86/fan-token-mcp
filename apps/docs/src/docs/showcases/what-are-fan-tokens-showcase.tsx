import { cn } from "fan-tokens/utils"
import { Button } from "fan-tokens/button"
import { Badge } from "fan-tokens/badge"
import { Card, CardHeader, CardTitle, CardContent } from "fan-tokens/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "fan-tokens/accordion"
import { AppHeader, AppHeaderLogo, AppHeaderNav, AppHeaderActions, AppHeaderActionButton, AppHeaderMenuItem, AppHeaderDataSticky } from "fan-tokens"

const TOKENS = [
  { symbol: "PSG", name: "Paris Saint-Germain", type: "Football", gradient: "from-blue-900 via-blue-700 to-slate-950", color: "#004170" },
  { symbol: "BAR", name: "FC Barcelona", type: "Football", gradient: "from-red-600 to-blue-700", color: "#a50044" },
  { symbol: "CITY", name: "Manchester City", type: "Football", gradient: "from-cyan-400 to-blue-900", color: "#6cabdd" },
  { symbol: "ATM", name: "Atlético de Madrid", type: "Football", gradient: "from-red-600 to-red-900", color: "#d71920" },
  { symbol: "JUV", name: "Juventus", type: "Football", gradient: "from-black to-slate-700", color: "#000" },
  { symbol: "SPURS", name: "Tottenham Hotspur", type: "Football", gradient: "from-slate-900 to-white", color: "#132257" },
  { symbol: "UFC", name: "UFC", type: "MMA", gradient: "from-slate-900 to-slate-700", color: "#1a1a2e" },
  { symbol: "ACM", name: "AC Milan", type: "Football", gradient: "from-red-600 to-black", color: "#e30613" },
]

const UTILITIES = [
  {
    icon: "🗳️",
    title: "Vote in Fan Polls",
    description: "Influence real club decisions by voting on official polls. From kit designs to matchday playlists, your voice counts when you hold Fan Tokens."
  },
  {
    icon: "🎁",
    title: "Access Exclusive Rewards",
    description: "Earn unique rewards including signed merchandise, VIP experiences, meet-and-greets, and limited-edition digital collectibles."
  },
  {
    icon: "🏛️",
    title: "Participate in Club Decisions",
    description: "Go beyond passive fandom. Fan Token holders get a seat at the table when clubs make fan-facing decisions, creating a two-way relationship."
  },
  {
    icon: "✨",
    title: "Unlock Fan Experiences",
    description: "Access special events, stadium tours, exclusive content, and gamified engagement that brings fans closer to the action."
  },
]

const FAQS = [
  {
    q: "What are Fan Tokens used for?",
    a: "Fan Tokens give holders access to fan voting polls, exclusive rewards, VIP experiences, and direct engagement with their favorite sports teams. They serve as a digital membership within a team's fan community."
  },
  {
    q: "Are Fan Tokens cryptocurrencies?",
    a: "Yes. Fan Tokens are fungible digital assets that exist on blockchain networks. They can be bought, sold, and traded on supported cryptocurrency exchanges, similar to other crypto assets."
  },
  {
    q: "Can Fan Tokens be traded?",
    a: "Yes. Fan Tokens are listed on cryptocurrency exchanges where they can be freely traded. Their price fluctuates based on market demand, fan engagement, and overall market conditions."
  },
  {
    q: "Why do sports teams launch Fan Tokens?",
    a: "Sports teams launch Fan Tokens to create new revenue streams, deepen fan engagement, and build stronger communities. Tokens provide teams with a direct channel to interact with fans globally, beyond traditional matchday experiences."
  },
  {
    q: "How are Fan Tokens different from NFTs?",
    a: "Fan Tokens are fungible — each token of the same type is identical and interchangeable. NFTs (Non-Fungible Tokens) are unique, one-of-a-kind digital assets. Fan Tokens focus on community participation and governance, while NFTs typically represent collectible items."
  },
]

export function WhatAreFanTokensShowcase() {
  return (
    <div className="rounded-lg border border-border shadow-lg overflow-hidden bg-background">
      {/* ─── Data Sticky ─── */}
      <AppHeaderDataSticky
        items={[
          { label: "Total Fan Tokens:", value: "86" },
          { label: "Active Communities:", value: "50+" },
          { label: "Combined Market Cap:", value: "$10B+" },
        ]}
      />

      {/* ─── NAVBAR ─── */}
      <AppHeader>
        <AppHeaderLogo>
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">F</div>
            <span className="font-bold text-lg">Fan<span className="text-primary">Tokens</span></span>
          </div>
        </AppHeaderLogo>
        <AppHeaderNav>
          <AppHeaderMenuItem>Voting</AppHeaderMenuItem>
          <AppHeaderMenuItem>Newsroom</AppHeaderMenuItem>
          <AppHeaderMenuItem active>What Are Fan Tokens</AppHeaderMenuItem>
        </AppHeaderNav>
        <AppHeaderActions>
          <AppHeaderActionButton size="sm">Get Alpha Alerts</AppHeaderActionButton>
        </AppHeaderActions>
      </AppHeader>

      {/* ─── HERO SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text */}
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">📖 Educational Guide</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              What Are <span className="text-primary">Fan Tokens</span>?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fan Tokens are blockchain-based digital assets that connect sports fans with their favorite teams — giving holders real influence, exclusive rewards, and a new way to engage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Fan Tokens →
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Orbit visual */}
          <div className="hidden lg:flex items-center justify-center relative h-96">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Orbits */}
              <div className="absolute w-48 h-48 rounded-full border border-primary/20"></div>
              <div className="absolute w-72 h-72 rounded-full border border-primary/10"></div>
              <div className="absolute w-96 h-96 rounded-full border border-primary/5"></div>

              {/* Center */}
              <div className="absolute flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">FT</div>

              {/* Orbiting tokens - positioned with CSS transform */}
              <div className="absolute w-48 h-48 animate-spin" style={{ animationDuration: "20s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-10 rounded-full bg-gradient-to-b from-blue-900 to-slate-950 flex items-center justify-center text-white text-xs font-bold">PSG</div>
              </div>
              <div className="absolute w-72 h-72 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-10 rounded-full bg-gradient-to-b from-cyan-400 to-blue-900 flex items-center justify-center text-white text-xs font-bold">CITY</div>
              </div>
              <div className="absolute w-96 h-96 animate-spin" style={{ animationDuration: "30s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-10 rounded-full bg-gradient-to-b from-red-600 to-blue-700 flex items-center justify-center text-white text-xs font-bold">BAR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONCEPT SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">💡 The Concept</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Understanding Fan Tokens</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fan Tokens sit at the intersection of sports and blockchain — creating a new category of crypto asset backed by real sports brands and global communities.
            </p>
          </div>

          {/* Concept Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🪙", title: "Digital Ownership", desc: "Fan Tokens are fungible digital assets built on blockchain networks. Each token represents a form of membership within a team's fan ecosystem, tradable on supported exchanges." },
              { icon: "🤝", title: "Fan–Team Connection", desc: "Teams launch official Fan Tokens to deepen their relationship with supporters. Token holders gain access to voting rights, exclusive content, and direct engagement with the club." },
              { icon: "⛓️", title: "Blockchain Powered", desc: "Built on blockchain infrastructure, Fan Tokens are transparent, verifiable, and globally accessible. They operate within the broader crypto ecosystem alongside other digital assets." },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{item.desc}</CardContent>
              </Card>
            ))}
          </div>

          {/* Flow Diagram */}
          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
              <div className="px-6 py-3 bg-card border border-border rounded-lg font-semibold text-center min-w-fit">🏟️ Sports Team</div>
              <div className="hidden sm:block text-xl text-muted-foreground">→</div>
              <div className="text-xl sm:hidden">↓</div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg font-semibold text-center min-w-fit">🪙 Fan Token</div>
              <div className="hidden sm:block text-xl text-muted-foreground">→</div>
              <div className="text-xl sm:hidden">↓</div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg font-semibold text-center min-w-fit">⛓️ Blockchain</div>
              <div className="hidden sm:block text-xl text-muted-foreground">→</div>
              <div className="text-xl sm:hidden">↓</div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg font-semibold text-center min-w-fit">👥 Fan Community</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UTILITY SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">⚡ Token Utility</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What Can You Do with Fan Tokens?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fan Tokens unlock real utility — from governance participation to exclusive fan experiences and rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UTILITIES.map((item, idx) => (
              <Card key={idx} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex-1">{item.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOKEN EXAMPLES ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">🔍 Discover</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Examples of Fan Tokens</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Major global sports brands have launched their own Fan Tokens. Explore some of the most recognized tokens available today.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TOKENS.map((token) => (
              <Card key={token.symbol} className="text-center hover:border-primary transition-colors cursor-pointer">
                <CardHeader className="pb-3">
                  <div className={cn(
                    "mx-auto mb-4 flex size-14 items-center justify-center rounded-full text-white font-bold text-sm",
                    `bg-gradient-to-b ${token.gradient}`
                  )}>
                    {token.symbol}
                  </div>
                  <CardTitle className="text-sm">{token.name}</CardTitle>
                  <p className="text-xs text-primary font-semibold">${token.symbol}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs">{token.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mx-auto">❓ FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about Fan Tokens and how they work.</p>
          </div>

          <Accordion type="single" collapsible>
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger value={`faq-${idx}`} className="text-left hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent value={`faq-${idx}`} className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Explore Fan Tokens?</h2>
          <p className="text-muted-foreground text-lg">
            Discover real-time prices, voting activity, and news for 80+ Fan Tokens from the world's biggest sports brands.
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            Explore Fan Tokens →
          </Button>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 sm:px-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2018–2026 FanTokens. All rights reserved.</p>
      </footer>
    </div>
  )
}
