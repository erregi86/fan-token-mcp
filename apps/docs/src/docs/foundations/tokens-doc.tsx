import { cn } from "fan-tokens/utils"

export function TokensDoc() {
  const colors = [
    { name: "Primary", var: "bg-primary", fg: "text-primary-foreground" },
    { name: "Secondary", var: "bg-secondary", fg: "text-secondary-foreground" },
    { name: "Accent", var: "bg-accent", fg: "text-accent-foreground" },
    { name: "Destructive", var: "bg-destructive", fg: "text-destructive-foreground" },
    { name: "Muted", var: "bg-muted", fg: "text-muted-foreground" },
    { name: "Background", var: "bg-background", fg: "text-foreground" },
    { name: "Card", var: "bg-card", fg: "text-card-foreground" },
    { name: "Popover", var: "bg-popover", fg: "text-popover-foreground" },
  ]

  const status = [
    { name: "Success", bg: "bg-success", fg: "text-success-foreground" },
    { name: "Warning", bg: "bg-warning", fg: "text-warning-foreground" },
    { name: "Info", bg: "bg-info", fg: "text-info-foreground" },
    { name: "Pending", bg: "bg-pending", fg: "text-pending-foreground" },
  ]

  const darkNeutral = [
    { name: "#0C0C0C", hex: "#0C0C0C" },
    { name: "#181818", hex: "#181818" },
    { name: "#242424", hex: "#242424" },
    { name: "#2F2F2F", hex: "#2F2F2F" },
    { name: "#3B3B3B", hex: "#3B3B3B" },
    { name: "#464646", hex: "#464646" },
    { name: "#525252", hex: "#525252" },
    { name: "#5D5D5D", hex: "#5D5D5D" },
    { name: "#696969", hex: "#696969" },
    { name: "#747474", hex: "#747474" },
    { name: "#808080", hex: "#808080" },
  ]

  const lightNeutral = [
    { name: "#8B8B8B", hex: "#8B8B8B" },
    { name: "#979797", hex: "#979797" },
    { name: "#A3A3A3", hex: "#A3A3A3" },
    { name: "#AEAEAE", hex: "#AEAEAE" },
    { name: "#BABABA", hex: "#BABABA" },
    { name: "#C5C5C5", hex: "#C5C5C5" },
    { name: "#D1D1D1", hex: "#D1D1D1" },
    { name: "#DCDCDC", hex: "#DCDCDC" },
    { name: "#E8E8E8", hex: "#E8E8E8" },
    { name: "#F3F3F3", hex: "#F3F3F3" },
    { name: "#FFFFFF", hex: "#FFFFFF" },
  ]

  const blue = [
    { name: "#16212E", hex: "#16212E" },
    { name: "#11345A", hex: "#11345A" },
    { name: "#0C4786", hex: "#0C4786" },
    { name: "#075AB2", hex: "#075AB2" },
    { name: "#026DDE", hex: "#026DDE" },
    { name: "#0076F4", hex: "#0076F4" },
    { name: "#1A84F5", hex: "#1A84F5" },
    { name: "#4D9FF7", hex: "#4D9FF7" },
    { name: "#80BAF9", hex: "#80BAF9" },
    { name: "#B2D6FC", hex: "#B2D6FC" },
    { name: "#E5F1FE", hex: "#E5F1FE" },
  ]

  const greenBranding = [
    { name: "#2B2D16", hex: "#2B2D16" },
    { name: "#505811", hex: "#505811" },
    { name: "#75820C", hex: "#75820C" },
    { name: "#99AC07", hex: "#99AC07" },
    { name: "#BED702", hex: "#BED702" },
    { name: "#D1EC00", hex: "#D1EC00" },
    { name: "#D6EE1A", hex: "#D6EE1A" },
    { name: "#DFF24D", hex: "#DFF24D" },
    { name: "#E8F580", hex: "#E8F580" },
    { name: "#F1F9B2", hex: "#F1F9B2" },
    { name: "#FAFDE5", hex: "#FAFDE5" },
  ]

  const green = [
    { name: "#162316", hex: "#162316" },
    { name: "#113A11", hex: "#113A11" },
    { name: "#0C510C", hex: "#0C510C" },
    { name: "#076807", hex: "#076807" },
    { name: "#027F02", hex: "#027F02" },
    { name: "#008100", hex: "#008100" },
    { name: "#1A961A", hex: "#1A961A" },
    { name: "#4DAD4D", hex: "#4DAD4D" },
    { name: "#80C580", hex: "#80C580" },
    { name: "#B2DCB2", hex: "#B2DCB2" },
    { name: "#E5F3E5", hex: "#E5F3E5" },
  ]

  const red = [
    { name: "#2D1618", hex: "#2D1618" },
    { name: "#561217", hex: "#561217" },
    { name: "#800E16", hex: "#800E16" },
    { name: "#A90915", hex: "#A90915" },
    { name: "#D20514", hex: "#D20514" },
    { name: "#E70314", hex: "#E70314" },
    { name: "#E91C2C", hex: "#E91C2C" },
    { name: "#EE4F5B", hex: "#EE4F5B" },
    { name: "#F38189", hex: "#F38189" },
    { name: "#F8B3B8", hex: "#F8B3B8" },
    { name: "#FDE6E7", hex: "#FDE6E7" },
  ]

  const orange = [
    { name: "#FFF3E5", hex: "#FFF3E5" },
    { name: "#FFDCB2", hex: "#FFDCB2" },
    { name: "#FFC580", hex: "#FFC580" },
    { name: "#FFAD4D", hex: "#FFAD4D" },
    { name: "#FF961A", hex: "#FF961A" },
    { name: "#FF8A00", hex: "#FF8A00" },
    { name: "#E77D02", hex: "#E77D02" },
    { name: "#B66207", hex: "#B66207" },
    { name: "#85480C", hex: "#85480C" },
    { name: "#542D11", hex: "#542D11" },
    { name: "#231216", hex: "#231216" },
  ]

  const renderColorGrid = (palette: typeof blue) => (
    <div className="mt-4 grid grid-cols-6 gap-3 sm:grid-cols-11">
      {palette.map((c) => (
        <div key={c.hex} className="overflow-hidden rounded-lg border border-border">
          <div className="flex h-16 items-center justify-center" style={{ backgroundColor: c.hex }}>
            <span className="sr-only">{c.name}</span>
          </div>
          <div className="bg-card px-2 py-1.5 text-xs text-muted-foreground font-mono">{c.name}</div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
        <p className="mt-2 text-muted-foreground">Your brand colors, mapped to semantic roles.</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Core Colors</h2>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {colors.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-lg border border-border">
              <div className={cn("flex h-20 items-center justify-center", c.var)}>
                <span className={cn("text-xs font-medium", c.fg)}>{c.name}</span>
              </div>
              <div className="bg-card px-3 py-2 text-xs text-muted-foreground font-mono">{c.var.replace("bg-", "")}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Status Colors</h2>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {status.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-lg border border-border">
              <div className={cn("flex h-20 items-center justify-center", c.bg)}>
                <span className={cn("text-xs font-medium", c.fg)}>{c.name}</span>
              </div>
              <div className="bg-card px-3 py-2 text-xs text-muted-foreground font-mono">{c.bg.replace("bg-", "")}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Color Palettes</h2>

        <h3 className="mt-6 text-lg font-semibold text-foreground">Dark Neutral</h3>
        {renderColorGrid(darkNeutral)}

        <h3 className="mt-6 text-lg font-semibold text-foreground">Light Neutral</h3>
        {renderColorGrid(lightNeutral)}

        <h3 className="mt-6 text-lg font-semibold text-foreground">Blue</h3>
        {renderColorGrid(blue)}

        <h3 className="mt-6 text-lg font-semibold text-foreground">Green Branding</h3>
        {renderColorGrid(greenBranding)}

        <h3 className="mt-6 text-lg font-semibold text-foreground">Green</h3>
        {renderColorGrid(green)}

        <h3 className="mt-6 text-lg font-semibold text-foreground">Red</h3>
        {renderColorGrid(red)}

        <h3 className="mt-6 text-lg font-semibold text-foreground">Orange</h3>
        {renderColorGrid(orange)}
      </div>

      <div>
        <h2 className="text-xl font-semibold">Border & Ring</h2>
        <div className="mt-4 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-md border-2 border-border" />
            <span className="text-sm text-muted-foreground">border</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-md border-2 border-input" />
            <span className="text-sm text-muted-foreground">input</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-md ring-2 ring-ring" />
            <span className="text-sm text-muted-foreground">ring</span>
          </div>
        </div>
      </div>
    </div>
  )
}
