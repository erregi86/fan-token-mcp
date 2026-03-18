import{t as e}from"./jsx-runtime-C9onxGo1.js";import"./react-DdA8jN9n.js";import{t}from"./button-BjPNyhWG.js";import{t as n}from"./input-DSGUwuQ3.js";import{t as r}from"./label-4Kmerrob.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./sheet-kXRpjEt6.js";var f=e(),p={title:`Components/Overlay/Sheet`,component:d,tags:[`autodocs`]},m={render:()=>(0,f.jsxs)(d,{children:[(0,f.jsx)(a,{asChild:!0,children:(0,f.jsx)(t,{variant:`outline`,children:`Open Sheet`})}),(0,f.jsxs)(l,{children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:`Edit profile`}),(0,f.jsx)(o,{children:`Make changes to your profile here.`})]}),(0,f.jsx)(`div`,{className:`grid gap-4 py-4`,children:(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(r,{htmlFor:`sheet-name`,children:`Name`}),(0,f.jsx)(n,{id:`sheet-name`,defaultValue:`Pedro Duarte`})]})}),(0,f.jsx)(i,{children:(0,f.jsx)(s,{className:`inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90`,children:`Save changes`})})]})]})},h={name:`Left Side`,render:()=>(0,f.jsxs)(d,{children:[(0,f.jsx)(a,{asChild:!0,children:(0,f.jsx)(t,{variant:`outline`,children:`Open Left`})}),(0,f.jsx)(l,{side:`left`,children:(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:`Left Sheet`}),(0,f.jsx)(o,{children:`This sheet slides from the left.`})]})})]})},g={render:()=>(0,f.jsxs)(d,{children:[(0,f.jsx)(a,{asChild:!0,children:(0,f.jsx)(t,{variant:`outline`,children:`Open Top`})}),(0,f.jsx)(l,{side:`top`,children:(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:`Top Sheet`}),(0,f.jsx)(o,{children:`This sheet slides from the top.`})]})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-1.5">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Pedro Duarte" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            Save changes
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Left Side",
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>This sheet slides from the left.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
          <SheetDescription>This sheet slides from the top.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...g.parameters?.docs?.source}}};var _=[`Playground`,`Left`,`Top`];export{h as Left,m as Playground,g as Top,_ as __namedExportsOrder,p as default};