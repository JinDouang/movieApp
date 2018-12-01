import Vue from 'vue'
import Router from 'vue-router'
import Discover from '@/pages/Discover.vue'
import New from '@/pages/New.vue'
import About from '@/pages/About.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'popular',
      component: require("@/pages/Popular.vue").default // load sync home
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
