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
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ({

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(137)
)

/* script */
__vue_exports__ = __webpack_require__(138)

/* template */
var __vue_template__ = __webpack_require__(139)
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
__vue_options__.__file = "/Users/miu_wen/Desktop/weex-project/weex-cai/src/lottery.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-70f17c00"
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

/***/ 137:
/***/ (function(module, exports) {

module.exports = {
  "lottery_wraper": {
    "width": "200",
    "height": "200"
  },
  "lottery_Content": {
    "position": "absolute",
    "top": 50,
    "left": 50,
    "transform": "translate(-50%,-50%)",
    "WebkitTransform": "translate(-50%,-50%)"
  },
  "lottery_pointer": {
    "position": "absolute",
    "top": 48,
    "left": 50,
    "transform": "translate(-50%,-50%)",
    "WebkitTransform": "translate(-50%,-50%)"
  },
  "bgImageStyle": {
    "width": "300",
    "height": "300"
  },
  "bgContentImageStyle": {
    "width": "260",
    "height": "260"
  },
  "bgPointerImageStyle": {
    "width": "100",
    "height": "100"
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      angle: this.lotteryAngle, // 初始度数
      acceleration: 0.5, // 加速的加速度0.5
      r_acceleration: 0.1, // 减速的加速度0.1
      firstTimes: 48, // 48次
      prizeNum: this.lotteryPrizenum,
      lottery_bg: this.lotteryBg, // 外圈背景
      content_bg: this.contentBg, // 内容背景
      pointer_bg: this.pointerBg, // 指针背景
      lottery_width: this.lotteryWidth
    };
  },

  props: {
    lotteryAngle: {
      type: Number,
      default: 0
    },
    lotteryStart: {
      type: Number,
      default: 0
    },
    lotteryPrizenum: {
      type: Number,
      required: true
    },
    lotteryPrizeno: {
      type: Number,
      required: true
    },
    lotteryBg: {
      type: String
    },
    contentBg: {
      type: String,
      required: true
    },
    pointerBg: {
      type: String,
      required: true
    },
    lotteryWidth: {
      type: Array,
      default: function _default() {
        return ['85%', '35%'];
      }
    }
  },
  watch: {
    start: function start() {
      if (this.start >= 1) {
        this.startRotate();
      }
    }
  },
  computed: {
    difference: function difference() {
      return this.prizeNo / this.prizeNum * 360 - 360 / this.prizeNum / 2;
    },
    prizeNo: function prizeNo() {
      return this.lotteryPrizeno;
    },
    start: function start() {
      return this.lotteryStart;
    }
  },
  methods: {
    clickLottery: function clickLottery() {
      this.$emit('lotteryClick');
      this.startRotate();
    },
    startRotate: function startRotate() {
      var self = this;
      var difference = this.difference;
      var speed = 0;
      var acceleration = self.acceleration; // 加速的加速度
      var racceleration = self.r_acceleration; // 减速的加速度
      var firstTimes = self.firstTimes; //  执行48次 加速到highSpeed
      var highSpeed = firstTimes * acceleration; // 最高速度
      var oneAngel = self.angle + firstTimes * (firstTimes - 1) / 2 * acceleration + highSpeed; // 第一阶段的旋转度数
      var secondTimes = 10; // 速度为highSpeed 继续执行10次
      var twoAngel = oneAngel + secondTimes * firstTimes * acceleration; // 第二阶段的旋转度数
      var three = highSpeed / racceleration; // 执行three次 速度从highSpeed减速到0
      var add = 360 - (twoAngel + three * (three - 1) / 2 * racceleration) % 360 + difference; // 使最后刚好转到起点位置
      var twoAngelEnd = twoAngel + add; // 第三阶段开始
      var threeAngel = twoAngelEnd + three * (three - 1) / 2 * racceleration; // 最后的旋转度数
      function cicle() {
        if (self.angle < oneAngel) {
          speed += acceleration;
          self.angle += speed;
        } else if (self.angle >= oneAngel && self.angle < twoAngel) {
          self.angle += speed;
        } else if (self.angle.toFixed(2) === twoAngel.toFixed(2)) {
          self.angle += add;
        } else if (self.angle > twoAngel && self.angle <= threeAngel) {
          speed -= racceleration;
          if (speed <= 0) {
            speed = 0;
            self.angle = threeAngel % 360;
            self.flag = true;
            self.$emit('lotteryDone', {
              prizeNo: self.prizeNo,
              prizeNum: self.prizeNum
            });
            return false;
          }
          self.angle += speed;
        }
        requestAnimationFrame(cicle);
      }
      cicle();
    }
  }
};

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["lottery_wraper"]
  }, [_c('div', {
    staticClass: ["lottery_bg"]
  }, [_c('image', {
    staticClass: ["bgImageStyle"],
    attrs: {
      "src": _vm.lottery_bg
    }
  })]), _c('div', {
    staticClass: ["lottery_Content"],
    style: {
      width: _vm.lottery_width[0]
    }
  }, [(_vm.angle > 0) ? _c('image', {
    staticClass: ["bgContentImageStyle"],
    style: {
      transform: 'rotate3d(0,0,1,' + _vm.angle + 'deg)'
    },
    attrs: {
      "id": "turntable",
      "src": _vm.content_bg
    }
  }) : _c('image', {
    staticClass: ["bgContentImageStyle"],
    attrs: {
      "id": "lottery_turntable",
      "src": _vm.content_bg
    }
  })]), _c('div', {
    staticClass: ["lottery_pointer"],
    style: {
      width: _vm.lottery_width[1]
    },
    on: {
      "click": _vm.clickLottery
    }
  }, [_c('image', {
    staticClass: ["bgPointerImageStyle"],
    attrs: {
      "src": _vm.pointer_bg
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });