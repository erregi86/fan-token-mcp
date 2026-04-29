import { useState, useMemo } from "react"
import { cn } from "fan-tokens/utils"

import { Button } from "fan-tokens/button"
import { Input } from "fan-tokens/input"
import { Badge } from "fan-tokens/badge"
import { Card, CardContent, CardHeader, CardTitle } from "fan-tokens/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "fan-tokens/table"
import { Tabs, TabsList, TabsTrigger } from "fan-tokens/tabs"
import { Select, SelectTrigger, SelectContent, SelectItem } from "fan-tokens/select"
import { Separator } from "fan-tokens/separator"
import { Avatar, AvatarFallback, AvatarImage, useCoinGeckoLogo } from "fan-tokens"
import { Progress } from "fan-tokens/progress"
import { Tooltip } from "fan-tokens/tooltip"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "fan-tokens/pagination"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "fan-tokens/dropdown-menu"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "fan-tokens/sheet"
import { ScrollArea } from "fan-tokens/scroll-area"
import { Skeleton } from "fan-tokens/skeleton"
import { Switch } from "fan-tokens/switch"
import { Label } from "fan-tokens/label"

/* ─── Types ─── */
interface Coin {
  id: number
  name: string
  symbol: string
  coingeckoId: string
  logoUrl: string
  color: string
  price: number
  change1h: number
  change24h: number
  change7d: number
  marketCap: number
  volume24h: number
  circulatingSupply: number
  maxSupply: number | null
  network: string
  categories: string[]
  sparkline: number[]
}

