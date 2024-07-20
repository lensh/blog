(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{530:function(t,e,a){"use strict";a.r(e);var s=a(62),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期"}},[t._v("#")]),t._v(" Vue生命周期")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"image"}})]),t._v(" "),a("ul",[a("li",[t._v("beforeCreate")]),t._v(" "),a("li",[t._v("created")]),t._v(" "),a("li",[t._v("beforeMount")]),t._v(" "),a("li",[t._v("mounted")]),t._v(" "),a("li",[t._v("beforeUpdate")]),t._v(" "),a("li",[t._v("updated")]),t._v(" "),a("li",[t._v("beforeDestroy")]),t._v(" "),a("li",[t._v("destroyed")]),t._v(" "),a("li",[t._v("activated")]),t._v(" "),a("li",[t._v("deactivated")])]),t._v(" "),a("p",[t._v("只有beforeCreate和created会在服务器端渲染期间被调用。")]),t._v(" "),a("h2",{attrs:{id:"beforecreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),a("p",[t._v("在beforeCreate之前会初始化生命周期、初始化事件、初始化渲染器。")]),t._v(" "),a("h2",{attrs:{id:"created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),a("p",[t._v("在beforeCreate之后，created之前会初始化注入、初始化状态。")]),t._v(" "),a("h2",{attrs:{id:"beforemount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),a("p",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("h2",{attrs:{id:"mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),a("p",[t._v("实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当mounted被调用时vm.$el也在文档内。")]),t._v(" "),a("p",[t._v("注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entire view has been rendered")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("h2",{attrs:{id:"beforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),a("p",[t._v("数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。")]),t._v(" "),a("h2",{attrs:{id:"updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),a("p",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。")]),t._v(" "),a("p",[t._v("当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。")]),t._v(" "),a("p",[t._v("注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updated")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entire view has been re-rendered")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("h2",{attrs:{id:"beforedestroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),a("p",[t._v("实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("h2",{attrs:{id:"destroyed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroyed"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),a("p",[t._v("实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("h2",{attrs:{id:"activated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activated"}},[t._v("#")]),t._v(" activated")]),t._v(" "),a("p",[t._v("被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("h2",{attrs:{id:"deactivated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deactivated"}},[t._v("#")]),t._v(" deactivated")]),t._v(" "),a("p",[t._v("被 keep-alive 缓存的组件停用时调用。该钩子在服务器端渲染期间不被调用。")])])}),[],!1,null,null,null);e.default=n.exports}}]);