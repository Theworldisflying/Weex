<template>
    <div class="mainDiv">
        <text>fsadfafasfadfsadsasdadsdfafadafdxfsdfasdfsk;df';alskdjfh;ja'fa</text>
        <!--<list class="list">-->
            <!--<cell class="cell" v-for="item in getResult.data.list" :key="item.id">-->
                <!--<div class="cellContentDiv">-->
                    <!--<image class="imageView" :src="['https://www.c33372.com/storage/'+item.cover]" placeholder=""></image>-->
                    <!--<text class="cellContent">{{item.title}}</text>-->
                    <!--<text class="cellContent">{{item.describe}}</text>-->
                <!--</div>-->
            <!--</cell>-->
        <!--</list>-->
        <!--<text style="width: 750px">{{getResult.data.list[0].id}}</text>-->
    </div>

</template>

<script>

// const  app = new Vue({
//
// })
var stream = weex.requireModule('stream')
module.exports = {
  data: function () {
    return {
      getResult: {
        code: '',
        message: '',
        data: {
          list: [
            {
              id: '',
              title: '',
              cover: '',
              describe: '',
              content: '',
              siteId: '',
              created_time: '',
              updated_time: '',
              status: '',
              type: '',
              weights: ''

            }
          ]
        }
      }
    }
  },
  created: function () {
    var me = this
    var GET_URL = 'http://cai33356.com/api/activity/activityListNew'
    stream.fetch({
      method: 'GET',
      url: GET_URL,
      type: 'json'
    }, function (ret) {
      if (!ret.ok) {
        me.getResult = 'request failed'
      } else {
        console.log('get:' + ret)
        me.getResult = ret.data
      }
    }, function (response) {
      console.log('get in progress:' + response.length)
      me.getResult = 'bytes received:' + response.length
    })
  }
}

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
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px #dddddd;
        border-radius: 5px;
    }
    .content{
        flex-direction: row;
    }
    .cellContentDiv{
        width: 710px;
        background-color: white;
    }
    .cellContent{
        width: 710px;
        color: black;
        margin-left: 10px;
        font-size: 22px;
    }
    .imageView{
        width: 710px;
        height: 200px;
    }

  .panel {
    width: 600px;
    height: 250px;
    margin-left: 20px;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
      border: 2px rgb(162, 217, 192);
      background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>
