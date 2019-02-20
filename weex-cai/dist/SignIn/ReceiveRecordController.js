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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/////////////////////////////////////////////////////////////////
//GBridge
/////////////////////////////////////////////////////////////////
var GLog = __webpack_require__(56).GLog;
var GCodec = __webpack_require__(32);

var inWeex = typeof WXEnvironment !== 'undefined';

var debug = true;
var platform;
var canvasModule;

canvasModule = typeof weex !== 'undefined' && weex.requireModule ? weex.requireModule('gcanvas') : typeof __weex_require__ !== 'undefined' ? __weex_require__('@weex-module/gcanvas') : null;

var GBridge = {

    setup: function setup(data) {
        platform = data.platform;
    },

    isIOS: function isIOS() {
        return platform === 1;
    },

    /**
     * 判断是不是浏览器
     *
     **/
    isBrowser: function isBrowser() {
        if (!canvasModule) {
            return true;
        }
        return false;
    },

    callRegisterReattachJSCallback: function callRegisterReattachJSCallback(componentId, cb) {
        if (!inWeex) {
            return;
        }

        if (typeof cb !== 'function') {
            return;
        }

        canvasModule.registerRetachFunction && canvasModule.registerRetachFunction(componentId, cb);
    },

    /**执行render指令*/
    callRender: function callRender(componentId, commands) {
        if (!inWeex) {
            return;
        }
        if (this.isIOS() || this.isBrowser()) {
            // GLog.d('bridge#callrender in iOS');
            canvasModule.render && canvasModule.render(commands, componentId);
        } else {
            if (typeof callGCanvasLinkNative !== 'undefined') {
                // GLog.d('bridge#callGCanvasLinkNative()');
                callGCanvasLinkNative(componentId, 0x20000001, commands);
            } else {
                // GLog.d('bridge#callRender()');
                canvasModule.render && canvasModule.render(commands, componentId);
            }
        }
    },

    callGetImageData: function callGetImageData(componentId, x, y, w, h) {
        if (this.isIOS()) {} else {
            var result = callGCanvasLinkNative(componentId, 0x20000001, "R" + x + "," + y + "," + w + "," + h + ";");
            return { "data": GCodec.Gbase64ToArr(result) };
        }
    },

    /**Android use**/
    callSetup: function callSetup(configObj, componentId, callback) {
        if (!inWeex) {
            return;
        }

        var config = configObj || {};
        //GLog.d('bridge#callRender() commands is ' + commands);
        canvasModule.setup && canvasModule.setup(JSON.stringify(config), componentId, callback);
    },

    /**预加载图片*/
    preLoadImage: function preLoadImage(image, cb) {
        if (!inWeex) {
            return;
        }

        //返回width和height
        //image[src, id]
        canvasModule.preLoadImage(image, function (e) {
            GLog.d('bridge#preLoadImage() callback, e ' + JSON.stringify(e));
            e.url = image[0];
            e.id = image[1];
            cb && cb(e);
        });
    },

    /**绑定纹理*/
    bindImageTexture: function bindImageTexture(componentId, src, callback) {
        if (!inWeex) {
            return;
        }

        canvasModule.bindImageTexture && canvasModule.bindImageTexture(src, componentId, callback);
    },

    /**
     * 获取canvas引用
     * @param ref wx-canvas 引用
     * @param configArray 配置参数
     **/
    callEnable: function callEnable(ref, configArray, callback) {
        if (!inWeex) {
            return;
        }
        var params = {
            componentId: ref,
            config: configArray
        };

        return canvasModule.enable && canvasModule.enable(params);
    },

    callSetDevPixelRatio: function callSetDevPixelRatio(componentId) {
        if (!inWeex) {
            return;
        }
        canvasModule.setDevicePixelRatio && canvasModule.setDevicePixelRatio(componentId);
    },

    /**
     * 获取设备信息(android)
     * @param callback 设备信息
     **/
    getDeviceInfo: function getDeviceInfo(callback) {
        if (!inWeex) {
            return;
        }

        if (this.isBrowser()) {
            //浏览器端不实现
            callback && callback({
                data: { platform: 0 }
            });
        } else {
            canvasModule.getDeviceInfo({}, function (e) {
                GLog.d('bridge#getDeviceInfo() return val:' + JSON.stringify(e));
                callback && callback(e);
            });
        }
    },

    /**
     *
     * 设置context类型,2d或者webgl
     *
     * @param context_type 0代表2d,1代表3d
     * */
    setContextType: function setContextType(componentId, context_type) {
        if (context_type != 0 && context_type != 1) {
            GLog.d('bridge#setContextType(): invalid context type===>' + context_type);
            return;
        }
        GLog.d('bridge#setContextType(): context type is ' + context_type + ' componentId:' + componentId);
        canvasModule.setContextType(context_type, componentId);
    },

    /**
     *
     * 设置日志级别
     * 
     * */
    setLogLevel: function setLogLevel(level) {
        GLog.d('bridge#setLogLevel(): native logLevel ' + level);
        canvasModule.setLogLevel(level);
    },

    /**
     *
     * 设置opengl渲染质量
     *
     * */
    setHiQuality: function setHiQuality(quality) {
        GLog.d('bridge#setHiQuality(): quality: ' + quality);
        canvasModule.setHiQuality(quality);
    },

    resetComponent: function resetComponent(componentId) {
        GLog.d('bridge#resetComponent(): componentId: ' + componentId);
        canvasModule.resetComponent && canvasModule.resetComponent(componentId);
    },

    exeSyncCmd: function exeSyncCmd(componentId, action, args) {
        GLog.d('bridge#exeSyncCmd(): action: ' + action + ',args:' + args);
        return canvasModule.execGcanvaSyncCMD(componentId, action, args);
    },

    callExtendCallNative: function callExtendCallNative(dict) {
        return canvasModule && canvasModule.extendCallNative(dict);
    },

    texImage2D: function texImage2D(componentId, target, level, internalformat, format, type, path) {
        GLog.d('bridge#texImage2D(): ' + path);
        canvasModule.texImage2D && canvasModule.texImage2D(componentId, target, level, internalformat, format, type, path);
    },
    texSubImage2D: function texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, path) {
        GLog.d('bridge#texSubImage2D(): ' + path);
        canvasModule.texSubImage2D && canvasModule.texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, path);
    },
    setAlpha: function setAlpha(componentId, alpha) {
        GLog.d('bridge#setAlpha(): ' + alpha);
        canvasModule.setAlpha && canvasModule.setAlpha(componentId, alpha);
    }
};

module.exports = {
    GBridge: GBridge,
    GLog: GLog
};

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GBridge = __webpack_require__(1).GBridge;
var GHashMap = __webpack_require__(24);

// GCanvasImage
function GCanvasImage() {
  /**
   * The width of the image after it is loaded.
   *
   * @type {number}
   */
  this.width = 0;

  /**
   * The height of the image after it is loaded.
   *
   * @type {number}
   */
  this.height = 0;

  /**
   * A unique id assigned to each image upon creation.
   *
   * @type {number}
   */
  //   this.id = (++GCanvasImage.idCounter);

  // this._id = this.id; // public facing "id" but _id used to internally
  // track image
  this._src = ""; // image source path
  this._complete = true; // "is loading" identifier for complete property
}

/**
 * Iterator for generating id values for GCanvasImage instances
 * internally.
 *
 * @private
 */
GCanvasImage.idCounter = 0;
GCanvasImage.imageMap = new GHashMap();

/**
 * Callback for when an image has successfully loaded a file path assigned
 * to {@link GCanvasImage#src}.
 *
 * @type {function}
 * @name GCanvasImage#onload
 */

/**
 * Callback for when an image has failed to load a file path assigned to
 * {@link GCanvasImage#src}.
 *
 * @type {function}
 * @name GCanvasImage#onerror
 */
GCanvasImage.prototype.removeEventListener = function (type, callback, force) {};

GCanvasImage.prototype.addEventListener = function (type, listener, force) {
  if (type === "load" && typeof listener === 'function') {
    this.onload = listener;
  }

  if (type === "error" && typeof listener === 'function') {
    this.onerror = listener;
  }
};

/**
 * The source property, identifying a URL path to the image's file location.
 * Upon setting this value to a file path value, the file is loaded into the
 * GCanvas plugin. For GCanvas images can be unloaded by setting the
 * src to null or "".
 *
 * @type {string}
 * @name GCanvasImage#src
 * @example var myImage = GCanvas.createImage(); myImage.onload =
 *          function(){ // ... myContext.drawImage(myImage, 0,0,100,100,
 *          0,0,100,100); GCanvas.render(); } myImage.onerror =
 *          function(){ console.log("Could not load image!"); } myImage.src =
 *          "images/spritesheet.jpg";
 */

Object.defineProperty(GCanvasImage.prototype, "src", {
  get: function get() {
    return this._src;
  },
  set: function set(src) {

    if (!src || src === this._src) {
      return;
    }

    this._src = src;

    // Loading
    this.complete = false;

    // callback wrappers
    var me = this;

    var data = GCanvasImage.imageMap.get(src);
    if (data) {
      me.id = data.id;
      me._id = data.id;
      me.complete = true;
      me.width = data.width;
      me.height = data.height;
      var evt = { type: 'load', target: me };
      me.onload && me.onload(evt);
      return;
    }

    this.id = ++GCanvasImage.idCounter;
    this._id = this.id; // public facing "id" but _id used to internally

    GBridge.preLoadImage([src, this.id], function (data) {
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (err) {}
      }

      if (data.error) {
        var evt = { type: 'error', target: me };
        me.onerror && me.onerror(evt);
      } else {
        me.complete = true;
        me.width = typeof data.width === 'number' ? data.width : 0;
        me.height = typeof data.height === 'number' ? data.height : 0;

        var evt = { type: 'load', target: me };
        me.onload && me.onload(evt);
        GCanvasImage.imageMap.put(src, data);
      }
    });
  }
});

/**
 * False when the image is in the process of loading an image after the src
 * property has been set. True when loading is complete or if src is never
 * set. If an error occurred when attempting to load the image, once the
 * process of loading is complete, despite the error, this value will still
 * become true.
 *
 * @type {boolean}
 * @name GCanvasImage#complete
 */
Object.defineProperty(GCanvasImage.prototype, "complete", {
  get: function get() {
    return this._complete;
  },
  set: function set(value) {
    this._complete = value;
  }
});

GCanvasImage.prototype.tagName = 'img';
GCanvasImage.prototype.getAttribute = function (name) {
  return this[name];
};

module.exports = typeof Image === 'function' ? Image : GCanvasImage;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GHashMap() {
    /**Map大小**/
    var size = 0;
    /**对象**/
    var entry = new Object();
    /**Map的存put方法**/
    this.put = function (key, value) {
        if (!this.containsKey(key)) {
            size++;
            entry[key] = value;
        }
    };
    /**Map取get方法**/
    this.get = function (key) {
        return this.containsKey(key) ? entry[key] : null;
    };
    /**Map删除remove方法**/
    this.remove = function (key) {
        if (this.containsKey(key) && delete entry[key]) {
            size--;
        }
    };
    /**是否包含Key**/
    this.containsKey = function (key) {
        return key in entry;
    };
    /**是否包含Value**/
    this.containsValue = function (value) {
        for (var prop in entry) {
            if (entry[prop] == value) {
                return true;
            }
        }
        return false;
    };
    /**所有的Value**/
    this.values = function () {
        var values = new Array();
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    };
    /**所有的 Key**/
    this.keys = function () {
        var keys = new Array();
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    };
    /**Map size**/
    this.size = function () {
        return size;
    };
    /**清空Map**/
    this.clear = function () {
        size = 0;
        entry = new Object();
    };
}

module.exports = GHashMap;

/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**

gcanvas.js使用说明:
1、引入gcanvas库
2、调用gcanvas库的createElement(component)接口，创建一个canvas对象。
3、调用canvas对象的getContext(param)，获取用于渲染的context。

扩展用法：
1、对于Android环境，部分机型可能无法运行。建议在页面入口处调用gcanvas库的start(successCallback, errorCallback)函数，进行黑白名单判断。
2、默认每16ms，会自动下发一次渲染指令。某些特殊场景下，希望自行控制下发频率的，可直接调用context.render()接口。调用后会关闭自动下发的操作，切换成每次主动调用render时才下发。

完整示例如下：
var libGCanvas = require('../../core/gcanvas');
libGCanvas.start(function(){
    nativeLog('gcanvas.start success');
    var canvasObj = libGCanvas.createElement(gcanvasComponent);
    var context = canvasObj.getContext('2d');
    //do any action here
},function(){
    nativeLog('gcanvas.start failed');
});

*/

var GImage = __webpack_require__(23);
var GBridge = __webpack_require__(1).GBridge;
var GLog = __webpack_require__(1).GLog;
var GContextWebGL = __webpack_require__(57);
var GContext2D = __webpack_require__(61);
var GHashMap = __webpack_require__(24);
var htmlPlugin = __webpack_require__(62);

///////////////////////////////
var GSupport = {};
var model_check;
var version_check;
GSupport.renderMode = 0; // 0--RENDERMODE_WHEN_DIRTY, 1--RENDERMODE_CONTINUOUSLY
GSupport.hybridLayerType = -1; // 0--LAYER_TYPE_NONE 1--LAYER_TYPE_SOFTWARE 2--LAYER_TYPE_HARDWARE. change hybrid layer type from LAYER_TYPE_SOFTWARE to unset, avoid block when use html5 audio.
GSupport.checkType = 0; // 0--all support, 1--white list check
GSupport.nativeVer = 0;
GSupport.defaultHiQualityMode = true; // false-- normal true--hiQuality
GSupport.supportScroll = false;
GSupport.newCanvasMode = false; //true: GCanvasView in Webview
GSupport.sameLevel = false; //newCanvasMode = true && true: GCanvasView and Webview is same level;
GSupport.clearColor = "white";
GSupport.WHITE_LIST = {

    model_check: [function (info) {
        return info.MODEL == 'GT-I9300';
    }, function (info) {
        return info.MODEL == 'GT-I9500';
    }, function (info) {
        return info.MODEL == 'GT-N7108';
    }, function (info) {
        return info.MODEL == 'HIKe 848A';
    }, function (info) {
        return info.MODEL == 'HTC 601e';
    }, function (info) {
        return info.MODEL == 'HUAWEI C8813';
    }, function (info) {
        return info.MODEL == 'Lenovo K900';
    }, function (info) {
        return info.MODEL == 'M351';
    }, function (info) {
        return info.MODEL == 'M51w';
    }, function (info) {
        return info.MODEL == 'MI 3';
    }, function (info) {
        return info.MODEL == 'MI 3W';
    }, function (info) {
        return info.MODEL == 'SM-G9006V';
    }, function (info) {
        return info.MODEL == 'SM-N9006';
    }],
    version_check: [function (info) {
        GLog.d("info.OS_RELEASE=" + info.OS_RELEASE);return false;
    }, function (info) {
        return info.OS_RELEASE >= '4.1.0' && info.OS_RELEASE <= '4.4.2';
    }]
};

