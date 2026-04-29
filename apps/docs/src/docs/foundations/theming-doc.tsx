import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "fan-tokens"
import {
  ComponentPage,
  DemoSection,
  CodeBlock,
  TokensReference,
} from "../docs-layout"

export function ThemingDoc() {
  return (
    <ComponentPage
      name="Theming"
      description="The design system uses CSS custom properties (tokens) for theming. All colors, spacing, typography, and effects can be customized without touching component code."
    >
      <DemoSection title="Design Tokens Architecture">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Primitive Tokens</CardTitle>
              <CardDescription>Base colors and values</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Raw hex values like <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">--dark-neutral-0</code>, <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">--blue-50</code>. These are the foundation of the color palette.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Semantic Tokens</CardTitle>
              <CardDescription>Purpose-driven variables</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Named tokens like <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">--primary</code>, <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">--destructive</code>. They map to primitives and adapt to light/dark mode.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Component Tokens</CardTitle>
              <CardDescription>Component-specific values</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Tokens like <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">--button-padding</code>, <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">--input-height</code>. They build on semantic tokens for consistency.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Foundation Tokens</CardTitle>
              <CardDescription>Global system values</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Typography, spacing, shadows, radii, and transitions. Shared across all components for a cohesive experience.
            </CardContent>
          </Card>
        </div>
      </DemoSection>

      <DemoSection title="Color System">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Semantic Colors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary border border-border"></div>
                <div>
                  <p className="font-medium">Primary</p>
                  <p className="text-xs text-muted-foreground">Main brand color</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary border border-border"></div>
                <div>
                  <p className="font-medium">Secondary</p>
                  <p className="text-xs text-muted-foreground">Supporting actions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent border border-border"></div>
                <div>
                  <p className="font-medium">Accent</p>
                  <p className="text-xs text-muted-foreground">Highlights & emphasis</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-destructive border border-border"></div>
                <div>
                  <p className="font-medium">Destructive</p>
                  <p className="text-xs text-muted-foreground">Errors & dangerous actions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-success border border-border"></div>
                <div>
                  <p className="font-medium">Success</p>
                  <p className="text-xs text-muted-foreground">Positive outcomes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-warning border border-border"></div>
                <div>
                  <p className="font-medium">Warning</p>
                  <p className="text-xs text-muted-foreground">Caution & alerts</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-muted border border-border"></div>
                <div>
                  <p className="font-medium">Muted</p>
                  <p className="text-xs text-muted-foreground">Inactive & subtle</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-background border border-border"></div>
                <div>
                  <p className="font-medium">Background</p>
                  <p className="text-xs text-muted-foreground">Page background</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Extended Semantic Colors</h3>
            <p className="text-sm text-muted-foreground mb-4">Status and feedback colors used for specific user states:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">Info</p>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 rounded bg-info border border-border"></div>
                  <div className="flex-1 h-8 rounded bg-info-subtle border border-border"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Pending</p>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 rounded bg-pending border border-border"></div>
                  <div className="flex-1 h-8 rounded bg-pending-subtle border border-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Token File Structure">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Tokens are organized in CSS files under <code className="font-mono bg-muted px-2 py-1 rounded text-xs">packages/ui/src/tokens/</code>:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="font-mono text-sm font-medium text-primary min-w-fit">colors.css</span>
              <span className="text-sm text-muted-foreground">Semantic colors, primitives, and status colors</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-sm font-medium text-primary min-w-fit">typography.css</span>
              <span className="text-sm text-muted-foreground">Font families, sizes, weights, line heights, letter spacing</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-sm font-medium text-primary min-w-fit">spacing.css</span>
              <span className="text-sm text-muted-foreground">Padding, margin, and gap spacing values</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-sm font-medium text-primary min-w-fit">radii.css</span>
              <span className="text-sm text-muted-foreground">Border radius values for different shapes</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-sm font-medium text-primary min-w-fit">shadows.css</span>
              <span className="text-sm text-muted-foreground">Box shadows for elevation and depth</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-sm font-medium text-primary min-w-fit">transitions.css</span>
              <span className="text-sm text-muted-foreground">Duration and easing for animations</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-sm font-medium text-primary min-w-fit">components.css</span>
              <span className="text-sm text-muted-foreground">Component-specific tokens (button sizes, input heights, etc.)</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Customizing Tokens">
        <p className="text-sm text-muted-foreground mb-4">
          To customize tokens, override CSS variables in your stylesheet. Changes automatically apply to all components.
        </p>
        <CodeBlock>{`:root {
  /* Override semantic colors */
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --destructive: #ef4444;

  /* Override typography */
  --text-base: 1rem;
  --font-weight-medium: 500;

  /* Override spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;

  /* Override radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0f0f0f;
    --foreground: #ffffff;
    --primary: #60a5fa;
  }
}`}</CodeBlock>
      </DemoSection>

      <DemoSection title="Using Tokens in Components">
        <CodeBlock>{`import { Button } from "fan-tokens"

export default function CustomButton() {
  return (
    <Button
      className="bg-[var(--primary)] text-[var(--primary-foreground)]"
      style={{
        padding: "var(--button-padding)",
        borderRadius: "var(--radius-md)",
        transition: "var(--transition-normal)",
      }}
    >
      Click me
    </Button>
  )
}`}</CodeBlock>
      </DemoSection>

      <TokensReference
        tokens={[
          { name: "--background", value: "var(--light-neutral-0) / var(--dark-neutral-0)", description: "Main background color." },
          { name: "--foreground", value: "var(--dark-neutral-0) / var(--light-neutral-0)", description: "Main text color." },
          { name: "--primary", value: "var(--blue-50)", description: "Primary brand color." },
          { name: "--secondary", value: "var(--light-neutral-30)", description: "Secondary action color." },
          { name: "--accent", value: "var(--blue-40)", description: "Accent and highlight color." },
          { name: "--destructive", value: "var(--red-50)", description: "Destructive action color." },
          { name: "--success", value: "var(--green-50)", description: "Success status color." },
          { name: "--warning", value: "var(--orange-50)", description: "Warning status color." },
          { name: "--info", value: "var(--blue-50)", description: "Info status color." },
          { name: "--muted", value: "var(--light-neutral-10) / var(--dark-neutral-20)", description: "Muted background color." },
          { name: "--border", value: "var(--light-neutral-20) / var(--dark-neutral-30)", description: "Border color." },
          { name: "--input", value: "var(--light-neutral-30) / var(--dark-neutral-40)", description: "Input background color." },
          { name: "--ring", value: "var(--blue-50)", description: "Focus ring color." },
        ]}
      />
    </ComponentPage>
  )
}
