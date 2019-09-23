import Vue from 'vue'
import Router from 'vue-router'
import HelloBall from '@/components/HelloBall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloBall',
      component: HelloBall
    }
  ]
})
