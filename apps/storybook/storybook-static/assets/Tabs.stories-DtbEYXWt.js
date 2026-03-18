import{s as e}from"./iframe-D9gJDq8P.js";import{t}from"./jsx-runtime-C9onxGo1.js";import{t as n}from"./react-DdA8jN9n.js";import{t as r}from"./utils-D-KFxwDU.js";import{t as i}from"./button-BjPNyhWG.js";import{t as a}from"./input-DSGUwuQ3.js";import{t as o}from"./label-4Kmerrob.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./card-kDn8-rbr.js";var p=e(n(),1),m=t(),h=(0,p.createContext)(null);function g(){let e=(0,p.useContext)(h);if(!e)throw Error(`Tabs components must be used within <Tabs>`);return e}function _({value:e,onValueChange:t,defaultValue:n=``,className:r,...i}){let[a,o]=(0,p.useState)(n),s=e!==void 0,c=s?e:a,l=(0,p.useCallback)(e=>{s||o(e),t?.(e)},[s,t]);return(0,m.jsx)(h.Provider,{value:{value:c,onValueChange:l},children:(0,m.jsx)(`div`,{"data-slot":`tabs`,className:r,...i})})}function v({className:e,...t}){return(0,m.jsx)(`div`,{"data-slot":`tabs-list`,role:`tablist`,className:r(`inline-flex h-[var(--tabs-list-height)] items-center justify-center rounded-[var(--tabs-list-radius)] bg-[var(--tabs-list-bg)] p-[var(--tabs-list-padding)] text-muted-foreground`,e),...t})}function y({className:e,value:t,...n}){let{value:i,onValueChange:a}=g(),o=i===t;return(0,m.jsx)(`button`,{"data-slot":`tabs-trigger`,role:`tab`,"aria-selected":o,className:r(`inline-flex items-center justify-center whitespace-nowrap rounded-[var(--tabs-trigger-radius)] px-[var(--tabs-trigger-padding-x)] py-[var(--tabs-trigger-padding-y)] text-[length:var(--tabs-trigger-font-size)] font-[number:var(--tabs-trigger-font-weight)] transition-all`,`focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--focus-ring-color)]`,`disabled:pointer-events-none disabled:opacity-50`,o&&`bg-background text-foreground shadow-xs`,e),onClick:()=>a(t),...n})}function b({className:e,value:t,...n}){let{value:i}=g();return i===t?(0,m.jsx)(`div`,{"data-slot":`tabs-content`,role:`tabpanel`,className:r(`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,e),...n}):null}_.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{value:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}}}},v.__docgenInfo={description:``,methods:[],displayName:`TabsList`},y.__docgenInfo={description:``,methods:[],displayName:`TabsTrigger`,props:{value:{required:!0,tsType:{name:`string`},description:``}}},b.__docgenInfo={description:``,methods:[],displayName:`TabsContent`,props:{value:{required:!0,tsType:{name:`string`},description:``}}};var x={title:`Components/Navigation/Tabs`,component:_,tags:[`autodocs`]},S={render:()=>(0,m.jsxs)(_,{defaultValue:`account`,className:`w-[400px]`,children:[(0,m.jsxs)(v,{children:[(0,m.jsx)(y,{value:`account`,children:`Account`}),(0,m.jsx)(y,{value:`password`,children:`Password`})]}),(0,m.jsx)(b,{value:`account`,children:(0,m.jsxs)(f,{children:[(0,m.jsxs)(s,{children:[(0,m.jsx)(u,{children:`Account`}),(0,m.jsx)(d,{children:`Make changes to your account here.`})]}),(0,m.jsx)(l,{className:`space-y-2`,children:(0,m.jsxs)(`div`,{className:`space-y-1`,children:[(0,m.jsx)(o,{htmlFor:`tab-name`,children:`Name`}),(0,m.jsx)(a,{id:`tab-name`,defaultValue:`Pedro Duarte`})]})}),(0,m.jsx)(c,{children:(0,m.jsx)(i,{children:`Save changes`})})]})}),(0,m.jsx)(b,{value:`password`,children:(0,m.jsxs)(f,{children:[(0,m.jsxs)(s,{children:[(0,m.jsx)(u,{children:`Password`}),(0,m.jsx)(d,{children:`Change your password here.`})]}),(0,m.jsxs)(l,{className:`space-y-2`,children:[(0,m.jsxs)(`div`,{className:`space-y-1`,children:[(0,m.jsx)(o,{htmlFor:`current`,children:`Current password`}),(0,m.jsx)(a,{id:`current`,type:`password`})]}),(0,m.jsxs)(`div`,{className:`space-y-1`,children:[(0,m.jsx)(o,{htmlFor:`new`,children:`New password`}),(0,m.jsx)(a,{id:`new`,type:`password`})]})]}),(0,m.jsx)(c,{children:(0,m.jsx)(i,{children:`Save password`})})]})})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="tab-name">Name</Label>
              <Input id="tab-name" defaultValue="Pedro Duarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
}`,...S.parameters?.docs?.source}}};var C=[`Playground`];export{S as Playground,C as __namedExportsOrder,x as default};