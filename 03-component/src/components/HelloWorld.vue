<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <OtherComponent :value="msg2" />
  </div>
</template>

<script>
import OtherComponent from './OtherComponent'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '子供コンポーネントの読み込みテスト',
      msg2: '子供コンポーネントへ渡す値です!'
    }
  },
  components: {
    OtherComponent
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
