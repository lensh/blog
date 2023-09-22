(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{453:function(t,s,a){"use strict";a.r(s);var n=a(62),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"伪类和伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类和伪元素"}},[t._v("#")]),t._v(" 伪类和伪元素")]),t._v(" "),a("h2",{attrs:{id:"伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[t._v("#")]),t._v(" 伪类")]),t._v(" "),a("p",[t._v("伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。虽然它和普通的css类相似，可以为已有的元素添加样式，但是它只有处于dom树无法描述的状态下才能为元素添加样式，所以将其称为伪类。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("link => 　　a "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("标签（默认）")]),t._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hover =>　　鼠标放在a标签\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("active =>　　鼠标点a标签\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("visited =>　　a 标签被访问过\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("//"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("表单元素")]),t._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("focus => 　匹配已聚焦点的表单元素\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("enabled =>　　匹配已经启用的表单元素（默认）\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("disabled =>　　匹配禁用的表单元素\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("checked =>　　匹配被选中的表单元素\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("root =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("匹配根元素即html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("not")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" =>选择不是p的所有元素\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("empty =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择没有子节点的p，包括空格")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("target =>用来修改被点击的a标签所对应的锚点的样式 eg：```<a href="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#mao1"')]),t._v("></a>``` 点击这个a 对应的```<p id="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mao1"')]),t._v("></p>```"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("样式会被修改。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择属性lang的值为en的元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-of-type =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-of-type //"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个父容器内的第一个p元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("last-of-type =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("last-of-type //"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个父容器内的倒数第一个p元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nth-of-type =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth-of-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" //"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个父容器内的第二个p元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nth-last-of-type =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nth-last-of-type //"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个父容器内的倒数第二个p元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("only-of-type =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("only-of-type //"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个只有一个p元素的父容器内的p元素（父元素可包含多个其他元素）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("only-child =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("only-child //"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个有且仅有一个p元素的父容器内的p元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-child =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-child//"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个父容器中的第一个且为p的子元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("last-child =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("last-child//"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个父容器中的最后一个且为p的子元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth-child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" =>"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth-child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("//"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("选择每个父容器中的第二个且为p的子元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth-last-child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth-last-child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" //选择每个父容器中的倒数第二个且为p的子元素\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("h2",{attrs:{id:"伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[t._v("#")]),t._v(" 伪元素")]),t._v(" "),a("p",[t._v("伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过:before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。")]),t._v(" "),a("p",[t._v("css3规定伪元素由两个冒号开头作为标示::,可能会改变dom结构，创建虚拟dom。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("before"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("after //这两个伪类会在选择的元素的前面和后面创建虚拟dom "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("通常和content联合shiyong")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-letter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("first-line //"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("这两个伪类只要用于改变选中元素内文本节点的第一个字母，第一行的样式")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("selection //用于修改用户用鼠标选中的文本的样式，仅限于color、background、cursor、outline的修改。IE9+、Opera、Google Chrome 以及 Safari "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("中支持")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("selection 选择器。Firefox "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("支持替代的")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("-moz-selection\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("p",[t._v("伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档树外的元素。因此，伪类与伪元素的区别在于："),a("strong",[t._v("有没有创建一个文档树之外的元素")]),t._v("。")]),t._v(" "),a("p",[t._v("CSS3规范中的要求使用双冒号(::)表示伪元素，以此来区分伪元素和伪类，比如::before和::after等伪元素使用双冒号 ::，:hover和:active等伪类使用单冒号 : 。除了一些低于IE8版本的浏览器外，大部分浏览器都支持伪元素的双冒号(::)表示方法。")])])}),[],!1,null,null,null);s.default=p.exports}}]);