import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      //使用import的异步组件加载的形式
      component: () => import('@/pages/home/home.vue')
    },
    {
      path:'/city',
      name: 'City',
      component: () => import('@/pages/city/City.vue')
    },
    {
      path:'/detail/:id',//这里是动态路由的写法，前面必须满足/detail/
      name: 'Detail',
      component: () => import('@/pages/detail/Detail.vue')
    }
  ],
   // 这个意思是切换路由进入新页面的时候，每次都是从页面顶部开始；
   scrollBehavior(to, from, savedPosition) {
    return {x:0, y:0}
  }
})
