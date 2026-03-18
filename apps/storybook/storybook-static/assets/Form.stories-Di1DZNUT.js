import{s as e}from"./iframe-D9gJDq8P.js";import{t}from"./jsx-runtime-C9onxGo1.js";import{t as n}from"./react-DdA8jN9n.js";import{t as r}from"./utils-D-KFxwDU.js";import{t as i}from"./button-BjPNyhWG.js";import{t as a}from"./input-DSGUwuQ3.js";import{t as o}from"./label-4Kmerrob.js";var s=e(n(),1),c=t(),l=(0,s.createContext)(null);function u(){let e=(0,s.useContext)(l);if(!e)throw Error(`Form field components must be within <FormField>`);return e}function d({className:e,...t}){return(0,c.jsx)(`form`,{"data-slot":`form`,className:e,...t})}function f({name:e,error:t,children:n,className:i,...a}){let o=(0,s.useId)();return(0,c.jsx)(l.Provider,{value:{id:o,name:e,error:t},children:(0,c.jsx)(`div`,{"data-slot":`form-field`,className:r(`space-y-2`,i),...a,children:n})})}function p({className:e,...t}){let{id:n,error:i}=u();return(0,c.jsx)(o,{"data-slot":`form-label`,htmlFor:n,className:r(i&&`text-destructive`,e),...t})}function m({className:e,children:t,...n}){let{id:r,error:i}=u();return(0,c.jsx)(`div`,{"data-slot":`form-control`,className:e,...n,children:typeof t==`object`&&t&&(0,s.isValidElement)(t)?(0,s.cloneElement)(t,{id:r,"aria-invalid":!!i,"aria-describedby":i?`${r}-error`:void 0}):t})}function h({className:e,...t}){return(0,c.jsx)(`p`,{"data-slot":`form-description`,className:r(`text-[0.8rem] text-muted-foreground`,e),...t})}function g({className:e,children:t,...n}){let{id:i,error:a}=u(),o=a||t;return o?(0,c.jsx)(`p`,{"data-slot":`form-message`,id:`${i}-error`,className:r(`text-[0.8rem] font-medium text-destructive`,e),...n,children:o}):null}d.__docgenInfo={description:``,methods:[],displayName:`Form`},f.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{name:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``}}},p.__docgenInfo={description:``,methods:[],displayName:`FormLabel`},m.__docgenInfo={description:``,methods:[],displayName:`FormControl`},h.__docgenInfo={description:``,methods:[],displayName:`FormDescription`},g.__docgenInfo={description:``,methods:[],displayName:`FormMessage`};var _={title:`Components/Data Input/Form`,component:d,tags:[`autodocs`]},v={render:()=>(0,c.jsxs)(`form`,{className:`space-y-4 w-[350px]`,onSubmit:e=>e.preventDefault(),children:[(0,c.jsxs)(f,{name:`username`,children:[(0,c.jsx)(p,{children:`Username`}),(0,c.jsx)(m,{children:(0,c.jsx)(a,{placeholder:`Enter your username`})}),(0,c.jsx)(h,{children:`This is your public display name.`}),(0,c.jsx)(g,{})]}),(0,c.jsxs)(f,{name:`email`,children:[(0,c.jsx)(p,{children:`Email`}),(0,c.jsx)(m,{children:(0,c.jsx)(a,{type:`email`,placeholder:`you@example.com`})}),(0,c.jsx)(h,{children:`We'll never share your email.`}),(0,c.jsx)(g,{})]}),(0,c.jsx)(i,{type:`submit`,children:`Submit`})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-4 w-[350px]" onSubmit={e => e.preventDefault()}>
      <FormField name="username">
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter your username" />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormField>
      <FormField name="email">
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="you@example.com" />
        </FormControl>
        <FormDescription>We&apos;ll never share your email.</FormDescription>
        <FormMessage />
      </FormField>
      <Button type="submit">Submit</Button>
    </form>
}`,...v.parameters?.docs?.source}}};var y=[`Playground`];export{v as Playground,y as __namedExportsOrder,_ as default};