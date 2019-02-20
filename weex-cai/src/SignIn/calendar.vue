<template>
    <div>
        <div class="calendarTitleDiv">
            <text class="calendarTitleStyles">日</text>
            <text class="calendarTitleStyles">一</text>
            <text class="calendarTitleStyles">二</text>
            <text class="calendarTitleStyles">三</text>
            <text class="calendarTitleStyles">四</text>
            <text class="calendarTitleStyles">五</text>
            <text class="calendarTitleStyles">六</text>
        </div>
        <!--调用计算属性-->
        <text>{{ob}}</text>
        <div class="calendarDiv" v-for="(itemArr, i) in dateArr" :key="i">
            <div class="calendarStyleDiv" v-for="item in itemArr" :key="item">
                <text class="calendarStyle" v-if="item.selectStatus === 1 && item.date > 0">{{ item.date }}</text>
                <text class="calendarSelStyle" v-if="item.selectStatus === 2 && item.date > 0">{{item.date}}</text>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
  props: {
    dataObject: Object
  },
  data: () => ({
    curYear: Number,
    dateArr: Array,
    selectArr: Array,
    firstWeekDay: Number,
    daysOfMonth: Number,
    dataObject: this.dataObject
  }),
  created () {
    this.calendarMothod()
  },
  watch: {
    // dataObject (e) {
    //   // this.$emit('update', e)
    //   let arr = e.timeArray
    //   if (e) {
    //     // 从i + firstWeekDay 位开始更改日期数组中的状态，更改长度为arr的长度，
    //     // dateArr.length - arr.length - firstWeekDay 之后的数组元素为日历最后一行非日期元素
    //     for (let i = 0; i < arr.length; i++) {
    //       // 获取当前行数
    //       let row = Math.floor((i + 1 + this.firstWeekDay + 1) / 7)
    //       // 获取当前行数的列数
    //       let column = (i + 1 + this.firstWeekDay + 1) % 7
    //       // 获取服务器获取的数组中的数字
    //       let num = arr[i]
    //       if (i === 20) {
    //         // 更改日期中对应的对象的状态
    //         this.dateArr[row][column].selectStatus = 2
    //       } else {
    //         // 更改日期中对应的对象的状态
    //         this.dateArr[row][column].selectStatus = num
    //       }
    //     }
    //   }
    //   // console.log('=========arrasdfadsf=====' + JSON.stringify(e) + '=====' + JSON.stringify(this.dateArr))
    // },
    // dateArr (e) {
    //   // console.log('=========ar22222=====' + JSON.stringify(this.dataObject))
    // }
  },
  computed: {
    ob () {
      let arr = this.dataObject.timeArray
      if (this.dataObject.timeArray) {
        // 从i + firstWeekDay 位开始更改日期数组中的状态，更改长度为arr的长度，
        // dateArr.length - arr.length - firstWeekDay 之后的数组元素为日历最后一行非日期元素
        for (let i = 0; i < arr.length; i++) {
          // 获取当前行数
          let row = Math.floor((i + this.firstWeekDay + 1) / 7)
          // 获取当前行数的列数
          let column = (i + this.firstWeekDay) % 7
          // 获取服务器获取的数组中的数字
          let num = arr[i]
          // 更改日期中对应的对象的状态
          this.dateArr[row][column].selectStatus = num
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    calendarMothod () {
      let self = this
      let curTime = new Date()
      self.curYear = curTime.getFullYear()
      let curMonth = curTime.getMonth()
      // 设置当前月的1号
      let firstDayInMonth = new Date(self.curYear, curMonth, 1)
      // 获取当前月1号在星期几
      let firstWeekDay = firstDayInMonth.getDay()
      // 获取当前月的最后一天; 0 是上个月的最后一天
      let lastDayInMonth = new Date(self.curYear, curMonth + 1, 0)
      // 根据当前月的最后一天 获取当前月的天数
      let daysOfMonth = lastDayInMonth.getDate()

      self.firstWeekDay = firstWeekDay
      self.daysOfMonth = daysOfMonth
      let totalArr = []
      // 获取当前月有多少行 ceil向上舍入
      let calendarRows = Math.ceil((firstWeekDay + daysOfMonth) / 7)
      for (let i = 0; i < calendarRows; i++) {
        let arr = []
        let status = 1
        for (let j = 0; j < 7; j++) {
          // 第一行填入1号之前的空数据
          if (i === 0) { // 第一行
            // 如果j是小于当前月的1号是星期几的天数，则添加空元素，否则添加日期数
            if (j < firstWeekDay) {
              let data = {date: '', selectStatus: status}
              arr.push(data)
            } else {
              // self.timeArray[j - firstWeekDay] 取对应日期的状态
              let data = {date: j + 1 - firstWeekDay, selectStatus: status}
              arr.push(data)
            }
          } else if (i === calendarRows - 1) { // 最后一行
            // console.log('======totalArr.length=====' + totalArr.length)
            // 当前totalArr的所有元素 + 当前arr的所有元素 如果小于当前月1号是星期几 + 这月的总天数 则继续添加日期，否则添加空元素
            if (totalArr.length * 7 + arr.length < firstWeekDay + daysOfMonth) {
              let data = {date: i * 7 + j + 1 - firstWeekDay, selectStatus: status}
              arr.push(data)
            } else {
              let data = {date: '', selectStatus: status}
              arr.push(data)
            }
          } else {
            let data = {date: i * 7 + j + 1 - firstWeekDay, selectStatus: status}
            arr.push(data)
          }
        }
        totalArr.push(arr)
      }
      this.dateArr = totalArr
      // setTimeout(() => {
      //   console.log('=========arr1=====' + JSON.stringify(this.dataObject))
      // }, 1000)
    }
    // // 判断平年还是闰年
    // isLeapYear () {
    //   let self = this
    //   return (self.curYear % 400 === 0) || ((self.curYear % 4 === 0) && (self.curYear % 100 !== 0))
    // }
  }
}
</script>

<style scoped>
    .calendarTitleDiv{
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .calendarTitleStyles{
        width: 100px;
        height: 50px;
        color: black;
        font-size: 35px;
        text-align: center;
    }
    .calendarDiv {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
    .calendarStyleDiv {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 80px;
    }
    .calendarStyle {
        width: 50px;
        height: 50px;
        background-color: white;
        font-size: 35px;
        color: black;
        text-align: center;
        line-height: 50px;
        border-radius: 25px;
    }
    .calendarSelStyle {
        width: 50px;
        height: 50px;
        background-color: #FF7C34;
        font-size: 35px;
        color: white;
        text-align: center;
        line-height: 50px; /*设置行高使文字垂直居中*/
        border-radius: 25px;
    }
</style>
