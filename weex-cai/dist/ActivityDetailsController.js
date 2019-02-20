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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eventModule = 'WXEventModule';
var testDomainName = 'http://192.168.5.100:8082/';
// const mainDomainName = 'http://www.cai33356.com/storage/ios/'
var domainName = testDomainName;
var test = 'http://www.cai33356.com/';
// const main = 'https://www.c33372.com/'
var domain = test;
// // 图片路径
// const imgPath = testDomainName + 'dist/Asset/'
// // 二级文件下图片路径
// const nextLevelImgPath = imgPath
// 图片路径
var imgPath = domain + 'storage/ios/dist/Asset/';
// 二级文件下图片路径
var nextLevelImgPath = imgPath;
// 图片
var imgStorageUrl = domain + 'storage/';
// 活动首页
var activityHomeUrl = domain + 'api/activity/activityListNew';
// 活动详情
var activityListUrl = domain + 'api/activity/activityList';
// 奖励领取
var postClickReceiveUrl = domain + 'api/activity/clickReceive';
// 幸运抽奖
var postWheelLuckUrl = domain + 'api/lucky/clickLucky';
// 幸运抽奖中奖列表
var theWinnersUrl = domain + 'api/lucky/theWinners';
// 幸运抽奖中奖记录
var theWinnersOneUrl = domain + 'api/lucky/theWinnersOne';
// 签到数据获取
var userSignWebList = domain + 'api/userSign/userSignWebList';
// 签到
var postUserSighAdd = domain + 'api/userSign/userSighAdd';
// 签到领取
var postApplyForMoney = domain + 'api/userSign/applyForMoney';
// 签到宝箱领取记录
var userSignHas = domain + 'api/userSign/userSignHas';
// 长龙助手获取数据
var longDragon = domain + 'api/longDragon';
// 投注
var postDoubleBet = domain + 'api/lottery/doubleBet';
// 余额
var latestWithdraw = domain + 'api/latestWithdraw';
// 最近投注
var recentlyBet = domain + 'api/recentlyBet';
module.exports = {
  eventModule: eventModule,
  imgPath: imgPath,
  nextLevelImgPath: nextLevelImgPath,
  domainName: domainName,
  imgStorageUrl: imgStorageUrl,
  activityHomeUrl: activityHomeUrl,
  activityListUrl: activityListUrl,
  postClickReceiveUrl: postClickReceiveUrl,
  postWheelLuckUrl: postWheelLuckUrl,
  theWinnersUrl: theWinnersUrl,
  theWinnersOneUrl: theWinnersOneUrl,
  userSignWebList: userSignWebList,
  postUserSighAdd: postUserSighAdd,
  postApplyForMoney: postApplyForMoney,
  userSignHas: userSignHas,
  longDragon: longDragon,
  postDoubleBet: postDoubleBet,
  latestWithdraw: latestWithdraw,
  recentlyBet: recentlyBet
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(3);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(6)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/node_modules/weex-ui/packages/wxc-minibar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-623c9428"
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


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(39)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/node_modules/weex-ui/packages/wxc-button/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3c9b71fc"
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


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "width": "702",
    "height": "88",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "12",
    "opacity": 1
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "36",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _type = __webpack_require__(38);

exports.default = {
  props: {
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'none'
    },
    type: {
      type: String,
      default: 'red'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object,
    disabledStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size,
          disabledStyle = this.disabledStyle;


      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], btnStyle, _type.BUTTON_STYLE_MAP[size]);

      var disabledInStyle = { opacity: 0.2 };
      if (type === 'white') {
        disabledInStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
      }

      return disabled ? _extends({}, mrBtnStyle, disabledInStyle, disabledStyle, {
        borderWidth: 0
      }) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _extends({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    }
  }
};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px'
  },
  blue: {
    backgroundColor: '#0F8DE8'
  },
  green: {
    backgroundColor: '#19be6b'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  },
  green: {
    color: '#FFFFFF'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702px',
    height: '88px'
  },
  big: {
    width: '339px',
    height: '70px'
  },
  medium: {
    width: '218px',
    height: '60px'
  },
  small: {
    width: '157px',
    height: '44px'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '36px'
  },
  big: {
    fontSize: '32px'
  },
  medium: {
    fontSize: '28px'
  },
  small: {
    fontSize: '24px'
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = {
  "mainStyle": {
    "width": "750",
    "backgroundColor": "#FFFFFF"
  },
  "rowStyle": {
    "marginLeft": "10",
    "flexDirection": "row"
  },
  "titleStyle": {
    "color": "#333333",
    "fontSize": "30"
  },
  "contentStyle": {
    "color": "rgb(237,4,4)",
    "fontSize": "30"
  },
  "contentLogin": {
    "color": "#333333",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 41:
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

module.exports = {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  created: function created() {
    var self = this;
    if (self.data.status === '1') {
      self.login = false;
    } else {
      self.login = true;
    }
  },
  data: function data() {
    return {
      login: true
    };
  }
};

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mainStyle"]
  }, _vm._l((_vm.item), function(data) {
    return _c('div', {
      key: data,
      staticClass: ["rowStyle"]
    }, [_c('text', {
      staticClass: ["titleStyle"]
    }, [_vm._v(_vm._s(data.title + "："))]), (_vm.login) ? _c('text', {
      staticClass: ["contentStyle"]
    }, [_vm._v(_vm._s(data.value))]) : _c('text', {
      staticClass: ["contentLogin"]
    }, [_vm._v(_vm._s(data.value))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var Navigator = weex.requireModule('navigator');
exports.default = {
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    },
    barStyle: {
      type: Object
    }
  },
  computed: {
    newBarStyle: function newBarStyle() {
      var backgroundColor = this.backgroundColor,
          barStyle = this.barStyle;

      return _extends({
        backgroundColor: backgroundColor
      }, barStyle);
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      if (this.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      this.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
    }
  }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: _vm.newBarStyle
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(73)
)

/* script */
__vue_exports__ = __webpack_require__(74)

/* template */
var __vue_template__ = __webpack_require__(76)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/ActivityDetailsController.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7fdd6206"
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

/***/ 73:
/***/ (function(module, exports) {

module.exports = {
  "mainStyleiPhoneX": {
    "width": "750",
    "height": "70",
    "backgroundColor": "#f52d2d"
  },
  "mainStyleiPhone": {
    "width": "750",
    "height": "30",
    "backgroundColor": "#f52d2d"
  },
  "mainStyle": {
    "width": "750",
    "backgroundColor": "#FFFFFF"
  },
  "detailsImageView": {
    "width": "750",
    "height": "220"
  },
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750"
  },
  "iPhoneXDiv": {
    "height": "88"
  },
  "iOSDiv": {
    "height": "64"
  },
  "android": {
    "height": "0"
  },
  "navbar": {
    "width": "750",
    "top": "0",
    "left": "0",
    "backgroundColor": "#FF9200"
  },
  "btnStyleDiv": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "20"
  },
  "titleStyle": {
    "color": "#FFFFFF",
    "fontSize": "40"
  },
  "nextTilteDivStyle": {
    "height": "70"
  },
  "nextTitleStyle": {
    "marginLeft": "10",
    "marginTop": "10",
    "fontSize": "35",
    "fontWeight": "700",
    "color": "#000000"
  },
  "timeRowStyle": {
    "marginLeft": "10",
    "flexDirection": "row"
  },
  "timeTileStyle": {
    "color": "#333333",
    "fontSize": "30"
  },
  "timeStyle": {
    "color": "rgb(237,4,4)",
    "fontSize": "30"
  },
  "timeDivStyle": {
    "marginTop": "30"
  },
  "detailsStyle": {
    "marginTop": "10"
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxcMinibar = __webpack_require__(2);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

var _wxcButton = __webpack_require__(34);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _Global = __webpack_require__(0);

var _Global2 = _interopRequireDefault(_Global);

var _detailsstatus = __webpack_require__(75);

var _detailsstatus2 = _interopRequireDefault(_detailsstatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取设备信息
var device = weex.config.env; //
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

// https://www.jianshu.com/p/3a15706bd430
// https://www.jianshu.com/p/e9bbd8a2244a   自定义导航栏

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
var url = weex.config.bundleUrl;
module.exports = {
  components: { detailsstatus: _detailsstatus2.default, WxcButton: _wxcButton2.default, WxcMinibar: _wxcMinibar2.default },
  data: function data() {
    return {
      isiPhoneX: device.platform === 'iOS' && device.deviceWidth === 1125 && device.deviceHeight === 2436,
      isiPhoneXSMax: device.platform === 'iOS' && device.deviceWidth === 1242 && device.deviceHeight === 2688,
      isiPhoneXR: device.platform === 'iOS' && device.deviceWidth === 828 && device.deviceHeight === 1792,
      isiOS: device.platform === 'iOS',
      isAndroid: device.platform === 'android',
      token: '',
      SITEID: '',
      leftButton: _Global2.default.imgPath + 'back.png',
      getimg: _Global2.default.imgStorageUrl,
      loadinging: false,
      listData: {},
      postData: {},
      // 自定义按钮样式
      backgroundColor: '#f52d2d',
      disabled: true,
      text: '不可领取',
      color: '#ffffff',
      width: '325px',
      height: '70px',
      borderColor: '#cccccc',
      fontSize: '36px',
      borderRadius: '12px',
      pushUrl: _Global2.default.domainName + 'dist/LotteryWheelController.js',
      webContent: {},
      barStyle: {} // webview点击转场数据
    };
  },
  computed: {
    btnStyle: function btnStyle() {
      var width = this.width,
          height = this.height,
          backgroundColor = this.backgroundColor,
          borderColor = this.borderColor,
          borderRadius = this.borderRadius;

      var customStyle = {};

      if (width) {
        customStyle.width = width;
      }
      if (height) {
        customStyle.height = height;
        customStyle.lineHeight = height;
      }
      if (borderColor) {
        customStyle.borderColor = borderColor;
        customStyle.borderWidth = '1px';
        customStyle.borderStyle = 'solid';
      }
      if (borderRadius) {
        customStyle.borderRadius = borderRadius;
      }

      if (backgroundColor) {
        if (this.listData.data.canReceive === 0) {
          // 不可领取
          customStyle.backgroundColor = backgroundColor;
          this.disabled = true;
          this.text = '不可领取';
        } else if (this.listData.data.canReceive === 1) {
          // 可领取
          customStyle.backgroundColor = backgroundColor;
          this.disabled = false;
          this.text = '可领取';
        } else if (this.listData.data.canReceive === 2) {
          // 已领取
          customStyle.backgroundColor = backgroundColor;
          this.disabled = true;
          this.text = '已领取';
        } else {
          // 已结束
          customStyle.backgroundColor = "#f6f6f6";
          this.text = '已结束';
          this.color = '#000';
        }
      }
      return customStyle;
    },
    textStyle: function textStyle() {
      var fontSize = this.fontSize,
          color = this.color;

      var customStyle = {};
      if (fontSize) {
        customStyle.fontSize = fontSize;
      }
      if (color) {
        customStyle.color = color;
      }
      return {
        fontSize: fontSize, color: color
      };
    }
  },
  watched: {},
  props: {
    // dataRole: { default: 'navbar' },
    // backgroundColor: { default: '#f52d2d' },
    // height: { default: 88 },
    // title: { default: '标题' },
    // titleColor: { default: '#00B4FF' },
    // rightItemSrc: { default: '' },
    // rightItemTitle: { default: '' },
    // rightItemColor: { default: '' },
    // leftItemSrc: { default: '' },
    // leftItemTitle: { default: '返回' },
    // leftItemColor: { default: '#00B4FF' },
  },
  methods: {
    textCilck: function textCilck() {
      var getUrl = _Global2.default.domainName + 'dist/LotteryWheelController.js';
      /// 自定义Module 调用原生navigation进行转场
      // weex.requireModule('WXEventModule').push(getUrl).dic(JSON.stringify({title: '详情'}))
      // weex.requireModule(global.eventModule).pushVC({style: {center: {img: '', title: '返回', color: '#ffffff'}, left: {img: '', title: '返回',color: '#41B883'}, bg: {color: '#f52d2d'}}, url: getUrl})

      // 使用weex封装好的navigator跳转
      navigator.push({
        // http://192.168.1.11:8083/dist/ActivityDetailsController.js
        url: getUrl,
        // url: '../src/ActivityDetailsController',
        animated: 'true' // 这里animated需是一个字符串，否则导致崩溃
      }, function (event) {
        // navigator.setParameter('==')
        // navigator.hide()
        // modal.toast({ message: 'callback: ' + event })
      });
      // modal.toast({message:'sadfa'})
    },

    //时间戳转时间
    timestampToTime: function timestampToTime(cjsj) {
      var date = new Date(cjsj); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
    onloading: function onloading(event) {
      var _this = this;

      this.loadinging = true;
      setTimeout(function () {
        _this.loadinging = false;
      }, 1000);
    },
    leftBarItemClick: function leftBarItemClick(e) {
      navigator.pop({
        animated: 'true'
      }, function (event) {
        // 回调函数
      });
    },

    // 领取按钮点击方法
    receiveBtnClick: function receiveBtnClick(e) {
      var type = e.type,
          disabled = e.disabled;

      if (disabled === false) {
        // 领取
        this.receivePost();
      }
    },

    // 领取
    receivePost: function receivePost() {
      var body = 'id=' + this.listData.data.id;
      var self = this;
      stream.fetch({
        method: 'POST',
        url: _Global2.default.postClickReceiveUrl,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json',
        body: body
      }, function (ret) {
        if (ret.ok) {
          self.postData = ret.data;
          modal.toast({ message: ret.data.message });
          self.disabled = true;
          self.text = '已领取';
          if (ret.data.code === 0) {
            // self.disabled = true
          } else if (ret.code === 109) {
            modal.toast({ message: ret.data.message });
          } else {}
          // modal.toast({ message: ret.data.message })
          // self.disabled = false


          // this.postData = ret.data;
          // modal.toast({message:'====='+ JSON.stringify(ret.data)})
        } else {
          self.postData = 'request failed';
          modal.toast({ message: '===2========' });
          // modal.toast({message:'===2=='+ JSON.stringify(ret.data)})
        }
      }, function (ret) {
        // modal.toast({message:'===1==='+ ret.statusText})
        // this.postData = 'bytes received:' + ret.length;

      });
    },

    // 解析url后面的参数
    getdataUrl: function getdataUrl(key, url) {
      key = key.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + key + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  },
  // 模版渲染成html之前调用
  created: function created() {
    var _this2 = this;

    // this.$el('customwebview').focus();
    // this.$refs.customwebview.focus();
    // this.$refs.customwebview.focus();
    // stream请求里面需用这里声明的self获取数据
    var self = this;
    //图片
    self.leftButton = _Global2.default.imgPath + 'back.png';

    // 原生调用
    var modal = weex.requireModule('modal');
    var eventModule = weex.requireModule(_Global2.default.eventModule);
    eventModule.getToken('token', function (res) {
      self.token = res.token;
      self.SITEID = res.SITEID;
    });
    // 监听客户端事件
    var globalEvent = weex.requireModule('globalEvent');
    globalEvent.addEventListener("geolocation", function (e) {
      if (e && e.className === 'links') {
        if (self.token) {
          // 登录转场
          var getUrl = self.pushUrl;
          /// 自定义Module 调用原生navigation进行转场
          // weex.requireModule('WXEventModule').push(getUrl).dic(JSON.stringify({title: '详情'}))
          // weex.requireModule(global.eventModule).pushVC({style: {center: {img: '', title: '返回', color: '#ffffff'}, left: {img: '', title: '返回',color: '#41B883'}, bg: {color: '#f52d2d'}}, url: getUrl})

          // 使用weex封装好的navigator跳转
          navigator.push({
            // http://192.168.1.11:8083/dist/ActivityDetailsController.js
            url: getUrl,
            // url: '../src/ActivityDetailsController',
            animated: 'true' // 这里animated需是一个字符串，否则导致崩溃
          }, function (event) {
            // navigator.setParameter('==')
            // navigator.hide()
            // modal.toast({ message: 'callback: ' + event })
          });
          // self.barStyle = { center: {img: global.domainName + 'dist/Asset/wheelTitleImg.png', title: '', color: '#ffffff', width: '200', height: '44' },
          //   left: { img: 'fanhuijiantou', title: '', color: '#41B883' },
          //   bg: { color: '#f52d2d' },
          //   viewBgColor: { color: '#efeff4' } }
          // let pushData = { vcName: 'WXThirdViewController', url: self.pushUrl, barStyle: self.barStyle }
          // weex.requireModule(global.eventModule).pushController(pushData)
          // 自定义控件webView 设置
          // self.webContent = {htmldata: self.listData.data.content,height:'800',pushData: {url: self.pushUrl,className: 'links',messageName:'activityClass',vcName: 'WXOthersViewController'}}
        } else {
            // let pushData = { vcName: 'NetWebViewController' }
            // weex.requireModule(global.eventModule).pushController(pushData)
            // 自定义控件webView 设置
            // self.webContent = {htmldata: self.listData.data.content,height:'800',pushData: {className: 'links',messageName:'activityClass'}
          }
      }
    });

    storage.getItem('mData', function (event) {
      // me.getResult = JSON.parse(event.data)
      // 转对象
      var r = JSON.parse(event.data);
      _this2.getimg = _this2.getimg + r.cover;
      var params = { 'id': r.id };
      stream.fetch({
        method: 'GET',
        url: _Global2.default.activityListUrl + '/' + r.id,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        if (ret.ok) {
          var code = ret.data.code;
          if (code === 0) {
            self.listData = ret.data;
            // weex.requireModule(global.eventModule).showParams(self.listData.data.content);
            self.webContent = { htmldata: self.listData.data.content,
              customCss: { height: '800', cssStr: "document.getElementsByTagName('table')[0].style.width = '100%'" },
              pushData: { className: 'links', messageName: 'activityClass' } };
            self.dataHtml = self.listData;
          } else if (code === 109) {} else {
            self.listData = 'request failed';
          }
        }
      }, function (response) {
        self.listData = 'bytes received:' + response.statusText;
      });
    });

    // this.$el('customwebview').focus();
    // this.$refs.customwebview.focus();
    this.$refs.customwebview.focus();
  },

  // 模版渲染成html之后调用
  mounted: function mounted() {
    var self = this;
    this.dataHtml = self.listData.data.content;
  },
  destroyed: function destroyed() {
    // 移除监听客户端事件
    var globalEvent = weex.requireModule('globalEvent');
    globalEvent.removeEventListener('geolocation');
    //  移除存储传递的数据
    storage.removeItem('mData');
  }
};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(42)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/detailsstatus.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-de51daaa"
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


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mainStyle"]
  }, [(_vm.isAndroid) ? _c('wxc-minibar', {
    attrs: {
      "backgroundColor": "#f52d2d",
      "textColor": "#FFFFFF",
      "leftButton": _vm.leftButton
    },
    on: {
      "wxcMinibarLeftButtonClicked": _vm.leftBarItemClick
    }
  }, [_c('text', {
    staticClass: ["titleStyle"],
    attrs: {
      "slot": "middle"
    },
    slot: "middle"
  }, [_vm._v(_vm._s(_vm.listData.data.title))])]) : _vm._e(), _c('scroller', [_c('div', {
    staticClass: ["mainStyle"]
  }, [_c('div', {
    staticStyle: {
      width: "750px",
      height: "220px"
    }
  }, [_c('image', {
    staticClass: ["detailsImageView"],
    attrs: {
      "src": _vm.getimg,
      "placeholder": ""
    }
  })]), _c('div', [_c('div', {
    staticClass: ["nextTilteDivStyle"]
  }, [_c('text', {
    staticClass: ["nextTitleStyle"]
  }, [_vm._v(_vm._s(_vm.listData.data.title))])]), _c('detailsstatus', {
    staticClass: ["detailsStyle"],
    attrs: {
      "item": _vm.listData.data.ext
    }
  }), _c('div', {
    staticClass: ["btnStyleDiv"]
  }, [(_vm.listData.data.is_ext != 0) ? _c('wxc-button', {
    attrs: {
      "text": _vm.text,
      "disabled": _vm.disabled,
      "btnStyle": _vm.btnStyle,
      "textStyle": _vm.textStyle
    },
    on: {
      "wxcButtonClicked": _vm.receiveBtnClick
    }
  }) : _vm._e()], 1), (_vm.listData.data.id == 8) ? _c('div', {
    staticClass: ["timeDivStyle"]
  }, [_c('text', {
    staticClass: ["nextTitleStyle"]
  }, [_vm._v("活动时间")]), _c('detailsstatus', {
    staticClass: ["detailsStyle"],
    attrs: {
      "item": _vm.listData.data.ext_two
    }
  })], 1) : _vm._e(), _c('customwebview', {
    ref: "customwebview",
    staticStyle: {
      width: "750px",
      height: "1600px",
      backgroundColor: "#ffffff"
    },
    attrs: {
      "content": _vm.webContent,
      "barStyle": _vm.barStyle,
      "data": {
        dataHtml: _vm.dataHtml
      }
    }
  })], 1)]), _c('div', {
    staticStyle: {
      height: "200px"
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });