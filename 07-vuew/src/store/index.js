import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    counter: 1
  },
  actions: {
    [types.ADD_COUNTER] ({ commit }, counter) {
      let newCounter = {
        counter: counter
      }
      commit(types.COUNTER, {
        data: newCounter
      })
    },
    [types.REDUCE_COUNTER] ({ commit }) {
      let newCounter = {
        counter: this.state.counter - 1
      }
      commit(types.COUNTER, {
        data: newCounter
      })
    }
  },
  mutations: {
    [types.COUNTER] (state, payload) {
      state.counter = payload.data.counter
    }
  }
})
