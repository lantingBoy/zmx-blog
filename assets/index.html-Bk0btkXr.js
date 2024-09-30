import{_ as i,c as a,a as e,o as l}from"./app-DZa6urO8.js";const n={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="git-基础命令" tabindex="-1"><a class="header-anchor" href="#git-基础命令"><span>Git 基础命令</span></a></h1><h2 id="git-忽略文件" tabindex="-1"><a class="header-anchor" href="#git-忽略文件"><span>Git 忽略文件</span></a></h2><ul><li>在仓库的根目录下创建一个 .gitignore 文件</li><li>将不需要被 git 管理的文件路径 写到 gitignore 文件中</li><li><code>idea.txt</code> 忽视 idea.txt 文件</li><li><code>.gitignore</code> 忽视.gitignore 文件</li><li><code>css/index.js</code> 忽视 css 下的 index.js</li><li><code>css/*.js</code> 忽视 css 下的所有 js 文件</li><li><code>css</code> 忽视 css 文件夹</li></ul><h2 id="git-基础操作" tabindex="-1"><a class="header-anchor" href="#git-基础操作"><span>Git 基础操作</span></a></h2><h3 id="工作区-暂存区-与仓库区" tabindex="-1"><a class="header-anchor" href="#工作区-暂存区-与仓库区"><span>工作区，暂存区，与仓库区</span></a></h3><ul><li>工作区：书写代码的区域</li><li>暂存区：暂时存储的区域，git 无法直接从工作区提交到仓库区，需要 先从工作区添加到暂存区，然后才能提交到仓库区。可以避免一些错误操作</li><li>仓库区：将保存在暂存区的内容保存到 Git 仓库中，生成版本号，可以根据版本号回退到指定版本的代码</li></ul><h3 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置"><span>Git 配置</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//设置用户名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  config</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --global</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user.name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  用户名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//设置邮箱</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> config</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --global</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user.email</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  邮箱</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看配置信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> config</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-初始化" tabindex="-1"><a class="header-anchor" href="#git-初始化"><span>Git 初始化</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="将文件添加到暂存区" tabindex="-1"><a class="header-anchor" href="#将文件添加到暂存区"><span>将文件添加到暂存区</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//将选择文件添加到暂存区/文件夹/所有的js文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  文件名称/文件夹名称/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//添加当前目录下的所有文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./-A/--all</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暂存区提交到仓库" tabindex="-1"><a class="header-anchor" href="#暂存区提交到仓库"><span>暂存区提交到仓库</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//将文件从暂存区提交到仓库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 添加说明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 修改上一次提交说明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --amend</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 提交说明</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看-log-和-reflog" tabindex="-1"><a class="header-anchor" href="#查看-log-和-reflog"><span>查看 Log 和 reflog</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看提交的日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> log</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看所有的版本信息，回退之后也可以查看</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reflog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="diff-版本比较相关" tabindex="-1"><a class="header-anchor" href="#diff-版本比较相关"><span>Diff 版本比较相关</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看工作区与暂存区的不同</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看工作区域仓库区的不同</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> diff</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --cached</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看工作区域仓库区的不同，最新提交比较</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> diff</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//比较两次版本的不同</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> diff</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  版本号</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  版本号</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset-回退相关" tabindex="-1"><a class="header-anchor" href="#reset-回退相关"><span>reset 回退相关</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//回退到指定版本号</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reset</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 版本号</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//回退到上一次提交/上上次提交/本次提交</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reset</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> head~1/head~2/head~0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 其他参数</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --soft</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 只重置仓库区</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --mixed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 重置仓库区和暂存区</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 重置仓库区暂存区和工作区</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="branch-分支相关" tabindex="-1"><a class="header-anchor" href="#branch-分支相关"><span>Branch 分支相关</span></a></h2><div class="hint-container tip"><p class="hint-container-title">注意</p><p>在 git 中，有一个特殊分支 HEAD 永远指向当前分支</p></div><h3 id="创建切换分支" tabindex="-1"><a class="header-anchor" href="#创建切换分支"><span>创建切换分支</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看分支</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> branch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//创建分支</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> branch</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//切换分支</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> checkout</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//创建新分支并切换到该分支</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> chekcout</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -b</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除合并分支" tabindex="-1"><a class="header-anchor" href="#删除合并分支"><span>删除合并分支</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//删除分支</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> branch</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//合并分支</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  将其他分支的内容合并到当前分支</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> merge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意</p><p>不能在当前分支删除当前分支，需要切换到其他分支才能删除</p></div><h2 id="git-远程仓库" tabindex="-1"><a class="header-anchor" href="#git-远程仓库"><span>Git 远程仓库</span></a></h2><ul><li>Github，GitLab 和码云</li></ul><h3 id="克隆代码" tabindex="-1"><a class="header-anchor" href="#克隆代码"><span>克隆代码</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 远程仓库地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="克隆远程指定分支到本地" tabindex="-1"><a class="header-anchor" href="#克隆远程指定分支到本地"><span>克隆远程指定分支到本地</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 克隆远程仓库指定分支到本地</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -b</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 远程分支名</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  仓库地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程仓库操作" tabindex="-1"><a class="header-anchor" href="#远程仓库操作"><span>远程仓库操作</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//拉取远程仓库代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 远程仓库地址</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//将本地仓库中代码提交到远程仓库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> push</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 远程仓库地址</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="仓库别名" tabindex="-1"><a class="header-anchor" href="#仓库别名"><span>仓库别名</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//给远程仓库起一个别名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> remote</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 仓库别名</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 仓库地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//删除别名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> remote</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 仓库别名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tag-相关" tabindex="-1"><a class="header-anchor" href="#tag-相关"><span>Tag 相关</span></a></h2><h3 id="创建-tag" tabindex="-1"><a class="header-anchor" href="#创建-tag"><span>创建 tag</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag名称</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag备注</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="推送-tag" tabindex="-1"><a class="header-anchor" href="#推送-tag"><span>推送 Tag</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  push</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> origin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --tag</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="拉取-tag" tabindex="-1"><a class="header-anchor" href="#拉取-tag"><span>拉取 Tag</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> origin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --tag</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="根据-tag-回退到之前版本" tabindex="-1"><a class="header-anchor" href="#根据-tag-回退到之前版本"><span>根据 Tag 回退到之前版本</span></a></h3><h4 id="查看所有-tag" tabindex="-1"><a class="header-anchor" href="#查看所有-tag"><span>查看所有 tag</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="查看指定-tag-找出打标签的那次提交-commit-id" tabindex="-1"><a class="header-anchor" href="#查看指定-tag-找出打标签的那次提交-commit-id"><span>查看指定 tag 找出打标签的那次提交 <code>commit id</code></span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> show</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tag名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="版本回退-创建分支" tabindex="-1"><a class="header-anchor" href="#版本回退-创建分支"><span>版本回退，创建分支</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//版本回退</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reset</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  提交commit-id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//创建分支并切换到新分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> checkout</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -b</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 分支名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意</p><p>通过标签回退版本后，需要创建一个新的分支，然后当前主干分支要立即回到原来的位置。在新的分支上修改代码</p></div><h4 id="原分支立即回到原来的提交位置" tabindex="-1"><a class="header-anchor" href="#原分支立即回到原来的提交位置"><span>原分支立即回到原来的提交位置</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//切换到之前分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> checkout</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 之前分支名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//查看之前分支的原来位置提交id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reflog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 主分支回到原来提交位置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reset</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  原来提交commit-id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后续，切换分支，在新建分支上修改代码</p><h2 id="stash-储藏" tabindex="-1"><a class="header-anchor" href="#stash-储藏"><span>stash 储藏</span></a></h2><p>Git 储藏（stashing）是一种将当前工作进度保存起来的方法，以便可以切换到其他分支进行其他工作，而不会丢失当前的工作进度。</p><h3 id="储藏当前更改" tabindex="-1"><a class="header-anchor" href="#储藏当前更改"><span>储藏当前更改</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="最近储藏" tabindex="-1"><a class="header-anchor" href="#最近储藏"><span>最近储藏</span></a></h3><ol><li>展示所有储藏</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>应用最近的储藏</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>删除最近的储藏</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> drop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>应用并删除最近的储藏</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="指定储藏" tabindex="-1"><a class="header-anchor" href="#指定储藏"><span>指定储藏</span></a></h3><ol><li>应用指定的储藏</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash@{储藏编号}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>删除指定的储藏</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> drop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash@{储藏编号}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>应用并删除指定的储藏</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stash@{储藏编号}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,75)]))}const p=i(n,[["render",t],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/Git/h8hjd37u/","title":"Git基础命令","lang":"zh-CN","frontmatter":{"title":"Git基础命令","author":"老木求知者","createTime":"2024/05/11 21:16:42","permalink":"/Git/h8hjd37u/","description":"Git 基础命令 Git 忽略文件 在仓库的根目录下创建一个 .gitignore 文件 将不需要被 git 管理的文件路径 写到 gitignore 文件中 idea.txt 忽视 idea.txt 文件 .gitignore 忽视.gitignore 文件 css/index.js 忽视 css 下的 index.js css/*.js 忽视 cs...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.yuwb.cn/Git/h8hjd37u/"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"Git基础命令"}],["meta",{"property":"og:description","content":"Git 基础命令 Git 忽略文件 在仓库的根目录下创建一个 .gitignore 文件 将不需要被 git 管理的文件路径 写到 gitignore 文件中 idea.txt 忽视 idea.txt 文件 .gitignore 忽视.gitignore 文件 css/index.js 忽视 css 下的 index.js css/*.js 忽视 cs..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T00:58:59.000Z"}],["meta",{"property":"article:author","content":"老木求知者"}],["meta",{"property":"article:modified_time","content":"2024-09-30T00:58:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git基础命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T00:58:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"老木求知者\\"}]}"]]},"headers":[{"level":2,"title":"Git 忽略文件","slug":"git-忽略文件","link":"#git-忽略文件","children":[]},{"level":2,"title":"Git 基础操作","slug":"git-基础操作","link":"#git-基础操作","children":[{"level":3,"title":"工作区，暂存区，与仓库区","slug":"工作区-暂存区-与仓库区","link":"#工作区-暂存区-与仓库区","children":[]},{"level":3,"title":"Git 配置","slug":"git-配置","link":"#git-配置","children":[]},{"level":3,"title":"Git 初始化","slug":"git-初始化","link":"#git-初始化","children":[]},{"level":3,"title":"将文件添加到暂存区","slug":"将文件添加到暂存区","link":"#将文件添加到暂存区","children":[]},{"level":3,"title":"暂存区提交到仓库","slug":"暂存区提交到仓库","link":"#暂存区提交到仓库","children":[]},{"level":3,"title":"查看 Log 和 reflog","slug":"查看-log-和-reflog","link":"#查看-log-和-reflog","children":[]},{"level":3,"title":"Diff 版本比较相关","slug":"diff-版本比较相关","link":"#diff-版本比较相关","children":[]},{"level":3,"title":"reset 回退相关","slug":"reset-回退相关","link":"#reset-回退相关","children":[]}]},{"level":2,"title":"Branch 分支相关","slug":"branch-分支相关","link":"#branch-分支相关","children":[{"level":3,"title":"创建切换分支","slug":"创建切换分支","link":"#创建切换分支","children":[]},{"level":3,"title":"删除合并分支","slug":"删除合并分支","link":"#删除合并分支","children":[]}]},{"level":2,"title":"Git 远程仓库","slug":"git-远程仓库","link":"#git-远程仓库","children":[{"level":3,"title":"克隆代码","slug":"克隆代码","link":"#克隆代码","children":[]},{"level":3,"title":"克隆远程指定分支到本地","slug":"克隆远程指定分支到本地","link":"#克隆远程指定分支到本地","children":[]},{"level":3,"title":"远程仓库操作","slug":"远程仓库操作","link":"#远程仓库操作","children":[]},{"level":3,"title":"仓库别名","slug":"仓库别名","link":"#仓库别名","children":[]}]},{"level":2,"title":"Tag 相关","slug":"tag-相关","link":"#tag-相关","children":[{"level":3,"title":"创建 tag","slug":"创建-tag","link":"#创建-tag","children":[]},{"level":3,"title":"推送 Tag","slug":"推送-tag","link":"#推送-tag","children":[]},{"level":3,"title":"拉取 Tag","slug":"拉取-tag","link":"#拉取-tag","children":[]},{"level":3,"title":"根据 Tag 回退到之前版本","slug":"根据-tag-回退到之前版本","link":"#根据-tag-回退到之前版本","children":[]}]},{"level":2,"title":"stash 储藏","slug":"stash-储藏","link":"#stash-储藏","children":[{"level":3,"title":"储藏当前更改","slug":"储藏当前更改","link":"#储藏当前更改","children":[]},{"level":3,"title":"最近储藏","slug":"最近储藏","link":"#最近储藏","children":[]},{"level":3,"title":"指定储藏","slug":"指定储藏","link":"#指定储藏","children":[]}]}],"readingTime":{"minutes":4.4,"words":1320},"git":{"createdTime":1727657939000,"updatedTime":1727657939000,"contributors":[{"name":"zhoumengxiang","email":"mengxiang.zhou.h5@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/Git/Git基础命令.md"}`);export{p as comp,r as data};
