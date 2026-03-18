import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./utils-D-KFxwDU.js";import{t as n}from"./dist-StWV0KML.js";var r=e(),i=n(`inline-flex items-center border transition-colors focus:outline-none focus:ring-[length:var(--focus-ring-width)] focus:ring-[var(--focus-ring-color)] focus:ring-offset-[length:var(--focus-ring-offset)] rounded-[var(--badge-radius)] px-[var(--badge-padding-x)] py-[var(--badge-padding-y)] text-[length:var(--badge-font-size)] font-[number:var(--badge-font-weight)]`,{variants:{variant:{default:`border-transparent bg-primary text-primary-foreground`,secondary:`border-transparent bg-secondary text-secondary-foreground`,destructive:`border-transparent bg-destructive text-destructive-foreground`,outline:`text-foreground`}},defaultVariants:{variant:`default`}});function a({className:e,variant:n,...a}){return(0,r.jsx)(`div`,{"data-slot":`badge`,className:t(i({variant:n}),e),...a})}a.__docgenInfo={description:``,methods:[],displayName:`Badge`,composes:[`VariantProps`]};var o={title:`Components/Data Display/Badge`,component:a,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`destructive`,`outline`]}}},s={args:{children:`Badge`,variant:`default`}},c={args:{children:`Secondary`,variant:`secondary`}},l={args:{children:`Destructive`,variant:`destructive`}},u={args:{children:`Outline`,variant:`outline`}},d={name:`All Variants`,render:()=>(0,r.jsxs)(`div`,{className:`flex gap-2`,children:[(0,r.jsx)(a,{variant:`default`,children:`Default`}),(0,r.jsx)(a,{variant:`secondary`,children:`Secondary`}),(0,r.jsx)(a,{variant:`destructive`,children:`Destructive`}),(0,r.jsx)(a,{variant:`outline`,children:`Outline`})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...d.parameters?.docs?.source}}};var f=[`Playground`,`Secondary`,`Destructive`,`Outline`,`AllVariants`];export{d as AllVariants,l as Destructive,u as Outline,s as Playground,c as Secondary,f as __namedExportsOrder,o as default};