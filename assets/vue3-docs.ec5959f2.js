import{_ as l}from"./Post.5577dd8f.js";import{i as r,o,j as c,g as u,a as e,k as t}from"./vendor.2cd3f507.js";import"./app.aff35abf.js";const i=e("div",{class:"prose m-auto"},[e("h2",{id:"\u7B80\u4ECB",tabindex:"-1"},[e("a",{href:"https://staging-cn.vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener"},"\u7B80\u4ECB"),t(),e("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#")]),e("h3",{id:"vue-\u7684\u6838\u5FC3\u529F\u80FD",tabindex:"-1"},[t("Vue \u7684\u6838\u5FC3\u529F\u80FD "),e("a",{class:"header-anchor",href:"#vue-\u7684\u6838\u5FC3\u529F\u80FD","aria-hidden":"true"},"#")]),e("ul",null,[e("li",null,"\u58F0\u660E\u5F0F\u6E32\u67D3\uFF1AVue \u901A\u8FC7\u81EA\u5DF1\u7684\u6A21\u677F\u8BED\u6CD5\u6269\u5C55\u4E86\u6807\u51C6 HTML\uFF0C\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u58F0\u660E\u5F0F\u5730\u63CF\u8FF0\u57FA\u4E8E JavaScript \u72B6\u6001\u8F93\u51FA\u7684 HTML\uFF1B"),e("li",null,"\u54CD\u5E94\u6027\uFF1AVue \u4F1A\u81EA\u52A8\u8DDF\u8E2A JavaScript \u72B6\u6001\u53D8\u5316\u5E76\u5728\u6539\u53D8\u53D1\u751F\u65F6\u54CD\u5E94\u5F0F\u5730\u66F4\u65B0 DOM\u3002")]),e("h2",{id:"\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528",tabindex:"-1"},[e("a",{href:"https://staging-cn.vuejs.org/guide/essentials/application.html#mounting-the-app",target:"_blank",rel:"noopener"},"\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528"),t(),e("a",{class:"header-anchor",href:"#\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528","aria-hidden":"true"},"#")]),e("p",null,[e("code",null,".mount()"),t(" \u65B9\u6CD5\u5E94\u8BE5\u59CB\u7EC8\u5728\u6574\u4E2A\u5E94\u7528\u914D\u7F6E\u548C\u8D44\u6E90\u6CE8\u518C\u5B8C\u6210\u540E\u88AB\u8C03\u7528\u3002\u540C\u65F6\u8BF7\u6CE8\u610F\uFF0C\u4E0D\u540C\u4E8E\u5176\u4ED6\u8D44\u6E90\u6CE8\u518C\u65B9\u6CD5\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u662F\u6839\u7EC4\u4EF6\u5B9E\u4F8B\u800C\u975E\u5E94\u7528\u5B9E\u4F8B\u3002")]),e("p",null,[t("\u5F53\u6839\u7EC4\u4EF6\u6CA1\u6709\u8BBE\u7F6E "),e("code",null,"template"),t(" \u9009\u9879\u65F6\uFF0CVue \u5C06\u81EA\u52A8\u4F7F\u7528\u5BB9\u5668\u7684 "),e("code",null,"innerHTML"),t(" \u4F5C\u4E3A\u6A21\u677F\u3002")]),e("h2",{id:"\u6A21\u677F\u8BED\u6CD5",tabindex:"-1"},[e("a",{href:"https://staging-cn.vuejs.org/guide/essentials/template-syntax.html",target:"_blank",rel:"noopener"},"\u6A21\u677F\u8BED\u6CD5"),t(),e("a",{class:"header-anchor",href:"#\u6A21\u677F\u8BED\u6CD5","aria-hidden":"true"},"#")]),e("p",null,[t("\u5728\u5E95\u5C42\u673A\u5236\u4E2D\uFF0C"),e("strong",null,"Vue \u4F1A\u5C06\u6A21\u677F\u7F16\u8BD1\u6210\u9AD8\u5EA6\u4F18\u5316\u7684 JavaScript \u4EE3\u7801"),t("\u3002\u7ED3\u5408\u54CD\u5E94\u5F0F\u7CFB\u7EDF\uFF0C\u5F53\u5E94\u7528\u72B6\u6001\u53D8\u66F4\u65F6\uFF0CVue \u80FD\u591F\u667A\u80FD\u5730\u63A8\u5BFC\u51FA\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7684\u7EC4\u4EF6\u7684\u6700\u5C11\u6570\u91CF\uFF0C\u5E76\u5E94\u7528\u6700\u5C11\u7684 DOM \u64CD\u4F5C\u3002")]),e("p",null,[t("\u5982\u679C\u4F60\u5BF9\u865A\u62DF DOM \u7684\u6982\u5FF5\u6BD4\u8F83\u719F\u6089\uFF0C\u5E76\u4E14\u504F\u5411\u4E8E JavaScript \u7684\u539F\u59CB\u529B\u91CF\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7ED3\u5408\u53EF\u9009\u7684 JSX \u652F\u6301\u76F4\u63A5\u624B\u5199\u6E32\u67D3\u51FD\u6570\u800C\u4E0D\u91C7\u7528\u6A21\u677F\u3002\u4F46\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u5C06"),e("strong",null,"\u4E0D\u4F1A\u4EAB\u53D7\u5230\u548C\u6A21\u677F\u540C\u7B49\u7EA7\u522B\u7684\u7F16\u8BD1\u65F6\u4F18\u5316"),t("\u3002")]),e("h3",{id:"\u6307\u4EE4",tabindex:"-1"},[t("\u6307\u4EE4 "),e("a",{class:"header-anchor",href:"#\u6307\u4EE4","aria-hidden":"true"},"#")]),e("p",null,"\u5F53\u4F7F\u7528 DOM \u5185\u5D4C\u6A21\u677F (\u76F4\u63A5\u5199\u5728 HTML \u6587\u4EF6\u91CC\u7684\u6A21\u677F) \u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u907F\u514D\u5728\u540D\u79F0\u4E2D\u4F7F\u7528\u5927\u5199\u5B57\u6BCD\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u4F1A\u5F3A\u5236\u5C06\u5176\u8F6C\u6362\u4E3A\u5C0F\u5199\uFF1A"),e("pre",{class:"language-html"},[e("code",{class:"language-html"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("a")]),t(),e("span",{class:"token attr-name"},":[someAttr]"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("value"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(" ... "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("a")]),e("span",{class:"token punctuation"},">")]),t(`
`)])]),e("p",null,[t("\u4E0A\u9762\u7684\u4F8B\u5B50\u5C06\u4F1A\u5728 DOM \u5185\u5D4C\u6A21\u677F\u4E2D\u88AB\u8F6C\u6362\u4E3A "),e("code",null,":[someattr]"),t("\u3002\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u62E5\u6709 \u201CsomeAttr\u201D property \u800C\u975E \u201Csomeattr\u201D\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u5C06\u4E0D\u4F1A\u5DE5\u4F5C\u3002")]),e("h2",{id:"\u54CD\u5E94\u5F0F\u57FA\u7840",tabindex:"-1"},[e("a",{href:"https://staging-cn.vuejs.org/guide/essentials/reactivity-fundamentals.html",target:"_blank",rel:"noopener"},"\u54CD\u5E94\u5F0F\u57FA\u7840"),t(),e("a",{class:"header-anchor",href:"#\u54CD\u5E94\u5F0F\u57FA\u7840","aria-hidden":"true"},"#")]),e("p",null,[t("\u4E3A\u4FDD\u8BC1\u8BBF\u95EE\u4EE3\u7406\u7684\u4E00\u81F4\u6027\uFF0C\u5BF9\u540C\u4E00\u4E2A\u5BF9\u8C61\u8C03\u7528 "),e("code",null,"reactive()"),t(" \u4F1A\u603B\u662F\u8FD4\u56DE\u540C\u6837\u7684\u4EE3\u7406\uFF0C\u800C\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u4EE3\u7406\u8C03\u7528 "),e("code",null,"reactive()"),t(" \u4E5F\u662F\u8FD4\u56DE\u540C\u6837\u7684\u4EE3\u7406\u3002")])],-1),_="\u9605\u8BFB Vue3 \u5B98\u65B9\u6587\u6863\u7684\u6536\u83B7",v="2022-06-02",V=[{property:"og:title",content:"\u9605\u8BFB Vue3 \u5B98\u65B9\u6587\u6863\u7684\u6536\u83B7"}],x={setup(p,{expose:n}){const a={title:"\u9605\u8BFB Vue3 \u5B98\u65B9\u6587\u6863\u7684\u6536\u83B7",date:"2022-06-02",meta:[{property:"og:title",content:"\u9605\u8BFB Vue3 \u5B98\u65B9\u6587\u6863\u7684\u6536\u83B7"}]};return n({frontmatter:a}),r({title:"\u9605\u8BFB Vue3 \u5B98\u65B9\u6587\u6863\u7684\u6536\u83B7",meta:[{property:"og:title",content:"\u9605\u8BFB Vue3 \u5B98\u65B9\u6587\u6863\u7684\u6536\u83B7"}]}),(h,g)=>{const s=l;return o(),c(s,{frontmatter:a},{default:u(()=>[i]),_:1})}}};export{v as date,x as default,V as meta,_ as title};
