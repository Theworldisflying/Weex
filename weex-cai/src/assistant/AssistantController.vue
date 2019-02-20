<template xmlns:fontSize="">
    <div>
        <div class="mainStyleiPhoneX" v-if="isiPhoneX"></div>
        <div class="mainStyleiPhoneX" v-else-if="isiPhoneXSMax"></div>
        <div class="mainStyleiPhoneX" v-else-if="isiPhoneXR"></div>
        <div class="mainStyleiPhone" v-else></div>
        <wxc-minibar background-color="#f52d2d" text-color="#FFFFFF" :left-button="leftButton"
                     @wxcMinibarLeftButtonClicked="leftBarItemClick"
                     @wxcMinibarRightButtonClicked="rightBarItemClick">
        <!--自定义-->
            <image slot="left" style="width: 40px;height: 40px" :src="leftButton"></image>
            <text  class="titleStyle" slot="middle">长龙助手</text>
            <div slot="right" class="rightItemStyle">
                <text class="rightItemTextStyle">?</text>
            </div>
            <!--<image slot="right" style="width: 40px;height: 40px" :src="leftButton"></image>-->
            <!--<div slot="right">-->
                <!--<wxc-icon slot="right" name="help" class="helpIconStyle"></wxc-icon>-->
            <!--</div>-->
        </wxc-minibar>
        <div class="headerDiv">
            <text :class="[betDisable?'headerTitleBetStyle':'headerTitleBetDisableStyle']" @click="betClick">我要投注</text>
            <text :class="[betDisable?'headerTitleBetDisableStyle':'headerTitleBetStyle']" @click="recentlyClick">最近投注</text>
            <div style="flex-direction: row;justify-content: flex-end;align-items: flex-end;width: 350px">
                <div @click="eyeClick" style="flex-direction: row">
                    <text :class="[balanceClick?'headerTitleEyeStyle':'headerTitleEyeDisableStyle']">{{balance}}</text>
                    <image class="eyeImgStyle" :src="eyeImg" v-if="!balanceClick"></image>
                    <wxc-part-loading :show="partLodingShow" :width="partW" :height="partH" style="margin-top: -10px"></wxc-part-loading>
                </div>
            </div>
        </div>
        <div :class="[betDisable?'headerLineStyle':'headerLineDisableStyle']"></div>
        <!--使用scroller外层嵌套使自定义组件拥有滚动属性：（原因如果不实用scroller嵌套，自定义组件内部使用scroller无法滚动）-->
        <scroller v-if="betDisable">
            <!--<router-view ></router-view>-->
            <!--<router-view></router-view>-->
            <assistantbet></assistantbet>
        </scroller>
        <recently v-if="!betDisable"></recently>

        <!--<scroller v-if="!betDisable">-->
            <!--<recently v-if="!betDisable"></recently>-->
        <!--</scroller>-->
    </div>
</template>

