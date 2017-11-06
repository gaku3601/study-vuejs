<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ counter }}</h1>
    <button @click="add_counter()">増やす</button>
    <button @click="reduce_counter()">減らす</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([
      types.ADD_COUNTER,
      types.REDUCE_COUNTER
    ]),
    add_counter: function () {
      this.ADD_COUNTER(this.$store.state.counter + 1)
    },
    reduce_counter: function () {
      this.REDUCE_COUNTER()
    }
  },
  computed: {
    ...mapState(['counter'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
