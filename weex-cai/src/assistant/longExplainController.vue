<template>
    <div class="expMainStyle">
        <div class="mainStyleiPhoneX" v-if="isiPhoneX"></div>
        <div class="mainStyleiPhoneX" v-else-if="isiPhoneXSMax"></div>
        <div class="mainStyleiPhoneX" v-else-if="isiPhoneXR"></div>
        <div class="mainStyleiPhone" v-else></div>
        <wxc-minibar background-color="#f52d2d" text-color="#FFFFFF" :left-button="leftButton"
                     @wxcMinibarLeftButtonClicked="leftBarItemClick">
            <!--自定义-->
            <image slot="left" style="width: 40px;height: 40px" :src="leftButton"></image>
            <text  class="titleStyle" slot="middle">长龙说明</text>
        </wxc-minibar>
        <image class="topImgStyle" :src="topImg"></image>
        <text style="width: 700px; margin-left: 25px;margin-top: 20px">长龙助手是对“快3” “时时彩”以及“PK1O”的“大小单双”开奖结果进行统计监测，每期出现“大”、“小”、“单”、“双”的概率 为1/2，如果连续3期及以上的开奖结果相同，将称之为“长 龙"，通常会采用倍投的方式进行“斩龙”或“顺龙”。</text>
        <div style="flex-direction: row;margin-top: 20px">
            <image class="downStyle" :src="downRedImg"></image>
            <text class="downTitleStyle">什么叫斩龙？</text>
        </div>
        <div style="flex-direction: row;">
            <div class="borderCStyle">
                <div class="borderContentStyle"></div>
            </div>
            <text class="textContentStyle">如连续开6期“单"，可以选择“双"进行投注，这样的投注方案称之为“斩龙”;</text>
        </div>
        <div style="flex-direction: row">
            <image class="downStyle" :src="downRedImg"></image>
            <text class="downTitleStyle">什么叫顺龙？</text>
        </div>
        <div style="flex-direction: row;">
            <div class="borderCStyle">
                <div class="borderContentStyle"></div>
            </div>
            <text class="textContentStyle">如连续开6期“单"，继续选择“单"进行投注，这样的投注方案称之为“顺龙”;</text>
        </div>
        <div style="flex-direction: row">
            <image class="downStyle" :src="downRedImg"></image>
            <text class="downTitleStyle">什么是倍投？</text>
        </div>
        <div style="flex-direction: row;">
            <div class="borderCStyle">
                <div class="borderContentStyle"></div>
            </div>
            <text class="textContentStyle">倍投是指一种成倍的投注方式，是为保障能够在“斩龙”或“顺龙”的过程中持续盈利的一种押注方式。</text>
        </div>
    </div>
</template>

<script>
import { WxcMinibar, WxcIcon } from 'weex-ui'
import global from '../Global'
// 获取设备信息
const device = weex.config.env
// const navigator = weex.requireModule('navigator')
module.exports = {
  components: { WxcMinibar, WxcIcon },
  data: () => ({
    isiPhoneX: (device.platform === 'iOS') && (device.deviceWidth === 1125) && (device.deviceHeight === 2436),
    isiPhoneXSMax: (device.platform === 'iOS') && (device.deviceWidth === 1242) && (device.deviceHeight === 2688),
    isiPhoneXR: (device.platform === 'iOS') && (device.deviceWidth === 828) && (device.deviceHeight === 1792),
    isiOS: (device.platform === 'iOS'),
    isAndroid: (device.platform === 'android'),
    leftButton: global.imgPath + 'back.png',
    topImg: '',
    downRedImg: ''
  }),
  created () {
    // dragonHel.jpg
    let self = this
    self.leftButton = global.nextLevelImgPath + 'back.png'
    self.topImg = global.nextLevelImgPath + 'dragonHel.jpg'
    self.downRedImg = global.nextLevelImgPath + 'downloadRed.png'
  },
  methods: {
    leftBarItemClick () {
      weex.requireModule(global.eventModule).dissMissVC()
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
    .expMainStyle {
        width: 750px;
    }
    .topImgStyle {
        width: 750px;
        height: 300px;
    }
    .downStyle {
        width: 30px;
        height: 40px;
        margin-left: 25px
    }
    .downTitleStyle {
        color: red;
        font-size: 35px;
    }
    .borderCStyle {
        width: 20px;
        height: 20px;
        border-width: 1px;
        border-color: #666;
        border-style: solid;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        margin-top: 10px;
    }
    .borderContentStyle {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #666;
    }
    .textContentStyle {
        width: 650px;
        margin-left: 10px;
    }
    .titleStyle {
        color: white;
        font-size: 40px;
    }
</style>
