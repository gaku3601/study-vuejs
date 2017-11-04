<template>
  <div class="child">
    <h1>これは子コンポーネントです。</h1>
    <button v-on:click="change">子Change!</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data () {
    return {
      childData: 'これは子コンポーネントで設定したデータです。'
    }
  },
  methods: {
    change: function () {
      this.$emit('send-child-data', this.childData)
    }
  }
}
</script>
