<template>
<div class="recentlyMainDiv">
    <list class="recentlyMainDiv" :style="mainStyle">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
            <!--<text class="indicator-text">Refreshing ...</text>-->
            <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <cell class="listCellStyle" v-for="(item, i) in recentlyData" :key="i">
            <div class="ermTextDiv">
                <text class="termTextStyle" style="margin-top: 15px">{{item.lotteryName}}</text>
                <text class="termTextStyle">{{item.term}}</text>
            </div>
            <text class="moneyStyle">{{item.money | saveT}}</text>
            <div class="statusTextDiv" v-if="item.isPrize === 1">
                <text class="termTextStyle" style="color: #008B00">待开奖</text>
            </div>
            <div class="statusTextDiv" v-else-if="item.winMoney > 0">
                <text class="termTextStyle" style="color: #f52d2d;margin-top: 15px">{{item.winMoney | saveT}}</text>
                <text class="termTextStyle" style="color: #f52d2d">已中奖</text>
            </div>
            <div class="statusTextDiv" v-else>
                <text class="termTextStyle" style="color: #666666">未中奖</text>
            </div>
            <text class="checkBtnStyle" @click="checkBtnClick(item)">查看</text>
        </cell>
        <!--<loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">-->
            <!--&lt;!&ndash;<text class="indicator-text">Loading ...</text>&ndash;&gt;-->
            <!--<loading-indicator class="indicator"></loading-indicator>-->
        <!--</loading>-->
    </list>
    <div v-if="recentlyData.length === 0">
        <text style="margin-top: 100px" class="noneStyle">暂无投注记录</text>
    </div>
    <text class="bottomHeightStyle" v-if="recentlyData.length === 20" @click="checkMoreBtnClick">最多查看20条，查看更多</text>
</div>
</template>

<script>
import resGlobal from '../Global'
const stream = weex.requireModule('stream')
const modal = weex.requireModule('modal')
// const device = weex.config.env
module.exports = {
  props: {

  },
  data: () => ({
    token: '',
    SITEID: '',
    recentlyData: [],
    refreshing: false,
    mainStyle: {
      // backgroundColor: '#dff',
      // height: device.deviceHeight - 1000 + 'px'
    },
    page: 1,
    loadinging: false
  }),
  created () {
    let self = this
    // 获取token
    let eventModule = weex.requireModule(resGlobal.eventModule)
    eventModule.getToken('token', function (res) {
      self.token = res.token
      self.SITEID = res.SITEID
      self.getData()
    })
  },
  filters: {
    winStatus (e) {
    },
    saveT (e) {
      let num = parseFloat(e)
      return num.toFixed(2)
    }
  },
  methods: {
    getData () {
      let self = this
      let limit = 20
      stream.fetch({
        method: 'GET',
        url: resGlobal.recentlyBet + '?limit=' + limit + '&page=' + self.page,
        headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json'
      }, function (ret) {
        self.partLodingShow = false
        self.refreshing = false
        if (ret.ok) {
          if (ret.data.code === 0) {
            // modal.toast({message: 'loading' + self.page + '==' + self.recentlyData.length + '==' + self.loadinging})
            if (self.loadinging === true) {
              self.loadinging = false
              self.recentlyData.concat(ret.data.data.list)
              // self.recentlyData.push.apply(self.recentlyData, ret.data.data.list)
            } else {
              self.recentlyData = ret.data.data.list
            }
          } else if (ret.data.code === 109) {
            modal.toast({message: ret.data.message})
            self.loadinging = false
          } else {
            modal.toast({message: ret.data.message})
            self.loadinging = false
          }
        } else {
          modal.toast({message: ret.statusText})
          self.loadinging = false
        }
        self.getTimeOut = setTimeout(function () {
          self.balanceClick = false
          self.balance = '余额'
        }, 10000)
      }, function (ret) {

      })
    },
    onrefresh (event) {
      let self = this
      this.refreshing = true
      self.page = 1
      this.getData()
      // setTimeout(() => {
      //   this.refreshing = false
      // }, 2000)
    },
    onpullingdown (event) {
      // console.log('dy: ' + event.dy)
      // console.log('pullingDistance: ' + event.pullingDistance)
      // console.log('viewHeight: ' + event.viewHeight)
      // console.log('type: ' + event.type)
    },
    onloading (event) {
      this.loadinging = true
      this.page = this.page + 1
      this.getData()
    },
    checkBtnClick (e) {
      let barStyle = { }
      let pushUrl = resGlobal.domainName + 'dist/assistant/longExplainController.js'
      let pushData = {}
      if (e.chase === 1) {
        let getInfo = {chase: e.chase.toString(), type: '1', betId: e.betId.toString(), oderId: e.orderId}
        modal.alert({message: JSON.stringify(getInfo)})
        pushData = { vcName: 'KXCMine_LotterDetailsViewController', url: pushUrl, barStyle: barStyle, info: getInfo }
      } else {
        let getInfo = {chase: e.chase, type: '1', betId: e.betId, oderId: e.orderId}
        pushData = { vcName: 'ChaseDetailsViewController', url: pushUrl, barStyle: barStyle, info: getInfo }
      }
      weex.requireModule(resGlobal.eventModule).presentNavController(pushData)
    },
    checkMoreBtnClick (e) {
      let barStyle = {}
      let pushUrl = resGlobal.domainName + 'dist/assistant/longExplainController.js'
      let pushData = {}
      let getInfo = {chase: e.chase, type: '1', betId: e.betId, oderId: e.orderId}
      pushData = { vcName: 'ChaseAndRecordViewController', url: pushUrl, barStyle: barStyle, info: getInfo }
      weex.requireModule(resGlobal.eventModule).presentNavController(pushData)
    }
  }
}
</script>

<style scoped>
    .refresh {
        width: 750px;
        height: 180px;
        background-color: #333;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .indicator {
        margin-top: 16px;
        height: 40px;
        width: 40px;
        color: white;
    }
    .loading {
        width: 750px;
        height: 200px;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        background-color: #333;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .recentlyMainDiv {
        width: 750px;
        height: 1300px;
    }
    .listHeaderDiv {
        width: 750px;
        height: 80px;
        background-color: #f6f6f6;
    }
    .listCellStyle {
        width: 750px;
        height: 120px;
        flex-direction: row;
        border-bottom-width: 1px;
        border-bottom-color: #ddd;
        border-bottom-style: solid;
    }
    .cellTextColor {
        font-size: 25px;
    }
    .termTextDiv {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        width: 300px;
    }
    .termTextStyle {
        width: 300px;
        line-height: 50px;
        text-align: center;
    }
    .moneyStyle {
        line-height: 100px;
        width: 150px;
        text-align: center;
    }
    .statusTextDiv {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 150px;
    }
    .checkBtnStyle {
        color: rgb(74, 144, 226);
        margin-left: 50px;
        line-height: 120px;
        text-align: center;
    }
    .bottomHeightStyle {
        width: 750px;
        line-height: 50px;
        color: rgb(74, 144, 226);
        font-size: 20px;
        text-align: center;
    }
    .noneStyle {
        width: 750px;
        line-height: 50px;
        text-align: center;
    }
</style>
