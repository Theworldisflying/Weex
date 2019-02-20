<template>
<div>
    <!--活动详情活动声明-->
    <div v-if="isDetailsClick">
        <text class="statementContentStyles" style="margin-top: 10px">    ➊、活动时间:每周六00:00开始,活动结束时间:每周日23:59。符合条件的会员请在次日15:00~ 24:OO到此页面参与抽奖!</text>
        <text class="statementContentStyles">    ❷、当曰首笔网银充值计算周期采用北京时间进行计算,即北京时间每天_上午00点至隔天上午00点。</text>
        <text class="statementContentStyles">    ❸、如果您的当日首笔网银充值达到抽奖条件,即可在次日抽奖时间内开始抽奖，且需在抽奖时间内完成抽奖,否则视为放弃活动资格。</text>
        <text class="statementContentStyles">    ❹、除现金筹码以外奖品，从中奖之日起,一个星期未进行申请,将视为自动放弃中奖资格,逾期将无法申请。</text>
        <text class="statementContentStyles">    ❺、每位会员IP下注册多个账号进行充值抽奖,公司有权拒绝赠送其彩金并做账号冻结处理,保证正常玩家的利益。</text>
        <text class="statementContentStyles">    ❻、获得“现金筹码”的1倍流水才能出款，获得"现金筹码” 的会员无需申请,系统将在两小时内自动添加到您的会员账户内，请耐心等待; (注:当会员抽取”现金筹码”奖项,如若需放弃请联系在线客服专员进行处理,否则将视为您同意抽奖条件)。</text>
        <text class="statementContentStyles">    ❼、此活动为[彩33]系统程序自动运，行,获奖的概率完全遵循力学及自然概率,不涉及任何人工操作,抽奖结果以系统判定为准,不得争议。</text>
    </div>
    <div v-else>
        <text class="statementContentStyles" style="margin-top: 10px">    ➊、所有红利为随机派送，如系统发生一些不可预测超出本站控制之 外的技术错误，或人为不可控制的因素，则彩33保留最终解释权和处理权。</text>
        <text class="statementContentStyles">    ❷、玩家不可以使用多账户参加本次活动,凡同-IP地址、同-姓名、同银行账户，同一联系方式，同-邮箱、同一-电脑均视为同账户,彩33在会员重复申请账号时,保留取消、收回会员相关优惠。</text>
        <text class="statementContentStyles">    ❸、无论是个人或团体,如有任何威胁、滥用或使用不诚实方式套利的行为，经彩 33风险部门审核,公司有权取消该会员所有优惠</text>
        <text class="statementContentStyles">    ❹、本活动最终解释权归属彩33所有,并保留修改以上条款的最终权利。</text>
    </div>
</div>
</template>

<script>

module.exports = {
  props: {
    isDetailsClick: true
  }
}
</script>

<style scoped>
    .statementContentStyles{
        width: 650px;
        font-size: 30px;
        color: #666666;
        text-indent: 20px;
    }
    .bottomShadowStyle{
        width: 550px;
        height: 150px;
        margin-top: 100px;
        margin-left: 100px;
        background-image:linear-gradient(to bottom,#8A8A8A,#efeff4);
        /*box-shadow: inset 0px 0px 5px #BFBFBF; !*box-shadow 仅支持iOS*!*/
    }
</style>