GSupport.checkList = function (successFunc, failureFunc) {
    var checkType = GSupport.checkType;
    GLog.d("[checkList] checkType:" + checkType);
    if (1 == checkType) {
        //white list check
        var whitelist = GSupport.WHITE_LIST;
        var length = whitelist.length;
        for (var i = 0; i < length; i++) {
            var lenSub = whitelist[i].length;
            var found = false;
            for (var j = 0; j < lenSub; j++) {
                if (whitelist[i][j](GDeviceInfo)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                // unfound in white list
                GLog.d("the device is not supported, " + GDeviceInfo.MODEL);
                failureFunc && failureFunc();
                return;
            }
        }
    }
    successFunc && successFunc();
};
///////////////////////////////

var GDeviceInfo = {};
// var _context = null;
// var _context_type = 0;//0--2d;1--webgl
///////////////////////////////

var GCanvasPlatform = GBridge.isBrowser() ? 0 : 2; //0--H5;1--iOS;2--Android
var currentEl;
var contextTypes = ['2d', 'webgl'];
var currentContextOfType = {};

function GCanvas(componentId) {
    this.componentId = componentId;
    this.id = ++GCanvas.idCounter;
    this.style = {};
}

GCanvas.idCounter = 0;
// GCanvas.canvasMap = new GHashMap();

//-----------------------------
// GCanvas.start
//-----------------------------
GLog.d('gcanvas#=====>>>version: 0.5.49');

GCanvas.start = function (el) {
    GLog.d('gcanvas#start=====>>>');

    if (typeof weex !== 'undefined' && weex.supports && weex.supports('@weex-module/userTrack') || typeof __weex_module_supports__ == "function" && __weex_module_supports__('@weex-module/userTrack')) {
        try {
            var userTrack;
            if (weex && weex.requireModule) {
                userTrack = weex.requireModule('userTrack');
            } else if (__weex_require__) {
                userTrack = __weex_require__('@weex-module/userTrack');
            }
            if (userTrack) {
                userTrack.commitut("expose", 2201, "", '', '/gcanvas.gcanvasweex.start', '', '', {});
            }
        } catch (e) {
            console.error(e);
        }
    }

    if ((typeof WXEnvironment === "undefined" ? "undefined" : _typeof(WXEnvironment)) === 'object' && /ios/i.test(WXEnvironment.platform)) {
        GCanvasPlatform = 1;
    } else if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && /ios/i.test(navigator.userAgent)) {
        GCanvasPlatform = 1;
    } else {
        GCanvasPlatform = GBridge.isBrowser() ? 0 : 2;
    }

    GBridge.setup({ platform: GCanvasPlatform });

    if (GCanvasPlatform === 0) {
        currentEl = el;
        return currentEl;
    } else {
        //bind canvas
        var config = [];
        config.push(GSupport.renderMode);
        config.push(GSupport.hybridLayerType);
        config.push(GSupport.supportScroll);
        config.push(GSupport.newCanvasMode);
        config.push(1); //compatible. 1 will call GCanvasJNI.getAllParameter("gcanvas");
        config.push(GSupport.clearColor);
        config.push(GSupport.sameLevel);

        GBridge.callEnable(el.ref, config);
        var canvas = new GCanvas(el.ref);
        canvas.width = el.style.width;
        canvas.height = el.style.height;
        // GCanvas.canvasMap.put(el.ref, canvas);
        return canvas;
    }
};

//-----------------------------
// Instance Method: getContext
//-----------------------------
GCanvas.prototype.getContext = function (contextID) {
    GLog.d('gcanvas#getContext=====>>>');

    var context = this.context;
    //brower
    if (GCanvasPlatform === 0) {
        if (context) {
            return context; //unsupport change type after create
        } else if (currentEl && currentEl.getContext) {
            context = currentEl.getContext(contextID);
            if (context && !context.render) context.render = function () {};
        }
        return context;
    }

    if (context) {
        return context; //unsupport change type after create
    }

    var context_type;
    if (contextID.match(/webgl/i)) {
        context = new GContextWebGL();
        context_type = 1;
    } else {
        context = new GContext2D();
        context_type = 0;
    }

    // if(context_type == 1) {
    // 	GBridge3d.setLogLevel("debug");
    // 	GBridge3d.callEnable(this.componentId);
    // 	GBridge3d.setContextType(this.componentId, context_type);
    // }else {
    //     GBridge.setLogLevel("debug");
    GBridge.setContextType(this.componentId, context_type);
    // }

    context.componentId = this.componentId;
    // if (!context.timer) {
    //    context.timer = setInterval(this.render.bind(this), 16);
    // }

    this.context = context;

    // if(context_type == 0) {
    GBridge.callRegisterReattachJSCallback(this.componentId, context._clearImageTextures);
    // }

    this.startLoop();

    return context;
};

//-----------------------------
// Instance Method: render
//-----------------------------
GCanvas.prototype.render = function () {
    if (GCanvasPlatform !== 0 && this.context) {
        this.context.render("auto");
    }
};

//-----------------------------
// Instance Method: stopRender
//-----------------------------
GCanvas.prototype.stopRender = function () {
    if (!this.context) {
        return;
    }

    if (this.context.timer) {
        clearInterval(this.context.timer);
        this.context.timer = null;
    }
};

//-----------------------------
// Instance Method: startLoop
//-----------------------------
GCanvas.prototype.startLoop = function (fps) {
    if (!this.context) {
        return;
    }

    fps = parseInt(fps) || 16;
    if (!this.context.timer) {
        this.context.timer = setInterval(this.render.bind(this), fps);
    }
};

//-----------------------------
// Instance Method: stopLoop
//-----------------------------
GCanvas.prototype.stopLoop = function () {
    if (!this.context) {
        return;
    }

    if (this.context.timer) {
        clearInterval(this.context.timer);
        this.context.timer = null;
    }
};

//-----------------------------
// Instance Method: reset
//-----------------------------
GCanvas.prototype.reset = function () {
    if (GCanvasPlatform !== 0) {
        GBridge.resetComponent(this.componentId);
    }
};

//-----------------------------
// Instance Method: setDevicePixelRatio
//-----------------------------
GCanvas.prototype.setDevicePixelRatio = function () {
    if (!this.context) {
        return;
    }

    GBridge.callSetDevPixelRatio(this.componentId);
};

//-----------------------------
// GCanvas.disable
//-----------------------------
GCanvas.disable = function () {
    // GLog.d('gcanvas#disable=====>>>');
    // if(GCanvasPlatform !== 0){
    //     GBridge.callDisable();
    // }
};

GCanvas.prototype.setup = function (support) {
    if (!this.context) {
        return;
    }
    var config = [];
    var mySupport = support || GSupport;

    for (var attr in GSupport) {
        if (mySupport[attr] != undefined) {
            GSupport[attr] = mySupport[attr];
        }
    }

    var config = {
        'renderMode': GSupport.renderMode,
        'hybridLayerType': GSupport.hybridLayerType,
        'supportScroll': GSupport.supportScroll,
        'sameLevel': GSupport.sameLevel,
        'newCanvasMode': GSupport.newCanvasMode,
        'clearColor': GSupport.clearColor
    };

    GBridge.callSetup(config, this.componentId, function (e) {});
};

//-----------------------------
// GCanvas.setHiQuality
//-----------------------------
GCanvas.setHiQuality = function () {
    GLog.d('gcanvas#setHiQuality=====>>>' + quality);
    if (GCanvasPlatform !== 0) {
        GBridge.setHiQuality(quality);
    }
};

//-----------------------------
// GCanvas.setLogLevel
//-----------------------------
GCanvas.setLogLevel = function (level) {
    GLog.d('gcanvas#setLogLevel=====>>> ' + level);
    if (GCanvasPlatform !== 0) {
        GBridge.setLogLevel(level);
    }
};

GCanvas.prototype.toDataURL = function (type, options) {
    //	GLog.d('gcanvas#toDataURL=====>>> ' + type + ',' + options);

    var args;
    if (typeof options == 'undefined') {
        args = type + ';';
    } else {
        args = type + ',' + options + ';';
    }

    return GBridge.exeSyncCmd(this.componentId, 'todataurl', args);
};

//-----------------------------
// GCanvas.htmlPlugin
//-----------------------------
GCanvas.htmlPlugin = htmlPlugin;

module.exports = GCanvas;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GCodec() {}

GCodec.prototype.GarrToBase64 = function (buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

GCodec.prototype.Gbase64ToArr = function (sBase64, nBlocksSize) {
  var self = this;
  var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""),
      nInLen = sB64Enc.length,
      nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2,
      taBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= self._GcharDecode(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;
    }
  }

  return taBytes;
};

GCodec.prototype._GcharDecode = function (nChr) {
  return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
};

module.exports = new GCodec();

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/////////////////////////////////////////////////////////////////
//GLog
/////////////////////////////////////////////////////////////////
var GLOG_DEBUG = 0;
var GLOG_INFO = 1;
var GLOG_WARN = 2;
var GLOG_ERROR = 3;
var GLOG_NULL = -1;
var GLog = {};
GLog._nullFunc = function () {};
GLog.d = GLog._nullFunc;
GLog.i = GLog._nullFunc;
GLog.w = GLog._nullFunc;
GLog.e = GLog._nullFunc;
GLog._nativeEnable = false;
GLog._setNativeLevel = function (level) {
	/*
 if (!this._nativeEnable)
 	return;
 if (level == GLOG_DEBUG)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "debug" ]);
 else if (level == GLOG_INFO)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "info" ]);
 else if (level == GLOG_WARN)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "warn" ]);
 else if (level == GLOG_ERROR)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "error" ]);
 else 
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "fatal" ]);	
     */
};
GLog._refresh = function () {

	if (this.enable == false) {
		this._setNativeLevel(GLOG_NULL);
		this.d = this._nullFunc;
		this.i = this._nullFunc;
		this.w = this._nullFunc;
		this.e = this._nullFunc;
	} else {
		if (this.level <= GLOG_ERROR) this.e = function (msg) {
			console.error(msg);
		};else this.e = this._nullFunc;

		if (this.level <= GLOG_WARN) this.w = function (msg) {
			console.warn(msg);
		};else this.w = this._nullFunc;

		if (this.level <= GLOG_INFO) this.i = function (msg) {
			console.info(msg);
			var args = {
				msg: msg
				//WindVane.call("GLog", "writeLog", args || {}, null, null);
			};
		};else this.i = this._nullFunc;

		if (this.level <= GLOG_DEBUG) this.d = function (msg) {
			console.info(msg);
			var args = {
				msg: msg
				//WindVane.call("GLog", "writeLog", args || {}, null, null);
			};
		};else this.d = this._nullFunc;

		this._setNativeLevel(this.level);
	}
};
GLog.enable = function () {
	this.enable = true;
	this._refresh();
};
GLog.disable = function () {
	this.enable = false;
	this._refresh();
};
GLog.setLevel = function (level) {
	console.info("[setLevel] " + this.level + "=>" + level);
	this.level = level;
	this.enable = true;
	this._refresh();
};

// GLog.setLevel(GLOG_WARN);
GLog.setLevel(GLOG_DEBUG);

module.exports.GLog = GLog;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GBridge = __webpack_require__(1).GBridge;
var GLog = __webpack_require__(1).GLog;
var GCanvas = __webpack_require__(31);
var GCanvasImage = __webpack_require__(23);
var GTexture = __webpack_require__(58);
var GBuffer = __webpack_require__(59);
var GProgram = __webpack_require__(60);

/**
 callGCanvasLinkNative中type的定义
 | 0-1(ContextType) | 2 (MethodType) | 3 - 32 (OptionType) |
 */

if (typeof ContextType == "undefined") {
    var ContextType = {
        Context2D: 0,
        ContextWebGL: 1
        // ContextVulkan : 2,
        // ContextMetal  : 3,
    };
}

if (typeof MethodType == "undefined") {
    var MethodType = {
        Async: 0,
        Sync: 1
    };
}

if (typeof CmdType == "undefined") {
    var CmdType = {
        Render: 1
    };
}

var G_NeedRender = true;

function WebGLCallNative(componentId, cmdArgs) {
    G_NeedRender = true;

    var type = 0x60000000; //ContextType.ContextWebGL << 30 | MethodType.Sync << 29
    //GLog.d("WebGLCallNative command: " + cmdArgs);

    if (GBridge.isIOS()) {
        var result = GBridge.callExtendCallNative({ "contextId": componentId, "type": type, "args": cmdArgs });
        if (result) {
            GLog.d("WebGLCallNative result: " + result["result"]);
            return result["result"];
        }
        return null;

        // var result = extendCallNative({"className":"WXGCanvasCallNative", "contextId": componentId, "type":type, "args":cmdArgs});
        // if( result )
        // {
        //        return result["result"];
        // }
        // return null;
    } else {
        var result = callGCanvasLinkNative(componentId, type, cmdArgs);
        //GLog.d("WebGLCallNative result: " + result);
        return result;
    }
}

function GContextWebGL() {
    GInitWebGLFuncId(this);
    GInitWebGLEnum(this);

    GInitWebGLFuncIdExt(this);
    GInitWebGLEnumExt(this);

    this.componentId = null;
}

//////////////////////////////////////////////////////////////////////////

