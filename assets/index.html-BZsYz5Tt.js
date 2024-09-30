import{_ as i,c as e,a,o as n}from"./app-DZa6urO8.js";const l={};function t(h,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h1 id="node版本管理-n【mac】" tabindex="-1"><a class="header-anchor" href="#node版本管理-n【mac】"><span>Node版本管理 - n【Mac】</span></a></h1><ul><li>在开发多个项目，切换项目会发现某些项目启动不起来，查其原因。</li><li>多数为Node版本和当前某些插件版本不兼容导致，需要卸载当前node版本，安装所需node版本，十分不方便。</li><li>「特别是vue2.0和vue3.0项目相互切换开发」</li></ul><h2 id="使用环境" tabindex="-1"><a class="header-anchor" href="#使用环境"><span>使用环境</span></a></h2><blockquote><p>插件地址： https://github.com/tj/n</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意：该插件只适用于mac版本，如果是window可以使用nvm版本管理软件</p></div><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><h3 id="_1-下载插件" tabindex="-1"><a class="header-anchor" href="#_1-下载插件"><span>1.下载插件</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> n</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> or</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查看是否下载成功" tabindex="-1"><a class="header-anchor" href="#_2-查看是否下载成功"><span>2.查看是否下载成功</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -V</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v9.1.0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 正常显示版本号，下载成功</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-下载对应node版本并切换至该版本" tabindex="-1"><a class="header-anchor" href="#_3-下载对应node版本并切换至该版本"><span>3.下载对应node版本并切换至该版本</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xx</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xx.xx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xx.xx.x</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//eg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 14</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 14.17</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 14.17.6</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//如果下载失败可以使用sudo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xx.xx.x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-切换至对应版" tabindex="-1"><a class="header-anchor" href="#_4-切换至对应版"><span>4.切换至对应版</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 如果切换不成功</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 可以添加</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入n，回车。会出现node版本列表，上下键选择版本回车即可。</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  ο</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node/14.17.6</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    node/18.17.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> up/down</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> arrow</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> keys</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> select</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> version,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> return</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> key</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> delete,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> q</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> quit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-删除对应版本" tabindex="-1"><a class="header-anchor" href="#_5-删除对应版本"><span>5.删除对应版本</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xx.xx.x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  //删除对应版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所有的下载或者删除失败，都可以尝试在命令行前 加sudo测试</p></div>`,19)]))}const p=i(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/Node.js/cznd3edy/","title":"Node版本管理 - n","lang":"zh-CN","frontmatter":{"title":"Node版本管理 - n","author":"老木求知者","createTime":"2024/06/04 20:20:08","permalink":"/Node.js/cznd3edy/","description":"Node版本管理 - n【Mac】 在开发多个项目，切换项目会发现某些项目启动不起来，查其原因。 多数为Node版本和当前某些插件版本不兼容导致，需要卸载当前node版本，安装所需node版本，十分不方便。 「特别是vue2.0和vue3.0项目相互切换开发」 使用环境 插件地址： https://github.com/tj/n 提示 注意：该插件只适...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.yuwb.cn/Node.js/cznd3edy/"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"Node版本管理 - n"}],["meta",{"property":"og:description","content":"Node版本管理 - n【Mac】 在开发多个项目，切换项目会发现某些项目启动不起来，查其原因。 多数为Node版本和当前某些插件版本不兼容导致，需要卸载当前node版本，安装所需node版本，十分不方便。 「特别是vue2.0和vue3.0项目相互切换开发」 使用环境 插件地址： https://github.com/tj/n 提示 注意：该插件只适..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T00:58:59.000Z"}],["meta",{"property":"article:author","content":"老木求知者"}],["meta",{"property":"article:modified_time","content":"2024-09-30T00:58:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node版本管理 - n\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T00:58:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"老木求知者\\"}]}"]]},"headers":[{"level":2,"title":"使用环境","slug":"使用环境","link":"#使用环境","children":[]},{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[{"level":3,"title":"1.下载插件","slug":"_1-下载插件","link":"#_1-下载插件","children":[]},{"level":3,"title":"2.查看是否下载成功","slug":"_2-查看是否下载成功","link":"#_2-查看是否下载成功","children":[]},{"level":3,"title":"3.下载对应node版本并切换至该版本","slug":"_3-下载对应node版本并切换至该版本","link":"#_3-下载对应node版本并切换至该版本","children":[]},{"level":3,"title":"4.切换至对应版","slug":"_4-切换至对应版","link":"#_4-切换至对应版","children":[]},{"level":3,"title":"5.删除对应版本","slug":"_5-删除对应版本","link":"#_5-删除对应版本","children":[]}]}],"readingTime":{"minutes":1.18,"words":354},"git":{"createdTime":1727657939000,"updatedTime":1727657939000,"contributors":[{"name":"zhoumengxiang","email":"mengxiang.zhou.h5@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/Node.js/Node版本管理-n.md"}`);export{p as comp,r as data};
