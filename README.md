# Fan Tokens

A React component library with a token-based design system. 45 accessible, themeable components built on Radix UI primitives and Tailwind CSS 4.

## Quick Start

```bash
npm install fan-tokens
```

### Import components

```tsx
import { Button, Card, Input } from "fan-tokens"
```

### Import design tokens (required for styling)

```css
/* In your global CSS */
@import "fan-tokens/tokens";
```

### Tree-shakeable deep imports

```tsx
import { Button } from "fan-tokens/button"
import { Card } from "fan-tokens/card"
```

## Requirements

- React 18 or 19
- Tailwind CSS 4.x with `@tailwindcss/postcss`

## Components

### Form Controls
Button, Input, Label, Textarea, Checkbox, Switch, RadioGroup, Select, Slider, Toggle, ToggleGroup, InputOTP, Form

### Layout
Card, Separator, AspectRatio, ScrollArea, Collapsible, Resizable, Sidebar, Calendar, Carousel

### Data Display
Badge, Avatar, Table, Skeleton, Progress

### Feedback
Alert, Tooltip, Toast

### Overlays
Dialog, AlertDialog, Sheet, Popover, HoverCard, Drawer

### Menus
DropdownMenu, ContextMenu, Menubar

### Navigation
Accordion, Tabs, Breadcrumb, Pagination, NavigationMenu, Command

## Design Tokens

The library ships CSS custom properties for colors (light/dark), typography, spacing, border radius, shadows, transitions, and component-level tokens.

```css
@import "fan-tokens/tokens";            /* all tokens */
@import "fan-tokens/tokens/colors";     /* just colors */
@import "fan-tokens/tokens/typography"; /* just typography */
```

## Development

```bash
pnpm install
pnpm dev          # start docs site
pnpm build        # build library
pnpm test         # run tests
```

## License

MIT
