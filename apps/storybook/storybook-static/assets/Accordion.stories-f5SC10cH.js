import{s as e}from"./iframe-D9gJDq8P.js";import{t}from"./jsx-runtime-C9onxGo1.js";import{t as n}from"./react-DdA8jN9n.js";import{t as r}from"./utils-D-KFxwDU.js";var i=e(n(),1),a=t(),o=(0,i.createContext)(null);function s(){let e=(0,i.useContext)(o);if(!e)throw Error(`Accordion components must be used within <Accordion>`);return e}function c({type:e=`single`,defaultValue:t,collapsible:n=!1,className:r,children:s,...c}){let[l,u]=(0,i.useState)(t?Array.isArray(t)?t:[t]:[]),d=(0,i.useCallback)(t=>{u(r=>r.includes(t)?e===`single`&&!n?r:r.filter(e=>e!==t):e===`single`?[t]:[...r,t])},[e,n]);return(0,a.jsx)(o.Provider,{value:{value:l,toggle:d},children:(0,a.jsx)(`div`,{"data-slot":`accordion`,className:r,...c,children:s})})}function l({value:e,className:t,children:n,...i}){let o=s().value.includes(e);return(0,a.jsx)(`div`,{"data-slot":`accordion-item`,"data-state":o?`open`:`closed`,className:r(`border-b border-[var(--accordion-border-color)]`,t),...i,children:n})}function u({value:e,className:t,children:n,...i}){let o=s(),c=o.value.includes(e);return(0,a.jsx)(`h3`,{className:`flex`,children:(0,a.jsxs)(`button`,{"data-slot":`accordion-trigger`,"data-state":c?`open`:`closed`,className:r(`flex flex-1 items-center justify-between py-[var(--accordion-trigger-padding-y)] text-[length:var(--accordion-trigger-font-size)] font-[number:var(--accordion-trigger-font-weight)] transition-all hover:underline [&[data-state=open]>svg]:rotate-180`,t),onClick:()=>o.toggle(e),...i,children:[n,(0,a.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`shrink-0 transition-transform duration-200`,children:(0,a.jsx)(`path`,{d:`m6 9 6 6 6-6`})})]})})}function d({value:e,className:t,children:n,...i}){let o=s().value.includes(e);return o?(0,a.jsx)(`div`,{"data-slot":`accordion-content`,"data-state":o?`open`:`closed`,className:r(`overflow-hidden text-[length:var(--accordion-content-font-size)]`,t),...i,children:(0,a.jsx)(`div`,{className:`pb-[var(--accordion-content-padding-bottom)] pt-0`,children:n})}):null}c.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{type:{required:!1,tsType:{name:`union`,raw:`"single" | "multiple"`,elements:[{name:`literal`,value:`"single"`},{name:`literal`,value:`"multiple"`}]},description:``,defaultValue:{value:`"single"`,computed:!1}},defaultValue:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:``},collapsible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`AccordionItem`,props:{value:{required:!0,tsType:{name:`string`},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`AccordionTrigger`,props:{value:{required:!0,tsType:{name:`string`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`AccordionContent`,props:{value:{required:!0,tsType:{name:`string`},description:``}}};var f={title:`Components/Data Display/Accordion`,component:c,tags:[`autodocs`]},p={render:()=>(0,a.jsxs)(c,{type:`single`,collapsible:!0,className:`w-full max-w-md`,children:[(0,a.jsxs)(l,{value:`item-1`,children:[(0,a.jsx)(u,{children:`Is it accessible?`}),(0,a.jsx)(d,{children:`Yes. It adheres to the WAI-ARIA design pattern.`})]}),(0,a.jsxs)(l,{value:`item-2`,children:[(0,a.jsx)(u,{children:`Is it styled?`}),(0,a.jsx)(d,{children:`Yes. It comes with default styles that match the design system.`})]}),(0,a.jsxs)(l,{value:`item-3`,children:[(0,a.jsx)(u,{children:`Is it animated?`}),(0,a.jsx)(d,{children:`Yes. It's animated by default with smooth transitions.`})]})]})},m={name:`Multiple Open`,render:()=>(0,a.jsxs)(c,{type:`multiple`,className:`w-full max-w-md`,children:[(0,a.jsxs)(l,{value:`item-1`,children:[(0,a.jsx)(u,{children:`Section One`}),(0,a.jsx)(d,{children:`Content for section one.`})]}),(0,a.jsxs)(l,{value:`item-2`,children:[(0,a.jsx)(u,{children:`Section Two`}),(0,a.jsx)(d,{children:`Content for section two.`})]}),(0,a.jsxs)(l,{value:`item-3`,children:[(0,a.jsx)(u,{children:`Section Three`}),(0,a.jsx)(d,{children:`Content for section three.`})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match the design system.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default with smooth transitions.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Multiple Open",
  render: () => <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section One</AccordionTrigger>
        <AccordionContent>Content for section one.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section Two</AccordionTrigger>
        <AccordionContent>Content for section two.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section Three</AccordionTrigger>
        <AccordionContent>Content for section three.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...m.parameters?.docs?.source}}};var h=[`Playground`,`Multiple`];export{m as Multiple,p as Playground,h as __namedExportsOrder,f as default};