<template>
  <div class="other">
    <p>子供コンポーネント1だよ！</p>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'OtherComponent',
  props: [
    'value'
  ]
}
</script>
