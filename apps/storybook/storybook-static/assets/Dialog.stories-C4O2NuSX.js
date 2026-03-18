import{s as e}from"./iframe-D9gJDq8P.js";import{t}from"./jsx-runtime-C9onxGo1.js";import{t as n}from"./react-DdA8jN9n.js";import{t as r}from"./utils-D-KFxwDU.js";import{t as i}from"./dist-C9KPWxcf.js";import{t as a}from"./button-BjPNyhWG.js";import{t as o}from"./input-DSGUwuQ3.js";import{t as s}from"./label-4Kmerrob.js";var c=e(n(),1),l=t(),u=(0,c.createContext)(null);function d(){let e=(0,c.useContext)(u);if(!e)throw Error(`Dialog components must be used within <Dialog>`);return e}function f({children:e,open:t,onOpenChange:n,defaultOpen:r=!1}){let[i,a]=(0,c.useState)(r),o=t!==void 0,s=o?t:i,d=(0,c.useCallback)(e=>{o||a(e),n?.(e)},[o,n]);return(0,l.jsx)(u.Provider,{value:{open:s,setOpen:d},children:e})}function p({children:e,className:t,asChild:n=!1,...r}){let{setOpen:a}=d();return(0,l.jsx)(n?i:`button`,{"data-slot":`dialog-trigger`,className:t,onClick:()=>a(!0),...r,children:e})}function m({children:e,className:t,...n}){let{open:i,setOpen:a}=d(),o=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=e=>{e.key===`Escape`&&a(!1)};return i&&(document.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`),()=>{document.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[i,a]),i?(0,l.jsx)(`div`,{ref:o,"data-slot":`dialog-overlay`,className:`fixed inset-0 z-50 flex items-center justify-center bg-[var(--dialog-overlay-bg)]`,onClick:e=>{e.target===o.current&&a(!1)},children:(0,l.jsxs)(`div`,{"data-slot":`dialog-content`,role:`dialog`,"aria-modal":`true`,className:r(`relative w-full max-w-[var(--dialog-max-width)] rounded-[var(--dialog-radius)] border border-[var(--dialog-border-color)] bg-[var(--dialog-bg)] p-[var(--dialog-padding)] shadow-[var(--dialog-shadow)] animate-fade-in`,t),...n,children:[e,(0,l.jsxs)(`button`,{"data-slot":`dialog-close`,className:`absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-[length:var(--focus-ring-width)] focus:ring-[var(--focus-ring-color)]`,onClick:()=>a(!1),children:[(0,l.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`path`,{d:`M18 6 6 18`}),(0,l.jsx)(`path`,{d:`m6 6 12 12`})]}),(0,l.jsx)(`span`,{className:`sr-only`,children:`Close`})]})]})}):null}function h({className:e,...t}){return(0,l.jsx)(`div`,{"data-slot":`dialog-header`,className:r(`flex flex-col gap-1.5 text-center sm:text-left`,e),...t})}function g({className:e,...t}){return(0,l.jsx)(`h2`,{"data-slot":`dialog-title`,className:r(`text-[length:var(--dialog-title-font-size)] font-[number:var(--dialog-title-font-weight)] leading-none tracking-tight`,e),...t})}function _({className:e,...t}){return(0,l.jsx)(`p`,{"data-slot":`dialog-description`,className:r(`text-[length:var(--dialog-description-font-size)] text-muted-foreground`,e),...t})}function v({className:e,...t}){return(0,l.jsx)(`div`,{"data-slot":`dialog-footer`,className:r(`flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 mt-4`,e),...t})}f.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},p.__docgenInfo={description:``,methods:[],displayName:`DialogTrigger`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},m.__docgenInfo={description:``,methods:[],displayName:`DialogContent`},h.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`},g.__docgenInfo={description:``,methods:[],displayName:`DialogTitle`},_.__docgenInfo={description:``,methods:[],displayName:`DialogDescription`},v.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`};var y={title:`Components/Overlay/Dialog`,component:f,tags:[`autodocs`]},b={render:()=>(0,l.jsxs)(f,{children:[(0,l.jsx)(p,{asChild:!0,children:(0,l.jsx)(a,{variant:`outline`,children:`Open Dialog`})}),(0,l.jsxs)(m,{children:[(0,l.jsxs)(h,{children:[(0,l.jsx)(g,{children:`Edit profile`}),(0,l.jsx)(_,{children:`Make changes to your profile here. Click save when you're done.`})]}),(0,l.jsxs)(`div`,{className:`grid gap-4 py-4`,children:[(0,l.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,l.jsx)(s,{htmlFor:`name`,children:`Name`}),(0,l.jsx)(o,{id:`name`,defaultValue:`Pedro Duarte`})]}),(0,l.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,l.jsx)(s,{htmlFor:`username`,children:`Username`}),(0,l.jsx)(o,{id:`username`,defaultValue:`@peduarte`})]})]}),(0,l.jsx)(v,{children:(0,l.jsx)(a,{type:`submit`,children:`Save changes`})})]})]})},x={render:()=>(0,l.jsxs)(f,{children:[(0,l.jsx)(p,{asChild:!0,children:(0,l.jsx)(a,{children:`Open`})}),(0,l.jsxs)(m,{children:[(0,l.jsxs)(h,{children:[(0,l.jsx)(g,{children:`Are you sure?`}),(0,l.jsx)(_,{children:`This action cannot be undone.`})]}),(0,l.jsxs)(v,{children:[(0,l.jsx)(a,{variant:`outline`,children:`Cancel`}),(0,l.jsx)(a,{children:`Continue`})]})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...x.parameters?.docs?.source}}};var S=[`Playground`,`Simple`];export{b as Playground,x as Simple,S as __namedExportsOrder,y as default};