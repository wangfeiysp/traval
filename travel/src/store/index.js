import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
  state,
  // actions:{
  //   // action方法接受两个参数，第一个是执行上下文，第二个是传入的参数
  //   changeCity(ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  getters:{
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
  //getter中类似于组件中的computed中的作用，用来计算一个数据
})