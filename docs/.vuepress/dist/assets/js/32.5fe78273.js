(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{446:function(t,s,a){"use strict";a.r(s);var e=a(62),l=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"重排和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排和重绘"}},[t._v("#")]),t._v(" 重排和重绘")]),t._v(" "),a("h2",{attrs:{id:"重排-回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排-回流"}},[t._v("#")]),t._v(" 重排（回流）")]),t._v(" "),a("p",[t._v("当我们对 DOM 的修改引发了 DOM⼏何尺⼨的变化（⽐如修改元素的宽、⾼或隐藏元素等）时，浏览器需要重新计算元素的⼏何属性（其他元素的⼏何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流。")]),t._v(" "),a("p",[t._v("在以下情况会发生重排：")]),t._v(" "),a("ul",[a("li",[t._v("改变窗囗大小")]),t._v(" "),a("li",[t._v("改变文字大小")]),t._v(" "),a("li",[t._v("添加/删除样式表")]),t._v(" "),a("li",[t._v("内容的改变，如用户在输入框中敲字")]),t._v(" "),a("li",[t._v("激活伪类，如:hover (IE里是一个兄弟结点的伪类被激活)")]),t._v(" "),a("li",[t._v("操作class属性")]),t._v(" "),a("li",[t._v("脚本操作DOM")]),t._v(" "),a("li",[t._v("计算offsetWidth和offsetHeight")]),t._v(" "),a("li",[t._v("设置style属性")])]),t._v(" "),a("p",[t._v("重排是不可避免的，只能将reflow对性能的影响减到最小：")]),t._v(" "),a("h2",{attrs:{id:"重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[t._v("#")]),t._v(" 重绘")]),t._v(" "),a("p",[t._v("当我们对 DOM 的修改导致了样式的变化、却并未影响其⼏何属性（⽐如修改了颜⾊或背景⾊）时，浏览器不需重新计算元素的⼏何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。这个过程叫做重绘。由此我们可以看出，重绘不⼀定导致回流，回流⼀定会导致重绘。回流是影响最⼤的。")]),t._v(" "),a("p",[t._v("现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即16.6ms）才会清空队列，但当你获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值。主要包括以下属性或方法：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("offsetTop、offsetLeft、offsetWidth、offsetHeight\nscrollTop、scrollLeft、scrollWidth、scrollHeight\nclientTop、clientLeft、clientWidth、clientHeight\nwidth、height\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"减少重绘与重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少重绘与重排"}},[t._v("#")]),t._v(" 减少重绘与重排")]),t._v(" "),a("p",[t._v("（1）CSS")]),t._v(" "),a("ul",[a("li",[t._v("使用 transform 替代 top。")]),t._v(" "),a("li",[t._v("使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流。")]),t._v(" "),a("li",[t._v("避免使用table布局，可能很小的一个小改动会造成整个 table 的重新布局。")]),t._v(" "),a("li",[t._v("尽可能在DOM树的最末端改变class，回流是不可避免的，但可以减少其影响。尽可能在DOM树的最末端改变class，可以限制了回流的范围，使其影响尽可能少的节点。")]),t._v(" "),a("li",[t._v("避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点层级过多。")]),t._v(" "),a("li",[t._v("将动画效果应用到position属性为absolute或fixed的元素上，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 requestAnimationFrame。")]),t._v(" "),a("li",[t._v("避免使用CSS表达式，可能会引发回流。")]),t._v(" "),a("li",[t._v("将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点，例如will-change、video、iframe等标签，浏览器会自动将该节点变为图层。")]),t._v(" "),a("li",[t._v("CSS3 硬件加速（GPU加速），使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘 。但是对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。")])]),t._v(" "),a("p",[t._v("（2）JavaScript")]),t._v(" "),a("ul",[a("li",[t._v("避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。")]),t._v(" "),a("li",[t._v("避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。")]),t._v(" "),a("li",[t._v("避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。")]),t._v(" "),a("li",[t._v("对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。")])])])}),[],!1,null,null,null);s.default=l.exports}}]);