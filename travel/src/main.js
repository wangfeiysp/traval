// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
// 移动端1像素边框的问题？因为有的手机分辨率比较高，但是如果在页面上写border-bottom：1px；
//在1倍屏中是1px， 但是在2倍屏中是2px，所以需要解决这个问题；
import './assets/styles/border.css'

//移动端有300毫秒点击延迟的问题：在移动端的某些机型上，某些浏览器上，当使用click事件后，会延迟
//3000毫秒再执行，需要引入一个fastclick
import fastClcik from 'fastclick';
import 'styles/iconfont.css'

//vuex中存放的数据
import store from './store'

import 'babel-polyfill'



Vue.config.productionTip = false
fastClcik.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})//路由就是根据网址的不同，返回不同的内容给用户