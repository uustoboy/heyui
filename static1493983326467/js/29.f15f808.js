webpackJsonp([29],{181:function(e,s,o){var t=o(0)(o(731),o(900),null,null);t.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/message/message3.vue",t.esModule&&Object.keys(t.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] message3.vue: functional components are not supported with templates, they should use render functions."),e.exports=t.exports},731:function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={methods:{message:function(e){var s={info:"消息",success:"成功",warn:"警告",error:"错误",loading:"加载中"}[e];this.$Message[e]("这是一个"+s+"的消息")}}}},900:function(e,s,o){e.exports={render:function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("p",[o("button",{staticClass:"h-btn b-color-blue",on:{click:function(s){e.message("info")}}},[e._v("消息")]),e._v(" "),o("button",{staticClass:"h-btn b-color-green",on:{click:function(s){e.message("success")}}},[e._v("成功")]),e._v(" "),o("button",{staticClass:"h-btn b-color-yellow",on:{click:function(s){e.message("warn")}}},[e._v("警告")]),e._v(" "),o("button",{staticClass:"h-btn b-color-red",on:{click:function(s){e.message("error")}}},[e._v("错误")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});