/* ─── Mock Data ─── */
const COINS: Coin[] = [
  {
    id: 1, name: "Bitcoin", symbol: "BTC", coingeckoId: "bitcoin", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/btc.png", color: "bg-orange-500",
    price: 87432.15, change1h: 0.12, change24h: 2.34, change7d: -1.56,
    marketCap: 1723000000000, volume24h: 42300000000, circulatingSupply: 19700000, maxSupply: 21000000,
    network: "Bitcoin", categories: ["Layer 1", "Store of Value"],
    sparkline: [84200, 84800, 85100, 84600, 85900, 86400, 87100, 86800, 87200, 87432],
  },
  {
    id: 2, name: "Ethereum", symbol: "ETH", coingeckoId: "ethereum", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/eth.png", color: "bg-indigo-500",
    price: 3842.67, change1h: -0.08, change24h: 1.87, change7d: 3.42,
    marketCap: 462000000000, volume24h: 18900000000, circulatingSupply: 120200000, maxSupply: null,
    network: "Ethereum", categories: ["Layer 1", "Smart Contracts", "DeFi"],
    sparkline: [3720, 3680, 3740, 3790, 3810, 3780, 3830, 3800, 3820, 3842],
  },
  {
    id: 3, name: "BNB", symbol: "BNB", coingeckoId: "binancecoin", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/bnb.png", color: "bg-yellow-500",
    price: 612.34, change1h: 0.34, change24h: -0.52, change7d: 1.23,
    marketCap: 91200000000, volume24h: 1890000000, circulatingSupply: 149000000, maxSupply: 200000000,
    network: "BSC", categories: ["Layer 1", "Exchange"],
    sparkline: [605, 608, 610, 607, 611, 609, 613, 610, 612, 612],
  },
  {
    id: 4, name: "Solana", symbol: "SOL", coingeckoId: "solana", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/sol.png", color: "bg-purple-500",
    price: 187.92, change1h: 0.67, change24h: 4.21, change7d: 8.34,
    marketCap: 86400000000, volume24h: 4560000000, circulatingSupply: 460000000, maxSupply: null,
    network: "Solana", categories: ["Layer 1", "Smart Contracts"],
    sparkline: [172, 175, 178, 176, 180, 183, 185, 184, 186, 187],
  },
  {
    id: 5, name: "XRP", symbol: "XRP", coingeckoId: "ripple", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/xrp.png", color: "bg-blue-400",
    price: 2.41, change1h: -0.23, change24h: 0.89, change7d: -2.12,
    marketCap: 138000000000, volume24h: 5670000000, circulatingSupply: 57200000000, maxSupply: 100000000000,
    network: "XRP Ledger", categories: ["Layer 1", "Payments"],
    sparkline: [2.45, 2.42, 2.38, 2.40, 2.43, 2.39, 2.41, 2.40, 2.42, 2.41],
  },
  {
    id: 6, name: "Cardano", symbol: "ADA", coingeckoId: "cardano", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/ada.png", color: "bg-blue-600",
    price: 0.782, change1h: 0.45, change24h: -1.23, change7d: 2.67,
    marketCap: 28100000000, volume24h: 890000000, circulatingSupply: 35900000000, maxSupply: 45000000000,
    network: "Cardano", categories: ["Layer 1", "Smart Contracts"],
    sparkline: [0.76, 0.77, 0.78, 0.77, 0.79, 0.78, 0.77, 0.78, 0.79, 0.78],
  },
  {
    id: 7, name: "Avalanche", symbol: "AVAX", coingeckoId: "avalanche-2", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/avax.png", color: "bg-red-500",
    price: 42.18, change1h: 0.89, change24h: 3.45, change7d: 5.67,
    marketCap: 17200000000, volume24h: 1230000000, circulatingSupply: 407000000, maxSupply: 720000000,
    network: "Avalanche", categories: ["Layer 1", "DeFi"],
    sparkline: [39.5, 40.1, 40.8, 41.2, 40.9, 41.5, 41.8, 42.0, 41.9, 42.1],
  },
  {
    id: 8, name: "Polygon", symbol: "POL", coingeckoId: "polygon", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/matic.png", color: "bg-violet-600",
    price: 0.567, change1h: -0.12, change24h: 1.98, change7d: -0.45,
    marketCap: 5670000000, volume24h: 456000000, circulatingSupply: 10000000000, maxSupply: 10000000000,
    network: "Polygon", categories: ["Layer 2", "Scaling"],
    sparkline: [0.56, 0.55, 0.56, 0.57, 0.56, 0.57, 0.56, 0.57, 0.57, 0.56],
  },
  {
    id: 9, name: "Chainlink", symbol: "LINK", coingeckoId: "chainlink", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/link.png", color: "bg-blue-500",
    price: 18.92, change1h: 0.23, change24h: -0.67, change7d: 4.12,
    marketCap: 11800000000, volume24h: 678000000, circulatingSupply: 626000000, maxSupply: 1000000000,
    network: "Ethereum", categories: ["DeFi", "Oracle"],
    sparkline: [18.1, 18.3, 18.5, 18.4, 18.6, 18.7, 18.8, 18.9, 18.8, 18.9],
  },
  {
    id: 10, name: "Dogecoin", symbol: "DOGE", coingeckoId: "dogecoin", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/doge.png", color: "bg-amber-500",
    price: 0.182, change1h: 1.23, change24h: 5.67, change7d: 12.34,
    marketCap: 26800000000, volume24h: 2340000000, circulatingSupply: 147000000000, maxSupply: null,
    network: "Dogecoin", categories: ["Meme"],
    sparkline: [0.16, 0.165, 0.17, 0.168, 0.172, 0.175, 0.178, 0.18, 0.179, 0.182],
  },
  {
    id: 11, name: "Uniswap", symbol: "UNI", coingeckoId: "uniswap", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/uni.png", color: "bg-pink-500",
    price: 12.45, change1h: 0.56, change24h: 2.13, change7d: -1.89,
    marketCap: 9450000000, volume24h: 345000000, circulatingSupply: 759000000, maxSupply: 1000000000,
    network: "Ethereum", categories: ["DeFi", "DEX"],
    sparkline: [12.1, 12.2, 12.3, 12.4, 12.3, 12.5, 12.4, 12.45, 12.4, 12.45],
  },
  {
    id: 12, name: "Shiba Inu", symbol: "SHIB", coingeckoId: "shiba-inu", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/shib.png", color: "bg-orange-400",
    price: 0.0000234, change1h: 2.34, change24h: 8.92, change7d: 15.67,
    marketCap: 13800000000, volume24h: 1890000000, circulatingSupply: 589000000000000, maxSupply: null,
    network: "Ethereum", categories: ["Meme"],
    sparkline: [0.000020, 0.0000205, 0.000021, 0.0000215, 0.000022, 0.0000225, 0.000023, 0.0000232, 0.0000233, 0.0000234],
  },
  {
    id: 13, name: "Arbitrum", symbol: "ARB", coingeckoId: "arbitrum", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/arb.png", color: "bg-sky-500",
    price: 1.34, change1h: -0.45, change24h: 1.56, change7d: 3.21,
    marketCap: 5120000000, volume24h: 567000000, circulatingSupply: 3820000000, maxSupply: 10000000000,
    network: "Ethereum", categories: ["Layer 2", "Scaling"],
    sparkline: [1.29, 1.30, 1.31, 1.32, 1.31, 1.33, 1.32, 1.34, 1.33, 1.34],
  },
  {
    id: 14, name: "Render", symbol: "RNDR", coingeckoId: "render-token", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/rndr.png", color: "bg-teal-500",
    price: 9.87, change1h: 0.78, change24h: 3.45, change7d: 7.89,
    marketCap: 5230000000, volume24h: 456000000, circulatingSupply: 530000000, maxSupply: 536870912,
    network: "Solana", categories: ["AI", "GPU"],
    sparkline: [9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.85, 9.87],
  },
  {
    id: 15, name: "Fetch.ai", symbol: "FET", coingeckoId: "fetch-ai", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/fet.png", color: "bg-emerald-500",
    price: 2.87, change1h: 1.12, change24h: 5.67, change7d: 11.23,
    marketCap: 7240000000, volume24h: 890000000, circulatingSupply: 2520000000, maxSupply: 2630000000,
    network: "Ethereum", categories: ["AI", "Machine Learning"],
    sparkline: [2.55, 2.60, 2.65, 2.70, 2.72, 2.78, 2.80, 2.83, 2.85, 2.87],
  },
  {
    id: 16, name: "Immutable", symbol: "IMX", coingeckoId: "immutable-x", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/imx.png", color: "bg-cyan-500",
    price: 2.12, change1h: -0.34, change24h: 1.23, change7d: -2.45,
    marketCap: 3560000000, volume24h: 234000000, circulatingSupply: 1680000000, maxSupply: 2000000000,
    network: "Ethereum", categories: ["Gaming", "NFT"],
    sparkline: [2.15, 2.14, 2.13, 2.12, 2.11, 2.13, 2.12, 2.11, 2.12, 2.12],
  },
  {
    id: 17, name: "Optimism", symbol: "OP", coingeckoId: "optimism", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/op.png", color: "bg-red-400",
    price: 3.56, change1h: 0.23, change24h: 2.34, change7d: 4.56,
    marketCap: 4890000000, volume24h: 345000000, circulatingSupply: 1374000000, maxSupply: 4294967296,
    network: "Ethereum", categories: ["Layer 2", "Scaling"],
    sparkline: [3.40, 3.42, 3.44, 3.46, 3.48, 3.50, 3.52, 3.54, 3.55, 3.56],
  },
  {
    id: 18, name: "Pepe", symbol: "PEPE", coingeckoId: "pepe", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/pepe.png", color: "bg-green-500",
    price: 0.0000156, change1h: 3.45, change24h: 12.34, change7d: 25.67,
    marketCap: 6560000000, volume24h: 2340000000, circulatingSupply: 420690000000000, maxSupply: 420690000000000,
    network: "Ethereum", categories: ["Meme"],
    sparkline: [0.0000120, 0.0000125, 0.0000130, 0.0000135, 0.0000140, 0.0000145, 0.0000148, 0.0000150, 0.0000153, 0.0000156],
  },
  {
    id: 19, name: "Sui", symbol: "SUI", coingeckoId: "sui", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/sui.png", color: "bg-sky-400",
    price: 4.23, change1h: 0.89, change24h: 3.67, change7d: 6.78,
    marketCap: 13400000000, volume24h: 1230000000, circulatingSupply: 3170000000, maxSupply: 10000000000,
    network: "Sui", categories: ["Layer 1", "Smart Contracts"],
    sparkline: [3.90, 3.95, 4.00, 4.05, 4.08, 4.10, 4.15, 4.18, 4.20, 4.23],
  },
  {
    id: 20, name: "Aave", symbol: "AAVE", coingeckoId: "aave", logoUrl: "https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/color/aave.png", color: "bg-fuchsia-500",
    price: 287.45, change1h: 0.34, change24h: 1.89, change7d: 3.12,
    marketCap: 4310000000, volume24h: 345000000, circulatingSupply: 15000000, maxSupply: 16000000,
    network: "Ethereum", categories: ["DeFi", "Lending"],
    sparkline: [278, 280, 282, 284, 283, 285, 286, 287, 286, 287],
  },
]

const NETWORKS = ["All", "Ethereum", "Solana", "BSC", "Polygon", "Avalanche", "Arbitrum", "Bitcoin"] as const
const CATEGORIES = ["All", "Layer 1", "Layer 2", "DeFi", "Meme", "AI", "Gaming", "NFT"] as const

type SortField = "rank" | "price" | "change1h" | "change24h" | "change7d" | "marketCap" | "volume24h"
type SortDir = "asc" | "desc"

/* ─── Helpers ─── */
const fmt = (n: number) => {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`
  return `$${n.toFixed(2)}`
}

const fmtPrice = (n: number) => {
  if (n >= 1) return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (n >= 0.001) return `$${n.toFixed(4)}`
  return `$${n.toFixed(8)}`
}

const fmtSupply = (n: number, symbol: string) => {
  if (n >= 1e12) return `${(n / 1e12).toFixed(2)}T ${symbol}`
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B ${symbol}`
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M ${symbol}`
  return `${n.toLocaleString()} ${symbol}`
}

const pctColor = (v: number) => v >= 0 ? "text-green-500" : "text-red-500"
const pctIcon = (v: number) => v >= 0 ? "▲" : "▼"

/* ─── Mini Sparkline SVG ─── */
function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const w = 120
  const h = 32
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ")

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="shrink-0">
      <polyline
        fill="none"
        stroke={positive ? "#22c55e" : "#ef4444"}
        strokeWidth="1.5"
        points={points}
      />
    </svg>
  )
}

/* ─── CoinAvatar Component ─── */
function CoinAvatar({ coin, size = "size-7" }: { coin: Coin; size?: string }) {
  return (
    <Avatar className={size}>
      <AvatarImage src={coin.logoUrl} alt={coin.name} />
      <AvatarFallback className={cn("text-[10px] font-bold text-white", coin.color)}>
        {coin.symbol.slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  )
}

/* ─── Crypto Showcase ─── */
export function CryptoShowcase() {
  const [watchlist, setWatchlist] = useState<number[]>([1, 2, 4])
  const [search, setSearch] = useState("")
  const [selectedNetwork, setSelectedNetwork] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [sortField, setSortField] = useState<SortField>("rank")
  const [sortDir, setSortDir] = useState<SortDir>("asc")
  const [activeTab, setActiveTab] = useState("crypto")
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(false)
  const [highlightGainers, setHighlightGainers] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState("20")
  const [currentPage, setCurrentPage] = useState(1)

  const toggleWatchlist = (id: number) =>
    setWatchlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])

  const handleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    else { setSortField(field); setSortDir(field === "rank" ? "asc" : "desc") }
  }

  const SortIcon = ({ field }: { field: SortField }) => (
    <span className={cn("ml-1 text-[10px]", sortField === field ? "text-foreground" : "text-muted-foreground/40")}>
      {sortField === field ? (sortDir === "asc" ? "▲" : "▼") : "⇅"}
    </span>
  )

  const filtered = useMemo(() => {
    let list = [...COINS]

    // search
    if (search) {
      const q = search.toLowerCase()
      list = list.filter((c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q))
    }

    // network
    if (selectedNetwork !== "All") {
      list = list.filter((c) => c.network === selectedNetwork)
    }

    // category
    if (selectedCategory !== "All") {
      list = list.filter((c) => c.categories.includes(selectedCategory))
    }

    // watchlist
    if (showWatchlistOnly) {
      list = list.filter((c) => watchlist.includes(c.id))
    }

    // sort
    list.sort((a, b) => {
      let va: number, vb: number
      switch (sortField) {
        case "rank": va = a.id; vb = b.id; break
        case "price": va = a.price; vb = b.price; break
        case "change1h": va = a.change1h; vb = b.change1h; break
        case "change24h": va = a.change24h; vb = b.change24h; break
        case "change7d": va = a.change7d; vb = b.change7d; break
        case "marketCap": va = a.marketCap; vb = b.marketCap; break
        case "volume24h": va = a.volume24h; vb = b.volume24h; break
        default: va = a.id; vb = b.id
      }
      return sortDir === "asc" ? va - vb : vb - va
    })

    return list
  }, [search, selectedNetwork, selectedCategory, showWatchlistOnly, watchlist, sortField, sortDir])

  const totalMarketCap = COINS.reduce((s, c) => s + c.marketCap, 0)
  const totalVolume = COINS.reduce((s, c) => s + c.volume24h, 0)
  const btcDominance = ((COINS[0].marketCap / totalMarketCap) * 100).toFixed(1)
  const ethDominance = ((COINS[1].marketCap / totalMarketCap) * 100).toFixed(1)

  const networkCounts = useMemo(() => {
    const map: Record<string, number> = {}
    COINS.forEach((c) => { map[c.network] = (map[c.network] || 0) + 1 })
    return map
  }, [])

  return (
    <div className="space-y-6">
      {/* ─── Header ─── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">📊</span>
            Crypto Market Tracker
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Real-time cryptocurrency prices, market cap, and trading volume
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Display Settings</SheetTitle>
                <SheetDescription>Customize your market view</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <Label>Highlight top gainers</Label>
                  <Switch checked={highlightGainers} onCheckedChange={setHighlightGainers} />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Watchlist only</Label>
                  <Switch checked={showWatchlistOnly} onCheckedChange={setShowWatchlistOnly} />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Rows per page</Label>
                  <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
                    <SelectTrigger>{rowsPerPage}</SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Export CSV</DropdownMenuItem>
              <DropdownMenuItem>Export JSON</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>API Documentation</DropdownMenuItem>
              <DropdownMenuItem>Report Issue</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* ─── Global Stats Bar ─── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-4">
            <p className="text-[11px] text-muted-foreground font-medium">Total Market Cap</p>
            <p className="text-lg font-bold">{fmt(totalMarketCap)}</p>
            <p className="text-[11px] text-green-500 font-medium">▲ 1.82%</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-4">
            <p className="text-[11px] text-muted-foreground font-medium">24h Volume</p>
            <p className="text-lg font-bold">{fmt(totalVolume)}</p>
            <p className="text-[11px] text-green-500 font-medium">▲ 3.24%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-[11px] text-muted-foreground font-medium">BTC Dominance</p>
            <p className="text-lg font-bold">{btcDominance}%</p>
            <Progress value={parseFloat(btcDominance)} className="h-1.5 mt-1" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-[11px] text-muted-foreground font-medium">ETH Dominance</p>
            <p className="text-lg font-bold">{ethDominance}%</p>
            <Progress value={parseFloat(ethDominance)} className="h-1.5 mt-1" />
          </CardContent>
        </Card>
      </div>

      {/* ─── Tabs ─── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="overflow-x-auto -mx-1 px-1">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="crypto">
                <span className="hidden sm:inline">Cryptocurrencies</span>
                <span className="sm:hidden">Crypto</span>
                <Badge variant="secondary" className="ml-1.5 text-[10px] px-1.5 py-0">{COINS.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="watchlist">
                Watchlist
                <Badge variant="secondary" className="ml-1.5 text-[10px] px-1.5 py-0">{watchlist.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="gainers"><span className="hidden sm:inline">Gainers & Losers</span><span className="sm:hidden">Gain/Loss</span></TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <Input
            placeholder="Search coin or token..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 w-full sm:w-64 h-9"
          />
        </div>
      </div>

      {/* ─── Network Chips ─── */}
      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Network</p>
          <div className="flex flex-wrap gap-1.5">
            {NETWORKS.map((net) => (
              <button
                key={net}
                onClick={() => setSelectedNetwork(net)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors border",
                  selectedNetwork === net
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                )}
              >
                {net !== "All" && <span className={cn("size-2 rounded-full", networkColor(net))} />}
                {net}
                {net !== "All" && (
                  <span className="text-[10px] opacity-60">
                    {net === "All" ? COINS.length : networkCounts[net] || 0}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Category</p>
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors border",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Active Filters ─── */}
      {(selectedNetwork !== "All" || selectedCategory !== "All" || search || showWatchlistOnly) && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground">Active filters:</span>
          {selectedNetwork !== "All" && (
            <Badge variant="secondary" className="gap-1 pr-1">
              {selectedNetwork}
              <button onClick={() => setSelectedNetwork("All")} className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </Badge>
          )}
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="gap-1 pr-1">
              {selectedCategory}
              <button onClick={() => setSelectedCategory("All")} className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </Badge>
          )}
          {showWatchlistOnly && (
            <Badge variant="secondary" className="gap-1 pr-1">
              Watchlist
              <button onClick={() => setShowWatchlistOnly(false)} className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </Badge>
          )}
          {search && (
            <Badge variant="secondary" className="gap-1 pr-1">
              "{search}"
              <button onClick={() => setSearch("")} className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </Badge>
          )}
          <Button variant="ghost" size="sm" className="h-6 text-xs text-muted-foreground" onClick={() => { setSelectedNetwork("All"); setSelectedCategory("All"); setSearch(""); setShowWatchlistOnly(false) }}>
            Clear all
          </Button>
        </div>
      )}

      {/* ─── Results Count ─── */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs sm:text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filtered.length}</span> of {COINS.length} cryptocurrencies
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Sort:</span>
          <Select value={sortField} onValueChange={(v) => { setSortField(v as SortField); setSortDir(v === "rank" ? "asc" : "desc") }}>
            <SelectTrigger className="h-7 text-xs w-32">{sortField === "rank" ? "Market Cap Rank" : sortField === "marketCap" ? "Market Cap" : sortField === "volume24h" ? "Volume" : sortField === "change24h" ? "24h Change" : sortField}</SelectTrigger>
            <SelectContent>
              <SelectItem value="rank">Market Cap Rank</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="change1h">1h Change</SelectItem>
              <SelectItem value="change24h">24h Change</SelectItem>
              <SelectItem value="change7d">7d Change</SelectItem>
              <SelectItem value="marketCap">Market Cap</SelectItem>
              <SelectItem value="volume24h">Volume</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ─── Main Table ─── */}
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-10 text-center">#</TableHead>
                <TableHead className="w-8"></TableHead>
                <TableHead className="min-w-[200px]">
                  <button className="flex items-center hover:text-foreground transition-colors" onClick={() => handleSort("rank")}>
                    Name <SortIcon field="rank" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button className="flex items-center justify-end w-full hover:text-foreground transition-colors" onClick={() => handleSort("price")}>
                    Price <SortIcon field="price" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button className="flex items-center justify-end w-full hover:text-foreground transition-colors" onClick={() => handleSort("change1h")}>
                    1h % <SortIcon field="change1h" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button className="flex items-center justify-end w-full hover:text-foreground transition-colors" onClick={() => handleSort("change24h")}>
                    24h % <SortIcon field="change24h" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button className="flex items-center justify-end w-full hover:text-foreground transition-colors" onClick={() => handleSort("change7d")}>
                    7d % <SortIcon field="change7d" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button className="flex items-center justify-end w-full hover:text-foreground transition-colors" onClick={() => handleSort("marketCap")}>
                    Market Cap <SortIcon field="marketCap" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button className="flex items-center justify-end w-full hover:text-foreground transition-colors" onClick={() => handleSort("volume24h")}>
                    Volume (24h) <SortIcon field="volume24h" />
                  </button>
                </TableHead>
                <TableHead className="text-right min-w-[140px]">Circulating Supply</TableHead>
                <TableHead className="text-center w-[130px]">Last 7 Days</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((coin, index) => {
                const isGainer = highlightGainers && coin.change24h > 5
                const isInWatchlist = watchlist.includes(coin.id)
                const supplyPct = coin.maxSupply ? (coin.circulatingSupply / coin.maxSupply) * 100 : null

                return (
                  <TableRow
                    key={coin.id}
                    className={cn(
                      "group transition-colors",
                      isGainer && "bg-green-500/5"
                    )}
                  >
                    {/* Rank */}
                    <TableCell className="text-center text-muted-foreground text-xs font-medium">
                      {coin.id}
                    </TableCell>

                    {/* Watchlist Star */}
                    <TableCell className="px-0">
                      <button
                        onClick={() => toggleWatchlist(coin.id)}
                        className={cn(
                          "transition-colors",
                          isInWatchlist ? "text-yellow-500" : "text-muted-foreground/30 hover:text-yellow-500"
                        )}
                      >
                        {isInWatchlist ? "★" : "☆"}
                      </button>
                    </TableCell>

                    {/* Name */}
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <CoinAvatar coin={coin} />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-sm">{coin.name}</span>
                            {coin.id <= 3 && (
                              <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 font-normal">
                                Top 3
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-muted-foreground">{coin.symbol}</span>
                            <span className="text-[10px] px-1.5 py-0 rounded-full bg-muted text-muted-foreground">
                              {coin.network}
                            </span>
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    {/* Price */}
                    <TableCell className="text-right font-semibold text-sm tabular-nums">
                      {fmtPrice(coin.price)}
                    </TableCell>

                    {/* 1h */}
                    <TableCell className={cn("text-right text-xs font-medium tabular-nums", pctColor(coin.change1h))}>
                      <span className="text-[10px]">{pctIcon(coin.change1h)}</span> {Math.abs(coin.change1h).toFixed(2)}%
                    </TableCell>

                    {/* 24h */}
                    <TableCell className={cn("text-right text-xs font-medium tabular-nums", pctColor(coin.change24h))}>
                      <span className="text-[10px]">{pctIcon(coin.change24h)}</span> {Math.abs(coin.change24h).toFixed(2)}%
                    </TableCell>

                    {/* 7d */}
                    <TableCell className={cn("text-right text-xs font-medium tabular-nums", pctColor(coin.change7d))}>
                      <span className="text-[10px]">{pctIcon(coin.change7d)}</span> {Math.abs(coin.change7d).toFixed(2)}%
                    </TableCell>

                    {/* Market Cap */}
                    <TableCell className="text-right text-sm tabular-nums">
                      {fmt(coin.marketCap)}
                    </TableCell>

                    {/* Volume 24h */}
                    <TableCell className="text-right">
                      <div className="text-sm tabular-nums">{fmt(coin.volume24h)}</div>
                      <div className="text-[10px] text-muted-foreground tabular-nums">
                        {(coin.volume24h / coin.price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {coin.symbol}
                      </div>
                    </TableCell>

                    {/* Circulating Supply */}
                    <TableCell className="text-right">
                      <div className="text-xs tabular-nums">{fmtSupply(coin.circulatingSupply, coin.symbol)}</div>
                      {supplyPct !== null && (
                        <div className="mt-1">
                          <Progress value={supplyPct} className="h-1 w-20 ml-auto" />
                          <div className="text-[9px] text-muted-foreground mt-0.5 text-right">{supplyPct.toFixed(0)}%</div>
                        </div>
                      )}
                    </TableCell>

                    {/* Sparkline */}
                    <TableCell className="text-center">
                      <Sparkline data={coin.sparkline} positive={coin.change7d >= 0} />
                    </TableCell>
                  </TableRow>
                )
              })}

              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={11} className="text-center py-12">
                    <div className="text-muted-foreground">
                      <p className="text-lg font-medium">No results found</p>
                      <p className="text-sm mt-1">Try adjusting your filters or search term</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3"
                        onClick={() => { setSelectedNetwork("All"); setSelectedCategory("All"); setSearch(""); setShowWatchlistOnly(false) }}
                      >
                        Clear all filters
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer Pagination */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-border px-4 py-3">
          <p className="text-xs text-muted-foreground">
            Page {currentPage} of 1 &middot; {filtered.length} results
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Card>

      {/* ─── Trending Section ─── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <span>🔥</span> Trending
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {COINS.sort((a, b) => b.change24h - a.change24h).slice(0, 4).map((coin, i) => (
              <div key={coin.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-4">{i + 1}</span>
                  <CoinAvatar coin={coin} size="size-5" />
                  <span className="text-sm font-medium">{coin.symbol}</span>
                </div>
                <span className={cn("text-xs font-medium", pctColor(coin.change24h))}>
                  {pctIcon(coin.change24h)} {Math.abs(coin.change24h).toFixed(2)}%
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <span>📈</span> Top Gainers (7d)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[...COINS].sort((a, b) => b.change7d - a.change7d).slice(0, 4).map((coin, i) => (
              <div key={coin.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-4">{i + 1}</span>
                  <CoinAvatar coin={coin} size="size-5" />
                  <span className="text-sm font-medium">{coin.symbol}</span>
                </div>
                <span className={cn("text-xs font-medium", pctColor(coin.change7d))}>
                  {pctIcon(coin.change7d)} {Math.abs(coin.change7d).toFixed(2)}%
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <span>📉</span> Top Losers (7d)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[...COINS].sort((a, b) => a.change7d - b.change7d).slice(0, 4).map((coin, i) => (
              <div key={coin.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-4">{i + 1}</span>
                  <CoinAvatar coin={coin} size="size-5" />
                  <span className="text-sm font-medium">{coin.symbol}</span>
                </div>
                <span className={cn("text-xs font-medium", pctColor(coin.change7d))}>
                  {pctIcon(coin.change7d)} {Math.abs(coin.change7d).toFixed(2)}%
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

/* ─── Network color helper ─── */
function networkColor(network: string) {
  switch (network) {
    case "Ethereum": return "bg-indigo-500"
    case "Solana": return "bg-purple-500"
    case "BSC": return "bg-yellow-500"
    case "Polygon": return "bg-violet-600"
    case "Avalanche": return "bg-red-500"
    case "Arbitrum": return "bg-sky-500"
    case "Bitcoin": return "bg-orange-500"
    default: return "bg-muted-foreground"
  }
}
