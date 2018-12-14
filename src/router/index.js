import Vue from 'vue'
import Router from 'vue-router'
import Discover from '@/pages/Discover.vue'
import New from '@/pages/New.vue'
import TopRated from '@/pages/TopRated.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'popular',
      component: require("@/pages/Popular.vue").default,
      meta: {title: 'Popular'}// load sync home
    },
    {
      path: '/new',
      name: 'new',
      component: New,
      meta: {title: 'New'}
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover,
      meta: {title: 'Discover'}
    },
    {
      path: '/top',
      name: 'top',
      component: TopRated,
      meta: {title: 'Top'}
    }
  ]
})
