import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./utils-D-KFxwDU.js";var n=e();function r({className:e,value:r=0,max:i=100,...a}){let o=Math.min(Math.max(r/i*100,0),100);return(0,n.jsx)(`div`,{"data-slot":`progress`,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":r,className:t(`relative h-[var(--progress-height)] w-full overflow-hidden rounded-[var(--progress-radius)] bg-[var(--progress-bg)]`,e),...a,children:(0,n.jsx)(`div`,{"data-slot":`progress-indicator`,className:`h-full w-full flex-1 bg-[var(--progress-track-bg)] transition-all`,style:{transform:`translateX(-${100-o}%)`}})})}r.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}}}};var i={title:`Components/Data Display/Progress`,component:r,tags:[`autodocs`],argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}}}},a={args:{value:60},render:e=>(0,n.jsx)(`div`,{className:`w-[300px]`,children:(0,n.jsx)(r,{...e})})},o={render:()=>(0,n.jsx)(`div`,{className:`w-[300px]`,children:(0,n.jsx)(r,{value:0})})},s={render:()=>(0,n.jsx)(`div`,{className:`w-[300px]`,children:(0,n.jsx)(r,{value:100})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60
  },
  render: args => <div className="w-[300px]">
      <Progress {...args} />
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <Progress value={0} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <Progress value={100} />
    </div>
}`,...s.parameters?.docs?.source}}};var c=[`Playground`,`Empty`,`Full`];export{o as Empty,s as Full,a as Playground,c as __namedExportsOrder,i as default};