<!--suppress ALL -->
<template>

    <div class="mainStyle">
        <!--dataRole = "navbar" 属性会调用weex的navigator-->
        <!--<div dataRole = "navbar" leftButton="" :style="{  backgroundColor: '#f52d2d' }">-->
        <!--&lt;!&ndash;文字要写在 {{返回}}里，否则无法设置属性 value 无法设置属性&ndash;&gt;-->
        <!--<text naviItemPosition="ledsfft"-->
        <!--:style="{ color: '#00B4FF' }"-->
        <!--class="center-text" value = "返回" @click="leftBarItemClick">{{返回}}-->
        <!--</text>-->
        <!--<image-->
        <!--v-if="leftItemSrc"-->
        <!--naviItemPosition="left"-->
        <!--:src="leftItemSrc"-->
        <!--class="left-image"-->
        <!--v-on:click="leftBarItemClick"></image>-->

        <!--<text-->
        <!--naviItemPosition="center"-->
        <!--:style="{ color: '#ffffff' }"-->
        <!--class="center-text" :value="listData.data.title">{{listData.data.title}}</text>-->
        <!--</div>-->
        <!--<div class="mainStyleiPhoneX" v-if="isiPhoneX"></div>-->
        <!--<div class="mainStyleiPhoneX" v-else-if="isiPhoneXSMax"></div>-->
        <!--<div class="mainStyleiPhoneX" v-else-if="isiPhoneXR"></div>-->
        <!--<div class="mainStyleiPhone" v-else></div>-->
        <!--&lt;!&ndash;weex-ui 组件&ndash;&gt;-->

        <wxc-minibar background-color="#f52d2d" text-color="#FFFFFF" :left-button="leftButton" @wxcMinibarLeftButtonClicked="leftBarItemClick" v-if="isAndroid">
            <!--自定义-->
            <text  class="titleStyle" slot="middle">{{listData.data.title}}</text>
        </wxc-minibar>

        <!--<div dataRole = "navbar" :style="{backgroundColor: '#f52d2d'}" class="mainStyleiPhoneX" v-if="isiPhoneX"></div>-->

        <scroller>
            <div class="mainStyle">
                <div style="width: 750px; height: 220px">
                    <image class="detailsImageView" :src=getimg placeholder=""></image>
                </div>
                <div>
                    <div class="nextTilteDivStyle">
                        <text class="nextTitleStyle">{{listData.data.title}}</text>
                    </div>

                    <detailsstatus class="detailsStyle" :item="listData.data.ext"></detailsstatus>
                    <div class="btnStyleDiv">
                        <wxc-button :text="text" :disabled="disabled" :btn-style="btnStyle" :text-style="textStyle" @wxcButtonClicked="receiveBtnClick" v-if="listData.data.is_ext != 0"></wxc-button>
                    </div>
                    <!--时间-->
                    <div class="timeDivStyle"  v-if="listData.data.id==8">
                        <text class="nextTitleStyle">活动时间</text>
                        <!--开始时间-->
                        <detailsstatus class="detailsStyle" :item="listData.data.ext_two"></detailsstatus>
                    </div>

                    <!--<web style="width: 750px;height: 800px" :src="listData.data.content"></web>-->
                    <customwebview ref= 'customwebview' :content="webContent" :barStyle="barStyle" :data='{dataHtml}' style="width: 750px;height:1600px;background-color: #ffffff">
                    </customwebview>
                    <!--<text>{{listData + '=======' + data1}}</text>-->
                </div>
            </div>
            <div style="height: 200px"></div>
        </scroller>
    </div>

