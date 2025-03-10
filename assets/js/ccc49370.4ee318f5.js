"use strict";(self.webpackChunkgrantshares_docs=self.webpackChunkgrantshares_docs||[]).push([[249],{1021:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(6540),a=n(3115);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>o(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=i(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(6289),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:r})]},e.id)))}):null}const g=r.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,a.p)(),x=c??f.tableOfContents.minHeadingLevel,p=u??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>l({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:p});return d((0,r.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:x,maxHeadingLevel:p}}),[o,i,x,p])),(0,m.jsx)(g,{toc:v,className:n,linkClassName:o,...h})}},1430:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(6540),a=n(797);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),s=n.pluralForms.indexOf(a);return r[Math.min(s,r.length-1)]}(n,t,e)}}},7191:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var r=n(4164),a=n(1082),s=n(204),l=n(3750),o=n(569),i=n(8189),c=n(539),d=n(1865),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,l.e7)(),{title:n,description:r,date:s,tags:o,authors:i,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:c.title_meta??n,description:r,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),i.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(7143);function f(){const e=(0,l.J_)();return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(7959),p=n(8467);function v(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:a}=(0,l.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=r,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:f}=d;return(0,u.jsxs)(o.A,{sidebar:t,toc:!h&&a.length>0?(0,u.jsx)(x.A,{toc:a,minHeadingLevel:g,maxHeadingLevel:f}):void 0,children:[(0,u.jsx)(p.A,{metadata:r}),(0,u.jsx)(i.A,{children:n}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(l.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,r.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(f,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},7959:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var r=n(4164),a=n(1021);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(4848);const o="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,r.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.A,{...n,linkClassName:o,linkActiveClassName:i})})}},8189:(e,t,n)=>{n.d(t,{A:()=>O});n(6540);var r=n(4164),a=n(3750),s=n(4848);function l(e){let{children:t,className:n}=e;return(0,s.jsx)("article",{className:n,children:t})}var o=n(6289);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,a.e7)(),{permalink:c,title:d}=n,u=l?"h1":"h2";return(0,s.jsx)(u,{className:(0,r.A)(i.title,t),children:l?d:(0,s.jsx)(o.A,{to:c,children:d})})}var d=n(539),u=n(1430),m=n(8569);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,s.jsx)(s.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,s.jsx)("time",{dateTime:t,children:n})}function x(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,a.e7)(),{date:l,readingTime:o}=n,i=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,r.A)(h.container,"margin-vert--md",t),children:[(0,s.jsx)(f,{date:l,formattedDate:(c=l,i.format(new Date(c)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{}),(0,s.jsx)(g,{readingTime:o})]})]});var c}var v=n(5921);const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,a.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),i=1===n.length;return(0,s.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",o?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,s.jsx)("div",{className:(0,r.A)(!o&&(i?"col col--12":"col col--6"),o?j.imageOnlyAuthorCol:j.authorCol),children:(0,s.jsx)(v.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(p,{}),(0,s.jsx)(b,{})]})}var N=n(99),L=n(900);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,a.e7)();return(0,s.jsx)("div",{id:l?N.LU:void 0,className:(0,r.A)("markdown",n),children:(0,s.jsx)(L.A,{children:t})})}var C=n(204),_=n(5783),w=n(6547);function H(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function T(e){const{blogPostTitle:t,...n}=e;return(0,s.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,s.jsx)(H,{})})}function k(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:n,title:l,editUrl:o,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,m=n.length>0;if(!(m||u||o))return null;if(t){const e=!!(o||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,r.A)("row","margin-top--sm",C.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(w.A,{tags:n})})}),e&&(0,s.jsx)(_.A,{className:(0,r.A)("margin-top--sm",C.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,r.A)("col",{"col--9":u}),children:(0,s.jsx)(w.A,{tags:n})}),u&&(0,s.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":m}),children:(0,s.jsx)(T,{blogPostTitle:l,to:e.permalink})})]})}function O(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(l,{className:(0,r.A)(o,n),children:[(0,s.jsx)(A,{}),(0,s.jsx)(y,{children:t}),(0,s.jsx)(k,{})]})}},8467:(e,t,n)=>{n.d(t,{A:()=>p});n(6540);var r=n(4164),a=n(539),s=n(7143),l=n(4848);function o(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(s.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,l.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(204),h=n(2362);function g(e){let{className:t}=e;return(0,l.jsx)(h.A,{type:"caution",title:(0,l.jsx)(d,{}),className:(0,r.A)(t,m.G.common.draftBanner),children:(0,l.jsx)(u,{})})}function f(e){let{className:t}=e;return(0,l.jsx)(h.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,r.A)(t,m.G.common.unlistedBanner),children:(0,l.jsx)(i,{})})}function x(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(f,{...e})]})}function p(e){let{metadata:t}=e;const{unlisted:n,frontMatter:r}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||r.unlisted)&&(0,l.jsx)(x,{}),r.draft&&(0,l.jsx)(g,{})]})}}}]);