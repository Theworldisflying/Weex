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
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
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

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(78)
)

/* script */
__vue_exports__ = __webpack_require__(79)

/* template */
var __vue_template__ = __webpack_require__(80)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/ActivityHomeController.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-07c173fa"
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

/***/ 78:
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
    "height": "300",
    "backgroundColor": "#f5f5f5"
  },
  "cellContentDiv": {
    "width": "710",
    "height": "280",
    "backgroundColor": "#FFFFFF",
    "border": "1px #dddddd",
    "borderRadius": "5"
  },
  "content": {
    "flexDirection": "row",
    "width": "670"
  },
  "cellContentTitle": {
    "width": "670",
    "color": "#000000",
    "marginLeft": "10",
    "fontSize": "25"
  },
  "cellContent": {
    "width": "670",
    "color": "rgb(119,119,119)",
    "marginLeft": "10",
    "fontSize": "20"
  },
  "transition": {
    "width": "20",
    "height": "30",
    "marginTop": "15",
    "marginRight": "1"
  },
  "imageView": {
    "width": "710",
    "height": "220"
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxcMinibar = __webpack_require__(2);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

var _Global = __webpack_require__(0);

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
// 获取设备信息
var device = weex.config.env;
module.exports = {
  components: { WxcMinibar: _wxcMinibar2.default },
  data: function data() {
    return {
      token: '',
      SITEID: '',
      getResult: {},
      imgUrl: '',
      lottery_hall_arrowImg: ''
    };
  },
  created: function created() {
    var self = this;
    self.imgUrl = _Global2.default.imgStorageUrl;
    self.lottery_hall_arrowImg = _Global2.default.imgPath + 'lottery_hall_arrow.png';
    // 获取token
    var eventModule = weex.requireModule(_Global2.default.eventModule);
    eventModule.getToken('token', function (res) {
      self.token = res.token;
      self.SITEID = res.SITEID;
      // var GET_URL = 'https://www.c33372.com/api/activity/activityListNew'
      var GET_URL = _Global2.default.activityHomeUrl;
      stream.fetch({
        method: 'GET',
        url: GET_URL,
        type: 'json',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID }
      }, function (ret) {
        // console.log('============' + JSON.stringify(ret.data))
        if (!ret.ok) {
          modal.toast({ message: ret.statusText });
          self.getResult = 'request failed';
        } else {
          self.getResult = ret.data;
          // console.log('============' + me.getResult.data.list)
        }
      }, function (response) {
        self.getResult = 'bytes received:' + response.length;
      });
    });
  },
  methods: {
    leftBarItemClick: function leftBarItemClick(e) {
      navigator.pop({
        animated: 'true'
      }, function (event) {
        // 回调函数
      });
    },
    myClick: function myClick(event) {
      var _this = this;

      // console.log('=====click====', event)
      // this.$router.push({
      //   // path: 'http://192.168.1.11:8083/dist/ActivityDetailsController.js', // 要跳转的路径
      //   name: 'ActivityDetailsController',
      //   query: event
      // })
      // testObj.testPushData = {
      //   data: 1111
      // }
      // 本地化 转为字符串存储
      storage.setItem('mData', JSON.stringify(event), function (event) {
        _this.state = 'set success';
        // console.log('set success', event)
      });
      // 路径传值 不能传太长的值
      // let getUrl = '../dist/ActivityDetailsController.js?cover=' + event.cover + '$id=' + event.id
      // let getUrl = global.domainName + 'dist/ActivityDetailsController.js'
      if (device.platform === 'Web') {}
      // getUrl = '../src/ActivityDetailsController'


      /// 自定义Module 调用原生navigation进行转场
      // weex.requireModule(global.eventModule).push(getUrl).dic(JSON.stringify({title: '详情'}))
      // weex.requireModule(global.eventModule).pushVC({style: {center: {img: '', title: '活动详情', color: '#ffffff'}, left: {img: '', title: '返回', color: '#41B883'}, bg: {color: '#f52d2d'}}, url: getUrl})
      if (this.isAndroid) {
        // android 原生隐式启动。参数： url，跳转的活动category
        weex.requireModule(_Global2.default.eventModule).pushActivity(_Global2.default.domainName + 'dist/ActivityDetailsController.js', 'com.xianyu1.android.intent.category.WEEX');
      } else if (this.isiOS) {
        var barStyle = { center: { img: '', title: event.title, color: '#ffffff', width: '200', height: '44', weightFont: '20', textAlign: 'center' },
          left: { img: 'fanhuijiantou', title: '', color: '#41B883' },
          bg: { color: '#f52d2d' },
          viewBgColor: { color: '#efeff4' } };
        var pushUrl = _Global2.default.domainName + 'dist/ActivityDetailsController.js';
        var pushData = { vcName: 'WXOthersViewController', url: pushUrl, barStyle: barStyle };
        weex.requireModule(_Global2.default.eventModule).pushController(pushData);
      } else {
        // 使用weex封装好的navigator跳转
        navigator.push({
          // http://192.168.1.29:8082/dist/ActivityDetailsController.js
          url: _Global2.default.domainName + 'dist/ActivityDetailsController.js',
          // url: '../src/ActivityDetailsController',
          animated: 'true' // 这里animated需是一个字符串，否则导致崩溃
        }, function (event) {
          // navigator.setParameter('==')
          // navigator.hide()
          // modal.toast({ message: 'callback: ' + event })
        });
      }

      // // 调用原生方法
      // weex.requireModule('cell').showParams(event)
      // weex.requireModule('cell').loadCellDic(event)
      // console.log('onclick:', event)
      // alert('=====' + event)
      // self.showParams('hello Weex')
    }
  }
  // const modal = weex.requireModule('modal')

  // export default {
  //   props: {
  //
  //   }
  //
  // }

};

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mainDiv"]
  }, [_c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.getResult.data.list), function(item, i) {
    return _c('cell', {
      key: i,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.myClick(item)
        }
      }
    }, [_c('div', {
      staticClass: ["cellContentDiv"]
    }, [_c('image', {
      staticClass: ["imageView"],
      attrs: {
        "src": _vm.imgUrl + item.cover,
        "placeholder": ""
      }
    }), _c('div', {
      staticClass: ["content"]
    }, [_c('div', [_c('text', {
      staticClass: ["cellContentTitle"]
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["cellContent"]
    }, [_vm._v(_vm._s(item.describe))])]), _c('div', [_c('image', {
      staticClass: ["transition"],
      attrs: {
        "src": _vm.lottery_hall_arrowImg
      }
    })])])])])
  })), _c('div', {
    staticStyle: {
      width: "750px",
      height: "100px"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });