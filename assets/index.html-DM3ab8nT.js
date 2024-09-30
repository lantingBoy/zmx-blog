import{_ as t,c as a,a as i,o as l}from"./app-DfBtXpVe.js";const c={};function n(o,e){return l(),a("div",null,e[0]||(e[0]=[i('<h1 id="https-原理解析" tabindex="-1"><a class="header-anchor" href="#https-原理解析"><span>HTTPS 原理解析</span></a></h1><blockquote><p>HTTPS 保证了 Web 数据传输过程中的传输安全</p></blockquote><blockquote><p>HTTPS：采用 对称加密 和 非对称加密 结合以及数字证书的方式来保护浏览器和服务端之间的通信安全。</p></blockquote><h2 id="不进行加密" tabindex="-1"><a class="header-anchor" href="#不进行加密"><span>不进行加密</span></a></h2><p>明文传输：在客户端和服务器数据传输过程中，黑客可以获取到传输的账号密码，非常不安全</p><div class="hint-container tip"><p class="hint-container-title">注意</p><p>明文就相当于裸奔</p></div><h2 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密"><span>对称加密</span></a></h2><blockquote><p>服务器每次发送真实数据前，会先生成一把密钥传输(以明文方式传输密钥容易被劫持)给客户端，服务器给客户端发送的真实数据会先用这把密钥进行加密，客户端收到加密数据后再用密钥进行解密(客户端给服务器发送数据同理)</p></blockquote><ul><li>对客户端要发送的数据用秘钥进行加密</li><li>以密文形式放给服务器端</li><li>服务器端对密文用秘钥进行解密</li></ul><div class="hint-container tip"><p class="hint-container-title">注意</p><p><code>F(K,data)=X</code></p><p><code>F(K,X)=data</code></p><p>对称加密，K 只有一个，客户端和服务器端都是用 K 进行加密解密</p><p>K 可能会被劫持，因此不安全</p></div><h2 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密"><span>非对称加密</span></a></h2><p>非对称加密：</p><blockquote><p>客户端和服务器都有两把密钥，一把公钥一把私钥(公钥加密的数据只有私钥才能解密，私钥加密的数据只有公钥才能解密)，服务器在给客户端发送真实数据前，先用客户端明文传输给服务器的公钥进行加密，客户端收到后用自己的私钥进行解密，反之同理</p></blockquote><ul><li>对客户端要发送的数据用公钥进行加密</li><li>以密文形式放给服务器端</li><li>服务器端对密文用私钥进行解密（反之同理）</li></ul><div class="hint-container tip"><p class="hint-container-title">注意</p><p><code>F(pK,data)=X</code></p><p><code>F(sK,X)=data</code></p><p><code>F(sk,data)=Y</code></p><p><code>F(pK,Y)=data</code></p><p>非对称加密，有两个秘钥，一个公钥一个秘钥。pK 所有人都可以拿，sK 只有服务器端有。</p><p>服务器端到客户端不安全</p></div><h2 id="对称和非对称结合" tabindex="-1"><a class="header-anchor" href="#对称和非对称结合"><span>对称和非对称结合</span></a></h2><p>服务器端有公钥和私钥</p><ul><li>客户端 向 服务器端 索要 pK</li><li>服务器端 返回 pK</li><li>使用公钥对相关字符串（K）进行加密 Y 之后上传给服务器端</li><li>服务器端对 Y 进行解密 获取到字符串（K）</li><li>该字符串（K）就是为 后续进行对称加密的 公钥（K）</li></ul><div class="hint-container tip"><p class="hint-container-title">注意</p><p>中间人劫持，当客户端向服务器端索要公钥时，被中间人拦截，返回假的公钥 k</p></div><h2 id="对称-非对称-ca-机构-认证" tabindex="-1"><a class="header-anchor" href="#对称-非对称-ca-机构-认证"><span>对称+非对称+CA 机构 认证</span></a></h2><p>CA：存放 cPK 和 cSK 服务器端：PK 和 SK</p><ul><li>客户端 向 服务器端 索要 license</li><li>服务器端：F(cSK,PK)=license（CA 端运行返回给服务器端 license）,返回 license</li><li>cPK（写死在客户端，不需要再去 CA 机构获取）</li><li>然后通过客户端 F(license,cPK)=PK 获取 PK</li></ul><h3 id="详细步骤" tabindex="-1"><a class="header-anchor" href="#详细步骤"><span>详细步骤</span></a></h3><p>访问百度为例：</p><ul><li>1.客户端--&gt;服务器端 支持 SSL 版本，非对称算法，随机数 1</li><li>2.服务器端--&gt;客户端 定下 SSL 使用版本，对称算法，随机数 2，证书（从 CA 获取）</li><li>3.客户端 证书认证</li><li>4.客户端--&gt;服务器端 随机数 3 Hash(随机数 1，随机数 2)==XXX</li><li>5.服务器端 判断 XXX==Hash(随机数 1，随机数 2)，查看客户端传来的 XXX 和自身 hash 计算的 XXX 是否一致，认证成功后，随机数 1,2,3 生成 K</li><li>6.服务器端--&gt;客户端 hash(第一，第二，第四步) 所有的值生成一个数值 ZZ</li><li>7.客户端 也生成一个数值 ZZ hash(第一，第二，第四步) =ZZ，查看本地生成的是否和服务器端传送的一致，一致则也用随机数 1,2,3 生成一个 K，后续使用 K 进行对称加密</li></ul>',25)]))}const r=t(c,[["render",n],["__file","index.html.vue"]]),s=JSON.parse(`{"path":"/article/lfb2eosp/","title":"计算机基础-HTTPS原理解析","lang":"zh-CN","frontmatter":{"title":"计算机基础-HTTPS原理解析","author":"老木求知者","createTime":"2024/05/10 16:02:55","permalink":"/article/lfb2eosp/","tags":["计算机基础","网络安全","HTTPS"],"description":"HTTPS 原理解析 HTTPS 保证了 Web 数据传输过程中的传输安全 HTTPS：采用 对称加密 和 非对称加密 结合以及数字证书的方式来保护浏览器和服务端之间的通信安全。 不进行加密 明文传输：在客户端和服务器数据传输过程中，黑客可以获取到传输的账号密码，非常不安全 注意 明文就相当于裸奔 对称加密 服务器每次发送真实数据前，会先生成一把密钥传...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.yuwb.cn/zmx-blog/article/lfb2eosp/"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"计算机基础-HTTPS原理解析"}],["meta",{"property":"og:description","content":"HTTPS 原理解析 HTTPS 保证了 Web 数据传输过程中的传输安全 HTTPS：采用 对称加密 和 非对称加密 结合以及数字证书的方式来保护浏览器和服务端之间的通信安全。 不进行加密 明文传输：在客户端和服务器数据传输过程中，黑客可以获取到传输的账号密码，非常不安全 注意 明文就相当于裸奔 对称加密 服务器每次发送真实数据前，会先生成一把密钥传..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T00:58:59.000Z"}],["meta",{"property":"article:author","content":"老木求知者"}],["meta",{"property":"article:tag","content":"计算机基础"}],["meta",{"property":"article:tag","content":"网络安全"}],["meta",{"property":"article:tag","content":"HTTPS"}],["meta",{"property":"article:modified_time","content":"2024-09-30T00:58:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机基础-HTTPS原理解析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T00:58:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"老木求知者\\"}]}"]]},"headers":[{"level":2,"title":"不进行加密","slug":"不进行加密","link":"#不进行加密","children":[]},{"level":2,"title":"对称加密","slug":"对称加密","link":"#对称加密","children":[]},{"level":2,"title":"非对称加密","slug":"非对称加密","link":"#非对称加密","children":[]},{"level":2,"title":"对称和非对称结合","slug":"对称和非对称结合","link":"#对称和非对称结合","children":[]},{"level":2,"title":"对称+非对称+CA 机构 认证","slug":"对称-非对称-ca-机构-认证","link":"#对称-非对称-ca-机构-认证","children":[{"level":3,"title":"详细步骤","slug":"详细步骤","link":"#详细步骤","children":[]}]}],"readingTime":{"minutes":3.43,"words":1028},"git":{"createdTime":1727657939000,"updatedTime":1727657939000,"contributors":[{"name":"zhoumengxiang","email":"mengxiang.zhou.h5@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"[202405]/计算机基础-HTTPS原理解析.md","categoryList":[{"id":"fa0690","sort":10003,"name":"[202405]"}]}`);export{r as comp,s as data};
