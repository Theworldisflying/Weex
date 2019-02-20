<template>
    <div class="mainDiv">
        <list class="list">
            <cell class="cell" v-for="(item,i) in getResult.data.list" :key="i" @click="myClick(item)">
                <div class="cellContentDiv">
                    <image class="imageView" :src="imgUrl+item.cover" placeholder=""></image>
                    <div class="content">
                        <div>
                            <text class="cellContentTitle">{{item.title}}</text>
                            <text class="cellContent">{{item.describe}}</text>
                        </div>
                        <div>
                            <image class="transition" :src="lottery_hall_arrowImg"></image>
                        </div>
                    </div>
                </div>
            </cell>
        </list>
        <div style="width: 750px;height: 100px"></div>
    </div>

</template>

<script>
import { WxcMinibar } from 'weex-ui'
import global from './Global'
let stream = weex.requireModule('stream')
const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
let modal = weex.requireModule('modal')
// 获取设备信息
let device = weex.config.env
module.exports = {
  components: {WxcMinibar},
  data: function () {
    return {
      isiPhoneX: (device.platform === 'iOS') && (device.deviceWidth === 1125) && (device.deviceHeight === 2436),
      isiPhoneXSMax: (device.platform === 'iOS') && (device.deviceWidth === 1242) && (device.deviceHeight === 2688),
      isiPhoneXR: (device.platform === 'iOS') && (device.deviceWidth === 828) && (device.deviceHeight === 1792),
      isiOS: (device.platform === 'iOS'),
      isAndroid: (device.platform === 'android'),
      token: '',
      SITEID: '',
      getResult: {},
      imgUrl: '',
      lottery_hall_arrowImg: ''
    }
  },
  created: function () {
    var self = this
    self.imgUrl = global.imgStorageUrl
    self.lottery_hall_arrowImg = global.imgPath + 'lottery_hall_arrow.png'
    // 获取token
    let eventModule = weex.requireModule(global.eventModule)
    eventModule.getToken('token', function (res) {
      self.token = res.token
      self.SITEID = res.SITEID
      console.log('=====d==dd=d=d===' + res.token + '===' + res.SITEID)
      // var GET_URL = 'https://www.c33372.com/api/activity/activityListNew'
      let GET_URL = global.activityHomeUrl
      stream.fetch({
        method: 'GET',
        url: GET_URL,
        type: 'json',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID }
      }, function (ret) {
        // console.log('============' + JSON.stringify(ret.data))
        if (!ret.ok) {
          modal.toast({message: ret.statusText})
          self.getResult = 'request failed'
        } else {
          self.getResult = ret.data
          // console.log('============' + me.getResult.data.list)
        }
      }, function (response) {
        self.getResult = 'bytes received:' + response.length
      })
    })
  },
  methods: {
    leftBarItemClick (e) {
      navigator.pop({
        animated: 'true'
      }, event => {
        // 回调函数
      })
    },
    myClick (event) {
      // console.log('=====click====', event)
      // this.$router.push({
      //   // path: 'http://192.168.1.11:8083/dist/ActivityDetailsController.js', // 要跳转的路径
      //   name: 'ActivityDetailsController',
      //   query: event
      // })
      // testObj.testPushData = {
      //   data: 1111
      // }
      // 本地化 转为字符串存储
      storage.setItem('mData', JSON.stringify(event), event => {
        this.state = 'set success'
        // console.log('set success', event)
      })
      // 路径传值 不能传太长的值
      // let getUrl = '../dist/ActivityDetailsController.js?cover=' + event.cover + '$id=' + event.id
      // let getUrl = global.domainName + 'dist/ActivityDetailsController.js'
      if (device.platform === 'Web') {
        // getUrl = '../src/ActivityDetailsController'
      }

      /// 自定义Module 调用原生navigation进行转场
      // weex.requireModule(global.eventModule).push(getUrl).dic(JSON.stringify({title: '详情'}))
      // weex.requireModule(global.eventModule).pushVC({style: {center: {img: '', title: '活动详情', color: '#ffffff'}, left: {img: '', title: '返回', color: '#41B883'}, bg: {color: '#f52d2d'}}, url: getUrl})
      if (this.isAndroid) {
        // android 原生隐式启动
        weex.requireModule(global.eventModule).pushActivity(global.domainName + 'dist/ActivityDetailsController.js', 'com.xianyu1.android.intent.category.WEEX')
      } else if (this.isiOS) {
        let barStyle = { center: { img: '', title: event.title, color: '#ffffff', width: '200', height: '44', weightFont: '20', textAlign: 'center' },
          left: { img: 'fanhuijiantou', title: '', color: '#41B883' },
          bg: { color: '#f52d2d' },
          viewBgColor: { color: '#efeff4' } }
        let pushUrl = global.domainName + 'dist/ActivityDetailsController.js'
        let pushData = { vcName: 'WXOthersViewController', url: pushUrl, barStyle: barStyle }
        weex.requireModule(global.eventModule).pushController(pushData)
      } else {
        // 使用weex封装好的navigator跳转
        navigator.push({
          // http://192.168.1.29:8082/dist/ActivityDetailsController.js
          url: global.domainName + 'dist/ActivityDetailsController.js',
          // url: '../src/ActivityDetailsController',
          animated: 'true' // 这里animated需是一个字符串，否则导致崩溃
        }, event => {
          modal.toast({ message: 'click===112324324111' + this.isAndroid })
          // navigator.setParameter('==')
          // navigator.hide()
          // modal.toast({ message: 'callback: ' + event })
        })
      }

      // // 调用原生方法
      // weex.requireModule('cell').showParams(event)
      // weex.requireModule('cell').loadCellDic(event)
      // console.log('onclick:', event)
      // alert('=====' + event)
      // self.showParams('hello Weex')
    }
  }

}
// const modal = weex.requireModule('modal')

// export default {
//   props: {
//
//   }
//
// }

</script>

<style scoped>
    .mainDiv{
        width: 750px;
        background-color: #f5f5f5;
    }
    .list{
        width: 710px;
        margin-left: 20px;
        background-color: #f5f5f5;
    }
    .cell{
        width: 710px;
        height: 300px;
        background-color: #f5f5f5;
    }
    .cellContentDiv{
        width: 710px;
        height: 280px;
        background-color: white;
        border: 1px #dddddd;
        border-radius: 5px;
    }
    .content{
        flex-direction: row;
        width: 670px;
    }
    .cellContentTitle{
        width: 670px;
        color: black;
        margin-left: 10px;
        font-size: 25px;
    }
    .cellContent{
        width: 670px;
        color: rgb(119, 119, 119);
        margin-left: 10px;
        font-size: 20px;
    }
    .transition{
        width: 20px;
        height: 30px;
        margin-top: 15px;
        margin-right: 1px;
    }
    .imageView{
        width: 710px;
        height: 220px;
    }
</style>
