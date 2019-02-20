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
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ({

/***/ 104:
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
module.exports.el = 'true'
new Vue(module.exports)


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

/***/ })

/******/ });