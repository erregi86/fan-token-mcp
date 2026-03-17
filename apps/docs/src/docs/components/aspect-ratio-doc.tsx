import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts } from "../docs-layout"
import { AspectRatio } from "fan-tokens"

export function AspectRatioDoc() {
  return (
    <ComponentPage name="Aspect Ratio" description="Displays content within a desired ratio. Use for images, videos, and other media that need consistent proportions.">
      <UsageGuidelines
        guidelines={[
          { icon: "💡", text: "Use for images, videos, and maps that need a fixed aspect ratio regardless of container width." },
          { icon: "💡", text: "Prevents layout shift by reserving the correct amount of vertical space before media loads." },
          { icon: "⚠️", text: "Not intended for text-only content -- use standard layout utilities instead." },
        ]}
      />

      <BreakpointInfo
        mobile="Use 1:1 or 4:3 ratios for thumbnails and compact media in narrow viewports."
        desktop="Use 16:9 for hero images, video embeds, and wide banner content."
      />

      <DemoSection title="16:9 (Widescreen)">
        <div className="max-w-md">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">16:9</p>
                <p className="text-xs text-muted-foreground/70">Videos, hero images</p>
              </div>
            </div>
          </AspectRatio>
        </div>
      </DemoSection>

      <DemoSection title="1:1 (Square)">
        <div className="max-w-[200px]">
          <AspectRatio ratio={1}>
            <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">1:1</p>
                <p className="text-xs text-muted-foreground/70">Avatars, thumbnails</p>
              </div>
            </div>
          </AspectRatio>
        </div>
      </DemoSection>

      <DemoSection title="4:3 (Classic)">
        <div className="max-w-sm">
          <AspectRatio ratio={4 / 3}>
            <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">4:3</p>
                <p className="text-xs text-muted-foreground/70">Photos, maps</p>
              </div>
            </div>
          </AspectRatio>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Use for responsive media containers like images, videos, and map embeds.",
          "Pair with object-cover or object-contain on child images for proper scaling.",
          "Choose ratios appropriate to the content type (16:9 for video, 1:1 for avatars).",
        ]}
        donts={[
          "Use for text content -- aspect ratio constraints can clip or distort text.",
          "Apply to elements that already have intrinsic dimensions (e.g., fixed-size icons).",
          "Nest multiple AspectRatio components unnecessarily.",
        ]}
      />

      <CodeBlock>{`{/* 16:9 video container */}
<AspectRatio ratio={16 / 9}>
  <img src="..." className="h-full w-full rounded-md object-cover" />
</AspectRatio>

{/* 1:1 avatar/thumbnail */}
<AspectRatio ratio={1}>
  <img src="..." className="h-full w-full rounded-full object-cover" />
</AspectRatio>

{/* 4:3 photo */}
<AspectRatio ratio={4 / 3}>
  <img src="..." className="h-full w-full rounded-md object-cover" />
</AspectRatio>`}</CodeBlock>
    </ComponentPage>
  )
}
