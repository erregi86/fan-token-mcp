import{s as e}from"./iframe-D9gJDq8P.js";import{t}from"./jsx-runtime-C9onxGo1.js";import{t as n}from"./react-DdA8jN9n.js";import{t as r}from"./react-dom-BBw7966o.js";import{t as i}from"./utils-D-KFxwDU.js";import{t as a}from"./button-BjPNyhWG.js";import{t as o}from"./input-DSGUwuQ3.js";import{t as s}from"./label-4Kmerrob.js";var c=e(n(),1),l=e(r(),1),u=t(),d=(0,c.createContext)(null);function f(){let e=(0,c.useContext)(d);if(!e)throw Error(`Popover components must be used within <Popover>`);return e}function p({children:e,open:t,onOpenChange:n}){let[r,i]=(0,c.useState)(!1),a=(0,c.useRef)(null),o=t??r,s=(0,c.useCallback)(e=>{t===void 0&&i(e),n?.(e)},[t,n]);return(0,u.jsx)(d.Provider,{value:{open:o,setOpen:s,triggerRef:a},children:e})}function m({className:e,children:t,...n}){let{open:r,setOpen:i,triggerRef:a}=f();return(0,u.jsx)(`button`,{ref:a,"data-slot":`popover-trigger`,"data-state":r?`open`:`closed`,className:e,onClick:()=>i(!r),...n,children:t})}function h({className:e,align:t=`center`,sideOffset:n=4,children:r,...a}){let{open:o,setOpen:s,triggerRef:d}=f(),p=(0,c.useRef)(null),[m,h]=(0,c.useState)({top:0,left:0});return(0,c.useEffect)(()=>{if(!o)return;let e=d.current;if(e){let r=e.getBoundingClientRect();h({top:r.bottom+n+window.scrollY,left:t===`start`?r.left+window.scrollX:t===`end`?r.right+window.scrollX:r.left+r.width/2+window.scrollX})}let r=e=>{p.current&&!p.current.contains(e.target)&&d.current&&!d.current.contains(e.target)&&s(!1)},i=e=>{e.key===`Escape`&&s(!1)};return document.addEventListener(`mousedown`,r),document.addEventListener(`keydown`,i),()=>{document.removeEventListener(`mousedown`,r),document.removeEventListener(`keydown`,i)}},[o,s,d,t,n]),o?(0,l.createPortal)((0,u.jsx)(`div`,{ref:p,"data-slot":`popover-content`,"data-state":o?`open`:`closed`,style:{position:`absolute`,top:m.top,left:m.left,transform:t===`center`?`translateX(-50%)`:t===`end`?`translateX(-100%)`:void 0},className:i(`z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-fade-in`,e),...a,children:r}),document.body):null}p.__docgenInfo={description:``,methods:[],displayName:`Popover`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``}}},m.__docgenInfo={description:``,methods:[],displayName:`PopoverTrigger`};var g={title:`Components/Overlay/Popover`,component:p,tags:[`autodocs`]},_={render:()=>(0,u.jsxs)(p,{children:[(0,u.jsx)(m,{asChild:!0,children:(0,u.jsx)(a,{variant:`outline`,children:`Open Popover`})}),(0,u.jsx)(h,{className:`w-80`,children:(0,u.jsxs)(`div`,{className:`grid gap-4`,children:[(0,u.jsxs)(`div`,{className:`space-y-2`,children:[(0,u.jsx)(`h4`,{className:`font-medium leading-none`,children:`Dimensions`}),(0,u.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Set the dimensions for the layer.`})]}),(0,u.jsxs)(`div`,{className:`grid gap-2`,children:[(0,u.jsxs)(`div`,{className:`grid grid-cols-3 items-center gap-4`,children:[(0,u.jsx)(s,{htmlFor:`width`,children:`Width`}),(0,u.jsx)(o,{id:`width`,defaultValue:`100%`,className:`col-span-2 h-8`})]}),(0,u.jsxs)(`div`,{className:`grid grid-cols-3 items-center gap-4`,children:[(0,u.jsx)(s,{htmlFor:`height`,children:`Height`}),(0,u.jsx)(o,{id:`height`,defaultValue:`25px`,className:`col-span-2 h-8`})]})]})]})})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,..._.parameters?.docs?.source}}};var v=[`Playground`];export{_ as Playground,v as __namedExportsOrder,g as default};