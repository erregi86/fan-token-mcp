import{t as e}from"./jsx-runtime-C9onxGo1.js";import"./react-DdA8jN9n.js";import{n as t}from"./lib-V0CeCNBX.js";import"./react-dom-BBw7966o.js";import"./docs-tools-BNj8mLVz.js";import{a as n}from"./dist-DKNLz7aU.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Getting Started/Theming`}),`
`,(0,r.jsx)(i.h1,{id:`theming`,children:`Theming`}),`
`,(0,r.jsxs)(i.p,{children:[`Fan Tokens uses `,(0,r.jsx)(i.strong,{children:`CSS custom properties`}),` as design tokens, making theming as simple as overriding variables.`]}),`
`,(0,r.jsx)(i.h2,{id:`token-categories`,children:`Token Categories`}),`
`,(0,r.jsx)(i.h3,{id:`colors`,children:`Colors`}),`
`,(0,r.jsx)(i.p,{children:`All colors are defined as HSL values and consumed via Tailwind utilities:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-css`,children:`:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0.026 264.436);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0.001 286.375);
  --destructive: oklch(0.577 0.245 27.325);
  --muted: oklch(0.97 0.001 286.375);
  --accent: oklch(0.97 0.001 286.375);
  --border: oklch(0.922 0.004 286.32);
  --ring: oklch(0.708 0.005 286.286);
}
`})}),`
`,(0,r.jsx)(i.h3,{id:`component-tokens`,children:`Component Tokens`}),`
`,(0,r.jsx)(i.p,{children:`Individual components have their own tokens for fine-grained control:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-css`,children:`:root {
  --button-height: 2.25rem;
  --button-padding-x: 1rem;
  --button-radius: var(--radius-md);
  --checkbox-size: 1rem;
  --input-height: 2.25rem;
  --card-radius: var(--radius-lg);
}
`})}),`
`,(0,r.jsx)(i.h3,{id:`radii-shadows-typography`,children:`Radii, Shadows, Typography`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-css`,children:`:root {
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
`})}),`
`,(0,r.jsx)(i.h2,{id:`dark-mode`,children:`Dark Mode`}),`
`,(0,r.jsxs)(i.p,{children:[`Add the `,(0,r.jsx)(i.code,{children:`.dark`}),` class to any parent element to activate dark mode tokens:`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-html`,children:`<html class="dark">
  <!-- Dark mode active for entire page -->
</html>
`})}),`
`,(0,r.jsx)(i.p,{children:`Or scope it to a section:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-html`,children:`<div class="dark">
  <!-- Only this section uses dark mode -->
</div>
`})}),`
`,(0,r.jsx)(i.h2,{id:`custom-theme-example`,children:`Custom Theme Example`}),`
`,(0,r.jsx)(i.p,{children:`Override tokens in your CSS to create a custom brand theme:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-css`,children:`@layer base {
  :root {
    --primary: oklch(0.6 0.25 30);        /* Brand orange */
    --primary-foreground: oklch(1 0 0);
    --radius-md: 1rem;                     /* Rounder corners */
    --button-height: 2.75rem;              /* Taller buttons */
  }
  .dark {
    --primary: oklch(0.7 0.2 30);
    --background: oklch(0.15 0.01 260);
  }
}
`})}),`
`,(0,r.jsx)(i.p,{children:`All components automatically pick up the new token values — no prop changes needed.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};