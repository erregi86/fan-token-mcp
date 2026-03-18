import{t as e}from"./jsx-runtime-C9onxGo1.js";import"./react-DdA8jN9n.js";import{n as t,r as n,t as r}from"./avatar-bHA9EfLW.js";var i=e(),a={title:`Components/Data Display/Avatar`,component:r,tags:[`autodocs`]},o={render:()=>(0,i.jsxs)(r,{children:[(0,i.jsx)(n,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),(0,i.jsx)(t,{children:`CN`})]})},s={render:()=>(0,i.jsx)(r,{children:(0,i.jsx)(t,{children:`JD`})})},c={name:`Avatar Group`,render:()=>(0,i.jsx)(`div`,{className:`flex -space-x-3`,children:[`AB`,`CD`,`EF`,`GH`].map(e=>(0,i.jsx)(r,{className:`border-2 border-background`,children:(0,i.jsx)(t,{children:e})},e))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Avatar Group",
  render: () => <div className="flex -space-x-3">
      {["AB", "CD", "EF", "GH"].map(initials => <Avatar key={initials} className="border-2 border-background">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>)}
    </div>
}`,...c.parameters?.docs?.source}}};var l=[`Playground`,`Fallback`,`Group`];export{s as Fallback,c as Group,o as Playground,l as __namedExportsOrder,a as default};