function GInitWebGLFuncId(obj) {
    var i = 1;
    obj.activeTextureId = i++ + ","; //1
    obj.attachShaderId = i++ + ",";
    obj.bindAttribLocationId = i++ + ",";
    obj.bindBufferId = i++ + ",";
    obj.bindFramebufferId = i++ + ",";
    obj.bindRenderbufferId = i++ + ",";
    obj.bindTextureId = i++ + ",";
    obj.blendColorId = i++ + ",";
    obj.blendEquationId = i++ + ",";
    obj.blendEquationSeparateId = i++ + ","; //10
    obj.blendFuncId = i++ + ",";
    obj.blendFuncSeparateId = i++ + ",";
    obj.bufferDataId = i++ + ",";
    obj.bufferSubDataId = i++ + ",";
    obj.checkFramebufferStatusId = i++ + ",";
    obj.clearId = i++ + ",";
    obj.clearColorId = i++ + ",";
    obj.clearDepthId = i++ + ",";
    obj.clearStencilId = i++ + ",";
    obj.colorMaskId = i++ + ","; //20
    obj.compileShaderId = i++ + ",";
    obj.compressedTexImage2DId = i++ + ",";
    obj.compressedTexSubImage2DId = i++ + ",";
    obj.copyTexImage2DId = i++ + ",";
    obj.copyTexSubImage2DId = i++ + ",";
    obj.createBufferId = i++ + ",";
    obj.createFramebufferId = i++ + ",";
    obj.createProgramId = i++ + ",";
    obj.createRenderbufferId = i++ + ",";
    obj.createShaderId = i++ + ","; //30
    obj.createTextureId = i++ + ",";
    obj.cullFaceId = i++ + ",";
    obj.deleteBufferId = i++ + ",";
    obj.deleteFramebufferId = i++ + ",";
    obj.deleteProgramId = i++ + ",";
    obj.deleteRenderbufferId = i++ + ",";
    obj.deleteShaderId = i++ + ",";
    obj.deleteTextureId = i++ + ",";
    obj.depthFuncId = i++ + ",";
    obj.depthMaskId = i++ + ","; //40
    obj.depthRangeId = i++ + ",";
    obj.detachShaderId = i++ + ",";
    obj.disableId = i++ + ",";
    obj.disableVertexAttribArrayId = i++ + ",";
    obj.drawArraysId = i++ + ",";
    obj.drawArraysInstancedANGLEId = i++ + ",";
    obj.drawElementsId = i++ + ",";
    obj.drawElementsInstancedANGLEId = i++ + ",";
    obj.enableId = i++ + ",";
    obj.enableVertexAttribArrayId = i++ + ","; //50
    obj.flushId = i++ + ",";
    obj.framebufferRenderbufferId = i++ + ",";
    obj.framebufferTexture2DId = i++ + ",";
    obj.frontFaceId = i++ + ",";
    obj.generateMipmapId = i++ + ",";
    obj.getActiveAttribId = i++ + ",";
    obj.getActiveUniformId = i++ + ",";
    obj.getAttachedShadersId = i++ + ",";
    obj.getAttribLocationId = i++ + ",";
    obj.getBufferParameterId = i++ + ","; //60
    obj.getContextAttributesId = i++ + ",";
    obj.getErrorId = i++ + ",";
    obj.getExtensionId = i++ + ",";
    obj.getFramebufferAttachmentParameterId = i++ + ",";
    obj.getParameterId = i++ + ",";
    obj.getProgramInfoLogId = i++ + ",";
    obj.getProgramParameterId = i++ + ",";
    obj.getRenderbufferParameterId = i++ + ",";
    obj.getShaderInfoLogId = i++ + ",";
    obj.getShaderParameterId = i++ + ","; //70
    obj.getShaderPrecisionFormatId = i++ + ",";
    obj.getShaderSourceId = i++ + ",";
    obj.getSupportedExtensionsId = i++ + ",";
    obj.getTexParameterId = i++ + ",";
    obj.getUniformId = i++ + ",";
    obj.getUniformLocationId = i++ + ",";
    obj.getVertexAttribId = i++ + ",";
    obj.getVertexAttribOffsetId = i++ + ",";
    obj.isBufferId = i++ + ",";
    obj.isContextLostId = i++ + ","; //80
    obj.isEnabledId = i++ + ",";
    obj.isFramebufferId = i++ + ",";
    obj.isProgramId = i++ + ",";
    obj.isRenderbufferId = i++ + ",";
    obj.isShaderId = i++ + ",";
    obj.isTextureId = i++ + ",";
    obj.lineWidthId = i++ + ",";
    obj.linkProgramId = i++ + ",";
    obj.pixelStoreiId = i++ + ",";
    obj.polygonOffsetId = i++ + ","; //90
    obj.readPixelsId = i++ + ",";
    obj.renderbufferStorageId = i++ + ",";
    obj.sampleCoverageId = i++ + ",";
    obj.scissorId = i++ + ",";
    obj.shaderSourceId = i++ + ",";
    obj.stencilFuncId = i++ + ",";
    obj.stencilFuncSeparateId = i++ + ",";
    obj.stencilMaskId = i++ + ",";
    obj.stencilMaskSeparateId = i++ + ",";
    obj.stencilOpId = i++ + ","; //100
    obj.stencilOpSeparateId = i++ + ",";
    obj.texImage2DId = i++ + ",";
    obj.texParameterfId = i++ + ",";
    obj.texParameteriId = i++ + ",";
    obj.texSubImage2DId = i++ + ",";
    obj.uniform1fId = i++ + ",";
    obj.uniform1fvId = i++ + ",";
    obj.uniform1iId = i++ + ",";
    obj.uniform1ivId = i++ + ",";
    obj.uniform2fId = i++ + ","; //110
    obj.uniform2fvId = i++ + ",";
    obj.uniform2iId = i++ + ",";
    obj.uniform2ivId = i++ + ",";
    obj.uniform3fId = i++ + ",";
    obj.uniform3fvId = i++ + ",";
    obj.uniform3iId = i++ + ",";
    obj.uniform3ivId = i++ + ",";
    obj.uniform4fId = i++ + ",";
    obj.uniform4fvId = i++ + ",";
    obj.uniform4iId = i++ + ","; //120
    obj.uniform4ivId = i++ + ",";
    obj.uniformMatrix2fvId = i++ + ",";
    obj.uniformMatrix3fvId = i++ + ",";
    obj.uniformMatrix4fvId = i++ + ",";
    obj.useProgramId = i++ + ",";
    obj.validateProgramId = i++ + ",";
    obj.vertexAttrib1fId = i++ + ","; //new
    obj.vertexAttrib2fId = i++ + ","; //new
    obj.vertexAttrib3fId = i++ + ","; //new
    obj.vertexAttrib4fId = i++ + ","; //new       //130
    obj.vertexAttrib1fvId = i++ + ","; //new
    obj.vertexAttrib2fvId = i++ + ","; //new
    obj.vertexAttrib3fvId = i++ + ","; //new
    obj.vertexAttrib4fvId = i++ + ","; //new
    obj.vertexAttribPointerId = i++ + ",";
    obj.viewportId = i++ + ",";
}

function GInitWebGLEnum(obj) {
    //GL Constant Define
    obj.NO_ERROR = 0x0;
    obj.ZERO = 0x0;

    obj.NONE = 0x0;
    obj.ONE = 0x1;
    obj.LINES = 0x1;
    obj.LINE_LOOP = 0x2;
    obj.LINE_STRIP = 0x3;
    obj.TRIANGLES = 0x4;
    obj.TRIANGLE_STRIP = 0x5;
    obj.TRIANGLE_FAN = 0x6;
    obj.DEPTH_BUFFER_BIT = 0x100;
    obj.NEVER = 0x200;
    obj.LESS = 0x201;
    obj.EQUAL = 0x202;
    obj.LEQUAL = 0x203;
    obj.GREATER = 0x204;
    obj.NOTEQUAL = 0x205;
    obj.GEQUAL = 0x206;
    obj.ALWAYS = 0x207;
    obj.SRC_COLOR = 0x300;
    obj.ONE_MINUS_SRC_COLOR = 0x301;
    obj.SRC_ALPHA = 0x302;
    obj.ONE_MINUS_SRC_ALPHA = 0x303;
    obj.DST_ALPHA = 0x304;
    obj.ONE_MINUS_DST_ALPHA = 0x305;
    obj.DST_COLOR = 0x306;
    obj.ONE_MINUS_DST_COLOR = 0x307;
    obj.SRC_ALPHA_SATURATE = 0x308;
    obj.STENCIL_BUFFER_BIT = 0x400;
    obj.FRONT = 0x404;
    obj.BACK = 0x405;
    obj.FRONT_AND_BACK = 0x408;
    obj.INVALID_ENUM = 0x500;
    obj.INVALID_VALUE = 0x501;
    obj.INVALID_OPERATION = 0x502;
    obj.OUT_OF_MEMORY = 0x505;
    obj.INVALID_FRAMEBUFFER_OPERATION = 0x506;
    obj.CW = 0x900;
    obj.CCW = 0x901;
    obj.LINE_WIDTH = 0xB21;
    obj.CULL_FACE = 0xB44;
    obj.CULL_FACE_MODE = 0xB45;
    obj.FRONT_FACE = 0xB46;
    obj.DEPTH_RANGE = 0xB70;
    obj.DEPTH_TEST = 0xB71;
    obj.DEPTH_WRITEMASK = 0xB72;
    obj.DEPTH_CLEAR_VALUE = 0xB73;
    obj.DEPTH_FUNC = 0xB74;
    obj.STENCIL_TEST = 0xB90;
    obj.STENCIL_CLEAR_VALUE = 0xB91;
    obj.STENCIL_FUNC = 0xB92;
    obj.STENCIL_VALUE_MASK = 0xB93;
    obj.STENCIL_FAIL = 0xB94;
    obj.STENCIL_PASS_DEPTH_FAIL = 0xB95;
    obj.STENCIL_PASS_DEPTH_PASS = 0xB96;
    obj.STENCIL_REF = 0xB97;
    obj.STENCIL_WRITEMASK = 0xB98;
    obj.VIEWPORT = 0xBA2;
    obj.DITHER = 0xBD0;
    obj.BLEND = 0xBE2;
    obj.SCISSOR_BOX = 0xC10;
    obj.SCISSOR_TEST = 0xC11;
    obj.COLOR_CLEAR_VALUE = 0xC22;
    obj.COLOR_WRITEMASK = 0xC23;
    obj.UNPACK_ALIGNMENT = 0xCF5;
    obj.PACK_ALIGNMENT = 0xD05;
    obj.MAX_TEXTURE_SIZE = 0xD33;
    obj.MAX_VIEWPORT_DIMS = 0xD3A;
    obj.SUBPIXEL_BITS = 0xD50;
    obj.RED_BITS = 0xD52;
    obj.GREEN_BITS = 0xD53;
    obj.BLUE_BITS = 0xD54;
    obj.ALPHA_BITS = 0xD55;
    obj.DEPTH_BITS = 0xD56;
    obj.STENCIL_BITS = 0xD57;
    obj.TEXTURE_2D = 0xDE1;
    obj.DONT_CARE = 0x1100;
    obj.FASTEST = 0x1101;
    obj.NICEST = 0x1102;
    obj.BYTE = 0x1400;
    obj.UNSIGNED_BYTE = 0x1401;
    obj.SHORT = 0x1402;
    obj.UNSIGNED_SHORT = 0x1403;
    obj.INT = 0x1404;
    obj.UNSIGNED_INT = 0x1405;
    obj.FLOAT = 0x1406;
    obj.INVERT = 0x150A;
    obj.TEXTURE = 0x1702;
    obj.STENCIL_INDEX = 0x1901;
    obj.DEPTH_COMPONENT = 0x1902;
    obj.ALPHA = 0x1906;
    obj.RGB = 0x1907;
    obj.RGBA = 0x1908;
    obj.LUMINANCE = 0x1909;
    obj.LUMINANCE_ALPHA = 0x190A;
    obj.KEEP = 0x1E00;
    obj.REPLACE = 0x1E01;
    obj.INCR = 0x1E02;
    obj.DECR = 0x1E03;
    obj.VENDOR = 0x1F00;
    obj.RENDERER = 0x1F01;
    obj.VERSION = 0x1F02;
    obj.NEAREST = 0x2600;
    obj.LINEAR = 0x2601;
    obj.NEAREST_MIPMAP_NEAREST = 0x2700;
    obj.LINEAR_MIPMAP_NEAREST = 0x2701;
    obj.NEAREST_MIPMAP_LINEAR = 0x2702;
    obj.LINEAR_MIPMAP_LINEAR = 0x2703;
    obj.TEXTURE_MAG_FILTER = 0x2800;
    obj.TEXTURE_MIN_FILTER = 0x2801;
    obj.TEXTURE_WRAP_S = 0x2802;
    obj.TEXTURE_WRAP_T = 0x2803;
    obj.REPEAT = 0x2901;
    obj.POLYGON_OFFSET_UNITS = 0x2A00;
    obj.COLOR_BUFFER_BIT = 0x4000;
    obj.CONSTANT_COLOR = 0x8001;
    obj.ONE_MINUS_CONSTANT_COLOR = 0x8002;
    obj.CONSTANT_ALPHA = 0x8003;
    obj.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
    obj.BLEND_COLOR = 0x8005;
    obj.FUNC_ADD = 0x8006;
    obj.BLEND_EQUATION_RGB = 0x8009;
    obj.FUNC_SUBTRACT = 0x800A;
    obj.FUNC_REVERSE_SUBTRACT = 0x800B;
    obj.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
    obj.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
    obj.POLYGON_OFFSET_FILL = 0x8037;
    obj.POLYGON_OFFSET_FACTOR = 0x8038;
    obj.RGBA4 = 0x8056;
    obj.RGB5_A1 = 0x8057;
    obj.TEXTURE_BINDING_2D = 0x8069;
    obj.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
    obj.SAMPLE_COVERAGE = 0x80A0;
    obj.SAMPLE_BUFFERS = 0x80A8;
    obj.SAMPLES = 0x80A9;
    obj.SAMPLE_COVERAGE_VALUE = 0x80AA;
    obj.SAMPLE_COVERAGE_INVERT = 0x80AB;
    obj.BLEND_DST_RGB = 0x80C8;
    obj.BLEND_SRC_RGB = 0x80C9;
    obj.BLEND_DST_ALPHA = 0x80CA;
    obj.BLEND_SRC_ALPHA = 0x80CB;
    obj.CLAMP_TO_EDGE = 0x812F;
    obj.GENERATE_MIPMAP_HINT = 0x8192;
    obj.DEPTH_COMPONENT16 = 0x81A5;
    obj.DEPTH_STENCIL_ATTACHMENT = 0x821A;
    obj.UNSIGNED_SHORT_5_6_5 = 0x8363;
    obj.MIRRORED_REPEAT = 0x8370;
    obj.ALIASED_POINT_SIZE_RANGE = 0x846D;
    obj.ALIASED_LINE_WIDTH_RANGE = 0x846E;
    obj.TEXTURE0 = 0x84C0;
    obj.TEXTURE1 = 0x84C1;
    obj.TEXTURE2 = 0x84C2;
    obj.TEXTURE3 = 0x84C3;
    obj.TEXTURE4 = 0x84C4;
    obj.TEXTURE5 = 0x84C5;
    obj.TEXTURE6 = 0x84C6;
    obj.TEXTURE7 = 0x84C7;
    obj.TEXTURE8 = 0x84C8;
    obj.TEXTURE9 = 0x84C9;
    obj.TEXTURE10 = 0x84CA;
    obj.TEXTURE11 = 0x84CB;
    obj.TEXTURE12 = 0x84CC;
    obj.TEXTURE13 = 0x84CD;
    obj.TEXTURE14 = 0x84CE;
    obj.TEXTURE15 = 0x84CF;
    obj.TEXTURE16 = 0x84D0;
    obj.TEXTURE17 = 0x84D1;
    obj.TEXTURE18 = 0x84D2;
    obj.TEXTURE19 = 0x84D3;
    obj.TEXTURE20 = 0x84D4;
    obj.TEXTURE21 = 0x84D5;
    obj.TEXTURE22 = 0x84D6;
    obj.TEXTURE23 = 0x84D7;
    obj.TEXTURE24 = 0x84D8;
    obj.TEXTURE25 = 0x84D9;
    obj.TEXTURE26 = 0x84DA;
    obj.TEXTURE27 = 0x84DB;
    obj.TEXTURE28 = 0x84DC;
    obj.TEXTURE29 = 0x84DD;
    obj.TEXTURE30 = 0x84DE;
    obj.TEXTURE31 = 0x84DF;
    obj.ACTIVE_TEXTURE = 0x84E0;
    obj.MAX_RENDERBUFFER_SIZE = 0x84E8;
    obj.DEPTH_STENCIL = 0x84F9;
    obj.INCR_WRAP = 0x8507;
    obj.DECR_WRAP = 0x8508;
    obj.TEXTURE_CUBE_MAP = 0x8513;
    obj.TEXTURE_BINDING_CUBE_MAP = 0x8514;
    obj.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
    obj.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
    obj.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
    obj.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
    obj.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
    obj.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
    obj.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
    obj.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
    obj.CURRENT_VERTEX_ATTRIB = 0x8626;
    obj.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
    obj.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
    obj.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
    obj.BUFFER_SIZE = 0x8764;
    obj.BUFFER_USAGE = 0x8765;
    obj.STENCIL_BACK_FUNC = 0x8800;
    obj.STENCIL_BACK_FAIL = 0x8801;
    obj.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
    obj.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
    obj.BLEND_EQUATION_ALPHA = 0x883D;
    obj.MAX_VERTEX_ATTRIBS = 0x8869;
    obj.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
    obj.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
    obj.ARRAY_BUFFER = 0x8892;
    obj.ELEMENT_ARRAY_BUFFER = 0x8893;
    obj.ARRAY_BUFFER_BINDING = 0x8894;
    obj.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
    obj.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
    obj.STREAM_DRAW = 0x88E0;
    obj.STATIC_DRAW = 0x88E4;
    obj.DYNAMIC_DRAW = 0x88E8;
    obj.FRAGMENT_SHADER = 0x8B30;
    obj.VERTEX_SHADER = 0x8B31;
    obj.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
    obj.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
    obj.SHADER_TYPE = 0x8B4F;
    obj.FLOAT_VEC2 = 0x8B50;
    obj.FLOAT_VEC3 = 0x8B51;
    obj.FLOAT_VEC4 = 0x8B52;
    obj.INT_VEC2 = 0x8B53;
    obj.INT_VEC3 = 0x8B54;
    obj.INT_VEC4 = 0x8B55;
    obj.BOOL = 0x8B56;
    obj.BOOL_VEC2 = 0x8B57;
    obj.BOOL_VEC3 = 0x8B58;
    obj.BOOL_VEC4 = 0x8B59;
    obj.FLOAT_MAT2 = 0x8B5A;
    obj.FLOAT_MAT3 = 0x8B5B;
    obj.FLOAT_MAT4 = 0x8B5C;
    obj.SAMPLER_2D = 0x8B5E;
    obj.SAMPLER_CUBE = 0x8B60;
    obj.DELETE_STATUS = 0x8B80;
    obj.COMPILE_STATUS = 0x8B81;
    obj.LINK_STATUS = 0x8B82;
    obj.VALIDATE_STATUS = 0x8B83;
    obj.INFO_LOG_LENGTH = 0x8B84;
    obj.ATTACHED_SHADERS = 0x8B85;
    obj.ACTIVE_UNIFORMS = 0x8B86;
    obj.ACTIVE_UNIFORM_MAX_LENGTH = 0x8B87;
    obj.SHADER_SOURCE_LENGTH = 0x8B88;
    obj.ACTIVE_ATTRIBUTES = 0x8B89;
    obj.ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8B8A;
    obj.SHADING_LANGUAGE_VERSION = 0x8B8C;
    obj.CURRENT_PROGRAM = 0x8B8D;
    obj.STENCIL_BACK_REF = 0x8CA3;
    obj.STENCIL_BACK_VALUE_MASK = 0x8CA4;
    obj.STENCIL_BACK_WRITEMASK = 0x8CA5;
    obj.FRAMEBUFFER_BINDING = 0x8CA6;
    obj.RENDERBUFFER_BINDING = 0x8CA7;
    obj.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
    obj.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
    obj.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
    obj.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
    obj.FRAMEBUFFER_COMPLETE = 0x8CD5;
    obj.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
    obj.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
    obj.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
    obj.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
    obj.COLOR_ATTACHMENT0 = 0x8CE0;
    obj.DEPTH_ATTACHMENT = 0x8D00;
    obj.STENCIL_ATTACHMENT = 0x8D20;
    obj.FRAMEBUFFER = 0x8D40;
    obj.RENDERBUFFER = 0x8D41;
    obj.RENDERBUFFER_WIDTH = 0x8D42;
    obj.RENDERBUFFER_HEIGHT = 0x8D43;
    obj.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
    obj.STENCIL_INDEX8 = 0x8D48;
    obj.RENDERBUFFER_RED_SIZE = 0x8D50;
    obj.RENDERBUFFER_GREEN_SIZE = 0x8D51;
    obj.RENDERBUFFER_BLUE_SIZE = 0x8D52;
    obj.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
    obj.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
    obj.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
    obj.RGB565 = 0x8D62;
    obj.LOW_FLOAT = 0x8DF0;
    obj.MEDIUM_FLOAT = 0x8DF1;
    obj.HIGH_FLOAT = 0x8DF2;
    obj.LOW_INT = 0x8DF3;
    obj.MEDIUM_INT = 0x8DF4;
    obj.HIGH_INT = 0x8DF5;
    obj.SHADER_COMPILER = 0x8DFA;
    obj.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
    obj.MAX_VARYING_VECTORS = 0x8DFC;
    obj.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;

    obj.UNPACK_FLIP_Y_WEBGL = 0x9240;
    obj.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    // obj.CONTEXT_LOST_WEBGL = 0x9242;
    // obj.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
    // obj.BROWSER_DEFAULT_WEBGL = 0x9244;
}

