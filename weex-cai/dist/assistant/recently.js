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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(69)
)

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(71)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/assistant/recently.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9bc2dd5c"
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

/***/ 69:
/***/ (function(module, exports) {

module.exports = {
  "refresh": {
    "width": "750",
    "height": "180",
    "backgroundColor": "#333333",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#FFFFFF"
  },
  "loading": {
    "width": "750",
    "height": "200",
    "display": "flex",
    "backgroundColor": "#333333",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "recentlyMainDiv": {
    "width": "750",
    "height": "1300"
  },
  "listHeaderDiv": {
    "width": "750",
    "height": "80",
    "backgroundColor": "#f6f6f6"
  },
  "listCellStyle": {
    "width": "750",
    "height": "120",
    "flexDirection": "row",
    "borderBottomWidth": "1",
    "borderBottomColor": "#dddddd",
    "borderBottomStyle": "solid"
  },
  "cellTextColor": {
    "fontSize": "25"
  },
  "termTextDiv": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "25",
    "width": "300"
  },
  "termTextStyle": {
    "width": "300",
    "lineHeight": "50",
    "textAlign": "center"
  },
  "moneyStyle": {
    "lineHeight": "100",
    "width": "150",
    "textAlign": "center"
  },
  "statusTextDiv": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "150"
  },
  "checkBtnStyle": {
    "color": "rgb(74,144,226)",
    "marginLeft": "50",
    "lineHeight": "120",
    "textAlign": "center"
  },
  "bottomHeightStyle": {
    "width": "750",
    "lineHeight": "50",
    "color": "rgb(74,144,226)",
    "fontSize": "20",
    "textAlign": "center"
  },
  "noneStyle": {
    "width": "750",
    "lineHeight": "50",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Global = __webpack_require__(0);

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = weex.requireModule('stream'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
// const device = weex.config.env
module.exports = {
  props: {},
  data: function data() {
    return {
      token: '',
      SITEID: '',
      recentlyData: [],
      refreshing: false,
      mainStyle: {
        // backgroundColor: '#dff',
        // height: device.deviceHeight - 1000 + 'px'
      },
      page: 1,
      loadinging: false
    };
  },
  created: function created() {
    var self = this;
    // 获取token
    var eventModule = weex.requireModule(_Global2.default.eventModule);
    eventModule.getToken('token', function (res) {
      self.token = res.token;
      self.SITEID = res.SITEID;
      self.getData();
    });
  },

  filters: {
    winStatus: function winStatus(e) {},
    saveT: function saveT(e) {
      var num = parseFloat(e);
      return num.toFixed(2);
    }
  },
  methods: {
    getData: function getData() {
      var self = this;
      var limit = 20;
      stream.fetch({
        method: 'GET',
        url: _Global2.default.recentlyBet + '?limit=' + limit + '&page=' + self.page,
        headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        self.partLodingShow = false;
        self.refreshing = false;
        if (ret.ok) {
          if (ret.data.code === 0) {
            // modal.toast({message: 'loading' + self.page + '==' + self.recentlyData.length + '==' + self.loadinging})
            if (self.loadinging === true) {
              self.loadinging = false;
              self.recentlyData.concat(ret.data.data.list);
              // self.recentlyData.push.apply(self.recentlyData, ret.data.data.list)
            } else {
              self.recentlyData = ret.data.data.list;
            }
          } else if (ret.data.code === 109) {
            modal.toast({ message: ret.data.message });
            self.loadinging = false;
          } else {
            modal.toast({ message: ret.data.message });
            self.loadinging = false;
          }
        } else {
          modal.toast({ message: ret.statusText });
          self.loadinging = false;
        }
        self.getTimeOut = setTimeout(function () {
          self.balanceClick = false;
          self.balance = '余额';
        }, 10000);
      }, function (ret) {});
    },
    onrefresh: function onrefresh(event) {
      var self = this;
      this.refreshing = true;
      self.page = 1;
      this.getData();
      // setTimeout(() => {
      //   this.refreshing = false
      // }, 2000)
    },
    onpullingdown: function onpullingdown(event) {
      // console.log('dy: ' + event.dy)
      // console.log('pullingDistance: ' + event.pullingDistance)
      // console.log('viewHeight: ' + event.viewHeight)
      // console.log('type: ' + event.type)
    },
    onloading: function onloading(event) {
      this.loadinging = true;
      this.page = this.page + 1;
      this.getData();
    },
    checkBtnClick: function checkBtnClick(e) {
      var barStyle = {};
      var pushUrl = _Global2.default.domainName + 'dist/assistant/longExplainController.js';
      var pushData = {};
      if (e.chase === 1) {
        var getInfo = { chase: e.chase.toString(), type: '1', betId: e.betId.toString(), oderId: e.orderId };
        modal.alert({ message: JSON.stringify(getInfo) });
        pushData = { vcName: 'KXCMine_LotterDetailsViewController', url: pushUrl, barStyle: barStyle, info: getInfo };
      } else {
        var _getInfo = { chase: e.chase, type: '1', betId: e.betId, oderId: e.orderId };
        pushData = { vcName: 'ChaseDetailsViewController', url: pushUrl, barStyle: barStyle, info: _getInfo };
      }
      weex.requireModule(_Global2.default.eventModule).presentNavController(pushData);
    },
    checkMoreBtnClick: function checkMoreBtnClick(e) {
      var barStyle = {};
      var pushUrl = _Global2.default.domainName + 'dist/assistant/longExplainController.js';
      var pushData = {};
      var getInfo = { chase: e.chase, type: '1', betId: e.betId, oderId: e.orderId };
      pushData = { vcName: 'ChaseAndRecordViewController', url: pushUrl, barStyle: barStyle, info: getInfo };
      weex.requireModule(_Global2.default.eventModule).presentNavController(pushData);
    }
  }
};

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["recentlyMainDiv"]
  }, [_c('list', {
    staticClass: ["recentlyMainDiv"],
    style: _vm.mainStyle
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _vm._l((_vm.recentlyData), function(item, i) {
    return _c('cell', {
      key: i,
      staticClass: ["listCellStyle"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["ermTextDiv"]
    }, [_c('text', {
      staticClass: ["termTextStyle"],
      staticStyle: {
        marginTop: "15px"
      }
    }, [_vm._v(_vm._s(item.lotteryName))]), _c('text', {
      staticClass: ["termTextStyle"]
    }, [_vm._v(_vm._s(item.term))])]), _c('text', {
      staticClass: ["moneyStyle"]
    }, [_vm._v(_vm._s(_vm._f("saveT")(item.money)))]), (item.isPrize === 1) ? _c('div', {
      staticClass: ["statusTextDiv"]
    }, [_c('text', {
      staticClass: ["termTextStyle"],
      staticStyle: {
        color: "#008B00"
      }
    }, [_vm._v("待开奖")])]) : (item.winMoney > 0) ? _c('div', {
      staticClass: ["statusTextDiv"]
    }, [_c('text', {
      staticClass: ["termTextStyle"],
      staticStyle: {
        color: "#f52d2d",
        marginTop: "15px"
      }
    }, [_vm._v(_vm._s(_vm._f("saveT")(item.winMoney)))]), _c('text', {
      staticClass: ["termTextStyle"],
      staticStyle: {
        color: "#f52d2d"
      }
    }, [_vm._v("已中奖")])]) : _c('div', {
      staticClass: ["statusTextDiv"]
    }, [_c('text', {
      staticClass: ["termTextStyle"],
      staticStyle: {
        color: "#666666"
      }
    }, [_vm._v("未中奖")])]), _c('text', {
      staticClass: ["checkBtnStyle"],
      on: {
        "click": function($event) {
          _vm.checkBtnClick(item)
        }
      }
    }, [_vm._v("查看")])])
  })], 2), (_vm.recentlyData.length === 0) ? _c('div', [_c('text', {
    staticClass: ["noneStyle"],
    staticStyle: {
      marginTop: "100px"
    }
  }, [_vm._v("暂无投注记录")])]) : _vm._e(), (_vm.recentlyData.length === 20) ? _c('text', {
    staticClass: ["bottomHeightStyle"],
    on: {
      "click": _vm.checkMoreBtnClick
    }
  }, [_vm._v("最多查看20条，查看更多")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });