import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import X from '@/components/x'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'X',
      component: X
    }
  ]
})