/////////////////////////////////////////////
// WebGL Extension
/////////////////////////////////////////////
function GInitWebGLFuncIdExt(obj) {
    var i = 300; //offset=300

    //extension method for ANGLE_instanced_arrays
    obj.drawArraysInstancedANGLEId = i++ + ",";
    obj.drawElementsInstancedANGLEId = i++ + ",";
    obj.vertexAttribDivisorANGLEId = i++ + ",";

    //extension method for OES_vertex_array_object
    obj.createVertexArrayOESId = i++ + ",";
    obj.deleteVertexArrayOESId = i++ + ",";
    obj.isVertexArrayOESId = i++ + ",";
    obj.bindVertexArrayOESId = i++ + ",";
}

function GInitWebGLEnumExt(obj) {
    //extension flag
    obj.OES_vertex_array_object = 1;
    obj.OES_texture_float = 1;
    obj.OES_element_index_uint = 1;

    //extension const for ANGLE_instanced_arrays
    //#define GL_VERTEX_ATTRIB_ARRAY_DIVISOR_EXT    0x88FE
    obj.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;

    //extension const for OES_vertex_array_object
    //#define GL_VERTEX_ARRAY_BINDING_OES           0x85B5
    obj.VERTEX_ARRAY_BINDING_OES = 0x85B5;
}

function GarrToBase64(array) {
    if (!array) {
        return '';
    }

    var str = '';
    if (array.join === 'function') {
        str = array.join();
    } else {
        for (var i = 0; i < array.length; i++) {
            if (i < array.length - 1) {
                //                 str = str + array[i] + ',';
                str = str + array[i].toFixed(3) + ',';
            } else {
                //                 str = str + array[i];
                str = str + array[i].toFixed(3);
            }
        }
    }
    return btoa(str);
}

function Gbase64ToArr(base64) {
    var binary_string = atob(base64);
    var array = binary_string.slice();
    return array;
}

//字符串split使用
function GetArrayType(array) {
    //1 - uint8 array
    //2 - uint16 array
    //4 - uint32 array
    //14 - float32 array
    if (!array) {
        return 2;
    }
    var bytes = array.BYTES_PER_ELEMENT;
    if (bytes == 4 && array instanceof Float32Array) {
        return 10 + bytes;
    }
    return bytes;
}

//////////////////////////////////////////////////////////////////////////
//                        GWebGLActiveInfos
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfos
//////////////////////////////////////////////////////////////////////////
function GWebGLActiveInfo() {
    this.name;
    this.size;
    this.type;
}

GWebGLActiveInfo.convertFormString = function (infoString) {
    var activeInfo = new GWebGLActiveInfo();
    if (infoString) {
        var infoArray = infoString.split(",");
        if (infoArray.length >= 3) {
            activeInfo.type = parseInt(infoArray[0]);
            activeInfo.size = parseInt(infoArray[1]);
            activeInfo.name = infoArray[2];
        }
    }

    return activeInfo;
};

//////////////////////////////////////////////////////////////////////////
//                        GWebGLShaderPrecisionFormat
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat
//////////////////////////////////////////////////////////////////////////
function GWebGLShaderPrecisionFormat() {
    this.rangeMin;
    this.rangeMax;
    this.precision;
}

//////////////////////////////////////////////////////////////////////////
// GContextWebGLExtension
//////////////////////////////////////////////////////////////////////////
function GContextWebGLExtension(gl) {
    this.gl = gl;
}

GContextWebGL.prototype.render = function () {
    if (G_NeedRender) {
        var type = 0x60000001; //ContextType.ContextWebGL << 30 | MethodType.Sync << 29 | CmdType.Render

        if (GBridge.isIOS()) {
            var result = GBridge.callExtendCallNative({ "className": "WXGCanvasCallNative", "contextId": this.componentId, "type": type });
            G_NeedRender = false;
        } else {
            callGCanvasLinkNative(this.componentId, type, "render");
            G_NeedRender = false;
        }
    }
};

//////////////////////////////////////////////////////////////////////////
//                  WEBGL 1.0 API
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
//////////////////////////////////////////////////////////////////////////

