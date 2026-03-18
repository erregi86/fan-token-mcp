import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./utils-D-KFxwDU.js";import{t as n}from"./dist-StWV0KML.js";var r=e(),i=n(`inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-transparent`,outline:`border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground`},size:{default:`h-9 px-2 min-w-9`,sm:`h-8 px-1.5 min-w-8`,lg:`h-10 px-2.5 min-w-10`}},defaultVariants:{variant:`default`,size:`default`}});function a({className:e,variant:n,size:a,pressed:o=!1,onPressedChange:s,...c}){return(0,r.jsx)(`button`,{"data-slot":`toggle`,"data-state":o?`on`:`off`,"aria-pressed":o,className:t(i({variant:n,size:a}),o&&`bg-accent text-accent-foreground`,e),onClick:()=>s?.(!o),...c})}a.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{pressed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onPressedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pressed: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`pressed`}],return:{name:`void`}}},description:``}},composes:[`VariantProps`]};var o={title:`Components/Data Input/Toggle`,component:a,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`outline`]},size:{control:`select`,options:[`default`,`sm`,`lg`]},disabled:{control:`boolean`}}},s={args:{children:`B`,variant:`default`}},c={args:{children:`I`,variant:`outline`}},l={args:{children:`U`,disabled:!0}},u={name:`With Text`,args:{children:`Toggle me`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "B",
    variant: "default"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "I",
    variant: "outline"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "U",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With Text",
  args: {
    children: "Toggle me"
  }
}`,...u.parameters?.docs?.source}}};var d=[`Playground`,`Outline`,`Disabled`,`WithText`];export{l as Disabled,c as Outline,s as Playground,u as WithText,d as __namedExportsOrder,o as default};