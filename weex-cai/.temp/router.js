import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import namesss from '@/components/nameasdf'
import ActivityDetailsController from '@/ActivityDetailsController'
// import assistantbet from './assistant/longExplainController.vue'
// import GCanvas from 'weex-gcanvas'
//
// Vue.component('gcanvas', GCanvas)

// import lottery from 'vue-lottery'
// Vue.use(lottery)
Vue.use(Router)

module.exports = new Router({
  routes: [
    // {
    //   path: '/assistant',
    //   name: 'assistantbet',
    //   component: assistantbet
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'namesss',
      component: namesss
    },
    {
      path: '/',
      name: 'ActivityDetailsController',
      component: ActivityDetailsController
    }
  ]
})
