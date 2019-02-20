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
/******/ 	return __webpack_require__(__webpack_require__.s = 140);
/******/ })
/************************************************************************/
/******/ ({

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(141)
)

/* script */
__vue_exports__ = __webpack_require__(142)

/* template */
var __vue_template__ = __webpack_require__(143)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-577f3229"
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


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "row",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "width": "750"
  },
  "right-text": {
    "position": "absolute",
    "bottom": "28",
    "right": "32",
    "textAlign": "right",
    "fontSize": "32",
    "fontFamily": "'Open Sans', sans-serif"
  },
  "left-text": {
    "position": "absolute",
    "bottom": "28",
    "left": "32",
    "textAlign": "left",
    "fontSize": "32",
    "fontFamily": "'Open Sans', sans-serif"
  },
  "center-text": {
    "position": "absolute",
    "bottom": "25",
    "left": "172",
    "right": "172",
    "textAlign": "center",
    "fontSize": "36",
    "fontWeight": "bold"
  },
  "left-image": {
    "position": "absolute",
    "bottom": "20",
    "left": "28",
    "width": "50",
    "height": "50"
  },
  "right-image": {
    "position": "absolute",
    "bottom": "20",
    "right": "28",
    "width": "50",
    "height": "50"
  }
}

/***/ }),

/***/ 142:
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
//
//

module.exports = {
  props: {
    dataRole: { default: 'navbar' },
    // 导航条背景色
    backgroundColor: { default: 'black' },
    // 导航条高度
    height: { default: 88 },
    // 导航条标题
    title: { default: '' },
    // 导航条标题颜色
    titleColor: { default: 'black' },
    // 右侧按钮图片
    rightItemSrc: { default: '' },
    // 右侧按钮标题
    rightItemTitle: { default: '' },
    // 右侧按钮标题颜色
    rightItemColor: { default: 'black' },
    // 左侧按钮图片
    leftItemSrc: { default: '' },
    // 左侧按钮标题
    leftItemTitle: { default: '' },
    // 左侧按钮颜色
    leftItemColor: { default: 'black' }
  },
  methods: {
    onclickrightitem: function onclickrightitem(e) {
      this.$emit('naviBarRightItemClick');
    },
    onclickleftitem: function onclickleftitem(e) {
      this.$emit('naviBarLeftItemClick');
    }
  }
};

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    style: {
      height: _vm.height,
      backgroundColor: _vm.backgroundColor
    },
    attrs: {
      "dataRole": _vm.dataRole
    }
  }, [(!_vm.rightItemSrc) ? _c('text', {
    staticClass: ["right-text"],
    style: {
      color: _vm.rightItemColor
    },
    attrs: {
      "naviItemPosition": "right"
    },
    on: {
      "click": _vm.onclickrightitem
    }
  }, [_vm._v(_vm._s(_vm.rightItemTitle))]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
    staticClass: ["right-image"],
    attrs: {
      "naviItemPosition": "right",
      "src": _vm.rightItemSrc
    },
    on: {
      "click": _vm.onclickrightitem
    }
  }) : _vm._e(), (!_vm.leftItemSrc) ? _c('text', {
    staticClass: ["left-text"],
    style: {
      color: _vm.leftItemColor
    },
    attrs: {
      "naviItemPosition": "left"
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
    staticClass: ["left-image"],
    attrs: {
      "naviItemPosition": "left",
      "src": _vm.leftItemSrc
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["center-text"],
    style: {
      color: _vm.titleColor
    },
    attrs: {
      "naviItemPosition": "center"
    }
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });