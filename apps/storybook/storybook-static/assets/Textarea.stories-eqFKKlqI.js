import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./utils-D-KFxwDU.js";import{t as n}from"./label-4Kmerrob.js";var r=e();function i({className:e,...n}){return(0,r.jsx)(`textarea`,{"data-slot":`textarea`,className:t(`flex w-full min-h-[var(--textarea-min-height)]`,`rounded-[var(--textarea-radius)] border border-[var(--input-border-color)] bg-[var(--input-bg)]`,`px-[var(--textarea-padding-x)] py-[var(--textarea-padding-y)]`,`text-[length:var(--textarea-font-size)]`,`placeholder:text-[var(--input-placeholder-color)]`,`focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--input-focus-ring-color)]`,`disabled:cursor-not-allowed disabled:opacity-50`,e),...n})}i.__docgenInfo={description:``,methods:[],displayName:`Textarea`};var a={title:`Components/Data Input/Textarea`,component:i,tags:[`autodocs`],argTypes:{placeholder:{control:`text`},disabled:{control:`boolean`}}},o={args:{placeholder:`Type your message here...`}},s={name:`With Label`,render:()=>(0,r.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,r.jsx)(n,{htmlFor:`message`,children:`Your message`}),(0,r.jsx)(i,{id:`message`,placeholder:`Write something...`})]})},c={args:{placeholder:`Disabled`,disabled:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here..."
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Write something..." />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};var l=[`Playground`,`WithLabel`,`Disabled`];export{c as Disabled,o as Playground,s as WithLabel,l as __namedExportsOrder,a as default};