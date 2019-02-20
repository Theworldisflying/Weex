<template>
<div>
    <!--抽奖条件-->
    <!--条件一-->
    <div class="secTitleDiv">
        <text class="textSecTitleStyles">条件一：</text>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日新增1位下级</text>
            <text class="textContentRedStyles">首冲36元以上</text>
            <text class="textContentBlackStyles">次日可抽奖</text>
            <text class="textContentRedStyles">1次</text>
        </div>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日新增N位下级新增</text>
            <text class="textContentRedStyles">首冲36元以上</text>
            <text class="textContentBlackStyles">次日可抽奖</text>
            <text class="textContentRedStyles">N次</text>
        </div>
    </div>
    <!--条件二-->
    <div class="secTitleDiv">
        <text class="textSecTitleStyles">条件二：</text>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日首笔网银充值达到</text>
            <text class="textContentRedStyles">1000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">1次</text>
        </div>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日首笔网银充值达到</text>
            <text class="textContentRedStyles">5000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">3次</text>
        </div>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日首笔网银充值达到</text>
            <text class="textContentRedStyles">10000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">8次</text>
        </div>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日首笔网银充值达到</text>
            <text class="textContentRedStyles">50000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">16次</text>
        </div>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日首笔网银充值达到</text>
            <text class="textContentRedStyles">100000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">32次</text>
        </div>
    </div>
    <!--条件三-->
    <div class="secTitleDiv">
        <text class="textSecTitleStyles">条件三：</text>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日有效投注达到</text>
            <text class="textContentRedStyles">3000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">1次</text>
        </div>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日有效投注达到</text>
            <text class="textContentRedStyles">10000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">2次</text>
        </div>
        <div class="textContentDivStyles">
            <text class="textContentBlackStyles">当日有效投注达到</text>
            <text class="textContentRedStyles">50000+</text>
            <text class="textContentBlackStyles">可抽奖</text>
            <text class="textContentRedStyles">3次</text>
        </div>
    </div>
    <div class="secTitleDiv">
        <text class="textContentAlertRedStyles">【注：抽奖次数可叠加抽奖，无上限!】抽奖前请仔细阅读“抽奖规则”</text>
    </div>
</div>
</template>

<script>
// import global from './Global'
module.exports = {
  data: () => ({

  }),
  created () {
  }
}
</script>

<style scoped>
    /*抽奖条件*/
    .luckyDrawConditionsDiv{
        margin-top: 60px;
        flex-direction: row;
        position: relative;
    }
    /*条件div*/
    .secTitleDiv{
        margin-top: 20px;
    }
    .textSecTitleStyles{
        font-size: 26px;
        margin-left: 50px;
        height: 50px;
        color: #FF0000;
    }
    .textContentDivStyles{
        flex-direction: row;
        margin-left: 40px;
    }
    .textContentRedStyles{
        font-size: 26px;
        margin-left: 50px;
        margin-left: 0px;
        padding-left: 0px;
        border-left: 0px;
        color: #FF0000;
    }
    .textContentBlackStyles{
        font-size: 26px;
        margin-left: 50px;
        margin-left: 0px;
        padding-left: 0px;
        border-left: 0px;
        color: #666666;
    }
    .textContentAlertRedStyles{
        font-size: 26px;
        margin-left: 10px;
        width: 650px;
        color: #FF0000;
    }
</style>
