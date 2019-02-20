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
/******/ 	return __webpack_require__(__webpack_require__.s = 123);
/******/ })
/************************************************************************/
/******/ ({

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(124)
)

/* script */
__vue_exports__ = __webpack_require__(125)

/* template */
var __vue_template__ = __webpack_require__(126)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/components/HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-49078710"
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

/***/ 124:
/***/ (function(module, exports) {

module.exports = {
  "mainDiv": {
    "width": "750",
    "backgroundColor": "#f5f5f5"
  },
  "list": {
    "width": "710",
    "marginLeft": "20",
    "backgroundColor": "#f5f5f5"
  },
  "cell": {
    "width": "710",
    "marginTop": "10",
    "marginBottom": "10",
    "border": "1px #dddddd",
    "borderRadius": "5"
  },
  "content": {
    "flexDirection": "row"
  },
  "cellContentDiv": {
    "width": "710",
    "backgroundColor": "#FFFFFF"
  },
  "cellContent": {
    "width": "710",
    "color": "#000000",
    "marginLeft": "10",
    "fontSize": "22"
  },
  "imageView": {
    "width": "710",
    "height": "200"
  },
  "panel": {
    "width": "600",
    "height": "250",
    "marginLeft": "20",
    "marginTop": "100",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "border": "2px rgb(162, 217, 192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  }
}

/***/ }),

/***/ 125:
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


// const  app = new Vue({
//
// })
var stream = weex.requireModule('stream');
module.exports = {
  data: function data() {
    return {
      getResult: {
        code: '',
        message: '',
        data: {
          list: [{
            id: '',
            title: '',
            cover: '',
            describe: '',
            content: '',
            siteId: '',
            created_time: '',
            updated_time: '',
            status: '',
            type: '',
            weights: ''

          }]
        }
      }
    };
  },
  created: function created() {
    var me = this;
    var GET_URL = 'http://cai33356.com/api/activity/activityListNew';
    stream.fetch({
      method: 'GET',
      url: GET_URL,
      type: 'json'
    }, function (ret) {
      if (!ret.ok) {
        me.getResult = 'request failed';
      } else {
        console.log('get:' + ret);
        me.getResult = ret.data;
      }
    }, function (response) {
      console.log('get in progress:' + response.length);
      me.getResult = 'bytes received:' + response.length;
    });
  }
};

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mainDiv"]
  }, [_c('text', [_vm._v("fsadfafasfadfsadsasdadsdfafadafdxfsdfasdfsk;df';alskdjfh;ja'fa")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });