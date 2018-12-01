import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Popular',
      component: require("@/pages/Popular.vue").default // load sync home
    },
    {
      path: '/new',
      name: 'New',
      component: require("@/pages/New.vue")
    },
    {
      path: '/discover',
      name: 'Discover',
      component: require("@/pages/Discover.vue")
    },
    {
      path: '/about',
      name: 'About',
      component: require("@/pages/About.vue")
    }
  ]
})
