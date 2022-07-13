import{_ as b}from"./Post.5577dd8f.js";import{b as h,o,c,e as k,F as a,D as l,p as y,h as j,a as e,x as d,n as u,i as v,j as L,g as S,f as m}from"./vendor.2cd3f507.js";import{_ as x}from"./app.aff35abf.js";function I(){const r=[...["Hongbusi"].map(n=>`user:${n}`)].join(" ");return`https://github.com/search?l=&o=desc&s=stars&type=Repositories&q=${encodeURIComponent(r)}`}const C=["href"],H=h({setup(t){return(r,s)=>(o(),c("a",{href:k(I)(),target:"_blank"},"All projects sort by Stars",8,C))}});const P=t=>(y("data-v-17917cfe"),t=t(),j(),t),B={class:"mt-10 font-bold"},V={class:"project-grid py-2 -mx-3 gap-2"},w=["href"],A={class:"pt-2 pr-5"},$={class:"flex-auto"},q={cla:"",ss:"text-normal"},D=["innerHTML"],R=P(()=>e("div",{class:"markdown pb5"},[e("p",{op75:""},[e("em",null,"Thanks for getting intersted in my works!")])],-1)),E=h({props:{projects:null},setup(t){return(r,s)=>(o(),c(a,null,[(o(!0),c(a,null,l(Object.keys(t.projects),n=>(o(),c(a,{key:n},[e("h4",B,d(n),1),e("div",V,[(o(!0),c(a,null,l(t.projects[n],(i,p)=>(o(),c("a",{key:p,class:u(["item relative flex items-center",i.link?"":"opacity-0 pointer-events-none h-0 -mt-8 -mb-4"]),href:i.link,target:"_blank"},[e("div",A,[e("div",{class:u(["text-3xl opacity-50",i.icon||"i-carbon-unknown"])},null,2)]),e("div",$,[e("div",q,d(i.name),1),e("div",{class:"desc text-sm opacity-50 font-normal",innerHTML:i.desc},null,8,D)])],10,w))),128))])],64))),128)),R],64))}});var T=x(E,[["__scopeId","data-v-17917cfe"]]);const F={class:"prose m-auto"},W="Projects - Hongbusi",z="Projects",O="List of projects that I am proud of.",G="List of projects that I am proud of.",J={Latest:[{name:"Weekly",link:"https://github.com/developer-plus/weekly",desc:"\u8BB0\u5F55\u6BCF\u5468\u503C\u5F97\u5206\u4EAB\u7684\u5185\u5BB9\uFF0C\u5468\u4E00\u53D1\u5E03\u3002"},{name:"mini-unocss",link:"https://github.com/developer-plus/mini-unocss",desc:"\u4E00\u4E2A\u5373\u65F6\u6309\u9700\u7684\u539F\u5B50 CSS \u5F15\u64CE\uFF0Cunocss \u7684 mini \u7248\u672C\u3002"}],Sites:[{name:"vue-hbs-admin",link:"https://github.com/developer-plus/vue-hbs-admin",desc:"A vue management system. It is based on Vue3, Vite and TypeScript."},{name:"Bookmarks",link:"https://github.com/developer-plus/bookmarks",desc:"Bookmarks for Frontend Developers."},{name:"Daily reading",link:"https://hongbusi.github.io/daily-reading",desc:"Let others read high-quality content faster and more accurately.",icon:"i-ep-reading"},{name:"Clock",link:"https://hongbusi.github.io/clock",desc:"A clock.",icon:"i-carbon-time"}],"VS Code Extensions":[{name:"Code Snippets",link:"https://github.com/Hongbusi/code-snippets",desc:"Code snippets for vscode."}],Utils:[{name:"Configs",link:"https://github.com/Hongbusi/configs",desc:"ESLint config & StyleLint config & Prettier config for my personal projects.",icon:"i-carbon-cloud-satellite-config"},{name:"Release",link:"https://github.com/Hongbusi/release",desc:"A command-line tool to quickly create releases."}]},K=[{property:"og:title",content:"Projects - Hongbusi"},{property:"og:description",content:"List of projects that I am proud of."},{name:"description",content:"List of projects that I am proud of."}],Q={setup(t,{expose:r}){const s={title:"Projects - Hongbusi",display:"Projects",subtitle:"List of projects that I am proud of.",description:"List of projects that I am proud of.",projects:{Latest:[{name:"Weekly",link:"https://github.com/developer-plus/weekly",desc:"\u8BB0\u5F55\u6BCF\u5468\u503C\u5F97\u5206\u4EAB\u7684\u5185\u5BB9\uFF0C\u5468\u4E00\u53D1\u5E03\u3002"},{name:"mini-unocss",link:"https://github.com/developer-plus/mini-unocss",desc:"\u4E00\u4E2A\u5373\u65F6\u6309\u9700\u7684\u539F\u5B50 CSS \u5F15\u64CE\uFF0Cunocss \u7684 mini \u7248\u672C\u3002"}],Sites:[{name:"vue-hbs-admin",link:"https://github.com/developer-plus/vue-hbs-admin",desc:"A vue management system. It is based on Vue3, Vite and TypeScript."},{name:"Bookmarks",link:"https://github.com/developer-plus/bookmarks",desc:"Bookmarks for Frontend Developers."},{name:"Daily reading",link:"https://hongbusi.github.io/daily-reading",desc:"Let others read high-quality content faster and more accurately.",icon:"i-ep-reading"},{name:"Clock",link:"https://hongbusi.github.io/clock",desc:"A clock.",icon:"i-carbon-time"}],"VS Code Extensions":[{name:"Code Snippets",link:"https://github.com/Hongbusi/code-snippets",desc:"Code snippets for vscode."}],Utils:[{name:"Configs",link:"https://github.com/Hongbusi/configs",desc:"ESLint config & StyleLint config & Prettier config for my personal projects.",icon:"i-carbon-cloud-satellite-config"},{name:"Release",link:"https://github.com/Hongbusi/release",desc:"A command-line tool to quickly create releases."}]},meta:[{property:"og:title",content:"Projects - Hongbusi"},{property:"og:description",content:"List of projects that I am proud of."},{name:"description",content:"List of projects that I am proud of."}]};return r({frontmatter:s}),v({title:"Projects - Hongbusi",meta:[{property:"og:title",content:"Projects - Hongbusi"},{property:"og:description",content:"List of projects that I am proud of."},{name:"description",content:"List of projects that I am proud of."}]}),(i,p)=>{const g=T,f=H,_=b;return o(),L(_,{frontmatter:s},{default:S(()=>[e("div",F,[m(g,{projects:s.projects},null,8,["projects"]),m(f)])]),_:1})}}};export{Q as default,G as description,z as display,K as meta,J as projects,O as subtitle,W as title};
