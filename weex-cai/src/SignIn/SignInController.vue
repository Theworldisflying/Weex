<template>
    <scroller>
        <div>
            <div class="titleStyle">
                <text class="titleDateStyle">{{getDate}}</text>
                <div class="titleCheckInDiv">
                    <text class="titleCheckInStyle">累计签到</text>
                    <text class="titleCheckInNumStyle"> {{signInNum}}</text>
                    <text class="titleCheckInStyle"> 天</text>
                </div>
                <text class="titleHasCheckInStyle" @click="checkInTextClick">{{checkInBtn}}</text>
            </div>
            <div class="lineStyle"></div>
            <!--日历-->
            <calendar class="calendarStyle" :dataObject="dataObj"></calendar>
            <div style="margin-top: 20px;flex-direction: row">
                <text class="CheckInTotalTextStyle">累计签到奖励</text>
                <div class="collectionRecordDiv" @click="queryCheckInRecord">
                    <text class="collectionRecordStyle">查看领取记录</text>
                    <wxc-icon name="more" class="moreIconStyle"></wxc-icon>
                </div>
            </div>
            <div class="lineStyle"></div>
            <!--宝箱-->
            <div style="flex-direction: row;margin-top: 40px">
                <div class="treasureBoxDiv" v-for="(item, i) in signinStatusList" :key="i" @click="treasureImgClick(item, i)">
                    <image :src="getimgUrl + item.imgUrl" class="treasureBoxImgStyle"></image>
                    <text class="treasureBoxTestStyle">签到{{item.dayNumber}}天</text>
                </div>
                <!--<image class="treasureChestImgStyles" :src="treasureChestImg"></image>-->
                <!--<div style="flex-direction: column;margin-left: 30px">-->
                    <!--<div class="needDaysDiv">-->
                        <!--<text class="needDaysStyle">还需签到</text>-->
                        <!--<text class="needDaysNumStyle"> {{needDaysNumReceive}}</text>-->
                        <!--<text class="needDaysStyle"> 天可以领取</text>-->
                    <!--</div>-->
                    <!--<text class="QualificationsStyles">{{qualificationsText}}</text>-->
                <!--</div>-->
                <!--<wxc-icon name="more" class="moreIconGrayStyle"></wxc-icon>-->
            </div>
            <!--提示-->
            <div style="flex-direction: column;margin-top: 50px">
                <text class="alertTitleStyle">提示:</text>
                <text class="alertContentStyle">1、累计或连续签到达到相应的天数都可获得奖励！</text>
                <text class="alertContentStyle">2、领取宝箱即可随机获得代金券或现金奖励。</text>
                <text class="alertContentStyle">3、达到签到要求后未在0点前领取视为放弃。</text>
            </div>
        </div>
        <wxc-loading :show="isSignShow" type="default" need-mask="false" :interval="intervalSign"></wxc-loading>
    </scroller>
</template>

