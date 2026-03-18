import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./input-DSGUwuQ3.js";import{t as n}from"./label-4Kmerrob.js";var r=e(),i={title:`Components/Data Input/Input`,component:t,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`search`,`tel`,`url`]},placeholder:{control:`text`},disabled:{control:`boolean`}}},a={args:{placeholder:`Type something...`,type:`text`}},o={name:`With Label`,render:()=>(0,r.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,r.jsx)(n,{htmlFor:`email`,children:`Email`}),(0,r.jsx)(t,{id:`email`,type:`email`,placeholder:`you@example.com`})]})},s={args:{placeholder:`Disabled input`,disabled:!0}},c={args:{type:`password`,placeholder:`Enter password`}},l={render:()=>(0,r.jsxs)(`div`,{className:`grid w-full max-w-sm gap-1.5`,children:[(0,r.jsx)(n,{htmlFor:`file`,children:`Upload file`}),(0,r.jsx)(t,{id:`file`,type:`file`})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type something...",
    type: "text"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="file">Upload file</Label>
      <Input id="file" type="file" />
    </div>
}`,...l.parameters?.docs?.source}}};var u=[`Playground`,`WithLabel`,`Disabled`,`Password`,`File`];export{s as Disabled,l as File,c as Password,a as Playground,o as WithLabel,u as __namedExportsOrder,i as default};