GContextWebGL.prototype.activeTexture = function (texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.activeTextureId + textureId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.attachShader = function (program, shader) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.attachShaderId + programId + "," + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindAttribLocation = function (program, index, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.bindAttribLocationId + programId + "," + index + "," + name + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindBuffer = function (target, buffer) {
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = this.bindBufferId + target + "," + bufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindFramebuffer = function (target, framebuffer) {
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = this.bindFramebufferId + target + "," + framebufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindRenderbuffer = function (target, renderbuffer) {
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.bindRenderbufferId + target + "," + renderbufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.blendColor = function (red, green, blue, alpha) {
    var cmd = this.blendColorId + red + "," + green + "," + blue + "," + alpha + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindTexture = function (target, texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.bindTextureId + target + "," + textureId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendEquation = function (mode) {
    var cmd = this.blendEquationId + mode + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendEquationSeparate = function (modeRGB, modeAlpha) {
    var cmd = this.blendEquationSeparateId + modeRGB + "," + modeAlpha + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendFunc = function (sfactor, dfactor) {
    var cmd = this.blendFuncId + sfactor + "," + dfactor + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendFuncSeparate = function (srcRGB, dstRGB, srcAlpha, dstAlpha) {
    var cmd = this.blendFuncSeparateId + srcRGB + "," + dstRGB + "," + srcAlpha + "," + dstAlpha + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new array or size
GContextWebGL.prototype.bufferData = function (target, array, usage) {
    var cmd = this.bufferDataId + target + "," + GetArrayType(array) + "," + GarrToBase64(array) + "," + usage + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.bufferSubData = function (target, offset, array) {
    var cmd = this.bufferSubDataId + target + "," + offset + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.checkFramebufferStatus = function (target) {
    var cmd = this.checkFramebufferStatusId + target + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clear = function (mask) {
    var cmd = this.clearId + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearColor = function (red, green, blue, alpha) {
    var cmd = this.clearColorId + red + "," + green + "," + blue + "," + alpha + ";";
    if (!GBridge.isIOS()) {
        //GBridge.setAlpha(this.componentId,alpha);
    }
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearDepth = function (depth) {
    var cmd = this.clearDepthId + depth + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearStencil = function (s) {
    var cmd = this.clearStencilId + s + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.colorMask = function (red, green, blue, alpha) {
    var cmd = this.colorMaskId + (red ? 1 : 0) + "," + (green ? 1 : 0) + "," + (blue ? 1 : 0) + "," + (alpha ? 1 : 0) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.compileShader = function (shader) {
    var cmd = this.compileShaderId + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.compressedTexImage2D = function (target, level, internalformat, width, height, border, array) {
    var cmd = this.compressedTexImage2DId + target + "," + level + "," + internalformat + "," + width + "," + height + "," + border + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.compressedTexSubImage2D = function (target, level, xoffset, yoffset, width, height, format, array) {
    var cmd = this.compressedTexSubImage2DId + target + "," + level + "," + xoffset + "," + yoffset + "," + width + "," + height + "," + format + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.copyTexImage2D = function (target, level, internalformat, x, y, width, height, border) {
    var cmd = this.copyTexImage2DId + target + "," + level + "," + internalformat + "," + x + "," + y + "," + width + "," + height + "," + border + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.copyTexSubImage2D = function (target, level, xoffset, yoffset, x, y, width, height) {
    var cmd = this.copyTexSubImage2DId + target + "," + level + "," + xoffset + "," + yoffset + "," + x + "," + y + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.createBuffer = function () {
    var buffer = new GBuffer();
    var cmd = this.createBufferId + ";";
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createFramebuffer = function () {
    var buffer = new GBuffer();
    var cmd = this.createFramebufferId + ";";
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createProgram = function () {
    var cmd = this.createProgramId + ";";
    var program = new GProgram();
    program.programId = WebGLCallNative(this.componentId, cmd);
    return program;
};

GContextWebGL.prototype.createRenderbuffer = function () {
    var buffer = new GBuffer();
    var cmd = this.createRenderbufferId + ";";
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createShader = function (type) {
    var cmd = this.createShaderId + type + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.createTexture = function () {
    var texture = new GTexture();
    var cmd = this.createTextureId + ";";
    var result = WebGLCallNative(this.componentId, cmd);
    texture.textureId = parseInt(result) || result;
    return texture;
};

GContextWebGL.prototype.cullFace = function (mode) {
    var cmd = this.cullFaceId + mode + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteBuffer = function (buffer) {
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = this.deleteBufferId + bufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteFramebuffer = function (framebuffer) {
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = this.deleteFramebufferId + framebufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.deleteProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteRenderbuffer = function (renderbuffer) {
    var renderBufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.deleteRenderbufferId + renderBufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteShader = function (shader) {
    var cmd = this.deleteShaderId + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteTexture = function (texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.deleteTextureId + textureId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthFunc = function (func) {
    var cmd = this.depthFuncId + func + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthMask = function (flag) {
    var cmd = this.depthMaskId + (flag ? 1 : 0) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthRange = function (zNear, zFar) {
    var cmd = this.depthRangeId + zNear + "," + zFar + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.detachShader = function (program, shader) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.detachShaderId + programId + "," + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.disable = function (cap) {
    var cmd = this.disableId + cap + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.disableVertexAttribArray = function (index) {
    var cmd = this.disableVertexAttribArrayId + index + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.drawArrays = function (mode, first, count) {
    var cmd = this.drawArraysId + mode + "," + first + "," + count + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.drawElements = function (mode, count, type, offset) {
    var cmd = this.drawElementsId + mode + "," + count + "," + type + "," + offset + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.enable = function (cap) {
    var cmd = this.enableId + cap + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.enableVertexAttribArray = function (index) {
    var cmd = this.enableVertexAttribArrayId + index + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.flush = function () {
    var cmd = this.flushId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.framebufferRenderbuffer = function (target, attachment, renderbuffertarget, renderbuffer) {
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.framebufferRenderbufferId + target + "," + attachment + "," + renderbuffertarget + "," + renderbufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.framebufferTexture2D = function (target, attachment, textarget, texture, level) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.framebufferTexture2DId + target + "," + attachment + "," + textarget + "," + textureId + "," + level + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.frontFace = function (mode) {
    var cmd = this.frontFaceId + mode + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.generateMipmap = function (target) {
    var cmd = this.generateMipmapId + target + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getActiveAttrib = function (program, index) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getActiveAttribId + programId + "," + index + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GWebGLActiveInfo.convertFormString(resultString);
};

GContextWebGL.prototype.getActiveUniform = function (program, index) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getActiveUniformId + programId + "," + index + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GWebGLActiveInfo.convertFormString(resultString);
};

//new
GContextWebGL.prototype.getAttachedShaders = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getAttachedShadersId + programId + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");
    return resultArray;
};

GContextWebGL.prototype.getAttribLocation = function (program, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getAttribLocationId + programId + "," + name + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getBufferParameter = function (target, pname) {
    var cmd = this.getBufferParameterId + target + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new TODO OpenGL ES not Support
GContextWebGL.prototype.getContextAttributes = function () {
    return null;
};

//new
GContextWebGL.prototype.getError = function () {
    var cmd = this.getErrorId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getExtension = function (name) {
    var ext = null;
    if (name == "ANGLE_instanced_arrays") {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
        ext.drawArraysInstancedANGLE = gl.drawArraysInstancedANGLE;
        ext.drawElementsInstancedANGLE = gl.drawElementsInstancedANGLE;
        ext.vertexAttribDivisorANGLE = gl.vertexAttribDivisorANGLE;

        ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;
    } else if (name == "OES_vertex_array_object") {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
        ext.createVertexArrayOES = gl.createVertexArrayOES;
        ext.deleteVertexArrayOES = gl.deleteVertexArrayOES;
        ext.isVertexArrayOES = gl.isVertexArrayOES;
        ext.bindVertexArrayOES = gl.bindVertexArrayOES;

        ext.VERTEX_ARRAY_BINDING_OES = 0x85B5;
        ext.OES_vertex_array_object = 1;
        ext.OES_texture_float = 1;
        ext.OES_element_index_uint = 1;
    } else if (name == "OES_texture_float") {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
    }

    return ext;
};

//new
GContextWebGL.prototype.getFramebufferAttachmentParameter = function (target, attachment, pname) {
    var cmd = this.getFramebufferAttachmentParameterId + target + "," + attachment + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

function GetRetrunResultByString(resultString) {
    if (!resultString) return null;

    var resultArray = resultString.split(",");
    if (resultArray.length < 2) return null;

    var retType = parseInt(resultArray[0]);
    /*
    kReturnBoolean = 1,
    kReturnInt,
    kReturnFloat,
    kReturnIntArray,
    kReturnFloatArray,
    kReturnString
    */
    switch (retType) {
        case 1:
            return parseInt(resultArray[1]) == 1;
        case 2:
            return parseInt(resultArray[1]);
        case 3:
            return parseFloat(resultArray[1]);
        case 4:
        case 5:
            {
                var array = resultArray.slice(1);
                return array;
            }
        case 6:
            return resultArray[1];
        default:
            return null;
    }
}

GContextWebGL.prototype.getParameter = function (pname) {
    var cmd = this.getParameterId + pname + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

GContextWebGL.prototype.getProgramInfoLog = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getProgramInfoLogId + programId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getProgramParameter = function (program, pname) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getProgramParameterId + programId + "," + pname + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

//new
GContextWebGL.prototype.getRenderbufferParameter = function (target, pname) {
    var cmd = this.getRenderbufferParameterId + target + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getShaderInfoLog = function (shader) {
    var cmd = this.getShaderInfoLogId + shader + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getShaderParameter = function (shader, pname) {
    var cmd = this.getShaderParameterId + shader + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//return range,precision
GContextWebGL.prototype.getShaderPrecisionFormat = function (shaderType, precisionType) {
    var cmd = this.getShaderPrecisionFormatId + shaderType + "," + precisionType + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");

    var precisionFormat = new GWebGLShaderPrecisionFormat();

    if (resultArray.length == 3) {
        precisionFormat.rangeMin = parseInt(resultArray[0]);
        precisionFormat.rangeMax = parseInt(resultArray[1]);
        precisionFormat.precision = parseInt(resultArray[2]);
    }
    return precisionFormat;
};

GContextWebGL.prototype.getShaderSource = function (shader) {
    var cmd = this.getShaderSourceId + shader + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new return array
GContextWebGL.prototype.getSupportedExtensions = function () {
    var cmd = this.getSupportedExtensionsId + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");
    return resultArray;
};

//new
GContextWebGL.prototype.getTexParameter = function (target, pname) {
    var cmd = this.getTexParameterId + target + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getUniform = function (program, location) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getUniformId + programId + "," + location + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

GContextWebGL.prototype.getUniformLocation = function (program, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getUniformLocationId + programId + "," + name + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getVertexAttrib = function (index, pname) {
    var cmd = this.getVertexAttribId + index + "," + pname + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);

    // if( !resultString ) return null;

    // var resultArray = resultString.split(",");
    // if( resultArray.length <2 ) return null;

    // var retType = parseInt(resultArray[0]);
    // switch( retType )
    // {
    //     case 2: return parseInt(resultArray[1]);
    //     case 5:
    //     {
    //         var array = resultArray.slice(1);
    //         return array;
    //     }
    //     default: return null;
    // }
};

GContextWebGL.prototype.getVertexAttribOffset = function (index, pname) {
    var cmd = this.getVertexAttribOffsetId + index + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isBuffer = function (buffer) {
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = this.isBufferId + bufferId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//OpenGL ES not support
GContextWebGL.prototype.isContextLost = function () {
    return false;
};

//new
GContextWebGL.prototype.isEnabled = function (cap) {
    var cmd = this.isEnabledId + cap + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isFramebuffer = function (framebuffer) {
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = this.isFramebufferId + framebufferId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.isProgramId + programId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isRenderbuffer = function (renderbuffer) {
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.isRenderbufferId + renderbufferId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isShader = function (shader) {
    var cmd = this.isShaderId + shader + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isTexture = function (texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.isTextureId + textureId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.lineWidth = function (width) {
    var cmd = this.lineWidthId + width + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.linkProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.linkProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.pixelStorei = function (pname, param) {
    // UNPACK_FLIP_Y_WEBGL = 0x9240;
    // obj.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    //filter _WEBGL feature
    if (pname == 0x9240 || pname == 0x9241) return;

    var cmd = this.pixelStoreiId + pname + "," + param + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.polygonOffset = function (factor, units) {
    var cmd = this.polygonOffsetId + factor + "," + units + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.readPixels = function (x, y, width, height, format, type, pixels) {
    var cmd = this.readPixelsId + x + "," + y + "," + width + "," + height + "," + format + "," + type + ";";
    var pixelsString = WebGLCallNative(this.componentId, cmd);
    var pixelsArray = pixelsString.split(",");
};

GContextWebGL.prototype.renderbufferStorage = function (target, internalformat, width, height) {
    var cmd = this.renderbufferStorageId + target + "," + internalformat + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.sampleCoverage = function (value, invert) {
    var cmd = this.sampleCoverageId + value + "," + (invert ? 1 : 0) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.scissor = function (x, y, width, height) {
    var cmd = this.scissorId + x + "," + y + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.shaderSource = function (shader, source) {
    // var cmd = (this.shaderSourceId + shader + "," + btoa(source) + ";");
    var cmd = this.shaderSourceId + shader + "," + source;
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilFunc = function (func, ref, mask) {
    var cmd = this.stencilFuncId + func + "," + ref + "," + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilFuncSeparate = function (face, func, ref, mask) {
    var cmd = this.stencilFuncSeparateId + face + "," + func + "," + ref + "," + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilMask = function (mask) {
    var cmd = this.stencilMaskId + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilMaskSeparate = function (face, mask) {
    var cmd = this.stencilMaskSeparateId + face + "," + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilOp = function (fail, zfail, zpass) {
    var cmd = this.stencilOpId + fail + "," + zfail + "," + zpass + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilOpSeparate = function (face, fail, zfail, zpass) {
    var cmd = this.stencilOpSeparateId + face + "," + fail + "," + zfail + "," + zpass + ";";
    WebGLCallNative(this.componentId, cmd);
};

// void texImage2D(GLenum target, GLint level, GLint internalformat,
//                   GLsizei width, GLsizei height, GLint border, GLenum format,
//                   GLenum type, [AllowShared] ArrayBufferView? pixels);
//   void texImage2D(GLenum target, GLint level, GLint internalformat,
//                   GLenum format, GLenum type, TexImageSource source); // May throw DOMException
//texImage2D(webgl.TEXTURE_2D, 0, webgl.RGB, webgl.RGB, webgl.UNSIGNED_BYTE, img);
//texImage2D(target, level, internalformat, format, type, img);
//texImage2D(target, level, internalformat, width, height, border, format, type, pixels);
GContextWebGL.prototype.texImage2D = function (target, level, internalformat) {
    var argc = arguments.length;
    if (6 == argc) {
        var format = arguments[3];
        var type = arguments[4];
        var imageData = arguments[5];

        //imageData is GCanvasImage
        if (imageData instanceof GCanvasImage) {
            var cmd = this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," + format + "," + type + "," + imageData.src + ";";
            if (!GBridge.isIOS()) {
                GBridge.texImage2D(this.componentId, target, level, internalformat, format, type, imageData.src);
            } else {
                WebGLCallNative(this.componentId, cmd);
            }
        }
    } else if (9 == argc) {
        var width = arguments[3];
        var height = arguments[4];
        var border = arguments[5];
        var format = arguments[6];
        var type = arguments[7];
        var array = arguments[8];

        var cmd = this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," + width + "," + height + "," + border + "," + format + "," + type + ",";

        if (array == null) {
            cmd = cmd + 0 + ";";
        } else {
            cmd = cmd + GetArrayType(array) + "," + GarrToBase64(array) + ";";
        }

        // var cmd = (this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," +
        //            width + "," + height + "," + border + "," + format + "," + type + "," +
        //            GetArrayType(array) + "," + GarrToBase64(array) + ";");
        WebGLCallNative(this.componentId, cmd);
    }
};

//new
GContextWebGL.prototype.texParameterf = function (target, pname, param) {
    var cmd = this.texParameterfId + target + "," + pname + "," + param + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.texParameteri = function (target, pname, param) {
    var cmd = this.texParameteriId + target + "," + pname + "," + param + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
// void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ArrayBufferView? pixels);
// void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, ImageData? pixels);
GContextWebGL.prototype.texSubImage2D = function (target, level, xoffset, yoffset) {
    var argc = arguments.length;
    if (argc == 7) {
        var format = arguments[4];
        var type = arguments[5];
        var imageData = arguments[6];

        //imageData is GCanvasImage
        if (imageData instanceof GCanvasImage) {
            if (!GBridge.isIOS()) {
                GBridge.texSubImage2D(this.componentId, target, level, xoffset, yoffset, format, type, imageData.src);
            } else {
                var cmd = this.texSubImage2DId + argc + "," + target + "," + level + "," + xoffset + "," + yoffset + "," + type + "," + imageData.src + ";";
                WebGLCallNative(this.componentId, cmd);
            }
        }
    } else if (argc == 9) {
        var width = arguments[4];
        var height = arguments[5];
        var format = arguments[6];
        var type = arguments[7];
        var array = arguments[8];

        var cmd = this.texSubImage2DId + argc + "," + target + "," + level + "," + xoffset + "," + yoffset + "," + width + "," + height + "," + format + "," + type + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
        WebGLCallNative(this.componentId, cmd);
    }
};

function trans2ArrayType(type, ar) {
    if (ar instanceof type) return ar;
    var len = ar.length;
    var f32ar = new type(len);
    for (var i = 0; i < len; i++) {
        f32ar[i] = ar[i];
    }
    return f32ar;
}

GContextWebGL.prototype.uniformXXv_ = function (id, value, type, cmdId) {
    if (value.length == 0) return;

    value = trans2ArrayType(type, value);
    var cmd = cmdId + id + "," + 0 + "," + GarrToBase64(value) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1f = function (location, value) {
    var cmd = this.uniform1fId + location + "," + value + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform1fvId);
};

GContextWebGL.prototype.uniform1i = function (location, value) {
    var cmd = this.uniform1iId + location + "," + value + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform1ivId);
};

GContextWebGL.prototype.uniform2f = function (location, x, y) {
    var cmd = this.uniform2fId + location + "," + x + "," + y + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform2fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform2fvId);
};

GContextWebGL.prototype.uniform2i = function (location, x, y) {
    var cmd = this.uniform2iId + location + "," + x + "," + y + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform2iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform2ivId);
};

GContextWebGL.prototype.uniform3f = function (location, x, y, z) {
    var cmd = this.uniform3fId + location + "," + x + "," + y + "," + z + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform3fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform3fvId);
};

GContextWebGL.prototype.uniform3i = function (location, x, y, z) {
    var cmd = this.uniform3iId + location + "," + x + "," + y + "," + z + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform3iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform3ivId);
};

GContextWebGL.prototype.uniform4f = function (location, x, y, z, w) {
    var cmd = this.uniform4fId + location + "," + x + "," + y + "," + z + "," + w + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform4fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform4fvId);
};

GContextWebGL.prototype.uniform4i = function (location, x, y, z, w) {
    var cmd = this.uniform4iId + location + "," + x + "," + y + "," + z + "," + w + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform4iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform4ivId);
};

GContextWebGL.prototype.uniformMatrixXfv_ = function (location, transpose, value, apiId) {
    if (value.length == 0) return;
    var cmd = apiId + location + "," + (transpose ? 1 : 0) + "," + 0 + "," + GarrToBase64(value) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniformMatrix2fv = function (location, transpose, value) {
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix2fvId);
};

GContextWebGL.prototype.uniformMatrix3fv = function (location, transpose, value) {
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix3fvId);
};

GContextWebGL.prototype.uniformMatrix4fv = function (location, transpose, value) {
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix4fvId);
};

GContextWebGL.prototype.useProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.useProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.validateProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.validateProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib1f = function (index, v0) {
    var cmd = this.vertexAttrib1fId + index + "," + v0 + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib2f = function (index, v0, v1) {
    var cmd = this.vertexAttrib2fId + index + "," + v0 + "," + v1 + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib3f = function (index, v0, v1, v2) {
    var cmd = this.vertexAttrib3fId + index + "," + v0 + "," + v1 + "," + v2 + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib4f = function (index, v0, v1, v2, v3) {
    var cmd = this.vertexAttrib4fId + index + "," + v0 + "," + v1 + "," + v2 + "," + v3 + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.vertexAttribXXfv_ = function (index, value, type, cmdId) {
    if (value.length == 0) return;

    value = trans2ArrayType(type, value);
    var cmd = cmdId + index + "," + GarrToBase64(value) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.vertexAttrib1fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib1fvId);
};

GContextWebGL.prototype.vertexAttrib2fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib2fvId);
};

GContextWebGL.prototype.vertexAttrib3fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib3fvId);
};

GContextWebGL.prototype.vertexAttrib4fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib4fvId);
};

// GContextWebGL.prototype.vertexAttrib2fv = function(index, value){
//     var cmd = this.vertexAttrib2fvId + index;
//     for (var i = 0; i < value.length; i++) {
//         cmd += ",";
//         cmd += value[i].toFixed(3);
//     }
//     cmd += ";";
//     WebGLCallNative(this.componentId, cmd);
// };

GContextWebGL.prototype.vertexAttribPointer = function (index, size, type, normalized, stride, offset) {
    var cmd = this.vertexAttribPointerId + index + "," + size + "," + type + "," + (normalized ? 1 : 0) + "," + stride + "," + offset + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.viewport = function (x, y, width, height) {
    var cmd = this.viewportId + x + "," + y + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

////////////////////////////////////////////
// WebGL Extension
////////////////////////////////////////////


//extension for ANGLE_instanced_arrays
GContextWebGL.prototype.drawArraysInstancedANGLE = function (mode, first, count, primcount) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.drawArraysInstancedANGLEId + mode + "," + first + "," + count + "," + primcount + ";";
    WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.drawElementsInstancedANGLE = function (mode, count, type, offset, primcount) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.drawElementsInstancedANGLEId + mode + "," + count + "," + type + "," + offset + "," + primcount + ";";
    WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.vertexAttribDivisorANGLE = function (index, divisor) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.vertexAttribDivisorANGLEId + index + "," + divisor + ";";
    WebGLCallNative(gl.componentId, cmd);
};

//extension for OES_vertex_array_object
GContextWebGL.prototype.deleteVertexArrayOES = function (array) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.deleteVertexArrayOESId + array + ";";
    WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.createVertexArrayOES = function () {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.createVertexArrayOESId + ";";
    return WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.isVertexArrayOES = function (array) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.isVertexArrayOESId + array + ";";
    return WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.bindVertexArrayOES = function (array) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.bindVertexArrayOESId + array + ";";
    WebGLCallNative(gl.componentId, cmd);
};

module.exports = GContextWebGL;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GTexture() {
  this.textureId = 0;
  this.image = "";
}

module.exports = GTexture;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GBuffer() {
  this.bufferId = 0;
}

module.exports = GBuffer;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GProgram() {
  this.programId = 0;
  this.vertex = "";
  this.fragment = "";
}
GProgram.prototype.attachShader = function (type, shader) {
  if (type === 'vertex') {
    this.vertex = shader;
  } else if (type === 'fragment') {
    this.fragment = shader;
  }
};

module.exports = GProgram;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GBridge = __webpack_require__(1).GBridge;
var GLog = __webpack_require__(1).GLog;
var GHashMap = __webpack_require__(24);
var GCanvasImage = __webpack_require__(23);
var GCodec = __webpack_require__(32);

function GContext2D() {
    this._drawCommands = "";
    this._globalAlpha = 1.0;
    this._fillStyle = "rgb(0,0,0)";
    this._strokeStyle = "rgb(0,0,0)";
    this._lineWidth = 1;
    this._lineCap = "butt";
    this._lineJoin = "miter";
    this._miterLimit = 10;
    this._globalCompositeOperation = "source-over";
    this._textAlign = "start";
    this._textBaseline = "alphabetic";
    this._font = "10px sans-serif";
    // this._images = {};
    // this._canvases1 = {};
    // this._canvases2 = {};
    // this._getImageData = new Array();

    // GCanvas._forbiddenAutoReplaceCanvas =true;
    // this._apiCanvas  = document.createElement('canvas');
    // GCanvas._forbiddenAutoReplaceCanvas =false;
    // console.error("apicanvas="+this._apiCanvas);
    // this._apiContext = this._apiCanvas.getContext("2d");
    // this._apiContext.font = this._font;

    this._savedGlobalAlpha = [];
    this.timer = null;
    this.componentId = null;

    this._imageMap = new GHashMap();
    this._textureMap = new GHashMap();
}

/////////////////////////////////////////////////////////////////
// FillStylePattern
/////////////////////////////////////////////////////////////////
function FillStylePattern(img, pattern) {
    this._style = pattern;
    this._img = img;
}

/////////////////////////////////////////////////////////////////
// FillStyleLinearGradient
/////////////////////////////////////////////////////////////////
function FillStyleLinearGradient(x0, y0, x1, y1) {
    this._start_pos = { _x: x0, _y: y0 };
    this._end_pos = { _x: x1, _y: y1 };
    this._stop_count = 0;
    this._stops = [0, 0, 0, 0, 0];
}

FillStyleLinearGradient.prototype.addColorStop = function (pos, color) {
    if (this._stop_count < 5 && 0.0 <= pos && pos <= 1.0) {
        this._stops[this._stop_count] = { _pos: pos, _color: color };
        this._stop_count++;
    }
};

/////////////////////////////////////////////////////////////////
// FillStyleRadialGradient
/////////////////////////////////////////////////////////////////
function FillStyleRadialGradient(x0, y0, r0, x1, y1, r1) {
    this._start_pos = { _x: x0, _y: y0, _r: r0 };
    this._end_pos = { _x: x1, _y: y1, _r: r1 };
    this._stop_count = 0;
    this._stops = [0, 0, 0, 0, 0];
}

FillStyleRadialGradient.prototype.addColorStop = function (pos, color) {
    if (this._stop_count < 5 && 0.0 <= pos && pos <= 1.0) {
        this._stops[this._stop_count] = { _pos: pos, _color: color };
        this._stop_count++;
    }
};

/**
 * Represents the alpha value to be used with drawing commands where 1 is
 * completely visible and 0 is fully transparent.
 *
 * @type {number}
 * @name GContext2D#globalAlpha
 */
Object.defineProperty(GContext2D.prototype, "globalAlpha", {
    get: function get() {
        return this._globalAlpha;
    },
    set: function set(value) {
        // if (this._globalAlpha != value) {
        this._globalAlpha = value;
        this._drawCommands = this._drawCommands.concat("a" + value.toFixed(2) + ";");
        // }
    }
});

/**
 * Represents the color or style to use inside shapes. It can only be a
 * string which must be parsed as CSS <color> value for now.
 *
 * @type {string}
 * @name GContext2D#fillStyle
 * @example // set context fillStyle context.fillStyle = 'rgb(121,194,245)';
 */
Object.defineProperty(GContext2D.prototype, "fillStyle", {
    get: function get() {
        return this._fillStyle;
    },
    set: function set(value) {
        this._fillStyle = value;

        if (typeof value == 'string') {
            this._drawCommands = this._drawCommands.concat("F" + value + ";");
        } else if (value instanceof FillStylePattern) {
            if (value._img instanceof GCanvasImage) {
                GBridge.bindImageTexture(this.componentId, [value._img.src, value._img.id], function () {});
                this._drawCommands = this._drawCommands.concat("G" + value._img._id + "," + value._style + ";");
            }
        } else if (value instanceof FillStyleLinearGradient) {
            var command = "D" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        } else if (value instanceof FillStyleRadialGradient) {
            var command = "H" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._start_pos._r.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._end_pos._r.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        }
    }
});

/**
 * Represents the color or style for the lines. It can only be a string
 * which must be parsed as CSS <color> value for now.
 *
 * @type {string}
 * @name GContext2D#strokeStyle
 * @example // set context strokeStyle context.strokeStyle = 'rgb(121,194,245)';
 */
Object.defineProperty(GContext2D.prototype, "strokeStyle", {
    get: function get() {
        return this._strokeStyle;
    },
    set: function set(value) {
        this._strokeStyle = value;

        if (typeof value == 'string') {
            this._drawCommands = this._drawCommands.concat("S" + value + ";");
        } else if (value instanceof FillStylePattern) {
            if (value._img instanceof GCanvasImage) {
                GBridge.bindImageTexture(this.componentId, [value._img.src, value._img.id], function () {});
                this._drawCommands = this._drawCommands.concat("G" + value._img._id + "," + value._style + ";");
            }
        } else if (value instanceof FillStyleLinearGradient) {
            var command = "D" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        } else if (value instanceof FillStyleRadialGradient) {
            var command = "H" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._start_pos._r.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y + ",".toFixed(2) + value._end_pos._r.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        }
    }
});

/**
 * Represents the width of the lines.
 *
 * @type {number}
 * @name GContext2D#lineWidth
 * @example // set context lineWidth context.lineWidth = 2;
 */
Object.defineProperty(GContext2D.prototype, "lineWidth", {
    get: function get() {
        return this._lineWidth;
    },
    set: function set(value) {
        this._lineWidth = value;
        this._drawCommands = this._drawCommands.concat("W" + value + ";");
    }
});
/**
 * The lineCap property sets or returns the style of the end caps for a line.
 *
 * @type {number}
 * @name GContext2D#lineCap
 * @example // set context lineCap context.lineCap="round";
 */
Object.defineProperty(GContext2D.prototype, "lineCap", {
    get: function get() {
        return this._lineCap;
    },
    set: function set(value) {
        this._lineCap = value;
        this._drawCommands = this._drawCommands.concat("C" + value + ";");
    }
});

/**
 * Sets or returns the type of corner created, when two lines meet
 *
 * @type {number}
 * @name GContext2D#lineJoin
 * @example // set context lineJoin context.lineJoin="round";
 */
Object.defineProperty(GContext2D.prototype, "lineJoin", {
    get: function get() {
        return this._lineJoin;
    },
    set: function set(value) {
        this._lineJoin = value;
        this._drawCommands = this._drawCommands.concat("J" + value + ";");
    }
});

/**
 * Sets or returns the maximum miter length
 *
 * @type {number}
 * @name GContext2D#miterLimit
 * @example // set context miterLimit context.miterLimit=10;
 */
Object.defineProperty(GContext2D.prototype, "miterLimit", {
    get: function get() {
        return this._miterLimit;
    },
    set: function set(value) {
        this._miterLimit = value;
        this._drawCommands = this._drawCommands.concat("M" + value + ";");
    }
});

/**
 * Represents the globalCompositeOperation value to be used with drawing
 * commands where 1 is completely visible and 0 is fully transparent.
 *
 * @type {number}
 * @name GContext2D#globalCompositeOperation
 */
Object.defineProperty(GContext2D.prototype, "globalCompositeOperation", {
    get: function get() {
        return this._globalCompositeOperation;
    },

    set: function set(value) {
        // if (this._globalCompositeOperation != value) {

        this._globalCompositeOperation = value;
        var mode = 0;
        switch (value) {
            case "source-over":
                mode = 0;
                break;
            case "source-atop":
                mode = 5;
                break;
            case "source-in":
                mode = 0;
                break;
            case "source-out":
                mode = 2;
                break;
            case "destination-over":
                mode = 4;
                break;
            case "destination-atop":
                mode = 4;
                break;
            case "destination-in":
                mode = 4;
                break;
            case "destination-out":
                mode = 3;
                break;
            case "lighter":
                mode = 1;
                break;
            case "copy":
                mode = 2;
                break;
            case "xor":
                mode = 6;
                break;
            default:
                mode = 0;
        }

        this._drawCommands = this._drawCommands.concat("B" + mode + ";");
        // }
    }
});

/**
 * Represents the textAlign value to be used with drawing commands
 *
 * @type {number}
 * @name GContext2D#textAlign
 */
Object.defineProperty(GContext2D.prototype, "textAlign", {
    get: function get() {
        return this._textAlign;
    },

    set: function set(value) {
        // if (this._textAlign != value) {
        this._textAlign = value;
        var Align = 0;
        switch (value) {
            case "start":
                Align = 0;
                break;
            case "end":
                Align = 1;
                break;
            case "left":
                Align = 2;
                break;
            case "center":
                Align = 3;
                break;
            case "right":
                Align = 4;
                break;
            default:
                Align = 0;
        }

        this._drawCommands = this._drawCommands.concat("A" + Align + ";");
        // }
    }
});

/**
 * Represents the _textBaseline value to be used with drawing commands
 *
 * @type {number}
 * @name GContext2D#_textBaseline
 */
Object.defineProperty(GContext2D.prototype, "textBaseline", {
    get: function get() {
        return this._textBaseline;
    },

    set: function set(value) {
        this._textBaseline = value;
        var baseline = 0;
        switch (value) {
            case "alphabetic":
                baseline = 0;
                break;
            case "middle":
                baseline = 1;
                break;
            case "top":
                baseline = 2;
                break;
            case "hanging":
                baseline = 3;
                break;
            case "bottom":
                baseline = 4;
                break;
            case "ideographic":
                baseline = 5;
                break;
            default:
                baseline = 0;
                break;
        }

        this._drawCommands = this._drawCommands.concat("E" + baseline + ";");
    }
});

/**
 * Represents the textAlign value to be used with drawing commands
 *
 * @type {number}
 * @name GContext2D#textAlign
 */
Object.defineProperty(GContext2D.prototype, "font", {
    get: function get() {
        return this._font;
    },
    set: function set(value) {
        // if (this._font != value) {
        this._font = value;
        this._drawCommands = this._drawCommands.concat("j" + value + ";");
        // }
    }
});

/**
 * Loads an image into the plugin to be used as a texture in the GCanvas.
 * Generally this method is never called directly. Instead, it is called
 * indirectly through GCanvasImage instances upon setting their
 * {@link GCanvasImage#src|GCanvasImage.src} property.
 *
 * @param {GCanvasImage}
 *            image The image to be loaded into the GCanvas plugin.
 * @param {function}
 *            [successCallback] A callback that is fired when the image has
 *            been successfully loaded.
 * @param {function}
 *            [errorCallback] A callback that is fired when there was an
 *            error in loading the image.
 * @example // create a new image and load // it from a relative URL path
 *          var myImage = GCanvas.createImage(); myImage.src =
 *          "images/spritesheet.jpg"; // calls loadTexture for you
 * @private
 */
GContext2D.prototype.loadTexture = function (image, successCallback, errorCallback) {
    var data = this._imageMap.get(image.src);
    if (data) {
        successCallback && successCallback(data);
        return;
    }

    var that = this;
    GBridge.preLoadImage([image.src, image.id], function (e) {
        if (e) {
            that._imageMap.put(image.src, e);
            successCallback && successCallback(e);
        } else {
            errorCallback && errorCallback(e);
        }
    });
};

/**
 * Unloads an image from the GCanvas plugin. Generally this method is
 * never called directly. Instead, it is called indirectly through
 * GCanvasImage instances upon setting their
 * {@link GCanvasImage#src|GCanvasImage.src} property to a false value
 * such as <code>null</code> or an empty string (<code>""</code>).
 *
 * @param {GCanvasImage}
 *            image The image to be unloaded from the GCanvas plugin.
 * @example // unload an image from memory myImage.src = null; // calls
 *          unloadTexture for you
 * @private
 */
GContext2D.prototype.unloadTexture = function (image) {
    this._imageMap.remove(image.src);
};

/**
 * Defines the 2D matrix transform applied to drawings within the context.
 *
 * @param {number}
 *            a The value that affects the positioning of pixels along the x
 *            axis when scaling or rotating the context.
 * @param {number}
 *            b The value that affects the positioning of pixels along the y
 *            axis when rotating or skewing the context.
 * @param {number}
 *            c The value that affects the positioning of pixels along the x
 *            axis when rotating or skewing the context.
 * @param {number}
 *            d The value that affects the positioning of pixels along the y
 *            axis when scaling or rotating the context.
 * @param {number}
 *            tx The distance by which to translate the context along the x
 *            axis.
 * @param {number}
 *            ty The distance by which to translate the context along the y
 *            axis.
 */
GContext2D.prototype.setTransform = function (a, b, c, d, tx, ty) {
    this._drawCommands = this._drawCommands.concat("t" + (a === 1 ? "1" : a.toFixed(2)) + "," + (b === 0 ? "0" : b.toFixed(2)) + "," + (c === 0 ? "0" : c.toFixed(2)) + "," + (d === 1 ? "1" : d.toFixed(2)) + "," + tx.toFixed(2) + "," + ty.toFixed(2) + ";");
};

/**
 * Defines an added 2D matrix transform applied to drawings within the
 * context.
 *
 * @param {number}
 *            a The value added to the value that affects the positioning of
 *            pixels along the x axis when scaling or rotating the context.
 * @param {number}
 *            b The value added to the value that affects the positioning of
 *            pixels along the y axis when rotating or skewing the context.
 * @param {number}
 *            c The value added to the value that affects the positioning of
 *            pixels along the x axis when rotating or skewing the context.
 * @param {number}
 *            d The value added to the value that affects the positioning of
 *            pixels along the y axis when scaling or rotating the context.
 * @param {number}
 *            tx The value added to the distance by which to translate the
 *            context along the x axis.
 * @param {number}
 *            ty The value added to the distance by which to translate the
 *            context along the y axis.
 */
GContext2D.prototype.transform = function (a, b, c, d, tx, ty) {
    this._drawCommands = this._drawCommands.concat("f" + (a === 1 ? "1" : a.toFixed(2)) + "," + (b === 0 ? "0" : b.toFixed(2)) + "," + (c === 0 ? "0" : c.toFixed(2)) + "," + (d === 1 ? "1" : d.toFixed(2)) + "," + tx + "," + ty + ";");
};

/**
 * Restores the 2D matrix transform to the identity matrix. This is
 * equivalent to calling <code>context.setTransform(1,0,0,1,0,0)</code>.
 */
GContext2D.prototype.resetTransform = function () {
    this._drawCommands = this._drawCommands.concat("m;");
};

/**
 * Scales the 2D matrix transform along the x and y axes.
 *
 * @param {number}
 *            a The value added to the value that affects the positioning of
 *            pixels along the x axis when scaling or rotating the context.
 * @param {number}
 *            d The value added to the value that affects the positioning of
 *            pixels along the y axis when scaling or rotating the context.
 */
GContext2D.prototype.scale = function (a, d) {
    this._drawCommands = this._drawCommands.concat("k" + a.toFixed(2) + "," + d.toFixed(2) + ";");
};

/**
 * Rotates the 2D matrix transform by a specified number of radians.
 *
 * @param {number}
 *            angle The value in radians to rotate the context.
 */
GContext2D.prototype.rotate = function (angle) {
    this._drawCommands = this._drawCommands.concat("r" + angle.toFixed(6) + ";");
};

/**
 * Moves the 2D matrix transform along the x and y axes.
 *
 * @param {number}
 *            tx The value added to the distance by which to translate the
 *            context along the x axis.
 * @param {number}
 *            ty The value added to the distance by which to translate the
 *            context along the y axis.
 */
GContext2D.prototype.translate = function (tx, ty) {
    this._drawCommands = this._drawCommands.concat("l" + tx.toFixed(2) + "," + ty.toFixed(2) + ";");
};

/**
 * Sets a save point for the current context transform. This allows you to
 * arbitrarily modify the transform and restore it back to its to its
 * original state at the time save() was called by using restore().
 *
 * @see GContext2D#restore
 */
GContext2D.prototype.save = function () {
    this._savedGlobalAlpha.push(this._globalAlpha);
    this._drawCommands = this._drawCommands.concat("v;");
};

/**
 * Restores the state of the context transform to the state at the point in
 * time when save() was last called.
 *
 * @see GContext2D#save
 */
GContext2D.prototype.restore = function () {
    this._drawCommands = this._drawCommands.concat("e;");
    this._globalAlpha = this._savedGlobalAlpha.pop();
};

GContext2D.prototype._concatDrawCmd = function (numArgs, imageInfo, sx, sy, sw, sh, // source (or destination if fewer args)
dx, dy, dw, dh) {
    // destination

    if (!imageInfo) {
        return;
    }

    if (numArgs === 3) {
        var x = parseFloat(sx) || 0.0;
        var y = parseFloat(sy) || 0.0;

        this._drawCommands += "d" + imageInfo.id + ",0,0," + imageInfo.width + "," + imageInfo.height + "," + x + "," + y + "," + imageInfo.width + "," + imageInfo.height + ";";
    } else if (numArgs === 5) {
        var x = parseFloat(sx) || 0.0;
        var y = parseFloat(sy) || 0.0;
        var width = parseInt(sw) || imageInfo.width;
        var height = parseInt(sh) || imageInfo.height;

        this._drawCommands += "d" + imageInfo.id + ",0,0," + imageInfo.width + "," + imageInfo.height + "," + x + "," + y + "," + width + "," + height + ";";
    } else if (numArgs === 9) {
        var sx = parseFloat(sx) || 0.0;
        var sy = parseFloat(sy) || 0.0;
        var sw = parseInt(sw) || imageInfo.width;
        var sh = parseInt(sh) || imageInfo.height;
        var dx = parseFloat(dx) || 0.0;
        var dy = parseFloat(dy) || 0.0;
        var dw = parseInt(dw) || imageInfo.width;
        var dh = parseInt(dh) || imageInfo.height;

        this._drawCommands += "d" + imageInfo.id + "," + sx + "," + sy + "," + sw + "," + sh + "," + dx + "," + dy + "," + dw + "," + dh + ";";
    }
};

GContext2D.prototype.drawImage = function (image, // image
sx, sy, sw, sh, // source (or destination if fewer args)
dx, dy, dw, dh) {
    // destination

    //GLog.d("[GContext2D.drawImage] start...");

    var that = this;
    var numArgs = arguments.length;

    //Offscreen image is GCanvas instance
    if (typeof image.componentId != 'undefined') {
        var destComponentId = image.componentId;
        var gcanvasImage = new GCanvasImage();
        gcanvasImage.width = image.width;
        gcanvasImage.height = image.height;

        if (GBridge.isIOS()) {
            gcanvasImage.src = "offscreen_" + destComponentId;
            //延迟调用
            setTimeout(function () {
                GBridge.bindImageTexture(that.componentId, [gcanvasImage.src, gcanvasImage.id], function () {});
                that._concatDrawCmd(numArgs, gcanvasImage, sx, sy, sw, sh, dx, dy, dw, dh);
            }, 200);
        } else {
            gcanvasImage.id = 0;
            var destContext = image.context;
            destContext._drawCommands = destContext._drawCommands.concat("X" + this.componentId + ";");
            GBridge.callRender(this.componentId, "Y" + destComponentId + ";");
            this._concatDrawCmd(numArgs, gcanvasImage, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        return;
    }

    var cacheKey = this.componentId + "_" + image.id;
    var imageCache = this._getImageTexture(cacheKey);

    if (imageCache) {
        this._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
        return;
    }

    if (GBridge.isIOS()) {
        GBridge.bindImageTexture(this.componentId, [image.src, image.id], function () {});
        this._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
        this._saveImageTexture(cacheKey, image);
    } else {
        if (typeof callGCanvasLinkNative !== 'undefined') {
            GBridge.bindImageTexture(that.componentId, [image.src, image.id], function (e) {
                if (!e.error) {
                    if (image.width === 0 && e.width > 0) {
                        image.width = e.width;
                    }

                    if (image.height === 0 && e.height > 0) {
                        image.height = e.height;
                    }
                    that._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
                    that._saveImageTexture(cacheKey, image);
                }
            });
        } else {
            // GLog.d('gcontext2d#drawImage()');
            GBridge.bindImageTexture(that.componentId, image.src, function (e) {
                if (!e.error) {
                    if (image.width === 0 && e.width > 0) {
                        image.width = e.width;
                    }

                    if (image.height === 0 && e.height > 0) {
                        image.height = e.height;
                    }
                    that._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
                    that._saveImageTexture(cacheKey, image);
                }
            });
        }
    }
};

GContext2D.prototype._getImageTexture = function (url) {
    if (url) {
        return this._textureMap.get(url);
    }
    return null;
};

GContext2D.prototype._removeImageTexture = function (url) {
    if (url) {
        this._textureMap.remove(url);
    }
};

GContext2D.prototype._saveImageTexture = function (url, e) {
    if (e && e.src) {
        this._textureMap.put(url, e);
    }
};

GContext2D.prototype._clearImageTextures = function () {
    this._textureMap.clear();
};

/**
 * Informs the drawing context that drawing commands have completed for the
 * current frame and the should be sent to the GCanvas plugin for drawing
 * to the screen.
 * <p>
 * This method is unique to GContext2D and does not exist within the HTML
 * 2D context, so the utility method {@link GCanvas.render} should be
 * used to make it easy to call or not call this method depending on the
 * context you are currently working with.
 * </p>
 *
 * @example // makes necessary GCanvas render call // if canvas being
 *          used is GCanvas var myCanvas = GCanvas.create(); var
 *          myContext = myCanvas.getContext("2d");
 *  // ... myContext.translate(10,10); myContext.rotate(Math.PI); //
 * ...
 *  // after all context calls are complete // for the current frame:
 * GCanvas.render(); // calls GContext2D.render()
 */

GContext2D.prototype.render = function (flag) {
    if (this.timer && typeof flag === "undefined") {
        clearInterval(this.timer);
        this.timer = null;
    }

    var commands = this._drawCommands;
    this._drawCommands = "";
    if (commands !== null && commands !== "") {
        GBridge.callRender(this.componentId, commands);
    }
};

/**
 * Implementation of GCanvas.capture.
 *
 * @private
 */
GContext2D.prototype.capture = function (x, y, w, h, fileName, successCallback, errorCallback) {
    // if (successCallback && typeof successCallback !== 'function') {
    //     throw new Error('successCallback parameter not a function');
    // }
    // if (errorCallback && typeof errorCallback !== 'function') {
    //     throw new Error('errorCallback parameter not a function');
    // }

    // GCanvas._toNative(successCallback, errorCallback, 'GCanvas',
    //         'capture', [ x, y, w, h, fileName ]);
};

GContext2D.prototype.createPattern = function (img, pattern) {
    return new FillStylePattern(img, pattern);
};

/**
 * Implementation of GCanvas.createLinearGradient(x0, y0, x1, y1).
 *
 * @private
 */
GContext2D.prototype.createLinearGradient = function (x0, y0, x1, y1) {
    return new FillStyleLinearGradient(x0, y0, x1, y1);
};

/**
 * Implementation of GCanvas.createRadialGradient(x0, y0, x1, y1).
 *
 * @private
 */
GContext2D.prototype.createRadialGradient = function (x0, y0, r0, x1, y1, r1) {
    return new FillStyleRadialGradient(x0, y0, r0, x1, y1, r1);
};

GContext2D.prototype.strokeRect = function (x, y, w, h, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("s" + x + "," + y + "," + w + "," + h + ";");
};

GContext2D.prototype.clearRect = function (x, y, w, h, successCallback, errorCallback) {
    // TODO: enable it later.
    this._drawCommands = this._drawCommands.concat("c" + x + "," + y + "," + w + "," + h + ";");
};

GContext2D.prototype.clip = function (successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("p;");
};

GContext2D.prototype.resetClip = function (successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("q;");
};

GContext2D.prototype.closePath = function (successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("o;");
};

GContext2D.prototype.moveTo = function (x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("g" + x.toFixed(2) + "," + y.toFixed(2) + ";");
};

GContext2D.prototype.lineTo = function (x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("i" + x.toFixed(2) + "," + y.toFixed(2) + ";");
};

GContext2D.prototype.quadraticCurveTo = function (cpx, cpy, x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("u" + cpx + "," + cpy + "," + x + "," + y + ";");
};

GContext2D.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("z" + cp1x.toFixed(2) + "," + cp1y.toFixed(2) + "," + cp2x.toFixed(2) + "," + cp2y.toFixed(2) + "," + x.toFixed(2) + "," + y.toFixed(2) + ";");
};

GContext2D.prototype.arcTo = function (x1, y1, x2, y2, radius, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("h" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + radius + ";");
};

/**
 * Resets the current default path.
 *
 * @param null
 */
GContext2D.prototype.beginPath = function () {
    this._drawCommands = this._drawCommands.concat("b;");
};

/**
 * Paint the specified rectangular area using the fillStyle. If either
 * height or width are zero, this method has no effect.
 *
 * @param {number}
 *            x The x location of the source clipping rectangle
 * @param {number}
 *            y The y location of the source clipping rectangle
 * @param {number}
 *            w The width of the rectangle
 * @param {number}
 *            h The height of the rectangle
 */
GContext2D.prototype.fillRect = function (x, y, w, h) {
    this._drawCommands = this._drawCommands.concat("n" + x + "," + y + "," + w + "," + h + ";");
};

/**
 * Adds a new closed subpath to the path, representing the given rectangle.
 *
 * @param {number}
 *            x The x location of the rectangle
 * @param {number}
 *            y The y location of the rectangle
 * @param {number}
 *            w The width of the rectangle
 * @param {number}
 *            h The height of the rectangle
 */
GContext2D.prototype.rect = function (x, y, w, h) {
    this._drawCommands = this._drawCommands.concat("w" + x + "," + y + "," + w + "," + h + ";");
};

/**
 * Fills the subpaths of the current default path or the given path with the
 * current fill style.
 *
 * @param {string}
 *            path The given path to fill.
 */
GContext2D.prototype.fill = function (path) {
    this._drawCommands = this._drawCommands.concat("L;");
};

/**
 * Strokes the subpaths of the current default path or the given path with
 * the current stroke style.
 *
 * @param {string}
 *            path The given path to stroke.
 */
GContext2D.prototype.stroke = function (path) {
    this._drawCommands = this._drawCommands.concat("x;");
};

/**
 * Adds points to the subpath such that the arc described by the
 * circumference of the circle described by the arguments, starting at the
 * given start angle and ending at the given end angle, going in the given
 * direction (defaulting to clockwise), is added to the path, connected to
 * the previous point by a straight line.
 *
 * @param {number}
 *            x
 * @param {number}
 *            y
 * @param {number}
 *            radius
 * @param {number}
 *            startAngle
 * @param {number}
 *            endAngle
 * @param {string}
 *            anticlockwise
 */
GContext2D.prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {

    var ianticlockwise = 0;
    if (anticlockwise) ianticlockwise = 1;

    this._drawCommands = this._drawCommands.concat("y" + x.toFixed(2) + "," + y.toFixed(2) + "," + radius.toFixed(2) + "," + startAngle + "," + endAngle + "," + ianticlockwise + ";");
};

GContext2D.prototype.fillText = function (text, x, y) {
    var tmptext = text.replace(/!/g, "!!");
    tmptext = tmptext.replace(/,/g, "!,");
    tmptext = tmptext.replace(/;/g, "!;");
    this._drawCommands = this._drawCommands.concat("T" + tmptext + "," + x + "," + y + ",0.0;");
};

GContext2D.prototype.strokeText = function (text, x, y) {
    this._drawCommands = this._drawCommands.concat("U" + text + "," + x + "," + y + ",0.0;");
};

//TODO:这个api有用需要原生的canvas对象，所以不支持
GContext2D.prototype.measureText = function (text) {
    return -1;
    //return this._apiContext.measureText(text);
};

//TODO:不支持
GContext2D.prototype.isPointInPath = function (x, y) {
    return false;
};

/////////////////////////////////////////////////////////////////
//GImageData
/////////////////////////////////////////////////////////////////
function GImageData(w, h) {
    GLog.d("GImageData wh=" + w + "," + h);
    this.width = w;
    this.height = h;
    this.data = new Uint8Array(w * h * 4);
}

GContext2D.prototype.createImageData = function (w, h) {
    GLog.d("GContext2D::createImageData wh=" + w + "," + h);
    return new GImageData(w, h);
};

GContext2D.prototype._putImageData = function (data, dx, dy, sw, sh, dw, dh) {
    this._drawCommands = this._drawCommands.concat("P" + dx + "," + dy + "," + sw + "," + sh + "," + dw + "," + dh + "," + GCodec.GarrToBase64(data) + ";");
};
GContext2D.prototype.putImageData = function (imgData, x, y, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
    GLog.d("GContext2D::putImageData [" + arguments.length + "] " + "dest_xy=(" + x + "," + y + ") " + "dirty_xy=(" + dirtyX + "," + dirtyY + ") " + "dirty_wh=(" + dirtyWidth + "," + dirtyHeight + ") ");

    if (arguments.length <= 3) {
        this._putImageData(imgData.data, x, y, imgData.width, imgData.height, imgData.width, imgData.height);
    } else {
        var destData = new Uint8Array(dirtyWidth * dirtyHeight * 4);
        var imgPos;
        var destPos = 0;
        for (var i = 0; i < dirtyHeight; i++) {
            imgPos = (imgData.width * (dirtyY + i) + dirtyX) * 4;
            for (var j = 0; j < dirtyWidth; ++j) {
                destData[destPos++] = imgData.data[imgPos++];
                destData[destPos++] = imgData.data[imgPos++];
                destData[destPos++] = imgData.data[imgPos++];
                destData[destPos++] = imgData.data[imgPos++];
            }
        }

        this._putImageData(destData, x + dirtyX, y + dirtyY, dirtyWidth, dirtyHeight, dirtyWidth, dirtyHeight);
    }
};

GContext2D.prototype.getImageData = function (x, y, w, h) {
    this.render();
    return GBridge.callGetImageData(this.componentId, x, y, w, h);
};

GContext2D.prototype.getImageDataAsyn = function (x, y, w, h) {
    return '';
    // GLog.d("GContext2D::getImageDataAsyn xy=(" + x + "," + y + "), wh=(" + w + ","+ h +")");
    // GCanvas._instance.getContext().render("auto");
    // var len = w*h;
    // var imgData = new GImageData(w,h);
    // imgData._x = x;
    // imgData._y = y;
    // imgData._dataGet = 0;
    // imgData._split = 0;
    // var me = this;
    // me._getImageData.push(imgData);

    // var h2 = Math.floor(262144/w);// 2^18
    // if (h2 < h)
    //     imgData._split = 1;

    // function getImageDataAsynSuccess(getData) {
    //     var destData = me._getImageData[0];
    //     GLog.d("GContext2D::getImageDataAsyn: dataGet=" + destData._dataGet);
    //     if (0 == destData._split){// one part
    //         destData.data = Gbase64ToArr(getData);
    //         destData._dataGet += destData.data.length;
    //     }else{// multi parts
    //         var taBytes  = Gbase64ToArr(getData);
    //         destData._dataGet += taBytes.length;
    //         for (var i=0;i<taBytes.length;i++){
    //             destData.data[destData._dataGet+i] = taBytes[i];
    //         }
    //     }

    //     if (destData._dataGet >= (destData._x*destData._y)){
    //         if (typeof destData.onload === 'function') {
    //             GLog.d("GContext2D::getImageDataAsyn: callback exec.");
    //             destData.onload();
    //         }
    //         me._getImageData.splice(0,1);//delete first data
    //     }
    // }

    // for(var i=0; i<h; i+= h2){
    //     GCanvas._toNative(getImageDataAsynSuccess, getImageDataAsynSuccess, 'GCanvas',
    //             'getImageData', [ x, y+i, w, (i+h2>h)?(h-i):h2 ]);
    // }


    // return imgData;
};

module.exports = GContext2D;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var context;
function getProto(Weex) {
  return {
    create: function create() {
      this.node = document.createElement('canvas');
      return this.node;
    },
    getContext: function getContext(type) {
      context = this.node.getContext(type || '2d');
      return context;
    },

    getContextAsyn: function getContextAsyn(type, callback) {
      context = this.node.getContext(type || '2d');
      callback(context);
    },

    drawImage: function drawImage(url) {
      var img = new Image();
      img.src = url;
      arguments[0] = img;
      return context.drawImage.apply(context, arguments);
    }

  };
}

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function GCanvas(data) {
    Component.call(this, data);
  }

  GCanvas.prototype = Object.create(Component.prototype);
  extend(GCanvas.prototype, getProto(Weex));

  Weex.registerComponent('gcanvas', GCanvas);
}

module.exports = {
  init: init
};

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(96)
)

/* script */
__vue_exports__ = __webpack_require__(97)

/* template */
var __vue_template__ = __webpack_require__(98)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/SignIn/ReceiveRecordController.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d6eabbc8"
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
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  "circleStyle": {
    "width": "50",
    "height": "50",
    "backgroundColor": "#00B4FF"
  },
  "circleTextStyle": {
    "width": "34",
    "height": "34",
    "marginLeft": "30",
    "marginTop": "27",
    "borderColor": "#E52544",
    "borderRadius": "17",
    "borderWidth": "5",
    "position": "relative"
  },
  "textStyle": {
    "marginLeft": "10",
    "lineHeight": "88"
  },
  "triangle_border_up": {
    "width": "50",
    "height": "50",
    "borderTopWidth": "30",
    "borderLeftWidth": "30",
    "borderRightWidth": "30",
    "borderBottomWidth": "30",
    "borderStyle": "solid",
    "borderTopColor": "rgba(0,0,0,0)",
    "borderRightColor": "rgba(0,0,0,0)",
    "borderBottomColor": "#0088fb",
    "marginTop": "40",
    "marginRight": "40",
    "marginBottom": "40",
    "marginLeft": "40",
    "position": "relative"
  },
  "iconStyles": {
    "width": "80",
    "float": "right"
  },
  "more_unfoldStyle": {
    "width": "50",
    "height": "50",
    "marginTop": "20",
    "marginLeft": "350"
  },
  "cellStyle": {
    "borderBottomWidth": "2",
    "borderBottomColor": "#f5f5f5"
  },
  "listRowStyle": {
    "flexDirection": "row",
    "height": "80",
    "backgroundColor": "#F3F3F3",
    "borderBottomWidth": "1",
    "borderBottomColor": "rgb(187,187,187)"
  },
  "itemContentStyle": {
    "marginLeft": "30",
    "width": "650",
    "height": "40",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "receiveDiv": {
    "borderBottomWidth": "1",
    "borderBottomColor": "rgb(187,187,187)"
  },
  "lineDiv": {
    "height": "1",
    "backgroundColor": "#666666"
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxcLoading = __webpack_require__(8);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _wxcIcon = __webpack_require__(25);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

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
//
//
//
//
//

var gCanvas = __webpack_require__(31);
// const animation = weex.requireModule('animation')
var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
module.exports = {
  props: {},
  components: { WxcIcon: _wxcIcon2.default, WxcLoading: _wxcLoading2.default },
  data: function data() {
    return {
      dateData: [],
      token: '',
      SITEID: '',
      icon: '',
      receiveDataList: {},
      isShow: false
    };
  },
  created: function created() {
    var self = this;
    // 获取token
    self.getTokenMethod();
    var date = new Date();
    var month = date.getMonth();
    self.icon = _Global2.default.nextLevelImgPath + 'banners.png';
    self.dateData = [{ date: '本月', show: false, startTime: self.getTimeStamp(month), endTime: self.getTimeStamp(month + 1), iconName: 'more_unfold' }, { date: self.getMonth(month) + '月', show: false, startTime: self.getTimeStamp(month - 1), endTime: self.getTimeStamp(month), iconName: 'more_unfold' }, { date: self.getMonth(month - 1) + '月', show: false, startTime: self.getTimeStamp(month - 2), endTime: self.getTimeStamp(month - 1), iconName: 'more_unfold' }];
  },
  ready: function ready() {},
  mounted: function mounted() {},
  updated: function updated() {
    this.circleMethod();
  },

  methods: {
    // 获取token
    getTokenMethod: function getTokenMethod() {
      var self = this;
      // 获取token
      var eventModule = weex.requireModule(_Global2.default.eventModule);
      eventModule.getToken('token', function (res) {
        self.token = res.token;
        self.SITEID = res.SITEID;
      });
    },

    // 获取本年指定月1号的时间戳
    getTimeStamp: function getTimeStamp(month) {
      var date = new Date();
      var year = date.getFullYear();
      var getMonth = new Date(year, month, 1);
      // 获取的是毫秒
      return getMonth.getTime() / 1000;
    },
    cellClick: function cellClick(item, i) {
      var self = this;
      for (var _i = 0; _i < self.dateData.length; _i++) {
        self.dateData[_i].iconName = 'more_unfold';
      }
      if (self.dateData[i].show === true) {
        self.dateData[i].show = false;
      } else {
        self.isShow = true;
        stream.fetch({
          method: 'GET',
          url: _Global2.default.userSignHas + '?startTime=' + item.startTime + '&endTime=' + item.endTime,
          headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
          type: 'json'
        }, function (ret) {
          if (ret.ok) {
            self.isShow = false;
            var data = ret.data;
            if (data.code === 0) {
              self.receiveDataList = data.data.list;
              if (self.receiveDataList.length > 0) {
                if (self.dateData[i].show === false) {
                  self.dateData[i].show = true;
                  self.dateData[i].iconName = 'less';
                } else {
                  modal.toast({ message: '无领取记录' });
                }
                // // 旋转箭头
                // let iconref = self.$refs.icon_ref
                // if (iconref) {
                //   animation.transition(iconref, {
                //     styles: {
                //       transform: 'rotate(' + 180 + 'deg)',
                //       transformOrigin: 'center center'
                //     },
                //     duration: 3000,
                //     timingFunction: 'ease',
                //     delay: 0
                //   }, function (ret) {
                //   })
                // }
              }
            } else if (data.code === 109) {
              modal.toast({ message: '请先登录账号' });
            } else {
              modal.toast({ message: data.message });
            }
          } else {
            modal.toast({ message: ret.status });
          }
        }, function (ret) {});
      }
    },
    circleMethod: function circleMethod() {
      var self = this;
      // 绘制圆
      var ref = self.$refs.circle_canvas;
      var gcanvas = gCanvas.start(ref);
      var ctx = gcanvas.getContext('2d');
      var w = 30;
      var y = 40;
      var r = 5; // 半径
      ctx.arc(w, y, r, 0, Math.PI * 2, true);
      ctx.strokeStyle = '#E52544';
      ctx.lineWidth = 5;
      ctx.stroke();
    },

    // 如果是0，则为12月
    getMonth: function getMonth(e) {
      if (e <= 0) {
        e += 12;
      }
      // 转中文数字
      var getDate = this.swatchChineseNum(e);
      return getDate;
    },

    // 阿拉伯数字转中文数字
    swatchChineseNum: function swatchChineseNum(e) {
      var arr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
      var num = arr[e - 1];
      return num;
    }
  },
  filters: {
    statusMsg: function statusMsg(status) {
      var msg = '';
      if (status === 0) {
        msg = '审核中';
      } else if (status === 1) {
        msg = '已领取';
      } else {
        // 2
        msg = '已拒绝';
      }
      return msg;
    }
  }
};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "#EEEEEE"
    }
  }, [_vm._l((_vm.dateData), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["cellStyle"],
      on: {
        "click": function($event) {
          _vm.cellClick(item, i)
        }
      }
    }, [_c('div', {
      staticClass: ["listRowStyle"]
    }, [_c('div', {
      staticStyle: {
        width: "300px",
        flexDirection: "row"
      }
    }, [_c('text', {
      staticClass: ["circleTextStyle"]
    }), _c('text', {
      staticClass: ["textStyle"]
    }, [_vm._v(_vm._s(item.date))])]), _c('wxc-icon', {
      ref: 'icon_ref' + i,
      refInFor: true,
      staticClass: ["more_unfoldStyle"],
      attrs: {
        "name": item.iconName
      }
    })], 1), (item.show === true) ? _c('div', {
      staticStyle: {
        backgroundColor: "white"
      }
    }, _vm._l((_vm.receiveDataList), function(item, i) {
      return _c('div', {
        key: i,
        staticClass: ["receiveDiv"]
      }, [_c('div', {
        staticClass: ["itemContentStyle"]
      }, [_c('text', [_vm._v(_vm._s(item.type))]), _c('text', {
        staticStyle: {
          color: "#C91E02"
        }
      }, [_vm._v(_vm._s(item.money))])]), _c('div', {
        staticClass: ["itemContentStyle"]
      }, [_c('text', [_vm._v(_vm._s(item.created_at))]), _c('text', [_vm._v(_vm._s(_vm._f("statusMsg")(item.status)))])])])
    })) : _vm._e()])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "type": "default",
      "needMask": "true",
      "interval": _vm.intervalSign
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);