<script>
import { WxcIcon, WxcLoading } from 'weex-ui'
import calendar from './calendar.vue'
import global from '../Global'
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
module.exports = {
  components: { calendar, WxcIcon, WxcLoading },
  data: () => ({
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
    getimgUrl: global.imgStorageUrl,
    isTreasureBox: true,
    signinStatusList: []
  }),
  created () {
    let self = this
    // 图片
    self.treasureChestImg = global.nextLevelImgPath + 'banners.png'
    // 领取资格提示文字
    self.qualificationsText = '未达到领取资格'
    //  获取年
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    self.getDate = year + '年' + month + '月'
    // 获取token
    let eventModule = weex.requireModule(global.eventModule)
    eventModule.getToken('token', function (res) {
      self.token = res.token
      self.SITEID = res.SITEID
      self.getData()
    })
  },
  methods: {
    queryCheckInRecord () {
      let barStyle = { center: { img: '', title: '领取记录', color: '#ffffff', width: '300', height: '44', weightFont: '20', textAlign: 'center' },
        left: { img: 'fanhuijiantou', title: '', color: '#41B883' },
        bg: { color: '#f52d2d' },
        viewBgColor: { color: '#ffffff' } }
      let pushData = { vcName: 'WXOthersViewController', url: global.domainName + 'dist/SignIn/ReceiveRecordController.js', barStyle: barStyle }
      weex.requireModule(global.eventModule).pushController(pushData)
    },
    // 签到按钮点击相应
    checkInTextClick (e) {
      let self = this
      if (self.isCheck) {
        self.isCheck = false
        self.isSignShow = true
        stream.fetch({
          method: 'POST',
          url: global.postUserSighAdd,
          headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
          type: 'json',
          body: ''
        }, function (ret) {
          self.isSignShow = false
          if (ret.ok) {
            let data = ret.data
            if (data.code === 0) {
              modal.toast({message: '签到成功'})
              // 重新获取数据
              self.getData()
            } else if (data.code === 109) {
              self.isCheck = true
              modal.toast({message: data.message})
            } else {
              self.isCheck = true
              modal.toast({message: data.message})
            }
          } else {
            self.isCheck = true
          }
        }, function (ret) {
          // 请求状态
        })
      }
    },
    // 获取数据
    getData () {
      let self = this
      stream.fetch({
        method: 'GET',
        url: global.userSignWebList,
        headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        if (ret.ok) {
          self.isSignShow = false
          let data = ret.data
          if (data.code === 0) {
            self.dataObj = data.data
            self.signInNum = self.dataObj.number
            // 签到数组
            let timeArray = self.dataObj.timeArray
            let date = new Date()
            for (let i = 0; i < timeArray.length; i++) {
              let num = timeArray[i]
              if (num === 2 && i + 1 === date.getDate()) {
                self.isCheck = false
                self.checkInBtn = '已签到'
              }
            }
            self.dealBoxStatus(self.dataObj, self.dataObj.signConfig.length)
          } else if (data.code === 109) {
            modal.toast({ message: JSON.stringify(data.message) })
          } else {
            modal.toast({ message: JSON.stringify(data.message) })
          }
        } else {
        }
      }, function (ret) {
        // modal.toast({ message: JSON.stringify(ret.statusText) })
      })
    },
    dealBoxStatus (res, len) {
      for (let i = 0; i < len; i++) {
        if (res.userSignRecord[i] && res.userSignRecord[i].status === 3) {
          this.signinStatusList[i] = {
            imgUrl: res.signConfig[i].pickUp,
            id: res.userSignRecord[i].id,
            dayNumber: res.signConfig[i].dayNumber,
            status: res.userSignRecord[i].status
          }
        } else if (res.userSignRecord[i] && res.userSignRecord[i].status !== 3) {
          this.signinStatusList[i] = {
            imgUrl: res.signConfig[i].haveToPickUp,
            id: res.userSignRecord[i].id,
            dayNumber: res.signConfig[i].dayNumber,
            status: res.userSignRecord[i].status
          }
        } else {
          this.signinStatusList[i] = {
            imgUrl: res.signConfig[i].notPickUp,
            id: 0,
            dayNumber: res.signConfig[i].dayNumber,
            status: ''
          }
        }
      }
    },
    // 宝箱点击
    treasureImgClick (e, i) {
      if (self.dataObj.userSignRecord[i] && e.status === 3) {
        let self = this
        // 如果点击了
        if (self.isTreasureBox) {
          self.isTreasureBox = false
          self.isSignShow = true
          let body = 'userSignRecordId=' + e.id + '&dayNumber=' + e.dayNumber
          stream.fetch({
            method: 'POST',
            url: global.postApplyForMoney,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
            type: 'json',
            body: body
          }, function (ret) {
            self.isTreasureBox = true
            self.isSignShow = false
            if (ret.ok) {
              let data = ret.data
              modal.toast({message: data.message})
              if (data.code === 0) {
                self.getData()
              } else if (data.code === 109) {

              } else {
              }
            }
          }, function (ret) {
          })
        }
      } else if (e.status !== 3) {
        modal.toast({message: '已领取'})
      } else { // 2
        modal.toast({message: '会员账号签到未达标！'})
      }
    }
  }
}
</script>

<style scoped>
    .titleStyle {
        flex-direction: row;
        margin-top: 10px;
    }
    .titleDateStyle {
        width: 180px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-left: 40px;
        color: black;
        font-size: 30px;
    }
    .titleCheckInDiv {
        margin-left: 20px;
        width: 260px;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    .titleCheckInStyle {
        line-height: 50px;
        text-align: center;
        font-size: 30px;
    }
    .titleCheckInNumStyle {
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #14A7AD;
        font-size: 30px;
    }
    .titleHasCheckInStyle {
        width: 130px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 5px;
        background-color: #FF7C34;
        color: white;
        margin-left: 70px;
        font-size: 30px;
    }
    .calendarStyle {
        margin-top: 30px;
    }
    .lineStyle {
        background-color: #666;
        height: 1px;
        margin-top: 15px;
    }
    .CheckInTotalTextStyle{
        margin-left: 40px;
        line-height: 50px;
        text-align: left;
    }
    .collectionRecordDiv {
        margin-left: 250px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .collectionRecordStyle {
        color: #24B6EF;
    }
    .treasureChestImgStyles {
        width: 80px;
        height: 80px;
        margin-left: 30px;
    }
    .needDaysDiv {
        flex-direction: row;
    }
    .needDaysStyle {
        line-height: 35px;
        text-align: center;
        font-size: 35px;
    }
    .needDaysNumStyle {
        line-height: 35px;
        text-align: center;
        color: #C91E02;
        font-size: 35px;
    }
    .QualificationsStyles {
        line-height: 30px;
        margin-top: 10px;
        color: #E7DED7;
        font-size: 30px;
    }
    .moreIconStyle {
        color: #24B6EF;
        font-size: 40px;
        padding-left: 0px;
        margin-left: 0px;
    }
    .moreIconGrayStyle {
        color: #C4C4C4;
        font-size: 50px;
        text-align: center;
        margin-left: 150px;
    }
    .alertTitleStyle {
        margin-left: 30px;
        color: #FF7C34;
        font-size: 40px;
    }
    .alertContentStyle {
       margin-left: 30px;
        color: black;
        font-size: 30px;
    }
    .treasureBoxDiv {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .treasureBoxImgStyle {
        width: 180px;
        height: 150px;
    }
    .treasureBoxTestStyle {
        text-align: center;
    }
</style>
