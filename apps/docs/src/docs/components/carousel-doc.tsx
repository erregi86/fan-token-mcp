import { ComponentPage, DemoSection, CodeBlock, UsageGuidelines, BreakpointInfo, DosAndDonts, TokensReference } from "../docs-layout"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "fan-tokens/carousel"
import { Card, CardContent } from "fan-tokens/card"

export function CarouselDoc() {
  const slides = [
    { title: "Feature One", description: "Build faster with components" },
    { title: "Feature Two", description: "Fully accessible by default" },
    { title: "Feature Three", description: "Dark mode out of the box" },
    { title: "Feature Four", description: "Responsive and mobile-first" },
    { title: "Feature Five", description: "Customizable design tokens" },
  ]

  return (
    <ComponentPage name="Carousel" description="A content slider with touch swipe support, keyboard navigation, and customizable previous/next controls.">
      <UsageGuidelines
        guidelines={[
          { icon: "✅", text: "Use for cycling through related content like testimonials, product images, or feature highlights." },
          { icon: "✅", text: "Supports touch swipe gestures on mobile and arrow key navigation on desktop." },
          { icon: "💡", text: "Always include visible previous/next controls -- do not rely solely on swipe gestures." },
          { icon: "⚠️", text: "Avoid placing critical content in carousels -- users often skip past slides." },
        ]}
      />

      <BreakpointInfo
        mobile="Show a single item per slide with swipe gesture support. Ensure touch targets for controls are at least 44px."
        desktop="Can display multiple items per slide. Use arrow navigation controls positioned outside the carousel content."
      />

      <DemoSection title="Basic Carousel with Items">
        <div className="mx-auto max-w-sm px-14">
          <Carousel>
            <CarouselContent>
              {slides.map((slide, i) => (
                <CarouselItem key={i}>
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center justify-center gap-2 p-6">
                      <span className="text-4xl font-semibold text-primary">{i + 1}</span>
                      <span className="text-sm font-medium">{slide.title}</span>
                      <span className="text-xs text-muted-foreground text-center">{slide.description}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DemoSection>

      <DosAndDonts
        dos={[
          "Add visible previous/next controls so users can navigate without swipe gestures.",
          "Show slide indicators (dots or numbers) so users know how many slides exist and which one is active.",
          "Keep the number of slides reasonable (3-7) to maintain user engagement.",
          "Ensure each slide has meaningful, self-contained content.",
        ]}
        donts={[
          "Auto-play carousels without a pause/stop mechanism -- this is an accessibility issue.",
          "Use carousels for critical content that every user must see.",
          "Mix unrelated content types across slides -- keep slides thematically consistent.",
          "Hide navigation controls behind hover states on touch devices.",
        ]}
      />

      <TokensReference
        tokens={[
          { name: "bg-card", value: "var(--card)", description: "Background for carousel slide cards." },
          { name: "border", value: "var(--border)", description: "Border around slide cards and controls." },
          { name: "bg-primary", value: "var(--primary)", description: "Active slide indicator color." },
          { name: "text-muted-foreground", value: "var(--muted-foreground)", description: "Inactive slide indicator and secondary text." },
        ]}
      />

      <CodeBlock>{`import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "fan-tokens/carousel"
import { Card, CardContent } from "fan-tokens/card"

<Carousel>
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{item.title}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

{/* Multi-item slides (show 3 at a time) */}
<Carousel opts={{ align: "start" }}>
  <CarouselContent className="-ml-4">
    {items.map((item, i) => (
      <CarouselItem key={i} className="pl-4 basis-1/3">
        <Card>{/* ... */}</Card>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>`}</CodeBlock>
    </ComponentPage>
  )
}
