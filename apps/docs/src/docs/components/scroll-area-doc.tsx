import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { ScrollArea, ScrollBar, Separator } from "fan-tokens"

export function ScrollAreaDoc() {
  const tags = Array.from({ length: 50 }, (_, i) => `v1.${i}.0`)
  const artworks = [
    { title: "Starry Night", artist: "Van Gogh" },
    { title: "Mona Lisa", artist: "Da Vinci" },
    { title: "The Persistence of Memory", artist: "Dali" },
    { title: "Girl with a Pearl Earring", artist: "Vermeer" },
    { title: "The Great Wave", artist: "Hokusai" },
    { title: "Water Lilies", artist: "Monet" },
    { title: "The Scream", artist: "Munch" },
    { title: "Guernica", artist: "Picasso" },
  ]

  return (
    <ComponentPage name="Scroll Area" description="Augments native scroll functionality with custom styled scrollbars for consistent cross-browser appearance.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for custom scrollbars that match your design system across all browsers." },
          { icon: "✅", text: "Ideal for contained scrollable areas like lists, panels, and sidebars." },
          { icon: "💡", text: "Always set an explicit height or max-height on the scroll container." },
          { icon: "⚠️", text: "On touch devices, native scrolling often provides better UX with inertia and rubber-banding." },
        ]}
      />

      <BreakpointInfo
        mobile="Native scrolling is often better on mobile for performance and gesture support. Use ScrollArea sparingly."
        desktop="Custom scrollbars provide design consistency. Use for sidebars, lists, and panels where native scrollbars look inconsistent."
      />

      <DemoSection title="Vertical Scroll">
        <ScrollArea className="h-72 w-48 rounded-md border border-border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </DemoSection>

      <DemoSection title="Horizontal Scroll">
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border border-border">
          <div className="flex w-max space-x-4 p-4">
            {artworks.map((artwork) => (
              <figure key={artwork.title} className="shrink-0">
                <div className="flex h-24 w-36 items-center justify-center overflow-hidden rounded-md bg-muted/50">
                  <span className="text-xs text-muted-foreground">{artwork.title}</span>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{artwork.artist}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Set an explicit height or width constraint on the ScrollArea container.",
          "Use for long lists, sidebars, and panel content that overflows.",
          "Combine with Separator for visually distinct list items.",
        ]}
        donts={[
          "Nest scroll areas inside each other -- this creates confusing scroll behavior.",
          "Use when native browser scrolling works perfectly fine (e.g., full page scroll).",
          "Forget to set dimensions -- ScrollArea needs a bounded container to function.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--scrollbar-size", value: "8px", description: "Width of the scrollbar thumb track." },
          { name: "border", value: "var(--border)", description: "Border color for the scroll area container." },
          { name: "bg-muted", value: "var(--muted)", description: "Background for scrollbar track area." },
        ]}
      />

      <CodeBlock>{`import { ScrollArea, ScrollBar } from "fan-tokens"

{/* Vertical scroll */}
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    {items.map(item => (
      <div key={item} className="text-sm py-1">{item}</div>
    ))}
  </div>
</ScrollArea>

{/* Horizontal scroll */}
<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {items.map(item => (
      <div key={item} className="shrink-0 w-36">{item}</div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</CodeBlock>
    </ComponentPage>
  )
}
