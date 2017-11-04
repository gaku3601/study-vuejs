<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>message:{{ bindingMsg }}</h2>
    <input v-model="bindingMsg"></input>

    <h2>counter:{{ counter }}</h2>
    <button v-on:click='addCounter'>+</button>

    <h2>値渡し:{{value}}</h2>
    <button v-on:click="passByValue('引数を渡す')">引数で渡す方法</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bindingMsg: '',
      counter: 0,
      value: ''
    }
  },
  methods: {
    addCounter: function () {
      this.counter += 1
    },
    passByValue: function (message) {
      this.value = message
    }
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
