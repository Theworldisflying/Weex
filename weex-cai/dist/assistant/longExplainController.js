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
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(119)
)

/* script */
__vue_exports__ = __webpack_require__(120)

/* template */
var __vue_template__ = __webpack_require__(121)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/assistant/longExplainController.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3b3abf9d"
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

/***/ 119:
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
  "expMainStyle": {
    "width": "750"
  },
  "topImgStyle": {
    "width": "750",
    "height": "300"
  },
  "downStyle": {
    "width": "30",
    "height": "40",
    "marginLeft": "25"
  },
  "downTitleStyle": {
    "color": "#FF0000",
    "fontSize": "35"
  },
  "borderCStyle": {
    "width": "20",
    "height": "20",
    "borderWidth": "1",
    "borderColor": "#666666",
    "borderStyle": "solid",
    "borderRadius": "10",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "25",
    "marginTop": "10"
  },
  "borderContentStyle": {
    "width": "10",
    "height": "10",
    "borderRadius": "5",
    "backgroundColor": "#666666"
  },
  "textContentStyle": {
    "width": "650",
    "marginLeft": "10"
  },
  "titleStyle": {
    "color": "#FFFFFF",
    "fontSize": "40"
  }
}

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxcIcon = __webpack_require__(25);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

var _wxcMinibar = __webpack_require__(2);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

var _Global = __webpack_require__(0);

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取设备信息
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

var device = weex.config.env;
// const navigator = weex.requireModule('navigator')
module.exports = {
  components: { WxcMinibar: _wxcMinibar2.default, WxcIcon: _wxcIcon2.default },
  data: function data() {
    return {
      isiPhoneX: device.platform === 'iOS' && device.deviceWidth === 1125 && device.deviceHeight === 2436,
      isiPhoneXSMax: device.platform === 'iOS' && device.deviceWidth === 1242 && device.deviceHeight === 2688,
      isiPhoneXR: device.platform === 'iOS' && device.deviceWidth === 828 && device.deviceHeight === 1792,
      isiOS: device.platform === 'iOS',
      isAndroid: device.platform === 'android',
      leftButton: _Global2.default.imgPath + 'back.png',
      topImg: '',
      downRedImg: ''
    };
  },
  created: function created() {
    // dragonHel.jpg
    var self = this;
    self.leftButton = _Global2.default.nextLevelImgPath + 'back.png';
    self.topImg = _Global2.default.nextLevelImgPath + 'dragonHel.jpg';
    self.downRedImg = _Global2.default.nextLevelImgPath + 'downloadRed.png';
  },

  methods: {
    leftBarItemClick: function leftBarItemClick() {
      weex.requireModule(_Global2.default.eventModule).dissMissVC();
    }
  }
};

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["expMainStyle"]
  }, [(_vm.isiPhoneX) ? _c('div', {
    staticClass: ["mainStyleiPhoneX"]
  }) : (_vm.isiPhoneXSMax) ? _c('div', {
    staticClass: ["mainStyleiPhoneX"]
  }) : (_vm.isiPhoneXR) ? _c('div', {
    staticClass: ["mainStyleiPhoneX"]
  }) : _c('div', {
    staticClass: ["mainStyleiPhone"]
  }), _c('wxc-minibar', {
    attrs: {
      "backgroundColor": "#f52d2d",
      "textColor": "#FFFFFF",
      "leftButton": _vm.leftButton
    },
    on: {
      "wxcMinibarLeftButtonClicked": _vm.leftBarItemClick
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "slot": "left",
      "src": _vm.leftButton
    },
    slot: "left"
  }), _c('text', {
    staticClass: ["titleStyle"],
    attrs: {
      "slot": "middle"
    },
    slot: "middle"
  }, [_vm._v("长龙说明")])]), _c('image', {
    staticClass: ["topImgStyle"],
    attrs: {
      "src": _vm.topImg
    }
  }), _c('text', {
    staticStyle: {
      width: "700px",
      marginLeft: "25px",
      marginTop: "20px"
    }
  }, [_vm._v("长龙助手是对“快3” “时时彩”以及“PK1O”的“大小单双”开奖结果进行统计监测，每期出现“大”、“小”、“单”、“双”的概率 为1/2，如果连续3期及以上的开奖结果相同，将称之为“长 龙\"，通常会采用倍投的方式进行“斩龙”或“顺龙”。")]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginTop: "20px"
    }
  }, [_c('image', {
    staticClass: ["downStyle"],
    attrs: {
      "src": _vm.downRedImg
    }
  }), _c('text', {
    staticClass: ["downTitleStyle"]
  }, [_vm._v("什么叫斩龙？")])]), _vm._m(0), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('image', {
    staticClass: ["downStyle"],
    attrs: {
      "src": _vm.downRedImg
    }
  }), _c('text', {
    staticClass: ["downTitleStyle"]
  }, [_vm._v("什么叫顺龙？")])]), _vm._m(1), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('image', {
    staticClass: ["downStyle"],
    attrs: {
      "src": _vm.downRedImg
    }
  }), _c('text', {
    staticClass: ["downTitleStyle"]
  }, [_vm._v("什么是倍投？")])]), _vm._m(2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('div', {
    staticClass: ["borderCStyle"]
  }, [_c('div', {
    staticClass: ["borderContentStyle"]
  })]), _c('text', {
    staticClass: ["textContentStyle"]
  }, [_vm._v("如连续开6期“单\"，可以选择“双\"进行投注，这样的投注方案称之为“斩龙”;")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('div', {
    staticClass: ["borderCStyle"]
  }, [_c('div', {
    staticClass: ["borderContentStyle"]
  })]), _c('text', {
    staticClass: ["textContentStyle"]
  }, [_vm._v("如连续开6期“单\"，继续选择“单\"进行投注，这样的投注方案称之为“顺龙”;")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('div', {
    staticClass: ["borderCStyle"]
  }, [_c('div', {
    staticClass: ["borderContentStyle"]
  })]), _c('text', {
    staticClass: ["textContentStyle"]
  }, [_vm._v("倍投是指一种成倍的投注方式，是为保障能够在“斩龙”或“顺龙”的过程中持续盈利的一种押注方式。")])])
}]}
module.exports.render._withStripped = true

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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(26);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(30)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/node_modules/weex-ui/packages/wxc-icon/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4acecb7a"
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

/***/ 27:
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),

/***/ 28:
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

var _type = __webpack_require__(29);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom');

exports.default = {
  props: {
    name: {
      default: 'success',
      type: String
    },
    size: {
      default: 'small',
      type: String
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      Icon: _type2.default
    };
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "weexUiIconFont",
      'src': "url('https://at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"
    });
  },

  computed: {
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle,
          size = this.size;

      var fontSize = '48px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '48px';
          break;
        case 'medium':
          fontSize = '72px';
          break;
        case 'big':
          fontSize = '128px';
          break;
        default:
          fontSize = '48px';
      }
      return _extends({
        fontFamily: 'weexUiIconFont',
        fontSize: fontSize
      }, iconStyle);
    }
  },
  methods: {
    itemClicked: function itemClicked(name) {
      this.$emit('wxcIconClicked', {
        name: name
      });
    }
  }
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  less: '\uE6A5',
  'more_unfold': '\uE6A6',
  back: '\uE697',
  more: '\uE6A7',
  add: '\uE6B9',
  subtract: '\uE6FE',
  close: '\uE69A',
  cry: '\uE69C',
  delete: '\uE69D',
  help: '\uE6A3',
  refresh: '\uE6AA',
  search: '\uE6AC',
  success: '\uE6B1',
  warning: '\uE6B6',
  wrong: '\uE6B7',
  clock: '\uE6BB',
  scanning: '\uE6EC',
  filter: '\uE6F1',
  map: '\uE715',
  play: '\uE719'
};

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

/***/ 30:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle,
    on: {
      "click": function($event) {
        _vm.itemClicked(_vm.name)
      }
    }
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
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

/***/ })

/******/ });