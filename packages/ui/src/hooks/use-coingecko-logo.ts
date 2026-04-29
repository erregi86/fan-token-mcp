import { useState, useEffect } from "react"

interface CoinGeckoData {
  image?: {
    thumb?: string
    small?: string
    large?: string
  }
}

const COINGECKO_API = "https://api.coingecko.com/api/v3"
const LOGO_CACHE = new Map<string, string>()

export function useCoinGeckoLogo(coinId: string, size: "thumb" | "small" | "large" = "small") {
  const [logo, setLogo] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!coinId) return

    // Check cache first
    const cacheKey = `${coinId}-${size}`
    if (LOGO_CACHE.has(cacheKey)) {
      setLogo(LOGO_CACHE.get(cacheKey) || null)
      return
    }

    const fetchLogo = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`${COINGECKO_API}/coins/${coinId}`)
        if (!response.ok) throw new Error("Failed to fetch logo")

        const data: CoinGeckoData = await response.json()
        const logoUrl = data.image?.[size] || data.image?.small || null

        if (logoUrl) {
          LOGO_CACHE.set(cacheKey, logoUrl)
          setLogo(logoUrl)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchLogo()
  }, [coinId, size])

  return { logo, loading, error }
}
