<template>
    <div class="lottery_wraper">
        <div class="lottery_bg">
            <image class="bgImageStyle" :src="lottery_bg"></image>
        </div>
        <div class="lottery_Content" :style="{width:lottery_width[0]}">
            <image class="bgContentImageStyle" v-if="angle>0" v-bind:style="{ transform: 'rotate3d(0,0,1,'+angle+'deg)'}" id="turntable" :src="content_bg"></image>
            <image class="bgContentImageStyle" v-else id="lottery_turntable" :src="content_bg"></image>
        </div>
        <div class="lottery_pointer" :style="{width:lottery_width[1]}" @click="clickLottery">
            <image class="bgPointerImageStyle" :src="pointer_bg"></image>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      angle: this.lotteryAngle, // 初始度数
      acceleration: 0.5, // 加速的加速度0.5
      r_acceleration: 0.1, // 减速的加速度0.1
      firstTimes: 48, // 48次
      prizeNum: this.lotteryPrizenum,
      lottery_bg: this.lotteryBg, // 外圈背景
      content_bg: this.contentBg, // 内容背景
      pointer_bg: this.pointerBg, // 指针背景
      lottery_width: this.lotteryWidth
    }
  },
  props: {
    lotteryAngle: {
      type: Number,
      default: 0
    },
    lotteryStart: {
      type: Number,
      default: 0
    },
    lotteryPrizenum: {
      type: Number,
      required: true
    },
    lotteryPrizeno: {
      type: Number,
      required: true
    },
    lotteryBg: {
      type: String
    },
    contentBg: {
      type: String,
      required: true
    },
    pointerBg: {
      type: String,
      required: true
    },
    lotteryWidth: {
      type: Array,
      default: function () {
        return ['85%', '35%']
      }
    }
  },
  watch: {
    start () {
      if (this.start >= 1) {
        this.startRotate()
      }
    }
  },
  computed: {
    difference () {
      return (this.prizeNo / this.prizeNum) * 360 - 360 / this.prizeNum / 2
    },
    prizeNo () {
      return this.lotteryPrizeno
    },
    start () {
      return this.lotteryStart
    }
  },
  methods: {
    clickLottery () {
      this.$emit('lotteryClick')
      this.startRotate()
    },
    startRotate () {
      var self = this
      var difference = this.difference
      var speed = 0
      var acceleration = self.acceleration // 加速的加速度
      var racceleration = self.r_acceleration // 减速的加速度
      var firstTimes = self.firstTimes //  执行48次 加速到highSpeed
      var highSpeed = firstTimes * acceleration // 最高速度
      var oneAngel = self.angle + firstTimes * (firstTimes - 1) / 2 * acceleration + highSpeed // 第一阶段的旋转度数
      var secondTimes = 10 // 速度为highSpeed 继续执行10次
      var twoAngel = oneAngel + secondTimes * firstTimes * acceleration // 第二阶段的旋转度数
      var three = highSpeed / racceleration // 执行three次 速度从highSpeed减速到0
      var add = 360 - (twoAngel + three * (three - 1) / 2 * racceleration) % 360 + difference // 使最后刚好转到起点位置
      var twoAngelEnd = twoAngel + add // 第三阶段开始
      var threeAngel = twoAngelEnd + three * (three - 1) / 2 * racceleration // 最后的旋转度数
      function cicle () {
        if (self.angle < oneAngel) {
          speed += acceleration
          self.angle += speed
        } else if (self.angle >= oneAngel && self.angle < twoAngel) {
          self.angle += speed
        } else if (self.angle.toFixed(2) === twoAngel.toFixed(2)) {
          self.angle += add
        } else if (self.angle > twoAngel && self.angle <= threeAngel) {
          speed -= racceleration
          if (speed <= 0) {
            speed = 0
            self.angle = threeAngel % 360
            self.flag = true
            self.$emit('lotteryDone', {
              prizeNo: self.prizeNo,
              prizeNum: self.prizeNum
            })
            return false
          }
          self.angle += speed
        }
        requestAnimationFrame(cicle)
      }
      cicle()
    }
  }
}
</script>

<style scoped>
    .lottery_wraper{
        /*position: relative;*/
        /*max-width: 500px;*/
        width: 200px;
        height: 200px;
    }
    /*.lottery_wraper image{*/
        /*width: 100%;*/
    /*}*/
    .lottery_Content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    .lottery_pointer{
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    .bgImageStyle{
        width: 300px;
        height: 300px;
    }
    .bgContentImageStyle{
        width: 260px;
        height: 260px;
    }
    .bgPointerImageStyle{
        width: 100px;
        height: 100px;
    }

</style>
