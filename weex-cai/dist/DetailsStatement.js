// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports) {

module.exports = {
  "statementContentStyles": {
    "width": "650",
    "fontSize": "30",
    "color": "#666666",
    "textIndent": "20"
  },
  "bottomShadowStyle": {
    "width": "550",
    "height": "150",
    "marginTop": "100",
    "marginLeft": "100",
    "backgroundImage": "linear-gradient(to bottom,#8A8A8A,#efeff4)"
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


module.exports = {
  props: {
    isDetailsClick: true
  }
};

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isDetailsClick) ? _c('div', [_c('text', {
    staticClass: ["statementContentStyles"],
    staticStyle: {
      marginTop: "10px"
    }
  }, [_vm._v("    ➊、活动时间:每周六00:00开始,活动结束时间:每周日23:59。符合条件的会员请在次日15:00~ 24:OO到此页面参与抽奖!")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❷、当曰首笔网银充值计算周期采用北京时间进行计算,即北京时间每天_上午00点至隔天上午00点。")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❸、如果您的当日首笔网银充值达到抽奖条件,即可在次日抽奖时间内开始抽奖，且需在抽奖时间内完成抽奖,否则视为放弃活动资格。")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❹、除现金筹码以外奖品，从中奖之日起,一个星期未进行申请,将视为自动放弃中奖资格,逾期将无法申请。")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❺、每位会员IP下注册多个账号进行充值抽奖,公司有权拒绝赠送其彩金并做账号冻结处理,保证正常玩家的利益。")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❻、获得“现金筹码”的1倍流水才能出款，获得\"现金筹码” 的会员无需申请,系统将在两小时内自动添加到您的会员账户内，请耐心等待; (注:当会员抽取”现金筹码”奖项,如若需放弃请联系在线客服专员进行处理,否则将视为您同意抽奖条件)。")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❼、此活动为[彩33]系统程序自动运，行,获奖的概率完全遵循力学及自然概率,不涉及任何人工操作,抽奖结果以系统判定为准,不得争议。")])]) : _c('div', [_c('text', {
    staticClass: ["statementContentStyles"],
    staticStyle: {
      marginTop: "10px"
    }
  }, [_vm._v("    ➊、所有红利为随机派送，如系统发生一些不可预测超出本站控制之 外的技术错误，或人为不可控制的因素，则彩33保留最终解释权和处理权。")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❷、玩家不可以使用多账户参加本次活动,凡同-IP地址、同-姓名、同银行账户，同一联系方式，同-邮箱、同一-电脑均视为同账户,彩33在会员重复申请账号时,保留取消、收回会员相关优惠。")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❸、无论是个人或团体,如有任何威胁、滥用或使用不诚实方式套利的行为，经彩 33风险部门审核,公司有权取消该会员所有优惠")]), _c('text', {
    staticClass: ["statementContentStyles"]
  }, [_vm._v("    ❹、本活动最终解释权归属彩33所有,并保留修改以上条款的最终权利。")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/DetailsStatement.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0bc677c6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });