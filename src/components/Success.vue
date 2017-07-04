<template>
    <div id="app">
      <h1>{{success}}{{msg}}</h1>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        success: this.$route.query.msg,
        msg: '!欢迎来到OA，开始你的梦想之旅吧!'
      }
    }
  }
</script>

<style lang="scss">

</style>
