<template>
  <div class="container">
    <p></p>
    <input type="text" id="input">
    <button class="btn btn-info"  @click="hello">提交</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  methods: {
    hello () {
      this.$axios({
        url: 'api/hello',
        method: 'get'
      }).then(res => {
        console.log(res)
        alert(res.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
