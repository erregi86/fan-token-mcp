import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./utils-D-KFxwDU.js";var n=e();function r({className:e,...r}){return(0,n.jsx)(`div`,{"data-slot":`skeleton`,className:t(`animate-pulse rounded-[var(--skeleton-radius)] bg-[var(--skeleton-bg)]`,e),...r})}r.__docgenInfo={description:``,methods:[],displayName:`Skeleton`};var i={title:`Components/Data Display/Skeleton`,component:r,tags:[`autodocs`]},a={render:()=>(0,n.jsx)(r,{className:`h-4 w-[250px]`})},o={name:`Card Loading`,render:()=>(0,n.jsxs)(`div`,{className:`flex items-center space-x-4`,children:[(0,n.jsx)(r,{className:`h-12 w-12 rounded-full`}),(0,n.jsxs)(`div`,{className:`space-y-2`,children:[(0,n.jsx)(r,{className:`h-4 w-[250px]`}),(0,n.jsx)(r,{className:`h-4 w-[200px]`})]})]})},s={name:`List Loading`,render:()=>(0,n.jsx)(`div`,{className:`space-y-3`,children:Array.from({length:5}).map((e,t)=>(0,n.jsx)(r,{className:`h-4 w-full`},t))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-4 w-[250px]" />
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Card Loading",
  render: () => <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "List Loading",
  render: () => <div className="space-y-3">
      {Array.from({
      length: 5
    }).map((_, i) => <Skeleton key={i} className="h-4 w-full" />)}
    </div>
}`,...s.parameters?.docs?.source}}};var c=[`Playground`,`Card`,`List`];export{o as Card,s as List,a as Playground,c as __namedExportsOrder,i as default};