<template>
    <div style="background-color: white">
        <div :style="mainStyle" class="assMainStyle">
            <div class="cellStyle" v-for="(item, i) in longDataList.list" :key="i">
                <div class="cellImgDiv" @click="imgeClick(item)">
                    <image :src="imgPath + item.iconUrl" class="cellImgStyle"></image>
                    <text class="cellLotteryStyle">{{item.name}}</text>
                </div>
                <div class="termDiv">
                    <div style="flex-direction: row;margin-top: 10px">
                        <text class="termTextStyle">{{item.openData.itTerm.term | termFilters }}期</text>
                        <text class="timerTextStyles">{{item.openData.itTerm.countSealTime | countdownFilter }}</text>
                    </div>
                    <div style="flex-direction: row;position: absolute">
                        <text class="playKindsStyle">{{item.payName}}</text>
                        <text class="bigSmalllStyle">{{item.data}}</text>
                        <text class="termStyle">{{item.number}}</text>
                    </div>
                </div>
                <div style="flex-direction: row;position: absolute;right: 10px;margin-top: 15px">
                    <div v-for="(selItem, j) in dataList[i].item" :key="j" @click="itemSelectClick(item, i, j)"
                         :class="[ selItem.itemNormal?'selectItemDiv':[selItem.itemSelected?'selectedRedDiv':'selectItemDiv']]"
                         style="margin-right: 15px">
                        <text :class="[selItem.itemNormal?'selectItemTextStyle':[selItem.itemSelected?'selectedItemSTextStyle':'selectedItemSTextGrayStyle']]">{{selItem.itemData}}</text>
                        <text :class="[selItem.itemNormal?'selectItemNormalTextRewardStyle':[selItem.itemSelected?'selectedItemSTextRewardStyle':'selectGrayStyle']]">奖{{selItem.odds}}</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottomstyle">
            <div class="bottomTopStyle">
                <text class="inputTitleStyle">每注</text>
                <input ref="input" class="inputStyle" type="number" maxlength="10" return-key-type="done" @input="oninput">
                <div class="winHeighDiv">
                    <text class="winHeighTextStyles">最高可中元</text>
                    <text class="winHeighNumStyles"> {{winHeighMoney}}</text>
                    <text class="winHeighTextStyles"> 元</text>
                </div>
            </div>
            <div class="bottomFooterStyle">
                <text class="clearBtnStyles" @click="clearBtnClick">清空</text>
                <div class="totalTextDiv">
                    <text class="totalTextStyle">共</text>
                    <text class="totalNumStyle">{{betNum}}</text>
                    <text class="totalTextStyle">注，</text>
                    <text class="totalNumStyle">{{betMoney}}</text>
                    <text class="totalTextStyle">元</text>
                </div>
                <div>
                    <text class="betBtnStyle" @click="betBtnClick">确认投注</text>
                </div>
            </div>
        </div>
        <wxc-loading :show="isLoadingShow" type="default" need-mask="false" :interval="intervalLoading"></wxc-loading>
        <!--提醒框-->
        <div style="width: 750px;height: 2000px;position: fixed;top: 0px;" v-if="show" @click="alertHidden">
        </div>
        <div class="maskBgStyle" v-if="show" @click="alertHidden">
            <div class="maskDiv" v-if="show">
                <div class="alertTotalDiv">
                    <text style="font-size: 40px">温馨提示</text>
                </div>
                <div class="alertContentDiv">
                    <div class="rowCenterStyle">
                        <text class="alertContentTextStyle" style="margin-left: 30px">{{getItemData.name}}: </text>
                        <text class="alertContentTextStyle">{{getItemData.openData.itTerm.term}}期</text>
                    </div>
                    <div class="rowCenterStyle">
                        <text class="alertContentTextStyle" style="margin-left: 30px">投注金额: </text>
                        <text class="alertContentTextNumStyle">{{betMoney}}元</text>
                    </div>
                    <div class="rowCenterStyle">
                        <text class="alertContentTextStyle" style="margin-left: 30px">投注内容: </text>
                        <text class="alertContentTextStyle">{{selectedG.betData}}</text>
                    </div>
                </div>
                <div class="alertBottomDiv">
                    <text class="alertCancelStyle" @click="alertHidden">取消</text>
                    <text class="alertSureStyle" @click="sureBetBtnClick">确定</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { WxcLoading, WxcOverlay } from 'weex-ui'
