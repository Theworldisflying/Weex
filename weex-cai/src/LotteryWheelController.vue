<template>
    <scroller>
        <div class="mainStyle">
            <!--<div>-->
                <div class="mainStyleiPhoneX" v-if="isiPhoneX"></div>
                <div class="mainStyleiPhoneX" v-else-if="isiPhoneXSMax"></div>
                <div class="mainStyleiPhoneX" v-else-if="isiPhoneXR"></div>
                <div class="mainStyleiPhone" v-else></div>
                <!--weex-ui 组件-->
                <div style="position: absolute;width: 750px"></div>
                <wxc-minibar background-color="#f52d2d" text-color="#FFFFFF" @wxcMinibarLeftButtonClicked="leftBarItemClick" title="">
                    <!--自定义-->
                    <image :src="leftBackButton"
                           slot="left"
                           style="height: 40px;width: 40px;"></image>
                    <image :src="titleImg"
                           slot="middle"
                           style="height: 80px;width: 200px;"></image>
                </wxc-minibar>
            <div class="bannnersTitleDiv">
                <text class="bannnersTitleStyle" style="margin-left: 5px" @click="officialHomeClick">官方首页</text>
                <text class="bannnersTitleStyle" @click="agentJoinClick">代理加盟</text>
                <text class="bannnersTitleStyle" @click="phoneBetClick">手机投注</text>
                <text class="bannnersTitleStyle" @click="registerClick">免费注册</text>
            </div>
            <div class="bannnersDiv">
                <image class="bannners" :src="wheelImg.bannnersImg"></image>
                <div class="gcanvasDiv">
                    <gcanvas ref="canvas_holder" class="gcanvasStyle"></gcanvas>
                    <!--地盘-->
                    <image :src="wheelImg.bottomDiskImg" class="bottomDiskStyle"></image>
                </div>
                <!--抽奖轮盘-->
                <div class="boxDiv">
                    <div ref="bgImg" class="box">
                        <image class="box" :src="wheelImg.yuanpanImg">
                        </image>
                        <image class="boxContent" :src="wheelImg.jiangxiangImg">
                        </image>
                    </div>
                    <div class="boxCenter" @click="clickLuckyPost">
                        <image class="boxCenter" :src="wheelImg.pointerImg">
                        </image>
                    </div>
                </div>
            </div>
            <!--这里用来遮盖gcanvas绘制梯形时出现的0，留待以后解决-->
            <div style="background-color: #efeff4;height: 10px;width: 10px;margin-left: 8px;margin-top: 447px;"></div>
            <!--content-->
            <div class="contentStyle">
                <!--注册，中奖记录按钮-->
                <div style="flex-direction: row">
                    <text class="wheelRegisterStyle" @click="rigisterBtnClick">注册彩33</text>
                    <text class="wheelRecoderStyle" @click="recordBtnClick">我的中奖记录</text>
                </div>
                <!--抽奖条件-->
                <div class="luckyDrawConditionsDiv">
                    <image class="luckyDrawConditions" :src="wheelImg.choujiangtiaojianImg"></image>
                    <gcanvas ref="line" class="lineStyle"></gcanvas>
                </div>
                <WheelContent></WheelContent>
                <!--中奖列表-->
                <div style="background-color: #EC2829">
                    <div style="height: 50px">
                        <text class="itemTitleStyle">中奖名单</text>
                    </div>
                    <list style="height: 400px" show-scrollbar="false" scrollable="false" ref="list">
                        <cell v-for="(item, i) in winningRecord" :key="i" ref="list_cell">
                            <div class="itemDiv">
                                <text class="itemCellStyle">恭喜会员{{item.username.slice(0,2)}}***</text>
                                <text class="itemCellStyle itemcellSpaceStyle">抽中幸运奖金额{{item.money}}元</text>
                                <text class="itemCellStyle itemcellSpaceStyle">{{item.created_at}}</text>
                            </div>
                        </cell>
                    </list>
                </div>
                <!--奖品展示-->
                <div>
                    <!--奖品展示-->
                    <div class="luckyDrawConditionsDiv" style="margin-top: 30px">
                        <image class="luckyDrawConditions" :src="wheelImg.jiangpinzhanshiImg"></image>
                        <gcanvas ref="line2" class="lineStyle"></gcanvas>
                    </div>
                    <slider class="sliderStyle" interval="3000" auto-play="true">
                        <div class="sliderFrameStyle" v-for="item in sliderImg" :key="item">
                            <image class="sliderImageStyle" resize="stretch" :src="item.src"></image>
                        </div>
                    </slider>
                </div>
                <!--活动详情活动声明-->
                <div class="luckyDrawConditionsDiv" style="margin-top: 30px">
                    <div>
                        <image class="details" :src="wheelImg.huodongxiangqingImg" v-if="isDetailsClick" @click="detailsClick">
                        </image>
                        <image class="statement" :src="wheelImg.huodongshengmingImg" v-if="isDetailsClick === false" @click="detailsClick">
                        </image>
                    </div>

                    <gcanvas ref="line3" class="lineStyleStatement"></gcanvas>
                </div>
                <DetailsStatement :isDetailsClick="isDetailsClick"></DetailsStatement>
                <!--底部留白-->
                <div style="height: 40px"></div>
            </div>
            <div style="background-color: #efeff4;position: absolute">
                <gcanvas ref="canvas_holder_bottom" class="gcanvasBottomStyles"></gcanvas>
                <!--这里用来遮盖gcanvas绘制梯形时出现的0，留待以后解决-->
                <div style="background-color: #efeff4;height: 10px;width: 10px;margin-left: 8px;margin-top: -83px;"></div>
            </div>
            <!--底部阴影-->
            <div class="bottomShadowStyle"></div>
            <div>
                <text class="taggingStyle">Copyright◎彩33 Reserved | 18+</text>
            </div>

            <div style="margin-top: 160px">
            </div>
            <!--中奖记录-->
            <WheelRecordMask :personRecord="personRecord" :overlayMask="overlayMask"></WheelRecordMask>
            <!--weex ui-->

            <wxc-dialog :title="alertTitle"
                        :content="alertContent"
                        :show="alertShow"
                        :single= 'true'
                        :main-btn-color="alertsureBtnColor"
                        @wxcDialogConfirmBtnClicked='alertShowConform'></wxc-dialog>

            <wxc-loading :show="loadingShow" type="trip" need-mask="true"></wxc-loading>

        </div>
        <!--<div style="height: 200px"></div>-->
    </scroller>
