import { useState, useMemo } from "react"
import { cn } from "fan-tokens/utils"

import { Button } from "fan-tokens/button"
import { Input } from "fan-tokens/input"
import { Badge } from "fan-tokens/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "fan-tokens/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "fan-tokens/table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "fan-tokens/tabs"
import { Select, SelectTrigger, SelectContent, SelectItem } from "fan-tokens/select"
import { Separator } from "fan-tokens/separator"
import { Avatar, AvatarFallback, AvatarImage, useCoinGeckoLogo } from "fan-tokens"
import { Progress } from "fan-tokens/progress"
import { Tooltip } from "fan-tokens/tooltip"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "fan-tokens/accordion"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "fan-tokens/dropdown-menu"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "fan-tokens/dialog"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "fan-tokens/breadcrumb"
import { Label } from "fan-tokens/label"
import { Alert, AlertTitle, AlertDescription } from "fan-tokens/alert"

/* ─── Mock Data ─── */
const TOKEN = {
  name: "Paris Saint-Germain Fan Token",
  symbol: "PSG",
  coingeckoId: "socios",
  logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/chz.png",
  rank: 487,
  price: 3.42,
  change1h: -0.28,
  change24h: 1.85,
  change7d: -4.32,
  change30d: 12.67,
  change90d: -8.45,
  marketCap: 24_180_000,
  fullyDilutedMC: 68_400_000,
  volume24h: 18_920_000,
  volumeMarketCapRatio: 0.7823,
  circulatingSupply: 7_070_175,
  totalSupply: 20_000_000,
  maxSupply: 20_000_000,
  allTimeHigh: 61.88,
  allTimeHighDate: "2021-08-10",
  allTimeLow: 1.68,
  allTimeLowDate: "2025-02-03",
  network: "Chiliz",
  category: "Fan Token",
  launchDate: "2020-01-01",
  website: "https://www.socios.com",
  explorer: "https://explorer.chiliz.com",
  whitepaper: "https://chiliz.com/whitepaper",
  tags: ["Fan Token", "Sports", "Chiliz", "Governance", "Socios"],
}

const PRICE_HISTORY = [
  3.18, 3.22, 3.15, 3.28, 3.35, 3.31, 3.40, 3.38, 3.42, 3.45,
  3.39, 3.36, 3.41, 3.48, 3.52, 3.47, 3.44, 3.50, 3.55, 3.49,
  3.42, 3.38, 3.35, 3.40, 3.44, 3.48, 3.45, 3.42, 3.39, 3.42,
]

const MARKETS = [
  { exchange: "Binance", pair: "PSG/USDT", price: 3.42, volume: 8_450_000, share: 44.7 },
  { exchange: "Coinbase", pair: "PSG/USD", price: 3.43, volume: 3_210_000, share: 17.0 },
  { exchange: "OKX", pair: "PSG/USDT", price: 3.41, volume: 2_890_000, share: 15.3 },
  { exchange: "Bybit", pair: "PSG/USDT", price: 3.42, volume: 1_670_000, share: 8.8 },
  { exchange: "HTX", pair: "PSG/USDT", price: 3.41, volume: 1_230_000, share: 6.5 },
  { exchange: "Gate.io", pair: "PSG/USDT", price: 3.43, volume: 890_000, share: 4.7 },
  { exchange: "KuCoin", pair: "PSG/USDT", price: 3.42, volume: 580_000, share: 3.1 },
]

const HISTORICAL_DATA = [
  { date: "Mar 16, 2026", open: 3.38, high: 3.48, low: 3.35, close: 3.42, volume: 18_920_000, marketCap: 24_180_000 },
  { date: "Mar 15, 2026", open: 3.42, high: 3.55, low: 3.36, close: 3.38, volume: 21_340_000, marketCap: 23_900_000 },
  { date: "Mar 14, 2026", open: 3.35, high: 3.49, low: 3.31, close: 3.42, volume: 16_780_000, marketCap: 24_180_000 },
  { date: "Mar 13, 2026", open: 3.28, high: 3.42, low: 3.22, close: 3.35, volume: 15_450_000, marketCap: 23_680_000 },
  { date: "Mar 12, 2026", open: 3.31, high: 3.38, low: 3.15, close: 3.28, volume: 19_120_000, marketCap: 23_190_000 },
  { date: "Mar 11, 2026", open: 3.40, high: 3.45, low: 3.28, close: 3.31, volume: 14_670_000, marketCap: 23_400_000 },
  { date: "Mar 10, 2026", open: 3.38, high: 3.52, low: 3.35, close: 3.40, volume: 17_890_000, marketCap: 24_040_000 },
]

