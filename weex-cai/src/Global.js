const eventModule = 'WXEventModule'
const testDomainName = 'http://192.168.5.100:8082/'
// const mainDomainName = 'http://www.cai33356.com/storage/ios/'
const domainName = testDomainName
const test = 'http://www.cai33356.com/'
// const main = 'https://www.c33372.com/'
const domain = test
// // 图片路径
// const imgPath = testDomainName + 'dist/Asset/'
// // 二级文件下图片路径
// const nextLevelImgPath = imgPath
// 图片路径
const imgPath = domain + 'storage/ios/dist/Asset/'
// 二级文件下图片路径
const nextLevelImgPath = imgPath
// 图片
const imgStorageUrl = domain + 'storage/'
// 活动首页
const activityHomeUrl = domain + 'api/activity/activityListNew'
// 活动详情
const activityListUrl = domain + 'api/activity/activityList'
// 奖励领取
const postClickReceiveUrl = domain + 'api/activity/clickReceive'
// 幸运抽奖
const postWheelLuckUrl = domain + 'api/lucky/clickLucky'
// 幸运抽奖中奖列表
const theWinnersUrl = domain + 'api/lucky/theWinners'
// 幸运抽奖中奖记录
const theWinnersOneUrl = domain + 'api/lucky/theWinnersOne'
// 签到数据获取
const userSignWebList = domain + 'api/userSign/userSignWebList'
// 签到
const postUserSighAdd = domain + 'api/userSign/userSighAdd'
// 签到领取
const postApplyForMoney = domain + 'api/userSign/applyForMoney'
// 签到宝箱领取记录
const userSignHas = domain + 'api/userSign/userSignHas'
// 长龙助手获取数据
const longDragon = domain + 'api/longDragon'
// 投注
const postDoubleBet = domain + 'api/lottery/doubleBet'
// 余额
const latestWithdraw = domain + 'api/latestWithdraw'
// 最近投注
const recentlyBet = domain + 'api/recentlyBet'
module.exports = {
  eventModule,
  imgPath,
  nextLevelImgPath,
  domainName,
  imgStorageUrl,
  activityHomeUrl,
  activityListUrl,
  postClickReceiveUrl,
  postWheelLuckUrl,
  theWinnersUrl,
  theWinnersOneUrl,
  userSignWebList,
  postUserSighAdd,
  postApplyForMoney,
  userSignHas,
  longDragon,
  postDoubleBet,
  latestWithdraw,
  recentlyBet
}
