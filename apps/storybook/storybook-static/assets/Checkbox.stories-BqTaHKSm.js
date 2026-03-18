import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./utils-D-KFxwDU.js";import{t as n}from"./label-4Kmerrob.js";var r=e();function i({className:e,checked:n,onCheckedChange:i,disabled:a,...o}){return(0,r.jsx)(`button`,{"data-slot":`checkbox`,role:`checkbox`,"aria-checked":n,"data-state":n?`checked`:`unchecked`,disabled:a,className:t(`peer size-[var(--checkbox-size)] shrink-0 rounded-[var(--checkbox-radius)] border border-[var(--checkbox-border-color)] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)] disabled:cursor-not-allowed disabled:opacity-50`,n&&`bg-[var(--checkbox-bg)] text-[var(--checkbox-fg)]`,e),onClick:()=>i?.(!n),...o,children:n&&(0,r.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`size-[var(--checkbox-size)]`,children:(0,r.jsx)(`path`,{d:`M20 6 9 17l-5-5`})})})}i.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{checked:{required:!1,tsType:{name:`boolean`},description:``},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``}},composes:[`Omit`]};var a={title:`Components/Data Input/Checkbox`,component:i,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},defaultChecked:{control:`boolean`}}},o={render:e=>(0,r.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,r.jsx)(i,{id:`terms`,...e}),(0,r.jsx)(n,{htmlFor:`terms`,children:`Accept terms and conditions`})]})},s={render:()=>(0,r.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,r.jsx)(i,{id:`checked`,defaultChecked:!0}),(0,r.jsx)(n,{htmlFor:`checked`,children:`Checked by default`})]})},c={render:()=>(0,r.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,r.jsx)(i,{id:`disabled`,disabled:!0}),(0,r.jsx)(n,{htmlFor:`disabled`,className:`opacity-50`,children:`Disabled`})]})},l={name:`Multiple Options`,render:()=>(0,r.jsx)(`div`,{className:`space-y-3`,children:[`Email notifications`,`SMS alerts`,`Push notifications`].map((e,t)=>(0,r.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,r.jsx)(i,{id:`opt-${t}`,defaultChecked:t===0}),(0,r.jsx)(n,{htmlFor:`opt-${t}`,children:e})]},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Multiple Options",
  render: () => <div className="space-y-3">
      {["Email notifications", "SMS alerts", "Push notifications"].map((label, i) => <div key={i} className="flex items-center space-x-2">
          <Checkbox id={\`opt-\${i}\`} defaultChecked={i === 0} />
          <Label htmlFor={\`opt-\${i}\`}>{label}</Label>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}};var u=[`Playground`,`Checked`,`Disabled`,`Multiple`];export{s as Checked,c as Disabled,l as Multiple,o as Playground,u as __namedExportsOrder,a as default};