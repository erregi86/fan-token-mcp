import{t as e}from"./jsx-runtime-C9onxGo1.js";import"./react-DdA8jN9n.js";import{t}from"./button-BjPNyhWG.js";import{t as n}from"./input-DSGUwuQ3.js";import{t as r}from"./label-4Kmerrob.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./card-kDn8-rbr.js";var u=e(),d={title:`Components/Data Display/Card`,component:l,tags:[`autodocs`]},f={render:()=>(0,u.jsxs)(l,{className:`w-[350px]`,children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{children:`Card Title`}),(0,u.jsx)(c,{children:`Card description goes here.`})]}),(0,u.jsx)(o,{children:(0,u.jsx)(`p`,{children:`Card content with any elements inside.`})}),(0,u.jsx)(a,{children:(0,u.jsx)(t,{children:`Action`})})]})},p={name:`With Form`,render:()=>(0,u.jsxs)(l,{className:`w-[350px]`,children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{children:`Create project`}),(0,u.jsx)(c,{children:`Deploy your new project in one-click.`})]}),(0,u.jsx)(o,{children:(0,u.jsx)(`div`,{className:`grid w-full gap-4`,children:(0,u.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,u.jsx)(r,{htmlFor:`name`,children:`Name`}),(0,u.jsx)(n,{id:`name`,placeholder:`Name of your project`})]})})}),(0,u.jsxs)(a,{className:`flex justify-between`,children:[(0,u.jsx)(t,{variant:`outline`,children:`Cancel`}),(0,u.jsx)(t,{children:`Deploy`})]})]})},m={render:()=>(0,u.jsxs)(l,{className:`w-[350px]`,children:[(0,u.jsx)(i,{children:(0,u.jsx)(s,{children:`Notifications`})}),(0,u.jsx)(o,{children:(0,u.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`You have 3 unread messages.`})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with any elements inside.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "With Form",
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">You have 3 unread messages.</p>
      </CardContent>
    </Card>
}`,...m.parameters?.docs?.source}}};var h=[`Playground`,`WithForm`,`Simple`];export{f as Playground,m as Simple,p as WithForm,h as __namedExportsOrder,d as default};