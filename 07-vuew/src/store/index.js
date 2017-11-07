import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'
import counter2 from './counter2'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    counter2
  }
})
