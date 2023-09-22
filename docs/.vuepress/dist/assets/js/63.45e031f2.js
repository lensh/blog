(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{477:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("h2",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),a("p",[t._v("6 种基本数据类型：Boolean、String、Number、Null、Undefined、Symbol（ES6 新定义）。基本数据类型也叫原始类型。")]),t._v(" "),a("p",[t._v("typeof 对于原始类型来说，除了 null（null显示为Object） 都可以显示正确的类型。")]),t._v(" "),a("p",[t._v("原始类型存储的都是值，是没有函数可以调用的。但是'1'.toString()是可以使用的。其实在这种情况下，'1'已经不是原始类型了，而是被强制转换成了 String 类型也就是对象类型，所以可以调用 toString 函数。")]),t._v(" "),a("p",[t._v("另外对于 null 来说，很多人会认为他是个对象类型，其实这是错误的。虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是32位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug却是一直流传下来。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/f40a77bbd74e",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解和使用ES6中的Symbol"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[t._v("#")]),t._v(" 引用类型")]),t._v(" "),a("p",[t._v("引用类型：Object【Object是个大类，function函数、array数组、date日期...等都归属于Object】。")]),t._v(" "),a("p",[t._v("typeof 对于对象来说，除了函数（函数显示为function）都会显示object。")]),t._v(" "),a("p",[t._v("在 JS 中，除了基本数据类型那么其他的都是对象类型了。基本数据类型存储的是值，对象类型存储的是地址。")]),t._v(" "),a("p",[t._v("函数参数是对象的情况：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v("\n  person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" person\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> ?")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> ?")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ul",[a("li",[t._v("首先，函数传参是传递对象指针的副本")]),t._v(" "),a("li",[t._v("到函数内部修改参数的属性这步，我相信大家都知道，当前 p1 的值也被修改了")]),t._v(" "),a("li",[t._v("但是当我们重新为 person 分配了一个对象时就出现了分歧，请看下图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/js-2-1.png",alt:"image"}})]),t._v(" "),a("p",[t._v("所以最后 person 拥有了一个新的地址（指针），也就和 p1 没有任何关系了，导致了最终两个变量的值是不相同的。")]),t._v(" "),a("h2",{attrs:{id:"typeof-vs-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-vs-instanceof"}},[t._v("#")]),t._v(" typeof VS instanceof")]),t._v(" "),a("p",[t._v("typeof 对于原始类型来说，除了 null（null显示为Object） 都可以显示正确的类型。")]),t._v(" "),a("p",[t._v("typeof 对于对象来说，除了函数（函数显示为function）都会显示object，所以说 typeof 并不能准确判断对象是什么类型。")]),t._v(" "),a("p",[t._v("记住typeof这两个特殊的就行：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("想判断一个对象的正确类型，这时候可以考虑使用instanceof，因为内部机制是通过原型链来判断的。")]),t._v(" "),a("h2",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),a("p",[t._v("在 JS 中类型转换只有三种情况，分别是：")]),t._v(" "),a("ul",[a("li",[t._v("转换为布尔值")]),t._v(" "),a("li",[t._v("转换为数字")]),t._v(" "),a("li",[t._v("转换为字符串")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/js-2-2.png",alt:"image"}})]),t._v(" "),a("p",[t._v("对象转原始类型：")]),t._v(" "),a("ul",[a("li",[t._v("转字符串类型就调用 x.toString()")]),t._v(" "),a("li",[t._v("转基础类型就调用 x.valueOf()")])]),t._v(" "),a("p",[t._v("当然你也可以重写 Symbol.toPrimitive，该方法在转原始类型时调用优先级最高。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toPrimitive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"相等运算符的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相等运算符的规则"}},[t._v("#")]),t._v(" 相等运算符的规则")]),t._v(" "),a("p",[t._v("[] == []为false，[] == ![]为true")]),t._v(" "),a("p",[t._v("相等运算符的运算规则如下：")]),t._v(" "),a("p",[t._v("1、如果两个值类型相同，进行 === 比较。")]),t._v(" "),a("p",[t._v("2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：")]),t._v(" "),a("p",[t._v("（1）如果一个是null、一个是undefined，那么[相等]。")]),t._v(" "),a("p",[t._v("（2）如果任一值是字符串，另一个值是数值，在比较相等性之前先将字符串转换为数值；即是调用Number()函数。")]),t._v(" "),a("p",[t._v("（3）如果任一值是布尔值，则在比较相等性之前先将其转换为数值，即是调用Number()函数。")]),t._v(" "),a("p",[t._v("（4）如果一个是对象，另一个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的toString或者valueOf方法。 js核心内置类，会尝试valueOf先于toString；例外的是Date，Date利用的是toString转换。")]),t._v(" "),a("p",[t._v("再次分析 [ ] == ![ ]这道题：")]),t._v(" "),a("p",[t._v("(1）看见 ![ ]这个是要对空数组转成布尔类型结果得到![ ] = false,")]),t._v(" "),a("p",[t._v("(2)发现此时符合第三条，如果任一值是布尔类型是需要将其转换为数值，即Number(false),结果为 Number(false) = 0。")]),t._v(" "),a("p",[t._v("(3)此时得到 [ ] == 0比较，此时符合第四条 即 [ ].toString()；结果为[].toString() = ” ”;")]),t._v(" "),a("p",[t._v("(4)此时得到 ” ” == 0,发现符合第二条即Number(“”)；\n结果为Number(” ”) = 0;n")]),t._v(" "),a("p",[t._v("(5)此时得到 0 == 0 两个同时为数值类型比较所以结果为true;")]),t._v(" "),a("p",[t._v('需要注意的是，数组会先通过调用toString()转换为字符串后再转换为数值，比如[true]转换为字符串后为"true"，然后再转换为数值是NaN，所以[true]==1返回false。')]),t._v(" "),a("p",[a("strong",[t._v("事实上，数组、对象和函数在与其他基本数据类型进行比较时都会先转换为字符串，然后再转换为相应的数据类型.")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/a111336c3d18",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);