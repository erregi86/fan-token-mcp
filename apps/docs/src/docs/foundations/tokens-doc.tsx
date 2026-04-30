import { cn } from "fan-tokens/utils"
import {
  ComponentPage,
  DemoSection,
} from "../docs-layout"

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
    { name: "dark-neutral-0", hex: "#0C0C0C" },
    { name: "dark-neutral-10", hex: "#181818" },
    { name: "dark-neutral-20", hex: "#242424" },
    { name: "dark-neutral-30", hex: "#2F2F2F" },
    { name: "dark-neutral-40", hex: "#3B3B3B" },
    { name: "dark-neutral-50", hex: "#464646" },
    { name: "dark-neutral-60", hex: "#525252" },
    { name: "dark-neutral-70", hex: "#5D5D5D" },
    { name: "dark-neutral-80", hex: "#696969" },
    { name: "dark-neutral-90", hex: "#747474" },
    { name: "dark-neutral-100", hex: "#808080" },
  ]

  const lightNeutral = [
    { name: "light-neutral-0", hex: "#FFFFFF" },
    { name: "light-neutral-10", hex: "#F3F3F3" },
    { name: "light-neutral-20", hex: "#E8E8E8" },
    { name: "light-neutral-30", hex: "#DCDCDC" },
    { name: "light-neutral-40", hex: "#D1D1D1" },
    { name: "light-neutral-50", hex: "#C5C5C5" },
    { name: "light-neutral-60", hex: "#BABABA" },
    { name: "light-neutral-70", hex: "#AEAEAE" },
    { name: "light-neutral-80", hex: "#A3A3A3" },
    { name: "light-neutral-90", hex: "#979797" },
    { name: "light-neutral-100", hex: "#8B8B8B" },
  ]

  const blue = [
    { name: "blue-0", hex: "#E5F1FE" },
    { name: "blue-10", hex: "#B2D6FC" },
    { name: "blue-20", hex: "#80BAF9" },
    { name: "blue-30", hex: "#4D9FF7" },
    { name: "blue-40", hex: "#1A84F5" },
    { name: "blue-50", hex: "#0076F4" },
    { name: "blue-60", hex: "#026DDE" },
    { name: "blue-70", hex: "#075AB2" },
    { name: "blue-80", hex: "#0C4786" },
    { name: "blue-90", hex: "#11345A" },
    { name: "blue-100", hex: "#16212E" },
  ]

  const greenBranding = [
    { name: "green-apple-0", hex: "#FAFDE5" },
    { name: "green-apple-10", hex: "#F1F9B2" },
    { name: "green-apple-20", hex: "#E8F580" },
    { name: "green-apple-30", hex: "#DFF24D" },
    { name: "green-apple-40", hex: "#D6EE1A" },
    { name: "green-apple-50", hex: "#D1EC00" },
    { name: "green-apple-60", hex: "#BED702" },
    { name: "green-apple-70", hex: "#99AC07" },
    { name: "green-apple-80", hex: "#75820C" },
    { name: "green-apple-90", hex: "#505811" },
    { name: "green-apple-100", hex: "#2B2D16" },
  ]

  const green = [
    { name: "green-0", hex: "#E5F3E5" },
    { name: "green-10", hex: "#B2DCB2" },
    { name: "green-20", hex: "#80C580" },
    { name: "green-30", hex: "#4DAD4D" },
    { name: "green-40", hex: "#4DAD4D" },
    { name: "green-50", hex: "#008A00" },
    { name: "green-60", hex: "#027F02" },
    { name: "green-70", hex: "#076807" },
    { name: "green-80", hex: "#0C510C" },
    { name: "green-90", hex: "#113A11" },
    { name: "green-100", hex: "#162316" },
  ]

  const red = [
    { name: "red-0", hex: "#FDE6E7" },
    { name: "red-10", hex: "#F8B3B8" },
    { name: "red-20", hex: "#F38189" },
    { name: "red-30", hex: "#EE4F5B" },
    { name: "red-40", hex: "#E91C2C" },
    { name: "red-50", hex: "#E70314" },
    { name: "red-60", hex: "#DD2200" },
    { name: "red-70", hex: "#A90915" },
    { name: "red-80", hex: "#800E16" },
    { name: "red-90", hex: "#561217" },
    { name: "red-100", hex: "#2D1618" },
  ]

  const orange = [
    { name: "orange-0", hex: "#FFF3E5" },
    { name: "orange-10", hex: "#FFDCB2" },
    { name: "orange-20", hex: "#FFC580" },
    { name: "orange-30", hex: "#FFAD4D" },
    { name: "orange-40", hex: "#FF961A" },
    { name: "orange-50", hex: "#FF8A00" },
    { name: "orange-60", hex: "#E77D02" },
    { name: "orange-70", hex: "#B66207" },
    { name: "orange-80", hex: "#85480C" },
    { name: "orange-90", hex: "#542D11" },
    { name: "orange-100", hex: "#231216" },
  ]

  const darkBlue = [
    { name: "dark-blue-0", hex: "#020817" },
    { name: "dark-blue-10", hex: "#0F1423" },
    { name: "dark-blue-20", hex: "#1B212E" },
    { name: "dark-blue-30", hex: "#282D3A" },
    { name: "dark-blue-40", hex: "#353945" },
    { name: "dark-blue-50", hex: "#414651" },
    { name: "dark-blue-60", hex: "#4E525D" },
    { name: "dark-blue-70", hex: "#5B5E68" },
    { name: "dark-blue-80", hex: "#676B74" },
    { name: "dark-blue-90", hex: "#80838B" },
    { name: "dark-blue-100", hex: "#9A9CA2" },
  ]

  const grey = [
    { name: "grey-50", hex: "#EDF2F7" },
    { name: "grey-60", hex: "#E2E8F0" },
  ]

  const renderColorGrid = (palette: typeof blue) => (
    <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
      {palette.map((c) => (
        <div key={c.hex + c.name} className="overflow-hidden rounded-lg border border-border">
          <div className="flex h-16 items-center justify-center" style={{ backgroundColor: c.hex }}>
            <span className="sr-only">{c.name}</span>
          </div>
          <div className="bg-background px-2 py-1 text-xs text-muted-foreground font-mono text-center">{c.name}</div>
        </div>
      ))}
    </div>
  )

  return (
    <ComponentPage
      name="Design Tokens"
      description="Color tokens, palettes, and semantic role mappings."
    >
      <DemoSection title="Core Colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {colors.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-lg border border-border">
              <div className={cn("flex h-20 items-center justify-center", c.var)}>
                <span className={cn("text-xs font-medium", c.fg)}>{c.name}</span>
              </div>
              <div className="bg-background px-3 py-2 text-xs text-muted-foreground font-mono">{c.var.replace("bg-", "")}</div>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Status Colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {status.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-lg border border-border">
              <div className={cn("flex h-20 items-center justify-center", c.bg)}>
                <span className={cn("text-xs font-medium", c.fg)}>{c.name}</span>
              </div>
              <div className="bg-background px-3 py-2 text-xs text-muted-foreground font-mono">{c.bg.replace("bg-", "")}</div>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Dark Neutral">
        {renderColorGrid(darkNeutral)}
      </DemoSection>

      <DemoSection title="Light Neutral">
        {renderColorGrid(lightNeutral)}
      </DemoSection>

      <DemoSection title="Dark Blue">
        {renderColorGrid(darkBlue)}
      </DemoSection>

      <DemoSection title="Blue">
        {renderColorGrid(blue)}
      </DemoSection>

      <DemoSection title="Green Apple">
        {renderColorGrid(greenBranding)}
      </DemoSection>

      <DemoSection title="Green">
        {renderColorGrid(green)}
      </DemoSection>

      <DemoSection title="Red">
        {renderColorGrid(red)}
      </DemoSection>

      <DemoSection title="Orange">
        {renderColorGrid(orange)}
      </DemoSection>

      <DemoSection title="Grey">
        {renderColorGrid(grey)}
      </DemoSection>

      <DemoSection title="Border & Ring">
        <div className="flex gap-4">
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
      </DemoSection>
    </ComponentPage>
  )
}