</template>

<script>
import { WxcMinibar, WxcDialog, WxcMask, WxcLoading } from 'weex-ui'
import global from './Global'
import WheelContent from './WheelContent.vue'
import DetailsStatement from './DetailsStatement.vue'
import WheelRecordMask from './WheelRecordMask.vue'
const libGCanvas = require('weex-gcanvas')
const navigatorWheel = weex.requireModule('navigator')
const animation = weex.requireModule('animation')
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const dom = weex.requireModule('dom')
// 获取设备信息
let device = weex.config.env
module.exports = {
  components: { WheelContent, DetailsStatement, WheelRecordMask, WxcMinibar, WxcDialog, WxcMask, WxcLoading },
  data: () => ({
    isiPhoneX: (device.platform === 'iOS') && (device.deviceWidth === 1125) && (device.deviceHeight === 2436),
    isiPhoneXSMax: (device.platform === 'iOS') && (device.deviceWidth === 1242) && (device.deviceHeight === 2688),
    isiPhoneXR: (device.platform === 'iOS') && (device.deviceWidth === 828) && (device.deviceHeight === 1792),
    isiOS: (device.platform === 'iOS'),
    isAndroid: (device.platform === 'android'),
    leftBackButton: '../dist/Asset/back.png',
    token: '',
    SITEID: '',
    titleImg: '',
    current_rotate: 330,
    isRotate: false,
    loadingShow: false,
    wheelPostData: Number,
    alertTitle: '',
    alertContent: '',
    confirm_text: '',
    alertShow: false,
    alertsureBtnColor: '#0000FF',
    disabled: false,
    backgroundColor: '#f52d2d',
    text: '不可领取',
    color: '#ffffff',
    width: '325px',
    height: '70px',
    borderColor: '#cccccc',
    fontSize: '36px',
    borderRadius: '12px',
    winningRecord: [],
    winningName: '',
    personRecord: [],
    cellPosistion: 0,
    cellPosistionY: 0,
    sliderImg: [],
    isDetailsClick: true,
    overlayMask: false,
    itemStatus: '',
    wheelImg: {}
  }),
  created () {
    let self = this
    // 图片
    self.titleImg = global.imgPath + 'wheelTitleImg.png'
    self.wheelImg.pointerImg = global.imgPath + 'zhizhen.png'
    self.wheelImg.bannnersImg = global.imgPath + 'banners.png'
    self.wheelImg.bottomDiskImg = global.imgPath + 'bottomDisk.png'
    self.wheelImg.yuanpanImg = global.imgPath + 'yuanpan.png'
    self.wheelImg.jiangxiangImg = global.imgPath + 'jiangxiang.png'
    self.wheelImg.jiangpinzhanshiImg = global.imgPath + 'jiangpinzhanshi.png'
    self.wheelImg.huodongxiangqingImg = global.imgPath + 'huodongxiangqing.png'
    self.wheelImg.huodongshengmingImg = global.imgPath + 'huodongshengming.png'
    self.wheelImg.choujiangtiaojianImg = global.imgPath + 'choujiangtiaojian.png'

    // 获取token
    let eventModule = weex.requireModule(global.eventModule)
    eventModule.getToken('token', function (res) {
      self.token = res.token
      self.SITEID = res.SITEID
      // 获取中奖列表
      stream.fetch({
        method: 'GET',
        url: global.theWinnersUrl,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        if (ret.ok) {
          if (ret.data.code === 0) {
            self.winningRecord = ret.data.data.list
            setInterval(self.scroll, 1000)
            // this.cellmove()
          }
        }
      }, function (ret) {

      })
    })
    //
    self.sliderImg = [{src: global.imgPath + '8.png'},
      {src: global.imgPath + '18.png'},
      {src: global.imgPath + '58.png'},
      {src: global.imgPath + '188.png'},
      {src: global.imgPath + '588.png'},
      {src: global.imgPath + '888.png'}]
  },
  mounted: function () {
    // 绘图
    this.gcanvasTrapezoid()
    this.gcanvasLine()
  },
  methods: {
    leftBarItemClick (e) {
      navigator.pop({
        animated: 'true'
      }, event => {
        // 回调函数
      })
    },
    // 顶部标题
    // 官方首页
    officialHomeClick () {
      weex.requireModule(global.eventModule).pushController({vcName: 'LocalWebViewController', url: '1'})
    },
    // 代理加盟
    agentJoinClick () {
      weex.requireModule(global.eventModule).pushController({vcName: 'LocalWebViewController', url: '1'})
    },
    // 手机投注
    phoneBetClick () {
      weex.requireModule(global.eventModule).pushController({vcName: 'LocalWebViewController', url: '1'})
    },
    // 免费注册
    registerClick () {
      weex.requireModule(global.eventModule).pushController({vcName: 'LocalWebViewController', url: '1'})
    },
    // 转盘按钮
    rotateClick () {
      let rotateImg = this.$refs.bgImg
      let self = this
      if (self.isRotate === false) {
        self.isRotate = true
        // 还原
        animation.transition(rotateImg, {
          styles: {
            transform: 'rotate(' + 0 + 'deg)',
            transformOrigin: 'center center'
          },
          duration: 0,
          delay: 0
        })

        let list = [30, 90, 150, 210, 270, 330]
        if (self.wheelPostData - 1 < list.length) {
          self.current_rotate = list[self.wheelPostData - 1]
        }
        let rotate = self.current_rotate + 360 * 20
        animation.transition(rotateImg, {
          styles: {
            transform: 'rotate(' + rotate + 'deg)',
            transformOrigin: 'center center'
          },
          duration: 5000, // ms
          timingFunction: 'ease-in-out',
          delay: 0
        }, function () {
          self.isRotate = false
          let msg = ''
          if (self.wheelPostData === 1) {
            msg = '588元'
          } else if (self.wheelPostData === 2) {
            msg = '18元'
          } else if (self.wheelPostData === 3) {
            msg = '58元'
          } else if (self.wheelPostData === 4) {
            msg = '188元'
          } else if (self.wheelPostData === 5) {
            msg = '8元'
          } else if (self.wheelPostData === 6) {
            msg = '888元'
          } else {
            msg = '未中奖'
          }

          if (msg === '未中奖') {
            msg = '很遗憾未中奖，祝您下次好运'
          } else {
            msg = '恭喜您抽中' + msg
          }
          self.alertTitle = '温馨提示'
          self.alertContent = msg
          self.confirm_text = '确定'
          self.alertShow = true
        })
      }
    },
    // 转盘获取奖项数据
    clickLuckyPost () {
      let self = this
      stream.fetch({
        method: 'POST',
        url: global.postWheelLuckUrl,
        headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json',
        body: ''
      }, function (ret) {
        if (ret.ok) {
          if (ret.data.code === 0) {
            self.wheelPostData = ret.data.data
            self.rotateClick()
          } else if (ret.code === 109) {
            if (ret.data.message.length) {
              modal.toast({message: ret.data.message})
            }
          } else {
            if (ret.data.message.length) {
              modal.toast({message: ret.data.message})
            }
          }
        } else {
          if (ret.data.message.length) {
            modal.toast({message: ret.data.message})
          }
        }
      }, function (ret) {
      })
    },
    // 滚动
    scroll () {
      // this.winningRecord.push(this.winningRecord[0])
      // this.winningRecord.shift()
      // 使用animation  移动的只有已经显示出来的cell,且未循环
      // this.cellmove()
      // 使用dom滚动
      if (this.cellPosistion < this.$refs.list_cell.length - 3) {
        const el = this.$refs.list_cell[this.cellPosistion]
        dom.scrollToElement(el, {animated: true})
        this.cellPosistion = this.cellPosistion + 1
      } else {
        this.cellPosistion = 0
        const el = this.$refs.list_cell[0]
        dom.scrollToElement(el, {animated: false})
        // clearInterval()
      }
    },
    cellmove () {
      // this.cellPosistionY = -(this.$refs.list_cell.length - 6) * 40
      // let interval = this.$refs.list_cell.length * 300
      // for (let i = 0; i < this.$refs.list_cell.length; i++) {
      //   let cell = this.$refs.list_cell[i]
      //   animation.transition(cell, {
      //     styles: {
      //       transform: 'translateY(' + this.cellPosistionY + 'px)',
      //       transformOrigin: 'center center'
      //     },
      //     duration: interval, // ms
      //     timingFunction: 'ease',
      //     delay: 0 // ms
      //   }, function () {
      //     this.cellmove()
      //   })
      // }
    },
    // 返回
    back (e) {
      navigatorWheel.pop({
        animated: 'true'
      }, event => {
        // 回调函数
      })
    },
    // 注册按钮
    rigisterBtnClick (e) {
      weex.requireModule(global.eventModule).pushController({vcName: 'LocalWebViewController', url: '1'})
    },
    // 中奖记录
    recordBtnClick (e) {
      let self = this
      self.loadingShow = true
      // 获取中奖记录列表
      stream.fetch({
        method: 'GET',
        url: global.theWinnersOneUrl,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        self.loadingShow = false
        if (ret.ok) {
          if (ret.data.code === 0) {
            self.personRecord = ret.data.data.list
            self.overlayMask = true
          } else if (ret.data.code === 109) {
            modal.toast({message: '登录已过期'})
          } else {
            modal.toast({message: ret.data.message})
          }
        }
      }, function (ret) {
        self.loadingShow = false
      })
    },
    alertShowConform () {
      this.alertShow = false
    },
    lotteryClick () {
      this.lotteryStart = 1
      let randomNum = 1
      this.prizeNo = randomNum
    },
    lotteryDone (res) {
      this.lotteryStart = 0
      let index = res.prizeNo - 1
      // console.log(this.prizeList[index])
    },
    detailsClick () {
      this.isDetailsClick = !this.isDetailsClick
    },
    statementClick () {
      this.isDetailsClick = false
    },
    // 处理中奖状态
    statusWinner (e) {
      if (e === 0) {
        return '未审核'
      } else if (e === 1) {
        return '已审核'
      } else {
        return '已拒绝'
      }
    },
    // 绘制梯形
    gcanvasTrapezoid () {
      //  获取元素引用
      let ref = this.$refs.canvas_holder
      // 创建gcanvas对象
      let gcanvas = libGCanvas.start(ref)
      // 获取context2D
      let ctx = gcanvas.getContext('2d')
      // 绘制等腰梯形角形
      // ctx.beginPath()
      ctx.font = '#00000000'
      ctx.moveTo(100, 0)
      ctx.lineTo(30, 100)
      ctx.lineTo(720, 100)
      ctx.lineTo(650, 0)
      ctx.fillStyle = '#ffffff'
      // // ctx.closePath()
      ctx.fill()
      //  获取元素引用
      let refBottom = this.$refs.canvas_holder_bottom
      // 创建gcanvas对象
      let gcanvasBottom = libGCanvas.start(refBottom)
      // 获取context2D
      let ctxBottom = gcanvasBottom.getContext('2d')
      // 绘制等腰梯形
      // ctx.beginPath()
      ctxBottom.moveTo(30, 0)
      ctxBottom.lineTo(100, 80)
      ctxBottom.lineTo(650, 80)
      ctxBottom.lineTo(720, 0)
      ctxBottom.fillStyle = '#ffffff'
      // // ctx.closePath()
      ctxBottom.fill()
    },
    // 线 圆
    gcanvasLine () {
      //  line
      let w = 300
      let y = 6
      let r = y // 半径
      let line1Ref = this.$refs.line
      let linegcanvas = libGCanvas.start(line1Ref)
      let lineCtx = linegcanvas.getContext('2d')
      lineCtx.fillStyle = '#D5D5D5'
      lineCtx.fillRect(0, y, w, 2)
      // line circle #F0C930
      lineCtx.fillStyle = '#F0C930'
      lineCtx.arc(w, y, r, 0, Math.PI * 2, true)
      lineCtx.fill()
      //  line2
      let w2 = 300
      let y2 = 6
      let r2 = y2 // 半径
      let line2Ref = this.$refs.line2
      let linegcanvas2 = libGCanvas.start(line2Ref)
      let lineCtx2 = linegcanvas2.getContext('2d')
      lineCtx2.fillStyle = '#D5D5D5'
      lineCtx2.fillRect(0, y2, w2, 2)
      // line circle #F0C930
      lineCtx2.fillStyle = '#F0C930'
      lineCtx2.arc(w2, y2, r2, 0, Math.PI * 2, true)
      lineCtx2.fill()

      //  line3
      let w3 = 200
      let y3 = 6
      let r3 = y2 // 半径
      let line3Ref = this.$refs.line3
      let linegcanvas3 = libGCanvas.start(line3Ref)
      let lineCtx3 = linegcanvas3.getContext('2d')
      lineCtx3.fillStyle = '#D5D5D5'
      lineCtx3.fillRect(0, y3, w3, 2)
      // line circle #F0C930
      lineCtx3.fillStyle = '#F0C930'
      lineCtx3.arc(w3, y3, r3, 0, Math.PI * 2, true)
      lineCtx3.fill()
    }
  }
}
</script>

