<template>
    <!--weex ui-->
    <wxc-mask :show="overlayMask"
              height="400"
              width="690"
              top="260"
              mask-bg-color="#FFFFFF"
              @wxcMaskSetHidden="wxcMaskBodyClicked">
        <div>
            <image style="margin-left: 0px; width: 690px;height: 500px;position: absolute" src="../dist/prizeRecordListBg.png">
                <div style="height: 50px;flex-direction: row">
                    <text class="recordItemTitleStyle">我的中奖</text>
                    <text class="recordItemTitleStyle" style="margin-left: 530px" @click="wxcMaskBodyClicked">X</text>
                </div>

                <list style="height: 400px" >
                    <cell v-for="(item, i) in personRecord" :key="i">
                        <div class="recordItemDiv" v-if="i==0">
                            <text class="itemCellStyle">奖项</text>
                            <text class="itemCellStyle">中奖时间</text>
                            <text class="itemCellStyle">是否派送</text>
                        </div>
                        <div class="recordItemDiv">
                            <text class="itemCellStyle">{{item.money}}元现金筹码</text>
                            <text class="itemCellStyle">{{item.created_at}}</text>
                            <text class="itemCellStyle">{{item.status | statusTest }}</text>
                        </div>
                    </cell>
                </list>
            </image>
        </div>
    </wxc-mask>
</template>

<script>
import { WxcMask } from 'weex-ui'
module.exports = {
  components: { WxcMask },
  props: {
    personRecord: [],
    overlayMask: false
  },
  data: () => ({
    overlayMask: false
  }),
  // 过滤数据
  filters: {
    statusTest (e) {
      var getTest
      switch (e) {
        case 0 :
          getTest = '未审核'
          break
        case 1 :
          getTest = '已审核'
          break
        case 2 :
          getTest = '已拒绝'
          break
        default:
          getTest = '未审核'
      }
      return getTest
    }
  },
  methods: {
    wxcMaskBodyClicked () {
      this.overlayMask = false
    }
  }
}
</script>

<style scoped>
    .recordItemDiv {
        height: 50px;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }
    .recordItemTitleStyle {
        font-size: 25px;
        font-weight: 200;
        color: #FFEA00;
        text-align: center;
    }
    .itemCellStyle{
        font-size: 25px;
        width: 200px;
        color: white;
        border-width: 2px;
        border-color: #dd0002;
        text-align: center;
    }
</style>
