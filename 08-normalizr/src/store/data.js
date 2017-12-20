export default{
  namespaced: true,
  state: {
    counter: 1
  },

  mutations: {
    updateCounter (state, payload) {
      state.counter = payload
    }
  },
  actions: {
    fetchData ({ commit }) {
      let data = [
        {
          'counter': 1,
          'building': [
            {'id': 1, 'name': 'test', 'tag': [{'id': 1, 'name': 'tag1'}]}
          ]
        }
      ]
      console.log(data[0].building[0].tag[0].name)
    }
  }
}
