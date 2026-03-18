import{t as e}from"./jsx-runtime-C9onxGo1.js";import"./react-DdA8jN9n.js";import{n as t}from"./lib-V0CeCNBX.js";import"./react-dom-BBw7966o.js";import"./docs-tools-BNj8mLVz.js";import{a as n}from"./dist-DKNLz7aU.js";var r=e();function i(e){let i={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Getting Started/Installation`}),`
`,(0,r.jsx)(i.h1,{id:`installation`,children:`Installation`}),`
`,(0,r.jsx)(i.h2,{id:`install-the-package`,children:`Install the package`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-bash`,children:`# npm
npm install fan-tokens

# pnpm
pnpm add fan-tokens

# yarn
yarn add fan-tokens
`})}),`
`,(0,r.jsx)(i.h2,{id:`peer-dependencies`,children:`Peer Dependencies`}),`
`,(0,r.jsx)(i.p,{children:`Fan Tokens requires React 18 or 19:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-bash`,children:`npm install react react-dom
`})}),`
`,(0,r.jsx)(i.h2,{id:`setup-tailwind-css-4`,children:`Setup Tailwind CSS 4`}),`
`,(0,r.jsx)(i.p,{children:`Fan Tokens uses Tailwind CSS 4 with CSS custom property tokens. Add the token import and source directive to your CSS entry point:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-css`,children:`/* src/index.css */
@import "tailwindcss";
@import "fan-tokens/tokens";

/* Required: tell Tailwind to scan component source for class names */
@source "../../node_modules/fan-tokens/dist";

@custom-variant dark (&:is(.dark *));

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground font-sans antialiased;
  }
}
`})}),`
`,(0,r.jsxs)(i.blockquote,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:`Important:`}),` The `,(0,r.jsx)(i.code,{children:`@source`}),` directive is critical. Without it, Tailwind v4 won't generate CSS for classes used inside fan-tokens components.`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`import-components`,children:`Import Components`}),`
`,(0,r.jsx)(i.h3,{id:`named-imports-barrel`,children:`Named imports (barrel)`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { Button, Card, CardHeader, CardTitle } from "fan-tokens"
`})}),`
`,(0,r.jsx)(i.h3,{id:`sub-path-imports-tree-shaking`,children:`Sub-path imports (tree-shaking)`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { Button } from "fan-tokens/button"
import { Card, CardHeader, CardTitle } from "fan-tokens/card"
`})}),`
`,(0,r.jsx)(i.h2,{id:`utility-function`,children:`Utility Function`}),`
`,(0,r.jsxs)(i.p,{children:[`Fan Tokens exports a `,(0,r.jsx)(i.code,{children:`cn()`}),` utility for merging Tailwind classes:`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { cn } from "fan-tokens/lib/utils"

<div className={cn("p-4 rounded-lg", isActive && "bg-primary")} />
`})})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};