import * as types from './mutation-types'
export default {
  state: {
    result: 1
  },
  actions: {
    [types.ADD_COUNTER] ({ commit }, counter) {
      let newCounter = {
        result: counter
      }
      commit(types.COUNTER, {
        data: newCounter
      })
    },
    [types.REDUCE_COUNTER] ({ commit }) {
      let newCounter = {
        result: this.state.counter.result - 1
      }
      commit(types.COUNTER, {
        data: newCounter
      })
    }
  },
  mutations: {
    [types.COUNTER] (state, payload) {
      state.result = payload.data.result
    }
  }
}
