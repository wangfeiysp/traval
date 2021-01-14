import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/city',
      name: 'City',
      component: City
    },
    {
      path:'/detail/:id',//这里是动态路由的写法，前面必须满足/detail/
      name: 'Detail',
      component: Detail
    }
  ],
   // 这个意思是切换路由进入新页面的时候，每次都是从页面顶部开始；
   scrollBehavior(to, from, savedPosition) {
    return {x:0, y:0}
  }
})
