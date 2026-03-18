import{s as e}from"./iframe-D9gJDq8P.js";import{t}from"./jsx-runtime-C9onxGo1.js";import{t as n}from"./react-DdA8jN9n.js";import{t as r}from"./react-dom-BBw7966o.js";import{t as i}from"./utils-D-KFxwDU.js";import{n as a,r as o,t as s}from"./avatar-bHA9EfLW.js";var c=e(n(),1),l=e(r(),1),u=t(),d=(0,c.createContext)(null);function f({children:e,openDelay:t=200,closeDelay:n=300}){let[r,i]=(0,c.useState)(!1),a=(0,c.useRef)(null),o=(0,c.useRef)(null),s=(0,c.useRef)(void 0),l=(0,c.useRef)(void 0);return(0,u.jsx)(d.Provider,{value:{open:r,triggerRef:a,contentRef:o,handleEnter:()=>{clearTimeout(l.current),s.current=window.setTimeout(()=>i(!0),t)},handleLeave:()=>{clearTimeout(s.current),l.current=window.setTimeout(()=>i(!1),n)}},children:e})}function p({className:e,children:t,...n}){let r=(0,c.useContext)(d);return r?(0,u.jsx)(`a`,{ref:r.triggerRef,"data-slot":`hover-card-trigger`,className:e,onMouseEnter:r.handleEnter,onMouseLeave:r.handleLeave,...n,children:t}):null}function m({className:e,children:t,sideOffset:n=4,...r}){let a=(0,c.useContext)(d),[o,s]=(0,c.useState)({top:0,left:0});return(0,c.useEffect)(()=>{if(!a?.open||!a.triggerRef.current)return;let e=a.triggerRef.current.getBoundingClientRect();s({top:e.bottom+n+window.scrollY,left:e.left+e.width/2+window.scrollX})},[a?.open,n]),a?.open?(0,l.createPortal)((0,u.jsx)(`div`,{ref:a.contentRef,"data-slot":`hover-card-content`,"data-state":`open`,style:{position:`absolute`,top:o.top,left:o.left,transform:`translateX(-50%)`},className:i(`z-50 w-64 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-fade-in`,e),onMouseEnter:a.handleEnter,onMouseLeave:a.handleLeave,...r,children:t}),document.body):null}f.__docgenInfo={description:``,methods:[],displayName:`HoverCard`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},openDelay:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},closeDelay:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}}}},p.__docgenInfo={description:``,methods:[],displayName:`HoverCardTrigger`};var h={title:`Components/Feedback/HoverCard`,component:f,tags:[`autodocs`]},g={render:()=>(0,u.jsxs)(f,{children:[(0,u.jsx)(p,{href:`#`,className:`text-sm font-medium underline cursor-pointer`,children:`@nextjs`}),(0,u.jsx)(m,{className:`w-80`,children:(0,u.jsxs)(`div`,{className:`flex justify-between space-x-4`,children:[(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{src:`https://github.com/vercel.png`}),(0,u.jsx)(a,{children:`VC`})]}),(0,u.jsxs)(`div`,{className:`space-y-1`,children:[(0,u.jsx)(`h4`,{className:`text-sm font-semibold`,children:`@nextjs`}),(0,u.jsx)(`p`,{className:`text-sm`,children:`The React Framework — created and maintained by @vercel.`}),(0,u.jsx)(`div`,{className:`flex items-center pt-2`,children:(0,u.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Joined December 2021`})})]})]})})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger href="#" className="text-sm font-medium underline cursor-pointer">
        @nextjs
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework — created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...g.parameters?.docs?.source}}};var _=[`Playground`];export{g as Playground,_ as __namedExportsOrder,h as default};