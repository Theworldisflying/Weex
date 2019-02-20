<template>
<div style="background-color: #EEEEEE">
    <div v-for="(item, i) in dateData" :key="i" class="cellStyle" @click="cellClick(item, i)">
        <div class="listRowStyle">
            <div style="width: 300px;flex-direction: row">
                <text class="circleTextStyle"></text>
                <text class="textStyle">{{item.date}}</text>
            </div>
            <wxc-icon :ref="'icon_ref' + i" :name="item.iconName" class="more_unfoldStyle"></wxc-icon>
        </div>
        <div v-if="item.show === true" style="background-color: white">
            <div v-for="(item, i) in receiveDataList" :key="i" class="receiveDiv">
                <div class="itemContentStyle">
                    <text>{{item.type}}</text>
                    <text style="color: #C91E02">{{item.money}}</text>
                </div>
                <div class="itemContentStyle">
                    <text>{{item.created_at}}</text>
                    <text>{{item.status | statusMsg}}</text>
                </div>
            </div>

        </div>
    </div>
    <wxc-loading :show="isShow" type="default" need-mask="true" :interval="intervalSign"></wxc-loading>
</div>
</template>

<script>
import { WxcIcon, WxcLoading } from 'weex-ui'
import global from '../Global'
const gCanvas = require('weex-gcanvas')
// const animation = weex.requireModule('animation')
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
module.exports = {
  props: {

  },
  components: { WxcIcon, WxcLoading },
  data: () => ({
    dateData: [],
    token: '',
    SITEID: '',
    icon: '',
    receiveDataList: {},
    isShow: false
  }),
  created () {
    let self = this
    // 获取token
    self.getTokenMethod()
    let date = new Date()
    let month = date.getMonth()
    self.icon = global.nextLevelImgPath + 'banners.png'
    self.dateData = [{date: '本月', show: false, startTime: self.getTimeStamp(month), endTime: self.getTimeStamp(month + 1), iconName: 'more_unfold'},
      {date: self.getMonth(month) + '月', show: false, startTime: self.getTimeStamp(month - 1), endTime: self.getTimeStamp(month), iconName: 'more_unfold'},
      {date: self.getMonth(month - 1) + '月', show: false, startTime: self.getTimeStamp(month - 2), endTime: self.getTimeStamp(month - 1), iconName: 'more_unfold'}]
  },
  ready () {
  },
  mounted () {

  },
  updated () {
    this.circleMethod()
  },
  methods: {
    // 获取token
    getTokenMethod () {
      let self = this
      // 获取token
      let eventModule = weex.requireModule(global.eventModule)
      eventModule.getToken('token', function (res) {
        self.token = res.token
        self.SITEID = res.SITEID
      })
    },
    // 获取本年指定月1号的时间戳
    getTimeStamp (month) {
      let date = new Date()
      let year = date.getFullYear()
      let getMonth = new Date(year, month, 1)
      // 获取的是毫秒
      return getMonth.getTime() / 1000
    },
    cellClick (item, i) {
      let self = this
      for (let i = 0; i < self.dateData.length; i++) {
        self.dateData[i].iconName = 'more_unfold'
      }
      if (self.dateData[i].show === true) {
        self.dateData[i].show = false
      } else {
        self.isShow = true
        stream.fetch({
          method: 'GET',
          url: global.userSignHas + '?startTime=' + item.startTime + '&endTime=' + item.endTime,
          headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
          type: 'json'
        }, function (ret) {
          if (ret.ok) {
            self.isShow = false
            let data = ret.data
            if (data.code === 0) {
              self.receiveDataList = data.data.list
              if (self.receiveDataList.length > 0) {
                if (self.dateData[i].show === false) {
                  self.dateData[i].show = true
                  self.dateData[i].iconName = 'less'
                } else {
                  modal.toast({message: '无领取记录'})
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
              modal.toast({message: '请先登录账号'})
            } else {
              modal.toast({message: data.message})
            }
          } else {
            modal.toast({message: ret.status})
          }
        }, function (ret) {

        })
      }
    },
    circleMethod () {
      let self = this
      // 绘制圆
      let ref = self.$refs.circle_canvas
      let gcanvas = gCanvas.start(ref)
      let ctx = gcanvas.getContext('2d')
      let w = 30
      let y = 40
      let r = 5 // 半径
      ctx.arc(w, y, r, 0, Math.PI * 2, true)
      ctx.strokeStyle = '#E52544'
      ctx.lineWidth = 5
      ctx.stroke()
    },
    // 如果是0，则为12月
    getMonth (e) {
      if (e <= 0) {
        e += 12
      }
      // 转中文数字
      let getDate = this.swatchChineseNum(e)
      return getDate
    },
    // 阿拉伯数字转中文数字
    swatchChineseNum (e) {
      let arr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
      let num = arr[e - 1]
      return num
    }
  },
  filters: {
    statusMsg (status) {
      let msg = ''
      if (status === 0) {
        msg = '审核中'
      } else if (status === 1) {
        msg = '已领取'
      } else { // 2
        msg = '已拒绝'
      }
      return msg
    }
  }
}
</script>

<style scoped>
    .circleStyle {
        width: 50px;
        height: 50px;
        background-color: #00B4FF;
    }
    .circleTextStyle {
        width: 34px;
        height: 34px;
        margin-left: 30px;
        margin-top: 27px;
        background-color: #00000000;
        border-color: #E52544;
        border-radius: 17px;
        border-width: 5px;
        position: relative;
    }
    .textStyle {
        margin-left: 10px;
        line-height: 88px;
    }
    .triangle_border_up {
        width: 50px;
        height: 50px;
        border-top-width: 30px;
        border-left-width: 30px;
        border-right-width: 30px;
        border-bottom-width: 30px;
        border-style: solid;
        border-top-color: transparent;
        border-right-color: transparent;
        border-left-color: #0088;
        border-bottom-color: #0088fb;
        /*border-color: transparent transparent #333;!*透明 透明  灰*!*/
        margin: 40px;
        position: relative;
    }
    .iconStyles {
        width: 80px;
        justify-content: right;
        align-items: end;
        float: right;
    }
    .more_unfoldStyle {
        width: 50px;
        height: 50px;
        margin-top: 20px;
        margin-left: 350px;
    }
    .cellStyle {
        border-bottom-width: 2px;
        border-bottom-color: #f5f5f5;
    }
    .listRowStyle {
        flex-direction: row;
        height: 80px;
        background-color: #F3F3F3;
        border-bottom-width: 1px;
        border-bottom-color: rgb(187, 187, 187);
    }
    .itemContentStyle {
        margin-left: 30px;
        width: 650px;
        height: 40px;
        flex-direction: row;
        justify-content: space-between;
    }
    .receiveDiv {
        border-bottom-width: 1px;
        border-bottom-color: rgb(187, 187, 187);
    }
    .lineDiv {
        height: 1px;
        background-color: #666666;
    }
</style>
