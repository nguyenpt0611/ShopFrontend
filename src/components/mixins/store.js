import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isShowNav: true
  },
  mutations: {
    hidenav(state) {
      state.isShowNav = false
    }
  },
  actions: {
  }
})

export default store
