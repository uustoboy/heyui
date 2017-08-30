webpackJsonp([54],{1426:function(v,_){v.exports={render:function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"doc"},[t("h2",[v._v("Modal 弹出框")]),v._v(" "),t("h3",[v._v("Js调用")]),v._v(" "),t("h4",[v._v("使用方法调用Confirm")]),v._v(" "),t("example",{attrs:{demo:"message/modal5"}}),v._v(" "),t("h4",[v._v("使用方法调用Modal")]),v._v(" "),t("example",{attrs:{demo:"message/modal6"}}),v._v(" "),t("h4",[v._v("使用方法定义全屏的Modal")]),v._v(" "),t("example",{attrs:{demo:"message/modal12"}}),v._v(" "),t("h4",[v._v("使用方法定义复杂的Modal")]),v._v(" "),t("example",{attrs:{demo:"message/modal7"}}),v._v(" "),t("h3",[v._v("Vue调用")]),v._v(" "),t("h3",[v._v("普通的调用")]),v._v(" "),t("example",{attrs:{demo:"message/modal1"}}),v._v(" "),t("h3",[v._v("自定义的弹出框")]),v._v(" "),t("example",{attrs:{demo:"message/modal10"}}),v._v(" "),t("h3",[v._v("无遮罩弹出框")]),v._v(" "),t("example",{attrs:{demo:"message/modal2"}}),v._v(" "),t("h3",[v._v("点击遮罩无法关闭")]),v._v(" "),t("example",{attrs:{demo:"message/modal3"}}),v._v(" "),t("h4",[v._v("打开垂直居中的弹出框")]),v._v(" "),t("example",{attrs:{demo:"message/modal4"}}),v._v(" "),t("h4",[v._v("打开有分割线的弹出框")]),v._v(" "),t("example",{attrs:{demo:"message/modal9"}}),v._v(" "),t("h4",[v._v("打开全屏的Modal")]),v._v(" "),t("example",{attrs:{demo:"message/modal13"}}),v._v(" "),t("h3",[v._v("Vue调用组件式的Modal")]),v._v(" "),t("p",[v._v("系统开发中，我们经常使用到新增，编辑等功能性以及复用性很强的模块，这里我们提供modal的组件式调用，帮助开发中更好的编写。")]),v._v(" "),t("example",{attrs:{demo:"message/modal8"}}),v._v(" "),t("h3",[v._v("Js调用组件式的Modal")]),v._v(" "),t("p",[v._v("使用js调用弹出的组件式Modal，这样不仅方便参数的使用，还可以将js代码集成调用。")]),v._v(" "),t("blockquote",[v._v("弹出框中使用的组件和上方Vue调用的组件是同一个，两种方式都能兼容。")]),v._v(" "),t("example",{attrs:{demo:"message/modal11"}}),v._v(" "),t("blockquote",[v._v("弹出框中使用的代码")]),v._v(" "),t("codes",{attrs:{src:"/message/modalTest.vue",type:"html"}}),v._v(" "),t("h3",[v._v("Modal方法 参数")]),v._v(" "),v._m(0),v._v(" "),t("h3",[v._v("Modal组件 参数")]),v._v(" "),v._m(1)],1)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("table",{staticClass:"table"},[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("可选值")]),v._v(" "),t("th",[v._v("默认值")])]),v._v(" "),t("tr",[t("td",[v._v("hasCloseIcon")]),v._v(" "),t("td",[v._v("是否有关闭的Icon")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("true")])]),v._v(" "),t("tr",[t("td",[v._v("hasMask")]),v._v(" "),t("td",[v._v("是否有遮罩层")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("true")])]),v._v(" "),t("tr",[t("td",[v._v("content")]),v._v(" "),t("td",[v._v("设定内容")]),v._v(" "),t("td",[v._v("String")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("width")]),v._v(" "),t("td",[v._v("设定宽度")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("hasDivider")]),v._v(" "),t("td",[v._v("是否有线条分割头部以及尾部")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("全局配置modal.hasDivider")])]),v._v(" "),t("tr",[t("td",[v._v("closeOnMask")]),v._v(" "),t("td",[v._v("是否点击遮罩层关闭modal")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("true")])]),v._v(" "),t("tr",[t("td",[v._v("middle")]),v._v(" "),t("td",[v._v("是否垂直居中展示")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("fullScreen")]),v._v(" "),t("td",[v._v("是否全屏")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("buttons")]),v._v(" "),t("td",[v._v("设定底层按钮")]),v._v(" "),t("td",[v._v("Array")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("['cancel']")])]),v._v(" "),t("tr",[t("td",[v._v("events")]),v._v(" "),t("td",[v._v("事件监听")]),v._v(" "),t("td",[v._v("Object")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])])])},function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("table",{staticClass:"table"},[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("可选值")]),v._v(" "),t("th",[v._v("默认值")])]),v._v(" "),t("tr",[t("td",[v._v("hasCloseIcon")]),v._v(" "),t("td",[v._v("是否有关闭的Icon")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("true")])]),v._v(" "),t("tr",[t("td",[v._v("hasMask")]),v._v(" "),t("td",[v._v("是否有遮罩层")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("true")])]),v._v(" "),t("tr",[t("td",[v._v("hasDivider")]),v._v(" "),t("td",[v._v("是否有线条分割头部以及尾部")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("全局配置modal.hasDivider")])]),v._v(" "),t("tr",[t("td",[v._v("closeOnMask")]),v._v(" "),t("td",[v._v("是否点击遮罩层关闭modal")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("true")])]),v._v(" "),t("tr",[t("td",[v._v("middle")]),v._v(" "),t("td",[v._v("是否垂直居中展示")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("fullScreen")]),v._v(" "),t("td",[v._v("是否全屏")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("false")])])])}]}},896:function(v,_,t){var e=t(1)(null,t(1426),null,null,null);v.exports=e.exports}});