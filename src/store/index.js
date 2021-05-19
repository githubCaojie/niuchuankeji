import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    updateIsMobileBoolean (state,Boolean) {
      state.isMobile = Boolean
    }
  },
  actions: {
  },
  modules: {
  }
})