const NEWS = [
  { title: "PSG Fan Token Sees Surge After Champions League Win", time: "2 hours ago", source: "CryptoNews" },
  { title: "Socios.com Announces New Voting Features for Fan Token Holders", time: "8 hours ago", source: "CoinDesk" },
  { title: "Chiliz Chain 2.0 Upgrade Boosts Fan Token Ecosystem", time: "1 day ago", source: "The Block" },
  { title: "PSG Partners With Major DeFi Protocol for Staking Rewards", time: "2 days ago", source: "Decrypt" },
  { title: "Fan Token Market Cap Reaches New All-Time High", time: "3 days ago", source: "CoinTelegraph" },
]

/* ─── Helpers ─── */
const fmt = (n: number) => {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`
  return `$${n.toFixed(2)}`
}

const fmtNum = (n: number) => n.toLocaleString("en-US")

const pctClass = (v: number) => v >= 0 ? "text-green-500" : "text-red-500"
const pctIcon = (v: number) => v >= 0 ? "▲" : "▼"
const pctFmt = (v: number) => `${pctIcon(v)} ${Math.abs(v).toFixed(2)}%`

/* ─── SVG Chart ─── */
function PriceChart({ data, timeframe }: { data: number[]; timeframe: string }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const w = 800
  const h = 280
  const padding = 40
  const chartW = w - padding * 2
  const chartH = h - padding * 2
  const positive = data[data.length - 1] >= data[0]
  const color = positive ? "#22c55e" : "#ef4444"
  const fillColor = positive ? "#22c55e15" : "#ef444415"

  const points = data.map((v, i) => ({
    x: padding + (i / (data.length - 1)) * chartW,
    y: padding + chartH - ((v - min) / range) * chartH,
  }))

  const linePoints = points.map((p) => `${p.x},${p.y}`).join(" ")
  const areaPoints = `${padding},${padding + chartH} ${linePoints} ${padding + chartW},${padding + chartH}`

  // Y-axis labels
  const yLabels = Array.from({ length: 5 }, (_, i) => {
    const val = min + (range * i) / 4
    const y = padding + chartH - (i / 4) * chartH
    return { val: `$${val.toFixed(2)}`, y }
  })

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      {yLabels.map((label, i) => (
        <g key={i}>
          <line x1={padding} y1={label.y} x2={w - padding} y2={label.y} stroke="currentColor" strokeOpacity={0.07} strokeDasharray="4 4" />
          <text x={padding - 6} y={label.y + 4} textAnchor="end" className="fill-muted-foreground" fontSize="10">{label.val}</text>
        </g>
      ))}
      {/* Area fill */}
      <polygon points={areaPoints} fill={fillColor} />
      {/* Price line */}
      <polyline fill="none" stroke={color} strokeWidth="2" points={linePoints} strokeLinejoin="round" strokeLinecap="round" />
      {/* Current price dot */}
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="4" fill={color} />
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="8" fill={color} fillOpacity={0.2} />
    </svg>
  )
}

/* ─── TokenAvatar Component ─── */
function TokenAvatar({ token, size = "size-10" }: { token: any; size?: string }) {
  const { logo } = useCoinGeckoLogo(token.coingeckoId, "small")

  return (
    <Avatar className={size}>
      {logo && <AvatarImage src={logo} alt={token.name} />}
      <AvatarFallback className="bg-blue-600 text-white font-bold text-sm">
        {token.symbol.slice(0, 3)}
      </AvatarFallback>
    </Avatar>
  )
}

/* ─── Main Component ─── */
export function TokenDetailShowcase() {
  const [watchlisted, setWatchlisted] = useState(false)
  const [timeframe, setTimeframe] = useState("7D")
  const [converterAmount, setConverterAmount] = useState("1")
  const [converterDirection, setConverterDirection] = useState<"crypto" | "fiat">("crypto")
  const [activeTab, setActiveTab] = useState("overview")

  const convertedValue = converterDirection === "crypto"
    ? (parseFloat(converterAmount || "0") * TOKEN.price).toFixed(2)
    : (parseFloat(converterAmount || "0") / TOKEN.price).toFixed(6)

  const supplyPct = (TOKEN.circulatingSupply / TOKEN.maxSupply) * 100

  return (
    <div className="space-y-6">
      {/* ─── Breadcrumb ─── */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="#">Cryptocurrencies</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="#">Fan Tokens</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>{TOKEN.name}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ─── Token Header ─── */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          {/* Name Row */}
          <div className="flex items-center gap-3 flex-wrap">
            <TokenAvatar token={TOKEN} />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold">{TOKEN.name}</h1>
                <Badge variant="secondary" className="text-xs">{TOKEN.symbol}</Badge>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <Badge variant="outline" className="text-[10px] font-normal">Rank #{TOKEN.rank}</Badge>
            {TOKEN.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] font-normal">{tag}</Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              socios.com
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Whitepaper
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              Explorer
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                  More
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Source Code</DropdownMenuItem>
                <DropdownMenuItem>Community</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Report Issue</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Right side: actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant={watchlisted ? "default" : "outline"}
            size="sm"
            onClick={() => setWatchlisted(!watchlisted)}
            className="gap-1.5"
          >
            {watchlisted ? "★" : "☆"}
            {watchlisted ? "Watchlisted" : "Add to Watchlist"}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                Share
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share {TOKEN.symbol}</DialogTitle>
                <DialogDescription>Copy the link to share this token page.</DialogDescription>
              </DialogHeader>
              <div className="flex gap-2">
                <Input value="https://cointracker.app/currencies/psg" readOnly className="text-xs" />
                <Button size="sm">Copy</Button>
              </div>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="size-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Add to Portfolio</DropdownMenuItem>
              <DropdownMenuItem>Set Price Alert</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* ─── Price Section ─── */}
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-3xl sm:text-4xl font-bold tracking-tight">${TOKEN.price.toFixed(2)}</span>
          <Badge variant="outline" className={cn("text-sm font-medium", pctClass(TOKEN.change24h))}>
            {pctFmt(TOKEN.change24h)}
          </Badge>
          <span className="text-sm text-muted-foreground">(24h)</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>BTC: 0.0000391</span>
          <span className={pctClass(TOKEN.change24h)}>{pctFmt(0.82)}</span>
          <Separator orientation="vertical" className="h-3" />
          <span>ETH: 0.000891</span>
          <span className={pctClass(TOKEN.change24h)}>{pctFmt(0.45)}</span>
        </div>
      </div>

      {/* ─── Price Stats Bar ─── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: "Market Cap", value: fmt(TOKEN.marketCap), sub: pctFmt(TOKEN.change24h), subClass: pctClass(TOKEN.change24h) },
          { label: "Fully Diluted MC", value: fmt(TOKEN.fullyDilutedMC), sub: null },
          { label: "Volume (24h)", value: fmt(TOKEN.volume24h), sub: pctFmt(5.34), subClass: "text-green-500" },
          { label: "Vol / Market Cap", value: TOKEN.volumeMarketCapRatio.toFixed(4), sub: null },
          { label: "Circulating Supply", value: `${fmtNum(TOKEN.circulatingSupply)} ${TOKEN.symbol}`, sub: `${supplyPct.toFixed(1)}%` },
          { label: "Max Supply", value: `${fmtNum(TOKEN.maxSupply)} ${TOKEN.symbol}`, sub: null },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border p-3">
            <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
            <div className="text-sm font-semibold mt-0.5">{stat.value}</div>
            {stat.sub && <div className={cn("text-[10px] mt-0.5", stat.subClass || "text-muted-foreground")}>{stat.sub}</div>}
          </div>
        ))}
      </div>

      {/* Supply Progress */}
      <div className="rounded-lg border border-border p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">Circulating Supply Progress</span>
          <span className="text-xs font-medium">{supplyPct.toFixed(1)}%</span>
        </div>
        <Progress value={supplyPct} className="h-2" />
        <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground">
          <span>{fmtNum(TOKEN.circulatingSupply)} {TOKEN.symbol}</span>
          <span>Max: {fmtNum(TOKEN.maxSupply)} {TOKEN.symbol}</span>
        </div>
      </div>

      {/* ─── Tabs ─── */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="markets">Markets</TabsTrigger>
          <TabsTrigger value="historical">Historical Data</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
        </TabsList>

        {/* ─── Overview Tab ─── */}
        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* Chart */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <CardTitle className="text-base">{TOKEN.symbol} Price Chart</CardTitle>
                <div className="flex items-center gap-1">
                  {["1H", "24H", "7D", "1M", "3M", "1Y", "ALL"].map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={cn(
                        "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                        timeframe === tf
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <PriceChart data={PRICE_HISTORY} timeframe={timeframe} />
            </CardContent>
          </Card>

          {/* Two Column: Stats + Converter */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left: Statistics */}
            <div className="lg:col-span-2 space-y-6">
              {/* Price Statistics */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{TOKEN.symbol} Price Statistics</CardTitle>
                  <CardDescription>Price change across different timeframes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-border">
                    {[
                      { label: "Price", value: `$${TOKEN.price.toFixed(2)}` },
                      { label: "1h Change", value: pctFmt(TOKEN.change1h), valueClass: pctClass(TOKEN.change1h) },
                      { label: "24h Change", value: pctFmt(TOKEN.change24h), valueClass: pctClass(TOKEN.change24h) },
                      { label: "7d Change", value: pctFmt(TOKEN.change7d), valueClass: pctClass(TOKEN.change7d) },
                      { label: "30d Change", value: pctFmt(TOKEN.change30d), valueClass: pctClass(TOKEN.change30d) },
                      { label: "90d Change", value: pctFmt(TOKEN.change90d), valueClass: pctClass(TOKEN.change90d) },
                      { label: "All-Time High", value: `$${TOKEN.allTimeHigh.toFixed(2)}`, sub: TOKEN.allTimeHighDate },
                      { label: "All-Time Low", value: `$${TOKEN.allTimeLow.toFixed(2)}`, sub: TOKEN.allTimeLowDate },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between py-2.5">
                        <span className="text-sm text-muted-foreground">{row.label}</span>
                        <div className="text-right">
                          <span className={cn("text-sm font-medium", (row as any).valueClass)}>{row.value}</span>
                          {(row as any).sub && <div className="text-[10px] text-muted-foreground">{(row as any).sub}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* About */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">About {TOKEN.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fan Tokens are utility tokens that allow holders to exercise their influence within their favorite sports teams, leagues, and clubs. Built on the Chiliz blockchain, PSG Fan Tokens give Paris Saint-Germain supporters a share of decision-making power through the Socios.com platform.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Token holders can participate in exclusive polls and surveys that influence club decisions, such as choosing a message for the team bus, selecting goal celebration songs, or voting on new kit designs. Beyond governance, PSG tokens provide access to VIP rewards, exclusive merchandise, and unique experiences like meet-and-greets with players.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The PSG Fan Token was launched through a Fan Token Offering (FTO) on the Socios.com platform. The token operates on the Chiliz Chain, a purpose-built blockchain for sports and entertainment tokens. With a fixed maximum supply of 20 million tokens, PSG is designed to be a scarce digital asset tied to one of the world's most popular football clubs.
                  </p>

                  <Separator />

                  {/* Info Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3">
                      <div>
                        <div className="text-[11px] text-muted-foreground font-medium">Network</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <div className="size-4 rounded-full bg-red-500 flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">C</span>
                          </div>
                          <span className="text-sm font-medium">{TOKEN.network}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-muted-foreground font-medium">Category</div>
                        <span className="text-sm font-medium">{TOKEN.category}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-[11px] text-muted-foreground font-medium">Launch Date</div>
                        <span className="text-sm font-medium">{TOKEN.launchDate}</span>
                      </div>
                      <div>
                        <div className="text-[11px] text-muted-foreground font-medium">Contract</div>
                        <div className="flex items-center gap-1.5">
                          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">0x3e2d...8f4a</code>
                          <Button variant="ghost" size="icon" className="size-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="q1">
                      <AccordionTrigger value="q1" className="text-sm">What is a Fan Token?</AccordionTrigger>
                      <AccordionContent value="q1" className="text-sm text-muted-foreground">
                        Fan Tokens are digital assets that represent a share of influence in a sports team or entertainment entity. They give holders the ability to participate in team decisions through voting on the Socios.com platform, as well as access to exclusive content, rewards, and experiences.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                      <AccordionTrigger value="q2" className="text-sm">How can I buy PSG Fan Tokens?</AccordionTrigger>
                      <AccordionContent value="q2" className="text-sm text-muted-foreground">
                        PSG Fan Tokens can be purchased on major cryptocurrency exchanges like Binance, Coinbase, and OKX. You can also buy them directly through the Socios.com app using the Chiliz (CHZ) token or credit/debit cards.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                      <AccordionTrigger value="q3" className="text-sm">What can I do with PSG tokens?</AccordionTrigger>
                      <AccordionContent value="q3" className="text-sm text-muted-foreground">
                        PSG token holders can vote in club polls, earn exclusive rewards and badges, access VIP experiences, purchase exclusive merchandise, and compete in leaderboard competitions for unique prizes. The more tokens you hold, the greater your influence.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q4">
                      <AccordionTrigger value="q4" className="text-sm">What blockchain is PSG built on?</AccordionTrigger>
                      <AccordionContent value="q4" className="text-sm text-muted-foreground">
                        PSG Fan Token is built on the Chiliz Chain, a purpose-built blockchain for sports and entertainment tokenization. Chiliz Chain is a Layer 1 EVM-compatible blockchain optimized for handling fan engagement and micro-transactions at scale.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5">
                      <AccordionTrigger value="q5" className="text-sm">Is there a maximum supply of PSG tokens?</AccordionTrigger>
                      <AccordionContent value="q5" className="text-sm text-muted-foreground">
                        Yes, the maximum supply of PSG Fan Tokens is capped at 20,000,000 tokens. Currently, approximately {fmtNum(TOKEN.circulatingSupply)} tokens ({supplyPct.toFixed(1)}%) are in circulation, with the remainder held in reserve and gradually released.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Converter + Community */}
            <div className="space-y-6">
              {/* Converter */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
                    {TOKEN.symbol} Converter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs">{converterDirection === "crypto" ? TOKEN.symbol : "USD"}</Label>
                    <Input
                      type="number"
                      value={converterAmount}
                      onChange={(e) => setConverterAmount(e.target.value)}
                      className="text-right font-mono"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-full"
                      onClick={() => setConverterDirection(converterDirection === "crypto" ? "fiat" : "crypto")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">{converterDirection === "crypto" ? "USD" : TOKEN.symbol}</Label>
                    <Input
                      readOnly
                      value={converterDirection === "crypto" ? `$${convertedValue}` : `${convertedValue} ${TOKEN.symbol}`}
                      className="text-right font-mono bg-muted/30"
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground text-center">
                    1 {TOKEN.symbol} = ${TOKEN.price.toFixed(2)} USD
                  </p>
                </CardContent>
              </Card>

              {/* Price Performance */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Price Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* 24h Range */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">24h Low</span>
                      <span className="text-muted-foreground">24h High</span>
                    </div>
                    <div className="relative">
                      <Progress value={65} className="h-2" />
                      <div className="absolute top-1/2 -translate-y-1/2 left-[65%] size-3 rounded-full bg-primary border-2 border-background" />
                    </div>
                    <div className="flex items-center justify-between text-xs mt-1.5">
                      <span className="font-medium">$3.28</span>
                      <span className="font-medium">$3.55</span>
                    </div>
                  </div>

                  <Separator />

                  {/* 7d Range */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">7d Low</span>
                      <span className="text-muted-foreground">7d High</span>
                    </div>
                    <div className="relative">
                      <Progress value={48} className="h-2" />
                      <div className="absolute top-1/2 -translate-y-1/2 left-[48%] size-3 rounded-full bg-primary border-2 border-background" />
                    </div>
                    <div className="flex items-center justify-between text-xs mt-1.5">
                      <span className="font-medium">$3.15</span>
                      <span className="font-medium">$3.72</span>
                    </div>
                  </div>

                  <Separator />

                  {/* ATH / ATL */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">All-Time High</span>
                      <div className="text-right">
                        <span className="text-xs font-medium">${TOKEN.allTimeHigh.toFixed(2)}</span>
                        <span className="text-[10px] text-red-500 ml-1.5">-94.47%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">All-Time Low</span>
                      <div className="text-right">
                        <span className="text-xs font-medium">${TOKEN.allTimeLow.toFixed(2)}</span>
                        <span className="text-[10px] text-green-500 ml-1.5">+103.57%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Community</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Twitter / X", followers: "2.4M", icon: "𝕏" },
                    { name: "Telegram", followers: "89.2K", icon: "✈" },
                    { name: "Reddit", followers: "34.5K", icon: "🔴" },
                    { name: "Discord", followers: "12.1K", icon: "💬" },
                  ].map((social) => (
                    <div key={social.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{social.icon}</span>
                        <span className="text-sm">{social.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-[10px]">{social.followers}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Alert */}
              <Alert>
                <AlertTitle className="text-xs font-semibold">Price Alert</AlertTitle>
                <AlertDescription className="text-xs">
                  Set up notifications to track PSG price movements and never miss a trading opportunity.
                </AlertDescription>
                <Button size="sm" className="mt-2 h-7 text-xs w-full">Create Alert</Button>
              </Alert>
            </div>
          </div>
        </TabsContent>

        {/* ─── Markets Tab ─── */}
        <TabsContent value="markets" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <CardTitle className="text-base">{TOKEN.symbol} Markets</CardTitle>
                  <CardDescription>Exchanges trading {TOKEN.name}</CardDescription>
                </div>
                <Select defaultValue="volume">
                  <SelectTrigger className="w-36 h-8 text-xs">Sort by</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volume">Volume (High to Low)</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="share">Market Share</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">#</TableHead>
                    <TableHead>Exchange</TableHead>
                    <TableHead>Pair</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Volume (24h)</TableHead>
                    <TableHead className="text-right">Market Share</TableHead>
                    <TableHead className="text-right w-24">Confidence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MARKETS.map((m, i) => (
                    <TableRow key={m.exchange}>
                      <TableCell className="text-muted-foreground text-xs">{i + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="size-6">
                            <AvatarFallback className="text-[9px] font-bold bg-muted">{m.exchange.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{m.exchange}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[10px] font-mono">{m.pair}</Badge>
                      </TableCell>
                      <TableCell className="text-right text-sm font-medium tabular-nums">${m.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-sm tabular-nums">{fmt(m.volume)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Progress value={m.share} className="h-1.5 w-16" />
                          <span className="text-xs tabular-nums w-10 text-right">{m.share}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="default" className="text-[10px]">High</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ─── Historical Data Tab ─── */}
        <TabsContent value="historical" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <CardTitle className="text-base">Historical Data</CardTitle>
                  <CardDescription>Daily OHLCV data for {TOKEN.symbol}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="7d">
                    <SelectTrigger className="w-28 h-8 text-xs">Period</SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7d">Last 7 Days</SelectItem>
                      <SelectItem value="30d">Last 30 Days</SelectItem>
                      <SelectItem value="90d">Last 90 Days</SelectItem>
                      <SelectItem value="1y">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Export CSV
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Open</TableHead>
                    <TableHead className="text-right">High</TableHead>
                    <TableHead className="text-right">Low</TableHead>
                    <TableHead className="text-right">Close</TableHead>
                    <TableHead className="text-right">Volume</TableHead>
                    <TableHead className="text-right">Market Cap</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {HISTORICAL_DATA.map((row) => (
                    <TableRow key={row.date}>
                      <TableCell className="text-sm font-medium">{row.date}</TableCell>
                      <TableCell className="text-right text-sm tabular-nums">${row.open.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-sm tabular-nums text-green-500">${row.high.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-sm tabular-nums text-red-500">${row.low.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-sm tabular-nums font-medium">${row.close.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-sm tabular-nums">{fmt(row.volume)}</TableCell>
                      <TableCell className="text-right text-sm tabular-nums">{fmt(row.marketCap)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ─── News Tab ─── */}
        <TabsContent value="news" className="mt-6">
          <div className="space-y-4">
            {NEWS.map((article, i) => (
              <Card key={i} className="hover:bg-muted/30 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="size-16 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold leading-snug">{article.title}</h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Badge variant="secondary" className="text-[10px]">{article.source}</Badge>
                        <span className="text-[11px] text-muted-foreground">{article.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
