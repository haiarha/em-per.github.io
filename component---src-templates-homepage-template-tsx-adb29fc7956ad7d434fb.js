"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[158],{8467:function(e,t,a){var r=a(7294),l=a(4160);t.Z=e=>{let{children:t}=e;const{0:a,1:n}=(0,r.useState)(!1);return r.createElement("div",{className:"bg-slate-100 min-h-screen"},r.createElement("button",{className:"block sm:hidden fixed top-4 right-4 p-2 bg-gray-800 text-white",onClick:()=>n((e=>!e))},r.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"}))),r.createElement("nav",{className:"bg-gray-700 text-white p-4 block sm:hidden "+(a?"":"hidden")},r.createElement("div",{className:"flex flex-col space-y-2"},r.createElement(l.rU,{to:"/",className:"hover:text-gray-300"},"Home"),r.createElement("a",{href:"#",className:"hover:text-gray-300"},"About"),r.createElement("a",{href:"#",className:"hover:text-gray-300"},"Services"),r.createElement("a",{href:"#",className:"hover:text-gray-300"},"Contact"))),r.createElement("nav",{className:"bg-gray-700 text-white p-4 hidden sm:flex justify-center"},r.createElement("div",{className:"flex space-x-4"},r.createElement(l.rU,{to:"/",className:"hover:text-gray-300"},"Home"),r.createElement("a",{href:"#",className:"hover:text-gray-300"},"About"),r.createElement("a",{href:"#",className:"hover:text-gray-300"},"Services"),r.createElement("a",{href:"#",className:"hover:text-gray-300"},"Contact"))),r.createElement("div",{className:"container mx-auto p-4"},t))}},3789:function(e,t,a){a.r(t);var r=a(7294),l=a(4160),n=a(8467);t.default=e=>{let{pageContext:t}=e;const{general:a,data:s}=t,c=a.projectsPerPage*(s.pageNumber-1)+1;return r.createElement(n.Z,null,r.createElement("h1",{className:"text-3xl font-bold underline"},"Hello world!"),s.projects.map(((e,t)=>r.createElement("div",{key:t},r.createElement(l.rU,{className:"text-blue-800 dark:text-blue-400 hover:underline",to:`/project/${c+t}`},e.title)))),r.createElement("hr",{className:"h-1 bg-slate-900"}),s.pagesCount>1&&Array.from({length:s.pagesCount},((e,t)=>t+1)).map((e=>r.createElement(l.rU,{key:e,className:["mr-2","hover:underline",e===s.pageNumber?"font-bold":"font-normal"].join(" "),to:1===e?"/":`/p${e}`},e))))}}}]);
//# sourceMappingURL=component---src-templates-homepage-template-tsx-adb29fc7956ad7d434fb.js.map