import Vue from 'vue'
import Vuex from 'vuex'
import {counter} from './counter'
import {todos} from './todos'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    counter,
    todos
  }
})
