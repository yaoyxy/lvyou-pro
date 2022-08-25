import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,  // 登录的用户名
  },
  getters: {
  },
  mutations: {
    updateUname(state, name){
      state.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})