import global from '../Global'
const device = weex.config.env
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
module.exports = {
  props: {
  },
  components: { WxcLoading, WxcOverlay },
  data: () => ({
    token: '',
    SITEID: '',
    imgPath: '',
    getHeight: device.height,
    TIME: new Date().getTime(),
    itemSelected: true,
    itemNormal: true,
    isShow: false,
    intervalLoading: 0,
    mainStyle: {
      // backgroundColor: '#dff',
      // height: device.deviceHeight - 200 + 'px'
    },
    maskbgStyle: {
      opacity: 0.6,
      height: device.deviceHeight + 'px',
      width: device.dependenciesWarnings + 'px',
      background: '#000'
    },
    interval: null,
    dataList: [],
    callbackText: '',
    longDataList: {},
    selectedG: {playId: Number, type: Number, payName: ''},
    selectedI: Number,
    isRequest: false,
    winHeighMoney: 0,
    inputValue: 0,
    betNum: 0,
    betMoney: 0,
    getItemData: {},
    show: false,
    isLoadingShow: false,
    overlayCanClose: true,
    isFalse: false
  }),
  created () {
    let self = this
    self.imgPath = global.imgStorageUrl
    // 获取token
    let eventModule = weex.requireModule(global.eventModule)
    eventModule.getToken('token', function (res) {
      self.token = res.token
      self.SITEID = res.SITEID
      self.get_lotteryList()
    })
  },
  computed: {
    comDealData () {
    }
  },
  filters: {
    countdownFilter (time) {
      let getTime = '开奖中'
      let hh = 0
      let mm = 0
      let ss = 0
      if (time > 0) {
        // let dd = Math.floor(time / 60 / 60 / 24)
        hh = Math.floor((time / 60 / 60) % 24)
        mm = Math.floor((time / 60) % 60)
        ss = Math.floor(time % 60)
        // if (dd <= 9) dd = '0' + dd;
        if (hh <= 9) hh = '0' + hh
        if (mm <= 9) mm = '0' + mm
        if (ss <= 9) ss = '0' + ss
        getTime = hh + ':' + mm + ':' + ss
      } else {
        getTime = '开奖中'
      }
      return getTime
    },
    termFilters (e) {
      // 期号处理
      let term = e
      if (e.length > 8) {
        term = term.slice(4)
      }
      return term
    }
  },
  methods: {
    get_lotteryList () {
      let self = this
      // self.isLoadingShow = true
      if (self.isRequest === false) {
        self.isRequest = true
        stream.fetch({
          method: 'GET',
          url: global.longDragon,
          headers: { 'Content-Type': 'application/json', 'token': self.token, 'SITEID': self.SITEID },
          type: 'json'
        }, function (ret) {
          self.isRequest = false
          self.isLoadingShow = false
          if (ret.ok) {
            if (ret.data.code === 0) {
              self.longDataList = ret.data.data
              self.dealList(self.longDataList)
              if (self.interval) {
                clearInterval(self.interval)
              }
              self.countdown()
            } else if (ret.data.code === 109) {
              modal.toast({message: ret.data.message})
            } else {
              modal.toast({message: ret.data.message})
            }
          } else {
            // modal.toast({message: ret.statusText})
          }
        }, function (ret) {
        })
      }
    },
    imgeClick (e) {

    },
    // 数据处理
    dealList (e) {
      let self = this
      self.dataList.splice(0, self.dataList.length)
      for (let i = 0; i < e.list.length; i++) {
        // self.dealWithPlay(e.list[i], i)
        let isNormal = true
        let isSelected = true
        if (e.list[i].openData.itTerm.countSealTime === 0) {
          isNormal = false
          isSelected = false
        }
        if (e.list[i].playId === self.selectedG.playId &&
          e.list[i].payName === self.selectedG.payName &&
          e.list[i].type === self.selectedG.type &&
          e.list[i].openData.itTerm.countSealTime > 0) {
          isNormal = false
        }
        if (e.list[i].data === '小' || e.list[i].data === '大') {
          let itemArr = []
          let contentArr = ['大', '小']
          for (let j = 0; j < 2; j++) {
            if (j === self.selectedI && isNormal === false) {
              // isNormal = false
              isSelected = true
            } else {
              isNormal = true
            }
            itemArr.push({itemData: contentArr[j], odds: e.list[i].odds, itemNormal: isNormal, itemSelected: isSelected})
          }
          let obj = {item: itemArr}
          self.dataList.push(obj)
        } else if (e.list[i].data === '单' || e.list[i].data === '双') {
          let itemArr = []
          let contentArr = ['单', '双']
          for (let j = 0; j < 2; j++) {
            if (j === self.selectedI && isNormal === false) {
              // isNormal = false
              isSelected = true
            } else {
              isNormal = true
              // self.clearSelected()
            }
            itemArr.push({itemData: contentArr[j], odds: e.list[i].odds, itemNormal: isNormal, itemSelected: isSelected})
          }
          let obj = {item: itemArr}
          self.dataList.push(obj)
        }
        // // 期号处理
        // let term = self.longDataList.list[i].openData.itTerm.term
        // // self.longDataList.list[i].termlast = term
        // self.longDataList.list[i].termlast = term.slice(4)
      }
    },
    countdown () {
      let self = this
      self.interval = setInterval(() => {
        for (let i = 0; i < self.longDataList.list.length; i++) {
          if (self.longDataList.list[i].openData.itTerm.countSealTime > 0) {
            self.longDataList.list[i].openData.itTerm.countSealTime--
          } else {
            for (let j = 0; j < self.dataList[i].item.length; j++) {
              self.dataList[i].item[j].itemNormal = false
              self.dataList[i].item[j].itemSelected = false
            }
            let item = self.longDataList.list[i]
            if (self.selectedG.payName === item.payName &&
              self.selectedG.playId === item.playId &&
              self.selectedG.type === item.type) {
              self.clearBtnClick()
              self.alertHidden()
            }
            setTimeout(() => {
              self.get_lotteryList()
            }, 2000)
          }
        }
      }, 1000)
    },
    itemSelectClick (e, g, k) {
      let self = this
      if (e.openData.itTerm.countSealTime > 0) {
        for (let i = 0; i < self.dataList.length; i++) {
          for (let j = 0; j < self.dataList[i].item.length; j++) {
            if (i === g && j === k && self.dataList[g].item[k].itemNormal === false) {
              // self.dataList[i].item[j].itemNormal = false
              // self.dataList[i].item[j].itemSelected = true
            } else {
              self.dataList[i].item[j].itemNormal = true
              self.dataList[i].item[j].itemSelected = true
            }
          }
        }

        if (self.dataList[g].item[k].itemNormal === false) {
          self.dataList[g].item[k].itemNormal = true
          // 清除点击的按钮
          self.clearSelected()
        } else {
          self.dataList[g].item[k].itemNormal = false
          self.dataList[g].item[k].itemSelected = true
          // 记录点击的按钮
          self.selectedG.payName = e.payName
          self.selectedG.playId = e.playId
          self.selectedG.type = e.type
          self.selectedG.betData = self.dealBetData(e, self.dataList[g].item[k].itemData)
          self.selectedI = k
          self.getItemData = e
          // 设置数据
          if (self.inputValue > 0) {
            let value = self.inputValue * self.getItemData.odds
            self.winHeighMoney = value.toFixed(2) // 保留两位小数，四舍五入
            self.betNum = 1
            self.betMoney = self.inputValue
          }
        }
      }
    },
    clearSelected () {
      let self = this
      // 清除点击的按钮
      self.selectedG.payName = null
      self.selectedG.playId = null
      self.selectedG.type = null
      self.selectedG.betData = ''
      // self.selectedG = null
      self.selectedI = null
      self.getItemData = {}

      // self.inputValue = 0
      self.winHeighMoney = 0
      self.betNum = 0
      self.betMoney = 0
      // self.$el('input').event.input({value: ''})
      // self.oninput(self.$refs['input'])
      self.$refs['input'].value = ''
    },
    oninput (e) {
      let self = this
      if (self.getItemData) {
        if (e.value > 0) {
          self.inputValue = e.value
          let value = e.value * self.getItemData.odds
          self.winHeighMoney = value.toFixed(2) // 保留两位小数，四舍五入
          self.betNum = 1
          self.betMoney = e.value
        } else {
          self.inputValue = 0
          self.winHeighMoney = 0
          self.betNum = 0
          self.betMoney = 0
        }
      } else {
        self.inputValue = e.value
        self.betMoney = e.value
      }
    },
    clearBtnClick (e) {
      let self = this
      self.clearSelected()
      for (let i = 0; i < self.dataList.length; i++) {
        for (let j = 0; j < self.dataList[i].item.length; j++) {
          self.dataList[i].item[j].itemNormal = true
          self.dataList[i].item[j].itemSelected = true
        }
      }
    },
    betBtnClick (e) {
      let self = this
      if (self.getItemData === null || self.getItemData.length === 0 || self.selectedG.betData.length === 0) {
        modal.toast({message: '请选择号码'})
      } else if (self.inputValue === null || self.inputValue === 0) {
        modal.toast({message: '请输入投注金额倍数'})
      } else {
        this.show = true
      }
    },
    sureBetBtnClick () {
      let self = this
      self.show = false
      self.isLoadingShow = true
      let data = {0: {term: self.getItemData.openData.itTerm.term,
        money: self.betMoney,
        Amultiple: '1',
        number: self.betNum,
        data: self.selectedG.betData,
        lotterySitePlayId: self.getItemData.playId,
        selectOdds: 0,
        odds: 0}}
      let body = 'data=' + JSON.stringify(data) + '&term=' + self.getItemData.openData.itTerm.term +
        '&lotterySiteId=' + self.getItemData.lotterySiteId +
        '&equipment=' + 'WEEX_iOS' + '&stopTrack=' + '1' +
              '&termNumber=' + self.betNum
      stream.fetch({
        method: 'POST',
        url: global.postDoubleBet,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'token': self.token, 'SITEID': self.SITEID },
        type: 'json',
        body: body
      }, function (ret) {
        self.isLoadingShow = false
        if (ret.ok) {
          modal.alert({message: '投注成功', okTitle: '确定'})
        } else {
          modal.toast({message: ret.statusText})
        }
        self.clearBtnClick()
      }, function (ret) {

      })
    },
    dealBetData (item, betData) {
      if (item && betData) {
        let data = ''
        if (item.lotterySpecieId === 1) { // 时时彩 6
          let sscDigits = item.sscDigits
          if (sscDigits > 0) {
            for (let i = 0; i < 6; i++) {
              if (sscDigits === i) {
                if (i === 5) {
                  data = data + betData
                } else {
                  data = data + betData + '|'
                }
              } else {
                if (i === 5) {
                  data = data + '-'
                } else {
                  data = data + '-|'
                }
              }
            }
          }
        } else if (item.lotterySpecieId === 4) { // pk10
          let pksDigits = item.pksDigits
          if (pksDigits > 0) {
            for (let i = 1; i <= 10; i++) {
              if (pksDigits === i) {
                if (i === 10) {
                  data = data + betData
                } else {
                  data = data + betData + '|'
                }
              } else {
                if (i === 10) {
                  data = data + '-'
                } else {
                  data = data + '-|'
                }
              }
            }
          }
        } else if (item.lotterySpecieId === 2) { // 快3
          data = betData
        } else {
          data = betData
        }
        return data
      }
    },
    alertHidden () {
      this.show = false
    }
  },
  beforedestroy () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  destroyed () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
