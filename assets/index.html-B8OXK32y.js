import{_ as a,c as n,a as l,o as i}from"./app-DfBtXpVe.js";const t={};function s(h,e){return i(),n("div",null,e[0]||(e[0]=[l(`<h1 id="html事件" tabindex="-1"><a class="header-anchor" href="#html事件"><span>HTML事件</span></a></h1><h2 id="docment" tabindex="-1"><a class="header-anchor" href="#docment"><span>Docment</span></a></h2><h3 id="domcontentloaded" tabindex="-1"><a class="header-anchor" href="#domcontentloaded"><span>DOMContentLoaded</span></a></h3><p>当 HTML 文档完全解析，且所有延迟脚本（<code>&lt;script defer src=&quot;…&quot;&gt;</code> 和 <code>&lt;script type=&quot;module&quot;&gt;</code>）下载和执行完毕后，会触发 DOMContentLoaded 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。</p><ul><li>相似事件<code>load</code></li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//1.绑定事件名称</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">addEventListener</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DOMContentLoaded</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//2.事件处理器属性</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">onDOMContentLoaded</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readystatechange" tabindex="-1"><a class="header-anchor" href="#readystatechange"><span>readystatechange</span></a></h3><p>Document.readyState 属性发生改变时，会触发 readystatechange 事件。</p><blockquote><p>Document.readyState 属性描述了document 的加载状态。</p></blockquote><h2 id="element" tabindex="-1"><a class="header-anchor" href="#element"><span>Element</span></a></h2><h3 id="onauxclick" tabindex="-1"><a class="header-anchor" href="#onauxclick"><span>onauxclick</span></a></h3><p>鼠标左键外的任何按钮点击时，触发事件（火狐和safari不支持）</p><h3 id="blur" tabindex="-1"><a class="header-anchor" href="#blur"><span>blur</span></a></h3><p>元素失去焦点时，触发事件</p><h3 id="click" tabindex="-1"><a class="header-anchor" href="#click"><span>click</span></a></h3><p>元素点击事件</p><h3 id="contextmenu" tabindex="-1"><a class="header-anchor" href="#contextmenu"><span>contextmenu</span></a></h3><p>鼠标右击或者菜单事件</p><h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus"><span>focus</span></a></h3><p>元素获得焦点时，触发事件</p><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>select</span></a></h3><p>选择文本时，触发事件</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>select</code>事件只能在<code>&lt;input&gt;</code>和<code>&lt;textarea&gt;</code>元素上触发</p></div><h3 id="show" tabindex="-1"><a class="header-anchor" href="#show"><span>show</span></a></h3><p>未知</p><h2 id="htmldetailselement" tabindex="-1"><a class="header-anchor" href="#htmldetailselement"><span>HTMLDetailsElement</span></a></h2><h3 id="toggle" tabindex="-1"><a class="header-anchor" href="#toggle"><span>toggle</span></a></h3><p>当<code>&lt;details&gt;</code>元素打开/关闭状态被切换时，切换事件会触发。</p><h2 id="htmldialogelement" tabindex="-1"><a class="header-anchor" href="#htmldialogelement"><span>HTMLDialogElement</span></a></h2><h3 id="cancel" tabindex="-1"><a class="header-anchor" href="#cancel"><span>cancel</span></a></h3><p>当使用<code>esc</code>关闭时，触发事件</p><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close"><span>close</span></a></h3><p>对话框被关闭时，触发事件</p><h2 id="htmlelement" tabindex="-1"><a class="header-anchor" href="#htmlelement"><span>HTMLElement</span></a></h2><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input</span></a></h3><p>当一个 <code>&lt;input&gt;</code>、<code>&lt;select&gt;</code> 或 <code>&lt;textarea&gt;</code> 元素的 value 被修改时，会触发 <code>input</code> 事件。</p><h2 id="htmlformelement" tabindex="-1"><a class="header-anchor" href="#htmlformelement"><span>HTMLFormElement</span></a></h2><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset"><span>reset</span></a></h3><p>当表单被重置时，触发事件</p><h3 id="submit" tabindex="-1"><a class="header-anchor" href="#submit"><span>submit</span></a></h3><p>当表单被提交时，触发事件</p><h2 id="htmlinputelement" tabindex="-1"><a class="header-anchor" href="#htmlinputelement"><span>HTMLInputElement</span></a></h2><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>当控件中元素值改变时，触发事件</p><h3 id="invalid" tabindex="-1"><a class="header-anchor" href="#invalid"><span>invalid</span></a></h3><p>当控件中值不符合校验时，触发事件</p><h2 id="htmlmediaelement" tabindex="-1"><a class="header-anchor" href="#htmlmediaelement"><span>HTMLMediaElement</span></a></h2><h3 id="abort" tabindex="-1"><a class="header-anchor" href="#abort"><span>abort</span></a></h3><p>资源没有被完全加载时，触发事件</p><h3 id="canplay" tabindex="-1"><a class="header-anchor" href="#canplay"><span>canplay</span></a></h3><p>可以播放媒体文件时，触发事件（可能还没有加载足够的数据来播放媒体直到其结束，即后续可能需要停止以进一步缓冲内容）</p><h3 id="canplaythrough" tabindex="-1"><a class="header-anchor" href="#canplaythrough"><span>canplaythrough</span></a></h3><p>可以播放媒体文件时，触发事件（媒体文件已经全部加载）</p><h3 id="durationchange" tabindex="-1"><a class="header-anchor" href="#durationchange"><span>durationchange</span></a></h3><p><code>duration</code>属性更新时，触发事件。</p><h3 id="emptied" tabindex="-1"><a class="header-anchor" href="#emptied"><span>emptied</span></a></h3><p>当媒体资源为空时，触发事件（断网或者，媒体文件被移除）</p><h3 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h3><p>错误（如网络连接错误）导致无法加载资源的时，触发事件</p><h3 id="loadeddata" tabindex="-1"><a class="header-anchor" href="#loadeddata"><span>loadeddata</span></a></h3><p>事件在媒体当前播放位置的视频帧（通常是第一帧）加载完成后，触发事件</p><h3 id="loadeddata-data" tabindex="-1"><a class="header-anchor" href="#loadeddata-data"><span>loadeddata-data</span></a></h3><p>在元数据（metadata）被加载完成后，触发事件</p><h3 id="loadstart" tabindex="-1"><a class="header-anchor" href="#loadstart"><span>loadstart</span></a></h3><p>事件当浏览器开始载入一个资源文件时，触发事件</p><h3 id="play" tabindex="-1"><a class="header-anchor" href="#play"><span>play</span></a></h3><p>当 <code>paused</code> 属性由 <code>true</code> 转换为 fa\`lse 时，触发事件</p><h3 id="playing" tabindex="-1"><a class="header-anchor" href="#playing"><span>playing</span></a></h3><p>在播放准备开始时（之前被暂停或者由于数据缺乏被暂缓），触发事件</p><h3 id="progress" tabindex="-1"><a class="header-anchor" href="#progress"><span>progress</span></a></h3><p>进度，加载一个资源的时候周期性触发事件</p><h3 id="ratechange" tabindex="-1"><a class="header-anchor" href="#ratechange"><span>ratechange</span></a></h3><p>播放速率发生变化时，触发事件。</p><h3 id="seeked" tabindex="-1"><a class="header-anchor" href="#seeked"><span>seeked</span></a></h3><p>在用户已移动/跳跃到媒体的新播放位置时，触发事件</p><h3 id="seeking" tabindex="-1"><a class="header-anchor" href="#seeking"><span>seeking</span></a></h3><p>在用户开始移动/跳跃到媒体的新播放位置时，触发事件</p><h3 id="stalled" tabindex="-1"><a class="header-anchor" href="#stalled"><span>stalled</span></a></h3><p>获取媒体数据但数据意外未返回时，触发事件</p><h3 id="suspend" tabindex="-1"><a class="header-anchor" href="#suspend"><span>suspend</span></a></h3><p>当媒体数据加载暂停时，触发事件。</p><h3 id="timeupdate" tabindex="-1"><a class="header-anchor" href="#timeupdate"><span>timeupdate</span></a></h3><p>当currentTime更新时，触发事件。</p><h3 id="volumechange" tabindex="-1"><a class="header-anchor" href="#volumechange"><span>volumechange</span></a></h3><p>当音量调整时，触发事件</p><h3 id="waiting" tabindex="-1"><a class="header-anchor" href="#waiting"><span>waiting</span></a></h3><p>由于暂时缺少数据而停止播放时，触发事件。</p><h2 id="window" tabindex="-1"><a class="header-anchor" href="#window"><span>Window</span></a></h2><h3 id="afterprint" tabindex="-1"><a class="header-anchor" href="#afterprint"><span>afterprint</span></a></h3><h3 id="beforeprint" tabindex="-1"><a class="header-anchor" href="#beforeprint"><span>beforeprint</span></a></h3><h3 id="hashchange" tabindex="-1"><a class="header-anchor" href="#hashchange"><span>hashchange</span></a></h3><h3 id="languagechange" tabindex="-1"><a class="header-anchor" href="#languagechange"><span>languagechange</span></a></h3><h3 id="load" tabindex="-1"><a class="header-anchor" href="#load"><span>load</span></a></h3><h3 id="message" tabindex="-1"><a class="header-anchor" href="#message"><span>message</span></a></h3><h3 id="offline" tabindex="-1"><a class="header-anchor" href="#offline"><span>offline</span></a></h3><h3 id="online" tabindex="-1"><a class="header-anchor" href="#online"><span>online</span></a></h3><h3 id="pagehide" tabindex="-1"><a class="header-anchor" href="#pagehide"><span>pagehide</span></a></h3><h3 id="pageshow" tabindex="-1"><a class="header-anchor" href="#pageshow"><span>pageshow</span></a></h3><h3 id="rejectionhandled" tabindex="-1"><a class="header-anchor" href="#rejectionhandled"><span>rejectionhandled</span></a></h3><h3 id="storage" tabindex="-1"><a class="header-anchor" href="#storage"><span>storage</span></a></h3><h3 id="unhandledrejection" tabindex="-1"><a class="header-anchor" href="#unhandledrejection"><span>unhandledrejection</span></a></h3><h3 id="unload" tabindex="-1"><a class="header-anchor" href="#unload"><span>unload</span></a></h3>`,102)]))}const r=a(t,[["render",s],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/HTML/vki4x35o/","title":"HTML-事件","lang":"zh-CN","frontmatter":{"title":"HTML-事件","author":"老木求知者","createTime":"2024/05/13 16:07:32","permalink":"/HTML/vki4x35o/","description":"HTML事件 Docment DOMContentLoaded 当 HTML 文档完全解析，且所有延迟脚本（<script defer src=\\"…\\"> 和 <script type=\\"module\\">）下载和执行完毕后，会触发 DOMContentLoaded 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。 相似事件load readys...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.yuwb.cn/zmx-blog/HTML/vki4x35o/"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"HTML-事件"}],["meta",{"property":"og:description","content":"HTML事件 Docment DOMContentLoaded 当 HTML 文档完全解析，且所有延迟脚本（<script defer src=\\"…\\"> 和 <script type=\\"module\\">）下载和执行完毕后，会触发 DOMContentLoaded 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。 相似事件load readys..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T00:58:59.000Z"}],["meta",{"property":"article:author","content":"老木求知者"}],["meta",{"property":"article:modified_time","content":"2024-09-30T00:58:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML-事件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T00:58:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"老木求知者\\"}]}"]]},"headers":[{"level":2,"title":"Docment","slug":"docment","link":"#docment","children":[{"level":3,"title":"DOMContentLoaded","slug":"domcontentloaded","link":"#domcontentloaded","children":[]},{"level":3,"title":"readystatechange","slug":"readystatechange","link":"#readystatechange","children":[]}]},{"level":2,"title":"Element","slug":"element","link":"#element","children":[{"level":3,"title":"onauxclick","slug":"onauxclick","link":"#onauxclick","children":[]},{"level":3,"title":"blur","slug":"blur","link":"#blur","children":[]},{"level":3,"title":"click","slug":"click","link":"#click","children":[]},{"level":3,"title":"contextmenu","slug":"contextmenu","link":"#contextmenu","children":[]},{"level":3,"title":"focus","slug":"focus","link":"#focus","children":[]},{"level":3,"title":"select","slug":"select","link":"#select","children":[]},{"level":3,"title":"show","slug":"show","link":"#show","children":[]}]},{"level":2,"title":"HTMLDetailsElement","slug":"htmldetailselement","link":"#htmldetailselement","children":[{"level":3,"title":"toggle","slug":"toggle","link":"#toggle","children":[]}]},{"level":2,"title":"HTMLDialogElement","slug":"htmldialogelement","link":"#htmldialogelement","children":[{"level":3,"title":"cancel","slug":"cancel","link":"#cancel","children":[]},{"level":3,"title":"close","slug":"close","link":"#close","children":[]}]},{"level":2,"title":"HTMLElement","slug":"htmlelement","link":"#htmlelement","children":[{"level":3,"title":"input","slug":"input","link":"#input","children":[]}]},{"level":2,"title":"HTMLFormElement","slug":"htmlformelement","link":"#htmlformelement","children":[{"level":3,"title":"reset","slug":"reset","link":"#reset","children":[]},{"level":3,"title":"submit","slug":"submit","link":"#submit","children":[]}]},{"level":2,"title":"HTMLInputElement","slug":"htmlinputelement","link":"#htmlinputelement","children":[{"level":3,"title":"change","slug":"change","link":"#change","children":[]},{"level":3,"title":"invalid","slug":"invalid","link":"#invalid","children":[]}]},{"level":2,"title":"HTMLMediaElement","slug":"htmlmediaelement","link":"#htmlmediaelement","children":[{"level":3,"title":"abort","slug":"abort","link":"#abort","children":[]},{"level":3,"title":"canplay","slug":"canplay","link":"#canplay","children":[]},{"level":3,"title":"canplaythrough","slug":"canplaythrough","link":"#canplaythrough","children":[]},{"level":3,"title":"durationchange","slug":"durationchange","link":"#durationchange","children":[]},{"level":3,"title":"emptied","slug":"emptied","link":"#emptied","children":[]},{"level":3,"title":"error","slug":"error","link":"#error","children":[]},{"level":3,"title":"loadeddata","slug":"loadeddata","link":"#loadeddata","children":[]},{"level":3,"title":"loadeddata-data","slug":"loadeddata-data","link":"#loadeddata-data","children":[]},{"level":3,"title":"loadstart","slug":"loadstart","link":"#loadstart","children":[]},{"level":3,"title":"play","slug":"play","link":"#play","children":[]},{"level":3,"title":"playing","slug":"playing","link":"#playing","children":[]},{"level":3,"title":"progress","slug":"progress","link":"#progress","children":[]},{"level":3,"title":"ratechange","slug":"ratechange","link":"#ratechange","children":[]},{"level":3,"title":"seeked","slug":"seeked","link":"#seeked","children":[]},{"level":3,"title":"seeking","slug":"seeking","link":"#seeking","children":[]},{"level":3,"title":"stalled","slug":"stalled","link":"#stalled","children":[]},{"level":3,"title":"suspend","slug":"suspend","link":"#suspend","children":[]},{"level":3,"title":"timeupdate","slug":"timeupdate","link":"#timeupdate","children":[]},{"level":3,"title":"volumechange","slug":"volumechange","link":"#volumechange","children":[]},{"level":3,"title":"waiting","slug":"waiting","link":"#waiting","children":[]}]},{"level":2,"title":"Window","slug":"window","link":"#window","children":[{"level":3,"title":"afterprint","slug":"afterprint","link":"#afterprint","children":[]},{"level":3,"title":"beforeprint","slug":"beforeprint","link":"#beforeprint","children":[]},{"level":3,"title":"hashchange","slug":"hashchange","link":"#hashchange","children":[]},{"level":3,"title":"languagechange","slug":"languagechange","link":"#languagechange","children":[]},{"level":3,"title":"load","slug":"load","link":"#load","children":[]},{"level":3,"title":"message","slug":"message","link":"#message","children":[]},{"level":3,"title":"offline","slug":"offline","link":"#offline","children":[]},{"level":3,"title":"online","slug":"online","link":"#online","children":[]},{"level":3,"title":"pagehide","slug":"pagehide","link":"#pagehide","children":[]},{"level":3,"title":"pageshow","slug":"pageshow","link":"#pageshow","children":[]},{"level":3,"title":"rejectionhandled","slug":"rejectionhandled","link":"#rejectionhandled","children":[]},{"level":3,"title":"storage","slug":"storage","link":"#storage","children":[]},{"level":3,"title":"unhandledrejection","slug":"unhandledrejection","link":"#unhandledrejection","children":[]},{"level":3,"title":"unload","slug":"unload","link":"#unload","children":[]}]}],"readingTime":{"minutes":2.7,"words":810},"git":{"createdTime":1727657939000,"updatedTime":1727657939000,"contributors":[{"name":"zhoumengxiang","email":"mengxiang.zhou.h5@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/HTML/HTML-事件.md"}`);export{r as comp,c as data};
