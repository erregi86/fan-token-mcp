import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  TokensReference,
} from "../docs-layout"

export function TypographyDoc() {
  return (
    <ComponentPage
      name="Typography"
      description="Typography system with font sizes, weights, and line heights. Built on semantic tokens for consistency across the design system."
    >
      <DemoSection title="Font Family">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Sans Serif (Poppins)</p>
            <p className="font-sans text-4xl font-semibold">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Monospace</p>
            <p className="font-mono text-lg bg-muted/50 p-3 rounded">const greeting = "Hello, World!";</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Font Sizes">
        <div className="space-y-6">
          <div className="border-b border-border pb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Extra Small (--text-xs: 0.75rem / 12px)</p>
            <p className="text-xs">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="border-b border-border pb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Small (--text-sm: 0.875rem / 14px)</p>
            <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="border-b border-border pb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Base (--text-base: 1rem / 16px)</p>
            <p className="text-base">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="border-b border-border pb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Large (--text-lg: 1.125rem / 18px)</p>
            <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="border-b border-border pb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Extra Large (--text-xl: 1.25rem / 20px)</p>
            <p className="text-xl">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="border-b border-border pb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">2XL (--text-2xl: 1.5rem / 24px)</p>
            <p className="text-2xl">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="border-b border-border pb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">3XL (--text-3xl: 1.875rem / 30px)</p>
            <p className="text-3xl">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">4XL (--text-4xl: 2.25rem / 36px)</p>
            <p className="text-4xl">The quick brown fox</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Font Weights">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Regular (--font-weight-normal: 400)</p>
            <p className="text-lg" style={{ fontWeight: 400 }}>The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Medium (--font-weight-medium: 500)</p>
            <p className="text-lg font-medium">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Semibold (--font-weight-semibold: 600)</p>
            <p className="text-lg font-semibold">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Line Heights">
        <div className="space-y-8">
          <div className="border-l-2 border-primary/30 pl-4">
            <p className="text-xs font-medium text-muted-foreground mb-3">Tight (--leading-tight: 1.25)</p>
            <p className="text-sm" style={{ lineHeight: 1.25 }}>
              The quick brown fox jumps over the lazy dog. It was a bright cold day in April, and the clocks were striking thirteen. It was a pleasure to burn. You don't know about me without you have read a book.
            </p>
          </div>
          <div className="border-l-2 border-primary/30 pl-4">
            <p className="text-xs font-medium text-muted-foreground mb-3">Normal (--leading-normal: 1.5)</p>
            <p className="text-sm leading-normal">
              The quick brown fox jumps over the lazy dog. It was a bright cold day in April, and the clocks were striking thirteen. It was a pleasure to burn. You don't know about me without you have read a book.
            </p>
          </div>
          <div className="border-l-2 border-primary/30 pl-4">
            <p className="text-xs font-medium text-muted-foreground mb-3">Relaxed (--leading-relaxed: 1.625)</p>
            <p className="text-sm leading-relaxed">
              The quick brown fox jumps over the lazy dog. It was a bright cold day in April, and the clocks were striking thirteen. It was a pleasure to burn. You don't know about me without you have read a book.
            </p>
          </div>
          <div className="border-l-2 border-primary/30 pl-4">
            <p className="text-xs font-medium text-muted-foreground mb-3">Loose (--leading-loose: 2)</p>
            <p className="text-sm leading-loose">
              The quick brown fox jumps over the lazy dog. It was a bright cold day in April, and the clocks were striking thirteen. It was a pleasure to burn. You don't know about me without you have read a book.
            </p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Letter Spacing">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Tighter (--tracking-tighter: -0.05em)</p>
            <p className="text-lg" style={{ letterSpacing: "-0.05em" }}>The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Tight (--tracking-tight: -0.025em)</p>
            <p className="text-lg" style={{ letterSpacing: "-0.025em" }}>The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Normal (--tracking-normal: 0em)</p>
            <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Wide (--tracking-wide: 0.025em)</p>
            <p className="text-lg" style={{ letterSpacing: "0.025em" }}>The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </DemoSection>

      <TokensReference
        tokens={[
          { name: "--font-sans", value: '"Poppins", ui-sans-serif, system-ui, sans-serif', description: "Primary sans-serif font family." },
          { name: "--font-mono", value: "ui-monospace, Cascadia Code, Consolas, monospace", description: "Monospace font for code and technical content." },
          { name: "--text-xs", value: "0.75rem (12px)", description: "Extra small font size." },
          { name: "--text-sm", value: "0.875rem (14px)", description: "Small font size." },
          { name: "--text-base", value: "1rem (16px)", description: "Base/default font size." },
          { name: "--text-lg", value: "1.125rem (18px)", description: "Large font size." },
          { name: "--text-xl", value: "1.25rem (20px)", description: "Extra large font size." },
          { name: "--text-2xl", value: "1.5rem (24px)", description: "2XL font size." },
          { name: "--text-3xl", value: "1.875rem (30px)", description: "3XL font size." },
          { name: "--text-4xl", value: "2.25rem (36px)", description: "4XL font size." },
          { name: "--font-weight-normal", value: "400", description: "Regular font weight." },
          { name: "--font-weight-medium", value: "500", description: "Medium font weight." },
          { name: "--font-weight-semibold", value: "600", description: "Semibold font weight." },
          { name: "--leading-none", value: "1", description: "No line height." },
          { name: "--leading-tight", value: "1.25", description: "Tight line height." },
          { name: "--leading-snug", value: "1.375", description: "Snug line height." },
          { name: "--leading-normal", value: "1.5", description: "Normal line height." },
          { name: "--leading-relaxed", value: "1.625", description: "Relaxed line height." },
          { name: "--leading-loose", value: "2", description: "Loose line height." },
          { name: "--tracking-tighter", value: "-0.05em", description: "Tighter letter spacing." },
          { name: "--tracking-tight", value: "-0.025em", description: "Tight letter spacing." },
          { name: "--tracking-normal", value: "0em", description: "Normal letter spacing." },
          { name: "--tracking-wide", value: "0.025em", description: "Wide letter spacing." },
        ]}
      />

      <CodeBlock>{`import { cn } from "fan-tokens/utils"

export default function TypographyExample() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <h1 className="text-4xl font-semibold">Main Heading</h1>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold">Subheading</h2>

      {/* Body Text */}
      <p className="text-base leading-normal">
        Body text with normal line height. Use for general content and paragraphs.
      </p>

      {/* Small Text */}
      <p className="text-sm text-muted-foreground">
        Small text for captions and hints.
      </p>

      {/* Code Text */}
      <code className="font-mono text-sm bg-muted p-2 rounded">
        const example = "monospace";
      </code>
    </div>
  )
}`}</CodeBlock>
    </ComponentPage>
  )
}
