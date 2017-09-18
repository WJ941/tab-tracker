<template>
  <h1>TabTracker</h1>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    navigateTo: function (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
