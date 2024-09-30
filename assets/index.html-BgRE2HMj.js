import{_ as i,c as a,a as n,o as t}from"./app-DfBtXpVe.js";const e={};function h(l,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="typescript进阶" tabindex="-1"><a class="header-anchor" href="#typescript进阶"><span>TypeScript进阶</span></a></h1><h2 id="接口定义使用" tabindex="-1"><a class="header-anchor" href="#接口定义使用"><span>接口定义使用</span></a></h2><p>定义一个接口，用于限制Person对象的具体属性</p><p><code>index.ts</code></p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 定义一个接口，用于限制Person对象的具体属性</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> PersonInter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    love</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // ? 代表可有 可没有</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 在PersonInter基础上，自定义一个类型</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// or</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// export  type Persons  = Array&lt;PersonInter&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Persons</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> PersonInter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用接口</p><p><code>demo.vue</code></p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">type</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PersonInter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> type</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Persons</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@/index</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 定义对象</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">PersonInter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2020521</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yuwb</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">18</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //  {id: &#39;2020521&#39;, name: &#39;yuwb&#39;, age: 18}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 定义数组</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">personList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">PersonInter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt; =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2020522</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yiran</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">18</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2020523</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yewen</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">18</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">personList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 定义数组简写</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">persons</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Persons</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2020524</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bingbing</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">18</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2020525</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">baobao</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">18</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">persons</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const p=i(e,[["render",h],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/TypeScript/cmpe7vpb/","title":"TypeScript进阶","lang":"zh-CN","frontmatter":{"title":"TypeScript进阶","author":"老木求知者","createTime":"2024/06/12 16:34:10","permalink":"/TypeScript/cmpe7vpb/","description":"TypeScript进阶 接口定义使用 定义一个接口，用于限制Person对象的具体属性 index.ts 使用接口 demo.vue","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.yuwb.cn/zmx-blog/TypeScript/cmpe7vpb/"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"TypeScript进阶"}],["meta",{"property":"og:description","content":"TypeScript进阶 接口定义使用 定义一个接口，用于限制Person对象的具体属性 index.ts 使用接口 demo.vue"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T00:58:59.000Z"}],["meta",{"property":"article:author","content":"老木求知者"}],["meta",{"property":"article:modified_time","content":"2024-09-30T00:58:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TypeScript进阶\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T00:58:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"老木求知者\\"}]}"]]},"headers":[{"level":2,"title":"接口定义使用","slug":"接口定义使用","link":"#接口定义使用","children":[]}],"readingTime":{"minutes":0.64,"words":192},"git":{"createdTime":1727657939000,"updatedTime":1727657939000,"contributors":[{"name":"zhoumengxiang","email":"mengxiang.zhou.h5@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/TypeScript/TypeScript进阶.md"}`);export{p as comp,r as data};
