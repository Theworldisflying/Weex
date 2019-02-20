<template>
    <div class="mainStyle">
        <div class="rowStyle" v-for="data in item" :key="data">
            <text class="titleStyle">{{data.title + "："}}</text>
            <text class="contentStyle" v-if="login">{{data.value}}</text>
            <text class="contentLogin" v-else>{{data.value}}</text>
        </div>
        <!--<div class="rowStyle" v-for="data in item.ext_two" :key="data" v-if="item.id==8">-->
            <!--<text class="titleStyle">{{data.title + ":"}}</text>-->
            <!--<text class="contentStyle" v-if="login">{{data.value}}</text>-->
            <!--<text class="contentLogin" v-else>{{data.value}}</text>-->
        <!--</div>-->

    </div>

</template>

<script>
module.exports = {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  created () {
    let self = this
    if (self.data.status === '1') {
      self.login = false
    } else {
      self.login = true
    }
  },
  data () {
    return {
      login: true
    }
  }

}
</script>

<style scoped>
    .mainStyle{
        width: 750px;
        background-color: white;
    }
    .rowStyle{
        margin-left: 10px;
        flex-direction: row;
    }
    .titleStyle{
        color: #333333;
        font-size: 30px;
    }
    .contentStyle{
        color: rgb(237,4,4);
        font-size: 30px;
    }
    .contentLogin{
        color: #333333;
        font-size: 30px;
    }

</style>