<style scoped>
    .mainStyle{
        width: 750px;
        background-color: #efeff4;
    }
    /*导航条高度，预留90px，X加上86即是（88*2=176），iOS其他设备增加38即是128/*/
    .mainStyleiPhoneX{
        width: 750px;
        height: 70px;
        background-color: #f52d2d;
    }
    .mainStyleiPhone{
        width: 750px;
        height: 30px;
        background-color: #f52d2d;
    }
    /*bannersTitle*/
    .bannnersTitleDiv{
        width: 750px;
        height: 60px;
        background-color: #222;
        flex-direction: row;
    }
    .bannnersTitleStyle{
        width: 185px;
        height: 60px;
        font-size: 30px;
        color: white;
        font-weight: 400;
        text-align: center;
        line-height: 60px;
    }
    .bannnersDiv{
        width: 750px;
        height: 300px;
        position: absolute;
        align-items: center;
    }
    .bannners{
        width: 750px;
        height: 300px;
        position: absolute;
    }
    .boxDiv {
        width: 360px;
        height: 360px;
        margin-top: 100px;
        margin-left: 195px;
        position: absolute;
        align-items: center;
        flex-direction: row;
    }
    .box {
        width: 360px;
        height: 360px;
        position: absolute;
        align-items: center;
        flex-direction: row;
    }
    .boxContent {
        width: 300px;
        height: 300px;
        margin-left: 30px;
    }
    .boxCenter {
        width: 120px;
        height: 120px;
        margin-left: 60px;
    }
    .gcanvasDiv{
        width: 750px;
        margin-top: 430px;
        position: absolute;
        background-color: #00000000;
    }
    .gcanvasStyle{
        width: 750px;
        height: 100px;
        background-color: #00000000;
        position: absolute;
    }
    .gcanvasBottomStyles{
        width: 750px;
        height: 100px;
        background-color: #00000000;
    }
    .bottomDiskStyle{
        width: 310px;
        height: 80px;
        margin-left: 220px
    }
    .wheelRegisterStyle {
        width: 230px;
        height: 80px;
        margin-left: 60px;
        margin-top: 50px;
        font-size: 30px;
        background-color: #dd524d;
        color: white;
        text-align: center;
        border-radius: 5px;
        vertical-align: center;
        padding-top: 20px;

    }
    .wheelRecoderStyle {
        width: 230px;
        height: 80px;
        margin-left: 90px;
        margin-top: 50px;
        font-size: 30px;
        background-color: #dd524d;
        color: white;
        text-align: center;
        border-radius: 5px;
        vertical-align: center;
        padding-top: 20px;
    }
    /*抽奖条件*/
    .luckyDrawConditionsDiv{
        margin-top: 50px;
        flex-direction: row;
        position: relative;
    }
    .luckyDrawConditions {
        width: 230px;
        height: 60px;
        margin-left: 40px;
    }
    .details {
        width: 350px;
        height: 60px;
        margin-left: 40px;
    }
    .statement{
        width: 350px;
        height: 60px;
        margin-left: 40px;
    }
    .lineStyle{
        width: 500px;
        height: 15px;
        margin-top: 25px;
    }
    .lineStyleStatement{
        width: 300px;
        height: 15px;
        margin-top: 25px;
    }

    .contentStyle{
        margin-left: 30px;
        margin-top: 71px;
        width: 690px;
        background-color: white;
    }
    .itemDiv {
        height: 60px;
        flex-direction: row;
    }
    .itemTitleStyle {
        font-size: 40px;
        font-weight: 700;
        color: white;
        text-align: center;
    }

    .itemCellStyle{
        font-size: 30px;
        color: white;
    }
    .itemcellSpaceStyle{
        margin-left: 30px;
    }
    .sliderStyle{
        width: 690px;
        height: 350px;
        margin-top: 20px;
    }
    .sliderFrameStyle{
        width: 690px;
        height: 350px;
        position: relative;
    }
    .sliderImageStyle{
        width: 680px;
        height: 350px;
    }
    .bottomShadowStyle{
        width: 550px;
        height: 150px;
        margin-top: 80px;
        margin-left: 100px;
        background-image:linear-gradient(to bottom,#8A8A8A,#efeff4);
        /*box-shadow: inset 0px 0px 5px #BFBFBF; !*box-shadow 仅支持iOS*!*/
    }
    .taggingStyle{
        justify-content: center;
        text-align: center;
        color: #666666;
        font-size: 24px;
    }
</style>
