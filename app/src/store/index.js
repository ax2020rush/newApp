import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AnimationType: ''
  },
  mutations: {
    SET_TRANSITION: (state, ChangeAnimation) => {
      state.AnimationType = ChangeAnimation
    }
  },
  actions: {
    setTransition ({
      commit
    }, setTransitionType) {
      commit('SET_TRANSITION', setTransitionType)
    }
  },
  modules: {}
})