<script>
import { WxcButton, WxcMinibar, WxcPartLoading, WxcIcon } from 'weex-ui'
import assGlobal from '../Global'
import assistantbet from './assistantbet.vue'
import recently from './recently.vue'
// const navigator = weex.requireModule('navigator')
const stream = weex.requireModule('stream')
// 获取设备信息
const device = weex.config.env
// const modal = weex.requireModule('modal')
module.exports = {
  components: { WxcButton, WxcMinibar, WxcPartLoading, WxcIcon, assistantbet, recently },
  data: () => ({
    isiPhoneX: (device.platform === 'iOS') && (device.deviceWidth === 1125) && (device.deviceHeight === 2436),
    isiPhoneXSMax: (device.platform === 'iOS') && (device.deviceWidth === 1242) && (device.deviceHeight === 2688),
    isiPhoneXR: (device.platform === 'iOS') && (device.deviceWidth === 828) && (device.deviceHeight === 1792),
    isiOS: (device.platform === 'iOS'),
    isAndroid: (device.platform === 'android'),
    leftButton: assGlobal.imgPath + 'back.png',
    betDisable: true,
    balanceClick: false,
    balance: '余额',
    eyeImg: '',
    getTimeOut: null,
    token: '',
    SITEID: '',
    partLodingShow: false,
    partH: 36,
    partW: 36
  }),
  created () {
    let self = this
    self.eyeImg = assGlobal.nextLevelImgPath + 'eye.png'
    self.leftButton = assGlobal.nextLevelImgPath + 'back.png'
    // 获取token
    let eventModule = weex.requireModule(assGlobal.eventModule)
    eventModule.getToken('token', function (res) {
      self.token = res.token
      self.SITEID = res.SITEID
    })
    // 监听客户端事件
    let globalEvent = weex.requireModule('globalEvent')
    globalEvent.addEventListener('geolocation', function (e) {

    })
  },
  methods: {
    // 我要投注
    betClick () {
      this.betDisable = true
    },
    recentlyClick () {
      this.betDisable = false
    },
    leftBarItemClick () {
      weex.requireModule(assGlobal.eventModule).dissMissVC()
    },
    rightBarItemClick () {
      // this.$router.push({path: './longExplainController.vue'})
      /// 自定义Module 调用原生navigation进行转场
      // weex.requireModule('WXEventModule').push(getUrl).dic(JSON.stringify({title: '详情'}))
      let barStyle = { center: { img: '', title: '长龙说明', color: '#ffffff', width: '200', height: '44', weightFont: '20', textAlign: 'center' },
        left: { img: 'fanhuijiantou', title: '', color: '#41B883' },
        bg: { color: '#f52d2d' },
        viewBgColor: { color: '#efeff4' } }
      let pushUrl = assGlobal.domainName + 'dist/assistant/longExplainController.js'
      let pushData = { vcName: 'WXOthersViewController', url: pushUrl, barStyle: barStyle }
      weex.requireModule(assGlobal.eventModule).presentController(pushData)
      // weex.requireModule(assGlobal.eventModule).pushVC({style: {center: {img: '', title: '返回', color: '#ffffff'}, left: {img: '', title: '返回',color: '#41B883'}, bg: {color: '#f52d2d'}}, url: getUrl})
      // 使用weex封装好的navigator跳转
      // modal.alert({message: getUrl})
      // navigator.push({
      //   url: '../src/assistant/longExplainController.vue',
      //   animated: 'true' // 这里animated需是一个字符串，否则导致崩溃
      // }, event => {
      //   // navigator.setParameter('==')
      //   // navigator.hide()
      //   // modal.toast({ message: 'callback: ' + event })
      // })
    },
    eyeClick () {
      let self = this
      self.balanceClick = !self.balanceClick
      if (self.balanceClick) {
        self.partLodingShow = true
        self.balance = ''
        stream.fetch({
          method: 'GET',
          url: assGlobal.latestWithdraw,
          headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
          type: 'json'
        }, function (ret) {
          self.partLodingShow = false
          if (ret.ok) {
            if (ret.data.code === 0) {
              self.balance = '¥' + ret.data.data.sum
            }
          } else {
          }
          self.getTimeOut = setTimeout(function () {
            self.balanceClick = false
            self.balance = '余额'
          }, 10000)
        }, function (ret) {

        })
      } else {
        if (self.getTimeOut) {
          clearTimeout(self.getTimeOut)
        }
        self.balance = '余额'
      }
    }
  },
  beforeDestroy () {
    if (this.getTimeOut) {
      clearTimeout(this.getTimeOut)
    }
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
    .helpIconStyle {
        color: #ffffff;
        font-size: 40px;
    }
    .mainStyle {
        width: 750px;
        background-color: white;
    }
    .mainStyle {
        width: 750px;
        background-color: white;
    }
    .headerDiv {
        width: 750px;
        height: 90px;
        flex-direction: row;
        background-color: #f52d2d;
    }
    .titleStyle {
        color: white;
        font-size: 40px;
    }
    .rightItemStyle {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border-color: white;
        border-width: 2px;
        border-style: solid;
        justify-content: center;
        align-items: center;
    }
    .rightItemTextStyle {
        color: white;
        font-weight: bold;
        width: 40px;
        line-height: 40px;
        text-align: center;
    }
    .headerTitleBetStyle {
        width: 150px;
        line-height: 90px;
        text-align: center;
        color: white;
        margin-left: 30px;
    }
    .headerTitleBetDisableStyle{
        width: 150px;
        line-height: 90px;
        text-align: center;
        color: #fbb6b6;
        margin-left: 30px;
    }
   .headerTitleEyeStyle {
       line-height: 90px;
       text-align: center;
       color: white;
   }
   .headerTitleEyeDisableStyle{
       line-height: 90px;
       text-align: center;
       color: #fbb6b6;
   }
    .eyeImgStyle {
        width: 30px;
        height: 30px;
        margin-top: 30px;
        opacity: 0.7;
        margin-left: 0px;
    }
    .headerLineStyle {
        width: 150px;
        height: 6px;
        margin-top: -6px;
        margin-left: 30px;
        background-color: white;
    }
    .headerLineDisableStyle {
       width: 150px;
       height: 6px;
       margin-top: -6px;
       margin-left: 210px;
        background-color: white;
    }
</style>
