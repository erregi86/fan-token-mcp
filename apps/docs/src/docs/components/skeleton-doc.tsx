import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  UsageGuidelines,
  BreakpointInfo,
  DosAndDonts,
  TokensReference,
} from "../docs-layout"
import { Skeleton } from "fan-tokens"

export function SkeletonDoc() {
  return (
    <ComponentPage
      name="Skeleton"
      description="Used to show a placeholder while content is loading. Provides a shimmer effect that mirrors the shape of incoming content."
    >
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use as loading placeholders that match the shape of the content they replace." },
          { icon: "✅", text: "Use for initial page loads and data fetching states." },
          { icon: "💡", text: "Match skeleton dimensions to the actual content for a smooth transition." },
          { icon: "⚠️", text: "Avoid showing skeletons for more than a few seconds -- consider error states for long waits." },
        ]}
      />

      <BreakpointInfo
        mobile="Use simpler skeleton shapes -- fewer lines and smaller placeholders to match the mobile layout."
        desktop="Match the actual content layout closely, including multi-column grids and sidebar placeholders."
      />

      <DemoSection title="Text Lines">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
      </DemoSection>

      <DemoSection title="Card Skeleton">
        <div className="flex flex-col gap-3 max-w-[300px]">
          <Skeleton className="h-[140px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Avatar + Text Skeleton">
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[180px]" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Match the shape of the real content (rounded for avatars, rectangular for text).",
          "Use for initial data loading and page hydration.",
          "Combine multiple skeletons to represent complex layouts.",
          "Transition smoothly from skeleton to loaded content.",
        ]}
        donts={[
          "Use for action feedback -- use a spinner or progress bar instead.",
          "Show skeletons for too long without a fallback or error state.",
          "Use uniform shapes that don't resemble the actual content.",
          "Animate skeletons in a distracting or jarring way.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "--skeleton-radius", value: "var(--radius)", description: "Border radius of skeleton elements." },
          { name: "--skeleton-bg", value: "var(--muted)", description: "Background color with shimmer animation." },
        ]}
      />

      <CodeBlock>{`import { Skeleton } from "fan-tokens"

{/* Text placeholder */}
<Skeleton className="h-4 w-[200px]" />

{/* Card placeholder */}
<div className="flex flex-col gap-3">
  <Skeleton className="h-[140px] w-full rounded-xl" />
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>

{/* Avatar + text placeholder */}
<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[180px]" />
    <Skeleton className="h-4 w-[120px]" />
  </div>
</div>`}</CodeBlock>
    </ComponentPage>
  )
}