</template>
<script>
// https://www.jianshu.com/p/3a15706bd430
// https://www.jianshu.com/p/e9bbd8a2244a   自定义导航栏
import { WxcButton, WxcMinibar } from 'weex-ui'
import global from './Global'
import detailsstatus from './detailsstatus.vue'
// 获取设备信息
const device = weex.config.env
const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')
const modal = weex.requireModule('modal')
const url = weex.config.bundleUrl
module.exports = {
  components: {detailsstatus, WxcButton, WxcMinibar},
  data: () => ({
    isiPhoneX: (device.platform === 'iOS') && (device.deviceWidth === 1125) && (device.deviceHeight === 2436),
    isiPhoneXSMax: (device.platform === 'iOS') && (device.deviceWidth === 1242) && (device.deviceHeight === 2688),
    isiPhoneXR: (device.platform === 'iOS') && (device.deviceWidth === 828) && (device.deviceHeight === 1792),
    isiOS: (device.platform === 'iOS'),
    isAndroid: (device.platform === 'android'),
    token: '',
    SITEID: '',
    leftButton: global.imgPath + 'back.png',
    getimg: global.imgStorageUrl,
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
    pushUrl: global.domainName + 'dist/LotteryWheelController.js',
    webContent: {},
    barStyle: {} // webview点击转场数据
}),
  computed: {
    btnStyle () {
      const { width, height, backgroundColor, borderColor, borderRadius} = this
      const customStyle = {}

      if (width) {
        customStyle.width = width
      }
      if (height) {
        customStyle.height = height
        customStyle.lineHeight = height
      }
      if (borderColor) {
        customStyle.borderColor = borderColor
        customStyle.borderWidth = '1px'
        customStyle.borderStyle = 'solid'
      }
      if (borderRadius) {
        customStyle.borderRadius = borderRadius
      }

      if (backgroundColor) {
        if (this.listData.data.canReceive === 0) { // 不可领取
          customStyle.backgroundColor = backgroundColor
          this.disabled = true
          this.text = '不可领取'
        } else if (this.listData.data.canReceive === 1) { // 可领取
          customStyle.backgroundColor = backgroundColor
          this.disabled = false
          this.text = '可领取'
        } else if (this.listData.data.canReceive === 2) { // 已领取
          customStyle.backgroundColor = backgroundColor
          this.disabled = true
          this.text = '已领取'
        } else { // 已结束
          customStyle.backgroundColor = "#f6f6f6"
          this.text = '已结束'
          this.color = '#000'
        }

      }
      return customStyle
    },
    textStyle () {
      const { fontSize, color } = this
      const customStyle = {}
      if (fontSize) {
        customStyle.fontSize = fontSize
      }
      if (color) {
        customStyle.color = color
      }
      return {
        fontSize, color
      }
    }
  },
  watched: {

  },
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
    textCilck () {
      let getUrl = global.domainName + 'dist/LotteryWheelController.js'
      /// 自定义Module 调用原生navigation进行转场
      // weex.requireModule('WXEventModule').push(getUrl).dic(JSON.stringify({title: '详情'}))
      // weex.requireModule(global.eventModule).pushVC({style: {center: {img: '', title: '返回', color: '#ffffff'}, left: {img: '', title: '返回',color: '#41B883'}, bg: {color: '#f52d2d'}}, url: getUrl})

      // 使用weex封装好的navigator跳转
      navigator.push({
        // http://192.168.1.11:8083/dist/ActivityDetailsController.js
        url: getUrl,
        // url: '../src/ActivityDetailsController',
        animated: 'true' // 这里animated需是一个字符串，否则导致崩溃
      }, event => {
        // navigator.setParameter('==')
        // navigator.hide()
        // modal.toast({ message: 'callback: ' + event })
      })
      // modal.toast({message:'sadfa'})
    },
    //时间戳转时间
    timestampToTime (cjsj) {
      var date = new Date(cjsj) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      var h = date.getHours() + ':'
      var m = date.getMinutes() + ':'
      var s = date.getSeconds()
      return Y + M + D + h + m + s
    },
    onloading (event) {
      this.loadinging = true
      setTimeout (() => {
        this.loadinging = false
      }, 1000)
    },
    leftBarItemClick (e) {
      navigator.pop ({
        animated:'true'
      },event => {
        // 回调函数
      })
    },
    // 领取按钮点击方法
    receiveBtnClick (e) {
      const { type, disabled } = e
      if (disabled === false) {
        // 领取
        this.receivePost()
      }
    },
    // 领取
    receivePost () {
      let body = 'id=' + this.listData.data.id
      var self = this
      stream.fetch ({
        method: 'POST',
        url: global.postClickReceiveUrl,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json',
        body: body
      }, function (ret) {
        if (ret.ok) {
          self.postData = ret.data
          modal.toast({ message: ret.data.message })
          self.disabled = true
          self.text = '已领取'
          if (ret.data.code === 0) {
            // self.disabled = true
          } else if (ret.code === 109) {
            modal.toast({ message: ret.data.message })
          } else {
            // modal.toast({ message: ret.data.message })
            // self.disabled = false
          }

          // this.postData = ret.data;
          // modal.toast({message:'====='+ JSON.stringify(ret.data)})
        } else {
          self.postData = 'request failed'
          modal.toast({ message:'===2========' })
          // modal.toast({message:'===2=='+ JSON.stringify(ret.data)})
        }
      },function (ret) {
        // modal.toast({message:'===1==='+ ret.statusText})
        // this.postData = 'bytes received:' + ret.length;

      })
    },
// 解析url后面的参数
    getdataUrl: function (key,url) {
      key = key.replace(/[\[\]]/g, "\\$&")
      var regex = new RegExp("[?&]" + key + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, " "))
    }
  },
  // 模版渲染成html之前调用
  created() {
    // this.$el('customwebview').focus();
    // this.$refs.customwebview.focus();
    // this.$refs.customwebview.focus();
    // stream请求里面需用这里声明的self获取数据
    var self = this
    //图片
    self.leftButton = global.imgPath + 'back.png'

    // 原生调用
    const modal = weex.requireModule('modal')
    let eventModule = weex.requireModule(global.eventModule)
    eventModule.getToken('token',function (res) {
      self.token = res.token
      self.SITEID = res.SITEID
    })
    // 监听客户端事件
    var globalEvent = weex.requireModule('globalEvent')
    globalEvent.addEventListener("geolocation", function (e) {
      if (e && e.className === 'links') {
        if (self.token) { // 登录转场
          let getUrl = self.pushUrl
          /// 自定义Module 调用原生navigation进行转场
          // weex.requireModule('WXEventModule').push(getUrl).dic(JSON.stringify({title: '详情'}))
          // weex.requireModule(global.eventModule).pushVC({style: {center: {img: '', title: '返回', color: '#ffffff'}, left: {img: '', title: '返回',color: '#41B883'}, bg: {color: '#f52d2d'}}, url: getUrl})

          // 使用weex封装好的navigator跳转
          navigator.push({
            // http://192.168.1.11:8083/dist/ActivityDetailsController.js
            url: getUrl,
            // url: '../src/ActivityDetailsController',
            animated: 'true' // 这里animated需是一个字符串，否则导致崩溃
          }, event => {
            // navigator.setParameter('==')
            // navigator.hide()
            // modal.toast({ message: 'callback: ' + event })
          })
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
    })

    storage.getItem('mData', event => {
      // me.getResult = JSON.parse(event.data)
      // 转对象
      let r = JSON.parse(event.data)
      this.getimg = this.getimg + r.cover
      var params = { 'id': r.id }
      stream.fetch({
        method: 'GET',
        url: global.activityListUrl + '/' + r.id,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        if (ret.ok) {
          let code = ret.data.code
          if (code === 0) {
            self.listData = ret.data
            // weex.requireModule(global.eventModule).showParams(self.listData.data.content);
            self.webContent = { htmldata: self.listData.data.content,
              customCss: { height:'800', cssStr: "document.getElementsByTagName('table')[0].style.width = '100%'" },
              pushData: { className: 'links', messageName: 'activityClass' }}
            self.dataHtml = self.listData
          } else if (code === 109) {

          } else {
            self.listData = 'request failed'
          }
        }
      }, function (response) {
        self.listData = 'bytes received:' + response.statusText
      })
    })

    // this.$el('customwebview').focus();
    // this.$refs.customwebview.focus();
    this.$refs.customwebview.focus()
  },
  // 模版渲染成html之后调用
  mounted () {
    var self = this
    this.dataHtml = self.listData.data.content
  },
  destroyed () {
    // 移除监听客户端事件
    var globalEvent = weex.requireModule('globalEvent')
    globalEvent.removeEventListener('geolocation')
  //  移除存储传递的数据
    storage.removeItem('mData')
  }
}
</script>

<style scoped>
    .mainStyleiPhoneX {
        width: 750px;
        height: 70px;
        background-color: #f52d2d;
    }
    .mainStyleiPhone {
        width: 750px;
        height: 30px;
        background-color: #f52d2d;
    }
    .mainStyle {
        width: 750px;
        background-color: white;
    }

    .detailsImageView {
        width: 750px;
        height: 220px;
    }
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 750px;
    }
    /*导航条高度，预留90px，X加上86即是（88*2=176），iOS其他设备增加38即是128/*/
    .iPhoneXDiv {
        height: 88px;
    }

    .iOSDiv {
        height: 64px;
    }

    .android {
        height: 0px;
    }

    .navbar {
        width: 750px;
        top: 0px;
        left: 0px;
        background-color: #FF9200;
    }
    .btnStyleDiv {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px
    }
    .titleStyle {
        color: white;
        font-size: 40px;
    }
    .nextTilteDivStyle {
        height: 70px;
        width: fit-content;
        /*background-color: #d2dbe0;*/
        /*justify-content: left;*/
        /*align-items: left;*/
    }
    .nextTitleStyle {
        /*width: 160px;*/
        /*width: content-box;*/
        margin-left: 10px;
        margin-top: 10px;
        font-size: 35px;
        font-weight: 700;
        /*justify-content: center;*/
        /*align-items: center;*/
        color: #000;
        /*background-color: #d2dbe0;*/

    }
    .timeRowStyle {
        margin-left: 10px;
        flex-direction: row;
        justify-content: left;
        align-items: left;
    }
    .timeTileStyle {
        color: #333333;
        font-size: 30px;
    }
    .timeStyle {
        color: rgb(237,4,4);
        font-size: 30px;
    }
    .timeDivStyle {
        margin-top: 30px;
    }
    .detailsStyle {
        margin-top: 10px;
    }

</style>
