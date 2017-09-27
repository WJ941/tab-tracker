<template>
  <panel title="Tabs">
    <textarea>
      {{tab}}
    </textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'tab'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 100%;
  overflow: auto;
  height: 600px;
  border: none;
  border-style: none;
  padding: 40px;
  font-family: monospace; 
}
</style>
