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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "loading-container": {
    "position": "relative"
  },
  "loading-need-mask": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "wxc-loading": {
    "position": "absolute",
    "left": "287",
    "top": "500",
    "zIndex": 9999
  },
  "loading-box": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "20",
    "width": "175",
    "height": "175",
    "backgroundColor": "rgba(0,0,0,0.8)"
  },
  "trip-loading": {
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "loading-trip-image": {
    "height": "75",
    "width": "75"
  },
  "loading-text": {
    "color": "#ffffff",
    "fontSize": "24",
    "lineHeight": "30",
    "height": "30",
    "marginTop": "8",
    "textOverflow": "ellipsis",
    "width": "140",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

module.exports = {
  "titleStyle": {
    "flexDirection": "row",
    "marginTop": "10"
  },
  "titleDateStyle": {
    "width": "180",
    "height": "50",
    "lineHeight": "50",
    "textAlign": "center",
    "marginLeft": "40",
    "color": "#000000",
    "fontSize": "30"
  },
  "titleCheckInDiv": {
    "marginLeft": "20",
    "width": "260",
    "justifyContent": "center",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "titleCheckInStyle": {
    "lineHeight": "50",
    "textAlign": "center",
    "fontSize": "30"
  },
  "titleCheckInNumStyle": {
    "height": "50",
    "lineHeight": "50",
    "textAlign": "center",
    "color": "#14A7AD",
    "fontSize": "30"
  },
  "titleHasCheckInStyle": {
    "width": "130",
    "height": "50",
    "textAlign": "center",
    "lineHeight": "50",
    "borderRadius": "5",
    "backgroundColor": "#FF7C34",
    "color": "#FFFFFF",
    "marginLeft": "70",
    "fontSize": "30"
  },
  "calendarStyle": {
    "marginTop": "30"
  },
  "lineStyle": {
    "backgroundColor": "#666666",
    "height": "1",
    "marginTop": "15"
  },
  "CheckInTotalTextStyle": {
    "marginLeft": "40",
    "lineHeight": "50",
    "textAlign": "left"
  },
  "collectionRecordDiv": {
    "marginLeft": "250",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "collectionRecordStyle": {
    "color": "#24B6EF"
  },
  "treasureChestImgStyles": {
    "width": "80",
    "height": "80",
    "marginLeft": "30"
  },
  "needDaysDiv": {
    "flexDirection": "row"
  },
  "needDaysStyle": {
    "lineHeight": "35",
    "textAlign": "center",
    "fontSize": "35"
  },
  "needDaysNumStyle": {
    "lineHeight": "35",
    "textAlign": "center",
    "color": "#C91E02",
    "fontSize": "35"
  },
  "QualificationsStyles": {
    "lineHeight": "30",
    "marginTop": "10",
    "color": "#E7DED7",
    "fontSize": "30"
  },
  "moreIconStyle": {
    "color": "#24B6EF",
    "fontSize": "40",
    "paddingLeft": "0",
    "marginLeft": "0"
  },
  "moreIconGrayStyle": {
    "color": "#C4C4C4",
    "fontSize": "50",
    "textAlign": "center",
    "marginLeft": "150"
  },
  "alertTitleStyle": {
    "marginLeft": "30",
    "color": "#FF7C34",
    "fontSize": "40"
  },
  "alertContentStyle": {
    "marginLeft": "30",
    "color": "#000000",
    "fontSize": "30"
  },
  "treasureBoxDiv": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "treasureBoxImgStyle": {
    "width": "180",
    "height": "150"
  },
  "treasureBoxTestStyle": {
    "textAlign": "center"
  }
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxcLoading = __webpack_require__(8);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _wxcIcon = __webpack_require__(25);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

var _calendar = __webpack_require__(102);

var _calendar2 = _interopRequireDefault(_calendar);

var _Global = __webpack_require__(0);

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
module.exports = {
  components: { calendar: _calendar2.default, WxcIcon: _wxcIcon2.default, WxcLoading: _wxcLoading2.default },
  data: function data() {
    return {
      isSignShow: true,
      intervalSign: 0,
      getDate: '',
      signInNum: 0,
      needDaysNumReceive: 0,
      treasureChestImg: '',
      qualificationsText: '',
      token: '',
      SITEID: '',
      dataObj: {},
      checkInBtn: '签到',
      isCheck: true,
      getimgUrl: _Global2.default.imgStorageUrl,
      isTreasureBox: true,
      signinStatusList: []
    };
  },
  created: function created() {
    var self = this;
    // 图片
    self.treasureChestImg = _Global2.default.nextLevelImgPath + 'banners.png';
    // 领取资格提示文字
    self.qualificationsText = '未达到领取资格';
    //  获取年
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    self.getDate = year + '年' + month + '月';
    // 获取token
    var eventModule = weex.requireModule(_Global2.default.eventModule);
    eventModule.getToken('token', function (res) {
      self.token = res.token;
      self.SITEID = res.SITEID;
      self.getData();
    });
  },

  methods: {
    queryCheckInRecord: function queryCheckInRecord() {
      var barStyle = { center: { img: '', title: '领取记录', color: '#ffffff', width: '300', height: '44', weightFont: '20', textAlign: 'center' },
        left: { img: 'fanhuijiantou', title: '', color: '#41B883' },
        bg: { color: '#f52d2d' },
        viewBgColor: { color: '#ffffff' } };
      var pushData = { vcName: 'WXOthersViewController', url: _Global2.default.domainName + 'dist/SignIn/ReceiveRecordController.js', barStyle: barStyle };
      weex.requireModule(_Global2.default.eventModule).pushController(pushData);
    },

    // 签到按钮点击相应
    checkInTextClick: function checkInTextClick(e) {
      var self = this;
      if (self.isCheck) {
        self.isCheck = false;
        self.isSignShow = true;
        stream.fetch({
          method: 'POST',
          url: _Global2.default.postUserSighAdd,
          headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
          type: 'json',
          body: ''
        }, function (ret) {
          self.isSignShow = false;
          if (ret.ok) {
            var data = ret.data;
            if (data.code === 0) {
              modal.toast({ message: '签到成功' });
              // 重新获取数据
              self.getData();
            } else if (data.code === 109) {
              self.isCheck = true;
              modal.toast({ message: data.message });
            } else {
              self.isCheck = true;
              modal.toast({ message: data.message });
            }
          } else {
            self.isCheck = true;
          }
        }, function (ret) {
          // 请求状态
        });
      }
    },

    // 获取数据
    getData: function getData() {
      var self = this;
      stream.fetch({
        method: 'GET',
        url: _Global2.default.userSignWebList,
        headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        if (ret.ok) {
          self.isSignShow = false;
          var data = ret.data;
          if (data.code === 0) {
            self.dataObj = data.data;
            self.signInNum = self.dataObj.number;
            // 签到数组
            var timeArray = self.dataObj.timeArray;
            var date = new Date();
            for (var i = 0; i < timeArray.length; i++) {
              var num = timeArray[i];
              if (num === 2 && i + 1 === date.getDate()) {
                self.isCheck = false;
                self.checkInBtn = '已签到';
              }
            }
            self.dealBoxStatus(self.dataObj, self.dataObj.signConfig.length);
          } else if (data.code === 109) {
            modal.toast({ message: JSON.stringify(data.message) });
          } else {
            modal.toast({ message: JSON.stringify(data.message) });
          }
        } else {}
      }, function (ret) {
        // modal.toast({ message: JSON.stringify(ret.statusText) })
      });
    },
    dealBoxStatus: function dealBoxStatus(res, len) {
      for (var i = 0; i < len; i++) {
        if (res.userSignRecord[i] && res.userSignRecord[i].status === 3) {
          this.signinStatusList[i] = {
            imgUrl: res.signConfig[i].pickUp,
            id: res.userSignRecord[i].id,
            dayNumber: res.signConfig[i].dayNumber,
            status: res.userSignRecord[i].status
          };
        } else if (res.userSignRecord[i] && res.userSignRecord[i].status !== 3) {
          this.signinStatusList[i] = {
            imgUrl: res.signConfig[i].haveToPickUp,
            id: res.userSignRecord[i].id,
            dayNumber: res.signConfig[i].dayNumber,
            status: res.userSignRecord[i].status
          };
        } else {
          this.signinStatusList[i] = {
            imgUrl: res.signConfig[i].notPickUp,
            id: 0,
            dayNumber: res.signConfig[i].dayNumber,
            status: ''
          };
        }
      }
    },

    // 宝箱点击
    treasureImgClick: function treasureImgClick(e, i) {
      if (self.dataObj.userSignRecord[i] && e.status === 3) {
        var _self = this;
        // 如果点击了
        if (_self.isTreasureBox) {
          _self.isTreasureBox = false;
          _self.isSignShow = true;
          var body = 'userSignRecordId=' + e.id + '&dayNumber=' + e.dayNumber;
          stream.fetch({
            method: 'POST',
            url: _Global2.default.postApplyForMoney,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': _self.token, 'SITEID': _self.SITEID },
            type: 'json',
            body: body
          }, function (ret) {
            _self.isTreasureBox = true;
            _self.isSignShow = false;
            if (ret.ok) {
              var data = ret.data;
              modal.toast({ message: data.message });
              if (data.code === 0) {
                _self.getData();
              } else if (data.code === 109) {} else {}
            }
          }, function (ret) {});
        }
      } else if (e.status !== 3) {
        modal.toast({ message: '已领取' });
      } else {
        // 2
        modal.toast({ message: '会员账号签到未达标！' });
      }
    }
  }
};

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(63)
)

/* script */
__vue_exports__ = __webpack_require__(64)

/* template */
var __vue_template__ = __webpack_require__(65)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/SignIn/calendar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57b78d82"
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

/***/ 103:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', [_c('div', {
    staticClass: ["titleStyle"]
  }, [_c('text', {
    staticClass: ["titleDateStyle"]
  }, [_vm._v(_vm._s(_vm.getDate))]), _c('div', {
    staticClass: ["titleCheckInDiv"]
  }, [_c('text', {
    staticClass: ["titleCheckInStyle"]
  }, [_vm._v("累计签到")]), _c('text', {
    staticClass: ["titleCheckInNumStyle"]
  }, [_vm._v(" " + _vm._s(_vm.signInNum))]), _c('text', {
    staticClass: ["titleCheckInStyle"]
  }, [_vm._v(" 天")])]), _c('text', {
    staticClass: ["titleHasCheckInStyle"],
    on: {
      "click": _vm.checkInTextClick
    }
  }, [_vm._v(_vm._s(_vm.checkInBtn))])]), _c('div', {
    staticClass: ["lineStyle"]
  }), _c('calendar', {
    staticClass: ["calendarStyle"],
    attrs: {
      "dataObject": _vm.dataObj
    }
  }), _c('div', {
    staticStyle: {
      marginTop: "20px",
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["CheckInTotalTextStyle"]
  }, [_vm._v("累计签到奖励")]), _c('div', {
    staticClass: ["collectionRecordDiv"],
    on: {
      "click": _vm.queryCheckInRecord
    }
  }, [_c('text', {
    staticClass: ["collectionRecordStyle"]
  }, [_vm._v("查看领取记录")]), _c('wxc-icon', {
    staticClass: ["moreIconStyle"],
    attrs: {
      "name": "more"
    }
  })], 1)]), _c('div', {
    staticClass: ["lineStyle"]
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginTop: "40px"
    }
  }, _vm._l((_vm.signinStatusList), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["treasureBoxDiv"],
      on: {
        "click": function($event) {
          _vm.treasureImgClick(item, i)
        }
      }
    }, [_c('image', {
      staticClass: ["treasureBoxImgStyle"],
      attrs: {
        "src": _vm.getimgUrl + item.imgUrl
      }
    }), _c('text', {
      staticClass: ["treasureBoxTestStyle"]
    }, [_vm._v("签到" + _vm._s(item.dayNumber) + "天")])])
  })), _vm._m(0)], 1), _c('wxc-loading', {
    attrs: {
      "show": _vm.isSignShow,
      "type": "default",
      "needMask": "false",
      "interval": _vm.intervalSign
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "column",
      marginTop: "50px"
    }
  }, [_c('text', {
    staticClass: ["alertTitleStyle"]
  }, [_vm._v("提示:")]), _c('text', {
    staticClass: ["alertContentStyle"]
  }, [_vm._v("1、累计或连续签到达到相应的天数都可获得奖励！")]), _c('text', {
    staticClass: ["alertContentStyle"]
  }, [_vm._v("2、领取宝箱即可随机获得代金券或现金奖励。")]), _c('text', {
    staticClass: ["alertContentStyle"]
  }, [_vm._v("3、达到签到要求后未在0点前领取视为放弃。")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(7);

var _utils = __webpack_require__(12);

var _utils2 = _interopRequireDefault(_utils);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    interval: {
      type: [Number, String],
      default: 0
    },
    needMask: {
      type: Boolean,
      default: false
    },
    maskStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showLoading: false,
      tid: 0
    };
  },
  watch: {
    show: function show() {
      this.setShow();
    }
  },
  computed: {
    loading: function loading() {
      var loading = {};
      switch (this.type) {
        case 'trip':
          loading = {
            url: _type.GIF,
            class: 'trip-loading'
          };
          break;
        default:
          loading = {
            url: _type.BLACK_GIF,
            class: 'default-loading'
          };
      }
      return loading;
    },
    topPosition: function topPosition() {
      return (_utils2.default.env.getPageHeight() - 200) / 2;
    }
  },
  created: function created() {
    this.setShow();
  },

  methods: {
    maskClicked: function maskClicked() {
      this.needMask && this.$emit('wxcLoadingMaskClicked', {});
    },
    setShow: function setShow() {
      var _this = this;

      var interval = this.interval,
          show = this.show,
          showLoading = this.showLoading;

      var stInterval = parseInt(interval);
      clearTimeout(this.tid);
      if (show) {
        if (showLoading) {
          return;
        }
        if (stInterval === 0) {
          this.showLoading = true;
        } else {
          this.tid = setTimeout(function () {
            _this.showLoading = true;
          }, stInterval);
        }
      } else {
        this.showLoading = false;
      }
    }
  }
};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(13);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 || parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(15),
    qs = __webpack_require__(16),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [],
      value,
      key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['loading-container', _vm.showLoading && _vm.needMask && 'loading-need-mask'],
    style: _vm.maskStyle,
    on: {
      "click": _vm.maskClicked
    }
  }, [(_vm.showLoading) ? _c('div', {
    staticClass: ["wxc-loading"],
    style: {
      top: _vm.topPosition + 'px'
    }
  }, [_c('div', {
    class: ['loading-box', _vm.loading.class],
    attrs: {
      "ariaHidden": true
    }
  }, [_c('image', {
    staticClass: ["loading-trip-image"],
    attrs: {
      "src": _vm.loading.url,
      "resize": "contain",
      "quality": "original"
    }
  }), (_vm.loadingText) ? _c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ 63:
/***/ (function(module, exports) {

module.exports = {
  "calendarTitleDiv": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "calendarTitleStyles": {
    "width": "100",
    "height": "50",
    "color": "#000000",
    "fontSize": "35",
    "textAlign": "center"
  },
  "calendarDiv": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "10"
  },
  "calendarStyleDiv": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100",
    "height": "80"
  },
  "calendarStyle": {
    "width": "50",
    "height": "50",
    "backgroundColor": "#FFFFFF",
    "fontSize": "35",
    "color": "#000000",
    "textAlign": "center",
    "lineHeight": "50",
    "borderRadius": "25"
  },
  "calendarSelStyle": {
    "width": "50",
    "height": "50",
    "backgroundColor": "#FF7C34",
    "fontSize": "35",
    "color": "#FFFFFF",
    "textAlign": "center",
    "lineHeight": "50",
    "borderRadius": "25"
  }
}

/***/ }),

/***/ 64:
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

module.exports = {
  props: {
    dataObject: Object
  },
  data: function data() {
    return {
      curYear: Number,
      dateArr: Array,
      selectArr: Array,
      firstWeekDay: Number,
      daysOfMonth: Number,
      dataObject: undefined.dataObject
    };
  },
  created: function created() {
    this.calendarMothod();
  },

  watch: {
    // dataObject (e) {
    //   // this.$emit('update', e)
    //   let arr = e.timeArray
    //   if (e) {
    //     // 从i + firstWeekDay 位开始更改日期数组中的状态，更改长度为arr的长度，
    //     // dateArr.length - arr.length - firstWeekDay 之后的数组元素为日历最后一行非日期元素
    //     for (let i = 0; i < arr.length; i++) {
    //       // 获取当前行数
    //       let row = Math.floor((i + 1 + this.firstWeekDay + 1) / 7)
    //       // 获取当前行数的列数
    //       let column = (i + 1 + this.firstWeekDay + 1) % 7
    //       // 获取服务器获取的数组中的数字
    //       let num = arr[i]
    //       if (i === 20) {
    //         // 更改日期中对应的对象的状态
    //         this.dateArr[row][column].selectStatus = 2
    //       } else {
    //         // 更改日期中对应的对象的状态
    //         this.dateArr[row][column].selectStatus = num
    //       }
    //     }
    //   }
    //   // console.log('=========arrasdfadsf=====' + JSON.stringify(e) + '=====' + JSON.stringify(this.dateArr))
    // },
    // dateArr (e) {
    //   // console.log('=========ar22222=====' + JSON.stringify(this.dataObject))
    // }
  },
  computed: {
    ob: function ob() {
      var arr = this.dataObject.timeArray;
      if (this.dataObject.timeArray) {
        // 从i + firstWeekDay 位开始更改日期数组中的状态，更改长度为arr的长度，
        // dateArr.length - arr.length - firstWeekDay 之后的数组元素为日历最后一行非日期元素
        for (var i = 0; i < arr.length; i++) {
          // 获取当前行数
          var row = Math.floor((i + this.firstWeekDay + 1) / 7);
          // 获取当前行数的列数
          var column = (i + this.firstWeekDay) % 7;
          // 获取服务器获取的数组中的数字
          var num = arr[i];
          // 更改日期中对应的对象的状态
          this.dateArr[row][column].selectStatus = num;
        }
      }
    }
  },
  mounted: function mounted() {},

  methods: {
    calendarMothod: function calendarMothod() {
      var self = this;
      var curTime = new Date();
      self.curYear = curTime.getFullYear();
      var curMonth = curTime.getMonth();
      // 设置当前月的1号
      var firstDayInMonth = new Date(self.curYear, curMonth, 1);
      // 获取当前月1号在星期几
      var firstWeekDay = firstDayInMonth.getDay();
      // 获取当前月的最后一天; 0 是上个月的最后一天
      var lastDayInMonth = new Date(self.curYear, curMonth + 1, 0);
      // 根据当前月的最后一天 获取当前月的天数
      var daysOfMonth = lastDayInMonth.getDate();

      self.firstWeekDay = firstWeekDay;
      self.daysOfMonth = daysOfMonth;
      var totalArr = [];
      // 获取当前月有多少行 ceil向上舍入
      var calendarRows = Math.ceil((firstWeekDay + daysOfMonth) / 7);
      for (var i = 0; i < calendarRows; i++) {
        var arr = [];
        var status = 1;
        for (var j = 0; j < 7; j++) {
          // 第一行填入1号之前的空数据
          if (i === 0) {
            // 第一行
            // 如果j是小于当前月的1号是星期几的天数，则添加空元素，否则添加日期数
            if (j < firstWeekDay) {
              var data = { date: '', selectStatus: status };
              arr.push(data);
            } else {
              // self.timeArray[j - firstWeekDay] 取对应日期的状态
              var _data = { date: j + 1 - firstWeekDay, selectStatus: status };
              arr.push(_data);
            }
          } else if (i === calendarRows - 1) {
            // 最后一行
            // console.log('======totalArr.length=====' + totalArr.length)
            // 当前totalArr的所有元素 + 当前arr的所有元素 如果小于当前月1号是星期几 + 这月的总天数 则继续添加日期，否则添加空元素
            if (totalArr.length * 7 + arr.length < firstWeekDay + daysOfMonth) {
              var _data2 = { date: i * 7 + j + 1 - firstWeekDay, selectStatus: status };
              arr.push(_data2);
            } else {
              var _data3 = { date: '', selectStatus: status };
              arr.push(_data3);
            }
          } else {
            var _data4 = { date: i * 7 + j + 1 - firstWeekDay, selectStatus: status };
            arr.push(_data4);
          }
        }
        totalArr.push(arr);
      }
      this.dateArr = totalArr;
      // setTimeout(() => {
      //   console.log('=========arr1=====' + JSON.stringify(this.dataObject))
      // }, 1000)
    }
    // // 判断平年还是闰年
    // isLeapYear () {
    //   let self = this
    //   return (self.curYear % 400 === 0) || ((self.curYear % 4 === 0) && (self.curYear % 100 !== 0))
    // }

  }
};

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _c('text', [_vm._v(_vm._s(_vm.ob))]), _vm._l((_vm.dateArr), function(itemArr, i) {
    return _c('div', {
      key: i,
      staticClass: ["calendarDiv"]
    }, _vm._l((itemArr), function(item) {
      return _c('div', {
        key: item,
        staticClass: ["calendarStyleDiv"]
      }, [(item.selectStatus === 1 && item.date > 0) ? _c('text', {
        staticClass: ["calendarStyle"]
      }, [_vm._v(_vm._s(item.date))]) : _vm._e(), (item.selectStatus === 2 && item.date > 0) ? _c('text', {
        staticClass: ["calendarSelStyle"]
      }, [_vm._v(_vm._s(item.date))]) : _vm._e()])
    }))
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["calendarTitleDiv"]
  }, [_c('text', {
    staticClass: ["calendarTitleStyles"]
  }, [_vm._v("日")]), _c('text', {
    staticClass: ["calendarTitleStyles"]
  }, [_vm._v("一")]), _c('text', {
    staticClass: ["calendarTitleStyles"]
  }, [_vm._v("二")]), _c('text', {
    staticClass: ["calendarTitleStyles"]
  }, [_vm._v("三")]), _c('text', {
    staticClass: ["calendarTitleStyles"]
  }, [_vm._v("四")]), _c('text', {
    staticClass: ["calendarTitleStyles"]
  }, [_vm._v("五")]), _c('text', {
    staticClass: ["calendarTitleStyles"]
  }, [_vm._v("六")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Tw93 on 2016/10/29.
 */

var GIF = exports.GIF = 'https://img.alicdn.com/tfs/TB1aks3PpXXXXcXXFXXXXXXXXXX-150-150.gif';
var BLACK_GIF = exports.BLACK_GIF = 'https://img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif';
var PART = exports.PART = 'https://gtms02.alicdn.com/tfs/TB1y4QbSXXXXXbgapXXXXXXXXXX-50-50.gif';

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(9);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/node_modules/weex-ui/packages/wxc-loading/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-35690df0"
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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(100)
)

/* script */
__vue_exports__ = __webpack_require__(101)

/* template */
var __vue_template__ = __webpack_require__(103)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/SignIn/SignInController.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-69a6493c"
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