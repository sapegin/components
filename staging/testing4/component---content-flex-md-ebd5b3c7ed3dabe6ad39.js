(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{NC8T:function(e,t,n){"use strict";var a=n("UutA"),l=n("oXiK"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("8gyx"),s=n("VhsB"),m=n("nkI/"),p=n("bWhc"),u=n("og4h"),d=n("sqpL"),b=Object(a.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function f(e){var t=e.items,n=e.depth;return r.a.createElement(b,{as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.Box,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(f,{items:e.items,depth:n+1}):null)})))}f.defaultProps={depth:0};var x=f,g=Object(a.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),h=Object(a.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),y=Object(a.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),O=Object(a.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),j=Object(a.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,b=a.description,f=a.status,E=a.source,B=a.additionalContributors,C=void 0===B?[]:B;return r.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:i,description:b}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.Box,{display:["none",null,null,"block"]},r.a.createElement(p.a,null)),r.a.createElement(h,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(y,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.Heading,null,i)),n.tableOfContents.items?r.a.createElement(O,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(x,{items:n.tableOfContents.items})):null,r.a.createElement(j,null,f||E?r.a.createElement(l.Flex,{mb:3,alignItems:"center"},f?r.a.createElement(d.a,{status:f}):null,r.a.createElement(l.Box,{mx:"auto"}),E?r.a.createElement(u.a,{href:E}):null):null,n.tableOfContents.items?r.a.createElement(l.Box,{display:["block",null,"none"],mb:3},r.a.createElement(l.Details,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},r.a.createElement(l.StyledOcticon,{icon:t?o.b:o.c,mr:2}),"Table of contents"),r.a.createElement(l.Box,{pt:1},r.a.createElement(x,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(C.map((function(e){return{login:e}})))})))))}},g3cv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),l=n("NC8T");var o={},i={_frontmatter:o},r=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(r,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Flex")," component behaves the same as the ",Object(a.b)("inlineCode",{parentName:"p"},"Box")," component except that it has ",Object(a.b)("inlineCode",{parentName:"p"},"display: flex")," set by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Previously, a ",Object(a.b)("inlineCode",{parentName:"em"},"Flex.Item")," component was used for flex item specific properties; ",Object(a.b)("inlineCode",{parentName:"em"},"Box")," now contains all those properties and should be used in its place.")),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BorderBox width={300} height={300} borderRadius={0}>\n  <Flex flexWrap="nowrap">\n    <Box p={3} bg="blue.5">\n      Item 1\n    </Box>\n    <Box p={3} bg="green.5">\n      Item 2\n    </Box>\n    <Box p={3} bg="yellow.5">\n      Item 3\n    </Box>\n  </Flex>\n</BorderBox>\n')),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"Flex components get ",Object(a.b)("inlineCode",{parentName:"p"},"FLEX"),", ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"LAYOUT")," system props."),Object(a.b)("p",null,"Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/testing4/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Flex")," does not get any additional props other than the system props mentioned above."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-flex-md-ebd5b3c7ed3dabe6ad39.js.map