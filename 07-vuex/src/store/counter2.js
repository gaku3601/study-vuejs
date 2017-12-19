import * as types from './mutation-types'
export default {
  state: {
    result: 1
  },
  actions: {
    [types.ADD_COUNTER2] ({ commit }, counter) {
      let newCounter = {
        result: counter
      }
      commit(types.COUNTER2, {
        data: newCounter
      })
    },
    [types.REDUCE_COUNTER2] ({ commit }) {
      let newCounter = {
        result: this.state.counter2.result - 1
      }
      commit(types.COUNTER2, {
        data: newCounter
      })
    }
  },
  mutations: {
    [types.COUNTER2] (state, payload) {
      state.result = payload.data.result
    }
  }
}
