import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    childBanner: {},
    breadCrumb: [],
    aboutType: 'introduce'
  },
  mutations: {
    judgeIsMobile (state, type) {
      state.isMobile = type;
    },
    updateChildBanner (state, data) {
      state.childBanner = data
    },
    updateBreadCrumb (state, data) {
      state.breadCrumb = data
    },
    updateAboutType (state, type) {
      state.aboutType = type
    }
  },
  actions: {
  },
  modules: {
  }
})
