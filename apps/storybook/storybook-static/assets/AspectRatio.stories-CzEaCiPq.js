import{t as e}from"./jsx-runtime-C9onxGo1.js";import{t}from"./utils-D-KFxwDU.js";var n=e();function r({ratio:e=16/9,className:r,style:i,children:a,...o}){return(0,n.jsx)(`div`,{"data-slot":`aspect-ratio`,className:t(`relative w-full`,r),style:{...i,aspectRatio:`${e}`},...o,children:a})}r.__docgenInfo={description:``,methods:[],displayName:`AspectRatio`,props:{ratio:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`16 / 9`,computed:!1}}}};var i={title:`Components/Data Display/AspectRatio`,component:r,tags:[`autodocs`]},a={render:()=>(0,n.jsx)(`div`,{className:`w-[450px]`,children:(0,n.jsx)(r,{ratio:16/9,className:`bg-muted rounded-md overflow-hidden`,children:(0,n.jsx)(`img`,{src:`https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80`,alt:`Photo`,className:`h-full w-full object-cover`})})})},o={render:()=>(0,n.jsx)(`div`,{className:`w-[200px]`,children:(0,n.jsx)(r,{ratio:1,className:`bg-muted rounded-md flex items-center justify-center`,children:(0,n.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:`1:1`})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo" className="h-full w-full object-cover" />
      </AspectRatio>
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[200px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground text-sm">1:1</span>
      </AspectRatio>
    </div>
}`,...o.parameters?.docs?.source}}};var s=[`Playground`,`Square`];export{a as Playground,o as Square,s as __namedExportsOrder,i as default};