</script>

<style scoped>
    .assMainStyle {
        margin-bottom: 300px;
    }
    .cellStyle {
        flex-direction: row;
        height: 140px;
        border-bottom-width: 2px;
        border-bottom-color: #f5f5f5;
        border-bottom-style: solid;
    }
    .cellImgDiv {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
    .cellImgStyle {
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
    .cellLotteryStyle {
        width: 120px;
        line-height: 50px;
        text-align: center;
        font-size: 23px;
        color: #333333;
    }
    .termDiv {
        height: 140px;
        flex-direction: column;
        /*position: absolute;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        margin-left: 10px;
    }
    .termTextStyle {
        color: #333;
        text-align: center;
        line-height: 60px;
        font-size: 24px;
    }
    .playKindsStyle {
        color: #fff;
        font-size: 24px;
        line-height: 45px;
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #c6c6c6;
        border-radius: 5px;
    }
    .bigSmalllStyle {
        color: #fff;
        font-size: 24px;
        line-height: 45px;
        text-align: center;
        padding-left: 12px;
        padding-right: 12px;
        background-color: #ff9726;
        margin-left: 20px;
        border-radius: 5px;
    }
    .termStyle {
        color: #fff;
        font-size: 24px;
        line-height: 45px;
        text-align: center;
        padding-left: 12px;
        padding-right: 12px;
        background-color: #dc3b40;
        margin-left: 20px;
        border-radius: 5px;
    }
    .selectItemDiv {
        width: 140px;
        height: 110px;
        border-radius: 10px;
        border-width: 1px;
        border-radius: 10px;
        border-color: #ddd;
        border-style: solid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .selectItemTextStyle {
        width: 140px;
        line-height: 60px;
        font-size: 40px;
        color: #dc3b40;
        text-align: center;
    }
    .selectItemNormalTextRewardStyle {
        width: 140px;
        line-height: 40px;
        font-size: 25px;
        color: #666;
        text-align: center;
    }
    .selectItemSTextRewardStyle {
        width: 140px;
        line-height: 40px;
        font-size: 25px;
        color: #fff;
        text-align: center;
    }
    .selectedRedDiv {
        width: 140px;
        height: 110px;
        border-radius: 10px;
        border-width: 1px;
        border-radius: 10px;
        border-color: #c92020;
        background-color: #dc3b40;
        border-style: solid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .selectGrayStyle {
        width: 140px;
        line-height: 40px;
        font-size: 25px;
        color: #eee;
        text-align: center;
    }
    .selectedItemSTextGrayStyle {
        width: 140px;
        line-height: 60px;
        font-size: 40px;
        color: #eee;
        text-align: center;
    }
    .selectedItemSTextStyle {
        width: 140px;
        line-height: 60px;
        font-size: 40px;
        color: #fff;
        text-align: center;
    }
    .selectedItemSTextRewardStyle {
        width: 140px;
        line-height: 40px;
        font-size: 25px;
        color: #fff;
        text-align: center;
    }
    .timerTextStyles {
        font-size: 25px;
        color: #e4161c;
        margin-top: 15px;
        margin-left: 5px;
        width: 130px;
    }
    .bottomstyle {
        height: 200px;
        width: 750px;
        background-color: #333;
        position: fixed;
        bottom: 0px;
        border-top-color: #f6f6f6;
        border-top-width: 1px;
        border-top-style: solid;
        flex-direction: column;
    }
    .bottomTopStyle {
        height: 90px;
        width: 750px;
        background-color: white;
        flex-direction: row;
    }
    .bottomFooterStyle {
        height: 110px;
        width: 750px;
        flex-direction: row;
    }
    .inputTitleStyle {
        line-height: 90px;
        text-align: center;
        margin-left: 20px;
    }
    .inputStyle {
        width: 150px;
        height: 60px;
        border-width: 2px;
        border-color: #d2d2d2;
        border-style: solid;
        border-radius: 5px;
        margin-left: 20px;
        margin-top: 15px;
        text-align: center;
        line-height: 60px;
    }
    .winHeighDiv {
        width: 300px;
        line-height: 90px;
        text-align: center;
        font-size: 25px;
        margin-left: 40px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .winHeighTextStyles {
        line-height: 90px;
        text-align: center;
        font-size: 25px;
        color: #777;
    }
    .winHeighNumStyles {
        line-height: 90px;
        text-align: center;
        font-size: 25px;
        color: #d24c4e;
    }
    .clearBtnStyles {
        line-height: 110px;
        width: 240px;
        text-align: center;
        /*font-size: 35px;*/
        font-weight: bold;
        color: white;
        border-right-width: 1px;
        border-right-color: #222;
        border-right-style: solid;
    }
    .totalTextDiv {
        width: 270px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .totalTextStyle {
        color: white;
        line-height: 110px;
        font-weight: bold;
    }
    .totalNumStyle {
        color: rgb(255, 163, 25);
        line-height: 110px;
        font-weight: bold;
    }
    .betBtnStyle {
        width: 240px;
        line-height: 110px;
        color: white;
        text-align: center;
        font-weight: bold;
        background-color: #e54042;
    }
    .maskDiv {
        width: 520px;
        margin-left: 115px;
        background-color: white;
        border-radius: 10px;
        position: fixed;
        top: 400px;
    }
    .alertTotalDiv {
        width: 520px;
        height: 60px;
        border-radius: 5px;
        border-bottom-width: 1px;
        border-bottom-color: #f5f5f5;
        border-bottom-style: solid;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .alertContentDiv {
        width: 520px;
        height: 200px;
        border-radius: 5px;
        border-bottom-width: 1px;
        border-bottom-color: #f5f5f5;
        border-bottom-style: solid;
        justify-content: center;
        align-items: center;
    }
    .alertBottomDiv {
        width: 520px;
        height: 80px;
        border-radius: 5px;
        flex-direction: row;
    }
    .alertCancelStyle {
        width: 260px;
        line-height: 80px;
        border-bottom-left-radius: 5px;
        border-top-width: 1px;
        border-top-color: #f1f1f1;
        border-top-style: solid;
        border-right-width: 1px;
        border-right-color: #f1f1f1;
        border-right-style: solid;
        color: #999;
        text-align: center;
    }
    .alertSureStyle {
        width: 260px;
        line-height: 80px;
        border-bottom-right-radius: 5px;
        border-top-width: 1px;
        border-top-color: #f1f1f1;
        border-top-style: solid;
        color: #4a95e4;
        text-align: center;
    }
    .alertContentTextStyle {
        color: #666;
        line-height: 40px;
        /*text-align: center;*/
        font-size: 25px;
    }
    .alertContentTextNumStyle {
        color: red;
        line-height: 40px;
        /*text-align: center;*/
        font-size: 25px;
    }
    .rowCenterStyle {
        flex-direction: row;
    }
    .maskBgStyle {
        width: 750px;
        height: 3000px;
        position: fixed;
        top: 0px;
        background-color: black;
        opacity: 0.6;
    }
</style>
