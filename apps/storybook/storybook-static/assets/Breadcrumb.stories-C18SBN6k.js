import{t as e}from"./jsx-runtime-C9onxGo1.js";import"./react-DdA8jN9n.js";import{t}from"./utils-D-KFxwDU.js";import{t as n}from"./dist-C9KPWxcf.js";var r=e();function i({className:e,...t}){return(0,r.jsx)(`nav`,{"data-slot":`breadcrumb`,"aria-label":`breadcrumb`,className:e,...t})}function a({className:e,...n}){return(0,r.jsx)(`ol`,{"data-slot":`breadcrumb-list`,className:t(`flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5`,e),...n})}function o({className:e,...n}){return(0,r.jsx)(`li`,{"data-slot":`breadcrumb-item`,className:t(`inline-flex items-center gap-1.5`,e),...n})}function s({asChild:e,className:i,...a}){return(0,r.jsx)(e?n:`a`,{"data-slot":`breadcrumb-link`,className:t(`transition-colors hover:text-foreground`,i),...a})}function c({className:e,...n}){return(0,r.jsx)(`span`,{"data-slot":`breadcrumb-page`,role:`link`,"aria-disabled":`true`,"aria-current":`page`,className:t(`font-normal text-foreground`,e),...n})}function l({children:e,className:n,...i}){return(0,r.jsx)(`li`,{"data-slot":`breadcrumb-separator`,role:`presentation`,"aria-hidden":`true`,className:t(`[&>svg]:size-3.5`,n),...i,children:e??(0,r.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,r.jsx)(`path`,{d:`m9 18 6-6-6-6`})})})}function u({className:e,...n}){return(0,r.jsxs)(`span`,{"data-slot":`breadcrumb-ellipsis`,role:`presentation`,"aria-hidden":`true`,className:t(`flex size-9 items-center justify-center`,e),...n,children:[(0,r.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,r.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1`}),(0,r.jsx)(`circle`,{cx:`19`,cy:`12`,r:`1`}),(0,r.jsx)(`circle`,{cx:`5`,cy:`12`,r:`1`})]}),(0,r.jsx)(`span`,{className:`sr-only`,children:`More`})]})}i.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`},a.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbList`},o.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbItem`},s.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbLink`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbPage`},l.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbSeparator`},u.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbEllipsis`};var d={title:`Components/Navigation/Breadcrumb`,component:i,tags:[`autodocs`]},f={render:()=>(0,r.jsx)(i,{children:(0,r.jsxs)(a,{children:[(0,r.jsx)(o,{children:(0,r.jsx)(s,{href:`#`,children:`Home`})}),(0,r.jsx)(l,{}),(0,r.jsx)(o,{children:(0,r.jsx)(s,{href:`#`,children:`Components`})}),(0,r.jsx)(l,{}),(0,r.jsx)(o,{children:(0,r.jsx)(c,{children:`Breadcrumb`})})]})})},p={name:`With Ellipsis`,render:()=>(0,r.jsx)(i,{children:(0,r.jsxs)(a,{children:[(0,r.jsx)(o,{children:(0,r.jsx)(s,{href:`#`,children:`Home`})}),(0,r.jsx)(l,{}),(0,r.jsx)(o,{children:(0,r.jsx)(u,{})}),(0,r.jsx)(l,{}),(0,r.jsx)(o,{children:(0,r.jsx)(s,{href:`#`,children:`Section`})}),(0,r.jsx)(l,{}),(0,r.jsx)(o,{children:(0,r.jsx)(c,{children:`Current Page`})})]})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "With Ellipsis",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Section</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...p.parameters?.docs?.source}}};var m=[`Playground`,`WithEllipsis`];export{f as Playground,p as WithEllipsis,m as __namedExportsOrder,d as default};